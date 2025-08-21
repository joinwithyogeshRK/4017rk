import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface GameModeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: string;
  imageUrl: string;
}

const GameModeCard = ({
  title,
  description,
  icon,
  difficulty,
  players,
  imageUrl
}: GameModeCardProps) => {
  // Determine difficulty color
  const difficultyColor = {
    Easy: 'bg-success text-success-foreground',
    Medium: 'bg-warning text-warning-foreground',
    Hard: 'bg-error text-error-foreground'
  }[difficulty];

  return (
    <Card className="game-mode-card overflow-hidden border-primary/20 bg-black/40 backdrop-blur-sm text-white hover:shadow-[0_0_15px_rgba(0,166,81,0.3)] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex space-x-2">
          <span className={`text-xs px-2 py-1 rounded ${difficultyColor}`}>
            {difficulty}
          </span>
          <span className="text-xs px-2 py-1 rounded bg-secondary/70 text-white">
            {players}
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-accent hover:bg-accent-600 text-accent-foreground flex items-center justify-center gap-2">
          <Play className="h-4 w-4" />
          Play Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameModeCard;
