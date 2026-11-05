import type { Tool } from './tools';
import type { Lang } from './i18n';
/** Transparent "data confidence" score: share of data points verified on official pages. */
export function dataScore(tool: Tool): number {
  const labels = [tool.commission.label, ...tool.plans.map((p) => p.label), ...tool.features.map((f) => f.label)];
  const pts = labels.reduce((s, l) => s + (l === 'VERIFIED' ? 1 : l === 'ESTIMATED' ? 0.5 : 0), 0);
  return Math.round((pts / Math.max(labels.length, 1)) * 100);
}
export function prosCons(tool: Tool, lang: Lang) {
  const pros = tool.features.filter((f) => f.value === true || (typeof f.value === 'number' && f.value > 0) || (typeof f.value === 'string' && f.value)).map((f) => typeof f.value === 'boolean' ? f[lang] : `${f[lang]} : ${f.value}`);
  const cons = tool.features.filter((f) => f.value === false).map((f) => (lang === 'fr' ? 'Pas de ' : 'No ') + f[lang].toLowerCase());
  const paid = tool.plans.filter((p) => (p.priceMonthlyUsd ?? 0) > 0).map((p) => p.priceMonthlyUsd!) ;
  if (paid.length && !tool.features.some((f) => f.key === 'free_plan' && f.value === true)) cons.push(lang === 'fr' ? `Payant dès ${Math.min(...paid)} $/mois` : `Paid from $${Math.min(...paid)}/mo`);
  if (!cons.length) cons.push(lang === 'fr' ? 'Certains détails restent à confirmer' : 'Some details still to confirm');
  return { pros: pros.slice(0, 4), cons: cons.slice(0, 3) };
}
export function startingPrice(tool: Tool, lang: Lang): string {
  if (tool.features.some((f) => f.key === 'free_plan' && f.value === true) || tool.plans.some((p) => p.priceMonthlyUsd === 0)) return lang === 'fr' ? 'Plan gratuit' : 'Free plan';
  const paid = tool.plans.map((p) => p.priceMonthlyUsd).filter((x): x is number => x != null && x > 0);
  return paid.length ? (lang === 'fr' ? `Dès ${Math.min(...paid)} $/mois` : `From $${Math.min(...paid)}/mo`) : (lang === 'fr' ? 'Prix à confirmer' : 'Price TBC');
}
export const catIcon: Record<string, string> = { email: '✉️', funnels: '🧭', ai: '✨' };
