async function searchPosts() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const baseUrl = tab.url.split("?")[0];
    const targetUrl = `https://x.com/search?q=${encodeURIComponent(baseUrl)}%20OR%20${encodeURIComponent(tab.url)}`;
    await chrome.tabs.create({ url: targetUrl });
  } catch (error) {
    console.error('Error searching posts:', error);
  }
}

chrome.action.onClicked.addListener(searchPosts);