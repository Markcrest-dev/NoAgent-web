import { motion } from 'framer-motion';

/**
 * PhoneFrame — A realistic phone bezel component that displays an app screenshot.
 *
 * @param {string}  src       - Image source path
 * @param {string}  alt       - Alt text for the image
 * @param {string}  className - Additional wrapper classes
 * @param {number}  width     - Width in px (default 260)
 * @param {number}  height    - Height in px (default 520)
 * @param {number}  rotate    - Rotation in degrees (default 0)
 * @param {boolean} animate   - Enable scroll-triggered entrance animation
 * @param {number}  delay     - Animation delay in seconds
 * @param {string}  size      - Preset size: 'sm' | 'md' | 'lg' (overrides width/height)
 */

const sizes = {
  sm: { w: 180, h: 370 },
  md: { w: 240, h: 490 },
  lg: { w: 280, h: 560 },
};

export default function PhoneFrame({
  src,
  alt = 'App screenshot',
  className = '',
  width,
  height,
  rotate = 0,
  animate = false,
  delay = 0,
  size = 'md',
}) {
  const preset = sizes[size] || sizes.md;
  const w = width || preset.w;
  const h = height || preset.h;

  const frameContent = (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{
        width: w,
        height: h,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      {/* Outer bezel */}
      <div
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] shadow-2xl"
        style={{
          boxShadow:
            '0 25px 60px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06) inset',
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="w-28 h-7 bg-[#0d0d1a] rounded-b-2xl flex items-center justify-center">
            <div className="w-14 h-[5px] rounded-full bg-[#2a2a3e]" />
          </div>
        </div>

        {/* Inner screen */}
        <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-[#0E1A14]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/20 z-20" />
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut', delay }}
        className="inline-flex"
      >
        {frameContent}
      </motion.div>
    );
  }

  return frameContent;
}
