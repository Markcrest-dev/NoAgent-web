import { motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';

import tenantDashboard from '../assets/Tenant_dashboard.jpeg';
import tenantBrowse from '../assets/Tenant_browse_screen.jpeg';
import chatScreen from '../assets/Chat_screen.jpeg';
import bookingsPage from '../assets/Bookings_page.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const steps = [
  {
    num: '01',
    title: 'Sign Up & Choose Your Role',
    desc: 'Create your account and tell us who you are — a landlord with a property to fill, or a tenant looking for a home. Your role determines your entire experience on the platform.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    image: tenantDashboard,
  },
  {
    num: '02',
    title: 'Landlords List. Tenants Search.',
    desc: 'Landlords post their property with photos, price, and location in minutes. Tenants search by area, budget, and bedroom count and browse verified listings instantly.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    image: tenantBrowse,
  },
  {
    num: '03',
    title: 'Connect Directly',
    desc: 'Found a listing you love? Message the landlord directly inside the app. No phone numbers needed. Schedule an inspection, ask questions, and negotiate — all in one place.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    image: chatScreen,
  },
  {
    num: '04',
    title: 'Pay, Sign & Move In',
    desc: 'Choose how long you want to stay, pay securely via Paystack, and receive your digital tenancy agreement immediately. No agent. No extra fees. Just your new home.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    image: bookingsPage,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.p {...fadeInUp} className="section-label mb-4 text-center">
          How It Works
        </motion.p>
        <motion.h2
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] text-dark text-center mb-16 md:mb-24"
        >
          Simple. Direct. Done.
        </motion.h2>

        {/* Steps */}
        <div className="space-y-24 md:space-y-16">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.1 }}
                className={`flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  isEven ? 'md:direction-rtl' : ''
                }`}
              >
                {/* Content side */}
                <div className={`${isEven ? 'md:order-2 md:text-left' : ''} relative w-full`}>
                  {/* Watermark number */}
                  <span className="absolute -top-8 -left-2 text-[8rem] font-bold leading-none text-primary/[0.04] heading-display select-none pointer-events-none">
                    {step.num}
                  </span>

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                      {step.icon}
                    </div>

                    <h3 className="heading-display text-2xl sm:text-3xl text-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted text-base sm:text-lg leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Visual side — Phone Frame with Screenshot */}
                <div className={`flex w-full ${isEven ? 'md:order-1 justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                  <div className="relative">
                    {/* Glow blob behind phone */}
                    <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl transform scale-110" />
                    
                    <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                      <PhoneFrame src={step.image} alt={step.title} size="md" />
                    </div>
                    
                    {/* Floating step number badge */}
                    <div className={`absolute ${isEven ? '-left-6 md:-left-8' : '-right-6 md:-right-8'} top-16 z-20 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-primary/5`}>
                      <span className="heading-display text-2xl text-primary">{step.num}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
