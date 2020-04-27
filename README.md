# Primo Startup Browsing Page [Your Browsing Homepage]
### Your gate to the internet

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

## Live Preview:
### https://m-primo.github.io/psbp

## Usage:
### Add Sites:
Open [userSites.js](userSites.js), then add a code like the syntax bellow:
```javascript
new Site("Website Name", "full url with http or https", "iconname.ext");
```
Example
```javascript
new Site("Blogger", "https://blogger.com", "b.png");
```
**DO NOT FORGET TO ADD THE IMAGE IN THIS DIRECTORY: `img/site`.**

To add an external icon, just add `true` to the end, like the bellow:
```javascript
new Site("Website Name", "full url with http or https", "http://www.example.com/iconname.ext", true);
```
Just replace `http://www.example.com/iconname.ext` with the url.

### Edit Version Name:
Open [version.js](version.js), it will be like the code bellow:
```javascript
var versionName = 'Your version name';
```
Edit `Your version name` with any version name you want.

# Tasks
- [x] Update to V2.
- [x] Change the name.
- [x] Update README.
- [x] Update GIT files.
- [x] Announce.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Developed by
[Primo](https://mp-primo.blogspot.com/primo)
