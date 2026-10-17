'use client';

import { useState } from 'react';

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    organisation: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.organisation) newErrors.organisation = 'Organisation name is required.';
    if (!formData.contactPerson) newErrors.contactPerson = 'Contact person is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.category) newErrors.category = 'Please select a partnership category.';
    if (!formData.message) newErrors.message = 'Please describe your partnership interest.';

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
        <h3 className="text-2xl font-bold text-cobalt mb-2">Thank You for Your Interest!</h3>
        <p className="text-ink/70 max-w-md mx-auto">
          We have received your partnership enquiry and will respond within 3–5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Partnership enquiry form" className="bg-white rounded-2xl p-8 space-y-5">
      {errors.message && !submitted && (
        <div role="alert" className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-2">
          <p className="font-bold text-red-800 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
            Please correct the errors below.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="org-name" className="form-label">Organisation Name <span className="text-copper" aria-label="required">*</span></label>
        <input type="text" id="org-name" name="organisation" value={formData.organisation} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.organisation} aria-describedby={errors.organisation ? 'org-name-error' : undefined} />
        {errors.organisation && <p id="org-name-error" className="form-error" role="alert">{errors.organisation}</p>}
      </div>

      <div>
        <label htmlFor="contact-person" className="form-label">Contact Person <span className="text-copper" aria-label="required">*</span></label>
        <input type="text" id="contact-person" name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.contactPerson} aria-describedby={errors.contactPerson ? 'contact-person-error' : undefined} />
        {errors.contactPerson && <p id="contact-person-error" className="form-error" role="alert">{errors.contactPerson}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="partner-email" className="form-label">Email <span className="text-copper" aria-label="required">*</span></label>
          <input type="email" id="partner-email" name="email" value={formData.email} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'partner-email-error' : undefined} />
          {errors.email && <p id="partner-email-error" className="form-error" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="partner-phone" className="form-label">Telephone Number</label>
          <input type="tel" id="partner-phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="partner-category" className="form-label">Partnership Category <span className="text-copper" aria-label="required">*</span></label>
        <select id="partner-category" name="category" value={formData.category} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.category} aria-describedby={errors.category ? 'partner-category-error' : undefined}>
          <option value="">Select a category</option>
          <option value="corporate-sponsorship">Corporate Sponsorship</option>
          <option value="ngo-development">NGO & Development Partner</option>
          <option value="government-institutional">Government & Institutional Collaboration</option>
          <option value="csr">Corporate Social Responsibility</option>
          <option value="assistive-tech-donation">Assistive Technology Donation</option>
          <option value="library-donation">Library & Learning Resource Donation</option>
          <option value="volunteer-partnership">Volunteer Partnership</option>
          <option value="other">Other</option>
        </select>
        {errors.category && <p id="partner-category-error" className="form-error" role="alert">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="partner-message" className="form-label">Message <span className="text-copper" aria-label="required">*</span></label>
        <textarea id="partner-message" name="message" value={formData.message} onChange={handleChange} rows={5} className="form-input" aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'partner-message-error' : undefined} />
        {errors.message && <p id="partner-message-error" className="form-error" role="alert">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">Submit Partnership Enquiry</button>
    </form>
  );
}
