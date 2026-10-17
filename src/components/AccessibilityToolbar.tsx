'use client';

import { useAccessibility } from './AccessibilityProvider';

export default function AccessibilityToolbar() {
  const { highContrast, fontScale, toggleHighContrast, increaseFont, decreaseFont, resetFont } = useAccessibility();

  return (
    <div className="flex items-center gap-2" role="toolbar" aria-label="Accessibility options">
      <button
        onClick={toggleHighContrast}
        aria-pressed={highContrast}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg border-2 border-cobalt/30 hover:border-cobalt hover:bg-cobalt hover:text-white transition-colors"
        title="Toggle high contrast mode"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 0 0 20z" fill="currentColor" />
        </svg>
        <span className="hidden sm:inline">Contrast</span>
      </button>

      <div className="flex items-center gap-1 border-2 border-cobalt/30 rounded-lg" role="group" aria-label="Text size controls">
        <button
          onClick={decreaseFont}
          disabled={fontScale <= 0.9}
          className="px-2.5 py-2 text-sm font-bold hover:bg-cobalt hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Decrease text size"
          title="Decrease text size"
        >
          A−
        </button>
        <button
          onClick={resetFont}
          className="px-2.5 py-2 text-sm font-bold hover:bg-cobalt hover:text-white transition-colors"
          aria-label="Reset text size"
          title="Reset text size"
        >
          A
        </button>
        <button
          onClick={increaseFont}
          disabled={fontScale >= 1.5}
          className="px-2.5 py-2 text-base font-bold hover:bg-cobalt hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Increase text size"
          title="Increase text size"
        >
          A+
        </button>
      </div>
    </div>
  );
}
