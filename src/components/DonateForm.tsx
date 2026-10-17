'use client';

import { useState } from 'react';

export default function DonateForm() {
  const [formData, setFormData] = useState({
    amount: '',
    customAmount: '',
    purpose: '',
    name: '',
    email: '',
    phone: '',
    anonymous: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = ['50', '100', '250', '500', '1000'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
    if (errors[target.name]) setErrors({ ...errors, [target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    const amount = formData.customAmount || formData.amount;
    if (!amount) newErrors.amount = 'Please select or enter a donation amount.';
    else if (isNaN(Number(amount)) || Number(amount) <= 0) newErrors.amount = 'Please enter a valid amount.';
    if (!formData.purpose) newErrors.purpose = 'Please select a donation purpose.';
    if (!formData.anonymous) {
      if (!formData.name) newErrors.name = 'Your name is required (or choose anonymous).';
      if (!formData.email) newErrors.email = 'Email is required (or choose anonymous).';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    }

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
        <h3 className="text-2xl font-bold text-cobalt mb-2">Thank You for Your Generosity!</h3>
        <p className="text-ink/70 max-w-md mx-auto mb-6">
          Your donation enquiry has been recorded. A member of our team will contact you shortly with
          payment instructions and confirmation.
        </p>
        <p className="text-sm text-ink/50">
          A confirmation email will be sent to {formData.email || 'your registered email'}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Donation form" className="bg-white rounded-2xl p-8 space-y-6">
      {Object.keys(errors).length > 0 && (
        <div role="alert" className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
          <p className="font-bold text-red-800 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
            Please correct the highlighted errors below.
          </p>
        </div>
      )}

      {/* Amount selection */}
      <fieldset>
        <legend className="form-label">Donation Amount (ZMW) <span className="text-copper" aria-label="required">*</span></legend>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-2">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => { setFormData({ ...formData, amount: amt, customAmount: '' }); if (errors.amount) setErrors({ ...errors, amount: '' }); }}
              className={`px-4 py-3 font-bold rounded-lg border-2 transition-all ${
                formData.amount === amt
                  ? 'bg-cobalt text-white border-cobalt'
                  : 'bg-white text-cobalt border-cobalt/30 hover:border-cobalt'
              }`}
              aria-pressed={formData.amount === amt}
            >
              K{amt}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <label htmlFor="custom-amount" className="block text-sm font-bold text-ink mb-1">Or enter a custom amount</label>
          <input
            type="number"
            id="custom-amount"
            name="customAmount"
            value={formData.customAmount}
            onChange={handleChange}
            placeholder="Enter amount in ZMW"
            className="form-input"
            min="1"
            aria-invalid={!!errors.amount}
            aria-describedby={errors.amount ? 'amount-error' : undefined}
          />
        </div>
        {errors.amount && <p id="amount-error" className="form-error" role="alert">{errors.amount}</p>}
      </fieldset>

      {/* Purpose */}
      <div>
        <label htmlFor="donation-purpose" className="form-label">Donation Purpose <span className="text-copper" aria-label="required">*</span></label>
        <select id="donation-purpose" name="purpose" value={formData.purpose} onChange={handleChange} className="form-input" aria-required="true" aria-invalid={!!errors.purpose} aria-describedby={errors.purpose ? 'purpose-error' : undefined}>
          <option value="">Select a purpose</option>
          <option value="general">General Donation</option>
          <option value="sponsor-learner">Sponsor a Learner or Trainee</option>
          <option value="braille-books">Donate Braille Books & Learning Materials</option>
          <option value="computers">Donate Computers & Assistive Technology</option>
          <option value="vocational">Support Vocational Training</option>
          <option value="campaign">Support a Fundraising Campaign</option>
        </select>
        {errors.purpose && <p id="purpose-error" className="form-error" role="alert">{errors.purpose}</p>}
      </div>

      {/* Donor details */}
      <fieldset>
        <legend className="form-label">Donor Details</legend>
        <div className="space-y-4 mt-2">
          <div>
            <label htmlFor="donor-name" className="block text-sm font-bold text-ink mb-1">Full Name</label>
            <input type="text" id="donor-name" name="name" value={formData.name} onChange={handleChange} className="form-input" disabled={formData.anonymous} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'donor-name-error' : undefined} />
            {errors.name && <p id="donor-name-error" className="form-error" role="alert">{errors.name}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="donor-email" className="block text-sm font-bold text-ink mb-1">Email</label>
              <input type="email" id="donor-email" name="email" value={formData.email} onChange={handleChange} className="form-input" disabled={formData.anonymous} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'donor-email-error' : undefined} />
              {errors.email && <p id="donor-email-error" className="form-error" role="alert">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="donor-phone" className="block text-sm font-bold text-ink mb-1">Telephone</label>
              <input type="tel" id="donor-phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" disabled={formData.anonymous} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="anonymous" name="anonymous" checked={formData.anonymous} onChange={handleChange} className="w-5 h-5 accent-cobalt" />
            <label htmlFor="anonymous" className="text-ink/80 cursor-pointer">Make this donation anonymous</label>
          </div>
        </div>
      </fieldset>

      {/* Privacy notice */}
      <div className="bg-bone rounded-lg p-4 border border-cobalt/10">
        <p className="text-sm text-ink/70 leading-relaxed">
          By submitting this form, you agree to our{' '}
          <a href="/policies/privacy" className="underline">Privacy Policy</a>. We do not collect or
          store card details directly. Payment is processed through a verified payment provider.
          Donation receipts are provided where supported.
        </p>
      </div>

      <button type="submit" className="btn-copper w-full text-lg">Proceed to Donate</button>
    </form>
  );
}
