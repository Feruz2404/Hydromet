// Minimal utilities for simple reveal effects without extra deps.

export function prefersReducedMotion(): boolean {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
}
