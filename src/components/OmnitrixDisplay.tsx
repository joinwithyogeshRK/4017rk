import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface OmnitrixDisplayProps {
  size?: 'sm' | 'md' | 'lg';
  pulseEffect?: boolean;
}

const OmnitrixDisplay = ({ size = 'md', pulseEffect = true }: OmnitrixDisplayProps) => {
  const [isActive, setIsActive] = useState(false);
  
  // Size classes
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  // Icon size classes
  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };
  
  // Toggle active state every 3 seconds if pulse effect is enabled
  useEffect(() => {
    if (!pulseEffect) return;
    
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [pulseEffect]);
  
  return (
    <div 
      className={`${sizeClasses[size]} rounded-omnitrix relative flex items-center justify-center ${pulseEffect ? 'glow-effect' : ''}`}
    >
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-omnitrix border-4 border-secondary-800 bg-gradient-to-r from-primary-800 to-primary-600"></div>
      
      {/* Inner circle */}
      <div className="absolute inset-2 rounded-omnitrix bg-black flex items-center justify-center">
        {/* Omnitrix symbol */}
        <div 
          className={`${iconSizeClasses[size]} rounded-omnitrix bg-primary flex items-center justify-center transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}
        >
          <Zap className="text-white" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-secondary-400"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-secondary-400"></div>
      <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-secondary-400"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-secondary-400"></div>
    </div>
  );
};

export default OmnitrixDisplay;
