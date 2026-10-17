
import { ChevronDown, MapPin, Compass, Radar, Cpu, Target } from "lucide-react";
import { useState } from "react";
import AchievementsModal from "./AchievementsModal";

const Hero = () => {
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden tech-grid-bg">
      {/* Background tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-tech-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-float-delay opacity-70"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-tech-400 rounded-full animate-float-delay opacity-60"></div>
        
        {/* Radar sweep effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
          <div className="radar-sweep w-full h-full animate-rotate-slow"></div>
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgb(14, 165, 233)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              {/* Outer tech ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-tech-500 via-cyan-500 to-purple-600 rounded-full animate-pulse-glow opacity-75"></div>
              
              {/* Profile container */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-1 relative z-10 border-2 border-tech-500/30">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="/lovable-uploads/541a92d6-7f4b-4eb7-ae27-480fd7539d34.png" 
                    alt="Dr. Olayinka Nihinlola Dosumu" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-tech-400 to-transparent animate-scan opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Tech icons around the profile */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 p-3 rounded-full border border-tech-500/50 animate-float">
                <MapPin className="w-5 h-5 text-tech-400" />
              </div>
              
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-slate-800 p-3 rounded-full border border-cyan-500/50 animate-float-delay">
                <Compass className="w-5 h-5 text-cyan-400" />
              </div>
              
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-slate-800 p-3 rounded-full border border-purple-500/50 animate-float">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 p-3 rounded-full border border-tech-500/50 animate-float-delay">
                <Radar className="w-5 h-5 text-tech-400" />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-tech-500 to-cyan-500 text-white p-3 rounded-full shadow-lg border-2 border-slate-900">
                <Cpu className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-tech-500/30 mb-6">
                <span className="w-2 h-2 bg-tech-400 rounded-full animate-pulse"></span>
                <span className="text-tech-300 text-sm font-medium">Surveying &amp; Geospatial Innovation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-tech-200 to-cyan-200 bg-clip-text text-transparent">
                Dr. Dupe Nihinlola Olayinka-Dosunmu
              </h1>
              
              <div className="text-xl lg:text-2xl text-tech-300 font-semibold mb-4">
                Rector, Federal School of Surveying, Oyo
              </div>
              
              <div className="text-lg text-cyan-200 mb-2 font-medium">GEOSON President</div>
              
              <div className="text-lg text-purple-200 mb-6">
                First Female Rector • Academic Leader • Innovation Champion
              </div>
            </div>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Pioneering educational excellence and institutional transformation since December 2018. 
              Leading the charge in modernizing surveying education through innovative programs in 
              cartography, GIS, photogrammetry, and AI integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setAchievementsOpen(true)}
                className="bg-gradient-to-r from-tech-500 to-cyan-500 hover:from-tech-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-tech-500/30"
              >
                View Achievements
              </button>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
              <div className="bg-slate-800/60 p-4 rounded-xl border border-tech-500/20 text-center">
                <div className="text-2xl font-bold text-tech-400">2018</div>
                <div className="text-sm text-gray-400">Since Tenure</div>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl font-bold text-cyan-400">1st</div>
                <div className="text-sm text-gray-400">Female Rector</div>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-xl border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">GIS</div>
                <div className="text-sm text-gray-400">Innovation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-tech-400 opacity-70" />
        </div>
      </div>
      
      <AchievementsModal 
        open={achievementsOpen} 
        onOpenChange={setAchievementsOpen} 
      />
    </section>
  );
};

export default Hero;
