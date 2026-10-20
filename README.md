# Phoenix

Static project website for Phoenix, including the technical overview, benchmark
tables, figures, eight real-world robot demonstrations, and eight video-prediction comparisons.

## Pages

- `index.html`: current English homepage.
- `index_en.html`: the same English page at its explicit language URL.
- `index_zh.html`: existing Chinese report retained at its explicit URL.

The latest editorial updates apply to the English page. The Chinese report is
retained as a separate version.

## Preview and deployment

No build step is required. Serve this directory with any static HTTP server.
GitHub Pages deploys from `main` at the repository root:
https://openphoenix-team.github.io/Phoenix-pages/

The `.nojekyll` file marks this as a plain static site. Asset URLs are relative
so the site works under the `/Phoenix-pages/` project path.

## Media

Real-world demonstrations prefer high-quality AV1/WebM where supported, with the
existing H.264/MP4 files retained as browser fallbacks and original-video downloads.
AV1 copies preserve the 1920 x 560 resolution, 30 fps, frame count, and duration;
they use conservative lossy encoding (libaom-av1, CRF 16). Playback defaults to 1x.
The eight video-prediction comparison clips and all JPEG posters are unchanged.

PNG figures and logos use lossless WebP at their original dimensions, verified
pixel-for-pixel against the PNG originals. Existing WebP images are unchanged.
Video loading remains on demand (`preload="none"`), and figures remain lazy-loaded.
The original MP4 fallbacks mean repository size is larger than the preferred
media payload downloaded by a compatible browser.

Code and model links point to the OpenPhoenix GitHub and Hugging Face projects.
Source reports, backups, training data, and checkpoints are not published here.
