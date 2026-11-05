export type Lang = 'fr' | 'en';

export const site = {
  name: 'FIN Ventures AI',
  domain: 'fin.ventures.ai',
  owner: 'Pierre Bernier',
  /** CASL/LCAP mailing address (PO Box 8010 — never personal home address) */
  mailingAddress: {
    fr: 'Fin Ventures AI, 520, boul. Fort-St-Louis, case postale 8010, Boucherville (QC) J4B 1S0, Canada',
    en: 'Fin Ventures AI, 520 Fort-St-Louis Blvd, PO Box 8010, Boucherville, QC J4B 1S0, Canada',
  },
  email: 'fin.ventures.ai@gmail.com',
};

export const t = {
  fr: {
    homeTitle: 'Guides d’outils courriel, tunnels et IA',
    homeDesc:
      'Comparatifs indépendants et avis pour choisir les meilleurs outils courriel, tunnels de vente et IA — mix B, zéro frais publicité.',
    doorsHeading: 'Trois portes',
    doorEmail: 'Meilleurs outils courriel',
    doorFunnels: 'Meilleurs tunnels de vente',
    doorAi: 'Meilleurs outils IA',
    doorCompare: 'Comparer X vs Y',
    doorMagnet: 'Aimant gratuit',
    review: 'Avis',
    pricing: 'Tarifs',
    vs: 'Comparatif',
    stack: 'Outils que j’utilise',
    tryCta: 'Essayer (lien affilié)',
    tryCtaSoon: 'Lien affilié bientôt — voir le site officiel',
    disclosure:
      'Divulgation : fin.ventures.ai est un site d’affiliation. Si vous achetez via nos liens /go/, nous pouvons recevoir une commission, sans frais supplémentaires pour vous. Nous ne sommes pas employés par ces marques.',
    casl:
      'Conformité LCAP/CASL (Canada) et FTC (É.-U.) : consentement exprès requis pour les courriels marketing ; identification de l’expéditeur ; désabonnement en un clic. Adresse postale :',
    footerNav: 'Navigation',
    footerLegal: 'Légal',
    updated: 'Mis à jour',
    label: 'Libellé des données',
    commission: 'Commission affilié',
    cookie: 'Cookie',
    payoutMin: 'Minimum de paiement',
    plans: 'Forfaits',
    features: 'Fonctionnalités',
    source: 'Source',
    flags: 'Avertissements',
    days: 'jours',
    na: 'n.d.',
    lifetime: 'à vie / attribution à vie',
    categoryTools: 'Outils de cette catégorie',
    comparisons: 'Comparatifs',
    emailCaptureTitle: 'Recevoir le guide gratuit',
    emailCaptureHint:
      'Placeholder — branchement ESP (Kit / MailerLite) après approbation. Aucun envoi pour l’instant.',
    emailPlaceholder: 'vous@exemple.com',
    emailSubmit: 'M’inscrire (bientôt)',
    goPendingTitle: 'Lien affilié en attente',
    goPendingBody:
      'Le programme n’est pas encore approuvé. En attendant, voici le site officiel (sans tracking affilié) :',
    homeLead:
      'Hub d’avis et de comparatifs pour le mix B (Courriel, Tunnels, IA). Données issues de pages publiques vérifiées le 5 nov. 2026. Les chiffres non confirmés sont marqués « à venir », « estimé » ou « non vérifié ».',
    verdict: 'Verdict (brouillon)',
    verdictBody:
      'Contenu éditorial à rédiger. Cette page est générée automatiquement à partir du catalogue d’outils.',
    forWhom: 'Pour qui',
    alternatives: 'Alternatives',
    langSwitch: 'English',
    allReviews: 'Tous les avis',
  },
  en: {
    homeTitle: 'Email, funnel and AI tool guides',
    homeDesc:
      'Independent comparisons and reviews to pick email, sales funnel and AI tools — mix B, zero ad spend.',
    doorsHeading: 'Three doors',
    doorEmail: 'Best email tools',
    doorFunnels: 'Best sales funnels',
    doorAi: 'Best AI tools',
    doorCompare: 'Compare X vs Y',
    doorMagnet: 'Free lead magnet',
    review: 'Review',
    pricing: 'Pricing',
    vs: 'Comparison',
    stack: 'Tools I use',
    tryCta: 'Try it (affiliate link)',
    tryCtaSoon: 'Affiliate link soon — see official site',
    disclosure:
      'Disclosure: fin.ventures.ai is an affiliate site. If you buy through our /go/ links, we may earn a commission at no extra cost to you. We are not employed by these brands.',
    casl:
      'CASL (Canada) and FTC (US) compliance: express consent required for marketing email; sender identification; one-click unsubscribe. Mailing address:',
    footerNav: 'Navigation',
    footerLegal: 'Legal',
    updated: 'Updated',
    label: 'Data label',
    commission: 'Affiliate commission',
    cookie: 'Cookie',
    payoutMin: 'Payout minimum',
    plans: 'Plans',
    features: 'Features',
    source: 'Source',
    flags: 'Flags',
    days: 'days',
    na: 'n/a',
    lifetime: 'lifetime / lifetime attribution',
    categoryTools: 'Tools in this category',
    comparisons: 'Comparisons',
    emailCaptureTitle: 'Get the free guide',
    emailCaptureHint:
      'Placeholder — ESP (Kit / MailerLite) wiring after approval. No sends yet.',
    emailPlaceholder: 'you@example.com',
    emailSubmit: 'Subscribe (soon)',
    goPendingTitle: 'Affiliate link pending',
    goPendingBody:
      'Program not approved yet. Meanwhile, here is the official site (no affiliate tracking):',
    homeLead:
      'Review and comparison hub for mix B (Email, Funnels, AI). Data from public pages verified 5 Nov 2026. Unconfirmed figures are marked “coming soon”, “estimated” or “unverified”.',
    verdict: 'Verdict (draft)',
    verdictBody:
      'Editorial copy TBD. This page is auto-generated from the tool catalog.',
    forWhom: 'Who it is for',
    alternatives: 'Alternatives',
    langSwitch: 'Français',
    allReviews: 'All reviews',
  },
} as const;

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

const LABEL_DISPLAY: Record<Lang, Record<string, string>> = {
  fr: {
    VERIFIED: 'vérifié',
    ESTIMATED: 'estimé',
    UNVERIFIED: 'non vérifié',
    TODO: 'à venir',
  },
  en: {
    VERIFIED: 'verified',
    ESTIMATED: 'estimated',
    UNVERIFIED: 'unverified',
    TODO: 'coming soon',
  },
};

/** Visitor-facing label — never show raw TODO */
export function labelText(label: string, lang: Lang): string {
  return LABEL_DISPLAY[lang][label] ?? (lang === 'fr' ? 'à venir' : 'coming soon');
}

/** Hide raw TODO plan names from visitors */
export function publicPlanName(name: string, lang: Lang): string {
  if (!name || /^TODO\b/i.test(name.trim())) {
    return lang === 'fr' ? 'à venir' : 'coming soon';
  }
  return name;
}

/** Hide notes that still contain TODO */
export function publicNote(note: string | undefined, lang: Lang): string {
  if (!note) return '—';
  if (/TODO/i.test(note)) return lang === 'fr' ? 'à venir' : 'coming soon';
  return note;
}

