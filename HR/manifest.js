{
  "manifest_version": 2,
  "name": "HTML Roulette",
  "version": "1.0",
  "permissions": [
    "tabs",
    "activeTab"
  ],
  "background": {
    "scripts": ["background.js"],
    "persistent": false
  },
  "browser_action": {
    "default_icon": "icon.png"
  },
  "icons": {
    "16": "icon.png",
    "48": "icon.png",
    "128": "icon.png"
  }
}
