import { motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';
import tenantDashboard from '../assets/Tenant_dashboard.jpeg';
import landlordDashboard from '../assets/Landlord_dashboard.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function DownloadCTA() {
  return (
    <section id="download" className="bg-primary pt-32 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background grain */}
      <div className="grain-overlay" />
      <div className="geo-pattern" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Phones Visual */}
        <div className="relative h-48 sm:h-64 mb-8 flex justify-center items-end">
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -15 }}
            whileInView={{ opacity: 1, y: 0, rotate: -10 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute -ml-32 sm:-ml-48 top-8"
          >
            <PhoneFrame src={tenantDashboard} alt="Tenant Dashboard" size="sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 15 }}
            whileInView={{ opacity: 1, y: 0, rotate: 10 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="absolute -mr-32 sm:-mr-48 top-8"
          >
            <PhoneFrame src={landlordDashboard} alt="Landlord Dashboard" size="sm" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center relative z-20 bg-primary/80 backdrop-blur-sm py-8 rounded-3xl">
          <motion.h2
            {...fadeInUp}
            className="heading-display text-3xl sm:text-4xl lg:text-5xl text-white mb-5"
          >
            Your Next Home Is One Tap Away
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-hero-sub text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            No agent. No hidden fees. No wahala. Just direct honest housing
            for every Nigerian.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            {/* Google Play */}
            <a
              href="#"
              id="download-google-play"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-primary font-bold text-base transition-all duration-200 hover:bg-bg hover:shadow-xl hover:-translate-y-1"
            >
              {/* Play Store SVG */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302-2.533-2.533 2.533-2.451zM5.864 3.458l10.937 6.333-2.302 2.302-8.635-8.635z" />
              </svg>
              Download on Google Play
            </a>

            {/* App Store — Coming Soon */}
            <span
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white/50 font-semibold text-base cursor-not-allowed select-none"
            >
              {/* Apple SVG */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store — Coming Soon
            </span>
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="text-hero-sub text-sm"
          >
            Free to download. Free for tenants. Always.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
