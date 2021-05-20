const urlParams = new URLSearchParams(window.location.search);
const version = urlParams.get('version');

if(version) {
    getID('version').innerHTML = version;
    loadJsScript(version+'_userSites.js', 'script-src--userSites');
} else {
    getID('version-wrapper').remove();
}