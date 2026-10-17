-- Only listed admin emails may change awards or award images.
-- Before this migration, ANY signed-in user could insert/update/delete.

CREATE TABLE IF NOT EXISTS public.admin_emails (
  email TEXT PRIMARY KEY
);
ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;
-- No policies on purpose: the table is not readable/writable from the client.

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_emails
    WHERE lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- Replace the permissive awards policies
DROP POLICY IF EXISTS "Authenticated users can insert awards" ON public.awards;
DROP POLICY IF EXISTS "Authenticated users can update awards" ON public.awards;
DROP POLICY IF EXISTS "Authenticated users can delete awards" ON public.awards;

CREATE POLICY "Admins can insert awards" ON public.awards
  FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update awards" ON public.awards
  FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Admins can delete awards" ON public.awards
  FOR DELETE TO authenticated USING (public.is_admin());

-- Replace the permissive storage policies
DROP POLICY IF EXISTS "Authenticated users can upload award images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update award images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete award images" ON storage.objects;

CREATE POLICY "Admins can upload award images" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'award-images' AND public.is_admin());
CREATE POLICY "Admins can update award images" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'award-images' AND public.is_admin());
CREATE POLICY "Admins can delete award images" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'award-images' AND public.is_admin());

-- AwardsList subscribes to realtime changes; the table must be in the publication.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'awards'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.awards;
  END IF;
END $$;

-- AFTER RUNNING THIS, add yourself as admin (use YOUR login email):
--   INSERT INTO public.admin_emails (email) VALUES ('you@example.com');
