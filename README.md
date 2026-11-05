# fin.ventures.ai — hub d'avis affiliés (mix B)

Site statique Astro bilingue FR/EN. Zéro frais. Pas de déploiement dans ce dépôt tant qu'un compte GitHub Pages n'est pas ouvert.

## Contenu

- Accueil avec 3 portes : Courriel / Tunnels / IA
- Catalogue `src/data/tools.ts` (prix, commissions, features) — libellés VERIFIED / ESTIMATED / UNVERIFIED / TODO
- Pages auto : `/review/[slug]`, `/pricing/[slug]`, `/vs/[a]-vs-[b]` (paires intra-catégorie)
- Redirects placeholder `/go/[brand]` (liens affiliés null → page d'attente)
- Divulgation affiliée + pied de page CASL/FTC + adresse postale TODO
- Capture courriel placeholder (désactivée)
- Sitemap (`@astrojs/sitemap`) + meta SEO

## Commandes

```bash
npm install
npm run build   # sortie dans dist/
npm run preview
```

## Publier (plus tard)

1. Compte GitHub + dépôt public
2. GitHub Pages (branch `gh-pages` ou Actions) ou domaine `fin.ventures.ai`
3. Remplir `goUrl` dans `tools.ts` après approbation affiliée
4. Remplacer l'adresse postale TODO
5. Brancher l'ESP (Kit/MailerLite) sur EmailCapture
