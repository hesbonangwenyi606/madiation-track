import React from 'react';

interface ProgressData {
  totalMinutes: number;
  streak: number;
  sessionsCompleted: number;
  weeklyMinutes: number[];
}

interface ProgressDashboardProps {
  progress: ProgressData;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ progress }) => {
  const maxWeekly = Math.max(...progress.weeklyMinutes, 1);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Progress</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-4xl font-bold text-indigo-600 mb-2">{progress.totalMinutes}</div>
          <div className="text-gray-600 font-semibold">Total Minutes</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-4xl font-bold text-purple-600 mb-2">{progress.streak}</div>
          <div className="text-gray-600 font-semibold">Day Streak</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="text-4xl font-bold text-pink-600 mb-2">{progress.sessionsCompleted}</div>
          <div className="text-gray-600 font-semibold">Sessions Completed</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Activity</h3>
        <div className="flex items-end justify-between gap-2 h-48">
          {progress.weeklyMinutes.map((minutes, index) => {
            const height = (minutes / maxWeekly) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '100%' }}>
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg transition-all duration-500"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 font-semibold">{days[index]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
