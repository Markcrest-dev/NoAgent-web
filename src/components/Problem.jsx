import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const stats = [
  { value: 'Up to 100%', label: 'Of annual rent lost to agent fees', color: 'text-primary' },
  { value: '3–5 fees', label: 'Stacked charges per rental transaction', color: 'text-primary' },
  { value: '₦0', label: 'What NoAgent charges tenants to find a home', color: 'text-accent' },
];

const withoutItems = [
  { label: 'Rent', amount: '₦500,000' },
  { label: 'Agent fee', amount: '₦150,000' },
  { label: 'Inspection fee', amount: '₦20,000' },
  { label: 'Consultation fee', amount: '₦30,000' },
];

export default function Problem() {
  return (
    <section id="the-problem" className="bg-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p {...fadeInUp} className="section-label mb-4 text-center">
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] text-dark text-center mb-6"
        >
          Nigerian Agents Are Charging Too Much
        </motion.h2>

        {/* Body */}
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-muted text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-14"
        >
          In Nigeria, renting a home shouldn't cost you twice the rent. But
          that's exactly what happens. Agents stack agency fees, inspection
          fees, and consultation fees on top of your rent until the total
          you pay upfront nearly doubles what the landlord actually charges.
        </motion.p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-dark/5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300"
            >
              <p className={`heading-display text-3xl sm:text-4xl ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WITHOUT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-without-bg rounded-2xl p-6 sm:p-8 border border-alert/10"
          >
            <h3 className="text-alert font-bold text-lg mb-5 flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Without NoAgent
            </h3>
            <div className="space-y-3">
              {withoutItems.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-dark/80 text-sm">
                    <svg className="w-4 h-4 text-alert/60 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {item.label}
                  </span>
                  <span className="text-dark font-medium text-sm">{item.amount}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-alert/20 mt-5 pt-4 flex justify-between items-center">
              <span className="text-alert font-bold">Total</span>
              <span className="text-alert font-bold text-xl heading-display">₦700,000</span>
            </div>
          </motion.div>

          {/* WITH */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-with-bg rounded-2xl p-6 sm:p-8 border border-accent/15"
          >
            <h3 className="text-primary font-bold text-lg mb-5 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              With NoAgent
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-dark/80 text-sm">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Rent
                </span>
                <span className="text-dark font-medium text-sm">₦500,000</span>
              </div>
            </div>
            <div className="border-t border-accent/20 mt-5 pt-4 flex justify-between items-center">
              <span className="text-primary font-bold">Total</span>
              <span className="text-primary font-bold text-xl heading-display">₦500,000</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              You save ₦200,000
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
