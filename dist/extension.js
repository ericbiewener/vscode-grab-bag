module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/editor-manipulation.ts":
/*!************************************!*\
  !*** ./src/editor-manipulation.ts ***!
  \************************************/
/*! exports provided: closeAllPanels, moveEditorToOtherGroup, moveCaret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAllPanels", function() { return closeAllPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveEditorToOtherGroup", function() { return moveEditorToOtherGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveCaret", function() { return moveCaret; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

async function closeAllPanels() {
  vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.closePanel');
  await vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.maximizeEditor');
  vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.evenEditorWidths');
}
function moveEditorToOtherGroup() {
  const editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor;
  if (!editor || !editor.viewColumn) return;

  if (editor.viewColumn > 1) {
    vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.moveEditorToPreviousGroup');
  } else {
    vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.moveEditorToNextGroup');
  }
}
async function moveCaret(down = true) {
  const editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor;
  if (!editor) return;
  const position = editor.selection.active;
  const change = down ? 10 : -10;
  const newLine = Math.min(editor.document.lineCount, Math.max(0, position.line + change));
  var newPosition = position.with(newLine, position.character);
  var newSelection = new vscode__WEBPACK_IMPORTED_MODULE_0__["Selection"](newPosition, newPosition);
  editor.selection = newSelection;
  vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('revealLine', {
    lineNumber: newLine
  });
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: activate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return activate; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-manipulation */ "./src/editor-manipulation.ts");
/* harmony import */ var _jest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jest */ "./src/jest.ts");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc */ "./src/misc.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");





const activate = async function activate(ctx) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_4__["setExtCtx"])(ctx);
  ctx.subscriptions.push(vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.openCorrespondingTestFile', _jest__WEBPACK_IMPORTED_MODULE_2__["openCorrespondingTestFile"]), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.openCorrespondingSnapshot', _jest__WEBPACK_IMPORTED_MODULE_2__["openCorrespondingSnapshot"]), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.createCorrespondingTestFile', _jest__WEBPACK_IMPORTED_MODULE_2__["createCorrespondingTestFile"]), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.closeAllPanels', _editor_manipulation__WEBPACK_IMPORTED_MODULE_1__["closeAllPanels"]), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.moveEditorToOtherGroup', _editor_manipulation__WEBPACK_IMPORTED_MODULE_1__["moveEditorToOtherGroup"]), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.moveCaretDown', () => Object(_editor_manipulation__WEBPACK_IMPORTED_MODULE_1__["moveCaret"])()), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.moveCaretUp', () => Object(_editor_manipulation__WEBPACK_IMPORTED_MODULE_1__["moveCaret"])(false)), vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('grabBag.gotoSymbolGrouped', _misc__WEBPACK_IMPORTED_MODULE_3__["gotoSymbolGrouped"]));
};

/***/ }),

/***/ "./src/jest.ts":
/*!*********************!*\
  !*** ./src/jest.ts ***!
  \*********************/
/*! exports provided: openCorrespondingTestFile, openCorrespondingSnapshot, createCorrespondingTestFile, getFilenameParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingTestFile", function() { return openCorrespondingTestFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingSnapshot", function() { return openCorrespondingSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCorrespondingTestFile", function() { return createCorrespondingTestFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilenameParts", function() { return getFilenameParts; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);




async function openCorrespondingTestFile() {
  const editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;
  if (!editor) return;
  const filepath = editor.document.fileName;
  const filenameParts = getFilenameParts(filepath);
  if (filenameParts.length === 1) return;
  const dir = path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath);
  let filepathToShow;
  let testFilepath;

  if (filenameParts[filenameParts.length - 1] === 'snap') {
    // Snapshot
    filepathToShow = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(dir, '..', path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath, '.snap'));
    testFilepath = filepathToShow;
  } else if (filenameParts[filenameParts.length - 2] === 'test') {
    // Test file
    filenameParts.splice(-2, 1);
    filepathToShow = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(dir, '..', filenameParts.join('.'));
    testFilepath = filepath;
  } else {
    // Production Code
    filepathToShow = getCorrespondingTestFilepath(filepath);
    testFilepath = filepathToShow;
  }

  const {
    testCommand
  } = await Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getConfiguration"])();

  if (testCommand) {
    const relativePath = vscode__WEBPACK_IMPORTED_MODULE_1__["workspace"].asRelativePath(testFilepath);
    await vscode__WEBPACK_IMPORTED_MODULE_1__["env"].clipboard.writeText(`${testCommand} ${relativePath}`);
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showTextDocument"])(filepathToShow, true);
}
function openCorrespondingSnapshot() {
  const editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;
  if (!editor) return;
  const filepath = editor.document.fileName;
  const snapshot = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath), '__snapshots__', `${path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath)}.snap`);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showTextDocument"])(snapshot, true);
}
function createCorrespondingTestFile() {
  const editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;
  if (!editor) return;
  const testFilepath = getCorrespondingTestFilepath(editor.document.fileName);

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isFile"])(testFilepath)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["mkdirSync"])(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(testFilepath), {
      recursive: true
    });
    fs__WEBPACK_IMPORTED_MODULE_3___default.a.writeFileSync(testFilepath, '');
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showTextDocument"])(testFilepath, true);
}
function getFilenameParts(filepath) {
  return path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath).split('.');
}

function getCorrespondingTestFilepath(filepath) {
  const filenameParts = getFilenameParts(filepath);
  filenameParts.splice(-1, 0, 'test');
  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath), '__tests__', filenameParts.join('.'));
}

/***/ }),

/***/ "./src/misc.ts":
/*!*********************!*\
  !*** ./src/misc.ts ***!
  \*********************/
/*! exports provided: gotoSymbolGrouped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gotoSymbolGrouped", function() { return gotoSymbolGrouped; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

function gotoSymbolGrouped() {
  vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.quickOpen', '@:');
}

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: CTX, setExtCtx, isFile, mkdirSync, showTextDocument, getConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTX", function() { return CTX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtCtx", function() { return setExtCtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdirSync", function() { return mkdirSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTextDocument", function() { return showTextDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return getConfiguration; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);


let CTX;
function setExtCtx(ctx) {
  CTX = ctx;
}
function isFile(filepath) {
  try {
    return fs__WEBPACK_IMPORTED_MODULE_0___default.a.statSync(filepath).isFile();
  } catch (e) {
    if (e.code !== 'ENOENT') throw e; // File might exist, but something else went wrong (e.g. permissions error)

    return false;
  }
}
function mkdirSync(dir, options) {
  try {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(dir, options);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}
async function showTextDocument(filepath, moveToOtherColumn = false, preserveFocus = false) {
  if (!isFile(filepath)) return;
  let viewColumn = 1;
  const editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;

  if (moveToOtherColumn && editor && editor.viewColumn) {
    viewColumn = editor.viewColumn + (editor.viewColumn > 1 ? -1 : 1);
  }

  const newEditor = await vscode__WEBPACK_IMPORTED_MODULE_1__["window"].showTextDocument(vscode__WEBPACK_IMPORTED_MODULE_1__["Uri"].file(filepath), {
    preserveFocus,
    preview: false
  });
  if (newEditor.viewColumn !== viewColumn) moveEditorToOtherGroup();
}

function moveEditorToOtherGroup() {
  const editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;
  if (!editor || !editor.viewColumn) return;

  if (editor.viewColumn > 1) {
    vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].executeCommand('workbench.action.moveEditorToPreviousGroup');
  } else {
    vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].executeCommand('workbench.action.moveEditorToNextGroup');
  }
}

function getConfiguration(resource) {
  return vscode__WEBPACK_IMPORTED_MODULE_1__["workspace"].getConfiguration('grabBag', resource);
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ })

/******/ });
//# sourceMappingURL=extension.js.map