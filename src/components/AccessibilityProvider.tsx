'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type AccessibilityState = {
  highContrast: boolean;
  fontScale: number;
  toggleHighContrast: () => void;
  increaseFont: () => void;
  decreaseFont: () => void;
  resetFont: () => void;
};

const AccessibilityContext = createContext<AccessibilityState>({
  highContrast: false,
  fontScale: 1,
  toggleHighContrast: () => {},
  increaseFont: () => {},
  decreaseFont: () => {},
  resetFont: () => {},
});

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    const savedContrast = localStorage.getItem('zlc-high-contrast') === 'true';
    const savedFont = parseFloat(localStorage.getItem('zlc-font-scale') || '1');
    if (savedContrast) setHighContrast(true);
    if (savedFont && savedFont >= 0.9 && savedFont <= 1.5) setFontScale(savedFont);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-contrast', highContrast ? 'high' : 'normal');
    localStorage.setItem('zlc-high-contrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale));
    localStorage.setItem('zlc-font-scale', String(fontScale));
  }, [fontScale]);

  const toggleHighContrast = () => setHighContrast((v) => !v);
  const increaseFont = () => setFontScale((s) => Math.min(s + 0.1, 1.5));
  const decreaseFont = () => setFontScale((s) => Math.max(s - 0.1, 0.9));
  const resetFont = () => setFontScale(1);

  return (
    <AccessibilityContext.Provider
      value={{ highContrast, fontScale, toggleHighContrast, increaseFont, decreaseFont, resetFont }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
