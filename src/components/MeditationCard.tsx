import React from 'react';
import { Meditation } from '../data/meditations';

interface MeditationCardProps {
  meditation: Meditation;
  onPlay: (meditation: Meditation) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const MeditationCard: React.FC<MeditationCardProps> = ({
  meditation,
  onPlay,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={meditation.image}
          alt={meditation.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleFavorite(meditation.id)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
        >
          <svg
            className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            {meditation.category}
          </span>
          <span className="text-xs text-gray-500">{meditation.duration} min</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{meditation.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{meditation.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{meditation.instructor}</span>
          <button
            onClick={() => onPlay(meditation)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};
