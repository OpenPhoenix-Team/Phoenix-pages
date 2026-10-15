# Phoenix

Static project website for Phoenix. The site includes the technical overview,
benchmark tables, figures, and eight real-world robot demonstrations.

## Preview

Open `index.html` with a browser that supports H.264 video. Keep `assets/` and
`demo/` beside the HTML file. No build step or external dependencies are needed.

## GitHub Pages

In this repository, select **Settings > Pages > Deploy from a branch**,
then select **main** and **/(root)**. After a successful deployment, the default
site address is <https://openphoenix-team.github.io/Phoenix-pages/>.

The `.nojekyll` file marks this as a plain static site. All asset URLs are
relative so the site works under the `/Phoenix-pages/` project path.

## Media

Videos are web-optimized H.264/MP4 copies with fast-start metadata. Their
resolution, frame rate, frame count, and duration are retained; encoding is
lossy. Source recordings are not modified. Figures and posters are unchanged.

Code and model-weight buttons intentionally have no destination yet. The site
does not publish source Markdown, PDF reports, training data, or checkpoints.
