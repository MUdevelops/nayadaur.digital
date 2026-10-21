NAYADAUR DIGITAL - HOSTINGER DEPLOYMENT (React + Vite, prerendered static site)

The React source is in react-app/. It is prerendered at build time and does not
need a Node.js server on Hostinger's standard Apache/LiteSpeed hosting.

To rebuild:
  npm ci
  npm run build

Run the commands from the repository root. Upload the contents of react-app/dist/
(including the hidden .htaccess) to
Hostinger hPanel > Websites > nayadaur.digital > File Manager > public_html.
The repository root also contains a ready-to-upload static release. Upload the
contents of the repository root instead if you do not need to rebuild.

Delete the default placeholder (default.php / index.php) if present. Ensure SSL
is active for nayadaur.digital and www. Test /services/, /blog/, /contact/, a
wrong URL (404 page), HTTP-to-HTTPS and www-to-apex redirects. Submit
https://nayadaur.digital/sitemap.xml in Google Search Console.

OLD DOMAIN (nddigital.netlify.app): Hostinger cannot redirect it. In Netlify,
either set nayadaur.digital as the site's primary domain (Netlify then redirects
the netlify.app address), or add a netlify.toml to the old Netlify site with:
  [[redirects]]
    from = "https://nddigital.netlify.app/*"
    to = "https://nayadaur.digital/:splat"
    status = 301
    force = true
Old links used only the home page (#services etc. anchors still exist on the home page).

Edit React content and configuration under react-app/src/ and react-app/public/.
See react-app/README.md for the project structure and page-editing guidance.
