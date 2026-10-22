'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-2 group">
      <a
        href={getWhatsAppUrl("Hi TeddyPups! I'm browsing your website and have a quick question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 2.083.825 2.791.825 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.768-5.768-5.768zm3.385 8.213c-.14.394-.814.729-1.129.774-.316.046-.713.065-2.043-.483-1.603-.66-2.617-2.28-2.696-2.387-.08-.107-.639-.85-.639-1.623 0-.773.407-1.153.551-1.311.145-.158.316-.197.421-.197.106 0 .211.002.303.007.098.005.23-.037.359.273.132.316.449 1.096.488 1.176.04.079.066.172.013.277-.053.106-.079.172-.158.264-.079.092-.167.206-.238.277-.08.079-.163.165-.07.324.093.159.412.68.883 1.1 1.018.908 1.408 1.003 1.606 1.101.198.099.317.086.436-.053.118-.139.513-.598.65-.806.138-.208.275-.172.463-.102.188.069 1.192.562 1.396.664.204.102.34.152.39.238.05.086.05.498-.09.892z" />
        </svg>
        <span className="font-bold text-sm tracking-wide hidden sm:inline">WhatsApp us</span>
      </a>
    </aside>
  );
}
