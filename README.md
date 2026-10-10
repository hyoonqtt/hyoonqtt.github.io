# hyoonqtt.github.io — main site (https://hyoonqt.my.id)

Plain static landing page. No build step, no dependencies, no analytics.
Design is dark-only navy + yellow: near-black navy bg #060d18, surfaces
#0b1f3b, steel-blue #123a63 for borders/rules/hovers, main accent yellow
#f6c445 for interactive feedback, focus, and selection.
Layout language inspired by washi.dev: large circular avatar, bold bordered
buttons with inline SVG icons, gray icon row with hover/focus tooltips,
staggered entrance animation, thin-ruled projects list.
Rebuilt dependency-free: system font stack (no webfonts), inline SVG
(no Font Awesome), transform-based `backwards`-fill animation (content stays
visible with animations off) plus `prefers-reduced-motion` support.

## Local preview

One documented command — open the file directly (no server needed):

```sh
xdg-open index.html
# or: python3 -m http.server -d . 8000
```

## Files

- `index.html` — avatar, name/tagline, Blog/Write-ups buttons, social list, footer
- `css/style.css` — navy/yellow dark-only tokens, entrance cascade, tooltips
- `js/main.js` — renders the social icon row with tooltips from one `SITE_LINKS` object (enhancement only; page works with JS disabled via `<noscript>`)
- `assets/avatar.png` — neutral placeholder (shown ~200px circle)
- `CNAME` — `hyoonqt.my.id`
- `404.html` — custom not-found page
- `sw.js` — kill-switch worker (self-unregisters + clears caches; removes the old Jekyll worker for returning visitors). No page registers a worker; `js/main.js` also unregisters stale workers on load. Keep until old clients age out.

## Deploy (GitHub Pages, branch source)

Repo: `hyoonqtt/hyoonqtt.github.io` (special user site, public).

1. Push this folder as the repo root on branch `main`.
2. Repo Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Custom domain: `hyoonqt.my.id`. Turn on **Enforce HTTPS** once issued.

## TODO

- [ ] Projects section: omitted — add (name, URL, short description per entry) only if entries are supplied
- [ ] Avatar: replace `assets/avatar.png` with the real avatar when supplied

Identity (resolved from the old blog; personal accounts use single-t
`hyoonqt`, double-t `hyoonqtt` is hosting-only): name `hyoon`, tagline
`CTF - Nature`, description `Manusia Bingung`, socials
GitHub/LinkedIn/Instagram/Email in `SITE_LINKS` + `<noscript>`.
