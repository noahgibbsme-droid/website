# NOAH GIBBS — Ready-to-upload photo portfolio

All website files are at the top level of this ZIP.

## Your photo folders
- `public/photos/Cars`
- `public/photos/Nature`
- `public/photos/Structures`
- `public/photos/People`

Each contains a test image and matching description text file (`demo-*.jpg` and `demo-*.txt`). Delete the demo files when you're ready.

## Add photos and descriptions
Drag a photo (for example `porsche.jpg`) into `public/photos/Cars/`. To give it a description, create `porsche.txt` in the same folder:

Porsche 911 GT3
Photographed in London during golden hour.
Close-up study of the bodywork.

The first line becomes the title. The rest is the description. Photos without text files work too. Create additional folders under `public/photos/` to add galleries. Remove folders to remove links.

## Deploy to GitHub
Unzip. Copy the CONTENTS into the ROOT of `noahgibbsme-droid/website`, not a nested folder. Replace old files. GitHub Desktop makes it easiest: clone repository, copy new files in (keep `.git`), commit and push. On GitHub web you can drag files into Upload files, but existing old files aren't automatically deleted.

## Vercel settings
Framework: Other
Build command: npm run build
Output directory: dist
Install command: npm install
Root directory: ./

Homepage has a live London clock and links to all gallery folders plus Contact. Gallery pages have image grids, and clicking an image opens a full-size detail page with its title and description.
