# Transportation Engineering Atlas

A static engineering reference website with concepts, calculators, definitions and urban mobility models. Open **index.html**. No build service, framework, account, API key or external CDN is needed.

## Publish on GitHub Pages

Upload **the contents of the final `github-upload` folder** to the root of your website repository. Keep `index.html`, `print.html`, `.nojekyll` and the entire included `assets` folder together. If using the ZIP, extract its contents first; do not upload the ZIP as the website.

In GitHub, select **Settings → Pages → Deploy from a branch**, then select your branch and **/(root)**. The site uses relative paths and hash navigation, so it works beneath a repository URL. Nothing has been pushed or published automatically.

## Local preview

Open `index.html` in a modern browser, or run `python -m http.server 8000 --bind 127.0.0.1` and open `http://127.0.0.1:8000`.

## Included content

- Overview followed immediately by Fundamental concepts.
- Calculators, searchable Definitions A–Z and engineering domains.
- Urban mobility: four-step demand planning, trip generation/distribution, mode choice, route assignment, feedback, activity-based modeling, tours and a utility-based mode-choice explorer.
- Numbers in context: design quantities, units and conditions of application. Example inputs are distinguished from source criteria.
- Source names beside every tool and concept, printable references and downloadable calculator results.
- Responsive layouts, touch controls and a mobile navigation drawer.

Source editions and assumptions apply to each method. Teaching coefficients and scenarios are examples, not calibrated forecasts or design-compliance checks.

## Local source documents

PDFs, source Markdown files, document indexes, extracted manual text and private audit files stay in the local working folder. They are excluded from the deployment. The website has no manual library, source coverage page, manual reader or PDF download links. `assets/sources.js` contains source names and identities only.

## Rebuild from the local working folder

Run `python tools/version_assets.py` then `python tools/package_site.py`. The packager uses an explicit allowlist, refreshes `github-upload` and the older `github-pages` output, and replaces `transportation-atlas-github-pages.zip` with the same public files. Do not upload the entire local working folder.
