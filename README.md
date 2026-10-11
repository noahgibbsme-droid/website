# NOAH GIBBS — Mosaic portfolio

This ZIP contains the **entire replacement website**, with files directly at the ZIP root.

## How it looks
- Homepage: small NOAH GIBBS wordmark, London time/date, six-column photographic mosaic, and **view all →** link.
- View all: left-hand gallery filters (Cars, Nature, People, Structures, All) and a spacious five-column photo grid.
- Photo: click any thumbnail to open a separate detail page containing its title, description, and previous/next links.
- Links are automatically generated from the existing subfolders in `public/photos`.

## Add or edit photographs
1. Go to `public/photos/Cars/` (or Nature, People, Structures).
2. Drag `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif` or `.avif` images into that folder.
3. For `my-photo.jpg`, add `my-photo.txt` in the *same folder*:

```text
My Photograph Title
First line of the description.
Further description is optional.
```

The first line of each text file is the title; the rest is the description. Without a text file, the filename becomes the title. The folder itself becomes a gallery and filter. Delete `demo-*` images and text files to remove the included examples.

## Deploy
Extract the ZIP. Replace the **contents of the root** of the GitHub repository `noahgibbsme-droid/website` with these files. Do not add an extra containing folder. GitHub Desktop makes replacing everything easier: clone repository, replace files while keeping `.git`, commit and push. Vercel deploys the new commit.

## Vercel
Framework: Other
Build Command: `npm run build`
Output Directory: `dist`
Install Command: `npm install`

The provided images are examples only, not photographs taken by you.

## Auto-cropped gallery thumbnails
The View All and filtered gallery pages now automatically crop thumbnails into consistent portrait rectangles (using CSS `object-fit: cover`). The original image files are not edited, and the individual photo pages show the entire original image.

## New layout changes
Homepage navigation, view-all link, gallery filters, titles, photo captions, contact text, and footer are centred. Added subtle page-entry and hover transitions with reduced-motion accessibility support. Photo folder and .txt description workflows are unchanged.
