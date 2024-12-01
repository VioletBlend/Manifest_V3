/**
 * Utility functions for Chrome tabs
 */
export async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

export async function createNewTab(url) {
  return await chrome.tabs.create({ url });
}