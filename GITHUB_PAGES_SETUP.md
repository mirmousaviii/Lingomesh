# GitHub Pages SPA Routing Setup

This project is configured to work properly with GitHub Pages for Single Page Applications (SPA).

## Files Added/Modified

### 1. `public/404.html`

This file handles all 404 errors by redirecting them to the main `index.html` file. When a user visits a URL like `yoursite.com/en` directly, GitHub Pages will serve this file, which then redirects to the correct route.

### 2. `index.html`

Modified to include a script that handles the redirect from `404.html` and restores the original URL in the browser's history.

### 3. `vite.config.ts`

Added `base: process.env.NODE_ENV === 'production' ? './' : '/'` to ensure proper asset loading in production.

### 4. `public/.nojekyll`

This empty file tells GitHub Pages not to process the site with Jekyll, which is necessary for SPAs.

## How It Works

1. When a user visits a direct URL like `yoursite.com/en/grammar/verbs`:
2. GitHub Pages can't find a physical file at that path
3. GitHub Pages serves the `404.html` file
4. The `404.html` script redirects to `yoursite.com/?/en/grammar/verbs`
5. The `index.html` script detects the redirect and restores the URL to `yoursite.com/en/grammar/verbs`
6. Your React Router takes over and renders the correct page

## Testing

After deployment, you should be able to:

- Visit your domain directly: `yoursite.com`
- Visit language routes directly: `yoursite.com/en`, `yoursite.com/de`, etc.
- Visit any nested route directly: `yoursite.com/en/grammar/verbs`
- Use the browser's back/forward buttons
- Bookmark any URL

## Credits

This solution is based on the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) project by rafgraph.
