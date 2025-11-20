import React, { useState, useRef } from 'react';
import { Hero } from './Hero';
import { FilterBar } from './FilterBar';
import { MeditationCard } from './MeditationCard';
import { AudioPlayer } from './AudioPlayer';
import { ProgressDashboard } from './ProgressDashboard';
import { meditations } from '../data/meditations';
import { moreMeditations } from '../data/moreMeditations';
import { useProgress } from '../hooks/useProgress';

export default function AppLayout() {
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [currentMeditation, setCurrentMeditation] = useState<any>(null);
  const [showProgress, setShowProgress] = useState(false);
  const sessionsRef = useRef<HTMLDivElement>(null);

  const { progress, addSession, toggleFavorite } = useProgress();

  const allMeditations = [...meditations, ...moreMeditations];

  const filteredMeditations = allMeditations.filter((med) => {
    if (selectedDuration !== 'all' && med.duration !== parseInt(selectedDuration)) return false;
    if (selectedCategory !== 'all' && med.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && med.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const handleStartMeditating = () => {
    sessionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleComplete = (duration: number) => {
    addSession(duration);
    setCurrentMeditation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full"></div>
              <span className="text-2xl font-bold text-gray-900">Serenity</span>
            </div>
            <div className="flex gap-6">
              <button onClick={() => setShowProgress(!showProgress)} className="text-gray-700 hover:text-indigo-600 font-semibold">
                Progress
              </button>
              <button className="text-gray-700 hover:text-indigo-600 font-semibold">Library</button>
              <button className="text-gray-700 hover:text-indigo-600 font-semibold">Profile</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Hero onStartMeditating={handleStartMeditating} />

        {showProgress && <ProgressDashboard progress={progress} />}

        <div ref={sessionsRef}>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Guided Sessions</h2>
          <FilterBar
            selectedDuration={selectedDuration}
            selectedCategory={selectedCategory}
            selectedDifficulty={selectedDifficulty}
            onDurationChange={setSelectedDuration}
            onCategoryChange={setSelectedCategory}
            onDifficultyChange={setSelectedDifficulty}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredMeditations.map((meditation) => (
              <MeditationCard
                key={meditation.id}
                meditation={meditation}
                onPlay={setCurrentMeditation}
                isFavorite={progress.favorites.includes(meditation.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </div>

      {currentMeditation && (
        <AudioPlayer
          meditation={currentMeditation}
          onClose={() => setCurrentMeditation(null)}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}
