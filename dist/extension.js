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

/***/ "./node_modules/@ericbiewener/utils/dist/isFile.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ericbiewener/utils/dist/isFile.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFile = void 0;
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
exports.isFile = (filepath) => {
    try {
        return fs_1.default.statSync(filepath).isFile();
    }
    catch (e) {
        if (e.code !== 'ENOENT')
            throw e; // File might exist, but something else went wrong (e.g. permissions error)
        return false;
    }
};
//# sourceMappingURL=isFile.js.map

/***/ }),

/***/ "./node_modules/@ericbiewener/utils/src/createDir.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@ericbiewener/utils/src/createDir.ts ***!
  \***********************************************************/
/*! exports provided: createDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDir", function() { return createDir; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var createDir = function createDir(dirpath, options) {
  try {
    fs__WEBPACK_IMPORTED_MODULE_0___default.a.mkdirSync(dirpath, _objectSpread({
      recursive: true
    }, options));
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
    return false;
  }

  return true;
};

/***/ }),

/***/ "./node_modules/@ericbiewener/utils/src/isFile.ts":
/*!********************************************************!*\
  !*** ./node_modules/@ericbiewener/utils/src/isFile.ts ***!
  \********************************************************/
/*! exports provided: isFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

var isFile = function isFile(filepath) {
  try {
    return fs__WEBPACK_IMPORTED_MODULE_0___default.a.statSync(filepath).isFile();
  } catch (e) {
    if (e.code !== 'ENOENT') throw e; // File might exist, but something else went wrong (e.g. permissions error)

    return false;
  }
};

/***/ }),

/***/ "./node_modules/@ericbiewener/utils/src/removeEndOfString.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@ericbiewener/utils/src/removeEndOfString.ts ***!
  \*******************************************************************/
/*! exports provided: removeEndOfString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEndOfString", function() { return removeEndOfString; });
var removeEndOfString = function removeEndOfString(str) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  var idx = str.lastIndexOf(separator);
  return idx < 0 ? str : str.slice(0, idx);
};

/***/ }),

/***/ "./node_modules/@ericbiewener/utils/src/removeFileExt.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@ericbiewener/utils/src/removeFileExt.ts ***!
  \***************************************************************/
/*! exports provided: removeFileExt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFileExt", function() { return removeFileExt; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

var removeFileExt = function removeFileExt(filepath, extensions) {
  var ext = path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(filepath);
  if (!ext) return filepath;
  return !extensions || extensions.includes(ext.slice(1)) ? filepath.slice(0, -ext.length) : filepath;
};

/***/ }),

/***/ "./node_modules/@ericbiewener/utils/src/writeFileIfNew.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@ericbiewener/utils/src/writeFileIfNew.ts ***!
  \****************************************************************/
/*! exports provided: writeFileIfNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFileIfNew", function() { return writeFileIfNew; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createDir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDir */ "./node_modules/@ericbiewener/utils/src/createDir.ts");
/* harmony import */ var _isFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isFile */ "./node_modules/@ericbiewener/utils/src/isFile.ts");




var writeFileIfNew = function writeFileIfNew(filepath) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (Object(_isFile__WEBPACK_IMPORTED_MODULE_3__["isFile"])(filepath)) return false;
  Object(_createDir__WEBPACK_IMPORTED_MODULE_2__["createDir"])(path__WEBPACK_IMPORTED_MODULE_1___default.a.dirname(filepath));
  fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filepath, data);
  return true;
};

/***/ }),

/***/ "./node_modules/is-docker/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-docker/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const fs = __webpack_require__(/*! fs */ "fs");

let isDocker;

function hasDockerEnv() {
	try {
		fs.statSync('/.dockerenv');
		return true;
	} catch (_) {
		return false;
	}
}

function hasDockerCGroup() {
	try {
		return fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch (_) {
		return false;
	}
}

module.exports = () => {
	if (isDocker === undefined) {
		isDocker = hasDockerEnv() || hasDockerCGroup();
	}

	return isDocker;
};


/***/ }),

/***/ "./node_modules/is-wsl/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-wsl/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(/*! os */ "os");
const fs = __webpack_require__(/*! fs */ "fs");
const isDocker = __webpack_require__(/*! is-docker */ "./node_modules/is-docker/index.js");

const isWsl = () => {
	if (process.platform !== 'linux') {
		return false;
	}

	if (os.release().toLowerCase().includes('microsoft')) {
		if (isDocker()) {
			return false;
		}

		return true;
	}

	try {
		return fs.readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft') ?
			!isDocker() : false;
	} catch (_) {
		return false;
	}
};

if (process.env.__IS_WSL_TEST__) {
	module.exports = isWsl;
} else {
	module.exports = isWsl();
}


/***/ }),

/***/ "./node_modules/open/index.js":
/*!************************************!*\
  !*** ./node_modules/open/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const {promisify} = __webpack_require__(/*! util */ "util");
const path = __webpack_require__(/*! path */ "path");
const childProcess = __webpack_require__(/*! child_process */ "child_process");
const fs = __webpack_require__(/*! fs */ "fs");
const isWsl = __webpack_require__(/*! is-wsl */ "./node_modules/is-wsl/index.js");
const isDocker = __webpack_require__(/*! is-docker */ "./node_modules/is-docker/index.js");

const pAccess = promisify(fs.access);
const pExecFile = promisify(childProcess.execFile);

// Path to included `xdg-open`.
const localXdgOpenPath = path.join(__dirname, 'xdg-open');

// Convert a path from WSL format to Windows format:
// `/mnt/c/Program Files/Example/MyApp.exe` → `C:\Program Files\Example\MyApp.exe`
const wslToWindowsPath = async path => {
	const {stdout} = await pExecFile('wslpath', ['-w', path]);
	return stdout.trim();
};

// Convert a path from Windows format to WSL format
const windowsToWslPath = async path => {
	const {stdout} = await pExecFile('wslpath', [path]);
	return stdout.trim();
};

// Get an environment variable from Windows
const wslGetWindowsEnvVar = async envVar => {
	const {stdout} = await pExecFile('wslvar', [envVar]);
	return stdout.trim();
};

module.exports = async (target, options) => {
	if (typeof target !== 'string') {
		throw new TypeError('Expected a `target`');
	}

	options = {
		wait: false,
		background: false,
		allowNonzeroExitCode: false,
		...options
	};

	let command;
	let {app} = options;
	let appArguments = [];
	const cliArguments = [];
	const childProcessOptions = {};

	if (Array.isArray(app)) {
		appArguments = app.slice(1);
		app = app[0];
	}

	if (process.platform === 'darwin') {
		command = 'open';

		if (options.wait) {
			cliArguments.push('--wait-apps');
		}

		if (options.background) {
			cliArguments.push('--background');
		}

		if (app) {
			cliArguments.push('-a', app);
		}
	} else if (process.platform === 'win32' || (isWsl && !isDocker())) {
		const windowsRoot = isWsl ? await wslGetWindowsEnvVar('systemroot') : process.env.SYSTEMROOT;
		command = String.raw`${windowsRoot}\System32\WindowsPowerShell\v1.0\powershell${isWsl ? '.exe' : ''}`;
		cliArguments.push(
			'-NoProfile',
			'-NonInteractive',
			'–ExecutionPolicy',
			'Bypass',
			'-EncodedCommand'
		);

		if (isWsl) {
			command = await windowsToWslPath(command);
		} else {
			childProcessOptions.windowsVerbatimArguments = true;
		}

		const encodedArguments = ['Start'];

		if (options.wait) {
			encodedArguments.push('-Wait');
		}

		if (app) {
			if (isWsl && app.startsWith('/mnt/')) {
				const windowsPath = await wslToWindowsPath(app);
				app = windowsPath;
			}

			// Double quote with double quotes to ensure the inner quotes are passed through.
			// Inner quotes are delimited for PowerShell interpretation with backticks.
			encodedArguments.push(`"\`"${app}\`""`, '-ArgumentList');
			appArguments.unshift(target);
		} else {
			encodedArguments.push(`"\`"${target}\`""`);
		}

		if (appArguments.length > 0) {
			appArguments = appArguments.map(arg => `"\`"${arg}\`""`);
			encodedArguments.push(appArguments.join(','));
		}

		// Using Base64-encoded command, accepted by PowerShell, to allow special characters.
		target = Buffer.from(encodedArguments.join(' '), 'utf16le').toString('base64');
	} else {
		if (app) {
			command = app;
		} else {
			// When bundled by Webpack, there's no actual package file path and no local `xdg-open`.
			const isBundled =  false || __dirname === '/';

			// Check if local `xdg-open` exists and is executable.
			let exeLocalXdgOpen = false;
			try {
				await pAccess(localXdgOpenPath, fs.constants.X_OK);
				exeLocalXdgOpen = true;
			} catch (_) {}

			const useSystemXdgOpen = process.versions.electron ||
				process.platform === 'android' || isBundled || !exeLocalXdgOpen;
			command = useSystemXdgOpen ? 'xdg-open' : localXdgOpenPath;
		}

		if (appArguments.length > 0) {
			cliArguments.push(...appArguments);
		}

		if (!options.wait) {
			// `xdg-open` will block the process unless stdio is ignored
			// and it's detached from the parent even if it's unref'd.
			childProcessOptions.stdio = 'ignore';
			childProcessOptions.detached = true;
		}
	}

	cliArguments.push(target);

	if (process.platform === 'darwin' && appArguments.length > 0) {
		cliArguments.push('--args', ...appArguments);
	}

	const subprocess = childProcess.spawn(command, cliArguments, childProcessOptions);

	if (options.wait) {
		return new Promise((resolve, reject) => {
			subprocess.once('error', reject);

			subprocess.once('close', exitCode => {
				if (options.allowNonzeroExitCode && exitCode > 0) {
					reject(new Error(`Exited with code ${exitCode}`));
					return;
				}

				resolve(subprocess);
			});
		});
	}

	subprocess.unref();

	return subprocess;
};

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/correspondingCssModule.ts":
/*!***************************************!*\
  !*** ./src/correspondingCssModule.ts ***!
  \***************************************/
/*! exports provided: openCorrespondingCssModule, createCorrespondingCssModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingCssModule", function() { return openCorrespondingCssModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCorrespondingCssModule", function() { return createCorrespondingCssModule; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ericbiewener_utils_src_writeFileIfNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericbiewener/utils/src/writeFileIfNew */ "./node_modules/@ericbiewener/utils/src/writeFileIfNew.ts");
/* harmony import */ var _ericbiewener_utils_src_removeFileExt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ericbiewener/utils/src/removeFileExt */ "./node_modules/@ericbiewener/utils/src/removeFileExt.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var CSS_EXTENSIONS = ['css', 'pcss'];
var JS_EXTENSIONS = ['js', 'jsx', 'ts', 'tsx'];
var openCorrespondingCssModule = function openCorrespondingCssModule() {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;
  if (!editor) return;
  var filepath = editor.document.fileName;
  var ext = path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(filepath);
  var correspondingFile = CSS_EXTENSIONS.includes(ext) ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["findFileForExtensions"])(filepath, JS_EXTENSIONS) : Object(_utils__WEBPACK_IMPORTED_MODULE_4__["findFileForExtensions"])(filepath, CSS_EXTENSIONS);
  if (correspondingFile) Object(_utils__WEBPACK_IMPORTED_MODULE_4__["showTextDocument"])(correspondingFile);
};
var createCorrespondingCssModule = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var editor, _yield$getExtensionCo, cssModuleFileExtension, filepath;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;

            if (editor) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getExtensionConfig"])();

          case 5:
            _yield$getExtensionCo = _context.sent;
            cssModuleFileExtension = _yield$getExtensionCo.cssModuleFileExtension;
            filepath = "".concat(Object(_ericbiewener_utils_src_removeFileExt__WEBPACK_IMPORTED_MODULE_3__["removeFileExt"])(editor.document.fileName), ".").concat(cssModuleFileExtension);
            Object(_ericbiewener_utils_src_writeFileIfNew__WEBPACK_IMPORTED_MODULE_2__["writeFileIfNew"])(filepath);
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["showTextDocument"])(filepath);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createCorrespondingCssModule() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/editor-manipulation.ts":
/*!************************************!*\
  !*** ./src/editor-manipulation.ts ***!
  \************************************/
/*! exports provided: closeAllPanels, moveEditorToOtherGroup, consolidateToTwoEditors, moveCaret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAllPanels", function() { return closeAllPanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveEditorToOtherGroup", function() { return moveEditorToOtherGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolidateToTwoEditors", function() { return consolidateToTwoEditors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveCaret", function() { return moveCaret; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function closeAllPanels() {
  return _closeAllPanels.apply(this, arguments);
}

function _closeAllPanels() {
  _closeAllPanels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.closePanel');
            _context.next = 3;
            return vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.maximizeEditor');

          case 3:
            vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.evenEditorWidths');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _closeAllPanels.apply(this, arguments);
}

function moveEditorToOtherGroup() {
  return _moveEditorToOtherGroup.apply(this, arguments);
}

function _moveEditorToOtherGroup() {
  _moveEditorToOtherGroup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var editor, _yield$getExtensionCo, maxEditorGroups;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor;

            if (!(!editor || !editor.viewColumn)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.next = 5;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getExtensionConfig"])();

          case 5:
            _yield$getExtensionCo = _context2.sent;
            maxEditorGroups = _yield$getExtensionCo.maxEditorGroups;

            if (editor.viewColumn >= maxEditorGroups) {
              vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.moveEditorToFirstGroup');
            } else {
              vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.moveEditorToNextGroup');
            }

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _moveEditorToOtherGroup.apply(this, arguments);
}

function consolidateToTwoEditors() {
  return _consolidateToTwoEditors.apply(this, arguments);
}

function _consolidateToTwoEditors() {
  _consolidateToTwoEditors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var editor;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('here');

            while (editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].visibleTextEditors.find(function (e) {
              return e.viewColumn && e.viewColumn > 2;
            })) {
              console.log(editor);
              vscode__WEBPACK_IMPORTED_MODULE_0__["window"].showTextDocument(editor.document.uri);
              vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.moveEditorToPreviousGroup');
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _consolidateToTwoEditors.apply(this, arguments);
}

function moveCaret() {
  return _moveCaret.apply(this, arguments);
}

function _moveCaret() {
  _moveCaret = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var down,
        editor,
        position,
        change,
        newLine,
        newPosition,
        newSelection,
        _args4 = arguments;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            down = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : true;
            editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor;

            if (editor) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return");

          case 4:
            position = editor.selection.active;
            change = down ? 10 : -10;
            newLine = Math.min(editor.document.lineCount, Math.max(0, position.line + change));
            newPosition = position["with"](newLine, position.character);
            newSelection = new vscode__WEBPACK_IMPORTED_MODULE_0__["Selection"](newPosition, newPosition);
            editor.selection = newSelection;
            vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('revealLine', {
              lineNumber: newLine
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _moveCaret.apply(this, arguments);
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
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-manipulation */ "./src/editor-manipulation.ts");
/* harmony import */ var _jest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jest */ "./src/jest/index.ts");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc */ "./src/misc.ts");
/* harmony import */ var _correspondingCssModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./correspondingCssModule */ "./src/correspondingCssModule.ts");
/* harmony import */ var _open_coverage_report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-coverage-report */ "./src/open-coverage-report.ts");
/* harmony import */ var _openCorrespondingReduxContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./openCorrespondingReduxContainer */ "./src/openCorrespondingReduxContainer.ts");
/* harmony import */ var _update_index_file_to_export_all_from_dir__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-index-file-to-export-all-from-dir */ "./src/update-index-file-to-export-all-from-dir.ts");
/* harmony import */ var _toggle_jest_test__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toggle-jest-test */ "./src/toggle-jest-test.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var activate = /*#__PURE__*/function () {
  var _activate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.subscriptions.push(vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openCorrespondingCssModule', _correspondingCssModule__WEBPACK_IMPORTED_MODULE_5__["openCorrespondingCssModule"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.createCorrespondingCssModule', _correspondingCssModule__WEBPACK_IMPORTED_MODULE_5__["createCorrespondingCssModule"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.copyTestCommand', _jest__WEBPACK_IMPORTED_MODULE_3__["copyTestCommand"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openCorrespondingTestFile', _jest__WEBPACK_IMPORTED_MODULE_3__["openCorrespondingTestFile"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openCorrespondingSnapshot', _jest__WEBPACK_IMPORTED_MODULE_3__["openCorrespondingSnapshot"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.createCorrespondingTestFile', _jest__WEBPACK_IMPORTED_MODULE_3__["createCorrespondingTestFile"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openCorrespondingReduxContainer', _openCorrespondingReduxContainer__WEBPACK_IMPORTED_MODULE_7__["openCorrespondingReduxContainer"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.closeAllPanels', _editor_manipulation__WEBPACK_IMPORTED_MODULE_2__["closeAllPanels"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.moveEditorToOtherGroup', _editor_manipulation__WEBPACK_IMPORTED_MODULE_2__["moveEditorToOtherGroup"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.consolidateToTwoEditors', _editor_manipulation__WEBPACK_IMPORTED_MODULE_2__["consolidateToTwoEditors"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.moveCaretDown', function () {
              return Object(_editor_manipulation__WEBPACK_IMPORTED_MODULE_2__["moveCaret"])();
            }), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.moveCaretUp', function () {
              return Object(_editor_manipulation__WEBPACK_IMPORTED_MODULE_2__["moveCaret"])(false);
            }), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.gotoSymbolGrouped', _misc__WEBPACK_IMPORTED_MODULE_4__["gotoSymbolGrouped"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openAllFilesOrLinksListedInDocument', _misc__WEBPACK_IMPORTED_MODULE_4__["openAllFilesOrLinksListedInDocument"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openFileInDefaultProgram', _misc__WEBPACK_IMPORTED_MODULE_4__["openFileInDefaultProgram"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.openCoverageReport', _open_coverage_report__WEBPACK_IMPORTED_MODULE_6__["openCoverageReport"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.updateIndexFileToExportAllFromDir', _update_index_file_to_export_all_from_dir__WEBPACK_IMPORTED_MODULE_8__["updateIndexFileToExportAllFromDir"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.toggleJestOnly', _toggle_jest_test__WEBPACK_IMPORTED_MODULE_9__["toggleJestTest"]), vscode__WEBPACK_IMPORTED_MODULE_1__["commands"].registerCommand('grabBag.toggleJestSkip', function () {
              return Object(_toggle_jest_test__WEBPACK_IMPORTED_MODULE_9__["toggleJestTest"])(false);
            }) // commands.registerCommand('grabBag.toggleJestOnlyExclusive', () =>
            //   toggleJestTestExclusive()
            // )
            );

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function activate(_x) {
    return _activate.apply(this, arguments);
  }

  return activate;
}();

/***/ }),

/***/ "./src/jest/copy-nx-test-command.ts":
/*!******************************************!*\
  !*** ./src/jest/copy-nx-test-command.ts ***!
  \******************************************/
/*! exports provided: copyNxTestCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyNxTestCommand", function() { return copyNxTestCommand; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_get_workspace_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/get-workspace-root */ "./src/utils/get-workspace-root.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var copyNxTestCommand = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _vsc$window$activeTex;

    var fileName, testPath, _JSON$parse, projects, projectName, name, config;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileName = (_vsc$window$activeTex = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.activeTextEditor) === null || _vsc$window$activeTex === void 0 ? void 0 : _vsc$window$activeTex.document.fileName;

            if (fileName) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            testPath = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.workspace.asRelativePath(fileName);
            _context.t0 = JSON;
            _context.next = 7;
            return fs__WEBPACK_IMPORTED_MODULE_2__["promises"].readFile(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(Object(_utils_get_workspace_root__WEBPACK_IMPORTED_MODULE_3__["getWorkspaceRoot"])(), 'workspace.json'), 'utf8');

          case 7:
            _context.t1 = _context.sent;
            _JSON$parse = _context.t0.parse.call(_context.t0, _context.t1);
            projects = _JSON$parse.projects;
            _context.t2 = regeneratorRuntime.keys(projects);

          case 11:
            if ((_context.t3 = _context.t2()).done) {
              _context.next = 20;
              break;
            }

            name = _context.t3.value;
            config = projects[name];

            if (testPath.startsWith(config.root)) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("continue", 11);

          case 16:
            projectName = name;
            return _context.abrupt("break", 20);

          case 20:
            if (projectName) {
              _context.next = 23;
              break;
            }

            vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.showErrorMessage('Could not find Nx project name for active file.');
            return _context.abrupt("return");

          case 23:
            _context.next = 25;
            return vscode__WEBPACK_IMPORTED_MODULE_0___default.a.env.clipboard.writeText("yarn test ".concat(projectName, " --skip-nx-cache --codeCoverage 0 --testFile ").concat(testPath, " --watch"));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function copyNxTestCommand() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/jest/copy-test-command.ts":
/*!***************************************!*\
  !*** ./src/jest/copy-test-command.ts ***!
  \***************************************/
/*! exports provided: copyTestCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTestCommand", function() { return copyTestCommand; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ericbiewener_utils_dist_isFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericbiewener/utils/dist/isFile */ "./node_modules/@ericbiewener/utils/dist/isFile.js");
/* harmony import */ var _ericbiewener_utils_dist_isFile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericbiewener_utils_dist_isFile__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_get_workspace_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/get-workspace-root */ "./src/utils/get-workspace-root.ts");
/* harmony import */ var _copy_nx_test_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copy-nx-test-command */ "./src/jest/copy-nx-test-command.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var copyTestCommand = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filepath) {
    var nxJson, _yield$getExtensionCo, testCommand, relativePath;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nxJson = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(Object(_utils_get_workspace_root__WEBPACK_IMPORTED_MODULE_4__["getWorkspaceRoot"])(), 'nx.json');

            if (!Object(_ericbiewener_utils_dist_isFile__WEBPACK_IMPORTED_MODULE_2__["isFile"])(nxJson)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", Object(_copy_nx_test_command__WEBPACK_IMPORTED_MODULE_5__["copyNxTestCommand"])());

          case 3:
            _context.next = 5;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getExtensionConfig"])();

          case 5:
            _yield$getExtensionCo = _context.sent;
            testCommand = _yield$getExtensionCo.testCommand;

            if (testCommand) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return");

          case 9:
            relativePath = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.workspace.asRelativePath(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["maybeSwapExtension"])(filepath));
            _context.next = 12;
            return vscode__WEBPACK_IMPORTED_MODULE_0___default.a.env.clipboard.writeText("".concat(testCommand, " ").concat(relativePath));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function copyTestCommand(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/jest/create-corresponding-test-file.ts":
/*!****************************************************!*\
  !*** ./src/jest/create-corresponding-test-file.ts ***!
  \****************************************************/
/*! exports provided: createCorrespondingTestFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCorrespondingTestFile", function() { return createCorrespondingTestFile; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ericbiewener_utils_src_writeFileIfNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ericbiewener/utils/src/writeFileIfNew */ "./node_modules/@ericbiewener/utils/src/writeFileIfNew.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _get_corresponding_test_filepath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-corresponding-test-filepath */ "./src/jest/get-corresponding-test-filepath.ts");
/* harmony import */ var _copy_test_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copy-test-command */ "./src/jest/copy-test-command.ts");





var createCorrespondingTestFile = function createCorrespondingTestFile() {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.activeTextEditor;
  if (!editor) return;
  var testFilepath = Object(_get_corresponding_test_filepath__WEBPACK_IMPORTED_MODULE_3__["getCorrespondingTestFilepath"])(editor.document.fileName);

  try {
    Object(_ericbiewener_utils_src_writeFileIfNew__WEBPACK_IMPORTED_MODULE_1__["writeFileIfNew"])(testFilepath);
    Object(_copy_test_command__WEBPACK_IMPORTED_MODULE_4__["copyTestCommand"])(testFilepath);
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showTextDocument"])(testFilepath);
  } catch (e) {
    console.info(':: ', e);
  }
};

/***/ }),

/***/ "./src/jest/get-corresponding-test-filepath.ts":
/*!*****************************************************!*\
  !*** ./src/jest/get-corresponding-test-filepath.ts ***!
  \*****************************************************/
/*! exports provided: getCorrespondingTestFilepath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrespondingTestFilepath", function() { return getCorrespondingTestFilepath; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

var getCorrespondingTestFilepath = function getCorrespondingTestFilepath(filepath) {
  var filenameParts = path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath).split('.');
  filenameParts.splice(-1, 0, 'test');
  return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath), '__tests__', filenameParts.join('.'));
};

/***/ }),

/***/ "./src/jest/index.ts":
/*!***************************!*\
  !*** ./src/jest/index.ts ***!
  \***************************/
/*! exports provided: copyNxTestCommand, copyTestCommand, createCorrespondingTestFile, getCorrespondingTestFilepath, openCorrespondingSnapshot, openCorrespondingTestFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy_nx_test_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-nx-test-command */ "./src/jest/copy-nx-test-command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyNxTestCommand", function() { return _copy_nx_test_command__WEBPACK_IMPORTED_MODULE_0__["copyNxTestCommand"]; });

/* harmony import */ var _copy_test_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-test-command */ "./src/jest/copy-test-command.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyTestCommand", function() { return _copy_test_command__WEBPACK_IMPORTED_MODULE_1__["copyTestCommand"]; });

/* harmony import */ var _create_corresponding_test_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-corresponding-test-file */ "./src/jest/create-corresponding-test-file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCorrespondingTestFile", function() { return _create_corresponding_test_file__WEBPACK_IMPORTED_MODULE_2__["createCorrespondingTestFile"]; });

/* harmony import */ var _get_corresponding_test_filepath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-corresponding-test-filepath */ "./src/jest/get-corresponding-test-filepath.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCorrespondingTestFilepath", function() { return _get_corresponding_test_filepath__WEBPACK_IMPORTED_MODULE_3__["getCorrespondingTestFilepath"]; });

/* harmony import */ var _open_corresponding_snapshot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./open-corresponding-snapshot */ "./src/jest/open-corresponding-snapshot.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingSnapshot", function() { return _open_corresponding_snapshot__WEBPACK_IMPORTED_MODULE_4__["openCorrespondingSnapshot"]; });

/* harmony import */ var _open_corresponding_test_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-corresponding-test-file */ "./src/jest/open-corresponding-test-file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingTestFile", function() { return _open_corresponding_test_file__WEBPACK_IMPORTED_MODULE_5__["openCorrespondingTestFile"]; });








/***/ }),

/***/ "./src/jest/open-corresponding-snapshot.ts":
/*!*************************************************!*\
  !*** ./src/jest/open-corresponding-snapshot.ts ***!
  \*************************************************/
/*! exports provided: openCorrespondingSnapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingSnapshot", function() { return openCorrespondingSnapshot; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");



var openCorrespondingSnapshot = function openCorrespondingSnapshot() {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_1___default.a.window.activeTextEditor;
  if (!editor) return;
  var filepath = editor.document.fileName;
  var snapshot = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath), '__snapshots__', "".concat(path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath), ".snap"));
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showTextDocument"])(snapshot);
};

/***/ }),

/***/ "./src/jest/open-corresponding-test-file.ts":
/*!**************************************************!*\
  !*** ./src/jest/open-corresponding-test-file.ts ***!
  \**************************************************/
/*! exports provided: openCorrespondingTestFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingTestFile", function() { return openCorrespondingTestFile; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_corresponding_test_filepath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-corresponding-test-filepath */ "./src/jest/get-corresponding-test-filepath.ts");
/* harmony import */ var _copy_test_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy-test-command */ "./src/jest/copy-test-command.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var openCorrespondingTestFile = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var editor, filepath, filenameParts, dir, filepathToShow, testFilepath;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            editor = vscode__WEBPACK_IMPORTED_MODULE_1___default.a.window.activeTextEditor;

            if (editor) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            filepath = editor.document.fileName;
            filenameParts = path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath).split('.');

            if (!(filenameParts.length === 1)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            dir = path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath);

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
              filepathToShow = Object(_get_corresponding_test_filepath__WEBPACK_IMPORTED_MODULE_2__["getCorrespondingTestFilepath"])(filepath);
              testFilepath = filepathToShow;
            }

            Object(_copy_test_command__WEBPACK_IMPORTED_MODULE_3__["copyTestCommand"])(testFilepath);
            return _context.abrupt("return", Object(_utils__WEBPACK_IMPORTED_MODULE_4__["showTextDocument"])(filepathToShow));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openCorrespondingTestFile() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/misc.ts":
/*!*********************!*\
  !*** ./src/misc.ts ***!
  \*********************/
/*! exports provided: gotoSymbolGrouped, openAllFilesOrLinksListedInDocument, openFileInDefaultProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gotoSymbolGrouped", function() { return gotoSymbolGrouped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAllFilesOrLinksListedInDocument", function() { return openAllFilesOrLinksListedInDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFileInDefaultProgram", function() { return openFileInDefaultProgram; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var open__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! open */ "./node_modules/open/index.js");
/* harmony import */ var open__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(open__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function gotoSymbolGrouped() {
  vscode__WEBPACK_IMPORTED_MODULE_1___default.a.commands.executeCommand('workbench.action.quickOpen', '@:');
}
var openAllFilesOrLinksListedInDocument = function openAllFilesOrLinksListedInDocument() {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_1___default.a.window.activeTextEditor;
  var workspaceFolders = vscode__WEBPACK_IMPORTED_MODULE_1___default.a.workspace.workspaceFolders;
  if (!editor || !workspaceFolders) return;
  var lines = editor.document.getText().split('\n').map(function (l) {
    return l.trim();
  }).filter(Boolean);
  var rootPath = workspaceFolders[0].uri.fsPath;

  var _iterator = _createForOfIteratorHelper(lines),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;

      if (line.startsWith('http')) {
        open__WEBPACK_IMPORTED_MODULE_2___default()(line);
        continue;
      }

      var filepath = !line.startsWith('/') ? path__WEBPACK_IMPORTED_MODULE_0___default.a.join(rootPath, line) : line;
      vscode__WEBPACK_IMPORTED_MODULE_1___default.a.window.showTextDocument(vscode__WEBPACK_IMPORTED_MODULE_1___default.a.Uri.file(filepath), {
        preview: false
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var openFileInDefaultProgram = function openFileInDefaultProgram() {
  var _vsc$window$activeTex;

  var filepath = (_vsc$window$activeTex = vscode__WEBPACK_IMPORTED_MODULE_1___default.a.window.activeTextEditor) === null || _vsc$window$activeTex === void 0 ? void 0 : _vsc$window$activeTex.document.fileName;
  if (filepath) open__WEBPACK_IMPORTED_MODULE_2___default()(filepath);
};

/***/ }),

/***/ "./src/open-coverage-report.ts":
/*!*************************************!*\
  !*** ./src/open-coverage-report.ts ***!
  \*************************************/
/*! exports provided: openCoverageReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCoverageReport", function() { return openCoverageReport; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var open__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! open */ "./node_modules/open/index.js");
/* harmony import */ var open__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(open__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




var openCoverageReport = function openCoverageReport() {
  var _vsc$window$activeTex;

  var filename = (_vsc$window$activeTex = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.activeTextEditor) === null || _vsc$window$activeTex === void 0 ? void 0 : _vsc$window$activeTex.document.fileName;
  if (!filename) return;
  var workspaceRoot = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getWorkspaceRoot"])();
  var relativeFilepath = filename.slice(workspaceRoot.length);
  var libFilepath = relativeFilepath.replace(/\/src.*/, '');
  var coveragePath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(workspaceRoot, 'coverage', libFilepath, 'lcov-report', "".concat(path__WEBPACK_IMPORTED_MODULE_1___default.a.basename(filename), ".html"));
  open__WEBPACK_IMPORTED_MODULE_2___default()(coveragePath, {
    app: 'google chrome'
  });
};

/***/ }),

/***/ "./src/openCorrespondingReduxContainer.ts":
/*!************************************************!*\
  !*** ./src/openCorrespondingReduxContainer.ts ***!
  \************************************************/
/*! exports provided: openCorrespondingReduxContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCorrespondingReduxContainer", function() { return openCorrespondingReduxContainer; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");



var SUFFIX = 'connect';
function openCorrespondingReduxContainer() {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_1__["window"].activeTextEditor;
  if (!editor) return;
  var filepath = editor.document.fileName;
  var parts = path__WEBPACK_IMPORTED_MODULE_0___default.a.basename(filepath).split('.');
  var containerIndex = parts.length - 2;

  if (parts[containerIndex] === SUFFIX) {
    parts.splice(containerIndex, 1);
  } else {
    parts.splice(parts.length - 1, 0, SUFFIX);
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showTextDocument"])(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(path__WEBPACK_IMPORTED_MODULE_0___default.a.dirname(filepath), parts.join('.')));
}

/***/ }),

/***/ "./src/toggle-jest-test.ts":
/*!*********************************!*\
  !*** ./src/toggle-jest-test.ts ***!
  \*********************************/
/*! exports provided: toggleJestTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleJestTest", function() { return toggleJestTest; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");


var DISABLED = /(^\s*)(test|it|describe)\(/;
var ENABLED_ONLY = /(^\s*)(test|it|describe)\.only/;
var ENABLED_SKIP = /(^\s*)(test|it|describe)\.skip/;

var disableLineReplacer = function disableLineReplacer(m, g1, g2) {
  return "".concat(g1).concat(g2);
};

var enableLine = function enableLine(builder, lineNumber, line, useOnly) {
  var modifier = useOnly ? 'only' : 'skip';
  var newLine = line.replace(DISABLED, function (m, g1, g2) {
    return "".concat(g1).concat(g2, ".").concat(modifier, "(");
  });
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["updateLine"])(builder, lineNumber, newLine);
};

var disableLine = function disableLine(builder, lineNumber, line, useOnly) {
  var enabledRegex = useOnly ? ENABLED_ONLY : ENABLED_SKIP;
  var newLine = line.replace(enabledRegex, disableLineReplacer);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["updateLine"])(builder, lineNumber, newLine);
};

var getNewLine = function getNewLine(builder, useOnly) {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor;
  var document = editor.document,
      selection = editor.selection;
  var enabledRegex = useOnly ? ENABLED_ONLY : ENABLED_SKIP;
  var lines = document.getText().split('\n').slice(0, selection.end.line + 1);

  for (var i = lines.length - 1; i > -1; i--) {
    var line = lines[i];
    if (DISABLED.test(line)) return enableLine(builder, i, line, useOnly);
    if (enabledRegex.test(line)) return disableLine(builder, i, line, useOnly);
  }
};

var toggleJestTest = function toggleJestTest() {
  var useOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor.edit(function (builder) {
    return getNewLine(builder, useOnly);
  });
}; // export const toggleJestTestExclusive = () => {
//   const editor = vsc.window.activeTextEditor!
//   const { document, selection } = editor
//   const globalEnabledRegex = new RegExp(ENABLED_ONLY, 'g')
//   return editor.edit((builder) => {
//     const newText = document
//       .getText()
//       .replace(globalEnabledRegex, disableLineReplacer)
//   })
//   const enabledRegex = useOnly ? ENABLED_ONLY : ENABLED_SKIP
//   const lines = document
//     .getText()
//     .split('\n')
//     .slice(0, selection.end.line + 1)
//   for (let i = lines.length - 1; i > -1; i--) {
//     const line = lines[i]
//     if (DISABLED.test(line)) return enableLine(i, line, useOnly)
//     if (enabledRegex.test(line)) return disableLine(i, line, useOnly)
//   }
// }

/***/ }),

/***/ "./src/update-index-file-to-export-all-from-dir.ts":
/*!*********************************************************!*\
  !*** ./src/update-index-file-to-export-all-from-dir.ts ***!
  \*********************************************************/
/*! exports provided: updateIndexFileToExportAllFromDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIndexFileToExportAllFromDir", function() { return updateIndexFileToExportAllFromDir; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ericbiewener_utils_src_removeEndOfString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ericbiewener/utils/src/removeEndOfString */ "./node_modules/@ericbiewener/utils/src/removeEndOfString.ts");
/* harmony import */ var _ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ericbiewener/utils/src/isFile */ "./node_modules/@ericbiewener/utils/src/isFile.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var updateIndexFileToExportAllFromDir = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var editor, document, filename, dir, ext, indexFilename, items, extensions, importPaths;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            editor = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].activeTextEditor;

            if (editor) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            document = editor.document;
            filename = path__WEBPACK_IMPORTED_MODULE_2___default.a.basename(document.fileName);
            dir = path__WEBPACK_IMPORTED_MODULE_2___default.a.dirname(document.fileName);
            ext = path__WEBPACK_IMPORTED_MODULE_2___default.a.extname(filename); // Strip off trailing `x` from extension because if this is a new file, `maybeSwapExtension` will
            // return whatever filename we give it, and we don't want a new file to have the `x` part of the
            // extension.

            indexFilename = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["maybeSwapExtension"])(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(dir, "index".concat(ext.replace(/x$/, ''))));
            _context.next = 10;
            return fs__WEBPACK_IMPORTED_MODULE_1__["promises"].readdir(dir);

          case 10:
            items = _context.sent;
            extensions = ['.js', '.jsx', '.ts', '.tsx'];
            importPaths = items.filter(function (p) {
              return !p.startsWith('index.') && (!Object(_ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_4__["isFile"])(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(dir, p)) || extensions.includes(path__WEBPACK_IMPORTED_MODULE_2___default.a.extname(p)));
            }).map(function (p) {
              return "export * from './".concat(Object(_ericbiewener_utils_src_removeEndOfString__WEBPACK_IMPORTED_MODULE_3__["removeEndOfString"])(p), "'");
            });
            _context.next = 15;
            return fs__WEBPACK_IMPORTED_MODULE_1__["promises"].writeFile(indexFilename, importPaths.join('\n'), 'utf8');

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateIndexFileToExportAllFromDir() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/find-file-for-extensions.ts":
/*!***********************************************!*\
  !*** ./src/utils/find-file-for-extensions.ts ***!
  \***********************************************/
/*! exports provided: findFileForExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFileForExtensions", function() { return findFileForExtensions; });
/* harmony import */ var _ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ericbiewener/utils/src/isFile */ "./node_modules/@ericbiewener/utils/src/isFile.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var findFileForExtensions = function findFileForExtensions(filepath, extensions) {
  var filepathRoot = filepath.slice(0, filepath.lastIndexOf('.'));

  var _iterator = _createForOfIteratorHelper(extensions),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ext = _step.value;
      var newPath = "".concat(filepathRoot, ".").concat(ext);
      if (Object(_ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_0__["isFile"])(newPath)) return newPath;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ }),

/***/ "./src/utils/get-extension-config.ts":
/*!*******************************************!*\
  !*** ./src/utils/get-extension-config.ts ***!
  \*******************************************/
/*! exports provided: getExtensionConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensionConfig", function() { return getExtensionConfig; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

var getExtensionConfig = function getExtensionConfig(resource) {
  return vscode__WEBPACK_IMPORTED_MODULE_0___default.a.workspace.getConfiguration('grabBag', resource);
};

/***/ }),

/***/ "./src/utils/get-workspace-root.ts":
/*!*****************************************!*\
  !*** ./src/utils/get-workspace-root.ts ***!
  \*****************************************/
/*! exports provided: getWorkspaceRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceRoot", function() { return getWorkspaceRoot; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

var getWorkspaceRoot = function getWorkspaceRoot() {
  var workspaceFolders = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.workspace.workspaceFolders;
  var workspaceFolder = workspaceFolders ? workspaceFolders[0] : null;
  if (!workspaceFolder) throw new Error('No workspace folders');
  return workspaceFolder.uri.fsPath;
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: findFileForExtensions, getExtensionConfig, getWorkspaceRoot, maybeSwapExtension, moveEditorToOtherGroup, showTextDocument, updateLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _find_file_for_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-file-for-extensions */ "./src/utils/find-file-for-extensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findFileForExtensions", function() { return _find_file_for_extensions__WEBPACK_IMPORTED_MODULE_0__["findFileForExtensions"]; });

/* harmony import */ var _get_extension_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-extension-config */ "./src/utils/get-extension-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtensionConfig", function() { return _get_extension_config__WEBPACK_IMPORTED_MODULE_1__["getExtensionConfig"]; });

/* harmony import */ var _get_workspace_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-workspace-root */ "./src/utils/get-workspace-root.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWorkspaceRoot", function() { return _get_workspace_root__WEBPACK_IMPORTED_MODULE_2__["getWorkspaceRoot"]; });

/* harmony import */ var _maybe_swap_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maybe-swap-extension */ "./src/utils/maybe-swap-extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeSwapExtension", function() { return _maybe_swap_extension__WEBPACK_IMPORTED_MODULE_3__["maybeSwapExtension"]; });

/* harmony import */ var _move_editor_to_other_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./move-editor-to-other-group */ "./src/utils/move-editor-to-other-group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveEditorToOtherGroup", function() { return _move_editor_to_other_group__WEBPACK_IMPORTED_MODULE_4__["moveEditorToOtherGroup"]; });

/* harmony import */ var _show_text_document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-text-document */ "./src/utils/show-text-document.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTextDocument", function() { return _show_text_document__WEBPACK_IMPORTED_MODULE_5__["showTextDocument"]; });

/* harmony import */ var _update_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-line */ "./src/utils/update-line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLine", function() { return _update_line__WEBPACK_IMPORTED_MODULE_6__["updateLine"]; });









/***/ }),

/***/ "./src/utils/maybe-swap-extension.ts":
/*!*******************************************!*\
  !*** ./src/utils/maybe-swap-extension.ts ***!
  \*******************************************/
/*! exports provided: maybeSwapExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeSwapExtension", function() { return maybeSwapExtension; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ericbiewener/utils/src/isFile */ "./node_modules/@ericbiewener/utils/src/isFile.ts");
/* harmony import */ var _ericbiewener_utils_src_removeEndOfString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericbiewener/utils/src/removeEndOfString */ "./node_modules/@ericbiewener/utils/src/removeEndOfString.ts");



var EXTENSION_MAP = {
  js: 'jsx',
  jsx: 'js',
  ts: 'tsx',
  tsx: 'ts',
  css: 'pcss',
  pcss: 'css'
};
var maybeSwapExtension = function maybeSwapExtension(filepath) {
  if (Object(_ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_1__["isFile"])(filepath)) return filepath;
  var ext = path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(filepath).slice(1);
  var newExt = EXTENSION_MAP[ext];
  if (!newExt) return filepath;
  var swappedFilepath = "".concat(Object(_ericbiewener_utils_src_removeEndOfString__WEBPACK_IMPORTED_MODULE_2__["removeEndOfString"])(filepath), ".").concat(newExt);
  return Object(_ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_1__["isFile"])(swappedFilepath) ? swappedFilepath : filepath;
};

/***/ }),

/***/ "./src/utils/move-editor-to-other-group.ts":
/*!*************************************************!*\
  !*** ./src/utils/move-editor-to-other-group.ts ***!
  \*************************************************/
/*! exports provided: moveEditorToOtherGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveEditorToOtherGroup", function() { return moveEditorToOtherGroup; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

var moveEditorToOtherGroup = function moveEditorToOtherGroup() {
  var editor = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.activeTextEditor;
  if (!editor || !editor.viewColumn) return;

  if (editor.viewColumn > 1) {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.executeCommand('workbench.action.moveEditorToPreviousGroup');
  } else {
    vscode__WEBPACK_IMPORTED_MODULE_0___default.a.commands.executeCommand('workbench.action.moveEditorToNextGroup');
  }
};

/***/ }),

/***/ "./src/utils/show-text-document.ts":
/*!*****************************************!*\
  !*** ./src/utils/show-text-document.ts ***!
  \*****************************************/
/*! exports provided: showTextDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTextDocument", function() { return showTextDocument; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ericbiewener/utils/src/isFile */ "./node_modules/@ericbiewener/utils/src/isFile.ts");
/* harmony import */ var _maybe_swap_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maybe-swap-extension */ "./src/utils/maybe-swap-extension.ts");
/* harmony import */ var _move_editor_to_other_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./move-editor-to-other-group */ "./src/utils/move-editor-to-other-group.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function showTextDocument(_x) {
  return _showTextDocument.apply(this, arguments);
}

function _showTextDocument() {
  _showTextDocument = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(filepath) {
    var moveToOtherColumn,
        preserveFocus,
        viewColumn,
        editor,
        newEditor,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            moveToOtherColumn = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            preserveFocus = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            filepath = Object(_maybe_swap_extension__WEBPACK_IMPORTED_MODULE_2__["maybeSwapExtension"])(filepath);

            if (Object(_ericbiewener_utils_src_isFile__WEBPACK_IMPORTED_MODULE_1__["isFile"])(filepath)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            viewColumn = 1;
            editor = vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.activeTextEditor;

            if (moveToOtherColumn && editor && editor.viewColumn) {
              viewColumn = editor.viewColumn + (editor.viewColumn > 1 ? -1 : 1);
            }

            _context.next = 10;
            return vscode__WEBPACK_IMPORTED_MODULE_0___default.a.window.showTextDocument(vscode__WEBPACK_IMPORTED_MODULE_0___default.a.Uri.file(filepath), {
              preserveFocus: preserveFocus,
              preview: false
            });

          case 10:
            newEditor = _context.sent;
            if (newEditor.viewColumn !== viewColumn) Object(_move_editor_to_other_group__WEBPACK_IMPORTED_MODULE_3__["moveEditorToOtherGroup"])();
            return _context.abrupt("return", filepath);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _showTextDocument.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils/update-line.ts":
/*!**********************************!*\
  !*** ./src/utils/update-line.ts ***!
  \**********************************/
/*! exports provided: updateLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLine", function() { return updateLine; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vscode */ "vscode");
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);

var updateLine = function updateLine(builder, lineNumber, line) {
  return builder.replace(new vscode__WEBPACK_IMPORTED_MODULE_0__["Range"](lineNumber, 0, lineNumber, 9999999999), line);
};

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

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