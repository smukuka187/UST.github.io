'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Your name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.category) newErrors.category = 'Please select an enquiry category.';
    if (!formData.message) newErrors.message = 'Please enter your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = document.querySelector('[aria-invalid="true"]') as HTMLElement;
      if (firstError) firstError.focus();
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div aria-live="polite" className="text-center py-12 bg-white rounded-2xl p-8">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-4 text-cobalt" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
        </svg>
        <h3 className="text-2xl font-bold text-cobalt mb-2">Message Sent!</h3>
        <p className="text-ink/70 max-w-md mx-auto">
          Thank you for contacting us. We will respond to your enquiry within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form" className="bg-white rounded-2xl p-8 space-y-5">
      {Object.keys(errors).length > 0 && (
        <div role="alert" className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
          <p className="font-bold text-red-800 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
            Please correct the highlighted errors below.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="form-label">Full Name <span className="text-copper" aria-label="required">*</span></label>
        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
        {errors.name && <p id="contact-name-error" className="form-error" role="alert">{errors.name}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className="form-label">Email <span className="text-copper" aria-label="required">*</span></label>
          <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contact-email-error' : undefined} />
          {errors.email && <p id="contact-email-error" className="form-error" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className="form-label">Telephone Number</label>
          <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-category" className="form-label">Enquiry Category <span className="text-copper" aria-label="required">*</span></label>
        <select id="contact-category" name="category" value={formData.category} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.category} aria-describedby={errors.category ? 'contact-category-error' : undefined}>
          <option value="">Select a category</option>
          <option value="general">General Enquiry</option>
          <option value="library">Library Services</option>
          <option value="training">Skills Training</option>
          <option value="donations">Donations</option>
          <option value="partnerships">Partnerships</option>
          <option value="volunteering">Volunteering</option>
          <option value="media">Media</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <p id="contact-category-error" className="form-error" role="alert">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="form-label">Message <span className="text-copper" aria-label="required">*</span></label>
        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={5} className="form-input" aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
        {errors.message && <p id="contact-message-error" className="form-error" role="alert">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">Send Enquiry</button>
      <p className="text-sm text-ink/60">
        We protect your privacy. See our <a href="/policies/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
