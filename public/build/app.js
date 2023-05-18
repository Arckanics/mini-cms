(self["webpackChunkmini_cms"] = self["webpackChunkmini_cms"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive main\\.(j%7Ct)sx?$":
/*!**********************************************************!*\
  !*** ./assets/react/controllers/ sync main\.(j%7Ct)sx?$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./main.jsx": "./assets/react/controllers/main.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive main\\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
  connect() {
    this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
  }
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/guest/app.scss';

// start the Stimulus application


// react


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive main\\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
const app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/Functions/app.js":
/*!***************************************!*\
  !*** ./assets/react/Functions/app.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath),
/* harmony export */   "endOfPath": () => (/* binding */ endOfPath),
/* harmony export */   "getBooleanFromString": () => (/* binding */ getBooleanFromString),
/* harmony export */   "getPropsBoolStatus": () => (/* binding */ getPropsBoolStatus),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "prepareForSend": () => (/* binding */ prepareForSend),
/* harmony export */   "setBaseUrl": () => (/* binding */ setBaseUrl),
/* harmony export */   "sortAsc": () => (/* binding */ sortAsc),
/* harmony export */   "sortDes": () => (/* binding */ sortDes),
/* harmony export */   "strContains": () => (/* binding */ strContains),
/* harmony export */   "strNormalize": () => (/* binding */ strNormalize),
/* harmony export */   "updateTitle": () => (/* binding */ updateTitle)
/* harmony export */ });
// prepareForSend prepare une date pour PHP
const prepareForSend = data => {
  const result = {};
  for (let [k, v] of Object.entries(data)) {
    if (v instanceof Date) {
      v.setDate(v.getDate() + 1);
      result[k] = v.toISOString().replace(/T|\.[0-9]+Z$/g, ex => ex === "T" ? " " : "");
    } else {
      result[k] = v;
    }
  }
  return result;
};

// string boolean to boolean

const getBooleanFromString = str => {
  switch (str) {
    case "true":
    case "TRUE":
    case "1" || 0:
      return true;
    default:
      return false;
  }
};

// url de base pour faciliter la navigation

const setBaseUrl = (ext = "") => {
  return `${window.location.origin}${ext.length > 0 ? "/" : null}${ext}`;
};

// nettoie l'url fourni

const cleanPath = path => path.replace(/\/\//g, '/').replace(/^\/$|\/$/, '');

// première lettre en majuscule

const capitalize = txt => {
  return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
};

// obtenir l'url relative

const endOfPath = path => {
  return path.slice(path.lastIndexOf('\/'));
};

// change le titre dans l'onglet

const updateTitle = n => {
  n = n.replace(/\//g, "");
  document.title = `Mini-CMS -> ${n.length > 0 ? capitalize(n) : "Settings"}`;
  return;
};

// trouve une expression régulière

const strContains = (str, search) => {
  let re = new RegExp(search, "gi");
  return str.search(re) >= 0 ? true : false;
};

// normalize un string pour filtre

const strNormalize = str => {
  const test = (l, reg) => new RegExp(reg).test(l);
  return str.toLowerCase().replace(/[^a-z]/g, w => {
    switch (true) {
      case test(w, /ã|à|á|â|ä/gi):
        return "a";
      case test(w, /è|é|ê|ë/gi):
        return "e";
      case test(w, /ì|í|î|ï/gi):
        return "i";
      case test(w, /õ|ò|ó|ô|ö/gi):
        return "o";
      case test(w, /ù|ú|û|ü/gi):
        return "u";
      case test(w, /ý|ÿ/gi):
        return "y";
      case test(w, /ñ/gi):
        return "n";
      case test(w, /œ/gi):
        return "oe";
      case test(w, /æ/gi):
        return "ae";
      case test(w, /ç/gi):
        return "c";
      case test(w, /ß/gi):
        return "ss";
      default:
        return w;
    }
  });
};

// trouver une props booléen (vrai ou faux) dans un objet recursif

const getPropsBoolStatus = (obj, prop, boolState) => {
  if (obj[prop]) {
    return obj[prop] === boolState;
  }
  for (const [key, value] of Object.entries(obj)) {
    if (isObject(value)) {
      if (getPropsBoolStatus(value, prop, boolState)) {
        return true;
      }
    }
  }
  return false;
};

// compare deux objets JS (tout types)

const areEqual = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  if (isArray(obj1) && isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!areEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }
  if (isObject(obj1) && isObject(obj2)) {
    const ent1 = Object.entries(obj1);
    const ent2 = Object.entries(obj2);
    if (ent1.length !== ent2.length) {
      return false;
    }
    for (const [key, value] of Object.entries(obj1)) {
      if (isDefined(value) && isDefined(obj2[key])) {
        if (!areEqual(obj1[key], obj2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return obj1 === obj2;
};

// verifie si la variable est définie

const isDefined = obj => obj !== null && obj !== undefined;

// verifie si la variable est un JSON valide

const isJSON = json => {
  try {
    JSON.parse(json);
  } catch {
    return false;
  }
  return true;
};

// verifie si la variable est un objet de type Array JS

const isObject = object => typeof object === "object" && !isArray(object);

// verifie si la variable est un Tableaux 

const isArray = array => {
  return Array.isArray(array);
};
const sortAsc = (a, b) => {
  return a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0;
};
const sortDes = (a, b) => {
  return a.sort > b.sort ? -1 : a.sort < b.sort ? 1 : 0;
};


/***/ }),

/***/ "./assets/react/components/guest/components/Header.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/guest/components/Header.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Header = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    id: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container flex justify-between mx-auto p-2"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./assets/react/components/guest/components/Navbar.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/guest/components/Navbar.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");



const Navbar = ({
  links,
  landing
}) => {
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const cleanUrl = () => {
    location.pathname.match(/\/$/) ? nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.cleanPath)(location.pathname)) : undefined;
  };
  const renderLink = l => !l ? null : l.map((l, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: l.id,
    className: "p-0 text-center",
    onClick: cleanUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: !(landing == l.id) ? l.url : "/",
    className: "navLink"
  }, l.Title)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "wrapper"
  }, renderLink(links))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/react/components/guest/components/index.js":
/*!***********************************************************!*\
  !*** ./assets/react/components/guest/components/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Navbar": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./assets/react/components/guest/components/Header.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./assets/react/components/guest/components/Navbar.jsx");




/***/ }),

/***/ "./assets/react/components/guest/index.jsx":
/*!*************************************************!*\
  !*** ./assets/react/components/guest/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./assets/react/components/guest/components/index.js");



const index = () => {
  const [linkLoad, setLinkLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [landing, setLanding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    headers: {
      "XmlHttpRequest": true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !linkLoad ? ajax.get('/request/page-list').then(res => {
      setLanding(res.data.landing);
      setLinkLoad([...res.data.data]);
    }) : null;
  }, [linkLoad]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
    links: linkLoad,
    landing: landing
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./assets/react/controllers/main.jsx":
/*!*******************************************!*\
  !*** ./assets/react/controllers/main.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_guest_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/guest/index */ "./assets/react/components/guest/index.jsx");
// import '../../styles/guest/app.scss';




// Index Root Component

const Main = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_guest_index__WEBPACK_IMPORTED_MODULE_1__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerReactControllerComponents": () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
function registerReactControllerComponents(context) {
  const reactControllers = {};
  const importAllReactComponents = r => {
    r.keys().forEach(key => reactControllers[key] = r(key).default);
  };
  importAllReactComponents(context);
  window.resolveReactComponent = name => {
    const component = reactControllers[`./${name}.jsx`] || reactControllers[`./${name}.tsx`];
    if (typeof component === 'undefined') {
      throw new Error('React controller "' + name + '" does not exist');
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_1__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function (c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
class default_1 extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_2__.Controller {
  connect() {
    const props = this.propsValue ? this.propsValue : null;
    this._dispatchEvent('react:connect', {
      component: this.componentValue,
      props: props
    });
    if (!this.componentValue) {
      throw new Error('No component specified.');
    }
    const component = window.resolveReactComponent(this.componentValue);
    this._renderReactElement(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(component, props, null));
    this._dispatchEvent('react:mount', {
      componentName: this.componentValue,
      component: component,
      props: props
    });
  }
  disconnect() {
    this.element.root.unmount();
    this._dispatchEvent('react:unmount', {
      component: this.componentValue,
      props: this.propsValue ? this.propsValue : null
    });
  }
  _renderReactElement(reactElement) {
    const element = this.element;
    if (!element.root) {
      element.root = createRoot(this.element);
    }
    element.root.render(reactElement);
  }
  _dispatchEvent(name, payload) {
    this.element.dispatchEvent(new CustomEvent(name, {
      detail: payload,
      bubbles: true
    }));
  }
}
default_1.values = {
  component: String,
  props: Object
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_react-dom_index_js-no-7f6b1a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ1AsY0FBYyxDQUFDLGVBQWUsRUFBRTtNQUNqQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUNpQixjQUFjO01BQzlCSCxLQUFLLEVBQUUsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLEdBQUc7SUFDL0MsQ0FBQyxDQUFDO0VBQ047RUFDQUcsbUJBQW1CLENBQUNNLFlBQVksRUFBRTtJQUM5QixNQUFNakosT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztJQUM1QixJQUFJLENBQUNBLE9BQU8sQ0FBQytJLElBQUksRUFBRTtNQUNmL0ksT0FBTyxDQUFDK0ksSUFBSSxHQUFHbkIsVUFBVSxDQUFDLElBQUksQ0FBQzVILE9BQU8sQ0FBQztJQUMzQztJQUNBQSxPQUFPLENBQUMrSSxJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsWUFBWSxDQUFDO0VBQ3JDO0VBQ0FSLGNBQWMsQ0FBQ2pCLElBQUksRUFBRTJCLE9BQU8sRUFBRTtJQUMxQixJQUFJLENBQUNuSixPQUFPLENBQUNvSixhQUFhLENBQUMsSUFBSUMsV0FBVyxDQUFDN0IsSUFBSSxFQUFFO01BQUU4QixNQUFNLEVBQUVILE9BQU87TUFBRUksT0FBTyxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQUM7RUFDekY7QUFDSjtBQUNBakIsU0FBUyxDQUFDa0IsTUFBTSxHQUFHO0VBQ2YvQixTQUFTLEVBQUVnQyxNQUFNO0VBQ2pCbEIsS0FBSyxFQUFFM0g7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBtYWluXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L0Z1bmN0aW9ucy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXguanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIG1haW5cXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvbWFpblxcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiLy8gcHJlcGFyZUZvclNlbmQgcHJlcGFyZSB1bmUgZGF0ZSBwb3VyIFBIUFxyXG5jb25zdCBwcmVwYXJlRm9yU2VuZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0ge31cclxuICBmb3IgKGxldCBbayx2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG4gICAgaWYgKHYgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHYuc2V0RGF0ZSh2LmdldERhdGUoKSsxKVxyXG4gICAgICByZXN1bHRba10gPSB2LnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVHxcXC5bMC05XStaJC9nLCAoZXgpID0+IGV4ID09PSBcIlRcIiA/IFwiIFwiIDogXCJcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrXSA9IHZcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gc3RyaW5nIGJvb2xlYW4gdG8gYm9vbGVhblxyXG5cclxuY29uc3QgZ2V0Qm9vbGVhbkZyb21TdHJpbmcgPSAoc3RyKSA9PiB7XHJcbiAgc3dpdGNoIChzdHIpIHtcclxuICAgIGNhc2UgXCJ0cnVlXCI6XHJcbiAgICBjYXNlIFwiVFJVRVwiOlxyXG4gICAgY2FzZSBcIjFcIiB8fCAxOlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuLy8gdXJsIGRlIGJhc2UgcG91ciBmYWNpbGl0ZXIgbGEgbmF2aWdhdGlvblxyXG5cclxuY29uc3Qgc2V0QmFzZVVybCA9IChleHQgPSBcIlwiKSA9PiB7XHJcbiAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtleHQubGVuZ3RoID4gMCA/IFwiL1wiIDogbnVsbH0ke2V4dH1gXHJcbn1cclxuXHJcbi8vIG5ldHRvaWUgbCd1cmwgZm91cm5pXHJcblxyXG5jb25zdCBjbGVhblBhdGggPSBwYXRoID0+IHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJykucmVwbGFjZSgvXlxcLyR8XFwvJC8sICcnKVxyXG5cclxuLy8gcHJlbWnDqHJlIGxldHRyZSBlbiBtYWp1c2N1bGVcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAodHh0KSA9PiB7XHJcbiAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbi8vIG9idGVuaXIgbCd1cmwgcmVsYXRpdmVcclxuXHJcbmNvbnN0IGVuZE9mUGF0aCA9IChwYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguc2xpY2UocGF0aC5sYXN0SW5kZXhPZignXFwvJykpXHJcbn1cclxuXHJcbi8vIGNoYW5nZSBsZSB0aXRyZSBkYW5zIGwnb25nbGV0XHJcblxyXG5jb25zdCB1cGRhdGVUaXRsZSA9IChuKSA9PiB7XHJcbiAgbiA9IG4ucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgZG9jdW1lbnQudGl0bGUgPSBgTWluaS1DTVMgLT4gJHsobi5sZW5ndGggPiAwID8gY2FwaXRhbGl6ZShuKSA6IFwiU2V0dGluZ3NcIil9YFxyXG4gIHJldHVybjtcclxufVxyXG5cclxuLy8gdHJvdXZlIHVuZSBleHByZXNzaW9uIHLDqWd1bGnDqHJlXHJcblxyXG5jb25zdCBzdHJDb250YWlucyA9IChzdHIsIHNlYXJjaCkgPT4ge1xyXG4gIGxldCByZSA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpXHJcbiAgcmV0dXJuIHN0ci5zZWFyY2gocmUpID49IDAgPyB0cnVlIDogZmFsc2VcclxufVxyXG5cclxuLy8gbm9ybWFsaXplIHVuIHN0cmluZyBwb3VyIGZpbHRyZVxyXG5cclxuY29uc3Qgc3RyTm9ybWFsaXplID0gKHN0cikgPT4ge1xyXG4gIGNvbnN0IHRlc3QgPSAobCxyZWcpID0+IG5ldyBSZWdFeHAocmVnKS50ZXN0KGwpXHJcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpXHJcbiAgICAucmVwbGFjZSgvW15hLXpdL2csICh3KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgdGVzdCh3ICwvw6N8w6B8w6F8w6J8w6QvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiYVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DqHzDqXzDqnzDqy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OsfMOtfMOufMOvL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7V8w7J8w7N8w7R8w7YvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwib1wiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DuXzDunzDu3zDvC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJ1XCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O9fMO/L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7EvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiblwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Fky9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpi9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJjXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OfL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInNzXCJcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHdcclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gdHJvdXZlciB1bmUgcHJvcHMgYm9vbMOpZW4gKHZyYWkgb3UgZmF1eCkgZGFucyB1biBvYmpldCByZWN1cnNpZlxyXG5cclxuY29uc3QgZ2V0UHJvcHNCb29sU3RhdHVzID0gKG9iaiwgcHJvcCwgYm9vbFN0YXRlKSA9PiB7XHJcblxyXG4gIGlmIChvYmpbcHJvcF0pIHtcclxuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IGJvb2xTdGF0ZTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW2tleSx2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBpZiAoZ2V0UHJvcHNCb29sU3RhdHVzKHZhbHVlLCBwcm9wLCBib29sU3RhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8vIGNvbXBhcmUgZGV1eCBvYmpldHMgSlMgKHRvdXQgdHlwZXMpXHJcblxyXG5jb25zdCBhcmVFcXVhbCA9IChvYmoxLG9iajIpID0+IHtcclxuICBpZiAodHlwZW9mIG9iajEgIT09IHR5cGVvZiBvYmoyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJlRXF1YWwob2JqMVtpXSxvYmoyW2ldKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSkge1xyXG4gICAgY29uc3QgZW50MSA9IE9iamVjdC5lbnRyaWVzKG9iajEpXHJcbiAgICBjb25zdCBlbnQyID0gT2JqZWN0LmVudHJpZXMob2JqMilcclxuICAgIGlmIChlbnQxLmxlbmd0aCAhPT0gZW50Mi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmoxKSkge1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQob2JqMltrZXldKSkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwob2JqMVtrZXldLG9iajJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBvYmoxID09PSBvYmoyXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IGTDqWZpbmllXHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSAob2JqKSA9PiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWRcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gb2JqZXQgZGUgdHlwZSBBcnJheSBKU1xyXG5cclxuY29uc3QgaXNPYmplY3QgPSAob2JqZWN0KSA9PiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmICFpc0FycmF5KG9iamVjdClcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIFRhYmxlYXV4IFxyXG5cclxuY29uc3QgaXNBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KVxyXG59XHJcblxyXG5jb25zdCBzb3J0QXNjID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPCBiLnNvcnQgPyAtMSA6IGEuc29ydCA+IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmNvbnN0IHNvcnREZXMgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA+IGIuc29ydCA/IC0xIDogYS5zb3J0IDwgYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgc2V0QmFzZVVybCwgXHJcbiAgY2FwaXRhbGl6ZSwgXHJcbiAgdXBkYXRlVGl0bGUsIFxyXG4gIGVuZE9mUGF0aCwgXHJcbiAgc3RyQ29udGFpbnMsIFxyXG4gIGNsZWFuUGF0aCwgXHJcbiAgaXNKU09OLCBcclxuICBpc0FycmF5LCBcclxuICBhcmVFcXVhbCwgXHJcbiAgc29ydEFzYywgXHJcbiAgc29ydERlcyxcclxuICBnZXRQcm9wc0Jvb2xTdGF0dXMsXHJcbiAgc3RyTm9ybWFsaXplLFxyXG4gIHByZXBhcmVGb3JTZW5kLFxyXG4gIGdldEJvb2xlYW5Gcm9tU3RyaW5nXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHAtMlwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSBcIi4uLy4uLy4uL0Z1bmN0aW9ucy9hcHBcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGxpbmtzLCBsYW5kaW5nIH0pID0+IHtcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gIGNvbnN0IGNsZWFuVXJsID0gKCkgPT4ge1xyXG4gICAgbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyQvKVxyXG4gICAgPyBuYXYgKGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICA6IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyTGluayA9IGwgPT4gXHJcbiAgICAhbCBcclxuICAgID8gbnVsbFxyXG4gICAgOiBsLm1hcCgobCxpKSA9PiA8bGkga2V5PXtsLmlkfSBjbGFzc05hbWU9XCJwLTAgdGV4dC1jZW50ZXJcIiBvbkNsaWNrPXtjbGVhblVybH0+XHJcbiAgICAgIDxOYXZMaW5rIHRvPXshKGxhbmRpbmcgPT0gbC5pZCkgPyBsLnVybCA6IFwiL1wifSBjbGFzc05hbWU9J25hdkxpbmsnPntsLlRpdGxlfTwvTmF2TGluaz5cclxuICAgIDwvbGk+KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICB7cmVuZGVyTGluayhsaW5rcyl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgTmF2YmFyXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEhlYWRlciwgTmF2YmFyIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbbGFuZGluZywgc2V0TGFuZGluZ10gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlhtbEh0dHBSZXF1ZXN0XCI6IHRydWVcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhbGlua0xvYWQgPyBhamF4LmdldCgnL3JlcXVlc3QvcGFnZS1saXN0JykudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMYW5kaW5nKHJlcy5kYXRhLmxhbmRpbmcpXHJcbiAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YS5kYXRhXSlcclxuICAgIH0pIDogbnVsbFxyXG4gIH0sIFtsaW5rTG9hZF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxOYXZiYXIgbGlua3M9e2xpbmtMb2FkfSBsYW5kaW5nPXtsYW5kaW5nfS8+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsIi8vIGltcG9ydCAnLi4vLi4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgR3Vlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ndWVzdC9pbmRleCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8R3Vlc3QgLz5cclxuICA8L1JvdXRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChyZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdCkpO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgY29udHJvbGxlciBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6Y29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6bW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0OnVubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInByZXBhcmVGb3JTZW5kIiwiZGF0YSIsInJlc3VsdCIsImsiLCJ2IiwiT2JqZWN0IiwiZW50cmllcyIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsImV4IiwiZ2V0Qm9vbGVhbkZyb21TdHJpbmciLCJzdHIiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJzdHJOb3JtYWxpemUiLCJ0ZXN0IiwibCIsInJlZyIsInciLCJnZXRQcm9wc0Jvb2xTdGF0dXMiLCJvYmoiLCJwcm9wIiwiYm9vbFN0YXRlIiwia2V5IiwidmFsdWUiLCJpc09iamVjdCIsImFyZUVxdWFsIiwib2JqMSIsIm9iajIiLCJpc0FycmF5IiwiaSIsImVudDEiLCJlbnQyIiwiaXNEZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJzb3J0QXNjIiwiYSIsImIiLCJzb3J0Iiwic29ydERlcyIsIlJlYWN0IiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsIm5hdiIsImNsZWFuVXJsIiwicGF0aG5hbWUiLCJtYXRjaCIsInJlbmRlckxpbmsiLCJtYXAiLCJpZCIsInVybCIsIlRpdGxlIiwiYXhpb3MiLCJpbmRleCIsImxpbmtMb2FkIiwic2V0TGlua0xvYWQiLCJzZXRMYW5kaW5nIiwiYWpheCIsImNyZWF0ZSIsImhlYWRlcnMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkd1ZXN0IiwiTWFpbiIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsImZvckVhY2giLCJkZWZhdWx0IiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwibmFtZSIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHMiLCJwcm9wc1ZhbHVlIiwiX2Rpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsInJlbmRlciIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwidmFsdWVzIiwiU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==