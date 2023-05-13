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

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./main.jsx": "./assets/react/controllers/main.jsx",
	"./main_admin.jsx": "./assets/react/controllers/main_admin.jsx"
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
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

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


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

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

const cleanPath = path => path.replace(/^\/$|\/$/, '').replace(/\/\//g, '/');

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

/***/ "./assets/react/components/admin/Content.jsx":
/*!***************************************************!*\
  !*** ./assets/react/components/admin/Content.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Content = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "content"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./assets/react/components/admin/Footer.jsx":
/*!**************************************************!*\
  !*** ./assets/react/components/admin/Footer.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    id: "admin-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "link-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "link-prev"
  }, "Cr\xE9ateur : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    className: "link",
    href: "https://github.com/Arckanics"
  }, "GitHub.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "link-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    className: "link",
    href: "https://github.com/Arckanics/mini-cms"
  }, "\xE0 propos")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/react/components/admin/Functions/Security.js":
/*!*************************************************************!*\
  !*** ./assets/react/components/admin/Functions/Security.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToken": () => (/* binding */ getToken)
/* harmony export */ });
const getToken = () => {
  let token = document.head.querySelector('meta[name=_token]');
  if (!token) {
    return null;
  }
  let key = token.getAttribute('value');
  token.remove();
  return key;
};


/***/ }),

/***/ "./assets/react/components/admin/Layout.jsx":
/*!**************************************************!*\
  !*** ./assets/react/components/admin/Layout.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./assets/react/components/admin/Navbar.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./assets/react/components/admin/Content.jsx");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/admin/Footer.jsx");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui */ "./assets/react/components/admin/ui/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages */ "./assets/react/components/admin/pages/index.js");










const Menu = [{
  name: "Parametres",
  path: "/",
  Page: _pages__WEBPACK_IMPORTED_MODULE_8__.Settings
}, {
  name: "Pages",
  path: "/pages",
  Page: _pages__WEBPACK_IMPORTED_MODULE_8__.Pages
}, {
  name: "Articles",
  path: "/articles",
  Page: _pages__WEBPACK_IMPORTED_MODULE_8__.Articles
}];
const Layout = () => {
  const url = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.ajax.url);
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    url === "" ? dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_7__.setUrl)("")) : null;
    location.pathname.match(/\/$/, '') ? nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.cleanPath)(location.pathname)) : undefined;
    window.onbeforeunload = e => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_7__.clearData)());
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "mini-admin/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages__WEBPACK_IMPORTED_MODULE_8__.Login, null)
  }), Menu.map(({
    path,
    Page
  }, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      key: i,
      path: `mini-admin${path}`,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        Pages: Menu
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Page, {
        url: path
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)))
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_6__.Toast, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./assets/react/components/admin/Navbar.jsx":
/*!**************************************************!*\
  !*** ./assets/react/components/admin/Navbar.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_NavLi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/NavLi */ "./assets/react/components/admin/ui/NavLi.jsx");
/* harmony import */ var _icon_icon_ui___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icon/icon-ui/ */ "./assets/react/icon/icon-ui/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");







const Navbar = ({
  Pages
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.updateTitle)((0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.endOfPath)(location.pathname));
    setTimeout(() => {
      setEnable(true);
    }, 50);
  }, []);
  const handleLogout = () => {
    (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.updateTitle)(n);
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.clearData)());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "navbar",
    className: !enable ? 'fadeOutLeft' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "navbar-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "nav-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Mini-CMS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "icon-nav mobile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: () => setToggle(!toggle),
    className: 'nav-link' + (toggle ? " active" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_2__.Menu, {
    cls: "svg-icon"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'nav-item-menu flex flex-col gap-2' + (toggle ? " toggle" : "")
  }, Pages.map(({
    name,
    path
  }, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_NavLi__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      to: `/mini-admin${path}`.replace(/\/$/g, ''),
      onClick: () => {
        setToggle(false);
        (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.updateTitle)(path);
        dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.setUrl)(path));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "link-txt"
    }, name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "nav-opts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "icon-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_NavLi__WEBPACK_IMPORTED_MODULE_1__["default"], {
    to: "/mini-admin/logout",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_2__.Logout, {
    Cls: "svg-icon"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/react/components/admin/pages/Articles.jsx":
/*!**********************************************************!*\
  !*** ./assets/react/components/admin/pages/Articles.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui */ "./assets/react/components/admin/ui/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");








// CRUD Complet pour les Articles

const Articles = () => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_6__["default"].create({
    ...axiosSet,
    params: {
      page: "articles"
    }
  });
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.articles);
  const pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    enable: false,
    data: null,
    title: "",
    type: null,
    where: "articles"
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get("/request").then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: "articles",
        data: res.data
      }));
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace("/mini-admin/logout");
      }
    });
    ajax.get("/request", {
      ...axiosSet,
      params: {
        page: "pages"
      }
    }).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: "pages",
        data: res.data
      }));
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace("/mini-admin/logout");
      }
    });
  }, []);
  const closeModal = () => {
    setModal({
      ...modal,
      enable: false
    });
  };
  // envoie des données
  const sendData = data => {
    const {
      type,
      where
    } = modal;
    data = type !== "delete" ? data = (0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.prepareForSend)(data) : data;
    const sendField = {
      where,
      data: data
    };
    switch (type) {
      case "put":
        return ajax.put("/request", sendField).then(res => {
          dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
            name: where,
            data: res.data
          }));
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__.notify)({
            type: "success",
            msg: "article mis à jour!",
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__.notifyClose)());
            }, 2500)
          }));
        });
      case "post":
        return ajax.post("/request", sendField).then(res => {
          dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
            name: where,
            data: res.data
          }));
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__.notify)({
            type: "success",
            msg: "article enregistré!",
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__.notifyClose)());
            }, 2500)
          }));
        });
      case "delete":
        return ajax.delete("/request", {
          data: {
            ...sendField
          }
        }).then(res => {
          dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
            name: where,
            data: res.data
          }));
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__.notify)({
            type: "warning",
            msg: "article supprimé!",
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_5__.notifyClose)());
            }, 2500)
          }));
        });
    }
  };
  // nouvel article
  const createArticle = () => {
    setModal({
      ...modal,
      enable: true,
      title: "Créer",
      data: null,
      type: "post"
    });
  };

  // ouvre l'édition d'articles
  const updateArticle = id => {
    const article = {
      ...articles.find(a => a.id == id)
    };
    const convert = {};
    for (let [k, v] of Object.entries(article)) {
      if (typeof v === "object") {
        if (v) {
          convert[k] = new Date(Date.parse(v.date.replace(/\.[0-9]+$/g, "")));
        } else {
          convert[k] = new Date();
        }
      } else {
        convert[k] = v;
      }
    }
    setModal({
      ...modal,
      enable: true,
      title: "Modifier",
      data: convert,
      type: "put"
    });
  };

  // supprime les articles
  const removeArticle = id => {
    modal.type = "delete";
    sendData(id);
  };
  const header = [{
    tag: "title",
    name: "titre",
    draw: "string",
    colSize: 2
  }, {
    tag: "sort",
    name: "ordre",
    draw: "number",
    colSize: "1-5"
  }, {
    tag: "page",
    name: "page",
    draw: "object.title",
    colSize: 2
  }, {
    tag: "published",
    name: "visible",
    draw: "bool",
    colSize: 1
  }, {
    tag: "isdynamic",
    name: "dynamique",
    draw: "bool",
    colSize: 1
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: "Articles"
  }, typeof articles === "object" && typeof pages === "object" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
    data: articles,
    header: header,
    create: createArticle,
    update: updateArticle,
    remove: removeArticle
  }) : null,
  // fenêtre d'édition et création des articles
  modal.enable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ModalEditor, {
    data: modal.data,
    title: modal.title,
    close: closeModal,
    command: sendData,
    schema: {
      title: {
        type: "string",
        name: "Titre"
      },
      page: {
        type: "select",
        name: "Page",
        draw: "title",
        list: pages
      },
      published: {
        type: "bool",
        name: "Visible"
      },
      isdynamic: {
        type: "bool",
        name: "Dynamique"
      },
      publishbegin: {
        type: "date",
        name: "Début",
        draw: "title"
      },
      publishend: {
        type: "date",
        name: "Fin",
        draw: "title"
      },
      // sort: { type: "sorting", name: "Ordre", list: articles },
      content: {
        type: "text",
        name: "Contenu"
      }
    }
  }) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);

/***/ }),

/***/ "./assets/react/components/admin/pages/Login.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/components/admin/pages/Login.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Inputs */ "./assets/react/components/admin/ui/Inputs/index.js");
/* harmony import */ var _Functions_Security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Functions/Security */ "./assets/react/components/admin/Functions/Security.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");









const Login = () => {
  // router
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  // redux - ajax
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const XMLSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_8__["default"].create({
    ...XMLSet.axios
  });
  // redux - Notification
  const lifetime = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.notification.life);
  // state
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: null,
    password: null,
    _token: (0,_Functions_Security__WEBPACK_IMPORTED_MODULE_2__.getToken)()
  });
  const [isConnected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // timeoutVar
  let blurTimeout = null;
  const handleChange = e => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (isConnected) {
      return false;
    }
    blurTimeout = blurTimeout !== null ? clearTimeout(blurTimeout) : setTimeout(() => e.nativeEvent.submitter.blur(), 500);
    ajax.post('/login', {
      ...state
    }).then(res => {
      let url = res.data.url === "/" ? `${XMLSet.navURL}` : `${XMLSet.navURL}/${res.data.url}`;
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.setUrl)(""));
      dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notify)({
        type: "info",
        msg: `Bienvenue ${state.email}`,
        timeout: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notifyClose)()), lifetime)
      }));
      setConnected(true);
      setTimeout(() => nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_5__.cleanPath)(url)), 400);
    }).catch(res => {
      dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notify)({
        type: "warning",
        msg: "connection incorrecte",
        timeout: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notifyClose)()), lifetime)
      }));
      nav(`${XMLSet.navURL}/login`);
    });
  };
  const {
    email,
    password
  } = state;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    method: "POST",
    id: "login",
    className: 'rounded-lg bg-white color-dark' + (isConnected ? ' connected' : null),
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-title"
  }, "Connexion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-clear-outline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "text",
    label: "Compte(Email)",
    id: "email",
    value: email,
    placeholder: "adresse email...",
    inputCls: "input-txt",
    labelCls: "label",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "password",
    label: "Mot de passe",
    id: "password",
    value: password,
    placeholder: "mot de passe...",
    inputCls: "input-txt",
    labelCls: "label",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_1__.Button, {
    divCls: "pt-1 p-4",
    btnCls: "btn primary w-full"
  }, "Me Connecter"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/react/components/admin/pages/Pages.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/components/admin/pages/Pages.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui */ "./assets/react/components/admin/ui/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");









// CRUD Complet pour les Pages

const Pages = () => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_6__["default"].create({
    ...axiosSet,
    params: {
      page: "pages"
    }
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.pages);
  const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    enable: false,
    data: null,
    title: "",
    type: null,
    small: true,
    where: "pages"
  });
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get("/request").then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: "pages",
        data: [...res.data]
      }));
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace("/mini-admin/logout");
      }
    });
  }, []);
  const sendData = data => {
    const {
      where,
      type
    } = modal;
    if (type !== "delete") {
      data.url = (0,_Functions_app__WEBPACK_IMPORTED_MODULE_5__.strNormalize)(data.title).replace(/ /gi, '_');
    }
    const sendField = {
      where,
      data: data
    };
    switch (type) {
      case "put":
        return ajax.put("/request", sendField).then(res => {
          dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
            name: where,
            data: res.data
          }));
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notify)({
            type: "success",
            msg: "Page mise à jour!",
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notifyClose)());
            }, 2500)
          }));
        });
      case "post":
        return ajax.post("/request", sendField).then(res => {
          dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
            name: where,
            data: res.data
          }));
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notify)({
            type: "success",
            msg: "Page créée!",
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notifyClose)());
            }, 2500)
          }));
        }).catch(res => {
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notify)({
            type: "danger",
            msg: res.response.data.error,
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notifyClose)());
            }, 2500)
          }));
        });
      case "delete":
        return ajax.delete("/request", {
          data: {
            ...sendField
          }
        }).then(res => {
          dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
            name: where,
            data: res.data
          }));
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notify)({
            type: "warning",
            msg: "Page supprimée!",
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notifyClose)());
            }, 2500)
          }));
        }).catch(res => {
          const response = res.response;
          const msg = response.data;
          dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notify)({
            type: "danger",
            msg: msg.error,
            timeout: setTimeout(() => {
              dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notifyClose)());
            }, 2500)
          }));
        });
    }
  };
  const createPage = () => {
    setModal({
      ...modal,
      enable: true,
      data: null,
      type: "post",
      title: "Créer"
    });
  };
  const updatePage = id => {
    const nData = {
      ...data
    };
    const page = Object.values(nData).find(p => p.id == id);
    setModal({
      ...modal,
      enable: true,
      data: {
        ...page
      },
      type: "put",
      title: "Modifier"
    });
  };
  const removePage = id => {
    modal.type = "delete";
    sendData(id);
  };
  const header = [{
    tag: "title",
    name: "titre",
    draw: "string",
    colSize: 4
  }, {
    tag: "sort",
    name: "ordre",
    draw: "number",
    colSize: "1-5"
  }, {
    tag: "settings",
    name: "landing",
    draw: "bool",
    colSize: 2
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: "Pages"
  }, data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
    data: data,
    header: header,
    update: updatePage,
    remove: removePage,
    create: createPage
  }) : null, modal.enable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ModalEditor, {
    data: modal.data,
    title: modal.title,
    close: () => setModal({
      ...modal,
      enable: false
    }),
    command: sendData,
    small: modal.small,
    schema: {
      title: {
        type: "string",
        name: "Titre"
      }
    }
  }) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pages);

/***/ }),

/***/ "./assets/react/components/admin/pages/Settings.jsx":
/*!**********************************************************!*\
  !*** ./assets/react/components/admin/pages/Settings.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui */ "./assets/react/components/admin/ui/index.js");
/* harmony import */ var _ui_Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Inputs */ "./assets/react/components/admin/ui/Inputs/index.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");









// Gestion des Settings

const Settings = () => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_7__["default"].create({
    ...axiosSet
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.ajax.data.settings);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const [change, setChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [initialState, setInitialState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get("/request").then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.pushData)({
        name: "settings",
        data: res.data
      }));
      setInitialState({
        ...res.data
      });
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace("/mini-admin/logout");
      }
    });
  }, []);
  const changeName = v => {
    switch (v) {
      case "Author":
        return "auteur";
      case "Description":
        return "description";
      case "SiteName":
        return "nom du site";
      case "Landing":
        return "page d'accueil";
      default:
        return "";
    }
  };
  const handleChange = (e, prop) => {
    const nData = {
      ...data,
      [prop]: e.target.value
    };
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.pushData)({
      name: "settings",
      data: nData
    }));
    !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.areEqual)(initialState, nData) ? setChange(true) : setChange(false);
  };
  const setLanding = v => {
    const nData = {
      ...data,
      Landing: v
    };
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.pushData)({
      name: "settings",
      data: nData
    }));
    console.log((0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.areEqual)(initialState, nData));
    !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.areEqual)(initialState, nData) ? setChange(true) : setChange(false);
  };
  const updateSettings = () => {
    ajax.put("/request", {
      where: "settings",
      data
    }).then(res => {
      dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notify)({
        msg: "options mise à jour",
        type: "info",
        timeout: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notifyClose)()), 2000)
      }));
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.pushData)({
        name: "settings",
        data: res.data
      }));
      setInitialState({
        ...res.data
      });
      setChange(false);
    }).catch(res => {
      dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notify)({
        msg: "erreur de sauvegarde",
        type: "danger",
        timeout: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_6__.notifyClose)()), 2000)
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: "Paramètres"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-3 py-3 justify-between"
  }, data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_2__.TxtLabelInput, {
    type: "text",
    onChange: e => handleChange(e, "Author"),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.capitalize)(changeName("Author")),
    id: "Author",
    value: data.Author,
    placeholder: changeName("Author"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_2__.TxtLabelInput, {
    type: "text",
    onChange: e => handleChange(e, "Description"),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.capitalize)(changeName("Description")),
    id: "Description",
    value: data.Description,
    placeholder: changeName("Description"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_2__.TxtLabelInput, {
    type: "text",
    onChange: e => handleChange(e, "SiteName"),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.capitalize)(changeName("SiteName")),
    id: "SiteName",
    value: data.SiteName,
    placeholder: changeName("SiteName"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_2__.Selector, {
    cls: "secondary",
    iconCls: "icon",
    active: data.Landing,
    list: data.Pages,
    action: setLanding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "block py-2"
  }, "Page"))) : null, change && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Inputs__WEBPACK_IMPORTED_MODULE_2__.Button, {
    btnCls: "btn secondary fadeInLeft",
    divCls: "p-2 flex justify-end",
    click: updateSettings
  }, "Sauvegarder")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./assets/react/components/admin/pages/index.js":
/*!******************************************************!*\
  !*** ./assets/react/components/admin/pages/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Articles": () => (/* reexport safe */ _Articles__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Login": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Pages": () => (/* reexport safe */ _Pages__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Settings": () => (/* reexport safe */ _Settings__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages */ "./assets/react/components/admin/pages/Pages.jsx");
/* harmony import */ var _Articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Articles */ "./assets/react/components/admin/pages/Articles.jsx");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings */ "./assets/react/components/admin/pages/Settings.jsx");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./assets/react/components/admin/pages/Login.jsx");






/***/ }),

/***/ "./assets/react/components/admin/redux/index.js":
/*!******************************************************!*\
  !*** ./assets/react/components/admin/redux/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./assets/react/components/admin/redux/store.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./assets/react/components/admin/redux/reducers/ajaxSlice.js":
/*!*******************************************************************!*\
  !*** ./assets/react/components/admin/redux/reducers/ajaxSlice.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajaxSlice": () => (/* binding */ ajaxSlice),
/* harmony export */   "clearData": () => (/* binding */ clearData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pushData": () => (/* binding */ pushData),
/* harmony export */   "setUrl": () => (/* binding */ setUrl)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Functions/app */ "./assets/react/Functions/app.js");



const ajaxSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'ajax',
  initialState: {
    url: '',
    baseUrl: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_0__.setBaseUrl)('mini-admin'),
    navURL: "/mini-admin",
    axios: {
      baseURL: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_0__.setBaseUrl)('mini-admin'),
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    },
    data: {}
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = (0,_Functions_app__WEBPACK_IMPORTED_MODULE_0__.endOfPath)((0,_Functions_app__WEBPACK_IMPORTED_MODULE_0__.cleanPath)(`${action.payload}`));
    },
    pushData: (state, action) => {
      const {
        name,
        data
      } = action.payload;
      state.data = {
        ...state.data,
        [name]: data
      };
    },
    clearData: state => {
      state.data = {};
      state.url = "";
    }
  }
});
const {
  setUrl,
  pushData,
  clearData
} = ajaxSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxSlice.reducer);

/***/ }),

/***/ "./assets/react/components/admin/redux/reducers/index.js":
/*!***************************************************************!*\
  !*** ./assets/react/components/admin/redux/reducers/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajaxSlice": () => (/* reexport safe */ _ajaxSlice__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "lexicalSlice": () => (/* reexport safe */ _lexicalSlice__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "notificationSlice": () => (/* reexport safe */ _notificationSlice__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _ajaxSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _lexicalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexicalSlice */ "./assets/react/components/admin/redux/reducers/lexicalSlice.js");
/* harmony import */ var _notificationSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");





/***/ }),

/***/ "./assets/react/components/admin/redux/reducers/lexicalSlice.js":
/*!**********************************************************************!*\
  !*** ./assets/react/components/admin/redux/reducers/lexicalSlice.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lexicalSlice": () => (/* binding */ lexicalSlice),
/* harmony export */   "setImgKey": () => (/* binding */ setImgKey)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const lexicalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "lexical",
  initialState: {
    imgKey: null
  },
  reducers: {
    setImgKey: (state, action) => {
      return {
        ...state,
        imgKey: action.payload
      };
    }
  }
});
const {
  setImgKey
} = lexicalSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lexicalSlice.reducer);

/***/ }),

/***/ "./assets/react/components/admin/redux/reducers/notificationSlice.js":
/*!***************************************************************************!*\
  !*** ./assets/react/components/admin/redux/reducers/notificationSlice.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "notificationSlice": () => (/* binding */ notificationSlice),
/* harmony export */   "notify": () => (/* binding */ notify),
/* harmony export */   "notifyClose": () => (/* binding */ notifyClose),
/* harmony export */   "notifyKeep": () => (/* binding */ notifyKeep)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const notificationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "notification",
  initialState: {
    msg: "",
    status: "out",
    type: "info",
    timeout: null,
    life: 4000
  },
  reducers: {
    notify: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null;
      const {
        type,
        msg,
        timeout
      } = action.payload;
      return {
        ...state,
        msg: msg,
        type: type,
        status: "in",
        timeout: timeout || null
      };
    },
    notifyKeep: (state, action) => {
      const {
        event,
        func
      } = action.payload;
      state.timeout ? clearTimeout(state.timeout) : null;
      if (event === "stay") {
        return {
          ...state,
          timeout: null
        };
      } else {
        return {
          ...state,
          timeout: func
        };
      }
    },
    notifyClose: state => {
      state.timeout ? clearTimeout(state.timeout) : null;
      return {
        ...state,
        timeout: null,
        status: 'out'
      };
    }
  }
});
const {
  notify,
  notifyClose,
  notifyKeep
} = notificationSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notificationSlice.reducer);

/***/ }),

/***/ "./assets/react/components/admin/redux/store.js":
/*!******************************************************!*\
  !*** ./assets/react/components/admin/redux/store.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./assets/react/components/admin/redux/reducers/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    ajax: _reducers__WEBPACK_IMPORTED_MODULE_0__.ajaxSlice,
    notification: _reducers__WEBPACK_IMPORTED_MODULE_0__.notificationSlice,
    lexical: _reducers__WEBPACK_IMPORTED_MODULE_0__.lexicalSlice
  }
}));

/***/ }),

/***/ "./assets/react/components/admin/ui/ActionsRow.jsx":
/*!*********************************************************!*\
  !*** ./assets/react/components/admin/ui/ActionsRow.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon-ui/Delete */ "./assets/react/icon/icon-ui/Delete.jsx");
/* harmony import */ var _icon_icon_ui_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon-ui/Edit */ "./assets/react/icon/icon-ui/Edit.jsx");



const ActionsRow = ({
  id,
  update,
  remove
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-row flex-nowrap justify-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action-button secondary",
    onClick: e => update(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Edit__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cls: "action-icon edit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "action-button secondary",
    onClick: e => remove(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Delete__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cls: "action-icon delete"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsRow);

/***/ }),

/***/ "./assets/react/components/admin/ui/CSRFInput.jsx":
/*!********************************************************!*\
  !*** ./assets/react/components/admin/ui/CSRFInput.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CSRFInput = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "_token",
    value: getToken()
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSRFInput);

/***/ }),

/***/ "./assets/react/components/admin/ui/ContentNav.jsx":
/*!*********************************************************!*\
  !*** ./assets/react/components/admin/ui/ContentNav.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Inputs */ "./assets/react/components/admin/ui/Inputs/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./assets/react/components/admin/ui/index.js");
/* harmony import */ var _icon_icon_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icon/icon-ui */ "./assets/react/icon/icon-ui/index.js");






const ContentNav = ({
  header,
  data,
  update,
  remove,
  create
}) => {
  const [search, updateSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ajaxData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.data);
  const [navSearch, setNavSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // initiation des filtres
    const sFields = {};
    header.map(h => sFields[h.tag] = h.tag !== "page" ? {
      value: h.draw === "number" ? 0 : h.draw.match(/^bool/) ? false : "",
      active: false
    } : {
      value: [...ajaxData[h.tag + "s"]].map((el, i) => ({
        ...el,
        filtered: i == 0 ? true : false
      })),
      active: false
    });
    updateSearch({
      ...sFields
    });
  }, []);

  // format les donnée pour affichage
  const setView = (value, set = "value", tag) => {
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split(".")[set.split(".").length - 1];
        return (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(ajaxData[`${tag}s`][Number(value) - 1][name]);
      case new RegExp(/^bool/g).test(set):
        return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui__WEBPACK_IMPORTED_MODULE_5__.Success, {
          cls: "h-6 w-6 m-auto icon success"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui__WEBPACK_IMPORTED_MODULE_5__.Close, {
          cls: "h-6 w-6 m-auto icon false"
        });
      case new RegExp(/^num/g).test(set):
      case new RegExp(/^str/g).test(set):
      default:
        return typeof value === "string" ? (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(value) : value;
    }
  };

  // update des filtres de recherches
  const searchHandleChange = (e, field, value) => {
    e.stopPropagation();
    switch (field) {
      case "sort":
        value = value < 0 || value == "" ? 0 : value > data.length - 1 ? data.length - 1 : value;
        break;
      default:
        break;
    }
    updateSearch({
      ...search,
      [field]: {
        ...search[field],
        value: value
      }
    });
  };

  // update des filtres de recherches ( spécifique à une liste d'élément attribut "filtered")
  const updateArrayFilter = (value, tag) => {
    const array = [...search[tag].value];
    updateSearch({
      ...search,
      [tag]: {
        ...search[tag],
        value: array.map(el => ({
          ...el,
          filtered: el.id === value ? true : false
        }))
      }
    });
  };

  // rendu sans filtres
  const basicRender = data => data.map((field, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: "content-row"
  }, header.map(({
    tag,
    draw,
    colSize
  }, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: `row-field colsize-${colSize}`
  }, setView(field[tag], draw, tag))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `row-field action-field colsize-2`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_4__.ActionsRow, {
    id: k,
    update: () => update(field.id),
    remove: () => remove(field.id)
  }))));

  // rendu avec filtres
  const filterRender = data => {
    const searchFilter = {};
    for (const [k, v] of Object.entries(search)) {
      if (v.active) {
        searchFilter[k] = v.value;
      }
    }
    return data.map((field, k) => {
      for (const [k, v] of Object.entries(searchFilter)) {
        switch (typeof v) {
          case "string":
            if (!(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.strNormalize)(field[k]).match((0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.strNormalize)(v)) && v.length > 0) {
              return null;
            }
            break;
          case "number":
            if (v !== field[k]) {
              return null;
            }
            break;
          case "boolean":
            if (v === true && !field[k]) {
              return null;
            }
            if (v === false && field[k]) {
              return null;
            }
          case "object":
            if ((0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(v)) {
              const filter = v.find(el => el.filtered).id;
              if (field[k] !== filter) {
                return null;
              }
            }
          default:
            break;
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: k,
        className: "content-row"
      }, header.map(({
        tag,
        draw,
        colSize
      }, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: k,
        className: `row-field colsize-${colSize}`
      }, setView(field[tag], draw, tag))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: `row-field action-field colsize-2`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_4__.ActionsRow, {
        id: k,
        update: () => update(field.id)
      })));
    });
  };

  // active un filtre (selon cible utilisateur)
  const toggleFilter = (e, checked) => {
    e.stopPropagation();
    updateSearch({
      ...search,
      [checked]: {
        ...search[checked],
        active: !search[checked].active
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "content-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-nav-header"
  }, header.map((h, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: `header-field colsize-${h.colSize}`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(h.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-2 action-header`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)("actions"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn btn-outline icon-btn secondary mobile" + (navSearch ? " toggle" : ""),
    onClick: () => setNavSearch(!navSearch)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui__WEBPACK_IMPORTED_MODULE_5__.Filter, {
    cls: "icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-nav-search" + (navSearch ? " toggle" : "")
  }, search ? header.map((h, k) => {
    let Input;
    switch (true) {
      case new RegExp(/^num/gi).test(h.draw):
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          cls: `secondary colsize-10`,
          inpCls: "input-number secondary",
          change: (e, value) => searchHandleChange(e, h.tag, value),
          value: Number(search[h.tag].value),
          name: h.name
        });
        break;
      case new RegExp(/^bool/gi).test(h.draw):
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_3__.SwitchInput, {
          cls: "secondary",
          value: search[h.tag].value,
          change: e => searchHandleChange(e, h.tag, !search[h.tag].value)
        });
        break;
      case new RegExp(/^obj/gi).test(h.draw):
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_3__.Selector, {
          cls: "secondary",
          list: search[h.tag].value,
          active: search[h.tag].value.find(el => el.filtered).id,
          action: value => updateArrayFilter(value, h.tag)
        });
        break;
      default:
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          type: "text",
          className: "input-txt secondary colsize-10",
          onChange: e => searchHandleChange(e, h.tag, e.target.value),
          placeholder: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(h.name),
          value: search[h.tag].value
        });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: k,
      className: `search-field colsize-${h.colSize} flex justify-items-stretch flex-nowrap`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
      cls: "secondary",
      checked: search[h.tag].active,
      change: e => toggleFilter(e, h.tag)
    }), Input);
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-2 action-search`
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-inner"
  }, !search || search && !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.getPropsBoolStatus)(search, "active", true) ? data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? basicRender(data) : null : data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? filterRender(data) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-nav-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn success",
    onClick: create
  }, "Cr\xE9er")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentNav);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/Button.jsx":
/*!************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/Button.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({
  children,
  btnCls,
  divCls,
  click
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: divCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnCls,
    onClick: click
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/Checkbox.jsx":
/*!**************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/Checkbox.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Checked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icon/icon-ui/Checked */ "./assets/react/icon/icon-ui/Checked.jsx");


const Checkbox = ({
  cls,
  change,
  checked,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-checkbox " + cls,
    onClick: e => change(e)
  }, checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-checkbox-true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Checked__WEBPACK_IMPORTED_MODULE_1__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-checkbox-false"
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/DatePicker.jsx":
/*!****************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/DatePicker.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icon/icon-ui/ */ "./assets/react/icon/icon-ui/index.js");


const DatePicker = ({
  change,
  value
}) => {
  value.setHours(0, 0, 0, 0);
  const currVal = {
    day: value.getDay(),
    date: value.getDate(),
    month: value.getMonth(),
    year: value.getFullYear()
  };
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const drawDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [dateState, setDateState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(value.getTime()));
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !open && ref ? setTimeout(() => ref.blur(), 150) : null;
  }, [open]);
  const changeDate = v => {
    const nDate = dateState;
    nDate.setDate(v);
    setOpen(false);
    change(nDate);
  };
  const setDays = () => {
    let count = 0;
    const outPut = [];
    const displayDate = new Date(dateState.getTime());
    displayDate.setDate(1);
    for (let i = 1; i !== displayDate.getDay(); i++) {
      outPut.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: "dPick-" + count,
        className: "case empty"
      }));
      count++;
    }
    displayDate.setMonth(displayDate.getMonth() + 1);
    displayDate.setDate(0);
    for (let i = 1; i <= displayDate.getDate(); i++) {
      if (i == currVal.date && currVal.month == displayDate.getMonth() && currVal.year == displayDate.getFullYear()) {
        outPut.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: "dPick-" + count,
          onClick: () => changeDate(i),
          className: "case active"
        }, i));
      } else {
        outPut.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: "dPick-" + count,
          onClick: () => changeDate(i),
          className: "case"
        }, i));
      }
      count++;
    }
    return outPut;
  };
  const setMonth = v => {
    let month = dateState.getMonth() + v;
    const nDate = new Date(dateState.getTime());
    nDate.setMonth(month);
    setDateState(nDate);
  };
  const setYear = v => {
    let year = dateState.getFullYear() + v;
    const nDate = new Date(dateState.getTime());
    nDate.setFullYear(year);
    setDateState(nDate);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-calendar",
    onClick: () => !open ? setOpen(true) : null,
    onFocus: e => setRef(e.target),
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "date-txt"
  }, value.toLocaleDateString("fr-FR"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__.Calendar, {
    cls: "icon"
  })), !open ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar-current"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text"
  }, value.toLocaleDateString("fr-FR", drawDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn danger",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__.Close, {
    cls: "icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "month-year"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar-month"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-nav primary",
    onClick: () => setMonth(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__.NavPrev, {
    cls: "icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, dateState.toLocaleDateString("fr-FR", {
    month: "long"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-nav primary",
    onClick: () => setMonth(1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__.NavNext, {
    cls: "icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar-year"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-nav primary",
    onClick: () => setYear(-1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__.NavPrev, {
    cls: "icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, dateState.toLocaleDateString("fr-FR", {
    year: "numeric"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn-nav primary",
    onClick: () => setYear(1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui___WEBPACK_IMPORTED_MODULE_1__.NavNext, {
    cls: "icon"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "day-names"
  }, days.map((d, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: i + Math.random() * 100,
    className: "case"
  }, d, "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar-days"
  }, setDays())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/ImageFileInput.jsx":
/*!********************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/ImageFileInput.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ImageFileInput = ({
  cls,
  addCls,
  browse,
  id,
  change,
  imgBrowse
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: browse,
    onClick: imgBrowse
  }, "Parcourir"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: id,
    className: addCls
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    className: "hidden",
    id: id,
    accept: "image/png, image/jpeg",
    multiple: false,
    onChange: e => change(e.nativeEvent)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFileInput);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/NumberInput.jsx":
/*!*****************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/NumberInput.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NumberInput = ({
  cls,
  inpCls,
  change,
  value
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cls + ' input-number-wrap flex flex-nowrap relative'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "arrow-btn",
    target: "down",
    onClick: e => change(e, value - 1)
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: inpCls + ' colsize-10',
    onChange: e => change(e, e.target.value),
    value: value
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "arrow-btn",
    target: "up",
    onClick: e => change(e, value + 1)
  }, "+"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInput);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/Selector.jsx":
/*!**************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/Selector.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icon/icon-ui/Expand */ "./assets/react/icon/icon-ui/Expand.jsx");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Functions/app */ "./assets/react/Functions/app.js");



const Selector = ({
  cls,
  list,
  active,
  iconCls,
  children,
  action,
  sortProp = "id"
}) => {
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastEvent, setLastEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // mise en place de l'élément actif par défaut (prop active obligatoire)
  if (!list) {
    return null;
  }
  const landing = list.find(i => i[sortProp] === active) || list.find(i => i.id === active);
  const avaible = list.filter(i => i.id !== landing.id);
  const toggleSelect = e => {
    e.stopPropagation();
    let $el = e.target;
    while ($el.classList.contains('selector') == false) {
      $el = $el.parentNode;
    }
    if (e.type === 'click' && lastEvent === 'click' || e.type !== 'click') {
      setToggle(!toggle);
      lastEvent === 'click' && toggle === true ? $el.blur() : null;
    }
    setLastEvent(e.type);
  };
  const changeValue = (e, v) => {
    e.preventDefault();
    toggleSelect(e);
    action(v);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (cls ? 'selector ' + cls : 'selector') + (toggle ? ' opened' : ''),
    onFocus: toggleSelect,
    onBlur: toggleSelect,
    tabIndex: -1
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opt active",
    value: landing.id,
    onClick: toggle ? toggleSelect : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "txt"
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(landing.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Expand__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cls: iconCls
  })), toggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opt-wrapper"
  }, avaible.map(({
    id,
    title
  }, k) =>
  /*#__PURE__*/
  // l'id de l'élément choisi est directement envoyé dans "action" (function à passer en prop)
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: "opt",
    value: id,
    onClick: e => changeValue(e, id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "txt"
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(title))))) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selector);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/SwitchInput.jsx":
/*!*****************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/SwitchInput.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// ui boolean representation


const SwitchInput = ({
  cls = "",
  value,
  change
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'input-switch' + (value ? ' true' : ' false') + (cls ? ` ${cls}` : ""),
    onClick: e => change(e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-switch-button"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchInput);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/TxtLabelInput.jsx":
/*!*******************************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/TxtLabelInput.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TxtLabelInput({
  id,
  value,
  label,
  placeholder,
  type,
  inputCls,
  divCls = 'input-wrap p-2',
  labelCls = 'block p-2',
  onChange
}) {
  const [isActive, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleFocus = () => {
    setActive(!isActive);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: divCls + (isActive ? " active" : "")
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: id,
    className: labelCls
  }, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: type,
    id: id,
    className: inputCls,
    name: id,
    value: value ? value : "",
    onFocus: handleFocus,
    onBlur: handleFocus,
    onChange: onChange,
    placeholder: placeholder
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TxtLabelInput);

/***/ }),

/***/ "./assets/react/components/admin/ui/Inputs/index.js":
/*!**********************************************************!*\
  !*** ./assets/react/components/admin/ui/Inputs/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "DatePicker": () => (/* reexport safe */ _DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ImageFileInput": () => (/* reexport safe */ _ImageFileInput__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NumberInput": () => (/* reexport safe */ _NumberInput__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Selector": () => (/* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SwitchInput": () => (/* reexport safe */ _SwitchInput__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "TxtLabelInput": () => (/* reexport safe */ _TxtLabelInput__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./assets/react/components/admin/ui/Inputs/Button.jsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./assets/react/components/admin/ui/Inputs/Checkbox.jsx");
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePicker */ "./assets/react/components/admin/ui/Inputs/DatePicker.jsx");
/* harmony import */ var _ImageFileInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageFileInput */ "./assets/react/components/admin/ui/Inputs/ImageFileInput.jsx");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberInput */ "./assets/react/components/admin/ui/Inputs/NumberInput.jsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Selector */ "./assets/react/components/admin/ui/Inputs/Selector.jsx");
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwitchInput */ "./assets/react/components/admin/ui/Inputs/SwitchInput.jsx");
/* harmony import */ var _TxtLabelInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxtLabelInput */ "./assets/react/components/admin/ui/Inputs/TxtLabelInput.jsx");










/***/ }),

/***/ "./assets/react/components/admin/ui/ModalEditor.jsx":
/*!**********************************************************!*\
  !*** ./assets/react/components/admin/ui/ModalEditor.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon-ui/Close */ "./assets/react/icon/icon-ui/Close.jsx");
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inputs */ "./assets/react/components/admin/ui/Inputs/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./assets/react/components/admin/ui/index.js");




const ModalEditor = ({
  data,
  schema,
  title,
  close,
  command,
  small
}) => {
  const [mData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const empty = {};
    Object.entries(schema).map(([name, par]) => {
      let val;
      switch (par.type) {
        case "string":
        case "text":
          val = "";
          break;
        case "select":
          val = par.list[0].id;
          break;
        case "sorting":
          const last = par.list.length - 1;
          val = par.list[last].id;
          break;
        case "bool":
          val = false;
          break;
        case "date":
          val = new Date();
          val.setHours(0, 0, 0, 0);
          break;
        default:
          val = "";
          break;
      }
      empty[name] = val;
    });
    !data ? setData({
      ...empty
    }) : setData({
      ...data
    });
  }, []);
  return !mData ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "modal-editor" + (small ? " small" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-bar-txt"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-bar-close",
    onClick: close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cls: "w-6 h-6"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-window"
  }, mData ? Object.entries(schema).map(([key, value], i) => {
    let Input;
    switch (value.type) {
      case "string":
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          className: "input-txt secondary",
          type: "text",
          value: mData[key],
          placeholder: "...",
          onChange: e => setData({
            ...mData,
            [key]: e.target.value
          })
        }));
        break;
      case "bool":
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_2__.SwitchInput, {
          value: mData[key],
          change: () => setData({
            ...mData,
            [key]: !mData[key]
          })
        }));
        break;
      case "sorting":
      case "select":
        const reKey = key.replace(/s$/g, "");
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_2__.Selector, {
          cls: "secondary p-0",
          iconCls: "icon",
          list: value.list,
          active: mData[reKey],
          action: v => setData({
            ...mData,
            [reKey]: v
          }),
          sortProp: reKey
        }));
        break;
      case "date":
        const date = mData[key] || new Date();
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_2__.DatePicker, {
          value: date,
          change: v => {
            setData({
              ...mData,
              [key]: v
            });
          }
        }));
        break;
      default:
        break;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "modal-field"
    }, Input);
  }) : null), Object.entries(schema).map(([k, v], i) => {
    return v.type === "text" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_3__.RichText, {
      key: i,
      data: mData[k],
      update: v => setData({
        ...mData,
        [k]: v
      })
    }) : null;
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btn secondary",
    onClick: () => {
      command({
        ...mData
      });
      close();
    }
  }, "Sauver")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalEditor);

/***/ }),

/***/ "./assets/react/components/admin/ui/NavLi.jsx":
/*!****************************************************!*\
  !*** ./assets/react/components/admin/ui/NavLi.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


const NavLi = ({
  children,
  to,
  onClick
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    className: "nav-link",
    to: to,
    onClick: onClick,
    end: true
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLi);

/***/ }),

/***/ "./assets/react/components/admin/ui/PagesContainer.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/admin/ui/PagesContainer.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PagesContainer = ({
  children,
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title mb-8"
  }, title), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PagesContainer);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/AlignText.jsx":
/*!*************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/AlignText.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lexical_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexical/selection */ "./node_modules/@lexical/selection/LexicalSelection.js");
/* harmony import */ var _lexical_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lexical_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _items_BtnFormatText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/BtnFormatText */ "./assets/react/components/admin/ui/RichText/Actions/items/BtnFormatText.jsx");
/* harmony import */ var _icon_text_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../icon/text-editor */ "./assets/react/icon/text-editor/index.js");






const AlignText = () => {
  const defaultState = {
    left: false,
    center: false,
    right: false,
    justify: false
  };
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3__.useLexicalComposerContext)();
  const [btnStates, setBtnStates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    ...defaultState
  });
  const icons = {
    left: _icon_text_editor__WEBPACK_IMPORTED_MODULE_5__.TxtLeft,
    center: _icon_text_editor__WEBPACK_IMPORTED_MODULE_5__.TxtCenter,
    right: _icon_text_editor__WEBPACK_IMPORTED_MODULE_5__.TxtRight,
    justify: _icon_text_editor__WEBPACK_IMPORTED_MODULE_5__.TxtJustify
  };
  const updateBtnStates = () => {
    const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_1__.$getSelection)();
    if ((0,lexical__WEBPACK_IMPORTED_MODULE_1__.$isRangeSelection)(selection)) {
      let node = selection.anchor.getNode().getTopLevelElement();
      switch (node.getType()) {
        case "paragraph":
          break;
        default:
          node = selection.anchor.getNode();
      }
      node = node.getType() === "text" ? node.getParent() : node;
      let value = node.getFormatType() !== "" ? node.getFormatType() : 'left';
      setBtnStates({
        ...defaultState,
        [value]: true
      });
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return editor.registerUpdateListener(({
      editorState,
      tags
    }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);
  const itemsDispatch = () => {
    let items = [];
    let i = 0;
    for (let [key, value] of Object.entries(btnStates)) {
      items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_BtnFormatText__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: i,
        active: value,
        command: () => {
          editor.focus();
          editor.dispatchCommand(lexical__WEBPACK_IMPORTED_MODULE_1__.FORMAT_ELEMENT_COMMAND, key);
        },
        name: key,
        item: icons[key]
      }));
      i++;
    }
    return items;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-item-group"
  }, itemsDispatch().map(i => i));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignText);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/FormatTextGroup.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/FormatTextGroup.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _items_BtnFormatText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/BtnFormatText */ "./assets/react/components/admin/ui/RichText/Actions/items/BtnFormatText.jsx");
/* harmony import */ var _icon_text_editor___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../icon/text-editor/ */ "./assets/react/icon/text-editor/index.js");





const FormatTextGroup = () => {
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2__.useLexicalComposerContext)();
  const [btnStates, setBtnStates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    bold: false,
    italic: false,
    superscript: false,
    underline: false,
    strikethrough: false
  });
  const icons = {
    bold: _icon_text_editor___WEBPACK_IMPORTED_MODULE_4__.Bold,
    italic: _icon_text_editor___WEBPACK_IMPORTED_MODULE_4__.Italic,
    superscript: _icon_text_editor___WEBPACK_IMPORTED_MODULE_4__.SuperScript,
    underline: _icon_text_editor___WEBPACK_IMPORTED_MODULE_4__.Underline,
    strikethrough: _icon_text_editor___WEBPACK_IMPORTED_MODULE_4__.Strike
  };
  const updateBtnStates = () => {
    let prevState = {
      ...btnStates
    };
    const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_1__.$getSelection)();
    let node = selection;
    if ((0,lexical__WEBPACK_IMPORTED_MODULE_1__.$isRangeSelection)(selection)) {
      node = selection.getNodes()[0];
    }
    if (node && typeof node.hasFormat !== "undefined") {
      for (let [key, value] of Object.entries(prevState)) {
        prevState[key] = node.hasFormat(key);
      }
    }
    setBtnStates({
      ...prevState
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return editor.registerUpdateListener(({
      editorState,
      tags
    }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);
  const itemsDispatch = () => {
    let items = [];
    let i = 0;
    for (let [key, value] of Object.entries(btnStates)) {
      items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_BtnFormatText__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: i,
        active: value,
        command: () => {
          editor.focus();
          editor.dispatchCommand(lexical__WEBPACK_IMPORTED_MODULE_1__.FORMAT_TEXT_COMMAND, key);
        },
        name: key,
        item: icons[key]
      }));
      i++;
    }
    return items;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-item-group"
  }, itemsDispatch().map(i => i));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatTextGroup);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/InsertImg.jsx":
/*!*************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/InsertImg.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _items_BtnFormatText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/BtnFormatText */ "./assets/react/components/admin/ui/RichText/Actions/items/BtnFormatText.jsx");
/* harmony import */ var _plugins_ImagePlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/ImagePlugin */ "./assets/react/components/admin/ui/RichText/plugins/ImagePlugin.jsx");
/* harmony import */ var _items_imgModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/imgModal */ "./assets/react/components/admin/ui/RichText/Actions/items/imgModal.jsx");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_lexicalSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/reducers/lexicalSlice */ "./assets/react/components/admin/redux/reducers/lexicalSlice.js");
/* harmony import */ var _icon_text_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../icon/text-editor */ "./assets/react/icon/text-editor/index.js");









const InsertImg = () => {
  const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1__.useLexicalComposerContext)();
  const [imgProp, setImgProp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const img = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.lexical.imgKey);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    img !== null ? openModal(img) : null;
  }, [img]);
  const openModal = key => {
    if (key) {
      editor.getEditorState().read(() => {
        const el = (0,lexical__WEBPACK_IMPORTED_MODULE_5__.$getNodeByKey)(key);
        setImgProp({
          src: el.__src,
          isFile: el.__isFile,
          atEnd: el.__atEnd
        });
      });
    } else {
      setImgProp({
        src: "",
        isFile: false,
        atEnd: false
      });
    }
    setModal(true);
  };
  const editImg = ({
    name,
    value
  }) => {
    if (img) {
      editor.update(() => {
        const el = (0,lexical__WEBPACK_IMPORTED_MODULE_5__.$getNodeByKey)(img);
        const keys = el.getWritable();
        keys[`__${name}`] = value;
      });
    }
    setImgProp({
      ...imgProp,
      [name]: value
    });
  };
  const closeModal = () => {
    setModal(false);
    dispatch((0,_redux_reducers_lexicalSlice__WEBPACK_IMPORTED_MODULE_7__.setImgKey)(null));
  };
  const openInsertImg = () => {
    openModal(null);
  };
  const createImg = () => {
    const {
      src,
      atEnd,
      isFile
    } = imgProp;
    editor.dispatchCommand(_plugins_ImagePlugin__WEBPACK_IMPORTED_MODULE_3__.INSERT_IMAGE_COMMAND, {
      src: src,
      alt: null,
      isFile: isFile,
      atEnd: atEnd
    });
    setModal(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-item-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_BtnFormatText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    command: openInsertImg,
    item: _icon_text_editor__WEBPACK_IMPORTED_MODULE_8__.Img
  }), modal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_imgModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    close: closeModal,
    update: editImg,
    create: img ? false : true,
    command: createImg,
    props: imgProp
  }) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsertImg);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/ListType.jsx":
/*!************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/ListType.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lexical_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexical/utils */ "./node_modules/@lexical/utils/LexicalUtils.js");
/* harmony import */ var _lexical_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lexical_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lexical_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexical/list */ "./node_modules/@lexical/list/LexicalList.js");
/* harmony import */ var _lexical_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lexical_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _items_BtnFormatText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/BtnFormatText */ "./assets/react/components/admin/ui/RichText/Actions/items/BtnFormatText.jsx");
/* harmony import */ var _icon_text_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../icon/text-editor */ "./assets/react/icon/text-editor/index.js");







const ListType = () => {
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_3__.useLexicalComposerContext)();
  const [btnStates, setBtnStates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    ul: false,
    ol: false
  });
  const updateBtnStates = () => {
    let prevState = {
      ...btnStates
    };
    const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_2__.$getSelection)();
    if ((0,lexical__WEBPACK_IMPORTED_MODULE_2__.$isRangeSelection)(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element = anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        const parentList = (0,_lexical_utils__WEBPACK_IMPORTED_MODULE_1__.$getNearestNodeOfType)(anchorNode, _lexical_list__WEBPACK_IMPORTED_MODULE_4__.ListNode);
        const type = parentList ? parentList.getTag() : element.getType();
        for (let list in prevState) {
          prevState[list] = list == type ? true : false;
        }
        setBtnStates(prevState);
      }
    }
  };
  const unorderedList = () => {
    editor.focus();
    editor.dispatchCommand(_lexical_list__WEBPACK_IMPORTED_MODULE_4__.INSERT_UNORDERED_LIST_COMMAND);
  };
  const orderedList = () => {
    editor.focus();
    editor.dispatchCommand(_lexical_list__WEBPACK_IMPORTED_MODULE_4__.INSERT_ORDERED_LIST_COMMAND);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return editor.registerUpdateListener(({
      editorState
    }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-item-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_BtnFormatText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    active: btnStates.ul,
    command: unorderedList,
    name: "unordered-list",
    item: _icon_text_editor__WEBPACK_IMPORTED_MODULE_6__.BulletedList
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_BtnFormatText__WEBPACK_IMPORTED_MODULE_5__["default"], {
    active: btnStates.ol,
    command: orderedList,
    name: "ordered-list",
    item: _icon_text_editor__WEBPACK_IMPORTED_MODULE_6__.NumberedList
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListType);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/SizeTextGroup.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/SizeTextGroup.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lexical_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/selection */ "./node_modules/@lexical/selection/LexicalSelection.js");
/* harmony import */ var _lexical_selection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_selection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _items_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/Dropdown */ "./assets/react/components/admin/ui/RichText/Actions/items/Dropdown.jsx");
/* harmony import */ var _icon_text_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../icon/text-editor */ "./assets/react/icon/text-editor/index.js");






const SizeTextGroup = () => {
  const format = [{
    name: 12,
    value: "0.75rem"
  }, {
    name: 14,
    value: "0.875rem"
  }, {
    name: 16,
    value: null
  }, {
    name: 18,
    value: "1.125rem"
  }, {
    name: 20,
    value: "1.25rem"
  }, {
    name: 24,
    value: "1.5rem"
  }, {
    name: 30,
    value: "1.875rem"
  }, {
    name: 36,
    value: "2.25rem"
  }];
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_2__.useLexicalComposerContext)();
  const [dropDownState, setDDStates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(16);
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [eventLog, setEventLog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('blur');
  const updateBtnStates = () => {
    const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_1__.$getSelection)();
    let prop = (0,_lexical_selection__WEBPACK_IMPORTED_MODULE_3__.$getSelectionStyleValueForProperty)(selection, 'font-size');
    let val = format.find(f => f.value === prop) || format[2];
    setDDStates(val.name);
    val.name != '16' ? setActive(true) : setActive(false);
  };
  const handleSelect = ($event, value) => {
    setToggle(false);
    editor.update(() => {
      const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_1__.$getSelection)();
      if ((0,lexical__WEBPACK_IMPORTED_MODULE_1__.$isRangeSelection)(selection)) {
        (0,_lexical_selection__WEBPACK_IMPORTED_MODULE_3__.$patchStyleText)(selection, {
          'font-size': value
        });
      }
    });
  };
  const toggleState = e => {
    e.stopPropagation();
    switch (e.type) {
      case 'blur':
        setToggle(false);
        break;
      case 'focus':
        setToggle(true);
        break;
      case 'click':
        eventLog == 'click' ? editor.focus() : null;
        break;
    }
    setEventLog(e.type);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return editor.registerUpdateListener(({
      editorState
    }) => {
      editorState.read(() => {
        updateBtnStates();
      });
    });
  }, [editor]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'toolbar-item-select' + (active ? ' active' : ''),
    title: "font-size",
    onFocus: toggleState,
    onBlur: toggleState,
    onClick: toggleState,
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "item-select-title"
  }, dropDownState), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tool-divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_text_editor__WEBPACK_IMPORTED_MODULE_5__.FormatSize, {
    cls: "icon"
  }), toggle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_items_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: format,
    select: handleSelect
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeTextGroup);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/items/BtnFormatText.jsx":
/*!***********************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/items/BtnFormatText.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BtnFormatText = ({
  command,
  active,
  item,
  name
}) => {
  let Item = item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    title: name,
    onClick: command,
    className: 'toolbar-item' + (active ? ' active' : ''),
    name: name
  }, Item && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
    cls: "icon"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnFormatText);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/items/Dropdown.jsx":
/*!******************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/items/Dropdown.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Dropdown = ({
  item,
  select
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "select-dropdown"
  }, item.map(({
    value,
    name
  }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: Date.now() + i,
    className: "dropdown-opt",
    value: value,
    onClick: $event => select($event, value)
  }, name)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Actions/items/imgModal.jsx":
/*!******************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Actions/items/imgModal.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Inputs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Inputs/index */ "./assets/react/components/admin/ui/Inputs/index.js");
/* harmony import */ var _icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../icon/icon-ui/Close */ "./assets/react/icon/icon-ui/Close.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../Functions/app */ "./assets/react/Functions/app.js");







const ImgModal = ({
  close,
  update,
  props,
  create,
  command
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const cfg = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.axios);
  const xml = axios__WEBPACK_IMPORTED_MODULE_6__["default"].create({
    ...cfg,
    headers: {
      ...cfg.headers,
      'Content-Type': 'multipart/form-data'
    }
  });
  const {
    atEnd,
    src,
    isFile
  } = props;
  const [browser, setBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [files, setFiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const fileSys = e => {
    const file = e.target.files[0];
    if (file) {
      const form = new FormData();
      form.append("image", file);
      xml.post('/fileupload', form).then(res => {
        console.log(res);
        dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_4__.notify)({
          type: "success",
          msg: "image importée !"
        }));
        const data = res.data;
        update({
          name: 'src',
          value: `${data.path}/${data.name}`
        });
      }).catch(res => {
        console.log(res);
      });
    }
  };
  const imgBrowse = () => {
    setBrowser(true);
    xml.get('/imgbrowser').then(res => {
      const data = res.data;
      setFiles({
        list: [...data.files],
        path: data.path
      });
    });
  };
  const setImg = src => {
    update({
      name: 'src',
      value: `${files.path}/${src}`
    });
    setBrowser(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-titlebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title-text"
  }, "Image :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn danger",
    onClick: close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cls: "icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content"
  }, browser && isFile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-img-browser"
  }, files ? files.list.map((file, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: `${Date.now()}-${i}`,
    className: "img-item",
    onClick: () => setImg(file)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: `${files.path}/${file}`,
    className: "w-full m-auto"
  }))) : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "p-2 underline"
  }, "Type d'image :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between py-1 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'font-bold' + (!isFile ? ' color-secondary' : "")
  }, "En ligne"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs_index__WEBPACK_IMPORTED_MODULE_1__.SwitchInput, {
    cls: "secondary neutral",
    change: () => update({
      name: 'isFile',
      value: !isFile
    }),
    value: isFile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'font-bold' + (isFile ? ' color-secondary' : "")
  }, "Locale"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-1 relative"
  }, src && src.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "img-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "badge"
  }, "Image :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "img-name-txt"
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_5__.endOfPath)(src).replace(/^\[.+\]-|^\/\[.+\]-/g, ''))) : null, isFile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs_index__WEBPACK_IMPORTED_MODULE_1__.ImageFileInput, {
    cls: "flex gap-1 p-1",
    addCls: "btn secondary p-1 w-7 grow-0",
    browse: "btn p-1 grey grow block",
    id: "sendFile",
    change: fileSys,
    imgBrowse: imgBrowse
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs_index__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    placeholder: "https://....",
    label: "Adresse :",
    labelCls: "label",
    divCls: "input-wrap p-2 secondary",
    inputCls: "input-txt secondary",
    type: "text",
    id: "urlInput",
    value: src,
    onChange: e => update({
      name: 'src',
      value: e.target.value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "p-2 underline"
  }, "Position :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between py-1 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'font-bold' + (!atEnd ? ' color-secondary' : "")
  }, "Gauche"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Inputs_index__WEBPACK_IMPORTED_MODULE_1__.SwitchInput, {
    cls: "secondary neutral",
    value: atEnd,
    change: () => update({
      name: 'atEnd',
      value: !atEnd
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: 'font-bold' + (atEnd ? ' color-secondary' : "")
  }, "Droite"))), create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-1 px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn secondary w-full rounded-lg p-1",
    onClick: command
  }, "Ins\xE9rer")) : null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImgModal);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Nodes/ImageNode.jsx":
/*!***********************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Nodes/ImageNode.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$createImageNode": () => (/* binding */ $createImageNode),
/* harmony export */   "$isImageNode": () => (/* binding */ $isImageNode),
/* harmony export */   "ImageNode": () => (/* binding */ ImageNode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Image */ "./assets/react/components/admin/ui/RichText/Nodes/components/Image.jsx");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Functions/app */ "./assets/react/Functions/app.js");




const convertImgElement = domNode => {
  if (domNode instanceof HTMLImageElement) {
    const {
      alt: altText,
      src
    } = domNode;
    const atEnd = (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.getBooleanFromString)(domNode.getAttribute("at_end"));
    const isFile = (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.getBooleanFromString)(domNode.getAttribute("saved"));
    return {
      node: $createImageNode({
        altText,
        src,
        atEnd: atEnd,
        isFile: isFile
      })
    };
  }
  return null;
};
class ImageNode extends lexical__WEBPACK_IMPORTED_MODULE_1__.DecoratorNode {
  __src;
  __altText;
  __atEnd;
  __isFile;
  exportDOM() {
    const el = document.createElement("img");
    el.setAttribute("src", this.__src);
    el.setAttribute("alt", this.__altText);
    el.setAttribute("at_end", this.__atEnd);
    el.setAttribute("saved", this.__isFile);
    return {
      element: el
    };
  }
  static importDOM() {
    return {
      img: node => ({
        conversion: convertImgElement,
        priority: 0
      })
    };
  }
  static getType() {
    return "image";
  }
  static clone(node) {
    return new ImageNode({
      src: node.__src,
      altText: node.__altText,
      atEnd: node.__atEnd,
      key: node.__key
    });
  }
  constructor(props) {
    const {
      src,
      altText,
      key,
      atEnd,
      isFile
    } = props;
    super(key);
    this.__altText = altText || null;
    this.__src = src;
    this.__atEnd = atEnd || false;
    this.__isFile = isFile || false;
  }

  // View

  createDOM(config) {
    const span = document.createElement("div");
    const {
      theme
    } = config;
    const className = theme.image;
    if (className !== undefined) {
      span.className = className;
    }
    if (this.__atEnd) {
      span.className += " at-end";
    }
    return span;
  }
  updateDOM() {
    return true;
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  getAtEnd() {
    return this.__atEnd;
  }
  setAtEnd(set) {
    const self = this.getWritable();
    self.__atEnd = set;
  }
  decorate() {
    const {
      __src,
      __altText,
      __key
    } = this;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: __src,
      alt: __altText,
      decorateKey: __key
    });
  }
}
const $createImageNode = ({
  altText,
  atEnd,
  isFile,
  src,
  key
}) => {
  return new ImageNode({
    altText,
    atEnd,
    isFile,
    src,
    key
  });
};
function $isImageNode(node) {
  return node instanceof ImageNode;
}

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/Nodes/components/Image.jsx":
/*!******************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/Nodes/components/Image.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_lexicalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/reducers/lexicalSlice */ "./assets/react/components/admin/redux/reducers/lexicalSlice.js");



const Image = ({
  src,
  altText,
  decorateKey
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: src,
    alt: altText,
    onClick: () => dispatch((0,_redux_reducers_lexicalSlice__WEBPACK_IMPORTED_MODULE_2__.setImgKey)(decorateKey))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/index.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexical/react/LexicalComposer */ "./node_modules/@lexical/react/LexicalComposer.js");
/* harmony import */ var _lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexical/react/LexicalRichTextPlugin */ "./node_modules/@lexical/react/LexicalRichTextPlugin.js");
/* harmony import */ var _lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/react/LexicalListPlugin */ "./node_modules/@lexical/react/LexicalListPlugin.js");
/* harmony import */ var _lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lexical_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexical/list */ "./node_modules/@lexical/list/LexicalList.js");
/* harmony import */ var _lexical_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lexical_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lexical/react/LexicalContentEditable */ "./node_modules/@lexical/react/LexicalContentEditable.js");
/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lexical/react/LexicalHistoryPlugin */ "./node_modules/@lexical/react/LexicalHistoryPlugin.js");
/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lexical/react/LexicalErrorBoundary */ "./node_modules/@lexical/react/LexicalErrorBoundary.js");
/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Actions_FormatTextGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Actions/FormatTextGroup */ "./assets/react/components/admin/ui/RichText/Actions/FormatTextGroup.jsx");
/* harmony import */ var _Actions_SizeTextGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actions/SizeTextGroup */ "./assets/react/components/admin/ui/RichText/Actions/SizeTextGroup.jsx");
/* harmony import */ var _Actions_ListType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Actions/ListType */ "./assets/react/components/admin/ui/RichText/Actions/ListType.jsx");
/* harmony import */ var _Actions_AlignText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Actions/AlignText */ "./assets/react/components/admin/ui/RichText/Actions/AlignText.jsx");
/* harmony import */ var _Nodes_ImageNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Nodes/ImageNode */ "./assets/react/components/admin/ui/RichText/Nodes/ImageNode.jsx");
/* harmony import */ var _Actions_InsertImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Actions/InsertImg */ "./assets/react/components/admin/ui/RichText/Actions/InsertImg.jsx");
/* harmony import */ var _plugins_ImagePlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/ImagePlugin */ "./assets/react/components/admin/ui/RichText/plugins/ImagePlugin.jsx");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lexical_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @lexical/html */ "./node_modules/@lexical/html/LexicalHtml.js");
/* harmony import */ var _lexical_html__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_lexical_html__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_17__);


















const theme = {
  paragraph: 'paragraph',
  text: {
    bold: 'text-bold',
    italic: 'text-italic',
    strikethrough: 'text-through',
    underline: 'text-underline',
    underlineStrikethrough: 'text-underline-through',
    superscript: 'text-superscript'
  },
  list: {
    ol: "list-ordered",
    ul: "list-unordered",
    listitem: "list-item"
  },
  image: "image"
};
const InitialHtmlPlugin = ({
  data,
  update
}) => {
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_15__.useLexicalComposerContext)();
  const [html, setHtml] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const updateMData = () => {
    const html = (0,_lexical_html__WEBPACK_IMPORTED_MODULE_16__.$generateHtmlFromNodes)(editor, null);
    update(html);
  };
  editor.registerUpdateListener(({
    editorState
  }) => editorState.read(updateMData));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !html ? editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(data, "text/html");
      const nodes = (0,_lexical_html__WEBPACK_IMPORTED_MODULE_16__.$generateNodesFromDOM)(editor, dom);
      (0,lexical__WEBPACK_IMPORTED_MODULE_17__.$getRoot)().select();
      (0,lexical__WEBPACK_IMPORTED_MODULE_17__.$insertNodes)(nodes);
      (0,lexical__WEBPACK_IMPORTED_MODULE_17__.$setSelection)(null);
      setHtml(true);
    }) : null;
  }, [editor]);
};
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
const onError = error => {
  console.error(error);
};
const Editor = ({
  data,
  update
}) => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [_lexical_list__WEBPACK_IMPORTED_MODULE_4__.ListNode, _lexical_list__WEBPACK_IMPORTED_MODULE_4__.ListItemNode, _Nodes_ImageNode__WEBPACK_IMPORTED_MODULE_12__.ImageNode]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_1__.LexicalComposer, {
    initialConfig: initialConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InitialHtmlPlugin, {
    data: data,
    update: update
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalListPlugin__WEBPACK_IMPORTED_MODULE_3__.ListPlugin, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_6__.HistoryPlugin, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_plugins_ImagePlugin__WEBPACK_IMPORTED_MODULE_14__.ImagePlugin, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_FormatTextGroup__WEBPACK_IMPORTED_MODULE_8__["default"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_SizeTextGroup__WEBPACK_IMPORTED_MODULE_9__["default"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_ListType__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_AlignText__WEBPACK_IMPORTED_MODULE_11__["default"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_InsertImg__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_2__.RichTextPlugin, {
    contentEditable: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_5__.ContentEditable, {
      className: "editor-text"
    }),
    placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "editor-placeholder"
    }, "Contenu..."),
    ErrorBoundary: (_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_7___default())
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/plugins/ImagePlugin.jsx":
/*!***************************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/plugins/ImagePlugin.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INSERT_IMAGE_COMMAND": () => (/* binding */ INSERT_IMAGE_COMMAND),
/* harmony export */   "ImagePlugin": () => (/* binding */ ImagePlugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lexical_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexical/utils */ "./node_modules/@lexical/utils/LexicalUtils.js");
/* harmony import */ var _lexical_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lexical_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nodes_ImageNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Nodes/ImageNode */ "./assets/react/components/admin/ui/RichText/Nodes/ImageNode.jsx");





const INSERT_IMAGE_COMMAND = (0,lexical__WEBPACK_IMPORTED_MODULE_3__.createCommand)("INSERT_IMAGE_COMMAND");
const ImagePlugin = () => {
  const [editor] = (0,_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_1__.useLexicalComposerContext)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!editor.hasNodes([_Nodes_ImageNode__WEBPACK_IMPORTED_MODULE_4__.ImageNode])) {
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    }
    return (0,_lexical_utils__WEBPACK_IMPORTED_MODULE_2__.mergeRegister)(editor.registerCommand(INSERT_IMAGE_COMMAND, payload => {
      const imgNode = (0,_Nodes_ImageNode__WEBPACK_IMPORTED_MODULE_4__.$createImageNode)(payload);
      (0,lexical__WEBPACK_IMPORTED_MODULE_3__.$insertNodes)([imgNode]);
      if ((0,lexical__WEBPACK_IMPORTED_MODULE_3__.$isRootOrShadowRoot)(imgNode.getParentOrThrow())) {
        (0,_lexical_utils__WEBPACK_IMPORTED_MODULE_2__.$wrapNodeInElement)(imgNode, lexical__WEBPACK_IMPORTED_MODULE_3__.$createParagraphNode).selectEnd();
      }
      return true;
    }, lexical__WEBPACK_IMPORTED_MODULE_3__.COMMAND_PRIORITY_EDITOR));
  }, [editor]);
  return null;
};


/***/ }),

/***/ "./assets/react/components/admin/ui/Toast.jsx":
/*!****************************************************!*\
  !*** ./assets/react/components/admin/ui/Toast.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var _icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icon/icon-ui/Close */ "./assets/react/icon/icon-ui/Close.jsx");
/* harmony import */ var _icon_icon_ui_Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icon/icon-ui/Info */ "./assets/react/icon/icon-ui/Info.jsx");
/* harmony import */ var _icon_icon_ui_Success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icon/icon-ui/Success */ "./assets/react/icon/icon-ui/Success.jsx");
/* harmony import */ var _icon_icon_ui_Warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icon/icon-ui/Warning */ "./assets/react/icon/icon-ui/Warning.jsx");
/* harmony import */ var _icon_icon_ui_Danger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../icon/icon-ui/Danger */ "./assets/react/icon/icon-ui/Danger.jsx");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");









const Toast = () => {
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.notification);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    msg,
    type,
    status
  } = data;
  const icons = {
    'Info': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cls: "h-5 w-5"
    }),
    'Success': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Success__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cls: "h-5 w-5"
    }),
    'Warning': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Warning__WEBPACK_IMPORTED_MODULE_6__["default"], {
      cls: "h-5 w-5"
    }),
    'Danger': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Danger__WEBPACK_IMPORTED_MODULE_7__["default"], {
      cls: "h-5 w-5"
    })
  };
  const close = () => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyClose)());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `toast ${type} ${status}`,
    onMouseEnter: () => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyKeep)({
      event: 'stay'
    })),
    onMouseLeave: () => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyKeep)({
      event: 'close',
      func: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyClose)()), 1400)
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toast-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toast-title-icon"
  }, icons[(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(type)]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toast-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cls: "h-5 w-5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toast-content"
  }, msg));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);

/***/ }),

/***/ "./assets/react/components/admin/ui/index.js":
/*!***************************************************!*\
  !*** ./assets/react/components/admin/ui/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsRow": () => (/* reexport safe */ _ActionsRow__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Button": () => (/* reexport safe */ _Inputs_Button__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CSRFInput": () => (/* reexport safe */ _CSRFInput__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ContentNav": () => (/* reexport safe */ _ContentNav__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ModalEditor": () => (/* reexport safe */ _ModalEditor__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "NavLi": () => (/* reexport safe */ _NavLi__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PagesContainer": () => (/* reexport safe */ _PagesContainer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "RichText": () => (/* reexport safe */ _RichText___WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Toast": () => (/* reexport safe */ _Toast__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Inputs_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inputs/Button */ "./assets/react/components/admin/ui/Inputs/Button.jsx");
/* harmony import */ var _ContentNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentNav */ "./assets/react/components/admin/ui/ContentNav.jsx");
/* harmony import */ var _CSRFInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSRFInput */ "./assets/react/components/admin/ui/CSRFInput.jsx");
/* harmony import */ var _NavLi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLi */ "./assets/react/components/admin/ui/NavLi.jsx");
/* harmony import */ var _PagesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagesContainer */ "./assets/react/components/admin/ui/PagesContainer.jsx");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Toast */ "./assets/react/components/admin/ui/Toast.jsx");
/* harmony import */ var _ActionsRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionsRow */ "./assets/react/components/admin/ui/ActionsRow.jsx");
/* harmony import */ var _ModalEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalEditor */ "./assets/react/components/admin/ui/ModalEditor.jsx");
/* harmony import */ var _RichText___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RichText/ */ "./assets/react/components/admin/ui/RichText/index.jsx");











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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


const index = () => {
  const [linkLoad, setLinkLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    headers: {
      "XmlHttpRequest": true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !linkLoad ? ajax.get('/request/page-list').then(res => {
      setLinkLoad([...res.data.data]);
    }) : null;
  }, [linkLoad]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
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

/***/ "./assets/react/controllers/main_admin.jsx":
/*!*************************************************!*\
  !*** ./assets/react/controllers/main_admin.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin/Layout */ "./assets/react/components/admin/Layout.jsx");
/* harmony import */ var _components_admin_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin/redux */ "./assets/react/components/admin/redux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
// import '../../styles/admin/app.scss';





const MainAdmin = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _components_admin_redux__WEBPACK_IMPORTED_MODULE_2__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainAdmin);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Add.jsx":
/*!*******************************************!*\
  !*** ./assets/react/icon/icon-ui/Add.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Add = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: cls,
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24 38q-.65 0-1.075-.425-.425-.425-.425-1.075v-11h-11q-.65 0-1.075-.425Q10 24.65 10 24q0-.65.425-1.075.425-.425 1.075-.425h11v-11q0-.65.425-1.075Q23.35 10 24 10q.65 0 1.075.425.425.425.425 1.075v11h11q.65 0 1.075.425Q38 23.35 38 24q0 .65-.425 1.075-.425.425-1.075.425h-11v11q0 .65-.425 1.075Q24.65 38 24 38Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Add);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Calendar.jsx":
/*!************************************************!*\
  !*** ./assets/react/icon/icon-ui/Calendar.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Calendar = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M480 656q-17 0-28.5-11.5T440 616q0-17 11.5-28.5T480 576q17 0 28.5 11.5T520 616q0 17-11.5 28.5T480 656Zm-160 0q-17 0-28.5-11.5T280 616q0-17 11.5-28.5T320 576q17 0 28.5 11.5T360 616q0 17-11.5 28.5T320 656Zm320 0q-17 0-28.5-11.5T600 616q0-17 11.5-28.5T640 576q17 0 28.5 11.5T680 616q0 17-11.5 28.5T640 656ZM480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-160 0q-17 0-28.5-11.5T280 776q0-17 11.5-28.5T320 736q17 0 28.5 11.5T360 776q0 17-11.5 28.5T320 816Zm320 0q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736q17 0 28.5 11.5T680 776q0 17-11.5 28.5T640 816ZM180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q310 194.4 310 208v28h340v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q715 194.4 715 208v28h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Checked.jsx":
/*!***********************************************!*\
  !*** ./assets/react/icon/icon-ui/Checked.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Checked = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: cls,
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18.9 35.1q-.3 0-.55-.1-.25-.1-.5-.35L8.8 25.6q-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.05-.45.6 0 1.05.45l8 8 18.15-18.15q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075T39.2 15.4L19.95 34.65q-.25.25-.5.35-.25.1-.55.1Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checked);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Close.jsx":
/*!*********************************************!*\
  !*** ./assets/react/icon/icon-ui/Close.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Close = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M480 618 270 828q-9 9-21 9t-21-9q-9-9-9-21t9-21l210-210-210-210q-9-9-9-21t9-21q9-9 21-9t21 9l210 210 210-210q9-9 21-9t21 9q9 9 9 21t-9 21L522 576l210 210q9 9 9 21t-9 21q-9 9-21 9t-21-9L480 618Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Close);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Danger.jsx":
/*!**********************************************!*\
  !*** ./assets/react/icon/icon-ui/Danger.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Danger = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.75 42q-.6 0-1.175-.25-.575-.25-.975-.65l-8.7-8.7q-.4-.4-.65-.975T6 30.25v-12.5q0-.6.25-1.175.25-.575.65-.975l8.7-8.7q.4-.4.975-.65T17.75 6h12.5q.6 0 1.175.25.575.25.975.65l8.7 8.7q.4.4.65.975T42 17.75v12.5q0 .6-.25 1.175-.25.575-.65.975l-8.7 8.7q-.4.4-.975.65T30.25 42ZM24 33.95q.7 0 1.225-.525.525-.525.525-1.225 0-.7-.525-1.225Q24.7 30.45 24 30.45q-.7 0-1.225.525-.525.525-.525 1.225 0 .7.525 1.225.525.525 1.225.525Zm0-7.2q.65 0 1.075-.425.425-.425.425-1.075V15.1q0-.65-.425-1.075Q24.65 13.6 24 13.6q-.65 0-1.075.425-.425.425-.425 1.075v10.15q0 .65.425 1.075.425.425 1.075.425ZM17.75 39h12.5L39 30.25v-12.5L30.25 9h-12.5L9 17.75v12.5ZM24 24Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Danger);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Delete.jsx":
/*!**********************************************!*\
  !*** ./assets/react/icon/icon-ui/Delete.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Delete = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: cls,
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H9.5q-.65 0-1.075-.425Q8 9.65 8 9q0-.65.425-1.075Q8.85 7.5 9.5 7.5h7.9q0-.65.425-1.075Q18.25 6 18.9 6h10.2q.65 0 1.075.425.425.425.425 1.075h7.9q.65 0 1.075.425Q40 8.35 40 9q0 .65-.425 1.075-.425.425-1.075.425h-.55V39q0 1.2-.9 2.1-.9.9-2.1.9Zm0-31.5V39h21.9V10.5Zm5.3 22.7q0 .65.425 1.075.425.425 1.075.425.65 0 1.075-.425.425-.425.425-1.075V16.25q0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075Zm8.3 0q0 .65.425 1.075.425.425 1.075.425.65 0 1.075-.425.425-.425.425-1.075V16.25q0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075Zm-13.6-22.7V39 10.5Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delete);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Edit.jsx":
/*!********************************************!*\
  !*** ./assets/react/icon/icon-ui/Edit.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Edit = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: cls,
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.125-.825 1.275.025 2.125.875L41.8 8.4q.85.85.85 2.1t-.85 2.1ZM7.5 42q-.65 0-1.075-.425Q6 41.15 6 40.5v-4.3q0-.3.1-.55.1-.25.35-.5L31.2 10.4l6.4 6.4-24.75 24.75q-.25.25-.5.35-.25.1-.55.1Zm24.75-26.25-1.1-1.1 2.2 2.2Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Expand.jsx":
/*!**********************************************!*\
  !*** ./assets/react/icon/icon-ui/Expand.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Expand = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Expand);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Filter.jsx":
/*!**********************************************!*\
  !*** ./assets/react/icon/icon-ui/Filter.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Filter = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M440 896q-17 0-28.5-11.5T400 856V616L161 311q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560 616v240q0 17-11.5 28.5T520 896h-80Zm40-276 240-304H240l240 304Zm0 0Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Info.jsx":
/*!********************************************!*\
  !*** ./assets/react/icon/icon-ui/Info.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Info = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M24.15 34q.65 0 1.075-.425.425-.425.425-1.075v-9.05q0-.6-.45-1.025Q24.75 22 24.15 22q-.65 0-1.075.425-.425.425-.425 1.075v9.05q0 .6.45 1.025.45.425 1.05.425ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-20Zm0 17q7 0 12-5t5-12q0-7-5-12T24 7q-7 0-12 5T7 24q0 7 5 12t12 5Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Logout.jsx":
/*!**********************************************!*\
  !*** ./assets/react/icon/icon-ui/Logout.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Logout = ({
  Cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: Cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M8.75 42.5q-1.45 0-2.55-1.1-1.1-1.1-1.1-2.55V9.15q0-1.45 1.1-2.55 1.1-1.1 2.55-1.1h14.7v3.65H8.75v29.7h14.7v3.65Zm24.5-8.75-2.7-2.65 5.3-5.3h-17.3v-3.65h17.2l-5.3-5.3 2.7-2.6 9.8 9.8Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Menu.jsx":
/*!********************************************!*\
  !*** ./assets/react/icon/icon-ui/Menu.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Menu = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M153.333 823.493q-16 0-26.938-10.972-10.939-10.972-10.939-27.022 0-16.049 10.939-26.904 10.938-10.855 26.938-10.855h653.334q16 0 26.938 10.971 10.939 10.972 10.939 27.022 0 16.05-10.939 26.905-10.938 10.855-26.938 10.855H153.333Zm0-209.616q-16 0-26.938-10.972-10.939-10.972-10.939-27.022 0-16.05 10.939-26.905 10.938-10.855 26.938-10.855h653.334q16 0 26.938 10.972 10.939 10.972 10.939 27.022 0 16.05-10.939 26.905-10.938 10.855-26.938 10.855H153.333Zm0-209.617q-16 0-26.938-10.972-10.939-10.972-10.939-27.021 0-16.05 10.939-26.985 10.938-10.934 26.938-10.934h653.334q16 0 26.938 11.051 10.939 11.052 10.939 27.102 0 16.049-10.939 26.904-10.938 10.855-26.938 10.855H153.333Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Next.jsx":
/*!********************************************!*\
  !*** ./assets/react/icon/icon-ui/Next.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Next = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M354 794q-8-10-8.5-22t8.5-21l176-176-177-177q-8-8-7.5-21.5T354 355q10-10 21.5-9.5T396 355l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L397 794q-9 9-21 8.5t-22-8.5Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Next);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Prev.jsx":
/*!********************************************!*\
  !*** ./assets/react/icon/icon-ui/Prev.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Prev = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M539 794 341 596q-5-5-7-10t-2-11q0-6 2-11t7-10l199-199q9-9 21.5-9t21.5 9q9 9 8.5 22t-9.5 22L406 575l177 177q9 9 9 21t-9 21q-9 9-22 9t-22-9Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prev);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Success.jsx":
/*!***********************************************!*\
  !*** ./assets/react/icon/icon-ui/Success.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Success = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m21.05 28.55-4.9-4.9q-.45-.45-1.1-.45-.65 0-1.15.5-.5.5-.5 1.15 0 .65.5 1.1l6.1 6.1q.45.45 1.05.45.6 0 1.05-.45l12-12q.45-.45.425-1.1-.025-.65-.475-1.1-.45-.5-1.125-.5t-1.175.5ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-20Zm0 17q7.25 0 12.125-4.875T41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Success);

/***/ }),

/***/ "./assets/react/icon/icon-ui/Warning.jsx":
/*!***********************************************!*\
  !*** ./assets/react/icon/icon-ui/Warning.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Warning = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4.6 42q-.45 0-.775-.2t-.525-.55q-.2-.35-.225-.725-.025-.375.225-.775l19.4-33.5q.25-.4.575-.575Q23.6 5.5 24 5.5q.4 0 .725.175.325.175.575.575l19.4 33.5q.25.4.225.775-.025.375-.225.725t-.525.55q-.325.2-.775.2Zm2.6-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm0-5.55q.65 0 1.075-.425.425-.425.425-1.075v-8.2q0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425-.425.425-.425 1.075v8.2q0 .65.425 1.075.425.425 1.075.425Zm-.2-6.1Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Warning);

/***/ }),

/***/ "./assets/react/icon/icon-ui/index.js":
/*!********************************************!*\
  !*** ./assets/react/icon/icon-ui/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Add": () => (/* reexport safe */ _Add__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Calendar": () => (/* reexport safe */ _Calendar__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Checked": () => (/* reexport safe */ _Checked__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Close": () => (/* reexport safe */ _Close__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Danger": () => (/* reexport safe */ _Danger__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Delete": () => (/* reexport safe */ _Delete__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Edit": () => (/* reexport safe */ _Edit__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Expand": () => (/* reexport safe */ _Expand__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Filter": () => (/* reexport safe */ _Filter__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Info": () => (/* reexport safe */ _Info__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Logout": () => (/* reexport safe */ _Logout__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Menu": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "NavNext": () => (/* reexport safe */ _Next__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "NavPrev": () => (/* reexport safe */ _Prev__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "Success": () => (/* reexport safe */ _Success__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "Warning": () => (/* reexport safe */ _Warning__WEBPACK_IMPORTED_MODULE_15__["default"])
/* harmony export */ });
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add */ "./assets/react/icon/icon-ui/Add.jsx");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar */ "./assets/react/icon/icon-ui/Calendar.jsx");
/* harmony import */ var _Checked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checked */ "./assets/react/icon/icon-ui/Checked.jsx");
/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Close */ "./assets/react/icon/icon-ui/Close.jsx");
/* harmony import */ var _Danger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Danger */ "./assets/react/icon/icon-ui/Danger.jsx");
/* harmony import */ var _Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Delete */ "./assets/react/icon/icon-ui/Delete.jsx");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Edit */ "./assets/react/icon/icon-ui/Edit.jsx");
/* harmony import */ var _Expand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Expand */ "./assets/react/icon/icon-ui/Expand.jsx");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filter */ "./assets/react/icon/icon-ui/Filter.jsx");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Info */ "./assets/react/icon/icon-ui/Info.jsx");
/* harmony import */ var _Logout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Logout */ "./assets/react/icon/icon-ui/Logout.jsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Menu */ "./assets/react/icon/icon-ui/Menu.jsx");
/* harmony import */ var _Next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Next */ "./assets/react/icon/icon-ui/Next.jsx");
/* harmony import */ var _Prev__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Prev */ "./assets/react/icon/icon-ui/Prev.jsx");
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Success */ "./assets/react/icon/icon-ui/Success.jsx");
/* harmony import */ var _Warning__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Warning */ "./assets/react/icon/icon-ui/Warning.jsx");


















/***/ }),

/***/ "./assets/react/icon/text-editor/Bold.jsx":
/*!************************************************!*\
  !*** ./assets/react/icon/text-editor/Bold.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Bold = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M335 856q-25 0-42.5-17.5T275 796V356q0-25 17.5-42.5T335 296h168q66 0 114.5 42T666 444q0 38-21 70t-56 49v6q43 14 69.5 50t26.5 81q0 68-52.5 112T510 856H335Zm26-76h144q38 0 66-25t28-63q0-37-28-62t-66-25H361v175Zm0-247h136q35 0 60.5-23t25.5-58q0-35-25.5-58.5T497 370H361v163Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bold);

/***/ }),

/***/ "./assets/react/icon/text-editor/BulletedList.jsx":
/*!********************************************************!*\
  !*** ./assets/react/icon/text-editor/BulletedList.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BulletedList = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M407 858q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T407 798h403q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 858H407Zm0-252q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T407 546h403q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 606H407Zm0-253q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T407 293h403q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 353H407ZM189 895q-28.05 0-48.025-19Q121 857 121 828.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255 800.95 255 829q0 27.225-19.387 46.612Q216.225 895 189 895Zm0-252q-28.05 0-48.025-19.681Q121 603.638 121 576t19.975-47.319Q160.95 509 189 509q27.225 0 46.613 19.681Q255 548.362 255 576t-19.387 47.319Q216.225 643 189 643Zm-1-253q-27.637 0-47.319-19.681Q121 350.638 121 323t19.681-47.319Q160.363 256 188 256q27.637 0 47.319 19.681Q255 295.362 255 323t-19.681 47.319Q215.637 390 188 390Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulletedList);

/***/ }),

/***/ "./assets/react/icon/text-editor/FormatSize.jsx":
/*!******************************************************!*\
  !*** ./assets/react/icon/text-editor/FormatSize.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FormatSize = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M619.534 877.076q-14.264 0-23.783-9.849-9.519-9.849-9.519-23.92V342.461H412.693q-14.071 0-23.92-9.985-9.849-9.985-9.849-24.25 0-14.264 9.849-23.783 9.849-9.519 23.92-9.519h414.614q14.071 0 23.92 9.985 9.849 9.985 9.849 24.25 0 14.264-9.849 23.783-9.849 9.519-23.92 9.519H653.768v500.846q0 14.071-9.985 23.92-9.985 9.849-24.249 9.849Zm-360 0q-14.264 0-23.783-9.849-9.519-9.849-9.519-23.92V542.461h-93.539q-14.071 0-23.92-9.985-9.849-9.985-9.849-24.25 0-14.264 9.849-23.783 9.849-9.519 23.92-9.519h254.614q14.071 0 23.92 9.985 9.849 9.985 9.849 24.25 0 14.264-9.849 23.783-9.849 9.519-23.92 9.519h-93.539v300.846q0 14.071-9.985 23.92-9.985 9.849-24.249 9.849Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatSize);

/***/ }),

/***/ "./assets/react/icon/text-editor/Img.jsx":
/*!***********************************************!*\
  !*** ./assets/react/icon/text-editor/Img.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Img = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm56-97h489L578 583 446 754l-93-127-117 152Zm-56 97V276v600Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Img);

/***/ }),

/***/ "./assets/react/icon/text-editor/Italic.jsx":
/*!**************************************************!*\
  !*** ./assets/react/icon/text-editor/Italic.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Italic = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M262.077 841.614q-11.754 0-20.3-8.404-8.546-8.403-8.546-20.614 0-11.827 8.546-20.25 8.546-8.422 20.3-8.422h104.77L510.463 363H387.231q-11.753 0-20.299-8.597-8.546-8.596-8.546-20.422 0-12.211 8.546-20.442 8.546-8.23 20.299-8.23h293.846q12.138 0 20.492 8.404 8.353 8.404 8.353 20.615 0 11.826-8.353 20.249Q693.215 363 681.077 363H573.999L430.768 783.924h125.154q12.139 0 20.492 8.596 8.354 8.596 8.354 20.422 0 12.211-8.354 20.442-8.353 8.23-20.492 8.23H262.077Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Italic);

/***/ }),

/***/ "./assets/react/icon/text-editor/NumberedList.jsx":
/*!********************************************************!*\
  !*** ./assets/react/icon/text-editor/NumberedList.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NumberedList = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M163.847 955.999q-10.333 0-17.089-6.752-6.757-6.751-6.757-17.076 0-10.326 6.757-17.095 6.756-6.769 17.089-6.769h76.154v-42.308h-36.154q-10.333 0-17.089-6.752-6.757-6.751-6.757-17.076 0-10.326 6.757-17.095 6.756-6.769 17.089-6.769h36.154v-42.308h-76.154q-10.333 0-17.089-6.752-6.757-6.751-6.757-17.076 0-10.326 6.757-17.095 6.756-6.769 17.089-6.769h90q14.385 0 24.115 9.731 9.731 9.73 9.731 24.115v47.693q0 14.384-9.731 24.115-9.73 9.73-24.115 9.73 14.385 0 24.115 9.731 9.731 9.731 9.731 24.115v44.616q0 14.384-9.731 24.115-9.73 9.731-24.115 9.731h-90Zm-1.615-266.153q-8.615 0-15.423-6.808t-6.808-15.423V586q0-14.384 9.731-24.115 9.731-9.731 24.115-9.731h66.154v-42.308h-76.154q-10.333 0-17.089-6.752-6.757-6.751-6.757-17.076t6.757-17.095q6.756-6.769 17.089-6.769h90q14.385 0 24.115 9.731 9.731 9.731 9.731 24.115v70q0 14.384-9.731 24.115-9.73 9.731-24.115 9.731h-66.154v42.308h76.154q10.333 0 17.09 6.752 6.756 6.751 6.756 17.076t-6.756 17.095q-6.757 6.769-17.09 6.769H162.232Zm61.633-266.153q-10.325 0-17.094-6.756-6.77-6.757-6.77-17.09V243.693h-36.154q-10.333 0-17.089-6.751-6.757-6.752-6.757-17.077 0-10.325 6.757-17.094 6.756-6.77 17.089-6.77h62.615q8.462 0 14.846 6.385 6.385 6.385 6.385 14.846v182.615q0 10.333-6.751 17.09-6.752 6.756-17.077 6.756Zm177.828 415.614q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h395.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H401.693Zm0-242.231q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h395.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H401.693Zm0-242.23q-9.645 0-16.168-6.579-6.524-6.578-6.524-16.302 0-9.349 6.524-15.926 6.523-6.577 16.168-6.577h395.614q9.644 0 16.168 6.766 6.524 6.766 6.524 16.307 0 9.542-6.524 15.926-6.524 6.385-16.168 6.385H401.693Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberedList);

/***/ }),

/***/ "./assets/react/icon/text-editor/Strike.jsx":
/*!**************************************************!*\
  !*** ./assets/react/icon/text-editor/Strike.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Strike = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M110 646q-12.75 0-21.375-8.675Q80 628.649 80 615.825 80 603 88.625 594.5T110 586h740q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T850 646H110Zm320-120V356H250q-20.833 0-35.417-14.618Q200 326.765 200 305.882 200 285 214.583 270.5 229.167 256 250 256h460q20.833 0 35.417 14.618Q760 285.235 760 306.118 760 327 745.417 341.5 730.833 356 710 356H530v170H430Zm49.882 370Q459 896 444.5 881.417 430 866.833 430 846V706h100v140q0 20.833-14.618 35.417Q500.765 896 479.882 896Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strike);

/***/ }),

/***/ "./assets/react/icon/text-editor/SuperScript.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/icon/text-editor/SuperScript.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SuperScript = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M800 456q-13 0-21.5-8.5T770 426v-55q0-14 8-22t22-8h90v-55H785q-6 0-10.5-4.5T770 271q0-6 4.5-10.5T785 256h105q14 0 22 8t8 22v55q0 14-8 22t-22 8h-90v55h105q6 0 10.5 4.5T920 441q0 6-4.5 10.5T905 456H800ZM300 896q-21 0-31-18.5t1-36.5l150-236-136-213q-11-18-1-37t31-19q9 0 17.5 4.5T345 353l124 196 124-196q5-8 13.5-12.5T624 336q22 0 31.5 19t-1.5 37L518 605l150 236q11 18 1 36.5T638 896q-9 0-17.5-4.5T607 879L469 662 331 879q-5 8-13.5 12.5T300 896Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuperScript);

/***/ }),

/***/ "./assets/react/icon/text-editor/TxtCenter.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/icon/text-editor/TxtCenter.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TxtCenter = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M152.693 925.999q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Zm162.846-163.846q-9.644 0-16.168-6.578-6.524-6.578-6.524-16.303 0-9.349 6.524-15.926 6.524-6.576 16.168-6.576h329.538q9.644 0 16.168 6.765 6.524 6.766 6.524 16.308 0 9.541-6.524 15.926-6.524 6.384-16.168 6.384H315.539ZM152.693 598.692q-9.645 0-16.168-6.58-6.524-6.581-6.524-16.308t6.524-16.111q6.523-6.385 16.168-6.385h654.614q9.644 0 16.168 6.58 6.524 6.581 6.524 16.308t-6.524 16.111q-6.524 6.385-16.168 6.385H152.693Zm162.846-163.846q-9.644 0-16.168-6.579-6.524-6.578-6.524-16.302 0-9.349 6.524-15.926t16.168-6.577h329.538q9.644 0 16.168 6.766 6.524 6.766 6.524 16.307 0 9.542-6.524 15.926-6.524 6.385-16.168 6.385H315.539ZM152.693 271.384q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TxtCenter);

/***/ }),

/***/ "./assets/react/icon/text-editor/TxtJustify.jsx":
/*!******************************************************!*\
  !*** ./assets/react/icon/text-editor/TxtJustify.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TxtJustify = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M152.693 925.999q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Zm0-163.846q-9.645 0-16.168-6.578-6.524-6.578-6.524-16.303 0-9.349 6.524-15.926 6.523-6.576 16.168-6.576h654.614q9.644 0 16.168 6.765 6.524 6.766 6.524 16.308 0 9.541-6.524 15.926-6.524 6.384-16.168 6.384H152.693Zm0-163.461q-9.645 0-16.168-6.58-6.524-6.581-6.524-16.308t6.524-16.111q6.523-6.385 16.168-6.385h654.614q9.644 0 16.168 6.58 6.524 6.581 6.524 16.308t-6.524 16.111q-6.524 6.385-16.168 6.385H152.693Zm0-163.846q-9.645 0-16.168-6.579-6.524-6.578-6.524-16.302 0-9.349 6.524-15.926 6.523-6.577 16.168-6.577h654.614q9.644 0 16.168 6.766 6.524 6.766 6.524 16.307 0 9.542-6.524 15.926-6.524 6.385-16.168 6.385H152.693Zm0-163.462q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TxtJustify);

/***/ }),

/***/ "./assets/react/icon/text-editor/TxtLeft.jsx":
/*!***************************************************!*\
  !*** ./assets/react/icon/text-editor/TxtLeft.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TxtLeft = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M152.693 762.153q-9.645 0-16.168-6.578-6.524-6.578-6.524-16.303 0-9.349 6.524-15.926 6.523-6.576 16.168-6.576h408.922q9.644 0 16.168 6.765 6.524 6.766 6.524 16.308 0 9.541-6.524 15.926-6.524 6.384-16.168 6.384H152.693Zm0-327.307q-9.645 0-16.168-6.579-6.524-6.578-6.524-16.302 0-9.349 6.524-15.926 6.523-6.577 16.168-6.577h408.922q9.644 0 16.168 6.766 6.524 6.766 6.524 16.307 0 9.542-6.524 15.926-6.524 6.385-16.168 6.385H152.693Zm0 163.846q-9.645 0-16.168-6.58-6.524-6.581-6.524-16.308t6.524-16.111q6.523-6.385 16.168-6.385h654.614q9.644 0 16.168 6.58 6.524 6.581 6.524 16.308t-6.524 16.111q-6.524 6.385-16.168 6.385H152.693Zm0 327.307q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Zm0-654.615q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TxtLeft);

/***/ }),

/***/ "./assets/react/icon/text-editor/TxtRight.jsx":
/*!****************************************************!*\
  !*** ./assets/react/icon/text-editor/TxtRight.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TxtRight = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M152.693 925.999q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Zm246.692-163.846q-9.644 0-16.168-6.578-6.524-6.578-6.524-16.303 0-9.349 6.524-15.926 6.524-6.576 16.168-6.576h407.922q9.644 0 16.168 6.765 6.524 6.766 6.524 16.308 0 9.541-6.524 15.926-6.524 6.384-16.168 6.384H399.385ZM152.693 598.692q-9.645 0-16.168-6.58-6.524-6.581-6.524-16.308t6.524-16.111q6.523-6.385 16.168-6.385h654.614q9.644 0 16.168 6.58 6.524 6.581 6.524 16.308t-6.524 16.111q-6.524 6.385-16.168 6.385H152.693Zm246.692-163.846q-9.644 0-16.168-6.579-6.524-6.578-6.524-16.302 0-9.349 6.524-15.926t16.168-6.577h407.922q9.644 0 16.168 6.766 6.524 6.766 6.524 16.307 0 9.542-6.524 15.926-6.524 6.385-16.168 6.385H399.385ZM152.693 271.384q-9.645 0-16.168-6.58-6.524-6.58-6.524-16.307 0-9.727 6.524-16.112 6.523-6.384 16.168-6.384h654.614q9.644 0 16.168 6.58 6.524 6.58 6.524 16.307 0 9.727-6.524 16.112-6.524 6.384-16.168 6.384H152.693Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TxtRight);

/***/ }),

/***/ "./assets/react/icon/text-editor/Underline.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/icon/text-editor/Underline.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Underline = ({
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: cls,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 96 960 960"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M230 916q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230 856h500q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730 916H230Zm250-140q-100 0-156.5-58.5T267 559V257q0-16.882 12.527-28.941Q292.055 216 309.027 216 326 216 338 228.059T350 257v302q0 63 34 101t96 38q62 0 96-38t34-101V257q0-16.882 12.527-28.941Q635.055 216 652.027 216 669 216 681 228.059T693 257v302q0 100-56.5 158.5T480 776Z"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Underline);

/***/ }),

/***/ "./assets/react/icon/text-editor/index.js":
/*!************************************************!*\
  !*** ./assets/react/icon/text-editor/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bold": () => (/* reexport safe */ _Bold__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "BulletedList": () => (/* reexport safe */ _BulletedList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "FormatSize": () => (/* reexport safe */ _FormatSize__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Img": () => (/* reexport safe */ _Img__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "Italic": () => (/* reexport safe */ _Italic__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NumberedList": () => (/* reexport safe */ _NumberedList__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Strike": () => (/* reexport safe */ _Strike__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SuperScript": () => (/* reexport safe */ _SuperScript__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "TxtCenter": () => (/* reexport safe */ _TxtCenter__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "TxtJustify": () => (/* reexport safe */ _TxtJustify__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "TxtLeft": () => (/* reexport safe */ _TxtLeft__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "TxtRight": () => (/* reexport safe */ _TxtRight__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Underline": () => (/* reexport safe */ _Underline__WEBPACK_IMPORTED_MODULE_11__["default"])
/* harmony export */ });
/* harmony import */ var _Bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bold */ "./assets/react/icon/text-editor/Bold.jsx");
/* harmony import */ var _BulletedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulletedList */ "./assets/react/icon/text-editor/BulletedList.jsx");
/* harmony import */ var _FormatSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormatSize */ "./assets/react/icon/text-editor/FormatSize.jsx");
/* harmony import */ var _Italic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Italic */ "./assets/react/icon/text-editor/Italic.jsx");
/* harmony import */ var _NumberedList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberedList */ "./assets/react/icon/text-editor/NumberedList.jsx");
/* harmony import */ var _Strike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strike */ "./assets/react/icon/text-editor/Strike.jsx");
/* harmony import */ var _SuperScript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SuperScript */ "./assets/react/icon/text-editor/SuperScript.jsx");
/* harmony import */ var _TxtLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxtLeft */ "./assets/react/icon/text-editor/TxtLeft.jsx");
/* harmony import */ var _TxtCenter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TxtCenter */ "./assets/react/icon/text-editor/TxtCenter.jsx");
/* harmony import */ var _TxtRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TxtRight */ "./assets/react/icon/text-editor/TxtRight.jsx");
/* harmony import */ var _TxtJustify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TxtJustify */ "./assets/react/icon/text-editor/TxtJustify.jsx");
/* harmony import */ var _Underline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Underline */ "./assets/react/icon/text-editor/Underline.jsx");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Img */ "./assets/react/icon/text-editor/Img.jsx");















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
/******/ __webpack_require__.O(0, ["vendors-node_modules_lexical_react_LexicalComposer_js-node_modules_lexical_react_LexicalConte-b97159"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ3pGO0FBQ0o7QUFDQWQsU0FBUyxDQUFDcFksTUFBTSxHQUFHO0VBQ2Z3WCxTQUFTLEVBQUUyQixNQUFNO0VBQ2pCekksS0FBSyxFQUFFemM7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbGV4aWNhbFNsaWNlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0FjdGlvbnNSb3cuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ1NSRklucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NvbnRlbnROYXYuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvQ2hlY2tib3guanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0RhdGVQaWNrZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0ltYWdlRmlsZUlucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9OdW1iZXJJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvU2VsZWN0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL1N3aXRjaElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9UeHRMYWJlbElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL01vZGFsRWRpdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL05hdkxpLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1BhZ2VzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvQWxpZ25UZXh0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvRm9ybWF0VGV4dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvSW5zZXJ0SW1nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvTGlzdFR5cGUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvQWN0aW9ucy9TaXplVGV4dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvaXRlbXMvQnRuRm9ybWF0VGV4dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL2l0ZW1zL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvaXRlbXMvaW1nTW9kYWwuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvTm9kZXMvSW1hZ2VOb2RlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L05vZGVzL2NvbXBvbmVudHMvSW1hZ2UuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvaW5kZXguanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvcGx1Z2lucy9JbWFnZVBsdWdpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Ub2FzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQWRkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2FsZW5kYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DaGVja2VkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2xvc2UuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9EYW5nZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9EZWxldGUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9FZGl0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRXhwYW5kLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRmlsdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvSW5mby5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL01lbnUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9OZXh0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvUHJldi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9XYXJuaW5nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9Cb2xkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL0J1bGxldGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9Gb3JtYXRTaXplLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL0ltZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9JdGFsaWMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvTnVtYmVyZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1N0cmlrZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9TdXBlclNjcmlwdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9UeHRDZW50ZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvVHh0SnVzdGlmeS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9UeHRMZWZ0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1R4dFJpZ2h0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1VuZGVybGluZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiLFxuXHRcIi4vbWFpbl9hZG1pbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCIvLyBwcmVwYXJlRm9yU2VuZCBwcmVwYXJlIHVuZSBkYXRlIHBvdXIgUEhQXHJcbmNvbnN0IHByZXBhcmVGb3JTZW5kID0gKGRhdGEpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSB7fVxyXG4gIGZvciAobGV0IFtrLHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICBpZiAodiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgdi5zZXREYXRlKHYuZ2V0RGF0ZSgpKzEpXHJcbiAgICAgIHJlc3VsdFtrXSA9IHYudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9UfFxcLlswLTldK1okL2csIChleCkgPT4gZXggPT09IFwiVFwiID8gXCIgXCIgOiBcIlwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0W2tdID0gdlxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBzdHJpbmcgYm9vbGVhbiB0byBib29sZWFuXHJcblxyXG5jb25zdCBnZXRCb29sZWFuRnJvbVN0cmluZyA9IChzdHIpID0+IHtcclxuICBzd2l0Y2ggKHN0cikge1xyXG4gICAgY2FzZSBcInRydWVcIjpcclxuICAgIGNhc2UgXCJUUlVFXCI6XHJcbiAgICBjYXNlIFwiMVwiIHx8IDE6XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke2V4dC5sZW5ndGggPiAwID8gXCIvXCIgOiBudWxsfSR7ZXh0fWBcclxufVxyXG5cclxuLy8gbmV0dG9pZSBsJ3VybCBmb3VybmlcclxuXHJcbmNvbnN0IGNsZWFuUGF0aCA9IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvJHxcXC8kLywgJycpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuLy8gY2hhbmdlIGxlIHRpdHJlIGRhbnMgbCdvbmdsZXRcclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBkb2N1bWVudC50aXRsZSA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyBjYXBpdGFsaXplKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyB0cm91dmUgdW5lIGV4cHJlc3Npb24gcsOpZ3VsacOocmVcclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG4vLyBub3JtYWxpemUgdW4gc3RyaW5nIHBvdXIgZmlsdHJlXHJcblxyXG5jb25zdCBzdHJOb3JtYWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgY29uc3QgdGVzdCA9IChsLHJlZykgPT4gbmV3IFJlZ0V4cChyZWcpLnRlc3QobClcclxuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXmEtel0vZywgKHcpID0+IHtcclxuICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSB0ZXN0KHcgLC/Do3zDoHzDoXzDonzDpC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OofMOpfMOqfMOrL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6x8w618w658w68vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiaVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DtXzDsnzDs3zDtHzDti9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O5fMO6fMO7fMO8L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw718w78vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwieVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DsS9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJuXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8WTL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm9lXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OmL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImFlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OnL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImNcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw58vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwic3NcIlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gd1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyB0cm91dmVyIHVuZSBwcm9wcyBib29sw6llbiAodnJhaSBvdSBmYXV4KSBkYW5zIHVuIG9iamV0IHJlY3Vyc2lmXHJcblxyXG5jb25zdCBnZXRQcm9wc0Jvb2xTdGF0dXMgPSAob2JqLCBwcm9wLCBib29sU3RhdGUpID0+IHtcclxuXHJcbiAgaWYgKG9ialtwcm9wXSkge1xyXG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gYm9vbFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBba2V5LHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIGlmIChnZXRQcm9wc0Jvb2xTdGF0dXModmFsdWUsIHByb3AsIGJvb2xTdGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLy8gY29tcGFyZSBkZXV4IG9iamV0cyBKUyAodG91dCB0eXBlcylcclxuXHJcbmNvbnN0IGFyZUVxdWFsID0gKG9iajEsb2JqMikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygb2JqMSAhPT0gdHlwZW9mIG9iajIpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgaWYgKG9iajEubGVuZ3RoICE9PSBvYmoyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2ldLG9iajJbaV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpKSB7XHJcbiAgICBjb25zdCBlbnQxID0gT2JqZWN0LmVudHJpZXMob2JqMSlcclxuICAgIGNvbnN0IGVudDIgPSBPYmplY3QuZW50cmllcyhvYmoyKVxyXG4gICAgaWYgKGVudDEubGVuZ3RoICE9PSBlbnQyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iajEpKSB7XHJcbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIGlzRGVmaW5lZChvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2tleV0sb2JqMltrZXldKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIG9iajEgPT09IG9iajJcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgZMOpZmluaWVcclxuXHJcbmNvbnN0IGlzRGVmaW5lZCA9IChvYmopID0+IG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZFxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gSlNPTiB2YWxpZGVcclxuXHJcbmNvbnN0IGlzSlNPTiA9IChqc29uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIEpTT04ucGFyc2UoanNvbilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBvYmpldCBkZSB0eXBlIEFycmF5IEpTXHJcblxyXG5jb25zdCBpc09iamVjdCA9IChvYmplY3QpID0+IHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgIWlzQXJyYXkob2JqZWN0KVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gVGFibGVhdXggXHJcblxyXG5jb25zdCBpc0FycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpXHJcbn1cclxuXHJcbmNvbnN0IHNvcnRBc2MgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA8IGIuc29ydCA/IC0xIDogYS5zb3J0ID4gYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuY29uc3Qgc29ydERlcyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0ID4gYi5zb3J0ID8gLTEgOiBhLnNvcnQgPCBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5leHBvcnQgeyBcclxuICBzZXRCYXNlVXJsLCBcclxuICBjYXBpdGFsaXplLCBcclxuICB1cGRhdGVUaXRsZSwgXHJcbiAgZW5kT2ZQYXRoLCBcclxuICBzdHJDb250YWlucywgXHJcbiAgY2xlYW5QYXRoLCBcclxuICBpc0pTT04sIFxyXG4gIGlzQXJyYXksIFxyXG4gIGFyZUVxdWFsLCBcclxuICBzb3J0QXNjLCBcclxuICBzb3J0RGVzLFxyXG4gIGdldFByb3BzQm9vbFN0YXR1cyxcclxuICBzdHJOb3JtYWxpemUsXHJcbiAgcHJlcGFyZUZvclNlbmQsXHJcbiAgZ2V0Qm9vbGVhbkZyb21TdHJpbmdcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstZ3JvdXAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXByZXYnPkNyw6lhdGV1ciA6IDwvZGl2PlxyXG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2xpbmsnIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9BcmNrYW5pY3MnPlxyXG4gICAgICAgICAgR2l0SHViLlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLWdyb3VwJz5cclxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdsaW5rJyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vQXJja2FuaWNzL21pbmktY21zJz5cclxuICAgICAgICAgIMOgIHByb3Bvc1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3VpJ1xyXG5pbXBvcnQgeyBjbGVhckRhdGEsIHNldFVybCB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgeyBQYWdlcywgU2V0dGluZ3MsIEFydGljbGVzLCBMb2dpbiB9IGZyb20gJy4vcGFnZXMnXHJcblxyXG5jb25zdCBNZW51ID0gW1xyXG4gIHtuYW1lOiBcIlBhcmFtZXRyZXNcIiwgcGF0aDogXCIvXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wiLCBQYWdlOiBQYWdlc30sXHJcbiAge25hbWU6IFwiQXJ0aWNsZXNcIiwgcGF0aDogXCIvYXJ0aWNsZXNcIiwgUGFnZTogQXJ0aWNsZXN9LFxyXG5dXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LnVybClcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cmwgPT09IFwiXCIgPyBkaXNwYXRjaChzZXRVcmwoXCJcIikpIDogbnVsbFxyXG4gICAgbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyQvLCAnJykgPyBuYXYoY2xlYW5QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSkgOiB1bmRlZmluZWRcclxuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGNsZWFyRGF0YSgpKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibGF5b3V0XCI+XHJcbiAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9J21pbmktYWRtaW4vbG9naW4nIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIE1lbnUubWFwKCh7cGF0aCxQYWdlfSxpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUga2V5PXtpfSBwYXRoPXtgbWluaS1hZG1pbiR7cGF0aH1gfSBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBQYWdlcz17TWVudX0gLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8UGFnZSB1cmw9e3BhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDxUb2FzdC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi91aS9OYXZMaSdcclxuaW1wb3J0IHsgTWVudSwgTG9nb3V0fSBmcm9tICcuLi8uLi9pY29uL2ljb24tdWkvJ1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjbGVhckRhdGEsIHNldFVybCB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHtQYWdlc30pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBbZW5hYmxlLCBzZXRFbmFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRFbmFibGUodHJ1ZSlcclxuICAgIH0sIDUwKVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICAgIGRpc3BhdGNoKGNsZWFyRGF0YSgpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSduYXZiYXInIGNsYXNzTmFtZT17IWVuYWJsZSA/ICdmYWRlT3V0TGVmdCcgOiAnJ30+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibmF2YmFyLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5NaW5pLUNNUzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2IG1vYmlsZSc+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX0gIGNsYXNzTmFtZT17J25hdi1saW5rJyArICh0b2dnbGUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpfT48TWVudSBjbHM9XCJzdmctaWNvblwiIC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17J25hdi1pdGVtLW1lbnUgZmxleCBmbGV4LWNvbCBnYXAtMicgKyAodG9nZ2xlID8gXCIgdG9nZ2xlXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFBhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAoe25hbWUscGF0aH0saSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8TmF2TGkga2V5PXtpfSB0bz17YC9taW5pLWFkbWluJHtwYXRofWAucmVwbGFjZSgvXFwvJC9nLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRUb2dnbGUoZmFsc2UpOyB1cGRhdGVUaXRsZShwYXRoKTsgZGlzcGF0Y2goc2V0VXJsKHBhdGgpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpPn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXYtb3B0c1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2Jz5cclxuICAgICAgICAgIDxOYXZMaSB0bz1cIi9taW5pLWFkbWluL2xvZ291dFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+PExvZ291dCBDbHM9XCJzdmctaWNvblwiIC8+PC9OYXZMaT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2LCBNb2RhbEVkaXRvciB9IGZyb20gXCIuLi91aVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcHJlcGFyZUZvclNlbmQgfSBmcm9tIFwiLi4vLi4vLi4vRnVuY3Rpb25zL2FwcFwiO1xyXG5pbXBvcnQgeyBub3RpZnksIG5vdGlmeUNsb3NlIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG4vLyBDUlVEIENvbXBsZXQgcG91ciBsZXMgQXJ0aWNsZXNcclxuXHJcbmNvbnN0IEFydGljbGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5heGlvcyk7XHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7IC4uLmF4aW9zU2V0LCBwYXJhbXM6IHsgcGFnZTogXCJhcnRpY2xlc1wiIH0gfSk7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpO1xyXG4gIGNvbnN0IHBhZ2VzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5kYXRhLnBhZ2VzKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgdHlwZTogbnVsbCxcclxuICAgIHdoZXJlOiBcImFydGljbGVzXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4XHJcbiAgICAgIC5nZXQoXCIvcmVxdWVzdFwiKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJhcnRpY2xlc1wiLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL21pbmktYWRtaW4vbG9nb3V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgYWpheFxyXG4gICAgICAuZ2V0KFwiL3JlcXVlc3RcIiwgeyAuLi5heGlvc1NldCwgcGFyYW1zOiB7IHBhZ2U6IFwicGFnZXNcIiB9IH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcInBhZ2VzXCIsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIvbWluaS1hZG1pbi9sb2dvdXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh7IC4uLm1vZGFsLCBlbmFibGU6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgLy8gZW52b2llIGRlcyBkb25uw6llc1xyXG4gIGNvbnN0IHNlbmREYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCB7IHR5cGUsIHdoZXJlIH0gPSBtb2RhbDtcclxuICAgIGRhdGEgPSB0eXBlICE9PSBcImRlbGV0ZVwiID8gZGF0YSA9IHByZXBhcmVGb3JTZW5kKGRhdGEpIDogZGF0YVxyXG4gICAgY29uc3Qgc2VuZEZpZWxkID0geyB3aGVyZSwgZGF0YTogZGF0YSB9O1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwdXRcIjpcclxuICAgICAgICByZXR1cm4gYWpheC5wdXQoXCIvcmVxdWVzdFwiLCBzZW5kRmllbGQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogd2hlcmUsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIG1zZzogXCJhcnRpY2xlIG1pcyDDoCBqb3VyIVwiLFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBjYXNlIFwicG9zdFwiOlxyXG4gICAgICAgIHJldHVybiBhamF4LnBvc3QoXCIvcmVxdWVzdFwiLCBzZW5kRmllbGQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogd2hlcmUsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIG1zZzogXCJhcnRpY2xlIGVucmVnaXN0csOpIVwiLFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJkZWxldGVcIjpcclxuICAgICAgICAgIHJldHVybiBhamF4LmRlbGV0ZShcIi9yZXF1ZXN0XCIsIHtkYXRhOiB7Li4uc2VuZEZpZWxkfX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiB3aGVyZSwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBtc2c6IFwiYXJ0aWNsZSBzdXBwcmltw6khXCIsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBub3V2ZWwgYXJ0aWNsZVxyXG4gIGNvbnN0IGNyZWF0ZUFydGljbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh7XHJcbiAgICAgIC4uLm1vZGFsLFxyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIHRpdGxlOiBcIkNyw6llclwiLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIG91dnJlIGwnw6lkaXRpb24gZCdhcnRpY2xlc1xyXG4gIGNvbnN0IHVwZGF0ZUFydGljbGUgPSBpZCA9PiB7XHJcbiAgICBjb25zdCBhcnRpY2xlID0geyAuLi5hcnRpY2xlcy5maW5kKGEgPT4gYS5pZCA9PSBpZCkgfTtcclxuICAgIGNvbnN0IGNvbnZlcnQgPSB7fTtcclxuICAgIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhcnRpY2xlKSkge1xyXG4gICAgICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgY29udmVydFtrXSA9IG5ldyBEYXRlKERhdGUucGFyc2Uodi5kYXRlLnJlcGxhY2UoL1xcLlswLTldKyQvZywgXCJcIikpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udmVydFtrXSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnZlcnRba10gPSB2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRNb2RhbCh7XHJcbiAgICAgIC4uLm1vZGFsLFxyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIHRpdGxlOiBcIk1vZGlmaWVyXCIsXHJcbiAgICAgIGRhdGE6IGNvbnZlcnQsXHJcbiAgICAgIHR5cGU6IFwicHV0XCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBzdXBwcmltZSBsZXMgYXJ0aWNsZXNcclxuICBjb25zdCByZW1vdmVBcnRpY2xlID0gaWQgPT4ge1xyXG4gICAgbW9kYWwudHlwZSA9IFwiZGVsZXRlXCJcclxuICAgIHNlbmREYXRhKGlkKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHsgdGFnOiBcInRpdGxlXCIsIG5hbWU6IFwidGl0cmVcIiwgZHJhdzogXCJzdHJpbmdcIiwgY29sU2l6ZTogMiB9LFxyXG4gICAgeyB0YWc6IFwic29ydFwiLCBuYW1lOiBcIm9yZHJlXCIsIGRyYXc6IFwibnVtYmVyXCIsIGNvbFNpemU6IFwiMS01XCIgfSxcclxuICAgIHsgdGFnOiBcInBhZ2VcIiwgbmFtZTogXCJwYWdlXCIsIGRyYXc6IFwib2JqZWN0LnRpdGxlXCIsIGNvbFNpemU6IDIgfSxcclxuICAgIHsgdGFnOiBcInB1Ymxpc2hlZFwiLCBuYW1lOiBcInZpc2libGVcIiwgZHJhdzogXCJib29sXCIsIGNvbFNpemU6IDEgfSxcclxuICAgIHsgdGFnOiBcImlzZHluYW1pY1wiLCBuYW1lOiBcImR5bmFtaXF1ZVwiLCBkcmF3OiBcImJvb2xcIiwgY29sU2l6ZTogMSB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9e1wiQXJ0aWNsZXNcIn0+XHJcbiAgICAgIHt0eXBlb2YgYXJ0aWNsZXMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHBhZ2VzID09PSBcIm9iamVjdFwiID8gKFxyXG4gICAgICAgIDxDb250ZW50TmF2XHJcbiAgICAgICAgICBkYXRhPXthcnRpY2xlc31cclxuICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxyXG4gICAgICAgICAgY3JlYXRlPXtjcmVhdGVBcnRpY2xlfVxyXG4gICAgICAgICAgdXBkYXRlPXt1cGRhdGVBcnRpY2xlfVxyXG4gICAgICAgICAgcmVtb3ZlPXtyZW1vdmVBcnRpY2xlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7XHJcbiAgICAgICAgLy8gZmVuw6p0cmUgZCfDqWRpdGlvbiBldCBjcsOpYXRpb24gZGVzIGFydGljbGVzXHJcbiAgICAgICAgbW9kYWwuZW5hYmxlID8gKFxyXG4gICAgICAgICAgPE1vZGFsRWRpdG9yXHJcbiAgICAgICAgICAgIGRhdGE9e21vZGFsLmRhdGF9XHJcbiAgICAgICAgICAgIHRpdGxlPXttb2RhbC50aXRsZX1cclxuICAgICAgICAgICAgY2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgIGNvbW1hbmQ9e3NlbmREYXRhfVxyXG4gICAgICAgICAgICBzY2hlbWE9e3tcclxuICAgICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBcInN0cmluZ1wiLCBuYW1lOiBcIlRpdHJlXCIgfSxcclxuICAgICAgICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBkcmF3OiBcInRpdGxlXCIsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiBwYWdlcyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlZDogeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJWaXNpYmxlXCIgfSxcclxuICAgICAgICAgICAgICBpc2R5bmFtaWM6IHsgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiRHluYW1pcXVlXCIgfSxcclxuICAgICAgICAgICAgICBwdWJsaXNoYmVnaW46IHsgdHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiRMOpYnV0XCIsIGRyYXc6IFwidGl0bGVcIiB9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlbmQ6IHsgdHlwZTogXCJkYXRlXCIsIG5hbWU6IFwiRmluXCIsIGRyYXc6IFwidGl0bGVcIiB9LFxyXG4gICAgICAgICAgICAgIC8vIHNvcnQ6IHsgdHlwZTogXCJzb3J0aW5nXCIsIG5hbWU6IFwiT3JkcmVcIiwgbGlzdDogYXJ0aWNsZXMgfSxcclxuICAgICAgICAgICAgICBjb250ZW50OiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcIkNvbnRlbnVcIiB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgVHh0TGFiZWxJbnB1dCB9IGZyb20gJy4uL3VpL0lucHV0cydcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9GdW5jdGlvbnMvU2VjdXJpdHknXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAvLyByb3V0ZXJcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgLy8gcmVkdXggLSBhamF4XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgWE1MU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4KVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLlhNTFNldC5heGlvc30pXHJcbiAgLy8gcmVkdXggLSBOb3RpZmljYXRpb25cclxuICBjb25zdCBsaWZldGltZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uLmxpZmUpXHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICBfdG9rZW46IGdldFRva2VuKCksXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIHRpbWVvdXRWYXJcclxuICBsZXQgYmx1clRpbWVvdXQgPSBudWxsXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBibHVyVGltZW91dCA9IGJsdXJUaW1lb3V0ICE9PSBudWxsID8gY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KSA6IHNldFRpbWVvdXQoKCkgPT4gZS5uYXRpdmVFdmVudC5zdWJtaXR0ZXIuYmx1cigpLCA1MDApXHJcbiAgICBhamF4LnBvc3QoJy9sb2dpbicsIHsgLi4uc3RhdGUgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gcmVzLmRhdGEudXJsID09PSBcIi9cIiA/IGAke1hNTFNldC5uYXZVUkx9YCA6IGAke1hNTFNldC5uYXZVUkx9LyR7cmVzLmRhdGEudXJsfWBcclxuICAgICAgICBkaXNwYXRjaChzZXRVcmwoXCJcIikpXHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLCBcclxuICAgICAgICAgIG1zZzogYEJpZW52ZW51ZSAke3N0YXRlLmVtYWlsfWAsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRDb25uZWN0ZWQodHJ1ZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5uYXYoY2xlYW5QYXRoKHVybCkpLDQwMClcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsIFxyXG4gICAgICAgICAgbXNnOiBcImNvbm5lY3Rpb24gaW5jb3JyZWN0ZVwiLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbmF2KGAke1hNTFNldC5uYXZVUkx9L2xvZ2luYClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBzdGF0ZVxyXG5cclxuICByZXR1cm4gPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwibG9naW5cIiBjbGFzc05hbWU9eydyb3VuZGVkLWxnIGJnLXdoaXRlIGNvbG9yLWRhcmsnKyhpc0Nvbm5lY3RlZCA/ICcgY29ubmVjdGVkJzpudWxsKX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+Q29ubmV4aW9uPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtY2xlYXItb3V0bGluZSc+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiTW90IGRlIHBhc3NlXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJtb3QgZGUgcGFzc2UuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBkaXZDbHM9J3B0LTEgcC00J1xyXG4gICAgICBidG5DbHM9J2J0biBwcmltYXJ5IHctZnVsbCdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdlc0NvbnRhaW5lciwgQ29udGVudE5hdiB9IGZyb20gXCIuLi91aVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlXCI7XHJcbmltcG9ydCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2VcIjtcclxuaW1wb3J0IHsgTW9kYWxFZGl0b3IgfSBmcm9tIFwiLi4vdWlcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHN0ck5vcm1hbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9GdW5jdGlvbnMvYXBwXCI7XHJcblxyXG4vLyBDUlVEIENvbXBsZXQgcG91ciBsZXMgUGFnZXNcclxuXHJcbmNvbnN0IFBhZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5heGlvcyk7XHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7IC4uLmF4aW9zU2V0LCBwYXJhbXM6IHsgcGFnZTogXCJwYWdlc1wiIH0gfSk7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcyk7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgdHlwZTogbnVsbCxcclxuICAgIHNtYWxsOiB0cnVlLFxyXG4gICAgd2hlcmU6IFwicGFnZXNcIixcclxuICB9KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4XHJcbiAgICAgIC5nZXQoXCIvcmVxdWVzdFwiKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJwYWdlc1wiLCBkYXRhOiBbLi4ucmVzLmRhdGFdIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIvbWluaS1hZG1pbi9sb2dvdXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc2VuZERhdGEgPSBkYXRhID0+IHtcclxuICAgIGNvbnN0IHt3aGVyZSx0eXBlfSA9IG1vZGFsXHJcbiAgICBpZiAodHlwZSAhPT0gXCJkZWxldGVcIikge1xyXG4gICAgICBkYXRhLnVybCA9IHN0ck5vcm1hbGl6ZShkYXRhLnRpdGxlKS5yZXBsYWNlKC8gL2dpLCAnXycpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VuZEZpZWxkID0geyB3aGVyZSwgZGF0YTogZGF0YSB9O1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwdXRcIjpcclxuICAgICAgICByZXR1cm4gYWpheC5wdXQoXCIvcmVxdWVzdFwiLCBzZW5kRmllbGQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogd2hlcmUsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIG1zZzogXCJQYWdlIG1pc2Ugw6Agam91ciFcIixcclxuICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgY2FzZSBcInBvc3RcIjpcclxuICAgICAgICByZXR1cm4gYWpheC5wb3N0KFwiL3JlcXVlc3RcIiwgc2VuZEZpZWxkKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IHdoZXJlLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBtc2c6IFwiUGFnZSBjcsOpw6llIVwiLFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxyXG4gICAgICAgICAgICAgIG1zZzogcmVzLnJlc3BvbnNlLmRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNhc2UgXCJkZWxldGVcIjpcclxuICAgICAgICAgIHJldHVybiBhamF4LmRlbGV0ZShcIi9yZXF1ZXN0XCIsIHtkYXRhOiB7Li4uc2VuZEZpZWxkfX0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiB3aGVyZSwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1zZzogXCJQYWdlIHN1cHByaW3DqWUhXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXMucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgY29uc3QgbXNnID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgICAgIG1zZzogbXNnLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoe1xyXG4gICAgICAuLi5tb2RhbCxcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgdGl0bGU6IFwiQ3LDqWVyXCIsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVBhZ2UgPSBpZCA9PiB7XHJcbiAgICBjb25zdCBuRGF0YSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgY29uc3QgcGFnZSA9IE9iamVjdC52YWx1ZXMobkRhdGEpLmZpbmQocCA9PiBwLmlkID09IGlkKTtcclxuICAgIHNldE1vZGFsKHtcclxuICAgICAgLi4ubW9kYWwsXHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgZGF0YTogey4uLnBhZ2V9LFxyXG4gICAgICB0eXBlOiBcInB1dFwiLFxyXG4gICAgICB0aXRsZTogXCJNb2RpZmllclwiLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQYWdlID0gaWQgPT4ge1xyXG4gICAgbW9kYWwudHlwZSA9IFwiZGVsZXRlXCJcclxuICAgIHNlbmREYXRhKGlkKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHsgdGFnOiBcInRpdGxlXCIsIG5hbWU6IFwidGl0cmVcIiwgZHJhdzogXCJzdHJpbmdcIiwgY29sU2l6ZTogNCB9LFxyXG4gICAgeyB0YWc6IFwic29ydFwiLCBuYW1lOiBcIm9yZHJlXCIsIGRyYXc6IFwibnVtYmVyXCIsIGNvbFNpemU6IFwiMS01XCIgfSxcclxuICAgIHsgdGFnOiBcInNldHRpbmdzXCIsIG5hbWU6IFwibGFuZGluZ1wiLCBkcmF3OiBcImJvb2xcIiwgY29sU2l6ZTogMiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9e1wiUGFnZXNcIn0+XHJcbiAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgIDxDb250ZW50TmF2XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XHJcbiAgICAgICAgICB1cGRhdGU9e3VwZGF0ZVBhZ2V9XHJcbiAgICAgICAgICByZW1vdmU9e3JlbW92ZVBhZ2V9XHJcbiAgICAgICAgICBjcmVhdGU9e2NyZWF0ZVBhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHttb2RhbC5lbmFibGUgPyAoXHJcbiAgICAgICAgPE1vZGFsRWRpdG9yXHJcbiAgICAgICAgICBkYXRhPXttb2RhbC5kYXRhfVxyXG4gICAgICAgICAgdGl0bGU9e21vZGFsLnRpdGxlfVxyXG4gICAgICAgICAgY2xvc2U9eygpID0+IHNldE1vZGFsKHsuLi5tb2RhbCwgZW5hYmxlOiBmYWxzZX0pfVxyXG4gICAgICAgICAgY29tbWFuZD17c2VuZERhdGF9XHJcbiAgICAgICAgICBzbWFsbD17bW9kYWwuc21hbGx9XHJcbiAgICAgICAgICBzY2hlbWE9e3tcclxuICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogXCJzdHJpbmdcIiwgbmFtZTogXCJUaXRyZVwiIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyIH0gZnJvbSBcIi4uL3VpXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU2VsZWN0b3IsIFR4dExhYmVsSW5wdXQgfSBmcm9tIFwiLi4vdWkvSW5wdXRzXCI7XHJcbmltcG9ydCB7IGFyZUVxdWFsLCBjYXBpdGFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL0Z1bmN0aW9ucy9hcHBcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2VcIjtcclxuXHJcbi8vIEdlc3Rpb24gZGVzIFNldHRpbmdzXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguYXhpb3MpO1xyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoeyAuLi5heGlvc1NldCB9KTtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5kYXRhLnNldHRpbmdzKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2NoYW5nZSwgc2V0Q2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheFxyXG4gICAgICAuZ2V0KFwiL3JlcXVlc3RcIilcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwic2V0dGluZ3NcIiwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZSh7IC4uLnJlcy5kYXRhIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShcIi9taW5pLWFkbWluL2xvZ291dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTmFtZSA9IHYgPT4ge1xyXG4gICAgc3dpdGNoICh2KSB7XHJcbiAgICAgIGNhc2UgXCJBdXRob3JcIjpcclxuICAgICAgICByZXR1cm4gXCJhdXRldXJcIjtcclxuICAgICAgY2FzZSBcIkRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiZGVzY3JpcHRpb25cIjtcclxuICAgICAgY2FzZSBcIlNpdGVOYW1lXCI6XHJcbiAgICAgICAgcmV0dXJuIFwibm9tIGR1IHNpdGVcIjtcclxuICAgICAgY2FzZSBcIkxhbmRpbmdcIjpcclxuICAgICAgICByZXR1cm4gXCJwYWdlIGQnYWNjdWVpbFwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBwcm9wKSA9PiB7XHJcbiAgICBjb25zdCBuRGF0YSA9IHsgLi4uZGF0YSwgW3Byb3BdOiBlLnRhcmdldC52YWx1ZSB9O1xyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcInNldHRpbmdzXCIsIGRhdGE6IG5EYXRhIH0pKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0TGFuZGluZyA9IHYgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEsIExhbmRpbmc6IHYgfTtcclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJzZXR0aW5nc1wiLCBkYXRhOiBuRGF0YSB9KSk7XHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgYWpheC5wdXQoXCIvcmVxdWVzdFwiLCB7IHdoZXJlOiBcInNldHRpbmdzXCIsIGRhdGEgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChub3RpZnkoeyBcclxuICAgICAgICBtc2c6IFwib3B0aW9ucyBtaXNlIMOgIGpvdXJcIiwgXHJcbiAgICAgICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMjAwMClcclxuICAgICAgfSkpO1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwic2V0dGluZ3NcIiwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICBzZXRJbml0aWFsU3RhdGUoeyAuLi5yZXMuZGF0YSB9KTtcclxuICAgICAgc2V0Q2hhbmdlKGZhbHNlKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gobm90aWZ5KHsgXHJcbiAgICAgICAgbXNnOiBcImVycmV1ciBkZSBzYXV2ZWdhcmRlXCIsIFxyXG4gICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMjAwMClcclxuICAgICAgfSkpXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9e1wiUGFyYW3DqHRyZXNcIn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBweS0zIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUsIFwiQXV0aG9yXCIpfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJBdXRob3JcIikpfVxyXG4gICAgICAgICAgICAgIGlkPVwiQXV0aG9yXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5BdXRob3J9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJBdXRob3JcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9XCJpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgZGl2Q2xzPVwiaW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBsYWJlbENscz1cImxhYmVsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUsIFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpKX1cclxuICAgICAgICAgICAgICBpZD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPVwiaW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGRpdkNscz1cImlucHV0LXdyYXAgcC0yIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxDbHM9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLCBcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKSl9XHJcbiAgICAgICAgICAgICAgaWQ9XCJTaXRlTmFtZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuU2l0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz1cImlucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBkaXZDbHM9XCJpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsQ2xzPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICBjbHM9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGljb25DbHM9XCJpY29uXCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e2RhdGEuTGFuZGluZ31cclxuICAgICAgICAgICAgICBsaXN0PXtkYXRhLlBhZ2VzfVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17c2V0TGFuZGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9jayBweS0yXCI+UGFnZTwvaDI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0b3I+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7Y2hhbmdlICYmIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgYnRuQ2xzPXtcImJ0biBzZWNvbmRhcnkgZmFkZUluTGVmdFwifVxyXG4gICAgICAgICAgICBkaXZDbHM9e1wicC0yIGZsZXgganVzdGlmeS1lbmRcIn1cclxuICAgICAgICAgICAgY2xpY2s9e3VwZGF0ZVNldHRpbmdzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTYXV2ZWdhcmRlclxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcclxuIiwiaW1wb3J0IFBhZ2VzIGZyb20gXCIuL1BhZ2VzXCI7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi9BcnRpY2xlc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG5leHBvcnQgeyBQYWdlcywgQXJ0aWNsZXMsIFNldHRpbmdzLCBMb2dpbiB9IiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBzZXRCYXNlVXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmV4cG9ydCBjb25zdCBhamF4U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2FqYXgnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdXJsOiAnJyxcclxuICAgIGJhc2VVcmw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgIG5hdlVSTDogXCIvbWluaS1hZG1pblwiLFxyXG4gICAgYXhpb3M6IHtcclxuICAgICAgYmFzZVVSTDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge31cclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVcmw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVybCA9IGVuZE9mUGF0aChjbGVhblBhdGgoYCR7YWN0aW9uLnBheWxvYWR9YCkpXHJcbiAgICB9LFxyXG4gICAgcHVzaERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgc3RhdGUuZGF0YSA9IHsuLi5zdGF0ZS5kYXRhLCBbbmFtZV06IGRhdGF9XHJcbiAgICB9LFxyXG4gICAgY2xlYXJEYXRhOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuZGF0YSA9IHt9XHJcbiAgICAgIHN0YXRlLnVybCA9IFwiXCJcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRVcmwsIHB1c2hEYXRhLCBjbGVhckRhdGEgfSA9IGFqYXhTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhamF4U2xpY2UucmVkdWNlciIsImltcG9ydCBhamF4U2xpY2UgZnJvbSBcIi4vYWpheFNsaWNlXCI7XHJcbmltcG9ydCBsZXhpY2FsU2xpY2UgZnJvbSBcIi4vbGV4aWNhbFNsaWNlXCI7XHJcbmltcG9ydCBub3RpZmljYXRpb25TbGljZSBmcm9tIFwiLi9ub3RpZmljYXRpb25TbGljZVwiO1xyXG5cclxuZXhwb3J0IHsgYWpheFNsaWNlLCBub3RpZmljYXRpb25TbGljZSwgbGV4aWNhbFNsaWNlIH0iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbGV4aWNhbFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwibGV4aWNhbFwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgaW1nS2V5OiBudWxsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0SW1nS2V5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGltZ0tleTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEltZ0tleSwgfSA9IGxleGljYWxTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsZXhpY2FsU2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIm5vdGlmaWNhdGlvblwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgbXNnOiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIm91dFwiLFxyXG4gICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgbGlmZTogNDAwMFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIG5vdGlmeTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgY29uc3Qge3R5cGUsbXNnLHRpbWVvdXR9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbXNnOiBtc2csXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBzdGF0dXMgOiBcImluXCIsXHJcbiAgICAgICAgdGltZW91dDogdGltZW91dCB8fCBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeUtlZXA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtldmVudCwgZnVuY30gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBpZiAoZXZlbnQgPT09IFwic3RheVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGltZW91dDogZnVuYyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5Q2xvc2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiAnb3V0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9ID0gbm90aWZpY2F0aW9uU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uU2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uU2xpY2UsIGFqYXhTbGljZSwgbGV4aWNhbFNsaWNlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYWpheDogYWpheFNsaWNlLFxyXG4gICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25TbGljZSxcclxuICAgIGxleGljYWw6IGxleGljYWxTbGljZVxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGVsZXRlJ1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRWRpdCdcclxuXHJcbmNvbnN0IEFjdGlvbnNSb3cgPSAoeyBpZCwgdXBkYXRlLCByZW1vdmUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LW5vd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24tYnV0dG9uIHNlY29uZGFyeScgb25DbGljaz17KGUpID0+IHVwZGF0ZShpZCl9PlxyXG4gICAgICAgIDxFZGl0IGNscz0nYWN0aW9uLWljb24gZWRpdCcvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gc2Vjb25kYXJ5JyBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlKGlkKX0+XHJcbiAgICAgICAgPERlbGV0ZSBjbHM9J2FjdGlvbi1pY29uIGRlbGV0ZScvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uc1JvdyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENTUkZJbnB1dCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgdmFsdWU9e2dldFRva2VuKCl9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDU1JGSW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGNhcGl0YWxpemUsXHJcbiAgZ2V0UHJvcHNCb29sU3RhdHVzLFxyXG4gIGlzQXJyYXksXHJcbiAgc3RyTm9ybWFsaXplLFxyXG59IGZyb20gXCIuLi8uLi8uLi9GdW5jdGlvbnMvYXBwXCI7XHJcbmltcG9ydCB7IE51bWJlcklucHV0LCBDaGVja2JveCwgU3dpdGNoSW5wdXQsIFNlbGVjdG9yIH0gZnJvbSBcIi4vSW5wdXRzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnNSb3cgfSBmcm9tIFwiLi9cIjtcclxuaW1wb3J0IHsgRmlsdGVyLCBTdWNjZXNzLCBDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi9pY29uL2ljb24tdWlcIjtcclxuXHJcbmNvbnN0IENvbnRlbnROYXYgPSAoeyBoZWFkZXIsIGRhdGEsIHVwZGF0ZSwgcmVtb3ZlLCBjcmVhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHVwZGF0ZVNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBhamF4RGF0YSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguZGF0YSk7XHJcbiAgY29uc3QgW25hdlNlYXJjaCwgc2V0TmF2U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGluaXRpYXRpb24gZGVzIGZpbHRyZXNcclxuICAgIGNvbnN0IHNGaWVsZHMgPSB7fTtcclxuICAgIGhlYWRlci5tYXAoXHJcbiAgICAgIGggPT5cclxuICAgICAgICAoc0ZpZWxkc1toLnRhZ10gPVxyXG4gICAgICAgICAgaC50YWcgIT09IFwicGFnZVwiXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6XHJcbiAgICAgICAgICAgICAgICAgIGguZHJhdyA9PT0gXCJudW1iZXJcIiA/IDAgOiBoLmRyYXcubWF0Y2goL15ib29sLykgPyBmYWxzZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWy4uLmFqYXhEYXRhW2gudGFnICsgXCJzXCJdXS5tYXAoKGVsLCBpKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5lbCxcclxuICAgICAgICAgICAgICAgICAgZmlsdGVyZWQ6IGkgPT0gMCA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zRmllbGRzIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gZm9ybWF0IGxlcyBkb25uw6llIHBvdXIgYWZmaWNoYWdlXHJcbiAgY29uc3Qgc2V0VmlldyA9ICh2YWx1ZSwgc2V0ID0gXCJ2YWx1ZVwiLCB0YWcpID0+IHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmplY3RcXC4uKy9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzZXQuc3BsaXQoXCIuXCIpW3NldC5zcGxpdChcIi5cIikubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgcmV0dXJuIGNhcGl0YWxpemUoYWpheERhdGFbYCR7dGFnfXNgXVtOdW1iZXIodmFsdWUpIC0gMV1bbmFtZV0pO1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyAoXHJcbiAgICAgICAgICA8U3VjY2VzcyBjbHM9XCJoLTYgdy02IG0tYXV0byBpY29uIHN1Y2Nlc3NcIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Q2xvc2UgY2xzPVwiaC02IHctNiBtLWF1dG8gaWNvbiBmYWxzZVwiIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ebnVtL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ec3RyL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gY2FwaXRhbGl6ZSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyB1cGRhdGUgZGVzIGZpbHRyZXMgZGUgcmVjaGVyY2hlc1xyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZUNoYW5nZSA9IChlLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgIGNhc2UgXCJzb3J0XCI6XHJcbiAgICAgICAgdmFsdWUgPVxyXG4gICAgICAgICAgdmFsdWUgPCAwIHx8IHZhbHVlID09IFwiXCJcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdmFsdWUgPiBkYXRhLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyBkYXRhLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHVwZGF0ZVNlYXJjaCh7IC4uLnNlYXJjaCwgW2ZpZWxkXTogeyAuLi5zZWFyY2hbZmllbGRdLCB2YWx1ZTogdmFsdWUgfSB9KTtcclxuICB9O1xyXG5cclxuICAvLyB1cGRhdGUgZGVzIGZpbHRyZXMgZGUgcmVjaGVyY2hlcyAoIHNww6ljaWZpcXVlIMOgIHVuZSBsaXN0ZSBkJ8OpbMOpbWVudCBhdHRyaWJ1dCBcImZpbHRlcmVkXCIpXHJcbiAgY29uc3QgdXBkYXRlQXJyYXlGaWx0ZXIgPSAodmFsdWUsIHRhZykgPT4ge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbLi4uc2VhcmNoW3RhZ10udmFsdWVdO1xyXG4gICAgdXBkYXRlU2VhcmNoKHtcclxuICAgICAgLi4uc2VhcmNoLFxyXG4gICAgICBbdGFnXToge1xyXG4gICAgICAgIC4uLnNlYXJjaFt0YWddLFxyXG4gICAgICAgIHZhbHVlOiBhcnJheS5tYXAoZWwgPT4gKHtcclxuICAgICAgICAgIC4uLmVsLFxyXG4gICAgICAgICAgZmlsdGVyZWQ6IGVsLmlkID09PSB2YWx1ZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyByZW5kdSBzYW5zIGZpbHRyZXNcclxuICBjb25zdCBiYXNpY1JlbmRlciA9IGRhdGEgPT5cclxuICAgIGRhdGEubWFwKChmaWVsZCwgaykgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPVwiY29udGVudC1yb3dcIj5cclxuICAgICAgICB7aGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT5cclxuICAgICAgICAgICAge3NldFZpZXcoZmllbGRbdGFnXSwgZHJhdywgdGFnKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGFjdGlvbi1maWVsZCBjb2xzaXplLTJgfT5cclxuICAgICAgICAgIDxBY3Rpb25zUm93XHJcbiAgICAgICAgICAgIGlkPXtrfVxyXG4gICAgICAgICAgICB1cGRhdGU9eygpID0+IHVwZGF0ZShmaWVsZC5pZCl9XHJcbiAgICAgICAgICAgIHJlbW92ZT17KCkgPT4gcmVtb3ZlKGZpZWxkLmlkKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gIC8vIHJlbmR1IGF2ZWMgZmlsdHJlc1xyXG4gIGNvbnN0IGZpbHRlclJlbmRlciA9IGRhdGEgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2VhcmNoKSkge1xyXG4gICAgICBpZiAodi5hY3RpdmUpIHtcclxuICAgICAgICBzZWFyY2hGaWx0ZXJba10gPSB2LnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGEubWFwKChmaWVsZCwgaykgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzZWFyY2hGaWx0ZXIpKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2Ygdikge1xyXG4gICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgIXN0ck5vcm1hbGl6ZShmaWVsZFtrXSkubWF0Y2goc3RyTm9ybWFsaXplKHYpKSAmJlxyXG4gICAgICAgICAgICAgIHYubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgaWYgKHYgIT09IGZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICBpZiAodiA9PT0gdHJ1ZSAmJiAhZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodiA9PT0gZmFsc2UgJiYgZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHYuZmluZChlbCA9PiBlbC5maWx0ZXJlZCkuaWQ7XHJcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW2tdICE9PSBmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9XCJjb250ZW50LXJvd1wiPlxyXG4gICAgICAgICAge2hlYWRlci5tYXAoKHsgdGFnLCBkcmF3LCBjb2xTaXplIH0sIGspID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT5cclxuICAgICAgICAgICAgICB7c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3ctZmllbGQgYWN0aW9uLWZpZWxkIGNvbHNpemUtMmB9PlxyXG4gICAgICAgICAgICA8QWN0aW9uc1JvdyBpZD17a30gdXBkYXRlPXsoKSA9PiB1cGRhdGUoZmllbGQuaWQpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBhY3RpdmUgdW4gZmlsdHJlIChzZWxvbiBjaWJsZSB1dGlsaXNhdGV1cilcclxuICBjb25zdCB0b2dnbGVGaWx0ZXIgPSAoZSwgY2hlY2tlZCkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHVwZGF0ZVNlYXJjaCh7XHJcbiAgICAgIC4uLnNlYXJjaCxcclxuICAgICAgW2NoZWNrZWRdOiB7IC4uLnNlYXJjaFtjaGVja2VkXSwgYWN0aXZlOiAhc2VhcmNoW2NoZWNrZWRdLmFjdGl2ZSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1uYXYtaGVhZGVyXCI+XHJcbiAgICAgICAge2hlYWRlci5tYXAoKGgsIGspID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX1gfT5cclxuICAgICAgICAgICAge2NhcGl0YWxpemUoaC5uYW1lKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMiBhY3Rpb24taGVhZGVyYH0+XHJcbiAgICAgICAgICB7Y2FwaXRhbGl6ZShcImFjdGlvbnNcIil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgXCJidG4gYnRuLW91dGxpbmUgaWNvbi1idG4gc2Vjb25kYXJ5IG1vYmlsZVwiICtcclxuICAgICAgICAgICAgKG5hdlNlYXJjaCA/IFwiIHRvZ2dsZVwiIDogXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdlNlYXJjaCghbmF2U2VhcmNoKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmlsdGVyIGNscz1cImljb25cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRlbnQtbmF2LXNlYXJjaFwiICsgKG5hdlNlYXJjaCA/IFwiIHRvZ2dsZVwiIDogXCJcIil9PlxyXG4gICAgICAgICAge3NlYXJjaFxyXG4gICAgICAgICAgICA/IGhlYWRlci5tYXAoKGgsIGspID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBJbnB1dDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM9e2BzZWNvbmRhcnkgY29sc2l6ZS0xMGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucENscz1cImlucHV0LW51bWJlciBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhlLCB2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtOdW1iZXIoc2VhcmNoW2gudGFnXS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2gubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hbaC50YWddLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsICFzZWFyY2hbaC50YWddLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm9iai9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3NlYXJjaFtoLnRhZ10udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2VhcmNoW2gudGFnXS52YWx1ZS5maW5kKGVsID0+IGVsLmZpbHRlcmVkKS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt2YWx1ZSA9PiB1cGRhdGVBcnJheUZpbHRlcih2YWx1ZSwgaC50YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtdHh0IHNlY29uZGFyeSBjb2xzaXplLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjYXBpdGFsaXplKGgubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hbaC50YWddLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17a31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzZWFyY2gtZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX0gZmxleCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggZmxleC1ub3dyYXBgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbHM9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VhcmNoW2gudGFnXS5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2UgPT4gdG9nZ2xlRmlsdGVyKGUsIGgudGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMiBhY3Rpb24tc2VhcmNoYH0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCI+XHJcbiAgICAgICAgeyFzZWFyY2ggfHwgKHNlYXJjaCAmJiAhZ2V0UHJvcHNCb29sU3RhdHVzKHNlYXJjaCwgXCJhY3RpdmVcIiwgdHJ1ZSkpXHJcbiAgICAgICAgICA/IGRhdGEgJiYgaXNBcnJheShkYXRhKVxyXG4gICAgICAgICAgICA/IGJhc2ljUmVuZGVyKGRhdGEpXHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgOiBkYXRhICYmIGlzQXJyYXkoZGF0YSlcclxuICAgICAgICAgID8gZmlsdGVyUmVuZGVyKGRhdGEpXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2LWFjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIHN1Y2Nlc3NcIiBvbkNsaWNrPXtjcmVhdGV9PlxyXG4gICAgICAgICAgQ3LDqWVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TmF2O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgYnRuQ2xzLCBkaXZDbHMsIGNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbHN9IG9uQ2xpY2s9e2NsaWNrfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2hlY2tlZCBmcm9tICcuLi8uLi8uLi8uLi9pY29uL2ljb24tdWkvQ2hlY2tlZCdcclxuXHJcbmNvbnN0IENoZWNrYm94ID0gKHsgY2xzLCBjaGFuZ2UsIGNoZWNrZWQsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXQtY2hlY2tib3ggXCIgKyBjbHN9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSl9PlxyXG4gICAgICB7IGNoZWNrZWQgPyA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY2hlY2tib3gtdHJ1ZSc+PENoZWNrZWQgLz48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY2hlY2tib3gtZmFsc2UnPjwvZGl2PiB9XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhbGVuZGFyLCBOYXZQcmV2LCBOYXZOZXh0LCBDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29uL2ljb24tdWkvXCI7XHJcblxyXG5jb25zdCBEYXRlUGlja2VyID0gKHsgY2hhbmdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgdmFsdWUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgY29uc3QgY3VyclZhbCA9IHtcclxuICAgIGRheTogdmFsdWUuZ2V0RGF5KCksXHJcbiAgICBkYXRlOiB2YWx1ZS5nZXREYXRlKCksXHJcbiAgICBtb250aDogdmFsdWUuZ2V0TW9udGgoKSxcclxuICAgIHllYXI6IHZhbHVlLmdldEZ1bGxZZWFyKCksXHJcbiAgfTtcclxuICBjb25zdCBkYXlzID0gW1wiTHVuXCIsIFwiTWFyXCIsIFwiTWVyXCIsIFwiSmV1XCIsIFwiVmVuXCIsIFwiU2FtXCIsIFwiRGltXCJdO1xyXG4gIGNvbnN0IGRyYXdEYXRlID0ge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfTtcclxuICBjb25zdCBbcmVmLCBzZXRSZWZdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RhdGVTdGF0ZSwgc2V0RGF0ZVN0YXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSkpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFvcGVuICYmIHJlZiA/IHNldFRpbWVvdXQoKCkgPT4gcmVmLmJsdXIoKSwgMTUwKSA6IG51bGw7XHJcbiAgfSwgW29wZW5dKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRGF0ZSA9IHYgPT4ge1xyXG4gICAgY29uc3QgbkRhdGUgPSBkYXRlU3RhdGU7XHJcbiAgICBuRGF0ZS5zZXREYXRlKHYpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBjaGFuZ2UobkRhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldERheXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY29uc3Qgb3V0UHV0ID0gW107XHJcbiAgICBjb25zdCBkaXNwbGF5RGF0ZSA9IG5ldyBEYXRlKGRhdGVTdGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgZGlzcGxheURhdGUuc2V0RGF0ZSgxKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpICE9PSBkaXNwbGF5RGF0ZS5nZXREYXkoKTsgaSsrKSB7XHJcbiAgICAgIG91dFB1dC5wdXNoKDxkaXYga2V5PXtcImRQaWNrLVwiICsgY291bnR9IGNsYXNzTmFtZT1cImNhc2UgZW1wdHlcIj48L2Rpdj4pO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheURhdGUuc2V0TW9udGgoZGlzcGxheURhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgZGlzcGxheURhdGUuc2V0RGF0ZSgwKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRpc3BsYXlEYXRlLmdldERhdGUoKTsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpID09IGN1cnJWYWwuZGF0ZSAmJlxyXG4gICAgICAgIGN1cnJWYWwubW9udGggPT0gZGlzcGxheURhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgIGN1cnJWYWwueWVhciA9PSBkaXNwbGF5RGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICkge1xyXG4gICAgICAgIG91dFB1dC5wdXNoKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e1wiZFBpY2stXCIgKyBjb3VudH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRGF0ZShpKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FzZSBhY3RpdmVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3V0UHV0LnB1c2goXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17XCJkUGljay1cIiArIGNvdW50fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VEYXRlKGkpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0UHV0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldE1vbnRoID0gdiA9PiB7XHJcbiAgICBsZXQgbW9udGggPSBkYXRlU3RhdGUuZ2V0TW9udGgoKSArIHY7XHJcbiAgICBjb25zdCBuRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgbkRhdGUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgc2V0RGF0ZVN0YXRlKG5EYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRZZWFyID0gdiA9PiB7XHJcbiAgICBsZXQgeWVhciA9IGRhdGVTdGF0ZS5nZXRGdWxsWWVhcigpICsgdjtcclxuICAgIGNvbnN0IG5EYXRlID0gbmV3IERhdGUoZGF0ZVN0YXRlLmdldFRpbWUoKSk7XHJcbiAgICBuRGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgIHNldERhdGVTdGF0ZShuRGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY2FsZW5kYXJcIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiAoIW9wZW4gPyBzZXRPcGVuKHRydWUpIDogbnVsbCl9XHJcbiAgICAgIG9uRm9jdXM9e2UgPT4gc2V0UmVmKGUudGFyZ2V0KX1cclxuICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdHh0XCI+e3ZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIpfS48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1pY29uXCI+XHJcbiAgICAgICAgPENhbGVuZGFyIGNscz17XCJpY29uXCJ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IW9wZW4gPyBudWxsIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItY3VycmVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICB7dmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiwgZHJhd0RhdGUpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGgteWVhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLW1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbmF2IHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb250aCgtMSl9PlxyXG4gICAgICAgICAgICAgICAgPE5hdlByZXYgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRlU3RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiwgeyBtb250aDogXCJsb25nXCIgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbmF2IHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb250aCgxKX0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TmV4dCBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXIteWVhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLW5hdiBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0WWVhcigtMSl9PlxyXG4gICAgICAgICAgICAgICAgPE5hdlByZXYgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRlU3RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIiwgeyB5ZWFyOiBcIm51bWVyaWNcIiB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1uYXYgcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFllYXIoMSl9PlxyXG4gICAgICAgICAgICAgICAgPE5hdk5leHQgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheS1uYW1lc1wiPlxyXG4gICAgICAgICAgICB7ZGF5cy5tYXAoKGQsIGkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIE1hdGgucmFuZG9tKCkgKiAxMDB9IGNsYXNzTmFtZT1cImNhc2VcIj5cclxuICAgICAgICAgICAgICAgIHtkfS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5c1wiPntzZXREYXlzKCl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVBpY2tlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW1hZ2VGaWxlSW5wdXQgPSAoe2NscywgYWRkQ2xzLCBicm93c2UsIGlkLCBjaGFuZ2UsIGltZ0Jyb3dzZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXticm93c2V9IG9uQ2xpY2s9e2ltZ0Jyb3dzZX0+UGFyY291cmlyPC9idXR0b24+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXthZGRDbHN9Pis8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgdHlwZT0nZmlsZScgXHJcbiAgICAgICAgY2xhc3NOYW1lPSdoaWRkZW4nXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgbXVsdGlwbGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlKGUubmF0aXZlRXZlbnQpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUZpbGVJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE51bWJlcklucHV0ID0gKHsgY2xzLCBpbnBDbHMsIGNoYW5nZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzICsgJyBpbnB1dC1udW1iZXItd3JhcCBmbGV4IGZsZXgtbm93cmFwIHJlbGF0aXZlJ30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctYnRuJyB0YXJnZXQ9XCJkb3duXCIgb25DbGljaz17KGUpID0+IGNoYW5nZShlLHZhbHVlLTEpfSA+LTwvc3Bhbj48aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2lucENscyArICcgY29sc2l6ZS0xMCd9IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlKGUsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3ZhbHVlfSAvPjxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctYnRuJyB0YXJnZXQ9XCJ1cFwiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSx2YWx1ZSsxKX0+Kzwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEV4cGFuZCBmcm9tICcuLi8uLi8uLi8uLi9pY29uL2ljb24tdWkvRXhwYW5kJ1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmNvbnN0IFNlbGVjdG9yID0gKHsgY2xzLCBsaXN0LCBhY3RpdmUsIGljb25DbHMsIGNoaWxkcmVuLCBhY3Rpb24sIHNvcnRQcm9wID0gXCJpZFwiIH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhc3RFdmVudCwgc2V0TGFzdEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIC8vIG1pc2UgZW4gcGxhY2UgZGUgbCfDqWzDqW1lbnQgYWN0aWYgcGFyIGTDqWZhdXQgKHByb3AgYWN0aXZlIG9ibGlnYXRvaXJlKVxyXG4gIGlmICghbGlzdCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgY29uc3QgbGFuZGluZyA9IGxpc3QuZmluZChpID0+IGlbc29ydFByb3BdID09PSBhY3RpdmUpIHx8IGxpc3QuZmluZChpID0+IGkuaWQgPT09IGFjdGl2ZSlcclxuICBjb25zdCBhdmFpYmxlID0gbGlzdC5maWx0ZXIoaSA9PiBpLmlkICE9PSBsYW5kaW5nLmlkKVxyXG5cclxuICBjb25zdCB0b2dnbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCAkZWwgPSBlLnRhcmdldFxyXG4gICAgd2hpbGUgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdG9yJykgPT0gZmFsc2UpIHtcclxuICAgICAgJGVsID0gJGVsLnBhcmVudE5vZGVcclxuICAgIH1cclxuICAgIGlmICgoZS50eXBlID09PSAnY2xpY2snICYmIGxhc3RFdmVudCA9PT0gJ2NsaWNrJykgfHwgZS50eXBlICE9PSAnY2xpY2snKSB7XHJcbiAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKVxyXG4gICAgICBsYXN0RXZlbnQgPT09ICdjbGljaycgJiYgdG9nZ2xlID09PSB0cnVlID8gJGVsLmJsdXIoKSA6IG51bGxcclxuICAgIH0gXHJcbiAgICBzZXRMYXN0RXZlbnQoZS50eXBlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVZhbHVlID0gKGUsdikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9nZ2xlU2VsZWN0KGUpO1xyXG4gICAgYWN0aW9uKHYpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhjbHMgPyAnc2VsZWN0b3IgJyArIGNscyA6ICdzZWxlY3RvcicpICsgKHRvZ2dsZSA/ICcgb3BlbmVkJyA6ICcnKX0gb25Gb2N1cz17dG9nZ2xlU2VsZWN0fSBvbkJsdXI9e3RvZ2dsZVNlbGVjdH0gdGFiSW5kZXg9ey0xfT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHQgYWN0aXZlJyB2YWx1ZT17bGFuZGluZy5pZH0gb25DbGljaz17dG9nZ2xlID8gdG9nZ2xlU2VsZWN0IDogbnVsbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUobGFuZGluZy50aXRsZSl9PC9kaXY+PEV4cGFuZCBjbHM9e2ljb25DbHN9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICB0b2dnbGUgPyA8ZGl2IGNsYXNzTmFtZT0nb3B0LXdyYXBwZXInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdmFpYmxlLm1hcCgoe2lkLHRpdGxlfSxrKSA9PiBcclxuICAgICAgICAgICAgICAvLyBsJ2lkIGRlIGwnw6lsw6ltZW50IGNob2lzaSBlc3QgZGlyZWN0ZW1lbnQgZW52b3nDqSBkYW5zIFwiYWN0aW9uXCIgKGZ1bmN0aW9uIMOgIHBhc3NlciBlbiBwcm9wKVxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J29wdCcgdmFsdWU9e2lkfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmFsdWUoZSxpZCl9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKHRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvciIsIi8vIHVpIGJvb2xlYW4gcmVwcmVzZW50YXRpb25cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN3aXRjaElucHV0ID0gKHsgY2xzID0gXCJcIiwgdmFsdWUsIGNoYW5nZSB9KSA9PiB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnaW5wdXQtc3dpdGNoJyArICh2YWx1ZSA/ICcgdHJ1ZSc6ICcgZmFsc2UnKSArICggY2xzID8gYCAke2Nsc31gIDogXCJcIil9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtc3dpdGNoLWJ1dHRvbic+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaElucHV0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRMYWJlbElucHV0KHsgaWQsIHZhbHVlLCBsYWJlbCwgcGxhY2Vob2xkZXIsIHR5cGUsIGlucHV0Q2xzLCBkaXZDbHMgPSAnaW5wdXQtd3JhcCBwLTInLCBsYWJlbENscyA9ICdibG9jayBwLTInLCBvbkNoYW5nZSB9KSB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoIWlzQWN0aXZlKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsoZGl2Q2xzICsgKGlzQWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSl9PlxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWwgXHJcbiAgICAgICAgPyA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT17bGFiZWxDbHN9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0TGFiZWxJbnB1dCIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9DaGVja2JveFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi9EYXRlUGlja2VyXCI7XHJcbmltcG9ydCBJbWFnZUZpbGVJbnB1dCBmcm9tIFwiLi9JbWFnZUZpbGVJbnB1dFwiO1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSBcIi4vTnVtYmVySW5wdXRcIjtcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gXCIuL1NlbGVjdG9yXCI7XHJcbmltcG9ydCBTd2l0Y2hJbnB1dCBmcm9tIFwiLi9Td2l0Y2hJbnB1dFwiO1xyXG5pbXBvcnQgVHh0TGFiZWxJbnB1dCBmcm9tIFwiLi9UeHRMYWJlbElucHV0XCI7XHJcblxyXG5leHBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDaGVja2JveCxcclxuICBEYXRlUGlja2VyLFxyXG4gIEltYWdlRmlsZUlucHV0LFxyXG4gIE51bWJlcklucHV0LFxyXG4gIFNlbGVjdG9yLFxyXG4gIFN3aXRjaElucHV0LFxyXG4gIFR4dExhYmVsSW5wdXQsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDbG9zZSBmcm9tIFwiLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIFNlbGVjdG9yLCBTd2l0Y2hJbnB1dCB9IGZyb20gXCIuL0lucHV0c1wiO1xyXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCIuL1wiO1xyXG5cclxuY29uc3QgTW9kYWxFZGl0b3IgPSAoeyBkYXRhLCBzY2hlbWEsIHRpdGxlLCBjbG9zZSwgY29tbWFuZCwgc21hbGwgfSkgPT4ge1xyXG4gIGNvbnN0IFttRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVtcHR5ID0ge307XHJcbiAgICBPYmplY3QuZW50cmllcyhzY2hlbWEpLm1hcCgoW25hbWUsIHBhcl0pID0+IHtcclxuICAgICAgbGV0IHZhbDtcclxuICAgICAgc3dpdGNoIChwYXIudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgdmFsID0gXCJcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgICAgIHZhbCA9IHBhci5saXN0WzBdLmlkO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNvcnRpbmdcIjpcclxuICAgICAgICAgIGNvbnN0IGxhc3QgPSBwYXIubGlzdC5sZW5ndGggLSAxXHJcbiAgICAgICAgICB2YWwgPSBwYXIubGlzdFtsYXN0XS5pZCA7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYm9vbFwiOlxyXG4gICAgICAgICAgdmFsID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgICAgdmFsID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgIHZhbC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB2YWwgPSBcIlwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZW1wdHlbbmFtZV0gPSB2YWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICAhZGF0YSA/IHNldERhdGEoeyAuLi5lbXB0eSB9KSA6IHNldERhdGEoeyAuLi5kYXRhIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuICFtRGF0YSA/IG51bGwgOiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wibW9kYWwtZWRpdG9yXCIgKyAoc21hbGwgPyBcIiBzbWFsbFwiOiBcIlwiKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXItdHh0XCI+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyLWNsb3NlXCIgb25DbGljaz17Y2xvc2V9PlxyXG4gICAgICAgICAgPENsb3NlIGNscz1cInctNiBoLTZcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC13aW5kb3dcIj5cclxuICAgICAgICB7bURhdGFcclxuICAgICAgICAgID8gT2JqZWN0LmVudHJpZXMoc2NoZW1hKS5tYXAoKFtrZXksIHZhbHVlXSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBJbnB1dDtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWwgcC0yIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUubmFtZX0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC10eHQgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bURhdGFba2V5XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSh7IC4uLm1EYXRhLCBba2V5XTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbFwiOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttRGF0YVtrZXldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eygpID0+IHNldERhdGEoeyAuLi5tRGF0YSwgW2tleV06ICFtRGF0YVtrZXldIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic29ydGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICAgICAgICAgICAgICBjb25zdCByZUtleSA9IGtleS5yZXBsYWNlKC9zJC9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWwgcC0yIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUubmFtZX0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM9e1wic2Vjb25kYXJ5IHAtMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzPXtcImljb25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dmFsdWUubGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXttRGF0YVtyZUtleV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17diA9PiBzZXREYXRhKHsgLi4ubURhdGEsIFtyZUtleV06IHYgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRQcm9wPXtyZUtleX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG1EYXRhW2tleV0gfHwgbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWwgcC0yIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUubmFtZX0gOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXt2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHsgLi4ubURhdGEsIFtrZXldOiB2IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibW9kYWwtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAge0lucHV0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtPYmplY3QuZW50cmllcyhzY2hlbWEpLm1hcCgoW2ssIHZdLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHYudHlwZSA9PT0gXCJ0ZXh0XCIgPyAoXHJcbiAgICAgICAgICA8UmljaFRleHRcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBkYXRhPXttRGF0YVtrXX1cclxuICAgICAgICAgICAgdXBkYXRlPXt2ID0+IHNldERhdGEoeyAuLi5tRGF0YSwgW2tdOiB2IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZW5kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4ge2NvbW1hbmQoey4uLm1EYXRhfSk7IGNsb3NlKCl9fT5TYXV2ZXI8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsRWRpdG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTmF2TGkgPSAoeyBjaGlsZHJlbiwgdG8sIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIHRvPXt0b30gb25DbGljaz17b25DbGlja30gZW5kPnsgY2hpbGRyZW4gfTwvTmF2TGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFBhZ2VzQ29udGFpbmVyID0gKHtjaGlsZHJlbiAsIHRpdGxlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+e3RpdGxlfTwvZGl2PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250YWluZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7ICRnZXRTZWxlY3Rpb24sICRpc1JhbmdlU2VsZWN0aW9uLCBGT1JNQVRfRUxFTUVOVF9DT01NQU5EIH0gZnJvbSBcImxleGljYWxcIlxyXG5pbXBvcnQgeyAkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5IH0gZnJvbSBcIkBsZXhpY2FsL3NlbGVjdGlvblwiXHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tIFwiQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dFwiXHJcbmltcG9ydCBCdG5Gb3JtYXRUZXh0IGZyb20gXCIuL2l0ZW1zL0J0bkZvcm1hdFRleHRcIlxyXG5pbXBvcnQgeyBUeHRDZW50ZXIsIFR4dEp1c3RpZnksIFR4dExlZnQsIFR4dFJpZ2h0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2ljb24vdGV4dC1lZGl0b3JcIlxyXG5cclxuY29uc3QgQWxpZ25UZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gICAgY2VudGVyOiBmYWxzZSxcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgIGp1c3RpZnk6IGZhbHNlLFxyXG4gIH1cclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKVxyXG4gIGNvbnN0IFtidG5TdGF0ZXMsIHNldEJ0blN0YXRlc10gPSB1c2VTdGF0ZSh7Li4uZGVmYXVsdFN0YXRlfSlcclxuXHJcbiAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICBsZWZ0OiBUeHRMZWZ0LFxyXG4gICAgY2VudGVyOiBUeHRDZW50ZXIsXHJcbiAgICByaWdodDogVHh0UmlnaHQsXHJcbiAgICBqdXN0aWZ5OiBUeHRKdXN0aWZ5LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlQnRuU3RhdGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpXHJcbiAgICBpZiAoJGlzUmFuZ2VTZWxlY3Rpb24oc2VsZWN0aW9uKSkge1xyXG4gICAgICBsZXQgbm9kZSA9IHNlbGVjdGlvbi5hbmNob3IuZ2V0Tm9kZSgpLmdldFRvcExldmVsRWxlbWVudCgpXHJcbiAgICAgIHN3aXRjaCAobm9kZS5nZXRUeXBlKCkpIHtcclxuICAgICAgICBjYXNlIFwicGFyYWdyYXBoXCI6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgbm9kZSA9IHNlbGVjdGlvbi5hbmNob3IuZ2V0Tm9kZSgpXHJcbiAgICAgIH1cclxuICAgICAgbm9kZSA9IG5vZGUuZ2V0VHlwZSgpID09PSBcInRleHRcIiA/IG5vZGUuZ2V0UGFyZW50KCkgOiBub2RlXHJcbiAgICAgIGxldCB2YWx1ZSA9IG5vZGUuZ2V0Rm9ybWF0VHlwZSgpICE9PSBcIlwiID8gbm9kZS5nZXRGb3JtYXRUeXBlKCkgOiAnbGVmdCdcclxuICAgICAgc2V0QnRuU3RhdGVzKHsuLi5kZWZhdWx0U3RhdGUsIFt2YWx1ZV0gOiB0cnVlfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gZWRpdG9yLnJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIoKHsgZWRpdG9yU3RhdGUsIHRhZ3MgfSkgPT4ge1xyXG4gICAgICBlZGl0b3JTdGF0ZS5yZWFkKCgpID0+IHtcclxuICAgICAgICB1cGRhdGVCdG5TdGF0ZXMoKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LCBbZWRpdG9yXSlcclxuXHJcbiAgY29uc3QgaXRlbXNEaXNwYXRjaCA9ICgpID0+IHtcclxuICAgIGxldCBpdGVtcyA9IFtdXHJcbiAgICBsZXQgaSA9IDBcclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhidG5TdGF0ZXMpKSB7XHJcbiAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgPEJ0bkZvcm1hdFRleHRcclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIGFjdGl2ZT17dmFsdWV9XHJcbiAgICAgICAgICBjb21tYW5kPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRvci5mb2N1cygpXHJcbiAgICAgICAgICAgIGVkaXRvci5kaXNwYXRjaENvbW1hbmQoRk9STUFUX0VMRU1FTlRfQ09NTUFORCwga2V5KVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG5hbWU9e2tleX1cclxuICAgICAgICAgIGl0ZW09e2ljb25zW2tleV19XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgICBpKytcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtc1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWl0ZW0tZ3JvdXBcIj57aXRlbXNEaXNwYXRjaCgpLm1hcCgoaSkgPT4gaSl9PC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFsaWduVGV4dFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyAkZ2V0U2VsZWN0aW9uLCAkaXNSYW5nZVNlbGVjdGlvbiwgRk9STUFUX1RFWFRfQ09NTUFORCB9IGZyb20gXCJsZXhpY2FsXCI7XHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tIFwiQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgQnRuRm9ybWF0VGV4dCBmcm9tIFwiLi9pdGVtcy9CdG5Gb3JtYXRUZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm9sZCxcclxuICBJdGFsaWMsXHJcbiAgU3RyaWtlLFxyXG4gIFN1cGVyU2NyaXB0LFxyXG4gIFVuZGVybGluZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaWNvbi90ZXh0LWVkaXRvci9cIjtcclxuXHJcbmNvbnN0IEZvcm1hdFRleHRHcm91cCA9ICgpID0+IHtcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKTtcclxuICBjb25zdCBbYnRuU3RhdGVzLCBzZXRCdG5TdGF0ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgYm9sZDogZmFsc2UsXHJcbiAgICBpdGFsaWM6IGZhbHNlLFxyXG4gICAgc3VwZXJzY3JpcHQ6IGZhbHNlLFxyXG4gICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgIHN0cmlrZXRocm91Z2g6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgIGJvbGQ6IEJvbGQsXHJcbiAgICBpdGFsaWM6IEl0YWxpYyxcclxuICAgIHN1cGVyc2NyaXB0OiBTdXBlclNjcmlwdCxcclxuICAgIHVuZGVybGluZTogVW5kZXJsaW5lLFxyXG4gICAgc3RyaWtldGhyb3VnaDogU3RyaWtlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJ0blN0YXRlcyA9ICgpID0+IHtcclxuICAgIGxldCBwcmV2U3RhdGUgPSB7IC4uLmJ0blN0YXRlcyB9O1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpO1xyXG4gICAgbGV0IG5vZGUgPSBzZWxlY3Rpb247XHJcbiAgICBpZiAoJGlzUmFuZ2VTZWxlY3Rpb24oc2VsZWN0aW9uKSkge1xyXG4gICAgICBub2RlID0gc2VsZWN0aW9uLmdldE5vZGVzKClbMF07XHJcbiAgICB9XHJcbiAgICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZS5oYXNGb3JtYXQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByZXZTdGF0ZSkpIHtcclxuICAgICAgICBwcmV2U3RhdGVba2V5XSA9IG5vZGUuaGFzRm9ybWF0KGtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEJ0blN0YXRlcyh7IC4uLnByZXZTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuIGVkaXRvci5yZWdpc3RlclVwZGF0ZUxpc3RlbmVyKCh7IGVkaXRvclN0YXRlLCB0YWdzIH0pID0+IHtcclxuICAgICAgZWRpdG9yU3RhdGUucmVhZCgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQnRuU3RhdGVzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW2VkaXRvcl0pO1xyXG5cclxuICBjb25zdCBpdGVtc0Rpc3BhdGNoID0gKCkgPT4ge1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYnRuU3RhdGVzKSkge1xyXG4gICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgIDxCdG5Gb3JtYXRUZXh0XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBhY3RpdmU9e3ZhbHVlfVxyXG4gICAgICAgICAgY29tbWFuZD17KCkgPT4ge1xyXG4gICAgICAgICAgICBlZGl0b3IuZm9jdXMoKTtcclxuICAgICAgICAgICAgZWRpdG9yLmRpc3BhdGNoQ29tbWFuZChGT1JNQVRfVEVYVF9DT01NQU5ELCBrZXkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG5hbWU9e2tleX1cclxuICAgICAgICAgIGl0ZW09e2ljb25zW2tleV19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1zO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1pdGVtLWdyb3VwXCI+e2l0ZW1zRGlzcGF0Y2goKS5tYXAoKGkpID0+IGkpfTwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdFRleHRHcm91cDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHQnXHJcbmltcG9ydCBCdG5Gb3JtYXRUZXh0IGZyb20gJy4vaXRlbXMvQnRuRm9ybWF0VGV4dCdcclxuaW1wb3J0IHsgSU5TRVJUX0lNQUdFX0NPTU1BTkQgfSBmcm9tICcuLi9wbHVnaW5zL0ltYWdlUGx1Z2luJ1xyXG5pbXBvcnQgSW1nTW9kYWwgZnJvbSAnLi9pdGVtcy9pbWdNb2RhbCdcclxuaW1wb3J0IHsgJGdldE5vZGVCeUtleSB9IGZyb20gJ2xleGljYWwnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRJbWdLZXkgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9sZXhpY2FsU2xpY2UnXHJcbmltcG9ydCB7IEltZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ljb24vdGV4dC1lZGl0b3InXHJcblxyXG5jb25zdCBJbnNlcnRJbWcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKVxyXG4gIGNvbnN0IFtpbWdQcm9wLCBzZXRJbWdQcm9wXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGltZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubGV4aWNhbC5pbWdLZXkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbWcgIT09IG51bGwgPyBvcGVuTW9kYWwoaW1nKSA6IG51bGxcclxuICB9LCBbaW1nXSlcclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKGtleSkge1xyXG4gICAgICBcclxuICAgICAgZWRpdG9yLmdldEVkaXRvclN0YXRlKCkucmVhZCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSAkZ2V0Tm9kZUJ5S2V5KGtleSlcclxuICAgICAgICBzZXRJbWdQcm9wKHtcclxuICAgICAgICAgIHNyYzogZWwuX19zcmMsXHJcbiAgICAgICAgICBpc0ZpbGU6IGVsLl9faXNGaWxlLFxyXG4gICAgICAgICAgYXRFbmQ6IGVsLl9fYXRFbmQsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEltZ1Byb3Aoe1xyXG4gICAgICAgIHNyYzogXCJcIixcclxuICAgICAgICBpc0ZpbGU6IGZhbHNlLFxyXG4gICAgICAgIGF0RW5kOiBmYWxzZSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldE1vZGFsKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBlZGl0SW1nID0gKHtuYW1lLHZhbHVlfSkgPT4ge1xyXG4gICAgXHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIGVkaXRvci51cGRhdGUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsID0gJGdldE5vZGVCeUtleShpbWcpXHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGVsLmdldFdyaXRhYmxlKClcclxuICAgICAgICBrZXlzW2BfXyR7bmFtZX1gXSA9IHZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldEltZ1Byb3Aoe1xyXG4gICAgICAuLi5pbWdQcm9wLFxyXG4gICAgICBbbmFtZV0gOiB2YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICAgIGRpc3BhdGNoKHNldEltZ0tleShudWxsKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5JbnNlcnRJbWcgPSAoKSA9PiB7XHJcbiAgICBvcGVuTW9kYWwobnVsbClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUltZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc3JjLCBhdEVuZCwgaXNGaWxlIH0gPSBpbWdQcm9wXHJcbiAgICBlZGl0b3IuZGlzcGF0Y2hDb21tYW5kKElOU0VSVF9JTUFHRV9DT01NQU5ELCB7XHJcbiAgICAgIHNyYzogc3JjLFxyXG4gICAgICBhbHQ6IG51bGwsXHJcbiAgICAgIGlzRmlsZTogaXNGaWxlLFxyXG4gICAgICBhdEVuZDogYXRFbmRcclxuICAgIH0pXHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1pdGVtLWdyb3VwXCI+XHJcbiAgICAgIDxCdG5Gb3JtYXRUZXh0IGNvbW1hbmQ9e29wZW5JbnNlcnRJbWd9IGl0ZW09e0ltZ30gLz5cclxuICAgICAge1xyXG4gICAgICAgIG1vZGFsID8gPEltZ01vZGFsIGNsb3NlPXtjbG9zZU1vZGFsfSB1cGRhdGU9e2VkaXRJbWd9IGNyZWF0ZT17aW1nID8gZmFsc2UgOiB0cnVlfSBjb21tYW5kPXtjcmVhdGVJbWd9IHByb3BzPXtpbWdQcm9wfS8+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2VydEltZyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICRnZXROZWFyZXN0Tm9kZU9mVHlwZSB9IGZyb20gXCJAbGV4aWNhbC91dGlsc1wiO1xyXG5pbXBvcnQgeyAkZ2V0U2VsZWN0aW9uLCAkaXNSYW5nZVNlbGVjdGlvbiB9IGZyb20gXCJsZXhpY2FsXCI7XHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tIFwiQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gICRpc0xpc3RJdGVtTm9kZSxcclxuICAkaXNMaXN0Tm9kZSxcclxuICBMaXN0Tm9kZSxcclxuICBJTlNFUlRfT1JERVJFRF9MSVNUX0NPTU1BTkQsXHJcbiAgSU5TRVJUX1VOT1JERVJFRF9MSVNUX0NPTU1BTkQsXHJcbn0gZnJvbSBcIkBsZXhpY2FsL2xpc3RcIjtcclxuaW1wb3J0IEJ0bkZvcm1hdFRleHQgZnJvbSBcIi4vaXRlbXMvQnRuRm9ybWF0VGV4dFwiO1xyXG5pbXBvcnQgeyBCdWxsZXRlZExpc3QsIE51bWJlcmVkTGlzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yXCI7XHJcblxyXG5jb25zdCBMaXN0VHlwZSA9ICgpID0+IHtcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKTtcclxuICBjb25zdCBbYnRuU3RhdGVzLCBzZXRCdG5TdGF0ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgdWw6IGZhbHNlLFxyXG4gICAgb2w6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVCdG5TdGF0ZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJldlN0YXRlID0geyAuLi5idG5TdGF0ZXMgfTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9ICRnZXRTZWxlY3Rpb24oKTtcclxuICAgIGlmICgkaXNSYW5nZVNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XHJcbiAgICAgIGNvbnN0IGFuY2hvck5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yLmdldE5vZGUoKTtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGFuY2hvck5vZGUuZ2V0S2V5KCkgPT09IFwicm9vdFwiXHJcbiAgICAgICAgICA/IGFuY2hvck5vZGVcclxuICAgICAgICAgIDogYW5jaG9yTm9kZS5nZXRUb3BMZXZlbEVsZW1lbnRPclRocm93KCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRLZXkgPSBlbGVtZW50LmdldEtleSgpO1xyXG4gICAgICBjb25zdCBlbGVtZW50RE9NID0gZWRpdG9yLmdldEVsZW1lbnRCeUtleShlbGVtZW50S2V5KTtcclxuICAgICAgaWYgKGVsZW1lbnRET00gIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnRMaXN0ID0gJGdldE5lYXJlc3ROb2RlT2ZUeXBlKGFuY2hvck5vZGUsIExpc3ROb2RlKVxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBwYXJlbnRMaXN0ID8gcGFyZW50TGlzdC5nZXRUYWcoKSA6IGVsZW1lbnQuZ2V0VHlwZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGxpc3QgaW4gcHJldlN0YXRlKSB7XHJcbiAgICAgICAgICBwcmV2U3RhdGVbbGlzdF0gPSBsaXN0ID09IHR5cGUgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QnRuU3RhdGVzKHByZXZTdGF0ZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVub3JkZXJlZExpc3QgPSAoKSA9PiB7XHJcbiAgICBlZGl0b3IuZm9jdXMoKTtcclxuICAgIGVkaXRvci5kaXNwYXRjaENvbW1hbmQoSU5TRVJUX1VOT1JERVJFRF9MSVNUX0NPTU1BTkQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9yZGVyZWRMaXN0ID0gKCkgPT4ge1xyXG4gICAgZWRpdG9yLmZvY3VzKCk7XHJcbiAgICBlZGl0b3IuZGlzcGF0Y2hDb21tYW5kKElOU0VSVF9PUkRFUkVEX0xJU1RfQ09NTUFORCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiBlZGl0b3IucmVnaXN0ZXJVcGRhdGVMaXN0ZW5lcigoeyBlZGl0b3JTdGF0ZSB9KSA9PiB7XHJcbiAgICAgIGVkaXRvclN0YXRlLnJlYWQoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJ0blN0YXRlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtlZGl0b3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1pdGVtLWdyb3VwXCI+XHJcbiAgICAgIDxCdG5Gb3JtYXRUZXh0IGFjdGl2ZT17YnRuU3RhdGVzLnVsfSBjb21tYW5kPXt1bm9yZGVyZWRMaXN0fSBuYW1lPVwidW5vcmRlcmVkLWxpc3RcIiBpdGVtPXtCdWxsZXRlZExpc3R9Lz5cclxuICAgICAgPEJ0bkZvcm1hdFRleHQgYWN0aXZlPXtidG5TdGF0ZXMub2x9IGNvbW1hbmQ9e29yZGVyZWRMaXN0fSBuYW1lPVwib3JkZXJlZC1saXN0XCIgaXRlbT17TnVtYmVyZWRMaXN0fS8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMaXN0VHlwZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgJGdldFNlbGVjdGlvbiwgJGlzUmFuZ2VTZWxlY3Rpb24gfSBmcm9tIFwibGV4aWNhbFwiO1xyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgJHBhdGNoU3R5bGVUZXh0LCAkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5IH0gZnJvbSBcIkBsZXhpY2FsL3NlbGVjdGlvblwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vaXRlbXMvRHJvcGRvd25cIjtcclxuaW1wb3J0IHsgRm9ybWF0U2l6ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yXCI7XHJcblxyXG5jb25zdCBTaXplVGV4dEdyb3VwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcm1hdCA9IFtcclxuICAgIHtuYW1lOiAxMiwgdmFsdWU6IFwiMC43NXJlbVwifSxcclxuICAgIHtuYW1lOiAxNCwgdmFsdWU6IFwiMC44NzVyZW1cIn0sXHJcbiAgICB7bmFtZTogMTYsIHZhbHVlOiBudWxsfSxcclxuICAgIHtuYW1lOiAxOCwgdmFsdWU6IFwiMS4xMjVyZW1cIn0sXHJcbiAgICB7bmFtZTogMjAsIHZhbHVlOiBcIjEuMjVyZW1cIn0sXHJcbiAgICB7bmFtZTogMjQsIHZhbHVlOiBcIjEuNXJlbVwifSxcclxuICAgIHtuYW1lOiAzMCwgdmFsdWU6IFwiMS44NzVyZW1cIn0sXHJcbiAgICB7bmFtZTogMzYsIHZhbHVlOiBcIjIuMjVyZW1cIn0sXHJcbiAgXTtcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKTtcclxuICBjb25zdCBbZHJvcERvd25TdGF0ZSwgc2V0RERTdGF0ZXNdID0gdXNlU3RhdGUoMTYpO1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXZlbnRMb2csIHNldEV2ZW50TG9nXSA9IHVzZVN0YXRlKCdibHVyJyk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJ0blN0YXRlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9ICRnZXRTZWxlY3Rpb24oKTtcclxuICAgIGxldCBwcm9wID0gJGdldFNlbGVjdGlvblN0eWxlVmFsdWVGb3JQcm9wZXJ0eShzZWxlY3Rpb24sICdmb250LXNpemUnKVxyXG4gICAgbGV0IHZhbCA9IGZvcm1hdC5maW5kKGYgPT4gZi52YWx1ZSA9PT0gcHJvcCkgfHwgZm9ybWF0WzJdXHJcbiAgICBzZXRERFN0YXRlcyh2YWwubmFtZSk7XHJcbiAgICB2YWwubmFtZSAhPSAnMTYnID8gc2V0QWN0aXZlKHRydWUpIDogc2V0QWN0aXZlKGZhbHNlKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICgkZXZlbnQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgZWRpdG9yLnVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9ICRnZXRTZWxlY3Rpb24oKVxyXG4gICAgICBpZiAoJGlzUmFuZ2VTZWxlY3Rpb24oc2VsZWN0aW9uKSkge1xyXG4gICAgICAgICRwYXRjaFN0eWxlVGV4dChzZWxlY3Rpb24sIHtcclxuICAgICAgICAgICdmb250LXNpemUnIDogdmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlU3RhdGUgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgY2FzZSAnYmx1cic6XHJcbiAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdmb2N1cyc6XHJcbiAgICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICBldmVudExvZyA9PSAnY2xpY2snID8gZWRpdG9yLmZvY3VzKCkgOiBudWxsXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIHNldEV2ZW50TG9nKGUudHlwZSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gZWRpdG9yLnJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIoKHsgZWRpdG9yU3RhdGUgfSkgPT4ge1xyXG4gICAgICBlZGl0b3JTdGF0ZS5yZWFkKCgpID0+IHtcclxuICAgICAgICB1cGRhdGVCdG5TdGF0ZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbZWRpdG9yXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3Rvb2xiYXItaXRlbS1zZWxlY3QnICsgKGFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKX1cclxuICAgICAgdGl0bGU9XCJmb250LXNpemVcIlxyXG4gICAgICBvbkZvY3VzPXt0b2dnbGVTdGF0ZX1cclxuICAgICAgb25CbHVyPXt0b2dnbGVTdGF0ZX1cclxuICAgICAgb25DbGljaz17dG9nZ2xlU3RhdGV9XHJcbiAgICAgIHRhYkluZGV4PXstMX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXNlbGVjdC10aXRsZVwiPntkcm9wRG93blN0YXRlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2wtZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICA8Rm9ybWF0U2l6ZSBjbHM9J2ljb24nLz5cclxuICAgICAgeyB0b2dnbGUgJiYgPERyb3Bkb3duIGl0ZW09e2Zvcm1hdH0gc2VsZWN0PXtoYW5kbGVTZWxlY3R9Lz4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2l6ZVRleHRHcm91cDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IEJ0bkZvcm1hdFRleHQgPSAoe2NvbW1hbmQsIGFjdGl2ZSwgaXRlbSwgbmFtZX0pID0+IHtcclxuICBsZXQgSXRlbSA9IGl0ZW1cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0aXRsZT17bmFtZX1cclxuICAgICAgb25DbGljaz17Y29tbWFuZH1cclxuICAgICAgY2xhc3NOYW1lPXsndG9vbGJhci1pdGVtJyArIChhY3RpdmUgPyAnIGFjdGl2ZScgOiAnJyl9XHJcbiAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgID5cclxuICAgICAgICB7IEl0ZW0gJiYgPEl0ZW0gY2xzPSdpY29uJyAvPiB9XHJcbiAgICA8L2J1dHRvbj4pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnRuRm9ybWF0VGV4dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERyb3Bkb3duID0gKHtpdGVtICwgc2VsZWN0fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0LWRyb3Bkb3duJz5cclxuICAgICAge1xyXG4gICAgICAgIGl0ZW0ubWFwKCh7dmFsdWUsbmFtZX0saSkgPT4gXHJcbiAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBrZXk9e0RhdGUubm93KCkraX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdkcm9wZG93bi1vcHQnIFxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoJGV2ZW50KSA9PiBzZWxlY3QoJGV2ZW50LCB2YWx1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbWFnZUZpbGVJbnB1dCwgVHh0TGFiZWxJbnB1dCwgU3dpdGNoSW5wdXQgfSBmcm9tICcuLi8uLi8uLi9JbnB1dHMvaW5kZXgnXHJcbmltcG9ydCBDbG9zZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlXCJcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IG5vdGlmeSB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5pbXBvcnQgeyBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuXHJcblxyXG5jb25zdCBJbWdNb2RhbCA9ICh7Y2xvc2UsIHVwZGF0ZSwgcHJvcHMsIGNyZWF0ZSwgY29tbWFuZH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBjZmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgeG1sID0gYXhpb3MuY3JlYXRlKHsuLi5jZmcsIGhlYWRlcnM6IHsuLi5jZmcuaGVhZGVycywgJ0NvbnRlbnQtVHlwZScgOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSd9fSlcclxuICBjb25zdCB7IGF0RW5kLCBzcmMsIGlzRmlsZSB9ID0gcHJvcHNcclxuICBjb25zdCBbYnJvd3Nlciwgc2V0QnJvd3Nlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGZpbGVTeXMgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtLmFwcGVuZChcImltYWdlXCIsIGZpbGUpXHJcbiAgICAgIHhtbC5wb3N0KCcvZmlsZXVwbG9hZCcsIGZvcm0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgbXNnOiBcImltYWdlIGltcG9ydMOpZSAhXCJcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICB1cGRhdGUoeyBcclxuICAgICAgICAgICAgbmFtZTogJ3NyYycsXHJcbiAgICAgICAgICAgIHZhbHVlOiBgJHtkYXRhLnBhdGh9LyR7ZGF0YS5uYW1lfWBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1nQnJvd3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QnJvd3Nlcih0cnVlKTtcclxuICAgIHhtbC5nZXQoJy9pbWdicm93c2VyJylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICBzZXRGaWxlcyh7XHJcbiAgICAgICAgICBsaXN0OiBbLi4uZGF0YS5maWxlc10sXHJcbiAgICAgICAgICBwYXRoOiBkYXRhLnBhdGhcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0SW1nID0gKHNyYykgPT4ge1xyXG4gICAgdXBkYXRlKHtcclxuICAgICAgbmFtZTogJ3NyYycsIFxyXG4gICAgICB2YWx1ZTogYCR7ZmlsZXMucGF0aH0vJHtzcmN9YFxyXG4gICAgfSlcclxuICAgIHNldEJyb3dzZXIoZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbGJhci1tb2RhbCc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC10aXRsZWJhcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLXRleHQnID5JbWFnZSA6PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZGFuZ2VyXCIgb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJpY29uXCIgLz48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1jb250ZW50Jz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBicm93c2VyICYmIGlzRmlsZVxyXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtaW1nLWJyb3dzZXInPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZmlsZXMgXHJcbiAgICAgICAgICAgICAgICA/IGZpbGVzLmxpc3QubWFwKChmaWxlLCBpKSA9PiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake0RhdGUubm93KCl9LSR7aX1gfSBjbGFzc05hbWU9J2ltZy1pdGVtJyBvbkNsaWNrPXsoKSA9PiBzZXRJbWcoZmlsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtmaWxlcy5wYXRofS8ke2ZpbGV9YH0gY2xhc3NOYW1lPSd3LWZ1bGwgbS1hdXRvJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3AtMiB1bmRlcmxpbmUnID5UeXBlIGQnaW1hZ2UgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBweS0xIHB4LTInPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydmb250LWJvbGQnICsgKCFpc0ZpbGUgPyAnIGNvbG9yLXNlY29uZGFyeScgOiBcIlwiKX0+RW4gbGlnbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hJbnB1dCBcclxuICAgICAgICAgICAgICAgIGNscz0nc2Vjb25kYXJ5IG5ldXRyYWwnIFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlPXsoKSA9PiB1cGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgIHtuYW1lOidpc0ZpbGUnLCB2YWx1ZTogIWlzRmlsZX1cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpc0ZpbGV9IC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17J2ZvbnQtYm9sZCcgKyAoaXNGaWxlID8gJyBjb2xvci1zZWNvbmRhcnknIDogXCJcIil9PkxvY2FsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMSByZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmMgJiYgc3JjLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICA/IDxsYWJlbCBjbGFzc05hbWU9J2ltZy1uYW1lJyA+PGRpdiBjbGFzc05hbWU9J2JhZGdlJz5JbWFnZSA6PC9kaXY+PGRpdiBjbGFzc05hbWU9J2ltZy1uYW1lLXR4dCc+e2VuZE9mUGF0aChzcmMpLnJlcGxhY2UoL15cXFsuK1xcXS18XlxcL1xcWy4rXFxdLS9nLCcnKX08L2Rpdj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHsgaXNGaWxlIFxyXG4gICAgICAgICAgICAgID8gPEltYWdlRmlsZUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICBjbHM9XCJmbGV4IGdhcC0xIHAtMVwiXHJcbiAgICAgICAgICAgICAgICAgIGFkZENscz0nYnRuIHNlY29uZGFyeSBwLTEgdy03IGdyb3ctMCdcclxuICAgICAgICAgICAgICAgICAgYnJvd3NlPVwiYnRuIHAtMSBncmV5IGdyb3cgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNlbmRGaWxlXCJcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlPXtmaWxlU3lzfVxyXG4gICAgICAgICAgICAgICAgICBpbWdCcm93c2U9e2ltZ0Jyb3dzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgOiA8VHh0TGFiZWxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiaHR0cHM6Ly8uLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRyZXNzZSA6XCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAgICAgICBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeSdcclxuICAgICAgICAgICAgICAgICAgaW5wdXRDbHM9XCJpbnB1dC10eHQgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInVybElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NyY31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGUoe25hbWU6J3NyYycsdmFsdWU6IGUudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAvPiBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwLTIgdW5kZXJsaW5lJyA+UG9zaXRpb24gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBweS0xIHB4LTInPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydmb250LWJvbGQnICsgKCFhdEVuZCA/ICcgY29sb3Itc2Vjb25kYXJ5JyA6IFwiXCIpfT5HYXVjaGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hJbnB1dCBjbHM9J3NlY29uZGFyeSBuZXV0cmFsJyB2YWx1ZT17YXRFbmR9IGNoYW5nZT17KCkgPT4gdXBkYXRlKHtuYW1lOidhdEVuZCcsdmFsdWU6ICFhdEVuZH0pfS8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17J2ZvbnQtYm9sZCcgKyAoYXRFbmQgPyAnIGNvbG9yLXNlY29uZGFyeScgOiBcIlwiKX0+RHJvaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7IGNyZWF0ZSBcclxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncHktMSBweC0yJz48YnV0dG9uIGNsYXNzTmFtZT0nYnRuIHNlY29uZGFyeSB3LWZ1bGwgcm91bmRlZC1sZyBwLTEnIG9uQ2xpY2s9e2NvbW1hbmR9Pkluc8OpcmVyPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZ01vZGFsIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEZWNvcmF0b3JOb2RlIH0gZnJvbSBcImxleGljYWxcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvSW1hZ2VcIjtcclxuaW1wb3J0IHsgZ2V0Qm9vbGVhbkZyb21TdHJpbmcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcFwiO1xyXG5cclxuY29uc3QgY29udmVydEltZ0VsZW1lbnQgPSBkb21Ob2RlID0+IHtcclxuICBpZiAoZG9tTm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHsgYWx0OiBhbHRUZXh0LCBzcmMgfSA9IGRvbU5vZGU7XHJcbiAgICBjb25zdCBhdEVuZCA9IGdldEJvb2xlYW5Gcm9tU3RyaW5nKGRvbU5vZGUuZ2V0QXR0cmlidXRlKFwiYXRfZW5kXCIpKVxyXG4gICAgY29uc3QgaXNGaWxlID0gZ2V0Qm9vbGVhbkZyb21TdHJpbmcoZG9tTm9kZS5nZXRBdHRyaWJ1dGUoXCJzYXZlZFwiKSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vZGU6ICRjcmVhdGVJbWFnZU5vZGUoe1xyXG4gICAgICAgIGFsdFRleHQsXHJcbiAgICAgICAgc3JjLFxyXG4gICAgICAgIGF0RW5kOiBhdEVuZCxcclxuICAgICAgICBpc0ZpbGU6IGlzRmlsZSxcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZU5vZGUgZXh0ZW5kcyBEZWNvcmF0b3JOb2RlIHtcclxuICBfX3NyYztcclxuICBfX2FsdFRleHQ7XHJcbiAgX19hdEVuZDtcclxuICBfX2lzRmlsZTtcclxuXHJcbiAgZXhwb3J0RE9NKCkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuX19zcmMpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwiYWx0XCIsIHRoaXMuX19hbHRUZXh0KTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcImF0X2VuZFwiLCB0aGlzLl9fYXRFbmQpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwic2F2ZWRcIiwgdGhpcy5fX2lzRmlsZSk7XHJcbiAgICByZXR1cm4geyBlbGVtZW50OiBlbCB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGltcG9ydERPTSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltZzogbm9kZSA9PiAoe1xyXG4gICAgICAgIGNvbnZlcnNpb246IGNvbnZlcnRJbWdFbGVtZW50LFxyXG4gICAgICAgIHByaW9yaXR5OiAwLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VHlwZSgpIHtcclxuICAgIHJldHVybiBcImltYWdlXCI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xvbmUobm9kZSkge1xyXG4gICAgcmV0dXJuIG5ldyBJbWFnZU5vZGUoe1xyXG4gICAgICBzcmM6IG5vZGUuX19zcmMsXHJcbiAgICAgIGFsdFRleHQ6IG5vZGUuX19hbHRUZXh0LFxyXG4gICAgICBhdEVuZDogbm9kZS5fX2F0RW5kLFxyXG4gICAgICBrZXk6IG5vZGUuX19rZXksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHNyYywgYWx0VGV4dCwga2V5LCBhdEVuZCwgaXNGaWxlIH0gPSBwcm9wcztcclxuICAgIHN1cGVyKGtleSk7XHJcbiAgICB0aGlzLl9fYWx0VGV4dCA9IGFsdFRleHQgfHwgbnVsbDtcclxuICAgIHRoaXMuX19zcmMgPSBzcmM7XHJcbiAgICB0aGlzLl9fYXRFbmQgPSBhdEVuZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX19pc0ZpbGUgPSBpc0ZpbGUgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBWaWV3XHJcblxyXG4gIGNyZWF0ZURPTShjb25maWcpIHtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gY29uZmlnO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhlbWUuaW1hZ2U7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fX2F0RW5kKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NOYW1lICs9IFwiIGF0LWVuZFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNwYW47XHJcbiAgfVxyXG5cclxuICB1cGRhdGVET00oKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldFNyYygpIHtcclxuICAgIHJldHVybiB0aGlzLl9fc3JjO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWx0VGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9fYWx0VGV4dDtcclxuICB9XHJcblxyXG4gIGdldEF0RW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19hdEVuZDtcclxuICB9XHJcblxyXG4gIHNldEF0RW5kKHNldCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXMuZ2V0V3JpdGFibGUoKTtcclxuICAgIHNlbGYuX19hdEVuZCA9IHNldDtcclxuICB9XHJcblxyXG4gIGRlY29yYXRlKCkge1xyXG4gICAgY29uc3QgeyBfX3NyYywgX19hbHRUZXh0LCBfX2tleSB9ID0gdGhpcztcclxuICAgIHJldHVybiA8SW1hZ2Ugc3JjPXtfX3NyY30gYWx0PXtfX2FsdFRleHR9IGRlY29yYXRlS2V5PXtfX2tleX0gLz47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgJGNyZWF0ZUltYWdlTm9kZSA9ICh7IGFsdFRleHQsIGF0RW5kLCBpc0ZpbGUsIHNyYywga2V5IH0pID0+IHtcclxuICByZXR1cm4gbmV3IEltYWdlTm9kZSh7XHJcbiAgICBhbHRUZXh0LFxyXG4gICAgYXRFbmQsXHJcbiAgICBpc0ZpbGUsXHJcbiAgICBzcmMsXHJcbiAgICBrZXksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gJGlzSW1hZ2VOb2RlKG5vZGUpIHtcclxuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEltYWdlTm9kZTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldEltZ0tleSB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2xleGljYWxTbGljZSdcclxuXHJcbmNvbnN0IEltYWdlID0gKHtzcmMsYWx0VGV4dCxkZWNvcmF0ZUtleX0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3NyY31cclxuICAgICAgYWx0PXthbHRUZXh0fVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRJbWdLZXkoZGVjb3JhdGVLZXkpKX1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgTGV4aWNhbENvbXBvc2VyIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyJztcclxuaW1wb3J0IHsgUmljaFRleHRQbHVnaW4gfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsUmljaFRleHRQbHVnaW4nO1xyXG5pbXBvcnQgeyBMaXN0UGx1Z2luIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbExpc3RQbHVnaW4nXHJcbmltcG9ydCB7IExpc3ROb2RlLCBMaXN0SXRlbU5vZGUgfSBmcm9tICdAbGV4aWNhbC9saXN0J1xyXG5pbXBvcnQgeyBDb250ZW50RWRpdGFibGUgfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29udGVudEVkaXRhYmxlJztcclxuaW1wb3J0IHsgSGlzdG9yeVBsdWdpbiB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxIaXN0b3J5UGx1Z2luJztcclxuaW1wb3J0IExleGljYWxFcnJvckJvdW5kYXJ5IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxFcnJvckJvdW5kYXJ5JztcclxuaW1wb3J0IEZvcm1hdFRleHRHcm91cCBmcm9tICcuL0FjdGlvbnMvRm9ybWF0VGV4dEdyb3VwJztcclxuaW1wb3J0IFNpemVUZXh0R3JvdXAgZnJvbSAnLi9BY3Rpb25zL1NpemVUZXh0R3JvdXAnO1xyXG5pbXBvcnQgTGlzdFR5cGUgZnJvbSAnLi9BY3Rpb25zL0xpc3RUeXBlJztcclxuaW1wb3J0IEFsaWduVGV4dCBmcm9tICcuL0FjdGlvbnMvQWxpZ25UZXh0JztcclxuaW1wb3J0IHsgSW1hZ2VOb2RlIH0gZnJvbSAnLi9Ob2Rlcy9JbWFnZU5vZGUnXHJcbmltcG9ydCBJbnNlcnRJbWcgZnJvbSAnLi9BY3Rpb25zL0luc2VydEltZyc7XHJcbmltcG9ydCB7IEltYWdlUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL0ltYWdlUGx1Z2luJztcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHQnO1xyXG5pbXBvcnQgeyAkZ2VuZXJhdGVOb2Rlc0Zyb21ET00sICRnZW5lcmF0ZUh0bWxGcm9tTm9kZXMgfSBmcm9tICdAbGV4aWNhbC9odG1sJztcclxuaW1wb3J0IHsgJGdldFJvb3QsICRpbnNlcnROb2RlcywgJHNldFNlbGVjdGlvbiB9IGZyb20gJ2xleGljYWwnO1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgcGFyYWdyYXBoOiAncGFyYWdyYXBoJyxcclxuICB0ZXh0OiB7XHJcbiAgICBib2xkOiAndGV4dC1ib2xkJyxcclxuICAgIGl0YWxpYzogJ3RleHQtaXRhbGljJyxcclxuICAgIHN0cmlrZXRocm91Z2g6ICd0ZXh0LXRocm91Z2gnLFxyXG4gICAgdW5kZXJsaW5lOiAndGV4dC11bmRlcmxpbmUnLFxyXG4gICAgdW5kZXJsaW5lU3RyaWtldGhyb3VnaDogJ3RleHQtdW5kZXJsaW5lLXRocm91Z2gnLFxyXG4gICAgc3VwZXJzY3JpcHQ6ICd0ZXh0LXN1cGVyc2NyaXB0JyxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIG9sOiBcImxpc3Qtb3JkZXJlZFwiLFxyXG4gICAgdWw6IFwibGlzdC11bm9yZGVyZWRcIixcclxuICAgIGxpc3RpdGVtOiBcImxpc3QtaXRlbVwiXHJcbiAgfSxcclxuICBpbWFnZTogXCJpbWFnZVwiXHJcbn1cclxuXHJcbmNvbnN0IEluaXRpYWxIdG1sUGx1Z2luID0gKHtkYXRhLHVwZGF0ZX0pID0+IHtcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKVxyXG4gIGNvbnN0IFtodG1sLCBzZXRIdG1sXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgY29uc3QgdXBkYXRlTURhdGEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBodG1sID0gJGdlbmVyYXRlSHRtbEZyb21Ob2RlcyhlZGl0b3IsIG51bGwpXHJcbiAgICB1cGRhdGUoaHRtbClcclxuICB9XHJcblxyXG4gIGVkaXRvci5yZWdpc3RlclVwZGF0ZUxpc3RlbmVyKCh7ZWRpdG9yU3RhdGV9KSA9PiBlZGl0b3JTdGF0ZS5yZWFkKHVwZGF0ZU1EYXRhKSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFxyXG4gICAgIWh0bWxcclxuICAgID8gZWRpdG9yLnVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxyXG4gICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC9odG1sXCIpXHJcblxyXG4gICAgICBjb25zdCBub2RlcyA9ICRnZW5lcmF0ZU5vZGVzRnJvbURPTShlZGl0b3IsIGRvbSlcclxuXHJcbiAgICAgICRnZXRSb290KCkuc2VsZWN0KClcclxuXHJcbiAgICAgICRpbnNlcnROb2Rlcyhub2RlcylcclxuICAgICAgJHNldFNlbGVjdGlvbihudWxsKVxyXG4gICAgICBzZXRIdG1sKHRydWUpXHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIDogbnVsbFxyXG5cclxuICB9LCBbZWRpdG9yXSlcclxufVxyXG4vLyBDYXRjaCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIExleGljYWwgdXBkYXRlcyBhbmQgbG9nIHRoZW1cclxuLy8gb3IgdGhyb3cgdGhlbSBhcyBuZWVkZWQuIElmIHlvdSBkb24ndCB0aHJvdyB0aGVtLCBMZXhpY2FsIHdpbGxcclxuLy8gdHJ5IHRvIHJlY292ZXIgZ3JhY2VmdWxseSB3aXRob3V0IGxvc2luZyB1c2VyIGRhdGEuXHJcbmNvbnN0IG9uRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxufVxyXG5cclxuY29uc3QgRWRpdG9yID0gKHsgZGF0YSwgdXBkYXRlIH0pID0+IHtcclxuICBjb25zdCBpbml0aWFsQ29uZmlnID0ge1xyXG4gICAgbmFtZXNwYWNlOiAnTXlFZGl0b3InLCBcclxuICAgIHRoZW1lLFxyXG4gICAgb25FcnJvcixcclxuICAgIG5vZGVzOiBbXHJcbiAgICAgIExpc3ROb2RlLFxyXG4gICAgICBMaXN0SXRlbU5vZGUsXHJcbiAgICAgIEltYWdlTm9kZVxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGV4aWNhbENvbXBvc2VyIGluaXRpYWxDb25maWc9e2luaXRpYWxDb25maWd9PlxyXG4gICAgICA8SW5pdGlhbEh0bWxQbHVnaW4gZGF0YT17ZGF0YX0gdXBkYXRlPXt1cGRhdGV9Lz5cclxuICAgICAgPExpc3RQbHVnaW4gLz5cclxuICAgICAgPEhpc3RvcnlQbHVnaW4gLz5cclxuICAgICAgPEltYWdlUGx1Z2luIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWVkaXRvcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rvb2xiYXItZWRpdG9yJz5cclxuICAgICAgICAgIDxGb3JtYXRUZXh0R3JvdXAgLz4gPFNpemVUZXh0R3JvdXAgLz4gPExpc3RUeXBlIC8+XHJcbiAgICAgICAgICA8QWxpZ25UZXh0IC8+IDxJbnNlcnRJbWcgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1lZGl0b3InPlxyXG4gICAgICAgICAgPFJpY2hUZXh0UGx1Z2luXHJcbiAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZT17PENvbnRlbnRFZGl0YWJsZSBjbGFzc05hbWU9J2VkaXRvci10ZXh0Jy8+fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17PGRpdiBjbGFzc05hbWU9J2VkaXRvci1wbGFjZWhvbGRlcic+Q29udGVudS4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgRXJyb3JCb3VuZGFyeT17TGV4aWNhbEVycm9yQm91bmRhcnl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L0xleGljYWxDb21wb3Nlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tIFwiQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dFwiXHJcbmltcG9ydCB7ICR3cmFwTm9kZUluRWxlbWVudCwgbWVyZ2VSZWdpc3RlciB9IGZyb20gXCJAbGV4aWNhbC91dGlsc1wiXHJcbmltcG9ydCB7XHJcbiAgJGNyZWF0ZVBhcmFncmFwaE5vZGUsXHJcbiAgJGluc2VydE5vZGVzLFxyXG4gICRpc1Jvb3RPclNoYWRvd1Jvb3QsXHJcbiAgQ09NTUFORF9QUklPUklUWV9FRElUT1IsXHJcbiAgY3JlYXRlQ29tbWFuZCxcclxufSBmcm9tIFwibGV4aWNhbFwiXHJcblxyXG5pbXBvcnQgeyAkY3JlYXRlSW1hZ2VOb2RlLCBJbWFnZU5vZGUgfSBmcm9tIFwiLi4vTm9kZXMvSW1hZ2VOb2RlXCJcclxuXHJcbmNvbnN0IElOU0VSVF9JTUFHRV9DT01NQU5EID0gY3JlYXRlQ29tbWFuZChcIklOU0VSVF9JTUFHRV9DT01NQU5EXCIpXHJcblxyXG5jb25zdCBJbWFnZVBsdWdpbiA9ICgpID0+IHtcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFlZGl0b3IuaGFzTm9kZXMoW0ltYWdlTm9kZV0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlc1BsdWdpbjogSW1hZ2VOb2RlIG5vdCByZWdpc3RlcmVkIG9uIGVkaXRvclwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXJnZVJlZ2lzdGVyKFxyXG4gICAgICBlZGl0b3IucmVnaXN0ZXJDb21tYW5kKFxyXG4gICAgICAgIElOU0VSVF9JTUFHRV9DT01NQU5ELFxyXG4gICAgICAgIChwYXlsb2FkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbWdOb2RlID0gJGNyZWF0ZUltYWdlTm9kZShwYXlsb2FkKTtcclxuICAgICAgICAgICRpbnNlcnROb2RlcyhbaW1nTm9kZV0pXHJcbiAgICAgICAgICBpZiAoJGlzUm9vdE9yU2hhZG93Um9vdChpbWdOb2RlLmdldFBhcmVudE9yVGhyb3coKSkpIHtcclxuICAgICAgICAgICAgJHdyYXBOb2RlSW5FbGVtZW50KGltZ05vZGUsICRjcmVhdGVQYXJhZ3JhcGhOb2RlKS5zZWxlY3RFbmQoKTtcclxuICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIENPTU1BTkRfUFJJT1JJVFlfRURJVE9SXHJcbiAgICAgIClcclxuICAgIClcclxuICB9LCBbZWRpdG9yXSlcclxuXHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZXhwb3J0IHsgSU5TRVJUX0lNQUdFX0NPTU1BTkQsIEltYWdlUGx1Z2luIH0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0luZm8nXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvV2FybmluZydcclxuaW1wb3J0IERhbmdlciBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGFuZ2VyJ1xyXG5pbXBvcnQgeyBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbXNnLCB0eXBlLCBzdGF0dXMgfSA9IGRhdGFcclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgICdJbmZvJzogPEluZm8gY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1N1Y2Nlc3MnOiA8U3VjY2VzcyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnV2FybmluZyc6IDxXYXJuaW5nIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdEYW5nZXInOiA8RGFuZ2VyIGNscz1cImgtNSB3LTVcIiAvPixcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgJHt0eXBlfSAke3N0YXR1c31gfSBcclxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ3N0YXknfSkpfSBcclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ2Nsb3NlJywgZnVuYzogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMTQwMCl9KSApfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUtaWNvbic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25zW2NhcGl0YWxpemUodHlwZSldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWJ0bic+PGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cImgtNSB3LTVcIiAvPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWNvbnRlbnQnPlxyXG4gICAgICAgIHsgbXNnIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0lucHV0cy9CdXR0b24nXHJcbmltcG9ydCBDb250ZW50TmF2IGZyb20gJy4vQ29udGVudE5hdidcclxuaW1wb3J0IENTUkZJbnB1dCBmcm9tICcuL0NTUkZJbnB1dCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vTmF2TGknXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuL1BhZ2VzQ29udGFpbmVyJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCdcclxuaW1wb3J0IEFjdGlvbnNSb3cgZnJvbSAnLi9BY3Rpb25zUm93J1xyXG5pbXBvcnQgTW9kYWxFZGl0b3IgZnJvbSAnLi9Nb2RhbEVkaXRvcidcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJy4vUmljaFRleHQvJ1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGVudE5hdixcclxuICBDU1JGSW5wdXQsXHJcbiAgTmF2TGksXHJcbiAgUGFnZXNDb250YWluZXIsXHJcbiAgVG9hc3QsXHJcbiAgQWN0aW9uc1JvdyxcclxuICBNb2RhbEVkaXRvcixcclxuICBSaWNoVGV4dFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYbWxIdHRwUmVxdWVzdFwiOiB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWxpbmtMb2FkID8gYWpheC5nZXQoJy9yZXF1ZXN0L3BhZ2UtbGlzdCcpLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TGlua0xvYWQoWy4uLnJlcy5kYXRhLmRhdGFdKVxyXG4gICAgfSkgOiBudWxsXHJcbiAgfSwgW2xpbmtMb2FkXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiLy8gaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBHdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL2d1ZXN0L2luZGV4JztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gXHJcbiAgPFJvdXRlcj5cclxuICAgIDxHdWVzdCAvPlxyXG4gIDwvUm91dGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsIi8vIGltcG9ydCAnLi4vLi4vc3R5bGVzL2FkbWluL2FwcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL0xheW91dFwiXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluL3JlZHV4J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5jb25zdCBNYWluQWRtaW4gPSAoKSA9PlxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPExheW91dC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkbWluIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQWRkID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTI0IDM4cS0uNjUgMC0xLjA3NS0uNDI1LS40MjUtLjQyNS0uNDI1LTEuMDc1di0xMWgtMTFxLS42NSAwLTEuMDc1LS40MjVRMTAgMjQuNjUgMTAgMjRxMC0uNjUuNDI1LTEuMDc1LjQyNS0uNDI1IDEuMDc1LS40MjVoMTF2LTExcTAtLjY1LjQyNS0xLjA3NVEyMy4zNSAxMCAyNCAxMHEuNjUgMCAxLjA3NS40MjUuNDI1LjQyNS40MjUgMS4wNzV2MTFoMTFxLjY1IDAgMS4wNzUuNDI1UTM4IDIzLjM1IDM4IDI0cTAgLjY1LS40MjUgMS4wNzUtLjQyNS40MjUtMS4wNzUuNDI1aC0xMXYxMXEwIC42NS0uNDI1IDEuMDc1UTI0LjY1IDM4IDI0IDM4WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2FsZW5kYXIgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDY1NnEtMTcgMC0yOC41LTExLjVUNDQwIDYxNnEwLTE3IDExLjUtMjguNVQ0ODAgNTc2cTE3IDAgMjguNSAxMS41VDUyMCA2MTZxMCAxNy0xMS41IDI4LjVUNDgwIDY1NlptLTE2MCAwcS0xNyAwLTI4LjUtMTEuNVQyODAgNjE2cTAtMTcgMTEuNS0yOC41VDMyMCA1NzZxMTcgMCAyOC41IDExLjVUMzYwIDYxNnEwIDE3LTExLjUgMjguNVQzMjAgNjU2Wm0zMjAgMHEtMTcgMC0yOC41LTExLjVUNjAwIDYxNnEwLTE3IDExLjUtMjguNVQ2NDAgNTc2cTE3IDAgMjguNSAxMS41VDY4MCA2MTZxMCAxNy0xMS41IDI4LjVUNjQwIDY1NlpNNDgwIDgxNnEtMTcgMC0yOC41LTExLjVUNDQwIDc3NnEwLTE3IDExLjUtMjguNVQ0ODAgNzM2cTE3IDAgMjguNSAxMS41VDUyMCA3NzZxMCAxNy0xMS41IDI4LjVUNDgwIDgxNlptLTE2MCAwcS0xNyAwLTI4LjUtMTEuNVQyODAgNzc2cTAtMTcgMTEuNS0yOC41VDMyMCA3MzZxMTcgMCAyOC41IDExLjVUMzYwIDc3NnEwIDE3LTExLjUgMjguNVQzMjAgODE2Wm0zMjAgMHEtMTcgMC0yOC41LTExLjVUNjAwIDc3NnEwLTE3IDExLjUtMjguNVQ2NDAgNzM2cTE3IDAgMjguNSAxMS41VDY4MCA3NzZxMCAxNy0xMS41IDI4LjVUNjQwIDgxNlpNMTgwIDk3NnEtMjQgMC00Mi0xOHQtMTgtNDJWMjk2cTAtMjQgMTgtNDJ0NDItMThoNjV2LTI4cTAtMTMuNiA5LjItMjIuOCA5LjItOS4yIDIyLjgtOS4yIDE0LjAyNSAwIDIzLjUxMyA5LjJRMzEwIDE5NC40IDMxMCAyMDh2MjhoMzQwdi0yOHEwLTEzLjYgOS4yLTIyLjggOS4yLTkuMiAyMi44LTkuMiAxNC4wMjUgMCAyMy41MTMgOS4yUTcxNSAxOTQuNCA3MTUgMjA4djI4aDY1cTI0IDAgNDIgMTh0MTggNDJ2NjIwcTAgMjQtMTggNDJ0LTQyIDE4SDE4MFptMC02MGg2MDBWNDg2SDE4MHY0MzBabTAtNDkwaDYwMFYyOTZIMTgwdjEzMFptMCAwVjI5NnYxMzBaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENoZWNrZWQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xOC45IDM1LjFxLS4zIDAtLjU1LS4xLS4yNS0uMS0uNS0uMzVMOC44IDI1LjZxLS40NS0uNDUtLjQ1LTEuMSAwLS42NS40NS0xLjEuNDUtLjQ1IDEuMDUtLjQ1LjYgMCAxLjA1LjQ1bDggOCAxOC4xNS0xOC4xNXEuNDUtLjQ1IDEuMDc1LS40NXQxLjA3NS40NXEuNDUuNDUuNDUgMS4wNzVUMzkuMiAxNS40TDE5Ljk1IDM0LjY1cS0uMjUuMjUtLjUuMzUtLjI1LjEtLjU1LjFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2VkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2xvc2UgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjE4IDI3MCA4MjhxLTkgOS0yMSA5dC0yMS05cS05LTktOS0yMXQ5LTIxbDIxMC0yMTAtMjEwLTIxMHEtOS05LTktMjF0OS0yMXE5LTkgMjEtOXQyMSA5bDIxMCAyMTAgMjEwLTIxMHE5LTkgMjEtOXQyMSA5cTkgOSA5IDIxdC05IDIxTDUyMiA1NzZsMjEwIDIxMHE5IDkgOSAyMXQtOSAyMXEtOSA5LTIxIDl0LTIxLTlMNDgwIDYxOFpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERhbmdlciA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTcuNzUgNDJxLS42IDAtMS4xNzUtLjI1LS41NzUtLjI1LS45NzUtLjY1bC04LjctOC43cS0uNC0uNC0uNjUtLjk3NVQ2IDMwLjI1di0xMi41cTAtLjYuMjUtMS4xNzUuMjUtLjU3NS42NS0uOTc1bDguNy04LjdxLjQtLjQuOTc1LS42NVQxNy43NSA2aDEyLjVxLjYgMCAxLjE3NS4yNS41NzUuMjUuOTc1LjY1bDguNyA4LjdxLjQuNC42NS45NzVUNDIgMTcuNzV2MTIuNXEwIC42LS4yNSAxLjE3NS0uMjUuNTc1LS42NS45NzVsLTguNyA4LjdxLS40LjQtLjk3NS42NVQzMC4yNSA0MlpNMjQgMzMuOTVxLjcgMCAxLjIyNS0uNTI1LjUyNS0uNTI1LjUyNS0xLjIyNSAwLS43LS41MjUtMS4yMjVRMjQuNyAzMC40NSAyNCAzMC40NXEtLjcgMC0xLjIyNS41MjUtLjUyNS41MjUtLjUyNSAxLjIyNSAwIC43LjUyNSAxLjIyNS41MjUuNTI1IDEuMjI1LjUyNVptMC03LjJxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTUuMXEwLS42NS0uNDI1LTEuMDc1UTI0LjY1IDEzLjYgMjQgMTMuNnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2MTAuMTVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wk0xNy43NSAzOWgxMi41TDM5IDMwLjI1di0xMi41TDMwLjI1IDloLTEyLjVMOSAxNy43NXYxMi41Wk0yNCAyNFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhbmdlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERlbGV0ZSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTMuMDUgNDJxLTEuMiAwLTIuMS0uOS0uOS0uOS0uOS0yLjFWMTAuNUg5LjVxLS42NSAwLTEuMDc1LS40MjVROCA5LjY1IDggOXEwLS42NS40MjUtMS4wNzVROC44NSA3LjUgOS41IDcuNWg3LjlxMC0uNjUuNDI1LTEuMDc1UTE4LjI1IDYgMTguOSA2aDEwLjJxLjY1IDAgMS4wNzUuNDI1LjQyNS40MjUuNDI1IDEuMDc1aDcuOXEuNjUgMCAxLjA3NS40MjVRNDAgOC4zNSA0MCA5cTAgLjY1LS40MjUgMS4wNzUtLjQyNS40MjUtMS4wNzUuNDI1aC0uNTVWMzlxMCAxLjItLjkgMi4xLS45LjktMi4xLjlabTAtMzEuNVYzOWgyMS45VjEwLjVabTUuMyAyMi43cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE2LjI1cTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzVabTguMyAwcTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE2LjI1cTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzVabS0xMy42LTIyLjdWMzkgMTAuNVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEVkaXQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTkgMzloMi4ybDIyLjE1LTIyLjE1LTIuMi0yLjJMOSAzNi44Wm0zMC43LTI0LjMtNi40LTYuNCAyLjEtMi4xcS44NS0uODUgMi4xMjUtLjgyNSAxLjI3NS4wMjUgMi4xMjUuODc1TDQxLjggOC40cS44NS44NS44NSAyLjF0LS44NSAyLjFaTTcuNSA0MnEtLjY1IDAtMS4wNzUtLjQyNVE2IDQxLjE1IDYgNDAuNXYtNC4zcTAtLjMuMS0uNTUuMS0uMjUuMzUtLjVMMzEuMiAxMC40bDYuNCA2LjQtMjQuNzUgMjQuNzVxLS4yNS4yNS0uNS4zNS0uMjUuMS0uNTUuMVptMjQuNzUtMjYuMjUtMS4xLTEuMSAyLjIgMi4yWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEV4cGFuZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDcxMSAyNDAgNDcxbDQzLTQzIDE5NyAxOTggMTk3LTE5NyA0MyA0My0yNDAgMjM5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRmlsdGVyID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDQwIDg5NnEtMTcgMC0yOC41LTExLjVUNDAwIDg1NlY2MTZMMTYxIDMxMXEtMTQtMTctNC0zNnQzMS0xOWg1ODRxMjEgMCAzMSAxOXQtNCAzNkw1NjAgNjE2djI0MHEwIDE3LTExLjUgMjguNVQ1MjAgODk2aC04MFptNDAtMjc2IDI0MC0zMDRIMjQwbDI0MCAzMDRabTAgMFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZm8gPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0yNC4xNSAzNHEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NXYtOS4wNXEwLS42LS40NS0xLjAyNVEyNC43NSAyMiAyNC4xNSAyMnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2OS4wNXEwIC42LjQ1IDEuMDI1LjQ1LjQyNSAxLjA1LjQyNVpNMjQgMTguM3EuNyAwIDEuMTc1LS40NS40NzUtLjQ1LjQ3NS0xLjE1dC0uNDc1LTEuMlEyNC43IDE1IDI0IDE1cS0uNyAwLTEuMTc1LjUtLjQ3NS41LS40NzUgMS4ydC40NzUgMS4xNXEuNDc1LjQ1IDEuMTc1LjQ1Wk0yNCA0NHEtNC4yNSAwLTcuOS0xLjUyNS0zLjY1LTEuNTI1LTYuMzUtNC4yMjUtMi43LTIuNy00LjIyNS02LjM1UTQgMjguMjUgNCAyNHEwLTQuMiAxLjUyNS03Ljg1UTcuMDUgMTIuNSA5Ljc1IDkuOHEyLjctMi43IDYuMzUtNC4yNVExOS43NSA0IDI0IDRxNC4yIDAgNy44NSAxLjU1UTM1LjUgNy4xIDM4LjIgOS44cTIuNyAyLjcgNC4yNSA2LjM1UTQ0IDE5LjggNDQgMjRxMCA0LjI1LTEuNTUgNy45LTEuNTUgMy42NS00LjI1IDYuMzUtMi43IDIuNy02LjM1IDQuMjI1UTI4LjIgNDQgMjQgNDRabTAtMjBabTAgMTdxNyAwIDEyLTV0NS0xMnEwLTctNS0xMlQyNCA3cS03IDAtMTIgNVQ3IDI0cTAgNyA1IDEydDEyIDVaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKHsgQ2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e0Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC43NSA0Mi41cS0xLjQ1IDAtMi41NS0xLjEtMS4xLTEuMS0xLjEtMi41NVY5LjE1cTAtMS40NSAxLjEtMi41NSAxLjEtMS4xIDIuNTUtMS4xaDE0Ljd2My42NUg4Ljc1djI5LjdoMTQuN3YzLjY1Wm0yNC41LTguNzUtMi43LTIuNjUgNS4zLTUuM2gtMTcuM3YtMy42NWgxNy4ybC01LjMtNS4zIDIuNy0yLjYgOS44IDkuOFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1lbnUgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1My4zMzMgODIzLjQ5M3EtMTYgMC0yNi45MzgtMTAuOTcyLTEwLjkzOS0xMC45NzItMTAuOTM5LTI3LjAyMiAwLTE2LjA0OSAxMC45MzktMjYuOTA0IDEwLjkzOC0xMC44NTUgMjYuOTM4LTEwLjg1NWg2NTMuMzM0cTE2IDAgMjYuOTM4IDEwLjk3MSAxMC45MzkgMTAuOTcyIDEwLjkzOSAyNy4wMjIgMCAxNi4wNS0xMC45MzkgMjYuOTA1LTEwLjkzOCAxMC44NTUtMjYuOTM4IDEwLjg1NUgxNTMuMzMzWm0wLTIwOS42MTZxLTE2IDAtMjYuOTM4LTEwLjk3Mi0xMC45MzktMTAuOTcyLTEwLjkzOS0yNy4wMjIgMC0xNi4wNSAxMC45MzktMjYuOTA1IDEwLjkzOC0xMC44NTUgMjYuOTM4LTEwLjg1NWg2NTMuMzM0cTE2IDAgMjYuOTM4IDEwLjk3MiAxMC45MzkgMTAuOTcyIDEwLjkzOSAyNy4wMjIgMCAxNi4wNS0xMC45MzkgMjYuOTA1LTEwLjkzOCAxMC44NTUtMjYuOTM4IDEwLjg1NUgxNTMuMzMzWm0wLTIwOS42MTdxLTE2IDAtMjYuOTM4LTEwLjk3Mi0xMC45MzktMTAuOTcyLTEwLjkzOS0yNy4wMjEgMC0xNi4wNSAxMC45MzktMjYuOTg1IDEwLjkzOC0xMC45MzQgMjYuOTM4LTEwLjkzNGg2NTMuMzM0cTE2IDAgMjYuOTM4IDExLjA1MSAxMC45MzkgMTEuMDUyIDEwLjkzOSAyNy4xMDIgMCAxNi4wNDktMTAuOTM5IDI2LjkwNC0xMC45MzggMTAuODU1LTI2LjkzOCAxMC44NTVIMTUzLjMzM1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOZXh0ID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+PHBhdGggZD1cIk0zNTQgNzk0cS04LTEwLTguNS0yMnQ4LjUtMjFsMTc2LTE3Ni0xNzctMTc3cS04LTgtNy41LTIxLjVUMzU0IDM1NXExMC0xMCAyMS41LTkuNVQzOTYgMzU1bDE5OSAxOTlxNSA1IDcgMTB0MiAxMXEwIDYtMiAxMXQtNyAxMEwzOTcgNzk0cS05IDktMjEgOC41dC0yMi04LjVaXCIvPjwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFByZXYgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj48cGF0aCBkPVwiTTUzOSA3OTQgMzQxIDU5NnEtNS01LTctMTB0LTItMTFxMC02IDItMTF0Ny0xMGwxOTktMTk5cTktOSAyMS41LTl0MjEuNSA5cTkgOSA4LjUgMjJ0LTkuNSAyMkw0MDYgNTc1bDE3NyAxNzdxOSA5IDkgMjF0LTkgMjFxLTkgOS0yMiA5dC0yMi05WlwiLz48L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdWNjZXNzID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJtMjEuMDUgMjguNTUtNC45LTQuOXEtLjQ1LS40NS0xLjEtLjQ1LS42NSAwLTEuMTUuNS0uNS41LS41IDEuMTUgMCAuNjUuNSAxLjFsNi4xIDYuMXEuNDUuNDUgMS4wNS40NS42IDAgMS4wNS0uNDVsMTItMTJxLjQ1LS40NS40MjUtMS4xLS4wMjUtLjY1LS40NzUtMS4xLS40NS0uNS0xLjEyNS0uNXQtMS4xNzUuNVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcuMjUgMCAxMi4xMjUtNC44NzVUNDEgMjRxMC03LjI1LTQuODc1LTEyLjEyNVQyNCA3cS03LjI1IDAtMTIuMTI1IDQuODc1VDcgMjRxMCA3LjI1IDQuODc1IDEyLjEyNVQyNCA0MVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBXYXJuaW5nID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk00LjYgNDJxLS40NSAwLS43NzUtLjJ0LS41MjUtLjU1cS0uMi0uMzUtLjIyNS0uNzI1LS4wMjUtLjM3NS4yMjUtLjc3NWwxOS40LTMzLjVxLjI1LS40LjU3NS0uNTc1UTIzLjYgNS41IDI0IDUuNXEuNCAwIC43MjUuMTc1LjMyNS4xNzUuNTc1LjU3NWwxOS40IDMzLjVxLjI1LjQuMjI1Ljc3NS0uMDI1LjM3NS0uMjI1LjcyNXQtLjUyNS41NXEtLjMyNS4yLS43NzUuMlptMi42LTNoMzMuNkwyNCAxMFptMTctMi44NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NSAwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNVEyMi43IDM0IDIyLjcgMzQuNjVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0wLTUuNTVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTguMnEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djguMnEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabS0uMi02LjFaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FybmluZyIsImltcG9ydCBBZGQgZnJvbSBcIi4vQWRkXCI7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi9DYWxlbmRhclwiO1xyXG5pbXBvcnQgQ2hlY2tlZCBmcm9tIFwiLi9DaGVja2VkXCI7XHJcbmltcG9ydCBDbG9zZSBmcm9tIFwiLi9DbG9zZVwiO1xyXG5pbXBvcnQgRGFuZ2VyIGZyb20gXCIuL0RhbmdlclwiO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuL0RlbGV0ZVwiO1xyXG5pbXBvcnQgRWRpdCBmcm9tIFwiLi9FZGl0XCI7XHJcbmltcG9ydCBFeHBhbmQgZnJvbSBcIi4vRXhwYW5kXCI7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4vRmlsdGVyXCI7XHJcbmltcG9ydCBJbmZvIGZyb20gXCIuL0luZm9cIjtcclxuaW1wb3J0IExvZ291dCBmcm9tIFwiLi9Mb2dvdXRcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgTmF2TmV4dCBmcm9tIFwiLi9OZXh0XCI7XHJcbmltcG9ydCBOYXZQcmV2IGZyb20gXCIuL1ByZXZcIjtcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSBcIi4vU3VjY2Vzc1wiO1xyXG5pbXBvcnQgV2FybmluZyBmcm9tIFwiLi9XYXJuaW5nXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIEFkZCxcclxuICBDYWxlbmRhcixcclxuICBDaGVja2VkLFxyXG4gIENsb3NlLFxyXG4gIERhbmdlcixcclxuICBEZWxldGUsXHJcbiAgRWRpdCxcclxuICBFeHBhbmQsXHJcbiAgSW5mbyxcclxuICBMb2dvdXQsXHJcbiAgU3VjY2VzcyxcclxuICBXYXJuaW5nLFxyXG4gIE5hdlByZXYsXHJcbiAgTmF2TmV4dCxcclxuICBNZW51LFxyXG4gIEZpbHRlclxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCb2xkID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMzM1IDg1NnEtMjUgMC00Mi41LTE3LjVUMjc1IDc5NlYzNTZxMC0yNSAxNy41LTQyLjVUMzM1IDI5NmgxNjhxNjYgMCAxMTQuNSA0MlQ2NjYgNDQ0cTAgMzgtMjEgNzB0LTU2IDQ5djZxNDMgMTQgNjkuNSA1MHQyNi41IDgxcTAgNjgtNTIuNSAxMTJUNTEwIDg1NkgzMzVabTI2LTc2aDE0NHEzOCAwIDY2LTI1dDI4LTYzcTAtMzctMjgtNjJ0LTY2LTI1SDM2MXYxNzVabTAtMjQ3aDEzNnEzNSAwIDYwLjUtMjN0MjUuNS01OHEwLTM1LTI1LjUtNTguNVQ0OTcgMzcwSDM2MXYxNjNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2xkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnVsbGV0ZWRMaXN0ID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDA3IDg1OHEtMTIuNzUgMC0yMS4zNzUtOC42NzUtOC42MjUtOC42NzYtOC42MjUtMjEuNSAwLTEyLjgyNSA4LjYyNS0yMS4zMjVUNDA3IDc5OGg0MDNxMTIuNzUgMCAyMS4zNzUgOC42NzUgOC42MjUgOC42NzYgOC42MjUgMjEuNSAwIDEyLjgyNS04LjYyNSAyMS4zMjVUODEwIDg1OEg0MDdabTAtMjUycS0xMi43NSAwLTIxLjM3NS04LjY3NS04LjYyNS04LjY3Ni04LjYyNS0yMS41IDAtMTIuODI1IDguNjI1LTIxLjMyNVQ0MDcgNTQ2aDQwM3ExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ4MTAgNjA2SDQwN1ptMC0yNTNxLTEyLjc1IDAtMjEuMzc1LTguNjc1LTguNjI1LTguNjc2LTguNjI1LTIxLjUgMC0xMi44MjUgOC42MjUtMjEuMzI1VDQwNyAyOTNoNDAzcTEyLjc1IDAgMjEuMzc1IDguNjc1IDguNjI1IDguNjc2IDguNjI1IDIxLjUgMCAxMi44MjUtOC42MjUgMjEuMzI1VDgxMCAzNTNINDA3Wk0xODkgODk1cS0yOC4wNSAwLTQ4LjAyNS0xOVExMjEgODU3IDEyMSA4MjguNXQxOS41LTQ4cTE5LjUtMTkuNSA0OC0xOS41dDQ3LjUgMTkuOTc1UTI1NSA4MDAuOTUgMjU1IDgyOXEwIDI3LjIyNS0xOS4zODcgNDYuNjEyUTIxNi4yMjUgODk1IDE4OSA4OTVabTAtMjUycS0yOC4wNSAwLTQ4LjAyNS0xOS42ODFRMTIxIDYwMy42MzggMTIxIDU3NnQxOS45NzUtNDcuMzE5UTE2MC45NSA1MDkgMTg5IDUwOXEyNy4yMjUgMCA0Ni42MTMgMTkuNjgxUTI1NSA1NDguMzYyIDI1NSA1NzZ0LTE5LjM4NyA0Ny4zMTlRMjE2LjIyNSA2NDMgMTg5IDY0M1ptLTEtMjUzcS0yNy42MzcgMC00Ny4zMTktMTkuNjgxUTEyMSAzNTAuNjM4IDEyMSAzMjN0MTkuNjgxLTQ3LjMxOVExNjAuMzYzIDI1NiAxODggMjU2cTI3LjYzNyAwIDQ3LjMxOSAxOS42ODFRMjU1IDI5NS4zNjIgMjU1IDMyM3QtMTkuNjgxIDQ3LjMxOVEyMTUuNjM3IDM5MCAxODggMzkwWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVsbGV0ZWRMaXN0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9ybWF0U2l6ZSA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk02MTkuNTM0IDg3Ny4wNzZxLTE0LjI2NCAwLTIzLjc4My05Ljg0OS05LjUxOS05Ljg0OS05LjUxOS0yMy45MlYzNDIuNDYxSDQxMi42OTNxLTE0LjA3MSAwLTIzLjkyLTkuOTg1LTkuODQ5LTkuOTg1LTkuODQ5LTI0LjI1IDAtMTQuMjY0IDkuODQ5LTIzLjc4MyA5Ljg0OS05LjUxOSAyMy45Mi05LjUxOWg0MTQuNjE0cTE0LjA3MSAwIDIzLjkyIDkuOTg1IDkuODQ5IDkuOTg1IDkuODQ5IDI0LjI1IDAgMTQuMjY0LTkuODQ5IDIzLjc4My05Ljg0OSA5LjUxOS0yMy45MiA5LjUxOUg2NTMuNzY4djUwMC44NDZxMCAxNC4wNzEtOS45ODUgMjMuOTItOS45ODUgOS44NDktMjQuMjQ5IDkuODQ5Wm0tMzYwIDBxLTE0LjI2NCAwLTIzLjc4My05Ljg0OS05LjUxOS05Ljg0OS05LjUxOS0yMy45MlY1NDIuNDYxaC05My41MzlxLTE0LjA3MSAwLTIzLjkyLTkuOTg1LTkuODQ5LTkuOTg1LTkuODQ5LTI0LjI1IDAtMTQuMjY0IDkuODQ5LTIzLjc4MyA5Ljg0OS05LjUxOSAyMy45Mi05LjUxOWgyNTQuNjE0cTE0LjA3MSAwIDIzLjkyIDkuOTg1IDkuODQ5IDkuOTg1IDkuODQ5IDI0LjI1IDAgMTQuMjY0LTkuODQ5IDIzLjc4My05Ljg0OSA5LjUxOS0yMy45MiA5LjUxOWgtOTMuNTM5djMwMC44NDZxMCAxNC4wNzEtOS45ODUgMjMuOTItOS45ODUgOS44NDktMjQuMjQ5IDkuODQ5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0U2l6ZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEltZyA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE4MCA5MzZxLTI0IDAtNDItMTh0LTE4LTQyVjI3NnEwLTI0IDE4LTQydDQyLTE4aDYwMHEyNCAwIDQyIDE4dDE4IDQydjYwMHEwIDI0LTE4IDQydC00MiAxOEgxODBabTAtNjBoNjAwVjI3NkgxODB2NjAwWm01Ni05N2g0ODlMNTc4IDU4MyA0NDYgNzU0bC05My0xMjctMTE3IDE1MlptLTU2IDk3VjI3NnY2MDBaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJdGFsaWMgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0yNjIuMDc3IDg0MS42MTRxLTExLjc1NCAwLTIwLjMtOC40MDQtOC41NDYtOC40MDMtOC41NDYtMjAuNjE0IDAtMTEuODI3IDguNTQ2LTIwLjI1IDguNTQ2LTguNDIyIDIwLjMtOC40MjJoMTA0Ljc3TDUxMC40NjMgMzYzSDM4Ny4yMzFxLTExLjc1MyAwLTIwLjI5OS04LjU5Ny04LjU0Ni04LjU5Ni04LjU0Ni0yMC40MjIgMC0xMi4yMTEgOC41NDYtMjAuNDQyIDguNTQ2LTguMjMgMjAuMjk5LTguMjNoMjkzLjg0NnExMi4xMzggMCAyMC40OTIgOC40MDQgOC4zNTMgOC40MDQgOC4zNTMgMjAuNjE1IDAgMTEuODI2LTguMzUzIDIwLjI0OVE2OTMuMjE1IDM2MyA2ODEuMDc3IDM2M0g1NzMuOTk5TDQzMC43NjggNzgzLjkyNGgxMjUuMTU0cTEyLjEzOSAwIDIwLjQ5MiA4LjU5NiA4LjM1NCA4LjU5NiA4LjM1NCAyMC40MjIgMCAxMi4yMTEtOC4zNTQgMjAuNDQyLTguMzUzIDguMjMtMjAuNDkyIDguMjNIMjYyLjA3N1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0YWxpYyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE51bWJlcmVkTGlzdCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTYzLjg0NyA5NTUuOTk5cS0xMC4zMzMgMC0xNy4wODktNi43NTItNi43NTctNi43NTEtNi43NTctMTcuMDc2IDAtMTAuMzI2IDYuNzU3LTE3LjA5NSA2Ljc1Ni02Ljc2OSAxNy4wODktNi43NjloNzYuMTU0di00Mi4zMDhoLTM2LjE1NHEtMTAuMzMzIDAtMTcuMDg5LTYuNzUyLTYuNzU3LTYuNzUxLTYuNzU3LTE3LjA3NiAwLTEwLjMyNiA2Ljc1Ny0xNy4wOTUgNi43NTYtNi43NjkgMTcuMDg5LTYuNzY5aDM2LjE1NHYtNDIuMzA4aC03Ni4xNTRxLTEwLjMzMyAwLTE3LjA4OS02Ljc1Mi02Ljc1Ny02Ljc1MS02Ljc1Ny0xNy4wNzYgMC0xMC4zMjYgNi43NTctMTcuMDk1IDYuNzU2LTYuNzY5IDE3LjA4OS02Ljc2OWg5MHExNC4zODUgMCAyNC4xMTUgOS43MzEgOS43MzEgOS43MyA5LjczMSAyNC4xMTV2NDcuNjkzcTAgMTQuMzg0LTkuNzMxIDI0LjExNS05LjczIDkuNzMtMjQuMTE1IDkuNzMgMTQuMzg1IDAgMjQuMTE1IDkuNzMxIDkuNzMxIDkuNzMxIDkuNzMxIDI0LjExNXY0NC42MTZxMCAxNC4zODQtOS43MzEgMjQuMTE1LTkuNzMgOS43MzEtMjQuMTE1IDkuNzMxaC05MFptLTEuNjE1LTI2Ni4xNTNxLTguNjE1IDAtMTUuNDIzLTYuODA4dC02LjgwOC0xNS40MjNWNTg2cTAtMTQuMzg0IDkuNzMxLTI0LjExNSA5LjczMS05LjczMSAyNC4xMTUtOS43MzFoNjYuMTU0di00Mi4zMDhoLTc2LjE1NHEtMTAuMzMzIDAtMTcuMDg5LTYuNzUyLTYuNzU3LTYuNzUxLTYuNzU3LTE3LjA3NnQ2Ljc1Ny0xNy4wOTVxNi43NTYtNi43NjkgMTcuMDg5LTYuNzY5aDkwcTE0LjM4NSAwIDI0LjExNSA5LjczMSA5LjczMSA5LjczMSA5LjczMSAyNC4xMTV2NzBxMCAxNC4zODQtOS43MzEgMjQuMTE1LTkuNzMgOS43MzEtMjQuMTE1IDkuNzMxaC02Ni4xNTR2NDIuMzA4aDc2LjE1NHExMC4zMzMgMCAxNy4wOSA2Ljc1MiA2Ljc1NiA2Ljc1MSA2Ljc1NiAxNy4wNzZ0LTYuNzU2IDE3LjA5NXEtNi43NTcgNi43NjktMTcuMDkgNi43NjlIMTYyLjIzMlptNjEuNjMzLTI2Ni4xNTNxLTEwLjMyNSAwLTE3LjA5NC02Ljc1Ni02Ljc3LTYuNzU3LTYuNzctMTcuMDlWMjQzLjY5M2gtMzYuMTU0cS0xMC4zMzMgMC0xNy4wODktNi43NTEtNi43NTctNi43NTItNi43NTctMTcuMDc3IDAtMTAuMzI1IDYuNzU3LTE3LjA5NCA2Ljc1Ni02Ljc3IDE3LjA4OS02Ljc3aDYyLjYxNXE4LjQ2MiAwIDE0Ljg0NiA2LjM4NSA2LjM4NSA2LjM4NSA2LjM4NSAxNC44NDZ2MTgyLjYxNXEwIDEwLjMzMy02Ljc1MSAxNy4wOS02Ljc1MiA2Ljc1Ni0xNy4wNzcgNi43NTZabTE3Ny44MjggNDE1LjYxNHEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoMzk1LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEg0MDEuNjkzWm0wLTI0Mi4yMzFxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDM5NS42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRINDAxLjY5M1ptMC0yNDIuMjNxLTkuNjQ1IDAtMTYuMTY4LTYuNTc5LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMiAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyMy02LjU3NyAxNi4xNjgtNi41NzdoMzk1LjYxNHE5LjY0NCAwIDE2LjE2OCA2Ljc2NiA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDcgMCA5LjU0Mi02LjUyNCAxNS45MjYtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDQwMS42OTNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJlZExpc3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdHJpa2UgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMTAgNjQ2cS0xMi43NSAwLTIxLjM3NS04LjY3NVE4MCA2MjguNjQ5IDgwIDYxNS44MjUgODAgNjAzIDg4LjYyNSA1OTQuNVQxMTAgNTg2aDc0MHExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ4NTAgNjQ2SDExMFptMzIwLTEyMFYzNTZIMjUwcS0yMC44MzMgMC0zNS40MTctMTQuNjE4UTIwMCAzMjYuNzY1IDIwMCAzMDUuODgyIDIwMCAyODUgMjE0LjU4MyAyNzAuNSAyMjkuMTY3IDI1NiAyNTAgMjU2aDQ2MHEyMC44MzMgMCAzNS40MTcgMTQuNjE4UTc2MCAyODUuMjM1IDc2MCAzMDYuMTE4IDc2MCAzMjcgNzQ1LjQxNyAzNDEuNSA3MzAuODMzIDM1NiA3MTAgMzU2SDUzMHYxNzBINDMwWm00OS44ODIgMzcwUTQ1OSA4OTYgNDQ0LjUgODgxLjQxNyA0MzAgODY2LjgzMyA0MzAgODQ2VjcwNmgxMDB2MTQwcTAgMjAuODMzLTE0LjYxOCAzNS40MTdRNTAwLjc2NSA4OTYgNDc5Ljg4MiA4OTZaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJpa2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdXBlclNjcmlwdCA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTgwMCA0NTZxLTEzIDAtMjEuNS04LjVUNzcwIDQyNnYtNTVxMC0xNCA4LTIydDIyLThoOTB2LTU1SDc4NXEtNiAwLTEwLjUtNC41VDc3MCAyNzFxMC02IDQuNS0xMC41VDc4NSAyNTZoMTA1cTE0IDAgMjIgOHQ4IDIydjU1cTAgMTQtOCAyMnQtMjIgOGgtOTB2NTVoMTA1cTYgMCAxMC41IDQuNVQ5MjAgNDQxcTAgNi00LjUgMTAuNVQ5MDUgNDU2SDgwMFpNMzAwIDg5NnEtMjEgMC0zMS0xOC41dDEtMzYuNWwxNTAtMjM2LTEzNi0yMTNxLTExLTE4LTEtMzd0MzEtMTlxOSAwIDE3LjUgNC41VDM0NSAzNTNsMTI0IDE5NiAxMjQtMTk2cTUtOCAxMy41LTEyLjVUNjI0IDMzNnEyMiAwIDMxLjUgMTl0LTEuNSAzN0w1MTggNjA1bDE1MCAyMzZxMTEgMTggMSAzNi41VDYzOCA4OTZxLTkgMC0xNy41LTQuNVQ2MDcgODc5TDQ2OSA2NjIgMzMxIDg3OXEtNSA4LTEzLjUgMTIuNVQzMDAgODk2WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VwZXJTY3JpcHQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUeHRDZW50ZXIgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1Mi42OTMgOTI1Ljk5OXEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWm0xNjIuODQ2LTE2My44NDZxLTkuNjQ0IDAtMTYuMTY4LTYuNTc4LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMyAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyNC02LjU3NiAxNi4xNjgtNi41NzZoMzI5LjUzOHE5LjY0NCAwIDE2LjE2OCA2Ljc2NSA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDggMCA5LjU0MS02LjUyNCAxNS45MjYtNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDMxNS41MzlaTTE1Mi42OTMgNTk4LjY5MnEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4MS02LjUyNC0xNi4zMDh0Ni41MjQtMTYuMTExcTYuNTIzLTYuMzg1IDE2LjE2OC02LjM4NWg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41ODEgNi41MjQgMTYuMzA4dC02LjUyNCAxNi4xMTFxLTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgxNTIuNjkzWm0xNjIuODQ2LTE2My44NDZxLTkuNjQ0IDAtMTYuMTY4LTYuNTc5LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMiAwLTkuMzQ5IDYuNTI0LTE1LjkyNnQxNi4xNjgtNi41NzdoMzI5LjUzOHE5LjY0NCAwIDE2LjE2OCA2Ljc2NiA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDcgMCA5LjU0Mi02LjUyNCAxNS45MjYtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDMxNS41MzlaTTE1Mi42OTMgMjcxLjM4NHEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0Q2VudGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVHh0SnVzdGlmeSA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1Mi42OTMgOTI1Ljk5OXEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWm0wLTE2My44NDZxLTkuNjQ1IDAtMTYuMTY4LTYuNTc4LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMyAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyMy02LjU3NiAxNi4xNjgtNi41NzZoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2Ljc2NSA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDggMCA5LjU0MS02LjUyNCAxNS45MjYtNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNabTAtMTYzLjQ2MXEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4MS02LjUyNC0xNi4zMDh0Ni41MjQtMTYuMTExcTYuNTIzLTYuMzg1IDE2LjE2OC02LjM4NWg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41ODEgNi41MjQgMTYuMzA4dC02LjUyNCAxNi4xMTFxLTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgxNTIuNjkzWm0wLTE2My44NDZxLTkuNjQ1IDAtMTYuMTY4LTYuNTc5LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMiAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyMy02LjU3NyAxNi4xNjgtNi41NzdoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2Ljc2NiA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDcgMCA5LjU0Mi02LjUyNCAxNS45MjYtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDE1Mi42OTNabTAtMTYzLjQ2MnEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0SnVzdGlmeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFR4dExlZnQgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk0xNTIuNjkzIDc2Mi4xNTNxLTkuNjQ1IDAtMTYuMTY4LTYuNTc4LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMyAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyMy02LjU3NiAxNi4xNjgtNi41NzZoNDA4LjkyMnE5LjY0NCAwIDE2LjE2OCA2Ljc2NSA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDggMCA5LjU0MS02LjUyNCAxNS45MjYtNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNabTAtMzI3LjMwN3EtOS42NDUgMC0xNi4xNjgtNi41NzktNi41MjQtNi41NzgtNi41MjQtMTYuMzAyIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTIzLTYuNTc3IDE2LjE2OC02LjU3N2g0MDguOTIycTkuNjQ0IDAgMTYuMTY4IDYuNzY2IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwNyAwIDkuNTQyLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMTUyLjY5M1ptMCAxNjMuODQ2cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgxLTYuNTI0LTE2LjMwOHQ2LjUyNC0xNi4xMTFxNi41MjMtNi4zODUgMTYuMTY4LTYuMzg1aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4MSA2LjUyNCAxNi4zMDh0LTYuNTI0IDE2LjExMXEtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDE1Mi42OTNabTAgMzI3LjMwN3EtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWm0wLTY1NC42MTVxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dExlZnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUeHRSaWdodCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUyLjY5MyA5MjUuOTk5cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNabTI0Ni42OTItMTYzLjg0NnEtOS42NDQgMC0xNi4xNjgtNi41NzgtNi41MjQtNi41NzgtNi41MjQtMTYuMzAzIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTI0LTYuNTc2IDE2LjE2OC02LjU3Nmg0MDcuOTIycTkuNjQ0IDAgMTYuMTY4IDYuNzY1IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwOCAwIDkuNTQxLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMzk5LjM4NVpNMTUyLjY5MyA1OTguNjkycS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgxLTYuNTI0LTE2LjMwOHQ2LjUyNC0xNi4xMTFxNi41MjMtNi4zODUgMTYuMTY4LTYuMzg1aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4MSA2LjUyNCAxNi4zMDh0LTYuNTI0IDE2LjExMXEtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDE1Mi42OTNabTI0Ni42OTItMTYzLjg0NnEtOS42NDQgMC0xNi4xNjgtNi41NzktNi41MjQtNi41NzgtNi41MjQtMTYuMzAyIDAtOS4zNDkgNi41MjQtMTUuOTI2dDE2LjE2OC02LjU3N2g0MDcuOTIycTkuNjQ0IDAgMTYuMTY4IDYuNzY2IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwNyAwIDkuNTQyLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMzk5LjM4NVpNMTUyLjY5MyAyNzEuMzg0cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRSaWdodCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFVuZGVybGluZSA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTIzMCA5MTZxLTEyLjc1IDAtMjEuMzc1LTguNjc1LTguNjI1LTguNjc2LTguNjI1LTIxLjUgMC0xMi44MjUgOC42MjUtMjEuMzI1VDIzMCA4NTZoNTAwcTEyLjc1IDAgMjEuMzc1IDguNjc1IDguNjI1IDguNjc2IDguNjI1IDIxLjUgMCAxMi44MjUtOC42MjUgMjEuMzI1VDczMCA5MTZIMjMwWm0yNTAtMTQwcS0xMDAgMC0xNTYuNS01OC41VDI2NyA1NTlWMjU3cTAtMTYuODgyIDEyLjUyNy0yOC45NDFRMjkyLjA1NSAyMTYgMzA5LjAyNyAyMTYgMzI2IDIxNiAzMzggMjI4LjA1OVQzNTAgMjU3djMwMnEwIDYzIDM0IDEwMXQ5NiAzOHE2MiAwIDk2LTM4dDM0LTEwMVYyNTdxMC0xNi44ODIgMTIuNTI3LTI4Ljk0MVE2MzUuMDU1IDIxNiA2NTIuMDI3IDIxNiA2NjkgMjE2IDY4MSAyMjguMDU5VDY5MyAyNTd2MzAycTAgMTAwLTU2LjUgMTU4LjVUNDgwIDc3NlpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVuZGVybGluZSIsImltcG9ydCBCb2xkIGZyb20gXCIuL0JvbGRcIjtcclxuaW1wb3J0IEJ1bGxldGVkTGlzdCBmcm9tIFwiLi9CdWxsZXRlZExpc3RcIjtcclxuaW1wb3J0IEZvcm1hdFNpemUgZnJvbSBcIi4vRm9ybWF0U2l6ZVwiO1xyXG5pbXBvcnQgSXRhbGljIGZyb20gXCIuL0l0YWxpY1wiO1xyXG5pbXBvcnQgTnVtYmVyZWRMaXN0IGZyb20gXCIuL051bWJlcmVkTGlzdFwiO1xyXG5pbXBvcnQgU3RyaWtlIGZyb20gXCIuL1N0cmlrZVwiO1xyXG5pbXBvcnQgU3VwZXJTY3JpcHQgZnJvbSBcIi4vU3VwZXJTY3JpcHRcIjtcclxuaW1wb3J0IFR4dExlZnQgZnJvbSBcIi4vVHh0TGVmdFwiO1xyXG5pbXBvcnQgVHh0Q2VudGVyIGZyb20gXCIuL1R4dENlbnRlclwiO1xyXG5pbXBvcnQgVHh0UmlnaHQgZnJvbSBcIi4vVHh0UmlnaHRcIjtcclxuaW1wb3J0IFR4dEp1c3RpZnkgZnJvbSBcIi4vVHh0SnVzdGlmeVwiO1xyXG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gXCIuL1VuZGVybGluZVwiO1xyXG5pbXBvcnQgSW1nIGZyb20gXCIuL0ltZ1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBCb2xkLFxyXG4gIEl0YWxpYyxcclxuICBTdHJpa2UsXHJcbiAgU3VwZXJTY3JpcHQsXHJcbiAgVW5kZXJsaW5lLFxyXG4gIEZvcm1hdFNpemUsXHJcbiAgQnVsbGV0ZWRMaXN0LFxyXG4gIE51bWJlcmVkTGlzdCxcclxuICBUeHRMZWZ0LFxyXG4gIFR4dENlbnRlcixcclxuICBUeHRSaWdodCxcclxuICBUeHRKdXN0aWZ5LFxyXG4gIEltZyxcclxufSIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBjb250cm9sbGVyIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdyZWFjdDpjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdyZWFjdDptb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6dW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIF9kaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicHJlcGFyZUZvclNlbmQiLCJkYXRhIiwicmVzdWx0IiwiayIsInYiLCJPYmplY3QiLCJlbnRyaWVzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwiZXgiLCJnZXRCb29sZWFuRnJvbVN0cmluZyIsInN0ciIsInNldEJhc2VVcmwiLCJleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImxlbmd0aCIsImNsZWFuUGF0aCIsInBhdGgiLCJjYXBpdGFsaXplIiwidHh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiZW5kT2ZQYXRoIiwibGFzdEluZGV4T2YiLCJ1cGRhdGVUaXRsZSIsIm4iLCJkb2N1bWVudCIsInRpdGxlIiwic3RyQ29udGFpbnMiLCJzZWFyY2giLCJyZSIsIlJlZ0V4cCIsInN0ck5vcm1hbGl6ZSIsInRlc3QiLCJsIiwicmVnIiwidyIsImdldFByb3BzQm9vbFN0YXR1cyIsIm9iaiIsInByb3AiLCJib29sU3RhdGUiLCJrZXkiLCJ2YWx1ZSIsImlzT2JqZWN0IiwiYXJlRXF1YWwiLCJvYmoxIiwib2JqMiIsImlzQXJyYXkiLCJpIiwiZW50MSIsImVudDIiLCJpc0RlZmluZWQiLCJ1bmRlZmluZWQiLCJpc0pTT04iLCJqc29uIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0IiwiYXJyYXkiLCJBcnJheSIsInNvcnRBc2MiLCJhIiwiYiIsInNvcnQiLCJzb3J0RGVzIiwiUmVhY3QiLCJDb250ZW50IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJnZXRUb2tlbiIsInRva2VuIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZU5hdmlnYXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlRvYXN0IiwiY2xlYXJEYXRhIiwic2V0VXJsIiwiUGFnZXMiLCJTZXR0aW5ncyIsIkFydGljbGVzIiwiTG9naW4iLCJNZW51IiwibmFtZSIsIlBhZ2UiLCJMYXlvdXQiLCJ1cmwiLCJzdGF0ZSIsImFqYXgiLCJuYXYiLCJkaXNwYXRjaCIsInBhdGhuYW1lIiwibWF0Y2giLCJvbmJlZm9yZXVubG9hZCIsImUiLCJtYXAiLCJ1c2VTdGF0ZSIsIk5hdkxpIiwiTG9nb3V0IiwidXNlTG9jYXRpb24iLCJlbmFibGUiLCJzZXRFbmFibGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTG9nb3V0IiwiUGFnZXNDb250YWluZXIiLCJDb250ZW50TmF2IiwiTW9kYWxFZGl0b3IiLCJwdXNoRGF0YSIsImF4aW9zIiwibm90aWZ5Iiwibm90aWZ5Q2xvc2UiLCJheGlvc1NldCIsImNyZWF0ZSIsInBhcmFtcyIsInBhZ2UiLCJhcnRpY2xlcyIsInBhZ2VzIiwibW9kYWwiLCJzZXRNb2RhbCIsInR5cGUiLCJ3aGVyZSIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInN0YXR1cyIsInJlc3BvbnNlIiwiY2xvc2VNb2RhbCIsInNlbmREYXRhIiwic2VuZEZpZWxkIiwicHV0IiwibXNnIiwidGltZW91dCIsInBvc3QiLCJkZWxldGUiLCJjcmVhdGVBcnRpY2xlIiwidXBkYXRlQXJ0aWNsZSIsImlkIiwiYXJ0aWNsZSIsImZpbmQiLCJjb252ZXJ0IiwiZGF0ZSIsInJlbW92ZUFydGljbGUiLCJoZWFkZXIiLCJ0YWciLCJkcmF3IiwiY29sU2l6ZSIsImxpc3QiLCJwdWJsaXNoZWQiLCJpc2R5bmFtaWMiLCJwdWJsaXNoYmVnaW4iLCJwdWJsaXNoZW5kIiwiY29udGVudCIsIkJ1dHRvbiIsIlR4dExhYmVsSW5wdXQiLCJYTUxTZXQiLCJsaWZldGltZSIsIm5vdGlmaWNhdGlvbiIsImxpZmUiLCJzZXRTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJfdG9rZW4iLCJpc0Nvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImJsdXJUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjbGVhclRpbWVvdXQiLCJuYXRpdmVFdmVudCIsInN1Ym1pdHRlciIsImJsdXIiLCJuYXZVUkwiLCJzbWFsbCIsImVycm9yIiwiY3JlYXRlUGFnZSIsInVwZGF0ZVBhZ2UiLCJuRGF0YSIsInZhbHVlcyIsInAiLCJyZW1vdmVQYWdlIiwiU2VsZWN0b3IiLCJzZXR0aW5ncyIsImNoYW5nZSIsInNldENoYW5nZSIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImNoYW5nZU5hbWUiLCJzZXRMYW5kaW5nIiwiTGFuZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVTZXR0aW5ncyIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJzdG9yZSIsImNyZWF0ZVNsaWNlIiwiYWpheFNsaWNlIiwiYmFzZVVybCIsImJhc2VVUkwiLCJoZWFkZXJzIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJsZXhpY2FsU2xpY2UiLCJub3RpZmljYXRpb25TbGljZSIsImltZ0tleSIsInNldEltZ0tleSIsIm5vdGlmeUtlZXAiLCJldmVudCIsImZ1bmMiLCJjb25maWd1cmVTdG9yZSIsImxleGljYWwiLCJEZWxldGUiLCJFZGl0IiwiQWN0aW9uc1JvdyIsInVwZGF0ZSIsIkNTUkZJbnB1dCIsIk51bWJlcklucHV0IiwiQ2hlY2tib3giLCJTd2l0Y2hJbnB1dCIsIkZpbHRlciIsIlN1Y2Nlc3MiLCJDbG9zZSIsInVwZGF0ZVNlYXJjaCIsImFqYXhEYXRhIiwibmF2U2VhcmNoIiwic2V0TmF2U2VhcmNoIiwic0ZpZWxkcyIsImgiLCJhY3RpdmUiLCJlbCIsImZpbHRlcmVkIiwic2V0VmlldyIsInNldCIsInNwbGl0IiwiTnVtYmVyIiwic2VhcmNoSGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1cGRhdGVBcnJheUZpbHRlciIsImJhc2ljUmVuZGVyIiwiZmlsdGVyUmVuZGVyIiwic2VhcmNoRmlsdGVyIiwiZmlsdGVyIiwidG9nZ2xlRmlsdGVyIiwiY2hlY2tlZCIsIklucHV0IiwiYnRuQ2xzIiwiZGl2Q2xzIiwiY2xpY2siLCJDaGVja2VkIiwiY2xzIiwiQ2FsZW5kYXIiLCJOYXZQcmV2IiwiTmF2TmV4dCIsIkRhdGVQaWNrZXIiLCJzZXRIb3VycyIsImN1cnJWYWwiLCJkYXkiLCJnZXREYXkiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5cyIsImRyYXdEYXRlIiwid2Vla2RheSIsInJlZiIsInNldFJlZiIsImRhdGVTdGF0ZSIsInNldERhdGVTdGF0ZSIsImdldFRpbWUiLCJvcGVuIiwic2V0T3BlbiIsImNoYW5nZURhdGUiLCJuRGF0ZSIsInNldERheXMiLCJjb3VudCIsIm91dFB1dCIsImRpc3BsYXlEYXRlIiwicHVzaCIsInNldE1vbnRoIiwic2V0WWVhciIsInNldEZ1bGxZZWFyIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZCIsIk1hdGgiLCJyYW5kb20iLCJJbWFnZUZpbGVJbnB1dCIsImFkZENscyIsImJyb3dzZSIsImltZ0Jyb3dzZSIsImlucENscyIsIkV4cGFuZCIsImljb25DbHMiLCJzb3J0UHJvcCIsImxhc3RFdmVudCIsInNldExhc3RFdmVudCIsImxhbmRpbmciLCJhdmFpYmxlIiwidG9nZ2xlU2VsZWN0IiwiJGVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiY2hhbmdlVmFsdWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDbHMiLCJsYWJlbENscyIsIm9uQ2hhbmdlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVGb2N1cyIsIlJpY2hUZXh0Iiwic2NoZW1hIiwiY2xvc2UiLCJjb21tYW5kIiwibURhdGEiLCJzZXREYXRhIiwiZW1wdHkiLCJwYXIiLCJ2YWwiLCJsYXN0IiwicmVLZXkiLCJOYXZMaW5rIiwidG8iLCJvbkNsaWNrIiwiJGdldFNlbGVjdGlvbiIsIiRpc1JhbmdlU2VsZWN0aW9uIiwiRk9STUFUX0VMRU1FTlRfQ09NTUFORCIsIiRnZXRTZWxlY3Rpb25TdHlsZVZhbHVlRm9yUHJvcGVydHkiLCJ1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IiwiQnRuRm9ybWF0VGV4dCIsIlR4dENlbnRlciIsIlR4dEp1c3RpZnkiLCJUeHRMZWZ0IiwiVHh0UmlnaHQiLCJBbGlnblRleHQiLCJkZWZhdWx0U3RhdGUiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJqdXN0aWZ5IiwiZWRpdG9yIiwiYnRuU3RhdGVzIiwic2V0QnRuU3RhdGVzIiwiaWNvbnMiLCJ1cGRhdGVCdG5TdGF0ZXMiLCJzZWxlY3Rpb24iLCJub2RlIiwiYW5jaG9yIiwiZ2V0Tm9kZSIsImdldFRvcExldmVsRWxlbWVudCIsImdldFR5cGUiLCJnZXRQYXJlbnQiLCJnZXRGb3JtYXRUeXBlIiwicmVnaXN0ZXJVcGRhdGVMaXN0ZW5lciIsImVkaXRvclN0YXRlIiwidGFncyIsInJlYWQiLCJpdGVtc0Rpc3BhdGNoIiwiaXRlbXMiLCJmb2N1cyIsImRpc3BhdGNoQ29tbWFuZCIsIkZPUk1BVF9URVhUX0NPTU1BTkQiLCJCb2xkIiwiSXRhbGljIiwiU3RyaWtlIiwiU3VwZXJTY3JpcHQiLCJVbmRlcmxpbmUiLCJGb3JtYXRUZXh0R3JvdXAiLCJib2xkIiwiaXRhbGljIiwic3VwZXJzY3JpcHQiLCJ1bmRlcmxpbmUiLCJzdHJpa2V0aHJvdWdoIiwicHJldlN0YXRlIiwiZ2V0Tm9kZXMiLCJoYXNGb3JtYXQiLCJJTlNFUlRfSU1BR0VfQ09NTUFORCIsIkltZ01vZGFsIiwiJGdldE5vZGVCeUtleSIsIkltZyIsIkluc2VydEltZyIsImltZ1Byb3AiLCJzZXRJbWdQcm9wIiwiaW1nIiwib3Blbk1vZGFsIiwiZ2V0RWRpdG9yU3RhdGUiLCJzcmMiLCJfX3NyYyIsImlzRmlsZSIsIl9faXNGaWxlIiwiYXRFbmQiLCJfX2F0RW5kIiwiZWRpdEltZyIsImtleXMiLCJnZXRXcml0YWJsZSIsIm9wZW5JbnNlcnRJbWciLCJjcmVhdGVJbWciLCJhbHQiLCIkZ2V0TmVhcmVzdE5vZGVPZlR5cGUiLCIkaXNMaXN0SXRlbU5vZGUiLCIkaXNMaXN0Tm9kZSIsIkxpc3ROb2RlIiwiSU5TRVJUX09SREVSRURfTElTVF9DT01NQU5EIiwiSU5TRVJUX1VOT1JERVJFRF9MSVNUX0NPTU1BTkQiLCJCdWxsZXRlZExpc3QiLCJOdW1iZXJlZExpc3QiLCJMaXN0VHlwZSIsInVsIiwib2wiLCJhbmNob3JOb2RlIiwiZ2V0S2V5IiwiZ2V0VG9wTGV2ZWxFbGVtZW50T3JUaHJvdyIsImVsZW1lbnRLZXkiLCJlbGVtZW50RE9NIiwiZ2V0RWxlbWVudEJ5S2V5IiwicGFyZW50TGlzdCIsImdldFRhZyIsInVub3JkZXJlZExpc3QiLCJvcmRlcmVkTGlzdCIsIiRwYXRjaFN0eWxlVGV4dCIsIkRyb3Bkb3duIiwiRm9ybWF0U2l6ZSIsIlNpemVUZXh0R3JvdXAiLCJmb3JtYXQiLCJkcm9wRG93blN0YXRlIiwic2V0RERTdGF0ZXMiLCJldmVudExvZyIsInNldEV2ZW50TG9nIiwiZiIsImhhbmRsZVNlbGVjdCIsIiRldmVudCIsInRvZ2dsZVN0YXRlIiwiaXRlbSIsIkl0ZW0iLCJzZWxlY3QiLCJub3ciLCJwcm9wcyIsImNmZyIsInhtbCIsImJyb3dzZXIiLCJzZXRCcm93c2VyIiwiZmlsZXMiLCJzZXRGaWxlcyIsImZpbGVTeXMiLCJmaWxlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2V0SW1nIiwiRGVjb3JhdG9yTm9kZSIsIkltYWdlIiwiY29udmVydEltZ0VsZW1lbnQiLCJkb21Ob2RlIiwiSFRNTEltYWdlRWxlbWVudCIsImFsdFRleHQiLCIkY3JlYXRlSW1hZ2VOb2RlIiwiSW1hZ2VOb2RlIiwiX19hbHRUZXh0IiwiZXhwb3J0RE9NIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImltcG9ydERPTSIsImNvbnZlcnNpb24iLCJwcmlvcml0eSIsImNsb25lIiwiX19rZXkiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZURPTSIsImNvbmZpZyIsInNwYW4iLCJ0aGVtZSIsImNsYXNzTmFtZSIsImltYWdlIiwidXBkYXRlRE9NIiwiZ2V0U3JjIiwiZ2V0QWx0VGV4dCIsImdldEF0RW5kIiwic2V0QXRFbmQiLCJzZWxmIiwiZGVjb3JhdGUiLCIkaXNJbWFnZU5vZGUiLCJkZWNvcmF0ZUtleSIsIkxleGljYWxDb21wb3NlciIsIlJpY2hUZXh0UGx1Z2luIiwiTGlzdFBsdWdpbiIsIkxpc3RJdGVtTm9kZSIsIkNvbnRlbnRFZGl0YWJsZSIsIkhpc3RvcnlQbHVnaW4iLCJMZXhpY2FsRXJyb3JCb3VuZGFyeSIsIkltYWdlUGx1Z2luIiwiJGdlbmVyYXRlTm9kZXNGcm9tRE9NIiwiJGdlbmVyYXRlSHRtbEZyb21Ob2RlcyIsIiRnZXRSb290IiwiJGluc2VydE5vZGVzIiwiJHNldFNlbGVjdGlvbiIsInBhcmFncmFwaCIsInRleHQiLCJ1bmRlcmxpbmVTdHJpa2V0aHJvdWdoIiwibGlzdGl0ZW0iLCJJbml0aWFsSHRtbFBsdWdpbiIsImh0bWwiLCJzZXRIdG1sIiwidXBkYXRlTURhdGEiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJkb20iLCJwYXJzZUZyb21TdHJpbmciLCJub2RlcyIsIm9uRXJyb3IiLCJFZGl0b3IiLCJpbml0aWFsQ29uZmlnIiwibmFtZXNwYWNlIiwiJHdyYXBOb2RlSW5FbGVtZW50IiwibWVyZ2VSZWdpc3RlciIsIiRjcmVhdGVQYXJhZ3JhcGhOb2RlIiwiJGlzUm9vdE9yU2hhZG93Um9vdCIsIkNPTU1BTkRfUFJJT1JJVFlfRURJVE9SIiwiY3JlYXRlQ29tbWFuZCIsImhhc05vZGVzIiwiRXJyb3IiLCJyZWdpc3RlckNvbW1hbmQiLCJpbWdOb2RlIiwiZ2V0UGFyZW50T3JUaHJvdyIsInNlbGVjdEVuZCIsIkluZm8iLCJXYXJuaW5nIiwiRGFuZ2VyIiwiaW5kZXgiLCJsaW5rTG9hZCIsInNldExpbmtMb2FkIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkd1ZXN0IiwiTWFpbiIsIlByb3ZpZGVyIiwiTWFpbkFkbWluIiwiQWRkIiwiQ2xzIiwiTmV4dCIsIlByZXYiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwiciIsImZvckVhY2giLCJkZWZhdWx0IiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiY29tcG9uZW50IiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHNWYWx1ZSIsIl9kaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50VmFsdWUiLCJfcmVuZGVyUmVhY3RFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsInJlbmRlciIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9