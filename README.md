# kevgeoleo.github.io

Personal portfolio site 

## Files

```
index.html       page content
styles.css       all styling
script.js        scrollspy for the sticky nav
resume.pdf       compiled from resume.tex (regenerate if you edit the .tex)
resume.tex       LaTeX source for the résumé
assets/          put your profile photo here
```

## Photo
```
assets/profile.jpg
```

## Editing content later

- Text content lives directly in `index.html` — section by section,
  labeled with HTML comments (`<!-- ===== EXPERIENCE ===== -->` etc.).
- Colors, fonts, and spacing are all defined as CSS variables at the top
  of `styles.css` under `:root` — change a value once there to restyle
  the whole site.
- To update the résumé: edit `resume.tex`, then recompile with
  `pdflatex resume.tex` (run twice if cross-references look off) and
  replace `resume.pdf`.
