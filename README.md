# GoPark - Smart Parking Management System

GoPark is a modern Progressive Web App (PWA) designed to demonstrate a seamless parking reservation ecosystem. It features a dual-interface architecture: a mobile-first app for drivers to book spots and a desktop dashboard for property owners to monitor occupancy via simulated computer vision.

## 🚀 Key Features

- **Real-Time Availability Sync**: Instant state synchronization between the driver's booking interface and the owner's dashboard using global state management.
- **Interactive Maps**: Fully functional map interface using Leaflet.js and OpenStreetMap for spot selection.
- **Computer Vision Simulation**: A dashboard component that simulates CCTV feed analysis with bounding box overlays to track vehicle occupancy.
- **PWA Support**: configured with `next-pwa` for installation on mobile devices (iOS/Android) with offline capabilities.
- **Responsive UI**: Built with Tailwind CSS and a component-first architecture for pixel-perfect rendering across devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚡ Getting Started

**Prerequisites**

- Node.js 18.x or higher
- npm or yarn

**Installation**

- Clone the repository:

`git clone [https://github.com/yourusername/gopark-demo.git](https://github.com/amulbrar/gopark-demo.git)`

`cd gopark-demo`

- Install dependencies:

`npm install`

- Run the development server:

`npm run dev`

Open http://localhost:3000 in your browser.
