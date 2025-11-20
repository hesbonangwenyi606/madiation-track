import React from 'react';
import { Hero } from './Hero';

interface MeditationCategory {
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  name: string;
  message: string;
  avatar: string;
}

const meditationCategories: MeditationCategory[] = [
  {
    title: 'Sleep',
    description: 'Relax and drift into deep sleep with guided sessions.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    title: 'Focus',
    description: 'Enhance concentration and productivity.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  },
  {
    title: 'Anxiety Relief',
    description: 'Calm your mind and reduce stress.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Samantha R.',
    message:
      'This app transformed my nights! I fall asleep faster and feel more relaxed.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'James K.',
    message: 'Focus sessions keep me on track during work hours. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export const LandingPage: React.FC = () => {
  const handleStartMeditation = () => {
    console.log('Meditation started');
  };

  const handleExploreSessions = () => {
    console.log('Exploring sessions');
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
      <Hero
        onStartMeditating={handleStartMeditation}
        onExploreSessions={handleExploreSessions}
      />

      {/* Meditation Categories */}
      <section className="py-16 px-6 md:px-12 bg-indigo-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Meditation Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meditationCategories.map((cat, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold">{cat.title}</h3>
                <p className="text-white/90 mt-2">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Track Your Progress
        </h2>
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Monitor your meditation streaks and growth over time. Celebrate your
          milestones!
        </p>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center justify-around gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">12</p>
            <p className="text-gray-600">Sessions Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">7</p>
            <p className="text-gray-600">Days Streak</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">3h 45m</p>
            <p className="text-gray-600">Meditation Time</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 bg-indigo-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg flex gap-4 items-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-700">{t.message}</p>
                <p className="mt-2 font-bold text-indigo-600">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Guided Meditation Tracker. All rights
        reserved.
      </footer>
    </div>
  );
};
