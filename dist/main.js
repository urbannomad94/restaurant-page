/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color1: rgb(244, 224, 83);\\n  --color2: rgb(219, 60, 58);\\n}\\n\\nhtml,\\nbody {\\n  box-sizing: border-box;\\n  background-color: var(--color1);\\n  font-size: 10px;\\n  color: var(--color2);\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\nnav button {\\n  background-color: var(--color1);\\n  border: 5px solid var(--color2);\\n  border-radius: 10px;\\n  color: var(--color2);\\n  font-size: 3rem;\\n  cursor: pointer;\\n}\\n\\nnav button:hover,\\n.selected {\\n  background-color: var(--color2);\\n  border: 5px solid var(--color1);\\n  color: var(--color1);\\n}\\n\\nnav li {\\n  list-style: none;\\n}\\n\\nnav > ul {\\n  display: flex;\\n  justify-content: center;\\n  gap: 15px;\\n  padding: 0;\\n}\\n\\n.img-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.img-container > img {\\n  height: 20rem;\\n}\\n\\nh1 {\\n  font-size: 6rem;\\n  margin: 0 0 10px 0;\\n  text-align: center;\\n}\\n\\np {\\n  font-size: 2.5rem;\\n}\\n\\n.page-tab {\\n  padding: 40px;\\n}\\n\\n.home-tab {\\n  display: flex;\\n  gap: 25px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\nsection img {\\n  margin-top: 25px;\\n  border: 3px solid var(--color2);\\n}\\n\\n.menu-grid {\\n  display: grid;\\n  grid-template-columns: 2;\\n  grid-template-rows: 3;\\n  justify-content: center;\\n  gap: 20px;\\n}\\n\\n.menu-item {\\n  width: 50rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: var(--color2);\\n  color: var(--color1);\\n  padding: 10px;\\n  margin: 0 auto;\\n}\\n\\n.menu-item h2 {\\n  font-size: 3rem;\\n  margin: 0;\\n}\\n\\n.menu-item span {\\n  text-align: right;\\n  font-size: 2.5rem;\\n}\\n\\n.menu-item p {\\n  font-size: 2.5rem;\\n  margin-bottom: 0;\\n  text-align: center;\\n}\\n\\n.menu-item img {\\n  width: 45rem;\\n}\\n\\n.hamburger {\\n  grid-column: 1;\\n  grid-row: 1;\\n}\\n\\n.cheeseburger {\\n  grid-column: 2;\\n  grid-row: 1;\\n}\\n\\n.bacon-cheeseburger {\\n  grid-column: 1;\\n  grid-row: 2;\\n}\\n\\n.veggie-burger {\\n  grid-column: 2;\\n  grid-row: 2;\\n}\\n\\n.fries {\\n  grid-column: 1;\\n  grid-row: 3;\\n}\\n\\n.drink {\\n  grid-column: 2;\\n  grid-row: 3;\\n}\\n\\n.contact-tab {\\n  font-size: 3rem;\\n}\\n\\n.left {\\n  float: left;\\n}\\n\\n.right {\\n  float: right;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact),\n/* harmony export */   \"showContact\": () => (/* binding */ showContact),\n/* harmony export */   \"hideContact\": () => (/* binding */ hideContact)\n/* harmony export */ });\nfunction renderContact() {\n    const content = document.querySelector('#content');\n    const contact = document.createElement('section');\n    contact.classList.add('page-tab', 'contact-tab');\n\n    const left = document.createElement('div');\n    left.classList.add('left');\n    const right = document.createElement('div');\n    right.classList.add('right');\n\n    const phoneTitle = document.createElement('h3');\n    phoneTitle.innerText = 'Phone Number';\n    const phoneNum = document.createElement('h3');\n    phoneNum.innerText = \"(123)456-7890\"\n    const addressTitle = document.createElement('h3')\n    addressTitle.innerText = 'Address';\n    const address = document.createElement('h3');\n    address.innerText = \"123 Main St, New York, NY, 12345\";\n\n    left.append(phoneTitle, phoneNum, addressTitle, address);\n    right.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24195.10207631814!2d-74.0248049622402!3d40.70947964570727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18049ba121%3A0xebaf26c536e06652!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1645995727232!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>';\n\n    \n    contact.append(left, right);\n    content.appendChild(contact);\n}\n\nfunction showContact() {\n    const contact = document.querySelector('.contact-tab');\n    contact.classList.remove('hidden');\n    const contactLink = document.querySelector('.contact-link');\n    contactLink.classList.add('selected');\n}\n\nfunction hideContact() {\n    const contact = document.querySelector('.contact-tab');\n    contact.classList.add('hidden');\n    const contactLink = document.querySelector('.contact-link');\n    contactLink.classList.remove('selected');\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome),\n/* harmony export */   \"showHome\": () => (/* binding */ showHome),\n/* harmony export */   \"hideHome\": () => (/* binding */ hideHome)\n/* harmony export */ });\nfunction renderHome() {\n    const content = document.querySelector('#content');\n    const home = document.createElement('section');\n    home.classList.add('page-tab', 'home-tab');\n    const about = document.createElement('div');\n    about.classList.add('about');\n    const aboutTitle = document.createElement('h1');\n    aboutTitle.innerText = 'About Us'\n    const aboutBody = document.createElement('p');\n    aboutBody.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus corrupti eveniet quo aperiam ullam repellat provident velit architecto vel quia repudiandae sequi omnis, obcaecati eos quos aliquid sint labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus corrupti eveniet quo aperiam ullam repellat provident velit architecto vel quia repudiandae sequi omnis, obcaecati eos quos aliquid sint labore?';\n    const aboutImgContainer = document.createElement('div');\n    aboutImgContainer.classList.add('img-container');\n    aboutImgContainer.innerHTML = `<img src=\"../assets/img/family.jpeg\" alt=\"Bob's Burger's Staff\">`;\n    \n    about.appendChild(aboutTitle);\n    about.appendChild(aboutBody);\n    home.appendChild(about);\n    home.appendChild(aboutImgContainer);\n    content.appendChild(home);\n}\n\nfunction showHome() {\n    const home = document.querySelector('.home-tab');\n    home.classList.remove('hidden');\n    const homeLink = document.querySelector('.home-link');\n    homeLink.classList.add('selected');\n}\n\nfunction hideHome() {\n    const home = document.querySelector('.home-tab');\n    home.classList.add('hidden');\n    const homeLink = document.querySelector('.home-link');\n    homeLink.classList.remove('selected');\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();\n\nconst homeLink = document.querySelector('.home-link');\nhomeLink.addEventListener('click', () => {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.showHome)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.hideMenu)();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.hideContact)();\n});\n\nconst menuLink = document.querySelector('.menu-link');\nmenuLink.addEventListener('click', () => {\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.showMenu)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.hideHome)();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.hideContact)();\n});\n\nconst contactLink = document.querySelector('.contact-link');\ncontactLink.addEventListener('click', () => {\n    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.showContact)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_3__.hideHome)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.hideMenu)();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu),\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu),\n/* harmony export */   \"hideMenu\": () => (/* binding */ hideMenu)\n/* harmony export */ });\nfunction renderMenu() {\n    const content = document.querySelector('#content');\n    const menu = document.createElement('section');\n    menu.classList.add('page-tab', 'menu-tab');\n    const menuTitle = document.createElement('h1');\n    menuTitle.innerText = \"Menu\";\n    const menuGrid = document.createElement('div');\n    menuGrid.classList.add('menu-grid');\n\n    const hamburger = makeMenuItem('Hamburger', 3.50, \"A plain hamburger with pickles, onion, tomatoes, lettuce, and ketchup.\", \"https://www.inspiredtaste.net/wp-content/uploads/2016/08/Easy-Homemade-Hamburger-Recipe-2-1200.jpg\")\n    hamburger.classList.add('hamburger');\n\n    const cheeseburger = makeMenuItem('Cheeseburger', 4.00, \"A cheeseburger with pickles, onion, tomatoes, lettuce, and ketchup.\", \"https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg\")\n    cheeseburger.classList.add('cheeseburger');\n\n    const baconCheeseburger = makeMenuItem('Bacon Cheeseburger', 4.75, \"A cheeseburger with maple bacon, pickles, onion, tomatoes, lettuce, and ketchup.\", \"https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-3-480x270.jpg\")\n    baconCheeseburger.classList.add('bacon-cheeseburger');\n\n    const veggieBurger = makeMenuItem('Veggie Burger', 4.50, \"A blackbean veggie burger with pickles, onion, tomatoes, spinach, and veggienaise.\", \"https://i.ytimg.com/vi/a19EY3YNStA/maxresdefault.jpg\")\n    veggieBurger.classList.add('veggie-burger');\n\n    const fries = makeMenuItem('French Fries', 2.50, \"Lightly salted french fries\", \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpHJHN1zDgCZNBz058FfF-eECHInpXogSGA&usqp=CAU\")\n    fries.classList.add('fries');\n\n    const drink = makeMenuItem('Drink', 1.50, \"Your choice of soda, juice, or water\", \"https://s3.envato.com/files/143203357/Preview%20Image%20Set/04.jpg\")\n    drink.classList.add('drink');\n\n    menuGrid.append(hamburger, cheeseburger, baconCheeseburger, veggieBurger, fries, drink);\n    menu.append(menuTitle, menuGrid);\n    content.appendChild(menu);\n}\n\nfunction makeMenuItem (name, price, description, imgURL) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menu-item');\n    const itemName =  document.createElement('h2');\n    itemName.innerText = name;\n    const itemPrice = document.createElement('span');\n    itemPrice.innerText = `$${price}`;\n    const itemDescription = document.createElement('p');\n    itemDescription.innerText = description;\n    const itemImg = document.createElement('div');\n    itemImg.innerHTML = `<img src=\"${imgURL}\" alt=\"${name}\">`;\n\n    menuItem.append(itemName, itemPrice, itemDescription, itemImg);\n\n    return menuItem;\n}\n\nfunction showMenu() {\n    const menu = document.querySelector('.menu-tab');\n    menu.classList.remove('hidden');\n    const menuLink = document.querySelector('.menu-link');\n    menuLink.classList.add('selected');\n}\n\nfunction hideMenu() {\n    const menu = document.querySelector('.menu-tab');\n    menu.classList.add('hidden');\n    const menuLink = document.querySelector('.menu-link');\n    menuLink.classList.remove('selected');\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n//Renders the navbar for the page\nfunction renderNav() {\n    const content = document.querySelector('#content');\n    //Creating all of the header elements\n    const header = document.createElement('div');\n    const imgContainer = document.createElement('div');\n    imgContainer.classList.add('img-container');\n    imgContainer.innerHTML = `<img src=\"../assets/img/bobs-burgers.png\" alt=\"Bob's Burger's Sign\">`;\n    const navBar = document.createElement('nav');\n    const ul = document.createElement('ul');\n    const li1 = document.createElement('li');\n    const li2 = document.createElement('li');\n    const li3 = document.createElement('li');\n    const homeLink = document.createElement('button');\n    homeLink.classList.add('home-link');\n    const menuLink = document.createElement('button');\n    menuLink.classList.add('menu-link');\n    const contactLink = document.createElement('button');\n    contactLink.classList.add('contact-link');\n\n    homeLink.innerHTML = 'Home';\n    menuLink.innerHTML = 'Menu';\n    contactLink.innerHTML = 'Contact';\n\n    //Appending header elements\n    li1.appendChild(homeLink);\n    li2.appendChild(menuLink);\n    li3.appendChild(contactLink);\n    ul.append(li1, li2, li3);\n    navBar.appendChild(ul);\n    header.append(imgContainer, navBar);\n    content.appendChild(header);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nfunction pageLoad() {\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.renderContact)();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.showHome)();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.hideMenu)();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.hideContact)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;