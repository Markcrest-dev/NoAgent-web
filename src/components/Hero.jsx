import { motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';
import tenantBrowse from '../assets/Tenant_browse_screen.jpeg';
import landlordDashboard from '../assets/Landlord_dashboard.jpeg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const proofItems = [
  'Zero agent fees',
  'Verified landlords',
  'Direct messaging',
  'Digital agreements',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-primary flex items-center overflow-hidden"
    >
      {/* Background overlays */}
      <div className="grain-overlay" />
      <div className="geo-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-0 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left column */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              className="section-label !text-accent tracking-[0.15em] mb-4"
            >
              No Agents. No Hidden Fees.
            </motion.p>

            <motion.h1
              {...fadeUp(0.25)}
              className="heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] text-white leading-[1.1] mb-6"
            >
              Cut Out the Agent.
              <br />
              Keep Your Money.
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="text-hero-sub text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              NoAgent connects landlords and tenants directly — no middlemen, no
              inflated fees, no wahala. Find your home or fill your property in
              minutes.
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mb-8">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-primary font-bold text-sm sm:text-base transition-all duration-200 hover:bg-bg hover:shadow-xl"
              >
                {/* Play Store icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302-2.533-2.533 2.533-2.451zM5.864 3.458l10.937 6.333-2.302 2.302-8.635-8.635z" />
                </svg>
                Download the App
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-white/10 hover:border-white/60"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-hero-sub text-sm"
            >
              {proofItems.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="hidden sm:inline text-white/30 mr-2">·</span>}
                  <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — Real phone mockups */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
            className="hidden md:flex justify-center items-end relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-12 bg-accent/10 rounded-full blur-3xl" />
              {/* Main phone — Tenant Browse */}
              <div className="relative z-10">
                <PhoneFrame
                  src={tenantBrowse}
                  alt="NoAgent tenant property browsing screen"
                  size="md"
                />
              </div>
              {/* Overlapping tilted phone — Landlord Dashboard */}
              <div className="absolute -right-16 -top-8 z-20">
                <PhoneFrame
                  src={landlordDashboard}
                  alt="NoAgent landlord dashboard"
                  size="sm"
                  rotate={6}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave/curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
          <path d="M0 60L1440 60L1440 30C1200 0 240 0 0 30L0 60Z" fill="#F1EFE8" />
        </svg>
      </div>
    </section>
  );
}
