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
  const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    enable: false,
    data: null,
    title: ''
  });
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
  const closeModal = () => {
    setModal({
      ...modal,
      enable: false
    });
  };
  const updateArticle = id => {
    setModal({
      ...modal,
      enable: true,
      title: 'Modifier'
    });
  };
  const removeArticle = id => {
    console.log(id);
  };
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
  }, articles && pages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
    data: articles,
    header: header,
    update: updateArticle,
    remove: removeArticle
  }) : null,
  // fenêtre d'édition et création des articles
  modal.enable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ModalEditor, {
    data: modal.data,
    title: modal.title,
    close: closeModal,
    schema: {
      title: {
        type: "string",
        name: "Titre"
      },
      pages: {
        type: 'select',
        name: "Page",
        draw: "title"
      },
      publishbegin: {
        type: 'date',
        name: "Début",
        draw: "title"
      },
      publishend: {
        type: 'date',
        name: "Fin",
        draw: "title"
      },
      published: {
        type: "bool",
        name: 'Visible'
      },
      isdynamic: {
        type: "bool",
        name: 'Dynamique'
      },
      sort: {
        type: "sorting",
        name: 'Ordre',
        list: articles
      },
      content: {
        type: "text",
        name: 'Contenu'
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
  const updatePage = id => {
    console.log(id);
  };
  const removePage = id => {
    console.log(id);
  };
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
  }, data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
    data: data,
    header: header,
    update: updatePage,
    remove: removePage
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./assets/react/components/admin/ui/index.js");









const ContentNav = ({
  header,
  data,
  update,
  remove,
  create
}) => {
  const [search, updateSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ajaxData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.data);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_8__.ActionsRow, {
    id: k,
    update: update,
    remove: remove
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_8__.ActionsRow, {
        id: k,
        update: updateContent
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
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_8__.Selector, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
      cls: "secondary",
      checked: search[h.tag].active,
      change: e => toggleFilter(e, h.tag)
    }), Input);
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-2`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-inner "
  }, !search || search && !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.getPropsBoolStatus)(search, "active", true) ? data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? basicRender(data) : null : data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? filterRender(data) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentNav);

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
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selector */ "./assets/react/components/admin/ui/Selector.jsx");
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchInput */ "./assets/react/components/admin/ui/SwitchInput.jsx");




const ModalEditor = ({
  data,
  schema,
  title,
  close
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "modal-editor"
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
  }, Object.entries(schema).map(([key, value], i) => {
    let Input;
    switch (value.type) {
      case 'string':
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          className: "input-txt secondary",
          type: "text",
          value: data ? data[key] : null,
          placeholder: value.name
        }));
        break;
      case 'bool':
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwitchInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
          value: data ? data[key] : false
        }));
        break;
      case 'sorting':
        console.log(value);
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Selector__WEBPACK_IMPORTED_MODULE_2__["default"], {
          cls: 'secondary p-0',
          iconCls: 'icon',
          list: value.list,
          active: data ? data[key] : value.list[0].id
        }));
        break;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "modal-field"
    }, Input);
  })));
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

  // mise en place de l'élément actif par défaut (prop active obligatoire)
  const landing = list.find(i => i.id === active);
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
/* harmony export */   "ActionsRow": () => (/* reexport safe */ _ActionsRow__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "CSRFInput": () => (/* reexport safe */ _CSRFInput__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Checkbox": () => (/* reexport safe */ _Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "ContentNav": () => (/* reexport safe */ _ContentNav__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ModalEditor": () => (/* reexport safe */ _ModalEditor__WEBPACK_IMPORTED_MODULE_12__["default"]),
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
/* harmony import */ var _ActionsRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ActionsRow */ "./assets/react/components/admin/ui/ActionsRow.jsx");
/* harmony import */ var _ModalEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalEditor */ "./assets/react/components/admin/ui/ModalEditor.jsx");















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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsZ0JBQ3pFO0lBQU0sQ0FBQyxFQUFDO0VBQXlMLEVBQUUsQ0FDL0w7QUFFVixDQUFDO0FBRUQsaUVBQWV4TCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZJO0FBRXpCLE1BQU1tSCxPQUFPLEdBQUcsQ0FBQztFQUFFRjtBQUFJLENBQUMsS0FBSztFQUMzQixvQkFDRTtJQUFNLFNBQVMsRUFBR0EsR0FBSztJQUFDLEtBQUssRUFBQyw0QkFBNEI7SUFBQyxPQUFPLEVBQUM7RUFBVyxnQkFDNUU7SUFBTSxDQUFDLEVBQUM7RUFBK2pCLEVBQUUsQ0FDcmtCO0FBRVYsQ0FBQztBQUVELGlFQUFlRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZHO0FBRXpCLE1BQU1pRCxPQUFPLEdBQUcsQ0FBQztFQUFFbkQ7QUFBSSxDQUFDLEtBQUs7RUFDM0Isb0JBQ0U7SUFBSyxTQUFTLEVBQUVBLEdBQUk7SUFBQyxLQUFLLEVBQUMsNEJBQTRCO0lBQUMsT0FBTyxFQUFDO0VBQVcsZ0JBQ3pFO0lBQU0sQ0FBQyxFQUFDO0VBQXNpQixFQUFHLENBQzdpQjtBQUVWLENBQUM7QUFFRCxpRUFBZW1ELE9BQU87Ozs7Ozs7Ozs7OztBQ1Z0QiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmktY21zLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L0Z1bmN0aW9ucy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9GdW5jdGlvbnMvU2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9MYXlvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0FydGljbGVzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL1BhZ2VzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9BY3Rpb25zUm93LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9DU1JGSW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ2hlY2tib3guanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ29udGVudE5hdi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Nb2RhbEVkaXRvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OdW1iZXJJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9QYWdlc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Td2l0Y2hJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Ub2FzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRMYWJlbElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvaGVsbG9Xb3JsZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0NoZWNrZWQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DbG9zZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Rhbmdlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0RlbGV0ZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0VkaXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9FeHBhbmQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9JbmZvLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvU3VjY2Vzcy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1dhcm5pbmcuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiLFxuXHRcIi4vbWFpbl9hZG1pbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJcclxuLy8gdXJsIGRlIGJhc2UgcG91ciBmYWNpbGl0ZXIgbGEgbmF2aWdhdGlvblxyXG5cclxuY29uc3Qgc2V0QmFzZVVybCA9IChleHQgPSBcIlwiKSA9PiB7XHJcbiAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtleHQubGVuZ3RoID4gMCA/IFwiL1wiIDogbnVsbH0ke2V4dH1gXHJcbn1cclxuXHJcbi8vIG5ldHRvaWUgbCd1cmwgZm91cm5pXHJcblxyXG5jb25zdCBjbGVhblBhdGggPSBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcLyR8XFwvJC8sICcnKS5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxyXG5cclxuLy8gcHJlbWnDqHJlIGxldHRyZSBlbiBtYWp1c2N1bGVcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAodHh0KSA9PiB7XHJcbiAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbi8vIG9idGVuaXIgbCd1cmwgcmVsYXRpdmVcclxuXHJcbmNvbnN0IGVuZE9mUGF0aCA9IChwYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguc2xpY2UocGF0aC5sYXN0SW5kZXhPZignXFwvJykpXHJcbn1cclxuXHJcbi8vIGNoYW5nZSBsZSB0aXRyZSBkYW5zIGwnb25nbGV0XHJcblxyXG5jb25zdCB1cGRhdGVUaXRsZSA9IChuKSA9PiB7XHJcbiAgbiA9IG4ucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgZG9jdW1lbnQudGl0bGUgPSBgTWluaS1DTVMgLT4gJHsobi5sZW5ndGggPiAwID8gY2FwaXRhbGl6ZShuKSA6IFwiU2V0dGluZ3NcIil9YFxyXG4gIHJldHVybjtcclxufVxyXG5cclxuLy8gdHJvdXZlIHVuZSBleHByZXNzaW9uIHLDqWd1bGnDqHJlXHJcblxyXG5jb25zdCBzdHJDb250YWlucyA9IChzdHIsIHNlYXJjaCkgPT4ge1xyXG4gIGxldCByZSA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpXHJcbiAgcmV0dXJuIHN0ci5zZWFyY2gocmUpID49IDAgPyB0cnVlIDogZmFsc2VcclxufVxyXG5cclxuLy8gbm9ybWFsaXplIHVuIHN0cmluZyBwb3VyIGZpbHRyZVxyXG5cclxuY29uc3Qgc3RyTm9ybWFsaXplID0gKHN0cikgPT4ge1xyXG4gIGNvbnN0IHRlc3QgPSAobCxyZWcpID0+IG5ldyBSZWdFeHAocmVnKS50ZXN0KGwpXHJcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpXHJcbiAgICAucmVwbGFjZSgvW15hLXpdL2csICh3KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgdGVzdCh3ICwvw6N8w6B8w6F8w6J8w6QvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiYVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DqHzDqXzDqnzDqy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OsfMOtfMOufMOvL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7V8w7J8w7N8w7R8w7YvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwib1wiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DuXzDunzDu3zDvC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJ1XCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O9fMO/L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7EvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiblwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Fky9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpi9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJjXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OfL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInNzXCJcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHdcclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gdHJvdXZlciB1bmUgcHJvcHMgYm9vbMOpZW4gKHZyYWkgb3UgZmF1eCkgZGFucyB1biBvYmpldCByZWN1cnNpZlxyXG5cclxuY29uc3QgZ2V0UHJvcHNCb29sU3RhdHVzID0gKG9iaiwgcHJvcCwgYm9vbFN0YXRlKSA9PiB7XHJcblxyXG4gIGlmIChvYmpbcHJvcF0pIHtcclxuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IGJvb2xTdGF0ZTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW2tleSx2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBpZiAoZ2V0UHJvcHNCb29sU3RhdHVzKHZhbHVlLCBwcm9wLCBib29sU3RhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8vIGNvbXBhcmUgZGV1eCBvYmpldHMgSlMgKHRvdXQgdHlwZXMpXHJcblxyXG5jb25zdCBhcmVFcXVhbCA9IChvYmoxLG9iajIpID0+IHtcclxuICBpZiAodHlwZW9mIG9iajEgIT09IHR5cGVvZiBvYmoyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJlRXF1YWwob2JqMVtpXSxvYmoyW2ldKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSkge1xyXG4gICAgY29uc3QgZW50MSA9IE9iamVjdC5lbnRyaWVzKG9iajEpXHJcbiAgICBjb25zdCBlbnQyID0gT2JqZWN0LmVudHJpZXMob2JqMilcclxuICAgIGlmIChlbnQxLmxlbmd0aCAhPT0gZW50Mi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmoxKSkge1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQob2JqMltrZXldKSkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwob2JqMVtrZXldLG9iajJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBvYmoxID09PSBvYmoyXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IGTDqWZpbmllXHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSAob2JqKSA9PiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWRcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gb2JqZXQgSlNcclxuXHJcbmNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4gdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiAhaXNBcnJheShvYmplY3QpXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBUYWJsZWF1eCBcclxuXHJcbmNvbnN0IGlzQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSlcclxufVxyXG5cclxuY29uc3Qgc29ydEFzYyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0IDwgYi5zb3J0ID8gLTEgOiBhLnNvcnQgPiBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5jb25zdCBzb3J0RGVzID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPiBiLnNvcnQgPyAtMSA6IGEuc29ydCA8IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gIHNldEJhc2VVcmwsIFxyXG4gIGNhcGl0YWxpemUsIFxyXG4gIHVwZGF0ZVRpdGxlLCBcclxuICBlbmRPZlBhdGgsIFxyXG4gIHN0ckNvbnRhaW5zLCBcclxuICBjbGVhblBhdGgsIFxyXG4gIGlzSlNPTiwgXHJcbiAgaXNBcnJheSwgXHJcbiAgYXJlRXF1YWwsIFxyXG4gIHNvcnRBc2MsIFxyXG4gIHNvcnREZXMsXHJcbiAgZ2V0UHJvcHNCb29sU3RhdHVzLFxyXG4gIHN0ck5vcm1hbGl6ZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3VpJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgUGFnZXMsIFNldHRpbmdzLCBBcnRpY2xlcywgTG9naW4gfSBmcm9tICcuL3BhZ2VzJ1xyXG5cclxuY29uc3QgTWVudSA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiUGFnZXNcIiwgcGF0aDogXCIvcGFnZXNcIiwgUGFnZTogUGFnZXN9LFxyXG4gIHtuYW1lOiBcIkFydGljbGVzXCIsIHBhdGg6IFwiL2FydGljbGVzXCIsIFBhZ2U6IEFydGljbGVzfSxcclxuXVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC51cmwpXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXJsID09PSBcIlwiID8gZGlzcGF0Y2goc2V0VXJsKFwiXCIpKSA6IG51bGxcclxuICAgIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogdW5kZWZpbmVkXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBNZW51Lm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e01lbnV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2UgdXJsPXtwYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8VG9hc3QvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpL0xvZ291dC5qc3gnXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNsZWFyRGF0YSwgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe1BhZ2VzfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RW5hYmxlKHRydWUpXHJcbiAgICB9LCA1MClcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKG4pXHJcbiAgICBkaXNwYXRjaChjbGVhckRhdGEoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBkaXNwYXRjaChzZXRVcmwocGF0aCkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay10eHQnPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGk+fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYsIE1vZGFsRWRpdG9yIH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIEFydGljbGVzXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ2FydGljbGVzJ319KVxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHtlbmFibGU6IGZhbHNlLCBkYXRhOiBudWxsLCB0aXRsZTogJyd9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheC5nZXQoJy9yZXF1ZXN0JylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ2FydGljbGVzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYWpheC5nZXQoJy9yZXF1ZXN0Jywgey4uLmF4aW9zU2V0LCBwYXJhbXM6IHtwYWdlOiAncGFnZXMnfX0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoey4uLm1vZGFsLCBlbmFibGU6IGZhbHNlfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFydGljbGUgPSAoaWQpID0+IHtcclxuICAgIHNldE1vZGFsKHsuLi5tb2RhbCwgZW5hYmxlOiB0cnVlLCB0aXRsZTogJ01vZGlmaWVyJ30pXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVBcnRpY2xlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7dGFnOiAndGl0bGUnLCBuYW1lOiAndGl0cmUnLCBkcmF3OiAnc3RyaW5nJywgY29sU2l6ZTogMn0sXHJcbiAgICB7dGFnOiAnc29ydCcsIG5hbWU6ICdvcmRyZScsIGRyYXc6ICdudW1iZXInLCBjb2xTaXplOiBcIjEtNVwifSxcclxuICAgIHt0YWc6ICdwYWdlJywgbmFtZTogJ3BhZ2UnLCBkcmF3OiAnb2JqZWN0LnRpdGxlJywgY29sU2l6ZTogMn0sXHJcbiAgICB7dGFnOiAncHVibGlzaGVkJywgbmFtZTogJ3Zpc2libGUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9LFxyXG4gICAge3RhZzogJ2lzZHluYW1pYycsIG5hbWU6ICdkeW5hbWlxdWUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnQXJ0aWNsZXMnfT5cclxuICAgICAgeyBhcnRpY2xlcyAmJiBwYWdlcyA/IDxDb250ZW50TmF2IFxyXG4gICAgICAgIGRhdGE9e2FydGljbGVzfSBoZWFkZXI9e2hlYWRlcn0gXHJcbiAgICAgICAgdXBkYXRlPXt1cGRhdGVBcnRpY2xlfSByZW1vdmU9e3JlbW92ZUFydGljbGV9IFxyXG4gICAgICAgIC8+IFxyXG4gICAgICAgIDogXHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICAvLyBmZW7DqnRyZSBkJ8OpZGl0aW9uIGV0IGNyw6lhdGlvbiBkZXMgYXJ0aWNsZXNcclxuICAgICAgICBtb2RhbC5lbmFibGUgPyBcclxuICAgICAgICA8TW9kYWxFZGl0b3IgZGF0YT17bW9kYWwuZGF0YX0gdGl0bGU9e21vZGFsLnRpdGxlfSBjbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIHNjaGVtYT17XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aXRsZToge3R5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiVGl0cmVcIn0sXHJcbiAgICAgICAgICAgICAgcGFnZXM6IHt0eXBlOiAnc2VsZWN0JywgbmFtZTogXCJQYWdlXCIsIGRyYXc6IFwidGl0bGVcIn0sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGJlZ2luOiB7dHlwZTogJ2RhdGUnLCBuYW1lOiBcIkTDqWJ1dFwiLCBkcmF3OiBcInRpdGxlXCJ9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlbmQ6IHt0eXBlOiAnZGF0ZScsIG5hbWU6IFwiRmluXCIsIGRyYXc6IFwidGl0bGVcIn0sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkOiB7dHlwZTogXCJib29sXCIsIG5hbWU6ICdWaXNpYmxlJ30sXHJcbiAgICAgICAgICAgICAgaXNkeW5hbWljOiB7dHlwZTogXCJib29sXCIsIG5hbWU6ICdEeW5hbWlxdWUnfSxcclxuICAgICAgICAgICAgICBzb3J0OiB7dHlwZTogXCJzb3J0aW5nXCIsIG5hbWU6ICdPcmRyZScsIGxpc3Q6IGFydGljbGVzfSxcclxuICAgICAgICAgICAgICBjb250ZW50OiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6ICdDb250ZW51J30sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gLz4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFR4dExhYmVsSW5wdXQgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9GdW5jdGlvbnMvU2VjdXJpdHknXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAvLyByb3V0ZXJcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgLy8gcmVkdXggLSBhamF4XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgWE1MU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4KVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLlhNTFNldC5heGlvc30pXHJcbiAgLy8gcmVkdXggLSBOb3RpZmljYXRpb25cclxuICBjb25zdCBsaWZldGltZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uLmxpZmUpXHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICBfdG9rZW46IGdldFRva2VuKCksXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIHRpbWVvdXRWYXJcclxuICBsZXQgYmx1clRpbWVvdXQgPSBudWxsXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBibHVyVGltZW91dCA9IGJsdXJUaW1lb3V0ICE9PSBudWxsID8gY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KSA6IHNldFRpbWVvdXQoKCkgPT4gZS5uYXRpdmVFdmVudC5zdWJtaXR0ZXIuYmx1cigpLCA1MDApXHJcbiAgICBhamF4LnBvc3QoJy9sb2dpbicsIHsgLi4uc3RhdGUgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gcmVzLmRhdGEudXJsID09PSBcIi9cIiA/IGAke1hNTFNldC5uYXZVUkx9YCA6IGAke1hNTFNldC5uYXZVUkx9LyR7cmVzLmRhdGEudXJsfWBcclxuICAgICAgICBkaXNwYXRjaChzZXRVcmwoXCJcIikpXHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLCBcclxuICAgICAgICAgIG1zZzogYEJpZW52ZW51ZSAke3N0YXRlLmVtYWlsfWAsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRDb25uZWN0ZWQodHJ1ZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5uYXYoY2xlYW5QYXRoKHVybCkpLDQwMClcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsIFxyXG4gICAgICAgICAgbXNnOiBcImNvbm5lY3Rpb24gaW5jb3JyZWN0ZVwiLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbmF2KGAke1hNTFNldC5uYXZVUkx9L2xvZ2luYClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBzdGF0ZVxyXG5cclxuICByZXR1cm4gPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwibG9naW5cIiBjbGFzc05hbWU9eydyb3VuZGVkLWxnIGJnLXdoaXRlIGNvbG9yLWRhcmsnKyhpc0Nvbm5lY3RlZCA/ICcgY29ubmVjdGVkJzpudWxsKX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+Q29ubmV4aW9uPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtY2xlYXItb3V0bGluZSc+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiTW90IGRlIHBhc3NlXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJtb3QgZGUgcGFzc2UuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBkaXZDbHM9J3B0LTEgcC00J1xyXG4gICAgICBidG5DbHM9J2J0biBwcmltYXJ5IHctZnVsbCdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcbi8vIENSVUQgQ29tcGxldCBwb3VyIGxlcyBQYWdlc1xyXG5cclxuY29uc3QgUGFnZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXQsIHBhcmFtczoge3BhZ2U6ICdwYWdlcyd9fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4LmdldCgnL3JlcXVlc3QnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAncGFnZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnL21pbmktYWRtaW4vbG9nb3V0JylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgdXBkYXRlUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAge3RhZzogJ3RpdGxlJywgbmFtZTogJ3RpdHJlJywgZHJhdzogJ3N0cmluZycsIGNvbFNpemU6IDR9LFxyXG4gICAge3RhZzogJ3NvcnQnLCBuYW1lOiAnb3JkcmUnLCBkcmF3OiAnbnVtYmVyJywgY29sU2l6ZTogXCIxLTVcIn0sXHJcbiAgICB7dGFnOiAnc2V0dGluZ3MnLCBuYW1lOiAnbGFuZGluZycsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMn1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYWdlcyd9PlxyXG4gICAgICB7ZGF0YSA/IDxDb250ZW50TmF2IFxyXG4gICAgICAgIGRhdGE9e2RhdGF9IGhlYWRlcj17aGVhZGVyfSBcclxuICAgICAgICB1cGRhdGU9e3VwZGF0ZVBhZ2V9IHJlbW92ZT17cmVtb3ZlUGFnZX0gXHJcbiAgICAgICAgLz5cclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXMiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFBhZ2VzQ29udGFpbmVyLCBTZWxlY3RvciwgVHh0TGFiZWxJbnB1dCB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyBhcmVFcXVhbCwgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gUlVEIGNvbXBsZXQgcG91ciBsZXMgb3B0aW9ucyBkZSBzaXRlXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsgLi4uYXhpb3NTZXQgfSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuc2V0dGluZ3MpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2NoYW5nZSwgc2V0Q2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgICAgICBzZXRJbml0aWFsU3RhdGUoeyAuLi5yZXMuZGF0YSB9KVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gKHYpID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlICdBdXRob3InOlxyXG4gICAgICAgIHJldHVybiAnYXV0ZXVyJztcclxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxyXG4gICAgICAgIHJldHVybiAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjYXNlICdTaXRlTmFtZSc6XHJcbiAgICAgICAgcmV0dXJuICdub20gZHUgc2l0ZSc7XHJcbiAgICAgIGNhc2UgJ0xhbmRpbmcnOlxyXG4gICAgICAgIHJldHVybiAncGFnZSBkXFwnYWNjdWVpbCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHByb3ApID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBbcHJvcF06IGUudGFyZ2V0LnZhbHVlIH1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRMYW5kaW5nID0gKHYpID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBMYW5kaW5nOiB2IH1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFyYW3DqHRyZXMnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgPyA8PlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdBdXRob3InKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9IGlkPVwiQXV0aG9yXCIgdmFsdWU9e2RhdGEuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0Rlc2NyaXB0aW9uJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9IGlkPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZGF0YS5EZXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ1NpdGVOYW1lJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKSl9IGlkPVwiU2l0ZU5hbWVcIiB2YWx1ZT17ZGF0YS5TaXRlTmFtZX0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RvciBjbHM9J3NlY29uZGFyeScgaWNvbkNscz0naWNvbicgYWN0aXZlPXtkYXRhLkxhbmRpbmd9IGxpc3Q9e2RhdGEuUGFnZXN9IGFjdGlvbj17c2V0TGFuZGluZ30+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+UGFnZTwvaDI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0b3I+XHJcbiAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYW5nZSAmJiA8QnV0dG9uIGJ0bkNscz17J2J0biBzZWNvbmRhcnkgZmFkZUluTGVmdCd9IGRpdkNscz17XCJwLTIgZmxleCBqdXN0aWZ5LWVuZFwifT5TYXV2ZWdhcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3MiLCJpbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcclxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuL0FydGljbGVzXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmV4cG9ydCB7IFBhZ2VzLCBBcnRpY2xlcywgU2V0dGluZ3MsIExvZ2luIH0iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBjbGVhblBhdGgsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHNldEJhc2VVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFqYXhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYWpheCcsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYmFzZVVybDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgbmF2VVJMOiBcIi9taW5pLWFkbWluXCIsXHJcbiAgICBheGlvczoge1xyXG4gICAgICBiYXNlVVJMOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IGFqYXhTbGljZSBmcm9tIFwiLi9hamF4U2xpY2VcIjtcclxuaW1wb3J0IG5vdGlmaWNhdGlvblNsaWNlIGZyb20gXCIuL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG5leHBvcnQgeyBhamF4U2xpY2UsIG5vdGlmaWNhdGlvblNsaWNlIH0iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJub3RpZmljYXRpb25cIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIG1zZzogXCJcIixcclxuICAgIHN0YXR1czogXCJvdXRcIixcclxuICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgdGltZW91dDogbnVsbCxcclxuICAgIGxpZmU6IDQwMDBcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBub3RpZnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGNvbnN0IHt0eXBlLG1zZyx0aW1lb3V0fSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgc3RhdHVzIDogXCJpblwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5S2VlcDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qge2V2ZW50LCBmdW5jfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGlmIChldmVudCA9PT0gXCJzdGF5XCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBmdW5jLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlDbG9zZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICBzdGF0dXM6ICdvdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBub3RpZnksIG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gPSBub3RpZmljYXRpb25TbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25TbGljZSwgYWpheFNsaWNlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYWpheDogYWpheFNsaWNlLFxyXG4gICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25TbGljZVxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGVsZXRlJ1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRWRpdCdcclxuXHJcbmNvbnN0IEFjdGlvbnNSb3cgPSAoeyBpZCwgdXBkYXRlLCByZW1vdmUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LW5vd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24tYnV0dG9uIHNlY29uZGFyeScgb25DbGljaz17KGUpID0+IHVwZGF0ZShpZCl9PlxyXG4gICAgICAgIDxFZGl0IGNscz0nYWN0aW9uLWljb24gZWRpdCcvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gc2Vjb25kYXJ5JyBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlKGlkKX0+XHJcbiAgICAgICAgPERlbGV0ZSBjbHM9J2FjdGlvbi1pY29uIGRlbGV0ZScvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uc1JvdyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ1NSRklucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiB2YWx1ZT17Z2V0VG9rZW4oKX0gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENTUkZJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZWNrZWQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0NoZWNrZWQnXHJcblxyXG5jb25zdCBDaGVja2JveCA9ICh7IGNscywgY2hhbmdlLCBjaGVja2VkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0LWNoZWNrYm94IFwiICsgY2xzfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgeyBjaGVja2VkID8gPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LXRydWUnPjxDaGVja2VkIC8+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LWZhbHNlJz48L2Rpdj4gfVxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3giLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBnZXRQcm9wc0Jvb2xTdGF0dXMsIGlzQXJyYXksIHN0ck5vcm1hbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSAnLi9OdW1iZXJJbnB1dCdcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXHJcbmltcG9ydCBTd2l0Y2hJbnB1dCBmcm9tICcuL1N3aXRjaElucHV0J1xyXG5pbXBvcnQgeyBBY3Rpb25zUm93LCBTZWxlY3RvciB9IGZyb20gJy4vJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbnROYXYgPSAoeyBoZWFkZXIsIGRhdGEsIHVwZGF0ZSwgcmVtb3ZlLCBjcmVhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHVwZGF0ZVNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBhamF4RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGluaXRpYXRpb24gZGVzIGZpbHRyZXNcclxuICAgIGNvbnN0IHNGaWVsZHMgPSB7fVxyXG4gICAgaGVhZGVyLm1hcCgoaCkgPT4gXHJcbiAgICAgIHNGaWVsZHNbaC50YWddID0gaC50YWcgIT09IFwicGFnZVwiID9cclxuICAgICAgeyB2YWx1ZTogaC5kcmF3ID09PSBcIm51bWJlclwiID8gMCA6IGguZHJhdy5tYXRjaCgvXmJvb2wvKSA/IGZhbHNlIDogXCJcIiwgYWN0aXZlOiBmYWxzZSB9IDpcclxuICAgICAgeyB2YWx1ZTogWy4uLmFqYXhEYXRhW2gudGFnK1wic1wiXV0ubWFwKChlbCxpKSA9PiAoey4uLmVsLCBmaWx0ZXJlZDogaSA9PSAwID8gdHJ1ZSA6IGZhbHNlfSkpLCBhY3RpdmU6IGZhbHNlIH1cclxuICAgICAgKVxyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc0ZpZWxkcyB9KTtcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gZm9ybWF0IGxlcyBkb25uw6llIHBvdXIgYWZmaWNoYWdlXHJcbiAgY29uc3Qgc2V0VmlldyA9ICh2YWx1ZSwgc2V0ID0gJ3ZhbHVlJywgdGFnKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqZWN0XFwuLisvZykudGVzdChzZXQpOlxyXG4gICAgICAgIGxldCBuYW1lID0gc2V0LnNwbGl0KCcuJylbc2V0LnNwbGl0KCcuJykubGVuZ3RoIC0gMV1cclxuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZShhamF4RGF0YVtgJHt0YWd9c2BdW051bWJlcih2YWx1ZSkgLSAxXVtuYW1lXSlcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gPFN1Y2Nlc3MgY2xzPSdoLTYgdy02IG0tYXV0byBpY29uIHN1Y2Nlc3MnIC8+IDogPENsb3NlIGNscz0naC02IHctNiBtLWF1dG8gaWNvbiBmYWxzZScgLz5cclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ebnVtL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ec3RyL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGNhcGl0YWxpemUodmFsdWUpIDogdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyB1cGRhdGUgZGVzIGZpbHRyZXMgZGUgcmVjaGVyY2hlc1xyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZUNoYW5nZSA9IChlLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgY2FzZSAnc29ydCc6XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT0gJycgPyAwIDogdmFsdWUgPiBkYXRhLmxlbmd0aCAtIDEgPyBkYXRhLmxlbmd0aCAtIDEgOiB2YWx1ZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc2VhcmNoLCBbZmllbGRdOiB7IC4uLnNlYXJjaFtmaWVsZF0sIHZhbHVlOiB2YWx1ZSB9IH0pXHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgZGVzIGZpbHRyZXMgZGUgcmVjaGVyY2hlcyAoIHNww6ljaWZpcXVlIMOgIHVuZSBsaXN0ZSBkJ8OpbMOpbWVudCBhdHRyaWJ1dCBcImZpbHRlcmVkXCIpXHJcbiAgY29uc3QgdXBkYXRlQXJyYXlGaWx0ZXIgPSAodmFsdWUsIHRhZykgPT4ge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbLi4uc2VhcmNoW3RhZ10udmFsdWVdO1xyXG4gICAgdXBkYXRlU2VhcmNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4uc2VhcmNoLFxyXG4gICAgICAgIFt0YWddOiB7XHJcbiAgICAgICAgICAuLi5zZWFyY2hbdGFnXSxcclxuICAgICAgICAgIHZhbHVlIDogYXJyYXkubWFwKGVsID0+ICh7Li4uZWwsIGZpbHRlcmVkIDogZWwuaWQgPT09IHZhbHVlID8gdHJ1ZSA6IGZhbHNlfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gIH1cclxuXHJcbiAgLy8gcmVuZHUgc2FucyBmaWx0cmVzXHJcbiAgY29uc3QgYmFzaWNSZW5kZXIgPSAoZGF0YSkgPT4gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdjb250ZW50LXJvdyc+XHJcbiAgICB7XHJcbiAgICAgIGhlYWRlci5tYXAoKHsgdGFnLCBkcmF3LCBjb2xTaXplIH0sIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0ke2NvbFNpemV9YH0+e3NldFZpZXcoZmllbGRbdGFnXSwgZHJhdywgdGFnKX08L2Rpdj4pXHJcbiAgICB9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBhY3Rpb24tZmllbGQgY29sc2l6ZS0yYH0+PEFjdGlvbnNSb3cgaWQ9e2t9IHVwZGF0ZT17dXBkYXRlfSByZW1vdmU9e3JlbW92ZX0gLz48L2Rpdj5cclxuICA8L2Rpdj5cclxuICApXHJcblxyXG4gIC8vIHJlbmR1IGF2ZWMgZmlsdHJlc1xyXG4gIGNvbnN0IGZpbHRlclJlbmRlciA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0ge31cclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzZWFyY2gpKSB7XHJcbiAgICAgIGlmICh2LmFjdGl2ZSkge1xyXG4gICAgICAgIHNlYXJjaEZpbHRlcltrXSA9IHYudmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhLm1hcCgoZmllbGQsIGspID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2VhcmNoRmlsdGVyKSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHYpIHtcclxuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgIGlmICghc3RyTm9ybWFsaXplKGZpZWxkW2tdKS5tYXRjaChzdHJOb3JtYWxpemUodikpICYmIHYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSBmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICBpZiAodiA9PT0gdHJ1ZSAmJiAhZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ID09PSBmYWxzZSAmJiBmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB2LmZpbmQoZWwgPT4gZWwuZmlsdGVyZWQpLmlkXHJcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW2tdICE9PSBmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J2NvbnRlbnQtcm93Jz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfTwvZGl2PilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGFjdGlvbi1maWVsZCBjb2xzaXplLTJgfT48QWN0aW9uc1JvdyBpZD17a30gdXBkYXRlPXt1cGRhdGVDb250ZW50fSAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBhY3RpdmUgdW4gZmlsdHJlIChzZWxvbiBjaWJsZSB1dGlsaXNhdGV1cilcclxuICBjb25zdCB0b2dnbGVGaWx0ZXIgPSAoZSwgY2hlY2tlZCkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHVwZGF0ZVNlYXJjaCh7IC4uLnNlYXJjaCwgW2NoZWNrZWRdOiB7IC4uLnNlYXJjaFtjaGVja2VkXSwgYWN0aXZlOiAhc2VhcmNoW2NoZWNrZWRdLmFjdGl2ZSB9IH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50LW5hdic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1oZWFkZXInPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlci5tYXAoKGgsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX1gfT57Y2FwaXRhbGl6ZShoLm5hbWUpfTwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yYH0+e2NhcGl0YWxpemUoJ2FjdGlvbnMnKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1zZWFyY2gnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlYXJjaCA/XHJcbiAgICAgICAgICAgIGhlYWRlci5tYXAoKGgsIGspID0+IHtcclxuICAgICAgICAgICAgICBsZXQgSW5wdXQ7XHJcbiAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSA8TnVtYmVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbHM9e2BzZWNvbmRhcnkgY29sc2l6ZS0xMGB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wQ2xzPVwiaW5wdXQtbnVtYmVyIHNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXsoZSwgdmFsdWUpID0+IHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgdmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtOdW1iZXIoc2VhcmNoW2gudGFnXS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17aC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXmJvb2wvZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSA8U3dpdGNoSW5wdXQgIGNscz0nc2Vjb25kYXJ5JyB2YWx1ZT17c2VhcmNoW2gudGFnXS52YWx1ZX0gY2hhbmdlPXsoZSkgPT4gc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCAhc2VhcmNoW2gudGFnXS52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPFNlbGVjdG9yIGNscz0nc2Vjb25kYXJ5JyBsaXN0PXtzZWFyY2hbaC50YWddLnZhbHVlfSBhY3RpdmU9e3NlYXJjaFtoLnRhZ10udmFsdWUuZmluZChlbCA9PiBlbC5maWx0ZXJlZCkuaWR9IGFjdGlvbj17KHZhbHVlKSA9PiB1cGRhdGVBcnJheUZpbHRlcih2YWx1ZSwgaC50YWcpfS8+XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdpbnB1dC10eHQgc2Vjb25kYXJ5IGNvbHNpemUtMTAnIG9uQ2hhbmdlPXsoZSkgPT4gc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCBlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPXtjYXBpdGFsaXplKGgubmFtZSl9IHZhbHVlPXtzZWFyY2hbaC50YWddLnZhbHVlfSAvPlxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2BzZWFyY2gtZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX0gZmxleCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggZmxleC1ub3dyYXBgfT5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbHM9J3NlY29uZGFyeScgY2hlY2tlZD17c2VhcmNoW2gudGFnXS5hY3RpdmV9IGNoYW5nZT17KGUpID0+IHRvZ2dsZUZpbHRlcihlLCBoLnRhZyl9IC8+XHJcbiAgICAgICAgICAgICAgICB7SW5wdXR9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0pIDpcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLTJgfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1pbm5lciAnPlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAhc2VhcmNoIHx8IHNlYXJjaCAmJiAhZ2V0UHJvcHNCb29sU3RhdHVzKHNlYXJjaCwgXCJhY3RpdmVcIiwgdHJ1ZSkgP1xyXG4gICAgICAgICAgICBkYXRhICYmIGlzQXJyYXkoZGF0YSkgPyBiYXNpY1JlbmRlcihkYXRhKSA6IG51bGxcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBkYXRhICYmIGlzQXJyYXkoZGF0YSkgPyBmaWx0ZXJSZW5kZXIoZGF0YSkgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnROYXYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2UnXHJcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuL1NlbGVjdG9yJ1xyXG5pbXBvcnQgU3dpdGNoSW5wdXQgZnJvbSAnLi9Td2l0Y2hJbnB1dCdcclxuXHJcbmNvbnN0IE1vZGFsRWRpdG9yID0gKHsgZGF0YSwgc2NoZW1hLCB0aXRsZSwgY2xvc2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21vZGFsLWVkaXRvcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS1iYXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS1iYXItdHh0Jz57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJhci1jbG9zZScgb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJ3LTYgaC02XCIgLz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC13aW5kb3cnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChba2V5LHZhbHVlXSxpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBJbnB1dDtcclxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgICAgIElucHV0ID0gPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkJz57dmFsdWUubmFtZX0gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0LXR4dCBzZWNvbmRhcnknIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2RhdGEgPyBkYXRhW2tleV0gOiBudWxsfSBwbGFjZWhvbGRlcj17dmFsdWUubmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdib29sJzpcclxuICAgICAgICAgICAgICAgIElucHV0ID0gPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkJz57dmFsdWUubmFtZX0gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hJbnB1dCB2YWx1ZT17ZGF0YSA/IGRhdGFba2V5XSA6IGZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdzb3J0aW5nJzpcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkJz57dmFsdWUubmFtZX0gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yIGNscz17J3NlY29uZGFyeSBwLTAnfSBpY29uQ2xzPXsnaWNvbid9IGxpc3Q9e3ZhbHVlLmxpc3R9IGFjdGl2ZT17ZGF0YSA/IGRhdGFba2V5XSA6IHZhbHVlLmxpc3RbMF0uaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleSA9IHtpfSBjbGFzc05hbWU9J21vZGFsLWZpZWxkJz57SW5wdXR9PC9kaXY+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEVkaXRvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSAoeyBjbHMsIGlucENscywgY2hhbmdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgKyAnIGlucHV0LW51bWJlci13cmFwIGZsZXggZmxleC1ub3dyYXAgcmVsYXRpdmUnfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cImRvd25cIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUsdmFsdWUtMSl9ID4tPC9zcGFuPjxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT17aW5wQ2xzICsgJyBjb2xzaXplLTEwJ30gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2UoZSwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dmFsdWV9IC8+PHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cInVwXCIgb25DbGljaz17KGUpID0+IGNoYW5nZShlLHZhbHVlKzEpfT4rPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFBhZ2VzQ29udGFpbmVyID0gKHtjaGlsZHJlbiAsIHRpdGxlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+e3RpdGxlfTwvZGl2PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250YWluZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FeHBhbmQnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBjbHMsIGxpc3QsIGFjdGl2ZSwgaWNvbkNscywgY2hpbGRyZW4sIGFjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsYXN0RXZlbnQsIHNldExhc3RFdmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAvLyBtaXNlIGVuIHBsYWNlIGRlIGwnw6lsw6ltZW50IGFjdGlmIHBhciBkw6lmYXV0IChwcm9wIGFjdGl2ZSBvYmxpZ2F0b2lyZSlcclxuICBjb25zdCBsYW5kaW5nID0gbGlzdC5maW5kKGkgPT4gaS5pZCA9PT0gYWN0aXZlKVxyXG4gIGNvbnN0IGF2YWlibGUgPSBsaXN0LmZpbHRlcihpID0+IGkuaWQgIT09IGxhbmRpbmcuaWQpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0ICRlbCA9IGUudGFyZ2V0XHJcbiAgICB3aGlsZSAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0b3InKSA9PSBmYWxzZSkge1xyXG4gICAgICAkZWwgPSAkZWwucGFyZW50Tm9kZVxyXG4gICAgfVxyXG4gICAgaWYgKChlLnR5cGUgPT09ICdjbGljaycgJiYgbGFzdEV2ZW50ID09PSAnY2xpY2snKSB8fCBlLnR5cGUgIT09ICdjbGljaycpIHtcclxuICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICAgIGxhc3RFdmVudCA9PT0gJ2NsaWNrJyAmJiB0b2dnbGUgPT09IHRydWUgPyAkZWwuYmx1cigpIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHNldExhc3RFdmVudChlLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZSx2KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0b2dnbGVTZWxlY3QoZSk7XHJcbiAgICBhY3Rpb24odik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGNscyA/ICdzZWxlY3RvciAnICsgY2xzIDogJ3NlbGVjdG9yJykgKyAodG9nZ2xlID8gJyBvcGVuZWQnIDogJycpfSBvbkZvY3VzPXt0b2dnbGVTZWxlY3R9IG9uQmx1cj17dG9nZ2xlU2VsZWN0fSB0YWJJbmRleD17LTF9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdCBhY3RpdmUnIHZhbHVlPXtsYW5kaW5nLmlkfSBvbkNsaWNrPXt0b2dnbGUgPyB0b2dnbGVTZWxlY3QgOiBudWxsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZShsYW5kaW5nLnRpdGxlKX08L2Rpdj48RXhwYW5kIGNscz17aWNvbkNsc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRvZ2dsZSA/IDxkaXYgY2xhc3NOYW1lPSdvcHQtd3JhcHBlcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YWlibGUubWFwKCh7aWQsdGl0bGV9LGspID0+IFxyXG4gICAgICAgICAgICAgIC8vIGwnaWQgZGUgbCfDqWzDqW1lbnQgY2hvaXNpIGVzdCBkaXJlY3RlbWVudCBlbnZvecOpIGRhbnMgXCJhY3Rpb25cIiAoZnVuY3Rpb24gw6AgcGFzc2VyIGVuIHByb3ApXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nb3B0JyB2YWx1ZT17aWR9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlLGlkKX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUodGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwiLy8gdWkgYm9vbGVhbiByZXByZXNlbnRhdGlvblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3dpdGNoSW5wdXQgPSAoeyBjbHMgPSBcIlwiLCB2YWx1ZSwgY2hhbmdlIH0pID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydpbnB1dC1zd2l0Y2gnICsgKHZhbHVlID8gJyB0cnVlJzogJyBmYWxzZScpICsgYCAke2Nsc31gfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LXN3aXRjaC1idXR0b24nPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvSW5mbydcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1N1Y2Nlc3MnXHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9XYXJuaW5nJ1xyXG5pbXBvcnQgRGFuZ2VyIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9EYW5nZXInXHJcbmltcG9ydCB7IG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcblxyXG5jb25zdCBUb2FzdCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24pXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBtc2csIHR5cGUsIHN0YXR1cyB9ID0gZGF0YVxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgJ0luZm8nOiA8SW5mbyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnU3VjY2Vzcyc6IDxTdWNjZXNzIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdXYXJuaW5nJzogPFdhcm5pbmcgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ0Rhbmdlcic6IDxEYW5nZXIgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0b2FzdCAke3R5cGV9ICR7c3RhdHVzfWB9IG9uTW91c2VFbnRlcj17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdzdGF5J30pKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ2Nsb3NlJywgZnVuYzogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMTQwMCl9KSApfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUtaWNvbic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25zW2NhcGl0YWxpemUodHlwZSldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWJ0bic+PGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cImgtNSB3LTVcIiAvPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWNvbnRlbnQnPlxyXG4gICAgICAgIHsgbXNnIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRMYWJlbElucHV0KHsgaWQsIHZhbHVlLCBsYWJlbCwgcGxhY2Vob2xkZXIsIHR5cGUsIGlucHV0Q2xzLCBkaXZDbHMgPSAnaW5wdXQtd3JhcCBwLTInLCBsYWJlbENscyA9ICdibG9jayBwLTInLCBvbkNoYW5nZSB9KSB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoIWlzQWN0aXZlKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsoZGl2Q2xzICsgKGlzQWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSl9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT17bGFiZWxDbHN9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT17dHlwZX0gaWQ9e2lkfSBjbGFzc05hbWU9e2lucHV0Q2xzfSBuYW1lPXtpZH0gdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBcIlwifSBvbkZvY3VzPXtoYW5kbGVGb2N1c30gb25CbHVyPXtoYW5kbGVGb2N1c30gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dExhYmVsSW5wdXQiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGVudE5hdiBmcm9tICcuL0NvbnRlbnROYXYnXHJcbmltcG9ydCBDU1JGSW5wdXQgZnJvbSAnLi9DU1JGSW5wdXQnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL05hdkxpJ1xyXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnLi9QYWdlc0NvbnRhaW5lcidcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4vU2VsZWN0b3InXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xyXG5pbXBvcnQgVHh0TGFiZWxJbnB1dCBmcm9tICcuL1R4dExhYmVsSW5wdXQnXHJcbmltcG9ydCBOdW1iZXJJbnB1dCBmcm9tICcuL051bWJlcklucHV0J1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCdcclxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gJy4vU3dpdGNoSW5wdXQnXHJcbmltcG9ydCBBY3Rpb25zUm93IGZyb20gJy4vQWN0aW9uc1JvdydcclxuaW1wb3J0IE1vZGFsRWRpdG9yIGZyb20gJy4vTW9kYWxFZGl0b3InXHJcblxyXG5leHBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250ZW50TmF2LFxyXG4gIENTUkZJbnB1dCxcclxuICBOYXZMaSxcclxuICBQYWdlc0NvbnRhaW5lcixcclxuICBTZWxlY3RvcixcclxuICBUb2FzdCxcclxuICBUeHRMYWJlbElucHV0LFxyXG4gIE51bWJlcklucHV0LFxyXG4gIENoZWNrYm94LFxyXG4gIFN3aXRjaElucHV0LFxyXG4gIEFjdGlvbnNSb3csXHJcbiAgTW9kYWxFZGl0b3JcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IDxkaXY+PEhlbGxvLz48L2Rpdj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4vTGF5b3V0XCJcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbXBvbmVudHMvYWRtaW4vcmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNvbnN0IE1haW5BZG1pbiA9ICgpID0+XHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Um91dGVyPlxyXG4gICAgICA8TGF5b3V0Lz5cclxuICAgIDwvUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDaGVja2VkID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTguOSAzNS4xcS0uMyAwLS41NS0uMS0uMjUtLjEtLjUtLjM1TDguOCAyNS42cS0uNDUtLjQ1LS40NS0xLjEgMC0uNjUuNDUtMS4xLjQ1LS40NSAxLjA1LS40NS42IDAgMS4wNS40NWw4IDggMTguMTUtMTguMTVxLjQ1LS40NSAxLjA3NS0uNDV0MS4wNzUuNDVxLjQ1LjQ1LjQ1IDEuMDc1VDM5LjIgMTUuNEwxOS45NSAzNC42NXEtLjI1LjI1LS41LjM1LS4yNS4xLS41NS4xWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tlZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENsb3NlID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDYxOCAyNzAgODI4cS05IDktMjEgOXQtMjEtOXEtOS05LTktMjF0OS0yMWwyMTAtMjEwLTIxMC0yMTBxLTktOS05LTIxdDktMjFxOS05IDIxLTl0MjEgOWwyMTAgMjEwIDIxMC0yMTBxOS05IDIxLTl0MjEgOXE5IDkgOSAyMXQtOSAyMUw1MjIgNTc2bDIxMCAyMTBxOSA5IDkgMjF0LTkgMjFxLTkgOS0yMSA5dC0yMS05TDQ4MCA2MThaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEYW5nZXIgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTE3Ljc1IDQycS0uNiAwLTEuMTc1LS4yNS0uNTc1LS4yNS0uOTc1LS42NWwtOC43LTguN3EtLjQtLjQtLjY1LS45NzVUNiAzMC4yNXYtMTIuNXEwLS42LjI1LTEuMTc1LjI1LS41NzUuNjUtLjk3NWw4LjctOC43cS40LS40Ljk3NS0uNjVUMTcuNzUgNmgxMi41cS42IDAgMS4xNzUuMjUuNTc1LjI1Ljk3NS42NWw4LjcgOC43cS40LjQuNjUuOTc1VDQyIDE3Ljc1djEyLjVxMCAuNi0uMjUgMS4xNzUtLjI1LjU3NS0uNjUuOTc1bC04LjcgOC43cS0uNC40LS45NzUuNjVUMzAuMjUgNDJaTTI0IDMzLjk1cS43IDAgMS4yMjUtLjUyNS41MjUtLjUyNS41MjUtMS4yMjUgMC0uNy0uNTI1LTEuMjI1UTI0LjcgMzAuNDUgMjQgMzAuNDVxLS43IDAtMS4yMjUuNTI1LS41MjUuNTI1LS41MjUgMS4yMjUgMCAuNy41MjUgMS4yMjUuNTI1LjUyNSAxLjIyNS41MjVabTAtNy4ycS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE1LjFxMC0uNjUtLjQyNS0xLjA3NVEyNC42NSAxMy42IDI0IDEzLjZxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djEwLjE1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVpNMTcuNzUgMzloMTIuNUwzOSAzMC4yNXYtMTIuNUwzMC4yNSA5aC0xMi41TDkgMTcuNzV2MTIuNVpNMjQgMjRaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYW5nZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEZWxldGUgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEzLjA1IDQycS0xLjIgMC0yLjEtLjktLjktLjktLjktMi4xVjEwLjVIOS41cS0uNjUgMC0xLjA3NS0uNDI1UTggOS42NSA4IDlxMC0uNjUuNDI1LTEuMDc1UTguODUgNy41IDkuNSA3LjVoNy45cTAtLjY1LjQyNS0xLjA3NVExOC4yNSA2IDE4LjkgNmgxMC4ycS42NSAwIDEuMDc1LjQyNS40MjUuNDI1LjQyNSAxLjA3NWg3LjlxLjY1IDAgMS4wNzUuNDI1UTQwIDguMzUgNDAgOXEwIC42NS0uNDI1IDEuMDc1LS40MjUuNDI1LTEuMDc1LjQyNWgtLjU1VjM5cTAgMS4yLS45IDIuMS0uOS45LTIuMS45Wm0wLTMxLjVWMzloMjEuOVYxMC41Wm01LjMgMjIuN3EwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjUuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNi4yNXEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1Wm04LjMgMHEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjUuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNi4yNXEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1Wm0tMTMuNi0yMi43VjM5IDEwLjVaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFZGl0ID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk05IDM5aDIuMmwyMi4xNS0yMi4xNS0yLjItMi4yTDkgMzYuOFptMzAuNy0yNC4zLTYuNC02LjQgMi4xLTIuMXEuODUtLjg1IDIuMTI1LS44MjUgMS4yNzUuMDI1IDIuMTI1Ljg3NUw0MS44IDguNHEuODUuODUuODUgMi4xdC0uODUgMi4xWk03LjUgNDJxLS42NSAwLTEuMDc1LS40MjVRNiA0MS4xNSA2IDQwLjV2LTQuM3EwLS4zLjEtLjU1LjEtLjI1LjM1LS41TDMxLjIgMTAuNGw2LjQgNi40LTI0Ljc1IDI0Ljc1cS0uMjUuMjUtLjUuMzUtLjI1LjEtLjU1LjFabTI0Ljc1LTI2LjI1LTEuMS0xLjEgMi4yIDIuMlpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFeHBhbmQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA3MTEgMjQwIDQ3MWw0My00MyAxOTcgMTk4IDE5Ny0xOTcgNDMgNDMtMjQwIDIzOVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZm8gPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0yNC4xNSAzNHEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NXYtOS4wNXEwLS42LS40NS0xLjAyNVEyNC43NSAyMiAyNC4xNSAyMnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2OS4wNXEwIC42LjQ1IDEuMDI1LjQ1LjQyNSAxLjA1LjQyNVpNMjQgMTguM3EuNyAwIDEuMTc1LS40NS40NzUtLjQ1LjQ3NS0xLjE1dC0uNDc1LTEuMlEyNC43IDE1IDI0IDE1cS0uNyAwLTEuMTc1LjUtLjQ3NS41LS40NzUgMS4ydC40NzUgMS4xNXEuNDc1LjQ1IDEuMTc1LjQ1Wk0yNCA0NHEtNC4yNSAwLTcuOS0xLjUyNS0zLjY1LTEuNTI1LTYuMzUtNC4yMjUtMi43LTIuNy00LjIyNS02LjM1UTQgMjguMjUgNCAyNHEwLTQuMiAxLjUyNS03Ljg1UTcuMDUgMTIuNSA5Ljc1IDkuOHEyLjctMi43IDYuMzUtNC4yNVExOS43NSA0IDI0IDRxNC4yIDAgNy44NSAxLjU1UTM1LjUgNy4xIDM4LjIgOS44cTIuNyAyLjcgNC4yNSA2LjM1UTQ0IDE5LjggNDQgMjRxMCA0LjI1LTEuNTUgNy45LTEuNTUgMy42NS00LjI1IDYuMzUtMi43IDIuNy02LjM1IDQuMjI1UTI4LjIgNDQgMjQgNDRabTAtMjBabTAgMTdxNyAwIDEyLTV0NS0xMnEwLTctNS0xMlQyNCA3cS03IDAtMTIgNVQ3IDI0cTAgNyA1IDEydDEyIDVaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKHsgQ2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e0Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC43NSA0Mi41cS0xLjQ1IDAtMi41NS0xLjEtMS4xLTEuMS0xLjEtMi41NVY5LjE1cTAtMS40NSAxLjEtMi41NSAxLjEtMS4xIDIuNTUtMS4xaDE0Ljd2My42NUg4Ljc1djI5LjdoMTQuN3YzLjY1Wm0yNC41LTguNzUtMi43LTIuNjUgNS4zLTUuM2gtMTcuM3YtMy42NWgxNy4ybC01LjMtNS4zIDIuNy0yLjYgOS44IDkuOFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN1Y2Nlc3MgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIm0yMS4wNSAyOC41NS00LjktNC45cS0uNDUtLjQ1LTEuMS0uNDUtLjY1IDAtMS4xNS41LS41LjUtLjUgMS4xNSAwIC42NS41IDEuMWw2LjEgNi4xcS40NS40NSAxLjA1LjQ1LjYgMCAxLjA1LS40NWwxMi0xMnEuNDUtLjQ1LjQyNS0xLjEtLjAyNS0uNjUtLjQ3NS0xLjEtLjQ1LS41LTEuMTI1LS41dC0xLjE3NS41Wk0yNCA0NHEtNC4yNSAwLTcuOS0xLjUyNS0zLjY1LTEuNTI1LTYuMzUtNC4yMjUtMi43LTIuNy00LjIyNS02LjM1UTQgMjguMjUgNCAyNHEwLTQuMiAxLjUyNS03Ljg1UTcuMDUgMTIuNSA5Ljc1IDkuOHEyLjctMi43IDYuMzUtNC4yNVExOS43NSA0IDI0IDRxNC4yIDAgNy44NSAxLjU1UTM1LjUgNy4xIDM4LjIgOS44cTIuNyAyLjcgNC4yNSA2LjM1UTQ0IDE5LjggNDQgMjRxMCA0LjI1LTEuNTUgNy45LTEuNTUgMy42NS00LjI1IDYuMzUtMi43IDIuNy02LjM1IDQuMjI1UTI4LjIgNDQgMjQgNDRabTAtMjBabTAgMTdxNy4yNSAwIDEyLjEyNS00Ljg3NVQ0MSAyNHEwLTcuMjUtNC44NzUtMTIuMTI1VDI0IDdxLTcuMjUgMC0xMi4xMjUgNC44NzVUNyAyNHEwIDcuMjUgNC44NzUgMTIuMTI1VDI0IDQxWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VjY2VzcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFdhcm5pbmcgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQuNiA0MnEtLjQ1IDAtLjc3NS0uMnQtLjUyNS0uNTVxLS4yLS4zNS0uMjI1LS43MjUtLjAyNS0uMzc1LjIyNS0uNzc1bDE5LjQtMzMuNXEuMjUtLjQuNTc1LS41NzVRMjMuNiA1LjUgMjQgNS41cS40IDAgLjcyNS4xNzUuMzI1LjE3NS41NzUuNTc1bDE5LjQgMzMuNXEuMjUuNC4yMjUuNzc1LS4wMjUuMzc1LS4yMjUuNzI1dC0uNTI1LjU1cS0uMzI1LjItLjc3NS4yWm0yLjYtM2gzMy42TDI0IDEwWm0xNy0yLjg1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1IDAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1UTIyLjcgMzQgMjIuNyAzNC42NXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabTAtNS41NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NXYtOC4ycTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2OC4ycTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptLS4yLTYuMVpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXJuaW5nIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwic2V0QmFzZVVybCIsImV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibGVuZ3RoIiwiY2xlYW5QYXRoIiwicGF0aCIsInJlcGxhY2UiLCJjYXBpdGFsaXplIiwidHh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiZW5kT2ZQYXRoIiwibGFzdEluZGV4T2YiLCJ1cGRhdGVUaXRsZSIsIm4iLCJkb2N1bWVudCIsInRpdGxlIiwic3RyQ29udGFpbnMiLCJzdHIiLCJzZWFyY2giLCJyZSIsIlJlZ0V4cCIsInN0ck5vcm1hbGl6ZSIsInRlc3QiLCJsIiwicmVnIiwidyIsImdldFByb3BzQm9vbFN0YXR1cyIsIm9iaiIsInByb3AiLCJib29sU3RhdGUiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJpc09iamVjdCIsImFyZUVxdWFsIiwib2JqMSIsIm9iajIiLCJpc0FycmF5IiwiaSIsImVudDEiLCJlbnQyIiwiaXNEZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJzb3J0QXNjIiwiYSIsImIiLCJzb3J0Iiwic29ydERlcyIsIlJlYWN0IiwiQ29udGVudCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJUb2FzdCIsInNldFVybCIsIlBhZ2VzIiwiU2V0dGluZ3MiLCJBcnRpY2xlcyIsIkxvZ2luIiwiTWVudSIsIm5hbWUiLCJQYWdlIiwiTGF5b3V0IiwidXJsIiwic3RhdGUiLCJhamF4IiwibmF2IiwiZGlzcGF0Y2giLCJwYXRobmFtZSIsIm1hdGNoIiwibWFwIiwidXNlU3RhdGUiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiY2xlYXJEYXRhIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsIlBhZ2VzQ29udGFpbmVyIiwiQ29udGVudE5hdiIsIk1vZGFsRWRpdG9yIiwicHVzaERhdGEiLCJheGlvcyIsImF4aW9zU2V0IiwiY3JlYXRlIiwicGFyYW1zIiwicGFnZSIsImFydGljbGVzIiwiZGF0YSIsInBhZ2VzIiwibW9kYWwiLCJzZXRNb2RhbCIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInN0YXR1cyIsInJlc3BvbnNlIiwiY2xvc2VNb2RhbCIsInVwZGF0ZUFydGljbGUiLCJpZCIsInJlbW92ZUFydGljbGUiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwidGFnIiwiZHJhdyIsImNvbFNpemUiLCJ0eXBlIiwicHVibGlzaGJlZ2luIiwicHVibGlzaGVuZCIsInB1Ymxpc2hlZCIsImlzZHluYW1pYyIsImxpc3QiLCJjb250ZW50IiwiQnV0dG9uIiwiVHh0TGFiZWxJbnB1dCIsIm5vdGlmeSIsIm5vdGlmeUNsb3NlIiwiWE1MU2V0IiwibGlmZXRpbWUiLCJub3RpZmljYXRpb24iLCJsaWZlIiwic2V0U3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3Rva2VuIiwiaXNDb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJibHVyVGltZW91dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVGltZW91dCIsIm5hdGl2ZUV2ZW50Iiwic3VibWl0dGVyIiwiYmx1ciIsInBvc3QiLCJuYXZVUkwiLCJtc2ciLCJ0aW1lb3V0IiwidXBkYXRlUGFnZSIsInJlbW92ZVBhZ2UiLCJTZWxlY3RvciIsInNldHRpbmdzIiwiY2hhbmdlIiwic2V0Q2hhbmdlIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiY2hhbmdlTmFtZSIsInYiLCJuRGF0YSIsInNldExhbmRpbmciLCJMYW5kaW5nIiwiQXV0aG9yIiwiRGVzY3JpcHRpb24iLCJTaXRlTmFtZSIsInN0b3JlIiwiY3JlYXRlU2xpY2UiLCJhamF4U2xpY2UiLCJiYXNlVXJsIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsIm5vdGlmaWNhdGlvblNsaWNlIiwibm90aWZ5S2VlcCIsImV2ZW50IiwiZnVuYyIsImNvbmZpZ3VyZVN0b3JlIiwiRGVsZXRlIiwiRWRpdCIsIkFjdGlvbnNSb3ciLCJ1cGRhdGUiLCJidG5DbHMiLCJkaXZDbHMiLCJDU1JGSW5wdXQiLCJDaGVja2VkIiwiQ2hlY2tib3giLCJjbHMiLCJjaGVja2VkIiwiU3VjY2VzcyIsIkNsb3NlIiwiTnVtYmVySW5wdXQiLCJTd2l0Y2hJbnB1dCIsInVwZGF0ZVNlYXJjaCIsImFqYXhEYXRhIiwic0ZpZWxkcyIsImgiLCJhY3RpdmUiLCJlbCIsImZpbHRlcmVkIiwic2V0VmlldyIsInNldCIsInNwbGl0IiwiTnVtYmVyIiwic2VhcmNoSGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1cGRhdGVBcnJheUZpbHRlciIsImJhc2ljUmVuZGVyIiwiayIsImZpbHRlclJlbmRlciIsInNlYXJjaEZpbHRlciIsImZpbHRlciIsImZpbmQiLCJ1cGRhdGVDb250ZW50IiwidG9nZ2xlRmlsdGVyIiwiSW5wdXQiLCJzY2hlbWEiLCJjbG9zZSIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCJpbnBDbHMiLCJFeHBhbmQiLCJpY29uQ2xzIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibGFzdEV2ZW50Iiwic2V0TGFzdEV2ZW50IiwibGFuZGluZyIsImF2YWlibGUiLCJ0b2dnbGVTZWxlY3QiLCIkZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjaGFuZ2VWYWx1ZSIsIkluZm8iLCJXYXJuaW5nIiwiRGFuZ2VyIiwiaWNvbnMiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDbHMiLCJsYWJlbENscyIsIm9uQ2hhbmdlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVGb2N1cyIsIkNvbXBvbmVudCIsIkh3IiwicmVuZGVyIiwiSGVsbG8iLCJNYWluIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlByb3ZpZGVyIiwiTWFpbkFkbWluIiwiQ2xzIl0sInNvdXJjZVJvb3QiOiIifQ==