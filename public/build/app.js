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
  const ajax = axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    headers: {
      "XmlHttpRequest": true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get('/page-list');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "index");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y21zLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L0Z1bmN0aW9ucy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9GdW5jdGlvbnMvU2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9MYXlvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0FydGljbGVzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL1BhZ2VzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2xleGljYWxTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9BY3Rpb25zUm93LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NTUkZJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Db250ZW50TmF2LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9CdXR0b24uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9EYXRlUGlja2VyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9JbWFnZUZpbGVJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvTnVtYmVySW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvSW5wdXRzL1NlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0lucHV0cy9Td2l0Y2hJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvVHh0TGFiZWxJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9JbnB1dHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Nb2RhbEVkaXRvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9QYWdlc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL0FsaWduVGV4dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL0Zvcm1hdFRleHRHcm91cC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL0luc2VydEltZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL0xpc3RUeXBlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvU2l6ZVRleHRHcm91cC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL2l0ZW1zL0J0bkZvcm1hdFRleHQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvQWN0aW9ucy9pdGVtcy9Ecm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL2l0ZW1zL2ltZ01vZGFsLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L05vZGVzL0ltYWdlTm9kZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9Ob2Rlcy9jb21wb25lbnRzL0ltYWdlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L3BsdWdpbnMvSW1hZ2VQbHVnaW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvVG9hc3QuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0FkZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2hlY2tlZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Nsb3NlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRGFuZ2VyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRGVsZXRlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRWRpdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0V4cGFuZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0ZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0luZm8uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9Mb2dvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9NZW51LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvTmV4dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1ByZXYuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvV2FybmluZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvQm9sZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9CdWxsZXRlZExpc3QuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvRm9ybWF0U2l6ZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9JbWcuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvSXRhbGljLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL051bWJlcmVkTGlzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9TdHJpa2UuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvU3VwZXJTY3JpcHQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvVHh0Q2VudGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1R4dEp1c3RpZnkuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvVHh0TGVmdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9UeHRSaWdodC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9VbmRlcmxpbmUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2FkbWluL2FwcC5zY3NzPzNmYjMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2d1ZXN0L2FwcC5zY3NzPzlhYWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIixcblx0XCIuL21haW5fYWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG4vLyBpbXBvcnQgJy4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiLy8gcHJlcGFyZUZvclNlbmQgcHJlcGFyZSB1bmUgZGF0ZSBwb3VyIFBIUFxyXG5jb25zdCBwcmVwYXJlRm9yU2VuZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0ge31cclxuICBmb3IgKGxldCBbayx2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG4gICAgaWYgKHYgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHYuc2V0RGF0ZSh2LmdldERhdGUoKSsxKVxyXG4gICAgICByZXN1bHRba10gPSB2LnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVHxcXC5bMC05XStaJC9nLCAoZXgpID0+IGV4ID09PSBcIlRcIiA/IFwiIFwiIDogXCJcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrXSA9IHZcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gc3RyaW5nIGJvb2xlYW4gdG8gYm9vbGVhblxyXG5cclxuY29uc3QgZ2V0Qm9vbGVhbkZyb21TdHJpbmcgPSAoc3RyKSA9PiB7XHJcbiAgc3dpdGNoIChzdHIpIHtcclxuICAgIGNhc2UgXCJ0cnVlXCI6XHJcbiAgICBjYXNlIFwiVFJVRVwiOlxyXG4gICAgY2FzZSBcIjFcIiB8fCAxOlxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuLy8gdXJsIGRlIGJhc2UgcG91ciBmYWNpbGl0ZXIgbGEgbmF2aWdhdGlvblxyXG5cclxuY29uc3Qgc2V0QmFzZVVybCA9IChleHQgPSBcIlwiKSA9PiB7XHJcbiAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtleHQubGVuZ3RoID4gMCA/IFwiL1wiIDogbnVsbH0ke2V4dH1gXHJcbn1cclxuXHJcbi8vIG5ldHRvaWUgbCd1cmwgZm91cm5pXHJcblxyXG5jb25zdCBjbGVhblBhdGggPSBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcLyR8XFwvJC8sICcnKS5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxyXG5cclxuLy8gcHJlbWnDqHJlIGxldHRyZSBlbiBtYWp1c2N1bGVcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAodHh0KSA9PiB7XHJcbiAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbi8vIG9idGVuaXIgbCd1cmwgcmVsYXRpdmVcclxuXHJcbmNvbnN0IGVuZE9mUGF0aCA9IChwYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguc2xpY2UocGF0aC5sYXN0SW5kZXhPZignXFwvJykpXHJcbn1cclxuXHJcbi8vIGNoYW5nZSBsZSB0aXRyZSBkYW5zIGwnb25nbGV0XHJcblxyXG5jb25zdCB1cGRhdGVUaXRsZSA9IChuKSA9PiB7XHJcbiAgbiA9IG4ucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgZG9jdW1lbnQudGl0bGUgPSBgTWluaS1DTVMgLT4gJHsobi5sZW5ndGggPiAwID8gY2FwaXRhbGl6ZShuKSA6IFwiU2V0dGluZ3NcIil9YFxyXG4gIHJldHVybjtcclxufVxyXG5cclxuLy8gdHJvdXZlIHVuZSBleHByZXNzaW9uIHLDqWd1bGnDqHJlXHJcblxyXG5jb25zdCBzdHJDb250YWlucyA9IChzdHIsIHNlYXJjaCkgPT4ge1xyXG4gIGxldCByZSA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpXHJcbiAgcmV0dXJuIHN0ci5zZWFyY2gocmUpID49IDAgPyB0cnVlIDogZmFsc2VcclxufVxyXG5cclxuLy8gbm9ybWFsaXplIHVuIHN0cmluZyBwb3VyIGZpbHRyZVxyXG5cclxuY29uc3Qgc3RyTm9ybWFsaXplID0gKHN0cikgPT4ge1xyXG4gIGNvbnN0IHRlc3QgPSAobCxyZWcpID0+IG5ldyBSZWdFeHAocmVnKS50ZXN0KGwpXHJcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpXHJcbiAgICAucmVwbGFjZSgvW15hLXpdL2csICh3KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgdGVzdCh3ICwvw6N8w6B8w6F8w6J8w6QvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiYVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DqHzDqXzDqnzDqy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OsfMOtfMOufMOvL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7V8w7J8w7N8w7R8w7YvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwib1wiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DuXzDunzDu3zDvC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJ1XCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O9fMO/L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7EvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiblwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Fky9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpi9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJjXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OfL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInNzXCJcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHdcclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gdHJvdXZlciB1bmUgcHJvcHMgYm9vbMOpZW4gKHZyYWkgb3UgZmF1eCkgZGFucyB1biBvYmpldCByZWN1cnNpZlxyXG5cclxuY29uc3QgZ2V0UHJvcHNCb29sU3RhdHVzID0gKG9iaiwgcHJvcCwgYm9vbFN0YXRlKSA9PiB7XHJcblxyXG4gIGlmIChvYmpbcHJvcF0pIHtcclxuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IGJvb2xTdGF0ZTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW2tleSx2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBpZiAoZ2V0UHJvcHNCb29sU3RhdHVzKHZhbHVlLCBwcm9wLCBib29sU3RhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8vIGNvbXBhcmUgZGV1eCBvYmpldHMgSlMgKHRvdXQgdHlwZXMpXHJcblxyXG5jb25zdCBhcmVFcXVhbCA9IChvYmoxLG9iajIpID0+IHtcclxuICBpZiAodHlwZW9mIG9iajEgIT09IHR5cGVvZiBvYmoyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJlRXF1YWwob2JqMVtpXSxvYmoyW2ldKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSkge1xyXG4gICAgY29uc3QgZW50MSA9IE9iamVjdC5lbnRyaWVzKG9iajEpXHJcbiAgICBjb25zdCBlbnQyID0gT2JqZWN0LmVudHJpZXMob2JqMilcclxuICAgIGlmIChlbnQxLmxlbmd0aCAhPT0gZW50Mi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmoxKSkge1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQob2JqMltrZXldKSkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwob2JqMVtrZXldLG9iajJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBvYmoxID09PSBvYmoyXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IGTDqWZpbmllXHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSAob2JqKSA9PiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWRcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gb2JqZXQgZGUgdHlwZSBBcnJheSBKU1xyXG5cclxuY29uc3QgaXNPYmplY3QgPSAob2JqZWN0KSA9PiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmICFpc0FycmF5KG9iamVjdClcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIFRhYmxlYXV4IFxyXG5cclxuY29uc3QgaXNBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KVxyXG59XHJcblxyXG5jb25zdCBzb3J0QXNjID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPCBiLnNvcnQgPyAtMSA6IGEuc29ydCA+IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmNvbnN0IHNvcnREZXMgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA+IGIuc29ydCA/IC0xIDogYS5zb3J0IDwgYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgc2V0QmFzZVVybCwgXHJcbiAgY2FwaXRhbGl6ZSwgXHJcbiAgdXBkYXRlVGl0bGUsIFxyXG4gIGVuZE9mUGF0aCwgXHJcbiAgc3RyQ29udGFpbnMsIFxyXG4gIGNsZWFuUGF0aCwgXHJcbiAgaXNKU09OLCBcclxuICBpc0FycmF5LCBcclxuICBhcmVFcXVhbCwgXHJcbiAgc29ydEFzYywgXHJcbiAgc29ydERlcyxcclxuICBnZXRQcm9wc0Jvb2xTdGF0dXMsXHJcbiAgc3RyTm9ybWFsaXplLFxyXG4gIHByZXBhcmVGb3JTZW5kLFxyXG4gIGdldEJvb2xlYW5Gcm9tU3RyaW5nXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY29udGVudFwiPlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9J2FkbWluLWZvb3Rlcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLWdyb3VwJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay1wcmV2Jz5DcsOpYXRldXIgOiA8L2Rpdj5cclxuICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdsaW5rJyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vQXJja2FuaWNzJz5cclxuICAgICAgICAgIEdpdEh1Yi5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay1ncm91cCc+XHJcbiAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nbGluaycgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0FyY2thbmljcy9taW5pLWNtcyc+XHJcbiAgICAgICAgICDDoCBwcm9wb3NcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJcclxuY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XHJcbiAgbGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9X3Rva2VuXScpXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgbGV0IGtleSA9IHRva2VuLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gIHRva2VuLnJlbW92ZSgpXHJcbiAgcmV0dXJuIGtleVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRUb2tlbiB9IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi91aSdcclxuaW1wb3J0IHsgY2xlYXJEYXRhLCBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgUGFnZXMsIFNldHRpbmdzLCBBcnRpY2xlcywgTG9naW4gfSBmcm9tICcuL3BhZ2VzJ1xyXG5cclxuY29uc3QgTWVudSA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiUGFnZXNcIiwgcGF0aDogXCIvcGFnZXNcIiwgUGFnZTogUGFnZXN9LFxyXG4gIHtuYW1lOiBcIkFydGljbGVzXCIsIHBhdGg6IFwiL2FydGljbGVzXCIsIFBhZ2U6IEFydGljbGVzfSxcclxuXVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC51cmwpXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXJsID09PSBcIlwiID8gZGlzcGF0Y2goc2V0VXJsKFwiXCIpKSA6IG51bGxcclxuICAgIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogdW5kZWZpbmVkXHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChjbGVhckRhdGEoKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBNZW51Lm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e01lbnV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2UgdXJsPXtwYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8VG9hc3QvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCB7IE1lbnUsIExvZ291dH0gZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpLydcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2xlYXJEYXRhLCBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7UGFnZXN9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RW5hYmxlKHRydWUpXHJcbiAgICB9LCA1MClcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKG4pXHJcbiAgICBkaXNwYXRjaChjbGVhckRhdGEoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdpY29uLW5hdiBtb2JpbGUnPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9ICBjbGFzc05hbWU9eyduYXYtbGluaycgKyAodG9nZ2xlID8gXCIgYWN0aXZlXCIgOiBcIlwiKX0+PE1lbnUgY2xzPVwic3ZnLWljb25cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9eyduYXYtaXRlbS1tZW51IGZsZXggZmxleC1jb2wgZ2FwLTInICsgKHRvZ2dsZSA/IFwiIHRvZ2dsZVwiIDogXCJcIil9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHtuYW1lLHBhdGh9LGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPE5hdkxpIGtleT17aX0gdG89e2AvbWluaS1hZG1pbiR7cGF0aH1gLnJlcGxhY2UoL1xcLyQvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0VG9nZ2xlKGZhbHNlKTsgdXBkYXRlVGl0bGUocGF0aCk7IGRpc3BhdGNoKHNldFVybChwYXRoKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXR4dCc+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaT59KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bmF2IGlkPVwibmF2LW9wdHNcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdpY29uLW5hdic+XHJcbiAgICAgICAgICA8TmF2TGkgdG89XCIvbWluaS1hZG1pbi9sb2dvdXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PjxMb2dvdXQgQ2xzPVwic3ZnLWljb25cIiAvPjwvTmF2TGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdlc0NvbnRhaW5lciwgQ29udGVudE5hdiwgTW9kYWxFZGl0b3IgfSBmcm9tIFwiLi4vdWlcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHByZXBhcmVGb3JTZW5kIH0gZnJvbSBcIi4uLy4uLy4uL0Z1bmN0aW9ucy9hcHBcIjtcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZVwiO1xyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIEFydGljbGVzXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguYXhpb3MpO1xyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoeyAuLi5heGlvc1NldCwgcGFyYW1zOiB7IHBhZ2U6IFwiYXJ0aWNsZXNcIiB9IH0pO1xyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYWpheC5kYXRhLmFydGljbGVzKTtcclxuICBjb25zdCBwYWdlcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoe1xyXG4gICAgZW5hYmxlOiBmYWxzZSxcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHR5cGU6IG51bGwsXHJcbiAgICB3aGVyZTogXCJhcnRpY2xlc1wiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheFxyXG4gICAgICAuZ2V0KFwiL3JlcXVlc3RcIilcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwiYXJ0aWNsZXNcIiwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShcIi9taW5pLWFkbWluL2xvZ291dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGFqYXhcclxuICAgICAgLmdldChcIi9yZXF1ZXN0XCIsIHsgLi4uYXhpb3NTZXQsIHBhcmFtczogeyBwYWdlOiBcInBhZ2VzXCIgfSB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJwYWdlc1wiLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL21pbmktYWRtaW4vbG9nb3V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoeyAuLi5tb2RhbCwgZW5hYmxlOiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIC8vIGVudm9pZSBkZXMgZG9ubsOpZXNcclxuICBjb25zdCBzZW5kRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc3QgeyB0eXBlLCB3aGVyZSB9ID0gbW9kYWw7XHJcbiAgICBkYXRhID0gdHlwZSAhPT0gXCJkZWxldGVcIiA/IGRhdGEgPSBwcmVwYXJlRm9yU2VuZChkYXRhKSA6IGRhdGFcclxuICAgIGNvbnN0IHNlbmRGaWVsZCA9IHsgd2hlcmUsIGRhdGE6IGRhdGEgfTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwicHV0XCI6XHJcbiAgICAgICAgcmV0dXJuIGFqYXgucHV0KFwiL3JlcXVlc3RcIiwgc2VuZEZpZWxkKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IHdoZXJlLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBtc2c6IFwiYXJ0aWNsZSBtaXMgw6Agam91ciFcIixcclxuICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgY2FzZSBcInBvc3RcIjpcclxuICAgICAgICByZXR1cm4gYWpheC5wb3N0KFwiL3JlcXVlc3RcIiwgc2VuZEZpZWxkKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IHdoZXJlLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBtc2c6IFwiYXJ0aWNsZSBlbnJlZ2lzdHLDqSFcIixcclxuICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgICByZXR1cm4gYWpheC5kZWxldGUoXCIvcmVxdWVzdFwiLCB7ZGF0YTogey4uLnNlbmRGaWVsZH19KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogd2hlcmUsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgbXNnOiBcImFydGljbGUgc3VwcHJpbcOpIVwiLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gbm91dmVsIGFydGljbGVcclxuICBjb25zdCBjcmVhdGVBcnRpY2xlID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoe1xyXG4gICAgICAuLi5tb2RhbCxcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICB0aXRsZTogXCJDcsOpZXJcIixcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBvdXZyZSBsJ8OpZGl0aW9uIGQnYXJ0aWNsZXNcclxuICBjb25zdCB1cGRhdGVBcnRpY2xlID0gaWQgPT4ge1xyXG4gICAgY29uc3QgYXJ0aWNsZSA9IHsgLi4uYXJ0aWNsZXMuZmluZChhID0+IGEuaWQgPT0gaWQpIH07XHJcbiAgICBjb25zdCBjb252ZXJ0ID0ge307XHJcbiAgICBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXJ0aWNsZSkpIHtcclxuICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKHYpIHtcclxuICAgICAgICAgIGNvbnZlcnRba10gPSBuZXcgRGF0ZShEYXRlLnBhcnNlKHYuZGF0ZS5yZXBsYWNlKC9cXC5bMC05XSskL2csIFwiXCIpKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnZlcnRba10gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb252ZXJ0W2tdID0gdjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0TW9kYWwoe1xyXG4gICAgICAuLi5tb2RhbCxcclxuICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICB0aXRsZTogXCJNb2RpZmllclwiLFxyXG4gICAgICBkYXRhOiBjb252ZXJ0LFxyXG4gICAgICB0eXBlOiBcInB1dFwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gc3VwcHJpbWUgbGVzIGFydGljbGVzXHJcbiAgY29uc3QgcmVtb3ZlQXJ0aWNsZSA9IGlkID0+IHtcclxuICAgIG1vZGFsLnR5cGUgPSBcImRlbGV0ZVwiXHJcbiAgICBzZW5kRGF0YShpZClcclxuICB9O1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7IHRhZzogXCJ0aXRsZVwiLCBuYW1lOiBcInRpdHJlXCIsIGRyYXc6IFwic3RyaW5nXCIsIGNvbFNpemU6IDIgfSxcclxuICAgIHsgdGFnOiBcInNvcnRcIiwgbmFtZTogXCJvcmRyZVwiLCBkcmF3OiBcIm51bWJlclwiLCBjb2xTaXplOiBcIjEtNVwiIH0sXHJcbiAgICB7IHRhZzogXCJwYWdlXCIsIG5hbWU6IFwicGFnZVwiLCBkcmF3OiBcIm9iamVjdC50aXRsZVwiLCBjb2xTaXplOiAyIH0sXHJcbiAgICB7IHRhZzogXCJwdWJsaXNoZWRcIiwgbmFtZTogXCJ2aXNpYmxlXCIsIGRyYXc6IFwiYm9vbFwiLCBjb2xTaXplOiAxIH0sXHJcbiAgICB7IHRhZzogXCJpc2R5bmFtaWNcIiwgbmFtZTogXCJkeW5hbWlxdWVcIiwgZHJhdzogXCJib29sXCIsIGNvbFNpemU6IDEgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXtcIkFydGljbGVzXCJ9PlxyXG4gICAgICB7dHlwZW9mIGFydGljbGVzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBwYWdlcyA9PT0gXCJvYmplY3RcIiA/IChcclxuICAgICAgICA8Q29udGVudE5hdlxyXG4gICAgICAgICAgZGF0YT17YXJ0aWNsZXN9XHJcbiAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cclxuICAgICAgICAgIGNyZWF0ZT17Y3JlYXRlQXJ0aWNsZX1cclxuICAgICAgICAgIHVwZGF0ZT17dXBkYXRlQXJ0aWNsZX1cclxuICAgICAgICAgIHJlbW92ZT17cmVtb3ZlQXJ0aWNsZX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAge1xyXG4gICAgICAgIC8vIGZlbsOqdHJlIGQnw6lkaXRpb24gZXQgY3LDqWF0aW9uIGRlcyBhcnRpY2xlc1xyXG4gICAgICAgIG1vZGFsLmVuYWJsZSA/IChcclxuICAgICAgICAgIDxNb2RhbEVkaXRvclxyXG4gICAgICAgICAgICBkYXRhPXttb2RhbC5kYXRhfVxyXG4gICAgICAgICAgICB0aXRsZT17bW9kYWwudGl0bGV9XHJcbiAgICAgICAgICAgIGNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICBjb21tYW5kPXtzZW5kRGF0YX1cclxuICAgICAgICAgICAgc2NoZW1hPXt7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IHsgdHlwZTogXCJzdHJpbmdcIiwgbmFtZTogXCJUaXRyZVwiIH0sXHJcbiAgICAgICAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgZHJhdzogXCJ0aXRsZVwiLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogcGFnZXMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwdWJsaXNoZWQ6IHsgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiVmlzaWJsZVwiIH0sXHJcbiAgICAgICAgICAgICAgaXNkeW5hbWljOiB7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIkR5bmFtaXF1ZVwiIH0sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGJlZ2luOiB7IHR5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcIkTDqWJ1dFwiLCBkcmF3OiBcInRpdGxlXCIgfSxcclxuICAgICAgICAgICAgICBwdWJsaXNoZW5kOiB7IHR5cGU6IFwiZGF0ZVwiLCBuYW1lOiBcIkZpblwiLCBkcmF3OiBcInRpdGxlXCIgfSxcclxuICAgICAgICAgICAgICAvLyBzb3J0OiB7IHR5cGU6IFwic29ydGluZ1wiLCBuYW1lOiBcIk9yZHJlXCIsIGxpc3Q6IGFydGljbGVzIH0sXHJcbiAgICAgICAgICAgICAgY29udGVudDogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJDb250ZW51XCIgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFR4dExhYmVsSW5wdXQgfSBmcm9tICcuLi91aS9JbnB1dHMnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vRnVuY3Rpb25zL1NlY3VyaXR5J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gcm91dGVyXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIC8vIHJlZHV4IC0gYWpheFxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFhNTFNldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheClcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5YTUxTZXQuYXhpb3N9KVxyXG4gIC8vIHJlZHV4IC0gTm90aWZpY2F0aW9uXHJcbiAgY29uc3QgbGlmZXRpbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmaWNhdGlvbi5saWZlKVxyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogbnVsbCxcclxuICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgX3Rva2VuOiBnZXRUb2tlbigpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyB0aW1lb3V0VmFyXHJcbiAgbGV0IGJsdXJUaW1lb3V0ID0gbnVsbFxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgYmx1clRpbWVvdXQgPSBibHVyVGltZW91dCAhPT0gbnVsbCA/IGNsZWFyVGltZW91dChibHVyVGltZW91dCkgOiBzZXRUaW1lb3V0KCgpID0+IGUubmF0aXZlRXZlbnQuc3VibWl0dGVyLmJsdXIoKSwgNTAwKVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7IC4uLnN0YXRlIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcy5kYXRhLnVybCA9PT0gXCIvXCIgPyBgJHtYTUxTZXQubmF2VVJMfWAgOiBgJHtYTUxTZXQubmF2VVJMfS8ke3Jlcy5kYXRhLnVybH1gXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXJsKFwiXCIpKVxyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcImluZm9cIiwgXHJcbiAgICAgICAgICBtc2c6IGBCaWVudmVudWUgJHtzdGF0ZS5lbWFpbH1gLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgc2V0Q29ubmVjdGVkKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+bmF2KGNsZWFuUGF0aCh1cmwpKSw0MDApXHJcbiAgICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLCBcclxuICAgICAgICAgIG1zZzogXCJjb25uZWN0aW9uIGluY29ycmVjdGVcIixcclxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIGxpZmV0aW1lKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIG5hdihgJHtYTUxTZXQubmF2VVJMfS9sb2dpbmApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gc3RhdGVcclxuXHJcbiAgcmV0dXJuIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBpZD1cImxvZ2luXCIgY2xhc3NOYW1lPXsncm91bmRlZC1sZyBiZy13aGl0ZSBjb2xvci1kYXJrJysoaXNDb25uZWN0ZWQgPyAnIGNvbm5lY3RlZCc6bnVsbCl9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tdGl0bGUnPkNvbm5leGlvbjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLWNsZWFyLW91dGxpbmUnPlxyXG4gICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ29tcHRlKEVtYWlsKVwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiYWRyZXNzZSBlbWFpbC4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwibW90IGRlIHBhc3NlLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCdXR0b25cclxuICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgYnRuQ2xzPSdidG4gcHJpbWFyeSB3LWZ1bGwnXHJcbiAgICA+TWUgQ29ubmVjdGVyPC9CdXR0b24+XHJcbiAgPC9mb3JtPlxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYgfSBmcm9tIFwiLi4vdWlcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZVwiO1xyXG5pbXBvcnQgeyBub3RpZnksIG5vdGlmeUNsb3NlIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcbmltcG9ydCB7IE1vZGFsRWRpdG9yIH0gZnJvbSBcIi4uL3VpXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBzdHJOb3JtYWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vRnVuY3Rpb25zL2FwcFwiO1xyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIFBhZ2VzXHJcblxyXG5jb25zdCBQYWdlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguYXhpb3MpO1xyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoeyAuLi5heGlvc1NldCwgcGFyYW1zOiB7IHBhZ2U6IFwicGFnZXNcIiB9IH0pO1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoe1xyXG4gICAgZW5hYmxlOiBmYWxzZSxcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHR5cGU6IG51bGwsXHJcbiAgICBzbWFsbDogdHJ1ZSxcclxuICAgIHdoZXJlOiBcInBhZ2VzXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheFxyXG4gICAgICAuZ2V0KFwiL3JlcXVlc3RcIilcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwicGFnZXNcIiwgZGF0YTogWy4uLnJlcy5kYXRhXSB9KSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL21pbmktYWRtaW4vbG9nb3V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHNlbmREYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCB7d2hlcmUsdHlwZX0gPSBtb2RhbFxyXG4gICAgaWYgKHR5cGUgIT09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgZGF0YS51cmwgPSBzdHJOb3JtYWxpemUoZGF0YS50aXRsZSkucmVwbGFjZSgvIC9naSwgJ18nKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRGaWVsZCA9IHsgd2hlcmUsIGRhdGE6IGRhdGEgfTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwicHV0XCI6XHJcbiAgICAgICAgcmV0dXJuIGFqYXgucHV0KFwiL3JlcXVlc3RcIiwgc2VuZEZpZWxkKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IHdoZXJlLCBkYXRhOiByZXMuZGF0YSB9KSk7XHJcbiAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgbm90aWZ5KHtcclxuICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBtc2c6IFwiUGFnZSBtaXNlIMOgIGpvdXIhXCIsXHJcbiAgICAgICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICB9LCAyNTAwKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNhc2UgXCJwb3N0XCI6XHJcbiAgICAgICAgcmV0dXJuIGFqYXgucG9zdChcIi9yZXF1ZXN0XCIsIHNlbmRGaWVsZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiB3aGVyZSwgZGF0YTogcmVzLmRhdGEgfSkpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgbXNnOiBcIlBhZ2UgY3LDqcOpZSFcIixcclxuICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpO1xyXG4gICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgICBtc2c6IHJlcy5yZXNwb25zZS5kYXRhLmVycm9yLFxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSk7XHJcbiAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgICByZXR1cm4gYWpheC5kZWxldGUoXCIvcmVxdWVzdFwiLCB7ZGF0YTogey4uLnNlbmRGaWVsZH19KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogd2hlcmUsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIG5vdGlmeSh7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICBtc2c6IFwiUGFnZSBzdXBwcmltw6llIVwiLFxyXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMjUwMCksXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1zZyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgICAgICBtc2c6IG1zZy5lcnJvcixcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChub3RpZnlDbG9zZSgpKTtcclxuICAgICAgICAgICAgICAgIH0sIDI1MDApLFxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKHtcclxuICAgICAgLi4ubW9kYWwsXHJcbiAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgIHRpdGxlOiBcIkNyw6llclwiLFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVQYWdlID0gaWQgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEgfTtcclxuICAgIGNvbnN0IHBhZ2UgPSBPYmplY3QudmFsdWVzKG5EYXRhKS5maW5kKHAgPT4gcC5pZCA9PSBpZCk7XHJcbiAgICBzZXRNb2RhbCh7XHJcbiAgICAgIC4uLm1vZGFsLFxyXG4gICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgIGRhdGE6IHsuLi5wYWdlfSxcclxuICAgICAgdHlwZTogXCJwdXRcIixcclxuICAgICAgdGl0bGU6IFwiTW9kaWZpZXJcIixcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUGFnZSA9IGlkID0+IHtcclxuICAgIG1vZGFsLnR5cGUgPSBcImRlbGV0ZVwiXHJcbiAgICBzZW5kRGF0YShpZClcclxuICB9O1xyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7IHRhZzogXCJ0aXRsZVwiLCBuYW1lOiBcInRpdHJlXCIsIGRyYXc6IFwic3RyaW5nXCIsIGNvbFNpemU6IDQgfSxcclxuICAgIHsgdGFnOiBcInNvcnRcIiwgbmFtZTogXCJvcmRyZVwiLCBkcmF3OiBcIm51bWJlclwiLCBjb2xTaXplOiBcIjEtNVwiIH0sXHJcbiAgICB7IHRhZzogXCJzZXR0aW5nc1wiLCBuYW1lOiBcImxhbmRpbmdcIiwgZHJhdzogXCJib29sXCIsIGNvbFNpemU6IDIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXtcIlBhZ2VzXCJ9PlxyXG4gICAgICB7ZGF0YSA/IChcclxuICAgICAgICA8Q29udGVudE5hdlxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxyXG4gICAgICAgICAgdXBkYXRlPXt1cGRhdGVQYWdlfVxyXG4gICAgICAgICAgcmVtb3ZlPXtyZW1vdmVQYWdlfVxyXG4gICAgICAgICAgY3JlYXRlPXtjcmVhdGVQYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICB7bW9kYWwuZW5hYmxlID8gKFxyXG4gICAgICAgIDxNb2RhbEVkaXRvclxyXG4gICAgICAgICAgZGF0YT17bW9kYWwuZGF0YX1cclxuICAgICAgICAgIHRpdGxlPXttb2RhbC50aXRsZX1cclxuICAgICAgICAgIGNsb3NlPXsoKSA9PiBzZXRNb2RhbCh7Li4ubW9kYWwsIGVuYWJsZTogZmFsc2V9KX1cclxuICAgICAgICAgIGNvbW1hbmQ9e3NlbmREYXRhfVxyXG4gICAgICAgICAgc21hbGw9e21vZGFsLnNtYWxsfVxyXG4gICAgICAgICAgc2NoZW1hPXt7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7IHR5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiVGl0cmVcIiB9LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQYWdlc0NvbnRhaW5lciB9IGZyb20gXCIuLi91aVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdG9yLCBUeHRMYWJlbElucHV0IH0gZnJvbSBcIi4uL3VpL0lucHV0c1wiO1xyXG5pbXBvcnQgeyBhcmVFcXVhbCwgY2FwaXRhbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9GdW5jdGlvbnMvYXBwXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gXCIuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBub3RpZnksIG5vdGlmeUNsb3NlIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG4vLyBHZXN0aW9uIGRlcyBTZXR0aW5nc1xyXG5cclxuY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmF4aW9zKTtcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsgLi4uYXhpb3NTZXQgfSk7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmFqYXguZGF0YS5zZXR0aW5ncyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjaGFuZ2UsIHNldENoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2luaXRpYWxTdGF0ZSwgc2V0SW5pdGlhbFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXhcclxuICAgICAgLmdldChcIi9yZXF1ZXN0XCIpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcInNldHRpbmdzXCIsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgICBzZXRJbml0aWFsU3RhdGUoeyAuLi5yZXMuZGF0YSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoXCIvbWluaS1hZG1pbi9sb2dvdXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSB2ID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlIFwiQXV0aG9yXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiYXV0ZXVyXCI7XHJcbiAgICAgIGNhc2UgXCJEZXNjcmlwdGlvblwiOlxyXG4gICAgICAgIHJldHVybiBcImRlc2NyaXB0aW9uXCI7XHJcbiAgICAgIGNhc2UgXCJTaXRlTmFtZVwiOlxyXG4gICAgICAgIHJldHVybiBcIm5vbSBkdSBzaXRlXCI7XHJcbiAgICAgIGNhc2UgXCJMYW5kaW5nXCI6XHJcbiAgICAgICAgcmV0dXJuIFwicGFnZSBkJ2FjY3VlaWxcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgcHJvcCkgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEsIFtwcm9wXTogZS50YXJnZXQudmFsdWUgfTtcclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogXCJzZXR0aW5nc1wiLCBkYXRhOiBuRGF0YSB9KSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldExhbmRpbmcgPSB2ID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBMYW5kaW5nOiB2IH07XHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6IFwic2V0dGluZ3NcIiwgZGF0YTogbkRhdGEgfSkpO1xyXG4gICAgY29uc29sZS5sb2coYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkpO1xyXG4gICAgIWFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpID8gc2V0Q2hhbmdlKHRydWUpIDogc2V0Q2hhbmdlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGFqYXgucHV0KFwiL3JlcXVlc3RcIiwgeyB3aGVyZTogXCJzZXR0aW5nc1wiLCBkYXRhIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gobm90aWZ5KHsgXHJcbiAgICAgICAgbXNnOiBcIm9wdGlvbnMgbWlzZSDDoCBqb3VyXCIsIFxyXG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDIwMDApXHJcbiAgICAgIH0pKTtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiBcInNldHRpbmdzXCIsIGRhdGE6IHJlcy5kYXRhIH0pKTtcclxuICAgICAgc2V0SW5pdGlhbFN0YXRlKHsgLi4ucmVzLmRhdGEgfSk7XHJcbiAgICAgIHNldENoYW5nZShmYWxzZSlcclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKG5vdGlmeSh7IFxyXG4gICAgICAgIG1zZzogXCJlcnJldXIgZGUgc2F1dmVnYXJkZVwiLCBcclxuICAgICAgICB0eXBlOiBcImRhbmdlclwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDIwMDApXHJcbiAgICAgIH0pKVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXtcIlBhcmFtw6h0cmVzXCJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLCBcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpKX1cclxuICAgICAgICAgICAgICBpZD1cIkF1dGhvclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuQXV0aG9yfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPVwiaW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGRpdkNscz1cImlucHV0LXdyYXAgcC0yIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgbGFiZWxDbHM9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZShlLCBcIkRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9XHJcbiAgICAgICAgICAgICAgaWQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz1cImlucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBkaXZDbHM9XCJpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsQ2xzPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVDaGFuZ2UoZSwgXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIikpfVxyXG4gICAgICAgICAgICAgIGlkPVwiU2l0ZU5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkYXRhLlNpdGVOYW1lfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9XCJpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgZGl2Q2xzPVwiaW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBsYWJlbENscz1cImxhYmVsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgY2xzPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBpY29uQ2xzPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXtkYXRhLkxhbmRpbmd9XHJcbiAgICAgICAgICAgICAgbGlzdD17ZGF0YS5QYWdlc31cclxuICAgICAgICAgICAgICBhY3Rpb249e3NldExhbmRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMlwiPlBhZ2U8L2gyPlxyXG4gICAgICAgICAgICA8L1NlbGVjdG9yPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge2NoYW5nZSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGJ0bkNscz17XCJidG4gc2Vjb25kYXJ5IGZhZGVJbkxlZnRcIn1cclxuICAgICAgICAgICAgZGl2Q2xzPXtcInAtMiBmbGV4IGp1c3RpZnktZW5kXCJ9XHJcbiAgICAgICAgICAgIGNsaWNrPXt1cGRhdGVTZXR0aW5nc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F1dmVnYXJkZXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBQYWdlcyBmcm9tIFwiLi9QYWdlc1wiO1xyXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4vQXJ0aWNsZXNcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuZXhwb3J0IHsgUGFnZXMsIEFydGljbGVzLCBTZXR0aW5ncywgTG9naW4gfSIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgc2V0QmFzZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5leHBvcnQgY29uc3QgYWpheFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhamF4JyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVybDogJycsXHJcbiAgICBiYXNlVXJsOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICBuYXZVUkw6IFwiL21pbmktYWRtaW5cIixcclxuICAgIGF4aW9zOiB7XHJcbiAgICAgIGJhc2VVUkw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHt9XHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXJsOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51cmwgPSBlbmRPZlBhdGgoY2xlYW5QYXRoKGAke2FjdGlvbi5wYXlsb2FkfWApKVxyXG4gICAgfSxcclxuICAgIHB1c2hEYXRhOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGRhdGEgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLmRhdGEgPSB7Li4uc3RhdGUuZGF0YSwgW25hbWVdOiBkYXRhfVxyXG4gICAgfSxcclxuICAgIGNsZWFyRGF0YTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRhdGEgPSB7fVxyXG4gICAgICBzdGF0ZS51cmwgPSBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0VXJsLCBwdXNoRGF0YSwgY2xlYXJEYXRhIH0gPSBhamF4U2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWpheFNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgYWpheFNsaWNlIGZyb20gXCIuL2FqYXhTbGljZVwiO1xyXG5pbXBvcnQgbGV4aWNhbFNsaWNlIGZyb20gXCIuL2xleGljYWxTbGljZVwiO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uU2xpY2UgZnJvbSBcIi4vbm90aWZpY2F0aW9uU2xpY2VcIjtcclxuXHJcbmV4cG9ydCB7IGFqYXhTbGljZSwgbm90aWZpY2F0aW9uU2xpY2UsIGxleGljYWxTbGljZSB9IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxleGljYWxTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImxleGljYWxcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIGltZ0tleTogbnVsbFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEltZ0tleTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpbWdLZXk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRJbWdLZXksIH0gPSBsZXhpY2FsU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGV4aWNhbFNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJub3RpZmljYXRpb25cIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIG1zZzogXCJcIixcclxuICAgIHN0YXR1czogXCJvdXRcIixcclxuICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgdGltZW91dDogbnVsbCxcclxuICAgIGxpZmU6IDQwMDBcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBub3RpZnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGNvbnN0IHt0eXBlLG1zZyx0aW1lb3V0fSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgc3RhdHVzIDogXCJpblwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQgfHwgbnVsbCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlLZWVwOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7ZXZlbnQsIGZ1bmN9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgaWYgKGV2ZW50ID09PSBcInN0YXlcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHRpbWVvdXQ6IGZ1bmMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeUNsb3NlOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIHN0YXR1czogJ291dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UsIG5vdGlmeUtlZXAgfSA9IG5vdGlmaWNhdGlvblNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvblNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvblNsaWNlLCBhamF4U2xpY2UsIGxleGljYWxTbGljZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGFqYXg6IGFqYXhTbGljZSxcclxuICAgIG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uU2xpY2UsXHJcbiAgICBsZXhpY2FsOiBsZXhpY2FsU2xpY2VcclxuICB9LFxyXG59KVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0RlbGV0ZSdcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0VkaXQnXHJcblxyXG5jb25zdCBBY3Rpb25zUm93ID0gKHsgaWQsIHVwZGF0ZSwgcmVtb3ZlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZmxleC1ub3dyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTMnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbiBzZWNvbmRhcnknIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGUoaWQpfT5cclxuICAgICAgICA8RWRpdCBjbHM9J2FjdGlvbi1pY29uIGVkaXQnLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24tYnV0dG9uIHNlY29uZGFyeScgb25DbGljaz17KGUpID0+IHJlbW92ZShpZCl9PlxyXG4gICAgICAgIDxEZWxldGUgY2xzPSdhY3Rpb24taWNvbiBkZWxldGUnLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnNSb3ciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDU1JGSW5wdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl90b2tlblwiIHZhbHVlPXtnZXRUb2tlbigpfSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ1NSRklucHV0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBjYXBpdGFsaXplLFxyXG4gIGdldFByb3BzQm9vbFN0YXR1cyxcclxuICBpc0FycmF5LFxyXG4gIHN0ck5vcm1hbGl6ZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vRnVuY3Rpb25zL2FwcFwiO1xyXG5pbXBvcnQgeyBOdW1iZXJJbnB1dCwgQ2hlY2tib3gsIFN3aXRjaElucHV0LCBTZWxlY3RvciB9IGZyb20gXCIuL0lucHV0c1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zUm93IH0gZnJvbSBcIi4vXCI7XHJcbmltcG9ydCB7IEZpbHRlciwgU3VjY2VzcywgQ2xvc2UgfSBmcm9tIFwiLi4vLi4vLi4vaWNvbi9pY29uLXVpXCI7XHJcblxyXG5jb25zdCBDb250ZW50TmF2ID0gKHsgaGVhZGVyLCBkYXRhLCB1cGRhdGUsIHJlbW92ZSwgY3JlYXRlIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCB1cGRhdGVTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgYWpheERhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hamF4LmRhdGEpO1xyXG4gIGNvbnN0IFtuYXZTZWFyY2gsIHNldE5hdlNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpbml0aWF0aW9uIGRlcyBmaWx0cmVzXHJcbiAgICBjb25zdCBzRmllbGRzID0ge307XHJcbiAgICBoZWFkZXIubWFwKFxyXG4gICAgICBoID0+XHJcbiAgICAgICAgKHNGaWVsZHNbaC50YWddID1cclxuICAgICAgICAgIGgudGFnICE9PSBcInBhZ2VcIlxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOlxyXG4gICAgICAgICAgICAgICAgICBoLmRyYXcgPT09IFwibnVtYmVyXCIgPyAwIDogaC5kcmF3Lm1hdGNoKC9eYm9vbC8pID8gZmFsc2UgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFsuLi5hamF4RGF0YVtoLnRhZyArIFwic1wiXV0ubWFwKChlbCwgaSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgLi4uZWwsXHJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkOiBpID09IDAgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc0ZpZWxkcyB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGZvcm1hdCBsZXMgZG9ubsOpZSBwb3VyIGFmZmljaGFnZVxyXG4gIGNvbnN0IHNldFZpZXcgPSAodmFsdWUsIHNldCA9IFwidmFsdWVcIiwgdGFnKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqZWN0XFwuLisvZykudGVzdChzZXQpOlxyXG4gICAgICAgIGxldCBuYW1lID0gc2V0LnNwbGl0KFwiLlwiKVtzZXQuc3BsaXQoXCIuXCIpLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKGFqYXhEYXRhW2Ake3RhZ31zYF1bTnVtYmVyKHZhbHVlKSAtIDFdW25hbWVdKTtcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gKFxyXG4gICAgICAgICAgPFN1Y2Nlc3MgY2xzPVwiaC02IHctNiBtLWF1dG8gaWNvbiBzdWNjZXNzXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPENsb3NlIGNscz1cImgtNiB3LTYgbS1hdXRvIGljb24gZmFsc2VcIiAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm51bS9nKS50ZXN0KHNldCk6XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXnN0ci9nKS50ZXN0KHNldCk6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IGNhcGl0YWxpemUodmFsdWUpIDogdmFsdWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gdXBkYXRlIGRlcyBmaWx0cmVzIGRlIHJlY2hlcmNoZXNcclxuICBjb25zdCBzZWFyY2hIYW5kbGVDaGFuZ2UgPSAoZSwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlIFwic29ydFwiOlxyXG4gICAgICAgIHZhbHVlID1cclxuICAgICAgICAgIHZhbHVlIDwgMCB8fCB2YWx1ZSA9PSBcIlwiXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHZhbHVlID4gZGF0YS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gZGF0YS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zZWFyY2gsIFtmaWVsZF06IHsgLi4uc2VhcmNoW2ZpZWxkXSwgdmFsdWU6IHZhbHVlIH0gfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdXBkYXRlIGRlcyBmaWx0cmVzIGRlIHJlY2hlcmNoZXMgKCBzcMOpY2lmaXF1ZSDDoCB1bmUgbGlzdGUgZCfDqWzDqW1lbnQgYXR0cmlidXQgXCJmaWx0ZXJlZFwiKVxyXG4gIGNvbnN0IHVwZGF0ZUFycmF5RmlsdGVyID0gKHZhbHVlLCB0YWcpID0+IHtcclxuICAgIGNvbnN0IGFycmF5ID0gWy4uLnNlYXJjaFt0YWddLnZhbHVlXTtcclxuICAgIHVwZGF0ZVNlYXJjaCh7XHJcbiAgICAgIC4uLnNlYXJjaCxcclxuICAgICAgW3RhZ106IHtcclxuICAgICAgICAuLi5zZWFyY2hbdGFnXSxcclxuICAgICAgICB2YWx1ZTogYXJyYXkubWFwKGVsID0+ICh7XHJcbiAgICAgICAgICAuLi5lbCxcclxuICAgICAgICAgIGZpbHRlcmVkOiBlbC5pZCA9PT0gdmFsdWUgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gcmVuZHUgc2FucyBmaWx0cmVzXHJcbiAgY29uc3QgYmFzaWNSZW5kZXIgPSBkYXRhID0+XHJcbiAgICBkYXRhLm1hcCgoZmllbGQsIGspID0+IChcclxuICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT1cImNvbnRlbnQtcm93XCI+XHJcbiAgICAgICAge2hlYWRlci5tYXAoKHsgdGFnLCBkcmF3LCBjb2xTaXplIH0sIGspID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0ke2NvbFNpemV9YH0+XHJcbiAgICAgICAgICAgIHtzZXRWaWV3KGZpZWxkW3RhZ10sIGRyYXcsIHRhZyl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBhY3Rpb24tZmllbGQgY29sc2l6ZS0yYH0+XHJcbiAgICAgICAgICA8QWN0aW9uc1Jvd1xyXG4gICAgICAgICAgICBpZD17a31cclxuICAgICAgICAgICAgdXBkYXRlPXsoKSA9PiB1cGRhdGUoZmllbGQuaWQpfVxyXG4gICAgICAgICAgICByZW1vdmU9eygpID0+IHJlbW92ZShmaWVsZC5pZCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAvLyByZW5kdSBhdmVjIGZpbHRyZXNcclxuICBjb25zdCBmaWx0ZXJSZW5kZXIgPSBkYXRhID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaEZpbHRlciA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNlYXJjaCkpIHtcclxuICAgICAgaWYgKHYuYWN0aXZlKSB7XHJcbiAgICAgICAgc2VhcmNoRmlsdGVyW2tdID0gdi52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhLm1hcCgoZmllbGQsIGspID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2VhcmNoRmlsdGVyKSkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHYpIHtcclxuICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICFzdHJOb3JtYWxpemUoZmllbGRba10pLm1hdGNoKHN0ck5vcm1hbGl6ZSh2KSkgJiZcclxuICAgICAgICAgICAgICB2Lmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSBmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgaWYgKHYgPT09IHRydWUgJiYgIWZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHYgPT09IGZhbHNlICYmIGZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB2LmZpbmQoZWwgPT4gZWwuZmlsdGVyZWQpLmlkO1xyXG4gICAgICAgICAgICAgIGlmIChmaWVsZFtrXSAhPT0gZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPVwiY29udGVudC1yb3dcIj5cclxuICAgICAgICAgIHtoZWFkZXIubWFwKCh7IHRhZywgZHJhdywgY29sU2l6ZSB9LCBrKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0ke2NvbFNpemV9YH0+XHJcbiAgICAgICAgICAgICAge3NldFZpZXcoZmllbGRbdGFnXSwgZHJhdywgdGFnKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGFjdGlvbi1maWVsZCBjb2xzaXplLTJgfT5cclxuICAgICAgICAgICAgPEFjdGlvbnNSb3cgaWQ9e2t9IHVwZGF0ZT17KCkgPT4gdXBkYXRlKGZpZWxkLmlkKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gYWN0aXZlIHVuIGZpbHRyZSAoc2Vsb24gY2libGUgdXRpbGlzYXRldXIpXHJcbiAgY29uc3QgdG9nZ2xlRmlsdGVyID0gKGUsIGNoZWNrZWQpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB1cGRhdGVTZWFyY2goe1xyXG4gICAgICAuLi5zZWFyY2gsXHJcbiAgICAgIFtjaGVja2VkXTogeyAuLi5zZWFyY2hbY2hlY2tlZF0sIGFjdGl2ZTogIXNlYXJjaFtjaGVja2VkXS5hY3RpdmUgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LW5hdlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbmF2LWhlYWRlclwiPlxyXG4gICAgICAgIHtoZWFkZXIubWFwKChoLCBrKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9YH0+XHJcbiAgICAgICAgICAgIHtjYXBpdGFsaXplKGgubmFtZSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLTIgYWN0aW9uLWhlYWRlcmB9PlxyXG4gICAgICAgICAge2NhcGl0YWxpemUoXCJhY3Rpb25zXCIpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIFwiYnRuIGJ0bi1vdXRsaW5lIGljb24tYnRuIHNlY29uZGFyeSBtb2JpbGVcIiArXHJcbiAgICAgICAgICAgIChuYXZTZWFyY2ggPyBcIiB0b2dnbGVcIiA6IFwiXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZTZWFyY2goIW5hdlNlYXJjaCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZpbHRlciBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250ZW50LW5hdi1zZWFyY2hcIiArIChuYXZTZWFyY2ggPyBcIiB0b2dnbGVcIiA6IFwiXCIpfT5cclxuICAgICAgICAgIHtzZWFyY2hcclxuICAgICAgICAgICAgPyBoZWFkZXIubWFwKChoLCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgSW5wdXQ7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ebnVtL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzPXtgc2Vjb25kYXJ5IGNvbHNpemUtMTBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnBDbHM9XCJpbnB1dC1udW1iZXIgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXsoZSwgdmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17TnVtYmVyKHNlYXJjaFtoLnRhZ10udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtoLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXmJvb2wvZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoW2gudGFnXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCAhc2VhcmNoW2gudGFnXS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmovZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXtzZWFyY2hbaC50YWddLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlYXJjaFtoLnRhZ10udmFsdWUuZmluZChlbCA9PiBlbC5maWx0ZXJlZCkuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dmFsdWUgPT4gdXBkYXRlQXJyYXlGaWx0ZXIodmFsdWUsIGgudGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXR4dCBzZWNvbmRhcnkgY29sc2l6ZS0xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y2FwaXRhbGl6ZShoLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoW2gudGFnXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2t9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2VhcmNoLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9IGZsZXgganVzdGlmeS1pdGVtcy1zdHJldGNoIGZsZXgtbm93cmFwYH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xzPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlYXJjaFtoLnRhZ10uYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtlID0+IHRvZ2dsZUZpbHRlcihlLCBoLnRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLTIgYWN0aW9uLXNlYXJjaGB9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgIHshc2VhcmNoIHx8IChzZWFyY2ggJiYgIWdldFByb3BzQm9vbFN0YXR1cyhzZWFyY2gsIFwiYWN0aXZlXCIsIHRydWUpKVxyXG4gICAgICAgICAgPyBkYXRhICYmIGlzQXJyYXkoZGF0YSlcclxuICAgICAgICAgICAgPyBiYXNpY1JlbmRlcihkYXRhKVxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIDogZGF0YSAmJiBpc0FycmF5KGRhdGEpXHJcbiAgICAgICAgICA/IGZpbHRlclJlbmRlcihkYXRhKVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdi1hY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBzdWNjZXNzXCIgb25DbGljaz17Y3JlYXRlfT5cclxuICAgICAgICAgIENyw6llclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE5hdjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ0bkNscywgZGl2Q2xzLCBjbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfSBvbkNsaWNrPXtjbGlja30+eyBjaGlsZHJlbiB9PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZWNrZWQgZnJvbSAnLi4vLi4vLi4vLi4vaWNvbi9pY29uLXVpL0NoZWNrZWQnXHJcblxyXG5jb25zdCBDaGVja2JveCA9ICh7IGNscywgY2hhbmdlLCBjaGVja2VkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0LWNoZWNrYm94IFwiICsgY2xzfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgeyBjaGVja2VkID8gPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LXRydWUnPjxDaGVja2VkIC8+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LWZhbHNlJz48L2Rpdj4gfVxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3giLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhciwgTmF2UHJldiwgTmF2TmV4dCwgQ2xvc2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaWNvbi9pY29uLXVpL1wiO1xyXG5cclxuY29uc3QgRGF0ZVBpY2tlciA9ICh7IGNoYW5nZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHZhbHVlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gIGNvbnN0IGN1cnJWYWwgPSB7XHJcbiAgICBkYXk6IHZhbHVlLmdldERheSgpLFxyXG4gICAgZGF0ZTogdmFsdWUuZ2V0RGF0ZSgpLFxyXG4gICAgbW9udGg6IHZhbHVlLmdldE1vbnRoKCksXHJcbiAgICB5ZWFyOiB2YWx1ZS5nZXRGdWxsWWVhcigpLFxyXG4gIH07XHJcbiAgY29uc3QgZGF5cyA9IFtcIkx1blwiLCBcIk1hclwiLCBcIk1lclwiLCBcIkpldVwiLCBcIlZlblwiLCBcIlNhbVwiLCBcIkRpbVwiXTtcclxuICBjb25zdCBkcmF3RGF0ZSA9IHtcclxuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICBtb250aDogXCJsb25nXCIsXHJcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gIH07XHJcbiAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkYXRlU3RhdGUsIHNldERhdGVTdGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhb3BlbiAmJiByZWYgPyBzZXRUaW1lb3V0KCgpID0+IHJlZi5ibHVyKCksIDE1MCkgOiBudWxsO1xyXG4gIH0sIFtvcGVuXSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZURhdGUgPSB2ID0+IHtcclxuICAgIGNvbnN0IG5EYXRlID0gZGF0ZVN0YXRlO1xyXG4gICAgbkRhdGUuc2V0RGF0ZSh2KTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgY2hhbmdlKG5EYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXREYXlzID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IG91dFB1dCA9IFtdO1xyXG4gICAgY29uc3QgZGlzcGxheURhdGUgPSBuZXcgRGF0ZShkYXRlU3RhdGUuZ2V0VGltZSgpKTtcclxuICAgIGRpc3BsYXlEYXRlLnNldERhdGUoMSk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSAhPT0gZGlzcGxheURhdGUuZ2V0RGF5KCk7IGkrKykge1xyXG4gICAgICBvdXRQdXQucHVzaCg8ZGl2IGtleT17XCJkUGljay1cIiArIGNvdW50fSBjbGFzc05hbWU9XCJjYXNlIGVtcHR5XCI+PC9kaXY+KTtcclxuICAgICAgY291bnQrKztcclxuICAgIH1cclxuICAgIGRpc3BsYXlEYXRlLnNldE1vbnRoKGRpc3BsYXlEYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgIGRpc3BsYXlEYXRlLnNldERhdGUoMCk7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkaXNwbGF5RGF0ZS5nZXREYXRlKCk7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaSA9PSBjdXJyVmFsLmRhdGUgJiZcclxuICAgICAgICBjdXJyVmFsLm1vbnRoID09IGRpc3BsYXlEYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICBjdXJyVmFsLnllYXIgPT0gZGlzcGxheURhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICApIHtcclxuICAgICAgICBvdXRQdXQucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtcImRQaWNrLVwiICsgY291bnR9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZURhdGUoaSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhc2UgYWN0aXZlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG91dFB1dC5wdXNoKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e1wiZFBpY2stXCIgKyBjb3VudH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlRGF0ZShpKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FzZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dFB1dDtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRNb250aCA9IHYgPT4ge1xyXG4gICAgbGV0IG1vbnRoID0gZGF0ZVN0YXRlLmdldE1vbnRoKCkgKyB2O1xyXG4gICAgY29uc3QgbkRhdGUgPSBuZXcgRGF0ZShkYXRlU3RhdGUuZ2V0VGltZSgpKTtcclxuICAgIG5EYXRlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgIHNldERhdGVTdGF0ZShuRGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0WWVhciA9IHYgPT4ge1xyXG4gICAgbGV0IHllYXIgPSBkYXRlU3RhdGUuZ2V0RnVsbFllYXIoKSArIHY7XHJcbiAgICBjb25zdCBuRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgbkRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgICBzZXREYXRlU3RhdGUobkRhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImlucHV0LWNhbGVuZGFyXCJcclxuICAgICAgb25DbGljaz17KCkgPT4gKCFvcGVuID8gc2V0T3Blbih0cnVlKSA6IG51bGwpfVxyXG4gICAgICBvbkZvY3VzPXtlID0+IHNldFJlZihlLnRhcmdldCl9XHJcbiAgICAgIHRhYkluZGV4PXstMX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXR4dFwiPnt2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1GUlwiKX0uPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItaWNvblwiPlxyXG4gICAgICAgIDxDYWxlbmRhciBjbHM9e1wiaWNvblwifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFvcGVuID8gbnVsbCA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWN1cnJlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAge3ZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIsIGRyYXdEYXRlKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICA8Q2xvc2UgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLXllYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1tb250aFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLW5hdiBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0TW9udGgoLTEpfT5cclxuICAgICAgICAgICAgICAgIDxOYXZQcmV2IGNscz1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZVN0YXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIsIHsgbW9udGg6IFwibG9uZ1wiIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLW5hdiBwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0TW9udGgoMSl9PlxyXG4gICAgICAgICAgICAgICAgPE5hdk5leHQgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLXllYXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1uYXYgcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFllYXIoLTEpfT5cclxuICAgICAgICAgICAgICAgIDxOYXZQcmV2IGNscz1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZVN0YXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIsIHsgeWVhcjogXCJudW1lcmljXCIgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbmF2IHByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRZZWFyKDEpfT5cclxuICAgICAgICAgICAgICAgIDxOYXZOZXh0IGNscz1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXktbmFtZXNcIj5cclxuICAgICAgICAgICAge2RheXMubWFwKChkLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyBNYXRoLnJhbmRvbSgpICogMTAwfSBjbGFzc05hbWU9XCJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZH0uXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWRheXNcIj57c2V0RGF5cygpfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEltYWdlRmlsZUlucHV0ID0gKHtjbHMsIGFkZENscywgYnJvd3NlLCBpZCwgY2hhbmdlLCBpbWdCcm93c2V9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnJvd3NlfSBvbkNsaWNrPXtpbWdCcm93c2V9PlBhcmNvdXJpcjwvYnV0dG9uPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT17YWRkQ2xzfT4rPC9sYWJlbD5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICAgIHR5cGU9J2ZpbGUnIFxyXG4gICAgICAgIGNsYXNzTmFtZT0naGlkZGVuJ1xyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgIG11bHRpcGxlPXtmYWxzZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZShlLm5hdGl2ZUV2ZW50KX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VGaWxlSW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOdW1iZXJJbnB1dCA9ICh7IGNscywgaW5wQ2xzLCBjaGFuZ2UsIHZhbHVlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NscyArICcgaW5wdXQtbnVtYmVyLXdyYXAgZmxleCBmbGV4LW5vd3JhcCByZWxhdGl2ZSd9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2Fycm93LWJ0bicgdGFyZ2V0PVwiZG93blwiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSx2YWx1ZS0xKX0gPi08L3NwYW4+PGlucHV0IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPXtpbnBDbHMgKyAnIGNvbHNpemUtMTAnfSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZShlLCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt2YWx1ZX0gLz48c3BhbiBjbGFzc05hbWU9J2Fycm93LWJ0bicgdGFyZ2V0PVwidXBcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUsdmFsdWUrMSl9Pis8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlcklucHV0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHBhbmQgZnJvbSAnLi4vLi4vLi4vLi4vaWNvbi9pY29uLXVpL0V4cGFuZCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGNscywgbGlzdCwgYWN0aXZlLCBpY29uQ2xzLCBjaGlsZHJlbiwgYWN0aW9uLCBzb3J0UHJvcCA9IFwiaWRcIiB9KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsYXN0RXZlbnQsIHNldExhc3RFdmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAvLyBtaXNlIGVuIHBsYWNlIGRlIGwnw6lsw6ltZW50IGFjdGlmIHBhciBkw6lmYXV0IChwcm9wIGFjdGl2ZSBvYmxpZ2F0b2lyZSlcclxuICBpZiAoIWxpc3QpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IGxhbmRpbmcgPSBsaXN0LmZpbmQoaSA9PiBpW3NvcnRQcm9wXSA9PT0gYWN0aXZlKSB8fCBsaXN0LmZpbmQoaSA9PiBpLmlkID09PSBhY3RpdmUpXHJcbiAgY29uc3QgYXZhaWJsZSA9IGxpc3QuZmlsdGVyKGkgPT4gaS5pZCAhPT0gbGFuZGluZy5pZClcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgJGVsID0gZS50YXJnZXRcclxuICAgIHdoaWxlICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RvcicpID09IGZhbHNlKSB7XHJcbiAgICAgICRlbCA9ICRlbC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICBpZiAoKGUudHlwZSA9PT0gJ2NsaWNrJyAmJiBsYXN0RXZlbnQgPT09ICdjbGljaycpIHx8IGUudHlwZSAhPT0gJ2NsaWNrJykge1xyXG4gICAgICBzZXRUb2dnbGUoIXRvZ2dsZSlcclxuICAgICAgbGFzdEV2ZW50ID09PSAnY2xpY2snICYmIHRvZ2dsZSA9PT0gdHJ1ZSA/ICRlbC5ibHVyKCkgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgc2V0TGFzdEV2ZW50KGUudHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlLHYpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRvZ2dsZVNlbGVjdChlKTtcclxuICAgIGFjdGlvbih2KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsoY2xzID8gJ3NlbGVjdG9yICcgKyBjbHMgOiAnc2VsZWN0b3InKSArICh0b2dnbGUgPyAnIG9wZW5lZCcgOiAnJyl9IG9uRm9jdXM9e3RvZ2dsZVNlbGVjdH0gb25CbHVyPXt0b2dnbGVTZWxlY3R9IHRhYkluZGV4PXstMX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0IGFjdGl2ZScgdmFsdWU9e2xhbmRpbmcuaWR9IG9uQ2xpY2s9e3RvZ2dsZSA/IHRvZ2dsZVNlbGVjdCA6IG51bGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKGxhbmRpbmcudGl0bGUpfTwvZGl2PjxFeHBhbmQgY2xzPXtpY29uQ2xzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgdG9nZ2xlID8gPGRpdiBjbGFzc05hbWU9J29wdC13cmFwcGVyJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXZhaWJsZS5tYXAoKHtpZCx0aXRsZX0saykgPT4gXHJcbiAgICAgICAgICAgICAgLy8gbCdpZCBkZSBsJ8OpbMOpbWVudCBjaG9pc2kgZXN0IGRpcmVjdGVtZW50IGVudm95w6kgZGFucyBcImFjdGlvblwiIChmdW5jdGlvbiDDoCBwYXNzZXIgZW4gcHJvcClcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdvcHQnIHZhbHVlPXtpZH0gb25DbGljaz17KGUpID0+IGNoYW5nZVZhbHVlKGUsaWQpfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZSh0aXRsZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3IiLCIvLyB1aSBib29sZWFuIHJlcHJlc2VudGF0aW9uXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTd2l0Y2hJbnB1dCA9ICh7IGNscyA9IFwiXCIsIHZhbHVlLCBjaGFuZ2UgfSkgPT4ge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2lucHV0LXN3aXRjaCcgKyAodmFsdWUgPyAnIHRydWUnOiAnIGZhbHNlJykgKyAoIGNscyA/IGAgJHtjbHN9YCA6IFwiXCIpfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LXN3aXRjaC1idXR0b24nPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hJbnB1dCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0TGFiZWxJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsIFxyXG4gICAgICAgID8gPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgICA6IG51bGxcclxuICAgICAgfVxyXG4gICAgICA8aW5wdXQgdHlwZT17dHlwZX0gaWQ9e2lkfSBjbGFzc05hbWU9e2lucHV0Q2xzfSBuYW1lPXtpZH0gdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBcIlwifSBvbkZvY3VzPXtoYW5kbGVGb2N1c30gb25CbHVyPXtoYW5kbGVGb2N1c30gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dExhYmVsSW5wdXQiLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vQ2hlY2tib3hcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4vRGF0ZVBpY2tlclwiO1xyXG5pbXBvcnQgSW1hZ2VGaWxlSW5wdXQgZnJvbSBcIi4vSW1hZ2VGaWxlSW5wdXRcIjtcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gXCIuL051bWJlcklucHV0XCI7XHJcbmltcG9ydCBTZWxlY3RvciBmcm9tIFwiLi9TZWxlY3RvclwiO1xyXG5pbXBvcnQgU3dpdGNoSW5wdXQgZnJvbSBcIi4vU3dpdGNoSW5wdXRcIjtcclxuaW1wb3J0IFR4dExhYmVsSW5wdXQgZnJvbSBcIi4vVHh0TGFiZWxJbnB1dFwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2hlY2tib3gsXHJcbiAgRGF0ZVBpY2tlcixcclxuICBJbWFnZUZpbGVJbnB1dCxcclxuICBOdW1iZXJJbnB1dCxcclxuICBTZWxlY3RvcixcclxuICBTd2l0Y2hJbnB1dCxcclxuICBUeHRMYWJlbElucHV0LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSBcIi4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZVwiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBTZWxlY3RvciwgU3dpdGNoSW5wdXQgfSBmcm9tIFwiLi9JbnB1dHNcIjtcclxuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwiLi9cIjtcclxuXHJcbmNvbnN0IE1vZGFsRWRpdG9yID0gKHsgZGF0YSwgc2NoZW1hLCB0aXRsZSwgY2xvc2UsIGNvbW1hbmQsIHNtYWxsIH0pID0+IHtcclxuICBjb25zdCBbbURhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHt9O1xyXG4gICAgT2JqZWN0LmVudHJpZXMoc2NoZW1hKS5tYXAoKFtuYW1lLCBwYXJdKSA9PiB7XHJcbiAgICAgIGxldCB2YWw7XHJcbiAgICAgIHN3aXRjaCAocGFyLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIHZhbCA9IFwiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgICAgICB2YWwgPSBwYXIubGlzdFswXS5pZDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzb3J0aW5nXCI6XHJcbiAgICAgICAgICBjb25zdCBsYXN0ID0gcGFyLmxpc3QubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgdmFsID0gcGFyLmxpc3RbbGFzdF0uaWQgO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJvb2xcIjpcclxuICAgICAgICAgIHZhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgIHZhbCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICB2YWwuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsID0gXCJcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGVtcHR5W25hbWVdID0gdmFsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgIWRhdGEgPyBzZXREYXRhKHsgLi4uZW1wdHkgfSkgOiBzZXREYXRhKHsgLi4uZGF0YSB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAhbURhdGEgPyBudWxsIDogKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtcIm1vZGFsLWVkaXRvclwiICsgKHNtYWxsID8gXCIgc21hbGxcIjogXCJcIil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyLXR4dFwiPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhci1jbG9zZVwiIG9uQ2xpY2s9e2Nsb3NlfT5cclxuICAgICAgICAgIDxDbG9zZSBjbHM9XCJ3LTYgaC02XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtd2luZG93XCI+XHJcbiAgICAgICAge21EYXRhXHJcbiAgICAgICAgICA/IE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChba2V5LCB2YWx1ZV0sIGkpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgSW5wdXQ7XHJcbiAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsIHAtMiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtdHh0IHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21EYXRhW2tleV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoeyAuLi5tRGF0YSwgW2tleV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xcIjpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWwgcC0yIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUubmFtZX0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bURhdGFba2V5XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXsoKSA9PiBzZXREYXRhKHsgLi4ubURhdGEsIFtrZXldOiAhbURhdGFba2V5XSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNvcnRpbmdcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVLZXkgPSBrZXkucmVwbGFjZSgvcyQvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsIHAtMiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzPXtcInNlY29uZGFyeSBwLTBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscz17XCJpY29uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3ZhbHVlLmxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17bURhdGFbcmVLZXldfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3YgPT4gc2V0RGF0YSh7IC4uLm1EYXRhLCBbcmVLZXldOiB2IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcD17cmVLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBtRGF0YVtrZXldIHx8IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsIHAtMiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9IDp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17diA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSh7IC4uLm1EYXRhLCBba2V5XTogdiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1vZGFsLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtJbnB1dH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7T2JqZWN0LmVudHJpZXMoc2NoZW1hKS5tYXAoKFtrLCB2XSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2LnR5cGUgPT09IFwidGV4dFwiID8gKFxyXG4gICAgICAgICAgPFJpY2hUZXh0XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgZGF0YT17bURhdGFba119XHJcbiAgICAgICAgICAgIHVwZGF0ZT17diA9PiBzZXREYXRhKHsgLi4ubURhdGEsIFtrXTogdiB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH0pfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWVuZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIHNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHtjb21tYW5kKHsuLi5tRGF0YX0pOyBjbG9zZSgpfX0+U2F1dmVyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEVkaXRvcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IE5hdkxpID0gKHsgY2hpbGRyZW4sIHRvLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8TmF2TGluayBjbGFzc05hbWU9J25hdi1saW5rJyB0bz17dG99IG9uQ2xpY2s9e29uQ2xpY2t9IGVuZD57IGNoaWxkcmVuIH08L05hdkxpbms+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWdlc0NvbnRhaW5lciA9ICh7Y2hpbGRyZW4gLCB0aXRsZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIG1iLTgnPnt0aXRsZX08L2Rpdj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udGFpbmVyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyAkZ2V0U2VsZWN0aW9uLCAkaXNSYW5nZVNlbGVjdGlvbiwgRk9STUFUX0VMRU1FTlRfQ09NTUFORCB9IGZyb20gXCJsZXhpY2FsXCJcclxuaW1wb3J0IHsgJGdldFNlbGVjdGlvblN0eWxlVmFsdWVGb3JQcm9wZXJ0eSB9IGZyb20gXCJAbGV4aWNhbC9zZWxlY3Rpb25cIlxyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHRcIlxyXG5pbXBvcnQgQnRuRm9ybWF0VGV4dCBmcm9tIFwiLi9pdGVtcy9CdG5Gb3JtYXRUZXh0XCJcclxuaW1wb3J0IHsgVHh0Q2VudGVyLCBUeHRKdXN0aWZ5LCBUeHRMZWZ0LCBUeHRSaWdodCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yXCJcclxuXHJcbmNvbnN0IEFsaWduVGV4dCA9ICgpID0+IHtcclxuICBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBsZWZ0OiBmYWxzZSxcclxuICAgIGNlbnRlcjogZmFsc2UsXHJcbiAgICByaWdodDogZmFsc2UsXHJcbiAgICBqdXN0aWZ5OiBmYWxzZSxcclxuICB9XHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KClcclxuICBjb25zdCBbYnRuU3RhdGVzLCBzZXRCdG5TdGF0ZXNdID0gdXNlU3RhdGUoey4uLmRlZmF1bHRTdGF0ZX0pXHJcblxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgbGVmdDogVHh0TGVmdCxcclxuICAgIGNlbnRlcjogVHh0Q2VudGVyLFxyXG4gICAgcmlnaHQ6IFR4dFJpZ2h0LFxyXG4gICAganVzdGlmeTogVHh0SnVzdGlmeSxcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUJ0blN0YXRlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9ICRnZXRTZWxlY3Rpb24oKVxyXG4gICAgaWYgKCRpc1JhbmdlU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcclxuICAgICAgbGV0IG5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yLmdldE5vZGUoKS5nZXRUb3BMZXZlbEVsZW1lbnQoKVxyXG4gICAgICBzd2l0Y2ggKG5vZGUuZ2V0VHlwZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcInBhcmFncmFwaFwiOlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIG5vZGUgPSBzZWxlY3Rpb24uYW5jaG9yLmdldE5vZGUoKVxyXG4gICAgICB9XHJcbiAgICAgIG5vZGUgPSBub2RlLmdldFR5cGUoKSA9PT0gXCJ0ZXh0XCIgPyBub2RlLmdldFBhcmVudCgpIDogbm9kZVxyXG4gICAgICBsZXQgdmFsdWUgPSBub2RlLmdldEZvcm1hdFR5cGUoKSAhPT0gXCJcIiA/IG5vZGUuZ2V0Rm9ybWF0VHlwZSgpIDogJ2xlZnQnXHJcbiAgICAgIHNldEJ0blN0YXRlcyh7Li4uZGVmYXVsdFN0YXRlLCBbdmFsdWVdIDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuIGVkaXRvci5yZWdpc3RlclVwZGF0ZUxpc3RlbmVyKCh7IGVkaXRvclN0YXRlLCB0YWdzIH0pID0+IHtcclxuICAgICAgZWRpdG9yU3RhdGUucmVhZCgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQnRuU3RhdGVzKClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSwgW2VkaXRvcl0pXHJcblxyXG4gIGNvbnN0IGl0ZW1zRGlzcGF0Y2ggPSAoKSA9PiB7XHJcbiAgICBsZXQgaXRlbXMgPSBbXVxyXG4gICAgbGV0IGkgPSAwXHJcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYnRuU3RhdGVzKSkge1xyXG4gICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgIDxCdG5Gb3JtYXRUZXh0XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBhY3RpdmU9e3ZhbHVlfVxyXG4gICAgICAgICAgY29tbWFuZD17KCkgPT4ge1xyXG4gICAgICAgICAgICBlZGl0b3IuZm9jdXMoKVxyXG4gICAgICAgICAgICBlZGl0b3IuZGlzcGF0Y2hDb21tYW5kKEZPUk1BVF9FTEVNRU5UX0NPTU1BTkQsIGtleSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBuYW1lPXtrZXl9XHJcbiAgICAgICAgICBpdGVtPXtpY29uc1trZXldfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgICAgaSsrXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbXNcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1pdGVtLWdyb3VwXCI+e2l0ZW1zRGlzcGF0Y2goKS5tYXAoKGkpID0+IGkpfTwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBbGlnblRleHRcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgJGdldFNlbGVjdGlvbiwgJGlzUmFuZ2VTZWxlY3Rpb24sIEZPUk1BVF9URVhUX0NPTU1BTkQgfSBmcm9tIFwibGV4aWNhbFwiO1xyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHRcIjtcclxuaW1wb3J0IEJ0bkZvcm1hdFRleHQgZnJvbSBcIi4vaXRlbXMvQnRuRm9ybWF0VGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gIEJvbGQsXHJcbiAgSXRhbGljLFxyXG4gIFN0cmlrZSxcclxuICBTdXBlclNjcmlwdCxcclxuICBVbmRlcmxpbmUsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2ljb24vdGV4dC1lZGl0b3IvXCI7XHJcblxyXG5jb25zdCBGb3JtYXRUZXh0R3JvdXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW2J0blN0YXRlcywgc2V0QnRuU3RhdGVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGJvbGQ6IGZhbHNlLFxyXG4gICAgaXRhbGljOiBmYWxzZSxcclxuICAgIHN1cGVyc2NyaXB0OiBmYWxzZSxcclxuICAgIHVuZGVybGluZTogZmFsc2UsXHJcbiAgICBzdHJpa2V0aHJvdWdoOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICBib2xkOiBCb2xkLFxyXG4gICAgaXRhbGljOiBJdGFsaWMsXHJcbiAgICBzdXBlcnNjcmlwdDogU3VwZXJTY3JpcHQsXHJcbiAgICB1bmRlcmxpbmU6IFVuZGVybGluZSxcclxuICAgIHN0cmlrZXRocm91Z2g6IFN0cmlrZSxcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGRhdGVCdG5TdGF0ZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJldlN0YXRlID0geyAuLi5idG5TdGF0ZXMgfTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9ICRnZXRTZWxlY3Rpb24oKTtcclxuICAgIGxldCBub2RlID0gc2VsZWN0aW9uO1xyXG4gICAgaWYgKCRpc1JhbmdlU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcclxuICAgICAgbm9kZSA9IHNlbGVjdGlvbi5nZXROb2RlcygpWzBdO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vZGUgJiYgdHlwZW9mIG5vZGUuaGFzRm9ybWF0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcmV2U3RhdGUpKSB7XHJcbiAgICAgICAgcHJldlN0YXRlW2tleV0gPSBub2RlLmhhc0Zvcm1hdChrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRCdG5TdGF0ZXMoeyAuLi5wcmV2U3RhdGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJldHVybiBlZGl0b3IucmVnaXN0ZXJVcGRhdGVMaXN0ZW5lcigoeyBlZGl0b3JTdGF0ZSwgdGFncyB9KSA9PiB7XHJcbiAgICAgIGVkaXRvclN0YXRlLnJlYWQoKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJ0blN0YXRlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtlZGl0b3JdKTtcclxuXHJcbiAgY29uc3QgaXRlbXNEaXNwYXRjaCA9ICgpID0+IHtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGJ0blN0YXRlcykpIHtcclxuICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICA8QnRuRm9ybWF0VGV4dFxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgYWN0aXZlPXt2YWx1ZX1cclxuICAgICAgICAgIGNvbW1hbmQ9eygpID0+IHtcclxuICAgICAgICAgICAgZWRpdG9yLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGVkaXRvci5kaXNwYXRjaENvbW1hbmQoRk9STUFUX1RFWFRfQ09NTUFORCwga2V5KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBuYW1lPXtrZXl9XHJcbiAgICAgICAgICBpdGVtPXtpY29uc1trZXldfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtcztcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItaXRlbS1ncm91cFwiPntpdGVtc0Rpc3BhdGNoKCkubWFwKChpKSA9PiBpKX08L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXRUZXh0R3JvdXA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0J1xyXG5pbXBvcnQgQnRuRm9ybWF0VGV4dCBmcm9tICcuL2l0ZW1zL0J0bkZvcm1hdFRleHQnXHJcbmltcG9ydCB7IElOU0VSVF9JTUFHRV9DT01NQU5EIH0gZnJvbSAnLi4vcGx1Z2lucy9JbWFnZVBsdWdpbidcclxuaW1wb3J0IEltZ01vZGFsIGZyb20gJy4vaXRlbXMvaW1nTW9kYWwnXHJcbmltcG9ydCB7ICRnZXROb2RlQnlLZXkgfSBmcm9tICdsZXhpY2FsJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0SW1nS2V5IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvcmVkdWNlcnMvbGV4aWNhbFNsaWNlJ1xyXG5pbXBvcnQgeyBJbWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yJ1xyXG5cclxuY29uc3QgSW5zZXJ0SW1nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KClcclxuICBjb25zdCBbaW1nUHJvcCwgc2V0SW1nUHJvcF0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBpbWcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxleGljYWwuaW1nS2V5KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW1nICE9PSBudWxsID8gb3Blbk1vZGFsKGltZykgOiBudWxsXHJcbiAgfSwgW2ltZ10pXHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChrZXkpID0+IHtcclxuICAgIGlmIChrZXkpIHtcclxuICAgICAgXHJcbiAgICAgIGVkaXRvci5nZXRFZGl0b3JTdGF0ZSgpLnJlYWQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsID0gJGdldE5vZGVCeUtleShrZXkpXHJcbiAgICAgICAgc2V0SW1nUHJvcCh7XHJcbiAgICAgICAgICBzcmM6IGVsLl9fc3JjLFxyXG4gICAgICAgICAgaXNGaWxlOiBlbC5fX2lzRmlsZSxcclxuICAgICAgICAgIGF0RW5kOiBlbC5fX2F0RW5kLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJbWdQcm9wKHtcclxuICAgICAgICBzcmM6IFwiXCIsXHJcbiAgICAgICAgaXNGaWxlOiBmYWxzZSxcclxuICAgICAgICBhdEVuZDogZmFsc2UsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRNb2RhbCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZWRpdEltZyA9ICh7bmFtZSx2YWx1ZX0pID0+IHtcclxuICAgIFxyXG4gICAgaWYgKGltZykge1xyXG4gICAgICBlZGl0b3IudXBkYXRlKCgpID0+IHtcclxuICAgICAgICBjb25zdCBlbCA9ICRnZXROb2RlQnlLZXkoaW1nKVxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBlbC5nZXRXcml0YWJsZSgpXHJcbiAgICAgICAga2V5c1tgX18ke25hbWV9YF0gPSB2YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRJbWdQcm9wKHtcclxuICAgICAgLi4uaW1nUHJvcCxcclxuICAgICAgW25hbWVdIDogdmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICBkaXNwYXRjaChzZXRJbWdLZXkobnVsbCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuSW5zZXJ0SW1nID0gKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKG51bGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjcmVhdGVJbWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHNyYywgYXRFbmQsIGlzRmlsZSB9ID0gaW1nUHJvcFxyXG4gICAgZWRpdG9yLmRpc3BhdGNoQ29tbWFuZChJTlNFUlRfSU1BR0VfQ09NTUFORCwge1xyXG4gICAgICBzcmM6IHNyYyxcclxuICAgICAgYWx0OiBudWxsLFxyXG4gICAgICBpc0ZpbGU6IGlzRmlsZSxcclxuICAgICAgYXRFbmQ6IGF0RW5kXHJcbiAgICB9KVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItaXRlbS1ncm91cFwiPlxyXG4gICAgICA8QnRuRm9ybWF0VGV4dCBjb21tYW5kPXtvcGVuSW5zZXJ0SW1nfSBpdGVtPXtJbWd9IC8+XHJcbiAgICAgIHtcclxuICAgICAgICBtb2RhbCA/IDxJbWdNb2RhbCBjbG9zZT17Y2xvc2VNb2RhbH0gdXBkYXRlPXtlZGl0SW1nfSBjcmVhdGU9e2ltZyA/IGZhbHNlIDogdHJ1ZX0gY29tbWFuZD17Y3JlYXRlSW1nfSBwcm9wcz17aW1nUHJvcH0vPiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRJbWciLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyAkZ2V0TmVhcmVzdE5vZGVPZlR5cGUgfSBmcm9tIFwiQGxleGljYWwvdXRpbHNcIjtcclxuaW1wb3J0IHsgJGdldFNlbGVjdGlvbiwgJGlzUmFuZ2VTZWxlY3Rpb24gfSBmcm9tIFwibGV4aWNhbFwiO1xyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHRcIjtcclxuaW1wb3J0IHtcclxuICAkaXNMaXN0SXRlbU5vZGUsXHJcbiAgJGlzTGlzdE5vZGUsXHJcbiAgTGlzdE5vZGUsXHJcbiAgSU5TRVJUX09SREVSRURfTElTVF9DT01NQU5ELFxyXG4gIElOU0VSVF9VTk9SREVSRURfTElTVF9DT01NQU5ELFxyXG59IGZyb20gXCJAbGV4aWNhbC9saXN0XCI7XHJcbmltcG9ydCBCdG5Gb3JtYXRUZXh0IGZyb20gXCIuL2l0ZW1zL0J0bkZvcm1hdFRleHRcIjtcclxuaW1wb3J0IHsgQnVsbGV0ZWRMaXN0LCBOdW1iZXJlZExpc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaWNvbi90ZXh0LWVkaXRvclwiO1xyXG5cclxuY29uc3QgTGlzdFR5cGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW2J0blN0YXRlcywgc2V0QnRuU3RhdGVzXSA9IHVzZVN0YXRlKHtcclxuICAgIHVsOiBmYWxzZSxcclxuICAgIG9sOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQnRuU3RhdGVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByZXZTdGF0ZSA9IHsgLi4uYnRuU3RhdGVzIH07XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBpZiAoJGlzUmFuZ2VTZWxlY3Rpb24oc2VsZWN0aW9uKSkge1xyXG4gICAgICBjb25zdCBhbmNob3JOb2RlID0gc2VsZWN0aW9uLmFuY2hvci5nZXROb2RlKCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhbmNob3JOb2RlLmdldEtleSgpID09PSBcInJvb3RcIlxyXG4gICAgICAgICAgPyBhbmNob3JOb2RlXHJcbiAgICAgICAgICA6IGFuY2hvck5vZGUuZ2V0VG9wTGV2ZWxFbGVtZW50T3JUaHJvdygpO1xyXG4gICAgICBjb25zdCBlbGVtZW50S2V5ID0gZWxlbWVudC5nZXRLZXkoKTtcclxuICAgICAgY29uc3QgZWxlbWVudERPTSA9IGVkaXRvci5nZXRFbGVtZW50QnlLZXkoZWxlbWVudEtleSk7XHJcbiAgICAgIGlmIChlbGVtZW50RE9NICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdCA9ICRnZXROZWFyZXN0Tm9kZU9mVHlwZShhbmNob3JOb2RlLCBMaXN0Tm9kZSlcclxuICAgICAgICBjb25zdCB0eXBlID0gcGFyZW50TGlzdCA/IHBhcmVudExpc3QuZ2V0VGFnKCkgOiBlbGVtZW50LmdldFR5cGUoKTtcclxuICAgICAgICBmb3IgKGxldCBsaXN0IGluIHByZXZTdGF0ZSkge1xyXG4gICAgICAgICAgcHJldlN0YXRlW2xpc3RdID0gbGlzdCA9PSB0eXBlID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEJ0blN0YXRlcyhwcmV2U3RhdGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gKCkgPT4ge1xyXG4gICAgZWRpdG9yLmZvY3VzKCk7XHJcbiAgICBlZGl0b3IuZGlzcGF0Y2hDb21tYW5kKElOU0VSVF9VTk9SREVSRURfTElTVF9DT01NQU5EKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcmRlcmVkTGlzdCA9ICgpID0+IHtcclxuICAgIGVkaXRvci5mb2N1cygpO1xyXG4gICAgZWRpdG9yLmRpc3BhdGNoQ29tbWFuZChJTlNFUlRfT1JERVJFRF9MSVNUX0NPTU1BTkQpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gZWRpdG9yLnJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIoKHsgZWRpdG9yU3RhdGUgfSkgPT4ge1xyXG4gICAgICBlZGl0b3JTdGF0ZS5yZWFkKCgpID0+IHtcclxuICAgICAgICB1cGRhdGVCdG5TdGF0ZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbZWRpdG9yXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItaXRlbS1ncm91cFwiPlxyXG4gICAgICA8QnRuRm9ybWF0VGV4dCBhY3RpdmU9e2J0blN0YXRlcy51bH0gY29tbWFuZD17dW5vcmRlcmVkTGlzdH0gbmFtZT1cInVub3JkZXJlZC1saXN0XCIgaXRlbT17QnVsbGV0ZWRMaXN0fS8+XHJcbiAgICAgIDxCdG5Gb3JtYXRUZXh0IGFjdGl2ZT17YnRuU3RhdGVzLm9sfSBjb21tYW5kPXtvcmRlcmVkTGlzdH0gbmFtZT1cIm9yZGVyZWQtbGlzdFwiIGl0ZW09e051bWJlcmVkTGlzdH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGlzdFR5cGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICRnZXRTZWxlY3Rpb24sICRpc1JhbmdlU2VsZWN0aW9uIH0gZnJvbSBcImxleGljYWxcIjtcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7ICRwYXRjaFN0eWxlVGV4dCwgJGdldFNlbGVjdGlvblN0eWxlVmFsdWVGb3JQcm9wZXJ0eSB9IGZyb20gXCJAbGV4aWNhbC9zZWxlY3Rpb25cIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL2l0ZW1zL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCB7IEZvcm1hdFNpemUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaWNvbi90ZXh0LWVkaXRvclwiO1xyXG5cclxuY29uc3QgU2l6ZVRleHRHcm91cCA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtYXQgPSBbXHJcbiAgICB7bmFtZTogMTIsIHZhbHVlOiBcIjAuNzVyZW1cIn0sXHJcbiAgICB7bmFtZTogMTQsIHZhbHVlOiBcIjAuODc1cmVtXCJ9LFxyXG4gICAge25hbWU6IDE2LCB2YWx1ZTogbnVsbH0sXHJcbiAgICB7bmFtZTogMTgsIHZhbHVlOiBcIjEuMTI1cmVtXCJ9LFxyXG4gICAge25hbWU6IDIwLCB2YWx1ZTogXCIxLjI1cmVtXCJ9LFxyXG4gICAge25hbWU6IDI0LCB2YWx1ZTogXCIxLjVyZW1cIn0sXHJcbiAgICB7bmFtZTogMzAsIHZhbHVlOiBcIjEuODc1cmVtXCJ9LFxyXG4gICAge25hbWU6IDM2LCB2YWx1ZTogXCIyLjI1cmVtXCJ9LFxyXG4gIF07XHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KCk7XHJcbiAgY29uc3QgW2Ryb3BEb3duU3RhdGUsIHNldEREU3RhdGVzXSA9IHVzZVN0YXRlKDE2KTtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V2ZW50TG9nLCBzZXRFdmVudExvZ10gPSB1c2VTdGF0ZSgnYmx1cicpO1xyXG5cclxuICBjb25zdCB1cGRhdGVCdG5TdGF0ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBsZXQgcHJvcCA9ICRnZXRTZWxlY3Rpb25TdHlsZVZhbHVlRm9yUHJvcGVydHkoc2VsZWN0aW9uLCAnZm9udC1zaXplJylcclxuICAgIGxldCB2YWwgPSBmb3JtYXQuZmluZChmID0+IGYudmFsdWUgPT09IHByb3ApIHx8IGZvcm1hdFsyXVxyXG4gICAgc2V0RERTdGF0ZXModmFsLm5hbWUpO1xyXG4gICAgdmFsLm5hbWUgIT0gJzE2JyA/IHNldEFjdGl2ZSh0cnVlKSA6IHNldEFjdGl2ZShmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoJGV2ZW50LCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgIGVkaXRvci51cGRhdGUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKClcclxuICAgICAgaWYgKCRpc1JhbmdlU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcclxuICAgICAgICAkcGF0Y2hTdHlsZVRleHQoc2VsZWN0aW9uLCB7XHJcbiAgICAgICAgICAnZm9udC1zaXplJyA6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVN0YXRlID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHN3aXRjaCAoZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2JsdXInOlxyXG4gICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnZm9jdXMnOlxyXG4gICAgICAgIHNldFRvZ2dsZSh0cnVlKTtcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgZXZlbnRMb2cgPT0gJ2NsaWNrJyA/IGVkaXRvci5mb2N1cygpIDogbnVsbFxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICBzZXRFdmVudExvZyhlLnR5cGUpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuIGVkaXRvci5yZWdpc3RlclVwZGF0ZUxpc3RlbmVyKCh7IGVkaXRvclN0YXRlIH0pID0+IHtcclxuICAgICAgZWRpdG9yU3RhdGUucmVhZCgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQnRuU3RhdGVzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW2VkaXRvcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyd0b29sYmFyLWl0ZW0tc2VsZWN0JyArIChhY3RpdmUgPyAnIGFjdGl2ZScgOiAnJyl9XHJcbiAgICAgIHRpdGxlPVwiZm9udC1zaXplXCJcclxuICAgICAgb25Gb2N1cz17dG9nZ2xlU3RhdGV9XHJcbiAgICAgIG9uQmx1cj17dG9nZ2xlU3RhdGV9XHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZVN0YXRlfVxyXG4gICAgICB0YWJJbmRleD17LTF9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxlY3QtdGl0bGVcIj57ZHJvcERvd25TdGF0ZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgPEZvcm1hdFNpemUgY2xzPSdpY29uJy8+XHJcbiAgICAgIHsgdG9nZ2xlICYmIDxEcm9wZG93biBpdGVtPXtmb3JtYXR9IHNlbGVjdD17aGFuZGxlU2VsZWN0fS8+IH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpemVUZXh0R3JvdXA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBCdG5Gb3JtYXRUZXh0ID0gKHtjb21tYW5kLCBhY3RpdmUsIGl0ZW0sIG5hbWV9KSA9PiB7XHJcbiAgbGV0IEl0ZW0gPSBpdGVtXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdGl0bGU9e25hbWV9XHJcbiAgICAgIG9uQ2xpY2s9e2NvbW1hbmR9XHJcbiAgICAgIGNsYXNzTmFtZT17J3Rvb2xiYXItaXRlbScgKyAoYWN0aXZlID8gJyBhY3RpdmUnIDogJycpfVxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyBJdGVtICYmIDxJdGVtIGNscz0naWNvbicgLz4gfVxyXG4gICAgPC9idXR0b24+KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ0bkZvcm1hdFRleHQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEcm9wZG93biA9ICh7aXRlbSAsIHNlbGVjdH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdC1kcm9wZG93bic+XHJcbiAgICAgIHtcclxuICAgICAgICBpdGVtLm1hcCgoe3ZhbHVlLG5hbWV9LGkpID0+IFxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAga2V5PXtEYXRlLm5vdygpK2l9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZHJvcGRvd24tb3B0JyBcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcclxuICAgICAgICAgICAgb25DbGljaz17KCRldmVudCkgPT4gc2VsZWN0KCRldmVudCwgdmFsdWUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93biIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW1hZ2VGaWxlSW5wdXQsIFR4dExhYmVsSW5wdXQsIFN3aXRjaElucHV0IH0gZnJvbSAnLi4vLi4vLi4vSW5wdXRzL2luZGV4J1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZVwiXHJcblxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZSdcclxuaW1wb3J0IHsgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcblxyXG5cclxuY29uc3QgSW1nTW9kYWwgPSAoe2Nsb3NlLCB1cGRhdGUsIHByb3BzLCBjcmVhdGUsIGNvbW1hbmR9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgY2ZnID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IHhtbCA9IGF4aW9zLmNyZWF0ZSh7Li4uY2ZnLCBoZWFkZXJzOiB7Li4uY2ZnLmhlYWRlcnMsICdDb250ZW50LVR5cGUnIDogJ211bHRpcGFydC9mb3JtLWRhdGEnfX0pXHJcbiAgY29uc3QgeyBhdEVuZCwgc3JjLCBpc0ZpbGUgfSA9IHByb3BzXHJcbiAgY29uc3QgW2Jyb3dzZXIsIHNldEJyb3dzZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBmaWxlU3lzID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKVxyXG4gICAgICB4bWwucG9zdCgnL2ZpbGV1cGxvYWQnLCBmb3JtKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIG1zZzogXCJpbWFnZSBpbXBvcnTDqWUgIVwiXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YVxyXG4gICAgICAgICAgdXBkYXRlKHsgXHJcbiAgICAgICAgICAgIG5hbWU6ICdzcmMnLFxyXG4gICAgICAgICAgICB2YWx1ZTogYCR7ZGF0YS5wYXRofS8ke2RhdGEubmFtZX1gXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGltZ0Jyb3dzZSA9ICgpID0+IHtcclxuICAgIHNldEJyb3dzZXIodHJ1ZSk7XHJcbiAgICB4bWwuZ2V0KCcvaW1nYnJvd3NlcicpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgc2V0RmlsZXMoe1xyXG4gICAgICAgICAgbGlzdDogWy4uLmRhdGEuZmlsZXNdLFxyXG4gICAgICAgICAgcGF0aDogZGF0YS5wYXRoXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldEltZyA9IChzcmMpID0+IHtcclxuICAgIHVwZGF0ZSh7XHJcbiAgICAgIG5hbWU6ICdzcmMnLCBcclxuICAgICAgdmFsdWU6IGAke2ZpbGVzLnBhdGh9LyR7c3JjfWBcclxuICAgIH0pXHJcbiAgICBzZXRCcm93c2VyKGZhbHNlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Rvb2xiYXItbW9kYWwnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtdGl0bGViYXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS10ZXh0JyA+SW1hZ2UgOjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGRhbmdlclwiIG9uQ2xpY2s9e2Nsb3NlfT48Q2xvc2UgY2xzPVwiaWNvblwiIC8+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtY29udGVudCc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJvd3NlciAmJiBpc0ZpbGVcclxuICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J21vZGFsLWltZy1icm93c2VyJz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGZpbGVzIFxyXG4gICAgICAgICAgICAgICAgPyBmaWxlcy5saXN0Lm1hcCgoZmlsZSwgaSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtEYXRlLm5vdygpfS0ke2l9YH0gY2xhc3NOYW1lPSdpbWctaXRlbScgb25DbGljaz17KCkgPT4gc2V0SW1nKGZpbGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7ZmlsZXMucGF0aH0vJHtmaWxlfWB9IGNsYXNzTmFtZT0ndy1mdWxsIG0tYXV0bycgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOiA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwLTIgdW5kZXJsaW5lJyA+VHlwZSBkJ2ltYWdlIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gcHktMSBweC0yJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnZm9udC1ib2xkJyArICghaXNGaWxlID8gJyBjb2xvci1zZWNvbmRhcnknIDogXCJcIil9PkVuIGxpZ25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8U3dpdGNoSW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbHM9J3NlY29uZGFyeSBuZXV0cmFsJyBcclxuICAgICAgICAgICAgICAgIGNoYW5nZT17KCkgPT4gdXBkYXRlKFxyXG4gICAgICAgICAgICAgICAgICB7bmFtZTonaXNGaWxlJywgdmFsdWU6ICFpc0ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aXNGaWxlfSAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydmb250LWJvbGQnICsgKGlzRmlsZSA/ICcgY29sb3Itc2Vjb25kYXJ5JyA6IFwiXCIpfT5Mb2NhbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEgcmVsYXRpdmUnPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3JjICYmIHNyYy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgPyA8bGFiZWwgY2xhc3NOYW1lPSdpbWctbmFtZScgPjxkaXYgY2xhc3NOYW1lPSdiYWRnZSc+SW1hZ2UgOjwvZGl2PjxkaXYgY2xhc3NOYW1lPSdpbWctbmFtZS10eHQnPntlbmRPZlBhdGgoc3JjKS5yZXBsYWNlKC9eXFxbLitcXF0tfF5cXC9cXFsuK1xcXS0vZywnJyl9PC9kaXY+PC9sYWJlbD5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7IGlzRmlsZSBcclxuICAgICAgICAgICAgICA/IDxJbWFnZUZpbGVJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgY2xzPVwiZmxleCBnYXAtMSBwLTFcIlxyXG4gICAgICAgICAgICAgICAgICBhZGRDbHM9J2J0biBzZWNvbmRhcnkgcC0xIHctNyBncm93LTAnXHJcbiAgICAgICAgICAgICAgICAgIGJyb3dzZT1cImJ0biBwLTEgZ3JleSBncm93IGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZW5kRmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZT17ZmlsZVN5c31cclxuICAgICAgICAgICAgICAgICAgaW1nQnJvd3NlPXtpbWdCcm93c2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDogPFR4dExhYmVsSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcImh0dHBzOi8vLi4uLlwifVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkcmVzc2UgOlwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgICAgICAgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknXHJcbiAgICAgICAgICAgICAgICAgIGlucHV0Q2xzPVwiaW5wdXQtdHh0IHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1cmxJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlKHtuYW1lOidzcmMnLHZhbHVlOiBlLnRhcmdldC52YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncC0yIHVuZGVybGluZScgPlBvc2l0aW9uIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gcHktMSBweC0yJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsnZm9udC1ib2xkJyArICghYXRFbmQgPyAnIGNvbG9yLXNlY29uZGFyeScgOiBcIlwiKX0+R2F1Y2hlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8U3dpdGNoSW5wdXQgY2xzPSdzZWNvbmRhcnkgbmV1dHJhbCcgdmFsdWU9e2F0RW5kfSBjaGFuZ2U9eygpID0+IHVwZGF0ZSh7bmFtZTonYXRFbmQnLHZhbHVlOiAhYXRFbmR9KX0vPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9eydmb250LWJvbGQnICsgKGF0RW5kID8gJyBjb2xvci1zZWNvbmRhcnknIDogXCJcIil9PkRyb2l0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgeyBjcmVhdGUgXHJcbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3B5LTEgcHgtMic+PGJ1dHRvbiBjbGFzc05hbWU9J2J0biBzZWNvbmRhcnkgdy1mdWxsIHJvdW5kZWQtbGcgcC0xJyBvbkNsaWNrPXtjb21tYW5kfT5JbnPDqXJlcjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWdNb2RhbCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGVjb3JhdG9yTm9kZSB9IGZyb20gXCJsZXhpY2FsXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL0ltYWdlXCI7XHJcbmltcG9ydCB7IGdldEJvb2xlYW5Gcm9tU3RyaW5nIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHBcIjtcclxuXHJcbmNvbnN0IGNvbnZlcnRJbWdFbGVtZW50ID0gZG9tTm9kZSA9PiB7XHJcbiAgaWYgKGRvbU5vZGUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICBjb25zdCB7IGFsdDogYWx0VGV4dCwgc3JjIH0gPSBkb21Ob2RlO1xyXG4gICAgY29uc3QgYXRFbmQgPSBnZXRCb29sZWFuRnJvbVN0cmluZyhkb21Ob2RlLmdldEF0dHJpYnV0ZShcImF0X2VuZFwiKSlcclxuICAgIGNvbnN0IGlzRmlsZSA9IGdldEJvb2xlYW5Gcm9tU3RyaW5nKGRvbU5vZGUuZ2V0QXR0cmlidXRlKFwic2F2ZWRcIikpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub2RlOiAkY3JlYXRlSW1hZ2VOb2RlKHtcclxuICAgICAgICBhbHRUZXh0LFxyXG4gICAgICAgIHNyYyxcclxuICAgICAgICBhdEVuZDogYXRFbmQsXHJcbiAgICAgICAgaXNGaWxlOiBpc0ZpbGUsXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VOb2RlIGV4dGVuZHMgRGVjb3JhdG9yTm9kZSB7XHJcbiAgX19zcmM7XHJcbiAgX19hbHRUZXh0O1xyXG4gIF9fYXRFbmQ7XHJcbiAgX19pc0ZpbGU7XHJcblxyXG4gIGV4cG9ydERPTSgpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLl9fc3JjKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcImFsdFwiLCB0aGlzLl9fYWx0VGV4dCk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJhdF9lbmRcIiwgdGhpcy5fX2F0RW5kKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZShcInNhdmVkXCIsIHRoaXMuX19pc0ZpbGUpO1xyXG4gICAgcmV0dXJuIHsgZWxlbWVudDogZWwgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbXBvcnRET00oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWc6IG5vZGUgPT4gKHtcclxuICAgICAgICBjb252ZXJzaW9uOiBjb252ZXJ0SW1nRWxlbWVudCxcclxuICAgICAgICBwcmlvcml0eTogMCxcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFR5cGUoKSB7XHJcbiAgICByZXR1cm4gXCJpbWFnZVwiO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsb25lKG5vZGUpIHtcclxuICAgIHJldHVybiBuZXcgSW1hZ2VOb2RlKHtcclxuICAgICAgc3JjOiBub2RlLl9fc3JjLFxyXG4gICAgICBhbHRUZXh0OiBub2RlLl9fYWx0VGV4dCxcclxuICAgICAgYXRFbmQ6IG5vZGUuX19hdEVuZCxcclxuICAgICAga2V5OiBub2RlLl9fa2V5LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgY29uc3QgeyBzcmMsIGFsdFRleHQsIGtleSwgYXRFbmQsIGlzRmlsZSB9ID0gcHJvcHM7XHJcbiAgICBzdXBlcihrZXkpO1xyXG4gICAgdGhpcy5fX2FsdFRleHQgPSBhbHRUZXh0IHx8IG51bGw7XHJcbiAgICB0aGlzLl9fc3JjID0gc3JjO1xyXG4gICAgdGhpcy5fX2F0RW5kID0gYXRFbmQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9faXNGaWxlID0gaXNGaWxlIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gVmlld1xyXG5cclxuICBjcmVhdGVET00oY29uZmlnKSB7XHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoZW1lLmltYWdlO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNwYW4uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX19hdEVuZCkge1xyXG4gICAgICBzcGFuLmNsYXNzTmFtZSArPSBcIiBhdC1lbmRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBzcGFuO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRE9NKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXRTcmMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fX3NyYztcclxuICB9XHJcblxyXG4gIGdldEFsdFRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fX2FsdFRleHQ7XHJcbiAgfVxyXG5cclxuICBnZXRBdEVuZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9fYXRFbmQ7XHJcbiAgfVxyXG5cclxuICBzZXRBdEVuZChzZXQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzLmdldFdyaXRhYmxlKCk7XHJcbiAgICBzZWxmLl9fYXRFbmQgPSBzZXQ7XHJcbiAgfVxyXG5cclxuICBkZWNvcmF0ZSgpIHtcclxuICAgIGNvbnN0IHsgX19zcmMsIF9fYWx0VGV4dCwgX19rZXkgfSA9IHRoaXM7XHJcbiAgICByZXR1cm4gPEltYWdlIHNyYz17X19zcmN9IGFsdD17X19hbHRUZXh0fSBkZWNvcmF0ZUtleT17X19rZXl9IC8+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0ICRjcmVhdGVJbWFnZU5vZGUgPSAoeyBhbHRUZXh0LCBhdEVuZCwgaXNGaWxlLCBzcmMsIGtleSB9KSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBJbWFnZU5vZGUoe1xyXG4gICAgYWx0VGV4dCxcclxuICAgIGF0RW5kLFxyXG4gICAgaXNGaWxlLFxyXG4gICAgc3JjLFxyXG4gICAga2V5LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICRpc0ltYWdlTm9kZShub2RlKSB7XHJcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBJbWFnZU5vZGU7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRJbWdLZXkgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1eC9yZWR1Y2Vycy9sZXhpY2FsU2xpY2UnXHJcblxyXG5jb25zdCBJbWFnZSA9ICh7c3JjLGFsdFRleHQsZGVjb3JhdGVLZXl9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIGFsdD17YWx0VGV4dH1cclxuICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SW1nS2V5KGRlY29yYXRlS2V5KSl9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2UiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IExleGljYWxDb21wb3NlciB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3Nlcic7XHJcbmltcG9ydCB7IFJpY2hUZXh0UGx1Z2luIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbFJpY2hUZXh0UGx1Z2luJztcclxuaW1wb3J0IHsgTGlzdFBsdWdpbiB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxMaXN0UGx1Z2luJ1xyXG5pbXBvcnQgeyBMaXN0Tm9kZSwgTGlzdEl0ZW1Ob2RlIH0gZnJvbSAnQGxleGljYWwvbGlzdCdcclxuaW1wb3J0IHsgQ29udGVudEVkaXRhYmxlIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbnRlbnRFZGl0YWJsZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlQbHVnaW4gfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsSGlzdG9yeVBsdWdpbic7XHJcbmltcG9ydCBMZXhpY2FsRXJyb3JCb3VuZGFyeSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsRXJyb3JCb3VuZGFyeSc7XHJcbmltcG9ydCBGb3JtYXRUZXh0R3JvdXAgZnJvbSAnLi9BY3Rpb25zL0Zvcm1hdFRleHRHcm91cCc7XHJcbmltcG9ydCBTaXplVGV4dEdyb3VwIGZyb20gJy4vQWN0aW9ucy9TaXplVGV4dEdyb3VwJztcclxuaW1wb3J0IExpc3RUeXBlIGZyb20gJy4vQWN0aW9ucy9MaXN0VHlwZSc7XHJcbmltcG9ydCBBbGlnblRleHQgZnJvbSAnLi9BY3Rpb25zL0FsaWduVGV4dCc7XHJcbmltcG9ydCB7IEltYWdlTm9kZSB9IGZyb20gJy4vTm9kZXMvSW1hZ2VOb2RlJ1xyXG5pbXBvcnQgSW5zZXJ0SW1nIGZyb20gJy4vQWN0aW9ucy9JbnNlcnRJbWcnO1xyXG5pbXBvcnQgeyBJbWFnZVBsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9JbWFnZVBsdWdpbic7XHJcbmltcG9ydCB7IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQgfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0JztcclxuaW1wb3J0IHsgJGdlbmVyYXRlTm9kZXNGcm9tRE9NLCAkZ2VuZXJhdGVIdG1sRnJvbU5vZGVzIH0gZnJvbSAnQGxleGljYWwvaHRtbCc7XHJcbmltcG9ydCB7ICRnZXRSb290LCAkaW5zZXJ0Tm9kZXMsICRzZXRTZWxlY3Rpb24gfSBmcm9tICdsZXhpY2FsJztcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIHBhcmFncmFwaDogJ3BhcmFncmFwaCcsXHJcbiAgdGV4dDoge1xyXG4gICAgYm9sZDogJ3RleHQtYm9sZCcsXHJcbiAgICBpdGFsaWM6ICd0ZXh0LWl0YWxpYycsXHJcbiAgICBzdHJpa2V0aHJvdWdoOiAndGV4dC10aHJvdWdoJyxcclxuICAgIHVuZGVybGluZTogJ3RleHQtdW5kZXJsaW5lJyxcclxuICAgIHVuZGVybGluZVN0cmlrZXRocm91Z2g6ICd0ZXh0LXVuZGVybGluZS10aHJvdWdoJyxcclxuICAgIHN1cGVyc2NyaXB0OiAndGV4dC1zdXBlcnNjcmlwdCcsXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBvbDogXCJsaXN0LW9yZGVyZWRcIixcclxuICAgIHVsOiBcImxpc3QtdW5vcmRlcmVkXCIsXHJcbiAgICBsaXN0aXRlbTogXCJsaXN0LWl0ZW1cIlxyXG4gIH0sXHJcbiAgaW1hZ2U6IFwiaW1hZ2VcIlxyXG59XHJcblxyXG5jb25zdCBJbml0aWFsSHRtbFBsdWdpbiA9ICh7ZGF0YSx1cGRhdGV9KSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KClcclxuICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gIGNvbnN0IHVwZGF0ZU1EYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaHRtbCA9ICRnZW5lcmF0ZUh0bWxGcm9tTm9kZXMoZWRpdG9yLCBudWxsKVxyXG4gICAgdXBkYXRlKGh0bWwpXHJcbiAgfVxyXG5cclxuICBlZGl0b3IucmVnaXN0ZXJVcGRhdGVMaXN0ZW5lcigoe2VkaXRvclN0YXRlfSkgPT4gZWRpdG9yU3RhdGUucmVhZCh1cGRhdGVNRGF0YSkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgICFodG1sXHJcbiAgICA/IGVkaXRvci51cGRhdGUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcclxuICAgICAgY29uc3QgZG9tID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhkYXRhLCBcInRleHQvaHRtbFwiKVxyXG5cclxuICAgICAgY29uc3Qgbm9kZXMgPSAkZ2VuZXJhdGVOb2Rlc0Zyb21ET00oZWRpdG9yLCBkb20pXHJcblxyXG4gICAgICAkZ2V0Um9vdCgpLnNlbGVjdCgpXHJcblxyXG4gICAgICAkaW5zZXJ0Tm9kZXMobm9kZXMpXHJcbiAgICAgICRzZXRTZWxlY3Rpb24obnVsbClcclxuICAgICAgc2V0SHRtbCh0cnVlKVxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgICA6IG51bGxcclxuXHJcbiAgfSwgW2VkaXRvcl0pXHJcbn1cclxuLy8gQ2F0Y2ggYW55IGVycm9ycyB0aGF0IG9jY3VyIGR1cmluZyBMZXhpY2FsIHVwZGF0ZXMgYW5kIGxvZyB0aGVtXHJcbi8vIG9yIHRocm93IHRoZW0gYXMgbmVlZGVkLiBJZiB5b3UgZG9uJ3QgdGhyb3cgdGhlbSwgTGV4aWNhbCB3aWxsXHJcbi8vIHRyeSB0byByZWNvdmVyIGdyYWNlZnVsbHkgd2l0aG91dCBsb3NpbmcgdXNlciBkYXRhLlxyXG5jb25zdCBvbkVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbn1cclxuXHJcbmNvbnN0IEVkaXRvciA9ICh7IGRhdGEsIHVwZGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbENvbmZpZyA9IHtcclxuICAgIG5hbWVzcGFjZTogJ015RWRpdG9yJywgXHJcbiAgICB0aGVtZSxcclxuICAgIG9uRXJyb3IsXHJcbiAgICBub2RlczogW1xyXG4gICAgICBMaXN0Tm9kZSxcclxuICAgICAgTGlzdEl0ZW1Ob2RlLFxyXG4gICAgICBJbWFnZU5vZGVcclxuICAgIF1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExleGljYWxDb21wb3NlciBpbml0aWFsQ29uZmlnPXtpbml0aWFsQ29uZmlnfT5cclxuICAgICAgPEluaXRpYWxIdG1sUGx1Z2luIGRhdGE9e2RhdGF9IHVwZGF0ZT17dXBkYXRlfS8+XHJcbiAgICAgIDxMaXN0UGx1Z2luIC8+XHJcbiAgICAgIDxIaXN0b3J5UGx1Z2luIC8+XHJcbiAgICAgIDxJbWFnZVBsdWdpbiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1lZGl0b3InPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b29sYmFyLWVkaXRvcic+XHJcbiAgICAgICAgICA8Rm9ybWF0VGV4dEdyb3VwIC8+IDxTaXplVGV4dEdyb3VwIC8+IDxMaXN0VHlwZSAvPlxyXG4gICAgICAgICAgPEFsaWduVGV4dCAvPiA8SW5zZXJ0SW1nIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtZWRpdG9yJz5cclxuICAgICAgICAgIDxSaWNoVGV4dFBsdWdpblxyXG4gICAgICAgICAgICBjb250ZW50RWRpdGFibGU9ezxDb250ZW50RWRpdGFibGUgY2xhc3NOYW1lPSdlZGl0b3ItdGV4dCcvPn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9ezxkaXYgY2xhc3NOYW1lPSdlZGl0b3ItcGxhY2Vob2xkZXInPkNvbnRlbnUuLi48L2Rpdj59XHJcbiAgICAgICAgICAgIEVycm9yQm91bmRhcnk9e0xleGljYWxFcnJvckJvdW5kYXJ5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9MZXhpY2FsQ29tcG9zZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHRcIlxyXG5pbXBvcnQgeyAkd3JhcE5vZGVJbkVsZW1lbnQsIG1lcmdlUmVnaXN0ZXIgfSBmcm9tIFwiQGxleGljYWwvdXRpbHNcIlxyXG5pbXBvcnQge1xyXG4gICRjcmVhdGVQYXJhZ3JhcGhOb2RlLFxyXG4gICRpbnNlcnROb2RlcyxcclxuICAkaXNSb290T3JTaGFkb3dSb290LFxyXG4gIENPTU1BTkRfUFJJT1JJVFlfRURJVE9SLFxyXG4gIGNyZWF0ZUNvbW1hbmQsXHJcbn0gZnJvbSBcImxleGljYWxcIlxyXG5cclxuaW1wb3J0IHsgJGNyZWF0ZUltYWdlTm9kZSwgSW1hZ2VOb2RlIH0gZnJvbSBcIi4uL05vZGVzL0ltYWdlTm9kZVwiXHJcblxyXG5jb25zdCBJTlNFUlRfSU1BR0VfQ09NTUFORCA9IGNyZWF0ZUNvbW1hbmQoXCJJTlNFUlRfSU1BR0VfQ09NTUFORFwiKVxyXG5cclxuY29uc3QgSW1hZ2VQbHVnaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VkaXRvcl0gPSB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZWRpdG9yLmhhc05vZGVzKFtJbWFnZU5vZGVdKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZXNQbHVnaW46IEltYWdlTm9kZSBub3QgcmVnaXN0ZXJlZCBvbiBlZGl0b3JcIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVyZ2VSZWdpc3RlcihcclxuICAgICAgZWRpdG9yLnJlZ2lzdGVyQ29tbWFuZChcclxuICAgICAgICBJTlNFUlRfSU1BR0VfQ09NTUFORCxcclxuICAgICAgICAocGF5bG9hZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW1nTm9kZSA9ICRjcmVhdGVJbWFnZU5vZGUocGF5bG9hZCk7XHJcbiAgICAgICAgICAkaW5zZXJ0Tm9kZXMoW2ltZ05vZGVdKVxyXG4gICAgICAgICAgaWYgKCRpc1Jvb3RPclNoYWRvd1Jvb3QoaW1nTm9kZS5nZXRQYXJlbnRPclRocm93KCkpKSB7XHJcbiAgICAgICAgICAgICR3cmFwTm9kZUluRWxlbWVudChpbWdOb2RlLCAkY3JlYXRlUGFyYWdyYXBoTm9kZSkuc2VsZWN0RW5kKCk7XHJcbiAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDT01NQU5EX1BSSU9SSVRZX0VESVRPUlxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfSwgW2VkaXRvcl0pXHJcblxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCB7IElOU0VSVF9JTUFHRV9DT01NQU5ELCBJbWFnZVBsdWdpbiB9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2UnXHJcbmltcG9ydCBJbmZvIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9JbmZvJ1xyXG5pbXBvcnQgU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvU3VjY2VzcydcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1dhcm5pbmcnXHJcbmltcG9ydCBEYW5nZXIgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0RhbmdlcidcclxuaW1wb3J0IHsgbm90aWZ5Q2xvc2UsIG5vdGlmeUtlZXAgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZSdcclxuXHJcbmNvbnN0IFRvYXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmaWNhdGlvbilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IG1zZywgdHlwZSwgc3RhdHVzIH0gPSBkYXRhXHJcbiAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAnSW5mbyc6IDxJbmZvIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdTdWNjZXNzJzogPFN1Y2Nlc3MgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1dhcm5pbmcnOiA8V2FybmluZyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnRGFuZ2VyJzogPERhbmdlciBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZSA9ICgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ICR7dHlwZX0gJHtzdGF0dXN9YH0gXHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdzdGF5J30pKX0gXHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdjbG9zZScsIGZ1bmM6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDE0MDApfSkgKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlLWljb24nPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uc1tjYXBpdGFsaXplKHR5cGUpXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1idG4nPjxidXR0b24gb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJoLTUgdy01XCIgLz48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1jb250ZW50Jz5cclxuICAgICAgICB7IG1zZyB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdCIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9JbnB1dHMvQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGVudE5hdiBmcm9tICcuL0NvbnRlbnROYXYnXHJcbmltcG9ydCBDU1JGSW5wdXQgZnJvbSAnLi9DU1JGSW5wdXQnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL05hdkxpJ1xyXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnLi9QYWdlc0NvbnRhaW5lcidcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnXHJcbmltcG9ydCBBY3Rpb25zUm93IGZyb20gJy4vQWN0aW9uc1JvdydcclxuaW1wb3J0IE1vZGFsRWRpdG9yIGZyb20gJy4vTW9kYWxFZGl0b3InXHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICcuL1JpY2hUZXh0LydcclxuXHJcbmV4cG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRlbnROYXYsXHJcbiAgQ1NSRklucHV0LFxyXG4gIE5hdkxpLFxyXG4gIFBhZ2VzQ29udGFpbmVyLFxyXG4gIFRvYXN0LFxyXG4gIEFjdGlvbnNSb3csXHJcbiAgTW9kYWxFZGl0b3IsXHJcbiAgUmljaFRleHRcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiWG1sSHR0cFJlcXVlc3RcIjogdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcGFnZS1saXN0JylcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+aW5kZXg8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBHdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL2d1ZXN0L2luZGV4JztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgPFJvdXRlcj5cclxuICAgIDxHdWVzdCAvPlxyXG4gIDwvUm91dGVyPlxyXG48L1JlYWN0LlN0cmljdE1vZGU+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvYWRtaW4vYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4vTGF5b3V0XCJcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbXBvbmVudHMvYWRtaW4vcmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNvbnN0IE1haW5BZG1pbiA9ICgpID0+XHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Um91dGVyPlxyXG4gICAgICA8TGF5b3V0Lz5cclxuICAgIDwvUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBZGQgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjQgMzhxLS42NSAwLTEuMDc1LS40MjUtLjQyNS0uNDI1LS40MjUtMS4wNzV2LTExaC0xMXEtLjY1IDAtMS4wNzUtLjQyNVExMCAyNC42NSAxMCAyNHEwLS42NS40MjUtMS4wNzUuNDI1LS40MjUgMS4wNzUtLjQyNWgxMXYtMTFxMC0uNjUuNDI1LTEuMDc1UTIzLjM1IDEwIDI0IDEwcS42NSAwIDEuMDc1LjQyNS40MjUuNDI1LjQyNSAxLjA3NXYxMWgxMXEuNjUgMCAxLjA3NS40MjVRMzggMjMuMzUgMzggMjRxMCAuNjUtLjQyNSAxLjA3NS0uNDI1LjQyNS0xLjA3NS40MjVoLTExdjExcTAgLjY1LS40MjUgMS4wNzVRMjQuNjUgMzggMjQgMzhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDYWxlbmRhciA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjU2cS0xNyAwLTI4LjUtMTEuNVQ0NDAgNjE2cTAtMTcgMTEuNS0yOC41VDQ4MCA1NzZxMTcgMCAyOC41IDExLjVUNTIwIDYxNnEwIDE3LTExLjUgMjguNVQ0ODAgNjU2Wm0tMTYwIDBxLTE3IDAtMjguNS0xMS41VDI4MCA2MTZxMC0xNyAxMS41LTI4LjVUMzIwIDU3NnExNyAwIDI4LjUgMTEuNVQzNjAgNjE2cTAgMTctMTEuNSAyOC41VDMyMCA2NTZabTMyMCAwcS0xNyAwLTI4LjUtMTEuNVQ2MDAgNjE2cTAtMTcgMTEuNS0yOC41VDY0MCA1NzZxMTcgMCAyOC41IDExLjVUNjgwIDYxNnEwIDE3LTExLjUgMjguNVQ2NDAgNjU2Wk00ODAgODE2cS0xNyAwLTI4LjUtMTEuNVQ0NDAgNzc2cTAtMTcgMTEuNS0yOC41VDQ4MCA3MzZxMTcgMCAyOC41IDExLjVUNTIwIDc3NnEwIDE3LTExLjUgMjguNVQ0ODAgODE2Wm0tMTYwIDBxLTE3IDAtMjguNS0xMS41VDI4MCA3NzZxMC0xNyAxMS41LTI4LjVUMzIwIDczNnExNyAwIDI4LjUgMTEuNVQzNjAgNzc2cTAgMTctMTEuNSAyOC41VDMyMCA4MTZabTMyMCAwcS0xNyAwLTI4LjUtMTEuNVQ2MDAgNzc2cTAtMTcgMTEuNS0yOC41VDY0MCA3MzZxMTcgMCAyOC41IDExLjVUNjgwIDc3NnEwIDE3LTExLjUgMjguNVQ2NDAgODE2Wk0xODAgOTc2cS0yNCAwLTQyLTE4dC0xOC00MlYyOTZxMC0yNCAxOC00MnQ0Mi0xOGg2NXYtMjhxMC0xMy42IDkuMi0yMi44IDkuMi05LjIgMjIuOC05LjIgMTQuMDI1IDAgMjMuNTEzIDkuMlEzMTAgMTk0LjQgMzEwIDIwOHYyOGgzNDB2LTI4cTAtMTMuNiA5LjItMjIuOCA5LjItOS4yIDIyLjgtOS4yIDE0LjAyNSAwIDIzLjUxMyA5LjJRNzE1IDE5NC40IDcxNSAyMDh2MjhoNjVxMjQgMCA0MiAxOHQxOCA0MnY2MjBxMCAyNC0xOCA0MnQtNDIgMThIMTgwWm0wLTYwaDYwMFY0ODZIMTgwdjQzMFptMC00OTBoNjAwVjI5NkgxODB2MTMwWm0wIDBWMjk2djEzMFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2hlY2tlZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTE4LjkgMzUuMXEtLjMgMC0uNTUtLjEtLjI1LS4xLS41LS4zNUw4LjggMjUuNnEtLjQ1LS40NS0uNDUtMS4xIDAtLjY1LjQ1LTEuMS40NS0uNDUgMS4wNS0uNDUuNiAwIDEuMDUuNDVsOCA4IDE4LjE1LTE4LjE1cS40NS0uNDUgMS4wNzUtLjQ1dDEuMDc1LjQ1cS40NS40NS40NSAxLjA3NVQzOS4yIDE1LjRMMTkuOTUgMzQuNjVxLS4yNS4yNS0uNS4zNS0uMjUuMS0uNTUuMVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrZWQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDbG9zZSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA2MTggMjcwIDgyOHEtOSA5LTIxIDl0LTIxLTlxLTktOS05LTIxdDktMjFsMjEwLTIxMC0yMTAtMjEwcS05LTktOS0yMXQ5LTIxcTktOSAyMS05dDIxIDlsMjEwIDIxMCAyMTAtMjEwcTktOSAyMS05dDIxIDlxOSA5IDkgMjF0LTkgMjFMNTIyIDU3NmwyMTAgMjEwcTkgOSA5IDIxdC05IDIxcS05IDktMjEgOXQtMjEtOUw0ODAgNjE4WlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb3NlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGFuZ2VyID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xNy43NSA0MnEtLjYgMC0xLjE3NS0uMjUtLjU3NS0uMjUtLjk3NS0uNjVsLTguNy04LjdxLS40LS40LS42NS0uOTc1VDYgMzAuMjV2LTEyLjVxMC0uNi4yNS0xLjE3NS4yNS0uNTc1LjY1LS45NzVsOC43LTguN3EuNC0uNC45NzUtLjY1VDE3Ljc1IDZoMTIuNXEuNiAwIDEuMTc1LjI1LjU3NS4yNS45NzUuNjVsOC43IDguN3EuNC40LjY1Ljk3NVQ0MiAxNy43NXYxMi41cTAgLjYtLjI1IDEuMTc1LS4yNS41NzUtLjY1Ljk3NWwtOC43IDguN3EtLjQuNC0uOTc1LjY1VDMwLjI1IDQyWk0yNCAzMy45NXEuNyAwIDEuMjI1LS41MjUuNTI1LS41MjUuNTI1LTEuMjI1IDAtLjctLjUyNS0xLjIyNVEyNC43IDMwLjQ1IDI0IDMwLjQ1cS0uNyAwLTEuMjI1LjUyNS0uNTI1LjUyNS0uNTI1IDEuMjI1IDAgLjcuNTI1IDEuMjI1LjUyNS41MjUgMS4yMjUuNTI1Wm0wLTcuMnEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNS4xcTAtLjY1LS40MjUtMS4wNzVRMjQuNjUgMTMuNiAyNCAxMy42cS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXYxMC4xNXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVaTTE3Ljc1IDM5aDEyLjVMMzkgMzAuMjV2LTEyLjVMMzAuMjUgOWgtMTIuNUw5IDE3Ljc1djEyLjVaTTI0IDI0WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFuZ2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGVsZXRlID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMy4wNSA0MnEtMS4yIDAtMi4xLS45LS45LS45LS45LTIuMVYxMC41SDkuNXEtLjY1IDAtMS4wNzUtLjQyNVE4IDkuNjUgOCA5cTAtLjY1LjQyNS0xLjA3NVE4Ljg1IDcuNSA5LjUgNy41aDcuOXEwLS42NS40MjUtMS4wNzVRMTguMjUgNiAxOC45IDZoMTAuMnEuNjUgMCAxLjA3NS40MjUuNDI1LjQyNS40MjUgMS4wNzVoNy45cS42NSAwIDEuMDc1LjQyNVE0MCA4LjM1IDQwIDlxMCAuNjUtLjQyNSAxLjA3NS0uNDI1LjQyNS0xLjA3NS40MjVoLS41NVYzOXEwIDEuMi0uOSAyLjEtLjkuOS0yLjEuOVptMC0zMS41VjM5aDIxLjlWMTAuNVptNS4zIDIyLjdxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1LjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTYuMjVxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NVptOC4zIDBxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1LjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTYuMjVxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NVptLTEzLjYtMjIuN1YzOSAxMC41WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRWRpdCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOSAzOWgyLjJsMjIuMTUtMjIuMTUtMi4yLTIuMkw5IDM2LjhabTMwLjctMjQuMy02LjQtNi40IDIuMS0yLjFxLjg1LS44NSAyLjEyNS0uODI1IDEuMjc1LjAyNSAyLjEyNS44NzVMNDEuOCA4LjRxLjg1Ljg1Ljg1IDIuMXQtLjg1IDIuMVpNNy41IDQycS0uNjUgMC0xLjA3NS0uNDI1UTYgNDEuMTUgNiA0MC41di00LjNxMC0uMy4xLS41NS4xLS4yNS4zNS0uNUwzMS4yIDEwLjRsNi40IDYuNC0yNC43NSAyNC43NXEtLjI1LjI1LS41LjM1LS4yNS4xLS41NS4xWm0yNC43NS0yNi4yNS0xLjEtMS4xIDIuMiAyLjJaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRXhwYW5kID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNzExIDI0MCA0NzFsNDMtNDMgMTk3IDE5OCAxOTctMTk3IDQzIDQzLTI0MCAyMzlaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBhbmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00NDAgODk2cS0xNyAwLTI4LjUtMTEuNVQ0MDAgODU2VjYxNkwxNjEgMzExcS0xNC0xNy00LTM2dDMxLTE5aDU4NHEyMSAwIDMxIDE5dC00IDM2TDU2MCA2MTZ2MjQwcTAgMTctMTEuNSAyOC41VDUyMCA4OTZoLTgwWm00MC0yNzYgMjQwLTMwNEgyNDBsMjQwIDMwNFptMCAwWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW5mbyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTI0LjE1IDM0cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di05LjA1cTAtLjYtLjQ1LTEuMDI1UTI0Ljc1IDIyIDI0LjE1IDIycS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY5LjA1cTAgLjYuNDUgMS4wMjUuNDUuNDI1IDEuMDUuNDI1Wk0yNCAxOC4zcS43IDAgMS4xNzUtLjQ1LjQ3NS0uNDUuNDc1LTEuMTV0LS40NzUtMS4yUTI0LjcgMTUgMjQgMTVxLS43IDAtMS4xNzUuNS0uNDc1LjUtLjQ3NSAxLjJ0LjQ3NSAxLjE1cS40NzUuNDUgMS4xNzUuNDVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3IDAgMTItNXQ1LTEycTAtNy01LTEyVDI0IDdxLTcgMC0xMiA1VDcgMjRxMCA3IDUgMTJ0MTIgNVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBMb2dvdXQgPSAoeyBDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Q2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk04Ljc1IDQyLjVxLTEuNDUgMC0yLjU1LTEuMS0xLjEtMS4xLTEuMS0yLjU1VjkuMTVxMC0xLjQ1IDEuMS0yLjU1IDEuMS0xLjEgMi41NS0xLjFoMTQuN3YzLjY1SDguNzV2MjkuN2gxNC43djMuNjVabTI0LjUtOC43NS0yLjctMi42NSA1LjMtNS4zaC0xNy4zdi0zLjY1aDE3LjJsLTUuMy01LjMgMi43LTIuNiA5LjggOS44WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTWVudSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUzLjMzMyA4MjMuNDkzcS0xNiAwLTI2LjkzOC0xMC45NzItMTAuOTM5LTEwLjk3Mi0xMC45MzktMjcuMDIyIDAtMTYuMDQ5IDEwLjkzOS0yNi45MDQgMTAuOTM4LTEwLjg1NSAyNi45MzgtMTAuODU1aDY1My4zMzRxMTYgMCAyNi45MzggMTAuOTcxIDEwLjkzOSAxMC45NzIgMTAuOTM5IDI3LjAyMiAwIDE2LjA1LTEwLjkzOSAyNi45MDUtMTAuOTM4IDEwLjg1NS0yNi45MzggMTAuODU1SDE1My4zMzNabTAtMjA5LjYxNnEtMTYgMC0yNi45MzgtMTAuOTcyLTEwLjkzOS0xMC45NzItMTAuOTM5LTI3LjAyMiAwLTE2LjA1IDEwLjkzOS0yNi45MDUgMTAuOTM4LTEwLjg1NSAyNi45MzgtMTAuODU1aDY1My4zMzRxMTYgMCAyNi45MzggMTAuOTcyIDEwLjkzOSAxMC45NzIgMTAuOTM5IDI3LjAyMiAwIDE2LjA1LTEwLjkzOSAyNi45MDUtMTAuOTM4IDEwLjg1NS0yNi45MzggMTAuODU1SDE1My4zMzNabTAtMjA5LjYxN3EtMTYgMC0yNi45MzgtMTAuOTcyLTEwLjkzOS0xMC45NzItMTAuOTM5LTI3LjAyMSAwLTE2LjA1IDEwLjkzOS0yNi45ODUgMTAuOTM4LTEwLjkzNCAyNi45MzgtMTAuOTM0aDY1My4zMzRxMTYgMCAyNi45MzggMTEuMDUxIDEwLjkzOSAxMS4wNTIgMTAuOTM5IDI3LjEwMiAwIDE2LjA0OS0xMC45MzkgMjYuOTA0LTEwLjkzOCAxMC44NTUtMjYuOTM4IDEwLjg1NUgxNTMuMzMzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE5leHQgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj48cGF0aCBkPVwiTTM1NCA3OTRxLTgtMTAtOC41LTIydDguNS0yMWwxNzYtMTc2LTE3Ny0xNzdxLTgtOC03LjUtMjEuNVQzNTQgMzU1cTEwLTEwIDIxLjUtOS41VDM5NiAzNTVsMTk5IDE5OXE1IDUgNyAxMHQyIDExcTAgNi0yIDExdC03IDEwTDM5NyA3OTRxLTkgOS0yMSA4LjV0LTIyLTguNVpcIi8+PC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHJldiA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPjxwYXRoIGQ9XCJNNTM5IDc5NCAzNDEgNTk2cS01LTUtNy0xMHQtMi0xMXEwLTYgMi0xMXQ3LTEwbDE5OS0xOTlxOS05IDIxLjUtOXQyMS41IDlxOSA5IDguNSAyMnQtOS41IDIyTDQwNiA1NzVsMTc3IDE3N3E5IDkgOSAyMXQtOSAyMXEtOSA5LTIyIDl0LTIyLTlaXCIvPjwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJldiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN1Y2Nlc3MgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIm0yMS4wNSAyOC41NS00LjktNC45cS0uNDUtLjQ1LTEuMS0uNDUtLjY1IDAtMS4xNS41LS41LjUtLjUgMS4xNSAwIC42NS41IDEuMWw2LjEgNi4xcS40NS40NSAxLjA1LjQ1LjYgMCAxLjA1LS40NWwxMi0xMnEuNDUtLjQ1LjQyNS0xLjEtLjAyNS0uNjUtLjQ3NS0xLjEtLjQ1LS41LTEuMTI1LS41dC0xLjE3NS41Wk0yNCA0NHEtNC4yNSAwLTcuOS0xLjUyNS0zLjY1LTEuNTI1LTYuMzUtNC4yMjUtMi43LTIuNy00LjIyNS02LjM1UTQgMjguMjUgNCAyNHEwLTQuMiAxLjUyNS03Ljg1UTcuMDUgMTIuNSA5Ljc1IDkuOHEyLjctMi43IDYuMzUtNC4yNVExOS43NSA0IDI0IDRxNC4yIDAgNy44NSAxLjU1UTM1LjUgNy4xIDM4LjIgOS44cTIuNyAyLjcgNC4yNSA2LjM1UTQ0IDE5LjggNDQgMjRxMCA0LjI1LTEuNTUgNy45LTEuNTUgMy42NS00LjI1IDYuMzUtMi43IDIuNy02LjM1IDQuMjI1UTI4LjIgNDQgMjQgNDRabTAtMjBabTAgMTdxNy4yNSAwIDEyLjEyNS00Ljg3NVQ0MSAyNHEwLTcuMjUtNC44NzUtMTIuMTI1VDI0IDdxLTcuMjUgMC0xMi4xMjUgNC44NzVUNyAyNHEwIDcuMjUgNC44NzUgMTIuMTI1VDI0IDQxWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VjY2VzcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFdhcm5pbmcgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQuNiA0MnEtLjQ1IDAtLjc3NS0uMnQtLjUyNS0uNTVxLS4yLS4zNS0uMjI1LS43MjUtLjAyNS0uMzc1LjIyNS0uNzc1bDE5LjQtMzMuNXEuMjUtLjQuNTc1LS41NzVRMjMuNiA1LjUgMjQgNS41cS40IDAgLjcyNS4xNzUuMzI1LjE3NS41NzUuNTc1bDE5LjQgMzMuNXEuMjUuNC4yMjUuNzc1LS4wMjUuMzc1LS4yMjUuNzI1dC0uNTI1LjU1cS0uMzI1LjItLjc3NS4yWm0yLjYtM2gzMy42TDI0IDEwWm0xNy0yLjg1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1IDAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1UTIyLjcgMzQgMjIuNyAzNC42NXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabTAtNS41NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NXYtOC4ycTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2OC4ycTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptLS4yLTYuMVpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXJuaW5nIiwiaW1wb3J0IEFkZCBmcm9tIFwiLi9BZGRcIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL0NhbGVuZGFyXCI7XHJcbmltcG9ydCBDaGVja2VkIGZyb20gXCIuL0NoZWNrZWRcIjtcclxuaW1wb3J0IENsb3NlIGZyb20gXCIuL0Nsb3NlXCI7XHJcbmltcG9ydCBEYW5nZXIgZnJvbSBcIi4vRGFuZ2VyXCI7XHJcbmltcG9ydCBEZWxldGUgZnJvbSBcIi4vRGVsZXRlXCI7XHJcbmltcG9ydCBFZGl0IGZyb20gXCIuL0VkaXRcIjtcclxuaW1wb3J0IEV4cGFuZCBmcm9tIFwiLi9FeHBhbmRcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi9GaWx0ZXJcIjtcclxuaW1wb3J0IEluZm8gZnJvbSBcIi4vSW5mb1wiO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gXCIuL0xvZ291dFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCBOYXZOZXh0IGZyb20gXCIuL05leHRcIjtcclxuaW1wb3J0IE5hdlByZXYgZnJvbSBcIi4vUHJldlwiO1xyXG5pbXBvcnQgU3VjY2VzcyBmcm9tIFwiLi9TdWNjZXNzXCI7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gXCIuL1dhcm5pbmdcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkLFxyXG4gIENhbGVuZGFyLFxyXG4gIENoZWNrZWQsXHJcbiAgQ2xvc2UsXHJcbiAgRGFuZ2VyLFxyXG4gIERlbGV0ZSxcclxuICBFZGl0LFxyXG4gIEV4cGFuZCxcclxuICBJbmZvLFxyXG4gIExvZ291dCxcclxuICBTdWNjZXNzLFxyXG4gIFdhcm5pbmcsXHJcbiAgTmF2UHJldixcclxuICBOYXZOZXh0LFxyXG4gIE1lbnUsXHJcbiAgRmlsdGVyXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJvbGQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0zMzUgODU2cS0yNSAwLTQyLjUtMTcuNVQyNzUgNzk2VjM1NnEwLTI1IDE3LjUtNDIuNVQzMzUgMjk2aDE2OHE2NiAwIDExNC41IDQyVDY2NiA0NDRxMCAzOC0yMSA3MHQtNTYgNDl2NnE0MyAxNCA2OS41IDUwdDI2LjUgODFxMCA2OC01Mi41IDExMlQ1MTAgODU2SDMzNVptMjYtNzZoMTQ0cTM4IDAgNjYtMjV0MjgtNjNxMC0zNy0yOC02MnQtNjYtMjVIMzYxdjE3NVptMC0yNDdoMTM2cTM1IDAgNjAuNS0yM3QyNS41LTU4cTAtMzUtMjUuNS01OC41VDQ5NyAzNzBIMzYxdjE2M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvbGQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCdWxsZXRlZExpc3QgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00MDcgODU4cS0xMi43NSAwLTIxLjM3NS04LjY3NS04LjYyNS04LjY3Ni04LjYyNS0yMS41IDAtMTIuODI1IDguNjI1LTIxLjMyNVQ0MDcgNzk4aDQwM3ExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ4MTAgODU4SDQwN1ptMC0yNTJxLTEyLjc1IDAtMjEuMzc1LTguNjc1LTguNjI1LTguNjc2LTguNjI1LTIxLjUgMC0xMi44MjUgOC42MjUtMjEuMzI1VDQwNyA1NDZoNDAzcTEyLjc1IDAgMjEuMzc1IDguNjc1IDguNjI1IDguNjc2IDguNjI1IDIxLjUgMCAxMi44MjUtOC42MjUgMjEuMzI1VDgxMCA2MDZINDA3Wm0wLTI1M3EtMTIuNzUgMC0yMS4zNzUtOC42NzUtOC42MjUtOC42NzYtOC42MjUtMjEuNSAwLTEyLjgyNSA4LjYyNS0yMS4zMjVUNDA3IDI5M2g0MDNxMTIuNzUgMCAyMS4zNzUgOC42NzUgOC42MjUgOC42NzYgOC42MjUgMjEuNSAwIDEyLjgyNS04LjYyNSAyMS4zMjVUODEwIDM1M0g0MDdaTTE4OSA4OTVxLTI4LjA1IDAtNDguMDI1LTE5UTEyMSA4NTcgMTIxIDgyOC41dDE5LjUtNDhxMTkuNS0xOS41IDQ4LTE5LjV0NDcuNSAxOS45NzVRMjU1IDgwMC45NSAyNTUgODI5cTAgMjcuMjI1LTE5LjM4NyA0Ni42MTJRMjE2LjIyNSA4OTUgMTg5IDg5NVptMC0yNTJxLTI4LjA1IDAtNDguMDI1LTE5LjY4MVExMjEgNjAzLjYzOCAxMjEgNTc2dDE5Ljk3NS00Ny4zMTlRMTYwLjk1IDUwOSAxODkgNTA5cTI3LjIyNSAwIDQ2LjYxMyAxOS42ODFRMjU1IDU0OC4zNjIgMjU1IDU3NnQtMTkuMzg3IDQ3LjMxOVEyMTYuMjI1IDY0MyAxODkgNjQzWm0tMS0yNTNxLTI3LjYzNyAwLTQ3LjMxOS0xOS42ODFRMTIxIDM1MC42MzggMTIxIDMyM3QxOS42ODEtNDcuMzE5UTE2MC4zNjMgMjU2IDE4OCAyNTZxMjcuNjM3IDAgNDcuMzE5IDE5LjY4MVEyNTUgMjk1LjM2MiAyNTUgMzIzdC0xOS42ODEgNDcuMzE5UTIxNS42MzcgMzkwIDE4OCAzOTBaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRlZExpc3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb3JtYXRTaXplID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTYxOS41MzQgODc3LjA3NnEtMTQuMjY0IDAtMjMuNzgzLTkuODQ5LTkuNTE5LTkuODQ5LTkuNTE5LTIzLjkyVjM0Mi40NjFINDEyLjY5M3EtMTQuMDcxIDAtMjMuOTItOS45ODUtOS44NDktOS45ODUtOS44NDktMjQuMjUgMC0xNC4yNjQgOS44NDktMjMuNzgzIDkuODQ5LTkuNTE5IDIzLjkyLTkuNTE5aDQxNC42MTRxMTQuMDcxIDAgMjMuOTIgOS45ODUgOS44NDkgOS45ODUgOS44NDkgMjQuMjUgMCAxNC4yNjQtOS44NDkgMjMuNzgzLTkuODQ5IDkuNTE5LTIzLjkyIDkuNTE5SDY1My43Njh2NTAwLjg0NnEwIDE0LjA3MS05Ljk4NSAyMy45Mi05Ljk4NSA5Ljg0OS0yNC4yNDkgOS44NDlabS0zNjAgMHEtMTQuMjY0IDAtMjMuNzgzLTkuODQ5LTkuNTE5LTkuODQ5LTkuNTE5LTIzLjkyVjU0Mi40NjFoLTkzLjUzOXEtMTQuMDcxIDAtMjMuOTItOS45ODUtOS44NDktOS45ODUtOS44NDktMjQuMjUgMC0xNC4yNjQgOS44NDktMjMuNzgzIDkuODQ5LTkuNTE5IDIzLjkyLTkuNTE5aDI1NC42MTRxMTQuMDcxIDAgMjMuOTIgOS45ODUgOS44NDkgOS45ODUgOS44NDkgMjQuMjUgMCAxNC4yNjQtOS44NDkgMjMuNzgzLTkuODQ5IDkuNTE5LTIzLjkyIDkuNTE5aC05My41Mzl2MzAwLjg0NnEwIDE0LjA3MS05Ljk4NSAyMy45Mi05Ljk4NSA5Ljg0OS0yNC4yNDkgOS44NDlaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXRTaXplIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW1nID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTgwIDkzNnEtMjQgMC00Mi0xOHQtMTgtNDJWMjc2cTAtMjQgMTgtNDJ0NDItMThoNjAwcTI0IDAgNDIgMTh0MTggNDJ2NjAwcTAgMjQtMTggNDJ0LTQyIDE4SDE4MFptMC02MGg2MDBWMjc2SDE4MHY2MDBabTU2LTk3aDQ4OUw1NzggNTgzIDQ0NiA3NTRsLTkzLTEyNy0xMTcgMTUyWm0tNTYgOTdWMjc2djYwMFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltZyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEl0YWxpYyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTI2Mi4wNzcgODQxLjYxNHEtMTEuNzU0IDAtMjAuMy04LjQwNC04LjU0Ni04LjQwMy04LjU0Ni0yMC42MTQgMC0xMS44MjcgOC41NDYtMjAuMjUgOC41NDYtOC40MjIgMjAuMy04LjQyMmgxMDQuNzdMNTEwLjQ2MyAzNjNIMzg3LjIzMXEtMTEuNzUzIDAtMjAuMjk5LTguNTk3LTguNTQ2LTguNTk2LTguNTQ2LTIwLjQyMiAwLTEyLjIxMSA4LjU0Ni0yMC40NDIgOC41NDYtOC4yMyAyMC4yOTktOC4yM2gyOTMuODQ2cTEyLjEzOCAwIDIwLjQ5MiA4LjQwNCA4LjM1MyA4LjQwNCA4LjM1MyAyMC42MTUgMCAxMS44MjYtOC4zNTMgMjAuMjQ5UTY5My4yMTUgMzYzIDY4MS4wNzcgMzYzSDU3My45OTlMNDMwLjc2OCA3ODMuOTI0aDEyNS4xNTRxMTIuMTM5IDAgMjAuNDkyIDguNTk2IDguMzU0IDguNTk2IDguMzU0IDIwLjQyMiAwIDEyLjIxMS04LjM1NCAyMC40NDItOC4zNTMgOC4yMy0yMC40OTIgOC4yM0gyNjIuMDc3WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRhbGljIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTnVtYmVyZWRMaXN0ID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNjMuODQ3IDk1NS45OTlxLTEwLjMzMyAwLTE3LjA4OS02Ljc1Mi02Ljc1Ny02Ljc1MS02Ljc1Ny0xNy4wNzYgMC0xMC4zMjYgNi43NTctMTcuMDk1IDYuNzU2LTYuNzY5IDE3LjA4OS02Ljc2OWg3Ni4xNTR2LTQyLjMwOGgtMzYuMTU0cS0xMC4zMzMgMC0xNy4wODktNi43NTItNi43NTctNi43NTEtNi43NTctMTcuMDc2IDAtMTAuMzI2IDYuNzU3LTE3LjA5NSA2Ljc1Ni02Ljc2OSAxNy4wODktNi43NjloMzYuMTU0di00Mi4zMDhoLTc2LjE1NHEtMTAuMzMzIDAtMTcuMDg5LTYuNzUyLTYuNzU3LTYuNzUxLTYuNzU3LTE3LjA3NiAwLTEwLjMyNiA2Ljc1Ny0xNy4wOTUgNi43NTYtNi43NjkgMTcuMDg5LTYuNzY5aDkwcTE0LjM4NSAwIDI0LjExNSA5LjczMSA5LjczMSA5LjczIDkuNzMxIDI0LjExNXY0Ny42OTNxMCAxNC4zODQtOS43MzEgMjQuMTE1LTkuNzMgOS43My0yNC4xMTUgOS43MyAxNC4zODUgMCAyNC4xMTUgOS43MzEgOS43MzEgOS43MzEgOS43MzEgMjQuMTE1djQ0LjYxNnEwIDE0LjM4NC05LjczMSAyNC4xMTUtOS43MyA5LjczMS0yNC4xMTUgOS43MzFoLTkwWm0tMS42MTUtMjY2LjE1M3EtOC42MTUgMC0xNS40MjMtNi44MDh0LTYuODA4LTE1LjQyM1Y1ODZxMC0xNC4zODQgOS43MzEtMjQuMTE1IDkuNzMxLTkuNzMxIDI0LjExNS05LjczMWg2Ni4xNTR2LTQyLjMwOGgtNzYuMTU0cS0xMC4zMzMgMC0xNy4wODktNi43NTItNi43NTctNi43NTEtNi43NTctMTcuMDc2dDYuNzU3LTE3LjA5NXE2Ljc1Ni02Ljc2OSAxNy4wODktNi43NjloOTBxMTQuMzg1IDAgMjQuMTE1IDkuNzMxIDkuNzMxIDkuNzMxIDkuNzMxIDI0LjExNXY3MHEwIDE0LjM4NC05LjczMSAyNC4xMTUtOS43MyA5LjczMS0yNC4xMTUgOS43MzFoLTY2LjE1NHY0Mi4zMDhoNzYuMTU0cTEwLjMzMyAwIDE3LjA5IDYuNzUyIDYuNzU2IDYuNzUxIDYuNzU2IDE3LjA3NnQtNi43NTYgMTcuMDk1cS02Ljc1NyA2Ljc2OS0xNy4wOSA2Ljc2OUgxNjIuMjMyWm02MS42MzMtMjY2LjE1M3EtMTAuMzI1IDAtMTcuMDk0LTYuNzU2LTYuNzctNi43NTctNi43Ny0xNy4wOVYyNDMuNjkzaC0zNi4xNTRxLTEwLjMzMyAwLTE3LjA4OS02Ljc1MS02Ljc1Ny02Ljc1Mi02Ljc1Ny0xNy4wNzcgMC0xMC4zMjUgNi43NTctMTcuMDk0IDYuNzU2LTYuNzcgMTcuMDg5LTYuNzdoNjIuNjE1cTguNDYyIDAgMTQuODQ2IDYuMzg1IDYuMzg1IDYuMzg1IDYuMzg1IDE0Ljg0NnYxODIuNjE1cTAgMTAuMzMzLTYuNzUxIDE3LjA5LTYuNzUyIDYuNzU2LTE3LjA3NyA2Ljc1NlptMTc3LjgyOCA0MTUuNjE0cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGgzOTUuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDQwMS42OTNabTAtMjQyLjIzMXEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoMzk1LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEg0MDEuNjkzWm0wLTI0Mi4yM3EtOS42NDUgMC0xNi4xNjgtNi41NzktNi41MjQtNi41NzgtNi41MjQtMTYuMzAyIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTIzLTYuNTc3IDE2LjE2OC02LjU3N2gzOTUuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNzY2IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwNyAwIDkuNTQyLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVINDAxLjY5M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlcmVkTGlzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN0cmlrZSA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTExMCA2NDZxLTEyLjc1IDAtMjEuMzc1LTguNjc1UTgwIDYyOC42NDkgODAgNjE1LjgyNSA4MCA2MDMgODguNjI1IDU5NC41VDExMCA1ODZoNzQwcTEyLjc1IDAgMjEuMzc1IDguNjc1IDguNjI1IDguNjc2IDguNjI1IDIxLjUgMCAxMi44MjUtOC42MjUgMjEuMzI1VDg1MCA2NDZIMTEwWm0zMjAtMTIwVjM1NkgyNTBxLTIwLjgzMyAwLTM1LjQxNy0xNC42MThRMjAwIDMyNi43NjUgMjAwIDMwNS44ODIgMjAwIDI4NSAyMTQuNTgzIDI3MC41IDIyOS4xNjcgMjU2IDI1MCAyNTZoNDYwcTIwLjgzMyAwIDM1LjQxNyAxNC42MThRNzYwIDI4NS4yMzUgNzYwIDMwNi4xMTggNzYwIDMyNyA3NDUuNDE3IDM0MS41IDczMC44MzMgMzU2IDcxMCAzNTZINTMwdjE3MEg0MzBabTQ5Ljg4MiAzNzBRNDU5IDg5NiA0NDQuNSA4ODEuNDE3IDQzMCA4NjYuODMzIDQzMCA4NDZWNzA2aDEwMHYxNDBxMCAyMC44MzMtMTQuNjE4IDM1LjQxN1E1MDAuNzY1IDg5NiA0NzkuODgyIDg5NlpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmlrZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN1cGVyU2NyaXB0ID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNODAwIDQ1NnEtMTMgMC0yMS41LTguNVQ3NzAgNDI2di01NXEwLTE0IDgtMjJ0MjItOGg5MHYtNTVINzg1cS02IDAtMTAuNS00LjVUNzcwIDI3MXEwLTYgNC41LTEwLjVUNzg1IDI1NmgxMDVxMTQgMCAyMiA4dDggMjJ2NTVxMCAxNC04IDIydC0yMiA4aC05MHY1NWgxMDVxNiAwIDEwLjUgNC41VDkyMCA0NDFxMCA2LTQuNSAxMC41VDkwNSA0NTZIODAwWk0zMDAgODk2cS0yMSAwLTMxLTE4LjV0MS0zNi41bDE1MC0yMzYtMTM2LTIxM3EtMTEtMTgtMS0zN3QzMS0xOXE5IDAgMTcuNSA0LjVUMzQ1IDM1M2wxMjQgMTk2IDEyNC0xOTZxNS04IDEzLjUtMTIuNVQ2MjQgMzM2cTIyIDAgMzEuNSAxOXQtMS41IDM3TDUxOCA2MDVsMTUwIDIzNnExMSAxOCAxIDM2LjVUNjM4IDg5NnEtOSAwLTE3LjUtNC41VDYwNyA4NzlMNDY5IDY2MiAzMzEgODc5cS01IDgtMTMuNSAxMi41VDMwMCA4OTZaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdXBlclNjcmlwdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFR4dENlbnRlciA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUyLjY5MyA5MjUuOTk5cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNabTE2Mi44NDYtMTYzLjg0NnEtOS42NDQgMC0xNi4xNjgtNi41NzgtNi41MjQtNi41NzgtNi41MjQtMTYuMzAzIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTI0LTYuNTc2IDE2LjE2OC02LjU3NmgzMjkuNTM4cTkuNjQ0IDAgMTYuMTY4IDYuNzY1IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwOCAwIDkuNTQxLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMzE1LjUzOVpNMTUyLjY5MyA1OTguNjkycS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgxLTYuNTI0LTE2LjMwOHQ2LjUyNC0xNi4xMTFxNi41MjMtNi4zODUgMTYuMTY4LTYuMzg1aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4MSA2LjUyNCAxNi4zMDh0LTYuNTI0IDE2LjExMXEtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDE1Mi42OTNabTE2Mi44NDYtMTYzLjg0NnEtOS42NDQgMC0xNi4xNjgtNi41NzktNi41MjQtNi41NzgtNi41MjQtMTYuMzAyIDAtOS4zNDkgNi41MjQtMTUuOTI2dDE2LjE2OC02LjU3N2gzMjkuNTM4cTkuNjQ0IDAgMTYuMTY4IDYuNzY2IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwNyAwIDkuNTQyLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMzE1LjUzOVpNMTUyLjY5MyAyNzEuMzg0cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRDZW50ZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUeHRKdXN0aWZ5ID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTUyLjY5MyA5MjUuOTk5cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNabTAtMTYzLjg0NnEtOS42NDUgMC0xNi4xNjgtNi41NzgtNi41MjQtNi41NzgtNi41MjQtMTYuMzAzIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTIzLTYuNTc2IDE2LjE2OC02LjU3Nmg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNzY1IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwOCAwIDkuNTQxLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1ptMC0xNjMuNDYxcS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgxLTYuNTI0LTE2LjMwOHQ2LjUyNC0xNi4xMTFxNi41MjMtNi4zODUgMTYuMTY4LTYuMzg1aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4MSA2LjUyNCAxNi4zMDh0LTYuNTI0IDE2LjExMXEtNi41MjQgNi4zODUtMTYuMTY4IDYuMzg1SDE1Mi42OTNabTAtMTYzLjg0NnEtOS42NDUgMC0xNi4xNjgtNi41NzktNi41MjQtNi41NzgtNi41MjQtMTYuMzAyIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTIzLTYuNTc3IDE2LjE2OC02LjU3N2g2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNzY2IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwNyAwIDkuNTQyLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMTUyLjY5M1ptMC0xNjMuNDYycS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRKdXN0aWZ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVHh0TGVmdCA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTE1Mi42OTMgNzYyLjE1M3EtOS42NDUgMC0xNi4xNjgtNi41NzgtNi41MjQtNi41NzgtNi41MjQtMTYuMzAzIDAtOS4zNDkgNi41MjQtMTUuOTI2IDYuNTIzLTYuNTc2IDE2LjE2OC02LjU3Nmg0MDguOTIycTkuNjQ0IDAgMTYuMTY4IDYuNzY1IDYuNTI0IDYuNzY2IDYuNTI0IDE2LjMwOCAwIDkuNTQxLTYuNTI0IDE1LjkyNi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1ptMC0zMjcuMzA3cS05LjY0NSAwLTE2LjE2OC02LjU3OS02LjUyNC02LjU3OC02LjUyNC0xNi4zMDIgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjMtNi41NzcgMTYuMTY4LTYuNTc3aDQwOC45MjJxOS42NDQgMCAxNi4xNjggNi43NjYgNi41MjQgNi43NjYgNi41MjQgMTYuMzA3IDAgOS41NDItNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgxNTIuNjkzWm0wIDE2My44NDZxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41ODEtNi41MjQtMTYuMzA4dDYuNTI0LTE2LjExMXE2LjUyMy02LjM4NSAxNi4xNjgtNi4zODVoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTgxIDYuNTI0IDE2LjMwOHQtNi41MjQgMTYuMTExcS02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMTUyLjY5M1ptMCAzMjcuMzA3cS05LjY0NSAwLTE2LjE2OC02LjU4LTYuNTI0LTYuNTgtNi41MjQtMTYuMzA3IDAtOS43MjcgNi41MjQtMTYuMTEyIDYuNTIzLTYuMzg0IDE2LjE2OC02LjM4NGg2NTQuNjE0cTkuNjQ0IDAgMTYuMTY4IDYuNTggNi41MjQgNi41OCA2LjUyNCAxNi4zMDcgMCA5LjcyNy02LjUyNCAxNi4xMTItNi41MjQgNi4zODQtMTYuMTY4IDYuMzg0SDE1Mi42OTNabTAtNjU0LjYxNXEtOS42NDUgMC0xNi4xNjgtNi41OC02LjUyNC02LjU4LTYuNTI0LTE2LjMwNyAwLTkuNzI3IDYuNTI0LTE2LjExMiA2LjUyMy02LjM4NCAxNi4xNjgtNi4zODRoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTggNi41MjQgMTYuMzA3IDAgOS43MjctNi41MjQgMTYuMTEyLTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgxNTIuNjkzWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0TGVmdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFR4dFJpZ2h0ID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xNTIuNjkzIDkyNS45OTlxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1ptMjQ2LjY5Mi0xNjMuODQ2cS05LjY0NCAwLTE2LjE2OC02LjU3OC02LjUyNC02LjU3OC02LjUyNC0xNi4zMDMgMC05LjM0OSA2LjUyNC0xNS45MjYgNi41MjQtNi41NzYgMTYuMTY4LTYuNTc2aDQwNy45MjJxOS42NDQgMCAxNi4xNjggNi43NjUgNi41MjQgNi43NjYgNi41MjQgMTYuMzA4IDAgOS41NDEtNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg0LTE2LjE2OCA2LjM4NEgzOTkuMzg1Wk0xNTIuNjkzIDU5OC42OTJxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41ODEtNi41MjQtMTYuMzA4dDYuNTI0LTE2LjExMXE2LjUyMy02LjM4NSAxNi4xNjgtNi4zODVoNjU0LjYxNHE5LjY0NCAwIDE2LjE2OCA2LjU4IDYuNTI0IDYuNTgxIDYuNTI0IDE2LjMwOHQtNi41MjQgMTYuMTExcS02LjUyNCA2LjM4NS0xNi4xNjggNi4zODVIMTUyLjY5M1ptMjQ2LjY5Mi0xNjMuODQ2cS05LjY0NCAwLTE2LjE2OC02LjU3OS02LjUyNC02LjU3OC02LjUyNC0xNi4zMDIgMC05LjM0OSA2LjUyNC0xNS45MjZ0MTYuMTY4LTYuNTc3aDQwNy45MjJxOS42NDQgMCAxNi4xNjggNi43NjYgNi41MjQgNi43NjYgNi41MjQgMTYuMzA3IDAgOS41NDItNi41MjQgMTUuOTI2LTYuNTI0IDYuMzg1LTE2LjE2OCA2LjM4NUgzOTkuMzg1Wk0xNTIuNjkzIDI3MS4zODRxLTkuNjQ1IDAtMTYuMTY4LTYuNTgtNi41MjQtNi41OC02LjUyNC0xNi4zMDcgMC05LjcyNyA2LjUyNC0xNi4xMTIgNi41MjMtNi4zODQgMTYuMTY4LTYuMzg0aDY1NC42MTRxOS42NDQgMCAxNi4xNjggNi41OCA2LjUyNCA2LjU4IDYuNTI0IDE2LjMwNyAwIDkuNzI3LTYuNTI0IDE2LjExMi02LjUyNCA2LjM4NC0xNi4xNjggNi4zODRIMTUyLjY5M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dFJpZ2h0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVW5kZXJsaW5lID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjMwIDkxNnEtMTIuNzUgMC0yMS4zNzUtOC42NzUtOC42MjUtOC42NzYtOC42MjUtMjEuNSAwLTEyLjgyNSA4LjYyNS0yMS4zMjVUMjMwIDg1Nmg1MDBxMTIuNzUgMCAyMS4zNzUgOC42NzUgOC42MjUgOC42NzYgOC42MjUgMjEuNSAwIDEyLjgyNS04LjYyNSAyMS4zMjVUNzMwIDkxNkgyMzBabTI1MC0xNDBxLTEwMCAwLTE1Ni41LTU4LjVUMjY3IDU1OVYyNTdxMC0xNi44ODIgMTIuNTI3LTI4Ljk0MVEyOTIuMDU1IDIxNiAzMDkuMDI3IDIxNiAzMjYgMjE2IDMzOCAyMjguMDU5VDM1MCAyNTd2MzAycTAgNjMgMzQgMTAxdDk2IDM4cTYyIDAgOTYtMzh0MzQtMTAxVjI1N3EwLTE2Ljg4MiAxMi41MjctMjguOTQxUTYzNS4wNTUgMjE2IDY1Mi4wMjcgMjE2IDY2OSAyMTYgNjgxIDIyOC4wNTlUNjkzIDI1N3YzMDJxMCAxMDAtNTYuNSAxNTguNVQ0ODAgNzc2WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5kZXJsaW5lIiwiaW1wb3J0IEJvbGQgZnJvbSBcIi4vQm9sZFwiO1xyXG5pbXBvcnQgQnVsbGV0ZWRMaXN0IGZyb20gXCIuL0J1bGxldGVkTGlzdFwiO1xyXG5pbXBvcnQgRm9ybWF0U2l6ZSBmcm9tIFwiLi9Gb3JtYXRTaXplXCI7XHJcbmltcG9ydCBJdGFsaWMgZnJvbSBcIi4vSXRhbGljXCI7XHJcbmltcG9ydCBOdW1iZXJlZExpc3QgZnJvbSBcIi4vTnVtYmVyZWRMaXN0XCI7XHJcbmltcG9ydCBTdHJpa2UgZnJvbSBcIi4vU3RyaWtlXCI7XHJcbmltcG9ydCBTdXBlclNjcmlwdCBmcm9tIFwiLi9TdXBlclNjcmlwdFwiO1xyXG5pbXBvcnQgVHh0TGVmdCBmcm9tIFwiLi9UeHRMZWZ0XCI7XHJcbmltcG9ydCBUeHRDZW50ZXIgZnJvbSBcIi4vVHh0Q2VudGVyXCI7XHJcbmltcG9ydCBUeHRSaWdodCBmcm9tIFwiLi9UeHRSaWdodFwiO1xyXG5pbXBvcnQgVHh0SnVzdGlmeSBmcm9tIFwiLi9UeHRKdXN0aWZ5XCI7XHJcbmltcG9ydCBVbmRlcmxpbmUgZnJvbSBcIi4vVW5kZXJsaW5lXCI7XHJcbmltcG9ydCBJbWcgZnJvbSBcIi4vSW1nXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIEJvbGQsXHJcbiAgSXRhbGljLFxyXG4gIFN0cmlrZSxcclxuICBTdXBlclNjcmlwdCxcclxuICBVbmRlcmxpbmUsXHJcbiAgRm9ybWF0U2l6ZSxcclxuICBCdWxsZXRlZExpc3QsXHJcbiAgTnVtYmVyZWRMaXN0LFxyXG4gIFR4dExlZnQsXHJcbiAgVHh0Q2VudGVyLFxyXG4gIFR4dFJpZ2h0LFxyXG4gIFR4dEp1c3RpZnksXHJcbiAgSW1nLFxyXG59IiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IGNvbnRyb2xsZXIgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0OmNvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0Om1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdyZWFjdDp1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJwcmVwYXJlRm9yU2VuZCIsImRhdGEiLCJyZXN1bHQiLCJrIiwidiIsIk9iamVjdCIsImVudHJpZXMiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJleCIsImdldEJvb2xlYW5Gcm9tU3RyaW5nIiwic3RyIiwic2V0QmFzZVVybCIsImV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibGVuZ3RoIiwiY2xlYW5QYXRoIiwicGF0aCIsImNhcGl0YWxpemUiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJlbmRPZlBhdGgiLCJsYXN0SW5kZXhPZiIsInVwZGF0ZVRpdGxlIiwibiIsImRvY3VtZW50IiwidGl0bGUiLCJzdHJDb250YWlucyIsInNlYXJjaCIsInJlIiwiUmVnRXhwIiwic3RyTm9ybWFsaXplIiwidGVzdCIsImwiLCJyZWciLCJ3IiwiZ2V0UHJvcHNCb29sU3RhdHVzIiwib2JqIiwicHJvcCIsImJvb2xTdGF0ZSIsImtleSIsInZhbHVlIiwiaXNPYmplY3QiLCJhcmVFcXVhbCIsIm9iajEiLCJvYmoyIiwiaXNBcnJheSIsImkiLCJlbnQxIiwiZW50MiIsImlzRGVmaW5lZCIsInVuZGVmaW5lZCIsImlzSlNPTiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJvYmplY3QiLCJhcnJheSIsIkFycmF5Iiwic29ydEFzYyIsImEiLCJiIiwic29ydCIsInNvcnREZXMiLCJSZWFjdCIsIkNvbnRlbnQiLCJjaGlsZHJlbiIsIkZvb3RlciIsImdldFRva2VuIiwidG9rZW4iLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiVG9hc3QiLCJjbGVhckRhdGEiLCJzZXRVcmwiLCJQYWdlcyIsIlNldHRpbmdzIiwiQXJ0aWNsZXMiLCJMb2dpbiIsIk1lbnUiLCJuYW1lIiwiUGFnZSIsIkxheW91dCIsInVybCIsInN0YXRlIiwiYWpheCIsIm5hdiIsImRpc3BhdGNoIiwicGF0aG5hbWUiLCJtYXRjaCIsIm9uYmVmb3JldW5sb2FkIiwiZSIsIm1hcCIsInVzZVN0YXRlIiwiTmF2TGkiLCJMb2dvdXQiLCJ1c2VMb2NhdGlvbiIsImVuYWJsZSIsInNldEVuYWJsZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInNldFRpbWVvdXQiLCJoYW5kbGVMb2dvdXQiLCJQYWdlc0NvbnRhaW5lciIsIkNvbnRlbnROYXYiLCJNb2RhbEVkaXRvciIsInB1c2hEYXRhIiwiYXhpb3MiLCJub3RpZnkiLCJub3RpZnlDbG9zZSIsImF4aW9zU2V0IiwiY3JlYXRlIiwicGFyYW1zIiwicGFnZSIsImFydGljbGVzIiwicGFnZXMiLCJtb2RhbCIsInNldE1vZGFsIiwidHlwZSIsIndoZXJlIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwic3RhdHVzIiwicmVzcG9uc2UiLCJjbG9zZU1vZGFsIiwic2VuZERhdGEiLCJzZW5kRmllbGQiLCJwdXQiLCJtc2ciLCJ0aW1lb3V0IiwicG9zdCIsImRlbGV0ZSIsImNyZWF0ZUFydGljbGUiLCJ1cGRhdGVBcnRpY2xlIiwiaWQiLCJhcnRpY2xlIiwiZmluZCIsImNvbnZlcnQiLCJkYXRlIiwicmVtb3ZlQXJ0aWNsZSIsImhlYWRlciIsInRhZyIsImRyYXciLCJjb2xTaXplIiwibGlzdCIsInB1Ymxpc2hlZCIsImlzZHluYW1pYyIsInB1Ymxpc2hiZWdpbiIsInB1Ymxpc2hlbmQiLCJjb250ZW50IiwiQnV0dG9uIiwiVHh0TGFiZWxJbnB1dCIsIlhNTFNldCIsImxpZmV0aW1lIiwibm90aWZpY2F0aW9uIiwibGlmZSIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIl90b2tlbiIsImlzQ29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwiYmx1clRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVGltZW91dCIsIm5hdGl2ZUV2ZW50Iiwic3VibWl0dGVyIiwiYmx1ciIsIm5hdlVSTCIsInNtYWxsIiwiZXJyb3IiLCJjcmVhdGVQYWdlIiwidXBkYXRlUGFnZSIsIm5EYXRhIiwidmFsdWVzIiwicCIsInJlbW92ZVBhZ2UiLCJTZWxlY3RvciIsInNldHRpbmdzIiwiY2hhbmdlIiwic2V0Q2hhbmdlIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiY2hhbmdlTmFtZSIsInNldExhbmRpbmciLCJMYW5kaW5nIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVNldHRpbmdzIiwiQXV0aG9yIiwiRGVzY3JpcHRpb24iLCJTaXRlTmFtZSIsInN0b3JlIiwiY3JlYXRlU2xpY2UiLCJhamF4U2xpY2UiLCJiYXNlVXJsIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImxleGljYWxTbGljZSIsIm5vdGlmaWNhdGlvblNsaWNlIiwiaW1nS2V5Iiwic2V0SW1nS2V5Iiwibm90aWZ5S2VlcCIsImV2ZW50IiwiZnVuYyIsImNvbmZpZ3VyZVN0b3JlIiwibGV4aWNhbCIsIkRlbGV0ZSIsIkVkaXQiLCJBY3Rpb25zUm93IiwidXBkYXRlIiwiQ1NSRklucHV0IiwiTnVtYmVySW5wdXQiLCJDaGVja2JveCIsIlN3aXRjaElucHV0IiwiRmlsdGVyIiwiU3VjY2VzcyIsIkNsb3NlIiwidXBkYXRlU2VhcmNoIiwiYWpheERhdGEiLCJuYXZTZWFyY2giLCJzZXROYXZTZWFyY2giLCJzRmllbGRzIiwiaCIsImFjdGl2ZSIsImVsIiwiZmlsdGVyZWQiLCJzZXRWaWV3Iiwic2V0Iiwic3BsaXQiLCJOdW1iZXIiLCJzZWFyY2hIYW5kbGVDaGFuZ2UiLCJmaWVsZCIsInN0b3BQcm9wYWdhdGlvbiIsInVwZGF0ZUFycmF5RmlsdGVyIiwiYmFzaWNSZW5kZXIiLCJmaWx0ZXJSZW5kZXIiLCJzZWFyY2hGaWx0ZXIiLCJmaWx0ZXIiLCJ0b2dnbGVGaWx0ZXIiLCJjaGVja2VkIiwiSW5wdXQiLCJidG5DbHMiLCJkaXZDbHMiLCJjbGljayIsIkNoZWNrZWQiLCJjbHMiLCJDYWxlbmRhciIsIk5hdlByZXYiLCJOYXZOZXh0IiwiRGF0ZVBpY2tlciIsInNldEhvdXJzIiwiY3VyclZhbCIsImRheSIsImdldERheSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJkYXlzIiwiZHJhd0RhdGUiLCJ3ZWVrZGF5IiwicmVmIiwic2V0UmVmIiwiZGF0ZVN0YXRlIiwic2V0RGF0ZVN0YXRlIiwiZ2V0VGltZSIsIm9wZW4iLCJzZXRPcGVuIiwiY2hhbmdlRGF0ZSIsIm5EYXRlIiwic2V0RGF5cyIsImNvdW50Iiwib3V0UHV0IiwiZGlzcGxheURhdGUiLCJwdXNoIiwic2V0TW9udGgiLCJzZXRZZWFyIiwic2V0RnVsbFllYXIiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkIiwiTWF0aCIsInJhbmRvbSIsIkltYWdlRmlsZUlucHV0IiwiYWRkQ2xzIiwiYnJvd3NlIiwiaW1nQnJvd3NlIiwiaW5wQ2xzIiwiRXhwYW5kIiwiaWNvbkNscyIsInNvcnRQcm9wIiwibGFzdEV2ZW50Iiwic2V0TGFzdEV2ZW50IiwibGFuZGluZyIsImF2YWlibGUiLCJ0b2dnbGVTZWxlY3QiLCIkZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjaGFuZ2VWYWx1ZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwib25DaGFuZ2UiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUZvY3VzIiwiUmljaFRleHQiLCJzY2hlbWEiLCJjbG9zZSIsImNvbW1hbmQiLCJtRGF0YSIsInNldERhdGEiLCJlbXB0eSIsInBhciIsInZhbCIsImxhc3QiLCJyZUtleSIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCIkZ2V0U2VsZWN0aW9uIiwiJGlzUmFuZ2VTZWxlY3Rpb24iLCJGT1JNQVRfRUxFTUVOVF9DT01NQU5EIiwiJGdldFNlbGVjdGlvblN0eWxlVmFsdWVGb3JQcm9wZXJ0eSIsInVzZUxleGljYWxDb21wb3NlckNvbnRleHQiLCJCdG5Gb3JtYXRUZXh0IiwiVHh0Q2VudGVyIiwiVHh0SnVzdGlmeSIsIlR4dExlZnQiLCJUeHRSaWdodCIsIkFsaWduVGV4dCIsImRlZmF1bHRTdGF0ZSIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImp1c3RpZnkiLCJlZGl0b3IiLCJidG5TdGF0ZXMiLCJzZXRCdG5TdGF0ZXMiLCJpY29ucyIsInVwZGF0ZUJ0blN0YXRlcyIsInNlbGVjdGlvbiIsIm5vZGUiLCJhbmNob3IiLCJnZXROb2RlIiwiZ2V0VG9wTGV2ZWxFbGVtZW50IiwiZ2V0VHlwZSIsImdldFBhcmVudCIsImdldEZvcm1hdFR5cGUiLCJyZWdpc3RlclVwZGF0ZUxpc3RlbmVyIiwiZWRpdG9yU3RhdGUiLCJ0YWdzIiwicmVhZCIsIml0ZW1zRGlzcGF0Y2giLCJpdGVtcyIsImZvY3VzIiwiZGlzcGF0Y2hDb21tYW5kIiwiRk9STUFUX1RFWFRfQ09NTUFORCIsIkJvbGQiLCJJdGFsaWMiLCJTdHJpa2UiLCJTdXBlclNjcmlwdCIsIlVuZGVybGluZSIsIkZvcm1hdFRleHRHcm91cCIsImJvbGQiLCJpdGFsaWMiLCJzdXBlcnNjcmlwdCIsInVuZGVybGluZSIsInN0cmlrZXRocm91Z2giLCJwcmV2U3RhdGUiLCJnZXROb2RlcyIsImhhc0Zvcm1hdCIsIklOU0VSVF9JTUFHRV9DT01NQU5EIiwiSW1nTW9kYWwiLCIkZ2V0Tm9kZUJ5S2V5IiwiSW1nIiwiSW5zZXJ0SW1nIiwiaW1nUHJvcCIsInNldEltZ1Byb3AiLCJpbWciLCJvcGVuTW9kYWwiLCJnZXRFZGl0b3JTdGF0ZSIsInNyYyIsIl9fc3JjIiwiaXNGaWxlIiwiX19pc0ZpbGUiLCJhdEVuZCIsIl9fYXRFbmQiLCJlZGl0SW1nIiwia2V5cyIsImdldFdyaXRhYmxlIiwib3Blbkluc2VydEltZyIsImNyZWF0ZUltZyIsImFsdCIsIiRnZXROZWFyZXN0Tm9kZU9mVHlwZSIsIiRpc0xpc3RJdGVtTm9kZSIsIiRpc0xpc3ROb2RlIiwiTGlzdE5vZGUiLCJJTlNFUlRfT1JERVJFRF9MSVNUX0NPTU1BTkQiLCJJTlNFUlRfVU5PUkRFUkVEX0xJU1RfQ09NTUFORCIsIkJ1bGxldGVkTGlzdCIsIk51bWJlcmVkTGlzdCIsIkxpc3RUeXBlIiwidWwiLCJvbCIsImFuY2hvck5vZGUiLCJnZXRLZXkiLCJnZXRUb3BMZXZlbEVsZW1lbnRPclRocm93IiwiZWxlbWVudEtleSIsImVsZW1lbnRET00iLCJnZXRFbGVtZW50QnlLZXkiLCJwYXJlbnRMaXN0IiwiZ2V0VGFnIiwidW5vcmRlcmVkTGlzdCIsIm9yZGVyZWRMaXN0IiwiJHBhdGNoU3R5bGVUZXh0IiwiRHJvcGRvd24iLCJGb3JtYXRTaXplIiwiU2l6ZVRleHRHcm91cCIsImZvcm1hdCIsImRyb3BEb3duU3RhdGUiLCJzZXRERFN0YXRlcyIsImV2ZW50TG9nIiwic2V0RXZlbnRMb2ciLCJmIiwiaGFuZGxlU2VsZWN0IiwiJGV2ZW50IiwidG9nZ2xlU3RhdGUiLCJpdGVtIiwiSXRlbSIsInNlbGVjdCIsIm5vdyIsInByb3BzIiwiY2ZnIiwieG1sIiwiYnJvd3NlciIsInNldEJyb3dzZXIiLCJmaWxlcyIsInNldEZpbGVzIiwiZmlsZVN5cyIsImZpbGUiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZXRJbWciLCJEZWNvcmF0b3JOb2RlIiwiSW1hZ2UiLCJjb252ZXJ0SW1nRWxlbWVudCIsImRvbU5vZGUiLCJIVE1MSW1hZ2VFbGVtZW50IiwiYWx0VGV4dCIsIiRjcmVhdGVJbWFnZU5vZGUiLCJJbWFnZU5vZGUiLCJfX2FsdFRleHQiLCJleHBvcnRET00iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW1wb3J0RE9NIiwiY29udmVyc2lvbiIsInByaW9yaXR5IiwiY2xvbmUiLCJfX2tleSIsImNvbnN0cnVjdG9yIiwiY3JlYXRlRE9NIiwiY29uZmlnIiwic3BhbiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJ1cGRhdGVET00iLCJnZXRTcmMiLCJnZXRBbHRUZXh0IiwiZ2V0QXRFbmQiLCJzZXRBdEVuZCIsInNlbGYiLCJkZWNvcmF0ZSIsIiRpc0ltYWdlTm9kZSIsImRlY29yYXRlS2V5IiwiTGV4aWNhbENvbXBvc2VyIiwiUmljaFRleHRQbHVnaW4iLCJMaXN0UGx1Z2luIiwiTGlzdEl0ZW1Ob2RlIiwiQ29udGVudEVkaXRhYmxlIiwiSGlzdG9yeVBsdWdpbiIsIkxleGljYWxFcnJvckJvdW5kYXJ5IiwiSW1hZ2VQbHVnaW4iLCIkZ2VuZXJhdGVOb2Rlc0Zyb21ET00iLCIkZ2VuZXJhdGVIdG1sRnJvbU5vZGVzIiwiJGdldFJvb3QiLCIkaW5zZXJ0Tm9kZXMiLCIkc2V0U2VsZWN0aW9uIiwicGFyYWdyYXBoIiwidGV4dCIsInVuZGVybGluZVN0cmlrZXRocm91Z2giLCJsaXN0aXRlbSIsIkluaXRpYWxIdG1sUGx1Z2luIiwiaHRtbCIsInNldEh0bWwiLCJ1cGRhdGVNRGF0YSIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvbSIsInBhcnNlRnJvbVN0cmluZyIsIm5vZGVzIiwib25FcnJvciIsIkVkaXRvciIsImluaXRpYWxDb25maWciLCJuYW1lc3BhY2UiLCIkd3JhcE5vZGVJbkVsZW1lbnQiLCJtZXJnZVJlZ2lzdGVyIiwiJGNyZWF0ZVBhcmFncmFwaE5vZGUiLCIkaXNSb290T3JTaGFkb3dSb290IiwiQ09NTUFORF9QUklPUklUWV9FRElUT1IiLCJjcmVhdGVDb21tYW5kIiwiaGFzTm9kZXMiLCJFcnJvciIsInJlZ2lzdGVyQ29tbWFuZCIsImltZ05vZGUiLCJnZXRQYXJlbnRPclRocm93Iiwic2VsZWN0RW5kIiwiSW5mbyIsIldhcm5pbmciLCJEYW5nZXIiLCJpbmRleCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJHdWVzdCIsIk1haW4iLCJQcm92aWRlciIsIk1haW5BZG1pbiIsIkFkZCIsIkNscyIsIk5leHQiLCJQcmV2IiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJmb3JFYWNoIiwiZGVmYXVsdCIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImRlZmF1bHRfMSIsInByb3BzVmFsdWUiLCJfZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudFZhbHVlIiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJkaXNjb25uZWN0Iiwicm9vdCIsInVubW91bnQiLCJyZWFjdEVsZW1lbnQiLCJyZW5kZXIiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJidWJibGVzIiwiU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==