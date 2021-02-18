/*
----------------------------------------------------------
An Open-Source Homepage Script
Developed by Primo
https://mp-primo.blogspot.com/primo
https://github.com/m-primo/psbp

V1: init Primo Startup Browsing Page.
V2: change the name to Your Browsing Homepage, major update.
V2.1: Added dark & light mode, added auto-focus, added on escape pressed clear input, some update.

MIT License
----------------------------------------------------------
*/

// ----------------------------------------------------------
// Initializations
var scriptName = 'Your Browsing Homepage';
var ns_scriptName = scriptName.replace(/ /g, "");
var currentVersion = 'V2.1';
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

getName('q', 0).addEventListener("keyup", function(e) {
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
var style_mode = getLocStorage('style_mode');
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
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1);
        if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setFullDate() {
    var d = new Date();
    var n = d.toUTCString();
    getID("datetime").innerHTML = n;
} setFullDate(); setInterval(setFullDate, 1000);

function doSearch() {
    var qVal = getName('q', 0).value;
    var xVal;
    if(qVal != "") {
        if(qVal.startsWith("http://") || qVal.startsWith("https://")) xVal = qVal;
        else xVal = "https://google.com/search?q=" + qVal + "&ie=UTF-8";
        window.open("http://click-aduk.blogspot.com/click-ad?label=" + xVal + "&utm_source=" + ns_scriptName);
    }
}

function clearSearch() {
    getName('q', 0).value = '';
}

boxID = 1;
function Site(Title, URL, Icon, externalIcon = false) {
    URL = "http://click-aduk.blogspot.com/click-ad?label=" + URL + "?utm_source=" + ns_scriptName;
    if(!externalIcon) Icon = "img/site/" + Icon;

    this.Title = Title;
    this.URL = URL;
    this.Icon = Icon;

    var boxDiv = document.createElement("div");
    boxDiv.setAttribute("class", "box");
    // boxDiv.setAttribute("id", "box-item-"+boxID);
    // boxDiv.setAttribute("onclick", "window.open('" + this.URL + "')");
    boxDiv.setAttribute("title", this.Title);
    boxDiv.setAttribute("data-title", this.Title);
    boxDiv.setAttribute("data-url", this.URL);
    boxDiv.setAttribute("data-icon", this.Icon);
    boxDiv.setAttribute("data-id", boxID);

    boxDiv.onclick = function() {
        window.open(URL);
    };

    var iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "icon");
    iconDiv.innerHTML = "<img src='" + this.Icon + "'/>";

    var titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "title");
    titleDiv.innerHTML = this.Title;

    getID("boxies").appendChild(boxDiv);
    boxDiv.appendChild(iconDiv);
    boxDiv.appendChild(titleDiv);

    boxID++;
}

adID = 1;
function Ad(URL, Img, Place) {
    var adPlaceDiv;
    if(Place == 1) adPlaceDiv = getID("adsTop");
    else if(Place == 2) adPlaceDiv = getID("adsBottom");
    adPlaceDiv.style.display = "block";

    URL = "http://click-aduk.blogspot.com/click-ad?label=" + URL + "?utm_source=" + ns_scriptName;
    Img = "img/ad/" + Img;

    this.URL = URL;
    this.Img = Img;

    var adDiv = document.createElement("div");
    adDiv.setAttribute("class", "ad a125");
    adDiv.setAttribute("data-url", this.URL);
    adDiv.setAttribute("data-img", this.Img);
    adDiv.setAttribute("data-id", adID);
    // adDiv.setAttribute("onclick", "window.open('" + this.URL + "')");
    adDiv.innerHTML = "<img src='" + this.Img + "' /></div>";

    adDiv.onclick = function() {
        window.open(URL);
    };

    adPlaceDiv.appendChild(adDiv);

    adID++;
}
// ----------------------------------------------------------

// ----------------------------------------------------------
// Set Data [DOM]
getID('Head_title').innerHTML = getID('title').innerHTML = scriptName;
getID('Head_meta_desc').setAttribute("content", 'Primo Startup Browsing Page | Your Browsing Homepage - Your gate to the internet.');
getID('Head_meta_key').setAttribute("content", getID('Head_meta_desc').getAttribute("content").replace(/-/g, "").replace(/\|/g, "").replace(/,/g, "").replace(/ /g, ", "));
getID('scriptName').innerHTML = scriptName + ' Script';
getID('scriptName').href = 'https://github.com/m-primo/psbp';
getID('scriptVersion').innerHTML = currentVersion;
getID('versionName').innerHTML = getID('descr').innerHTML = versionName;
getID('currentYear').innerHTML = (new Date()).getFullYear();
// ----------------------------------------------------------

// ----------------------------------------------------------
// Sites
new Site("Google", "https://google.com", "g.jpg");
new Site("Facebook", "https://facebook.com", "fb.png");
new Site("Twitter", "https://twitter.com", "tw.png");
new Site("LinkedIn", "https://www.linkedin.com", "li.webp");
new Site("Reddit", "https://reddit.com", "rdi.png");
new Site("MeWe", "https://mewe.com/", "mewe.png");
new Site("Gab", "https://gab.com/", "gab.png");
new Site("Parler", "https://parler.com/", "parler.png");
new Site("Tumblr", "https://tumblr.com", "tumblr.png");
new Site("Medium", "https://medium.com", "medium.png");
new Site("Quora", "https://www.quora.com", "qra.png");
new Site("Pinterest", "https://www.pinterest.com", "pt.png");
new Site("Instagram", "https://instagram.com", "ig.png");
new Site("YouTube", "https://youtube.com", "yt.png");
new Site("SoundCloud", "https://soundcloud.com", "sc.png");
new Site("WhatsApp", "https://web.whatsapp.com", "wa.png");
new Site("Telegram", "https://web.telegram.org", "teleg.jpg");
new Site("Messenger", "https://www.messenger.com", "m.png");
new Site("Skype", "https://skype.com", "sp.png");
new Site("Gmail", "https://mail.google.com", "gm.png");
new Site("Play Store", "https://play.google.com", "gps.png");
new Site("G. Translate", "https://translate.google.com", "gt.png");
new Site("G. Maps", "https://maps.google.com", "gms.png");
new Site("Drive", "https://drive.google.com", "d.png");
new Site("WikiPedia", "https://wikipedia.com", "wp.png");
// ----------------------------------------------------------

// ----------------------------------------------------------
// Ads
new Ad("http://bit.ly/3i0CKiQ", "pb.png", 2);
new Ad("http://bit.ly/3602QyO", "doo.png", 2);
new Ad("http://bit.ly/38k7UgW", "vsv.png", 2);
new Ad("http://bit.ly/3dyXcFC", "mpm.png", 2);
// ----------------------------------------------------------