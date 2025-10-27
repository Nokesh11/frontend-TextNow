import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark',  // Start dark—matches your bg-slate-900
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'chatify-theme' }
  )
);