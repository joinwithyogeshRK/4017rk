import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Trophy, Medal, Award } from 'lucide-react';

interface Player {
  rank: number;
  name: string;
  score: number;
  level: number;
  aliens: number;
  lastPlayed: string;
}

interface LeaderboardTableProps {
  players: Player[];
}

type SortField = 'rank' | 'score' | 'level' | 'aliens';
type SortDirection = 'asc' | 'desc';

const LeaderboardTable = ({ players: initialPlayers }: LeaderboardTableProps) => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to ascending
      setSortField(field);
      setSortDirection('asc');
    }

    // Sort the players
    const sortedPlayers = [...players].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setPlayers(sortedPlayers);
  };

  const getSortIcon = (field: SortField) => {
    if (field !== sortField) return null;
    
    return sortDirection === 'asc' 
      ? <ChevronUp className="h-4 w-4 ml-1" /> 
      : <ChevronDown className="h-4 w-4 ml-1" />;
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg border border-primary/20 overflow-hidden">
      <Table>
        <TableHeader className="bg-primary-900">
          <TableRow>
            <TableHead className="text-white font-bold w-16">
              <Button 
                variant="ghost" 
                className="text-white font-bold p-0 hover:bg-transparent flex items-center"
                onClick={() => handleSort('rank')}
              >
                Rank {getSortIcon('rank')}
              </Button>
            </TableHead>
            <TableHead className="text-white font-bold">Player</TableHead>
            <TableHead className="text-white font-bold">
              <Button 
                variant="ghost" 
                className="text-white font-bold p-0 hover:bg-transparent flex items-center"
                onClick={() => handleSort('score')}
              >
                Score {getSortIcon('score')}
              </Button>
            </TableHead>
            <TableHead className="text-white font-bold">
              <Button 
                variant="ghost" 
                className="text-white font-bold p-0 hover:bg-transparent flex items-center"
                onClick={() => handleSort('level')}
              >
                Level {getSortIcon('level')}
              </Button>
            </TableHead>
            <TableHead className="text-white font-bold">
              <Button 
                variant="ghost" 
                className="text-white font-bold p-0 hover:bg-transparent flex items-center"
                onClick={() => handleSort('aliens')}
              >
                Aliens {getSortIcon('aliens')}
              </Button>
            </TableHead>
            <TableHead className="text-white font-bold">Last Played</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow 
              key={player.rank} 
              className={`${player.rank <= 3 ? 'bg-primary-900/10' : ''} hover:bg-primary-900/20`}
            >
              <TableCell className="font-medium">
                <div className="flex items-center">
                  {getRankIcon(player.rank)}
                  <span className={player.rank <= 3 ? 'ml-1 font-bold' : ''}>{player.rank}</span>
                </div>
              </TableCell>
              <TableCell className="font-bold">{player.name}</TableCell>
              <TableCell>{player.score.toLocaleString()}</TableCell>
              <TableCell>{player.level}</TableCell>
              <TableCell>{player.aliens}</TableCell>
              <TableCell>{player.lastPlayed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
