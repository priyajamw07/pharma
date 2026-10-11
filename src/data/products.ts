export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  bannerImage?: string;
  posterImage?: string;
  categoryId: string;
  categoryName: string;
  shortDesc: string;
  descriptionHtml: string;
  packaging?: string;
  dosage?: string;
  composition?: { name: string; amount: string; rda: string }[];
  nutrition?: { parameter: string; value: string }[];
  highlights?: string[];
  therapeuticUse?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  desc: string;
  productSlug: string;
}

export const COMPANY_INFO = {
  name: 'ONE ETHICAL PHARMACEUTICAL',
  tagline: 'Quality Healthcare Products ? Prompt & Reliable Delivery',
  shortName: 'ONE Ethical',
  businessType: 'Healthcare Product Distribution & Doorstep Delivery',
  address: 'Space No-48/17, First Floor, Dsidc Industrial Complex, Himmat Puri, Delhi 110091',
  phone: '+91 92117 40315',
  phoneAlt: '+91 72176 81647',
  email: 'oneethicalpharmaceutical@gmail.com',
  formspreeUrl: 'https://formsubmit.co/ajax/oneethicalpharmaceutical@gmail.com',
  logo: '/one_assets/logo.jpg'
};

export const CATEGORIES: Record<string, Category> = {
  'daily-wellness': {
    id: 'daily-wellness',
    name: 'Daily Wellness & Vitality',
    image: '/one_assets/c-one-box.jpg',
    desc: 'Complete nutritional multi-antioxidant supplement supporting cellular energy, cardiac wellness, and immunity.',
    productSlug: 'c-one-enzyme'
  },
  'antibacterial-probiotic': {
    id: 'antibacterial-probiotic',
    name: 'Antibacterial & Probiotic Care',
    image: '/one_assets/amox-one-box.jpg',
    desc: 'High-potency Amoxicillin-Clavulanate with Lactic Acid Bacillus probiotic shield for balanced infection treatment.',
    productSlug: 'amox-one-lb'
  },
  'dual-antibiotic': {
    id: 'dual-antibiotic',
    name: 'Dual-Action Antibiotic Care',
    image: '/one_assets/cefixor-o-box.jpg',
    desc: 'Synergistic combination of Cefixime and Ofloxacin for broad-spectrum management of severe bacterial infections.',
    productSlug: 'cefixor-o'
  },
  'iron-hematinic': {
    id: 'iron-hematinic',
    name: 'Hematinic & Blood Vitality',
    image: '/one_assets/ferrimax-iron-bottle.jpg',
    desc: 'Enriched Ferrous Fumarate syrup with Folic Acid, Zinc, and Vitamin B12 for healthy blood formation and active stamina.',
    productSlug: 'ferrimax-iron'
  }
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'c-one-enzyme',
    name: 'C-ONE ENZYME Tablet',
    image: '/one_assets/c-one-box.jpg',
    bannerImage: '/one_assets/c-one-banner.jpg',
    posterImage: '/one_assets/c-one-poster.jpg',
    categoryId: 'daily-wellness',
    categoryName: 'Daily Wellness & Vitality',
    shortDesc: 'Complete nutritional support with CoQ10, Omega-3, L-Carnitine, Lycopene, Green Tea Extract and essential vitamins.',
    packaging: '10 x 1 x 10 Tablets Pack',
    therapeuticUse: 'Daily nutritional wellness, heart vitality, stamina boost, and cellular antioxidant defence.',
    highlights: [
      'Coenzyme Q10 (100mg) for cellular ATP production and cardiac health',
      'Omega-3 Fatty Acid (100mg) for heart, brain, and joint function',
      'L-Carnitine (500mg) for metabolic energy and fat metabolism',
      'Antioxidant shield: Lycopene, Green Tea Extract & Grape Seed Extract',
      '100% RDA of essential Vitamins E, B1, and B6'
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
      <h3>About C-ONE ENZYME Tablet</h3>
      <p><strong>C-ONE ENZYME Tablet</strong> is a premium dietary wellness formulation that combines vital bio-factors to promote overall vitality, heart function, and metabolic wellness. Delivered in secure blister packaging with verified batch authentication.</p>
      <h4>Primary Health Benefits:</h4>
      <ul>
        <li><strong>Enhanced Cellular Energy:</strong> CoQ10 and L-Carnitine optimize mitochondrial respiration and physical stamina.</li>
        <li><strong>Cardiovascular Support:</strong> High-grade Omega-3 fatty acids assist lipid balance and vascular flexibility.</li>
        <li><strong>Free Radical Defense:</strong> Natural botanical antioxidants from Green Tea and Grape Seed fight oxidative stress.</li>
        <li><strong>Nerve & Metabolic Function:</strong> Vitamins B1, B6, and Vitamin E maintain neurological stability and vitality.</li>
      </ul>
      <p><strong>Recommended Usage:</strong> As directed by your physician or healthcare specialist. Keep stored in a dry place below 25?C.</p>
    `
  },
  {
    id: '2',
    slug: 'amox-one-lb',
    name: 'AMOX ONE LB Tablet',
    image: '/one_assets/amox-one-box.jpg',
    bannerImage: '/one_assets/amox-one-banner.jpg',
    posterImage: '/one_assets/amox-one-infographic.jpg',
    categoryId: 'antibacterial-probiotic',
    categoryName: 'Antibacterial & Probiotic Care',
    shortDesc: 'Amoxicillin 500mg + Potassium Clavulanate 125mg & Lactic Acid Bacillus 60 Million Spores Tablets.',
    packaging: '10 x 1 x 6 Tablets Strip Pack',
    therapeuticUse: 'Prescription treatment for respiratory tract, ENT, skin, and urinary bacterial infections with probiotic intestinal protection.',
    highlights: [
      'Amoxicillin 500mg: Broad-spectrum bactericidal penicillin-class antibiotic',
      'Potassium Clavulanate 125mg: Overcomes beta-lactamase bacterial resistance',
      'Lactic Acid Bacillus 60M Spores: Protects gut microbiota and prevents antibiotic-induced diarrhea',
      'Dual-action formulation ensuring high clinical efficacy and digestive tolerability',
      'Available for prompt doorstep delivery to chemists, hospitals, and patients with prescription'
    ],
    composition: [
      { name: 'Amoxycillin Trihydrate IP eq. to Amoxycillin', amount: '500 mg', rda: 'N/A' },
      { name: 'Potassium Clavulanate Diluted IP eq. to Clavulanic Acid', amount: '125 mg', rda: 'N/A' },
      { name: 'Lactic Acid Bacillus', amount: '60 Million Spores', rda: 'N/A' },
      { name: 'Colour: Titanium Dioxide IP', amount: 'q.s.', rda: 'N/A' }
    ],
    descriptionHtml: `
      <h3>About AMOX ONE LB Tablet</h3>
      <p><strong>AMOX ONE LB Tablet</strong> is an advanced prescription antibacterial formulation engineered to treat stubborn bacterial infections while safeguarding healthy digestive flora through beneficial spore-forming probiotics.</p>
      <h4>Key Clinical Indications:</h4>
      <ul>
        <li><strong>Respiratory Tract Infections:</strong> Acute bacterial sinusitis, bronchitis, and community-acquired pneumonia.</li>
        <li><strong>ENT & Dental Infections:</strong> Otitis media, severe pharyngitis, and dental abscesses.</li>
        <li><strong>Skin & Soft Tissue Infections:</strong> Cellulitis, post-surgical wound care, and pyoderma.</li>
        <li><strong>Probiotic Shield:</strong> 60 Million spores of Lactic Acid Bacillus preserve gut health and prevent antibiotic-related loose stools.</li>
      </ul>
      <p><strong>Storage & Delivery:</strong> Store in cool, dry conditions away from moisture. Available for rapid local order delivery with verified manufacturer batch authenticity.</p>
    `
  },
  {
    id: '3',
    slug: 'cefixor-o',
    name: 'CEFIXOR-O Tablet',
    image: '/one_assets/cefixor-o-box.jpg',
    bannerImage: '/one_assets/cefixor-o-banner.jpg',
    posterImage: '/one_assets/cefixor-o-banner.jpg',
    categoryId: 'dual-antibiotic',
    categoryName: 'Dual-Action Antibiotic Care',
    shortDesc: 'Cefixime 200mg & Ofloxacin 200mg Film Coated Tablets for comprehensive dual-action infection management.',
    packaging: '10 x 10 Tablets Alu-Alu Pack',
    therapeuticUse: 'Targeted broad-spectrum therapy for severe respiratory, urinary, typhoid, and gastrointestinal infections.',
    highlights: [
      'Cefixime 200mg: 3rd generation cephalosporin effective against gram-negative bacteria',
      'Ofloxacin 200mg: Fluoroquinolone inhibitor of bacterial DNA gyrase',
      'Dual Action: Broad-spectrum synergistic bacterial eradication',
      'Rapid onset of action providing quick relief from fever and infection symptoms',
      'Ideal for uncomplicated typhoid, recurrent UTIs, and pelvic infections'
    ],
    composition: [
      { name: 'Cefixime Trihydrate IP eq. to anhydrous Cefixime', amount: '200 mg', rda: 'N/A' },
      { name: 'Ofloxacin IP', amount: '200 mg', rda: 'N/A' },
      { name: 'Excipients', amount: 'q.s.', rda: 'N/A' },
      { name: 'Colour: Titanium Dioxide IP', amount: 'q.s.', rda: 'N/A' }
    ],
    descriptionHtml: `
      <h3>About CEFIXOR-O Tablet</h3>
      <p><strong>CEFIXOR-O Tablet</strong> combines two potent antimicrobial agents?Cefixime and Ofloxacin?delivering exceptional efficacy against a wide range of gram-positive, gram-negative, and atypical pathogens.</p>
      <h4>Key Indications:</h4>
      <ul>
        <li><strong>Typhoid Fever & Enteric Invalids:</strong> Highly effective in salmonella infections and treatment-resistant enteric fever.</li>
        <li><strong>Urinary Tract Infections (UTI):</strong> Acute and recurrent bacterial cystitis, pyelonephritis.</li>
        <li><strong>Respiratory Tract Infections:</strong> Exacerbations of chronic bronchitis, pneumonia, and severe tonsillitis.</li>
        <li><strong>Gastrointestinal & Intra-abdominal Infections:</strong> Bacterial gastroenteritis and biliary tract infections.</li>
      </ul>
      <p><strong>Dosage & Caution:</strong> As directed by the registered medical practitioner. Store protected from light and moisture below 25?C.</p>
    `
  },
  {
    id: '4',
    slug: 'ferrimax-iron',
    name: 'FERRIMAX IRON Syrup',
    image: '/one_assets/ferrimax-iron-bottle.jpg',
    bannerImage: '/one_assets/ferrimax-iron-banner.jpg',
    posterImage: '/one_assets/ferrimax-iron-banner.jpg',
    categoryId: 'iron-hematinic',
    categoryName: 'Hematinic & Blood Vitality',
    shortDesc: 'Ferrous Fumarate, Folic Acid, Zinc & Cyanocobalamin Syrup (200ml) for hemoglobin formation and everyday wellness.',
    packaging: '200 ml Bottle with Measuring Cap',
    therapeuticUse: 'Treatment and prevention of iron deficiency anemia, fatigue, pregnancy support, and general nutritional recuperation.',
    highlights: [
      'Ferrous Fumarate 29mg: Gentle, highly bioavailable iron salt for optimal hemoglobin synthesis',
      'Folic Acid 220mcg: Essential co-factor for red blood cell maturation and neural support',
      'Zinc Sulphate 13.2mg: Strengthens immune response and tissue cellular regeneration',
      'Cyanocobalamin (Vitamin B12) 2.2mcg: Crucial for red blood cell health and cognitive vitality',
      'Delicious taste with minimal gastrointestinal discomfort; 100% RDA aligned'
    ],
    composition: [
      { name: 'Ferrous Fumarate', amount: '29 mg', rda: '100%' },
      { name: 'Zinc Sulphate', amount: '13.2 mg', rda: '100%' },
      { name: 'Folic Acid', amount: '220 mcg', rda: '100%' },
      { name: 'Cyanocobalamin (Vitamin B12)', amount: '2.2 mcg', rda: '100%' },
      { name: 'Excipients', amount: 'q.s.', rda: 'N/A' }
    ],
    nutrition: [
      { parameter: 'Energy', value: '3.59 Kcal' },
      { parameter: 'Carbohydrates', value: '3.44 Kcal' },
      { parameter: 'Dietary Fibre', value: '0.02 Kcal' },
      { parameter: 'Protein', value: '0.04 Kcal' },
      { parameter: 'Fat', value: '0.02 Kcal' }
    ],
    descriptionHtml: `
      <h3>About FERRIMAX IRON Syrup (200ml)</h3>
      <p><strong>FERRIMAX IRON Syrup</strong> is a complete hematinic formulation specifically developed to nourish the body with bioavailable iron, essential vitamins, and zinc to combat anemia, tiredness, and weakness.</p>
      <h4>Primary Health Benefits:</h4>
      <ul>
        <li><strong>Healthy Blood Formation:</strong> Supplies essential iron for hemoglobin production and oxygen transport to all vital organs.</li>
        <li><strong>Fights Fatigue & Low Energy:</strong> Restores vital energy reserves, helping you stay active and productive throughout the day.</li>
        <li><strong>Immune & Brain Support:</strong> Zinc and Vitamin B12 support cognitive alertness, mental clarity, and infection defense.</li>
        <li><strong>Nutritional Support for Women & Seniors:</strong> Recommended during periods of increased iron requirement, convalescence, and dietary deficiency.</li>
      </ul>
      <p><strong>Dosage:</strong> Take 10 ml twice daily or as directed by the physician. Shake well before use. Protect from direct sunlight.</p>
    `
  }
];
