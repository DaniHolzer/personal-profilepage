# Personal Profile Page

---

# new:

New package manager: Bun

Install dependencies with:
```
bun install
```

Start development server with:
```
bun dev
```




---


🌐 **Live site**: https://dholzer.it

Feel free to also explore my [Blog](https://daniholzer.github.io/my-blog/) or connect with me on social media.

## Tech Stack

- **Framework**: React (with TypeScript)
- **Build tool**: Vite
- **Styling**: Tailwind CSS
- **Component styling helpers**:
  - `tailwind-merge`
  - `tailwind-variants`
- **Hosting**: Netlify
- **Version control**: Git & GitHub

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- bun or npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DaniHolzer/personal-profilepage.git
cd personal-profilepage

# Install dependencies
bun install
```

### Development

```bash
bun dev
```
Open your browser at http://localhost:5173 (or the URL shown in the terminal).

### Production Build

```bash
bun run build
bun run preview
```
This creates an optimized static build in the dist/ directory.

### Project Structure

```text
app/
  src/
    components/ # Reusable UI components
    layouts/   # Page layouts
    pages/     # Route-level pages / views
```

### Deployment

The site is deployed as a static build:
1. Netlify runs bun run build.
2. The dist/ folder is served via Netlify's CDN.
3. The custom domain https://dholzer.it points to the Netlify site.

Any push to the main branch triggers an automatic redeploy.
