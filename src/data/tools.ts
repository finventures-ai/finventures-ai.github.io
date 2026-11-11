/**
 * Mix B tool catalog — sourced from reports/p1/affiliate-programs-mixB.md
 * and audit-2026-11-05.md (America/Toronto, 5 Nov 2026).
 * Labels: VERIFIED | ESTIMATED | UNVERIFIED | TODO
 */

export type Category = 'email' | 'funnels' | 'ai';
export type Label = 'VERIFIED' | 'ESTIMATED' | 'UNVERIFIED' | 'TODO';

export interface Feature {
  key: string;
  fr: string;
  en: string;
  value: string | boolean | number;
  label: Label;
}

export interface Tool {
  slug: string;
  brand: string;
  category: Category;
  name: { fr: string; en: string };
  tagline: { fr: string; en: string };
  website: string;
  pricingUrl: string;
  /** Official public pricing — TODO if not confirmed this turn */
  plans: {
    name: string;
    priceMonthlyUsd: number | null;
    note?: string;
    label: Label;
  }[];
  commission: {
    summary: { fr: string; en: string };
    detail: string;
    cookieDays: number | null;
    payoutMinUsd: number | null;
    label: Label;
    source: string;
  };
  features: Feature[];
  /** Placeholder until affiliate approval; /go/[brand] uses this */
  goUrl: string | null;
  flags?: string[];
}

export const categories: {
  id: Category;
  fr: string;
  en: string;
  magnet: { fr: string; en: string };
}[] = [
  {
    id: 'email',
    fr: 'Courriel',
    en: 'Email',
    magnet: { fr: 'GROW — guide gratuit des outils courriel', en: 'GROW — free email tools guide' },
  },
  {
    id: 'funnels',
    fr: 'Tunnels',
    en: 'Funnels',
    magnet: { fr: 'FUNNELS — guide gratuit des tunnels de vente', en: 'FUNNELS — free funnel tools guide' },
  },
  {
    id: 'ai',
    fr: 'IA',
    en: 'AI',
    magnet: { fr: 'AI — guide gratuit des outils IA', en: 'AI — free AI tools guide' },
  },
];

export const tools: Tool[] = [
  // ——— EMAIL ———
  {
    slug: 'kit',
    brand: 'kit',
    category: 'email',
    name: { fr: 'Kit (ConvertKit)', en: 'Kit (ConvertKit)' },
    tagline: {
      fr: 'Infolettres et automatisations pour créateurs',
      en: 'Email marketing and automations for creators',
    },
    website: 'https://kit.com',
    pricingUrl: 'https://kit.com/pricing',
    plans: [
      { name: 'Creator', priceMonthlyUsd: 39, label: 'VERIFIED' },
      { name: 'Creator Pro', priceMonthlyUsd: null, note: 'TODO: confirm current Pro price', label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: '50 % pendant 12 mois ; +10 % à vie si ≥10 clients payants/an',
        en: '50% for 12 months; +10% lifetime if ≥10 paid referrals/yr',
      },
      detail: '50% first 12 mo; +10% lifetime if ≥10 paid referrals/yr',
      cookieDays: 90,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://kit.com/affiliate',
    },
    features: [
      { key: 'free_plan', fr: 'Plan gratuit', en: 'Free plan', value: true, label: 'TODO' },
      { key: 'automations', fr: 'Automatisations', en: 'Automations', value: true, label: 'TODO' },
      { key: 'landing_pages', fr: 'Pages de capture', en: 'Landing pages', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'activecampaign',
    brand: 'activecampaign',
    category: 'email',
    name: { fr: 'ActiveCampaign', en: 'ActiveCampaign' },
    tagline: {
      fr: 'CRM + marketing automation',
      en: 'CRM + marketing automation',
    },
    website: 'https://www.activecampaign.com',
    pricingUrl: 'https://www.activecampaign.com/pricing',
    plans: [
      { name: 'Plus (entry ref.)', priceMonthlyUsd: 49, note: 'Used for EPR estimate', label: 'ESTIMATED' },
    ],
    commission: {
      summary: {
        fr: '30 % du revenu mensuel, 12 premiers mois',
        en: '30% of monthly revenue, first 12 months',
      },
      detail: '30% MRR, first 12 months',
      cookieDays: 90,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.activecampaign.com/legal/affiliate-partner-terms',
    },
    features: [
      { key: 'crm', fr: 'CRM intégré', en: 'Built-in CRM', value: true, label: 'TODO' },
      { key: 'automations', fr: 'Automatisations avancées', en: 'Advanced automations', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'getresponse',
    brand: 'getresponse',
    category: 'email',
    name: { fr: 'GetResponse', en: 'GetResponse' },
    tagline: {
      fr: 'Courriel, tunnels et webinaires',
      en: 'Email, funnels and webinars',
    },
    website: 'https://www.getresponse.com',
    pricingUrl: 'https://www.getresponse.com/pricing',
    plans: [
      { name: 'Email Marketing', priceMonthlyUsd: null, note: 'TODO: confirm entry price', label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: '40 % 12 mois (Bronze) → 50 % / 60 % selon volume (PartnerStack)',
        en: '40% 12 mo (Bronze) → 50% / 60% by volume (PartnerStack)',
      },
      detail: 'Audit 5 Nov 2026: 40%→50%→60% tiers via PartnerStack',
      cookieDays: 90,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.getresponse.com/affiliate-programs',
    },
    features: [
      { key: 'webinars', fr: 'Webinaires', en: 'Webinars', value: true, label: 'TODO' },
      { key: 'funnels', fr: 'Tunnels intégrés', en: 'Built-in funnels', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'brevo',
    brand: 'brevo',
    category: 'email',
    name: { fr: 'Brevo', en: 'Brevo' },
    tagline: {
      fr: 'Courriel, SMS et CRM (ex-Sendinblue)',
      en: 'Email, SMS and CRM (formerly Sendinblue)',
    },
    website: 'https://www.brevo.com',
    pricingUrl: 'https://www.brevo.com/pricing',
    plans: [
      { name: 'Free', priceMonthlyUsd: 0, label: 'TODO' },
      { name: 'Starter', priceMonthlyUsd: null, note: 'TODO', label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: 'Programme affiliés (prime fixe) via PartnerStack — montant à confirmer',
        en: 'Affiliate program (fixed bounty) via PartnerStack — amount TBD',
      },
      detail: 'Fixed per paid sub (~$100 one-off UNVERIFIED) + $5 free after 1st sale; cookie 90d VERIFIED',
      cookieDays: 90,
      payoutMinUsd: null,
      label: 'UNVERIFIED',
      source: 'https://www.brevo.com/partners/affiliates/',
    },
    features: [
      { key: 'sms', fr: 'SMS', en: 'SMS', value: true, label: 'TODO' },
      { key: 'free_tier', fr: 'Offre gratuite', en: 'Free tier', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'omnisend',
    brand: 'omnisend',
    category: 'email',
    name: { fr: 'Omnisend', en: 'Omnisend' },
    tagline: {
      fr: 'Marketing automation pour e-commerce',
      en: 'Ecommerce marketing automation',
    },
    website: 'https://www.omnisend.com',
    pricingUrl: 'https://www.omnisend.com/pricing',
    plans: [
      { name: 'Standard (ref.)', priceMonthlyUsd: 16, note: 'Used for EPR estimate', label: 'ESTIMATED' },
    ],
    commission: {
      summary: {
        fr: '20 % récurrent jusqu\'à 24 mois',
        en: '20% recurring up to 24 months',
      },
      detail: '20% recurring up to 24 mo',
      cookieDays: 60,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.omnisend.com/affiliates/',
    },
    features: [
      { key: 'ecommerce', fr: 'Orienté e-commerce', en: 'Ecommerce-focused', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'mailerlite',
    brand: 'mailerlite',
    category: 'email',
    name: { fr: 'MailerLite', en: 'MailerLite' },
    tagline: {
      fr: 'Courriel simple pour PME et créateurs',
      en: 'Simple email for SMBs and creators',
    },
    website: 'https://www.mailerlite.com',
    pricingUrl: 'https://www.mailerlite.com/pricing',
    plans: [
      { name: 'Free', priceMonthlyUsd: 0, label: 'TODO' },
      { name: 'Growing Business (ref.)', priceMonthlyUsd: 10, note: 'EPR ref ~$72/yr lifetime ESTIMATED', label: 'ESTIMATED' },
    ],
    commission: {
      summary: {
        fr: '30 % à vie ; cookie 45 j ; min. 100 $ ; retenue jusqu\'à 180 j possible',
        en: '30% lifetime; 45-day cookie; $100 min; hold up to 180 days possible',
      },
      detail: '30% lifetime recurring; 45d cookie; $100 from 2+ sales; up to 180d hold on investigation',
      cookieDays: 45,
      payoutMinUsd: 100,
      label: 'VERIFIED',
      source: 'https://www.mailerlite.com/legal/affiliate-program-terms',
    },
    features: [
      { key: 'free_tier', fr: 'Offre gratuite', en: 'Free tier', value: true, label: 'TODO' },
      { key: 'drag_drop', fr: 'Éditeur glisser-déposer', en: 'Drag-and-drop editor', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  // ——— FUNNELS ———
  {
    slug: 'gohighlevel',
    brand: 'gohighlevel',
    category: 'funnels',
    name: { fr: 'GoHighLevel', en: 'GoHighLevel' },
    tagline: {
      fr: 'Plateforme tout-en-un pour agences',
      en: 'All-in-one agency platform',
    },
    website: 'https://www.gohighlevel.com',
    pricingUrl: 'https://www.gohighlevel.com/pricing',
    plans: [
      { name: 'Starter', priceMonthlyUsd: 97, label: 'VERIFIED' },
      { name: 'Unlimited', priceMonthlyUsd: 297, label: 'TODO' },
      { name: 'SaaS Pro', priceMonthlyUsd: 497, label: 'VERIFIED' },
    ],
    commission: {
      summary: {
        fr: '40 % récurrent à vie + 5 % 2e niveau ; client actif 45 j',
        en: '40% recurring lifetime + 5% 2nd tier; 45-day qualification',
      },
      detail: '40% lifetime + 5% 2nd tier; Tipalti; min $50',
      cookieDays: null,
      payoutMinUsd: 50,
      label: 'VERIFIED',
      source: 'https://www.gohighlevel.com/affiliate-policy',
    },
    features: [
      { key: 'crm', fr: 'CRM', en: 'CRM', value: true, label: 'TODO' },
      { key: 'funnels', fr: 'Tunnels', en: 'Funnels', value: true, label: 'TODO' },
      { key: 'phone', fr: 'Téléphonie', en: 'Phone system', value: true, label: 'TODO' },
    ],
    goUrl: null,
    flags: ['No self-referral / same IP (community reports)'],
  },
  {
    slug: 'kartra',
    brand: 'kartra',
    category: 'funnels',
    name: { fr: 'Kartra', en: 'Kartra' },
    tagline: {
      fr: 'Marketing, memberships et paiements',
      en: 'Marketing, memberships and payments',
    },
    website: 'https://kartra.com',
    pricingUrl: 'https://kartra.com/pricing',
    plans: [
      { name: 'Starter (ref.)', priceMonthlyUsd: 119, note: 'Price UNVERIFIED in mix B', label: 'UNVERIFIED' },
    ],
    commission: {
      summary: {
        fr: 'Jusqu\'à 40 % récurrent, 12 mois (+10 % 2e niveau)',
        en: 'Up to 40% recurring, 12 months (+10% 2nd tier)',
      },
      detail: 'Up to 40% recurring 12 mo via PartnerStack',
      cookieDays: 30,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://kartra.com/partners/',
    },
    features: [
      { key: 'memberships', fr: 'Memberships', en: 'Memberships', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'systeme-io',
    brand: 'systemeio',
    category: 'funnels',
    name: { fr: 'Systeme.io', en: 'Systeme.io' },
    tagline: {
      fr: 'Tunnels, cours et courriel — inscription affilié instantanée',
      en: 'Funnels, courses and email — instant affiliate signup',
    },
    website: 'https://systeme.io',
    pricingUrl: 'https://systeme.io/pricing',
    plans: [
      { name: 'Free', priceMonthlyUsd: 0, label: 'VERIFIED' },
      { name: 'Startup', priceMonthlyUsd: 27, note: 'TODO confirm; mix B used $17–$97 range', label: 'TODO' },
      { name: 'Webinar / Higher', priceMonthlyUsd: 97, label: 'ESTIMATED' },
    ],
    commission: {
      summary: {
        fr: '60 % récurrent à vie ; retenue 30 jours ; min. 30 $ ; payé le 10 (PayPal ou virement)',
        en: '60% recurring for life; 30-day hold; $30 min; paid on the 10th (PayPal or bank transfer)',
      },
      detail: '60% recurring for life; 30-day hold; $30 minimum; paid on the 10th via PayPal or bank transfer',
      cookieDays: null,
      payoutMinUsd: 30,
      label: 'VERIFIED',
      source: 'https://help.systeme.io/article/162',
    },
    features: [
      { key: 'free_plan', fr: 'Plan gratuit', en: 'Free plan', value: true, label: 'VERIFIED' },
      { key: 'courses', fr: 'Cours en ligne', en: 'Online courses', value: true, label: 'TODO' },
      { key: 'instant_affiliate', fr: 'Affiliation instantanée', en: 'Instant affiliate', value: true, label: 'VERIFIED' },
    ],
    goUrl: 'https://systeme.io/?sa=sa02856809642aa218261378d850c4bdec1bdd0574',
  },
  {
    slug: 'clickfunnels',
    brand: 'clickfunnels',
    category: 'funnels',
    name: { fr: 'ClickFunnels', en: 'ClickFunnels' },
    tagline: {
      fr: 'Constructeur de tunnels de vente',
      en: 'Sales funnel builder',
    },
    website: 'https://www.clickfunnels.com',
    pricingUrl: 'https://www.clickfunnels.com/pricing',
    plans: [
      { name: 'Basic', priceMonthlyUsd: 97, label: 'VERIFIED' },
      { name: 'Pro', priceMonthlyUsd: 297, label: 'VERIFIED' },
    ],
    commission: {
      summary: {
        fr: '30 % récurrent mensuel, tous les paliers',
        en: '30% monthly recurring, all tiers',
      },
      detail: '30% monthly recurring; 45-day cool-off; cookie 45d UNVERIFIED',
      cookieDays: 45,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.clickfunnels.com/affiliate-program',
    },
    features: [
      { key: 'funnels', fr: 'Tunnels', en: 'Funnels', value: true, label: 'TODO' },
      { key: 'challenge', fr: 'Challenge OFA', en: 'OFA Challenge', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'simvoly',
    brand: 'simvoly',
    category: 'funnels',
    name: { fr: 'Simvoly', en: 'Simvoly' },
    tagline: {
      fr: 'Sites, tunnels et memberships',
      en: 'Websites, funnels and memberships',
    },
    website: 'https://simvoly.com',
    pricingUrl: 'https://simvoly.com/pricing',
    plans: [
      { name: 'TODO', priceMonthlyUsd: null, note: 'TODO: pull plan prices', label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: '35 % à vie ; cookie 60 j ; min. 100 $ + 3 clients actifs',
        en: '35% lifetime; 60-day cookie; $100 min + 3 active referrals',
      },
      detail: '35% forever; 60d cookie; PayPal/bank; no MLM',
      cookieDays: 60,
      payoutMinUsd: 100,
      label: 'VERIFIED',
      source: 'https://simvoly.com/affiliate',
    },
    features: [
      { key: 'memberships', fr: 'Memberships', en: 'Memberships', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  // ——— AI ———
  {
    slug: 'synthesia',
    brand: 'synthesia',
    category: 'ai',
    name: { fr: 'Synthesia', en: 'Synthesia' },
    tagline: {
      fr: 'Vidéos IA avec avatars',
      en: 'AI video with avatars',
    },
    website: 'https://www.synthesia.io',
    pricingUrl: 'https://www.synthesia.io/pricing',
    plans: [
      { name: 'Starter', priceMonthlyUsd: 19, label: 'VERIFIED' },
      { name: 'Creator / Pro', priceMonthlyUsd: 89, label: 'VERIFIED' },
    ],
    commission: {
      summary: {
        fr: '25 % des paiements Starter/Creator ; cookie 60 j',
        en: '25% of Starter/Creator payments; 60-day cookie',
      },
      detail: '25%; ~$57–$267 per client over 12 mo ESTIMATED (audit)',
      cookieDays: 60,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.synthesia.io/partners/affiliates',
    },
    features: [
      { key: 'avatars', fr: 'Avatars IA', en: 'AI avatars', value: true, label: 'TODO' },
      { key: 'multilang', fr: 'Multilingue', en: 'Multilingual', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'jasper',
    brand: 'jasper',
    category: 'ai',
    name: { fr: 'Jasper', en: 'Jasper' },
    tagline: {
      fr: 'Rédaction IA pour le marketing',
      en: 'AI writing for marketing',
    },
    website: 'https://www.jasper.ai',
    pricingUrl: 'https://www.jasper.ai/pricing',
    plans: [
      { name: 'Pro (ref.)', priceMonthlyUsd: 59, label: 'ESTIMATED' },
    ],
    commission: {
      summary: {
        fr: '25 % (12 mois) ; 30 % si 100 leads ; Business exclu',
        en: '25% (12 months); 30% at 100 leads; Business excluded',
      },
      detail: '25% first 12 mo; 30% if 100 leads VERIFIED',
      cookieDays: null,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.jasper.ai/legal/affiliates',
    },
    features: [
      { key: 'brand_voice', fr: 'Brand voice', en: 'Brand voice', value: true, label: 'TODO' },
    ],
    goUrl: null,
    flags: ['2024 non-payment community reports — UNVERIFIED single threads'],
  },
  {
    slug: 'murf',
    brand: 'murf',
    category: 'ai',
    name: { fr: 'Murf', en: 'Murf' },
    tagline: {
      fr: 'Voix IA / text-to-speech',
      en: 'AI voice / text-to-speech',
    },
    website: 'https://murf.ai',
    pricingUrl: 'https://murf.ai/pricing',
    plans: [
      { name: 'TODO', priceMonthlyUsd: null, label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: '20 % récurrent, 24 mois ; cookie 90 j (PartnerStack)',
        en: '20% recurring, 24 months; 90-day cookie (PartnerStack)',
      },
      detail: '20% recurring 24 mo; 90d cookie',
      cookieDays: 90,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'PartnerStack / murf.ai (audit 5 Nov 2026)',
    },
    features: [
      { key: 'tts', fr: 'Text-to-speech', en: 'Text-to-speech', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'fireflies',
    brand: 'fireflies',
    category: 'ai',
    name: { fr: 'Fireflies.ai', en: 'Fireflies.ai' },
    tagline: {
      fr: 'Notes et transcriptions de réunions IA',
      en: 'AI meeting notes and transcription',
    },
    website: 'https://fireflies.ai',
    pricingUrl: 'https://fireflies.ai/pricing',
    plans: [
      { name: 'TODO', priceMonthlyUsd: null, label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: 'Jusqu\'à 30 % récurrent, 12 mois ; cookie 90 j',
        en: 'Up to 30% recurring, 12 months; 90-day cookie',
      },
      detail: 'Up to 30% recurring 12 mo; 90d cookie',
      cookieDays: 90,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'audit 5 Nov 2026',
    },
    features: [
      { key: 'transcription', fr: 'Transcription', en: 'Transcription', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'elevenlabs',
    brand: 'elevenlabs',
    category: 'ai',
    name: { fr: 'ElevenLabs', en: 'ElevenLabs' },
    tagline: {
      fr: 'Voix IA réalistes',
      en: 'Realistic AI voices',
    },
    website: 'https://elevenlabs.io',
    pricingUrl: 'https://elevenlabs.io/pricing',
    plans: [
      { name: 'Creator', priceMonthlyUsd: 22, label: 'VERIFIED' },
    ],
    commission: {
      summary: {
        fr: '22 % (11 % Business), 12 mois ; min. 5 $ ; retenue 90 j',
        en: '22% (11% Business), 12 months; $5 min; 90-day hold',
      },
      detail: '22% / 11% Business first 12 mo via PartnerStack',
      cookieDays: null,
      payoutMinUsd: 5,
      label: 'VERIFIED',
      source: 'https://elevenlabs.io/affiliates-terms',
    },
    features: [
      { key: 'tts', fr: 'Text-to-speech', en: 'Text-to-speech', value: true, label: 'TODO' },
      { key: 'cloning', fr: 'Clonage de voix', en: 'Voice cloning', value: true, label: 'TODO' },
    ],
    goUrl: null,
    flags: ['Payout-delay community report Jan 2026 — UNVERIFIED; official 90d hold'],
  },
  {
    slug: 'heygen',
    brand: 'heygen',
    category: 'ai',
    name: { fr: 'HeyGen', en: 'HeyGen' },
    tagline: {
      fr: 'Avatars vidéo IA',
      en: 'AI video avatars',
    },
    website: 'https://www.heygen.com',
    pricingUrl: 'https://www.heygen.com/pricing',
    plans: [
      { name: 'TODO', priceMonthlyUsd: null, label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: '20–30 % selon volume, 6 mois ; fenêtre 30 j ; min. 100 $',
        en: '20–30% by volume, 6 months; 30-day window; $100 min',
      },
      detail: '20% (<100) / 25% (100–299) / 30% (300+); 6 mo; audit correction',
      cookieDays: 30,
      payoutMinUsd: 100,
      label: 'VERIFIED',
      source: 'https://www.heygen.com/affiliate',
    },
    features: [
      { key: 'avatars', fr: 'Avatars', en: 'Avatars', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
  {
    slug: 'descript',
    brand: 'descript',
    category: 'ai',
    name: { fr: 'Descript', en: 'Descript' },
    tagline: {
      fr: 'Montage audio/vidéo basé sur le texte',
      en: 'Text-based audio/video editing',
    },
    website: 'https://www.descript.com',
    pricingUrl: 'https://www.descript.com/pricing',
    plans: [
      { name: 'TODO', priceMonthlyUsd: null, label: 'TODO' },
    ],
    commission: {
      summary: {
        fr: '25 $ fixe par conversion (récurrent retiré) ; plafond 100 k$/an',
        en: '$25 flat per conversion (recurring removed); $100k/yr cap',
      },
      detail: '$25 one-time flat via PartnerStack',
      cookieDays: 30,
      payoutMinUsd: null,
      label: 'VERIFIED',
      source: 'https://www.descript.com/affiliate-terms',
    },
    features: [
      { key: 'text_edit', fr: 'Édition par texte', en: 'Edit by text', value: true, label: 'TODO' },
    ],
    goUrl: null,
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function toolsByCategory(cat: Category): Tool[] {
  return tools.filter((t) => t.category === cat);
}

export function comparisonPairs(cat?: Category): { a: Tool; b: Tool }[] {
  const pool = cat ? toolsByCategory(cat) : tools;
  const pairs: { a: Tool; b: Tool }[] = [];
  for (let i = 0; i < pool.length; i++) {
    for (let j = i + 1; j < pool.length; j++) {
      if (pool[i].category !== pool[j].category) continue;
      pairs.push({ a: pool[i], b: pool[j] });
    }
  }
  return pairs;
}

/**
 * Editorial comparisons whose public slug is not catalog order.
 * One URL per pair: category and review links use pairSlug(); the old
 * catalog slug redirects to this one.
 */
const EDITORIAL_PAIR_SLUG: Record<string, string> = {
  'activecampaign-vs-brevo': 'brevo-vs-activecampaign',
  'activecampaign-vs-mailerlite': 'mailerlite-vs-activecampaign',
  'brevo-vs-mailerlite': 'mailerlite-vs-brevo',
  'gohighlevel-vs-clickfunnels': 'clickfunnels-vs-gohighlevel',
};

function orderedTools(a: Tool, b: Tool): [Tool, Tool] {
  const ia = tools.findIndex((t) => t.slug === a.slug);
  const ib = tools.findIndex((t) => t.slug === b.slug);
  return ia <= ib ? [a, b] : [b, a];
}

/** Catalog-order slug (`earlier-vs-later`), before editorial aliases. */
export function catalogPairSlug(a: Tool, b: Tool): string {
  const [first, second] = orderedTools(a, b);
  return `${first.slug}-vs-${second.slug}`;
}

export function pairSlug(a: Tool, b: Tool): string {
  const ordered = catalogPairSlug(a, b);
  return EDITORIAL_PAIR_SLUG[ordered] ?? ordered;
}
