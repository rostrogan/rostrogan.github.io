/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../fonts/Exo2-Regular.woff2 */ "./src/assets/fonts/Exo2-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../fonts/Exo2-Regular.woff */ "./src/assets/fonts/Exo2-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../fonts/Merriweather-Bold.woff2 */ "./src/assets/fonts/Merriweather-Bold.woff2");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../fonts/Merriweather-Bold.woff */ "./src/assets/fonts/Merriweather-Bold.woff");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../fonts/Merriweather-Regular.woff2 */ "./src/assets/fonts/Merriweather-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../fonts/Merriweather-Regular.woff */ "./src/assets/fonts/Merriweather-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../fonts/NotoSans-Italic.woff2 */ "./src/assets/fonts/NotoSans-Italic.woff2");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../fonts/NotoSans-Italic.woff */ "./src/assets/fonts/NotoSans-Italic.woff");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../fonts/NotoSans-Regular.woff2 */ "./src/assets/fonts/NotoSans-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../fonts/NotoSans-Regular.woff */ "./src/assets/fonts/NotoSans-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../fonts/Roboto-Regular.woff2 */ "./src/assets/fonts/Roboto-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../fonts/Roboto-Regular.woff */ "./src/assets/fonts/Roboto-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../images/main-page/brands/child/slider-background.png */ "./src/assets/images/main-page/brands/child/slider-background.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
// Module
exports.push([module.i, ":root {\n  --color-black: black;\n  --color-cerulean: #009AD4;\n  --color-limed-spruce: #3D4D56;\n  --color-limed-spruce-a20: rgb(61, 77, 86, .2);\n  --color-malibu: #4ED0FF;\n  --color-mine-shaft: #333333;\n  --color-white: white;\n  --font-exo2-regular: Exo2-Regular;\n  --font-merriweather-bold: Merriweather-Bold;\n  --font-merriweather-regular: Merriweather-Regular;\n  --font-notosans-italic: NotoSans-Italic;\n  --font-notosans-regular: NotoSans-Regular;\n  --font-roboto-regular: Roboto-Regular;\n}\n\n.overflow--hidden {\n  overflow: hidden;\n}\n\n.background--malibu-gradient {\n  background: linear-gradient(352.78deg, #4ED0FF 0%, #009AD4 100%);\n}\n\n@font-face {\n  font-family: \"Exo2-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Merriweather-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Merriweather-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"NotoSans-Italic\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"NotoSans-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n.object--list {\n  max-width: 400px;\n}\n.object--list ::marker {\n  color: var(--color-malibu);\n}\n.object--list li {\n  margin: 16px 0;\n}\n\n.txt--legal {\n  color: var(---color-limed-spruce);\n  cursor: pointer;\n  font-family: var(--font-exo2-regular);\n  font-size: 15px;\n  line-height: 18px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.txt--legal:hover, .txt--legal-active {\n  color: var(--color-cerulean);\n  text-decoration: underline;\n  opacity: 1;\n}\n\n.txt--regular {\n  font-family: var(--font-exo2-regular);\n  font-size: 14px;\n  line-height: 17px;\n  color: var(--color-limed-spruce);\n  opacity: 0.5;\n}\na.txt--regular:hover, a.txt--regular-active {\n  color: var(--color-cerulean);\n  text-decoration: underline;\n  opacity: 1;\n}\n\n.txt--medium, .txt--medium-small, .txt--medium-small-dark, .txt--medium-dark {\n  color: var(--color-white);\n  font-family: var(--font-exo2-regular);\n  font-size: 18px;\n  line-height: 22px;\n}\n.txt--medium-dark {\n  color: var(--color-limed-spruce);\n}\n\n.txt--medium-small, .txt--medium-small-dark {\n  font-size: 18px;\n  line-height: 22px;\n}\n.txt--medium-small-dark {\n  color: var(--color-limed-spruce);\n}\n\n.txt--heading {\n  color: var(--color-cerulean);\n  font-family: var(--font-roboto-regular);\n  font-size: 33px;\n  line-height: 39px;\n  text-transform: uppercase;\n}\n\n.txt--heading-medium {\n  color: var(--color-white);\n  font-family: var(--font-merriweather-bold);\n  font-size: 24px;\n  line-height: 36px;\n}\n\n.txt--heading-small {\n  color: var(--color-malibu);\n  font-family: var(--font-merriweather-regular);\n  font-size: 22px;\n  line-height: 28px;\n  text-transform: uppercase;\n}\n\n.txt--subtitle {\n  color: var(--color-limed-spruce);\n  font-family: var(--font-notosans-italic);\n  font-size: 18px;\n  line-height: 25px;\n  opacity: 0.7;\n}\n\n.txt--ns-regular {\n  font-family: var(--font-notosans-regular);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--color-malibu);\n}\n\n.layout--container {\n  max-width: 1261px;\n  width: 100%;\n  margin: 0 auto;\n}\n.layout--container.main {\n  height: 100vh;\n}\n\n.swiper-container {\n  height: 180px;\n}\n\n.scroll--navigation {\n  right: unset;\n  left: 0;\n  transform: rotate(-90deg) translateY(75%);\n  top: -75%;\n}\n.scroll--navigation li a:before {\n  background: var(--color-mine-shaft);\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n}\n.scroll--navigation li a.active:before {\n  background-color: var(--color-malibu);\n  border-color: var(--color-malibu);\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n}\n.scroll--navigation li a.active + .scroll--navigation li a:before {\n  width: 6px;\n  height: 6px;\n}\n\n.scroll-section {\n  will-change: transform;\n}\n\n.scroll--screen {\n  left: 50% !important;\n  transform: translateX(-50%);\n}\n\n.scroll--screen-body {\n  height: calc(100% - 160px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.block--rounded, .block--rounded-medium, .block--rounded-medium img, .block--rounded-medium video, .block--rounded img, .block--rounded video {\n  border-radius: 5px 5px 5px 70px;\n  position: relative;\n}\n.block--rounded-medium {\n  border-bottom-left-radius: 50px;\n}\n.block--rounded-infinite:after {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  right: -99%;\n  background-color: inherit;\n}\n\n.circle--button-gradient {\n  background: radial-gradient(100% 100% at 100% 100%, #4ED0FF 0%, #009AD4 100%);\n  border-radius: 50%;\n  cursor: pointer;\n  height: 82px;\n  margin-right: 20px;\n  position: relative;\n  width: 82px;\n  z-index: 1;\n  display: block;\n  outline: none;\n}\n.circle--button-gradient:hover:before {\n  transform: translate(-50%, -50%) scale(1.15);\n}\n.circle--button-gradient:active:before {\n  transform: translate(-50%, -50%) scale(1.25);\n}\n.circle--button-gradient:before {\n  background-color: transparent;\n  border-radius: 50%;\n  border: 1px solid var(--color-cerulean);\n  content: \"\";\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.99);\n  transition: transform 300ms ease;\n  width: 100%;\n  outline: none;\n}\n.circle--button-gradient:after {\n  background: radial-gradient(100% 100% at 100% 100%, #009AD4 0%, #4ED0FF 100%);\n  border-radius: 50%;\n  content: \"\";\n  height: 75%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 75%;\n  outline: none;\n}\n.circle--button-gradient span {\n  background: radial-gradient(100% 100% at 100% 100%, #4ED0FF 0%, #009AD4 100%);\n  border-radius: 50%;\n  height: 70%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n  z-index: 1;\n  outline: none;\n}\n.circle--button-gradient span:before {\n  border: 2px solid var(--color-white);\n  border-bottom: none;\n  border-left: none;\n  content: \"\";\n  height: 8px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform-origin: center;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 8px;\n}\n.circle--button-gradient.size--medium {\n  height: 53px;\n  width: 53px;\n}\n.circle--button-gradient.size--medium:after {\n  height: 80%;\n  width: 80%;\n}\n.circle--button-gradient.direction--left span:before {\n  height: 6px;\n  transform: translate(-50%, -50%) rotate(225deg);\n  width: 6px;\n}\n\n.slider--button-arrow {\n  width: 54px;\n  height: 54px;\n  position: relative;\n  border: 2px solid var(--color-cerulean);\n  border-radius: 50%;\n  cursor: pointer;\n  background: var(--color-white);\n}\n.slider--button-arrow:before {\n  border: 2px solid var(--color-cerulean);\n  border-bottom: none;\n  border-left: none;\n  content: \"\";\n  height: 8px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform-origin: center;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 8px;\n}\n.slider--button-arrow:after {\n  background-color: transparent;\n  border-radius: 50%;\n  border: 1px solid var(--color-cerulean);\n  content: \"\";\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(1);\n  transition: transform 300ms ease;\n  width: 100%;\n}\n.slider--button-arrow:hover:after {\n  transform: translate(-50%, -50%) scale(1.2);\n}\n.slider--button-arrow:active {\n  background: radial-gradient(85.13% 85.13% at 0% 100%, #4ED0FF 0%, #009AD4 100%);\n}\n.slider--button-arrow:active:before {\n  border-color: var(--color-white);\n}\n.slider--button-arrow:active:after {\n  transform: translate(-50%, -50%) scale(1.35);\n}\n.slider--button-arrow.arrow-prev:before {\n  transform: translate(-50%, -50%) rotate(225deg);\n}\n\n.slider--dots {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n.slider--dots li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.slider--dots li button {\n  background: var(--color-mine-shaft);\n  width: 12px;\n  height: 12px;\n  cursor: pointer;\n  border-radius: 50%;\n  font-size: 0;\n  border: none;\n  margin-left: 10px;\n  transform: scale(0.5);\n  outline: none;\n}\n.slider--dots li.slick-active button {\n  transform: scale(0.9);\n  background: var(--color-cerulean);\n}\n\n.slider--dots-arrow {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  margin-left: 50px;\n  cursor: pointer;\n}\n.slider--dots-arrow:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 8px;\n  height: 8px;\n  border: 1px solid var(--color-black);\n  border-bottom: none;\n  border-left: none;\n}\n.slider--dots-arrow-prev {\n  margin-left: 0;\n  margin-right: 50px;\n}\n.slider--dots-arrow-prev:before {\n  transform: translate(-50%, -50%) rotate(225deg);\n}\n\n.custom--scrollbar::-webkit-scrollbar {\n  width: 10px;\n  z-index: 100;\n}\n.custom--scrollbar::-webkit-scrollbar:horizontal {\n  display: none;\n}\n.custom--scrollbar::-webkit-scrollbar-track {\n  background-color: #C4C4C4;\n  border: 4px solid transparent;\n  background-clip: content-box;\n}\n.custom--scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--color-malibu);\n  border-radius: 9px;\n  border: 6px solid #4ED0FF;\n  background-clip: content-box;\n}\n\n.component--footer {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  height: 80px;\n  justify-content: space-around;\n  left: 50%;\n  position: fixed;\n  transform: translateX(-50%);\n}\n.component--footer:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  background-color: var(--color-white);\n  z-index: 1;\n}\n.component--footer div, .component--footer img {\n  z-index: 1;\n}\n\n.footer--controls {\n  height: 50px;\n  position: relative;\n  width: 50px;\n}\n\n.footer--text {\n  align-items: center;\n  display: inline-flex;\n  margin-left: auto;\n}\n.footer--text p, .footer--text a {\n  margin-left: 50px;\n}\n.footer--text p:first-child {\n  margin-left: 0;\n}\n\n.footer--scroll-button {\n  -webkit-user-drag: none;\n  border-radius: 50%;\n  cursor: pointer;\n  left: -50%;\n  position: absolute;\n  top: 0;\n  user-select: none;\n}\n\n.component--header {\n  height: 80px;\n  display: flex;\n  align-items: center;\n  background-color: var(--color-white);\n}\n.component--header:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  background-color: var(--color-white);\n  z-index: 1;\n}\n.component--header div, .component--header img {\n  z-index: 1;\n}\n\n.header--menu {\n  display: flex;\n  margin-left: 155px;\n}\n\n.header--menu-item {\n  margin-left: 50px;\n}\n.header--menu-item:first-child {\n  margin-left: 0;\n}\n\n.header--controls {\n  margin-left: auto;\n  display: flex;\n}\n.header--controls-search {\n  margin-right: 42px;\n}\n\n.header--logo {\n  display: flex;\n  height: 40px;\n  transition: all 300ms ease-in-out;\n}\n.header--logo:hover .header--logo-group img:first-child, .header--logo:hover .header--logo-group img:last-child {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header--logo-group {\n  position: relative;\n  width: 45px;\n  height: 45px;\n  margin-right: 10px;\n}\n.header--logo-group img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.header--logo-group img:first-child {\n  top: -25%;\n  left: 50%;\n  transform: translate(-50%, 25%);\n}\n.header--logo-group img:last-child {\n  top: 50%;\n  left: -25%;\n  transform: translate(25%, -50%);\n}\n\n.main--screen-third {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.main--screen-third-heading {\n  margin-left: 300px;\n}\n\n.item--child-header {\n  margin-left: 300px;\n  display: flex;\n  align-items: center;\n  margin-top: 27px;\n}\n\n.item--child-heading-background {\n  max-width: 410px;\n  min-width: 410px;\n  padding: 27px 0 27px;\n  text-align: center;\n}\n\n.item--child-button {\n  display: flex;\n  align-items: center;\n  margin-left: 190px;\n}\n\n.item--child-body {\n  width: 56.5%;\n  position: relative;\n  height: 420px;\n}\n\n.slider--child-wrapper {\n  position: absolute;\n  top: 130px;\n  width: 135%;\n  right: -11%;\n}\n\n.slider--child-item {\n  height: 150px;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n}\n\n.item--background-dash {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  border-radius: 50%;\n  border-top-left-radius: unset;\n  height: 322px;\n  position: absolute;\n  right: 0;\n  top: 42px;\n  width: 322px;\n}\n\n.slider--child-arrow-next, .slider--child-arrow-prev {\n  position: absolute;\n  top: 50%;\n  z-index: 10;\n}\n.slider--child-arrow-next {\n  right: -20%;\n  transform: translate(20%, -50%);\n}\n.slider--child-arrow-prev {\n  left: 30%;\n  transform: translate(-30%, -50%);\n}\n\n.slider--child-dots {\n  position: absolute;\n  bottom: -85%;\n  left: 75%;\n  transform: translate(-75%, 85%);\n}\n\n.item--adult-button {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\n\n.item--adult-body {\n  display: flex;\n  align-items: center;\n}\n\n.slider--adult-image-wrapper {\n  max-width: 300px;\n  margin-left: auto;\n}\n.slider--adult-image-item {\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n}\n\n.slider--adult-dots {\n  justify-content: center;\n  padding-left: 0;\n}\n\n.slider--adult-text-wrapper {\n  max-width: 500px;\n}\n\n.slider--adult-text-item .item--title {\n  margin-bottom: 20px;\n}\n.slider--adult-text-item .item--subtitle {\n  margin-bottom: 30px;\n  max-width: 50%;\n}\n.slider--adult-text-item .item--description {\n  margin-bottom: 20px;\n  max-width: 90%;\n}\n.slider--adult-text-item .item--list {\n  max-height: 250px;\n  overflow-x: scroll;\n  padding-right: 10px;\n}\n\n.slider--adult-text-item {\n  outline: none;\n}\n\n.main--screen-first,\n.main--screen-second {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.main--video {\n  max-width: 962px;\n}\n\n.main--screen-second .block--rounded, .main--screen-second .block--rounded img, .block--rounded .main--screen-second img, .main--screen-second .block--rounded video, .block--rounded .main--screen-second video, .main--screen-second .block--rounded-medium, .main--screen-second .block--rounded-medium img, .block--rounded-medium .main--screen-second img, .main--screen-second .block--rounded-medium video, .block--rounded-medium .main--screen-second video {\n  background-color: var(--color-cerulean);\n  width: 100%;\n  height: 100%;\n  max-height: 480px;\n}\n.main--screen-second .blocks--container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 962px;\n}\n.main--screen-second .blocks--container-group {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n}\n.main--screen-second .block--item {\n  display: flex;\n  align-items: center;\n}\n.main--screen-second .block--item .block--item-icon {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 40px;\n}\n.main--screen-second .block--item .block--item-icon img {\n  width: auto;\n  height: auto;\n  border-radius: unset;\n}\n.main--screen-second .block--item .block--item-text {\n  max-width: 250px;\n}\n\n.main--screen-fourth {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.main--screen-fourth-heading {\n  margin-left: 350px;\n}\n.main--screen-fourth-heading-background {\n  padding: 27px 50px;\n  width: max-content;\n  margin-top: 56px;\n}\n.main--screen-fourth-body {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n.main--screen-fourth-body .body--item {\n  width: 50%;\n  height: 100%;\n  position: relative;\n}\n.main--screen-fourth-body-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 50px;\n}\n.main--screen-fourth-body-content .content--item {\n  width: 50%;\n}\n.main--screen-fourth .buttons--container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n.main--screen-fourth .buttons--container-item {\n  display: flex;\n  margin-bottom: 70px;\n  align-items: center;\n}\n.main--screen-fourth .buttons--container-item:last-child {\n  margin-bottom: 0;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/scss/vendor/onepagescroll.min.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/scss/vendor/onepagescroll.min.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body,html{margin:0;overflow:hidden;-webkit-transition:opacity .4s;-moz-transition:opacity .4s;transition:opacity .4s}.onepage-wrapper,body,html{display:block;position:static;padding:0;width:100%;height:100%}.onepage-wrapper{width:100%;height:100%;display:block;position:relative;padding:0;-webkit-transform-style:preserve-3d}.onepage-wrapper .section{width:100%;height:100%}.onepage-pagination{position:absolute;right:10px;top:50%;z-index:5;list-style:none;margin:0;padding:0}.onepage-pagination li{padding:0;text-align:center}.onepage-pagination li a{padding:10px;width:4px;height:4px;display:block}.onepage-pagination li a:before{content:'';position:absolute;width:4px;height:4px;background:rgba(0,0,0,.85);border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px}.onepage-pagination li a.active:before{width:10px;height:10px;background:0 0;border:1px solid #000;margin-top:-4px;left:8px}.disabled-onepage-scroll,.disabled-onepage-scroll .wrapper{overflow:auto}.disabled-onepage-scroll .onepage-wrapper .section{position:relative!important;top:auto!important;left:auto!important}.disabled-onepage-scroll .onepage-wrapper{-webkit-transform:none!important;-moz-transform:none!important;transform:none!important;-ms-transform:none!important;min-height:100%}.disabled-onepage-scroll .onepage-pagination{display:none}.disabled-onepage-scroll .onepage-wrapper,body.disabled-onepage-scroll,html{position:inherit}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/scss/vendor/slick-slider.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/scss/vendor/slick-slider.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Slider */\r\n.slick-slider {\r\n    position: relative;\r\n\r\n    display: block;\r\n    box-sizing: border-box;\r\n\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n\r\n    -webkit-touch-callout: none;\r\n    -khtml-user-select: none;\r\n    -ms-touch-action: pan-y;\r\n    touch-action: pan-y;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.slick-list {\r\n    position: relative;\r\n\r\n    display: block;\r\n    overflow: hidden;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.slick-list:focus {\r\n    outline: none;\r\n}\r\n\r\n.slick-list.dragging {\r\n    cursor: pointer;\r\n    cursor: hand;\r\n}\r\n\r\n.slick-slider .slick-track,\r\n.slick-slider .slick-list {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    -moz-transform: translate3d(0, 0, 0);\r\n    -ms-transform: translate3d(0, 0, 0);\r\n    -o-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.slick-track {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.slick-track:before,\r\n.slick-track:after {\r\n    display: table;\r\n\r\n    content: '';\r\n}\r\n\r\n.slick-track:after {\r\n    clear: both;\r\n}\r\n\r\n.slick-loading .slick-track {\r\n    visibility: hidden;\r\n}\r\n\r\n.slick-slide {\r\n    display: none;\r\n    float: left;\r\n\r\n    height: 100%;\r\n    min-height: 1px;\r\n}\r\n\r\n[dir='rtl'] .slick-slide {\r\n    float: right;\r\n}\r\n\r\n.slick-slide img {\r\n    display: block;\r\n}\r\n\r\n.slick-slide.slick-loading img {\r\n    display: none;\r\n}\r\n\r\n.slick-slide.dragging img {\r\n    pointer-events: none;\r\n}\r\n\r\n.slick-initialized .slick-slide {\r\n    display: block;\r\n}\r\n\r\n.slick-loading .slick-slide {\r\n    visibility: hidden;\r\n}\r\n\r\n.slick-vertical .slick-slide {\r\n    display: block;\r\n    height: auto;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.slick-arrow.slick-hidden {\r\n    display: none;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/fonts/Exo2-Regular.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Exo2-Regular.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a7875a9d6449e198acde5a87cee0d12.woff");

/***/ }),

/***/ "./src/assets/fonts/Exo2-Regular.woff2":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Exo2-Regular.woff2 ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "04d5d2cc77051aaac4c3adb42f95b036.woff2");

/***/ }),

/***/ "./src/assets/fonts/Merriweather-Bold.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Merriweather-Bold.woff ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7d4c380d9b3121d4d03407d3ccae65ab.woff");

/***/ }),

/***/ "./src/assets/fonts/Merriweather-Bold.woff2":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Merriweather-Bold.woff2 ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ce0e554c627770c8331c15a2a021aa83.woff2");

/***/ }),

/***/ "./src/assets/fonts/Merriweather-Regular.woff":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Merriweather-Regular.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d726369f48c3d1e2d797b79f051bfc9.woff");

/***/ }),

/***/ "./src/assets/fonts/Merriweather-Regular.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/Merriweather-Regular.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85ec059fa7963d60fef98c2707ef186b.woff2");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Italic.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/NotoSans-Italic.woff ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6eb494d657f60b75039f4282ebefb623.woff");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Italic.woff2":
/*!************************************************!*\
  !*** ./src/assets/fonts/NotoSans-Italic.woff2 ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "223f20e1968615341efa7f9a8f817417.woff2");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Regular.woff":
/*!************************************************!*\
  !*** ./src/assets/fonts/NotoSans-Regular.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0df68d9a09b0c3fdd772e303546c20f9.woff");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Regular.woff2":
/*!*************************************************!*\
  !*** ./src/assets/fonts/NotoSans-Regular.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5ebd9a6f14a57e7ac492cc8490e1a4b3.woff2");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c39bf2d483459594258601ab9c48e27c.woff");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.woff2 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "df4e2e405f2131a001790de8e717088d.woff2");

/***/ }),

/***/ "./src/assets/images/main-page/brands/child/slider-background.png":
/*!************************************************************************!*\
  !*** ./src/assets/images/main-page/brands/child/slider-background.png ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d62477e3e1dcd9cc2f6a2834aa013663.png");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/scss/vendor/onepagescroll.min.css":
/*!******************************************************!*\
  !*** ./src/assets/scss/vendor/onepagescroll.min.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./onepagescroll.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/scss/vendor/onepagescroll.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/scss/vendor/slick-slider.css":
/*!*************************************************!*\
  !*** ./src/assets/scss/vendor/slick-slider.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./slick-slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/scss/vendor/slick-slider.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/consts/classNamesList.js":
/*!**************************************!*\
  !*** ./src/consts/classNamesList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const classNamesList = {
    BRANDS_ADULT_SLIDER_DOTS_CLASSNAME: 'slider--adult-dots',
    BRANDS_CHILD_SLIDER_DOTS_CLASSNAME: 'slider--child-dots',
    CONTROL_OVERFLOW_HIDDEN_CLASSNAME: 'overflow--hidden',
    HEADER_MENU_ITEM_CLASSNAME: 'header--menu-item',
    SCROLL_NAVIGATION_CLASSNAME: 'scroll--navigation',
    SLICK_SLIDER_DOTS_LIB_CLASSNAME: 'slick-dots',
    SLIDER_ADULT_DOTS_ARROW_NEXT_CLASSNAME: 'slider--dots-arrow-next-adult',
    SLIDER_CHILD_DOTS_ARROW_NEXT_CLASSNAME: 'slider--dots-arrow-next-child',
    SLIDER_ADULT_DOTS_ARROW_PREV_CLASSNAME: 'slider--dots-arrow-prev-adult',
    SLIDER_CHILD_DOTS_ARROW_PREV_CLASSNAME: 'slider--dots-arrow-prev-child',
    SLIDER_DOTS_ARROW_CLASSNAME: 'slider--dots-arrow',
    SLIDER_DOTS_ARROW_NEXT_CLASSNAME: 'slider--dots-arrow-next',
    SLIDER_DOTS_ARROW_PREV_CLASSNAME: 'slider--dots-arrow-prev',
    SLIDER_DOTS_CLASSNAME: 'slider--dots',
    TXT_LEGAL_ACTIVE_CLASSNAME: 'txt--legal-active',
};

/* harmony default export */ __webpack_exports__["default"] = (classNamesList);


/***/ }),

/***/ "./src/consts/selectorsList.js":
/*!*************************************!*\
  !*** ./src/consts/selectorsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const selectorsList = {
    BRANDS_CHILD_SECTION_BODY_CLASSNAME_SELECTOR: '.item--child-body',
    BRANDS_CHILD_SLIDER_ARROW_NEXT_CLASSNAME_SELECTOR: '.slider--child-arrow-next',
    BRANDS_CHILD_SLIDER_ARROW_PREV_CLASSNAME_SELECTOR: '.slider--child-arrow-prev',
    BRANDS_CHILD_SLIDER_BACK_BUTTON_CLASSNAME_SELECTOR: '.item--adult-button',
    BRANDS_CHILD_SLIDER_DOTS_CLASSNAME_SELECTOR: '.slider--child-dots',
    BRANDS_ADULT_SLIDER_DOTS_CLASSNAME_SELECTOR: '.slider--adult-dots',
    BRANDS_CHILD_SLIDER_TO_ADULT_BUTTON_CLASSNAME_SELECTOR: '.item--child-button',
    FOOTER_CONTROLS_CLASSNAME_SELECTOR: '.footer--controls',
    FOOTER_COPYRIGHT_YEAR_ID_SELECTOR: '#footer-copyright',
    MAIN_PAGE_BRANDS_ADULT_IMAGE_SLIDER_CLASSNAME_SELECTOR: '.slider--adult-image-wrapper',
    MAIN_PAGE_BRANDS_ADULT_TEXT_SLIDER_CLASSNAME_SELECTOR: '.slider--adult-text-wrapper',
    MAIN_PAGE_BRANDS_CHILD_SLIDER_CLASSNAME_SELECTOR: '.slider--child-wrapper',
    MAIN_PAGE_BRANDS_SLIDER_CLASSNAME_SELECTOR: '.brands--slider-wrapper',
    SCROLL_BUTTON_CLASSNAME_SELECTOR: '.footer--scroll-button',
    SCROLL_NAVIGATION_CLASSNAME_SELECTOR: '.onepage-pagination',
    SCROLL_SECTION_CLASSNAME_SELECTOR: 'section',
    SCROLL_WRAPPER_CLASSNAME_SELECTOR: '.scroll-section',
    SLIDER_DOTS_ARROW_NEXT_CLASSNAME_SELECTOR: '.slider--dots-arrow-next',
    SLIDER_CHILD_DOTS_ARROW_NEXT_CLASSNAME_SELECTOR: '.slider--dots-arrow-next-child',
    SLIDER_ADULT_DOTS_ARROW_NEXT_CLASSNAME_SELECTOR: '.slider--dots-arrow-next-adult',
    SLIDER_DOTS_ARROW_PREV_CLASSNAME_SELECTOR: '.slider--dots-arrow-prev',
    SLIDER_CHILD_DOTS_ARROW_PREV_CLASSNAME_SELECTOR: '.slider--dots-arrow-prev-child',
    SLIDER_ADULT_DOTS_ARROW_PREV_CLASSNAME_SELECTOR: '.slider--dots-arrow-prev-adult',
};

/* harmony default export */ __webpack_exports__["default"] = (selectorsList);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_vendor_onepagescroll_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/vendor/onepagescroll.min.css */ "./src/assets/scss/vendor/onepagescroll.min.css");
/* harmony import */ var _assets_scss_vendor_onepagescroll_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_vendor_onepagescroll_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_scss_vendor_slick_slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/vendor/slick-slider.css */ "./src/assets/scss/vendor/slick-slider.css");
/* harmony import */ var _assets_scss_vendor_slick_slider_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_vendor_slick_slider_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_layoutService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/layoutService */ "./src/services/layoutService.js");







window.onload = () => {
    console.log('*** Application started ***');

    _services_layoutService__WEBPACK_IMPORTED_MODULE_3__["default"].initialize();
}


/***/ }),

/***/ "./src/services/domService.js":
/*!************************************!*\
  !*** ./src/services/domService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getElementsByClassName = (className) => {
    if (className) {
        return [...document.getElementsByClassName(className)];
    }
}

const getElementsBySelector = (selector, isSingleElement = 0) => {
    if (selector) {
        return isSingleElement
            ? document.querySelector(selector)
            : document.querySelectorAll(selector);
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    getElementsByClassName,
    getElementsBySelector,
});


/***/ }),

/***/ "./src/services/layoutService.js":
/*!***************************************!*\
  !*** ./src/services/layoutService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageServices_footerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageServices/footerService */ "./src/services/pageServices/footerService.js");
/* harmony import */ var _pageServices_headerMenuService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageServices/headerMenuService */ "./src/services/pageServices/headerMenuService.js");
/* harmony import */ var _pageServices_mainPageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageServices/mainPageService */ "./src/services/pageServices/mainPageService.js");
/* harmony import */ var _pageServices_pageScrollingService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageServices/pageScrollingService */ "./src/services/pageServices/pageScrollingService.js");





const initialize = () => {
    _pageServices_footerService__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
    _pageServices_headerMenuService__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
    _pageServices_pageScrollingService__WEBPACK_IMPORTED_MODULE_3__["default"].initialize();

    _pageServices_mainPageService__WEBPACK_IMPORTED_MODULE_2__["default"].initialize();
};

/* harmony default export */ __webpack_exports__["default"] = ({
    initialize,
});


/***/ }),

/***/ "./src/services/pageServices/footerService.js":
/*!****************************************************!*\
  !*** ./src/services/pageServices/footerService.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domService */ "./src/services/domService.js");
/* harmony import */ var _consts_selectorsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts/selectorsList */ "./src/consts/selectorsList.js");



const initialize = () => {
    setFooterCopyrightYear();
};

const setFooterCopyrightYear = () => {
    const yearField = _domService__WEBPACK_IMPORTED_MODULE_0__["default"].getElementsBySelector(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_1__["default"].FOOTER_COPYRIGHT_YEAR_ID_SELECTOR, true);

    const currentYear = new Date().getFullYear();

    if (yearField) {
        yearField.innerHTML = currentYear;
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    initialize,
});


/***/ }),

/***/ "./src/services/pageServices/headerMenuService.js":
/*!********************************************************!*\
  !*** ./src/services/pageServices/headerMenuService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts/classNamesList */ "./src/consts/classNamesList.js");
/* harmony import */ var _domService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domService */ "./src/services/domService.js");



const initialize = () => {
    setActiveLink();
    setCurrentLanguage();
};

const setActiveLink = () => {
    const menuButtons = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsByClassName(_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].HEADER_MENU_ITEM_CLASSNAME);

    if (menuButtons) {
        menuButtons.forEach((element) => {
            const {href} = element || {};
            const currentHref = window.location.href;

            if (href === currentHref) {
                element.classList.add(_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].TXT_LEGAL_ACTIVE_CLASSNAME);
            }
        });
    }
}

const setCurrentLanguage = () => {
    const UK_LANG_CODE = 'UK';
    const EN_LANG_CODE = 'EN';
    const locationHref = location.href;

    const isEmptyHrefEnd = locationHref.lastIndexOf('/');
    const isHrefConsistUKLanguageCode = locationHref.match(/uk/);

    const isUKLanguageSelected = isEmptyHrefEnd || isHrefConsistUKLanguageCode;
};

/* harmony default export */ __webpack_exports__["default"] = ({
    initialize,
});


/***/ }),

/***/ "./src/services/pageServices/mainPageService.js":
/*!******************************************************!*\
  !*** ./src/services/pageServices/mainPageService.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts/classNamesList */ "./src/consts/classNamesList.js");
/* harmony import */ var _domService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domService */ "./src/services/domService.js");
/* harmony import */ var _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts/selectorsList */ "./src/consts/selectorsList.js");




const initialize = () => {
    setupBrandsSlider();
    setupChildBrandsSlider();
    setupAdultBrandsSliders();
};

const setupBrandsSlider = () => {
    const slider = $(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_PAGE_BRANDS_SLIDER_CLASSNAME_SELECTOR);

    if (slider.length) {
        slider.slick({
            slidesToShow: 1,
            initialSlide: 2,
            accessibility: false,
            dots: false,
            arrows: false,
            draggable: false,
        });

        const adultButtonsNodeList = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].BRANDS_CHILD_SLIDER_TO_ADULT_BUTTON_CLASSNAME_SELECTOR);
        const backButtonsNodeList = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].BRANDS_CHILD_SLIDER_BACK_BUTTON_CLASSNAME_SELECTOR);

        if (adultButtonsNodeList.length) {
            adultButtonsNodeList.forEach((element) => {
                const elementChildrenCollection = [...element.children];

                if (elementChildrenCollection.length) {
                    elementChildrenCollection.forEach((children) => {
                        children.onclick = () => {
                            slider.slick('slickPrev');
                        };
                    })
                }
            });
        }

        if (backButtonsNodeList.length) {
            backButtonsNodeList.forEach((element) => {
                const elementChildrenCollection = [...element.children];

                if (elementChildrenCollection.length) {
                    elementChildrenCollection.forEach((children) => {
                        children.onclick = () => {
                            slider.slick('slickNext');
                        };
                    })
                }
            });
        }
    }
};

const setupChildBrandsSlider = () => {
    const slider = $(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_PAGE_BRANDS_CHILD_SLIDER_CLASSNAME_SELECTOR);

    if (slider.length) {
        slider.slick({
            slidesToShow: 2,
            accessibility: false,
            dots: true,
            arrows: false,
            dotsClass: `${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLICK_SLIDER_DOTS_LIB_CLASSNAME} 
            ${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_DOTS_CLASSNAME} 
            ${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].BRANDS_CHILD_SLIDER_DOTS_CLASSNAME}`,
        });

        setSliderDotsClass(
            _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].BRANDS_CHILD_SLIDER_DOTS_CLASSNAME_SELECTOR,
            _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_CHILD_DOTS_ARROW_PREV_CLASSNAME,
            _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_CHILD_DOTS_ARROW_NEXT_CLASSNAME,
        );

        setPrevNextButtonsClickEventListener(
            slider,
            [_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].BRANDS_CHILD_SLIDER_ARROW_PREV_CLASSNAME_SELECTOR, _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SLIDER_CHILD_DOTS_ARROW_PREV_CLASSNAME_SELECTOR],
            [_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].BRANDS_CHILD_SLIDER_ARROW_NEXT_CLASSNAME_SELECTOR, _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SLIDER_CHILD_DOTS_ARROW_NEXT_CLASSNAME_SELECTOR]
        );
    }
};

const setupAdultBrandsSliders = () => {
    const imageSlider = $(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_PAGE_BRANDS_ADULT_IMAGE_SLIDER_CLASSNAME_SELECTOR);

    if (imageSlider.length) {
        imageSlider.slick({
            slidesToShow: 1,
            accessibility: false,
            arrows: false,
            dots: true,
            asNavFor: _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_PAGE_BRANDS_ADULT_TEXT_SLIDER_CLASSNAME_SELECTOR,
            dotsClass: `${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLICK_SLIDER_DOTS_LIB_CLASSNAME} 
            ${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_DOTS_CLASSNAME} 
            ${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].BRANDS_ADULT_SLIDER_DOTS_CLASSNAME}`,
        });

        setSliderDotsClass(
            _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].BRANDS_ADULT_SLIDER_DOTS_CLASSNAME_SELECTOR,
            _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_ADULT_DOTS_ARROW_PREV_CLASSNAME,
            _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_ADULT_DOTS_ARROW_NEXT_CLASSNAME,
        );

        setPrevNextButtonsClickEventListener(
            imageSlider,
            [_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SLIDER_ADULT_DOTS_ARROW_PREV_CLASSNAME_SELECTOR],
            [_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SLIDER_ADULT_DOTS_ARROW_NEXT_CLASSNAME_SELECTOR]
        );

        const textSlider = $(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_PAGE_BRANDS_ADULT_TEXT_SLIDER_CLASSNAME_SELECTOR);

        if (textSlider.length) {
            textSlider.slick({
                slidesToShow: 1,
                accessibility: true,
                arrows: false,
                dots: false,
                draggable: false,
                speed: 0,
                asNavFor: _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_PAGE_BRANDS_ADULT_IMAGE_SLIDER_CLASSNAME_SELECTOR,
            });
        }
    }
};

const setPrevNextButtonsClickEventListener = (sliderInstance, prevButtonsSelectors, nextButtonsSelectors) => {
    const isEntryDataValid = sliderInstance && prevButtonsSelectors.length && nextButtonsSelectors.length;

    if (isEntryDataValid) {
        prevButtonsSelectors.forEach((selector) => {
            const elements = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(selector);

            elements.forEach((element) => {
                element.onclick = () => sliderInstance.slick('slickPrev');
            });
        });

        nextButtonsSelectors.forEach((selector) => {
            const elements = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(selector);

            elements.forEach((element) => {
                element.onclick = () => sliderInstance.slick('slickNext');
            });
        });
    }
};

const setSliderDotsClass = (dotsSelector,  buttonPrevClass, buttonNextClass) => {
    const dots = $(dotsSelector);

    if (dots) {
        dots.append(`<div 
            class="${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_DOTS_ARROW_CLASSNAME} ${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_DOTS_ARROW_NEXT_CLASSNAME} ${buttonNextClass}">
            </div>`);
        dots.prepend(`<div 
            class="${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_DOTS_ARROW_CLASSNAME} ${_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SLIDER_DOTS_ARROW_PREV_CLASSNAME} ${buttonPrevClass}">
            </div>`);
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    initialize,
});


/***/ }),

/***/ "./src/services/pageServices/pageScrollingService.js":
/*!***********************************************************!*\
  !*** ./src/services/pageServices/pageScrollingService.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts/classNamesList */ "./src/consts/classNamesList.js");
/* harmony import */ var _domService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domService */ "./src/services/domService.js");
/* harmony import */ var _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts/selectorsList */ "./src/consts/selectorsList.js");




const CLICK_EVENT_NAME = 'click';

const initialize = () => {
    setupFullPageScrolling();
    setScrollButton();
    moveScrollNavigationBar();
};

const setupFullPageScrolling = () => {
    const OPSWrapper = $(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SCROLL_WRAPPER_CLASSNAME_SELECTOR);

    if (OPSWrapper) {
        OPSWrapper.onepage_scroll({
            sectionContainer: _consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SCROLL_SECTION_CLASSNAME_SELECTOR,
            loop: false,
            keyboard: false,
            updateURL: false,
        });
    }
};

const setScrollButton = () => {
    const scrollButton = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SCROLL_BUTTON_CLASSNAME_SELECTOR, true);

    if (scrollButton) {
        scrollButton.addEventListener(CLICK_EVENT_NAME, () => {
            const OPSInstance = $(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SCROLL_WRAPPER_CLASSNAME_SELECTOR);

            OPSInstance.moveDown();
        });
    }
};

const moveScrollNavigationBar = () => {
    const navigation = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].SCROLL_NAVIGATION_CLASSNAME_SELECTOR, true);

    if (navigation) {
        const appendTarget = _domService__WEBPACK_IMPORTED_MODULE_1__["default"].getElementsBySelector(_consts_selectorsList__WEBPACK_IMPORTED_MODULE_2__["default"].FOOTER_CONTROLS_CLASSNAME_SELECTOR, true);

        if (appendTarget) {
            navigation.classList.add(_consts_classNamesList__WEBPACK_IMPORTED_MODULE_0__["default"].SCROLL_NAVIGATION_CLASSNAME);
            appendTarget.appendChild(navigation);
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    initialize,
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Njc3MvdmVuZG9yL29uZXBhZ2VzY3JvbGwubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Njc3MvdmVuZG9yL3NsaWNrLXNsaWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL0V4bzItUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvRXhvMi1SZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvTWVycml3ZWF0aGVyLUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvTWVycml3ZWF0aGVyLVJlZ3VsYXIud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL01lcnJpd2VhdGhlci1SZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvTm90b1NhbnMtSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9Ob3RvU2Fucy1JdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9Ob3RvU2Fucy1SZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9Ob3RvU2Fucy1SZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL21haW4tcGFnZS9icmFuZHMvY2hpbGQvc2xpZGVyLWJhY2tncm91bmQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9tYWluLnNjc3M/OGVkZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Njc3MvdmVuZG9yL29uZXBhZ2VzY3JvbGwubWluLmNzcz80NWYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy92ZW5kb3Ivc2xpY2stc2xpZGVyLmNzcz9mZGM4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdHMvY2xhc3NOYW1lc0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cy9zZWxlY3RvcnNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZG9tU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbGF5b3V0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGFnZVNlcnZpY2VzL2Zvb3RlclNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BhZ2VTZXJ2aWNlcy9oZWFkZXJNZW51U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGFnZVNlcnZpY2VzL21haW5QYWdlU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcGFnZVNlcnZpY2VzL3BhZ2VTY3JvbGxpbmdTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVB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LHVCQUF1Qiw2REFBYTs7QUFFM0U7QUFDQSxxQ0FBcUMsOERBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLENBQUMiLCJmaWxlIjoiaW5kZXguYTNiODhmYTk1NzY5MDdhMTc0NDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vZm9udHMvRXhvMi1SZWd1bGFyLndvZmYyXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ZvbnRzL0V4bzItUmVndWxhci53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLndvZmYyXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4uL2ZvbnRzL01lcnJpd2VhdGhlci1Cb2xkLndvZmZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLi4vZm9udHMvTWVycml3ZWF0aGVyLVJlZ3VsYXIud29mZjJcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLi4vZm9udHMvTWVycml3ZWF0aGVyLVJlZ3VsYXIud29mZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IHJlcXVpcmUoXCIuLi9mb250cy9Ob3RvU2Fucy1JdGFsaWMud29mZjJcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSByZXF1aXJlKFwiLi4vZm9udHMvTm90b1NhbnMtSXRhbGljLndvZmZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSByZXF1aXJlKFwiLi4vZm9udHMvTm90b1NhbnMtUmVndWxhci53b2ZmMlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IHJlcXVpcmUoXCIuLi9mb250cy9Ob3RvU2Fucy1SZWd1bGFyLndvZmZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gcmVxdWlyZShcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmYyXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IHJlcXVpcmUoXCIuLi9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvbWFpbi1wYWdlL2JyYW5kcy9jaGlsZC9zbGlkZXItYmFja2dyb3VuZC5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3ItYmxhY2s6IGJsYWNrO1xcbiAgLS1jb2xvci1jZXJ1bGVhbjogIzAwOUFENDtcXG4gIC0tY29sb3ItbGltZWQtc3BydWNlOiAjM0Q0RDU2O1xcbiAgLS1jb2xvci1saW1lZC1zcHJ1Y2UtYTIwOiByZ2IoNjEsIDc3LCA4NiwgLjIpO1xcbiAgLS1jb2xvci1tYWxpYnU6ICM0RUQwRkY7XFxuICAtLWNvbG9yLW1pbmUtc2hhZnQ6ICMzMzMzMzM7XFxuICAtLWNvbG9yLXdoaXRlOiB3aGl0ZTtcXG4gIC0tZm9udC1leG8yLXJlZ3VsYXI6IEV4bzItUmVndWxhcjtcXG4gIC0tZm9udC1tZXJyaXdlYXRoZXItYm9sZDogTWVycml3ZWF0aGVyLUJvbGQ7XFxuICAtLWZvbnQtbWVycml3ZWF0aGVyLXJlZ3VsYXI6IE1lcnJpd2VhdGhlci1SZWd1bGFyO1xcbiAgLS1mb250LW5vdG9zYW5zLWl0YWxpYzogTm90b1NhbnMtSXRhbGljO1xcbiAgLS1mb250LW5vdG9zYW5zLXJlZ3VsYXI6IE5vdG9TYW5zLVJlZ3VsYXI7XFxuICAtLWZvbnQtcm9ib3RvLXJlZ3VsYXI6IFJvYm90by1SZWd1bGFyO1xcbn1cXG5cXG4ub3ZlcmZsb3ctLWhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYmFja2dyb3VuZC0tbWFsaWJ1LWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNTIuNzhkZWcsICM0RUQwRkYgMCUsICMwMDlBRDQgMTAwJSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFeG8yLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXItQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlci1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90b1NhbnMtSXRhbGljXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90b1NhbnMtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5vYmplY3QtLWxpc3Qge1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuLm9iamVjdC0tbGlzdCA6Om1hcmtlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFsaWJ1KTtcXG59XFxuLm9iamVjdC0tbGlzdCBsaSB7XFxuICBtYXJnaW46IDE2cHggMDtcXG59XFxuXFxuLnR4dC0tbGVnYWwge1xcbiAgY29sb3I6IHZhcigtLS1jb2xvci1saW1lZC1zcHJ1Y2UpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZXhvMi1yZWd1bGFyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnR4dC0tbGVnYWw6aG92ZXIsIC50eHQtLWxlZ2FsLWFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItY2VydWxlYW4pO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udHh0LS1yZWd1bGFyIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWV4bzItcmVndWxhcik7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMTdweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW1lZC1zcHJ1Y2UpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5hLnR4dC0tcmVndWxhcjpob3ZlciwgYS50eHQtLXJlZ3VsYXItYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jZXJ1bGVhbik7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50eHQtLW1lZGl1bSwgLnR4dC0tbWVkaXVtLXNtYWxsLCAudHh0LS1tZWRpdW0tc21hbGwtZGFyaywgLnR4dC0tbWVkaXVtLWRhcmsge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWV4bzItcmVndWxhcik7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG59XFxuLnR4dC0tbWVkaXVtLWRhcmsge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbWVkLXNwcnVjZSk7XFxufVxcblxcbi50eHQtLW1lZGl1bS1zbWFsbCwgLnR4dC0tbWVkaXVtLXNtYWxsLWRhcmsge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi50eHQtLW1lZGl1bS1zbWFsbC1kYXJrIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW1lZC1zcHJ1Y2UpO1xcbn1cXG5cXG4udHh0LS1oZWFkaW5nIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1jZXJ1bGVhbik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yb2JvdG8tcmVndWxhcik7XFxuICBmb250LXNpemU6IDMzcHg7XFxuICBsaW5lLWhlaWdodDogMzlweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi50eHQtLWhlYWRpbmctbWVkaXVtIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tZXJyaXdlYXRoZXItYm9sZCk7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG59XFxuXFxuLnR4dC0taGVhZGluZy1zbWFsbCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFsaWJ1KTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1lcnJpd2VhdGhlci1yZWd1bGFyKTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnR4dC0tc3VidGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbWVkLXNwcnVjZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3Rvc2Fucy1pdGFsaWMpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi50eHQtLW5zLXJlZ3VsYXIge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm90b3NhbnMtcmVndWxhcik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFsaWJ1KTtcXG59XFxuXFxuLmxheW91dC0tY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTI2MXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmxheW91dC0tY29udGFpbmVyLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxODBweDtcXG59XFxuXFxuLnNjcm9sbC0tbmF2aWdhdGlvbiB7XFxuICByaWdodDogdW5zZXQ7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVZKDc1JSk7XFxuICB0b3A6IC03NSU7XFxufVxcbi5zY3JvbGwtLW5hdmlnYXRpb24gbGkgYTpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWluZS1zaGFmdCk7XFxuICB3aWR0aDogM3B4O1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5zY3JvbGwtLW5hdmlnYXRpb24gbGkgYS5hY3RpdmU6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1hbGlidSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLW1hbGlidSk7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5zY3JvbGwtLW5hdmlnYXRpb24gbGkgYS5hY3RpdmUgKyAuc2Nyb2xsLS1uYXZpZ2F0aW9uIGxpIGE6YmVmb3JlIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG59XFxuXFxuLnNjcm9sbC1zZWN0aW9uIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcblxcbi5zY3JvbGwtLXNjcmVlbiB7XFxuICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuXFxuLnNjcm9sbC0tc2NyZWVuLWJvZHkge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNjBweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ibG9jay0tcm91bmRlZCwgLmJsb2NrLS1yb3VuZGVkLW1lZGl1bSwgLmJsb2NrLS1yb3VuZGVkLW1lZGl1bSBpbWcsIC5ibG9jay0tcm91bmRlZC1tZWRpdW0gdmlkZW8sIC5ibG9jay0tcm91bmRlZCBpbWcsIC5ibG9jay0tcm91bmRlZCB2aWRlbyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA3MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYmxvY2stLXJvdW5kZWQtbWVkaXVtIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XFxufVxcbi5ibG9jay0tcm91bmRlZC1pbmZpbml0ZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcmlnaHQ6IC05OSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uY2lyY2xlLS1idXR0b24tZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEwMCUgMTAwJSBhdCAxMDAlIDEwMCUsICM0RUQwRkYgMCUsICMwMDlBRDQgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDgycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODJweDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jaXJjbGUtLWJ1dHRvbi1ncmFkaWVudDpob3ZlcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xNSk7XFxufVxcbi5jaXJjbGUtLWJ1dHRvbi1ncmFkaWVudDphY3RpdmU6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xcbn1cXG4uY2lyY2xlLS1idXR0b24tZ3JhZGllbnQ6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItY2VydWxlYW4pO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOTkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jaXJjbGUtLWJ1dHRvbi1ncmFkaWVudDphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTAwJSAxMDAlIGF0IDEwMCUgMTAwJSwgIzAwOUFENCAwJSwgIzRFRDBGRiAxMDAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBsZWZ0OiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDc1JTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jaXJjbGUtLWJ1dHRvbi1ncmFkaWVudCBzcGFuIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMDAlIDEwMCUgYXQgMTAwJSAxMDAlLCAjNEVEMEZGIDAlLCAjMDA5QUQ0IDEwMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uY2lyY2xlLS1idXR0b24tZ3JhZGllbnQgc3BhbjpiZWZvcmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIHdpZHRoOiA4cHg7XFxufVxcbi5jaXJjbGUtLWJ1dHRvbi1ncmFkaWVudC5zaXplLS1tZWRpdW0ge1xcbiAgaGVpZ2h0OiA1M3B4O1xcbiAgd2lkdGg6IDUzcHg7XFxufVxcbi5jaXJjbGUtLWJ1dHRvbi1ncmFkaWVudC5zaXplLS1tZWRpdW06YWZ0ZXIge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogODAlO1xcbn1cXG4uY2lyY2xlLS1idXR0b24tZ3JhZGllbnQuZGlyZWN0aW9uLS1sZWZ0IHNwYW46YmVmb3JlIHtcXG4gIGhlaWdodDogNnB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7XFxuICB3aWR0aDogNnB4O1xcbn1cXG5cXG4uc2xpZGVyLS1idXR0b24tYXJyb3cge1xcbiAgd2lkdGg6IDU0cHg7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1jZXJ1bGVhbik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcbi5zbGlkZXItLWJ1dHRvbi1hcnJvdzpiZWZvcmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItY2VydWxlYW4pO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gIHdpZHRoOiA4cHg7XFxufVxcbi5zbGlkZXItLWJ1dHRvbi1hcnJvdzphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWNlcnVsZWFuKTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zbGlkZXItLWJ1dHRvbi1hcnJvdzpob3ZlcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjIpO1xcbn1cXG4uc2xpZGVyLS1idXR0b24tYXJyb3c6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg4NS4xMyUgODUuMTMlIGF0IDAlIDEwMCUsICM0RUQwRkYgMCUsICMwMDlBRDQgMTAwJSk7XFxufVxcbi5zbGlkZXItLWJ1dHRvbi1hcnJvdzphY3RpdmU6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG4uc2xpZGVyLS1idXR0b24tYXJyb3c6YWN0aXZlOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMzUpO1xcbn1cXG4uc2xpZGVyLS1idXR0b24tYXJyb3cuYXJyb3ctcHJldjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7XFxufVxcblxcbi5zbGlkZXItLWRvdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uc2xpZGVyLS1kb3RzIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zbGlkZXItLWRvdHMgbGkgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1pbmUtc2hhZnQpO1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zbGlkZXItLWRvdHMgbGkuc2xpY2stYWN0aXZlIGJ1dHRvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jZXJ1bGVhbik7XFxufVxcblxcbi5zbGlkZXItLWRvdHMtYXJyb3cge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNsaWRlci0tZG90cy1hcnJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcbi5zbGlkZXItLWRvdHMtYXJyb3ctcHJldiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuLnNsaWRlci0tZG90cy1hcnJvdy1wcmV2OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKTtcXG59XFxuXFxuLmN1c3RvbS0tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmN1c3RvbS0tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jdXN0b20tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXG59XFxuLmN1c3RvbS0tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWxpYnUpO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgYm9yZGVyOiA2cHggc29saWQgIzRFRDBGRjtcXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxufVxcblxcbi5jb21wb25lbnQtLWZvb3RlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGVmdDogNTAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LS1mb290ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmNvbXBvbmVudC0tZm9vdGVyIGRpdiwgLmNvbXBvbmVudC0tZm9vdGVyIGltZyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZm9vdGVyLS1jb250cm9scyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmZvb3Rlci0tdGV4dCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmZvb3Rlci0tdGV4dCBwLCAuZm9vdGVyLS10ZXh0IGEge1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcbi5mb290ZXItLXRleHQgcDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmZvb3Rlci0tc2Nyb2xsLWJ1dHRvbiB7XFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxlZnQ6IC01MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNvbXBvbmVudC0taGVhZGVyIHtcXG4gIGhlaWdodDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG4uY29tcG9uZW50LS1oZWFkZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmNvbXBvbmVudC0taGVhZGVyIGRpdiwgLmNvbXBvbmVudC0taGVhZGVyIGltZyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyLS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogMTU1cHg7XFxufVxcblxcbi5oZWFkZXItLW1lbnUtaXRlbSB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuLmhlYWRlci0tbWVudS1pdGVtOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uaGVhZGVyLS1jb250cm9scyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZWFkZXItLWNvbnRyb2xzLXNlYXJjaCB7XFxuICBtYXJnaW4tcmlnaHQ6IDQycHg7XFxufVxcblxcbi5oZWFkZXItLWxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLmhlYWRlci0tbG9nbzpob3ZlciAuaGVhZGVyLS1sb2dvLWdyb3VwIGltZzpmaXJzdC1jaGlsZCwgLmhlYWRlci0tbG9nbzpob3ZlciAuaGVhZGVyLS1sb2dvLWdyb3VwIGltZzpsYXN0LWNoaWxkIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5oZWFkZXItLWxvZ28tZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5oZWFkZXItLWxvZ28tZ3JvdXAgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5oZWFkZXItLWxvZ28tZ3JvdXAgaW1nOmZpcnN0LWNoaWxkIHtcXG4gIHRvcDogLTI1JTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDI1JSk7XFxufVxcbi5oZWFkZXItLWxvZ28tZ3JvdXAgaW1nOmxhc3QtY2hpbGQge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiAtMjUlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUlLCAtNTAlKTtcXG59XFxuXFxuLm1haW4tLXNjcmVlbi10aGlyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWFpbi0tc2NyZWVuLXRoaXJkLWhlYWRpbmcge1xcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xcbn1cXG5cXG4uaXRlbS0tY2hpbGQtaGVhZGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjdweDtcXG59XFxuXFxuLml0ZW0tLWNoaWxkLWhlYWRpbmctYmFja2dyb3VuZCB7XFxuICBtYXgtd2lkdGg6IDQxMHB4O1xcbiAgbWluLXdpZHRoOiA0MTBweDtcXG4gIHBhZGRpbmc6IDI3cHggMCAyN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS0tY2hpbGQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xcbn1cXG5cXG4uaXRlbS0tY2hpbGQtYm9keSB7XFxuICB3aWR0aDogNTYuNSU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDQyMHB4O1xcbn1cXG5cXG4uc2xpZGVyLS1jaGlsZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTMwcHg7XFxuICB3aWR0aDogMTM1JTtcXG4gIHJpZ2h0OiAtMTElO1xcbn1cXG5cXG4uc2xpZGVyLS1jaGlsZC1pdGVtIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLS1iYWNrZ3JvdW5kLWRhc2gge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcXG4gIGhlaWdodDogMzIycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNDJweDtcXG4gIHdpZHRoOiAzMjJweDtcXG59XFxuXFxuLnNsaWRlci0tY2hpbGQtYXJyb3ctbmV4dCwgLnNsaWRlci0tY2hpbGQtYXJyb3ctcHJldiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4uc2xpZGVyLS1jaGlsZC1hcnJvdy1uZXh0IHtcXG4gIHJpZ2h0OiAtMjAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjAlLCAtNTAlKTtcXG59XFxuLnNsaWRlci0tY2hpbGQtYXJyb3ctcHJldiB7XFxuICBsZWZ0OiAzMCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNTAlKTtcXG59XFxuXFxuLnNsaWRlci0tY2hpbGQtZG90cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC04NSU7XFxuICBsZWZ0OiA3NSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlLCA4NSUpO1xcbn1cXG5cXG4uaXRlbS0tYWR1bHQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0tLWFkdWx0LWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbGlkZXItLWFkdWx0LWltYWdlLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc2xpZGVyLS1hZHVsdC1pbWFnZS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNsaWRlci0tYWR1bHQtZG90cyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLnNsaWRlci0tYWR1bHQtdGV4dC13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbi5zbGlkZXItLWFkdWx0LXRleHQtaXRlbSAuaXRlbS0tdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnNsaWRlci0tYWR1bHQtdGV4dC1pdGVtIC5pdGVtLS1zdWJ0aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcbi5zbGlkZXItLWFkdWx0LXRleHQtaXRlbSAuaXRlbS0tZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1heC13aWR0aDogOTAlO1xcbn1cXG4uc2xpZGVyLS1hZHVsdC10ZXh0LWl0ZW0gLml0ZW0tLWxpc3Qge1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2xpZGVyLS1hZHVsdC10ZXh0LWl0ZW0ge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm1haW4tLXNjcmVlbi1maXJzdCxcXG4ubWFpbi0tc2NyZWVuLXNlY29uZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1haW4tLXZpZGVvIHtcXG4gIG1heC13aWR0aDogOTYycHg7XFxufVxcblxcbi5tYWluLS1zY3JlZW4tc2Vjb25kIC5ibG9jay0tcm91bmRlZCwgLm1haW4tLXNjcmVlbi1zZWNvbmQgLmJsb2NrLS1yb3VuZGVkIGltZywgLmJsb2NrLS1yb3VuZGVkIC5tYWluLS1zY3JlZW4tc2Vjb25kIGltZywgLm1haW4tLXNjcmVlbi1zZWNvbmQgLmJsb2NrLS1yb3VuZGVkIHZpZGVvLCAuYmxvY2stLXJvdW5kZWQgLm1haW4tLXNjcmVlbi1zZWNvbmQgdmlkZW8sIC5tYWluLS1zY3JlZW4tc2Vjb25kIC5ibG9jay0tcm91bmRlZC1tZWRpdW0sIC5tYWluLS1zY3JlZW4tc2Vjb25kIC5ibG9jay0tcm91bmRlZC1tZWRpdW0gaW1nLCAuYmxvY2stLXJvdW5kZWQtbWVkaXVtIC5tYWluLS1zY3JlZW4tc2Vjb25kIGltZywgLm1haW4tLXNjcmVlbi1zZWNvbmQgLmJsb2NrLS1yb3VuZGVkLW1lZGl1bSB2aWRlbywgLmJsb2NrLS1yb3VuZGVkLW1lZGl1bSAubWFpbi0tc2NyZWVuLXNlY29uZCB2aWRlbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jZXJ1bGVhbik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xcbn1cXG4ubWFpbi0tc2NyZWVuLXNlY29uZCAuYmxvY2tzLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogOTYycHg7XFxufVxcbi5tYWluLS1zY3JlZW4tc2Vjb25kIC5ibG9ja3MtLWNvbnRhaW5lci1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MCU7XFxufVxcbi5tYWluLS1zY3JlZW4tc2Vjb25kIC5ibG9jay0taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4tLXNjcmVlbi1zZWNvbmQgLmJsb2NrLS1pdGVtIC5ibG9jay0taXRlbS1pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG59XFxuLm1haW4tLXNjcmVlbi1zZWNvbmQgLmJsb2NrLS1pdGVtIC5ibG9jay0taXRlbS1pY29uIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xcbn1cXG4ubWFpbi0tc2NyZWVuLXNlY29uZCAuYmxvY2stLWl0ZW0gLmJsb2NrLS1pdGVtLXRleHQge1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLm1haW4tLXNjcmVlbi1mb3VydGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1haW4tLXNjcmVlbi1mb3VydGgtaGVhZGluZyB7XFxuICBtYXJnaW4tbGVmdDogMzUwcHg7XFxufVxcbi5tYWluLS1zY3JlZW4tZm91cnRoLWhlYWRpbmctYmFja2dyb3VuZCB7XFxuICBwYWRkaW5nOiAyN3B4IDUwcHg7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiA1NnB4O1xcbn1cXG4ubWFpbi0tc2NyZWVuLWZvdXJ0aC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYWluLS1zY3JlZW4tZm91cnRoLWJvZHkgLmJvZHktLWl0ZW0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4tLXNjcmVlbi1mb3VydGgtYm9keS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuLm1haW4tLXNjcmVlbi1mb3VydGgtYm9keS1jb250ZW50IC5jb250ZW50LS1pdGVtIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi5tYWluLS1zY3JlZW4tZm91cnRoIC5idXR0b25zLS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubWFpbi0tc2NyZWVuLWZvdXJ0aCAuYnV0dG9ucy0tY29udGFpbmVyLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi0tc2NyZWVuLWZvdXJ0aCAuYnV0dG9ucy0tY29udGFpbmVyLWl0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSxodG1se21hcmdpbjowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuNHM7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjRzO3RyYW5zaXRpb246b3BhY2l0eSAuNHN9Lm9uZXBhZ2Utd3JhcHBlcixib2R5LGh0bWx7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpzdGF0aWM7cGFkZGluZzowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lm9uZXBhZ2Utd3JhcHBlcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowOy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkfS5vbmVwYWdlLXdyYXBwZXIgLnNlY3Rpb257d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ub25lcGFnZS1wYWdpbmF0aW9ue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjEwcHg7dG9wOjUwJTt6LWluZGV4OjU7bGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6MH0ub25lcGFnZS1wYWdpbmF0aW9uIGxpe3BhZGRpbmc6MDt0ZXh0LWFsaWduOmNlbnRlcn0ub25lcGFnZS1wYWdpbmF0aW9uIGxpIGF7cGFkZGluZzoxMHB4O3dpZHRoOjRweDtoZWlnaHQ6NHB4O2Rpc3BsYXk6YmxvY2t9Lm9uZXBhZ2UtcGFnaW5hdGlvbiBsaSBhOmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjRweDtoZWlnaHQ6NHB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuODUpO2JvcmRlci1yYWRpdXM6MTBweDstd2Via2l0LWJvcmRlci1yYWRpdXM6MTBweDstbW96LWJvcmRlci1yYWRpdXM6MTBweH0ub25lcGFnZS1wYWdpbmF0aW9uIGxpIGEuYWN0aXZlOmJlZm9yZXt3aWR0aDoxMHB4O2hlaWdodDoxMHB4O2JhY2tncm91bmQ6MCAwO2JvcmRlcjoxcHggc29saWQgIzAwMDttYXJnaW4tdG9wOi00cHg7bGVmdDo4cHh9LmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsLC5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCAud3JhcHBlcntvdmVyZmxvdzphdXRvfS5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCAub25lcGFnZS13cmFwcGVyIC5zZWN0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlIWltcG9ydGFudDt0b3A6YXV0byFpbXBvcnRhbnQ7bGVmdDphdXRvIWltcG9ydGFudH0uZGlzYWJsZWQtb25lcGFnZS1zY3JvbGwgLm9uZXBhZ2Utd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDstbW96LXRyYW5zZm9ybTpub25lIWltcG9ydGFudDt0cmFuc2Zvcm06bm9uZSFpbXBvcnRhbnQ7LW1zLXRyYW5zZm9ybTpub25lIWltcG9ydGFudDttaW4taGVpZ2h0OjEwMCV9LmRpc2FibGVkLW9uZXBhZ2Utc2Nyb2xsIC5vbmVwYWdlLXBhZ2luYXRpb257ZGlzcGxheTpub25lfS5kaXNhYmxlZC1vbmVwYWdlLXNjcm9sbCAub25lcGFnZS13cmFwcGVyLGJvZHkuZGlzYWJsZWQtb25lcGFnZS1zY3JvbGwsaHRtbHtwb3NpdGlvbjppbmhlcml0fVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU2xpZGVyICovXFxyXFxuLnNsaWNrLXNsaWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcXHJcXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcXHJcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLWxpc3Qge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbGljay1saXN0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLWxpc3QuZHJhZ2dpbmcge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGN1cnNvcjogaGFuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXFxyXFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXRyYWNrIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpY2stdHJhY2s6YmVmb3JlLFxcclxcbi5zbGljay10cmFjazphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcblxcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXRyYWNrOmFmdGVyIHtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5zbGljay1sb2FkaW5nIC5zbGljay10cmFjayB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXNsaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5bZGlyPSdydGwnXSAuc2xpY2stc2xpZGUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5zbGljay1zbGlkZSBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXNsaWRlLnNsaWNrLWxvYWRpbmcgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZyB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zbGljay1sb2FkaW5nIC5zbGljay1zbGlkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWNrLXZlcnRpY2FsIC5zbGljay1zbGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpY2stYXJyb3cuc2xpY2staGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYTc4NzVhOWQ2NDQ5ZTE5OGFjZGU1YTg3Y2VlMGQxMi53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA0ZDVkMmNjNzcwNTFhYWFjNGMzYWRiNDJmOTViMDM2LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdkNGMzODBkOWIzMTIxZDRkMDM0MDdkM2NjYWU2NWFiLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2UwZTU1NGM2Mjc3NzBjODMzMWMxNWEyYTAyMWFhODMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWQ3MjYzNjlmNDhjM2QxZTJkNzk3Yjc5ZjA1MWJmYzkud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NWVjMDU5ZmE3OTYzZDYwZmVmOThjMjcwN2VmMTg2Yi53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZWI0OTRkNjU3ZjYwYjc1MDM5ZjQyODJlYmVmYjYyMy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIyM2YyMGUxOTY4NjE1MzQxZWZhN2Y5YThmODE3NDE3LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBkZjY4ZDlhMDliMGMzZmRkNzcyZTMwMzU0NmMyMGY5LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWViZDlhNmYxNGE1N2U3YWM0OTJjYzg0OTBlMWE0YjMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzM5YmYyZDQ4MzQ1OTU5NDI1ODYwMWFiOWM0OGUyN2Mud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjRlMmU0MDVmMjEzMWEwMDE3OTBkZThlNzE3MDg4ZC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNjI0NzdlM2UxZGNkOWNjMmY2YTI4MzRhYTAxMzY2My5wbmdcIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL29uZXBhZ2VzY3JvbGwubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWNrLXNsaWRlci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGNsYXNzTmFtZXNMaXN0ID0ge1xyXG4gICAgQlJBTkRTX0FEVUxUX1NMSURFUl9ET1RTX0NMQVNTTkFNRTogJ3NsaWRlci0tYWR1bHQtZG90cycsXHJcbiAgICBCUkFORFNfQ0hJTERfU0xJREVSX0RPVFNfQ0xBU1NOQU1FOiAnc2xpZGVyLS1jaGlsZC1kb3RzJyxcclxuICAgIENPTlRST0xfT1ZFUkZMT1dfSElEREVOX0NMQVNTTkFNRTogJ292ZXJmbG93LS1oaWRkZW4nLFxyXG4gICAgSEVBREVSX01FTlVfSVRFTV9DTEFTU05BTUU6ICdoZWFkZXItLW1lbnUtaXRlbScsXHJcbiAgICBTQ1JPTExfTkFWSUdBVElPTl9DTEFTU05BTUU6ICdzY3JvbGwtLW5hdmlnYXRpb24nLFxyXG4gICAgU0xJQ0tfU0xJREVSX0RPVFNfTElCX0NMQVNTTkFNRTogJ3NsaWNrLWRvdHMnLFxyXG4gICAgU0xJREVSX0FEVUxUX0RPVFNfQVJST1dfTkVYVF9DTEFTU05BTUU6ICdzbGlkZXItLWRvdHMtYXJyb3ctbmV4dC1hZHVsdCcsXHJcbiAgICBTTElERVJfQ0hJTERfRE9UU19BUlJPV19ORVhUX0NMQVNTTkFNRTogJ3NsaWRlci0tZG90cy1hcnJvdy1uZXh0LWNoaWxkJyxcclxuICAgIFNMSURFUl9BRFVMVF9ET1RTX0FSUk9XX1BSRVZfQ0xBU1NOQU1FOiAnc2xpZGVyLS1kb3RzLWFycm93LXByZXYtYWR1bHQnLFxyXG4gICAgU0xJREVSX0NISUxEX0RPVFNfQVJST1dfUFJFVl9DTEFTU05BTUU6ICdzbGlkZXItLWRvdHMtYXJyb3ctcHJldi1jaGlsZCcsXHJcbiAgICBTTElERVJfRE9UU19BUlJPV19DTEFTU05BTUU6ICdzbGlkZXItLWRvdHMtYXJyb3cnLFxyXG4gICAgU0xJREVSX0RPVFNfQVJST1dfTkVYVF9DTEFTU05BTUU6ICdzbGlkZXItLWRvdHMtYXJyb3ctbmV4dCcsXHJcbiAgICBTTElERVJfRE9UU19BUlJPV19QUkVWX0NMQVNTTkFNRTogJ3NsaWRlci0tZG90cy1hcnJvdy1wcmV2JyxcclxuICAgIFNMSURFUl9ET1RTX0NMQVNTTkFNRTogJ3NsaWRlci0tZG90cycsXHJcbiAgICBUWFRfTEVHQUxfQUNUSVZFX0NMQVNTTkFNRTogJ3R4dC0tbGVnYWwtYWN0aXZlJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzTmFtZXNMaXN0O1xyXG4iLCJjb25zdCBzZWxlY3RvcnNMaXN0ID0ge1xyXG4gICAgQlJBTkRTX0NISUxEX1NFQ1RJT05fQk9EWV9DTEFTU05BTUVfU0VMRUNUT1I6ICcuaXRlbS0tY2hpbGQtYm9keScsXHJcbiAgICBCUkFORFNfQ0hJTERfU0xJREVSX0FSUk9XX05FWFRfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tY2hpbGQtYXJyb3ctbmV4dCcsXHJcbiAgICBCUkFORFNfQ0hJTERfU0xJREVSX0FSUk9XX1BSRVZfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tY2hpbGQtYXJyb3ctcHJldicsXHJcbiAgICBCUkFORFNfQ0hJTERfU0xJREVSX0JBQ0tfQlVUVE9OX0NMQVNTTkFNRV9TRUxFQ1RPUjogJy5pdGVtLS1hZHVsdC1idXR0b24nLFxyXG4gICAgQlJBTkRTX0NISUxEX1NMSURFUl9ET1RTX0NMQVNTTkFNRV9TRUxFQ1RPUjogJy5zbGlkZXItLWNoaWxkLWRvdHMnLFxyXG4gICAgQlJBTkRTX0FEVUxUX1NMSURFUl9ET1RTX0NMQVNTTkFNRV9TRUxFQ1RPUjogJy5zbGlkZXItLWFkdWx0LWRvdHMnLFxyXG4gICAgQlJBTkRTX0NISUxEX1NMSURFUl9UT19BRFVMVF9CVVRUT05fQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLml0ZW0tLWNoaWxkLWJ1dHRvbicsXHJcbiAgICBGT09URVJfQ09OVFJPTFNfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLmZvb3Rlci0tY29udHJvbHMnLFxyXG4gICAgRk9PVEVSX0NPUFlSSUdIVF9ZRUFSX0lEX1NFTEVDVE9SOiAnI2Zvb3Rlci1jb3B5cmlnaHQnLFxyXG4gICAgTUFJTl9QQUdFX0JSQU5EU19BRFVMVF9JTUFHRV9TTElERVJfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tYWR1bHQtaW1hZ2Utd3JhcHBlcicsXHJcbiAgICBNQUlOX1BBR0VfQlJBTkRTX0FEVUxUX1RFWFRfU0xJREVSX0NMQVNTTkFNRV9TRUxFQ1RPUjogJy5zbGlkZXItLWFkdWx0LXRleHQtd3JhcHBlcicsXHJcbiAgICBNQUlOX1BBR0VfQlJBTkRTX0NISUxEX1NMSURFUl9DTEFTU05BTUVfU0VMRUNUT1I6ICcuc2xpZGVyLS1jaGlsZC13cmFwcGVyJyxcclxuICAgIE1BSU5fUEFHRV9CUkFORFNfU0xJREVSX0NMQVNTTkFNRV9TRUxFQ1RPUjogJy5icmFuZHMtLXNsaWRlci13cmFwcGVyJyxcclxuICAgIFNDUk9MTF9CVVRUT05fQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLmZvb3Rlci0tc2Nyb2xsLWJ1dHRvbicsXHJcbiAgICBTQ1JPTExfTkFWSUdBVElPTl9DTEFTU05BTUVfU0VMRUNUT1I6ICcub25lcGFnZS1wYWdpbmF0aW9uJyxcclxuICAgIFNDUk9MTF9TRUNUSU9OX0NMQVNTTkFNRV9TRUxFQ1RPUjogJ3NlY3Rpb24nLFxyXG4gICAgU0NST0xMX1dSQVBQRVJfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNjcm9sbC1zZWN0aW9uJyxcclxuICAgIFNMSURFUl9ET1RTX0FSUk9XX05FWFRfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tZG90cy1hcnJvdy1uZXh0JyxcclxuICAgIFNMSURFUl9DSElMRF9ET1RTX0FSUk9XX05FWFRfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tZG90cy1hcnJvdy1uZXh0LWNoaWxkJyxcclxuICAgIFNMSURFUl9BRFVMVF9ET1RTX0FSUk9XX05FWFRfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tZG90cy1hcnJvdy1uZXh0LWFkdWx0JyxcclxuICAgIFNMSURFUl9ET1RTX0FSUk9XX1BSRVZfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tZG90cy1hcnJvdy1wcmV2JyxcclxuICAgIFNMSURFUl9DSElMRF9ET1RTX0FSUk9XX1BSRVZfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tZG90cy1hcnJvdy1wcmV2LWNoaWxkJyxcclxuICAgIFNMSURFUl9BRFVMVF9ET1RTX0FSUk9XX1BSRVZfQ0xBU1NOQU1FX1NFTEVDVE9SOiAnLnNsaWRlci0tZG90cy1hcnJvdy1wcmV2LWFkdWx0JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdG9yc0xpc3Q7XHJcbiIsImltcG9ydCAnLi9hc3NldHMvc2Nzcy92ZW5kb3Ivb25lcGFnZXNjcm9sbC5taW4uY3NzJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL3ZlbmRvci9zbGljay1zbGlkZXIuY3NzJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxuaW1wb3J0IGxheW91dFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9sYXlvdXRTZXJ2aWNlJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnKioqIEFwcGxpY2F0aW9uIHN0YXJ0ZWQgKioqJyk7XHJcblxyXG4gICAgbGF5b3V0U2VydmljZS5pbml0aWFsaXplKCk7XHJcbn1cclxuIiwiY29uc3QgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IChjbGFzc05hbWUpID0+IHtcclxuICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgICByZXR1cm4gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldEVsZW1lbnRzQnlTZWxlY3RvciA9IChzZWxlY3RvciwgaXNTaW5nbGVFbGVtZW50ID0gMCkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzU2luZ2xlRWxlbWVudFxyXG4gICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lLFxyXG4gICAgZ2V0RWxlbWVudHNCeVNlbGVjdG9yLFxyXG59XHJcbiIsImltcG9ydCBmb290ZXJTZXJ2aWNlIGZyb20gJy4vcGFnZVNlcnZpY2VzL2Zvb3RlclNlcnZpY2UnO1xyXG5pbXBvcnQgaGVhZGVyTWVudVNlcnZpY2UgZnJvbSAnLi9wYWdlU2VydmljZXMvaGVhZGVyTWVudVNlcnZpY2UnO1xyXG5pbXBvcnQgbWFpblBhZ2VTZXJ2aWNlIGZyb20gJy4vcGFnZVNlcnZpY2VzL21haW5QYWdlU2VydmljZSc7XHJcbmltcG9ydCBwYWdlU2Nyb2xsaW5nU2VydmljZSBmcm9tICcuL3BhZ2VTZXJ2aWNlcy9wYWdlU2Nyb2xsaW5nU2VydmljZSc7XHJcblxyXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgZm9vdGVyU2VydmljZS5pbml0aWFsaXplKCk7XHJcbiAgICBoZWFkZXJNZW51U2VydmljZS5pbml0aWFsaXplKCk7XHJcbiAgICBwYWdlU2Nyb2xsaW5nU2VydmljZS5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgbWFpblBhZ2VTZXJ2aWNlLmluaXRpYWxpemUoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXRpYWxpemUsXHJcbn1cclxuIiwiaW1wb3J0IGRvbVNlcnZpY2UgZnJvbSAnLi4vZG9tU2VydmljZSc7XHJcbmltcG9ydCBzZWxlY3RvcnNMaXN0IGZyb20gJy4uLy4uL2NvbnN0cy9zZWxlY3RvcnNMaXN0JztcclxuXHJcbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRGb290ZXJDb3B5cmlnaHRZZWFyKCk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRGb290ZXJDb3B5cmlnaHRZZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeWVhckZpZWxkID0gZG9tU2VydmljZS5nZXRFbGVtZW50c0J5U2VsZWN0b3Ioc2VsZWN0b3JzTGlzdC5GT09URVJfQ09QWVJJR0hUX1lFQVJfSURfU0VMRUNUT1IsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIGlmICh5ZWFyRmllbGQpIHtcclxuICAgICAgICB5ZWFyRmllbGQuaW5uZXJIVE1MID0gY3VycmVudFllYXI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0aWFsaXplLFxyXG59XHJcbiIsImltcG9ydCBjbGFzc05hbWVzTGlzdCBmcm9tICcuLi8uLi9jb25zdHMvY2xhc3NOYW1lc0xpc3QnO1xyXG5pbXBvcnQgZG9tU2VydmljZSBmcm9tICcuLi9kb21TZXJ2aWNlJztcclxuXHJcbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVMaW5rKCk7XHJcbiAgICBzZXRDdXJyZW50TGFuZ3VhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IHNldEFjdGl2ZUxpbmsgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51QnV0dG9ucyA9IGRvbVNlcnZpY2UuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWVzTGlzdC5IRUFERVJfTUVOVV9JVEVNX0NMQVNTTkFNRSk7XHJcblxyXG4gICAgaWYgKG1lbnVCdXR0b25zKSB7XHJcbiAgICAgICAgbWVudUJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7aHJlZn0gPSBlbGVtZW50IHx8IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhyZWYgPT09IGN1cnJlbnRIcmVmKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lc0xpc3QuVFhUX0xFR0FMX0FDVElWRV9DTEFTU05BTUUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHNldEN1cnJlbnRMYW5ndWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFVLX0xBTkdfQ09ERSA9ICdVSyc7XHJcbiAgICBjb25zdCBFTl9MQU5HX0NPREUgPSAnRU4nO1xyXG4gICAgY29uc3QgbG9jYXRpb25IcmVmID0gbG9jYXRpb24uaHJlZjtcclxuXHJcbiAgICBjb25zdCBpc0VtcHR5SHJlZkVuZCA9IGxvY2F0aW9uSHJlZi5sYXN0SW5kZXhPZignLycpO1xyXG4gICAgY29uc3QgaXNIcmVmQ29uc2lzdFVLTGFuZ3VhZ2VDb2RlID0gbG9jYXRpb25IcmVmLm1hdGNoKC91ay8pO1xyXG5cclxuICAgIGNvbnN0IGlzVUtMYW5ndWFnZVNlbGVjdGVkID0gaXNFbXB0eUhyZWZFbmQgfHwgaXNIcmVmQ29uc2lzdFVLTGFuZ3VhZ2VDb2RlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdGlhbGl6ZSxcclxufVxyXG4iLCJpbXBvcnQgY2xhc3NOYW1lc0xpc3QgZnJvbSAnLi4vLi4vY29uc3RzL2NsYXNzTmFtZXNMaXN0JztcclxuaW1wb3J0IGRvbVNlcnZpY2UgZnJvbSAnLi4vZG9tU2VydmljZSc7XHJcbmltcG9ydCBzZWxlY3RvcnNMaXN0IGZyb20gJy4uLy4uL2NvbnN0cy9zZWxlY3RvcnNMaXN0JztcclxuXHJcbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICBzZXR1cEJyYW5kc1NsaWRlcigpO1xyXG4gICAgc2V0dXBDaGlsZEJyYW5kc1NsaWRlcigpO1xyXG4gICAgc2V0dXBBZHVsdEJyYW5kc1NsaWRlcnMoKTtcclxufTtcclxuXHJcbmNvbnN0IHNldHVwQnJhbmRzU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGVyID0gJChzZWxlY3RvcnNMaXN0Lk1BSU5fUEFHRV9CUkFORFNfU0xJREVSX0NMQVNTTkFNRV9TRUxFQ1RPUik7XHJcblxyXG4gICAgaWYgKHNsaWRlci5sZW5ndGgpIHtcclxuICAgICAgICBzbGlkZXIuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMixcclxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZHVsdEJ1dHRvbnNOb2RlTGlzdCA9IGRvbVNlcnZpY2UuZ2V0RWxlbWVudHNCeVNlbGVjdG9yKHNlbGVjdG9yc0xpc3QuQlJBTkRTX0NISUxEX1NMSURFUl9UT19BRFVMVF9CVVRUT05fQ0xBU1NOQU1FX1NFTEVDVE9SKTtcclxuICAgICAgICBjb25zdCBiYWNrQnV0dG9uc05vZGVMaXN0ID0gZG9tU2VydmljZS5nZXRFbGVtZW50c0J5U2VsZWN0b3Ioc2VsZWN0b3JzTGlzdC5CUkFORFNfQ0hJTERfU0xJREVSX0JBQ0tfQlVUVE9OX0NMQVNTTkFNRV9TRUxFQ1RPUik7XHJcblxyXG4gICAgICAgIGlmIChhZHVsdEJ1dHRvbnNOb2RlTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYWR1bHRCdXR0b25zTm9kZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudENoaWxkcmVuQ29sbGVjdGlvbiA9IFsuLi5lbGVtZW50LmNoaWxkcmVuXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENoaWxkcmVuQ29sbGVjdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hpbGRyZW5Db2xsZWN0aW9uLmZvckVhY2goKGNoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuc2xpY2soJ3NsaWNrUHJldicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhY2tCdXR0b25zTm9kZUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJhY2tCdXR0b25zTm9kZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudENoaWxkcmVuQ29sbGVjdGlvbiA9IFsuLi5lbGVtZW50LmNoaWxkcmVuXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudENoaWxkcmVuQ29sbGVjdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2hpbGRyZW5Db2xsZWN0aW9uLmZvckVhY2goKGNoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuc2xpY2soJ3NsaWNrTmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHNldHVwQ2hpbGRCcmFuZHNTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzbGlkZXIgPSAkKHNlbGVjdG9yc0xpc3QuTUFJTl9QQUdFX0JSQU5EU19DSElMRF9TTElERVJfQ0xBU1NOQU1FX1NFTEVDVE9SKTtcclxuXHJcbiAgICBpZiAoc2xpZGVyLmxlbmd0aCkge1xyXG4gICAgICAgIHNsaWRlci5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdHNDbGFzczogYCR7Y2xhc3NOYW1lc0xpc3QuU0xJQ0tfU0xJREVSX0RPVFNfTElCX0NMQVNTTkFNRX0gXHJcbiAgICAgICAgICAgICR7Y2xhc3NOYW1lc0xpc3QuU0xJREVSX0RPVFNfQ0xBU1NOQU1FfSBcclxuICAgICAgICAgICAgJHtjbGFzc05hbWVzTGlzdC5CUkFORFNfQ0hJTERfU0xJREVSX0RPVFNfQ0xBU1NOQU1FfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFNsaWRlckRvdHNDbGFzcyhcclxuICAgICAgICAgICAgc2VsZWN0b3JzTGlzdC5CUkFORFNfQ0hJTERfU0xJREVSX0RPVFNfQ0xBU1NOQU1FX1NFTEVDVE9SLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzTGlzdC5TTElERVJfQ0hJTERfRE9UU19BUlJPV19QUkVWX0NMQVNTTkFNRSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lc0xpc3QuU0xJREVSX0NISUxEX0RPVFNfQVJST1dfTkVYVF9DTEFTU05BTUUsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0UHJldk5leHRCdXR0b25zQ2xpY2tFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBzbGlkZXIsXHJcbiAgICAgICAgICAgIFtzZWxlY3RvcnNMaXN0LkJSQU5EU19DSElMRF9TTElERVJfQVJST1dfUFJFVl9DTEFTU05BTUVfU0VMRUNUT1IsIHNlbGVjdG9yc0xpc3QuU0xJREVSX0NISUxEX0RPVFNfQVJST1dfUFJFVl9DTEFTU05BTUVfU0VMRUNUT1JdLFxyXG4gICAgICAgICAgICBbc2VsZWN0b3JzTGlzdC5CUkFORFNfQ0hJTERfU0xJREVSX0FSUk9XX05FWFRfQ0xBU1NOQU1FX1NFTEVDVE9SLCBzZWxlY3RvcnNMaXN0LlNMSURFUl9DSElMRF9ET1RTX0FSUk9XX05FWFRfQ0xBU1NOQU1FX1NFTEVDVE9SXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXR1cEFkdWx0QnJhbmRzU2xpZGVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlU2xpZGVyID0gJChzZWxlY3RvcnNMaXN0Lk1BSU5fUEFHRV9CUkFORFNfQURVTFRfSU1BR0VfU0xJREVSX0NMQVNTTkFNRV9TRUxFQ1RPUik7XHJcblxyXG4gICAgaWYgKGltYWdlU2xpZGVyLmxlbmd0aCkge1xyXG4gICAgICAgIGltYWdlU2xpZGVyLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXNOYXZGb3I6IHNlbGVjdG9yc0xpc3QuTUFJTl9QQUdFX0JSQU5EU19BRFVMVF9URVhUX1NMSURFUl9DTEFTU05BTUVfU0VMRUNUT1IsXHJcbiAgICAgICAgICAgIGRvdHNDbGFzczogYCR7Y2xhc3NOYW1lc0xpc3QuU0xJQ0tfU0xJREVSX0RPVFNfTElCX0NMQVNTTkFNRX0gXHJcbiAgICAgICAgICAgICR7Y2xhc3NOYW1lc0xpc3QuU0xJREVSX0RPVFNfQ0xBU1NOQU1FfSBcclxuICAgICAgICAgICAgJHtjbGFzc05hbWVzTGlzdC5CUkFORFNfQURVTFRfU0xJREVSX0RPVFNfQ0xBU1NOQU1FfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFNsaWRlckRvdHNDbGFzcyhcclxuICAgICAgICAgICAgc2VsZWN0b3JzTGlzdC5CUkFORFNfQURVTFRfU0xJREVSX0RPVFNfQ0xBU1NOQU1FX1NFTEVDVE9SLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzTGlzdC5TTElERVJfQURVTFRfRE9UU19BUlJPV19QUkVWX0NMQVNTTkFNRSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lc0xpc3QuU0xJREVSX0FEVUxUX0RPVFNfQVJST1dfTkVYVF9DTEFTU05BTUUsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0UHJldk5leHRCdXR0b25zQ2xpY2tFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBpbWFnZVNsaWRlcixcclxuICAgICAgICAgICAgW3NlbGVjdG9yc0xpc3QuU0xJREVSX0FEVUxUX0RPVFNfQVJST1dfUFJFVl9DTEFTU05BTUVfU0VMRUNUT1JdLFxyXG4gICAgICAgICAgICBbc2VsZWN0b3JzTGlzdC5TTElERVJfQURVTFRfRE9UU19BUlJPV19ORVhUX0NMQVNTTkFNRV9TRUxFQ1RPUl1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0U2xpZGVyID0gJChzZWxlY3RvcnNMaXN0Lk1BSU5fUEFHRV9CUkFORFNfQURVTFRfVEVYVF9TTElERVJfQ0xBU1NOQU1FX1NFTEVDVE9SKTtcclxuXHJcbiAgICAgICAgaWYgKHRleHRTbGlkZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRleHRTbGlkZXIuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMCxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBzZWxlY3RvcnNMaXN0Lk1BSU5fUEFHRV9CUkFORFNfQURVTFRfSU1BR0VfU0xJREVSX0NMQVNTTkFNRV9TRUxFQ1RPUixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2V0UHJldk5leHRCdXR0b25zQ2xpY2tFdmVudExpc3RlbmVyID0gKHNsaWRlckluc3RhbmNlLCBwcmV2QnV0dG9uc1NlbGVjdG9ycywgbmV4dEJ1dHRvbnNTZWxlY3RvcnMpID0+IHtcclxuICAgIGNvbnN0IGlzRW50cnlEYXRhVmFsaWQgPSBzbGlkZXJJbnN0YW5jZSAmJiBwcmV2QnV0dG9uc1NlbGVjdG9ycy5sZW5ndGggJiYgbmV4dEJ1dHRvbnNTZWxlY3RvcnMubGVuZ3RoO1xyXG5cclxuICAgIGlmIChpc0VudHJ5RGF0YVZhbGlkKSB7XHJcbiAgICAgICAgcHJldkJ1dHRvbnNTZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb21TZXJ2aWNlLmdldEVsZW1lbnRzQnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiBzbGlkZXJJbnN0YW5jZS5zbGljaygnc2xpY2tQcmV2Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZXh0QnV0dG9uc1NlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvbVNlcnZpY2UuZ2V0RWxlbWVudHNCeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQub25jbGljayA9ICgpID0+IHNsaWRlckluc3RhbmNlLnNsaWNrKCdzbGlja05leHQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXRTbGlkZXJEb3RzQ2xhc3MgPSAoZG90c1NlbGVjdG9yLCAgYnV0dG9uUHJldkNsYXNzLCBidXR0b25OZXh0Q2xhc3MpID0+IHtcclxuICAgIGNvbnN0IGRvdHMgPSAkKGRvdHNTZWxlY3Rvcik7XHJcblxyXG4gICAgaWYgKGRvdHMpIHtcclxuICAgICAgICBkb3RzLmFwcGVuZChgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTmFtZXNMaXN0LlNMSURFUl9ET1RTX0FSUk9XX0NMQVNTTkFNRX0gJHtjbGFzc05hbWVzTGlzdC5TTElERVJfRE9UU19BUlJPV19ORVhUX0NMQVNTTkFNRX0gJHtidXR0b25OZXh0Q2xhc3N9XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PmApO1xyXG4gICAgICAgIGRvdHMucHJlcGVuZChgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTmFtZXNMaXN0LlNMSURFUl9ET1RTX0FSUk9XX0NMQVNTTkFNRX0gJHtjbGFzc05hbWVzTGlzdC5TTElERVJfRE9UU19BUlJPV19QUkVWX0NMQVNTTkFNRX0gJHtidXR0b25QcmV2Q2xhc3N9XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PmApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdGlhbGl6ZSxcclxufVxyXG4iLCJpbXBvcnQgY2xhc3NOYW1lc0xpc3QgZnJvbSAnLi4vLi4vY29uc3RzL2NsYXNzTmFtZXNMaXN0JztcclxuaW1wb3J0IGRvbVNlcnZpY2UgZnJvbSAnLi4vZG9tU2VydmljZSc7XHJcbmltcG9ydCBzZWxlY3RvcnNMaXN0IGZyb20gJy4uLy4uL2NvbnN0cy9zZWxlY3RvcnNMaXN0JztcclxuXHJcbmNvbnN0IENMSUNLX0VWRU5UX05BTUUgPSAnY2xpY2snO1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgIHNldHVwRnVsbFBhZ2VTY3JvbGxpbmcoKTtcclxuICAgIHNldFNjcm9sbEJ1dHRvbigpO1xyXG4gICAgbW92ZVNjcm9sbE5hdmlnYXRpb25CYXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHNldHVwRnVsbFBhZ2VTY3JvbGxpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBPUFNXcmFwcGVyID0gJChzZWxlY3RvcnNMaXN0LlNDUk9MTF9XUkFQUEVSX0NMQVNTTkFNRV9TRUxFQ1RPUik7XHJcblxyXG4gICAgaWYgKE9QU1dyYXBwZXIpIHtcclxuICAgICAgICBPUFNXcmFwcGVyLm9uZXBhZ2Vfc2Nyb2xsKHtcclxuICAgICAgICAgICAgc2VjdGlvbkNvbnRhaW5lcjogc2VsZWN0b3JzTGlzdC5TQ1JPTExfU0VDVElPTl9DTEFTU05BTUVfU0VMRUNUT1IsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVwZGF0ZVVSTDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXRTY3JvbGxCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxCdXR0b24gPSBkb21TZXJ2aWNlLmdldEVsZW1lbnRzQnlTZWxlY3RvcihzZWxlY3RvcnNMaXN0LlNDUk9MTF9CVVRUT05fQ0xBU1NOQU1FX1NFTEVDVE9SLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsQnV0dG9uKSB7XHJcbiAgICAgICAgc2Nyb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoQ0xJQ0tfRVZFTlRfTkFNRSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBPUFNJbnN0YW5jZSA9ICQoc2VsZWN0b3JzTGlzdC5TQ1JPTExfV1JBUFBFUl9DTEFTU05BTUVfU0VMRUNUT1IpO1xyXG5cclxuICAgICAgICAgICAgT1BTSW5zdGFuY2UubW92ZURvd24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IG1vdmVTY3JvbGxOYXZpZ2F0aW9uQmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IGRvbVNlcnZpY2UuZ2V0RWxlbWVudHNCeVNlbGVjdG9yKHNlbGVjdG9yc0xpc3QuU0NST0xMX05BVklHQVRJT05fQ0xBU1NOQU1FX1NFTEVDVE9SLCB0cnVlKTtcclxuXHJcbiAgICBpZiAobmF2aWdhdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGFwcGVuZFRhcmdldCA9IGRvbVNlcnZpY2UuZ2V0RWxlbWVudHNCeVNlbGVjdG9yKHNlbGVjdG9yc0xpc3QuRk9PVEVSX0NPTlRST0xTX0NMQVNTTkFNRV9TRUxFQ1RPUiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChhcHBlbmRUYXJnZXQpIHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZXNMaXN0LlNDUk9MTF9OQVZJR0FUSU9OX0NMQVNTTkFNRSk7XHJcbiAgICAgICAgICAgIGFwcGVuZFRhcmdldC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0aWFsaXplLFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=