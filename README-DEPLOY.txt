NAYADAUR DIGITAL - HOSTINGER DEPLOYMENT (static HTML / CSS / JS)

1. Hostinger hPanel > Websites > nayadaur.digital > File Manager > public_html.
   Delete the default placeholder (default.php / index.php) if present.
2. Upload EVERYTHING in this folder (including the hidden file .htaccess) so that
   index.html sits directly inside public_html. Tip: upload the .zip and use "Extract".
3. hPanel > SSL: make sure the free SSL certificate is active for nayadaur.digital and www.
4. Open https://nayadaur.digital/ and test: /services/, /blog/, /contact/, a wrong URL (404 page),
   http://nayadaur.digital (should redirect to https) and https://www.nayadaur.digital (should redirect
   to https://nayadaur.digital).
5. Google Search Console: add the property for https://nayadaur.digital/, then submit
   https://nayadaur.digital/sitemap.xml.

OLD DOMAIN (nddigital.netlify.app): Hostinger cannot redirect it. In Netlify, either set nayadaur.digital
as the site's primary domain (Netlify then redirects the netlify.app address), or add a netlify.toml
to the old Netlify site with:
  [[redirects]]
    from = "https://nddigital.netlify.app/*"
    to = "https://nayadaur.digital/:splat"
    status = 301
    force = true
Old links used only the home page (#services etc. anchors still exist on the home page).

EDITING:
- Contact details: search and replace 0321 9211464 / 923219211464 / info@nayadaur.digital in the .html files
  and in assets/js/main.js (WA and MAIL variables near the contact form code).
- Social profiles: add real links to the footer of each page only when they exist (none are published now).
- Package prices (PKR) are on the home and pricing pages (Shuruaat 5000, Pehchan 2000, Taraqqi 5000, Kamyabi 10000). Edit the .price lines in index.html and pricing/index.html.
- Real testimonials: none are published. Add a section only with genuine, permitted reviews.
- After editing assets, change the ?v=20261022 number in the HTML so browsers fetch the new file.
