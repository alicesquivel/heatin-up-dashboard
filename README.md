Heatin-Up Dashboard

Heatin-Up is a lightweight, data-driven monitoring dashboard designed to visualize real-time heat safety conditions across multiple athletic fields or outdoor environments.
Built with React + Vite + Tailwind CSS, the dashboard emphasizes clarity, accessibility, and responsive performance for quick situational awareness.

Features

Field-Specific Monitoring: Compare temperature, humidity, wind, and heat index across multiple fields.

Dynamic Alerts: Displays “Extreme Caution” advisories with practical, actionable guidance.

Interactive Visualization: SVG-based chart showing short-term (2-hour) heat trends.

Lightweight Deployment: Runs fully client-side with no external APIs or databases.

Modern UI: Clean and responsive layout built using Tailwind v4 and React components.

Tech Stack

Frontend: React + Vite

Styling: Tailwind CSS (v4)

Icons and Visualization: Inline SVG + custom chart components

Deployment Options: Local development or static site build (vite build)

Getting Started
Prerequisites

Node.js v20.19+ or v22+

npm v9+

Installation
# Clone the repository
git clone https://github.com/alicesquivel/heatin-up-dashboard.git
cd heatin-up-dashboard

# Install dependencies
npm install

# Start local development
npm run dev


Then open your browser and go to:

http://localhost:5173

Building for Production

To generate an optimized build:

npm run build
npm run preview


The app will be available at:

http://localhost:4173

Project Structure
heatin-up-dashboard/
├── public/                # Static assets
├── src/
│   ├── App.jsx            # Main dashboard component
│   ├── main.jsx           # React root and entry point
│   └── index.css          # Tailwind CSS imports
├── vite.config.js         # Vite configuration
├── package.json
└── README.md

Purpose

This project was created as a demo UI for monitoring field conditions under heat stress scenarios.
It demonstrates best practices in component-based UI design, responsive visualization, and real-time awareness for athletic or environmental safety applications.

License

This repository is distributed under the MIT License.
You are free to use, modify, and distribute this project for educational or research purposes.
