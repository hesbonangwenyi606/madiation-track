export interface Meditation {
  id: string;
  title: string;
  instructor: string;
  duration: number;
  category: string;
  difficulty: string;
  description: string;
  image: string;
  audioUrl?: string;
}

export const meditations: Meditation[] = [
  {
    id: '1',
    title: 'Morning Awakening',
    instructor: 'Sarah Chen',
    duration: 10,
    category: 'focus',
    difficulty: 'beginner',
    description: 'Start your day with clarity and intention',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667334099_bf6719fd.webp'
  },
  {
    id: '2',
    title: 'Deep Sleep Journey',
    instructor: 'Michael Rivers',
    duration: 30,
    category: 'sleep',
    difficulty: 'beginner',
    description: 'Drift into peaceful, restorative sleep',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667336091_7eb5556e.webp'
  },
  {
    id: '3',
    title: 'Anxiety Relief',
    instructor: 'Emma Stone',
    duration: 15,
    category: 'anxiety',
    difficulty: 'beginner',
    description: 'Find calm in moments of stress',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667338021_f1e51aed.webp'
  },
  {
    id: '4',
    title: 'Gratitude Practice',
    instructor: 'David Park',
    duration: 10,
    category: 'gratitude',
    difficulty: 'beginner',
    description: 'Cultivate appreciation and joy',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667339984_5d89b5c8.webp'
  },
  {
    id: '5',
    title: 'Focus Flow',
    instructor: 'Sarah Chen',
    duration: 20,
    category: 'focus',
    difficulty: 'intermediate',
    description: 'Enhance concentration and productivity',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667341001_01f5bb4f.webp'
  },
  {
    id: '6',
    title: 'Body Scan Relaxation',
    instructor: 'Lisa Wong',
    duration: 25,
    category: 'sleep',
    difficulty: 'intermediate',
    description: 'Release tension from head to toe',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667343004_6009ac0f.webp'
  },
  {
    id: '7',
    title: 'Breath Awareness',
    instructor: 'Michael Rivers',
    duration: 5,
    category: 'anxiety',
    difficulty: 'beginner',
    description: 'Quick reset for busy moments',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667345165_afe6566c.webp'
  },
  {
    id: '8',
    title: 'Loving Kindness',
    instructor: 'Emma Stone',
    duration: 15,
    category: 'gratitude',
    difficulty: 'intermediate',
    description: 'Extend compassion to yourself and others',
    image: 'https://d64gsuwffb70l.cloudfront.net/691f6d268b5a2e2ea13682d4_1763667347152_bc72c870.webp'
  }
];
