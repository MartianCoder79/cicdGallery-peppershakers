/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const state = {\n  title: 'CI/CD Gallery',\n  logo: 'logo-img',\n  search: 'Search'\n};\nconst template = state => {\n  return `\n    <header>${state.logo}</header>\n    <input>${state.search}</input>\n    <img src=\"https://picsum.photos/id/237/200/300\">\n  `;\n};\nconst render = (htmlString, el) => {\n  el.innerHTML = htmlString;\n};\nwindow.addEventListener('statechange', () => {\n  render(template(state), document.querySelector('#root'));\n  render(`<title>PepperShaking Image Gallery</title>`, document.querySelector('head'));\n});\nwindow.dispatchEvent(new Event('statechange'));\n\n//# sourceURL=webpack://cicdgallery-peppershakers/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;