[![Netlify Status](https://api.netlify.com/api/v1/badges/e9156a39-501b-47da-a310-6af0906db675/deploy-status)](https://app.netlify.com/sites/skbt27i/deploys)

My under construction portfolio website (need to refactor some files), built using Gatsby.js and Material-UI!

https://skbt27i.netlify.app/

## A note on Dependabot alerts

This is a static site (Gatsby v2). The open Dependabot alerts are almost all in
build-time tooling (webpack loaders, image processing, parsers, etc.) that never
ships to the browser, so they don't affect the deployed site. Clearing them would
require a full framework migration (Gatsby 2→5, React 16→18, MUI 4→5), which isn't
worth it for a site this size. If it's ever modernized, a fresh rebuild on a
current stack is the better path than an in-place upgrade.
