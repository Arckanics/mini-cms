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
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./node_modules/@symfony/ux-react/dist/render_controller.js")),
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
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./node_modules/@symfony/ux-react/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


// react


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

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
/* harmony export */   "getPropsBoolStatus": () => (/* binding */ getPropsBoolStatus),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "setBaseUrl": () => (/* binding */ setBaseUrl),
/* harmony export */   "sortAsc": () => (/* binding */ sortAsc),
/* harmony export */   "sortDes": () => (/* binding */ sortDes),
/* harmony export */   "strContains": () => (/* binding */ strContains),
/* harmony export */   "strNormalize": () => (/* binding */ strNormalize),
/* harmony export */   "updateTitle": () => (/* binding */ updateTitle)
/* harmony export */ });
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

// verifie si la variable est un objet JS

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
  }, "Footer");
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
/* harmony import */ var _icon_icon_ui_Logout_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icon/icon-ui/Logout.jsx */ "./assets/react/icon/icon-ui/Logout.jsx");
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
    className: "flex flex-col gap-2"
  }, Pages.map(({
    name,
    path
  }, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_NavLi__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      to: `/mini-admin${path}`.replace(/\/$/g, ''),
      onClick: () => {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Logout_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");






// CRUD Complet pour les Articles

const Articles = () => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
    ...axiosSet,
    params: {
      page: 'articles'
    }
  });
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.articles);
  const pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get('/request').then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'articles',
        data: res.data
      }));
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace('/mini-admin/logout');
      }
    });
    ajax.get('/request', {
      ...axiosSet,
      params: {
        page: 'pages'
      }
    }).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'pages',
        data: res.data
      }));
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace('/mini-admin/logout');
      }
    });
  }, []);
  const header = [{
    tag: 'title',
    name: 'titre',
    draw: 'string',
    colSize: 2
  }, {
    tag: 'sort',
    name: 'ordre',
    draw: 'number',
    colSize: "1-5"
  }, {
    tag: 'page',
    name: 'page',
    draw: 'object.title',
    colSize: 2
  }, {
    tag: 'published',
    name: 'visible',
    draw: 'bool',
    colSize: 1
  }, {
    tag: 'isdynamic',
    name: 'dynamique',
    draw: 'bool',
    colSize: 1
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: 'Articles'
  }, articles && pages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
    data: articles,
    header: header,
    action: null
  }));
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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui */ "./assets/react/components/admin/ui/index.js");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "text",
    label: "Compte(Email)",
    id: "email",
    value: email,
    placeholder: "adresse email...",
    inputCls: "input-txt",
    labelCls: "label",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "password",
    label: "Mot de passe",
    id: "password",
    value: password,
    placeholder: "mot de passe...",
    inputCls: "input-txt",
    labelCls: "label",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");






// CRUD Complet pour les Pages

const Pages = () => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
    ...axiosSet,
    params: {
      page: 'pages'
    }
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get('/request').then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'pages',
        data: res.data
      }));
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace('/mini-admin/logout');
      }
    });
  }, []);
  const header = [{
    tag: 'title',
    name: 'titre',
    draw: 'string',
    colSize: 4
  }, {
    tag: 'sort',
    name: 'ordre',
    draw: 'number',
    colSize: "1-5"
  }, {
    tag: 'settings',
    name: 'landing',
    draw: 'bool',
    colSize: 2
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: 'Pages'
  }, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
    data: data,
    header: header,
    action: null
  }));
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
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");







// RUD complet pour les options de site

const Settings = () => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_5__["default"].create({
    ...axiosSet
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.data.settings);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const [change, setChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [initialState, setInitialState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get('/request').then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
        name: 'settings',
        data: res.data
      }));
      setInitialState({
        ...res.data
      });
    }).catch(res => {
      const status = res.response.status;
      if (status === 302) {
        location.replace('/mini-admin/logout');
      }
    });
  }, []);
  const changeName = v => {
    switch (v) {
      case 'Author':
        return 'auteur';
      case 'Description':
        return 'description';
      case 'SiteName':
        return 'nom du site';
      case 'Landing':
        return 'page d\'accueil';
      default:
        return '';
    }
  };
  const handleChange = (e, prop) => {
    const nData = {
      ...data,
      [prop]: e.target.value
    };
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
      name: 'settings',
      data: nData
    }));
    console.log((0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.areEqual)(initialState, nData));
    !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.areEqual)(initialState, nData) ? setChange(true) : setChange(false);
  };
  const setLanding = v => {
    const nData = {
      ...data,
      Landing: v
    };
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
      name: 'settings',
      data: nData
    }));
    console.log((0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.areEqual)(initialState, nData));
    !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.areEqual)(initialState, nData) ? setChange(true) : setChange(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: 'Paramètres'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-3 py-3 justify-between"
  }, data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "text",
    onChange: e => handleChange(e, 'Author'),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(changeName("Author")),
    id: "Author",
    value: data.Author,
    placeholder: changeName("Author"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "text",
    onChange: e => handleChange(e, 'Description'),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(changeName("Description")),
    id: "Description",
    value: data.Description,
    placeholder: changeName("Description"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.TxtLabelInput, {
    type: "text",
    onChange: e => handleChange(e, 'SiteName'),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(changeName("SiteName")),
    id: "SiteName",
    value: data.SiteName,
    placeholder: changeName("SiteName"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.Selector, {
    cls: "secondary",
    iconCls: "icon",
    active: data.Landing,
    list: data.Pages,
    action: setLanding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "block py-2"
  }, "Page"))) : null, change && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
    btnCls: 'btn secondary fadeInLeft',
    divCls: "p-2 flex justify-end"
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
/* harmony export */   "notificationSlice": () => (/* reexport safe */ _notificationSlice__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _ajaxSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _notificationSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");




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
        timeout: timeout
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
    notification: _reducers__WEBPACK_IMPORTED_MODULE_0__.notificationSlice
  }
}));

/***/ }),

/***/ "./assets/react/components/admin/ui/Button.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/components/admin/ui/Button.jsx ***!
  \*****************************************************/
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
  divCls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: divCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnCls
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

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

/***/ "./assets/react/components/admin/ui/Checkbox.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/components/admin/ui/Checkbox.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Checked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon-ui/Checked */ "./assets/react/icon/icon-ui/Checked.jsx");


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
/* harmony import */ var _icon_icon_ui_Success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icon/icon-ui/Success */ "./assets/react/icon/icon-ui/Success.jsx");
/* harmony import */ var _icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icon/icon-ui/Close */ "./assets/react/icon/icon-ui/Close.jsx");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NumberInput */ "./assets/react/components/admin/ui/NumberInput.jsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Checkbox */ "./assets/react/components/admin/ui/Checkbox.jsx");
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwitchInput */ "./assets/react/components/admin/ui/SwitchInput.jsx");








const ContentNav = ({
  header,
  data
}) => {
  const [search, updateSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ajaxData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.data);
  const setPagesSelectable = () => {
    let lastPage = null;
    const pages = [];
    data.map(r => {
      r.page !== lastPage ? pages.push(r.page) : null;
      lastPage = r.pages;
    });
    return [...pages];
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // initiation des filtres
    const sFields = {};
    header.map(h => sFields[h.tag] = h.tag !== "page" ? {
      value: h.draw === "number" ? 0 : h.draw.match(/^bool/) ? false : "",
      active: false
    } : setPagesSelectable());
    updateSearch({
      ...sFields
    });
  }, []);

  // format les donnée pour affichage
  const setView = (value, set = 'value', tag) => {
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split('.')[set.split('.').length - 1];
        return (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(ajaxData[`${tag}s`][Number(value) - 1][name]);
      case new RegExp(/^bool/g).test(set):
        return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Success__WEBPACK_IMPORTED_MODULE_3__["default"], {
          cls: "h-6 w-6 m-auto icon success"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_4__["default"], {
          cls: "h-6 w-6 m-auto icon false"
        });
      case new RegExp(/^num/g).test(set):
      case new RegExp(/^str/g).test(set):
      default:
        return typeof value === 'string' ? (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(value) : value;
    }
  };

  // update des filtres de recherches
  const searchHandleChange = (e, field, value) => {
    e.stopPropagation();
    switch (field) {
      case 'sort':
        value = value < 0 || value == '' ? 0 : value > data.length - 1 ? data.length - 1 : value;
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
    className: `row-field colsize-2`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)('actions'))));

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
          case 'string':
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
        className: `row-field colsize-2`
      }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)('actions')));
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
    className: `header-field colsize-2`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)('actions'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-nav-search"
  }, search ? header.map((h, k) => {
    let Input;
    switch (true) {
      case new RegExp(/^num/gi).test(h.draw):
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NumberInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          cls: `secondary colsize-10`,
          inpCls: "input-number secondary",
          change: (e, value) => searchHandleChange(e, h.tag, value),
          value: Number(search[h.tag].value),
          name: h.name
        });
        break;
      case new RegExp(/^bool/gi).test(h.draw):
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwitchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          cls: "secondary",
          value: search[h.tag].value,
          change: e => searchHandleChange(e, h.tag, !search[h.tag].value)
        });
        break;
      case new RegExp(/^obj/gi).test(h.draw):
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Work");
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      cls: "secondary",
      checked: search[h.tag].active,
      change: e => toggleFilter(e, h.tag)
    }), Input);
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-2`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-inner flex flex-col overflow-auto overflow-x-hidden"
  }, !search || search && !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.getPropsBoolStatus)(search, "active", true) ? data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? basicRender(data) : null : data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? filterRender(data) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentNav);

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

/***/ "./assets/react/components/admin/ui/NumberInput.jsx":
/*!**********************************************************!*\
  !*** ./assets/react/components/admin/ui/NumberInput.jsx ***!
  \**********************************************************/
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

/***/ "./assets/react/components/admin/ui/Selector.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/components/admin/ui/Selector.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Expand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon-ui/Expand */ "./assets/react/icon/icon-ui/Expand.jsx");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");



const Selector = ({
  cls,
  list,
  active,
  iconCls,
  children,
  action
}) => {
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lastEvent, setLastEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const landing = list.find(i => i.id === active);
  const avaible = list.filter(i => i.id !== active);
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
    toggleSelect(e);
    action(v);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: cls ? 'selector ' + cls : 'selector',
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
  }, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ "./assets/react/components/admin/ui/SwitchInput.jsx":
/*!**********************************************************!*\
  !*** ./assets/react/components/admin/ui/SwitchInput.jsx ***!
  \**********************************************************/
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
    className: 'input-switch' + (value ? ' true' : ' false') + ` ${cls}`,
    onClick: e => change(e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-switch-button"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchInput);

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

/***/ "./assets/react/components/admin/ui/TxtLabelInput.jsx":
/*!************************************************************!*\
  !*** ./assets/react/components/admin/ui/TxtLabelInput.jsx ***!
  \************************************************************/
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: id,
    className: labelCls
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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

/***/ "./assets/react/components/admin/ui/index.js":
/*!***************************************************!*\
  !*** ./assets/react/components/admin/ui/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CSRFInput": () => (/* reexport safe */ _CSRFInput__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "ContentNav": () => (/* reexport safe */ _ContentNav__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "NavLi": () => (/* reexport safe */ _NavLi__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NumberInput": () => (/* reexport safe */ _NumberInput__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PagesContainer": () => (/* reexport safe */ _PagesContainer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Selector": () => (/* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SwitchInput": () => (/* reexport safe */ _SwitchInput__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "Toast": () => (/* reexport safe */ _Toast__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "TxtLabelInput": () => (/* reexport safe */ _TxtLabelInput__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./assets/react/components/admin/ui/Button.jsx");
/* harmony import */ var _ContentNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentNav */ "./assets/react/components/admin/ui/ContentNav.jsx");
/* harmony import */ var _CSRFInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSRFInput */ "./assets/react/components/admin/ui/CSRFInput.jsx");
/* harmony import */ var _NavLi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLi */ "./assets/react/components/admin/ui/NavLi.jsx");
/* harmony import */ var _PagesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagesContainer */ "./assets/react/components/admin/ui/PagesContainer.jsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Selector */ "./assets/react/components/admin/ui/Selector.jsx");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Toast */ "./assets/react/components/admin/ui/Toast.jsx");
/* harmony import */ var _TxtLabelInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TxtLabelInput */ "./assets/react/components/admin/ui/TxtLabelInput.jsx");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NumberInput */ "./assets/react/components/admin/ui/NumberInput.jsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Checkbox */ "./assets/react/components/admin/ui/Checkbox.jsx");
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SwitchInput */ "./assets/react/components/admin/ui/SwitchInput.jsx");













/***/ }),

/***/ "./assets/react/components/helloWorld.jsx":
/*!************************************************!*\
  !*** ./assets/react/components/helloWorld.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Hw extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello World");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hw);

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
/* harmony import */ var _components_helloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/helloWorld */ "./assets/react/components/helloWorld.jsx");



// Index Root Component

const Main = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helloWorld__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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





const MainAdmin = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _components_admin_redux__WEBPACK_IMPORTED_MODULE_2__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainAdmin);

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

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_symfony_stimulus--bc7798"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxnQkFDekU7SUFBTSxDQUFDLEVBQUM7RUFBc2lCLEVBQUcsQ0FDN2lCO0FBRVYsQ0FBQztBQUVELGlFQUFlbUQsT0FBTzs7Ozs7Ozs7Ozs7O0FDVnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9DU1JGSW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ2hlY2tib3guanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ29udGVudE5hdi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OdW1iZXJJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9QYWdlc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Td2l0Y2hJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Ub2FzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRMYWJlbElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvaGVsbG9Xb3JsZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0NoZWNrZWQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DbG9zZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Rhbmdlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0V4cGFuZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0luZm8uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9Mb2dvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvV2FybmluZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCIsXG5cdFwiLi9tYWluX2FkbWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIlxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke2V4dC5sZW5ndGggPiAwID8gXCIvXCIgOiBudWxsfSR7ZXh0fWBcclxufVxyXG5cclxuLy8gbmV0dG9pZSBsJ3VybCBmb3VybmlcclxuXHJcbmNvbnN0IGNsZWFuUGF0aCA9IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvJHxcXC8kLywgJycpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuLy8gY2hhbmdlIGxlIHRpdHJlIGRhbnMgbCdvbmdsZXRcclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBkb2N1bWVudC50aXRsZSA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyBjYXBpdGFsaXplKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyB0cm91dmUgdW5lIGV4cHJlc3Npb24gcsOpZ3VsacOocmVcclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG4vLyBub3JtYWxpemUgdW4gc3RyaW5nIHBvdXIgZmlsdHJlXHJcblxyXG5jb25zdCBzdHJOb3JtYWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgY29uc3QgdGVzdCA9IChsLHJlZykgPT4gbmV3IFJlZ0V4cChyZWcpLnRlc3QobClcclxuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXmEtel0vZywgKHcpID0+IHtcclxuICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSB0ZXN0KHcgLC/Do3zDoHzDoXzDonzDpC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OofMOpfMOqfMOrL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6x8w618w658w68vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiaVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DtXzDsnzDs3zDtHzDti9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O5fMO6fMO7fMO8L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw718w78vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwieVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DsS9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJuXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8WTL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm9lXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OmL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImFlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OnL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImNcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw58vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwic3NcIlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gd1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyB0cm91dmVyIHVuZSBwcm9wcyBib29sw6llbiAodnJhaSBvdSBmYXV4KSBkYW5zIHVuIG9iamV0IHJlY3Vyc2lmXHJcblxyXG5jb25zdCBnZXRQcm9wc0Jvb2xTdGF0dXMgPSAob2JqLCBwcm9wLCBib29sU3RhdGUpID0+IHtcclxuXHJcbiAgaWYgKG9ialtwcm9wXSkge1xyXG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gYm9vbFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBba2V5LHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIGlmIChnZXRQcm9wc0Jvb2xTdGF0dXModmFsdWUsIHByb3AsIGJvb2xTdGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLy8gY29tcGFyZSBkZXV4IG9iamV0cyBKUyAodG91dCB0eXBlcylcclxuXHJcbmNvbnN0IGFyZUVxdWFsID0gKG9iajEsb2JqMikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygb2JqMSAhPT0gdHlwZW9mIG9iajIpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgaWYgKG9iajEubGVuZ3RoICE9PSBvYmoyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2ldLG9iajJbaV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpKSB7XHJcbiAgICBjb25zdCBlbnQxID0gT2JqZWN0LmVudHJpZXMob2JqMSlcclxuICAgIGNvbnN0IGVudDIgPSBPYmplY3QuZW50cmllcyhvYmoyKVxyXG4gICAgaWYgKGVudDEubGVuZ3RoICE9PSBlbnQyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iajEpKSB7XHJcbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIGlzRGVmaW5lZChvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2tleV0sb2JqMltrZXldKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIG9iajEgPT09IG9iajJcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgZMOpZmluaWVcclxuXHJcbmNvbnN0IGlzRGVmaW5lZCA9IChvYmopID0+IG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZFxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gSlNPTiB2YWxpZGVcclxuXHJcbmNvbnN0IGlzSlNPTiA9IChqc29uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIEpTT04ucGFyc2UoanNvbilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBvYmpldCBKU1xyXG5cclxuY29uc3QgaXNPYmplY3QgPSAob2JqZWN0KSA9PiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmICFpc0FycmF5KG9iamVjdClcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIFRhYmxlYXV4IFxyXG5cclxuY29uc3QgaXNBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KVxyXG59XHJcblxyXG5jb25zdCBzb3J0QXNjID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPCBiLnNvcnQgPyAtMSA6IGEuc29ydCA+IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmNvbnN0IHNvcnREZXMgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA+IGIuc29ydCA/IC0xIDogYS5zb3J0IDwgYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgc2V0QmFzZVVybCwgXHJcbiAgY2FwaXRhbGl6ZSwgXHJcbiAgdXBkYXRlVGl0bGUsIFxyXG4gIGVuZE9mUGF0aCwgXHJcbiAgc3RyQ29udGFpbnMsIFxyXG4gIGNsZWFuUGF0aCwgXHJcbiAgaXNKU09OLCBcclxuICBpc0FycmF5LCBcclxuICBhcmVFcXVhbCwgXHJcbiAgc29ydEFzYywgXHJcbiAgc29ydERlcyxcclxuICBnZXRQcm9wc0Jvb2xTdGF0dXMsXHJcbiAgc3RyTm9ybWFsaXplLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPSdhZG1pbi1mb290ZXInPkZvb3RlcjwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdWknXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgeyBQYWdlcywgU2V0dGluZ3MsIEFydGljbGVzLCBMb2dpbiB9IGZyb20gJy4vcGFnZXMnXHJcblxyXG5jb25zdCBNZW51ID0gW1xyXG4gIHtuYW1lOiBcIlBhcmFtZXRyZXNcIiwgcGF0aDogXCIvXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wiLCBQYWdlOiBQYWdlc30sXHJcbiAge25hbWU6IFwiQXJ0aWNsZXNcIiwgcGF0aDogXCIvYXJ0aWNsZXNcIiwgUGFnZTogQXJ0aWNsZXN9LFxyXG5dXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LnVybClcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cmwgPT09IFwiXCIgPyBkaXNwYXRjaChzZXRVcmwoXCJcIikpIDogbnVsbFxyXG4gICAgbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyQvLCAnJykgPyBuYXYoY2xlYW5QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSkgOiB1bmRlZmluZWRcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibGF5b3V0XCI+XHJcbiAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9J21pbmktYWRtaW4vbG9naW4nIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIE1lbnUubWFwKCh7cGF0aCxQYWdlfSxpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUga2V5PXtpfSBwYXRoPXtgbWluaS1hZG1pbiR7cGF0aH1gfSBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBQYWdlcz17TWVudX0gLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8UGFnZSB1cmw9e3BhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDxUb2FzdC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi91aS9OYXZMaSdcclxuaW1wb3J0IExvZ291dCBmcm9tICcuLi8uLi9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCdcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2xlYXJEYXRhLCBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7UGFnZXN9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRFbmFibGUodHJ1ZSlcclxuICAgIH0sIDUwKVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICAgIGRpc3BhdGNoKGNsZWFyRGF0YSgpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSduYXZiYXInIGNsYXNzTmFtZT17IWVuYWJsZSA/ICdmYWRlT3V0TGVmdCcgOiAnJ30+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibmF2YmFyLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5NaW5pLUNNUzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHtuYW1lLHBhdGh9LGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPE5hdkxpIGtleT17aX0gdG89e2AvbWluaS1hZG1pbiR7cGF0aH1gLnJlcGxhY2UoL1xcLyQvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlVGl0bGUocGF0aCk7IGRpc3BhdGNoKHNldFVybChwYXRoKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXR4dCc+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaT59KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bmF2IGlkPVwibmF2LW9wdHNcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdpY29uLW5hdic+XHJcbiAgICAgICAgICA8TmF2TGkgdG89XCIvbWluaS1hZG1pbi9sb2dvdXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PjxMb2dvdXQgQ2xzPVwic3ZnLWljb25cIiAvPjwvTmF2TGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIEFydGljbGVzXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ2FydGljbGVzJ319KVxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdhcnRpY2xlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcsIHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ3BhZ2VzJ319KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAncGFnZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnL21pbmktYWRtaW4vbG9nb3V0JylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAge3RhZzogJ3RpdGxlJywgbmFtZTogJ3RpdHJlJywgZHJhdzogJ3N0cmluZycsIGNvbFNpemU6IDJ9LFxyXG4gICAge3RhZzogJ3NvcnQnLCBuYW1lOiAnb3JkcmUnLCBkcmF3OiAnbnVtYmVyJywgY29sU2l6ZTogXCIxLTVcIn0sXHJcbiAgICB7dGFnOiAncGFnZScsIG5hbWU6ICdwYWdlJywgZHJhdzogJ29iamVjdC50aXRsZScsIGNvbFNpemU6IDJ9LFxyXG4gICAge3RhZzogJ3B1Ymxpc2hlZCcsIG5hbWU6ICd2aXNpYmxlJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdpc2R5bmFtaWMnLCBuYW1lOiAnZHluYW1pcXVlJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J0FydGljbGVzJ30+XHJcbiAgICAgIHsgKGFydGljbGVzICYmIHBhZ2VzKSAmJiA8Q29udGVudE5hdiBkYXRhPXthcnRpY2xlc30gaGVhZGVyPXtoZWFkZXJ9IGFjdGlvbj17bnVsbH0gLz4gfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgVHh0TGFiZWxJbnB1dCB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0VXJsIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBub3RpZnksIG5vdGlmeUNsb3NlIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRlclxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICAvLyByZWR1eCAtIGFqYXhcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBYTUxTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uWE1MU2V0LmF4aW9zfSlcclxuICAvLyByZWR1eCAtIE5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IGxpZmV0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24ubGlmZSlcclxuICAvLyBzdGF0ZVxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gdGltZW91dFZhclxyXG4gIGxldCBibHVyVGltZW91dCA9IG51bGxcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGJsdXJUaW1lb3V0ID0gYmx1clRpbWVvdXQgIT09IG51bGwgPyBjbGVhclRpbWVvdXQoYmx1clRpbWVvdXQpIDogc2V0VGltZW91dCgoKSA9PiBlLm5hdGl2ZUV2ZW50LnN1Ym1pdHRlci5ibHVyKCksIDUwMClcclxuICAgIGFqYXgucG9zdCgnL2xvZ2luJywgeyAuLi5zdGF0ZSB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSByZXMuZGF0YS51cmwgPT09IFwiL1wiID8gYCR7WE1MU2V0Lm5hdlVSTH1gIDogYCR7WE1MU2V0Lm5hdlVSTH0vJHtyZXMuZGF0YS51cmx9YFxyXG4gICAgICAgIGRpc3BhdGNoKHNldFVybChcIlwiKSlcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJpbmZvXCIsIFxyXG4gICAgICAgICAgbXNnOiBgQmllbnZlbnVlICR7c3RhdGUuZW1haWx9YCxcclxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIGxpZmV0aW1lKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHNldENvbm5lY3RlZCh0cnVlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9Pm5hdihjbGVhblBhdGgodXJsKSksNDAwKVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIiwgXHJcbiAgICAgICAgICBtc2c6IFwiY29ubmVjdGlvbiBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBuYXYoYCR7WE1MU2V0Lm5hdlVSTH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT17J3JvdW5kZWQtbGcgYmctd2hpdGUgY29sb3ItZGFyaycrKGlzQ29ubmVjdGVkID8gJyBjb25uZWN0ZWQnOm51bGwpfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNvbXB0ZShFbWFpbClcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cImFkcmVzc2UgZW1haWwuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIm1vdCBkZSBwYXNzZS4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGRpdkNscz0ncHQtMSBwLTQnXHJcbiAgICAgIGJ0bkNscz0nYnRuIHByaW1hcnkgdy1mdWxsJ1xyXG4gICAgPk1lIENvbm5lY3RlcjwvQnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIFBhZ2VzXHJcblxyXG5jb25zdCBQYWdlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ3BhZ2VzJ319KVxyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7dGFnOiAndGl0bGUnLCBuYW1lOiAndGl0cmUnLCBkcmF3OiAnc3RyaW5nJywgY29sU2l6ZTogNH0sXHJcbiAgICB7dGFnOiAnc29ydCcsIG5hbWU6ICdvcmRyZScsIGRyYXc6ICdudW1iZXInLCBjb2xTaXplOiBcIjEtNVwifSxcclxuICAgIHt0YWc6ICdzZXR0aW5ncycsIG5hbWU6ICdsYW5kaW5nJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAyfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J1BhZ2VzJ30+XHJcbiAgICAgIHsgZGF0YSAmJiA8Q29udGVudE5hdiBkYXRhPXtkYXRhfSBoZWFkZXI9e2hlYWRlcn0gYWN0aW9uPXtudWxsfSAvPiB9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXMiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFBhZ2VzQ29udGFpbmVyLCBTZWxlY3RvciwgVHh0TGFiZWxJbnB1dCB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyBhcmVFcXVhbCwgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gUlVEIGNvbXBsZXQgcG91ciBsZXMgb3B0aW9ucyBkZSBzaXRlXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsgLi4uYXhpb3NTZXQgfSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuc2V0dGluZ3MpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2NoYW5nZSwgc2V0Q2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgICAgICBzZXRJbml0aWFsU3RhdGUoeyAuLi5yZXMuZGF0YSB9KVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gKHYpID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlICdBdXRob3InOlxyXG4gICAgICAgIHJldHVybiAnYXV0ZXVyJztcclxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxyXG4gICAgICAgIHJldHVybiAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjYXNlICdTaXRlTmFtZSc6XHJcbiAgICAgICAgcmV0dXJuICdub20gZHUgc2l0ZSc7XHJcbiAgICAgIGNhc2UgJ0xhbmRpbmcnOlxyXG4gICAgICAgIHJldHVybiAncGFnZSBkXFwnYWNjdWVpbCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHByb3ApID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBbcHJvcF06IGUudGFyZ2V0LnZhbHVlIH1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRMYW5kaW5nID0gKHYpID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBMYW5kaW5nOiB2IH1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFyYW3DqHRyZXMnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgPyA8PlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdBdXRob3InKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9IGlkPVwiQXV0aG9yXCIgdmFsdWU9e2RhdGEuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0Rlc2NyaXB0aW9uJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9IGlkPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZGF0YS5EZXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ1NpdGVOYW1lJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKSl9IGlkPVwiU2l0ZU5hbWVcIiB2YWx1ZT17ZGF0YS5TaXRlTmFtZX0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RvciBjbHM9J3NlY29uZGFyeScgaWNvbkNscz0naWNvbicgYWN0aXZlPXtkYXRhLkxhbmRpbmd9IGxpc3Q9e2RhdGEuUGFnZXN9IGFjdGlvbj17c2V0TGFuZGluZ30+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+UGFnZTwvaDI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0b3I+XHJcbiAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYW5nZSAmJiA8QnV0dG9uIGJ0bkNscz17J2J0biBzZWNvbmRhcnkgZmFkZUluTGVmdCd9IGRpdkNscz17XCJwLTIgZmxleCBqdXN0aWZ5LWVuZFwifT5TYXV2ZWdhcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3MiLCJpbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcclxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuL0FydGljbGVzXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmV4cG9ydCB7IFBhZ2VzLCBBcnRpY2xlcywgU2V0dGluZ3MsIExvZ2luIH0iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBjbGVhblBhdGgsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHNldEJhc2VVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFqYXhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYWpheCcsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYmFzZVVybDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgbmF2VVJMOiBcIi9taW5pLWFkbWluXCIsXHJcbiAgICBheGlvczoge1xyXG4gICAgICBiYXNlVVJMOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IGFqYXhTbGljZSBmcm9tIFwiLi9hamF4U2xpY2VcIjtcclxuaW1wb3J0IG5vdGlmaWNhdGlvblNsaWNlIGZyb20gXCIuL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG5leHBvcnQgeyBhamF4U2xpY2UsIG5vdGlmaWNhdGlvblNsaWNlIH0iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJub3RpZmljYXRpb25cIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIG1zZzogXCJcIixcclxuICAgIHN0YXR1czogXCJvdXRcIixcclxuICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgdGltZW91dDogbnVsbCxcclxuICAgIGxpZmU6IDQwMDBcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBub3RpZnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGNvbnN0IHt0eXBlLG1zZyx0aW1lb3V0fSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgc3RhdHVzIDogXCJpblwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5S2VlcDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qge2V2ZW50LCBmdW5jfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGlmIChldmVudCA9PT0gXCJzdGF5XCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBmdW5jLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlDbG9zZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICBzdGF0dXM6ICdvdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBub3RpZnksIG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gPSBub3RpZmljYXRpb25TbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25TbGljZSwgYWpheFNsaWNlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYWpheDogYWpheFNsaWNlLFxyXG4gICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25TbGljZVxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ1NSRklucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiB2YWx1ZT17Z2V0VG9rZW4oKX0gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENTUkZJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZWNrZWQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0NoZWNrZWQnXHJcblxyXG5jb25zdCBDaGVja2JveCA9ICh7IGNscywgY2hhbmdlLCBjaGVja2VkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0LWNoZWNrYm94IFwiICsgY2xzfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgeyBjaGVja2VkID8gPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LXRydWUnPjxDaGVja2VkIC8+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LWZhbHNlJz48L2Rpdj4gfVxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3giLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBnZXRQcm9wc0Jvb2xTdGF0dXMsIGlzQXJyYXksIHN0ck5vcm1hbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSAnLi9OdW1iZXJJbnB1dCdcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXHJcbmltcG9ydCBTd2l0Y2hJbnB1dCBmcm9tICcuL1N3aXRjaElucHV0J1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbnROYXYgPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHVwZGF0ZVNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBhamF4RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhKVxyXG5cclxuICBjb25zdCBzZXRQYWdlc1NlbGVjdGFibGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgbGFzdFBhZ2UgPSBudWxsXHJcbiAgICBjb25zdCBwYWdlcyA9IFtdXHJcbiAgICBkYXRhLm1hcChyID0+IHtcclxuICAgICAgci5wYWdlICE9PSBsYXN0UGFnZSA/IHBhZ2VzLnB1c2goci5wYWdlKSA6IG51bGxcclxuICAgICAgbGFzdFBhZ2UgPSByLnBhZ2VzXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5wYWdlc11cclxuICB9XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaW5pdGlhdGlvbiBkZXMgZmlsdHJlc1xyXG4gICAgY29uc3Qgc0ZpZWxkcyA9IHt9XHJcbiAgICBoZWFkZXIubWFwKChoKSA9PiBcclxuICAgICAgc0ZpZWxkc1toLnRhZ10gPSBoLnRhZyAhPT0gXCJwYWdlXCIgP1xyXG4gICAgICB7IHZhbHVlOiBoLmRyYXcgPT09IFwibnVtYmVyXCIgPyAwIDogaC5kcmF3Lm1hdGNoKC9eYm9vbC8pID8gZmFsc2UgOiBcIlwiLCBhY3RpdmU6IGZhbHNlIH0gOlxyXG4gICAgICBzZXRQYWdlc1NlbGVjdGFibGUoKVxyXG4gICAgICApXHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zRmllbGRzIH0pO1xyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBmb3JtYXQgbGVzIGRvbm7DqWUgcG91ciBhZmZpY2hhZ2VcclxuICBjb25zdCBzZXRWaWV3ID0gKHZhbHVlLCBzZXQgPSAndmFsdWUnLCB0YWcpID0+IHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmplY3RcXC4uKy9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzZXQuc3BsaXQoJy4nKVtzZXQuc3BsaXQoJy4nKS5sZW5ndGggLSAxXVxyXG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKGFqYXhEYXRhW2Ake3RhZ31zYF1bTnVtYmVyKHZhbHVlKSAtIDFdW25hbWVdKVxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyA8U3VjY2VzcyBjbHM9J2gtNiB3LTYgbS1hdXRvIGljb24gc3VjY2VzcycgLz4gOiA8Q2xvc2UgY2xzPSdoLTYgdy02IG0tYXV0byBpY29uIGZhbHNlJyAvPlxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZykudGVzdChzZXQpOlxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15zdHIvZykudGVzdChzZXQpOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gY2FwaXRhbGl6ZSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIHVwZGF0ZSBkZXMgZmlsdHJlcyBkZSByZWNoZXJjaGVzXHJcbiAgY29uc3Qgc2VhcmNoSGFuZGxlQ2hhbmdlID0gKGUsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlICdzb3J0JzpcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PSAnJyA/IDAgOiB2YWx1ZSA+IGRhdGEubGVuZ3RoIC0gMSA/IGRhdGEubGVuZ3RoIC0gMSA6IHZhbHVlXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zZWFyY2gsIFtmaWVsZF06IHsgLi4uc2VhcmNoW2ZpZWxkXSwgdmFsdWU6IHZhbHVlIH0gfSlcclxuICB9XHJcblxyXG5cclxuICAvLyByZW5kdSBzYW5zIGZpbHRyZXNcclxuICBjb25zdCBiYXNpY1JlbmRlciA9IChkYXRhKSA9PiBkYXRhLm1hcCgoZmllbGQsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J2NvbnRlbnQtcm93Jz5cclxuICAgIHtcclxuICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfTwvZGl2PilcclxuICAgIH1cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtMmB9PntjYXBpdGFsaXplKCdhY3Rpb25zJyl9PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG5cclxuICAvLyByZW5kdSBhdmVjIGZpbHRyZXNcclxuICBjb25zdCBmaWx0ZXJSZW5kZXIgPSAoZGF0YSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEZpbHRlciA9IHt9XHJcblxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2VhcmNoKSkge1xyXG4gICAgICBpZiAodi5hY3RpdmUpIHtcclxuICAgICAgICBzZWFyY2hGaWx0ZXJba10gPSB2LnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNlYXJjaEZpbHRlcikpIHtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2KSB7XHJcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICBpZiAoIXN0ck5vcm1hbGl6ZShmaWVsZFtrXSkubWF0Y2goc3RyTm9ybWFsaXplKHYpKSAmJiB2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICBpZiAodiAhPT0gZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgaWYgKHYgPT09IHRydWUgJiYgIWZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodiA9PT0gZmFsc2UgJiYgZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J2NvbnRlbnQtcm93Jz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfTwvZGl2PilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtMmB9PntjYXBpdGFsaXplKCdhY3Rpb25zJyl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIGFjdGl2ZSB1biBmaWx0cmUgKHNlbG9uIGNpYmxlIHV0aWxpc2F0ZXVyKVxyXG4gIGNvbnN0IHRvZ2dsZUZpbHRlciA9IChlLCBjaGVja2VkKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc2VhcmNoLCBbY2hlY2tlZF06IHsgLi4uc2VhcmNoW2NoZWNrZWRdLCBhY3RpdmU6ICFzZWFyY2hbY2hlY2tlZF0uYWN0aXZlIH0gfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2LWhlYWRlcic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyLm1hcCgoaCwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfWB9PntjYXBpdGFsaXplKGgubmFtZSl9PC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLTJgfT57Y2FwaXRhbGl6ZSgnYWN0aW9ucycpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2LXNlYXJjaCc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VhcmNoID9cclxuICAgICAgICAgICAgaGVhZGVyLm1hcCgoaCwgaykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBJbnB1dDtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm51bS9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNscz17YHNlY29uZGFyeSBjb2xzaXplLTEwYH1cclxuICAgICAgICAgICAgICAgICAgICBpbnBDbHM9XCJpbnB1dC1udW1iZXIgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCB2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e051bWJlcihzZWFyY2hbaC50YWddLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtoLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxTd2l0Y2hJbnB1dCAgY2xzPSdzZWNvbmRhcnknIHZhbHVlPXtzZWFyY2hbaC50YWddLnZhbHVlfSBjaGFuZ2U9eyhlKSA9PiBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsICFzZWFyY2hbaC50YWddLnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmovZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSA8ZGl2Pldvcms8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2lucHV0LXR4dCBzZWNvbmRhcnkgY29sc2l6ZS0xMCcgb25DaGFuZ2U9eyhlKSA9PiBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsIGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9e2NhcGl0YWxpemUoaC5uYW1lKX0gdmFsdWU9e3NlYXJjaFtoLnRhZ10udmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHNlYXJjaC1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfSBmbGV4IGp1c3RpZnktaXRlbXMtc3RyZXRjaCBmbGV4LW5vd3JhcGB9PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNscz0nc2Vjb25kYXJ5JyBjaGVja2VkPXtzZWFyY2hbaC50YWddLmFjdGl2ZX0gY2hhbmdlPXsoZSkgPT4gdG9nZ2xlRmlsdGVyKGUsIGgudGFnKX0gLz5cclxuICAgICAgICAgICAgICAgIHtJbnB1dH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfSkgOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMmB9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWlubmVyIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy14LWhpZGRlbic+XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICFzZWFyY2ggfHwgc2VhcmNoICYmICFnZXRQcm9wc0Jvb2xTdGF0dXMoc2VhcmNoLCBcImFjdGl2ZVwiLCB0cnVlKSA/XHJcbiAgICAgICAgICAgIGRhdGEgJiYgaXNBcnJheShkYXRhKSA/IGJhc2ljUmVuZGVyKGRhdGEpIDogbnVsbFxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGRhdGEgJiYgaXNBcnJheShkYXRhKSA/IGZpbHRlclJlbmRlcihkYXRhKSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE5hdiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSAoeyBjbHMsIGlucENscywgY2hhbmdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgKyAnIGlucHV0LW51bWJlci13cmFwIGZsZXggZmxleC1ub3dyYXAgcmVsYXRpdmUnfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cImRvd25cIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUsdmFsdWUtMSl9ID4tPC9zcGFuPjxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT17aW5wQ2xzICsgJyBjb2xzaXplLTEwJ30gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2UoZSwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dmFsdWV9IC8+PHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cInVwXCIgb25DbGljaz17KGUpID0+IGNoYW5nZShlLHZhbHVlKzEpfT4rPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFBhZ2VzQ29udGFpbmVyID0gKHtjaGlsZHJlbiAsIHRpdGxlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+e3RpdGxlfTwvZGl2PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250YWluZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEV4cGFuZCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRXhwYW5kJ1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmNvbnN0IFNlbGVjdG9yID0gKHsgY2xzLCBsaXN0LCBhY3RpdmUsIGljb25DbHMsIGNoaWxkcmVuLCBhY3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbGFzdEV2ZW50LCBzZXRMYXN0RXZlbnRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgbGFuZGluZyA9IGxpc3QuZmluZChpID0+IGkuaWQgPT09IGFjdGl2ZSlcclxuICBjb25zdCBhdmFpYmxlID0gbGlzdC5maWx0ZXIoaSA9PiBpLmlkICE9PSBhY3RpdmUpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0ICRlbCA9IGUudGFyZ2V0XHJcbiAgICB3aGlsZSAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0b3InKSA9PSBmYWxzZSkge1xyXG4gICAgICAkZWwgPSAkZWwucGFyZW50Tm9kZVxyXG4gICAgfVxyXG4gICAgaWYgKChlLnR5cGUgPT09ICdjbGljaycgJiYgbGFzdEV2ZW50ID09PSAnY2xpY2snKSB8fCBlLnR5cGUgIT09ICdjbGljaycpIHtcclxuICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICAgIGxhc3RFdmVudCA9PT0gJ2NsaWNrJyAmJiB0b2dnbGUgPT09IHRydWUgPyAkZWwuYmx1cigpIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHNldExhc3RFdmVudChlLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZSx2KSA9PiB7XHJcbiAgICB0b2dnbGVTZWxlY3QoZSk7XHJcbiAgICBhY3Rpb24odik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzID8gJ3NlbGVjdG9yICcgKyBjbHMgOiAnc2VsZWN0b3InfSBvbkZvY3VzPXt0b2dnbGVTZWxlY3R9IG9uQmx1cj17dG9nZ2xlU2VsZWN0fSB0YWJJbmRleD17LTF9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdCBhY3RpdmUnIHZhbHVlPXtsYW5kaW5nLmlkfSBvbkNsaWNrPXt0b2dnbGUgPyB0b2dnbGVTZWxlY3QgOiBudWxsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZShsYW5kaW5nLnRpdGxlKX08L2Rpdj48RXhwYW5kIGNscz17aWNvbkNsc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRvZ2dsZSA/IDxkaXYgY2xhc3NOYW1lPSdvcHQtd3JhcHBlcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YWlibGUubWFwKCh7aWQsdGl0bGV9LGspID0+IFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J29wdCcgdmFsdWU9e2lkfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmFsdWUoZSxpZCl9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKHRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvciIsIi8vIHVpIGJvb2xlYW4gcmVwcmVzZW50YXRpb25cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN3aXRjaElucHV0ID0gKHsgY2xzID0gXCJcIiwgdmFsdWUsIGNoYW5nZSB9KSA9PiB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnaW5wdXQtc3dpdGNoJyArICh2YWx1ZSA/ICcgdHJ1ZSc6ICcgZmFsc2UnKSArIGAgJHtjbHN9YH0gb25DbGljaz17KGUpID0+IGNoYW5nZShlKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1zd2l0Y2gtYnV0dG9uJz48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoSW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0luZm8nXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvV2FybmluZydcclxuaW1wb3J0IERhbmdlciBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGFuZ2VyJ1xyXG5pbXBvcnQgeyBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbXNnLCB0eXBlLCBzdGF0dXMgfSA9IGRhdGFcclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgICdJbmZvJzogPEluZm8gY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1N1Y2Nlc3MnOiA8U3VjY2VzcyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnV2FybmluZyc6IDxXYXJuaW5nIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdEYW5nZXInOiA8RGFuZ2VyIGNscz1cImgtNSB3LTVcIiAvPixcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgJHt0eXBlfSAke3N0YXR1c31gfSBvbk1vdXNlRW50ZXI9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnc3RheSd9KSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdjbG9zZScsIGZ1bmM6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDE0MDApfSkgKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlLWljb24nPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uc1tjYXBpdGFsaXplKHR5cGUpXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1idG4nPjxidXR0b24gb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJoLTUgdy01XCIgLz48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1jb250ZW50Jz5cclxuICAgICAgICB7IG1zZyB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0TGFiZWxJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRMYWJlbElucHV0IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi9Db250ZW50TmF2J1xyXG5pbXBvcnQgQ1NSRklucHV0IGZyb20gJy4vQ1NSRklucHV0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi9OYXZMaSdcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4vUGFnZXNDb250YWluZXInXHJcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuL1NlbGVjdG9yJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCdcclxuaW1wb3J0IFR4dExhYmVsSW5wdXQgZnJvbSAnLi9UeHRMYWJlbElucHV0J1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSAnLi9OdW1iZXJJbnB1dCdcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXHJcbmltcG9ydCBTd2l0Y2hJbnB1dCBmcm9tICcuL1N3aXRjaElucHV0J1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGVudE5hdixcclxuICBDU1JGSW5wdXQsXHJcbiAgTmF2TGksXHJcbiAgUGFnZXNDb250YWluZXIsXHJcbiAgU2VsZWN0b3IsXHJcbiAgVG9hc3QsXHJcbiAgVHh0TGFiZWxJbnB1dCxcclxuICBOdW1iZXJJbnB1dCxcclxuICBDaGVja2JveCxcclxuICBTd2l0Y2hJbnB1dFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgSHcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gPGgxPkhlbGxvIFdvcmxkPC9oMT5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh3IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgSGVsbG8gZnJvbSAnLi4vY29tcG9uZW50cy9oZWxsb1dvcmxkJztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIlxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9hZG1pbi9yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY29uc3QgTWFpbkFkbWluID0gKCkgPT5cclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BZG1pbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENoZWNrZWQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xOC45IDM1LjFxLS4zIDAtLjU1LS4xLS4yNS0uMS0uNS0uMzVMOC44IDI1LjZxLS40NS0uNDUtLjQ1LTEuMSAwLS42NS40NS0xLjEuNDUtLjQ1IDEuMDUtLjQ1LjYgMCAxLjA1LjQ1bDggOCAxOC4xNS0xOC4xNXEuNDUtLjQ1IDEuMDc1LS40NXQxLjA3NS40NXEuNDUuNDUuNDUgMS4wNzVUMzkuMiAxNS40TDE5Ljk1IDM0LjY1cS0uMjUuMjUtLjUuMzUtLjI1LjEtLjU1LjFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2VkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2xvc2UgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjE4IDI3MCA4MjhxLTkgOS0yMSA5dC0yMS05cS05LTktOS0yMXQ5LTIxbDIxMC0yMTAtMjEwLTIxMHEtOS05LTktMjF0OS0yMXE5LTkgMjEtOXQyMSA5bDIxMCAyMTAgMjEwLTIxMHE5LTkgMjEtOXQyMSA5cTkgOSA5IDIxdC05IDIxTDUyMiA1NzZsMjEwIDIxMHE5IDkgOSAyMXQtOSAyMXEtOSA5LTIxIDl0LTIxLTlMNDgwIDYxOFpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERhbmdlciA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTcuNzUgNDJxLS42IDAtMS4xNzUtLjI1LS41NzUtLjI1LS45NzUtLjY1bC04LjctOC43cS0uNC0uNC0uNjUtLjk3NVQ2IDMwLjI1di0xMi41cTAtLjYuMjUtMS4xNzUuMjUtLjU3NS42NS0uOTc1bDguNy04LjdxLjQtLjQuOTc1LS42NVQxNy43NSA2aDEyLjVxLjYgMCAxLjE3NS4yNS41NzUuMjUuOTc1LjY1bDguNyA4LjdxLjQuNC42NS45NzVUNDIgMTcuNzV2MTIuNXEwIC42LS4yNSAxLjE3NS0uMjUuNTc1LS42NS45NzVsLTguNyA4LjdxLS40LjQtLjk3NS42NVQzMC4yNSA0MlpNMjQgMzMuOTVxLjcgMCAxLjIyNS0uNTI1LjUyNS0uNTI1LjUyNS0xLjIyNSAwLS43LS41MjUtMS4yMjVRMjQuNyAzMC40NSAyNCAzMC40NXEtLjcgMC0xLjIyNS41MjUtLjUyNS41MjUtLjUyNSAxLjIyNSAwIC43LjUyNSAxLjIyNS41MjUuNTI1IDEuMjI1LjUyNVptMC03LjJxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTUuMXEwLS42NS0uNDI1LTEuMDc1UTI0LjY1IDEzLjYgMjQgMTMuNnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2MTAuMTVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wk0xNy43NSAzOWgxMi41TDM5IDMwLjI1di0xMi41TDMwLjI1IDloLTEyLjVMOSAxNy43NXYxMi41Wk0yNCAyNFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhbmdlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEV4cGFuZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDcxMSAyNDAgNDcxbDQzLTQzIDE5NyAxOTggMTk3LTE5NyA0MyA0My0yNDAgMjM5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW5mbyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTI0LjE1IDM0cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di05LjA1cTAtLjYtLjQ1LTEuMDI1UTI0Ljc1IDIyIDI0LjE1IDIycS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY5LjA1cTAgLjYuNDUgMS4wMjUuNDUuNDI1IDEuMDUuNDI1Wk0yNCAxOC4zcS43IDAgMS4xNzUtLjQ1LjQ3NS0uNDUuNDc1LTEuMTV0LS40NzUtMS4yUTI0LjcgMTUgMjQgMTVxLS43IDAtMS4xNzUuNS0uNDc1LjUtLjQ3NSAxLjJ0LjQ3NSAxLjE1cS40NzUuNDUgMS4xNzUuNDVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3IDAgMTItNXQ1LTEycTAtNy01LTEyVDI0IDdxLTcgMC0xMiA1VDcgMjRxMCA3IDUgMTJ0MTIgNVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBMb2dvdXQgPSAoeyBDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Q2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk04Ljc1IDQyLjVxLTEuNDUgMC0yLjU1LTEuMS0xLjEtMS4xLTEuMS0yLjU1VjkuMTVxMC0xLjQ1IDEuMS0yLjU1IDEuMS0xLjEgMi41NS0xLjFoMTQuN3YzLjY1SDguNzV2MjkuN2gxNC43djMuNjVabTI0LjUtOC43NS0yLjctMi42NSA1LjMtNS4zaC0xNy4zdi0zLjY1aDE3LjJsLTUuMy01LjMgMi43LTIuNiA5LjggOS44WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3VjY2VzcyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwibTIxLjA1IDI4LjU1LTQuOS00LjlxLS40NS0uNDUtMS4xLS40NS0uNjUgMC0xLjE1LjUtLjUuNS0uNSAxLjE1IDAgLjY1LjUgMS4xbDYuMSA2LjFxLjQ1LjQ1IDEuMDUuNDUuNiAwIDEuMDUtLjQ1bDEyLTEycS40NS0uNDUuNDI1LTEuMS0uMDI1LS42NS0uNDc1LTEuMS0uNDUtLjUtMS4xMjUtLjV0LTEuMTc1LjVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3LjI1IDAgMTIuMTI1LTQuODc1VDQxIDI0cTAtNy4yNS00Ljg3NS0xMi4xMjVUMjQgN3EtNy4yNSAwLTEyLjEyNSA0Ljg3NVQ3IDI0cTAgNy4yNSA0Ljg3NSAxMi4xMjVUMjQgNDFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgV2FybmluZyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNC42IDQycS0uNDUgMC0uNzc1LS4ydC0uNTI1LS41NXEtLjItLjM1LS4yMjUtLjcyNS0uMDI1LS4zNzUuMjI1LS43NzVsMTkuNC0zMy41cS4yNS0uNC41NzUtLjU3NVEyMy42IDUuNSAyNCA1LjVxLjQgMCAuNzI1LjE3NS4zMjUuMTc1LjU3NS41NzVsMTkuNCAzMy41cS4yNS40LjIyNS43NzUtLjAyNS4zNzUtLjIyNS43MjV0LS41MjUuNTVxLS4zMjUuMi0uNzc1LjJabTIuNi0zaDMzLjZMMjQgMTBabTE3LTIuODVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzUgMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjVRMjIuNyAzNCAyMi43IDM0LjY1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptMC01LjU1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di04LjJxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY4LjJxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0tLjItNi4xWlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhcm5pbmciLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwicmVwbGFjZSIsImNhcGl0YWxpemUiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJlbmRPZlBhdGgiLCJsYXN0SW5kZXhPZiIsInVwZGF0ZVRpdGxlIiwibiIsImRvY3VtZW50IiwidGl0bGUiLCJzdHJDb250YWlucyIsInN0ciIsInNlYXJjaCIsInJlIiwiUmVnRXhwIiwic3RyTm9ybWFsaXplIiwidGVzdCIsImwiLCJyZWciLCJ3IiwiZ2V0UHJvcHNCb29sU3RhdHVzIiwib2JqIiwicHJvcCIsImJvb2xTdGF0ZSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImlzT2JqZWN0IiwiYXJlRXF1YWwiLCJvYmoxIiwib2JqMiIsImlzQXJyYXkiLCJpIiwiZW50MSIsImVudDIiLCJpc0RlZmluZWQiLCJ1bmRlZmluZWQiLCJpc0pTT04iLCJqc29uIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0IiwiYXJyYXkiLCJBcnJheSIsInNvcnRBc2MiLCJhIiwiYiIsInNvcnQiLCJzb3J0RGVzIiwiUmVhY3QiLCJDb250ZW50IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJnZXRUb2tlbiIsInRva2VuIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZU5hdmlnYXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlRvYXN0Iiwic2V0VXJsIiwiUGFnZXMiLCJTZXR0aW5ncyIsIkFydGljbGVzIiwiTG9naW4iLCJNZW51IiwibmFtZSIsIlBhZ2UiLCJMYXlvdXQiLCJ1cmwiLCJzdGF0ZSIsImFqYXgiLCJuYXYiLCJkaXNwYXRjaCIsInBhdGhuYW1lIiwibWF0Y2giLCJtYXAiLCJ1c2VTdGF0ZSIsIk5hdkxpIiwiTG9nb3V0IiwidXNlTG9jYXRpb24iLCJjbGVhckRhdGEiLCJlbmFibGUiLCJzZXRFbmFibGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTG9nb3V0IiwiUGFnZXNDb250YWluZXIiLCJDb250ZW50TmF2IiwicHVzaERhdGEiLCJheGlvcyIsImF4aW9zU2V0IiwiY3JlYXRlIiwicGFyYW1zIiwicGFnZSIsImFydGljbGVzIiwiZGF0YSIsInBhZ2VzIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwic3RhdHVzIiwicmVzcG9uc2UiLCJoZWFkZXIiLCJ0YWciLCJkcmF3IiwiY29sU2l6ZSIsIkJ1dHRvbiIsIlR4dExhYmVsSW5wdXQiLCJub3RpZnkiLCJub3RpZnlDbG9zZSIsIlhNTFNldCIsImxpZmV0aW1lIiwibm90aWZpY2F0aW9uIiwibGlmZSIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIl90b2tlbiIsImlzQ29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwiYmx1clRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjbGVhclRpbWVvdXQiLCJuYXRpdmVFdmVudCIsInN1Ym1pdHRlciIsImJsdXIiLCJwb3N0IiwibmF2VVJMIiwidHlwZSIsIm1zZyIsInRpbWVvdXQiLCJTZWxlY3RvciIsInNldHRpbmdzIiwiY2hhbmdlIiwic2V0Q2hhbmdlIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiY2hhbmdlTmFtZSIsInYiLCJuRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRMYW5kaW5nIiwiTGFuZGluZyIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJzdG9yZSIsImNyZWF0ZVNsaWNlIiwiYWpheFNsaWNlIiwiYmFzZVVybCIsImJhc2VVUkwiLCJoZWFkZXJzIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJub3RpZmljYXRpb25TbGljZSIsIm5vdGlmeUtlZXAiLCJldmVudCIsImZ1bmMiLCJjb25maWd1cmVTdG9yZSIsImJ0bkNscyIsImRpdkNscyIsIkNTUkZJbnB1dCIsIkNoZWNrZWQiLCJDaGVja2JveCIsImNscyIsImNoZWNrZWQiLCJTdWNjZXNzIiwiQ2xvc2UiLCJOdW1iZXJJbnB1dCIsIlN3aXRjaElucHV0IiwidXBkYXRlU2VhcmNoIiwiYWpheERhdGEiLCJzZXRQYWdlc1NlbGVjdGFibGUiLCJsYXN0UGFnZSIsInIiLCJwdXNoIiwic0ZpZWxkcyIsImgiLCJhY3RpdmUiLCJzZXRWaWV3Iiwic2V0Iiwic3BsaXQiLCJOdW1iZXIiLCJzZWFyY2hIYW5kbGVDaGFuZ2UiLCJmaWVsZCIsInN0b3BQcm9wYWdhdGlvbiIsImJhc2ljUmVuZGVyIiwiayIsImZpbHRlclJlbmRlciIsInNlYXJjaEZpbHRlciIsInRvZ2dsZUZpbHRlciIsIklucHV0IiwiTmF2TGluayIsInRvIiwib25DbGljayIsImlucENscyIsIkV4cGFuZCIsImxpc3QiLCJpY29uQ2xzIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibGFzdEV2ZW50Iiwic2V0TGFzdEV2ZW50IiwibGFuZGluZyIsImZpbmQiLCJpZCIsImF2YWlibGUiLCJmaWx0ZXIiLCJ0b2dnbGVTZWxlY3QiLCIkZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjaGFuZ2VWYWx1ZSIsIkluZm8iLCJXYXJuaW5nIiwiRGFuZ2VyIiwiaWNvbnMiLCJjbG9zZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwib25DaGFuZ2UiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUZvY3VzIiwiQ29tcG9uZW50IiwiSHciLCJyZW5kZXIiLCJIZWxsbyIsIk1haW4iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUHJvdmlkZXIiLCJNYWluQWRtaW4iLCJDbHMiXSwic291cmNlUm9vdCI6IiJ9