🧘‍♂️ madiation-track

A modern React + TypeScript + Vite application styled with TailwindCSS.
This project is built to be fast, scalable, and easy to extend — ideal for tracking meditation sessions or building any wellness-related dashboard.

### Features
⚛️ React + TypeScript

**Vite for lightning-fast dev environment**

**TailwindCSS pre-configured**

**Hot Module Replacement (HMR)**

**ESLint setup with recommended rules**

## Project Structure
madiation-track/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts

## Tech Stack
Tool	Purpose
React	UI development
TypeScript	Strong typing
Vite	Build tool & dev server
TailwindCSS	Utility-first styling
ESLint	Code quality and linting

## Installation
Make sure you have Node.js 16+ installed.

git clone https://github.com/your-username/madiation-track.git
cd madiation-track
npm install

## Development Server

Start the app locally:

npm run dev


Default URL:

http://localhost:5173

## Build for Production
npm run build

## Preview Production Build
npm run preview
## Styling (TailwindCSS)

Tailwind config file:

tailwind.config.ts


Main CSS entry:

src/index.css


Example usage:

<div className="p-4 bg-blue-500 text-white rounded-xl">
  Hello Meditation Tracker
</div>

## Creating Components

Add components inside:

src/components/


Example component:

export const Card = () => {
  return (
    <div className="p-4 rounded-lg shadow bg-white">
      Meditation Session
    </div>
  );
};

## Linting

Run the linter:

npm run lint
