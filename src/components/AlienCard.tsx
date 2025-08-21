import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface AlienCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  powers: string[];
  stats: {
    strength: number;
    speed: number;
    defense: number;
    intelligence: number;
  };
}

const AlienCard = ({ id, name, image, description, powers, stats }: AlienCardProps) => {
  const [isTransforming, setIsTransforming] = useState(false);

  const handleTransform = () => {
    setIsTransforming(true);
    setTimeout(() => setIsTransforming(false), 1500);
  };

  return (
    <>
      <Card className={`alien-card bg-black/40 backdrop-blur-sm border-primary/20 text-white overflow-hidden ${isTransforming ? 'transform-effect' : ''}`}>
        <div className="relative h-48 overflow-hidden group">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-2 right-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
              {id}
            </span>
          </div>
        </div>
        
        <CardHeader className="alien-card-header bg-gradient-to-r from-primary-900 to-primary-700 pb-2">
          <CardTitle className="text-xl">{name}</CardTitle>
        </CardHeader>
        
        <CardContent className="pt-4">
          <CardDescription className="text-gray-300 mb-4 line-clamp-2">
            {description}
          </CardDescription>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {Object.entries(stats).map(([stat, value]) => (
              <div key={stat} className="character-stat">
                <span className="capitalize text-sm">{stat}</span>
                <span className="text-sm font-medium">{value}/10</span>
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={handleTransform}
          >
            <Zap className="h-4 w-4 mr-1" /> Transform
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Info className="h-4 w-4 mr-1" /> Details
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card text-card-foreground border-primary/20 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Alien #{id} in the Omnitrix
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-foreground">{description}</p>
                <div>
                  <h4 className="font-bold mb-2">Powers:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {powers.map((power, index) => (
                      <li key={index}>{power}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Stats:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(stats).map(([stat, value]) => (
                      <div key={stat} className="character-stat">
                        <span className="capitalize">{stat}</span>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(value / 10) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </>
  );
};

export default AlienCard;
