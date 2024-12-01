import { getCurrentTab, createNewTab } from './utils/tabs.js';
import { getBaseUrl, buildSearchUrl } from './utils/url.js';

async function searchPosts() {
  try {
    const tab = await getCurrentTab();
    const baseUrl = getBaseUrl(tab.url);
    const searchUrl = buildSearchUrl(baseUrl, tab.url);
    await createNewTab(searchUrl);
  } catch (error) {
    console.error('Error searching posts:', error);
  }
}

chrome.action.onClicked.addListener(searchPosts);