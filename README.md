# DocuMind Frontend

Blue-gradient, glass-style DocuMind AI frontend (static).  
Connects to a backend API (optional) for actual summarization.

## Files
- `index.html`
- `style.css`
- `script.js`
- `preview.png` (optional but recommended)

## Deploy to Vercel
1. Push this repo to GitHub.
2. On Vercel: Import Project → Framework Preset: **Other** → Root Dir: *blank* → Build & Output: leave blank.
3. Deploy. (Static site — no build command required.)

## Notes
- To use a real backend, replace the simulated section in `script.js` with a `fetch()` to your API endpoint.
- Place `preview.png` at project root for Open Graph / README preview.
