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
  const [linkLoad, setLinkLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    headers: {
      "XmlHttpRequest": true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !linkLoad ? ajax.get('/page-list').then(res => {
      setLinkLoad([...res.data]);
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
/* harmony import */ var _styles_guest_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/guest/app.scss */ "./assets/styles/guest/app.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_guest_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/guest/index */ "./assets/react/components/guest/index.jsx");





// Index Root Component

const Main = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_guest_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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
/* harmony import */ var _styles_admin_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/admin/app.scss */ "./assets/styles/admin/app.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_admin_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin/Layout */ "./assets/react/components/admin/Layout.jsx");
/* harmony import */ var _components_admin_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin/redux */ "./assets/react/components/admin/redux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






const MainAdmin = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _components_admin_redux__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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


/***/ }),

/***/ "./assets/styles/admin/app.scss":
/*!**************************************!*\
  !*** ./assets/styles/admin/app.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/guest/app.scss":
/*!**************************************!*\
  !*** ./assets/styles/guest/app.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lexical_react_LexicalComposer_js-node_modules_lexical_react_LexicalConte-b97159","assets_styles_admin_app_scss","assets_styles_guest_app_scss"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUV3WCxPQUFPLEVBQUU7SUFBSyxDQUFDLENBQUMsQ0FBQztFQUN6RjtBQUNKO0FBQ0FkLFNBQVMsQ0FBQ3BZLE1BQU0sR0FBRztFQUNmd1gsU0FBUyxFQUFFMkIsTUFBTTtFQUNqQnpJLEtBQUssRUFBRXpjO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFERDs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbGV4aWNhbFNsaWNlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0FjdGlvbnNSb3cuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ1NSRklucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NvbnRlbnROYXYuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvQ2hlY2tib3guanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0RhdGVQaWNrZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0ltYWdlRmlsZUlucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9OdW1iZXJJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvU2VsZWN0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL1N3aXRjaElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9UeHRMYWJlbElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL01vZGFsRWRpdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL05hdkxpLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1BhZ2VzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvQWxpZ25UZXh0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvRm9ybWF0VGV4dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvSW5zZXJ0SW1nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvTGlzdFR5cGUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvQWN0aW9ucy9TaXplVGV4dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvaXRlbXMvQnRuRm9ybWF0VGV4dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL2l0ZW1zL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvaXRlbXMvaW1nTW9kYWwuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvTm9kZXMvSW1hZ2VOb2RlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L05vZGVzL2NvbXBvbmVudHMvSW1hZ2UuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvaW5kZXguanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvcGx1Z2lucy9JbWFnZVBsdWdpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Ub2FzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQWRkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2FsZW5kYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DaGVja2VkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2xvc2UuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9EYW5nZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9EZWxldGUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9FZGl0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRXhwYW5kLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRmlsdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvSW5mby5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL01lbnUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9OZXh0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvUHJldi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9XYXJuaW5nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9Cb2xkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL0J1bGxldGVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9Gb3JtYXRTaXplLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL0ltZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9JdGFsaWMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvTnVtYmVyZWRMaXN0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1N0cmlrZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9TdXBlclNjcmlwdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9UeHRDZW50ZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvVHh0SnVzdGlmeS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9UeHRMZWZ0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1R4dFJpZ2h0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1VuZGVybGluZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2d1ZXN0L2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCIsXG5cdFwiLi9tYWluX2FkbWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gaW1wb3J0ICcuL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIi8vIHByZXBhcmVGb3JTZW5kIHByZXBhcmUgdW5lIGRhdGUgcG91ciBQSFBcclxuY29uc3QgcHJlcGFyZUZvclNlbmQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHt9XHJcbiAgZm9yIChsZXQgW2ssdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuICAgIGlmICh2IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICB2LnNldERhdGUodi5nZXREYXRlKCkrMSlcclxuICAgICAgcmVzdWx0W2tdID0gdi50b0lTT1N0cmluZygpLnJlcGxhY2UoL1R8XFwuWzAtOV0rWiQvZywgKGV4KSA9PiBleCA9PT0gXCJUXCIgPyBcIiBcIiA6IFwiXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHRba10gPSB2XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIHN0cmluZyBib29sZWFuIHRvIGJvb2xlYW5cclxuXHJcbmNvbnN0IGdldEJvb2xlYW5Gcm9tU3RyaW5nID0gKHN0cikgPT4ge1xyXG4gIHN3aXRjaCAoc3RyKSB7XHJcbiAgICBjYXNlIFwidHJ1ZVwiOlxyXG4gICAgY2FzZSBcIlRSVUVcIjpcclxuICAgIGNhc2UgXCIxXCIgfHwgMTpcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbi8vIHVybCBkZSBiYXNlIHBvdXIgZmFjaWxpdGVyIGxhIG5hdmlnYXRpb25cclxuXHJcbmNvbnN0IHNldEJhc2VVcmwgPSAoZXh0ID0gXCJcIikgPT4ge1xyXG4gIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZXh0Lmxlbmd0aCA+IDAgPyBcIi9cIiA6IG51bGx9JHtleHR9YFxyXG59XHJcblxyXG4vLyBuZXR0b2llIGwndXJsIGZvdXJuaVxyXG5cclxuY29uc3QgY2xlYW5QYXRoID0gcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC8kfFxcLyQvLCAnJykucmVwbGFjZSgvXFwvXFwvL2csICcvJylcclxuXHJcbi8vIHByZW1pw6hyZSBsZXR0cmUgZW4gbWFqdXNjdWxlXHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHR4dCkgPT4ge1xyXG4gIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG4vLyBvYnRlbmlyIGwndXJsIHJlbGF0aXZlXHJcblxyXG5jb25zdCBlbmRPZlBhdGggPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJ1xcLycpKVxyXG59XHJcblxyXG4vLyBjaGFuZ2UgbGUgdGl0cmUgZGFucyBsJ29uZ2xldFxyXG5cclxuY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gIG4gPSBuLnJlcGxhY2UoL1xcLy9nLCBcIlwiKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gYE1pbmktQ01TIC0+ICR7KG4ubGVuZ3RoID4gMCA/IGNhcGl0YWxpemUobikgOiBcIlNldHRpbmdzXCIpfWBcclxuICByZXR1cm47XHJcbn1cclxuXHJcbi8vIHRyb3V2ZSB1bmUgZXhwcmVzc2lvbiByw6lndWxpw6hyZVxyXG5cclxuY29uc3Qgc3RyQ29udGFpbnMgPSAoc3RyLCBzZWFyY2gpID0+IHtcclxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKVxyXG4gIHJldHVybiBzdHIuc2VhcmNoKHJlKSA+PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuXHJcbi8vIG5vcm1hbGl6ZSB1biBzdHJpbmcgcG91ciBmaWx0cmVcclxuXHJcbmNvbnN0IHN0ck5vcm1hbGl6ZSA9IChzdHIpID0+IHtcclxuICBjb25zdCB0ZXN0ID0gKGwscmVnKSA9PiBuZXcgUmVnRXhwKHJlZykudGVzdChsKVxyXG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKVxyXG4gICAgLnJlcGxhY2UoL1teYS16XS9nLCAodykgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIHRlc3QodyAsL8OjfMOgfMOhfMOifMOkL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImFcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6h8w6l8w6p8w6svZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DrHzDrXzDrnzDry9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJpXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O1fMOyfMOzfMO0fMO2L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm9cIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7l8w7p8w7t8w7wvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwidVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DvXzDvy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJ5XCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OxL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm5cIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvxZMvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwib2VcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6YvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiYWVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6cvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiY1wiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dny9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJzc1wiXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB3XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIHRyb3V2ZXIgdW5lIHByb3BzIGJvb2zDqWVuICh2cmFpIG91IGZhdXgpIGRhbnMgdW4gb2JqZXQgcmVjdXJzaWZcclxuXHJcbmNvbnN0IGdldFByb3BzQm9vbFN0YXR1cyA9IChvYmosIHByb3AsIGJvb2xTdGF0ZSkgPT4ge1xyXG5cclxuICBpZiAob2JqW3Byb3BdKSB7XHJcbiAgICByZXR1cm4gb2JqW3Byb3BdID09PSBib29sU3RhdGU7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcclxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKGdldFByb3BzQm9vbFN0YXR1cyh2YWx1ZSwgcHJvcCwgYm9vbFN0YXRlKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG4vLyBjb21wYXJlIGRldXggb2JqZXRzIEpTICh0b3V0IHR5cGVzKVxyXG5cclxuY29uc3QgYXJlRXF1YWwgPSAob2JqMSxvYmoyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBvYmoxICE9PSB0eXBlb2Ygb2JqMikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICBpZiAob2JqMS5sZW5ndGggIT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWFyZUVxdWFsKG9iajFbaV0sb2JqMltpXSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikpIHtcclxuICAgIGNvbnN0IGVudDEgPSBPYmplY3QuZW50cmllcyhvYmoxKVxyXG4gICAgY29uc3QgZW50MiA9IE9iamVjdC5lbnRyaWVzKG9iajIpXHJcbiAgICBpZiAoZW50MS5sZW5ndGggIT09IGVudDIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqMSkpIHtcclxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgaXNEZWZpbmVkKG9iajJba2V5XSkpIHtcclxuICAgICAgICBpZiAoIWFyZUVxdWFsKG9iajFba2V5XSxvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gb2JqMSA9PT0gb2JqMlxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCBkw6lmaW5pZVxyXG5cclxuY29uc3QgaXNEZWZpbmVkID0gKG9iaikgPT4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBKU09OIHZhbGlkZVxyXG5cclxuY29uc3QgaXNKU09OID0gKGpzb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgSlNPTi5wYXJzZShqc29uKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIG9iamV0IGRlIHR5cGUgQXJyYXkgSlNcclxuXHJcbmNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4gdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiAhaXNBcnJheShvYmplY3QpXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBUYWJsZWF1eCBcclxuXHJcbmNvbnN0IGlzQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSlcclxufVxyXG5cclxuY29uc3Qgc29ydEFzYyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0IDwgYi5zb3J0ID8gLTEgOiBhLnNvcnQgPiBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5jb25zdCBzb3J0RGVzID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPiBiLnNvcnQgPyAtMSA6IGEuc29ydCA8IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gIHNldEJhc2VVcmwsIFxyXG4gIGNhcGl0YWxpemUsIFxyXG4gIHVwZGF0ZVRpdGxlLCBcclxuICBlbmRPZlBhdGgsIFxyXG4gIHN0ckNvbnRhaW5zLCBcclxuICBjbGVhblBhdGgsIFxyXG4gIGlzSlNPTiwgXHJcbiAgaXNBcnJheSwgXHJcbiAgYXJlRXF1YWwsIFxyXG4gIHNvcnRBc2MsIFxyXG4gIHNvcnREZXMsXHJcbiAgZ2V0UHJvcHNCb29sU3RhdHVzLFxyXG4gIHN0ck5vcm1hbGl6ZSxcclxuICBwcmVwYXJlRm9yU2VuZCxcclxuICBnZXRCb29sZWFuRnJvbVN0cmluZ1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPSdhZG1pbi1mb290ZXInPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay1ncm91cCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstcHJldic+Q3LDqWF0ZXVyIDogPC9kaXY+XHJcbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nbGluaycgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0FyY2thbmljcyc+XHJcbiAgICAgICAgICBHaXRIdWIuXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstZ3JvdXAnPlxyXG4gICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2xpbmsnIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9BcmNrYW5pY3MvbWluaS1jbXMnPlxyXG4gICAgICAgICAgw6AgcHJvcG9zXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdWknXHJcbmltcG9ydCB7IGNsZWFyRGF0YSwgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCB7IFBhZ2VzLCBTZXR0aW5ncywgQXJ0aWNsZXMsIExvZ2luIH0gZnJvbSAnLi9wYWdlcydcclxuXHJcbmNvbnN0IE1lbnUgPSBbXHJcbiAge25hbWU6IFwiUGFyYW1ldHJlc1wiLCBwYXRoOiBcIi9cIiwgUGFnZTogU2V0dGluZ3N9LFxyXG4gIHtuYW1lOiBcIlBhZ2VzXCIsIHBhdGg6IFwiL3BhZ2VzXCIsIFBhZ2U6IFBhZ2VzfSxcclxuICB7bmFtZTogXCJBcnRpY2xlc1wiLCBwYXRoOiBcIi9hcnRpY2xlc1wiLCBQYWdlOiBBcnRpY2xlc30sXHJcbl1cclxuXHJcbmNvbnN0IExheW91dCA9ICgpID0+IHtcclxuICBjb25zdCB1cmwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgudXJsKVxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVybCA9PT0gXCJcIiA/IGRpc3BhdGNoKHNldFVybChcIlwiKSkgOiBudWxsXHJcbiAgICBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXFwvJC8sICcnKSA/IG5hdihjbGVhblBhdGgobG9jYXRpb24ucGF0aG5hbWUpKSA6IHVuZGVmaW5lZFxyXG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKGUpID0+IHtcclxuICAgICAgZGlzcGF0Y2goY2xlYXJEYXRhKCkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJsYXlvdXRcIj5cclxuICAgICAgPFJvdXRlcz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nbWluaS1hZG1pbi9sb2dpbicgZWxlbWVudD17PExvZ2luLz59IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTWVudS5tYXAoKHtwYXRoLFBhZ2V9LGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZSBrZXk9e2l9IHBhdGg9e2BtaW5pLWFkbWluJHtwYXRofWB9IGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIFBhZ2VzPXtNZW51fSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxQYWdlIHVybD17cGF0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgICAgPFRvYXN0Lz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL3VpL05hdkxpJ1xyXG5pbXBvcnQgeyBNZW51LCBMb2dvdXR9IGZyb20gJy4uLy4uL2ljb24vaWNvbi11aS8nXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNsZWFyRGF0YSwgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe1BhZ2VzfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShlbmRPZlBhdGgobG9jYXRpb24ucGF0aG5hbWUpKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEVuYWJsZSh0cnVlKVxyXG4gICAgfSwgNTApXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShuKVxyXG4gICAgZGlzcGF0Y2goY2xlYXJEYXRhKCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J25hdmJhcicgY2xhc3NOYW1lPXshZW5hYmxlID8gJ2ZhZGVPdXRMZWZ0JyA6ICcnfT5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJuYXZiYXItdG9wXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdi10aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPk1pbmktQ01TPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYgbW9iaWxlJz5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfSAgY2xhc3NOYW1lPXsnbmF2LWxpbmsnICsgKHRvZ2dsZSA/IFwiIGFjdGl2ZVwiIDogXCJcIil9PjxNZW51IGNscz1cInN2Zy1pY29uXCIgLz48L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsnbmF2LWl0ZW0tbWVudSBmbGV4IGZsZXgtY29sIGdhcC0yJyArICh0b2dnbGUgPyBcIiB0b2dnbGVcIiA6IFwiXCIpfT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFRvZ2dsZShmYWxzZSk7IHVwZGF0ZVRpdGxlKHBhdGgpOyBkaXNwYXRjaChzZXRVcmwocGF0aCkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay10eHQnPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGk+fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYsIE1vZGFsRWRpdG9yIH0gZnJvbSBcIi4uL3VpXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBwcmVwYXJlRm9yU2VuZCB9IGZyb20gXCIuLi8uLi8uLi9GdW5jdGlvbnMvYXBwXCI7XHJcbmltcG9ydCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2VcIjtcclxuXHJcbi8vIENSVUQgQ29tcGxldCBwb3VyIGxlcyBBcnRpY2xlc1xyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmF4aW9zKTtcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsgLi4uYXhpb3NTZXQsIHBhcmFtczogeyBwYWdlOiBcImFydGljbGVzXCIgfSB9KTtcclxuICBjb25zdCBhcnRpY2xlcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguZGF0YS5hcnRpY2xlcyk7XHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHtcclxuICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICB0eXBlOiBudWxsLFxyXG4gICAgd2hlcmU6IFwiYXJ0aWNsZXNcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXhcclxuICAgICAgLmdldChcIi9yZXF1ZXN0XCIpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcImFydGljbGVzXCIsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIvbWluaS1hZG1pbi9sb2dvdXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBhamF4XHJcbiAgICAgIC5nZXQoXCIvcmVxdWVzdFwiLCB7IC4uLmF4aW9zU2V0LCBwYXJhbXM6IHsgcGFnZTogXCJwYWdlc1wiIH0gfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwicGFnZXNcIiwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShcIi9taW5pLWFkbWluL2xvZ291dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKHsgLi4ubW9kYWwsIGVuYWJsZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuICAvLyBlbnZvaWUgZGVzIGRvbm7DqWVzXHJcbiAgY29uc3Qgc2VuZERhdGEgPSBkYXRhID0+IHtcclxuICAgIGNvbnN0IHsgdHlwZSwgd2hlcmUgfSA9IG1vZGFsO1xyXG4gICAgZGF0YSA9IHR5cGUgIT09IFwiZGVsZXRlXCIgPyBkYXRhID0gcHJlcGFyZUZvclNlbmQoZGF0YSkgOiBkYXRhXHJcbiAgICBjb25zdCBzZW5kRmllbGQgPSB7IHdoZXJlLCBkYXRhOiBkYXRhIH07XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInB1dFwiOlxyXG4gICAgICAgIHJldHVybiBhamF4LnB1dChcIi9yZXF1ZXN0XCIsIHNlbmRGaWVsZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiB3aGVyZSwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgbXNnOiBcImFydGljbGUgbWlzIMOgIGpvdXIhXCIsXHJcbiAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgXCJwb3N0XCI6XHJcbiAgICAgICAgcmV0dXJuIGFqYXgucG9zdChcIi9yZXF1ZXN0XCIsIHNlbmRGaWVsZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiB3aGVyZSwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgbXNnOiBcImFydGljbGUgZW5yZWdpc3Ryw6khXCIsXHJcbiAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGFqYXguZGVsZXRlKFwiL3JlcXVlc3RcIiwge2RhdGE6IHsuLi5zZW5kRmllbGR9fSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IHdoZXJlLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgIG1zZzogXCJhcnRpY2xlIHN1cHByaW3DqSFcIixcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIG5vdXZlbCBhcnRpY2xlXHJcbiAgY29uc3QgY3JlYXRlQXJ0aWNsZSA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKHtcclxuICAgICAgLi4ubW9kYWwsXHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgdGl0bGU6IFwiQ3LDqWVyXCIsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gb3V2cmUgbCfDqWRpdGlvbiBkJ2FydGljbGVzXHJcbiAgY29uc3QgdXBkYXRlQXJ0aWNsZSA9IGlkID0+IHtcclxuICAgIGNvbnN0IGFydGljbGUgPSB7IC4uLmFydGljbGVzLmZpbmQoYSA9PiBhLmlkID09IGlkKSB9O1xyXG4gICAgY29uc3QgY29udmVydCA9IHt9O1xyXG4gICAgZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGFydGljbGUpKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmICh2KSB7XHJcbiAgICAgICAgICBjb252ZXJ0W2tdID0gbmV3IERhdGUoRGF0ZS5wYXJzZSh2LmRhdGUucmVwbGFjZSgvXFwuWzAtOV0rJC9nLCBcIlwiKSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb252ZXJ0W2tdID0gbmV3IERhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udmVydFtrXSA9IHY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldE1vZGFsKHtcclxuICAgICAgLi4ubW9kYWwsXHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgdGl0bGU6IFwiTW9kaWZpZXJcIixcclxuICAgICAgZGF0YTogY29udmVydCxcclxuICAgICAgdHlwZTogXCJwdXRcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHN1cHByaW1lIGxlcyBhcnRpY2xlc1xyXG4gIGNvbnN0IHJlbW92ZUFydGljbGUgPSBpZCA9PiB7XHJcbiAgICBtb2RhbC50eXBlID0gXCJkZWxldGVcIlxyXG4gICAgc2VuZERhdGEoaWQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAgeyB0YWc6IFwidGl0bGVcIiwgbmFtZTogXCJ0aXRyZVwiLCBkcmF3OiBcInN0cmluZ1wiLCBjb2xTaXplOiAyIH0sXHJcbiAgICB7IHRhZzogXCJzb3J0XCIsIG5hbWU6IFwib3JkcmVcIiwgZHJhdzogXCJudW1iZXJcIiwgY29sU2l6ZTogXCIxLTVcIiB9LFxyXG4gICAgeyB0YWc6IFwicGFnZVwiLCBuYW1lOiBcInBhZ2VcIiwgZHJhdzogXCJvYmplY3QudGl0bGVcIiwgY29sU2l6ZTogMiB9LFxyXG4gICAgeyB0YWc6IFwicHVibGlzaGVkXCIsIG5hbWU6IFwidmlzaWJsZVwiLCBkcmF3OiBcImJvb2xcIiwgY29sU2l6ZTogMSB9LFxyXG4gICAgeyB0YWc6IFwiaXNkeW5hbWljXCIsIG5hbWU6IFwiZHluYW1pcXVlXCIsIGRyYXc6IFwiYm9vbFwiLCBjb2xTaXplOiAxIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17XCJBcnRpY2xlc1wifT5cclxuICAgICAge3R5cGVvZiBhcnRpY2xlcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcGFnZXMgPT09IFwib2JqZWN0XCIgPyAoXHJcbiAgICAgICAgPENvbnRlbnROYXZcclxuICAgICAgICAgIGRhdGE9e2FydGljbGVzfVxyXG4gICAgICAgICAgaGVhZGVyPXtoZWFkZXJ9XHJcbiAgICAgICAgICBjcmVhdGU9e2NyZWF0ZUFydGljbGV9XHJcbiAgICAgICAgICB1cGRhdGU9e3VwZGF0ZUFydGljbGV9XHJcbiAgICAgICAgICByZW1vdmU9e3JlbW92ZUFydGljbGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtcclxuICAgICAgICAvLyBmZW7DqnRyZSBkJ8OpZGl0aW9uIGV0IGNyw6lhdGlvbiBkZXMgYXJ0aWNsZXNcclxuICAgICAgICBtb2RhbC5lbmFibGUgPyAoXHJcbiAgICAgICAgICA8TW9kYWxFZGl0b3JcclxuICAgICAgICAgICAgZGF0YT17bW9kYWwuZGF0YX1cclxuICAgICAgICAgICAgdGl0bGU9e21vZGFsLnRpdGxlfVxyXG4gICAgICAgICAgICBjbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgY29tbWFuZD17c2VuZERhdGF9XHJcbiAgICAgICAgICAgIHNjaGVtYT17e1xyXG4gICAgICAgICAgICAgIHRpdGxlOiB7IHR5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiVGl0cmVcIiB9LFxyXG4gICAgICAgICAgICAgIHBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBhZ2VcIixcclxuICAgICAgICAgICAgICAgIGRyYXc6IFwidGl0bGVcIixcclxuICAgICAgICAgICAgICAgIGxpc3Q6IHBhZ2VzLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkOiB7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlZpc2libGVcIiB9LFxyXG4gICAgICAgICAgICAgIGlzZHluYW1pYzogeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJEeW5hbWlxdWVcIiB9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hiZWdpbjogeyB0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJEw6lidXRcIiwgZHJhdzogXCJ0aXRsZVwiIH0sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGVuZDogeyB0eXBlOiBcImRhdGVcIiwgbmFtZTogXCJGaW5cIiwgZHJhdzogXCJ0aXRsZVwiIH0sXHJcbiAgICAgICAgICAgICAgLy8gc29ydDogeyB0eXBlOiBcInNvcnRpbmdcIiwgbmFtZTogXCJPcmRyZVwiLCBsaXN0OiBhcnRpY2xlcyB9LFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiQ29udGVudVwiIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBUeHRMYWJlbElucHV0IH0gZnJvbSAnLi4vdWkvSW5wdXRzJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0VXJsIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBub3RpZnksIG5vdGlmeUNsb3NlIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRlclxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICAvLyByZWR1eCAtIGFqYXhcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBYTUxTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uWE1MU2V0LmF4aW9zfSlcclxuICAvLyByZWR1eCAtIE5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IGxpZmV0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24ubGlmZSlcclxuICAvLyBzdGF0ZVxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gdGltZW91dFZhclxyXG4gIGxldCBibHVyVGltZW91dCA9IG51bGxcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGJsdXJUaW1lb3V0ID0gYmx1clRpbWVvdXQgIT09IG51bGwgPyBjbGVhclRpbWVvdXQoYmx1clRpbWVvdXQpIDogc2V0VGltZW91dCgoKSA9PiBlLm5hdGl2ZUV2ZW50LnN1Ym1pdHRlci5ibHVyKCksIDUwMClcclxuICAgIGFqYXgucG9zdCgnL2xvZ2luJywgeyAuLi5zdGF0ZSB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSByZXMuZGF0YS51cmwgPT09IFwiL1wiID8gYCR7WE1MU2V0Lm5hdlVSTH1gIDogYCR7WE1MU2V0Lm5hdlVSTH0vJHtyZXMuZGF0YS51cmx9YFxyXG4gICAgICAgIGRpc3BhdGNoKHNldFVybChcIlwiKSlcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJpbmZvXCIsIFxyXG4gICAgICAgICAgbXNnOiBgQmllbnZlbnVlICR7c3RhdGUuZW1haWx9YCxcclxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIGxpZmV0aW1lKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHNldENvbm5lY3RlZCh0cnVlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9Pm5hdihjbGVhblBhdGgodXJsKSksNDAwKVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIiwgXHJcbiAgICAgICAgICBtc2c6IFwiY29ubmVjdGlvbiBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBuYXYoYCR7WE1MU2V0Lm5hdlVSTH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT17J3JvdW5kZWQtbGcgYmctd2hpdGUgY29sb3ItZGFyaycrKGlzQ29ubmVjdGVkID8gJyBjb25uZWN0ZWQnOm51bGwpfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNvbXB0ZShFbWFpbClcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cImFkcmVzc2UgZW1haWwuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIm1vdCBkZSBwYXNzZS4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGRpdkNscz0ncHQtMSBwLTQnXHJcbiAgICAgIGJ0bkNscz0nYnRuIHByaW1hcnkgdy1mdWxsJ1xyXG4gICAgPk1lIENvbm5lY3RlcjwvQnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2IH0gZnJvbSBcIi4uL3VpXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2VcIjtcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZVwiO1xyXG5pbXBvcnQgeyBNb2RhbEVkaXRvciB9IGZyb20gXCIuLi91aVwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgc3RyTm9ybWFsaXplIH0gZnJvbSBcIi4uLy4uLy4uL0Z1bmN0aW9ucy9hcHBcIjtcclxuXHJcbi8vIENSVUQgQ29tcGxldCBwb3VyIGxlcyBQYWdlc1xyXG5cclxuY29uc3QgUGFnZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmF4aW9zKTtcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsgLi4uYXhpb3NTZXQsIHBhcmFtczogeyBwYWdlOiBcInBhZ2VzXCIgfSB9KTtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5kYXRhLnBhZ2VzKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHtcclxuICAgIGVuYWJsZTogZmFsc2UsXHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICB0eXBlOiBudWxsLFxyXG4gICAgc21hbGw6IHRydWUsXHJcbiAgICB3aGVyZTogXCJwYWdlc1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXhcclxuICAgICAgLmdldChcIi9yZXF1ZXN0XCIpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcInBhZ2VzXCIsIGRhdGE6IFsuLi5yZXMuZGF0YV0gfSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShcIi9taW5pLWFkbWluL2xvZ291dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzZW5kRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc3Qge3doZXJlLHR5cGV9ID0gbW9kYWxcclxuICAgIGlmICh0eXBlICE9PSBcImRlbGV0ZVwiKSB7XHJcbiAgICAgIGRhdGEudXJsID0gc3RyTm9ybWFsaXplKGRhdGEudGl0bGUpLnJlcGxhY2UoLyAvZ2ksICdfJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kRmllbGQgPSB7IHdoZXJlLCBkYXRhOiBkYXRhIH07XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInB1dFwiOlxyXG4gICAgICAgIHJldHVybiBhamF4LnB1dChcIi9yZXF1ZXN0XCIsIHNlbmRGaWVsZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiB3aGVyZSwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgbXNnOiBcIlBhZ2UgbWlzZSDDoCBqb3VyIVwiLFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBjYXNlIFwicG9zdFwiOlxyXG4gICAgICAgIHJldHVybiBhamF4LnBvc3QoXCIvcmVxdWVzdFwiLCBzZW5kRmllbGQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogd2hlcmUsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIG1zZzogXCJQYWdlIGNyw6nDqWUhXCIsXHJcbiAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgbXNnOiByZXMucmVzcG9uc2UuZGF0YS5lcnJvcixcclxuICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIGFqYXguZGVsZXRlKFwiL3JlcXVlc3RcIiwge2RhdGE6IHsuLi5zZW5kRmllbGR9fSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IHdoZXJlLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBub3RpZnkoe1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgbXNnOiBcIlBhZ2Ugc3VwcHJpbcOpZSFcIixcclxuICAgICAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcy5yZXNwb25zZTtcclxuICAgICAgICAgICAgICBjb25zdCBtc2cgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxyXG4gICAgICAgICAgICAgICAgbXNnOiBtc2cuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh7XHJcbiAgICAgIC4uLm1vZGFsLFxyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICB0aXRsZTogXCJDcsOpZXJcIixcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUGFnZSA9IGlkID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhIH07XHJcbiAgICBjb25zdCBwYWdlID0gT2JqZWN0LnZhbHVlcyhuRGF0YSkuZmluZChwID0+IHAuaWQgPT0gaWQpO1xyXG4gICAgc2V0TW9kYWwoe1xyXG4gICAgICAuLi5tb2RhbCxcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICBkYXRhOiB7Li4ucGFnZX0sXHJcbiAgICAgIHR5cGU6IFwicHV0XCIsXHJcbiAgICAgIHRpdGxlOiBcIk1vZGlmaWVyXCIsXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSBpZCA9PiB7XHJcbiAgICBtb2RhbC50eXBlID0gXCJkZWxldGVcIlxyXG4gICAgc2VuZERhdGEoaWQpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAgeyB0YWc6IFwidGl0bGVcIiwgbmFtZTogXCJ0aXRyZVwiLCBkcmF3OiBcInN0cmluZ1wiLCBjb2xTaXplOiA0IH0sXHJcbiAgICB7IHRhZzogXCJzb3J0XCIsIG5hbWU6IFwib3JkcmVcIiwgZHJhdzogXCJudW1iZXJcIiwgY29sU2l6ZTogXCIxLTVcIiB9LFxyXG4gICAgeyB0YWc6IFwic2V0dGluZ3NcIiwgbmFtZTogXCJsYW5kaW5nXCIsIGRyYXc6IFwiYm9vbFwiLCBjb2xTaXplOiAyIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17XCJQYWdlc1wifT5cclxuICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgPENvbnRlbnROYXZcclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cclxuICAgICAgICAgIHVwZGF0ZT17dXBkYXRlUGFnZX1cclxuICAgICAgICAgIHJlbW92ZT17cmVtb3ZlUGFnZX1cclxuICAgICAgICAgIGNyZWF0ZT17Y3JlYXRlUGFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge21vZGFsLmVuYWJsZSA/IChcclxuICAgICAgICA8TW9kYWxFZGl0b3JcclxuICAgICAgICAgIGRhdGE9e21vZGFsLmRhdGF9XHJcbiAgICAgICAgICB0aXRsZT17bW9kYWwudGl0bGV9XHJcbiAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0TW9kYWwoey4uLm1vZGFsLCBlbmFibGU6IGZhbHNlfSl9XHJcbiAgICAgICAgICBjb21tYW5kPXtzZW5kRGF0YX1cclxuICAgICAgICAgIHNtYWxsPXttb2RhbC5zbWFsbH1cclxuICAgICAgICAgIHNjaGVtYT17e1xyXG4gICAgICAgICAgICB0aXRsZTogeyB0eXBlOiBcInN0cmluZ1wiLCBuYW1lOiBcIlRpdHJlXCIgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIgfSBmcm9tIFwiLi4vdWlcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3RvciwgVHh0TGFiZWxJbnB1dCB9IGZyb20gXCIuLi91aS9JbnB1dHNcIjtcclxuaW1wb3J0IHsgYXJlRXF1YWwsIGNhcGl0YWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vRnVuY3Rpb25zL2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZVwiO1xyXG5cclxuLy8gR2VzdGlvbiBkZXMgU2V0dGluZ3NcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5heGlvcyk7XHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7IC4uLmF4aW9zU2V0IH0pO1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmRhdGEuc2V0dGluZ3MpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY2hhbmdlLCBzZXRDaGFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4XHJcbiAgICAgIC5nZXQoXCIvcmVxdWVzdFwiKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJzZXR0aW5nc1wiLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHsgLi4ucmVzLmRhdGEgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL21pbmktYWRtaW4vbG9nb3V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gdiA9PiB7XHJcbiAgICBzd2l0Y2ggKHYpIHtcclxuICAgICAgY2FzZSBcIkF1dGhvclwiOlxyXG4gICAgICAgIHJldHVybiBcImF1dGV1clwiO1xyXG4gICAgICBjYXNlIFwiRGVzY3JpcHRpb25cIjpcclxuICAgICAgICByZXR1cm4gXCJkZXNjcmlwdGlvblwiO1xyXG4gICAgICBjYXNlIFwiU2l0ZU5hbWVcIjpcclxuICAgICAgICByZXR1cm4gXCJub20gZHUgc2l0ZVwiO1xyXG4gICAgICBjYXNlIFwiTGFuZGluZ1wiOlxyXG4gICAgICAgIHJldHVybiBcInBhZ2UgZCdhY2N1ZWlsXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHByb3ApID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBbcHJvcF06IGUudGFyZ2V0LnZhbHVlIH07XHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwic2V0dGluZ3NcIiwgZGF0YTogbkRhdGEgfSkpO1xyXG4gICAgIWFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpID8gc2V0Q2hhbmdlKHRydWUpIDogc2V0Q2hhbmdlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRMYW5kaW5nID0gdiA9PiB7XHJcbiAgICBjb25zdCBuRGF0YSA9IHsgLi4uZGF0YSwgTGFuZGluZzogdiB9O1xyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcInNldHRpbmdzXCIsIGRhdGE6IG5EYXRhIH0pKTtcclxuICAgIGNvbnNvbGUubG9nKGFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICBhamF4LnB1dChcIi9yZXF1ZXN0XCIsIHsgd2hlcmU6IFwic2V0dGluZ3NcIiwgZGF0YSB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKG5vdGlmeSh7IFxyXG4gICAgICAgIG1zZzogXCJvcHRpb25zIG1pc2Ugw6Agam91clwiLCBcclxuICAgICAgICB0eXBlOiBcImluZm9cIixcclxuICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCAyMDAwKVxyXG4gICAgICB9KSk7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJzZXR0aW5nc1wiLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgIHNldEluaXRpYWxTdGF0ZSh7IC4uLnJlcy5kYXRhIH0pO1xyXG4gICAgICBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChub3RpZnkoeyBcclxuICAgICAgICBtc2c6IFwiZXJyZXVyIGRlIHNhdXZlZ2FyZGVcIiwgXHJcbiAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcclxuICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCAyMDAwKVxyXG4gICAgICB9KSlcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17XCJQYXJhbcOodHJlc1wifT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIHB5LTMganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZSwgXCJBdXRob3JcIil9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9XHJcbiAgICAgICAgICAgICAgaWQ9XCJBdXRob3JcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLkF1dGhvcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz1cImlucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBkaXZDbHM9XCJpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsQ2xzPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZSwgXCJEZXNjcmlwdGlvblwiKX1cclxuICAgICAgICAgICAgICBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIikpfVxyXG4gICAgICAgICAgICAgIGlkPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9XCJpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgZGl2Q2xzPVwiaW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBsYWJlbENscz1cImxhYmVsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQ2hhbmdlKGUsIFwiU2l0ZU5hbWVcIil9XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpKX1cclxuICAgICAgICAgICAgICBpZD1cIlNpdGVOYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5TaXRlTmFtZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPVwiaW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGRpdkNscz1cImlucHV0LXdyYXAgcC0yIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxDbHM9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgIGNscz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgaWNvbkNscz1cImljb25cIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17ZGF0YS5MYW5kaW5nfVxyXG4gICAgICAgICAgICAgIGxpc3Q9e2RhdGEuUGFnZXN9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtzZXRMYW5kaW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2NrIHB5LTJcIj5QYWdlPC9oMj5cclxuICAgICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtjaGFuZ2UgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBidG5DbHM9e1wiYnRuIHNlY29uZGFyeSBmYWRlSW5MZWZ0XCJ9XHJcbiAgICAgICAgICAgIGRpdkNscz17XCJwLTIgZmxleCBqdXN0aWZ5LWVuZFwifVxyXG4gICAgICAgICAgICBjbGljaz17dXBkYXRlU2V0dGluZ3N9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdXZlZ2FyZGVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xyXG4iLCJpbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcclxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuL0FydGljbGVzXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmV4cG9ydCB7IFBhZ2VzLCBBcnRpY2xlcywgU2V0dGluZ3MsIExvZ2luIH0iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBjbGVhblBhdGgsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHNldEJhc2VVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFqYXhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYWpheCcsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYmFzZVVybDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgbmF2VVJMOiBcIi9taW5pLWFkbWluXCIsXHJcbiAgICBheGlvczoge1xyXG4gICAgICBiYXNlVVJMOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IGFqYXhTbGljZSBmcm9tIFwiLi9hamF4U2xpY2VcIjtcclxuaW1wb3J0IGxleGljYWxTbGljZSBmcm9tIFwiLi9sZXhpY2FsU2xpY2VcIjtcclxuaW1wb3J0IG5vdGlmaWNhdGlvblNsaWNlIGZyb20gXCIuL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG5leHBvcnQgeyBhamF4U2xpY2UsIG5vdGlmaWNhdGlvblNsaWNlLCBsZXhpY2FsU2xpY2UgfSIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsZXhpY2FsU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJsZXhpY2FsXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBpbWdLZXk6IG51bGxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRJbWdLZXk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaW1nS2V5OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0SW1nS2V5LCB9ID0gbGV4aWNhbFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxleGljYWxTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwibm90aWZpY2F0aW9uXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBtc2c6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwib3V0XCIsXHJcbiAgICB0eXBlOiBcImluZm9cIixcclxuICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICBsaWZlOiA0MDAwXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbm90aWZ5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBjb25zdCB7dHlwZSxtc2csdGltZW91dH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtc2c6IG1zZyxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHN0YXR1cyA6IFwiaW5cIixcclxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0IHx8IG51bGwsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5S2VlcDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qge2V2ZW50LCBmdW5jfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGlmIChldmVudCA9PT0gXCJzdGF5XCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBmdW5jLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlDbG9zZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICBzdGF0dXM6ICdvdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBub3RpZnksIG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gPSBub3RpZmljYXRpb25TbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25TbGljZSwgYWpheFNsaWNlLCBsZXhpY2FsU2xpY2UgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBhamF4OiBhamF4U2xpY2UsXHJcbiAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvblNsaWNlLFxyXG4gICAgbGV4aWNhbDogbGV4aWNhbFNsaWNlXHJcbiAgfSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9EZWxldGUnXHJcbmltcG9ydCBFZGl0IGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FZGl0J1xyXG5cclxuY29uc3QgQWN0aW9uc1JvdyA9ICh7IGlkLCB1cGRhdGUsIHJlbW92ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGZsZXgtbm93cmFwIGp1c3RpZnktY2VudGVyIGdhcC0zJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gc2Vjb25kYXJ5JyBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlKGlkKX0+XHJcbiAgICAgICAgPEVkaXQgY2xzPSdhY3Rpb24taWNvbiBlZGl0Jy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbiBzZWNvbmRhcnknIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmUoaWQpfT5cclxuICAgICAgICA8RGVsZXRlIGNscz0nYWN0aW9uLWljb24gZGVsZXRlJy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zUm93IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ1NSRklucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiB2YWx1ZT17Z2V0VG9rZW4oKX0gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENTUkZJbnB1dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY2FwaXRhbGl6ZSxcclxuICBnZXRQcm9wc0Jvb2xTdGF0dXMsXHJcbiAgaXNBcnJheSxcclxuICBzdHJOb3JtYWxpemUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL0Z1bmN0aW9ucy9hcHBcIjtcclxuaW1wb3J0IHsgTnVtYmVySW5wdXQsIENoZWNrYm94LCBTd2l0Y2hJbnB1dCwgU2VsZWN0b3IgfSBmcm9tIFwiLi9JbnB1dHNcIjtcclxuaW1wb3J0IHsgQWN0aW9uc1JvdyB9IGZyb20gXCIuL1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXIsIFN1Y2Nlc3MsIENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL2ljb24vaWNvbi11aVwiO1xyXG5cclxuY29uc3QgQ29udGVudE5hdiA9ICh7IGhlYWRlciwgZGF0YSwgdXBkYXRlLCByZW1vdmUsIGNyZWF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgdXBkYXRlU2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGFqYXhEYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5kYXRhKTtcclxuICBjb25zdCBbbmF2U2VhcmNoLCBzZXROYXZTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaW5pdGlhdGlvbiBkZXMgZmlsdHJlc1xyXG4gICAgY29uc3Qgc0ZpZWxkcyA9IHt9O1xyXG4gICAgaGVhZGVyLm1hcChcclxuICAgICAgaCA9PlxyXG4gICAgICAgIChzRmllbGRzW2gudGFnXSA9XHJcbiAgICAgICAgICBoLnRhZyAhPT0gXCJwYWdlXCJcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTpcclxuICAgICAgICAgICAgICAgICAgaC5kcmF3ID09PSBcIm51bWJlclwiID8gMCA6IGguZHJhdy5tYXRjaCgvXmJvb2wvKSA/IGZhbHNlIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbLi4uYWpheERhdGFbaC50YWcgKyBcInNcIl1dLm1hcCgoZWwsIGkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmVsLFxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZDogaSA9PSAwID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIHVwZGF0ZVNlYXJjaCh7IC4uLnNGaWVsZHMgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBmb3JtYXQgbGVzIGRvbm7DqWUgcG91ciBhZmZpY2hhZ2VcclxuICBjb25zdCBzZXRWaWV3ID0gKHZhbHVlLCBzZXQgPSBcInZhbHVlXCIsIHRhZykgPT4ge1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm9iamVjdFxcLi4rL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICBsZXQgbmFtZSA9IHNldC5zcGxpdChcIi5cIilbc2V0LnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxXTtcclxuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZShhamF4RGF0YVtgJHt0YWd9c2BdW051bWJlcih2YWx1ZSkgLSAxXVtuYW1lXSk7XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXmJvb2wvZykudGVzdChzZXQpOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IChcclxuICAgICAgICAgIDxTdWNjZXNzIGNscz1cImgtNiB3LTYgbS1hdXRvIGljb24gc3VjY2Vzc1wiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxDbG9zZSBjbHM9XCJoLTYgdy02IG0tYXV0byBpY29uIGZhbHNlXCIgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZykudGVzdChzZXQpOlxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15zdHIvZykudGVzdChzZXQpOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyBjYXBpdGFsaXplKHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHVwZGF0ZSBkZXMgZmlsdHJlcyBkZSByZWNoZXJjaGVzXHJcbiAgY29uc3Qgc2VhcmNoSGFuZGxlQ2hhbmdlID0gKGUsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgY2FzZSBcInNvcnRcIjpcclxuICAgICAgICB2YWx1ZSA9XHJcbiAgICAgICAgICB2YWx1ZSA8IDAgfHwgdmFsdWUgPT0gXCJcIlxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB2YWx1ZSA+IGRhdGEubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IGRhdGEubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc2VhcmNoLCBbZmllbGRdOiB7IC4uLnNlYXJjaFtmaWVsZF0sIHZhbHVlOiB2YWx1ZSB9IH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHVwZGF0ZSBkZXMgZmlsdHJlcyBkZSByZWNoZXJjaGVzICggc3DDqWNpZmlxdWUgw6AgdW5lIGxpc3RlIGQnw6lsw6ltZW50IGF0dHJpYnV0IFwiZmlsdGVyZWRcIilcclxuICBjb25zdCB1cGRhdGVBcnJheUZpbHRlciA9ICh2YWx1ZSwgdGFnKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IFsuLi5zZWFyY2hbdGFnXS52YWx1ZV07XHJcbiAgICB1cGRhdGVTZWFyY2goe1xyXG4gICAgICAuLi5zZWFyY2gsXHJcbiAgICAgIFt0YWddOiB7XHJcbiAgICAgICAgLi4uc2VhcmNoW3RhZ10sXHJcbiAgICAgICAgdmFsdWU6IGFycmF5Lm1hcChlbCA9PiAoe1xyXG4gICAgICAgICAgLi4uZWwsXHJcbiAgICAgICAgICBmaWx0ZXJlZDogZWwuaWQgPT09IHZhbHVlID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHJlbmR1IHNhbnMgZmlsdHJlc1xyXG4gIGNvbnN0IGJhc2ljUmVuZGVyID0gZGF0YSA9PlxyXG4gICAgZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9XCJjb250ZW50LXJvd1wiPlxyXG4gICAgICAgIHtoZWFkZXIubWFwKCh7IHRhZywgZHJhdywgY29sU2l6ZSB9LCBrKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtJHtjb2xTaXplfWB9PlxyXG4gICAgICAgICAgICB7c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3ctZmllbGQgYWN0aW9uLWZpZWxkIGNvbHNpemUtMmB9PlxyXG4gICAgICAgICAgPEFjdGlvbnNSb3dcclxuICAgICAgICAgICAgaWQ9e2t9XHJcbiAgICAgICAgICAgIHVwZGF0ZT17KCkgPT4gdXBkYXRlKGZpZWxkLmlkKX1cclxuICAgICAgICAgICAgcmVtb3ZlPXsoKSA9PiByZW1vdmUoZmllbGQuaWQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuXHJcbiAgLy8gcmVuZHUgYXZlYyBmaWx0cmVzXHJcbiAgY29uc3QgZmlsdGVyUmVuZGVyID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hGaWx0ZXIgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzZWFyY2gpKSB7XHJcbiAgICAgIGlmICh2LmFjdGl2ZSkge1xyXG4gICAgICAgIHNlYXJjaEZpbHRlcltrXSA9IHYudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNlYXJjaEZpbHRlcikpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2KSB7XHJcbiAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAhc3RyTm9ybWFsaXplKGZpZWxkW2tdKS5tYXRjaChzdHJOb3JtYWxpemUodikpICYmXHJcbiAgICAgICAgICAgICAgdi5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICBpZiAodiAhPT0gZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XHJcbiAgICAgICAgICAgIGlmICh2ID09PSB0cnVlICYmICFmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ID09PSBmYWxzZSAmJiBmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHYpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gdi5maW5kKGVsID0+IGVsLmZpbHRlcmVkKS5pZDtcclxuICAgICAgICAgICAgICBpZiAoZmllbGRba10gIT09IGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT1cImNvbnRlbnQtcm93XCI+XHJcbiAgICAgICAgICB7aGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtJHtjb2xTaXplfWB9PlxyXG4gICAgICAgICAgICAgIHtzZXRWaWV3KGZpZWxkW3RhZ10sIGRyYXcsIHRhZyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBhY3Rpb24tZmllbGQgY29sc2l6ZS0yYH0+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zUm93IGlkPXtrfSB1cGRhdGU9eygpID0+IHVwZGF0ZShmaWVsZC5pZCl9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGFjdGl2ZSB1biBmaWx0cmUgKHNlbG9uIGNpYmxlIHV0aWxpc2F0ZXVyKVxyXG4gIGNvbnN0IHRvZ2dsZUZpbHRlciA9IChlLCBjaGVja2VkKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdXBkYXRlU2VhcmNoKHtcclxuICAgICAgLi4uc2VhcmNoLFxyXG4gICAgICBbY2hlY2tlZF06IHsgLi4uc2VhcmNoW2NoZWNrZWRdLCBhY3RpdmU6ICFzZWFyY2hbY2hlY2tlZF0uYWN0aXZlIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1uYXZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdi1oZWFkZXJcIj5cclxuICAgICAgICB7aGVhZGVyLm1hcCgoaCwgaykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfWB9PlxyXG4gICAgICAgICAgICB7Y2FwaXRhbGl6ZShoLm5hbWUpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yIGFjdGlvbi1oZWFkZXJgfT5cclxuICAgICAgICAgIHtjYXBpdGFsaXplKFwiYWN0aW9uc1wiKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZSBpY29uLWJ0biBzZWNvbmRhcnkgbW9iaWxlXCIgK1xyXG4gICAgICAgICAgICAobmF2U2VhcmNoID8gXCIgdG9nZ2xlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2U2VhcmNoKCFuYXZTZWFyY2gpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGaWx0ZXIgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudC1uYXYtc2VhcmNoXCIgKyAobmF2U2VhcmNoID8gXCIgdG9nZ2xlXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICB7c2VhcmNoXHJcbiAgICAgICAgICAgID8gaGVhZGVyLm1hcCgoaCwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IElucHV0O1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm51bS9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscz17YHNlY29uZGFyeSBjb2xzaXplLTEwYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wQ2xzPVwiaW5wdXQtbnVtYmVyIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17KGUsIHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e051bWJlcihzZWFyY2hbaC50YWddLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFtoLnRhZ10udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgIXNlYXJjaFtoLnRhZ10udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17c2VhcmNoW2gudGFnXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzZWFyY2hbaC50YWddLnZhbHVlLmZpbmQoZWwgPT4gZWwuZmlsdGVyZWQpLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3ZhbHVlID0+IHVwZGF0ZUFycmF5RmlsdGVyKHZhbHVlLCBoLnRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC10eHQgc2Vjb25kYXJ5IGNvbHNpemUtMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NhcGl0YWxpemUoaC5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFtoLnRhZ10udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtrfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNlYXJjaC1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfSBmbGV4IGp1c3RpZnktaXRlbXMtc3RyZXRjaCBmbGV4LW5vd3JhcGB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgIGNscz1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWFyY2hbaC50YWddLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17ZSA9PiB0b2dnbGVGaWx0ZXIoZSwgaC50YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yIGFjdGlvbi1zZWFyY2hgfT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXJcIj5cclxuICAgICAgICB7IXNlYXJjaCB8fCAoc2VhcmNoICYmICFnZXRQcm9wc0Jvb2xTdGF0dXMoc2VhcmNoLCBcImFjdGl2ZVwiLCB0cnVlKSlcclxuICAgICAgICAgID8gZGF0YSAmJiBpc0FycmF5KGRhdGEpXHJcbiAgICAgICAgICAgID8gYmFzaWNSZW5kZXIoZGF0YSlcclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICA6IGRhdGEgJiYgaXNBcnJheShkYXRhKVxyXG4gICAgICAgICAgPyBmaWx0ZXJSZW5kZXIoZGF0YSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1uYXYtYWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gc3VjY2Vzc1wiIG9uQ2xpY2s9e2NyZWF0ZX0+XHJcbiAgICAgICAgICBDcsOpZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnROYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscywgY2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xzfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0bkNsc30gb25DbGljaz17Y2xpY2t9PnsgY2hpbGRyZW4gfTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDaGVja2VkIGZyb20gJy4uLy4uLy4uLy4uL2ljb24vaWNvbi11aS9DaGVja2VkJ1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSAoeyBjbHMsIGNoYW5nZSwgY2hlY2tlZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbnB1dC1jaGVja2JveCBcIiArIGNsc30gb25DbGljaz17KGUpID0+IGNoYW5nZShlKX0+XHJcbiAgICAgIHsgY2hlY2tlZCA/IDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1jaGVja2JveC10cnVlJz48Q2hlY2tlZCAvPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1jaGVja2JveC1mYWxzZSc+PC9kaXY+IH1cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FsZW5kYXIsIE5hdlByZXYsIE5hdk5leHQsIENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ljb24vaWNvbi11aS9cIjtcclxuXHJcbmNvbnN0IERhdGVQaWNrZXIgPSAoeyBjaGFuZ2UsIHZhbHVlIH0pID0+IHtcclxuICB2YWx1ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICBjb25zdCBjdXJyVmFsID0ge1xyXG4gICAgZGF5OiB2YWx1ZS5nZXREYXkoKSxcclxuICAgIGRhdGU6IHZhbHVlLmdldERhdGUoKSxcclxuICAgIG1vbnRoOiB2YWx1ZS5nZXRNb250aCgpLFxyXG4gICAgeWVhcjogdmFsdWUuZ2V0RnVsbFllYXIoKSxcclxuICB9O1xyXG4gIGNvbnN0IGRheXMgPSBbXCJMdW5cIiwgXCJNYXJcIiwgXCJNZXJcIiwgXCJKZXVcIiwgXCJWZW5cIiwgXCJTYW1cIiwgXCJEaW1cIl07XHJcbiAgY29uc3QgZHJhd0RhdGUgPSB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9O1xyXG4gIGNvbnN0IFtyZWYsIHNldFJlZl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGF0ZVN0YXRlLCBzZXREYXRlU3RhdGVdID0gdXNlU3RhdGUobmV3IERhdGUodmFsdWUuZ2V0VGltZSgpKSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIW9wZW4gJiYgcmVmID8gc2V0VGltZW91dCgoKSA9PiByZWYuYmx1cigpLCAxNTApIDogbnVsbDtcclxuICB9LCBbb3Blbl0pO1xyXG5cclxuICBjb25zdCBjaGFuZ2VEYXRlID0gdiA9PiB7XHJcbiAgICBjb25zdCBuRGF0ZSA9IGRhdGVTdGF0ZTtcclxuICAgIG5EYXRlLnNldERhdGUodik7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGNoYW5nZShuRGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0RGF5cyA9ICgpID0+IHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBjb25zdCBvdXRQdXQgPSBbXTtcclxuICAgIGNvbnN0IGRpc3BsYXlEYXRlID0gbmV3IERhdGUoZGF0ZVN0YXRlLmdldFRpbWUoKSk7XHJcbiAgICBkaXNwbGF5RGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgIT09IGRpc3BsYXlEYXRlLmdldERheSgpOyBpKyspIHtcclxuICAgICAgb3V0UHV0LnB1c2goPGRpdiBrZXk9e1wiZFBpY2stXCIgKyBjb3VudH0gY2xhc3NOYW1lPVwiY2FzZSBlbXB0eVwiPjwvZGl2Pik7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5RGF0ZS5zZXRNb250aChkaXNwbGF5RGF0ZS5nZXRNb250aCgpICsgMSk7XHJcbiAgICBkaXNwbGF5RGF0ZS5zZXREYXRlKDApO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGlzcGxheURhdGUuZ2V0RGF0ZSgpOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGkgPT0gY3VyclZhbC5kYXRlICYmXHJcbiAgICAgICAgY3VyclZhbC5tb250aCA9PSBkaXNwbGF5RGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgY3VyclZhbC55ZWFyID09IGRpc3BsYXlEYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgb3V0UHV0LnB1c2goXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17XCJkUGljay1cIiArIGNvdW50fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VEYXRlKGkpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXNlIGFjdGl2ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvdXRQdXQucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtcImRQaWNrLVwiICsgY291bnR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZURhdGUoaSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgY291bnQrKztcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRQdXQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0TW9udGggPSB2ID0+IHtcclxuICAgIGxldCBtb250aCA9IGRhdGVTdGF0ZS5nZXRNb250aCgpICsgdjtcclxuICAgIGNvbnN0IG5EYXRlID0gbmV3IERhdGUoZGF0ZVN0YXRlLmdldFRpbWUoKSk7XHJcbiAgICBuRGF0ZS5zZXRNb250aChtb250aCk7XHJcbiAgICBzZXREYXRlU3RhdGUobkRhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldFllYXIgPSB2ID0+IHtcclxuICAgIGxldCB5ZWFyID0gZGF0ZVN0YXRlLmdldEZ1bGxZZWFyKCkgKyB2O1xyXG4gICAgY29uc3QgbkRhdGUgPSBuZXcgRGF0ZShkYXRlU3RhdGUuZ2V0VGltZSgpKTtcclxuICAgIG5EYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xyXG4gICAgc2V0RGF0ZVN0YXRlKG5EYXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJpbnB1dC1jYWxlbmRhclwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+ICghb3BlbiA/IHNldE9wZW4odHJ1ZSkgOiBudWxsKX1cclxuICAgICAgb25Gb2N1cz17ZSA9PiBzZXRSZWYoZS50YXJnZXQpfVxyXG4gICAgICB0YWJJbmRleD17LTF9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10eHRcIj57dmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIil9LjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWljb25cIj5cclxuICAgICAgICA8Q2FsZW5kYXIgY2xzPXtcImljb25cIn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHshb3BlbiA/IG51bGwgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1jdXJyZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgIHt2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiLCBkcmF3RGF0ZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIGNscz1cImljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aC15ZWFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItbW9udGhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1uYXYgcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldE1vbnRoKC0xKX0+XHJcbiAgICAgICAgICAgICAgICA8TmF2UHJldiBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGVTdGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiLCB7IG1vbnRoOiBcImxvbmdcIiB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1uYXYgcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldE1vbnRoKDEpfT5cclxuICAgICAgICAgICAgICAgIDxOYXZOZXh0IGNscz1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci15ZWFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbmF2IHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRZZWFyKC0xKX0+XHJcbiAgICAgICAgICAgICAgICA8TmF2UHJldiBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGVTdGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiLCB7IHllYXI6IFwibnVtZXJpY1wiIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLW5hdiBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0WWVhcigxKX0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TmV4dCBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF5LW5hbWVzXCI+XHJcbiAgICAgICAgICAgIHtkYXlzLm1hcCgoZCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgTWF0aC5yYW5kb20oKSAqIDEwMH0gY2xhc3NOYW1lPVwiY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAge2R9LlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1kYXlzXCI+e3NldERheXMoKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbWFnZUZpbGVJbnB1dCA9ICh7Y2xzLCBhZGRDbHMsIGJyb3dzZSwgaWQsIGNoYW5nZSwgaW1nQnJvd3NlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Jyb3dzZX0gb25DbGljaz17aW1nQnJvd3NlfT5QYXJjb3VyaXI8L2J1dHRvbj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2FkZENsc30+KzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICB0eXBlPSdmaWxlJyBcclxuICAgICAgICBjbGFzc05hbWU9J2hpZGRlbidcclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCJcclxuICAgICAgICBtdWx0aXBsZT17ZmFsc2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2UoZS5uYXRpdmVFdmVudCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlRmlsZUlucHV0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSAoeyBjbHMsIGlucENscywgY2hhbmdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgKyAnIGlucHV0LW51bWJlci13cmFwIGZsZXggZmxleC1ub3dyYXAgcmVsYXRpdmUnfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cImRvd25cIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUsdmFsdWUtMSl9ID4tPC9zcGFuPjxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT17aW5wQ2xzICsgJyBjb2xzaXplLTEwJ30gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2UoZSwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dmFsdWV9IC8+PHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cInVwXCIgb25DbGljaz17KGUpID0+IGNoYW5nZShlLHZhbHVlKzEpfT4rPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnB1dCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gJy4uLy4uLy4uLy4uL2ljb24vaWNvbi11aS9FeHBhbmQnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBjbHMsIGxpc3QsIGFjdGl2ZSwgaWNvbkNscywgY2hpbGRyZW4sIGFjdGlvbiwgc29ydFByb3AgPSBcImlkXCIgfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbGFzdEV2ZW50LCBzZXRMYXN0RXZlbnRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgLy8gbWlzZSBlbiBwbGFjZSBkZSBsJ8OpbMOpbWVudCBhY3RpZiBwYXIgZMOpZmF1dCAocHJvcCBhY3RpdmUgb2JsaWdhdG9pcmUpXHJcbiAgaWYgKCFsaXN0KSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBjb25zdCBsYW5kaW5nID0gbGlzdC5maW5kKGkgPT4gaVtzb3J0UHJvcF0gPT09IGFjdGl2ZSkgfHwgbGlzdC5maW5kKGkgPT4gaS5pZCA9PT0gYWN0aXZlKVxyXG4gIGNvbnN0IGF2YWlibGUgPSBsaXN0LmZpbHRlcihpID0+IGkuaWQgIT09IGxhbmRpbmcuaWQpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0ICRlbCA9IGUudGFyZ2V0XHJcbiAgICB3aGlsZSAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0b3InKSA9PSBmYWxzZSkge1xyXG4gICAgICAkZWwgPSAkZWwucGFyZW50Tm9kZVxyXG4gICAgfVxyXG4gICAgaWYgKChlLnR5cGUgPT09ICdjbGljaycgJiYgbGFzdEV2ZW50ID09PSAnY2xpY2snKSB8fCBlLnR5cGUgIT09ICdjbGljaycpIHtcclxuICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICAgIGxhc3RFdmVudCA9PT0gJ2NsaWNrJyAmJiB0b2dnbGUgPT09IHRydWUgPyAkZWwuYmx1cigpIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHNldExhc3RFdmVudChlLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZSx2KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0b2dnbGVTZWxlY3QoZSk7XHJcbiAgICBhY3Rpb24odik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGNscyA/ICdzZWxlY3RvciAnICsgY2xzIDogJ3NlbGVjdG9yJykgKyAodG9nZ2xlID8gJyBvcGVuZWQnIDogJycpfSBvbkZvY3VzPXt0b2dnbGVTZWxlY3R9IG9uQmx1cj17dG9nZ2xlU2VsZWN0fSB0YWJJbmRleD17LTF9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdCBhY3RpdmUnIHZhbHVlPXtsYW5kaW5nLmlkfSBvbkNsaWNrPXt0b2dnbGUgPyB0b2dnbGVTZWxlY3QgOiBudWxsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZShsYW5kaW5nLnRpdGxlKX08L2Rpdj48RXhwYW5kIGNscz17aWNvbkNsc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRvZ2dsZSA/IDxkaXYgY2xhc3NOYW1lPSdvcHQtd3JhcHBlcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YWlibGUubWFwKCh7aWQsdGl0bGV9LGspID0+IFxyXG4gICAgICAgICAgICAgIC8vIGwnaWQgZGUgbCfDqWzDqW1lbnQgY2hvaXNpIGVzdCBkaXJlY3RlbWVudCBlbnZvecOpIGRhbnMgXCJhY3Rpb25cIiAoZnVuY3Rpb24gw6AgcGFzc2VyIGVuIHByb3ApXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nb3B0JyB2YWx1ZT17aWR9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlLGlkKX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUodGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwiLy8gdWkgYm9vbGVhbiByZXByZXNlbnRhdGlvblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3dpdGNoSW5wdXQgPSAoeyBjbHMgPSBcIlwiLCB2YWx1ZSwgY2hhbmdlIH0pID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydpbnB1dC1zd2l0Y2gnICsgKHZhbHVlID8gJyB0cnVlJzogJyBmYWxzZScpICsgKCBjbHMgPyBgICR7Y2xzfWAgOiBcIlwiKX0gb25DbGljaz17KGUpID0+IGNoYW5nZShlKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1zd2l0Y2gtYnV0dG9uJz48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoSW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFR4dExhYmVsSW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbCBcclxuICAgICAgICA/IDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRMYWJlbElucHV0IiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL0NoZWNrYm94XCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuL0RhdGVQaWNrZXJcIjtcclxuaW1wb3J0IEltYWdlRmlsZUlucHV0IGZyb20gXCIuL0ltYWdlRmlsZUlucHV0XCI7XHJcbmltcG9ydCBOdW1iZXJJbnB1dCBmcm9tIFwiLi9OdW1iZXJJbnB1dFwiO1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSBcIi4vU2VsZWN0b3JcIjtcclxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gXCIuL1N3aXRjaElucHV0XCI7XHJcbmltcG9ydCBUeHRMYWJlbElucHV0IGZyb20gXCIuL1R4dExhYmVsSW5wdXRcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENoZWNrYm94LFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgSW1hZ2VGaWxlSW5wdXQsXHJcbiAgTnVtYmVySW5wdXQsXHJcbiAgU2VsZWN0b3IsXHJcbiAgU3dpdGNoSW5wdXQsXHJcbiAgVHh0TGFiZWxJbnB1dCxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENsb3NlIGZyb20gXCIuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2VcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgU2VsZWN0b3IsIFN3aXRjaElucHV0IH0gZnJvbSBcIi4vSW5wdXRzXCI7XHJcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcIi4vXCI7XHJcblxyXG5jb25zdCBNb2RhbEVkaXRvciA9ICh7IGRhdGEsIHNjaGVtYSwgdGl0bGUsIGNsb3NlLCBjb21tYW5kLCBzbWFsbCB9KSA9PiB7XHJcbiAgY29uc3QgW21EYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZW1wdHkgPSB7fTtcclxuICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChbbmFtZSwgcGFyXSkgPT4ge1xyXG4gICAgICBsZXQgdmFsO1xyXG4gICAgICBzd2l0Y2ggKHBhci50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICB2YWwgPSBcIlwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICAgICAgdmFsID0gcGFyLmxpc3RbMF0uaWQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic29ydGluZ1wiOlxyXG4gICAgICAgICAgY29uc3QgbGFzdCA9IHBhci5saXN0Lmxlbmd0aCAtIDFcclxuICAgICAgICAgIHZhbCA9IHBhci5saXN0W2xhc3RdLmlkIDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJib29sXCI6XHJcbiAgICAgICAgICB2YWwgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICB2YWwgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgdmFsLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHZhbCA9IFwiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBlbXB0eVtuYW1lXSA9IHZhbDtcclxuICAgIH0pO1xyXG5cclxuICAgICFkYXRhID8gc2V0RGF0YSh7IC4uLmVtcHR5IH0pIDogc2V0RGF0YSh7IC4uLmRhdGEgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gIW1EYXRhID8gbnVsbCA6IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJtb2RhbC1lZGl0b3JcIiArIChzbWFsbCA/IFwiIHNtYWxsXCI6IFwiXCIpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhci10eHRcIj57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXItY2xvc2VcIiBvbkNsaWNrPXtjbG9zZX0+XHJcbiAgICAgICAgICA8Q2xvc2UgY2xzPVwidy02IGgtNlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXdpbmRvd1wiPlxyXG4gICAgICAgIHttRGF0YVxyXG4gICAgICAgICAgPyBPYmplY3QuZW50cmllcyhzY2hlbWEpLm1hcCgoW2tleSwgdmFsdWVdLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IElucHV0O1xyXG4gICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXR4dCBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttRGF0YVtrZXldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHsgLi4ubURhdGEsIFtrZXldOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sXCI6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsIHAtMiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21EYXRhW2tleV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17KCkgPT4gc2V0RGF0YSh7IC4uLm1EYXRhLCBba2V5XTogIW1EYXRhW2tleV0gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzb3J0aW5nXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlS2V5ID0ga2V5LnJlcGxhY2UoL3MkL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscz17XCJzZWNvbmRhcnkgcC0wXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM9e1wiaWNvblwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt2YWx1ZS5saXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e21EYXRhW3JlS2V5XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt2ID0+IHNldERhdGEoeyAuLi5tRGF0YSwgW3JlS2V5XTogdiB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFByb3A9e3JlS2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gbURhdGFba2V5XSB8fCBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfSA6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e3YgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoeyAuLi5tRGF0YSwgW2tleV06IHYgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtb2RhbC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7SW5wdXR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge09iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChbaywgdl0sIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gdi50eXBlID09PSBcInRleHRcIiA/IChcclxuICAgICAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIGRhdGE9e21EYXRhW2tdfVxyXG4gICAgICAgICAgICB1cGRhdGU9e3YgPT4gc2V0RGF0YSh7IC4uLm1EYXRhLCBba106IHYgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9KX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiB7Y29tbWFuZCh7Li4ubURhdGF9KTsgY2xvc2UoKX19PlNhdXZlcjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxFZGl0b3I7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGFnZXNDb250YWluZXIgPSAoe2NoaWxkcmVuICwgdGl0bGV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSBtYi04Jz57dGl0bGV9PC9kaXY+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRhaW5lciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgJGdldFNlbGVjdGlvbiwgJGlzUmFuZ2VTZWxlY3Rpb24sIEZPUk1BVF9FTEVNRU5UX0NPTU1BTkQgfSBmcm9tIFwibGV4aWNhbFwiXHJcbmltcG9ydCB7ICRnZXRTZWxlY3Rpb25TdHlsZVZhbHVlRm9yUHJvcGVydHkgfSBmcm9tIFwiQGxleGljYWwvc2VsZWN0aW9uXCJcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0XCJcclxuaW1wb3J0IEJ0bkZvcm1hdFRleHQgZnJvbSBcIi4vaXRlbXMvQnRuRm9ybWF0VGV4dFwiXHJcbmltcG9ydCB7IFR4dENlbnRlciwgVHh0SnVzdGlmeSwgVHh0TGVmdCwgVHh0UmlnaHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaWNvbi90ZXh0LWVkaXRvclwiXHJcblxyXG5jb25zdCBBbGlnblRleHQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBjZW50ZXI6IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAganVzdGlmeTogZmFsc2UsXHJcbiAgfVxyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpXHJcbiAgY29uc3QgW2J0blN0YXRlcywgc2V0QnRuU3RhdGVzXSA9IHVzZVN0YXRlKHsuLi5kZWZhdWx0U3RhdGV9KVxyXG5cclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgIGxlZnQ6IFR4dExlZnQsXHJcbiAgICBjZW50ZXI6IFR4dENlbnRlcixcclxuICAgIHJpZ2h0OiBUeHRSaWdodCxcclxuICAgIGp1c3RpZnk6IFR4dEp1c3RpZnksXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVCdG5TdGF0ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKClcclxuICAgIGlmICgkaXNSYW5nZVNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XHJcbiAgICAgIGxldCBub2RlID0gc2VsZWN0aW9uLmFuY2hvci5nZXROb2RlKCkuZ2V0VG9wTGV2ZWxFbGVtZW50KClcclxuICAgICAgc3dpdGNoIChub2RlLmdldFR5cGUoKSkge1xyXG4gICAgICAgIGNhc2UgXCJwYXJhZ3JhcGhcIjpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBub2RlID0gc2VsZWN0aW9uLmFuY2hvci5nZXROb2RlKClcclxuICAgICAgfVxyXG4gICAgICBub2RlID0gbm9kZS5nZXRUeXBlKCkgPT09IFwidGV4dFwiID8gbm9kZS5nZXRQYXJlbnQoKSA6IG5vZGVcclxuICAgICAgbGV0IHZhbHVlID0gbm9kZS5nZXRGb3JtYXRUeXBlKCkgIT09IFwiXCIgPyBub2RlLmdldEZvcm1hdFR5cGUoKSA6ICdsZWZ0J1xyXG4gICAgICBzZXRCdG5TdGF0ZXMoey4uLmRlZmF1bHRTdGF0ZSwgW3ZhbHVlXSA6IHRydWV9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiBlZGl0b3IucmVnaXN0ZXJVcGRhdGVMaXN0ZW5lcigoeyBlZGl0b3JTdGF0ZSwgdGFncyB9KSA9PiB7XHJcbiAgICAgIGVkaXRvclN0YXRlLnJlYWQoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJ0blN0YXRlcygpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sIFtlZGl0b3JdKVxyXG5cclxuICBjb25zdCBpdGVtc0Rpc3BhdGNoID0gKCkgPT4ge1xyXG4gICAgbGV0IGl0ZW1zID0gW11cclxuICAgIGxldCBpID0gMFxyXG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGJ0blN0YXRlcykpIHtcclxuICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICA8QnRuRm9ybWF0VGV4dFxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgYWN0aXZlPXt2YWx1ZX1cclxuICAgICAgICAgIGNvbW1hbmQ9eygpID0+IHtcclxuICAgICAgICAgICAgZWRpdG9yLmZvY3VzKClcclxuICAgICAgICAgICAgZWRpdG9yLmRpc3BhdGNoQ29tbWFuZChGT1JNQVRfRUxFTUVOVF9DT01NQU5ELCBrZXkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmFtZT17a2V5fVxyXG4gICAgICAgICAgaXRlbT17aWNvbnNba2V5XX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICAgIGkrK1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1zXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItaXRlbS1ncm91cFwiPntpdGVtc0Rpc3BhdGNoKCkubWFwKChpKSA9PiBpKX08L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWxpZ25UZXh0XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICRnZXRTZWxlY3Rpb24sICRpc1JhbmdlU2VsZWN0aW9uLCBGT1JNQVRfVEVYVF9DT01NQU5EIH0gZnJvbSBcImxleGljYWxcIjtcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0XCI7XHJcbmltcG9ydCBCdG5Gb3JtYXRUZXh0IGZyb20gXCIuL2l0ZW1zL0J0bkZvcm1hdFRleHRcIjtcclxuaW1wb3J0IHtcclxuICBCb2xkLFxyXG4gIEl0YWxpYyxcclxuICBTdHJpa2UsXHJcbiAgU3VwZXJTY3JpcHQsXHJcbiAgVW5kZXJsaW5lLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yL1wiO1xyXG5cclxuY29uc3QgRm9ybWF0VGV4dEdyb3VwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtidG5TdGF0ZXMsIHNldEJ0blN0YXRlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBib2xkOiBmYWxzZSxcclxuICAgIGl0YWxpYzogZmFsc2UsXHJcbiAgICBzdXBlcnNjcmlwdDogZmFsc2UsXHJcbiAgICB1bmRlcmxpbmU6IGZhbHNlLFxyXG4gICAgc3RyaWtldGhyb3VnaDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgYm9sZDogQm9sZCxcclxuICAgIGl0YWxpYzogSXRhbGljLFxyXG4gICAgc3VwZXJzY3JpcHQ6IFN1cGVyU2NyaXB0LFxyXG4gICAgdW5kZXJsaW5lOiBVbmRlcmxpbmUsXHJcbiAgICBzdHJpa2V0aHJvdWdoOiBTdHJpa2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQnRuU3RhdGVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByZXZTdGF0ZSA9IHsgLi4uYnRuU3RhdGVzIH07XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBsZXQgbm9kZSA9IHNlbGVjdGlvbjtcclxuICAgIGlmICgkaXNSYW5nZVNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XHJcbiAgICAgIG5vZGUgPSBzZWxlY3Rpb24uZ2V0Tm9kZXMoKVswXTtcclxuICAgIH1cclxuICAgIGlmIChub2RlICYmIHR5cGVvZiBub2RlLmhhc0Zvcm1hdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJldlN0YXRlKSkge1xyXG4gICAgICAgIHByZXZTdGF0ZVtrZXldID0gbm9kZS5oYXNGb3JtYXQoa2V5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0QnRuU3RhdGVzKHsgLi4ucHJldlN0YXRlIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gZWRpdG9yLnJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIoKHsgZWRpdG9yU3RhdGUsIHRhZ3MgfSkgPT4ge1xyXG4gICAgICBlZGl0b3JTdGF0ZS5yZWFkKCgpID0+IHtcclxuICAgICAgICB1cGRhdGVCdG5TdGF0ZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbZWRpdG9yXSk7XHJcblxyXG4gIGNvbnN0IGl0ZW1zRGlzcGF0Y2ggPSAoKSA9PiB7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhidG5TdGF0ZXMpKSB7XHJcbiAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgPEJ0bkZvcm1hdFRleHRcclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIGFjdGl2ZT17dmFsdWV9XHJcbiAgICAgICAgICBjb21tYW5kPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRvci5mb2N1cygpO1xyXG4gICAgICAgICAgICBlZGl0b3IuZGlzcGF0Y2hDb21tYW5kKEZPUk1BVF9URVhUX0NPTU1BTkQsIGtleSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmFtZT17a2V5fVxyXG4gICAgICAgICAgaXRlbT17aWNvbnNba2V5XX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbXM7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWl0ZW0tZ3JvdXBcIj57aXRlbXNEaXNwYXRjaCgpLm1hcCgoaSkgPT4gaSl9PC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0VGV4dEdyb3VwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dCdcclxuaW1wb3J0IEJ0bkZvcm1hdFRleHQgZnJvbSAnLi9pdGVtcy9CdG5Gb3JtYXRUZXh0J1xyXG5pbXBvcnQgeyBJTlNFUlRfSU1BR0VfQ09NTUFORCB9IGZyb20gJy4uL3BsdWdpbnMvSW1hZ2VQbHVnaW4nXHJcbmltcG9ydCBJbWdNb2RhbCBmcm9tICcuL2l0ZW1zL2ltZ01vZGFsJ1xyXG5pbXBvcnQgeyAkZ2V0Tm9kZUJ5S2V5IH0gZnJvbSAnbGV4aWNhbCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldEltZ0tleSB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L3JlZHVjZXJzL2xleGljYWxTbGljZSdcclxuaW1wb3J0IHsgSW1nIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbi90ZXh0LWVkaXRvcidcclxuXHJcbmNvbnN0IEluc2VydEltZyA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpXHJcbiAgY29uc3QgW2ltZ1Byb3AsIHNldEltZ1Byb3BdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgaW1nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sZXhpY2FsLmltZ0tleSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGltZyAhPT0gbnVsbCA/IG9wZW5Nb2RhbChpbWcpIDogbnVsbFxyXG4gIH0sIFtpbWddKVxyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAoa2V5KSB7XHJcbiAgICAgIFxyXG4gICAgICBlZGl0b3IuZ2V0RWRpdG9yU3RhdGUoKS5yZWFkKCgpID0+IHtcclxuICAgICAgICBjb25zdCBlbCA9ICRnZXROb2RlQnlLZXkoa2V5KVxyXG4gICAgICAgIHNldEltZ1Byb3Aoe1xyXG4gICAgICAgICAgc3JjOiBlbC5fX3NyYyxcclxuICAgICAgICAgIGlzRmlsZTogZWwuX19pc0ZpbGUsXHJcbiAgICAgICAgICBhdEVuZDogZWwuX19hdEVuZCxcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SW1nUHJvcCh7XHJcbiAgICAgICAgc3JjOiBcIlwiLFxyXG4gICAgICAgIGlzRmlsZTogZmFsc2UsXHJcbiAgICAgICAgYXRFbmQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0TW9kYWwodHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGVkaXRJbWcgPSAoe25hbWUsdmFsdWV9KSA9PiB7XHJcbiAgICBcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgZWRpdG9yLnVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSAkZ2V0Tm9kZUJ5S2V5KGltZylcclxuICAgICAgICBjb25zdCBrZXlzID0gZWwuZ2V0V3JpdGFibGUoKVxyXG4gICAgICAgIGtleXNbYF9fJHtuYW1lfWBdID0gdmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0SW1nUHJvcCh7XHJcbiAgICAgIC4uLmltZ1Byb3AsXHJcbiAgICAgIFtuYW1lXSA6IHZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgZGlzcGF0Y2goc2V0SW1nS2V5KG51bGwpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbkluc2VydEltZyA9ICgpID0+IHtcclxuICAgIG9wZW5Nb2RhbChudWxsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlSW1nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBzcmMsIGF0RW5kLCBpc0ZpbGUgfSA9IGltZ1Byb3BcclxuICAgIGVkaXRvci5kaXNwYXRjaENvbW1hbmQoSU5TRVJUX0lNQUdFX0NPTU1BTkQsIHtcclxuICAgICAgc3JjOiBzcmMsXHJcbiAgICAgIGFsdDogbnVsbCxcclxuICAgICAgaXNGaWxlOiBpc0ZpbGUsXHJcbiAgICAgIGF0RW5kOiBhdEVuZFxyXG4gICAgfSlcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWl0ZW0tZ3JvdXBcIj5cclxuICAgICAgPEJ0bkZvcm1hdFRleHQgY29tbWFuZD17b3Blbkluc2VydEltZ30gaXRlbT17SW1nfSAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgbW9kYWwgPyA8SW1nTW9kYWwgY2xvc2U9e2Nsb3NlTW9kYWx9IHVwZGF0ZT17ZWRpdEltZ30gY3JlYXRlPXtpbWcgPyBmYWxzZSA6IHRydWV9IGNvbW1hbmQ9e2NyZWF0ZUltZ30gcHJvcHM9e2ltZ1Byb3B9Lz4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zZXJ0SW1nIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgJGdldE5lYXJlc3ROb2RlT2ZUeXBlIH0gZnJvbSBcIkBsZXhpY2FsL3V0aWxzXCI7XHJcbmltcG9ydCB7ICRnZXRTZWxlY3Rpb24sICRpc1JhbmdlU2VsZWN0aW9uIH0gZnJvbSBcImxleGljYWxcIjtcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgJGlzTGlzdEl0ZW1Ob2RlLFxyXG4gICRpc0xpc3ROb2RlLFxyXG4gIExpc3ROb2RlLFxyXG4gIElOU0VSVF9PUkRFUkVEX0xJU1RfQ09NTUFORCxcclxuICBJTlNFUlRfVU5PUkRFUkVEX0xJU1RfQ09NTUFORCxcclxufSBmcm9tIFwiQGxleGljYWwvbGlzdFwiO1xyXG5pbXBvcnQgQnRuRm9ybWF0VGV4dCBmcm9tIFwiLi9pdGVtcy9CdG5Gb3JtYXRUZXh0XCI7XHJcbmltcG9ydCB7IEJ1bGxldGVkTGlzdCwgTnVtYmVyZWRMaXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2ljb24vdGV4dC1lZGl0b3JcIjtcclxuXHJcbmNvbnN0IExpc3RUeXBlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtidG5TdGF0ZXMsIHNldEJ0blN0YXRlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB1bDogZmFsc2UsXHJcbiAgICBvbDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJ0blN0YXRlcyA9ICgpID0+IHtcclxuICAgIGxldCBwcmV2U3RhdGUgPSB7IC4uLmJ0blN0YXRlcyB9O1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpO1xyXG4gICAgaWYgKCRpc1JhbmdlU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcclxuICAgICAgY29uc3QgYW5jaG9yTm9kZSA9IHNlbGVjdGlvbi5hbmNob3IuZ2V0Tm9kZSgpO1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gYW5jaG9yTm9kZS5nZXRLZXkoKSA9PT0gXCJyb290XCJcclxuICAgICAgICAgID8gYW5jaG9yTm9kZVxyXG4gICAgICAgICAgOiBhbmNob3JOb2RlLmdldFRvcExldmVsRWxlbWVudE9yVGhyb3coKTtcclxuICAgICAgY29uc3QgZWxlbWVudEtleSA9IGVsZW1lbnQuZ2V0S2V5KCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRET00gPSBlZGl0b3IuZ2V0RWxlbWVudEJ5S2V5KGVsZW1lbnRLZXkpO1xyXG4gICAgICBpZiAoZWxlbWVudERPTSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudExpc3QgPSAkZ2V0TmVhcmVzdE5vZGVPZlR5cGUoYW5jaG9yTm9kZSwgTGlzdE5vZGUpXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcmVudExpc3QgPyBwYXJlbnRMaXN0LmdldFRhZygpIDogZWxlbWVudC5nZXRUeXBlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgbGlzdCBpbiBwcmV2U3RhdGUpIHtcclxuICAgICAgICAgIHByZXZTdGF0ZVtsaXN0XSA9IGxpc3QgPT0gdHlwZSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRCdG5TdGF0ZXMocHJldlN0YXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdW5vcmRlcmVkTGlzdCA9ICgpID0+IHtcclxuICAgIGVkaXRvci5mb2N1cygpO1xyXG4gICAgZWRpdG9yLmRpc3BhdGNoQ29tbWFuZChJTlNFUlRfVU5PUkRFUkVEX0xJU1RfQ09NTUFORCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3JkZXJlZExpc3QgPSAoKSA9PiB7XHJcbiAgICBlZGl0b3IuZm9jdXMoKTtcclxuICAgIGVkaXRvci5kaXNwYXRjaENvbW1hbmQoSU5TRVJUX09SREVSRURfTElTVF9DT01NQU5EKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuIGVkaXRvci5yZWdpc3RlclVwZGF0ZUxpc3RlbmVyKCh7IGVkaXRvclN0YXRlIH0pID0+IHtcclxuICAgICAgZWRpdG9yU3RhdGUucmVhZCgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQnRuU3RhdGVzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW2VkaXRvcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWl0ZW0tZ3JvdXBcIj5cclxuICAgICAgPEJ0bkZvcm1hdFRleHQgYWN0aXZlPXtidG5TdGF0ZXMudWx9IGNvbW1hbmQ9e3Vub3JkZXJlZExpc3R9IG5hbWU9XCJ1bm9yZGVyZWQtbGlzdFwiIGl0ZW09e0J1bGxldGVkTGlzdH0vPlxyXG4gICAgICA8QnRuRm9ybWF0VGV4dCBhY3RpdmU9e2J0blN0YXRlcy5vbH0gY29tbWFuZD17b3JkZXJlZExpc3R9IG5hbWU9XCJvcmRlcmVkLWxpc3RcIiBpdGVtPXtOdW1iZXJlZExpc3R9Lz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RUeXBlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyAkZ2V0U2VsZWN0aW9uLCAkaXNSYW5nZVNlbGVjdGlvbiB9IGZyb20gXCJsZXhpY2FsXCI7XHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tIFwiQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyAkcGF0Y2hTdHlsZVRleHQsICRnZXRTZWxlY3Rpb25TdHlsZVZhbHVlRm9yUHJvcGVydHkgfSBmcm9tIFwiQGxleGljYWwvc2VsZWN0aW9uXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9pdGVtcy9Ecm9wZG93blwiO1xyXG5pbXBvcnQgeyBGb3JtYXRTaXplIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2ljb24vdGV4dC1lZGl0b3JcIjtcclxuXHJcbmNvbnN0IFNpemVUZXh0R3JvdXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybWF0ID0gW1xyXG4gICAge25hbWU6IDEyLCB2YWx1ZTogXCIwLjc1cmVtXCJ9LFxyXG4gICAge25hbWU6IDE0LCB2YWx1ZTogXCIwLjg3NXJlbVwifSxcclxuICAgIHtuYW1lOiAxNiwgdmFsdWU6IG51bGx9LFxyXG4gICAge25hbWU6IDE4LCB2YWx1ZTogXCIxLjEyNXJlbVwifSxcclxuICAgIHtuYW1lOiAyMCwgdmFsdWU6IFwiMS4yNXJlbVwifSxcclxuICAgIHtuYW1lOiAyNCwgdmFsdWU6IFwiMS41cmVtXCJ9LFxyXG4gICAge25hbWU6IDMwLCB2YWx1ZTogXCIxLjg3NXJlbVwifSxcclxuICAgIHtuYW1lOiAzNiwgdmFsdWU6IFwiMi4yNXJlbVwifSxcclxuICBdO1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtkcm9wRG93blN0YXRlLCBzZXRERFN0YXRlc10gPSB1c2VTdGF0ZSgxNik7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtldmVudExvZywgc2V0RXZlbnRMb2ddID0gdXNlU3RhdGUoJ2JsdXInKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQnRuU3RhdGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpO1xyXG4gICAgbGV0IHByb3AgPSAkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5KHNlbGVjdGlvbiwgJ2ZvbnQtc2l6ZScpXHJcbiAgICBsZXQgdmFsID0gZm9ybWF0LmZpbmQoZiA9PiBmLnZhbHVlID09PSBwcm9wKSB8fCBmb3JtYXRbMl1cclxuICAgIHNldEREU3RhdGVzKHZhbC5uYW1lKTtcclxuICAgIHZhbC5uYW1lICE9ICcxNicgPyBzZXRBY3RpdmUodHJ1ZSkgOiBzZXRBY3RpdmUoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKCRldmVudCwgdmFsdWUpID0+IHtcclxuICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICBlZGl0b3IudXBkYXRlKCgpID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpXHJcbiAgICAgIGlmICgkaXNSYW5nZVNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XHJcbiAgICAgICAgJHBhdGNoU3R5bGVUZXh0KHNlbGVjdGlvbiwge1xyXG4gICAgICAgICAgJ2ZvbnQtc2l6ZScgOiB2YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVTdGF0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xyXG4gICAgICBjYXNlICdibHVyJzpcclxuICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ2ZvY3VzJzpcclxuICAgICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICAgIGV2ZW50TG9nID09ICdjbGljaycgPyBlZGl0b3IuZm9jdXMoKSA6IG51bGxcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgc2V0RXZlbnRMb2coZS50eXBlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiBlZGl0b3IucmVnaXN0ZXJVcGRhdGVMaXN0ZW5lcigoeyBlZGl0b3JTdGF0ZSB9KSA9PiB7XHJcbiAgICAgIGVkaXRvclN0YXRlLnJlYWQoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJ0blN0YXRlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtlZGl0b3JdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsndG9vbGJhci1pdGVtLXNlbGVjdCcgKyAoYWN0aXZlID8gJyBhY3RpdmUnIDogJycpfVxyXG4gICAgICB0aXRsZT1cImZvbnQtc2l6ZVwiXHJcbiAgICAgIG9uRm9jdXM9e3RvZ2dsZVN0YXRlfVxyXG4gICAgICBvbkJsdXI9e3RvZ2dsZVN0YXRlfVxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVTdGF0ZX1cclxuICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0LXRpdGxlXCI+e2Ryb3BEb3duU3RhdGV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgIDxGb3JtYXRTaXplIGNscz0naWNvbicvPlxyXG4gICAgICB7IHRvZ2dsZSAmJiA8RHJvcGRvd24gaXRlbT17Zm9ybWF0fSBzZWxlY3Q9e2hhbmRsZVNlbGVjdH0vPiB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaXplVGV4dEdyb3VwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgQnRuRm9ybWF0VGV4dCA9ICh7Y29tbWFuZCwgYWN0aXZlLCBpdGVtLCBuYW1lfSkgPT4ge1xyXG4gIGxldCBJdGVtID0gaXRlbVxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICBvbkNsaWNrPXtjb21tYW5kfVxyXG4gICAgICBjbGFzc05hbWU9eyd0b29sYmFyLWl0ZW0nICsgKGFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgPlxyXG4gICAgICAgIHsgSXRlbSAmJiA8SXRlbSBjbHM9J2ljb24nIC8+IH1cclxuICAgIDwvYnV0dG9uPilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdG5Gb3JtYXRUZXh0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRHJvcGRvd24gPSAoe2l0ZW0gLCBzZWxlY3R9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtZHJvcGRvd24nPlxyXG4gICAgICB7XHJcbiAgICAgICAgaXRlbS5tYXAoKHt2YWx1ZSxuYW1lfSxpKSA9PiBcclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGtleT17RGF0ZS5ub3coKStpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Ryb3Bkb3duLW9wdCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygkZXZlbnQpID0+IHNlbGVjdCgkZXZlbnQsIHZhbHVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd24iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEltYWdlRmlsZUlucHV0LCBUeHRMYWJlbElucHV0LCBTd2l0Y2hJbnB1dCB9IGZyb20gJy4uLy4uLy4uL0lucHV0cy9pbmRleCdcclxuaW1wb3J0IENsb3NlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2VcIlxyXG5cclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcbmltcG9ydCB7IGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5cclxuXHJcbmNvbnN0IEltZ01vZGFsID0gKHtjbG9zZSwgdXBkYXRlLCBwcm9wcywgY3JlYXRlLCBjb21tYW5kfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGNmZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCB4bWwgPSBheGlvcy5jcmVhdGUoey4uLmNmZywgaGVhZGVyczogey4uLmNmZy5oZWFkZXJzLCAnQ29udGVudC1UeXBlJyA6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ319KVxyXG4gIGNvbnN0IHsgYXRFbmQsIHNyYywgaXNGaWxlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFticm93c2VyLCBzZXRCcm93c2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgZmlsZVN5cyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kKFwiaW1hZ2VcIiwgZmlsZSlcclxuICAgICAgeG1sLnBvc3QoJy9maWxldXBsb2FkJywgZm9ybSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBtc2c6IFwiaW1hZ2UgaW1wb3J0w6llICFcIlxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICAgIHVwZGF0ZSh7IFxyXG4gICAgICAgICAgICBuYW1lOiAnc3JjJyxcclxuICAgICAgICAgICAgdmFsdWU6IGAke2RhdGEucGF0aH0vJHtkYXRhLm5hbWV9YFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbWdCcm93c2UgPSAoKSA9PiB7XHJcbiAgICBzZXRCcm93c2VyKHRydWUpO1xyXG4gICAgeG1sLmdldCgnL2ltZ2Jyb3dzZXInKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgIHNldEZpbGVzKHtcclxuICAgICAgICAgIGxpc3Q6IFsuLi5kYXRhLmZpbGVzXSxcclxuICAgICAgICAgIHBhdGg6IGRhdGEucGF0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRJbWcgPSAoc3JjKSA9PiB7XHJcbiAgICB1cGRhdGUoe1xyXG4gICAgICBuYW1lOiAnc3JjJywgXHJcbiAgICAgIHZhbHVlOiBgJHtmaWxlcy5wYXRofS8ke3NyY31gXHJcbiAgICB9KVxyXG4gICAgc2V0QnJvd3NlcihmYWxzZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd0b29sYmFyLW1vZGFsJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLXRpdGxlYmFyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtdGV4dCcgPkltYWdlIDo8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBkYW5nZXJcIiBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cImljb25cIiAvPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWNvbnRlbnQnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyb3dzZXIgJiYgaXNGaWxlXHJcbiAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1pbWctYnJvd3Nlcic+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBmaWxlcyBcclxuICAgICAgICAgICAgICAgID8gZmlsZXMubGlzdC5tYXAoKGZpbGUsIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7RGF0ZS5ub3coKX0tJHtpfWB9IGNsYXNzTmFtZT0naW1nLWl0ZW0nIG9uQ2xpY2s9eygpID0+IHNldEltZyhmaWxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ZpbGVzLnBhdGh9LyR7ZmlsZX1gfSBjbGFzc05hbWU9J3ctZnVsbCBtLWF1dG8nIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncC0yIHVuZGVybGluZScgPlR5cGUgZCdpbWFnZSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTEgcHgtMic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17J2ZvbnQtYm9sZCcgKyAoIWlzRmlsZSA/ICcgY29sb3Itc2Vjb25kYXJ5JyA6IFwiXCIpfT5FbiBsaWduZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaElucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xzPSdzZWNvbmRhcnkgbmV1dHJhbCcgXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2U9eygpID0+IHVwZGF0ZShcclxuICAgICAgICAgICAgICAgICAge25hbWU6J2lzRmlsZScsIHZhbHVlOiAhaXNGaWxlfVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lzRmlsZX0gLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnZm9udC1ib2xkJyArIChpc0ZpbGUgPyAnIGNvbG9yLXNlY29uZGFyeScgOiBcIlwiKX0+TG9jYWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xIHJlbGF0aXZlJz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNyYyAmJiBzcmMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgID8gPGxhYmVsIGNsYXNzTmFtZT0naW1nLW5hbWUnID48ZGl2IGNsYXNzTmFtZT0nYmFkZ2UnPkltYWdlIDo8L2Rpdj48ZGl2IGNsYXNzTmFtZT0naW1nLW5hbWUtdHh0Jz57ZW5kT2ZQYXRoKHNyYykucmVwbGFjZSgvXlxcWy4rXFxdLXxeXFwvXFxbLitcXF0tL2csJycpfTwvZGl2PjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBpc0ZpbGUgXHJcbiAgICAgICAgICAgICAgPyA8SW1hZ2VGaWxlSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIGNscz1cImZsZXggZ2FwLTEgcC0xXCJcclxuICAgICAgICAgICAgICAgICAgYWRkQ2xzPSdidG4gc2Vjb25kYXJ5IHAtMSB3LTcgZ3Jvdy0wJ1xyXG4gICAgICAgICAgICAgICAgICBicm93c2U9XCJidG4gcC0xIGdyZXkgZ3JvdyBibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VuZEZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2U9e2ZpbGVTeXN9XHJcbiAgICAgICAgICAgICAgICAgIGltZ0Jyb3dzZT17aW1nQnJvd3NlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA6IDxUeHRMYWJlbElucHV0IFxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJodHRwczovLy4uLi5cIn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHJlc3NlIDpcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgICAgICAgIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5J1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dENscz1cImlucHV0LXR4dCBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidXJsSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3JjfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZSh7bmFtZTonc3JjJyx2YWx1ZTogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3AtMiB1bmRlcmxpbmUnID5Qb3NpdGlvbiA6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LTEgcHgtMic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17J2ZvbnQtYm9sZCcgKyAoIWF0RW5kID8gJyBjb2xvci1zZWNvbmRhcnknIDogXCJcIil9PkdhdWNoZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaElucHV0IGNscz0nc2Vjb25kYXJ5IG5ldXRyYWwnIHZhbHVlPXthdEVuZH0gY2hhbmdlPXsoKSA9PiB1cGRhdGUoe25hbWU6J2F0RW5kJyx2YWx1ZTogIWF0RW5kfSl9Lz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnZm9udC1ib2xkJyArIChhdEVuZCA/ICcgY29sb3Itc2Vjb25kYXJ5JyA6IFwiXCIpfT5Ecm9pdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsgY3JlYXRlIFxyXG4gICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPSdweS0xIHB4LTInPjxidXR0b24gY2xhc3NOYW1lPSdidG4gc2Vjb25kYXJ5IHctZnVsbCByb3VuZGVkLWxnIHAtMScgb25DbGljaz17Y29tbWFuZH0+SW5zw6lyZXI8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nTW9kYWwiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERlY29yYXRvck5vZGUgfSBmcm9tIFwibGV4aWNhbFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9JbWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwXCI7XHJcblxyXG5jb25zdCBjb252ZXJ0SW1nRWxlbWVudCA9IGRvbU5vZGUgPT4ge1xyXG4gIGlmIChkb21Ob2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgY29uc3QgeyBhbHQ6IGFsdFRleHQsIHNyYyB9ID0gZG9tTm9kZTtcclxuICAgIGNvbnN0IGF0RW5kID0gZ2V0Qm9vbGVhbkZyb21TdHJpbmcoZG9tTm9kZS5nZXRBdHRyaWJ1dGUoXCJhdF9lbmRcIikpXHJcbiAgICBjb25zdCBpc0ZpbGUgPSBnZXRCb29sZWFuRnJvbVN0cmluZyhkb21Ob2RlLmdldEF0dHJpYnV0ZShcInNhdmVkXCIpKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9kZTogJGNyZWF0ZUltYWdlTm9kZSh7XHJcbiAgICAgICAgYWx0VGV4dCxcclxuICAgICAgICBzcmMsXHJcbiAgICAgICAgYXRFbmQ6IGF0RW5kLFxyXG4gICAgICAgIGlzRmlsZTogaXNGaWxlLFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlTm9kZSBleHRlbmRzIERlY29yYXRvck5vZGUge1xyXG4gIF9fc3JjO1xyXG4gIF9fYWx0VGV4dDtcclxuICBfX2F0RW5kO1xyXG4gIF9faXNGaWxlO1xyXG5cclxuICBleHBvcnRET00oKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5fX3NyYyk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgdGhpcy5fX2FsdFRleHQpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKFwiYXRfZW5kXCIsIHRoaXMuX19hdEVuZCk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzYXZlZFwiLCB0aGlzLl9faXNGaWxlKTtcclxuICAgIHJldHVybiB7IGVsZW1lbnQ6IGVsIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW1wb3J0RE9NKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW1nOiBub2RlID0+ICh7XHJcbiAgICAgICAgY29udmVyc2lvbjogY29udmVydEltZ0VsZW1lbnQsXHJcbiAgICAgICAgcHJpb3JpdHk6IDAsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUeXBlKCkge1xyXG4gICAgcmV0dXJuIFwiaW1hZ2VcIjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbG9uZShub2RlKSB7XHJcbiAgICByZXR1cm4gbmV3IEltYWdlTm9kZSh7XHJcbiAgICAgIHNyYzogbm9kZS5fX3NyYyxcclxuICAgICAgYWx0VGV4dDogbm9kZS5fX2FsdFRleHQsXHJcbiAgICAgIGF0RW5kOiBub2RlLl9fYXRFbmQsXHJcbiAgICAgIGtleTogbm9kZS5fX2tleSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc3JjLCBhbHRUZXh0LCBrZXksIGF0RW5kLCBpc0ZpbGUgfSA9IHByb3BzO1xyXG4gICAgc3VwZXIoa2V5KTtcclxuICAgIHRoaXMuX19hbHRUZXh0ID0gYWx0VGV4dCB8fCBudWxsO1xyXG4gICAgdGhpcy5fX3NyYyA9IHNyYztcclxuICAgIHRoaXMuX19hdEVuZCA9IGF0RW5kIHx8IGZhbHNlO1xyXG4gICAgdGhpcy5fX2lzRmlsZSA9IGlzRmlsZSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIFZpZXdcclxuXHJcbiAgY3JlYXRlRE9NKGNvbmZpZykge1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGVtZS5pbWFnZTtcclxuICAgIGlmIChjbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9fYXRFbmQpIHtcclxuICAgICAgc3Bhbi5jbGFzc05hbWUgKz0gXCIgYXQtZW5kXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BhbjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURPTSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3JjKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19zcmM7XHJcbiAgfVxyXG5cclxuICBnZXRBbHRUZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX19hbHRUZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0QXRFbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fX2F0RW5kO1xyXG4gIH1cclxuXHJcbiAgc2V0QXRFbmQoc2V0KSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcy5nZXRXcml0YWJsZSgpO1xyXG4gICAgc2VsZi5fX2F0RW5kID0gc2V0O1xyXG4gIH1cclxuXHJcbiAgZGVjb3JhdGUoKSB7XHJcbiAgICBjb25zdCB7IF9fc3JjLCBfX2FsdFRleHQsIF9fa2V5IH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIDxJbWFnZSBzcmM9e19fc3JjfSBhbHQ9e19fYWx0VGV4dH0gZGVjb3JhdGVLZXk9e19fa2V5fSAvPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCAkY3JlYXRlSW1hZ2VOb2RlID0gKHsgYWx0VGV4dCwgYXRFbmQsIGlzRmlsZSwgc3JjLCBrZXkgfSkgPT4ge1xyXG4gIHJldHVybiBuZXcgSW1hZ2VOb2RlKHtcclxuICAgIGFsdFRleHQsXHJcbiAgICBhdEVuZCxcclxuICAgIGlzRmlsZSxcclxuICAgIHNyYyxcclxuICAgIGtleSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkaXNJbWFnZU5vZGUobm9kZSkge1xyXG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgSW1hZ2VOb2RlO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0SW1nS2V5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvbGV4aWNhbFNsaWNlJ1xyXG5cclxuY29uc3QgSW1hZ2UgPSAoe3NyYyxhbHRUZXh0LGRlY29yYXRlS2V5fSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17c3JjfVxyXG4gICAgICBhbHQ9e2FsdFRleHR9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldEltZ0tleShkZWNvcmF0ZUtleSkpfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBMZXhpY2FsQ29tcG9zZXIgfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXInO1xyXG5pbXBvcnQgeyBSaWNoVGV4dFBsdWdpbiB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxSaWNoVGV4dFBsdWdpbic7XHJcbmltcG9ydCB7IExpc3RQbHVnaW4gfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsTGlzdFBsdWdpbidcclxuaW1wb3J0IHsgTGlzdE5vZGUsIExpc3RJdGVtTm9kZSB9IGZyb20gJ0BsZXhpY2FsL2xpc3QnXHJcbmltcG9ydCB7IENvbnRlbnRFZGl0YWJsZSB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb250ZW50RWRpdGFibGUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5UGx1Z2luIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbEhpc3RvcnlQbHVnaW4nO1xyXG5pbXBvcnQgTGV4aWNhbEVycm9yQm91bmRhcnkgZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbEVycm9yQm91bmRhcnknO1xyXG5pbXBvcnQgRm9ybWF0VGV4dEdyb3VwIGZyb20gJy4vQWN0aW9ucy9Gb3JtYXRUZXh0R3JvdXAnO1xyXG5pbXBvcnQgU2l6ZVRleHRHcm91cCBmcm9tICcuL0FjdGlvbnMvU2l6ZVRleHRHcm91cCc7XHJcbmltcG9ydCBMaXN0VHlwZSBmcm9tICcuL0FjdGlvbnMvTGlzdFR5cGUnO1xyXG5pbXBvcnQgQWxpZ25UZXh0IGZyb20gJy4vQWN0aW9ucy9BbGlnblRleHQnO1xyXG5pbXBvcnQgeyBJbWFnZU5vZGUgfSBmcm9tICcuL05vZGVzL0ltYWdlTm9kZSdcclxuaW1wb3J0IEluc2VydEltZyBmcm9tICcuL0FjdGlvbnMvSW5zZXJ0SW1nJztcclxuaW1wb3J0IHsgSW1hZ2VQbHVnaW4gfSBmcm9tICcuL3BsdWdpbnMvSW1hZ2VQbHVnaW4nO1xyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbXBvc2VyQ29udGV4dCc7XHJcbmltcG9ydCB7ICRnZW5lcmF0ZU5vZGVzRnJvbURPTSwgJGdlbmVyYXRlSHRtbEZyb21Ob2RlcyB9IGZyb20gJ0BsZXhpY2FsL2h0bWwnO1xyXG5pbXBvcnQgeyAkZ2V0Um9vdCwgJGluc2VydE5vZGVzLCAkc2V0U2VsZWN0aW9uIH0gZnJvbSAnbGV4aWNhbCc7XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBwYXJhZ3JhcGg6ICdwYXJhZ3JhcGgnLFxyXG4gIHRleHQ6IHtcclxuICAgIGJvbGQ6ICd0ZXh0LWJvbGQnLFxyXG4gICAgaXRhbGljOiAndGV4dC1pdGFsaWMnLFxyXG4gICAgc3RyaWtldGhyb3VnaDogJ3RleHQtdGhyb3VnaCcsXHJcbiAgICB1bmRlcmxpbmU6ICd0ZXh0LXVuZGVybGluZScsXHJcbiAgICB1bmRlcmxpbmVTdHJpa2V0aHJvdWdoOiAndGV4dC11bmRlcmxpbmUtdGhyb3VnaCcsXHJcbiAgICBzdXBlcnNjcmlwdDogJ3RleHQtc3VwZXJzY3JpcHQnLFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgb2w6IFwibGlzdC1vcmRlcmVkXCIsXHJcbiAgICB1bDogXCJsaXN0LXVub3JkZXJlZFwiLFxyXG4gICAgbGlzdGl0ZW06IFwibGlzdC1pdGVtXCJcclxuICB9LFxyXG4gIGltYWdlOiBcImltYWdlXCJcclxufVxyXG5cclxuY29uc3QgSW5pdGlhbEh0bWxQbHVnaW4gPSAoe2RhdGEsdXBkYXRlfSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpXHJcbiAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICBjb25zdCB1cGRhdGVNRGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGh0bWwgPSAkZ2VuZXJhdGVIdG1sRnJvbU5vZGVzKGVkaXRvciwgbnVsbClcclxuICAgIHVwZGF0ZShodG1sKVxyXG4gIH1cclxuXHJcbiAgZWRpdG9yLnJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIoKHtlZGl0b3JTdGF0ZX0pID0+IGVkaXRvclN0YXRlLnJlYWQodXBkYXRlTURhdGEpKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgICAhaHRtbFxyXG4gICAgPyBlZGl0b3IudXBkYXRlKCgpID0+IHtcclxuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpXHJcbiAgICAgIGNvbnN0IGRvbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZGF0YSwgXCJ0ZXh0L2h0bWxcIilcclxuXHJcbiAgICAgIGNvbnN0IG5vZGVzID0gJGdlbmVyYXRlTm9kZXNGcm9tRE9NKGVkaXRvciwgZG9tKVxyXG5cclxuICAgICAgJGdldFJvb3QoKS5zZWxlY3QoKVxyXG5cclxuICAgICAgJGluc2VydE5vZGVzKG5vZGVzKVxyXG4gICAgICAkc2V0U2VsZWN0aW9uKG51bGwpXHJcbiAgICAgIHNldEh0bWwodHJ1ZSlcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgOiBudWxsXHJcblxyXG4gIH0sIFtlZGl0b3JdKVxyXG59XHJcbi8vIENhdGNoIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkdXJpbmcgTGV4aWNhbCB1cGRhdGVzIGFuZCBsb2cgdGhlbVxyXG4vLyBvciB0aHJvdyB0aGVtIGFzIG5lZWRlZC4gSWYgeW91IGRvbid0IHRocm93IHRoZW0sIExleGljYWwgd2lsbFxyXG4vLyB0cnkgdG8gcmVjb3ZlciBncmFjZWZ1bGx5IHdpdGhvdXQgbG9zaW5nIHVzZXIgZGF0YS5cclxuY29uc3Qgb25FcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG59XHJcblxyXG5jb25zdCBFZGl0b3IgPSAoeyBkYXRhLCB1cGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxDb25maWcgPSB7XHJcbiAgICBuYW1lc3BhY2U6ICdNeUVkaXRvcicsIFxyXG4gICAgdGhlbWUsXHJcbiAgICBvbkVycm9yLFxyXG4gICAgbm9kZXM6IFtcclxuICAgICAgTGlzdE5vZGUsXHJcbiAgICAgIExpc3RJdGVtTm9kZSxcclxuICAgICAgSW1hZ2VOb2RlXHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMZXhpY2FsQ29tcG9zZXIgaW5pdGlhbENvbmZpZz17aW5pdGlhbENvbmZpZ30+XHJcbiAgICAgIDxJbml0aWFsSHRtbFBsdWdpbiBkYXRhPXtkYXRhfSB1cGRhdGU9e3VwZGF0ZX0vPlxyXG4gICAgICA8TGlzdFBsdWdpbiAvPlxyXG4gICAgICA8SGlzdG9yeVBsdWdpbiAvPlxyXG4gICAgICA8SW1hZ2VQbHVnaW4gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZWRpdG9yJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbGJhci1lZGl0b3InPlxyXG4gICAgICAgICAgPEZvcm1hdFRleHRHcm91cCAvPiA8U2l6ZVRleHRHcm91cCAvPiA8TGlzdFR5cGUgLz5cclxuICAgICAgICAgIDxBbGlnblRleHQgLz4gPEluc2VydEltZyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWVkaXRvcic+XHJcbiAgICAgICAgICA8UmljaFRleHRQbHVnaW5cclxuICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPXs8Q29udGVudEVkaXRhYmxlIGNsYXNzTmFtZT0nZWRpdG9yLXRleHQnLz59XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXs8ZGl2IGNsYXNzTmFtZT0nZWRpdG9yLXBsYWNlaG9sZGVyJz5Db250ZW51Li4uPC9kaXY+fVxyXG4gICAgICAgICAgICBFcnJvckJvdW5kYXJ5PXtMZXhpY2FsRXJyb3JCb3VuZGFyeX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvTGV4aWNhbENvbXBvc2VyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgJHdyYXBOb2RlSW5FbGVtZW50LCBtZXJnZVJlZ2lzdGVyIH0gZnJvbSBcIkBsZXhpY2FsL3V0aWxzXCJcclxuaW1wb3J0IHtcclxuICAkY3JlYXRlUGFyYWdyYXBoTm9kZSxcclxuICAkaW5zZXJ0Tm9kZXMsXHJcbiAgJGlzUm9vdE9yU2hhZG93Um9vdCxcclxuICBDT01NQU5EX1BSSU9SSVRZX0VESVRPUixcclxuICBjcmVhdGVDb21tYW5kLFxyXG59IGZyb20gXCJsZXhpY2FsXCJcclxuXHJcbmltcG9ydCB7ICRjcmVhdGVJbWFnZU5vZGUsIEltYWdlTm9kZSB9IGZyb20gXCIuLi9Ob2Rlcy9JbWFnZU5vZGVcIlxyXG5cclxuY29uc3QgSU5TRVJUX0lNQUdFX0NPTU1BTkQgPSBjcmVhdGVDb21tYW5kKFwiSU5TRVJUX0lNQUdFX0NPTU1BTkRcIilcclxuXHJcbmNvbnN0IEltYWdlUGx1Z2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWVkaXRvci5oYXNOb2RlcyhbSW1hZ2VOb2RlXSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2VzUGx1Z2luOiBJbWFnZU5vZGUgbm90IHJlZ2lzdGVyZWQgb24gZWRpdG9yXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1lcmdlUmVnaXN0ZXIoXHJcbiAgICAgIGVkaXRvci5yZWdpc3RlckNvbW1hbmQoXHJcbiAgICAgICAgSU5TRVJUX0lNQUdFX0NPTU1BTkQsXHJcbiAgICAgICAgKHBheWxvYWQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGltZ05vZGUgPSAkY3JlYXRlSW1hZ2VOb2RlKHBheWxvYWQpO1xyXG4gICAgICAgICAgJGluc2VydE5vZGVzKFtpbWdOb2RlXSlcclxuICAgICAgICAgIGlmICgkaXNSb290T3JTaGFkb3dSb290KGltZ05vZGUuZ2V0UGFyZW50T3JUaHJvdygpKSkge1xyXG4gICAgICAgICAgICAkd3JhcE5vZGVJbkVsZW1lbnQoaW1nTm9kZSwgJGNyZWF0ZVBhcmFncmFwaE5vZGUpLnNlbGVjdEVuZCgpO1xyXG4gICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ09NTUFORF9QUklPUklUWV9FRElUT1JcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH0sIFtlZGl0b3JdKVxyXG5cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgeyBJTlNFUlRfSU1BR0VfQ09NTUFORCwgSW1hZ2VQbHVnaW4gfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvSW5mbydcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1N1Y2Nlc3MnXHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9XYXJuaW5nJ1xyXG5pbXBvcnQgRGFuZ2VyIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9EYW5nZXInXHJcbmltcG9ydCB7IG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcblxyXG5jb25zdCBUb2FzdCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24pXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBtc2csIHR5cGUsIHN0YXR1cyB9ID0gZGF0YVxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgJ0luZm8nOiA8SW5mbyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnU3VjY2Vzcyc6IDxTdWNjZXNzIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdXYXJuaW5nJzogPFdhcm5pbmcgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ0Rhbmdlcic6IDxEYW5nZXIgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0b2FzdCAke3R5cGV9ICR7c3RhdHVzfWB9IFxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnc3RheSd9KSl9IFxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnY2xvc2UnLCBmdW5jOiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCAxNDAwKX0pICl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZS1pY29uJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbnNbY2FwaXRhbGl6ZSh0eXBlKV1cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtYnRuJz48YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlfT48Q2xvc2UgY2xzPVwiaC01IHctNVwiIC8+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtY29udGVudCc+XHJcbiAgICAgICAgeyBtc2cgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9hc3QiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vSW5wdXRzL0J1dHRvbidcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi9Db250ZW50TmF2J1xyXG5pbXBvcnQgQ1NSRklucHV0IGZyb20gJy4vQ1NSRklucHV0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi9OYXZMaSdcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4vUGFnZXNDb250YWluZXInXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xyXG5pbXBvcnQgQWN0aW9uc1JvdyBmcm9tICcuL0FjdGlvbnNSb3cnXHJcbmltcG9ydCBNb2RhbEVkaXRvciBmcm9tICcuL01vZGFsRWRpdG9yJ1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnLi9SaWNoVGV4dC8nXHJcblxyXG5leHBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250ZW50TmF2LFxyXG4gIENTUkZJbnB1dCxcclxuICBOYXZMaSxcclxuICBQYWdlc0NvbnRhaW5lcixcclxuICBUb2FzdCxcclxuICBBY3Rpb25zUm93LFxyXG4gIE1vZGFsRWRpdG9yLFxyXG4gIFJpY2hUZXh0XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rTG9hZCwgc2V0TGlua0xvYWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYbWxIdHRwUmVxdWVzdFwiOiB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWxpbmtMb2FkID8gYWpheC5nZXQoJy9wYWdlLWxpc3QnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YV0pXHJcbiAgICB9KSA6IG51bGxcclxuICB9LCBbbGlua0xvYWRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IEd1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXgnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICA8Um91dGVyPlxyXG4gICAgPEd1ZXN0IC8+XHJcbiAgPC9Sb3V0ZXI+XHJcbjwvUmVhY3QuU3RyaWN0TW9kZT5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9hZG1pbi9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIlxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9hZG1pbi9yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY29uc3QgTWFpbkFkbWluID0gKCkgPT5cclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BZG1pbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEFkZCA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0yNCAzOHEtLjY1IDAtMS4wNzUtLjQyNS0uNDI1LS40MjUtLjQyNS0xLjA3NXYtMTFoLTExcS0uNjUgMC0xLjA3NS0uNDI1UTEwIDI0LjY1IDEwIDI0cTAtLjY1LjQyNS0xLjA3NS40MjUtLjQyNSAxLjA3NS0uNDI1aDExdi0xMXEwLS42NS40MjUtMS4wNzVRMjMuMzUgMTAgMjQgMTBxLjY1IDAgMS4wNzUuNDI1LjQyNS40MjUuNDI1IDEuMDc1djExaDExcS42NSAwIDEuMDc1LjQyNVEzOCAyMy4zNSAzOCAyNHEwIC42NS0uNDI1IDEuMDc1LS40MjUuNDI1LTEuMDc1LjQyNWgtMTF2MTFxMCAuNjUtLjQyNSAxLjA3NVEyNC42NSAzOCAyNCAzOFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENhbGVuZGFyID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA2NTZxLTE3IDAtMjguNS0xMS41VDQ0MCA2MTZxMC0xNyAxMS41LTI4LjVUNDgwIDU3NnExNyAwIDI4LjUgMTEuNVQ1MjAgNjE2cTAgMTctMTEuNSAyOC41VDQ4MCA2NTZabS0xNjAgMHEtMTcgMC0yOC41LTExLjVUMjgwIDYxNnEwLTE3IDExLjUtMjguNVQzMjAgNTc2cTE3IDAgMjguNSAxMS41VDM2MCA2MTZxMCAxNy0xMS41IDI4LjVUMzIwIDY1NlptMzIwIDBxLTE3IDAtMjguNS0xMS41VDYwMCA2MTZxMC0xNyAxMS41LTI4LjVUNjQwIDU3NnExNyAwIDI4LjUgMTEuNVQ2ODAgNjE2cTAgMTctMTEuNSAyOC41VDY0MCA2NTZaTTQ4MCA4MTZxLTE3IDAtMjguNS0xMS41VDQ0MCA3NzZxMC0xNyAxMS41LTI4LjVUNDgwIDczNnExNyAwIDI4LjUgMTEuNVQ1MjAgNzc2cTAgMTctMTEuNSAyOC41VDQ4MCA4MTZabS0xNjAgMHEtMTcgMC0yOC41LTExLjVUMjgwIDc3NnEwLTE3IDExLjUtMjguNVQzMjAgNzM2cTE3IDAgMjguNSAxMS41VDM2MCA3NzZxMCAxNy0xMS41IDI4LjVUMzIwIDgxNlptMzIwIDBxLTE3IDAtMjguNS0xMS41VDYwMCA3NzZxMC0xNyAxMS41LTI4LjVUNjQwIDczNnExNyAwIDI4LjUgMTEuNVQ2ODAgNzc2cTAgMTctMTEuNSAyOC41VDY0MCA4MTZaTTE4MCA5NzZxLTI0IDAtNDItMTh0LTE4LTQyVjI5NnEwLTI0IDE4LTQydDQyLTE4aDY1di0yOHEwLTEzLjYgOS4yLTIyLjggOS4yLTkuMiAyMi44LTkuMiAxNC4wMjUgMCAyMy41MTMgOS4yUTMxMCAxOTQuNCAzMTAgMjA4djI4aDM0MHYtMjhxMC0xMy42IDkuMi0yMi44IDkuMi05LjIgMjIuOC05LjIgMTQuMDI1IDAgMjMuNTEzIDkuMlE3MTUgMTk0LjQgNzE1IDIwOHYyOGg2NXEyNCAwIDQyIDE4dDE4IDQydjYyMHEwIDI0LTE4IDQydC00MiAxOEgxODBabTAtNjBoNjAwVjQ4NkgxODB2NDMwWm0wLTQ5MGg2MDBWMjk2SDE4MHYxMzBabTAgMFYyOTZ2MTMwWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDaGVja2VkID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTguOSAzNS4xcS0uMyAwLS41NS0uMS0uMjUtLjEtLjUtLjM1TDguOCAyNS42cS0uNDUtLjQ1LS40NS0xLjEgMC0uNjUuNDUtMS4xLjQ1LS40NSAxLjA1LS40NS42IDAgMS4wNS40NWw4IDggMTguMTUtMTguMTVxLjQ1LS40NSAxLjA3NS0uNDV0MS4wNzUuNDVxLjQ1LjQ1LjQ1IDEuMDc1VDM5LjIgMTUuNEwxOS45NSAzNC42NXEtLjI1LjI1LS41LjM1LS4yNS4xLS41NS4xWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tlZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENsb3NlID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDYxOCAyNzAgODI4cS05IDktMjEgOXQtMjEtOXEtOS05LTktMjF0OS0yMWwyMTAtMjEwLTIxMC0yMTBxLTktOS05LTIxdDktMjFxOS05IDIxLTl0MjEgOWwyMTAgMjEwIDIxMC0yMTBxOS05IDIxLTl0MjEgOXE5IDkgOSAyMXQtOSAyMUw1MjIgNTc2bDIxMCAyMTBxOSA5IDkgMjF0LTkgMjFxLTkgOS0yMSA5dC0yMS05TDQ4MCA2MThaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEYW5nZXIgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTE3Ljc1IDQycS0uNiAwLTEuMTc1LS4yNS0uNTc1LS4yNS0uOTc1LS42NWwtOC43LTguN3EtLjQtLjQtLjY1LS45NzVUNiAzMC4yNXYtMTIuNXEwLS42LjI1LTEuMTc1LjI1LS41NzUuNjUtLjk3NWw4LjctOC43cS40LS40Ljk3NS0uNjVUMTcuNzUgNmgxMi41cS42IDAgMS4xNzUuMjUuNTc1LjI1Ljk3NS42NWw4LjcgOC43cS40LjQuNjUuOTc1VDQyIDE3Ljc1djEyLjVxMCAuNi0uMjUgMS4xNzUtLjI1LjU3NS0uNjUuOTc1bC04LjcgOC43cS0uNC40LS45NzUuNjVUMzAuMjUgNDJaTTI0IDMzLjk1cS43IDAgMS4yMjUtLjUyNS41MjUtLjUyNS41MjUtMS4yMjUgMC0uNy0uNTI1LTEuMjI1UTI0LjcgMzAuNDUgMjQgMzAuNDVxLS43IDAtMS4yMjUuNTI1LS41MjUuNTI1LS41MjUgMS4yMjUgMCAuNy41MjUgMS4yMjUuNTI1LjUyNSAxLjIyNS41MjVabTAtNy4ycS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE1LjFxMC0uNjUtLjQyNS0xLjA3NVEyNC42NSAxMy42IDI0IDEzLjZxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djEwLjE1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVpNMTcuNzUgMzloMTIuNUwzOSAzMC4yNXYtMTIuNUwzMC4yNSA5aC0xMi41TDkgMTcuNzV2MTIuNVpNMjQgMjRaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYW5nZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEZWxldGUgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEzLjA1IDQycS0xLjIgMC0yLjEtLjktLjktLjktLjktMi4xVjEwLjVIOS41cS0uNjUgMC0xLjA3NS0uNDI1UTggOS42NSA4IDlxMC0uNjUuNDI1LTEuMDc1UTguODUgNy41IDkuNSA3LjVoNy45cTAtLjY1LjQyNS0xLjA3NVExOC4yNSA2IDE4LjkgNmgxMC4ycS42NSAwIDEuMDc1LjQyNS40MjUuNDI1LjQyNSAxLjA3NWg3LjlxLjY1IDAgMS4wNzUuNDI1UTQwIDguMzUgNDAgOXEwIC42NS0uNDI1IDEuMDc1LS40MjUuNDI1LTEuMDc1LjQyNWgtLjU1VjM5cTAgMS4yLS45IDIuMS0uOS45LTIuMS45Wm0wLTMxLjVWMzloMjEuOVYxMC41Wm01LjMgMjIuN3EwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjUuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNi4yNXEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1Wm04LjMgMHEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjUuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNi4yNXEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1Wm0tMTMuNi0yMi43VjM5IDEwLjVaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFZGl0ID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk05IDM5aDIuMmwyMi4xNS0yMi4xNS0yLjItMi4yTDkgMzYuOFptMzAuNy0yNC4zLTYuNC02LjQgMi4xLTIuMXEuODUtLjg1IDIuMTI1LS44MjUgMS4yNzUuMDI1IDIuMTI1Ljg3NUw0MS44IDguNHEuODUuODUuODUgMi4xdC0uODUgMi4xWk03LjUgNDJxLS42NSAwLTEuMDc1LS40MjVRNiA0MS4xNSA2IDQwLjV2LTQuM3EwLS4zLjEtLjU1LjEtLjI1LjM1LS41TDMxLjIgMTAuNGw2LjQgNi40LTI0Ljc1IDI0Ljc1cS0uMjUuMjUtLjUuMzUtLjI1LjEtLjU1LjFabTI0Ljc1LTI2LjI1LTEuMS0xLjEgMi4yIDIuMlpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFeHBhbmQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA3MTEgMjQwIDQ3MWw0My00MyAxOTcgMTk4IDE5Ny0xOTcgNDMgNDMtMjQwIDIzOVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZpbHRlciA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ0MCA4OTZxLTE3IDAtMjguNS0xMS41VDQwMCA4NTZWNjE2TDE2MSAzMTFxLTE0LTE3LTQtMzZ0MzEtMTloNTg0cTIxIDAgMzEgMTl0LTQgMzZMNTYwIDYxNnYyNDBxMCAxNy0xMS41IDI4LjVUNTIwIDg5NmgtODBabTQwLTI3NiAyNDAtMzA0SDI0MGwyNDAgMzA0Wm0wIDBaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmZvID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjQuMTUgMzRxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTkuMDVxMC0uNi0uNDUtMS4wMjVRMjQuNzUgMjIgMjQuMTUgMjJxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djkuMDVxMCAuNi40NSAxLjAyNS40NS40MjUgMS4wNS40MjVaTTI0IDE4LjNxLjcgMCAxLjE3NS0uNDUuNDc1LS40NS40NzUtMS4xNXQtLjQ3NS0xLjJRMjQuNyAxNSAyNCAxNXEtLjcgMC0xLjE3NS41LS40NzUuNS0uNDc1IDEuMnQuNDc1IDEuMTVxLjQ3NS40NSAxLjE3NS40NVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcgMCAxMi01dDUtMTJxMC03LTUtMTJUMjQgN3EtNyAwLTEyIDVUNyAyNHEwIDcgNSAxMnQxMiA1WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNZW51ID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNTMuMzMzIDgyMy40OTNxLTE2IDAtMjYuOTM4LTEwLjk3Mi0xMC45MzktMTAuOTcyLTEwLjkzOS0yNy4wMjIgMC0xNi4wNDkgMTAuOTM5LTI2LjkwNCAxMC45MzgtMTAuODU1IDI2LjkzOC0xMC44NTVoNjUzLjMzNHExNiAwIDI2LjkzOCAxMC45NzEgMTAuOTM5IDEwLjk3MiAxMC45MzkgMjcuMDIyIDAgMTYuMDUtMTAuOTM5IDI2LjkwNS0xMC45MzggMTAuODU1LTI2LjkzOCAxMC44NTVIMTUzLjMzM1ptMC0yMDkuNjE2cS0xNiAwLTI2LjkzOC0xMC45NzItMTAuOTM5LTEwLjk3Mi0xMC45MzktMjcuMDIyIDAtMTYuMDUgMTAuOTM5LTI2LjkwNSAxMC45MzgtMTAuODU1IDI2LjkzOC0xMC44NTVoNjUzLjMzNHExNiAwIDI2LjkzOCAxMC45NzIgMTAuOTM5IDEwLjk3MiAxMC45MzkgMjcuMDIyIDAgMTYuMDUtMTAuOTM5IDI2LjkwNS0xMC45MzggMTAuODU1LTI2LjkzOCAxMC44NTVIMTUzLjMzM1ptMC0yMDkuNjE3cS0xNiAwLTI2LjkzOC0xMC45NzItMTAuOTM5LTEwLjk3Mi0xMC45MzktMjcuMDIxIDAtMTYuMDUgMTAuOTM5LTI2Ljk4NSAxMC45MzgtMTAuOTM0IDI2LjkzOC0xMC45MzRoNjUzLjMzNHExNiAwIDI2LjkzOCAxMS4wNTEgMTAuOTM5IDExLjA1MiAxMC45MzkgMjcuMTAyIDAgMTYuMDQ5LTEwLjkzOSAyNi45MDQtMTAuOTM4IDEwLjg1NS0yNi45MzggMTAuODU1SDE1My4zMzNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTmV4dCA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPjxwYXRoIGQ9XCJNMzU0IDc5NHEtOC0xMC04LjUtMjJ0OC41LTIxbDE3Ni0xNzYtMTc3LTE3N3EtOC04LTcuNS0yMS41VDM1NCAzNTVxMTAtMTAgMjEuNS05LjVUMzk2IDM1NWwxOTkgMTk5cTUgNSA3IDEwdDIgMTFxMCA2LTIgMTF0LTcgMTBMMzk3IDc5NHEtOSA5LTIxIDguNXQtMjItOC41WlwiLz48L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQcmV2ID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+PHBhdGggZD1cIk01MzkgNzk0IDM0MSA1OTZxLTUtNS03LTEwdC0yLTExcTAtNiAyLTExdDctMTBsMTk5LTE5OXE5LTkgMjEuNS05dDIxLjUgOXE5IDkgOC41IDIydC05LjUgMjJMNDA2IDU3NWwxNzcgMTc3cTkgOSA5IDIxdC05IDIxcS05IDktMjIgOXQtMjItOVpcIi8+PC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmV2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3VjY2VzcyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwibTIxLjA1IDI4LjU1LTQuOS00LjlxLS40NS0uNDUtMS4xLS40NS0uNjUgMC0xLjE1LjUtLjUuNS0uNSAxLjE1IDAgLjY1LjUgMS4xbDYuMSA2LjFxLjQ1LjQ1IDEuMDUuNDUuNiAwIDEuMDUtLjQ1bDEyLTEycS40NS0uNDUuNDI1LTEuMS0uMDI1LS42NS0uNDc1LTEuMS0uNDUtLjUtMS4xMjUtLjV0LTEuMTc1LjVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3LjI1IDAgMTIuMTI1LTQuODc1VDQxIDI0cTAtNy4yNS00Ljg3NS0xMi4xMjVUMjQgN3EtNy4yNSAwLTEyLjEyNSA0Ljg3NVQ3IDI0cTAgNy4yNSA0Ljg3NSAxMi4xMjVUMjQgNDFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgV2FybmluZyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNC42IDQycS0uNDUgMC0uNzc1LS4ydC0uNTI1LS41NXEtLjItLjM1LS4yMjUtLjcyNS0uMDI1LS4zNzUuMjI1LS43NzVsMTkuNC0zMy41cS4yNS0uNC41NzUtLjU3NVEyMy42IDUuNSAyNCA1LjVxLjQgMCAuNzI1LjE3NS4zMjUuMTc1LjU3NS41NzVsMTkuNCAzMy41cS4yNS40LjIyNS43NzUtLjAyNS4zNzUtLjIyNS43MjV0LS41MjUuNTVxLS4zMjUuMi0uNzc1LjJabTIuNi0zaDMzLjZMMjQgMTBabTE3LTIuODVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzUgMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjVRMjIuNyAzNCAyMi43IDM0LjY1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptMC01LjU1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di04LjJxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY4LjJxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0tLjItNi4xWlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhcm5pbmciLCJpbXBvcnQgQWRkIGZyb20gXCIuL0FkZFwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vQ2FsZW5kYXJcIjtcclxuaW1wb3J0IENoZWNrZWQgZnJvbSBcIi4vQ2hlY2tlZFwiO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSBcIi4vQ2xvc2VcIjtcclxuaW1wb3J0IERhbmdlciBmcm9tIFwiLi9EYW5nZXJcIjtcclxuaW1wb3J0IERlbGV0ZSBmcm9tIFwiLi9EZWxldGVcIjtcclxuaW1wb3J0IEVkaXQgZnJvbSBcIi4vRWRpdFwiO1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gXCIuL0V4cGFuZFwiO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9JbmZvXCI7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSBcIi4vTG9nb3V0XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IE5hdk5leHQgZnJvbSBcIi4vTmV4dFwiO1xyXG5pbXBvcnQgTmF2UHJldiBmcm9tIFwiLi9QcmV2XCI7XHJcbmltcG9ydCBTdWNjZXNzIGZyb20gXCIuL1N1Y2Nlc3NcIjtcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSBcIi4vV2FybmluZ1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBBZGQsXHJcbiAgQ2FsZW5kYXIsXHJcbiAgQ2hlY2tlZCxcclxuICBDbG9zZSxcclxuICBEYW5nZXIsXHJcbiAgRGVsZXRlLFxyXG4gIEVkaXQsXHJcbiAgRXhwYW5kLFxyXG4gIEluZm8sXHJcbiAgTG9nb3V0LFxyXG4gIFN1Y2Nlc3MsXHJcbiAgV2FybmluZyxcclxuICBOYXZQcmV2LFxyXG4gIE5hdk5leHQsXHJcbiAgTWVudSxcclxuICBGaWx0ZXJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQm9sZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTMzNSA4NTZxLTI1IDAtNDIuNS0xNy41VDI3NSA3OTZWMzU2cTAtMjUgMTcuNS00Mi41VDMzNSAyOTZoMTY4cTY2IDAgMTE0LjUgNDJUNjY2IDQ0NHEwIDM4LTIxIDcwdC01NiA0OXY2cTQzIDE0IDY5LjUgNTB0MjYuNSA4MXEwIDY4LTUyLjUgMTEyVDUxMCA4NTZIMzM1Wm0yNi03NmgxNDRxMzggMCA2Ni0yNXQyOC02M3EwLTM3LTI4LTYydC02Ni0yNUgzNjF2MTc1Wm0wLTI0N2gxMzZxMzUgMCA2MC41LTIzdDI1LjUtNThxMC0zNS0yNS41LTU4LjVUNDk3IDM3MEgzNjF2MTYzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9sZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1bGxldGVkTGlzdCA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQwNyA4NThxLTEyLjc1IDAtMjEuMzc1LTguNjc1LTguNjI1LTguNjc2LTguNjI1LTIxLjUgMC0xMi44MjUgOC42MjUtMjEuMzI1VDQwNyA3OThoNDAzcTEyLjc1IDAgMjEuMzc1IDguNjc1IDguNjI1IDguNjc2IDguNjI1IDIxLjUgMCAxMi44MjUtOC42MjUgMjEuMzI1VDgxMCA4NThINDA3Wm0wLTI1MnEtMTIuNzUgMC0yMS4zNzUtOC42NzUtOC42MjUtOC42NzYtOC42MjUtMjEuNSAwLTEyLjgyNSA4LjYyNS0yMS4zMjVUNDA3IDU0Nmg0MDNxMTIuNzUgMCAyMS4zNzUgOC42NzUgOC42MjUgOC42NzYgOC42MjUgMjEuNSAwIDEyLjgyNS04LjYyNSAyMS4zMjVUODEwIDYwNkg0MDdabTAtMjUzcS0xMi43NSAwLTIxLjM3NS04LjY3NS04LjYyNS04LjY3Ni04LjYyNS0yMS41IDAtMTIuODI1IDguNjI1LTIxLjMyNVQ0MDcgMjkzaDQwM3ExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ4MTAgMzUzSDQwN1pNMTg5IDg5NXEtMjguMDUgMC00OC4wMjUtMTlRMTIxIDg1NyAxMjEgODI4LjV0MTkuNS00OHExOS41LTE5LjUgNDgtMTkuNXQ0Ny41IDE5Ljk3NVEyNTUgODAwLjk1IDI1NSA4MjlxMCAyNy4yMjUtMTkuMzg3IDQ2LjYxMlEyMTYuMjI1IDg5NSAxODkgODk1Wm0wLTI1MnEtMjguMDUgMC00OC4wMjUtMTkuNjgxUTEyMSA2MDMuNjM4IDEyMSA1NzZ0MTkuOTc1LTQ3LjMxOVExNjAuOTUgNTA5IDE4OSA1MDlxMjcuMjI1IDAgNDYuNjEzIDE5LjY4MVEyNTUgNTQ4LjM2MiAyNTUgNTc2dC0xOS4zODcgNDcuMzE5UTIxNi4yMjUgNjQzIDE4OSA2NDNabS0xLTI1M3EtMjcuNjM3IDAtNDcuMzE5LTE5LjY4MVExMjEgMzUwLjYzOCAxMjEgMzIzdDE5LjY4MS00Ny4zMTlRMTYwLjM2MyAyNTYgMTg4IDI1NnEyNy42MzcgMCA0Ny4zMTkgMTkuNjgxUTI1NSAyOTUuMzYyIDI1NSAzMjN0LTE5LjY4MSA0Ny4zMTlRMjE1LjYzNyAzOTAgMTg4IDM5MFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldGVkTGlzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvcm1hdFNpemUgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNjE5LjUzNCA4NzcuMDc2cS0xNC4yNjQgMC0yMy43ODMtOS44NDktOS41MTktOS44NDktOS41MTktMjMuOTJWMzQyLjQ2MUg0MTIuNjkzcS0xNC4wNzEgMC0yMy45Mi05Ljk4NS05Ljg0OS05Ljk4NS05Ljg0OS0yNC4yNSAwLTE0LjI2NCA5Ljg0OS0yMy43ODMgOS44NDktOS41MTkgMjMuOTItOS41MTloNDE0LjYxNHExNC4wNzEgMCAyMy45MiA5Ljk4NSA5Ljg0OSA5Ljk4NSA5Ljg0OSAyNC4yNSAwIDE0LjI2NC05Ljg0OSAyMy43ODMtOS44NDkgOS41MTktMjMuOTIgOS41MTlINjUzLjc2OHY1MDAuODQ2cTAgMTQuMDcxLTkuOTg1IDIzLjkyLTkuOTg1IDkuODQ5LTI0LjI0OSA5Ljg0OVptLTM2MCAwcS0xNC4yNjQgMC0yMy43ODMtOS44NDktOS41MTktOS44NDktOS41MTktMjMuOTJWNTQyLjQ2MWgtOTMuNTM5cS0xNC4wNzEgMC0yMy45Mi05Ljk4NS05Ljg0OS05Ljk4NS05Ljg0OS0yNC4yNSAwLTE0LjI2NCA5Ljg0OS0yMy43ODMgOS44NDktOS41MTkgMjMuOTItOS41MTloMjU0LjYxNHExNC4wNzEgMCAyMy45MiA5Ljk4NSA5Ljg0OSA5Ljk4NSA5Ljg0OSAyNC4yNSAwIDE0LjI2NC05Ljg0OSAyMy43ODMtOS44NDkgOS41MTktMjMuOTIgOS41MTloLTkzLjUzOXYzMDAuODQ2cTAgMTQuMDcxLTkuOTg1IDIzLjkyLTkuOTg1IDkuODQ5LTI0LjI0OSA5Ljg0OVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdFNpemUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbWcgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xODAgOTM2cS0yNCAwLTQyLTE4dC0xOC00MlYyNzZxMC0yNCAxOC00MnQ0Mi0xOGg2MDBxMjQgMCA0MiAxOHQxOCA0MnY2MDBxMCAyNC0xOCA0MnQtNDIgMThIMTgwWm0wLTYwaDYwMFYyNzZIMTgwdjYwMFptNTYtOTdoNDg5TDU3OCA1ODMgNDQ2IDc1NGwtOTMtMTI3LTExNyAxNTJabS01NiA5N1YyNzZ2NjAwWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1nIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSXRhbGljID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjYyLjA3NyA4NDEuNjE0cS0xMS43NTQgMC0yMC4zLTguNDA0LTguNTQ2LTguNDAzLTguNTQ2LTIwLjYxNCAwLTExLjgyNyA4LjU0Ni0yMC4yNSA4LjU0Ni04LjQyMiAyMC4zLTguNDIyaDEwNC43N0w1MTAuNDYzIDM2M0gzODcuMjMxcS0xMS43NTMgMC0yMC4yOTktOC41OTctOC41NDYtOC41OTYtOC41NDYtMjAuNDIyIDAtMTIuMjExIDguNTQ2LTIwLjQ0MiA4LjU0Ni04LjIzIDIwLjI5OS04LjIzaDI5My44NDZxMTIuMTM4IDAgMjAuNDkyIDguNDA0IDguMzUzIDguNDA0IDguMzUzIDIwLjYxNSAwIDExLjgyNi04LjM1MyAyMC4yNDlRNjkzLjIxNSAzNjMgNjgxLjA3NyAzNjNINTczLjk5OUw0MzAuNzY4IDc4My45MjRoMTI1LjE1NHExMi4xMzkgMCAyMC40OTIgOC41OTYgOC4zNTQgOC41OTYgOC4zNTQgMjAuNDIyIDAgMTIuMjExLTguMzU0IDIwLjQ0Mi04LjM1MyA4LjIzLTIwLjQ5MiA4LjIzSDI2Mi4wNzdaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGFsaWMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOdW1iZXJlZExpc3QgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE2My44NDcgOTU1Ljk5OXEtMTAuMzMzIDAtMTcuMDg5LTYuNzUyLTYuNzU3LTYuNzUxLTYuNzU3LTE3LjA3NiAwLTEwLjMyNiA2Ljc1Ny0xNy4wOTUgNi43NTYtNi43NjkgMTcuMDg5LTYuNzY5aDc2LjE1NHYtNDIuMzA4aC0zNi4xNTRxLTEwLjMzMyAwLTE3LjA4OS02Ljc1Mi02Ljc1Ny02Ljc1MS02Ljc1Ny0xNy4wNzYgMC0xMC4zMjYgNi43NTctMTcuMDk1IDYuNzU2LTYuNzY5IDE3LjA4OS02Ljc2OWgzNi4xNTR2LTQyLjMwOGgtNzYuMTU0cS0xMC4zMzMgMC0xNy4wODktNi43NTItNi43NTctNi43NTEtNi43NTctMTcuMDc2IDAtMTAuMzI2IDYuNzU3LTE3LjA5NSA2Ljc1Ni02Ljc2OSAxNy4wODktNi43NjloOTBxMTQuMzg1IDAgMjQuMTE1IDkuNzMxIDkuNzMxIDkuNzMgOS43MzEgMjQuMTE1djQ3LjY5M3EwIDE0LjM4NC05LjczMSAyNC4xMTUtOS43MyA5LjczLTI0LjExNSA5LjczIDE0LjM4NSAwIDI0LjExNSA5LjczMSA5LjczMSA5LjczMSA5LjczMSAyNC4xMTV2NDQuNjE2cTAgMTQuMzg0LTkuNzMxIDI0LjExNS05LjczIDkuNzMxLTI0LjExNSA5LjczMWgtOTBabS0xLjYxNS0yNjYuMTUzcS04LjYxNSAwLTE1LjQyMy02LjgwOHQtNi44MDgtMTUuNDIzVjU4NnEwLTE0LjM4NCA5LjczMS0yNC4xMTUgOS43MzEtOS43MzEgMjQuMTE1LTkuNzMxaDY2LjE1NHYtNDIuMzA4aC03Ni4xNTRxLTEwLjMzMyAwLTE3LjA4OS02Ljc1Mi02Ljc1Ny02Ljc1MS02Ljc1Ny0xNy4wNzZ0Ni43NTctMTcuMDk1cTYuNzU2LTYuNzY5IDE3LjA4OS02Ljc2OWg5MHExNC4zODUgMCAyNC4xMTUgOS43MzEgOS43MzEgOS43MzEgOS43MzEgMjQuMTE1djcwcTAgMTQuMzg0LTkuNzMxIDI0LjExNS05LjczIDkuNzMxLTI0LjExNSA5LjczMWgtNjYuMTU0djQyLjMwOGg3Ni4xNTRxMTAuMzMzIDAgMTcuMDkgNi43NTIgNi43NTYgNi43NTEgNi43NTYgMTcuMDc2dC02Ljc1NiAxNy4wOTVxLTYuNzU3IDYuNzY5LTE3LjA5IDYuNzY5SDE2Mi4yMzJabTYxLjYzMy0yNjYuMTUzcS0xMC4zMjUgMC0xNy4wOTQtNi43NTYtNi43Ny02Ljc1Ny02Ljc3LTE3LjA5VjI0My42OTNoLTM2LjE1NHEtMTAuMzMzIDAtMTcuMDg5LTYuNzUxLTYuNzU3LTYuNzUyLTYuNzU3LTE3LjA3NyAwLTEwLjMyNSA2Ljc1Ny0xNy4wOTQgNi43NTYtNi43NyAxNy4wODktNi43N2g2Mi42MTVxOC40NjIgMCAxNC44NDYgNi4zODUgNi4zODUgNi4zODUgNi4zODUgMTQuODQ2djE4Mi42MTVxMCAxMC4zMzMtNi43NTEgMTcuMDktNi43NTIgNi43NTYtMTcuMDc3IDYuNzU2Wm0xNzcuODI4IDQxNS42MTRxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDM5NS42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRINDAxLjY5M1ptMC0yNDIuMjMxcS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGgzOTUuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDQwMS42OTNabTAtMjQyLjIzcS05LjY0NSAwLTE2LjE2OC02LjU3OS02LjUyNC02LjU3OC02LjUyNC0xNi4zMDIgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjMtNi41NzcgMTYuMTY4LTYuNTc3aDM5NS42MTRxOS42NDQgMCAxNi4xNjggNi43NjYgNi41MjQgNi43NjYgNi41MjQgMTYuMzA3IDAgOS41NDItNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUg0MDEuNjkzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyZWRMaXN0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3RyaWtlID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTEwIDY0NnEtMTIuNzUgMC0yMS4zNzUtOC42NzVRODAgNjI4LjY0OSA4MCA2MTUuODI1IDgwIDYwMyA4OC42MjUgNTk0LjVUMTEwIDU4Nmg3NDBxMTIuNzUgMCAyMS4zNzUgOC42NzUgOC42MjUgOC42NzYgOC42MjUgMjEuNSAwIDEyLjgyNS04LjYyNSAyMS4zMjVUODUwIDY0NkgxMTBabTMyMC0xMjBWMzU2SDI1MHEtMjAuODMzIDAtMzUuNDE3LTE0LjYxOFEyMDAgMzI2Ljc2NSAyMDAgMzA1Ljg4MiAyMDAgMjg1IDIxNC41ODMgMjcwLjUgMjI5LjE2NyAyNTYgMjUwIDI1Nmg0NjBxMjAuODMzIDAgMzUuNDE3IDE0LjYxOFE3NjAgMjg1LjIzNSA3NjAgMzA2LjExOCA3NjAgMzI3IDc0NS40MTcgMzQxLjUgNzMwLjgzMyAzNTYgNzEwIDM1Nkg1MzB2MTcwSDQzMFptNDkuODgyIDM3MFE0NTkgODk2IDQ0NC41IDg4MS40MTcgNDMwIDg2Ni44MzMgNDMwIDg0NlY3MDZoMTAwdjE0MHEwIDIwLjgzMy0xNC42MTggMzUuNDE3UTUwMC43NjUgODk2IDQ3OS44ODIgODk2WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyaWtlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3VwZXJTY3JpcHQgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk04MDAgNDU2cS0xMyAwLTIxLjUtOC41VDc3MCA0MjZ2LTU1cTAtMTQgOC0yMnQyMi04aDkwdi01NUg3ODVxLTYgMC0xMC41LTQuNVQ3NzAgMjcxcTAtNiA0LjUtMTAuNVQ3ODUgMjU2aDEwNXExNCAwIDIyIDh0OCAyMnY1NXEwIDE0LTggMjJ0LTIyIDhoLTkwdjU1aDEwNXE2IDAgMTAuNSA0LjVUOTIwIDQ0MXEwIDYtNC41IDEwLjVUOTA1IDQ1Nkg4MDBaTTMwMCA4OTZxLTIxIDAtMzEtMTguNXQxLTM2LjVsMTUwLTIzNi0xMzYtMjEzcS0xMS0xOC0xLTM3dDMxLTE5cTkgMCAxNy41IDQuNVQzNDUgMzUzbDEyNCAxOTYgMTI0LTE5NnE1LTggMTMuNS0xMi41VDYyNCAzMzZxMjIgMCAzMS41IDE5dC0xLjUgMzdMNTE4IDYwNWwxNTAgMjM2cTExIDE4IDEgMzYuNVQ2MzggODk2cS05IDAtMTcuNS00LjVUNjA3IDg3OUw0NjkgNjYyIDMzMSA4NzlxLTUgOC0xMy41IDEyLjVUMzAwIDg5NlpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1cGVyU2NyaXB0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVHh0Q2VudGVyID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNTIuNjkzIDkyNS45OTlxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1ptMTYyLjg0Ni0xNjMuODQ2cS05LjY0NCAwLTE2LjE2OC02LjU3OC02LjUyNC02LjU3OC02LjUyNC0xNi4zMDMgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjQtNi41NzYgMTYuMTY4LTYuNTc2aDMyOS41MzhxOS42NDQgMCAxNi4xNjggNi43NjUgNi41MjQgNi43NjYgNi41MjQgMTYuMzA4IDAgOS41NDEtNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgzMTUuNTM5Wk0xNTIuNjkzIDU5OC42OTJxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41ODEtNi41MjQtMTYuMzA4dDYuNTI0LTE2LjExMXE2LjUyMy02LjM4NSAxNi4xNjgtNi4zODVoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTgxIDYuNTI0IDE2LjMwOHQtNi41MjQgMTYuMTExcS02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMTUyLjY5M1ptMTYyLjg0Ni0xNjMuODQ2cS05LjY0NCAwLTE2LjE2OC02LjU3OS02LjUyNC02LjU3OC02LjUyNC0xNi4zMDIgMC05LjM0OSA2LjUyNC0xNS45MjZ0MTYuMTY4LTYuNTc3aDMyOS41MzhxOS42NDQgMCAxNi4xNjggNi43NjYgNi41MjQgNi43NjYgNi41MjQgMTYuMzA3IDAgOS41NDItNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgzMTUuNTM5Wk0xNTIuNjkzIDI3MS4zODRxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dENlbnRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFR4dEp1c3RpZnkgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNTIuNjkzIDkyNS45OTlxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1ptMC0xNjMuODQ2cS05LjY0NSAwLTE2LjE2OC02LjU3OC02LjUyNC02LjU3OC02LjUyNC0xNi4zMDMgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjMtNi41NzYgMTYuMTY4LTYuNTc2aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi43NjUgNi41MjQgNi43NjYgNi41MjQgMTYuMzA4IDAgOS41NDEtNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWm0wLTE2My40NjFxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41ODEtNi41MjQtMTYuMzA4dDYuNTI0LTE2LjExMXE2LjUyMy02LjM4NSAxNi4xNjgtNi4zODVoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTgxIDYuNTI0IDE2LjMwOHQtNi41MjQgMTYuMTExcS02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMTUyLjY5M1ptMC0xNjMuODQ2cS05LjY0NSAwLTE2LjE2OC02LjU3OS02LjUyNC02LjU3OC02LjUyNC0xNi4zMDIgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjMtNi41NzcgMTYuMTY4LTYuNTc3aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi43NjYgNi41MjQgNi43NjYgNi41MjQgMTYuMzA3IDAgOS41NDItNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgxNTIuNjkzWm0wLTE2My40NjJxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dEp1c3RpZnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUeHRMZWZ0ID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUyLjY5MyA3NjIuMTUzcS05LjY0NSAwLTE2LjE2OC02LjU3OC02LjUyNC02LjU3OC02LjUyNC0xNi4zMDMgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjMtNi41NzYgMTYuMTY4LTYuNTc2aDQwOC45MjJxOS42NDQgMCAxNi4xNjggNi43NjUgNi41MjQgNi43NjYgNi41MjQgMTYuMzA4IDAgOS41NDEtNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWm0wLTMyNy4zMDdxLTkuNjQ1IDAtMTYuMTY4LTYuNTc5LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMiAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyMy02LjU3NyAxNi4xNjgtNi41NzdoNDA4LjkyMnE5LjY0NCAwIDE2LjE2OCA2Ljc2NiA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDcgMCA5LjU0Mi02LjUyNCAxNS45MjYtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDE1Mi42OTNabTAgMTYzLjg0NnEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4MS02LjUyNC0xNi4zMDh0Ni41MjQtMTYuMTExcTYuNTIzLTYuMzg1IDE2LjE2OC02LjM4NWg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41ODEgNi41MjQgMTYuMzA4dC02LjUyNCAxNi4xMTFxLTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgxNTIuNjkzWm0wIDMyNy4zMDdxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1ptMC02NTQuNjE1cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRMZWZ0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVHh0UmlnaHQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1Mi42OTMgOTI1Ljk5OXEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWm0yNDYuNjkyLTE2My44NDZxLTkuNjQ0IDAtMTYuMTY4LTYuNTc4LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMyAwLTkuMzQ5IDYuNTI0LTE1LjkyNiA2LjUyNC02LjU3NiAxNi4xNjgtNi41NzZoNDA3LjkyMnE5LjY0NCAwIDE2LjE2OCA2Ljc2NSA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDggMCA5LjU0MS02LjUyNCAxNS45MjYtNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDM5OS4zODVaTTE1Mi42OTMgNTk4LjY5MnEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4MS02LjUyNC0xNi4zMDh0Ni41MjQtMTYuMTExcTYuNTIzLTYuMzg1IDE2LjE2OC02LjM4NWg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41ODEgNi41MjQgMTYuMzA4dC02LjUyNCAxNi4xMTFxLTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgxNTIuNjkzWm0yNDYuNjkyLTE2My44NDZxLTkuNjQ0IDAtMTYuMTY4LTYuNTc5LTYuNTI0LTYuNTc4LTYuNTI0LTE2LjMwMiAwLTkuMzQ5IDYuNTI0LTE1LjkyNnQxNi4xNjgtNi41NzdoNDA3LjkyMnE5LjY0NCAwIDE2LjE2OCA2Ljc2NiA2LjUyNCA2Ljc2NiA2LjUyNCAxNi4zMDcgMCA5LjU0Mi02LjUyNCAxNS45MjYtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDM5OS4zODVaTTE1Mi42OTMgMjcxLjM4NHEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0UmlnaHQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBVbmRlcmxpbmUgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0yMzAgOTE2cS0xMi43NSAwLTIxLjM3NS04LjY3NS04LjYyNS04LjY3Ni04LjYyNS0yMS41IDAtMTIuODI1IDguNjI1LTIxLjMyNVQyMzAgODU2aDUwMHExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ3MzAgOTE2SDIzMFptMjUwLTE0MHEtMTAwIDAtMTU2LjUtNTguNVQyNjcgNTU5VjI1N3EwLTE2Ljg4MiAxMi41MjctMjguOTQxUTI5Mi4wNTUgMjE2IDMwOS4wMjcgMjE2IDMyNiAyMTYgMzM4IDIyOC4wNTlUMzUwIDI1N3YzMDJxMCA2MyAzNCAxMDF0OTYgMzhxNjIgMCA5Ni0zOHQzNC0xMDFWMjU3cTAtMTYuODgyIDEyLjUyNy0yOC45NDFRNjM1LjA1NSAyMTYgNjUyLjAyNyAyMTYgNjY5IDIxNiA2ODEgMjI4LjA1OVQ2OTMgMjU3djMwMnEwIDEwMC01Ni41IDE1OC41VDQ4MCA3NzZaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmRlcmxpbmUiLCJpbXBvcnQgQm9sZCBmcm9tIFwiLi9Cb2xkXCI7XHJcbmltcG9ydCBCdWxsZXRlZExpc3QgZnJvbSBcIi4vQnVsbGV0ZWRMaXN0XCI7XHJcbmltcG9ydCBGb3JtYXRTaXplIGZyb20gXCIuL0Zvcm1hdFNpemVcIjtcclxuaW1wb3J0IEl0YWxpYyBmcm9tIFwiLi9JdGFsaWNcIjtcclxuaW1wb3J0IE51bWJlcmVkTGlzdCBmcm9tIFwiLi9OdW1iZXJlZExpc3RcIjtcclxuaW1wb3J0IFN0cmlrZSBmcm9tIFwiLi9TdHJpa2VcIjtcclxuaW1wb3J0IFN1cGVyU2NyaXB0IGZyb20gXCIuL1N1cGVyU2NyaXB0XCI7XHJcbmltcG9ydCBUeHRMZWZ0IGZyb20gXCIuL1R4dExlZnRcIjtcclxuaW1wb3J0IFR4dENlbnRlciBmcm9tIFwiLi9UeHRDZW50ZXJcIjtcclxuaW1wb3J0IFR4dFJpZ2h0IGZyb20gXCIuL1R4dFJpZ2h0XCI7XHJcbmltcG9ydCBUeHRKdXN0aWZ5IGZyb20gXCIuL1R4dEp1c3RpZnlcIjtcclxuaW1wb3J0IFVuZGVybGluZSBmcm9tIFwiLi9VbmRlcmxpbmVcIjtcclxuaW1wb3J0IEltZyBmcm9tIFwiLi9JbWdcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQm9sZCxcclxuICBJdGFsaWMsXHJcbiAgU3RyaWtlLFxyXG4gIFN1cGVyU2NyaXB0LFxyXG4gIFVuZGVybGluZSxcclxuICBGb3JtYXRTaXplLFxyXG4gIEJ1bGxldGVkTGlzdCxcclxuICBOdW1iZXJlZExpc3QsXHJcbiAgVHh0TGVmdCxcclxuICBUeHRDZW50ZXIsXHJcbiAgVHh0UmlnaHQsXHJcbiAgVHh0SnVzdGlmeSxcclxuICBJbWcsXHJcbn0iLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChyZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdCkpO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgY29udHJvbGxlciBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6Y29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6bW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0OnVubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInByZXBhcmVGb3JTZW5kIiwiZGF0YSIsInJlc3VsdCIsImsiLCJ2IiwiT2JqZWN0IiwiZW50cmllcyIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsImV4IiwiZ2V0Qm9vbGVhbkZyb21TdHJpbmciLCJzdHIiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJzdHJOb3JtYWxpemUiLCJ0ZXN0IiwibCIsInJlZyIsInciLCJnZXRQcm9wc0Jvb2xTdGF0dXMiLCJvYmoiLCJwcm9wIiwiYm9vbFN0YXRlIiwia2V5IiwidmFsdWUiLCJpc09iamVjdCIsImFyZUVxdWFsIiwib2JqMSIsIm9iajIiLCJpc0FycmF5IiwiaSIsImVudDEiLCJlbnQyIiwiaXNEZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJzb3J0QXNjIiwiYSIsImIiLCJzb3J0Iiwic29ydERlcyIsIlJlYWN0IiwiQ29udGVudCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJUb2FzdCIsImNsZWFyRGF0YSIsInNldFVybCIsIlBhZ2VzIiwiU2V0dGluZ3MiLCJBcnRpY2xlcyIsIkxvZ2luIiwiTWVudSIsIm5hbWUiLCJQYWdlIiwiTGF5b3V0IiwidXJsIiwic3RhdGUiLCJhamF4IiwibmF2IiwiZGlzcGF0Y2giLCJwYXRobmFtZSIsIm1hdGNoIiwib25iZWZvcmV1bmxvYWQiLCJlIiwibWFwIiwidXNlU3RhdGUiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsIlBhZ2VzQ29udGFpbmVyIiwiQ29udGVudE5hdiIsIk1vZGFsRWRpdG9yIiwicHVzaERhdGEiLCJheGlvcyIsIm5vdGlmeSIsIm5vdGlmeUNsb3NlIiwiYXhpb3NTZXQiLCJjcmVhdGUiLCJwYXJhbXMiLCJwYWdlIiwiYXJ0aWNsZXMiLCJwYWdlcyIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0eXBlIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJzdGF0dXMiLCJyZXNwb25zZSIsImNsb3NlTW9kYWwiLCJzZW5kRGF0YSIsInNlbmRGaWVsZCIsInB1dCIsIm1zZyIsInRpbWVvdXQiLCJwb3N0IiwiZGVsZXRlIiwiY3JlYXRlQXJ0aWNsZSIsInVwZGF0ZUFydGljbGUiLCJpZCIsImFydGljbGUiLCJmaW5kIiwiY29udmVydCIsImRhdGUiLCJyZW1vdmVBcnRpY2xlIiwiaGVhZGVyIiwidGFnIiwiZHJhdyIsImNvbFNpemUiLCJsaXN0IiwicHVibGlzaGVkIiwiaXNkeW5hbWljIiwicHVibGlzaGJlZ2luIiwicHVibGlzaGVuZCIsImNvbnRlbnQiLCJCdXR0b24iLCJUeHRMYWJlbElucHV0IiwiWE1MU2V0IiwibGlmZXRpbWUiLCJub3RpZmljYXRpb24iLCJsaWZlIiwic2V0U3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3Rva2VuIiwiaXNDb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJibHVyVGltZW91dCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJUaW1lb3V0IiwibmF0aXZlRXZlbnQiLCJzdWJtaXR0ZXIiLCJibHVyIiwibmF2VVJMIiwic21hbGwiLCJlcnJvciIsImNyZWF0ZVBhZ2UiLCJ1cGRhdGVQYWdlIiwibkRhdGEiLCJ2YWx1ZXMiLCJwIiwicmVtb3ZlUGFnZSIsIlNlbGVjdG9yIiwic2V0dGluZ3MiLCJjaGFuZ2UiLCJzZXRDaGFuZ2UiLCJpbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJjaGFuZ2VOYW1lIiwic2V0TGFuZGluZyIsIkxhbmRpbmciLCJjb25zb2xlIiwibG9nIiwidXBkYXRlU2V0dGluZ3MiLCJBdXRob3IiLCJEZXNjcmlwdGlvbiIsIlNpdGVOYW1lIiwic3RvcmUiLCJjcmVhdGVTbGljZSIsImFqYXhTbGljZSIsImJhc2VVcmwiLCJiYXNlVVJMIiwiaGVhZGVycyIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwibGV4aWNhbFNsaWNlIiwibm90aWZpY2F0aW9uU2xpY2UiLCJpbWdLZXkiLCJzZXRJbWdLZXkiLCJub3RpZnlLZWVwIiwiZXZlbnQiLCJmdW5jIiwiY29uZmlndXJlU3RvcmUiLCJsZXhpY2FsIiwiRGVsZXRlIiwiRWRpdCIsIkFjdGlvbnNSb3ciLCJ1cGRhdGUiLCJDU1JGSW5wdXQiLCJOdW1iZXJJbnB1dCIsIkNoZWNrYm94IiwiU3dpdGNoSW5wdXQiLCJGaWx0ZXIiLCJTdWNjZXNzIiwiQ2xvc2UiLCJ1cGRhdGVTZWFyY2giLCJhamF4RGF0YSIsIm5hdlNlYXJjaCIsInNldE5hdlNlYXJjaCIsInNGaWVsZHMiLCJoIiwiYWN0aXZlIiwiZWwiLCJmaWx0ZXJlZCIsInNldFZpZXciLCJzZXQiLCJzcGxpdCIsIk51bWJlciIsInNlYXJjaEhhbmRsZUNoYW5nZSIsImZpZWxkIiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlQXJyYXlGaWx0ZXIiLCJiYXNpY1JlbmRlciIsImZpbHRlclJlbmRlciIsInNlYXJjaEZpbHRlciIsImZpbHRlciIsInRvZ2dsZUZpbHRlciIsImNoZWNrZWQiLCJJbnB1dCIsImJ0bkNscyIsImRpdkNscyIsImNsaWNrIiwiQ2hlY2tlZCIsImNscyIsIkNhbGVuZGFyIiwiTmF2UHJldiIsIk5hdk5leHQiLCJEYXRlUGlja2VyIiwic2V0SG91cnMiLCJjdXJyVmFsIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImRheXMiLCJkcmF3RGF0ZSIsIndlZWtkYXkiLCJyZWYiLCJzZXRSZWYiLCJkYXRlU3RhdGUiLCJzZXREYXRlU3RhdGUiLCJnZXRUaW1lIiwib3BlbiIsInNldE9wZW4iLCJjaGFuZ2VEYXRlIiwibkRhdGUiLCJzZXREYXlzIiwiY291bnQiLCJvdXRQdXQiLCJkaXNwbGF5RGF0ZSIsInB1c2giLCJzZXRNb250aCIsInNldFllYXIiLCJzZXRGdWxsWWVhciIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImQiLCJNYXRoIiwicmFuZG9tIiwiSW1hZ2VGaWxlSW5wdXQiLCJhZGRDbHMiLCJicm93c2UiLCJpbWdCcm93c2UiLCJpbnBDbHMiLCJFeHBhbmQiLCJpY29uQ2xzIiwic29ydFByb3AiLCJsYXN0RXZlbnQiLCJzZXRMYXN0RXZlbnQiLCJsYW5kaW5nIiwiYXZhaWJsZSIsInRvZ2dsZVNlbGVjdCIsIiRlbCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNoYW5nZVZhbHVlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlucHV0Q2xzIiwibGFiZWxDbHMiLCJvbkNoYW5nZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlRm9jdXMiLCJSaWNoVGV4dCIsInNjaGVtYSIsImNsb3NlIiwiY29tbWFuZCIsIm1EYXRhIiwic2V0RGF0YSIsImVtcHR5IiwicGFyIiwidmFsIiwibGFzdCIsInJlS2V5IiwiTmF2TGluayIsInRvIiwib25DbGljayIsIiRnZXRTZWxlY3Rpb24iLCIkaXNSYW5nZVNlbGVjdGlvbiIsIkZPUk1BVF9FTEVNRU5UX0NPTU1BTkQiLCIkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5IiwidXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCIsIkJ0bkZvcm1hdFRleHQiLCJUeHRDZW50ZXIiLCJUeHRKdXN0aWZ5IiwiVHh0TGVmdCIsIlR4dFJpZ2h0IiwiQWxpZ25UZXh0IiwiZGVmYXVsdFN0YXRlIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwianVzdGlmeSIsImVkaXRvciIsImJ0blN0YXRlcyIsInNldEJ0blN0YXRlcyIsImljb25zIiwidXBkYXRlQnRuU3RhdGVzIiwic2VsZWN0aW9uIiwibm9kZSIsImFuY2hvciIsImdldE5vZGUiLCJnZXRUb3BMZXZlbEVsZW1lbnQiLCJnZXRUeXBlIiwiZ2V0UGFyZW50IiwiZ2V0Rm9ybWF0VHlwZSIsInJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIiLCJlZGl0b3JTdGF0ZSIsInRhZ3MiLCJyZWFkIiwiaXRlbXNEaXNwYXRjaCIsIml0ZW1zIiwiZm9jdXMiLCJkaXNwYXRjaENvbW1hbmQiLCJGT1JNQVRfVEVYVF9DT01NQU5EIiwiQm9sZCIsIkl0YWxpYyIsIlN0cmlrZSIsIlN1cGVyU2NyaXB0IiwiVW5kZXJsaW5lIiwiRm9ybWF0VGV4dEdyb3VwIiwiYm9sZCIsIml0YWxpYyIsInN1cGVyc2NyaXB0IiwidW5kZXJsaW5lIiwic3RyaWtldGhyb3VnaCIsInByZXZTdGF0ZSIsImdldE5vZGVzIiwiaGFzRm9ybWF0IiwiSU5TRVJUX0lNQUdFX0NPTU1BTkQiLCJJbWdNb2RhbCIsIiRnZXROb2RlQnlLZXkiLCJJbWciLCJJbnNlcnRJbWciLCJpbWdQcm9wIiwic2V0SW1nUHJvcCIsImltZyIsIm9wZW5Nb2RhbCIsImdldEVkaXRvclN0YXRlIiwic3JjIiwiX19zcmMiLCJpc0ZpbGUiLCJfX2lzRmlsZSIsImF0RW5kIiwiX19hdEVuZCIsImVkaXRJbWciLCJrZXlzIiwiZ2V0V3JpdGFibGUiLCJvcGVuSW5zZXJ0SW1nIiwiY3JlYXRlSW1nIiwiYWx0IiwiJGdldE5lYXJlc3ROb2RlT2ZUeXBlIiwiJGlzTGlzdEl0ZW1Ob2RlIiwiJGlzTGlzdE5vZGUiLCJMaXN0Tm9kZSIsIklOU0VSVF9PUkRFUkVEX0xJU1RfQ09NTUFORCIsIklOU0VSVF9VTk9SREVSRURfTElTVF9DT01NQU5EIiwiQnVsbGV0ZWRMaXN0IiwiTnVtYmVyZWRMaXN0IiwiTGlzdFR5cGUiLCJ1bCIsIm9sIiwiYW5jaG9yTm9kZSIsImdldEtleSIsImdldFRvcExldmVsRWxlbWVudE9yVGhyb3ciLCJlbGVtZW50S2V5IiwiZWxlbWVudERPTSIsImdldEVsZW1lbnRCeUtleSIsInBhcmVudExpc3QiLCJnZXRUYWciLCJ1bm9yZGVyZWRMaXN0Iiwib3JkZXJlZExpc3QiLCIkcGF0Y2hTdHlsZVRleHQiLCJEcm9wZG93biIsIkZvcm1hdFNpemUiLCJTaXplVGV4dEdyb3VwIiwiZm9ybWF0IiwiZHJvcERvd25TdGF0ZSIsInNldEREU3RhdGVzIiwiZXZlbnRMb2ciLCJzZXRFdmVudExvZyIsImYiLCJoYW5kbGVTZWxlY3QiLCIkZXZlbnQiLCJ0b2dnbGVTdGF0ZSIsIml0ZW0iLCJJdGVtIiwic2VsZWN0Iiwibm93IiwicHJvcHMiLCJjZmciLCJ4bWwiLCJicm93c2VyIiwic2V0QnJvd3NlciIsImZpbGVzIiwic2V0RmlsZXMiLCJmaWxlU3lzIiwiZmlsZSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInNldEltZyIsIkRlY29yYXRvck5vZGUiLCJJbWFnZSIsImNvbnZlcnRJbWdFbGVtZW50IiwiZG9tTm9kZSIsIkhUTUxJbWFnZUVsZW1lbnQiLCJhbHRUZXh0IiwiJGNyZWF0ZUltYWdlTm9kZSIsIkltYWdlTm9kZSIsIl9fYWx0VGV4dCIsImV4cG9ydERPTSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbXBvcnRET00iLCJjb252ZXJzaW9uIiwicHJpb3JpdHkiLCJjbG9uZSIsIl9fa2V5IiwiY29uc3RydWN0b3IiLCJjcmVhdGVET00iLCJjb25maWciLCJzcGFuIiwidGhlbWUiLCJjbGFzc05hbWUiLCJpbWFnZSIsInVwZGF0ZURPTSIsImdldFNyYyIsImdldEFsdFRleHQiLCJnZXRBdEVuZCIsInNldEF0RW5kIiwic2VsZiIsImRlY29yYXRlIiwiJGlzSW1hZ2VOb2RlIiwiZGVjb3JhdGVLZXkiLCJMZXhpY2FsQ29tcG9zZXIiLCJSaWNoVGV4dFBsdWdpbiIsIkxpc3RQbHVnaW4iLCJMaXN0SXRlbU5vZGUiLCJDb250ZW50RWRpdGFibGUiLCJIaXN0b3J5UGx1Z2luIiwiTGV4aWNhbEVycm9yQm91bmRhcnkiLCJJbWFnZVBsdWdpbiIsIiRnZW5lcmF0ZU5vZGVzRnJvbURPTSIsIiRnZW5lcmF0ZUh0bWxGcm9tTm9kZXMiLCIkZ2V0Um9vdCIsIiRpbnNlcnROb2RlcyIsIiRzZXRTZWxlY3Rpb24iLCJwYXJhZ3JhcGgiLCJ0ZXh0IiwidW5kZXJsaW5lU3RyaWtldGhyb3VnaCIsImxpc3RpdGVtIiwiSW5pdGlhbEh0bWxQbHVnaW4iLCJodG1sIiwic2V0SHRtbCIsInVwZGF0ZU1EYXRhIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwibm9kZXMiLCJvbkVycm9yIiwiRWRpdG9yIiwiaW5pdGlhbENvbmZpZyIsIm5hbWVzcGFjZSIsIiR3cmFwTm9kZUluRWxlbWVudCIsIm1lcmdlUmVnaXN0ZXIiLCIkY3JlYXRlUGFyYWdyYXBoTm9kZSIsIiRpc1Jvb3RPclNoYWRvd1Jvb3QiLCJDT01NQU5EX1BSSU9SSVRZX0VESVRPUiIsImNyZWF0ZUNvbW1hbmQiLCJoYXNOb2RlcyIsIkVycm9yIiwicmVnaXN0ZXJDb21tYW5kIiwiaW1nTm9kZSIsImdldFBhcmVudE9yVGhyb3ciLCJzZWxlY3RFbmQiLCJJbmZvIiwiV2FybmluZyIsIkRhbmdlciIsImluZGV4IiwibGlua0xvYWQiLCJzZXRMaW5rTG9hZCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJHdWVzdCIsIk1haW4iLCJQcm92aWRlciIsIk1haW5BZG1pbiIsIkFkZCIsIkNscyIsIk5leHQiLCJQcmV2IiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJmb3JFYWNoIiwiZGVmYXVsdCIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImRlZmF1bHRfMSIsInByb3BzVmFsdWUiLCJfZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJkaXNjb25uZWN0Iiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==