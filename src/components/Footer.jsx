const footerLinks = {
  Company: [
    { label: 'About NoAgent', href: '#' },
    { label: 'Our Mission', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Product: [
    { label: 'For Tenants', href: '#features-tenants' },
    { label: 'For Landlords', href: '#features-landlords' },
    { label: 'Pricing', href: '#' },
    { label: 'Download', href: '#download' },
  ],
  Support: [
    { label: 'Help Centre', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  Connect: [
    { label: 'Twitter / X', href: 'https://twitter.com/noagentng' },
    { label: 'Instagram', href: 'https://instagram.com/noagent.ng' },
    { label: 'Facebook', href: '#' },
    { label: 'WhatsApp Community', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-footer-bg pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
          <a href="#" className="heading-display text-2xl select-none">
            <span className="text-white">No</span>
            <span className="text-accent">Agent</span>
          </a>
          <p className="text-muted text-sm italic">"Rent direct. No wahala."</p>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/80 text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-footer-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-muted text-xs">
          <span>© 2026 NoAgent. All rights reserved.</span>
          <span>Built for Nigeria 🇳🇬</span>
        </div>
      </div>
    </footer>
  );
}
