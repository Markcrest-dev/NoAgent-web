import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const pillars = [
  {
    title: 'ID Verification',
    desc: 'Landlords upload official identification to receive a Verified badge on their profile and all their listings.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    title: 'Ratings & Reviews',
    desc: 'Every completed tenancy can be reviewed. Honest public feedback from real people builds the reputation of every landlord on the platform.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Secure In-App Messaging',
    desc: 'All communication happens inside NoAgent. Your personal phone number stays private until you choose to share it.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Digital Tenancy Agreements',
    desc: 'Every tenancy is backed by a structured digital agreement — automatically generated, timestamped, and stored securely for both parties.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function TrustSafety() {
  return (
    <section id="trust-safety" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.p {...fadeInUp} className="section-label mb-4 text-center">
          Trust & Safety
        </motion.p>
        <motion.h2
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] text-dark text-center mb-5"
        >
          We Replaced the Agent — Not the Trust
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-muted text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-14"
        >
          The one thing agents were supposed to provide was a layer of trust
          between strangers. NoAgent builds that trust directly into the
          platform so you never have to compromise safety to save money.
        </motion.p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-bg rounded-2xl p-7 sm:p-8 border border-dark/5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                {p.icon}
              </div>
              <h3 className="heading-display text-lg sm:text-xl text-dark mb-2">
                {p.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
