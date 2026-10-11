# Noah Gibbs — folder-based photography portfolio

No admin site or login. White background, black text, and automatic galleries.

## Add photos

1. Open `public/photos/` in this project.
2. Add JPG, JPEG, PNG, WEBP, GIF, or AVIF files to `Cars` or `Nature`, or create any new folder (e.g. `Homes`).
3. Commit/push the updated files to GitHub. Vercel redeploys automatically if connected to the repository.
4. The build automatically creates one gallery and navigation link for each folder containing supported images. Empty folders are hidden.
5. To remove a gallery, delete all images from its folder or remove the folder, then commit.

Note: Git does not track empty folders, so `Cars` and `Nature` include `.gitkeep`. These empty galleries are intentionally hidden until you add photos.

## Vercel configuration

Framework Preset: Other
Build Command: `npm run build`
Output Directory: `dist`
Root Directory: repository root

Upload the **contents** of this ZIP to the root of your existing GitHub repo, replacing the old site files. Remove old framework/config files that conflict with this project. Do not upload the ZIP as a single file.

For local testing, run `npm run build` then serve `dist` with any static web server.

## Layout update
The homepage is now completely white with NOAH GIBBS above the live London clock and date. There are no header or footer navigation bars: gallery links (for folders containing photos) and Contact appear only under the clock. Copyright is centred at the bottom. All typography is monospaced and black. Gallery navigation links remain hidden until you put images in their folders.
