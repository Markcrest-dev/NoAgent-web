# NoAgent Landing Page — Build Prompt

---

Build a full production-grade responsive landing page for a Nigerian
housing platform called NoAgent. The page is built with React (Vite),
Tailwind CSS, and Framer Motion for animations. Fonts are DM Serif
Display for headings and DM Sans for body text, loaded from Google
Fonts.

Use the following design tokens throughout:

  Primary:    #085041
  Accent:     #1D9E75
  Alert:      #D85A30
  Background: #F1EFE8
  White:      #FFFFFF
  Text dark:  #0E1A14
  Text muted: #6B7C74

---

## SECTION 1 — NAVBAR

Build a sticky navbar that is fully transparent when sitting over
the hero section and transitions to a solid white background with
a subtle bottom border shadow when the user scrolls down.

Left side: the NoAgent wordmark logo where "No" is in #085041 and
"Agent" is in #1D9E75, using DM Serif Display font.

Center: navigation links — Features, How It Works, For Landlords,
For Tenants, Download. Links are in text dark, underline on hover
in accent green.

Right side: a "Get Started" button with a #085041 background,
white text, and a rounded pill shape. On hover it transitions
to #1D9E75.

On mobile the center links collapse into a hamburger menu that
slides in a full-screen overlay from the right with the same links
stacked vertically. Animate the overlay entrance with Framer Motion.

---

## SECTION 2 — HERO

Full viewport height section with a #085041 deep teal background
and a subtle repeating geometric pattern or grain texture overlay
at low opacity to add depth.

Layout is a two-column split on desktop and stacked on mobile.

Left column:
  Small uppercase label: "No Agents. No Hidden Fees." in #1D9E75
  with a 1px letter spacing, shown above the headline.

  Main headline in DM Serif Display, large and bold, white color:
    "Cut Out the Agent.
     Keep Your Money."

  Subheadline in DM Sans Regular, #9FE1CB color:
    "NoAgent connects landlords and tenants directly — no
    middlemen, no inflated fees, no wahala. Find your home or
    fill your property in minutes."

  Two CTA buttons side by side:
    Primary: "Download the App" — white background, #085041 text,
    pill shape, bold. On hover background shifts to #F1EFE8.
    Secondary: "See How It Works" — transparent background, white
    border, white text, pill shape. On hover fills white at 10%
    opacity.

  Social proof strip below the buttons showing four items
  separated by a dot or divider:
    ✓ Zero agent fees
    ✓ Verified landlords
    ✓ Direct messaging
    ✓ Digital agreements
  Each item in small DM Sans, #9FE1CB color.

Right column:
  Two overlapping phone mockup frames — one showing the tenant
  browse screen and one tilted slightly showing the landlord
  dashboard — rendered as stylised placeholder UI cards inside
  phone frame shapes built with Tailwind CSS. No real screenshots
  needed, build clean representative UI mockups with the brand
  colours.

Animate the left column content with Framer Motion staggered
entrance — label fades in first, then headline, then subheadline,
then buttons, then the strip. The phone mockups slide in from
the right with a slight delay.

---

## SECTION 3 — THE PROBLEM

Background: #F1EFE8 warm off-white.

Small section label above the headline: "The Problem" in #1D9E75
uppercase with letter spacing.

Headline in DM Serif Display:
  "Nigerian Agents Are Charging Too Much"

Body paragraph in DM Sans, #6B7C74:
  "In Nigeria, renting a home shouldn't cost you twice the rent.
  But that's exactly what happens. Agents stack agency fees,
  inspection fees, and consultation fees on top of your rent
  until the total you pay upfront nearly doubles what the
  landlord actually charges."

Three stat cards in a row below the paragraph. Each card has a
white background, rounded corners, a subtle border, and a soft
shadow. Contents:
  Card 1: Large number "Up to 100%" in #085041, label below
          "Of annual rent lost to agent fees" in muted text.
  Card 2: Large number "3–5 fees" in #085041, label below
          "Stacked charges per rental transaction."
  Card 3: Large number "₦0" in #1D9E75, label below
          "What NoAgent charges tenants to find a home."

Below the stat cards build a before/after cost comparison block.
Two side-by-side panels:

  WITHOUT NoAgent panel — light red/coral tinted background #FFF0EA:
    Title: "Without NoAgent" in #D85A30
    Line items with a ✗ icon in coral:
      Rent:               ₦500,000
      Agent fee:          ₦150,000
      Inspection fee:     ₦20,000
      Consultation fee:   ₦30,000
    Divider line
    Total: ₦700,000 in bold coral

  WITH NoAgent panel — light green tinted background #E1F5EE:
    Title: "With NoAgent" in #085041
    Line items with a ✓ icon in green:
      Rent:               ₦500,000
    Divider line
    Total: ₦500,000 in bold teal
    Small tag below: "You save ₦200,000" in accent green

Animate both panels sliding in from opposite sides on scroll
using Framer Motion whileInView.

---

## SECTION 4 — HOW IT WORKS

Background: white.

Section label: "How It Works" in #1D9E75 uppercase.

Headline in DM Serif Display:
  "Simple. Direct. Done."

Four steps in an alternating left-right layout on desktop and
stacked vertically on mobile. Each step has:
  - A large step number in very light teal as a background
    watermark behind the content
  - An icon or illustrated placeholder in a teal rounded square
  - A bold step title in DM Serif Display
  - A short description paragraph in DM Sans muted

Steps:
  1. Sign Up & Choose Your Role
     Create your account and tell us who you are — a landlord
     with a property to fill, or a tenant looking for a home.
     Your role determines your entire experience on the platform.

  2. Landlords List. Tenants Search.
     Landlords post their property with photos, price, and
     location in minutes. Tenants search by area, budget, and
     bedroom count and browse verified listings instantly.

  3. Connect Directly
     Found a listing you love? Message the landlord directly
     inside the app. No phone numbers needed. Schedule an
     inspection, ask questions, and negotiate — all in one place.

  4. Pay, Sign & Move In
     Choose how long you want to stay, pay securely via Paystack,
     and receive your digital tenancy agreement immediately.
     No agent. No extra fees. Just your new home.

Each step animates in on scroll with Framer Motion whileInView
with a staggered delay between steps.

---

## SECTION 5 — FEATURES FOR TENANTS

Background: #F1EFE8.

Section label: "For Tenants" in #1D9E75 uppercase.

Headline in DM Serif Display:
  "Everything You Need to Find Home — For Free"

Six feature cards in a 3-column grid on desktop, 2-column on
tablet, 1-column on mobile. Each card has a white background,
rounded corners, a hover state that lifts with a shadow and shifts
the border to #1D9E75, and an icon in a small #E1F5EE rounded
square at the top.

Cards:
  1. Zero Agent Fees
     Search and secure your next apartment without paying a single
     naira in agency fees. What you see is what you pay.

  2. Verified Listings
     Every landlord on NoAgent goes through a verification process.
     Look for the verified badge so you know exactly who you're
     dealing with.

  3. Direct Messaging
     Chat directly with landlords inside the app without sharing
     your personal phone number until you're ready.

  4. Inspection Booking
     Request and schedule a property inspection at a time that
     works for you — no agent coordinator needed.

  5. Choose Your Duration
     Staying for 6 months? 2 years? Pick exactly how long you
     want to stay and get a transparent total cost upfront before
     you pay a single naira.

  6. Digital Agreement
     Your tenancy agreement is generated automatically after
     payment and accessible inside the app at any time.

---

## SECTION 6 — FEATURES FOR LANDLORDS

Background: #085041 deep teal.

Section label: "For Landlords" in #1D9E75 uppercase.

Headline in DM Serif Display, white:
  "Fill Your Property Faster. Keep More of Your Money."

Six feature cards in a 3-column grid on desktop. Cards have a
slightly lighter teal background (#0F6E56), white text, rounded
corners, and a hover state that adds a #1D9E75 border.

Cards:
  1. Post Your Property in Minutes
     Add photos, set your price, describe your property, and go
     live. Your listing reaches thousands of active tenants
     immediately.

  2. Low Flat Listing Fee
     Pay a small one-time fee to post — a fraction of what an
     agent charges — and reach more serious verified tenants than
     any agent network.

  3. AI-Powered Descriptions
     Not sure how to write your listing? Our AI engine generates
     a professional compelling property description from just a
     few basic details you provide.

  4. Manage Everything in One Dashboard
     View all your listings, track inspection bookings, manage
     tenancy agreements, and chat with tenants from a single
     clean dashboard.

  5. Tenancy Expiry Alerts
     Never lose track of when a tenancy ends. NoAgent sends both
     you and your tenant automatic reminders at 6 months, 1 month,
     1 week, and 1 day before expiration.

  6. Digital Agreements
     Generate legally structured tenancy agreements automatically
     the moment a tenant pays. No paperwork, no back and forth.

---

## SECTION 7 — TRUST & SAFETY

Background: white.

Section label: "Trust & Safety" in #1D9E75 uppercase.

Headline in DM Serif Display:
  "We Replaced the Agent — Not the Trust"

Body paragraph in DM Sans muted:
  "The one thing agents were supposed to provide was a layer of
  trust between strangers. NoAgent builds that trust directly
  into the platform so you never have to compromise safety to
  save money."

Four trust pillars in a 2x2 grid on desktop and stacked on mobile.
Each pillar has a large icon, a bold title, and a short description.

  1. ID Verification
     Landlords upload official identification to receive a Verified
     badge on their profile and all their listings.

  2. Ratings & Reviews
     Every completed tenancy can be reviewed. Honest public
     feedback from real people builds the reputation of every
     landlord on the platform.

  3. Secure In-App Messaging
     All communication happens inside NoAgent. Your personal phone
     number stays private until you choose to share it.

  4. Digital Tenancy Agreements
     Every tenancy is backed by a structured digital agreement —
     automatically generated, timestamped, and stored securely
     for both parties.

---

## SECTION 8 — ROADMAP TEASER

Background: #F1EFE8.

Section label: "What's Next" in #1D9E75 uppercase.

Headline in DM Serif Display:
  "We're Just Getting Started"

Horizontal scrollable row of cards on mobile, 3-column grid on
desktop. Each card has a white background, a large emoji or icon,
a bold title, and a one-line description. Cards have a "Coming Soon"
pill badge in the top right corner.

Cards:
  🪪 Smile ID Integration
     Real-time face and ID matching for ultimate landlord
     verification and tenant safety.

  🏘️ Neighbourhood Safety Scores
     Crowdsourced ratings for power availability, water supply,
     and general area safety.

  💰 Rent Savings Vault
     Help tenants save monthly towards their next rent cycle
     so they're never caught off guard.

  🔍 Physical Verification
     NoAgent team physically inspects and certifies select
     properties for ultimate peace of mind.

  🤝 Roommate Matching
     Find compatible flatmates and split the cost on shared
     apartments across Nigerian cities.

---

## SECTION 9 — DOWNLOAD CTA

Background: deep teal #085041 with the same grain texture
overlay used in the hero section for visual consistency.

Headline in DM Serif Display, white, centered, large:
  "Your Next Home Is One Tap Away"

Subheadline in DM Sans, #9FE1CB, centered:
  "No agent. No hidden fees. No wahala. Just direct honest
  housing for every Nigerian."

Two buttons centered:
  Primary: "Download on Google Play" — white background,
  #085041 text, pill shape with a Play Store icon on the left.
  Secondary: "App Store — Coming Soon" — transparent background,
  white border, white text, pill shape, reduced opacity to
  signal unavailability.

Small text below the buttons in #9FE1CB:
  "Free to download. Free for tenants. Always."

---

## SECTION 10 — FOOTER

Background: #0E1A14 very dark green-black.

Top row: NoAgent wordmark on the left. Tagline on the right:
  "Rent direct. No wahala." in #6B7C74.

Four-column link grid below:
  Company: About NoAgent, Our Mission, Careers, Press
  Product: For Tenants, For Landlords, Pricing, Download
  Support: Help Centre, Contact Us, Privacy Policy, Terms of Service
  Connect: Twitter/X, Instagram, Facebook, WhatsApp Community

All links in #6B7C74, hover state in white.

Bottom bar with a top border in #1a2e26:
  Left: © 2026 NoAgent. All rights reserved.
  Right: Built for Nigeria 🇳🇬

---

## GENERAL REQUIREMENTS

- Fully responsive across mobile (375px), tablet (768px),
  and desktop (1280px and above)
- All sections animate in on scroll using Framer Motion
  whileInView with a fade-up or slide-in effect and a
  staggered delay between child elements
- Smooth scroll behaviour enabled globally
- All Tailwind custom colours configured in tailwind.config.js
  using the exact brand hex values above
- DM Serif Display and DM Sans loaded via a link tag in
  index.html from Google Fonts
- Page built as a single App.jsx file with each section
  as its own component in a /components folder
- No external UI libraries — pure Tailwind CSS and
  Framer Motion only
