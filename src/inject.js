// Injects the main script. This is necessary in order to bind a
// keyhandler.

const browser = window.browser || window.chrome;
const scriptEl = document.createElement('script');
scriptEl.setAttribute('src', browser.runtime.getURL('todoist-shortcuts.js'));
document.getElementsByTagName('body')[0].appendChild(scriptEl)
