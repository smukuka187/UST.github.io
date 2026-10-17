'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div aria-live="polite" className="text-center py-8">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-4 text-cobalt" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
        </svg>
        <p className="font-bold text-lg text-cobalt">Thank you for subscribing!</p>
        <p className="text-ink/70 mt-2">You will receive our newsletter at {email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter subscription form">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="form-label sr-only">
            Email address
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="form-input"
            aria-required="true"
            aria-invalid={!!error}
            aria-describedby={error ? 'newsletter-error' : undefined}
          />
        </div>
        <button type="submit" className="btn-copper shrink-0">
          Subscribe
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="text-sm text-ink/60 mt-3">
        We respect your privacy. You can unsubscribe at any time. See our{' '}
        <a href="/policies/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
