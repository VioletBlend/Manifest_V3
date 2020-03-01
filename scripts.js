var script = function() {
  chrome.tabs.getSelected(tab => {
    tab_url = tab.url
    current_base_url = tab_url.split("?")[0]
    target_url = "https://twitter.com/search?q=" + encodeURIComponent(current_base_url) + "%20OR%20" + encodeURIComponent(tab_url)
    window.open(target_url, '_blank')
  })
}

$(function() {
  chrome.browserAction.onClicked.addListener(script)
})