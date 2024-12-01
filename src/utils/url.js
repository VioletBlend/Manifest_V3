/**
 * Utility functions for URL handling
 */
export function getBaseUrl(url) {
  return url.split("?")[0];
}

export function buildSearchUrl(baseUrl, fullUrl) {
  return `https://x.com/search?q=${encodeURIComponent(baseUrl)}%20OR%20${encodeURIComponent(fullUrl)}`;
}