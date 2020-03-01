function search_tweets () {
  chrome.tabs.getSelected(tab => {
    base_url = tab.url.split("?")[0]
    target_url = "https://twitter.com/search?q=" + encodeURIComponent(base_url) + "%20OR%20" + encodeURIComponent(tab.url)
    window.open(target_url, '_blank')
  })
}

$(function() {
  chrome.browserAction.onClicked.addListener(search_tweets)
})