# 🛋️ONSOFA.ai
ONSOFA Studio [4] Artificial Intelligence

This repository contains a lean startup website that demonstrates how to host a multi‑page site on GitHub Pages using plain HTML/CSS and minimal JavaScript.

## Repository layout

```
onsofa/docs/
├── index.html                 # Home page (main page)
├── projects.html              # Projects page
├── publications.html          # Publications page
├── products.html              # Products page
├── contact.html               # Contact-us page
├── style.css                  # All CSS rules
├── typing.js                  # Typing animation logic
├── server.py                  # Port Forwarding and Server 
├── README.md                  # Instruction
├── CODE_OF_CONDUCT.md         # Opensource note
└── fonts/
    └── CascadiaCode-Regular.woff2   # Optional – if not from URL (check .css file)
└── metadata_images/
    └── ONSOFA-favicon.ico     # favicon
```

## How to Deploy (minimal static theme)
0. Set the root/docs based on folder (e.g. onsofa-stati-theme)
1. Fork or clone this repo.
2. Push the branch to GitHub (default `main`).
3. In Settings → Pages → Source, select `main` → `/docs`.
4. Afterthat, this site will be live at `https://danielsaatchi.github.io/onsofa/`.

## How to Deploy (dynamic-GPT theme)
0. Set the root/docs based on folder (e.g. onsofa-dynamic-GPT-theme)
1. Fork or clone this repo.
2. Push the branch to GitHub (default `main`).
3. In Settings → Pages → Source, select `main` → `/docs`.
4. Afterthat, this site will be live at `https://danielsaatchi.github.io/onsofa/`.

## Update note (version 0.1.3) 
1. Reported bugs for version 0.1.2 are fixed.
2. New features may be available for the upcoming version 0.1.4
3. server.py is added for IP allocation and port forwarding for static IP & cloud service. You can also integrate it for decentralized network that are coming to edge systems if you are familiar with them in telecom and blockchain nodes.
4. You can now add images (e.g. PNG or JPEG)
5. Flavicon Icon and .PNG example are added in a new folder for metadata_images, and html headers
6. Onsofa dynamic-GPT theme is adopted and customized for small business and personal brand  like ONSOFA, XSEALD, DAATCHI, & DSDT for various colors and additional deployments and developments depending on needs.


Happy hacking! 🚀
