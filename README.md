# NOAH GIBBS — Photography portfolio

## Add galleries
Create a folder in `public/photos/`, e.g. `public/photos/Portraits/`. Every folder becomes a navigation link, even if it has no photos. The starter folders are `Cars`, `Nature`, and `Structures` (each has a `.gitkeep` so GitHub preserves it).

## Add photos and descriptions
Drag JPG, JPEG, PNG, WEBP, GIF or AVIF images into a gallery folder. For a photo called `my-car.jpg`, create `my-car.txt` in **the same folder**:

```text
Porsche 911 at Sunset
A quiet evening shoot in London.
Photographed in natural light with warm reflections.
```

The **first line** becomes the image title, and the **remaining lines** become the description. No `.txt` is required: the image filename becomes its title automatically.

## How it works
- Homepage links open **separate gallery pages**.
- Gallery pages show a square photo grid; click any photo for a full image, description, and previous/next navigation.
- The homepage has the live London clock and a Contact link.
- Remove a gallery folder to remove its navigation link.
- To update Vercel, commit/push the changed photos or descriptions to GitHub.

## Vercel
Framework: Other
Build command: `npm run build`
Output directory: `dist`
Install command: `npm install`
Root directory: repository root

## Test locally
Install Node.js, run `npm run build`, then serve `dist` using any static file server.

The ZIP contents go **directly into the repository root** (not in a second nested folder).
