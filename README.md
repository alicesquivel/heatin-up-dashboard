# Heatin-Up Dashboard

**Heatin-Up** is a lightweight, data-driven monitoring dashboard designed to visualize **real-time heat safety conditions** across multiple athletic fields or outdoor environments.  
Built with **React + Vite + Tailwind CSS**, it emphasizes clarity, accessibility, and responsive performance for quick situational awareness.

---

## Features

- **Field-Specific Monitoring:** Compare temperature, humidity, wind, and heat index across multiple fields.  
- **Dynamic Alerts:** Displays “Extreme Caution” advisories with practical, actionable guidance.  
- **Interactive Visualization:** SVG-based chart showing short-term (2-hour) heat trends.  
- **Lightweight Deployment:** Runs fully client-side with no external APIs or databases.  
- **Modern UI:** Clean and responsive layout built using Tailwind v4 and React components.

---

## Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS (v4)  
- **Icons and Visualization:** Inline SVG + custom chart components  
- **Deployment Options:** Local development or static build (`vite build`)

---

## Getting Started

### Prerequisites
- Node.js v20.19+ or v22+
- npm v9+

### Installation
```bash
# Clone the repository
git clone https://github.com/alicesquivel/heatin-up-dashboard.git
cd heatin-up-dashboard

# Install dependencies
npm install

# Start local development
npm run dev
