import { create } from "zustand";

interface ParkState {
  availableSlots: number;
  isSpotBooked: boolean;
  bookSpot: () => void;
  resetSpot: () => void;
}

export const useStore = create<ParkState>((set) => ({
  availableSlots: 138, // Matches the pitch deck screenshot
  isSpotBooked: false,
  bookSpot: () =>
    set((state) => ({
      isSpotBooked: true,
      availableSlots: state.availableSlots - 1,
    })),
  resetSpot: () =>
    set((state) => ({
      isSpotBooked: false,
      availableSlots: state.availableSlots + 1,
    })),
}));
