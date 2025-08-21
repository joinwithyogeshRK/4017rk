import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import GameModesPage from '@/pages/GameModesPage';
import AlienRoster from '@/pages/AlienRoster';
import Leaderboards from '@/pages/Leaderboards';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-modes" element={<GameModesPage />} />
          <Route path="/alien-roster" element={<AlienRoster />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
