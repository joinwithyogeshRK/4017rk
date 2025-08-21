import { ReactNode } from 'react';

interface SpeechBubbleProps {
  children: ReactNode;
  position?: 'left' | 'right';
  character?: string;
  characterImage?: string;
}

const SpeechBubble = ({
  children,
  position = 'left',
  character,
  characterImage
}: SpeechBubbleProps) => {
  return (
    <div className={`flex items-end gap-2 my-4 ${position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Character image */}
      {characterImage && (
        <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
          <img 
            src={characterImage} 
            alt={character || 'Character'} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="flex flex-col max-w-[80%]">
        {/* Character name */}
        {character && (
          <span className="text-sm font-bold mb-1 text-primary-300">{character}</span>
        )}
        
        {/* Speech bubble */}
        <div 
          className={`comic-speech-bubble relative bg-white text-black p-4 rounded-lg border-2 border-black ${position === 'right' ? 'rounded-tr-none' : 'rounded-tl-none'}`}
        >
          {/* Bubble pointer */}
          <div 
            className={`absolute top-0 ${position === 'right' ? 'right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45' : 'left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45'} w-4 h-4 bg-white border-2 border-black`}
          ></div>
          
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechBubble;
