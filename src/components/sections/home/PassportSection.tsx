import React from 'react';
import { PawIcon } from '@/components/ui/PawIcon';

export function PassportSection() {
  const pillars = [
    {
      icon: '🛡️',
      title: '10-Year Health Guarantee',
      desc: 'Our written guarantee covers all genetic and hereditary conditions so you can welcome your pup with complete peace of mind.',
    },
    {
      icon: '💉',
      title: 'Vaccinated & Microchipped',
      desc: 'Every puppy has age-appropriate vaccinations, preventative deworming, and a registered ISO international microchip.',
    },
    {
      icon: '📜',
      title: 'Official Vet Health Passport',
      desc: 'Comprehensive veterinary certificate signed by licensed UAE veterinarians confirming clear eyes, ears, heart, and joints.',
    },
    {
      icon: '📞',
      title: '24/7 Lifelong Concierge Care',
      desc: 'Our care team remains by your side forever—helping with feeding schedules, crate training, grooming tips, and vet questions.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cocoa text-milk relative overflow-hidden">
      <div className="max-w-[110rem] mx-auto gutter relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-honey mb-2">
            <PawIcon className="w-4 h-4 text-honey" />
            <span className="font-scrawl text-base font-bold">
              uncompromising standards
            </span>
          </div>
          <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-honey tracking-tight">
            The TeddyPups Passport Promise
          </h2>
          <p className="mt-3 text-milk/80 text-sm sm:text-base">
            Every puppy that enters our showroom or flies to your home is treated like our own child—with verified health and ethics first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl block mb-4">{pillar.icon}</span>
                <h3 className="font-plush font-bold text-xl text-honey mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-milk/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-honey/90 font-medium">
                <span>✓</span>
                <span>Included with all puppies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
