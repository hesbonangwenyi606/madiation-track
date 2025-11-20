import { useState, useEffect } from 'react';

interface ProgressData {
  totalMinutes: number;
  streak: number;
  sessionsCompleted: number;
  weeklyMinutes: number[];
  favorites: string[];
  lastSessionDate: string | null;
}

const STORAGE_KEY = 'meditation_progress';

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return {
      totalMinutes: 0,
      streak: 0,
      sessionsCompleted: 0,
      weeklyMinutes: [0, 0, 0, 0, 0, 0, 0],
      favorites: [],
      lastSessionDate: null,
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const addSession = (duration: number) => {
    const today = new Date().toDateString();
    const dayOfWeek = new Date().getDay();
    const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    setProgress((prev) => {
      const newWeeklyMinutes = [...prev.weeklyMinutes];
      newWeeklyMinutes[adjustedDay] += duration;

      let newStreak = prev.streak;
      if (prev.lastSessionDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (prev.lastSessionDate === yesterday.toDateString()) {
          newStreak += 1;
        } else if (prev.lastSessionDate === null || prev.lastSessionDate === today) {
          newStreak = 1;
        } else {
          newStreak = 1;
        }
      }

      return {
        ...prev,
        totalMinutes: prev.totalMinutes + duration,
        sessionsCompleted: prev.sessionsCompleted + 1,
        weeklyMinutes: newWeeklyMinutes,
        streak: newStreak,
        lastSessionDate: today,
      };
    });
  };

  const toggleFavorite = (id: string) => {
    setProgress((prev) => ({
      ...prev,
      favorites: prev.favorites.includes(id)
        ? prev.favorites.filter((fav) => fav !== id)
        : [...prev.favorites, id],
    }));
  };

  return {
    progress,
    addSession,
    toggleFavorite,
  };
};
