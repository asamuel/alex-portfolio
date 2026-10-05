'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback, useSyncExternalStore } from 'react';

import {
  getThemeServerSnapshot,
  getThemeSnapshot,
  subscribeToTheme,
  updateTheme,
} from '@/lib/theme-store';

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getThemeServerSnapshot);

  const toggleTheme = useCallback(() => {
    updateTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary/60"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
