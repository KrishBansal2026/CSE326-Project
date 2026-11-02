/**
 * ATELIER HIDE — Main Application Script
 * Handmade Leather Goods & Custom Monogram Studio
 * Pure Vanilla JavaScript (ES6+) • Zero Frameworks
 */

'use strict';

/* ==========================================================================
   01. CENTRAL PRODUCT & MATERIAL REPOSITORY
   ========================================================================== */

const PRODUCTS_DATA = {
  handbag: {
    id: 'handbag',
    name: 'The Structured Handbag',
    category: 'Handbags & Totes',
    filterTag: 'Bags',
    basePrice: 28500,
    image: 'assets/images/product-handbag.svg',
    alt: 'The Atelier Structured Handbag with Top Handle and Turn-Lock Clasp',
    shortDesc: 'A masterwork structured top-handle handbag in vegetable-tanned steerhide with hand-molded gussets, rolled handle, and sand-cast solid brass turn-lock clasp.',
    fullDesc: 'Architected with timeless trapezoidal symmetry and hand-molded leather gussets. Features an arched rolled top handle, an interior suede compartment with zip pocket, and an exterior brass turn-lock clasp. Complete with a detachable bespoke hot-stamped leather clochette and four solid brass base feet.',
    dimensions: '32.0 cm × 24.0 cm × 12.0 cm',
    weight: '1,150 grams',
    capacity: 'Daily essentials, tablet, wallet, cosmetic pouch, sunglasses',
    leatherType: 'Certified Full-Grain Tuscan Steerhide',
    hardware: 'Sand-Cast Solid Brass / Brushed Silver Turn-Lock Clasp & Studs',
    care: 'Nourish with organic beeswax balm every 6 months. Buff hardware with a soft microfiber cloth.',
    finishes: ['tan', 'cognac', 'espresso', 'black', 'crazy'],
    monogramPosClass: 'pos-handbag',
    defaultMonogram: 'AH'
  },
  bifold: {
    id: 'bifold',
    name: 'The Everyday Bifold',
    category: 'Small Leather Goods',
    filterTag: 'Wallets',
    basePrice: 4800,
    image: 'assets/images/product-bifold.svg',
    alt: 'The Everyday Bifold in Tuscan Tan Leather',
    shortDesc: 'Six card slots, dual receipt pockets, and a full-length cash compartment folded from a single continuous piece of vegetable-tanned hide.',
    fullDesc: 'Folded from a single continuous cut of 3.5oz Tuscan vegetable-tanned steerhide. Crafted without synthetic linings, paperboard stiffeners, or plastic glues. The bifold contours smoothly to your pocket and develops an exquisite, glassy amber patina. Hand saddle-stitched with beeswaxed French linen thread at 8 stitches per inch.',
    dimensions: '11.0 cm × 9.0 cm × 1.2 cm (Closed)',
    weight: '78 grams',
    capacity: '6–10 cards, unfolded currency, boarding receipts',
    leatherType: 'Certified Full-Grain Tuscan Steerhide',
    hardware: 'Solid Brass or Nickel Corner Reinforcements',
    care: 'Apply natural beeswax & jojoba balm every 6 months. Buff gently with a horsehair brush.',
    finishes: ['tan', 'cognac', 'espresso', 'black', 'crazy'],
    monogramPosClass: 'pos-bifold',
    defaultMonogram: 'AH'
  },
  messenger: {
    id: 'messenger',
    name: 'The Field Messenger',
    category: 'Satchels & Work Bags',
    filterTag: 'Bags',
    basePrice: 18500,
    image: 'assets/images/product-messenger.svg',
    alt: 'The Field Messenger Laptop Bag in Pull-Up Cognac',
    shortDesc: 'Designed for modern transit. Accommodates a 15-inch laptop with reinforced solid brass hardware and an adjustable hand-beveled shoulder strap.',
    fullDesc: 'Engineered for decades of urban transit and field travel. Features an unlined main compartment that comfortably accommodates up to a 15-inch laptop, interior folio slots for notebook and passport, and dual closure straps anchored with sand-cast solid brass roller buckles. Reinforced with cold-forged solid copper rivets at every stress junction.',
    dimensions: '38.0 cm × 28.5 cm × 9.5 cm',
    weight: '1,420 grams',
    capacity: '15" Laptop, tablet, charger, notebook, umbrella, everyday carry',
    leatherType: '5.5oz Heavyweight Full-Grain Oil-Pull-Up Hide',
    hardware: 'Solid Sand-Cast Brass / Brushed Silver Roller Buckles',
    care: 'Treat with natural leather conditioner annually. Store in supplied organic cotton dust cover.',
    finishes: ['tan', 'cognac', 'espresso', 'black', 'crazy'],
    monogramPosClass: 'pos-messenger',
    defaultMonogram: 'AH'
  },
  passport: {
    id: 'passport',
    name: 'The Passport Companion',
    category: 'Travel Accessories',
    filterTag: 'Travel',
    basePrice: 3200,
    image: 'assets/images/product-passport.svg',
    alt: 'The Passport Companion Travel Folio',
    shortDesc: 'A slim, protective bifold folio crafted to house your passport, boarding passes, SIM card ejector tool, and currency with zero bulk.',
    fullDesc: 'The definitive international travel folio. Precision-skived to remain ultra-slim while safeguarding your passport booklet, folded boarding passes, and frequent-flyer cards. Hand-beveled burnished edges and corner metal bumpers ensure smooth sliding into jacket pockets without snagging.',
    dimensions: '14.5 cm × 10.2 cm × 0.8 cm',
    weight: '62 grams',
    capacity: 'Passport booklet, 4 travel cards, folded boarding passes, SIM pin',
    leatherType: '3.0oz Vegetable-Tanned Full-Grain Calfskin',
    hardware: 'Machined Solid Brass / Brushed Silver Corner Guards',
    care: 'Keep dry. If exposed to heavy humidity, air dry naturally at room temperature.',
    finishes: ['tan', 'cognac', 'espresso', 'black', 'crazy'],
    monogramPosClass: 'pos-passport',
    defaultMonogram: 'AH'
  },
  weekender: {
    id: 'weekender',
    name: 'The Weekender No. 01',
    category: 'Travel & Luggage',
    filterTag: 'Travel',
    basePrice: 26000,
    image: 'assets/images/product-weekender.svg',
    alt: 'The Weekender No. 01 Duffel Bag with Monogram Tag',
    shortDesc: 'Our flagship duffel bag. Hand-hammered copper rivets, heavy-gauge YKK solid brass zipper, and an unlined full-grain interior that breathes.',
    fullDesc: 'Our masterwork piece. Crafted from large, hand-selected vegetable-tanned hides free of pieced joint seams. Features rolled leather handles filled with organic cord, a detachable 40mm wide padded shoulder strap, and an oversized heavy-gauge metal zipper that opens wide for effortless packing. Complete with a detachable bespoke hot-stamped luggage tag.',
    dimensions: '52.0 cm × 30.0 cm × 28.0 cm',
    weight: '2,150 grams',
    capacity: '42 Liters (3–5 days of travel apparel, shoes & toiletry kit)',
    leatherType: '6.0oz Full-Grain Steerhide with Natural Wax Dressing',
    hardware: 'Heavy-Gauge Solid Brass Zipper & Swivel Lobster Clasps',
    care: 'Condition with high-grade leather balm twice a year. Buff hardware with dry microfiber cloth.',
    finishes: ['tan', 'cognac', 'espresso', 'black', 'crazy'],
    monogramPosClass: 'pos-weekender',
    defaultMonogram: 'AH'
  }
};


/* Raw Inline SVG Template Repository for Dynamic Live Color & Shader Reactivity */
const PRODUCT_SVGS = {
  "handbag": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 650\" width=\"100%\" height=\"100%\" id=\"svg-handbag\">\n  <defs>\n    <linearGradient id=\"hb-leather-grad\" x1=\"15%\" y1=\"0%\" x2=\"85%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"50%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n    <linearGradient id=\"hb-flap-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"70%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n    <linearGradient id=\"hb-strap-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-dark, #78532d)\" />\n      <stop offset=\"50%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #78532d)\" />\n    </linearGradient>\n    <linearGradient id=\"hb-hw-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--hw-light, #e4cb93)\" />\n      <stop offset=\"45%\" stop-color=\"var(--hw-mid, #a88952)\" />\n      <stop offset=\"100%\" stop-color=\"var(--hw-dark, #5d461e)\" />\n    </linearGradient>\n    <filter id=\"hb-shadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"28\" stdDeviation=\"24\" flood-color=\"#140d0a\" flood-opacity=\"0.38\" />\n      <feDropShadow dx=\"0\" dy=\"8\" stdDeviation=\"10\" flood-color=\"#140d0a\" flood-opacity=\"0.22\" />\n    </filter>\n    <filter id=\"hb-flap-shadow\" x=\"-10%\" y=\"-10%\" width=\"120%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"14\" stdDeviation=\"12\" flood-color=\"#100a07\" flood-opacity=\"0.45\" />\n    </filter>\n  </defs>\n  <ellipse cx=\"400\" cy=\"580\" rx=\"320\" ry=\"38\" fill=\"#0d0806\" opacity=\"0.36\" filter=\"blur(18px)\" />\n  <g filter=\"url(#hb-shadow)\">\n    <path d=\"M 310 220 C 310 90, 490 90, 490 220\" fill=\"none\" stroke=\"url(#hb-strap-grad)\" stroke-width=\"20\" stroke-linecap=\"round\" opacity=\"0.75\" />\n    <g transform=\"translate(0, 542)\">\n      <circle cx=\"230\" cy=\"0\" r=\"7\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1.5\" />\n      <circle cx=\"570\" cy=\"0\" r=\"7\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1.5\" />\n      <circle cx=\"340\" cy=\"2\" r=\"6\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n      <circle cx=\"460\" cy=\"2\" r=\"6\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n    </g>\n    <path d=\"M 180 320 C 158 320 158 360 180 360\" fill=\"none\" stroke=\"url(#hb-hw-grad)\" stroke-width=\"6\" stroke-linecap=\"round\" />\n    <path d=\"M 620 320 C 642 320 642 360 620 360\" fill=\"none\" stroke=\"url(#hb-hw-grad)\" stroke-width=\"6\" stroke-linecap=\"round\" />\n    <path d=\"M 175 510 L 215 220 Q 218 210 230 210 L 570 210 Q 582 210 585 220 L 625 510 Q 630 540 595 540 L 205 540 Q 170 540 175 510 Z\" fill=\"url(#hb-leather-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2.5\" />\n    <path d=\"M 215 220 Q 240 370 225 530\" fill=\"none\" stroke=\"var(--leather-base-dark, #5d3d1e)\" stroke-width=\"3\" opacity=\"0.35\" />\n    <path d=\"M 585 220 Q 560 370 575 530\" fill=\"none\" stroke=\"var(--leather-base-dark, #5d3d1e)\" stroke-width=\"3\" opacity=\"0.35\" />\n    <path d=\"M 176 524 Q 400 532 624 524\" fill=\"none\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"3\" opacity=\"0.7\" />\n    <path d=\"M 185 528 L 615 528\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" opacity=\"0.8\" />\n    <path d=\"M 187 505 L 225 225 L 575 225 L 613 505 Q 616 530 588 530 L 212 530 Q 184 530 187 505 Z\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2.2\" stroke-dasharray=\"7 5\" stroke-linecap=\"round\" opacity=\"0.85\" />\n    <g filter=\"url(#hb-flap-shadow)\">\n      <path d=\"M 220 210 L 580 210 L 570 340 Q 565 400 490 400 L 310 400 Q 235 400 230 340 Z\" fill=\"url(#hb-flap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2.2\" />\n      <path d=\"M 230 218 L 570 218 L 560 338 Q 555 390 485 390 L 315 390 Q 245 390 240 338 Z\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" opacity=\"0.9\" />\n    </g>\n    <g transform=\"translate(400, 365)\">\n      <rect x=\"-38\" y=\"-22\" width=\"76\" height=\"44\" rx=\"10\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"2\" />\n      <rect x=\"-33\" y=\"-17\" width=\"66\" height=\"34\" rx=\"7\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\"0.25\" stroke-width=\"1\" />\n      <circle cx=\"-28\" cy=\"-12\" r=\"2.5\" fill=\"#24160d\" />\n      <circle cx=\"28\" cy=\"-12\" r=\"2.5\" fill=\"#24160d\" />\n      <circle cx=\"-28\" cy=\"12\" r=\"2.5\" fill=\"#24160d\" />\n      <circle cx=\"28\" cy=\"12\" r=\"2.5\" fill=\"#24160d\" />\n      <ellipse cx=\"0\" cy=\"0\" rx=\"18\" ry=\"14\" fill=\"#140d08\" stroke=\"url(#hb-hw-grad)\" stroke-width=\"2\" />\n      <rect x=\"-18\" y=\"-5.5\" width=\"36\" height=\"11\" rx=\"4\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1.5\" />\n      <circle cx=\"0\" cy=\"0\" r=\"3\" fill=\"#fff\" opacity=\"0.4\" />\n    </g>\n    <g transform=\"translate(305, 195)\">\n      <rect x=\"-16\" y=\"0\" width=\"32\" height=\"48\" rx=\"6\" fill=\"url(#hb-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.8\" />\n      <rect x=\"-11\" y=\"5\" width=\"22\" height=\"38\" rx=\"3\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n      <path d=\"M -16 6 C -16 -12, 16 -12, 16 6 Z\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"2\" />\n      <circle cx=\"0\" cy=\"24\" r=\"4.5\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1.2\" />\n    </g>\n    <g transform=\"translate(495, 195)\">\n      <rect x=\"-16\" y=\"0\" width=\"32\" height=\"48\" rx=\"6\" fill=\"url(#hb-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.8\" />\n      <rect x=\"-11\" y=\"5\" width=\"22\" height=\"38\" rx=\"3\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n      <path d=\"M -16 6 C -16 -12, 16 -12, 16 6 Z\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"2\" />\n      <circle cx=\"0\" cy=\"24\" r=\"4.5\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1.2\" />\n    </g>\n    <path d=\"M 305 200 C 305 60, 495 60, 495 200\" fill=\"none\" stroke=\"url(#hb-strap-grad)\" stroke-width=\"22\" stroke-linecap=\"round\" />\n    <path d=\"M 305 200 C 305 60, 495 60, 495 200\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" opacity=\"0.85\" />\n    <g transform=\"translate(290, 200)\">\n      <path d=\"M 15 0 L 0 110\" stroke=\"url(#hb-strap-grad)\" stroke-width=\"7\" stroke-linecap=\"round\" />\n      <circle cx=\"15\" cy=\"14\" r=\"3.5\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n      <g transform=\"translate(-18, 110)\">\n        <path d=\"M 18 0 L 36 28 L 36 95 Q 36 108 24 108 L 12 108 Q 0 108 0 95 L 0 28 Z\" fill=\"url(#hb-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2\" />\n        <path d=\"M 18 6 L 31 30 L 31 92 Q 31 102 22 102 L 14 102 Q 5 102 5 92 L 5 30 Z\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" opacity=\"0.9\" />\n        <circle cx=\"18\" cy=\"22\" r=\"3\" fill=\"url(#hb-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n        <g id=\"svg-monogram-target\" transform=\"translate(18, 62)\"></g>\n      </g>\n    </g>\n  </g>\n</svg>",
  "bifold": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 650\" width=\"100%\" height=\"100%\" id=\"svg-bifold\">\n  <defs>\n    <!-- Dynamic Leather Gradient -->\n    <linearGradient id=\"bifold-leather-grad\" x1=\"15%\" y1=\"10%\" x2=\"85%\" y2=\"90%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"50%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n\n    <linearGradient id=\"bifold-crease-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#000\" stop-opacity=\"0.35\" />\n      <stop offset=\"50%\" stop-color=\"#fff\" stop-opacity=\"0.12\" />\n      <stop offset=\"100%\" stop-color=\"#000\" stop-opacity=\"0.4\" />\n    </linearGradient>\n\n    <!-- Drop Shadow for Leather Elevation -->\n    <filter id=\"leather-shadow\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"24\" stdDeviation=\"22\" flood-color=\"#140d0a\" flood-opacity=\"0.32\" />\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"8\" flood-color=\"#140d0a\" flood-opacity=\"0.2\" />\n    </filter>\n\n    <!-- Hardware Gradient -->\n    <linearGradient id=\"hardware-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--hw-light, #e4cb93)\" />\n      <stop offset=\"45%\" stop-color=\"var(--hw-mid, #a88952)\" />\n      <stop offset=\"100%\" stop-color=\"var(--hw-dark, #5d461e)\" />\n    </linearGradient>\n  </defs>\n\n  <!-- Background Ambience & Ground Shadow -->\n  <ellipse cx=\"400\" cy=\"560\" rx=\"310\" ry=\"40\" fill=\"#0c0705\" opacity=\"0.28\" filter=\"blur(16px)\" />\n\n  <!-- Outer Leather Shell with Shadow -->\n  <g filter=\"url(#leather-shadow)\">\n    <!-- Main Folded Bifold Body -->\n    <rect id=\"bifold-body\" x=\"140\" y=\"110\" width=\"520\" height=\"420\" rx=\"28\" ry=\"28\" fill=\"url(#bifold-leather-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2\" />\n\n    <!-- Spine fold highlight / crease -->\n    <rect x=\"390\" y=\"110\" width=\"20\" height=\"420\" fill=\"url(#bifold-crease-grad)\" opacity=\"0.35\" />\n    <line x1=\"399\" y1=\"110\" x2=\"399\" y2=\"530\" stroke=\"#000\" stroke-opacity=\"0.25\" stroke-width=\"2\" />\n    <line x1=\"401\" y1=\"110\" x2=\"401\" y2=\"530\" stroke=\"#fff\" stroke-opacity=\"0.15\" stroke-width=\"1.5\" />\n\n    <!-- Burnished Beveled Edge Border -->\n    <rect x=\"144\" y=\"114\" width=\"512\" height=\"412\" rx=\"24\" ry=\"24\" fill=\"none\" stroke=\"#2a1a12\" stroke-width=\"1.8\" stroke-opacity=\"0.6\" />\n\n    <!-- Traditional Saddle Stitching (Perimeter) -->\n    <rect x=\"154\" y=\"124\" width=\"492\" height=\"392\" rx=\"20\" ry=\"20\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2.2\" stroke-dasharray=\"7 5\" stroke-linecap=\"round\" opacity=\"0.85\" />\n\n    <!-- Front Exterior Card Slot Arc Detail -->\n    <path d=\"M 460 210 Q 560 230 648 210\" fill=\"none\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"3\" opacity=\"0.8\" />\n    <path d=\"M 460 212 Q 560 232 648 212\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" opacity=\"0.25\" />\n    <path d=\"M 466 222 Q 560 240 642 222\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" opacity=\"0.75\" />\n\n    <!-- Atelier Hide Maker's Mark (Subtle Blind Debossed Brand Logo) -->\n    <g transform=\"translate(230, 445)\" opacity=\"0.38\">\n      <circle cx=\"20\" cy=\"20\" r=\"16\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\" />\n      <text x=\"20\" y=\"24\" font-family=\"'Cormorant Garamond', Georgia, serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#000\" letter-spacing=\"1\">AH</text>\n    </g>\n\n    <!-- Solid Hardware Accent Rivet (Corner Reinforcement) -->\n    <g transform=\"translate(170, 140)\">\n      <circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"url(#hardware-grad)\" stroke=\"#2b1a0d\" stroke-width=\"1\" />\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\"0.4\" stroke-width=\"0.8\" />\n      <circle cx=\"-1.5\" cy=\"-1.5\" r=\"1.5\" fill=\"#fff\" opacity=\"0.6\" />\n    </g>\n    <g transform=\"translate(630, 140)\">\n      <circle cx=\"0\" cy=\"0\" r=\"7\" fill=\"url(#hardware-grad)\" stroke=\"#2b1a0d\" stroke-width=\"1\" />\n      <circle cx=\"0\" cy=\"0\" r=\"4.5\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\"0.4\" stroke-width=\"0.8\" />\n      <circle cx=\"-1.5\" cy=\"-1.5\" r=\"1.5\" fill=\"#fff\" opacity=\"0.6\" />\n    </g>\n\n    <!-- Monogram Zone (Interactive Stamping Plate Area) -->\n    <!-- The HTML/JS will project custom monogram right here or directly overlay -->\n    <g id=\"svg-monogram-target\" transform=\"translate(560, 455)\">\n      <!-- Target Area Frame for visual alignment -->\n    </g>\n  </g>\n</svg>",
  "messenger": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 650\" width=\"100%\" height=\"100%\" id=\"svg-messenger\">\n  <defs>\n    <linearGradient id=\"msg-leather-grad\" x1=\"10%\" y1=\"0%\" x2=\"90%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"60%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n\n    <linearGradient id=\"msg-flap-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"85%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n\n    <linearGradient id=\"msg-strap-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-dark, #78532d)\" />\n      <stop offset=\"50%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #78532d)\" />\n    </linearGradient>\n\n    <filter id=\"msg-shadow\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"28\" stdDeviation=\"24\" flood-color=\"#140d0a\" flood-opacity=\"0.34\" />\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"10\" flood-color=\"#140d0a\" flood-opacity=\"0.22\" />\n    </filter>\n\n    <filter id=\"flap-drop\" x=\"-10%\" y=\"-10%\" width=\"120%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"12\" stdDeviation=\"10\" flood-color=\"#120c08\" flood-opacity=\"0.45\" />\n    </filter>\n\n    <linearGradient id=\"msg-hw-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--hw-light, #e4cb93)\" />\n      <stop offset=\"45%\" stop-color=\"var(--hw-mid, #a88952)\" />\n      <stop offset=\"100%\" stop-color=\"var(--hw-dark, #5d461e)\" />\n    </linearGradient>\n  </defs>\n\n  <!-- Ground Shadow -->\n  <ellipse cx=\"400\" cy=\"580\" rx=\"340\" ry=\"42\" fill=\"#0d0806\" opacity=\"0.32\" filter=\"blur(18px)\" />\n\n  <g filter=\"url(#msg-shadow)\">\n    <!-- Top Carry Handle Base & Arch -->\n    <path d=\"M 330 145 C 330 75, 470 75, 470 145\" fill=\"none\" stroke=\"url(#msg-strap-grad)\" stroke-width=\"26\" stroke-linecap=\"round\" />\n    <path d=\"M 330 145 C 330 75, 470 75, 470 145\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" />\n    <!-- Handle Anchors -->\n    <rect x=\"312\" y=\"130\" width=\"36\" height=\"32\" rx=\"6\" fill=\"url(#msg-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n    <rect x=\"452\" y=\"130\" width=\"36\" height=\"32\" rx=\"6\" fill=\"url(#msg-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n    <circle cx=\"330\" cy=\"146\" r=\"5\" fill=\"url(#msg-hw-grad)\" stroke=\"#22140b\" stroke-width=\"1\" />\n    <circle cx=\"470\" cy=\"146\" r=\"5\" fill=\"url(#msg-hw-grad)\" stroke=\"#22140b\" stroke-width=\"1\" />\n\n    <!-- Side D-Rings for Shoulder Strap -->\n    <path d=\"M 125 240 C 105 240 105 290 125 290\" fill=\"none\" stroke=\"url(#msg-hw-grad)\" stroke-width=\"8\" stroke-linecap=\"round\" />\n    <path d=\"M 675 240 C 695 240 695 290 675 290\" fill=\"none\" stroke=\"url(#msg-hw-grad)\" stroke-width=\"8\" stroke-linecap=\"round\" />\n\n    <!-- Main Bag Body / Gusset Behind -->\n    <rect x=\"120\" y=\"140\" width=\"560\" height=\"390\" rx=\"20\" fill=\"url(#msg-leather-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2\" />\n    <rect x=\"128\" y=\"148\" width=\"544\" height=\"374\" rx=\"14\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"7 5\" />\n\n    <!-- Main Flap Over Body -->\n    <g filter=\"url(#flap-drop)\">\n      <path d=\"M 116 140 L 684 140 C 684 140 684 370 684 380 Q 684 410 650 410 L 150 410 Q 116 410 116 380 Z\" fill=\"url(#msg-flap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2.5\" />\n      <!-- Flap Perimeter Stitching -->\n      <path d=\"M 126 148 L 674 148 C 674 148 674 365 674 375 Q 674 400 644 400 L 156 400 Q 126 400 126 375 Z\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2.2\" stroke-dasharray=\"7 5\" />\n    </g>\n\n    <!-- Vertical Closure Straps with Solid Hardware Buckles -->\n    <!-- Left Strap -->\n    <g>\n      <rect x=\"230\" y=\"140\" width=\"42\" height=\"350\" rx=\"4\" fill=\"url(#msg-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n      <line x1=\"236\" y1=\"140\" x2=\"236\" y2=\"480\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n      <line x1=\"266\" y1=\"140\" x2=\"266\" y2=\"480\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n      <!-- Buckle Base Frame -->\n      <rect x=\"220\" y=\"380\" width=\"62\" height=\"48\" rx=\"6\" fill=\"url(#msg-hw-grad)\" stroke=\"#2a1a0e\" stroke-width=\"2\" />\n      <rect x=\"230\" y=\"390\" width=\"42\" height=\"28\" rx=\"3\" fill=\"#18110b\" />\n      <!-- Buckle Tongue/Prong -->\n      <rect x=\"248\" y=\"375\" width=\"6\" height=\"56\" rx=\"2\" fill=\"url(#msg-hw-grad)\" stroke=\"#2a1a0e\" stroke-width=\"1\" />\n      <!-- Hardware Stud Rivets -->\n      <circle cx=\"251\" cy=\"455\" r=\"5\" fill=\"url(#msg-hw-grad)\" stroke=\"#2a1a0e\" stroke-width=\"1\" />\n    </g>\n\n    <!-- Right Strap -->\n    <g>\n      <rect x=\"528\" y=\"140\" width=\"42\" height=\"350\" rx=\"4\" fill=\"url(#msg-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n      <line x1=\"534\" y1=\"140\" x2=\"534\" y2=\"480\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n      <line x1=\"564\" y1=\"140\" x2=\"564\" y2=\"480\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n      <!-- Buckle Base Frame -->\n      <rect x=\"518\" y=\"380\" width=\"62\" height=\"48\" rx=\"6\" fill=\"url(#msg-hw-grad)\" stroke=\"#2a1a0e\" stroke-width=\"2\" />\n      <rect x=\"528\" y=\"390\" width=\"42\" height=\"28\" rx=\"3\" fill=\"#18110b\" />\n      <!-- Buckle Tongue/Prong -->\n      <rect x=\"546\" y=\"375\" width=\"6\" height=\"56\" rx=\"2\" fill=\"url(#msg-hw-grad)\" stroke=\"#2a1a0e\" stroke-width=\"1\" />\n      <!-- Hardware Stud Rivets -->\n      <circle cx=\"549\" cy=\"455\" r=\"5\" fill=\"url(#msg-hw-grad)\" stroke=\"#2a1a0e\" stroke-width=\"1\" />\n    </g>\n\n    <!-- Monogram Target Spot (Center-bottom of the Flap between straps) -->\n    <g id=\"svg-monogram-target\" transform=\"translate(400, 360)\">\n      <!-- Positioned right on the lower mid flap -->\n    </g>\n  </g>\n</svg>",
  "passport": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 650\" width=\"100%\" height=\"100%\" id=\"svg-passport\">\n  <defs>\n    <linearGradient id=\"pass-leather-grad\" x1=\"15%\" y1=\"0%\" x2=\"85%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"50%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n\n    <filter id=\"pass-shadow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feDropShadow dx=\"0\" dy=\"24\" stdDeviation=\"22\" flood-color=\"#140d0a\" flood-opacity=\"0.32\" />\n      <feDropShadow dx=\"0\" dy=\"4\" stdDeviation=\"8\" flood-color=\"#140d0a\" flood-opacity=\"0.2\" />\n    </filter>\n\n    <linearGradient id=\"pass-hw-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--hw-light, #e4cb93)\" />\n      <stop offset=\"45%\" stop-color=\"var(--hw-mid, #a88952)\" />\n      <stop offset=\"100%\" stop-color=\"var(--hw-dark, #5d461e)\" />\n    </linearGradient>\n  </defs>\n\n  <!-- Ground Shadow -->\n  <ellipse cx=\"400\" cy=\"570\" rx=\"260\" ry=\"36\" fill=\"#0c0705\" opacity=\"0.3\" filter=\"blur(16px)\" />\n\n  <g filter=\"url(#pass-shadow)\">\n    <!-- Pen Loop Tab on Right -->\n    <path d=\"M 570 270 Q 615 270 615 315 Q 615 360 570 360 Z\" fill=\"url(#pass-leather-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2\" />\n    <path d=\"M 570 278 Q 605 278 605 315 Q 605 352 570 352\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"5 4\" />\n    <circle cx=\"585\" cy=\"315\" r=\"4.5\" fill=\"url(#pass-hw-grad)\" stroke=\"#20130a\" stroke-width=\"1\" />\n\n    <!-- Main Folio Body (Slightly tilted or centered vertical folio) -->\n    <rect x=\"230\" y=\"80\" width=\"340\" height=\"490\" rx=\"22\" fill=\"url(#pass-leather-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2\" />\n\n    <!-- Spine fold shadow on left edge -->\n    <rect x=\"230\" y=\"80\" width=\"18\" height=\"490\" rx=\"4\" fill=\"#000\" opacity=\"0.18\" />\n    <line x1=\"248\" y1=\"80\" x2=\"248\" y2=\"570\" stroke=\"#fff\" stroke-opacity=\"0.12\" stroke-width=\"1.5\" />\n\n    <!-- Perimeter Burnished Edge -->\n    <rect x=\"236\" y=\"86\" width=\"328\" height=\"478\" rx=\"18\" fill=\"none\" stroke=\"#26160e\" stroke-width=\"1.5\" stroke-opacity=\"0.5\" />\n\n    <!-- Perimeter Saddle Stitching -->\n    <rect x=\"246\" y=\"96\" width=\"308\" height=\"458\" rx=\"14\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2.2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" opacity=\"0.85\" />\n\n    <!-- Upper Embossed Atelier Crest -->\n    <g transform=\"translate(400, 200)\" opacity=\"0.4\">\n      <circle cx=\"0\" cy=\"0\" r=\"28\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\" />\n      <path d=\"M -16 6 L 0 -18 L 16 6 M -10 -2 L 10 -2\" stroke=\"#000\" stroke-width=\"2\" fill=\"none\" />\n      <text x=\"0\" y=\"44\" font-family=\"'Cormorant Garamond', Georgia, serif\" font-size=\"12\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#000\" letter-spacing=\"3\">PASSPORT</text>\n    </g>\n\n    <!-- Brass / Hardware Corner Protectors -->\n    <g transform=\"translate(230, 80)\">\n      <path d=\"M 0 35 L 0 10 Q 0 0 10 0 L 35 0 Q 15 15 0 35 Z\" fill=\"url(#pass-hw-grad)\" stroke=\"#221208\" stroke-width=\"1\" />\n      <circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"#221208\" />\n    </g>\n    <g transform=\"translate(570, 80)\">\n      <path d=\"M 0 35 L 0 10 Q 0 0 -10 0 L -35 0 Q -15 15 0 35 Z\" fill=\"url(#pass-hw-grad)\" stroke=\"#221208\" stroke-width=\"1\" />\n      <circle cx=\"-12\" cy=\"12\" r=\"2.5\" fill=\"#221208\" />\n    </g>\n    <g transform=\"translate(570, 570)\">\n      <path d=\"M 0 -35 L 0 -10 Q 0 0 -10 0 L -35 0 Q -15 -15 0 -35 Z\" fill=\"url(#pass-hw-grad)\" stroke=\"#221208\" stroke-width=\"1\" />\n      <circle cx=\"-12\" cy=\"-12\" r=\"2.5\" fill=\"#221208\" />\n    </g>\n    <g transform=\"translate(230, 570)\">\n      <path d=\"M 0 -35 L 0 -10 Q 0 0 10 0 L 35 0 Q 15 -15 0 -35 Z\" fill=\"url(#pass-hw-grad)\" stroke=\"#221208\" stroke-width=\"1\" />\n      <circle cx=\"12\" cy=\"-12\" r=\"2.5\" fill=\"#221208\" />\n    </g>\n\n    <!-- Monogram Target Spot (Lower Center) -->\n    <g id=\"svg-monogram-target\" transform=\"translate(400, 420)\">\n      <!-- Centered stamping zone -->\n    </g>\n  </g>\n</svg>",
  "weekender": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 650\" width=\"100%\" height=\"100%\" id=\"svg-weekender\">\n  <defs>\n    <linearGradient id=\"wkd-leather-grad\" x1=\"0%\" y1=\"10%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-light, #c99f74)\" />\n      <stop offset=\"45%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #8f653b)\" />\n    </linearGradient>\n\n    <linearGradient id=\"wkd-barrel-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-dark, #78532d)\" stop-opacity=\"0.6\" />\n      <stop offset=\"15%\" stop-color=\"var(--leather-base-mid, #bd9367)\" stop-opacity=\"0.1\" />\n      <stop offset=\"85%\" stop-color=\"var(--leather-base-mid, #bd9367)\" stop-opacity=\"0.1\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #78532d)\" stop-opacity=\"0.6\" />\n    </linearGradient>\n\n    <linearGradient id=\"wkd-strap-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n      <stop offset=\"0%\" stop-color=\"var(--leather-base-dark, #78532d)\" />\n      <stop offset=\"50%\" stop-color=\"var(--leather-base-mid, #bd9367)\" />\n      <stop offset=\"100%\" stop-color=\"var(--leather-base-dark, #78532d)\" />\n    </linearGradient>\n\n    <filter id=\"wkd-shadow\" x=\"-15%\" y=\"-15%\" width=\"130%\" height=\"130%\">\n      <feDropShadow dx=\"0\" dy=\"30\" stdDeviation=\"26\" flood-color=\"#140d0a\" flood-opacity=\"0.36\" />\n      <feDropShadow dx=\"0\" dy=\"6\" stdDeviation=\"10\" flood-color=\"#140d0a\" flood-opacity=\"0.22\" />\n    </filter>\n\n    <linearGradient id=\"wkd-hw-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"var(--hw-light, #e4cb93)\" />\n      <stop offset=\"45%\" stop-color=\"var(--hw-mid, #a88952)\" />\n      <stop offset=\"100%\" stop-color=\"var(--hw-dark, #5d461e)\" />\n    </linearGradient>\n  </defs>\n\n  <!-- Ground Shadow -->\n  <ellipse cx=\"400\" cy=\"585\" rx=\"360\" ry=\"45\" fill=\"#0d0806\" opacity=\"0.34\" filter=\"blur(20px)\" />\n\n  <g filter=\"url(#wkd-shadow)\">\n    <!-- Back Handle Arch -->\n    <path d=\"M 280 230 C 280 90, 520 90, 520 230\" fill=\"none\" stroke=\"url(#wkd-strap-grad)\" stroke-width=\"22\" stroke-linecap=\"round\" opacity=\"0.8\" />\n\n    <!-- Main Duffel Body (Curved Barrel Silhouette) -->\n    <path d=\"M 120 490 L 120 300 Q 120 220 210 210 L 590 210 Q 680 220 680 300 L 680 490 Q 680 540 600 540 L 200 540 Q 120 540 120 490 Z\" fill=\"url(#wkd-leather-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2.5\" />\n    <path d=\"M 120 490 L 120 300 Q 120 220 210 210 L 590 210 Q 680 220 680 300 L 680 490 Q 680 540 600 540 L 200 540 Q 120 540 120 490 Z\" fill=\"url(#wkd-barrel-grad)\" />\n\n    <!-- Top Heavy Zipper Line -->\n    <path d=\"M 180 215 Q 400 205 620 215\" fill=\"none\" stroke=\"url(#wkd-hw-grad)\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-dasharray=\"4 2\" />\n    <circle cx=\"210\" cy=\"215\" r=\"7\" fill=\"url(#wkd-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1.5\" />\n    <!-- Zipper Pull Tab -->\n    <path d=\"M 210 215 L 195 245 L 205 250 L 220 220 Z\" fill=\"url(#wkd-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1\" />\n\n    <!-- End Gusset Oval Stitch Lines -->\n    <path d=\"M 170 230 Q 135 340 135 440 Q 135 510 170 530\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"6 4\" />\n    <path d=\"M 630 230 Q 665 340 665 440 Q 665 510 630 530\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"6 4\" />\n\n    <!-- Base Reinforcement Trim -->\n    <path d=\"M 120 470 L 680 470 L 680 520 Q 680 540 600 540 L 200 540 Q 120 540 120 520 Z\" fill=\"url(#wkd-strap-grad)\" opacity=\"0.65\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n    <line x1=\"120\" y1=\"472\" x2=\"680\" y2=\"472\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"6 4\" />\n\n    <!-- Dual Heavy Reinforcement Straps (Wrapping around duffel) -->\n    <!-- Left Wrap Strap -->\n    <rect x=\"250\" y=\"210\" width=\"38\" height=\"330\" fill=\"url(#wkd-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n    <line x1=\"256\" y1=\"210\" x2=\"256\" y2=\"540\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n    <line x1=\"282\" y1=\"210\" x2=\"282\" y2=\"540\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n\n    <!-- Right Wrap Strap -->\n    <rect x=\"512\" y=\"210\" width=\"38\" height=\"330\" fill=\"url(#wkd-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n    <line x1=\"518\" y1=\"210\" x2=\"518\" y2=\"540\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n    <line x1=\"544\" y1=\"210\" x2=\"544\" y2=\"540\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\" />\n\n    <!-- Front Rolled Carry Handle -->\n    <path d=\"M 269 310 C 269 110, 531 110, 531 310\" fill=\"none\" stroke=\"url(#wkd-strap-grad)\" stroke-width=\"24\" stroke-linecap=\"round\" />\n    <path d=\"M 269 310 C 269 110, 531 110, 531 310\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"2\" stroke-dasharray=\"6 4\" stroke-linecap=\"round\" />\n\n    <!-- Handle Bases Cross-box Stitching & Heavy Copper/Brass Rivets -->\n    <g transform=\"translate(250, 275)\">\n      <rect x=\"0\" y=\"0\" width=\"38\" height=\"50\" rx=\"4\" fill=\"url(#wkd-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n      <rect x=\"4\" y=\"4\" width=\"30\" height=\"42\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <line x1=\"4\" y1=\"4\" x2=\"34\" y2=\"46\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <line x1=\"34\" y1=\"4\" x2=\"4\" y2=\"46\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <circle cx=\"19\" cy=\"25\" r=\"5\" fill=\"url(#wkd-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n    </g>\n    <g transform=\"translate(512, 275)\">\n      <rect x=\"0\" y=\"0\" width=\"38\" height=\"50\" rx=\"4\" fill=\"url(#wkd-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"1.5\" />\n      <rect x=\"4\" y=\"4\" width=\"30\" height=\"42\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <line x1=\"4\" y1=\"4\" x2=\"34\" y2=\"46\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <line x1=\"34\" y1=\"4\" x2=\"4\" y2=\"46\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <circle cx=\"19\" cy=\"25\" r=\"5\" fill=\"url(#wkd-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n    </g>\n\n    <!-- Hanging Bespoke Luggage Tag (The Monogram Canvas Area) -->\n    <g transform=\"translate(350, 240)\">\n      <!-- Leather Hanging Strap -->\n      <path d=\"M 28 0 L 28 85\" stroke=\"url(#wkd-strap-grad)\" stroke-width=\"8\" stroke-linecap=\"round\" />\n      <circle cx=\"28\" cy=\"40\" r=\"4\" fill=\"url(#wkd-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n      <!-- Luggage Tag Shield Body -->\n      <path d=\"M 0 85 L 56 85 L 56 185 Q 56 195 46 195 L 10 195 Q 0 195 0 185 Z\" fill=\"url(#wkd-strap-grad)\" stroke=\"var(--leather-base-dark, #78532d)\" stroke-width=\"2\" />\n      <!-- Tag Perimeter Stitching -->\n      <path d=\"M 5 90 L 51 90 L 51 180 Q 51 190 43 190 L 13 190 Q 5 190 5 180 Z\" fill=\"none\" stroke=\"var(--stitch-color, #e0d0b8)\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" />\n      <circle cx=\"28\" cy=\"100\" r=\"4.5\" fill=\"url(#wkd-hw-grad)\" stroke=\"#1a110a\" stroke-width=\"1\" />\n\n      <!-- Monogram Target Spot on Tag -->\n      <g id=\"svg-monogram-target\" transform=\"translate(28, 145)\">\n        <!-- Luggage tag stamping center -->\n      </g>\n    </g>\n  </g>\n</svg>"
};

const LEATHER_FINISHES = {
  tan: {
    id: 'tan',
    name: 'Full-Grain Tan',
    desc: 'Golden honey tones, natural pores & fast amber patina',
    colors: {
      light: '#dfb88c',
      mid: '#bd9367',
      dark: '#8f653b',
      stitch: '#f4efe6'
    },
    swatchClass: 'swatch-tan'
  },
  cognac: {
    id: 'cognac',
    name: 'Pull-Up Cognac',
    desc: 'Wax-infused chestnut; lightens dynamically under crease',
    colors: {
      light: '#bf7546',
      mid: '#a9673f',
      dark: '#683718',
      stitch: '#f7e1c8'
    },
    swatchClass: 'swatch-cognac'
  },
  espresso: {
    id: 'espresso',
    name: 'Espresso',
    desc: 'Deep roasted dark brown, refined pebble grain and warmth',
    colors: {
      light: '#4d3329',
      mid: '#35241d',
      dark: '#1f140f',
      stitch: '#dfcaa7'
    },
    swatchClass: 'swatch-espresso'
  },
  black: {
    id: 'black',
    name: 'Matte Black',
    desc: 'Midnight charcoal black, non-reflective velvety texture',
    colors: {
      light: '#333130',
      mid: '#1f1d1c',
      dark: '#11100f',
      stitch: '#888582'
    },
    swatchClass: 'swatch-black'
  },
  crazy: {
    id: 'crazy',
    name: 'Crazy Horse',
    desc: 'Wax-saturated vintage nubuck with self-healing marks',
    colors: {
      light: '#9d744a',
      mid: '#805b36',
      dark: '#52381f',
      stitch: '#ead8c3'
    },
    swatchClass: 'swatch-crazy'
  }
};

const HARDWARE_FINISHES = {
  brass: {
    id: 'brass',
    name: 'Antique Brass',
    colors: {
      light: '#e4cb93',
      mid: '#a88952',
      dark: '#5d461e'
    }
  },
  silver: {
    id: 'silver',
    name: 'Brushed Silver',
    colors: {
      light: '#ffffff',
      mid: '#b8bec4',
      dark: '#6b7278'
    }
  }
};


// Universal finish identifier resilience: non-enumerable alias ensures Object.keys remains exactly 5
Object.defineProperty(LEATHER_FINISHES, 'crazy-horse', {
  get() { return LEATHER_FINISHES.crazy; },
  set(val) { LEATHER_FINISHES.crazy = val; },
  enumerable: false,
  configurable: true
});

// Universal hardware identifier resilience: non-enumerable aliases
Object.defineProperty(HARDWARE_FINISHES, 'antique-brass', {
  get() { return HARDWARE_FINISHES.brass; },
  set(val) { HARDWARE_FINISHES.brass = val; },
  enumerable: false,
  configurable: true
});
Object.defineProperty(HARDWARE_FINISHES, 'brushed-silver', {
  get() { return HARDWARE_FINISHES.silver; },
  set(val) { HARDWARE_FINISHES.silver = val; },
  enumerable: false,
  configurable: true
});

const TYPOGRAPHY_STYLES = {
  serif: { id: 'serif', name: 'Classic Serif', class: 'monogram-font-serif' },
  sans: { id: 'sans', name: 'Modern Sans', class: 'monogram-font-sans' },
  initials: { id: 'initials', name: 'Architectural Initials', class: 'monogram-font-initials' }
};

const EMBOSS_STYLES = {
  blind: { id: 'blind', name: 'Blind Embossing', surcharge: 0, class: 'emboss-blind' },
  foil: { id: 'foil', name: '22k Gold Foil', surcharge: 600, class: 'emboss-foil' }
};

/* ==========================================================================
   02. APPLICATION STATE
   ========================================================================== */

const studioState = {
  productId: 'handbag',
  finishId: 'cognac',
  hardwareId: 'brass',
  personalizationMode: 'initials', // 'initials' or 'name'
  customerName: '',
  monogramText: 'AH',
  customInscription: '',
  makerNote: '',
  embossStyle: 'blind',
  typography: 'serif',
  lightingMode: 'day',
  customInitialsEdited: false
};

let cartItems = [];
const CART_STORAGE_KEY = 'atelier_hide_cart_v2';

/* Helper: Currency Formatter for Indian Rupees */
function formatRupees(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/* ==========================================================================
   03. INITIALIZATION & DOM READY
   ========================================================================== */

if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
  document.addEventListener('DOMContentLoaded', () => {
    initCartFromStorage();
    renderCatalog();
    initCustomStudio();
    initLeatherGuideTabs();
    initPatinaTimeline();
    initSearch();
    initNavigationAndModals();
    initNewsletter();
    initHero3DExperience();
    initStudio3DExperience();
    init3DCardParallax();
    initMotionSystem();
  });
}

/* ==========================================================================
   03B. MOTION-DRIVEN EXPERIENCE & INTERACTION SYSTEM (INSPIRED BY USEMOTION)
   ========================================================================== */

function initMotionSystem() {
  if (typeof document === 'undefined') return;

  // 1. IntersectionObserver for Smooth Scroll-Triggered Section Reveals
  const revealElements = document.querySelectorAll('.motion-reveal');
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    revealElements.forEach(elem => revealObserver.observe(elem));
  } else {
    revealElements.forEach(elem => elem.classList.add('is-revealed'));
  }

  // 2. Bind Direct Showcase Actions for the 4 Flagship Product Showcases
  document.querySelectorAll('.btn-showcase-customize').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-product');
      const card = e.currentTarget.closest('.showcase-card');
      const chosenFinish = card ? card.dataset.selectedFinish : null;
      if (typeof loadProductIntoStudio === 'function') {
        loadProductIntoStudio(prodId, chosenFinish);
      }
      const studioElem = document.getElementById('custom-studio');
      if (studioElem) {
        studioElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Bind Interactive Swatches on Flagship Showcase Cards
  document.querySelectorAll('.showcase-card').forEach(card => {
    const swatches = card.querySelectorAll('.showcase-swatch');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('is-active'));
        swatch.classList.add('is-active');
        const finishKey = swatch.getAttribute('data-finish') || 'cognac';
        card.dataset.selectedFinish = finishKey;
      });
      swatch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          swatch.click();
        }
      });
    });
  });

  document.querySelectorAll('.btn-showcase-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-product');
      if (typeof openProductDetailsModal === 'function') {
        openProductDetailsModal(prodId);
      }
    });
  });
}

/* ==========================================================================
   04. FEATURED CATALOG RENDERING (SECTION E)
   ========================================================================== */

function renderCatalog() {
  const grid = document.getElementById('collection-grid');
  if (!grid) return;

  grid.innerHTML = '';

  Object.values(PRODUCTS_DATA).forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    // Build color swatch dots
    const swatchDots = product.finishes.map(finishId => {
      return `<span class="swatch-dot ${finishId}" title="${LEATHER_FINISHES[finishId].name}" data-finish="${finishId}"></span>`;
    }).join('');

    card.innerHTML = `
      <div class="card-glare"></div>
      <div class="product-media">
        <span class="product-tag">${product.category}</span>
        <img src="${product.image}" alt="${product.alt}" loading="lazy" id="catalog-img-${product.id}">
      </div>
      <div class="product-body">
        <div class="product-top-row">
          <h3 class="product-title">${product.name}</h3>
          <span class="product-price">${formatRupees(product.basePrice)}</span>
        </div>
        <span class="product-category">${product.category}</span>
        <p class="product-description">${product.shortDesc}</p>
        
        <div class="product-finishes-wrap">
          <span class="finish-label">Available Hides</span>
          <div class="finish-swatches-mini">
            ${swatchDots}
          </div>
        </div>

        <div class="product-actions">
          <button type="button" class="btn btn-outline-dark btn-sm btn-quick-view" data-product="${product.id}">
            Product Details
          </button>
          <button type="button" class="btn btn-primary btn-sm btn-customize-direct" data-product="${product.id}">
            Customize Piece
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach event listeners for catalog actions
  grid.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-product');
      openProductDetailsModal(prodId);
    });
  });

  grid.querySelectorAll('.btn-customize-direct').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-product');
      loadProductIntoStudio(prodId);
      // Smooth scroll to custom studio
      const studioElem = document.getElementById('custom-studio');
      if (studioElem) {
        studioElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Initialize 3D Card Tilt & Specular Glare interactions
  if (typeof init3DCardParallax === 'function') {
    init3DCardParallax();
  }
}

/* ==========================================================================
   05. THE CUSTOM STUDIO ENGINE (SIGNATURE FEATURE - SECTION F)
   ========================================================================== */

function initCustomStudio() {
  renderProductPicker();
  renderLeatherSwatches();
  bindStudioEvents();
  updateStudioVisualizer();
}

/* Step 1: Render Product Silhouette Choices */
function renderProductPicker() {
  const container = document.getElementById('product-picker-grid');
  if (!container) return;

  container.innerHTML = '';

  Object.values(PRODUCTS_DATA).forEach(product => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `product-picker-btn ${product.id === studioState.productId ? 'is-active' : ''}`;
    btn.setAttribute('data-product-id', product.id);

    btn.innerHTML = `
      <span class="picker-name">${product.name}</span>
      <span class="picker-price">${formatRupees(product.basePrice)}</span>
    `;

    btn.addEventListener('click', () => {
      studioState.productId = product.id;
      // Update active states
      container.querySelectorAll('.product-picker-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      document.getElementById('selected-product-label').textContent = product.name;
      updateStudioVisualizer();
    });

    container.appendChild(btn);
  });
}

/* Step 2: Render 5 Tactile Leather Swatches */
function renderLeatherSwatches() {
  const list = document.getElementById('leather-swatch-list');
  if (!list) return;

  list.innerHTML = '';

  const uniqueFinishKeys = ['tan', 'cognac', 'espresso', 'black', 'crazy'];
  uniqueFinishKeys.forEach(key => {
    const finish = LEATHER_FINISHES[key];
    if (!finish) return;

    const card = document.createElement('button');
    card.type = 'button';
    const isCurrent = (studioState.finishId === finish.id || (studioState.finishId === 'crazy-horse' && finish.id === 'crazy'));
    card.className = `leather-swatch-card ${isCurrent ? 'is-active' : ''}`;
    card.setAttribute('data-finish-id', finish.id);
    card.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');

    card.innerHTML = `
      <div class="swatch-circle-large ${finish.swatchClass}"></div>
      <div class="swatch-text">
        <div class="swatch-header-line">
          <span class="swatch-title">${finish.name}</span>
          <span class="swatch-active-badge">Selected</span>
        </div>
        <span class="swatch-note">${finish.desc}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      changeLeatherColor(finish.id);
    });

    list.appendChild(card);
  });
}

/* Bind Interactive Controls: Hardware, Personalization, Inscription, Maker Note, Emboss, Typo, Add to Bag */
function bindStudioEvents() {
  // Hardware Selection
  document.querySelectorAll('.hardware-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectHardware(btn.getAttribute('data-hardware'));
    });
  });

  // Customer Full Name Input
  const nameInput = document.getElementById('customer-name-input');
  const nameCounter = document.getElementById('customer-name-counter');
  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^a-zA-Z\s\.\'\-]/g, '');
      if (val.length > 30) val = val.slice(0, 30);
      e.target.value = val;
      studioState.customerName = val;
      if (nameCounter) {
        nameCounter.textContent = `${val.length} / 30`;
      }
      
      // Auto-update live preview:
      if (studioState.personalizationMode === 'name') {
        updateMonogramStamp();
      } else if (!studioState.customInitialsEdited && val.trim().length > 0) {
        const parts = val.trim().split(/\s+/).filter(Boolean);
        let derived = '';
        if (parts.length >= 2) {
          derived = (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        } else if (parts[0].length >= 2) {
          derived = parts[0].slice(0, 2).toUpperCase();
        }
        if (derived && derived.length <= 4) {
          studioState.monogramText = derived;
          const monoInput = document.getElementById('monogram-input');
          const monoCounter = document.getElementById('monogram-counter');
          if (monoInput) monoInput.value = derived;
          if (monoCounter) monoCounter.textContent = `${derived.length} / 4`;
        }
        updateMonogramStamp();
      } else {
        updateMonogramStamp();
      }
      updateStudioPricingSummary();
    });
  }

  // Personalization Display Mode Buttons (Initials vs Full Name)
  document.querySelectorAll('.personalization-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      studioState.personalizationMode = mode;

      document.querySelectorAll('.personalization-mode-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const initialsContainer = document.getElementById('initials-input-container');
      if (initialsContainer) {
        initialsContainer.style.opacity = mode === 'name' ? '0.6' : '1';
      }

      updateMonogramStamp();
      updateStudioPricingSummary();
    });
  });

  // Monogram Text Input (Live reactive updates with sanitization)
  const monogramInput = document.getElementById('monogram-input');
  const monogramCounter = document.getElementById('monogram-counter');

  if (monogramInput) {
    monogramInput.addEventListener('input', (e) => {
      let cleanVal = e.target.value.replace(/[^a-zA-Z0-9\.\-\s]/g, '').toUpperCase();
      if (cleanVal.length > 4) cleanVal = cleanVal.slice(0, 4);
      e.target.value = cleanVal;

      studioState.monogramText = cleanVal;
      studioState.customInitialsEdited = true;
      if (monogramCounter) {
        monogramCounter.textContent = `${cleanVal.length} / 4`;
      }
      if (studioState.personalizationMode === 'initials') {
        updateMonogramStamp();
      }
      updateStudioPricingSummary();
    });
  }

  // Custom Inscription Input (Optional, max 60 chars)
  const inscriptionInput = document.getElementById('custom-inscription-input');
  const inscriptionCounter = document.getElementById('inscription-counter');
  if (inscriptionInput) {
    inscriptionInput.addEventListener('input', (e) => {
      let val = e.target.value;
      if (val.length > 60) val = val.slice(0, 60);
      e.target.value = val;
      studioState.customInscription = val;
      if (inscriptionCounter) {
        inscriptionCounter.textContent = `${val.length} / 60`;
      }
      updateCanvasInscriptionPreview();
      updateStudioPricingSummary();
    });
  }

  // Note to the Maker / Mission Space Input (Multiline textarea, max 200 chars)
  const makerNoteInput = document.getElementById('maker-note-input');
  const makerNoteCounter = document.getElementById('maker-note-counter');
  if (makerNoteInput) {
    makerNoteInput.addEventListener('input', (e) => {
      let val = e.target.value;
      if (val.length > 200) val = val.slice(0, 200);
      e.target.value = val;
      studioState.makerNote = val;
      if (makerNoteCounter) {
        makerNoteCounter.textContent = `${val.length} / 200`;
      }
      updateStudioPricingSummary();
    });
  }

  // Embossing Method Selection
  document.querySelectorAll('.emboss-method-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const embossStyle = btn.getAttribute('data-emboss');
      studioState.embossStyle = embossStyle;

      document.querySelectorAll('.emboss-method-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      document.getElementById('selected-emboss-label').textContent = EMBOSS_STYLES[embossStyle].name;
      updateStudioVisualizer();
    });
  });

  // Typography Style Selection
  document.querySelectorAll('.typo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const typoId = btn.getAttribute('data-typo');
      studioState.typography = typoId;

      document.querySelectorAll('.typo-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      updateStudioVisualizer();
    });
  });

  // Studio Lighting Mode Switcher (Daylight vs Workshop Warmth)
  const btnDay = document.getElementById('btn-light-day');
  const btnWarm = document.getElementById('btn-light-warm');
  const canvasStage = document.getElementById('canvas-stage');

  if (btnDay && btnWarm && canvasStage) {
    btnDay.addEventListener('click', () => {
      studioState.lightingMode = 'day';
      btnDay.classList.add('active');
      btnWarm.classList.remove('active');
      canvasStage.style.background = 'radial-gradient(circle, rgba(60, 42, 33, 0.6) 0%, rgba(20, 13, 9, 0.95) 100%)';
    });

    btnWarm.addEventListener('click', () => {
      studioState.lightingMode = 'warm';
      btnWarm.classList.add('active');
      btnDay.classList.remove('active');
      canvasStage.style.background = 'radial-gradient(circle, rgba(169, 103, 63, 0.35) 0%, rgba(25, 15, 10, 0.98) 100%)';
    });
  }

  // Reset Studio Configuration
  const resetBtn = document.getElementById('btn-reset-studio');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetStudioToDefaults);
  }

  // Add Custom Commission to Bag
  const addCustomBtn = document.getElementById('btn-add-custom-to-cart');
  if (addCustomBtn) {
    addCustomBtn.addEventListener('click', addStudioCommissionToCart);
  }

  // Initialize 2D Silhouette vs 3D Orbit View Toggle
  initStudioViewToggle();
}

let studio3DModeActive = false;

function initStudioViewToggle() {
  const toggleBtn = document.getElementById('btn-toggle-studio-3d');
  const resetBtn = document.getElementById('btn-reset-studio-camera');
  const stage = document.getElementById('canvas-stage');
  const indicatorText = document.getElementById('studio-view-indicator-text');
  if (!toggleBtn || !stage) return;

  toggleBtn.addEventListener('click', () => {
    studio3DModeActive = !studio3DModeActive;
    if (studio3DModeActive) {
      stage.classList.add('mode-3d-active');
      const label = toggleBtn.querySelector('span');
      if (label) label.textContent = '2D Silhouette';
      if (indicatorText) indicatorText.textContent = '3D Inspection Studio';
      if (resetBtn) resetBtn.style.display = 'inline-flex';
    } else {
      stage.classList.remove('mode-3d-active');
      const label = toggleBtn.querySelector('span');
      if (label) label.textContent = '3D Orbit View';
      if (indicatorText) indicatorText.textContent = 'Studio Atelier Preview';
      if (resetBtn) resetBtn.style.display = 'none';
    }
  });
}

/* ==========================================================================
   05B. STUDENT-FRIENDLY CUSTOMIZER HELPER FUNCTIONS
   Simple, intuitive functions designed for easy explanation during college viva
   ========================================================================== */

/**
 * Student-Friendly Function: Changes the active leather finish across 2D & 3D previews
 * @param {string} finishId - Leather finish ('tan', 'cognac', 'espresso', 'black', 'crazy')
 */
function changeLeatherColor(finishId) {
  const resolved = (finishId === 'crazy-horse') ? 'crazy' : finishId;
  if (!LEATHER_FINISHES[resolved]) return;
  studioState.finishId = resolved;

  if (typeof document !== 'undefined' && typeof document.querySelectorAll === 'function') {
    document.querySelectorAll('.leather-swatch-card').forEach(c => {
      if (typeof c.getAttribute === 'function') {
        const cardFinish = c.getAttribute('data-finish-id');
        const isAct = (cardFinish === resolved || (cardFinish === 'crazy' && resolved === 'crazy-horse'));
        if (c.classList && typeof c.classList.toggle === 'function') {
          c.classList.toggle('is-active', isAct);
        }
        if (typeof c.setAttribute === 'function') {
          c.setAttribute('aria-pressed', isAct ? 'true' : 'false');
        }
      }
    });

    const finishLabel = document.getElementById('selected-finish-label');
    if (finishLabel) finishLabel.textContent = LEATHER_FINISHES[resolved].name;
  }

  updateStudioVisualizer();
}

/**
 * Student-Friendly Function: Selects solid hardware metal finish (Antique Brass vs Brushed Silver)
 * @param {string} hardwareId - Hardware finish ('brass' or 'silver')
 */
function selectHardware(hardwareId) {
  const resolved = (hardwareId === 'antique-brass') ? 'brass' : (hardwareId === 'brushed-silver') ? 'silver' : hardwareId;
  if (!HARDWARE_FINISHES[resolved]) return;
  studioState.hardwareId = resolved;

  if (typeof document !== 'undefined' && typeof document.querySelectorAll === 'function') {
    document.querySelectorAll('.hardware-btn').forEach(b => {
      if (typeof b.getAttribute === 'function') {
        const btnHw = b.getAttribute('data-hardware');
        if (b.classList && typeof b.classList.toggle === 'function') {
          b.classList.toggle('is-active', btnHw === resolved);
        }
      }
    });

    const label = document.getElementById('selected-hardware-label');
    if (label) label.textContent = HARDWARE_FINISHES[resolved].name;
  }

  updateStudioVisualizer();
}

/**
 * Student-Friendly Function: Updates customer monogram or full name
 * @param {string} text - User's initials or full name
 * @param {string} [mode] - Optional mode ('initials' or 'name')
 */
function updatePersonalization(text, mode) {
  if (mode) {
    studioState.personalizationMode = mode;
  }
  if (studioState.personalizationMode === 'name') {
    studioState.customerName = text || '';
  } else {
    studioState.monogramText = (text || 'AH').toUpperCase();
    studioState.customInitialsEdited = true;
  }
  if (typeof document !== 'undefined') {
    updateMonogramStamp();
    updateStudioPricingSummary();
  }
  if (typeof update3DStudioModel === 'function') {
    update3DStudioModel();
  }
}

/**
 * Student-Friendly Function: Refreshes 2D SVG vector plate and 3D WebGL scene
 */
function updateProductPreview() {
  updateStudioVisualizer();
}

/**
 * Student-Friendly Function: Opens a silhouette in the customizer and scrolls down to the studio
 * @param {string} productId - Product identifier ('handbag', 'bifold', etc.)
 * @param {string} [finishId] - Optional initial leather color
 */
function openCustomizationStudio(productId, finishId) {
  loadProductIntoStudio(productId, finishId);
  if (typeof document !== 'undefined') {
    const studioElem = document.getElementById('custom-studio');
    if (studioElem && typeof studioElem.scrollIntoView === 'function') {
      studioElem.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Student-Friendly Function: Rotates the 3D product model horizontally
 * @param {number} [degrees=15] - Degrees to rotate
 */
function rotateProduct(degrees = 15) {
  if (studioModelsGroup) {
    const radians = (degrees * Math.PI) / 180;
    studioModelsGroup.rotation.y += radians;
  }
}

/* Update Product Silhouette, Leather Shader, Hardware, Monogram and Inscription */
function updateStudioVisualizer() {
  if (typeof document === 'undefined') return;
  const product = PRODUCTS_DATA[studioState.productId];
  const resolvedFinishId = (studioState.finishId === 'crazy-horse') ? 'crazy' : studioState.finishId;
  const finish = LEATHER_FINISHES[resolvedFinishId] || LEATHER_FINISHES['tan'];
  const hardware = HARDWARE_FINISHES[studioState.hardwareId] || HARDWARE_FINISHES['brass'];
  const emboss = EMBOSS_STYLES[studioState.embossStyle];

  if (!product || !finish || !hardware) return;

  // 1. Update Preview Model Name & Description
  const modelNameElem = document.getElementById('preview-model-name');
  if (modelNameElem) {
    modelNameElem.textContent = product.name;
  }
  const modelDescElem = document.getElementById('preview-model-desc');
  if (modelDescElem) {
    modelDescElem.textContent = product.shortDesc || product.fullDesc || product.description || '';
  }

  // 2. Update Silhouette Image
  const imgElem = document.getElementById('studio-svg-image');
  if (imgElem) {
    imgElem.src = product.image;
    imgElem.alt = `${product.name} in ${finish.name}`;
  }

  // 2B. Inject Reactive Inline SVG into Studio Vector Stage
  const vectorStage = document.getElementById('studio-vector-stage');
  if (vectorStage && typeof PRODUCT_SVGS !== 'undefined' && PRODUCT_SVGS[studioState.productId]) {
    const currentActive = (typeof vectorStage.getAttribute === 'function') ? vectorStage.getAttribute('data-active-product') : null;
    if (currentActive !== studioState.productId) {
      vectorStage.innerHTML = PRODUCT_SVGS[studioState.productId];
      if (typeof vectorStage.setAttribute === 'function') {
        vectorStage.setAttribute('data-active-product', studioState.productId);
      }
    }
  }

  // 3. Update Dynamic CSS Custom Properties for Leather Shader & Hardware Colors
  const root = document.documentElement;
  root.style.setProperty('--leather-base-light', finish.colors.light);
  root.style.setProperty('--leather-base-mid', finish.colors.mid);
  root.style.setProperty('--leather-base-dark', finish.colors.dark);
  root.style.setProperty('--stitch-color', finish.colors.stitch);
  root.style.setProperty('--hw-light', hardware.colors.light);
  root.style.setProperty('--hw-mid', hardware.colors.mid);
  root.style.setProperty('--hw-dark', hardware.colors.dark);

  // 4. Update Monogram Stamp (Initials vs Full Name)
  updateMonogramStamp();

  // 5. Update Live Canvas Inscription Ribbon
  updateCanvasInscriptionPreview();

  // 6. Update Macro Loupe Callout
  const loupeSpecs = document.getElementById('loupe-specs-text');
  const loupeFinish = document.getElementById('loupe-finish-name');
  const loupeDot = document.getElementById('loupe-dot-indicator');

  if (loupeSpecs) {
    const formatDesc = studioState.personalizationMode === 'name' ? 'Full Name' : 'Initials';
    loupeSpecs.textContent = `${finish.name} • ${hardware.name} • ${emboss.name} (${formatDesc})`;
  }
  if (loupeFinish) {
    loupeFinish.textContent = finish.name;
  }
  if (loupeDot) {
    loupeDot.style.backgroundColor = finish.colors.mid;
  }

  // 7. Recalculate Studio Summary & Total Price
  updateStudioPricingSummary();

  // 8. Update 3D Customizer Viewport Model & Shaders
  if (typeof update3DStudioModel === 'function') {
    update3DStudioModel();
  }
}

/* Update the Monogram / Name Stamp Element */
function updateMonogramStamp() {
  const stamp = document.getElementById('monogram-live-stamp');
  if (!stamp) return;

  const product = PRODUCTS_DATA[studioState.productId];
  const emboss = EMBOSS_STYLES[studioState.embossStyle];
  const typo = TYPOGRAPHY_STYLES[studioState.typography];

  let displayText = '';
  let isFullName = false;

  if (studioState.personalizationMode === 'name') {
    isFullName = true;
    const rawName = studioState.customerName.trim().toUpperCase();
    displayText = rawName.length > 0 ? rawName : 'YOUR NAME';
  } else {
    const rawInitials = studioState.monogramText.trim();
    displayText = rawInitials.length > 0 ? rawInitials : (product ? product.defaultMonogram : 'AH');
  }

  stamp.textContent = displayText;

  // Apply typography, positioning and deboss/foil classes
  stamp.className = `monogram-live-stamp ${product.monogramPosClass} ${typo.class} ${emboss.class}${isFullName ? ' is-full-name' : ''}`;

  // Adaptive font scaling for longer full names on the product
  if (isFullName) {
    if (displayText.length > 18) {
      stamp.style.fontSize = 'clamp(0.55rem, 0.9vw, 0.75rem)';
    } else if (displayText.length > 10) {
      stamp.style.fontSize = 'clamp(0.65rem, 1.1vw, 0.85rem)';
    } else {
      stamp.style.fontSize = '';
    }
  } else {
    stamp.style.fontSize = '';
  }
}

/* Update Canvas Interior Inscription Ribbon Preview */
function updateCanvasInscriptionPreview() {
  const preview = document.getElementById('canvas-inscription-preview');
  const textElem = document.getElementById('ribbon-inscription-text');
  if (!preview || !textElem) return;

  const emboss = EMBOSS_STYLES[studioState.embossStyle];
  const typo = TYPOGRAPHY_STYLES[studioState.typography];
  const rawInscription = studioState.customInscription.trim();

  if (rawInscription.length > 0) {
    preview.classList.add('has-inscription');
    textElem.textContent = `"${rawInscription}"`;
    textElem.className = `inscription-ribbon-text ${typo.class} ${emboss.class}`;
  } else {
    preview.classList.remove('has-inscription');
    textElem.textContent = '— None specified —';
    textElem.className = 'inscription-ribbon-text';
  }
}

/* Calculate and Update Deterministic Pricing & Summary */
function updateStudioPricingSummary() {
  const product = PRODUCTS_DATA[studioState.productId];
  const finish = LEATHER_FINISHES[studioState.finishId];
  const hardware = HARDWARE_FINISHES[studioState.hardwareId];
  const emboss = EMBOSS_STYLES[studioState.embossStyle];

  if (!product) return;

  const basePrice = product.basePrice;
  const surcharge = emboss.surcharge;
  const totalPrice = basePrice + surcharge;

  // Update text values in summary box
  const prodNameElem = document.getElementById('summary-prod-name');
  if (prodNameElem) prodNameElem.textContent = product.name;

  const basePriceElem = document.getElementById('summary-base-price');
  if (basePriceElem) basePriceElem.textContent = formatRupees(basePrice);

  const leatherNameElem = document.getElementById('summary-leather-name');
  if (leatherNameElem) leatherNameElem.textContent = finish.name;

  const hwNameElem = document.getElementById('summary-hw-name');
  if (hwNameElem) hwNameElem.textContent = hardware.name;

  const embossNameElem = document.getElementById('summary-emboss-name');
  if (embossNameElem) embossNameElem.textContent = emboss.name;

  const embossPriceElem = document.getElementById('summary-emboss-price');
  if (embossPriceElem) {
    embossPriceElem.textContent = surcharge === 0 ? 'Included (₹0)' : `+ ${formatRupees(surcharge)}`;
  }

  // Personalization format summary
  const personalizationDisplay = document.getElementById('summary-personalization-display');
  if (personalizationDisplay) {
    if (studioState.personalizationMode === 'name') {
      const nameVal = studioState.customerName.trim().toUpperCase() || 'YOUR NAME';
      personalizationDisplay.textContent = `Full Name: "${nameVal}"`;
    } else {
      const initVal = studioState.monogramText.trim().toUpperCase() || product.defaultMonogram;
      personalizationDisplay.textContent = `Initials: "${initVal}"`;
    }
  }

  // Custom Inscription summary row
  const inscRow = document.getElementById('summary-inscription-row');
  const inscText = document.getElementById('summary-inscription-text');
  if (inscRow && inscText) {
    if (studioState.customInscription.trim().length > 0) {
      inscRow.style.display = 'flex';
      inscText.textContent = `"${studioState.customInscription.trim()}" (Included)`;
    } else {
      inscRow.style.display = 'none';
    }
  }

  // Maker's Note / Mission summary row
  const noteRow = document.getElementById('summary-maker-note-row');
  const noteText = document.getElementById('summary-maker-note-text');
  if (noteRow && noteText) {
    if (studioState.makerNote.trim().length > 0) {
      noteRow.style.display = 'flex';
      noteText.textContent = 'Note Attached for Workshop';
    } else {
      noteRow.style.display = 'none';
    }
  }

  const totalPriceElem = document.getElementById('studio-total-price');
  if (totalPriceElem) {
    totalPriceElem.textContent = formatRupees(totalPrice);
  }
}

/* Reset Studio to Standard Configuration */
function resetStudioToDefaults() {
  studioState.productId = 'handbag';
  studioState.finishId = 'cognac';
  studioState.hardwareId = 'brass';
  studioState.personalizationMode = 'initials';
  studioState.customerName = '';
  studioState.monogramText = 'AH';
  studioState.customInscription = '';
  studioState.makerNote = '';
  studioState.embossStyle = 'blind';
  studioState.typography = 'serif';
  studioState.customInitialsEdited = false;

  const nameInput = document.getElementById('customer-name-input');
  if (nameInput) nameInput.value = '';
  const nameCounter = document.getElementById('customer-name-counter');
  if (nameCounter) nameCounter.textContent = '0 / 30';

  const monoInput = document.getElementById('monogram-input');
  if (monoInput) monoInput.value = 'AH';
  const monoCounter = document.getElementById('monogram-counter');
  if (monoCounter) monoCounter.textContent = '2 / 4';

  const inscInput = document.getElementById('custom-inscription-input');
  if (inscInput) inscInput.value = '';
  const inscCounter = document.getElementById('inscription-counter');
  if (inscCounter) inscCounter.textContent = '0 / 60';

  const noteInput = document.getElementById('maker-note-input');
  if (noteInput) noteInput.value = '';
  const noteCounter = document.getElementById('maker-note-counter');
  if (noteCounter) noteCounter.textContent = '0 / 200';

  document.querySelectorAll('.personalization-mode-btn').forEach(b => {
    b.classList.toggle('is-active', b.getAttribute('data-mode') === 'initials');
  });

  const initialsContainer = document.getElementById('initials-input-container');
  if (initialsContainer) initialsContainer.style.opacity = '1';

  renderProductPicker();
  renderLeatherSwatches();

  // Reset Hardware Buttons
  document.querySelectorAll('.hardware-btn').forEach(b => {
    b.classList.toggle('is-active', b.getAttribute('data-hardware') === 'brass');
  });
  document.getElementById('selected-hardware-label').textContent = 'Antique Brass';

  // Reset Emboss Buttons
  document.querySelectorAll('.emboss-method-btn').forEach(b => {
    b.classList.toggle('is-active', b.getAttribute('data-emboss') === 'blind');
  });
  document.getElementById('selected-emboss-label').textContent = 'Blind Embossing';

  // Reset Typo Buttons
  document.querySelectorAll('.typo-btn').forEach(b => {
    b.classList.toggle('is-active', b.getAttribute('data-typo') === 'serif');
  });

  updateStudioVisualizer();
  showToast('Custom Studio reset to baseline configuration.');
}

/* Load a specific product directly into the studio */
function loadProductIntoStudio(productId, finishId) {
  if (!PRODUCTS_DATA[productId]) return;

  studioState.productId = productId;
  if (finishId) {
    const resolvedId = (finishId === 'crazy-horse') ? 'crazy' : finishId;
    if (LEATHER_FINISHES[resolvedId]) {
      studioState.finishId = resolvedId;
    }
  }

  if (typeof document !== 'undefined') {
    const prodLabel = document.getElementById('selected-product-label');
    if (prodLabel) prodLabel.textContent = PRODUCTS_DATA[productId].name;

    // Refresh picker active state
    if (typeof document.querySelectorAll === 'function') {
      document.querySelectorAll('.product-picker-btn').forEach(btn => {
        if (typeof btn.getAttribute === 'function' && btn.classList) {
          btn.classList.toggle('is-active', btn.getAttribute('data-product-id') === productId);
        }
      });

      // Refresh swatch active states
      document.querySelectorAll('.leather-swatch-card').forEach(c => {
        if (typeof c.getAttribute === 'function') {
          const cardFinish = c.getAttribute('data-finish-id');
          const isAct = (cardFinish === studioState.finishId || (cardFinish === 'crazy' && studioState.finishId === 'crazy-horse'));
          if (c.classList && typeof c.classList.toggle === 'function') {
            c.classList.toggle('is-active', isAct);
          }
          if (typeof c.setAttribute === 'function') {
            c.setAttribute('aria-pressed', isAct ? 'true' : 'false');
          }
        }
      });
    }

    const currentFinishObj = LEATHER_FINISHES[studioState.finishId];
    if (currentFinishObj) {
      const finishLabel = document.getElementById('selected-finish-label');
      if (finishLabel) finishLabel.textContent = currentFinishObj.name;
    }
  }

  updateStudioVisualizer();
}

/* ==========================================================================
   06. SHOPPING BAG & LOCALSTORAGE PERSISTENCE (SECTION G)
   ========================================================================== */

function initCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      cartItems = JSON.parse(saved);
    }
  } catch (err) {
    console.warn('Could not read cart from localStorage:', err);
    cartItems = [];
  }
  updateCartBadge();
  renderCartDrawer();
}

function saveCartToStorage() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  } catch (err) {
    console.warn('Could not save cart to localStorage:', err);
  }
  updateCartBadge();
  renderCartDrawer();
}

/* Add a Custom Commission from Studio to Bag */
function addStudioCommissionToCart() {
  const product = PRODUCTS_DATA[studioState.productId];
  const finish = LEATHER_FINISHES[studioState.finishId];
  const hardware = HARDWARE_FINISHES[studioState.hardwareId];
  const emboss = EMBOSS_STYLES[studioState.embossStyle];
  const typo = TYPOGRAPHY_STYLES[studioState.typography];

  const sanitizedName = studioState.customerName.trim();
  const sanitizedInitials = studioState.monogramText.trim().toUpperCase() || product.defaultMonogram;
  const sanitizedInscription = studioState.customInscription.trim();
  const sanitizedMakerNote = studioState.makerNote.trim();

  const activeEmbossText = studioState.personalizationMode === 'name'
    ? (sanitizedName.toUpperCase() || 'YOUR NAME')
    : sanitizedInitials;

  const unitPrice = product.basePrice + emboss.surcharge;

  // Unique configuration signature key
  const configKey = [
    product.id,
    finish.id,
    hardware.id,
    emboss.id,
    typo.id,
    studioState.personalizationMode,
    activeEmbossText,
    sanitizedName,
    sanitizedInscription,
    sanitizedMakerNote
  ].join('::');

  // Check if identical item configuration already exists
  const existingIndex = cartItems.findIndex(item => item.configKey === configKey);

  if (existingIndex > -1) {
    cartItems[existingIndex].quantity += 1;
  } else {
    cartItems.push({
      configKey: configKey,
      productId: product.id,
      productName: product.name,
      category: product.category,
      finishId: finish.id,
      finishName: finish.name,
      leatherColor: finish.colors.mid,
      hardwareId: hardware.id,
      hardwareName: hardware.name,
      personalizationMode: studioState.personalizationMode,
      customerName: sanitizedName,
      monogramText: sanitizedInitials,
      embossText: activeEmbossText,
      embossStyle: emboss.id,
      embossName: emboss.name,
      surcharge: emboss.surcharge,
      typography: typo.id,
      typographyName: typo.name,
      customInscription: sanitizedInscription,
      makerNote: sanitizedMakerNote,
      unitPrice: unitPrice,
      quantity: 1,
      image: product.image
    });
  }

  saveCartToStorage();

  // Visual button feedback
  const btn = document.getElementById('btn-add-custom-to-cart');
  if (btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Added to Bag ✓</span>';
    btn.style.backgroundColor = '#2e6b38';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.backgroundColor = '';
    }, 1500);
  }

  showToast(`Added bespoke ${product.name} (${activeEmbossText}) to your bag.`, true);
}

/* Add Standard Edition from Product Details */
function addStandardProductToCart(productId, finishId = 'tan') {
  const product = PRODUCTS_DATA[productId];
  const finish = LEATHER_FINISHES[finishId] || LEATHER_FINISHES.tan;
  if (!product) return;

  const configKey = `${product.id}_${finish.id}_standard`;
  const existingIndex = cartItems.findIndex(item => item.configKey === configKey);

  if (existingIndex > -1) {
    cartItems[existingIndex].quantity += 1;
  } else {
    cartItems.push({
      configKey: configKey,
      productId: product.id,
      productName: product.name,
      category: product.category,
      finishId: finish.id,
      finishName: finish.name,
      leatherColor: finish.colors.mid,
      hardwareId: 'brass',
      hardwareName: 'Antique Brass',
      embossStyle: 'none',
      embossName: 'Standard Edition (Unmonogrammed)',
      surcharge: 0,
      typography: 'none',
      typographyName: 'Standard',
      monogramText: '—',
      unitPrice: product.basePrice,
      quantity: 1,
      image: product.image
    });
  }

  saveCartToStorage();
  showToast(`Added ${product.name} to your shopping bag.`, true);
}

/* Update Quantity Modifier */
function updateItemQuantity(configKey, delta) {
  const index = cartItems.findIndex(item => item.configKey === configKey);
  if (index === -1) return;

  cartItems[index].quantity += delta;
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
    showToast('Item removed from shopping bag.');
  }

  saveCartToStorage();
}

/* Remove Item from Cart */
function removeCartItem(configKey) {
  const index = cartItems.findIndex(item => item.configKey === configKey);
  if (index > -1) {
    const removedName = cartItems[index].productName;
    cartItems.splice(index, 1);
    saveCartToStorage();
    showToast(`Removed ${removedName} from your shopping bag.`);
  }
}

/* Update Live Cart Badge */
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = totalItems;

  badge.classList.toggle('has-items', totalItems > 0);
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 400);
}

/* Render Cart Drawer DOM */
function renderCartDrawer() {
  const container = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');
  if (!container || !footer) return;

  container.innerHTML = '';

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-cart-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h4 class="empty-cart-title">Your Bag is Empty</h4>
        <p class="empty-cart-msg">You have not commissioned any handcrafted pieces yet.</p>
        <button type="button" class="btn btn-outline-dark btn-sm" id="btn-empty-start-shopping">
          Explore Collection
        </button>
      </div>
    `;

    footer.style.display = 'none';

    const startBtn = document.getElementById('btn-empty-start-shopping');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        closeCartDrawer();
        const col = document.getElementById('collection');
        if (col) col.scrollIntoView({ behavior: 'smooth' });
      });
    }
    return;
  }

  footer.style.display = 'flex';

  let subtotal = 0;
  let totalPersonalizationSurcharge = 0;

  cartItems.forEach(item => {
    const itemTotal = item.unitPrice * item.quantity;
    subtotal += itemTotal;
    totalPersonalizationSurcharge += (item.surcharge || 0) * item.quantity;

    const card = document.createElement('div');
    card.className = 'cart-item-card';

    const specsPills = [];
    specsPills.push(`<span class="spec-pill">${item.finishName}</span>`);
    specsPills.push(`<span class="spec-pill">${item.hardwareName}</span>`);

    if (item.embossText && item.embossText !== '—') {
      const modeLabel = item.personalizationMode === 'name' ? 'Embossed Name' : 'Monogram';
      specsPills.push(`<span class="spec-pill spec-pill-name">${modeLabel}: "${item.embossText}"</span>`);
      specsPills.push(`<span class="spec-pill">${item.embossName}</span>`);
    }

    if (item.customerName && item.personalizationMode === 'initials') {
      specsPills.push(`<span class="spec-pill">For: ${item.customerName}</span>`);
    }

    if (item.customInscription) {
      specsPills.push(`<span class="spec-pill spec-pill-inscription">Inscription: "${item.customInscription}"</span>`);
    }

    if (item.makerNote) {
      specsPills.push(`<span class="spec-pill spec-pill-maker-note">Note: "${item.makerNote}"</span>`);
    }

    card.innerHTML = `
      <div class="cart-item-thumb">
        <img src="${item.image}" alt="${item.productName}">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.productName}</h4>
        <span class="cart-item-price">${formatRupees(item.unitPrice)}</span>
        <div class="cart-item-specs-pills">
          ${specsPills.join('')}
        </div>
        <div class="cart-qty-row">
          <div class="qty-counter">
            <button type="button" class="qty-btn btn-qty-minus" data-key="${item.configKey}">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button type="button" class="qty-btn btn-qty-plus" data-key="${item.configKey}">+</button>
          </div>
          <button type="button" class="cart-remove-btn" data-key="${item.configKey}">Remove</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach Quantity & Remove Listeners
  container.querySelectorAll('.btn-qty-minus').forEach(b => {
    b.addEventListener('click', () => updateItemQuantity(b.getAttribute('data-key'), -1));
  });
  container.querySelectorAll('.btn-qty-plus').forEach(b => {
    b.addEventListener('click', () => updateItemQuantity(b.getAttribute('data-key'), 1));
  });
  container.querySelectorAll('.cart-remove-btn').forEach(b => {
    b.addEventListener('click', () => removeCartItem(b.getAttribute('data-key')));
  });

  // Update Cart Totals
  document.getElementById('cart-subtotal-val').textContent = formatRupees(subtotal);
  document.getElementById('cart-emboss-total-val').textContent = totalPersonalizationSurcharge > 0 ? formatRupees(totalPersonalizationSurcharge) : 'Included';
  document.getElementById('cart-final-total').textContent = formatRupees(subtotal);
}

/* ==========================================================================
   07. PRODUCT DETAILS MODAL (SECTION H)
   ========================================================================== */

function openProductDetailsModal(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  const modal = document.getElementById('product-detail-modal');
  const mediaContainer = document.getElementById('modal-product-media');
  const contentContainer = document.getElementById('modal-product-content');
  const backdrop = document.getElementById('modal-backdrop');

  if (!modal || !mediaContainer || !contentContainer || !backdrop) return;

  mediaContainer.innerHTML = `
    <img src="${product.image}" alt="${product.alt}" id="modal-active-img">
  `;

  contentContainer.innerHTML = `
    <span class="modal-category-tag">${product.category}</span>
    <h2 class="modal-product-title">${product.name}</h2>
    <span class="modal-product-price">${formatRupees(product.basePrice)}</span>
    
    <p class="modal-desc">${product.fullDesc}</p>

    <div class="modal-specs-list">
      <div><strong>Dimensions:</strong> ${product.dimensions}</div>
      <div><strong>Weight:</strong> ${product.weight}</div>
      <div><strong>Capacity:</strong> ${product.capacity}</div>
      <div><strong>Leather:</strong> ${product.leatherType}</div>
      <div><strong>Hardware:</strong> ${product.hardware}</div>
      <div><strong>Care:</strong> ${product.care}</div>
    </div>

    <div class="modal-actions-wrap">
      <button type="button" class="btn btn-primary" id="btn-modal-open-studio" data-product="${product.id}">
        Configure in Custom Studio →
      </button>
      <button type="button" class="btn btn-outline-dark btn-sm" id="btn-modal-add-standard" data-product="${product.id}">
        Add Standard Edition to Bag (${formatRupees(product.basePrice)})
      </button>
    </div>
  `;

  // Bind Actions
  document.getElementById('btn-modal-open-studio').addEventListener('click', () => {
    closeProductDetailsModal();
    loadProductIntoStudio(product.id);
    const studioElem = document.getElementById('custom-studio');
    if (studioElem) studioElem.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('btn-modal-add-standard').addEventListener('click', () => {
    addStandardProductToCart(product.id);
    closeProductDetailsModal();
  });

  // Show Modal & Backdrop
  backdrop.classList.add('is-active');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeProductDetailsModal() {
  const modal = document.getElementById('product-detail-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   08. LEATHER GUIDE TABS (SECTION I)
   ========================================================================== */

function initLeatherGuideTabs() {
  const tabButtons = document.querySelectorAll('.guide-tab-btn');
  const panels = document.querySelectorAll('.guide-content-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const guideId = btn.getAttribute('data-guide');

      tabButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        panel.classList.remove('is-active');
      });

      const activePanel = document.getElementById(`guide-panel-${guideId}`);
      if (activePanel) {
        activePanel.classList.add('is-active');
      }
    });
  });
}

/* ==========================================================================
   08B. INTERACTIVE PATINA TIMELINE
   ========================================================================== */

const PATINA_STAGES = {
  day1: {
    badgeStage: 'Stage: Day 01',
    badgeEffect: 'Crisp Workshop Temper • Low Matte Sheen',
    luster: 'Pure Matte (Zero Artificial Coating)',
    temper: 'Firm, Architectural & Taut',
    shade: 'Raw Tuscan Tan / Golden Honey',
    care: 'Dry Microfiber Dusting Only'
  },
  year1: {
    badgeStage: 'Stage: Year 01',
    badgeEffect: 'Mellowing Caramel • Satin Luster',
    luster: 'Soft Satin Sheen on Contact Points',
    temper: 'Supple, Hand-Molded & Ergonomic',
    shade: 'Warm Honeyed Amber / Rich Caramel',
    care: 'Natural Jojoba & Beeswax Balm (Bi-Annually)'
  },
  year5: {
    badgeStage: 'Stage: Year 05+',
    badgeEffect: 'Glassy Patina Luster • Deep Mahogany',
    luster: 'Deep Mirror-Glaze Patina (High Sheen)',
    temper: 'Sensual, Pliable Glove-Leather Temper',
    shade: 'Multi-Tonal Cognac / Burnished Espresso',
    care: 'Annual Deep Conditioning Balm & Polish'
  }
};

function initPatinaTimeline() {
  const cards = document.querySelectorAll('.patina-stage-card');
  const macroDisplay = document.getElementById('patina-macro-display');
  const badgeStage = document.getElementById('patina-badge-stage');
  const badgeEffect = document.getElementById('patina-badge-effect');
  const specLuster = document.getElementById('spec-luster');
  const specTemper = document.getElementById('spec-temper');
  const specShade = document.getElementById('spec-shade');
  const specCare = document.getElementById('spec-care');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const stageId = card.getAttribute('data-stage');
      const stageData = PATINA_STAGES[stageId];
      if (!stageData) return;

      cards.forEach(c => {
        c.classList.remove('is-active');
        c.setAttribute('aria-selected', 'false');
        const pill = c.querySelector('.patina-select-pill');
        if (pill) pill.textContent = 'Click to Inspect';
      });

      card.classList.add('is-active');
      card.setAttribute('aria-selected', 'true');
      const activePill = card.querySelector('.patina-select-pill');
      if (activePill) activePill.textContent = 'Active View';

      if (macroDisplay) {
        macroDisplay.className = `patina-macro-preview stage-${stageId}`;
      }
      if (badgeStage) badgeStage.textContent = stageData.badgeStage;
      if (badgeEffect) badgeEffect.textContent = stageData.badgeEffect;
      if (specLuster) specLuster.textContent = stageData.luster;
      if (specTemper) specTemper.textContent = stageData.temper;
      if (specShade) specShade.textContent = stageData.shade;
      if (specCare) specCare.textContent = stageData.care;
    });
  });
}

/* ==========================================================================
   09. LIVE SEARCH OVERLAY SYSTEM
   ========================================================================== */

function initSearch() {
  const searchModal = document.getElementById('search-modal');
  const queryInput = document.getElementById('search-query-input');
  const resultsContainer = document.getElementById('search-results-list');
  const filterChips = document.querySelectorAll('.search-chip');

  let currentCategory = 'all';

  function renderSearchResults(query = '', category = 'all') {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';

    const lowerQuery = query.toLowerCase().trim();

    const matchedProducts = Object.values(PRODUCTS_DATA).filter(prod => {
      const matchCat = category === 'all' || prod.filterTag.toLowerCase() === category.toLowerCase() || prod.category.toLowerCase().includes(category.toLowerCase());
      const matchText = lowerQuery === '' ||
        prod.name.toLowerCase().includes(lowerQuery) ||
        prod.category.toLowerCase().includes(lowerQuery) ||
        prod.shortDesc.toLowerCase().includes(lowerQuery) ||
        prod.leatherType.toLowerCase().includes(lowerQuery);

      return matchCat && matchText;
    });

    if (matchedProducts.length === 0) {
      resultsContainer.innerHTML = `
        <div style="grid-column: span 2; text-align: center; padding: 2rem; color: #a49685;">
          <p style="font-size: 1.1rem; font-family: var(--font-serif); color: var(--color-ivory);">No pieces match your search.</p>
          <p style="font-size: 0.85rem; margin-top: 4px;">Try searching for "Bifold", "Messenger", "Passport", "Weekender", or "Full-Grain".</p>
        </div>
      `;
      return;
    }

    matchedProducts.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'search-result-card';
      card.innerHTML = `
        <div class="search-result-thumb">
          <img src="${prod.image}" alt="${prod.name}">
        </div>
        <div class="search-result-info">
          <h4>${prod.name}</h4>
          <p>${prod.category}</p>
          <span class="search-result-price">${formatRupees(prod.basePrice)}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        closeSearchModal();
        openProductDetailsModal(prod.id);
      });

      resultsContainer.appendChild(card);
    });
  }

  // Input typing listener
  if (queryInput) {
    queryInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value, currentCategory);
    });
  }

  // Filter chips listeners
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      currentCategory = chip.getAttribute('data-filter');
      renderSearchResults(queryInput ? queryInput.value : '', currentCategory);
    });
  });

  // Initial render in search modal
  renderSearchResults('', 'all');
}

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-query-input');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   10. NAVIGATION, DRAWERS & MODAL CONTROLS
   ========================================================================== */

function initNavigationAndModals() {
  // Sticky Header Scroll Listener
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('is-open');
      mobileNav.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
    });

    // Close mobile nav when clicking any link
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Cart Drawer Triggers
  const cartTrigger = document.getElementById('cart-trigger');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');

  if (cartTrigger) {
    cartTrigger.addEventListener('click', openCartDrawer);
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCartDrawer);
  }

  // Search Triggers
  const searchTrigger = document.getElementById('search-trigger');
  const searchCloseBtn = document.getElementById('search-close-btn');

  if (searchTrigger) {
    searchTrigger.addEventListener('click', openSearchModal);
  }
  if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', closeSearchModal);
  }

  // Product Details Modal Close
  const detailCloseBtn = document.getElementById('detail-close-btn');
  if (detailCloseBtn) {
    detailCloseBtn.addEventListener('click', closeProductDetailsModal);
  }

  // Demonstration Checkout Triggers
  const btnCheckout = document.getElementById('btn-checkout');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');

  if (btnCheckout) {
    btnCheckout.addEventListener('click', openCheckoutModal);
  }
  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  }

  // Global Backdrop Click to Close All Active Modals
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeCartDrawer();
      closeProductDetailsModal();
      closeCheckoutModal();
    });
  }

  // Keyboard Navigation: Escape Key Closes Modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchModal();
      closeCartDrawer();
      closeProductDetailsModal();
      closeCheckoutModal();
    }
    // Keyboard shortcut: '/' opens search
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearchModal();
    }
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Demonstration Checkout Form Handler
  initCheckoutForm();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  renderCartDrawer();
  if (drawer && backdrop) {
    backdrop.classList.add('is-active');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   11. DEMONSTRATION CHECKOUT SYSTEM
   ========================================================================== */

function openCheckoutModal() {
  closeCartDrawer();

  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const summaryElem = document.getElementById('checkout-order-summary');
  const formView = document.getElementById('checkout-form-view');
  const successView = document.getElementById('checkout-success-view');

  if (!modal || !backdrop) return;

  // Reset views
  if (formView) formView.style.display = 'block';
  if (successView) successView.style.display = 'none';

  // Populate mini order summary
  if (summaryElem) {
    const totalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = cartItems.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);

    const itemsSummaryHtml = cartItems.map(item => {
      const detailsList = [];
      detailsList.push(item.finishName);
      if (item.embossText && item.embossText !== '—') detailsList.push(`Embossed: "${item.embossText}"`);
      if (item.customInscription) detailsList.push(`Inscription: "${item.customInscription}"`);
      if (item.makerNote) detailsList.push(`Note: "${item.makerNote}"`);

      return `
        <div style="padding: 6px 0; border-bottom: 1px dashed rgba(36, 24, 19, 0.1); font-size: 0.8rem;">
          <div style="display: flex; justify-content: space-between; font-weight: 600;">
            <span>${item.productName} × ${item.quantity}</span>
            <span>${formatRupees(item.unitPrice * item.quantity)}</span>
          </div>
          <div style="color: var(--color-muted); font-size: 0.72rem; margin-top: 2px;">
            ${detailsList.join(' • ')}
          </div>
        </div>
      `;
    }).join('');

    summaryElem.innerHTML = `
      <div style="margin-bottom: 8px;">
        <span style="font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-muted); font-weight: 700;">Commission Summary (${totalCount} piece${totalCount > 1 ? 's' : ''}):</span>
      </div>
      <div style="max-height: 140px; overflow-y: auto; margin-bottom: 10px;">
        ${itemsSummaryHtml}
      </div>
      <div style="display: flex; justify-content: space-between; padding-top: 6px; font-weight: 700; border-top: 1px solid rgba(36, 24, 19, 0.15);">
        <span>Total Commission</span>
        <span style="color: var(--color-cognac);">${formatRupees(subtotal)}</span>
      </div>
      <div style="font-size: 0.72rem; color: var(--color-muted); margin-top: 4px;">
        Includes domestic insured white-glove transport across India.
      </div>
    `;
  }

  backdrop.classList.add('is-active');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-active');
  document.body.style.overflow = '';
}

function initCheckoutForm() {
  const form = document.getElementById('checkout-form');
  const formView = document.getElementById('checkout-form-view');
  const successView = document.getElementById('checkout-success-view');
  const orderIdElem = document.getElementById('confirmed-order-id');
  const closeSuccessBtn = document.getElementById('btn-success-close');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Generate random simulated luxury commission order ID
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const generatedOrderId = `AH-2026-${randomNum}`;

      if (orderIdElem) {
        orderIdElem.textContent = generatedOrderId;
      }

      // Switch to success confirmation screen
      if (formView) formView.style.display = 'none';
      if (successView) successView.style.display = 'flex';

      // Clear the shopping bag
      cartItems = [];
      saveCartToStorage();

      showToast(`Demonstration Commission ${generatedOrderId} registered successfully!`);
    });
  }

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      closeCheckoutModal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   12. THE ATELIER JOURNAL NEWSLETTER
   ========================================================================== */

function initNewsletter() {
  const form = document.getElementById('journal-form');
  const emailInput = document.getElementById('journal-email');

  if (form && emailInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email) return;

      emailInput.value = '';
      showToast(`Thank you. ${email} has been subscribed to The Atelier Journal.`);
    });
  }
}

/* ==========================================================================
   13. TOAST NOTIFICATION ENGINE
   ========================================================================== */

function showToast(message, withCartAction = false) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const actionHtml = withCartAction ? `<button type="button" class="toast-action-btn" id="toast-view-cart">View Bag</button>` : '';

  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span class="toast-message">${message}</span>
    ${actionHtml}
  `;

  if (withCartAction) {
    const viewBtn = toast.querySelector('#toast-view-cart');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        toast.remove();
        openCartDrawer();
      });
    }
  }

  container.appendChild(toast);

  // Auto-dismiss after 4.2 seconds
  setTimeout(() => {
    toast.classList.add('is-hiding');
    setTimeout(() => toast.remove(), 260);
  }, 4200);
}

/* ==========================================================================
   15. 3D WEBGL ENGINE & LUXURY LEATHER ATELIER EXPERIENCE (THREE.JS)
   ========================================================================== */

let heroScene, heroCamera, heroRenderer, heroControls, heroDuffelGroup;
let studioScene, studioCamera, studioRenderer, studioControls, studioModelsGroup;
let studioLeatherMaterial, studioHardwareMaterial;
const studioModels = {};
let proceduralBumpTexture = null;

/* 15.1 Procedural Leather Bump Texture Generator */
function createProceduralLeatherBumpTexture() {
  if (typeof document === 'undefined') return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);

    const imgData = ctx.getImageData(0, 0, 256, 256);
    const data = imgData.data;

    // Organic micro-pore noise with dual frequencies
    for (let y = 0; y < 256; y++) {
      for (let x = 0; x < 256; x++) {
        const idx = (y * 256 + x) * 4;
        const n1 = Math.sin(x * 0.4) * Math.cos(y * 0.4);
        const n2 = Math.sin(x * 0.85 + y * 0.7) * 0.5;
        const n3 = (Math.random() - 0.5) * 0.3;
        const grain = n1 + n2 + n3;
        const val = Math.min(255, Math.max(0, 128 + Math.round(grain * 40)));
        data[idx] = val;
        data[idx + 1] = val;
        data[idx + 2] = val;
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Subtle natural grain crease lines
    ctx.strokeStyle = 'rgba(70, 70, 70, 0.18)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      const sx = Math.random() * 256;
      const sy = Math.random() * 256;
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(
        sx + (Math.random() - 0.5) * 50, sy + Math.random() * 40,
        sx + (Math.random() - 0.5) * 50, sy + Math.random() * 80,
        sx + (Math.random() - 0.5) * 40, sy + 90
      );
      ctx.stroke();
    }

    if (typeof THREE !== 'undefined') {
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(5, 5);
      return texture;
    }
    return null;
  } catch (err) {
    console.warn('Procedural bump texture creation skipped:', err);
    return null;
  }
}

/* 15.2 Procedural Monogram / Full Name Canvas Texture */
function createMonogramCanvasTexture(text, embossStyle, typoStyle, isFullName) {
  if (typeof document === 'undefined') return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.clearRect(0, 0, 512, 512);

    const cleanText = (text || 'AH').trim().toUpperCase();
    const isFoil = (embossStyle === 'foil' || embossStyle === 'gold-foil');

    // Font family mapping
    let fontFamily = 'Cinzel, "Playfair Display", Georgia, serif';
    if (typoStyle === 'modern') fontFamily = 'Montserrat, -apple-system, Arial, sans-serif';
    else if (typoStyle === 'editorial') fontFamily = '"Cormorant Garamond", Garamond, Georgia, serif';
    else if (typoStyle === 'heritage') fontFamily = '"Playfair Display", Georgia, serif';

    // Sizing
    let fontSize = 90;
    if (isFullName) {
      if (cleanText.length > 20) fontSize = 32;
      else if (cleanText.length > 14) fontSize = 42;
      else if (cleanText.length > 8) fontSize = 52;
      else fontSize = 64;
    } else {
      if (cleanText.length > 3) fontSize = 72;
    }

    ctx.font = `600 ${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const cx = 256;
    const cy = 256;

    if (isFoil) {
      // 22k Gold Foil Shader
      const grad = ctx.createLinearGradient(120, 160, 390, 350);
      grad.addColorStop(0.0, '#dfba6b');
      grad.addColorStop(0.25, '#fff6d6');
      grad.addColorStop(0.5, '#caa45a');
      grad.addColorStop(0.75, '#e8cf8c');
      grad.addColorStop(1.0, '#8c6721');

      // Drop shadow (indentation)
      ctx.fillStyle = 'rgba(20, 12, 6, 0.7)';
      ctx.fillText(cleanText, cx + 2, cy + 3);

      // Gold leaf metallic body
      ctx.shadowColor = 'rgba(218, 165, 32, 0.55)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = grad;
      ctx.fillText(cleanText, cx, cy);

      // Specular glint
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(255, 255, 240, 0.45)';
      ctx.fillText(cleanText, cx - 1, cy - 1);
    } else {
      // Blind Deboss Shader
      // Inset top shadow
      ctx.fillStyle = 'rgba(10, 6, 4, 0.88)';
      ctx.fillText(cleanText, cx, cy + 2);

      // Bottom edge bevel highlight
      ctx.fillStyle = 'rgba(255, 240, 220, 0.22)';
      ctx.fillText(cleanText, cx, cy - 1);

      // Burnished impression core
      ctx.fillStyle = 'rgba(24, 16, 12, 0.76)';
      ctx.fillText(cleanText, cx, cy);
    }

    if (typeof THREE !== 'undefined') {
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }
    return null;
  } catch (err) {
    console.warn('Monogram canvas texture creation skipped:', err);
    return null;
  }
}

/* 15.3 Contact Shadow Texture */
function createContactShadowTexture() {
  if (typeof document === 'undefined') return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 124);
    grad.addColorStop(0, 'rgba(8, 4, 2, 0.75)');
    grad.addColorStop(0.45, 'rgba(12, 6, 4, 0.4)');
    grad.addColorStop(0.8, 'rgba(15, 8, 5, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    if (typeof THREE !== 'undefined') {
      return new THREE.CanvasTexture(canvas);
    }
    return null;
  } catch (err) {
    return null;
  }
}

/* 15.4 Material Configuration Helpers */
function getLeatherMaterialConfig(finishId, bumpTex) {
  let color = 0x7a3518; // default cognac
  let roughness = 0.74;
  let metalness = 0.04;
  let bumpScale = 0.035;

  if (finishId === 'tan') {
    color = 0x8c5828;
    roughness = 0.76;
    bumpScale = 0.035;
  } else if (finishId === 'cognac') {
    color = 0x7a3518;
    roughness = 0.72;
    bumpScale = 0.038;
  } else if (finishId === 'espresso') {
    color = 0x241813;
    roughness = 0.65;
    bumpScale = 0.026;
  } else if (finishId === 'black') {
    color = 0x161618;
    roughness = 0.65;
    metalness = 0.08;
    bumpScale = 0.024;
  } else if (finishId === 'crazy' || finishId === 'crazy-horse') {
    color = 0x543620;
    roughness = 0.92;
    metalness = 0.02;
    bumpScale = 0.052;
  }

  const conf = { color, roughness, metalness };
  if (bumpTex) {
    conf.bumpMap = bumpTex;
    conf.bumpScale = bumpScale;
  }
  return conf;
}

function getHardwareMaterialConfig(hardwareId) {
  if (hardwareId === 'silver' || hardwareId === 'brushed-silver') {
    return {
      color: 0xd8dee5,
      roughness: 0.22,
      metalness: 0.96
    };
  }
  return {
    color: 0xd4a853,
    roughness: 0.28,
    metalness: 0.92
  };
}

/* 15.5 Procedural 3D Model Builders */

// 0. The Structured Handbag No. 01 (Flagship Masterpiece)
function buildHandbag3D(leatherMat, hardwareMat, monogramMat) {
  const group = new THREE.Group();

  // 1. Structured Trapezoidal Body with Rounded Base Corners
  const shape = new THREE.Shape();
  shape.moveTo(-1.1, -0.85);
  shape.lineTo(1.1, -0.85);
  shape.quadraticCurveTo(1.22, -0.85, 1.2, -0.72);
  shape.lineTo(0.92, 0.82);
  shape.quadraticCurveTo(0.9, 0.88, 0.82, 0.88);
  shape.lineTo(-0.82, 0.88);
  shape.quadraticCurveTo(-0.9, 0.88, -0.92, 0.82);
  shape.lineTo(-1.2, -0.72);
  shape.quadraticCurveTo(-1.22, -0.85, -1.1, -0.85);

  const extrudeSettings = {
    depth: 0.78,
    bevelEnabled: true,
    bevelThickness: 0.045,
    bevelSize: 0.04,
    bevelSegments: 3
  };
  const bodyGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  const body = new THREE.Mesh(bodyGeo, leatherMat);
  body.position.z = -0.39;
  body.castShadow = true;
  group.add(body);

  // 2. Sculpted Front Leather Flap with Beveled Tongue
  const flapShape = new THREE.Shape();
  flapShape.moveTo(-0.84, 0.88);
  flapShape.lineTo(0.84, 0.88);
  flapShape.lineTo(0.78, 0.15);
  flapShape.quadraticCurveTo(0.75, -0.12, 0, -0.18);
  flapShape.quadraticCurveTo(-0.75, -0.12, -0.78, 0.15);
  flapShape.closePath();

  const flapGeo = new THREE.ExtrudeGeometry(flapShape, {
    depth: 0.035,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2
  });
  const flap = new THREE.Mesh(flapGeo, leatherMat);
  flap.position.z = 0.41;
  flap.castShadow = true;
  group.add(flap);

  // 3. Solid Sand-Cast Brass Turn-Lock Clasp Mechanism
  const escutcheonGeo = new THREE.BoxGeometry(0.24, 0.15, 0.025);
  const escutcheon = new THREE.Mesh(escutcheonGeo, hardwareMat);
  escutcheon.position.set(0, -0.12, 0.465);
  group.add(escutcheon);

  const lockRingGeo = new THREE.TorusGeometry(0.048, 0.014, 8, 16);
  const lockRing = new THREE.Mesh(lockRingGeo, hardwareMat);
  lockRing.position.set(0, -0.12, 0.485);
  group.add(lockRing);

  const turnKeyGeo = new THREE.BoxGeometry(0.14, 0.04, 0.05);
  const turnKey = new THREE.Mesh(turnKeyGeo, hardwareMat);
  turnKey.position.set(0, -0.12, 0.495);
  group.add(turnKey);

  // 4. Arched Dual Rolled Carry Handles & Solid Brass D-Ring Anchors
  [-0.22, 0.22].forEach(zPos => {
    const handleGeo = new THREE.TorusGeometry(0.52, 0.048, 16, 32, Math.PI);
    const handle = new THREE.Mesh(handleGeo, leatherMat);
    handle.position.set(0, 0.88, zPos);
    handle.castShadow = true;
    group.add(handle);

    [-0.52, 0.52].forEach(xPos => {
      const tabGeo = new THREE.BoxGeometry(0.11, 0.22, 0.03);
      const tab = new THREE.Mesh(tabGeo, leatherMat);
      tab.position.set(xPos, 0.80, zPos + (zPos > 0 ? 0.02 : -0.02));
      group.add(tab);

      const dRingGeo = new THREE.TorusGeometry(0.055, 0.015, 8, 16);
      const dRing = new THREE.Mesh(dRingGeo, hardwareMat);
      dRing.position.set(xPos, 0.88, zPos);
      group.add(dRing);

      const rivetGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.02, 12);
      const rivet = new THREE.Mesh(rivetGeo, hardwareMat);
      rivet.rotation.x = Math.PI / 2;
      rivet.position.set(xPos, 0.74, zPos + (zPos > 0 ? 0.04 : -0.04));
      group.add(rivet);
    });
  });

  // 5. Side D-Rings (For Optional Shoulder Strap)
  [-1.16, 1.16].forEach(xPos => {
    const ringGeo = new THREE.TorusGeometry(0.07, 0.018, 8, 16);
    const ring = new THREE.Mesh(ringGeo, hardwareMat);
    ring.rotation.y = Math.PI / 2;
    ring.position.set(xPos, 0.35, 0);
    group.add(ring);
  });

  // 6. Hanging Bespoke Leather Clochette with Dynamic Monogram Target
  const clochetteGroup = new THREE.Group();
  clochetteGroup.position.set(-0.52, 0.88, 0.26);

  const strapGeo = new THREE.BoxGeometry(0.035, 0.48, 0.015);
  const strap = new THREE.Mesh(strapGeo, leatherMat);
  strap.position.set(0, -0.22, 0.02);
  strap.rotation.z = 0.08;
  clochetteGroup.add(strap);

  const tagGeo = new THREE.BoxGeometry(0.36, 0.52, 0.022);
  const tag = new THREE.Mesh(tagGeo, leatherMat);
  tag.position.set(0.04, -0.52, 0.03);
  tag.rotation.z = 0.08;
  clochetteGroup.add(tag);

  const monoGeo = new THREE.PlaneGeometry(0.32, 0.48);
  const monoMesh = new THREE.Mesh(monoGeo, monogramMat);
  monoMesh.position.set(0.04, -0.52, 0.045);
  monoMesh.rotation.z = 0.08;
  clochetteGroup.add(monoMesh);

  group.add(clochetteGroup);

  // 7. Protective Solid Brass Base Studs (Purse Feet)
  [[-0.85, -0.24], [0.85, -0.24], [-0.85, 0.24], [0.85, 0.24]].forEach(([x, z]) => {
    const studGeo = new THREE.CylinderGeometry(0.045, 0.065, 0.05, 16);
    const stud = new THREE.Mesh(studGeo, hardwareMat);
    stud.position.set(x, -0.92, z);
    group.add(stud);
  });

  group.monogramMesh = monoMesh;
  return group;
}

// 1. The Weekender No. 01 Duffel
function buildWeekender3D(leatherMat, hardwareMat, monogramMat) {
  const group = new THREE.Group();

  // Duffel Barrel Body (cylinder rotated on Z axis)
  const barrelGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.7, 32);
  const barrel = new THREE.Mesh(barrelGeo, leatherMat);
  barrel.rotation.z = Math.PI / 2;
  barrel.castShadow = true;
  group.add(barrel);

  // Rounded End Caps
  const endCapGeo = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const leftEnd = new THREE.Mesh(endCapGeo, leatherMat);
  leftEnd.rotation.z = Math.PI / 2;
  leftEnd.position.x = -1.35;
  group.add(leftEnd);

  const rightEnd = new THREE.Mesh(endCapGeo, leatherMat);
  rightEnd.rotation.z = -Math.PI / 2;
  rightEnd.position.x = 1.35;
  group.add(rightEnd);

  // Reinforcing Leather Bands
  [-0.75, 0.75].forEach(xPos => {
    const bandGeo = new THREE.CylinderGeometry(0.87, 0.87, 0.16, 32);
    const band = new THREE.Mesh(bandGeo, leatherMat);
    band.rotation.z = Math.PI / 2;
    band.position.x = xPos;
    group.add(band);

    // Handle Brass D-Rings & Anchors
    [-0.32, 0.32].forEach(zPos => {
      const ringGeo = new THREE.TorusGeometry(0.08, 0.025, 8, 16);
      const ring = new THREE.Mesh(ringGeo, hardwareMat);
      ring.position.set(xPos, 0.86, zPos);
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
    });
  });

  // Top Zipper Welt
  const zipWeltGeo = new THREE.BoxGeometry(2.5, 0.05, 0.12);
  const zipWelt = new THREE.Mesh(zipWeltGeo, leatherMat);
  zipWelt.position.set(0, 0.86, 0);
  group.add(zipWelt);

  // Top Brass Zipper Teeth Line
  const zipTrackGeo = new THREE.BoxGeometry(2.35, 0.02, 0.04);
  const zipTrack = new THREE.Mesh(zipTrackGeo, hardwareMat);
  zipTrack.position.set(0, 0.89, 0);
  group.add(zipTrack);

  // Rolled Leather Carry Handles
  [-0.32, 0.32].forEach(zPos => {
    const handleGeo = new THREE.TorusGeometry(0.55, 0.065, 16, 32, Math.PI);
    const handle = new THREE.Mesh(handleGeo, leatherMat);
    handle.position.set(0, 0.85, zPos);
    handle.castShadow = true;
    group.add(handle);
  });

  // Hanging Luggage Tag (with dynamic monogram stamp)
  const tagGroup = new THREE.Group();
  tagGroup.position.set(-0.75, 0.82, 0.38);
  tagGroup.rotation.set(0.12, 0.25, -0.2);

  // Tag Strap
  const tagStrapGeo = new THREE.BoxGeometry(0.05, 0.32, 0.015);
  const tagStrap = new THREE.Mesh(tagStrapGeo, leatherMat);
  tagStrap.position.set(0, -0.12, 0);
  tagGroup.add(tagStrap);

  // Tag Leather Body
  const tagBodyGeo = new THREE.BoxGeometry(0.44, 0.68, 0.025);
  const tagBody = new THREE.Mesh(tagBodyGeo, leatherMat);
  tagBody.position.set(0, -0.44, 0);
  tagGroup.add(tagBody);

  // Monogram Stamp Plane on Tag Face
  const monogramGeo = new THREE.PlaneGeometry(0.40, 0.62);
  const monogramMesh = new THREE.Mesh(monogramGeo, monogramMat);
  monogramMesh.position.set(0, -0.44, 0.016);
  tagGroup.add(monogramMesh);

  group.add(tagGroup);

  // Protective Brass Base Studs (Feet)
  [
    [-1.0, -0.45], [1.0, -0.45],
    [-1.0, 0.45], [1.0, 0.45],
    [0, 0]
  ].forEach(([x, z]) => {
    const studGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.05, 16);
    const stud = new THREE.Mesh(studGeo, hardwareMat);
    stud.position.set(x, -0.87, z);
    group.add(stud);
  });

  group.monogramMesh = monogramMesh;
  return group;
}

// 2. The Field Messenger No. 02
function buildMessenger3D(leatherMat, hardwareMat, monogramMat) {
  const group = new THREE.Group();

  // Main Bag Box Compartment
  const mainBoxGeo = new THREE.BoxGeometry(2.5, 1.8, 0.8);
  const mainBox = new THREE.Mesh(mainBoxGeo, leatherMat);
  mainBox.castShadow = true;
  group.add(mainBox);

  // Front Overlapping Flap
  const flapGeo = new THREE.BoxGeometry(2.54, 1.35, 0.06);
  const flap = new THREE.Mesh(flapGeo, leatherMat);
  flap.position.set(0, 0.22, 0.42);
  group.add(flap);

  // Closure Straps & Buckles
  [-0.7, 0.7].forEach(xPos => {
    // Leather Strap
    const strapGeo = new THREE.BoxGeometry(0.12, 1.45, 0.03);
    const strap = new THREE.Mesh(strapGeo, leatherMat);
    strap.position.set(xPos, 0.15, 0.45);
    group.add(strap);

    // Brass Roller Buckle
    const buckleGeo = new THREE.TorusGeometry(0.09, 0.025, 8, 16);
    const buckle = new THREE.Mesh(buckleGeo, hardwareMat);
    buckle.position.set(xPos, -0.38, 0.47);
    group.add(buckle);
  });

  // Top Carry Handle
  const handleGeo = new THREE.CylinderGeometry(0.055, 0.055, 1.0, 16);
  const handle = new THREE.Mesh(handleGeo, leatherMat);
  handle.rotation.z = Math.PI / 2;
  handle.position.set(0, 1.05, 0);
  group.add(handle);

  // Handle Brass Brackets
  [-0.5, 0.5].forEach(xPos => {
    const bracketGeo = new THREE.BoxGeometry(0.08, 0.14, 0.1);
    const bracket = new THREE.Mesh(bracketGeo, hardwareMat);
    bracket.position.set(xPos, 0.96, 0);
    group.add(bracket);
  });

  // Shoulder Strap Brass O-Rings on Sides
  [-1.26, 1.26].forEach(xPos => {
    const ringGeo = new THREE.TorusGeometry(0.11, 0.025, 8, 16);
    const ring = new THREE.Mesh(ringGeo, hardwareMat);
    ring.rotation.y = Math.PI / 2;
    ring.position.set(xPos, 0.6, 0);
    group.add(ring);
  });

  // Monogram Stamp Leather Patch
  const patchGeo = new THREE.BoxGeometry(0.85, 0.45, 0.025);
  const patch = new THREE.Mesh(patchGeo, leatherMat);
  patch.position.set(0, 0.32, 0.46);
  group.add(patch);

  // Monogram Stamp Plane
  const monogramGeo = new THREE.PlaneGeometry(0.80, 0.40);
  const monogramMesh = new THREE.Mesh(monogramGeo, monogramMat);
  monogramMesh.position.set(0, 0.32, 0.475);
  group.add(monogramMesh);

  group.monogramMesh = monogramMesh;
  return group;
}

// 3. The Minimalist Bifold No. 03
function buildBifold3D(leatherMat, hardwareMat, monogramMat) {
  const group = new THREE.Group();

  // Left Leather Leaf
  const leftLeafGeo = new THREE.BoxGeometry(1.2, 1.6, 0.06);
  const leftLeaf = new THREE.Mesh(leftLeafGeo, leatherMat);
  leftLeaf.position.set(-0.6, 0, 0.08);
  leftLeaf.rotation.y = 0.18;
  leftLeaf.castShadow = true;
  group.add(leftLeaf);

  // Right Leather Leaf
  const rightLeafGeo = new THREE.BoxGeometry(1.2, 1.6, 0.06);
  const rightLeaf = new THREE.Mesh(rightLeafGeo, leatherMat);
  rightLeaf.position.set(0.6, 0, 0.08);
  rightLeaf.rotation.y = -0.18;
  rightLeaf.castShadow = true;
  group.add(rightLeaf);

  // Center Spine Crease
  const spineGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.6, 16);
  const spine = new THREE.Mesh(spineGeo, leatherMat);
  spine.position.set(0, 0, -0.02);
  group.add(spine);

  // Interior Card Slots Trim
  const cardTrimGeo = new THREE.BoxGeometry(1.0, 0.08, 0.02);
  const cardTrim1 = new THREE.Mesh(cardTrimGeo, leatherMat);
  cardTrim1.position.set(0.58, 0.25, 0.12);
  cardTrim1.rotation.y = -0.18;
  group.add(cardTrim1);

  const cardTrim2 = new THREE.Mesh(cardTrimGeo, leatherMat);
  cardTrim2.position.set(0.58, -0.1, 0.12);
  cardTrim2.rotation.y = -0.18;
  group.add(cardTrim2);

  // Monogram Stamping Plane (Lower right front quadrant)
  const monogramGeo = new THREE.PlaneGeometry(0.68, 0.32);
  const monogramMesh = new THREE.Mesh(monogramGeo, monogramMat);
  monogramMesh.position.set(0.62, -0.42, 0.12);
  monogramMesh.rotation.y = -0.18;
  group.add(monogramMesh);

  group.monogramMesh = monogramMesh;
  return group;
}

// 4. The Folio Passport Sleeve No. 04
function buildPassport3D(leatherMat, hardwareMat, monogramMat) {
  const group = new THREE.Group();

  // Slim Book Folio Body
  const bodyGeo = new THREE.BoxGeometry(1.5, 2.2, 0.1);
  const body = new THREE.Mesh(bodyGeo, leatherMat);
  body.castShadow = true;
  group.add(body);

  // Left Spine Edge
  const spineGeo = new THREE.CylinderGeometry(0.06, 0.06, 2.2, 16);
  const spine = new THREE.Mesh(spineGeo, leatherMat);
  spine.position.set(-0.75, 0, 0);
  group.add(spine);

  // Leather Closure Strap
  const strapGeo = new THREE.BoxGeometry(0.48, 0.18, 0.03);
  const strap = new THREE.Mesh(strapGeo, leatherMat);
  strap.position.set(0.72, 0, 0.06);
  group.add(strap);

  // Brass Snap Button
  const snapGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.04, 16);
  const snap = new THREE.Mesh(snapGeo, hardwareMat);
  snap.rotation.x = Math.PI / 2;
  snap.position.set(0.78, 0, 0.08);
  group.add(snap);

  // Monogram Stamping Plane (Upper Center)
  const monogramGeo = new THREE.PlaneGeometry(0.80, 0.40);
  const monogramMesh = new THREE.Mesh(monogramGeo, monogramMat);
  monogramMesh.position.set(0, 0.45, 0.055);
  group.add(monogramMesh);

  group.monogramMesh = monogramMesh;
  return group;
}

/* 15.6 Hero 3D Interactive Showcase */
function initHero3DExperience() {
  if (typeof window === 'undefined' || typeof THREE === 'undefined') return;

  const canvas = document.getElementById('hero-3d-canvas');
  const container = document.getElementById('hero-3d-container');
  const fallback = document.getElementById('hero-fallback-wrap');
  if (!canvas || !container) return;

  try {
    // Scene setup
    heroScene = new THREE.Scene();

    // Camera
    const aspect = container.clientWidth / (container.clientHeight || 1);
    heroCamera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    heroCamera.position.set(0, 0.35, 4.3);

    // Renderer
    heroRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    heroRenderer.setSize(container.clientWidth, container.clientHeight);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    heroRenderer.shadowMap.enabled = true;
    heroRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Cinematic 3-Point Lighting
    const ambientLight = new THREE.AmbientLight(0x281c15, 0.7);
    heroScene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff6e8, 1.25);
    keyLight.position.set(3.5, 5, 4.5);
    heroScene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x90a4b8, 0.42);
    fillLight.position.set(-4, 2.5, -2);
    heroScene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf5c378, 1.6);
    rimLight.position.set(0, 4.5, -5);
    heroScene.add(rimLight);

    // Contact Shadow Plane
    const shadowTex = createContactShadowTexture();
    if (shadowTex) {
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        opacity: 0.85,
        depthWrite: false
      });
      const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 2.2), shadowMat);
      shadowPlane.rotation.x = -Math.PI / 2;
      shadowPlane.position.set(0, -1.25, 0);
      heroScene.add(shadowPlane);
    }

    // Procedural Textures & Materials for Hero Handbag
    if (!proceduralBumpTexture) {
      proceduralBumpTexture = createProceduralLeatherBumpTexture();
    }
    const leatherConfig = getLeatherMaterialConfig('cognac', proceduralBumpTexture);
    const heroLeatherMat = new THREE.MeshStandardMaterial(leatherConfig);

    const hwConfig = getHardwareMaterialConfig('brass');
    const heroHwMat = new THREE.MeshStandardMaterial(hwConfig);

    const heroMonogramTex = createMonogramCanvasTexture('AH', 'gold-foil', 'classic', false);
    const heroMonogramMat = new THREE.MeshStandardMaterial({
      map: heroMonogramTex,
      transparent: true,
      roughness: 0.45,
      metalness: 0.2
    });

    // Build Structured Luxury Handbag (The Signature Centerpiece)
    const heroHandbagGroup = buildHandbag3D(heroLeatherMat, heroHwMat, heroMonogramMat);
    heroHandbagGroup.position.set(0, -0.05, 0);
    heroHandbagGroup.rotation.y = -0.28;
    heroScene.add(heroHandbagGroup);
    heroDuffelGroup = heroHandbagGroup; // Backwards compatibility alias

    // OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
      heroControls = new THREE.OrbitControls(heroCamera, canvas);
      heroControls.enableZoom = false;
      heroControls.enablePan = false;
      heroControls.enableDamping = true;
      heroControls.dampingFactor = 0.05;
      heroControls.minPolarAngle = Math.PI / 3.4;
      heroControls.maxPolarAngle = Math.PI / 1.8;
    }

    // Interactive Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * -0.35;
    });
    container.addEventListener('mouseleave', () => {
      targetMouseX = 0;
      targetMouseY = 0;
    });

    // Animation Loop
    const clock = new THREE.Clock();
    let isUserDragging = false;
    canvas.addEventListener('pointerdown', () => { isUserDragging = true; });
    window.addEventListener('pointerup', () => { isUserDragging = false; });

    function animateHero() {
      requestAnimationFrame(animateHero);
      const elapsed = clock.getElapsedTime();

      if (heroControls) heroControls.update();

      if (heroDuffelGroup) {
        // Idle breathing / floating
        heroDuffelGroup.position.y = -0.05 + Math.sin(elapsed * 1.1) * 0.05;
        heroDuffelGroup.rotation.z = Math.sin(elapsed * 0.8) * 0.012;

        // Slow idle rotation when idle
        if (!isUserDragging) {
          heroDuffelGroup.rotation.y += 0.0028;
        }
      }

      // Smooth camera parallax
      if (heroCamera) {
        heroCamera.position.x += (targetMouseX - heroCamera.position.x) * 0.04;
        heroCamera.position.y += (0.4 + targetMouseY - heroCamera.position.y) * 0.04;
      }

      heroRenderer.render(heroScene, heroCamera);
    }
    animateHero();

    // Window Resize Handler
    window.addEventListener('resize', () => {
      if (!heroCamera || !heroRenderer || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 1;
      heroCamera.aspect = w / h;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(w, h);
    });

    // Hide fallback image once WebGL is active
    if (fallback) fallback.style.display = 'none';

  } catch (err) {
    console.warn('Hero 3D WebGL initialization failed, preserving static fallback:', err);
    if (fallback) fallback.style.display = 'block';
  }
}

/* 15.7 Studio 3D Interactive Customizer Viewport */
function initStudio3DExperience() {
  if (typeof window === 'undefined' || typeof THREE === 'undefined') return;

  const canvas = document.getElementById('studio-3d-canvas');
  const container = document.getElementById('canvas-product-display');
  if (!canvas || !container) return;

  try {
    studioScene = new THREE.Scene();

    const aspect = container.clientWidth / (container.clientHeight || 1);
    studioCamera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    studioCamera.position.set(0, 0.7, 4.6);

    studioRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    studioRenderer.setSize(container.clientWidth, container.clientHeight);
    studioRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    studioRenderer.shadowMap.enabled = true;
    studioRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x281c15, 0.65);
    studioScene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff6e8, 1.2);
    keyLight.position.set(3.8, 5.2, 4.2);
    studioScene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x95a8bc, 0.45);
    fillLight.position.set(-4, 2.5, -2);
    studioScene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf5c378, 1.5);
    rimLight.position.set(0, 4.5, -5);
    studioScene.add(rimLight);

    // Studio Contact Shadow
    const shadowTex = createContactShadowTexture();
    if (shadowTex) {
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        opacity: 0.8,
        depthWrite: false
      });
      const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 2.2), shadowMat);
      shadowPlane.rotation.x = -Math.PI / 2;
      shadowPlane.position.set(0, -1.2, 0);
      studioScene.add(shadowPlane);
    }

    // Shared Studio Materials
    if (!proceduralBumpTexture) {
      proceduralBumpTexture = createProceduralLeatherBumpTexture();
    }
    const leatherConfig = getLeatherMaterialConfig(studioState.finishId, proceduralBumpTexture);
    studioLeatherMaterial = new THREE.MeshStandardMaterial(leatherConfig);

    const hwConfig = getHardwareMaterialConfig(studioState.hardwareId);
    studioHardwareMaterial = new THREE.MeshStandardMaterial(hwConfig);

    // Initial Monogram Texture
    const initText = (studioState.personalizationMode === 'name')
      ? (studioState.customerName.trim().toUpperCase() || 'YOUR NAME')
      : (studioState.monogramText.trim() || PRODUCTS_DATA[studioState.productId]?.defaultMonogram || 'AH');
    const initMonogramTex = createMonogramCanvasTexture(initText, studioState.embossStyle, studioState.typography, studioState.personalizationMode === 'name');

    studioModelsGroup = new THREE.Group();

    // Build All Silhouettes (Including Flagship Structured Handbag)
    const createModelMat = () => new THREE.MeshStandardMaterial({
      map: initMonogramTex,
      transparent: true,
      roughness: 0.45,
      metalness: 0.2
    });

    studioModels.handbag = buildHandbag3D(studioLeatherMaterial, studioHardwareMaterial, createModelMat());
    studioModels.weekender = buildWeekender3D(studioLeatherMaterial, studioHardwareMaterial, createModelMat());
    studioModels.messenger = buildMessenger3D(studioLeatherMaterial, studioHardwareMaterial, createModelMat());
    studioModels.bifold = buildBifold3D(studioLeatherMaterial, studioHardwareMaterial, createModelMat());
    studioModels.passport = buildPassport3D(studioLeatherMaterial, studioHardwareMaterial, createModelMat());

    Object.values(studioModels).forEach(model => {
      model.visible = false;
      studioModelsGroup.add(model);
    });

    // Make initial product visible
    if (studioModels[studioState.productId]) {
      studioModels[studioState.productId].visible = true;
    }
    studioScene.add(studioModelsGroup);

    // OrbitControls for Studio
    if (typeof THREE.OrbitControls !== 'undefined') {
      studioControls = new THREE.OrbitControls(studioCamera, canvas);
      studioControls.enableZoom = true;
      studioControls.minDistance = 2.2;
      studioControls.maxDistance = 7.5;
      studioControls.enableDamping = true;
      studioControls.dampingFactor = 0.06;
    }

    // Reset Camera Angle Button
    const resetBtn = document.getElementById('btn-reset-studio-camera');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (!studioCamera || !studioControls) return;
        studioCamera.position.set(0, 0.7, 4.6);
        studioControls.target.set(0, 0, 0);
        studioControls.update();
        if (studioModelsGroup) {
          studioModelsGroup.rotation.set(0, 0, 0);
        }
      });
    }

    // Render loop
    function animateStudio() {
      requestAnimationFrame(animateStudio);
      if (studioControls) studioControls.update();
      studioRenderer.render(studioScene, studioCamera);
    }
    animateStudio();

    // Window Resize Handler
    window.addEventListener('resize', () => {
      if (!studioCamera || !studioRenderer || !container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 1;
      studioCamera.aspect = w / h;
      studioCamera.updateProjectionMatrix();
      studioRenderer.setSize(w, h);
    });

  } catch (err) {
    console.warn('Studio 3D WebGL initialization failed:', err);
  }
}

/* 15.8 Reactive Studio Model & Material Updater */
function update3DStudioModel() {
  if (typeof window === 'undefined' || typeof THREE === 'undefined' || !studioScene) return;

  try {
    // 1. Toggle Active 3D Model Visibility
    Object.keys(studioModels).forEach(id => {
      if (studioModels[id]) {
        studioModels[id].visible = (id === studioState.productId);
      }
    });

    // 2. Update Leather Shader Material
    if (studioLeatherMaterial) {
      const leatherConfig = getLeatherMaterialConfig(studioState.finishId, proceduralBumpTexture);
      studioLeatherMaterial.color.setHex(leatherConfig.color);
      studioLeatherMaterial.roughness = leatherConfig.roughness;
      studioLeatherMaterial.metalness = leatherConfig.metalness;
      if (leatherConfig.bumpScale) {
        studioLeatherMaterial.bumpScale = leatherConfig.bumpScale;
      }
      studioLeatherMaterial.needsUpdate = true;
    }

    // 3. Update Hardware Shader Material
    if (studioHardwareMaterial) {
      const hwConfig = getHardwareMaterialConfig(studioState.hardwareId);
      studioHardwareMaterial.color.setHex(hwConfig.color);
      studioHardwareMaterial.roughness = hwConfig.roughness;
      studioHardwareMaterial.metalness = hwConfig.metalness;
      studioHardwareMaterial.needsUpdate = true;
    }

    // 4. Update Monogram Dynamic Texture
    const isFullName = (studioState.personalizationMode === 'name');
    let textToRender = '';
    if (isFullName) {
      textToRender = studioState.customerName.trim().toUpperCase() || 'YOUR NAME';
    } else {
      textToRender = studioState.monogramText.trim().toUpperCase() || PRODUCTS_DATA[studioState.productId]?.defaultMonogram || 'AH';
    }

    const updatedMonogramTex = createMonogramCanvasTexture(textToRender, studioState.embossStyle, studioState.typography, isFullName);

    // Apply to all models' monogram plane meshes
    Object.values(studioModels).forEach(model => {
      if (model && model.monogramMesh && model.monogramMesh.material) {
        model.monogramMesh.material.map = updatedMonogramTex;
        model.monogramMesh.material.needsUpdate = true;
      }
    });

  } catch (err) {
    console.warn('update3DStudioModel error:', err);
  }
}

/* 15.9 Catalog Cards 3D Tilt & Specular Glare */
function init3DCardParallax() {
  if (typeof document === 'undefined') return;

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (card.dataset.hasTilt === 'true') return;
    card.dataset.hasTilt = 'true';

    // Ensure card-glare exists
    if (!card.querySelector('.card-glare')) {
      const glare = document.createElement('div');
      glare.className = 'card-glare';
      card.prepend(glare);
    }

    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      const glare = card.querySelector('.card-glare');
      if (glare) {
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${px.toFixed(1)}% ${py.toFixed(1)}%, rgba(218, 165, 32, 0.18) 0%, transparent 65%)`;
        glare.style.opacity = '1';
      }
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
      const glare = card.querySelector('.card-glare');
      if (glare) glare.style.opacity = '0';
    });
  });
}

/* ==========================================================================
   14. NODE.JS TEST EXPORTS (FOR AUTOMATED QA SUITES)
   ========================================================================== */

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PRODUCTS_DATA,
    LEATHER_FINISHES,
    HARDWARE_FINISHES,
    TYPOGRAPHY_STYLES,
    EMBOSS_STYLES,
    PATINA_STAGES,
    studioState,
    cartItems,
    formatRupees,
    addStudioCommissionToCart,
    addStandardProductToCart,
    updateItemQuantity,
    removeCartItem,
    resetStudioToDefaults,
    loadProductIntoStudio,
    openCustomizationStudio,
    changeLeatherColor,
    selectHardware,
    updatePersonalization,
    updateProductPreview,
    rotateProduct,
    initCustomStudio,
    bindStudioEvents,
    updateMonogramStamp,
    updateCanvasInscriptionPreview,
    updateStudioVisualizer,
    createProceduralLeatherBumpTexture,
    createMonogramCanvasTexture,
    update3DStudioModel,
    getLeatherMaterialConfig,
    getHardwareMaterialConfig,
    buildHandbag3D,
    initHero3DExperience,
    initStudio3DExperience,
    init3DCardParallax,
    initMotionSystem
  };
}
