# NOAH GIBBS — corrected folder-based portfolio

This is the full Vercel project. Upload the CONTENTS of this folder to the ROOT of the GitHub repository connected to Vercel. The root should contain `package.json`, `public/` and `scripts/`, not an extra enclosing folder.

**This corrected edition has NO hard-coded gallery navigation.** Navigation is generated from real folders under `public/photos/`, followed by Contact. Cars and Nature are present by default (with `.gitkeep` files because GitHub does not save empty directories). Empty galleries can be opened and show no images.

To add galleries, add a folder under `public/photos/` and commit at least one file (e.g. photo or `.gitkeep`). Supported photos: jpg, jpeg, png, webp, gif, avif. Deleting a folder from the repository removes its navigation entry on the next deployment.

Vercel: framework Other; build command `npm run build`; output directory `dist`; install command `npm install`; root directory `./`.

To verify the new site after Vercel deployment, view page source and check that the navigation HTML includes only the initial `contact` link. Other links are created by the script from `/galleries.json`.

If Vercel is still showing an older page, check which GitHub repository/branch the project connects to, make sure your latest commit is deployed, and use the exact URL from Deployments > Visit.
