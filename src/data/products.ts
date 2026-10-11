export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  bannerImage?: string;
  posterImage?: string;
  categoryId: string;
  categoryName: string;
  descriptionHtml: string;
  packaging?: string;
  mrp?: string;
  dosage?: string;
  composition?: { name: string; amount: string; rda: string }[];
  nutrition?: { parameter: string; value: string }[];
  highlights?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  desc: string;
}

export const COMPANY_INFO = {
  name: 'ONE ETHICAL PHARMACEUTICAL',
  tagline: 'Better Medicine • Healthier Tomorrow',
  shortName: 'ONE Ethical',
  address: 'Space No-48/17, First Floor, Dsidc Industrial Complex, Himmat Puri, Delhi 110091',
  phone: '+91 88003 36704',
  phoneAlt: '+91 99906 85530',
  email: 'oneethicalpharmaceutical@gmail.com',
  formspreeUrl: 'https://formspree.io/f/oneethicalpharmaceutical@gmail.com',
  manufacturer: 'Merit Healthcare (A GMP Certified Co.), 50/2 Shiv Nagar Lohari, Tehsil-Swar, Distt. Rampur (U.P.) 244924',
  logo: '/one_assets/logo.jpg'
};

export const CATEGORIES: Record<string, Category> = {
  'nutritional-support': {
    id: 'nutritional-support',
    name: 'NUTRITIONAL SUPPORT',
    image: '/one_assets/c-one-box.jpg',
    desc: 'Advanced daily wellness, cellular bioenergetics, and multi-nutrient formulations.'
  },
  cardiac: {
    id: 'cardiac',
    name: 'CARDIAC & VITALITY',
    image: '/one_assets/c-one-banner.jpg',
    desc: 'CoQ10 and Omega-3 essential fatty acid formulations for cardiovascular support.'
  },
  'active-metabolism': {
    id: 'active-metabolism',
    name: 'ACTIVE METABOLISM',
    image: '/one_assets/c-one-poster.jpg',
    desc: 'L-Carnitine, antioxidant extracts, and metabolic energy boosters.'
  },
  'general-care': {
    id: 'general-care',
    name: 'ANTIOXIDANTS & IMMUNITY',
    image: '/one_assets/c-one-infographic.jpg',
    desc: 'Green Tea, Grape Seed, Lycopene, and essential B-Complex vitamins.'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'c-one-enzyme',
    slug: 'c-one-enzyme-tablet',
    name: 'C-ONE ENZYME Tablet',
    image: '/one_assets/c-one-box.jpg',
    bannerImage: '/one_assets/c-one-banner.jpg',
    posterImage: '/one_assets/c-one-poster.jpg',
    categoryId: 'nutritional-support',
    categoryName: 'NUTRITIONAL SUPPORT',
    packaging: '10x1x10 Tablet (Strip of 10 Tablets)',
    mrp: 'Rs. 750.00 (Per 10 Tablets) / Rs. 75.00 Per Tablet',
    dosage: 'As directed by the Specialist / Physician.',
    highlights: [
      'CoQ10: Supports heart health & energy production',
      'Omega-3: Good for heart, brain & eye health',
      'L-Carnitine: Helps in energy metabolism & fat utilization',
      'Vitamins & Antioxidants: Boost immunity & protect cells from damage',
      'Green Tea & Grape Seed Extract: Natural antioxidants for better cellular health',
      'Vitamin B1, B6 & E: Supports nerve function, skin health & overall wellness'
    ],
    composition: [
      { name: 'Co-enzyme Q10', amount: '100 mg', rda: '**' },
      { name: 'Omega 3 Fatty Acid', amount: '100 mg', rda: '**' },
      { name: 'L-Carnitine', amount: '500 mg', rda: '**' },
      { name: 'Lycopene', amount: '5000 mcg', rda: '**' },
      { name: 'Green Tea Extract', amount: '200 mg', rda: '**' },
      { name: 'Grape Seed Extract', amount: '25 mg', rda: '**' },
      { name: 'Vitamin E', amount: '10 mg', rda: '100%' },
      { name: 'Vitamin B1', amount: '1.2 mg', rda: '100%' },
      { name: 'Vitamin B6', amount: '2 mg', rda: '100%' }
    ],
    nutrition: [
      { parameter: 'Energy', value: '5.64 Kcal' },
      { parameter: 'Carbohydrates', value: '4 Kcal' },
      { parameter: 'Protein', value: '4 Kcal' },
      { parameter: 'Fat', value: '9 Kcal' }
    ],
    descriptionHtml: `
      <p><strong>C-ONE ENZYME Tablet</strong> is a premium, scientifically formulated comprehensive nutritional health supplement manufactured by Merit Healthcare (A GMP Certified Co.) and marketed by <strong>ONE ETHICAL PHARMACEUTICAL</strong>.</p>
      <p>It brings together the synergy of <strong>Co-enzyme Q10, Omega-3 Fatty Acids, L-Carnitine, Green Tea Extract, Lycopene, Grape Seed Extract, Vitamin E, Vitamin B1, and Vitamin B6</strong> to deliver <em>Complete Nutrition in One Tablet</em>.</p>
      
      <p><strong>Clinical Benefits & Mechanisms:</strong></p>
      <p>• <strong>CoQ10 (100 mg):</strong> Crucial for mitochondrial ATP cellular energy synthesis, cardiovascular performance, and protecting myocardium against oxidative stress.</p>
      <p>• <strong>Omega 3 Fatty Acid (100 mg):</strong> Helps maintain healthy lipid profiles, regulates systemic inflammation, and promotes brain, cognitive, and retinal vitality.</p>
      <p>• <strong>L-Carnitine (500 mg):</strong> Transports long-chain fatty acids into mitochondria to be burned for energy, supporting muscular stamina and recovery.</p>
      <p>• <strong>Green Tea & Grape Seed Extract:</strong> Delivers potent proanthocyanidins and polyphenols for maximum cellular protection and vascular elasticity.</p>
      <p>• <strong>Lycopene (5000 mcg):</strong> Strong carotenoid antioxidant neutralizing free radicals.</p>
      <p>• <strong>Essential Vitamins B1, B6 & E:</strong> Supports neuromuscular signaling, red blood cell metabolism, and dermatological integrity.</p>
      
      <p><strong>Storage:</strong> Store in a cool, dry & dark place. Protect from direct sunlight & moisture at a temperature not exceeding 25°C. Keep out of reach of children.</p>
      <p><strong>Batch Ref:</strong> CET-092601</p>
    `
  },
  {
    id: 'c-one-cardio-vitality',
    slug: 'c-one-cardio-vitality',
    name: 'C-ONE Cardio Vitality (CoQ10 + Omega-3)',
    image: '/one_assets/c-one-banner.jpg',
    bannerImage: '/one_assets/c-one-banner.jpg',
    posterImage: '/one_assets/c-one-poster.jpg',
    categoryId: 'cardiac',
    categoryName: 'CARDIAC & VITALITY',
    packaging: '10x1x10 Tablets',
    mrp: 'Rs. 750.00',
    dosage: '1 Tablet daily after meals or as advised by specialist.',
    highlights: [
      'Cardioprotective CoQ10 & EPA/DHA Omega-3 Complex',
      'Promotes cellular bioenergetics and healthy arterial flexibility',
      'Formulated according to ICMR nutritional guidelines'
    ],
    composition: [
      { name: 'Co-enzyme Q10', amount: '100 mg', rda: '**' },
      { name: 'Omega 3 Fatty Acid', amount: '100 mg', rda: '**' },
      { name: 'Vitamin E', amount: '10 mg', rda: '100%' }
    ],
    nutrition: [
      { parameter: 'Energy', value: '5.64 Kcal' },
      { parameter: 'Protein', value: '4 Kcal' }
    ],
    descriptionHtml: `
      <p><strong>C-ONE Cardio Vitality</strong> delivers targeted cardiovascular cellular nutrition, pairing high-purity Coenzyme Q10 with premium Omega-3 fatty acids for daily cardiac rhythm stability and arterial wellbeing.</p>
      <p>Marketed ethically across India under stringent quality parameters.</p>
    `
  },
  {
    id: 'c-one-metabolic-active',
    slug: 'c-one-metabolic-active',
    name: 'C-ONE Metabolic Active (L-Carnitine Complex)',
    image: '/one_assets/c-one-poster.jpg',
    bannerImage: '/one_assets/c-one-banner.jpg',
    posterImage: '/one_assets/c-one-poster.jpg',
    categoryId: 'active-metabolism',
    categoryName: 'ACTIVE METABOLISM',
    packaging: '10x10 Tablets',
    mrp: 'Rs. 750.00',
    dosage: '1 Tablet daily with water.',
    highlights: [
      '500mg High-Potency L-Carnitine for fat oxidation & energy',
      'Supports healthy weight management and workout endurance',
      'Enriched with Vitamin B-complex'
    ],
    composition: [
      { name: 'L-Carnitine', amount: '500 mg', rda: '**' },
      { name: 'Vitamin B1', amount: '1.2 mg', rda: '100%' },
      { name: 'Vitamin B6', amount: '2 mg', rda: '100%' }
    ],
    nutrition: [
      { parameter: 'Energy', value: '5.64 Kcal' },
      { parameter: 'Carbohydrates', value: '4 Kcal' }
    ],
    descriptionHtml: `
      <p>Formulated for active lifestyle individuals needing sustainable physical vitality and efficient metabolic energy substrate burning.</p>
    `
  },
  {
    id: 'c-one-antioxidant-shield',
    slug: 'c-one-antioxidant-shield',
    name: 'C-ONE Antioxidant Shield (Green Tea & Lycopene)',
    image: '/one_assets/c-one-infographic.jpg',
    bannerImage: '/one_assets/c-one-banner.jpg',
    posterImage: '/one_assets/c-one-poster.jpg',
    categoryId: 'general-care',
    categoryName: 'ANTIOXIDANTS & IMMUNITY',
    packaging: '10x1x10 Tablets',
    mrp: 'Rs. 750.00',
    dosage: 'As prescribed by the Healthcare Consultant.',
    highlights: [
      'Botanical defense with Green Tea & Grape Seed extracts',
      '5000 mcg Lycopene for systemic oxidative neutralization',
      'Fortifies internal immune barriers'
    ],
    composition: [
      { name: 'Green Tea Extract', amount: '200 mg', rda: '**' },
      { name: 'Grape Seed Extract', amount: '25 mg', rda: '**' },
      { name: 'Lycopene', amount: '5000 mcg', rda: '**' }
    ],
    nutrition: [
      { parameter: 'Energy', value: '5.64 Kcal' },
      { parameter: 'Fat', value: '9 Kcal' }
    ],
    descriptionHtml: `
      <p>Botanical antioxidant shield protecting tissues and cells from environmental oxidative damage, stress, and lifestyle fatigue.</p>
    `
  }
];
