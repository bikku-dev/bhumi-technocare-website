import { BUSINESS_INFO } from '../data/websiteData';

/**
 * Builds a structured, high-conversion WhatsApp enquiry message
 * and returns the launchable WhatsApp URL.
 */
export function buildWhatsAppMessage({
  fullName = '',
  phone = '',
  clientType = 'Personal / Home',
  location = '',
  service = '',
  deviceModel = '',
  urgency = 'Standard (Within 24 Hours)',
  details = '',
  productName = '',
  productPrice = ''
}) {
  const parts = [];

  parts.push(`*━━━━━━━━━━━━━━━━━━━━━━*`);
  parts.push(`*BHUMI TECHNOCARE | SERVICE ENQUIRY*`);
  parts.push(`*━━━━━━━━━━━━━━━━━━━━━━*`);

  if (fullName) {
    parts.push(`👤 *Customer Name:* ${fullName.trim()}`);
  }
  if (phone) {
    parts.push(`📞 *Phone Number:* ${phone.trim()}`);
  }
  if (clientType) {
    parts.push(`🏢 *Client Type:* ${clientType}`);
  }
  if (location) {
    parts.push(`📍 *Location / Area:* ${location.trim()}`);
  }
  if (service) {
    parts.push(`🛠️ *Requested Service:* ${service}`);
  }
  if (productName) {
    parts.push(`📦 *Product of Interest:* ${productName} ${productPrice ? `(${productPrice})` : ''}`);
  }
  if (deviceModel) {
    parts.push(`💻 *Device Model / Brand:* ${deviceModel.trim()}`);
  }
  if (urgency) {
    parts.push(`⚡ *Priority / Urgency:* ${urgency}`);
  }
  if (details) {
    parts.push(`📝 *Issue / Requirement Details:*\n${details.trim()}`);
  }

  parts.push(`*━━━━━━━━━━━━━━━━━━━━━━*`);
  parts.push(`_Sent via Bhumi Technocare Official Website_`);
  parts.push(`_Location: Kim Char Rasta, Surat (NH-8)_`);

  return parts.join('\n');
}

/**
 * Generates direct wa.me link with encoded text
 */
export function generateWhatsAppLink(params) {
  const message = typeof params === 'string' ? params : buildWhatsAppMessage(params);
  const encoded = encodeURIComponent(message);
  const number = BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Opens WhatsApp in a new tab / app directly
 */
export function launchWhatsApp(params) {
  const url = generateWhatsAppLink(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Simple quick query link for specific items or services
 */
export function getQuickWhatsAppLink(subject, extra = '') {
  const text = `Hello *Bhumi Technocare*,\n\nI am visiting your website and would like an enquiry / quotation for:\n👉 *${subject}*${extra ? `\n\nDetails: ${extra}` : ''}\n\nPlease share availability, pricing, and turnaround time.\n\nThank you!`;
  const encoded = encodeURIComponent(text);
  const number = BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${number}?text=${encoded}`;
}
