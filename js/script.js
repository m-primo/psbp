/*
----------------------------------------------------------
An Open-Source Homepage Script
Developed by Primo
https://mp-primo.blogspot.com/primo
https://github.com/m-primo/psbp

V1: Primo Startup Browsing Page
V2: Your Browsing Homepage

MIT License
----------------------------------------------------------
*/

// ----------------------------------------------------------
// Initializations
var scriptName = 'Your Browsing Homepage';
var ns_scriptName = scriptName.replace(/ /g, "");
var currentVersion = 'V2.0';
// ----------------------------------------------------------

// ----------------------------------------------------------
// Functions
function getID(id) {
    return document.getElementById(id);
}

document.getElementsByName("q")[0].addEventListener("keyup", function(e) {
    e.preventDefault();
    if(e.keyCode === 13) {
        getID("searchBtn").click();
    }
});

function setFullDate() {
    var d = new Date();
    var n = d.toUTCString();
    getID("datetime").innerHTML = n;
} setFullDate(); setInterval(setFullDate, 1000);

function doSearch() {
    var qVal = document.getElementsByName("q")[0].value;
    var xVal;
    if(qVal != "") {
        if(qVal.startsWith("http://") || qVal.startsWith("https://")) {
            xVal = qVal;
        } else {
            xVal = "https://google.com/search?q=" + qVal + "&ie=UTF-8";
        }
        window.open("http://click-aduk.blogspot.com/click-ad?label=" + xVal + "&utm_source=" + ns_scriptName);
    }
}

boxID = 1;
function Site(Title, URL, Icon, externalIcon = false) {
    URL = "http://click-aduk.blogspot.com/click-ad?label=" + URL + "?utm_source=" + ns_scriptName;
    if(!externalIcon) {
        Icon = "img/site/" + Icon;
    }

    this.Title = Title;
    this.URL = URL;
    this.Icon = Icon;

    var boxDiv = document.createElement("div");
    boxDiv.setAttribute("class", "box");
    boxDiv.setAttribute("onclick", "window.open('" + this.URL + "')");
    boxDiv.setAttribute("title", this.Title);
    boxDiv.setAttribute("data-title", this.Title);
    boxDiv.setAttribute("data-url", this.URL);
    boxDiv.setAttribute("data-icon", this.Icon);
    boxDiv.setAttribute("data-id", boxID);

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
    if(Place == 1) {
        adPlaceDiv = getID("adsTop");
    } else if(Place == 2) {
        adPlaceDiv = getID("adsBottom");
    }
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
    adDiv.setAttribute("onclick", "window.open('" + this.URL + "')");
    adDiv.innerHTML = "<img src='" + this.Img + "' /></div>";

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
getID('createdYear').innerHTML = '2018';
getID('currentYear').innerHTML = (new Date()).getFullYear();
getID('devName').innerHTML = 'Primo';
getID('devName').href = 'https://mp-primo.blogspot.com/primo';
// ----------------------------------------------------------

// ----------------------------------------------------------
// Add Sites
new Site("Google", "https://google.com", "g.jpg");
new Site("Facebook", "https://facebook.com", "fb.png");
new Site("Twitter", "https://twitter.com", "tw.png");
new Site("YouTube", "https://youtube.com", "yt.png");
new Site("Instagram", "https://instagram.com", "ig.png");
new Site("SoundCloud", "https://soundcloud.com", "sc.png");
new Site("Google+", "https://plus.google.com", "gp.png");
new Site("WhatsApp", "https://whatsapp.com", "wa.png");
new Site("Messenger", "https://www.messenger.com", "m.png");
new Site("Skype", "https://skype.com", "sp.png");
new Site("Gmail", "https://mail.google.com", "gm.png");
new Site("Play Store", "https://play.google.com", "gps.png");
new Site("G. Translate", "https://translate.google.com", "gt.png");
new Site("G. Maps", "https://maps.google.com", "gms.png");
new Site("Drive", "https://drive.google.com", "d.png");
new Site("WikiPedia", "http://wikipedia.com", "wp.png");
// ----------------------------------------------------------

// ----------------------------------------------------------
// Add Ads
new Ad("https://primowarehouse.blogspot.com/2018/10/be-perfect-in-english.html", "beie.gif", 2);
new Ad("https://mp-primo.blogspot.com/vc1.0", "vc.gif", 2);
new Ad("https://adukmedia.blogspot.com/p/advertiser.html", "ad001.gif", 2);
new Ad("http://power-cpu.blogspot.com/p/blog-page_15.html#EgyTweetForSale", "et.gif", 2);
new Ad("https://primowarehouse.blogspot.com/2018/09/1-perfect-money-e-voucher.html", "ppcpm1.png", 2);
// ----------------------------------------------------------