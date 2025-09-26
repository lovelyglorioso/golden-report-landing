// src/basePath.ts
// Works for any subfolder because Vite exposes the deploy base here:
export const DEPLOY_BASE = (import.meta.env.BASE_URL || "/").replace(/\/$/, ""); // e.g. "/testing"

export function appPathname(): string {
  // Normalize the browser pathname so the app sees "/" at its root
  const raw = window.location.pathname || "/";
  if (DEPLOY_BASE && raw.startsWith(DEPLOY_BASE)) {
    const cut = raw.slice(DEPLOY_BASE.length);
    return cut === "" ? "/" : cut;
  }
  return raw;
}
