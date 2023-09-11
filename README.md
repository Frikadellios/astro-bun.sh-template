# Astro Starter Kit: Blog with plugins and utilites 

```

```
Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                   |
| :------------------------ | :------------------------------------------------------------------------|
| `bun install / pnpm install / yarn install`       | Installs dependencies                            |
| `bun run dev / pnpm run dev / yarn dev`           | Starts local dev server at `localhost:4321`      |
| `bun run build / pnpm run build / yarn build`     | Build your production site to `./dist/`          |
| `npm run astro ...`                               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`                         | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Wait for the production.
