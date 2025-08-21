import { ReactNode } from 'react';

interface ComicPanelProps {
  title?: string;
  children: ReactNode;
  rotate?: 'left' | 'right' | 'none';
  variant?: 'primary' | 'secondary' | 'accent';
}

const ComicPanel = ({
  title,
  children,
  rotate = 'none',
  variant = 'primary'
}: ComicPanelProps) => {
  // Rotation classes
  const rotateClasses = {
    left: 'transform -rotate-1',
    right: 'transform rotate-1',
    none: ''
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'border-primary-600 bg-primary-900/20',
    secondary: 'border-secondary-600 bg-secondary-900/20',
    accent: 'border-accent-600 bg-accent-900/20'
  };
  
  return (
    <div 
      className={`comic-panel relative p-6 border-4 shadow-md ${rotateClasses[rotate]} ${variantClasses[variant]}`}
    >
      {title && (
        <div className="absolute -top-4 left-4 bg-white text-black px-4 py-1 font-bold border-2 border-black transform -rotate-2">
          {title}
        </div>
      )}
      <div className="relative z-10 text-white">
        {children}
      </div>
      
      {/* Comic-style dots overlay */}
      <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
      </div>
    </div>
  );
};

export default ComicPanel;
