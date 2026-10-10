# Transportation Engineering Atlas

An installable, offline-capable engineering reference website with concepts, calculators, definitions and urban mobility models. Open **index.html**. No build service, framework, account, API key or external CDN is needed.

## Publish on GitHub Pages

Upload **the contents of the final `github-upload` folder** to the root of your website repository. Keep all included files together, especially `index.html`, `manifest.json`, `sw.js` and the complete `assets` folder. If using the ZIP, extract its contents first; do not upload the ZIP as the website.

In GitHub, select **Settings → Pages → Deploy from a branch**, then select your branch and **/(root)**. The site uses relative paths and hash navigation, so it works beneath a repository URL.

## Local preview

Open `index.html` in a modern browser, or run `python -m http.server 8000 --bind 127.0.0.1` and open `http://127.0.0.1:8000`.

## Included content

- Overview followed immediately by Fundamental concepts.
- Calculators, searchable Definitions A–Z and engineering domains.
- Urban mobility: four-step demand planning, trip generation/distribution, mode choice, route assignment, feedback, activity-based modeling, tours and a utility-based mode-choice explorer.
- Numbers in context: design quantities, units and conditions of application. Example inputs are distinguished from source criteria.
- Source names beside every tool and concept, printable references and downloadable calculator results.
- Responsive phone layouts, safe-area support, touch controls and a mobile navigation drawer.
- Standalone installation, regular/maskable app icons and offline caching of all public concepts and calculators.

Source editions and assumptions apply to each method. Teaching coefficients and scenarios are examples, not calibrated forecasts or design-compliance checks.

## Local source documents

PDFs, source Markdown files, document indexes, extracted manual text and private audit files stay in the local working folder. They are excluded from the deployment. The website has no manual library, source coverage page, manual reader or PDF download links. `assets/sources.js` contains source names and identities only.

## Rebuild from the local working folder

Run `python tools/package_site.py`. It refreshes asset hashes and generates a new worker/cache version from the public content. Run `python tools/build_icons.py` only when updating the icon artwork. The packager uses an explicit allowlist, refreshes only `github-upload`, preserves its local Git history, and replaces `transportation-atlas-github-pages.zip` with the same public files. Git metadata is excluded from the ZIP. Do not upload the entire local working folder.

## Install on a phone

Publish the complete upload folder to GitHub Pages, then open its **HTTPS** URL in Chrome on your phone. Use **Install app** in the site when offered, or **Chrome menu → Install app / Add to Home screen → Install**. The manifest requests a standalone window and uses the Atlas app icon. Chrome decides when to offer installation; actual Android installation must be completed on your phone.

Open the site once while connected and wait for **Available offline**. Concepts, calculators, definitions, icons and the print page are cached together. The manuals are never cached or uploaded. Opening a local `file://` HTML file does not enable service-worker installation; local HTTP on localhost is for development.

## App updates and offline behavior

Each build gets a content-based cache version. A new complete version downloads in the background; **Update app** appears when it is ready. Press it when you are ready to reload. Updates do not interrupt current calculator input automatically. Old cache versions for this app are removed on activation, while neighboring apps' caches are preserved.

Offline access requires one completed online visit. Browser storage removal can clear the offline files; reconnect and reload to restore them. The app serves its complete cached shell consistently rather than mixing old HTML with new scripts. It stores no accounts, private manuals or remote content.

## Verification and workspace cleanup

Run `node tools/verify_pwa.js`, `node tools/verify_release.js` and `python tools/verify_package.py` from the working folder. The deployable PWA has no build dependencies; icon regeneration uses Pillow locally.

The final upload directory is `github-upload`. Duplicate builds, historical scratch/preview folders and Python bytecode caches are removed from this workspace. The local `Resources` manuals, maintained site assets, source evidence and build/validation tools are preserved. No files outside this workspace are removed. The local packaging scripts do not commit, push or publish the site.
