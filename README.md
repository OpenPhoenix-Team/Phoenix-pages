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

Videos are the existing web-optimized H.264/MP4 copies with fast-start metadata.
Their resolution, frame rate, frame count, and duration match the source videos;
encoding is lossy. Playback defaults to 1x actual execution speed.
Figures and posters are copied from the current report without re-encoding.

Code and model links point to the OpenPhoenix GitHub and Hugging Face projects.
Source reports, backups, training data, and checkpoints are not published here.
