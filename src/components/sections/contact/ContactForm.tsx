'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    breed: '',
    preferredDate: '',
    message: '',
    website: '', // honeypot
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          area: formData.breed ? `Interested in: ${formData.breed}` : undefined,
          message: `${formData.preferredDate ? `[Preferred Date: ${formData.preferredDate}] ` : ''}${formData.message}`,
          website: formData.website,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please message us on WhatsApp.');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-cocoa/20 shadow-md">
      <div className="flex items-center justify-between pb-5 border-b border-cocoa/10 mb-6">
        <div>
          <h2 className="font-plush font-extrabold text-2xl sm:text-3xl text-cocoa">
            Send Us a Letter
          </h2>
          <p className="text-xs sm:text-sm text-cocoa/70 mt-1">
            Book a showroom cuddle visit or ask about specific breeds.
          </p>
        </div>
        <span className="text-3xl">💌</span>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <span className="text-4xl block mb-2">🎉</span>
          <h3 className="font-plush font-bold text-2xl text-emerald-950">
            Letter Received!
          </h3>
          <p className="text-sm text-emerald-800 mt-2 leading-relaxed max-w-md mx-auto">
            Thank you! Our concierge will review your message and reach out to your phone or WhatsApp shortly to confirm your visit.
          </p>
          <div className="mt-6">
            <a
              href={getWhatsAppUrl("Hi TeddyPups, I just submitted the contact form on your website!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 shadow-sm"
            >
              <span>Follow up on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website">Leave empty</label>
            <input
              id="contact-website"
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="e.g. Tariq Mansoor"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
                Phone / WhatsApp *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
                Email (Optional)
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="name@domain.ae"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-breed" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
                Preferred Breed (Optional)
              </label>
              <input
                id="contact-breed"
                type="text"
                placeholder="e.g. Maltipoo, Teacup Poodle..."
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-date" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
                Preferred Visit Date &amp; Time
              </label>
              <input
                id="contact-date"
                type="text"
                placeholder="e.g. Tomorrow at 4:00 PM"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
              Your Message or Questions
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Tell us what you are looking for, family setup, or any questions about health and delivery..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 px-6 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft shadow-md active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
          >
            {status === 'loading' ? 'Sending letter...' : 'Send Showroom Visit Request'}
          </button>
        </form>
      )}
    </div>
  );
}
