'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback, useSyncExternalStore } from 'react';
import { applyTheme, readStoredTheme, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

let themeCache: Theme | null = null;
const listeners = new Set<() => void>();

const subscribe = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
  };
};

const getSnapshot = (): Theme => {
  if (themeCache === null) {
    themeCache = readStoredTheme();
    applyTheme(themeCache);
  }

  return themeCache;
};

const getServerSnapshot = (): Theme => 'light';

const updateTheme = (theme: Theme) => {
  themeCache = theme;
  applyTheme(theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  listeners.forEach((listener) => listener());
};

const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
