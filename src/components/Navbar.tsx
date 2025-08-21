import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Watch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary-900 to-secondary-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="omnitrix-dial glow-effect w-10 h-10 flex items-center justify-center">
              <Watch className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">Ben 10 Game</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-accent transition-colors ${isActive('/') ? 'text-accent font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/game-modes" 
              className={`hover:text-accent transition-colors ${isActive('/game-modes') ? 'text-accent font-bold' : ''}`}
            >
              Game Modes
            </Link>
            <Link 
              to="/alien-roster" 
              className={`hover:text-accent transition-colors ${isActive('/alien-roster') ? 'text-accent font-bold' : ''}`}
            >
              Alien Roster
            </Link>
            <Link 
              to="/leaderboards" 
              className={`hover:text-accent transition-colors ${isActive('/leaderboards') ? 'text-accent font-bold' : ''}`}
            >
              Leaderboards
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-primary text-white hover:bg-primary-600 border-primary-400"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent-600">
              Play Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button 
              variant="ghost" 
              className="text-white" 
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 flex flex-col">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded hover:bg-primary-700 ${isActive('/') ? 'bg-primary-800' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/game-modes" 
              className={`px-3 py-2 rounded hover:bg-primary-700 ${isActive('/game-modes') ? 'bg-primary-800' : ''}`}
              onClick={closeMenu}
            >
              Game Modes
            </Link>
            <Link 
              to="/alien-roster" 
              className={`px-3 py-2 rounded hover:bg-primary-700 ${isActive('/alien-roster') ? 'bg-primary-800' : ''}`}
              onClick={closeMenu}
            >
              Alien Roster
            </Link>
            <Link 
              to="/leaderboards" 
              className={`px-3 py-2 rounded hover:bg-primary-700 ${isActive('/leaderboards') ? 'bg-primary-800' : ''}`}
              onClick={closeMenu}
            >
              Leaderboards
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent-600 w-full">
              Play Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
