# 🅿️ GoPark: Smart Parking Management System

GoPark is designed to bridge the gap between drivers and property owners. By utilizing a dual-interface architecture, it provides a seamless booking experience for users and a high-tech monitoring suite for administrators.

---

## 🌟 Key Features

### 📱 For Drivers (Mobile-First)

- **Interactive Spot Selection**: Explore parking zones via a high-performance **Leaflet.js** map interface.
- **One-Tap Booking**: Streamlined reservation flow designed for on-the-go users.
- **Native Feel**: Fully installable on iOS and Android with offline support thanks to `next-pwa`.

### 🖥️ For Property Owners (Desktop)

- **CV Simulation Dashboard**: A sophisticated monitoring panel simulating CCTV analysis with dynamic bounding box overlays.
- **Live Occupancy Sync**: Watch "Real-Time" state updates as spots are booked, powered by **Zustand** global state.
- **Data Visualization**: At-a-glance metrics for parking lot health and turnover.

---

## 🛠️ Tech Stack

| Layer         | Technology                                     |
| ------------- | ---------------------------------------------- |
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/) |
| **Language**  | TypeScript (Strict Mode)                       |
| **Styling**   | Tailwind CSS & Framer Motion                   |
| **State**     | Zustand (Persistent State)                     |
| **Mapping**   | React Leaflet & OpenStreetMap                  |
| **Icons**     | Lucide React                                   |

---

## ⚡ Getting Started

### Prerequisites

- **Node.js**: 18.x or higher
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/amulbrar/gopark-demo.git
cd gopark-demo

```

2. **Install dependencies**

```bash
npm install

```

3. **Launch the environment**

```bash
npm run dev

```

4. **Access the App**
   Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.
