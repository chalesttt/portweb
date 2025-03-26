
import React from 'react';
import { Music, Book, GamepadIcon, Activity } from 'lucide-react';

const BeyondCoding = () => {
  const interests = [
    {
      icon: <Music className="h-5 w-5" />,
      title: "Music Production",
      description: "Creating electronic music and experimenting with different genres and sounds."
    },
    {
      icon: <Book className="h-5 w-5" />,
      title: "Reading",
      description: "Exploring science fiction, philosophy, and technical books to expand knowledge."
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: "Playing Basketball",
      description: "Playing basketball with friends and following professional basketball leagues."
    },
    {
      icon: <GamepadIcon className="h-5 w-5" />,
      title: "Video Games",
      description: "Playing video games, especially NBA2K, and participating in online tournaments."
    }
  ];

  return (
    <div className="opacity-0 animate-fadeIn animate-delay-400 section-container" style={{ backgroundColor: '#161616'}}>
      <h2 className="section-title">Beyond Coding</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interests.map((interest, index) => (
          <div key={index} className="glass-card p-4 flex items-start">
            <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
              {interest.icon}
            </div>
            <div>
              <h3 className="text-base font-medium mb-1">{interest.title}</h3>
              <p className="text-sm text-muted-foreground">{interest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondCoding;
