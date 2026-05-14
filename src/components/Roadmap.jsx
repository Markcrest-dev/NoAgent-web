import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const roadmapItems = [
  {
    emoji: '🪪',
    title: 'Smile ID Integration',
    desc: 'Real-time face and ID matching for ultimate landlord verification and tenant safety.',
  },
  {
    emoji: '🏘️',
    title: 'Neighbourhood Safety Scores',
    desc: 'Crowdsourced ratings for power availability, water supply, and general area safety.',
  },
  {
    emoji: '💰',
    title: 'Rent Savings Vault',
    desc: "Help tenants save monthly towards their next rent cycle so they're never caught off guard.",
  },
  {
    emoji: '🔍',
    title: 'Physical Verification',
    desc: 'NoAgent team physically inspects and certifies select properties for ultimate peace of mind.',
  },
  {
    emoji: '🤝',
    title: 'Roommate Matching',
    desc: 'Find compatible flatmates and split the cost on shared apartments across Nigerian cities.',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.p {...fadeInUp} className="section-label mb-4 text-center">
          What's Next
        </motion.p>
        <motion.h2
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] text-dark text-center mb-14"
        >
          We're Just Getting Started
        </motion.h2>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-dark/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Coming Soon badge */}
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                Coming Soon
              </span>
              <span className="text-4xl mb-4 block">{item.emoji}</span>
              <h3 className="heading-display text-lg text-dark mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto hide-scrollbar scroll-snap-x pb-4 -mx-4 px-4">
          {roadmapItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="relative flex-shrink-0 w-[280px] bg-white rounded-2xl p-6 border border-dark/5 shadow-sm"
            >
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                Coming Soon
              </span>
              <span className="text-4xl mb-4 block">{item.emoji}</span>
              <h3 className="heading-display text-lg text-dark mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
