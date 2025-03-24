# Donna - Executive Assistant

A modern web application featuring an AI-powered executive assistant interface with ElevenLabs integration.

## Features

- Elegant, responsive design with glass morphism effects
- Real-time voice interaction powered by ElevenLabs
- Animated background with modern UI elements
- Custom styling with Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- ElevenLabs Conversational AI

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd donna-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

The production build will be created in the `dist` directory.

## Deployment

The application can be deployed to any static hosting service. Here are some popular options:

### Vercel
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

### GitHub Pages
1. Add the following to your `vite.config.js`:
```javascript
export default defineConfig({
  base: '/[your-repo-name]/',
  // ... other config
})
```

2. Deploy using GitHub Actions or manually:
```bash
npm run build
# Then push the dist folder to gh-pages branch
```

## Environment Variables

No environment variables are required for the basic setup. The ElevenLabs widget is configured with a pre-set agent ID.

## License

[Your chosen license] 