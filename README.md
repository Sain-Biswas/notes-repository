# Personal Markdown Notes Website with Astro & Starlight

![Starlight](https://starlight.astro.build/_astro/logo-dark.IHkm-Unx.svg)
![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Obsidian](https://img.shields.io/badge/Obsidian-7C3AED?logo=obsidian&logoColor=white)

A personal knowledge base and digital garden built with Astro and Starlight, integrated with Obsidian for seamless note management.

## Features

- **Starlight-powered documentation**: Beautiful, searchable documentation site
- **Obsidian Integration**: Sync your Obsidian vault or use it as a content source
- **Markdown Support**: All your notes in clean Markdown format
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Full-text Search**: Instant search across all your notes
- **Responsive Design**: Works on desktop, tablet, and mobile

## Setup

### Prerequisites

- Node.js v18+
- npm or pnpm or bun
- Obsidian for local note management

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Sain-Biswas/notes-repository.git
   cd notes-repository
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up your Obsidian integration (optional):

   - Symlink or copy your Obsidian vault to `./obsidian`
   - Or configure the `obsidian-plugin` in `astro.config.mjs`

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

## Configuration

Edit `astro.config.mjs` to customize:

- Site metadata (title, description, etc.)
- Starlight theme colors
- Navigation sidebar structure
- Obsidian integration settings

## Deployment

Build for production:

```bash
   npm run build
   # or
   pnpm run build
   # or
   bun run build
```

Deploy to your preferred platform (Netlify, Vercel, Cloudflare Pages, etc.).

## Obsidian Sync Options

1. **Manual Sync**: Copy/symlink your vault to `src/content/docs`
2. **Git Integration**: Keep your vault in a Git repo and pull changes
3. **Automated Sync**: Use the `obsidian-export` tool or similar

## Customization

- Add custom CSS in `src/styles/`
- Modify layouts in `src/components/`
- Adjust Starlight config in `astro.config.mjs`

## File Structure

```
.gitignore
.vscode
├── extensions.json
├── launch.json
└── settings.json
astro.config.mjs
bun.lock
obsidian
├── obsidian-vault-1
│   ├── .obsidian/**
│   ├── .trash/**
│   ├── Introduction.md
│   └── ***All *.md notes created by obsidian***
└── web-development
│   ├── .obsidian/**
│   ├── .trash/**
│   ├── Introduction.md
│   └── ***All *.md notes created by obsidian***
package.json
public
└── favicon.svg
README.md
src
├── assets
│   └── houston.webp
├── content
│   └── docs
│       └── index.mdx
├── content.config.ts
└── styles
    └── custom.css
tsconfig.json
```

## License

MIT License - feel free to use and modify for your personal notes.

---

🌌 **Happy note-taking!** ✨
