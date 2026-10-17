import { useState } from 'react';
import { supabase, supabaseUrl } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  onSuccess: () => void;
}

export const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      onSuccess();
      toast({
        title: "Success",
        description: "Logged in successfully!",
      });
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      const isNetworkFail =
        typeof msg === "string" &&
        (msg.toLowerCase().includes("failed to fetch") ||
          msg.toLowerCase().includes("networkerror") ||
          msg.toLowerCase().includes("load failed"));

      toast({
        title: "Error",
        description: isNetworkFail
          ? `Network error talking to Supabase (Failed to fetch). URL: ${supabaseUrl}. Check ad-block/VPN, firewall/DNS filtering, and browser console for CORS details.`
          : msg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Sign in to manage awards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Loading...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};