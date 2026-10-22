import React from 'react';
import { PawIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function JourneySection() {
  const steps = [
    {
      num: '01',
      title: 'Choose & Connect',
      desc: 'Browse our available puppies online or message us on WhatsApp with the breed and look you dream of. We share immediate videos and temperament notes.',
    },
    {
      num: '02',
      title: 'Health Check & Preparation',
      desc: 'Your puppy undergoes a comprehensive pre-departure veterinary check. Health passport, deworming records, and vaccinations are certified.',
    },
    {
      num: '03',
      title: 'Welcome Home Day',
      desc: 'Pick up your puppy in Downtown Dubai or enjoy chauffeured climate-controlled delivery right to your door with a complete starter kit.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-milk">
      <div className="max-w-[110rem] mx-auto gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 3 Steps (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 text-toffee mb-2">
                <PawIcon className="w-4 h-4" />
                <span className="font-scrawl text-base font-bold text-toffee-ink">
                  the journey home
                </span>
              </div>
              <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-cocoa tracking-tight">
                Simple, Joyful &amp; Fully Supported
              </h2>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-white border-2 border-cocoa/15 shadow-xs flex items-start gap-5 hover:border-cocoa/30 transition-all"
                >
                  <span className="font-plush font-extrabold text-3xl sm:text-4xl text-toffee shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-plush font-bold text-xl text-cocoa">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-cocoa/75 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp Chat Simulation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#e5ddd5] rounded-3xl p-4 sm:p-5 border-2 border-cocoa/20 shadow-xl max-w-md mx-auto relative overflow-hidden">
              {/* Chat Header */}
              <div className="bg-[#075e54] text-white p-3 rounded-2xl flex items-center justify-between mb-4 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-honey text-cocoa flex items-center justify-center font-bold text-lg">
                    🐶
                  </div>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">TeddyPups Concierge</p>
                    <p className="text-[10px] text-emerald-200">Online • Typically replies instantly</p>
                  </div>
                </div>
                <span className="text-xs bg-white/20 py-1 px-2 rounded-full font-mono">Dubai</span>
              </div>

              {/* Chat Messages */}
              <div className="flex flex-col gap-3 text-xs leading-relaxed py-2">
                <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-2xs self-start max-w-[85%] text-cocoa">
                  <p>Marhaba! Welcome to TeddyPups Dubai 🐾 How can we help you find your furry family member today?</p>
                  <span className="text-[9px] text-cocoa/40 block text-right mt-1">10:14 AM</span>
                </div>

                <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-xs shadow-2xs self-end max-w-[85%] text-cocoa">
                  <p>Hi! Can I come meet Max the Maltipoo in your Downtown showroom this afternoon?</p>
                  <span className="text-[9px] text-cocoa/40 block text-right mt-1">10:15 AM ✓✓</span>
                </div>

                <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-2xs self-start max-w-[85%] text-cocoa">
                  <p>Yes absolutely! Max is ready to play. We reserved 3:00 PM for you with our puppy care specialist 🐶✨</p>
                  <span className="text-[9px] text-cocoa/40 block text-right mt-1">10:16 AM</span>
                </div>
              </div>

              {/* Chat Input Button */}
              <div className="mt-4 pt-2">
                <a
                  href={getWhatsAppUrl("Hi TeddyPups Concierge, I'd like to book a puppy visit!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#25d366] text-white font-bold text-xs sm:text-sm text-center block shadow-md hover:bg-[#1ebd5b] transition-all"
                >
                  Start Your Own WhatsApp Chat →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
