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
    className: "p-0 text-center nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    to: !(landing == l.id) ? l.url : "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxFQUFFO01BQ2pDaEIsU0FBUyxFQUFFLElBQUksQ0FBQ2lCLGNBQWM7TUFDOUJILEtBQUssRUFBRSxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRztJQUMvQyxDQUFDLENBQUM7RUFDTjtFQUNBRyxtQkFBbUIsQ0FBQ00sWUFBWSxFQUFFO0lBQzlCLE1BQU1qSixPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO0lBQzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDK0ksSUFBSSxFQUFFO01BQ2YvSSxPQUFPLENBQUMrSSxJQUFJLEdBQUduQixVQUFVLENBQUMsSUFBSSxDQUFDNUgsT0FBTyxDQUFDO0lBQzNDO0lBQ0FBLE9BQU8sQ0FBQytJLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxZQUFZLENBQUM7RUFDckM7RUFDQVIsY0FBYyxDQUFDakIsSUFBSSxFQUFFMkIsT0FBTyxFQUFFO0lBQzFCLElBQUksQ0FBQ25KLE9BQU8sQ0FBQ29KLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUM3QixJQUFJLEVBQUU7TUFBRThCLE1BQU0sRUFBRUgsT0FBTztNQUFFSSxPQUFPLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FBQztFQUN6RjtBQUNKO0FBQ0FqQixTQUFTLENBQUNrQixNQUFNLEdBQUc7RUFDZi9CLFNBQVMsRUFBRWdDLE1BQU07RUFDakJsQixLQUFLLEVBQUUzSDtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWNtcy8gXFwuW2p0XXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIG1haW5cXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgbWFpblxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gaW1wb3J0ICcuL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9tYWluXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCIvLyBwcmVwYXJlRm9yU2VuZCBwcmVwYXJlIHVuZSBkYXRlIHBvdXIgUEhQXHJcbmNvbnN0IHByZXBhcmVGb3JTZW5kID0gKGRhdGEpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSB7fVxyXG4gIGZvciAobGV0IFtrLHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICBpZiAodiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgdi5zZXREYXRlKHYuZ2V0RGF0ZSgpKzEpXHJcbiAgICAgIHJlc3VsdFtrXSA9IHYudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9UfFxcLlswLTldK1okL2csIChleCkgPT4gZXggPT09IFwiVFwiID8gXCIgXCIgOiBcIlwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0W2tdID0gdlxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBzdHJpbmcgYm9vbGVhbiB0byBib29sZWFuXHJcblxyXG5jb25zdCBnZXRCb29sZWFuRnJvbVN0cmluZyA9IChzdHIpID0+IHtcclxuICBzd2l0Y2ggKHN0cikge1xyXG4gICAgY2FzZSBcInRydWVcIjpcclxuICAgIGNhc2UgXCJUUlVFXCI6XHJcbiAgICBjYXNlIFwiMVwiIHx8IDE6XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke2V4dC5sZW5ndGggPiAwID8gXCIvXCIgOiBudWxsfSR7ZXh0fWBcclxufVxyXG5cclxuLy8gbmV0dG9pZSBsJ3VybCBmb3VybmlcclxuXHJcbmNvbnN0IGNsZWFuUGF0aCA9IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKS5yZXBsYWNlKC9eXFwvJHxcXC8kLywgJycpXHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuLy8gY2hhbmdlIGxlIHRpdHJlIGRhbnMgbCdvbmdsZXRcclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBkb2N1bWVudC50aXRsZSA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyBjYXBpdGFsaXplKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyB0cm91dmUgdW5lIGV4cHJlc3Npb24gcsOpZ3VsacOocmVcclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG4vLyBub3JtYWxpemUgdW4gc3RyaW5nIHBvdXIgZmlsdHJlXHJcblxyXG5jb25zdCBzdHJOb3JtYWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgY29uc3QgdGVzdCA9IChsLHJlZykgPT4gbmV3IFJlZ0V4cChyZWcpLnRlc3QobClcclxuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXmEtel0vZywgKHcpID0+IHtcclxuICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSB0ZXN0KHcgLC/Do3zDoHzDoXzDonzDpC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OofMOpfMOqfMOrL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6x8w618w658w68vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiaVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DtXzDsnzDs3zDtHzDti9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O5fMO6fMO7fMO8L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw718w78vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwieVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DsS9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJuXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8WTL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm9lXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OmL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImFlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OnL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImNcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw58vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwic3NcIlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gd1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyB0cm91dmVyIHVuZSBwcm9wcyBib29sw6llbiAodnJhaSBvdSBmYXV4KSBkYW5zIHVuIG9iamV0IHJlY3Vyc2lmXHJcblxyXG5jb25zdCBnZXRQcm9wc0Jvb2xTdGF0dXMgPSAob2JqLCBwcm9wLCBib29sU3RhdGUpID0+IHtcclxuXHJcbiAgaWYgKG9ialtwcm9wXSkge1xyXG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gYm9vbFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBba2V5LHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIGlmIChnZXRQcm9wc0Jvb2xTdGF0dXModmFsdWUsIHByb3AsIGJvb2xTdGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLy8gY29tcGFyZSBkZXV4IG9iamV0cyBKUyAodG91dCB0eXBlcylcclxuXHJcbmNvbnN0IGFyZUVxdWFsID0gKG9iajEsb2JqMikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygb2JqMSAhPT0gdHlwZW9mIG9iajIpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgaWYgKG9iajEubGVuZ3RoICE9PSBvYmoyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2ldLG9iajJbaV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpKSB7XHJcbiAgICBjb25zdCBlbnQxID0gT2JqZWN0LmVudHJpZXMob2JqMSlcclxuICAgIGNvbnN0IGVudDIgPSBPYmplY3QuZW50cmllcyhvYmoyKVxyXG4gICAgaWYgKGVudDEubGVuZ3RoICE9PSBlbnQyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iajEpKSB7XHJcbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIGlzRGVmaW5lZChvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2tleV0sb2JqMltrZXldKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIG9iajEgPT09IG9iajJcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgZMOpZmluaWVcclxuXHJcbmNvbnN0IGlzRGVmaW5lZCA9IChvYmopID0+IG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZFxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gSlNPTiB2YWxpZGVcclxuXHJcbmNvbnN0IGlzSlNPTiA9IChqc29uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIEpTT04ucGFyc2UoanNvbilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBvYmpldCBkZSB0eXBlIEFycmF5IEpTXHJcblxyXG5jb25zdCBpc09iamVjdCA9IChvYmplY3QpID0+IHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgIWlzQXJyYXkob2JqZWN0KVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gVGFibGVhdXggXHJcblxyXG5jb25zdCBpc0FycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpXHJcbn1cclxuXHJcbmNvbnN0IHNvcnRBc2MgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA8IGIuc29ydCA/IC0xIDogYS5zb3J0ID4gYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuY29uc3Qgc29ydERlcyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0ID4gYi5zb3J0ID8gLTEgOiBhLnNvcnQgPCBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5leHBvcnQgeyBcclxuICBzZXRCYXNlVXJsLCBcclxuICBjYXBpdGFsaXplLCBcclxuICB1cGRhdGVUaXRsZSwgXHJcbiAgZW5kT2ZQYXRoLCBcclxuICBzdHJDb250YWlucywgXHJcbiAgY2xlYW5QYXRoLCBcclxuICBpc0pTT04sIFxyXG4gIGlzQXJyYXksIFxyXG4gIGFyZUVxdWFsLCBcclxuICBzb3J0QXNjLCBcclxuICBzb3J0RGVzLFxyXG4gIGdldFByb3BzQm9vbFN0YXR1cyxcclxuICBzdHJOb3JtYWxpemUsXHJcbiAgcHJlcGFyZUZvclNlbmQsXHJcbiAgZ2V0Qm9vbGVhbkZyb21TdHJpbmdcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gcC0yXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tIFwiLi4vLi4vLi4vRnVuY3Rpb25zL2FwcFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgbGlua3MsIGxhbmRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuXHJcbiAgY29uc3QgY2xlYW5VcmwgPSAoKSA9PiB7XHJcbiAgICBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXFwvJC8pXHJcbiAgICA/IG5hdiAoY2xlYW5QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIDogdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJMaW5rID0gbCA9PiBcclxuICAgICFsIFxyXG4gICAgPyBudWxsXHJcbiAgICA6IGwubWFwKChsLGkpID0+IDxsaSBrZXk9e2wuaWR9IGNsYXNzTmFtZT1cInAtMCB0ZXh0LWNlbnRlciBuYXYtY29udGFpbmVyXCIgPlxyXG4gICAgICA8TmF2TGluayB0bz17IShsYW5kaW5nID09IGwuaWQpID8gbC51cmwgOiBcIlwifSBjbGFzc05hbWU9J25hdkxpbmsnPntsLlRpdGxlfTwvTmF2TGluaz5cclxuICAgIDwvbGk+KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cImxvZ29cIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICB7cmVuZGVyTGluayhsaW5rcyl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgTmF2YmFyXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEhlYWRlciwgTmF2YmFyIH0gZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbbGFuZGluZywgc2V0TGFuZGluZ10gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlhtbEh0dHBSZXF1ZXN0XCI6IHRydWVcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhbGlua0xvYWQgPyBhamF4LmdldCgnL3JlcXVlc3QvcGFnZS1saXN0JykudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMYW5kaW5nKHJlcy5kYXRhLmxhbmRpbmcpXHJcbiAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YS5kYXRhXSlcclxuICAgIH0pIDogbnVsbFxyXG4gIH0sIFtsaW5rTG9hZF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxOYXZiYXIgbGlua3M9e2xpbmtMb2FkfSBsYW5kaW5nPXtsYW5kaW5nfS8+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsIi8vIGltcG9ydCAnLi4vLi4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgR3Vlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ndWVzdC9pbmRleCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8R3Vlc3QgLz5cclxuICA8L1JvdXRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChyZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdCkpO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgY29udHJvbGxlciBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6Y29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6bW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0OnVubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInByZXBhcmVGb3JTZW5kIiwiZGF0YSIsInJlc3VsdCIsImsiLCJ2IiwiT2JqZWN0IiwiZW50cmllcyIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsImV4IiwiZ2V0Qm9vbGVhbkZyb21TdHJpbmciLCJzdHIiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJzdHJOb3JtYWxpemUiLCJ0ZXN0IiwibCIsInJlZyIsInciLCJnZXRQcm9wc0Jvb2xTdGF0dXMiLCJvYmoiLCJwcm9wIiwiYm9vbFN0YXRlIiwia2V5IiwidmFsdWUiLCJpc09iamVjdCIsImFyZUVxdWFsIiwib2JqMSIsIm9iajIiLCJpc0FycmF5IiwiaSIsImVudDEiLCJlbnQyIiwiaXNEZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJzb3J0QXNjIiwiYSIsImIiLCJzb3J0Iiwic29ydERlcyIsIlJlYWN0IiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsIm5hdiIsImNsZWFuVXJsIiwicGF0aG5hbWUiLCJtYXRjaCIsInJlbmRlckxpbmsiLCJtYXAiLCJpZCIsInVybCIsIlRpdGxlIiwiYXhpb3MiLCJpbmRleCIsImxpbmtMb2FkIiwic2V0TGlua0xvYWQiLCJzZXRMYW5kaW5nIiwiYWpheCIsImNyZWF0ZSIsImhlYWRlcnMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkd1ZXN0IiwiTWFpbiIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwia2V5cyIsImZvckVhY2giLCJkZWZhdWx0IiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwibmFtZSIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHMiLCJwcm9wc1ZhbHVlIiwiX2Rpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsInJlbmRlciIsInBheWxvYWQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwidmFsdWVzIiwiU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==