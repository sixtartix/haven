import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  username: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  login: () => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: () => {
        const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
        const REDIRECT_URI = `${window.location.origin}/auth/callback`;
        
        const params = new URLSearchParams({
          client_id: DISCORD_CLIENT_ID,
          redirect_uri: REDIRECT_URI,
          response_type: 'code',
          scope: 'identify',
        });

        window.location.href = `https://discord.com/api/oauth2/authorize?${params}`;
      },
      logout: () => {
        localStorage.removeItem('discord_user');
        set({ user: null });
      },
      setUser: (user) => {
        if (user) {
          localStorage.setItem('discord_user', JSON.stringify(user));
        }
        set({ user });
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

// Initialiser l'utilisateur depuis le localStorage au chargement
const savedUser = localStorage.getItem('discord_user');
if (savedUser) {
  try {
    const user = JSON.parse(savedUser);
    useAuth.getState().setUser(user);
  } catch (error) {
    console.error('Erreur lors de la restauration de la session:', error);
    localStorage.removeItem('discord_user');
  }
} 