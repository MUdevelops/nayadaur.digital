# NayaDaur Digital

The repository contains the deployed static website at its root and the complete
React + Vite application in [`react-app/`](./react-app/). The React app prerenders
the pages at build time, so the generated site works on Hostinger's regular
Apache/LiteSpeed hosting without a Node.js server.

## Build the React app

Requirements: Node.js 18 or newer.

```powershell
npm ci
npm run build
```

These commands run from the repository root. The complete, upload-ready website
is generated in `react-app/dist/`.

## Deploy on Hostinger

1. Build the app from the repository root as above, or use the already-built static site at the repository root.
2. In Hostinger hPanel, open **Websites → nayadaur.digital → File Manager → public_html**.
3. Upload the contents of `react-app/dist/` (including the hidden `.htaccess`) so `index.html` is directly inside `public_html`. Do not upload the `react-app` source folder.
4. Make sure SSL is active. Test the home page, `/services/`, `/blog/`, `/contact/`, a nonexistent URL, and the HTTPS/www redirects.
5. Submit `https://nayadaur.digital/sitemap.xml` in Google Search Console.

The root of the repository is also a deploy-ready static release: upload its
contents directly to `public_html` if you do not need to rebuild first.

For project structure and editing guidance, see [`react-app/README.md`](./react-app/README.md).
