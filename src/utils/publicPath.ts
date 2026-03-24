/** Encode each path segment so spaces and special characters work in public URLs. */
export function encodePublicPath(path: string): string {
  const trimmed = path.replace(/^\/+/, "");
  const segments = trimmed.split("/");
  return "/" + segments.map(encodeURIComponent).join("/");
}
