# Chromatic — 3MF Paint Studio

A standalone browser-based 3MF/STL geometry painter, delivered in one HTML file. Uses Three.js and JSZip from CDNs. Host as a static GitHub Pages site with no backend.

## Deploy to GitHub Pages

1. Create a public GitHub repository (for example `chromatic-3mf`).
2. Upload `index.html` to the repository root and commit.
3. Open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, `main`, `/ (root)`, and save.
4. Visit `https://YOUR-USERNAME.github.io/chromatic-3mf/` once deployed.
5. Link that URL from your main website.

## Features

- Load common mesh-based 3MF documents (including build items and component transforms), binary/ASCII STL and native `.chromatic` projects.
- Orbit, zoom, pan, fit, grid, wireframe, perspective/orthographic view, object visibility, and a model tree.
- Brush, detail (per triangle), connected region fill, angle-constrained smart fill, screen-space rectangle, eraser and eyedropper.
- Full per-stroke undo/redo, object-wide paint/clear, filament palette editing, import/export presets and project saving.
- Export standard colored 3MF with per-triangle Materials/Properties color group assignments; optional geometry-only STL export.
- Works locally in the browser; no model files are uploaded to a server.

## Known limitations — important

**This is an initial functional release, not certified slicer software.** Bambu Studio and OrcaSlicer may not map standardized 3MF per-face color properties to their proprietary filament-paint annotations. You must test the exported 3MF in your target slicer, inspect the preview, and assign filaments before printing. Complex source metadata, texture maps, slicer project configuration, assembly metadata and unsupported extensions are not preserved. Save an original copy of input files.

- Painting resolution is limited by the triangles in the input mesh. Smooth, anti-aliased brush boundaries and mesh subdivision are not implemented.
- Rectangle selection paints faces whose *centers* are inside the screen-space rectangle, with an optional visibility test; it is not a polygon-lasso tool.
- The brush iterates faces and may be slow on extremely dense meshes. Very large meshes consume significant browser memory.
- Native project files include mesh data, colors and transforms but not undo history.
- External libraries are loaded from CDNs, so an internet connection is needed to initialize the app.
- Limited to mesh-based 3MF data; textures and slicer-specific paint data are not imported or round-tripped.

## Implementation

Uses Three.js 0.175.0 and JSZip 3.10.1 directly from public CDNs. Single-file static HTML/CSS/JavaScript, suitable for a GitHub Pages repository. No build step.

## Testing checklist

- Import a representative STL and 3MF.
- Paint with each tool, undo and redo; save `.chromatic` and reopen.
- Export 3MF and load into the intended slicer; inspect face colors, proportions, components and slicing preview.
- Test on large files and check browser console for errors.
