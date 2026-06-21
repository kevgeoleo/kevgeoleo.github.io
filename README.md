# kevin-leo.github.io

Personal portfolio site — single static page, no build step required.

## Files

```
index.html       page content
styles.css       all styling
script.js        scrollspy for the sticky nav
resume.pdf       compiled from resume.tex (regenerate if you edit the .tex)
resume.tex       LaTeX source for the résumé
assets/          put your profile photo here
```

## Add your photo

Drop a square-ish photo (at least 400×400px works well) into the `assets/`
folder and name it exactly:

```
assets/profile.jpg
```

That's it — the page already points to that path. Until the file exists,
the circle shows a "KL" placeholder automatically, so the site looks fine
either way. If your photo is a `.png`, either rename it to `.jpg` or
change the `src="assets/profile.jpg"` in `index.html` (search for
`avatar-img`) to match.

## Publish on GitHub Pages

1. Create a new repo. For a URL like `https://<username>.github.io`,
   name the repo exactly `<username>.github.io`. For a project-style URL
   instead (`https://<username>.github.io/portfolio`), any repo name works.
2. Push these files to the repo's default branch (`main`):
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source: Deploy from a branch → Branch: main / (root)**. Save.
4. Wait a minute or two, then visit the URL GitHub shows on that same
   Pages settings screen.

## Editing content later

- Text content lives directly in `index.html` — section by section,
  labeled with HTML comments (`<!-- ===== EXPERIENCE ===== -->` etc.).
- Colors, fonts, and spacing are all defined as CSS variables at the top
  of `styles.css` under `:root` — change a value once there to restyle
  the whole site.
- To update the résumé: edit `resume.tex`, then recompile with
  `pdflatex resume.tex` (run twice if cross-references look off) and
  replace `resume.pdf`.
