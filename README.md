# Emacs Lisp Support for Prism.js

**Deprecation notice**: This implementation is poor, and a better work is being done at the repository of Prism.js. Please refer to [this thread](https://github.com/PrismJS/prism/pull/1297).

This repository contains the following things:

- Emacs Lisp language support for [Prism.js](http://prismjs.com/)
- [Dracula](https://draculatheme.com/) theme for Prism.js focusing on highlighting of the language

## Screenshots

![dash-functional](https://github.com/akirak/prism-emacs-lisp/blob/master/screenshots/dash-functional.png?raw=true)
![ghub](https://github.com/akirak/prism-emacs-lisp/blob/master/screenshots/ghub.png?raw=true)

## Installation

Download the following scripts:

- [Emacs Lisp support for Prism.js (minified)](https://raw.githubusercontent.com/akirak/prism-emacs-lisp/master/dist/prism-emacs.min.js)
- [Dracula theme for Prism.js (minified)](https://raw.githubusercontent.com/akirak/prism-emacs-lisp/master/dist/prism-dracula.min.css)

## Usage

To highlight code written in Emacs Lisp, you have to add `language-emacs` class to each `code`/`pre` tag. 

## License

[MIT License](LICENSE)
