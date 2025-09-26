// src/basePath.ts
// Works for any subfolder because Vite exposes the deploy base here
export const DEPLOY_BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, ""); 
// e.g. "/testing"

export function appPathname(): string {
  // Get the browser pathname
  const raw = window.location.pathname || "/";

  // Normalize so the app sees "/" at its root
  if (DEPLOY_BASE && raw.startsWith(DEPLOY_BASE)) {
    const cut = raw.slice(DEPLOY_BASE.length);
    return cut === "" ? "/" : cut;
  }

  return raw;
}
