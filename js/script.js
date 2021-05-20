/*
----------------------------------------------------------
An Open-Source Homepage Script
Developed by Primo
https://mp-primo.blogspot.com/primo
https://github.com/m-primo/psbp

V1: init Primo Startup Browsing Page.
V2: change the name to Your Browsing Homepage, major update.
V2.1.0: Added dark & light mode, added auto-focus, added on escape pressed clear input, some update.
V2.1.1: Uploaded to Google Chrome Store and Mozilla Firefox Store.
V2.2.0: New websites, selectable search engine, some updates.
V2.3.0: Style edited, tooltip added, multiple custom versions, structure updated.

MIT License
----------------------------------------------------------
*/

// ----------------------------------------------------------
// Initializations
const scriptName = 'Your Browsing Homepage';
const ns_scriptName = scriptName.replace(/ /g, '');
const currentVersion = 'v2.3.0';
const slogan = 'Your gate to the internet';
// ----------------------------------------------------------

// ----------------------------------------------------------
// Functions
function getID(id) {
    return document.getElementById(id);
}

function getTag(tag, i = 0) {
    return document.getElementsByTagName(tag)[i];
}

function getName(name, i = 0) {
    return document.getElementsByName(name)[i];
}

getName('q', 0).focus();

getName('q', 0).addEventListener('keyup', function(e) {
    e.preventDefault();
    if(e.keyCode === 13) doSearch();
    if(e.keyCode === 27) clearSearch();
});

getID('click-to-clear-search').onclick = function(){
    clearSearch();
};

getID('click-to-do-search').onclick = function(){
    doSearch();
};

getID('click-to-switch-mode').onclick = function(){
    switchMode();
};

if(getLocStorage('style_mode') == null) setLocStorage('style_mode', 'light');
const style_mode = getLocStorage('style_mode');
switchMode(true, style_mode);

function switchMode(strict = false, mode = 'dark') {
    if(strict) styleMode(mode);
    else {
        if(getTag('body').getAttribute('id') == 'dark' || getTag('body').getAttribute('id') == null) switchMode(true, 'light');
        else if(getTag('body').getAttribute('id') == 'light') switchMode(true, 'dark');
    }
}

function styleMode(mode) {
    getTag('body').setAttribute('id', mode);
    setLocStorage('style_mode', mode);
}

function setLocStorage(iname, ivalue) {
    localStorage.setItem(iname, ivalue);
}

function getLocStorage(iname) {
    return localStorage.getItem(iname);
}

function setCookie(cname, cvalue, exdays = 90) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = 'expires='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1);
        if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return '';
}

function setFullDate() {
    const d = new Date();
    const n = d.toUTCString();
    getID('datetime').innerHTML = n;
} setFullDate(); setInterval(setFullDate, 1000);

function doSearch() {
    const qVal = getName('q', 0).value;
    const qEng = getID('searchengine').value;
    let xVal;
    if(qVal != '') {
        if(qVal.startsWith('http://') || qVal.startsWith('https://')) xVal = qVal;
        else xVal = qEng + qVal;
        window.open(xVal + '&utm_source=' + ns_scriptName);
    }
}

function clearSearch() {
    getName('q', 0).value = '';
}

function loadJsScript(src, id) {
    getID(id).remove();
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.innerHTML = null;
    s.id = id;
    document.getElementsByTagName('body')[0].appendChild(s);
}

let boxID = 1;
function Site(Title, URL, Icon, Description = null, externalIcon = false) {
    URL = URL + '?utm_source=' + ns_scriptName;
    if(!externalIcon) Icon = 'img/site/' + Icon;
    if(!Description) Description = Title;

    this.Title = Title;
    this.URL = URL;
    this.Icon = Icon;
    this.Description = Description;

    const boxDiv = document.createElement('div');
    boxDiv.setAttribute('class', 'box');
    boxDiv.setAttribute('data-tooltip', this.Description);
    boxDiv.setAttribute('data-title', this.Title);
    boxDiv.setAttribute('data-description', this.Description);
    boxDiv.setAttribute('data-url', this.URL);
    boxDiv.setAttribute('data-icon', this.Icon);
    boxDiv.setAttribute('data-id', boxID);

    boxDiv.onclick = function() {
        window.open(URL);
    };

    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('class', 'icon');
    iconDiv.innerHTML = '<img src="' + this.Icon + '"/>';

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'title');
    titleDiv.innerHTML = this.Title;

    getID('boxies').appendChild(boxDiv);
    boxDiv.appendChild(iconDiv);
    boxDiv.appendChild(titleDiv);

    boxID++;
}

let adID = 1;
function Ad(URL, Img, Place) {
    let adPlaceDiv;
    if(Place == 1) adPlaceDiv = getID('adsTop');
    else if(Place == 2) adPlaceDiv = getID('adsBottom');
    adPlaceDiv.style.display = 'block';

    URL = URL + '?utm_source=' + ns_scriptName;
    Img = 'img/ad/' + Img;

    this.URL = URL;
    this.Img = Img;

    const adDiv = document.createElement('div');
    adDiv.setAttribute('class', 'ad a125');
    adDiv.setAttribute('data-url', this.URL);
    adDiv.setAttribute('data-img', this.Img);
    adDiv.setAttribute('data-id', adID);
    adDiv.innerHTML = '<img src="' + this.Img + '" /></div>';

    adDiv.onclick = function() {
        window.open(URL);
    };

    adPlaceDiv.appendChild(adDiv);

    adID++;
}
// ----------------------------------------------------------

// ----------------------------------------------------------
// Set Data [DOM]
getID('title').innerHTML = scriptName;
getID('Head_title').innerHTML = scriptName+' - '+slogan;
getID('Head_meta_desc').setAttribute('content', 'Primo Startup Browsing Page | Your Browsing Homepage - '+slogan+'.');
getID('Head_meta_key').setAttribute('content', getID('Head_meta_desc').getAttribute('content').replace(/-/g, '').replace(/\|/g, '').replace(/,/g, '').replace(/ /g, ', '));
getID('scriptName').innerHTML = scriptName;
getID('scriptName').href = 'https://github.com/m-primo/psbp';
getID('scriptVersion').innerHTML = currentVersion;
getID('currentYear').innerHTML = (new Date()).getFullYear();
// ----------------------------------------------------------
