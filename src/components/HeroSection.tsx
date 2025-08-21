import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Zap, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-secondary-900/80 z-0"></div>
      
      {/* Hero content */}
      <div className="hero-content relative z-10">
        <h1 className="hero-title hero-appear text-5xl md:text-7xl font-extrabold text-white mb-4">
          Ben 10 Ultimate Alien Force
        </h1>
        <p className="hero-subtitle hero-appear animation-delay-100 text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Transform into powerful aliens and save the universe from evil threats
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 hero-appear animation-delay-200">
          <Button 
            className="action-button bg-accent hover:bg-accent-600 text-accent-foreground text-lg px-8 py-6 flex items-center gap-2"
            onClick={() => window.open('#', '_blank')}
          >
            <Play className="h-5 w-5" />
            Play Now
          </Button>
          <Button 
            variant="outline" 
            className="action-button-secondary border-secondary-400 text-white hover:bg-secondary-700 text-lg px-8 py-6 flex items-center gap-2"
            onClick={() => navigate('/alien-roster')}
          >
            View Aliens
          </Button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 hero-appear animation-delay-300">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/30 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Alien Powers</h3>
            <p className="text-gray-300">Unlock and master the unique abilities of over 10 different alien forms</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/30 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Epic Battles</h3>
            <p className="text-gray-300">Fight against powerful villains and save the universe from destruction</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/30 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Leaderboards</h3>
            <p className="text-gray-300">Compete with players worldwide and climb to the top of the rankings</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
