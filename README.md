# Primo Startup Browsing Page [Your Browsing Homepage]
Your gate to the internet



## Why Primo Startup Browsing Page Script?
- 100% Open-source and free.
- Shortcut for your favorite websites.
- Your favourite and most used websites in one page.
- Native/Pure JavaScript.
- Files to edit/manage your favorite websites.
- One file to add a new website.
- Easy to customize by yourself without any programming knowledge.
- No hidden scripts.
- Dark & Light mode.
- Multiple search engines.
- Multiple custom versions.



## Live Preview:
https://m-primo.github.io/psbp/index.html



## Google Chrome Extension
https://chrome.google.com/webstore/detail/your-browsing-homepage/gankljibcichebamdgagnnncmnoacdmi



## Mozilla Firefox Extension
https://addons.mozilla.org/en-US/firefox/addon/your-browsing-homepage/



## Usage:
### Add Sites:
Open [userSites.js](userSites.js), then add a code like the syntax bellow:
```javascript
new Site("Website Name", "full url with http or https", "iconname.ext", "Description (you can leave it empty)");
```
For example, if you want to add Blogger:
```javascript
new Site("Blogger", "https://blogger.com", "b.png");
```
**DO NOT FORGET TO ADD THE IMAGE IN THIS DIRECTORY: `img/site`.**

To add an external icon, just add `true` at the end:

For example:
```javascript
new Site("Website Name", "full url with http or https", "http://www.example.com/iconname.ext", "Description (you can leave it empty)", true);
```
Just replace `http://www.example.com/iconname.ext` with the image url.


### Add Versions:
First: Create your userSites script file, and the name should be like this: `version_userSites.js`.

For example, if you want to name your version `personal`, so the script file name should be: `personal_userSites.js`.

Second: To show the homepage with your created version, you should add `?version=version` in the URL bar.
For the above example, you should add `?version=personal` in the URL bar, and it'll load your websites you added in `personal_userSites.js` file.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)

[License Details](LICENSE)