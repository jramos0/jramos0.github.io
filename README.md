# jramos0 Portfolio

Minimal dark portfolio built with Astro and prepared for GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Edit Content

- Profile, links, interests, and stack: `src/data/profile.ts`
- Projects and experiments: `src/data/projects.ts`
- Main page sections: `src/pages/index.astro`

Replace the placeholder GitHub, LinkedIn, and email values before publishing.

## Project Screenshots

Add screenshots to:

```txt
public/projects/
```

Then reference them from `src/data/projects.ts`:

```ts
image: {
  src: '/projects/my-screenshot.png',
  alt: 'Short accessible description',
},
demo: 'https://example.com',
```

If a project has no `image`, the card uses the abstract CSS preview as a fallback.

## GitHub Pages

This repo includes `.github/workflows/deploy.yml`.

In GitHub, go to:

`Settings -> Pages -> Build and deployment -> Source -> GitHub Actions`

The workflow automatically sets the Astro base path:

- `/` for a user site repository named `jramos0.github.io`
- `/<repo-name>/` for a regular project repository
