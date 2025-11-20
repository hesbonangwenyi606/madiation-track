import React, { useState, useEffect } from 'react';
import { Meditation } from '../data/meditations';

interface AudioPlayerProps {
  meditation: Meditation;
  onClose: () => void;
  onComplete: (duration: number) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ meditation, onClose, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalTime = meditation.duration * 60;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < totalTime) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev + 1 >= totalTime) {
            setIsPlaying(false);
            onComplete(meditation.duration);
            return totalTime;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, totalTime, meditation.duration, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / totalTime) * 100;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl max-w-2xl w-full p-8 shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{meditation.title}</h2>
            <p className="text-indigo-200">{meditation.instructor}</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
            <div className={`w-40 h-40 rounded-full border-4 border-white/30 ${isPlaying ? 'animate-pulse' : ''}`}></div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-white/80 mb-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 transition-all" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white text-indigo-900 rounded-full p-4 hover:bg-indigo-50 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
