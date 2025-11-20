import React from 'react';

interface HeroProps {
  onStartMeditating: () => void;
  onExploreSessions?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartMeditating,
  onExploreSessions,
}) => {
  return (
    <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-12">
      {/* Background Image */}
      <img
        src="https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667333214_dd4d759e.webp"
        alt="Peaceful meditation"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        {/* Pulsing & Floating Circle */}
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-white/30 flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full border-4 border-white/50"></div>
          </div>
        </div>

        {/* Heading & Description */}
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif animate-float-slow">
          Find Your Inner Peace
        </h1>
        <p className="text-lg md:text-2xl text-indigo-100 mb-8 max-w-2xl animate-float-slower">
          Guided meditations for sleep, focus, anxiety relief, and gratitude
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 animate-float-slower">
          <button
            onClick={onStartMeditating}
            className="bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl"
            aria-label="Begin Your Meditation Journey"
          >
            Begin Your Journey
          </button>
          <button
            onClick={onExploreSessions || onStartMeditating}
            className="bg-indigo-600/50 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-600/70 transition-all border-2 border-white/30"
            aria-label="Explore Meditation Sessions"
          >
            Explore Sessions
          </button>
        </div>
      </div>
    </div>
  );
};
