export function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Something went wrong</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #050816;
        color: #f8fafc;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main { width: min(32rem, calc(100vw - 2rem)); text-align: center; }
      h1 { margin: 0; font-size: clamp(2rem, 7vw, 4rem); line-height: 1; }
      p { color: #cbd5e1; font-size: 1rem; line-height: 1.6; }
      .actions { display: flex; justify-content: center; gap: .75rem; flex-wrap: wrap; margin-top: 1.5rem; }
      a, button {
        border: 1px solid #334155;
        border-radius: .5rem;
        padding: .75rem 1rem;
        color: #f8fafc;
        background: #111827;
        text-decoration: none;
        font: inherit;
        cursor: pointer;
      }
      button { background: #2563eb; border-color: #2563eb; }
    </style>
  </head>
  <body>
    <main>
      <h1>Something went wrong</h1>
      <p>The page hit a server error. Refresh the page or return home.</p>
      <div class="actions">
        <button onclick="location.reload()">Refresh</button>
        <a href="/">Go home</a>
      </div>
    </main>
  </body>
</html>`;
}
