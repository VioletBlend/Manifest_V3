# Search posts about this page
You can search posts about this page with just one click.

## Project Structure
```
├── src/
│   ├── background.js        # Main background script
│   └── utils/
│       ├── tabs.js         # Tab-related utilities
│       └── url.js          # URL handling utilities
├── manifest.json           # Extension manifest
├── package.json           # Project configuration
└── README.md             # Documentation
```

## How to install
1. Access `chrome://extensions` in your Chrome browser
2. Enable `Developer mode`
3. Click "Load unpacked" and select the directory containing these files

## How to use
Click the extension icon on any page to search for posts about that page on X (formerly Twitter).

## Development
The code is organized into modules for better maintainability:
- `url.js`: Contains URL manipulation functions
- `tabs.js`: Handles Chrome tabs operations
- `background.js`: Main extension logic