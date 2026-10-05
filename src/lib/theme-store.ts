import { applyTheme, readStoredTheme, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

let themeCache: Theme | null = null;

const listeners = new Set<() => void>();

export const subscribeToTheme = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
  };
};

export const getThemeSnapshot = (): Theme => {
  if (themeCache === null) {
    themeCache = readStoredTheme();
    applyTheme(themeCache);
  }

  return themeCache;
};

export const getThemeServerSnapshot = (): Theme => 'light';

export const updateTheme = (theme: Theme) => {
  themeCache = theme;

  applyTheme(theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  listeners.forEach((listener) => listener());
};
