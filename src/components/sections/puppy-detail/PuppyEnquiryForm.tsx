'use client';

import React, { useState } from 'react';
import { Puppy } from '@/types';
import { getPuppyWhatsAppUrl } from '@/lib/whatsapp';

interface PuppyEnquiryFormProps {
  puppy: Puppy;
}

export function PuppyEnquiryForm({ puppy }: PuppyEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: `Hi, I am interested in ${puppy.name} (${puppy.breed}). Could you please share more details or schedule a showroom visit?`,
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
          ...formData,
          puppySlug: puppy.slug,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please reach out via WhatsApp.');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cocoa/20 shadow-md">
      <div className="flex items-center justify-between pb-4 border-b border-cocoa/10 mb-6">
        <div>
          <h3 className="font-plush font-extrabold text-2xl text-cocoa">
            Enquire About {puppy.name}
          </h3>
          <p className="text-xs text-cocoa/70 mt-0.5">
            Our concierge will reply to your phone or WhatsApp within minutes.
          </p>
        </div>
        <span className="text-3xl">🐾</span>
      </div>

      {status === 'success' ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <span className="text-4xl block mb-2">🎉</span>
          <h4 className="font-plush font-bold text-xl text-emerald-900">
            Enquiry Received!
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800 mt-2 leading-relaxed">
            Thank you! Our concierge team has received your enquiry regarding <strong>{puppy.name}</strong> and will reach out on WhatsApp shortly.
          </p>
          <div className="mt-5">
            <a
              href={getPuppyWhatsAppUrl(puppy.name, puppy.breed, puppy.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800"
            >
              <span>Open WhatsApp Directly</span>
              <span>→</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Leave blank</label>
            <input
              id="website"
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="e.g. Sarah Mansoor"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
                Email (Optional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="area" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
              Your Location / City (Optional)
            </label>
            <input
              id="area"
              type="text"
              placeholder="e.g. Downtown Dubai / Abu Dhabi / Riyadh"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-cocoa mb-1 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
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
            {status === 'loading' ? 'Sending enquiry...' : `Send Enquiry for ${puppy.name}`}
          </button>

          {/* WhatsApp Direct Option */}
          <div className="pt-2 text-center">
            <span className="text-xs text-cocoa/60 font-medium">Or for fastest response:</span>
            <a
              href={getPuppyWhatsAppUrl(puppy.name, puppy.breed, puppy.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <span>💬</span>
              <span>Chat with Concierge about {puppy.name} on WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
