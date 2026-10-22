import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/rateLimit';

const EnquirySchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().trim().min(5, 'Valid phone number is required').max(30),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  area: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  puppySlug: z.string().optional(),
  website: z.string().max(0, 'Spam detected').optional().or(z.literal('')), // honeypot
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    
    // Rate limit check
    const { allowed, remaining } = checkRateLimit(ip, 5, 10 * 60 * 1000);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before trying again or contact us directly on WhatsApp.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = EnquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form input', details: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true, message: 'Message received' });
    }

    // In production, we can send to Resend or email adapter
    console.log('[Enquiry Received]', {
      name: data.name,
      phone: data.phone,
      email: data.email,
      area: data.area,
      message: data.message,
      puppySlug: data.puppySlug,
      timestamp: new Date().toISOString(),
      remaining,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our concierge will reach out to you within minutes on WhatsApp.',
    });
  } catch (error) {
    console.error('[Enquiry Error]', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try contacting us on WhatsApp directly.' },
      { status: 500 }
    );
  }
}
