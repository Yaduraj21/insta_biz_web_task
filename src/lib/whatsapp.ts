export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971501234567';

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello TeddyPups! I'm interested in learning more about your puppies.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getPuppyWhatsAppUrl(puppyName: string, breed: string, slug: string): string {
  const text = encodeURIComponent(
    `Hello TeddyPups! I am in love with ${puppyName} (the ${breed}, ref: ${slug}) on your website. Is ${puppyName} still available for a showroom visit or home delivery?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
