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
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
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
      isdynamic: {
        type: "bool",
        name: 'Dynamique'
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
      title: {
        type: "string",
        name: "Titre"
      },
      pages: {
        type: 'select',
        name: "Page",
        draw: "title",
        list: pages
      },
      sort: {
        type: "sorting",
        name: 'Ordre',
        list: articles
      },
      published: {
        type: "bool",
        name: 'Visible'
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

/***/ "./assets/react/components/admin/ui/DatePicker.jsx":
/*!*********************************************************!*\
  !*** ./assets/react/components/admin/ui/DatePicker.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_icon_ui_Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icon/icon-ui/Calendar */ "./assets/react/icon/icon-ui/Calendar.jsx");


const DatePicker = ({
  change,
  value
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-calendar",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "date-txt"
  }, value.toLocaleDateString('fr-fr')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cls: 'icon'
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);

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
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePicker */ "./assets/react/components/admin/ui/DatePicker.jsx");
/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RichText */ "./assets/react/components/admin/ui/RichText/index.js");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selector */ "./assets/react/components/admin/ui/Selector.jsx");
/* harmony import */ var _SwitchInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwitchInput */ "./assets/react/components/admin/ui/SwitchInput.jsx");






const ModalEditor = ({
  data,
  schema,
  title,
  close
}) => {
  const [mData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const empty = {};
    Object.entries(schema).map(([name, par], i) => {
      let val;
      switch (par.type) {
        case "string":
        case "text":
          val = "";
          break;
        case "select":
        case "sorting":
          val = par.list.length - 1;
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
          value: mData[key],
          placeholder: value.name
        }));
        break;
      case 'bool':
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwitchInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: mData[key]
        }));
        break;
      case 'sorting':
      case 'select':
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
          cls: 'secondary p-0',
          iconCls: 'icon',
          list: value.list,
          active: mData[key]
        }));
        break;
      case 'date':
        Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex gap-3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
          className: "input-label p-2 font-bold"
        }, value.name, " : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: mData[key]
        }));
        break;
      default:
        break;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "modal-field"
    }, Input);
  })), Object.entries(schema).map(([k, v], i) => {
    return v.type === "text" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RichText__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null;
  }));
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

/***/ "./assets/react/components/admin/ui/RichText/RichText.jsx":
/*!****************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/RichText.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lexical */ "./node_modules/lexical/Lexical.js");
/* harmony import */ var lexical__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lexical__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lexical/react/LexicalComposer */ "./node_modules/@lexical/react/LexicalComposer.js");
/* harmony import */ var _lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lexical_react_LexicalPlainTextPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/react/LexicalPlainTextPlugin */ "./node_modules/@lexical/react/LexicalPlainTextPlugin.js");
/* harmony import */ var _lexical_react_LexicalPlainTextPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalPlainTextPlugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexical/react/LexicalContentEditable */ "./node_modules/@lexical/react/LexicalContentEditable.js");
/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lexical/react/LexicalHistoryPlugin */ "./node_modules/@lexical/react/LexicalHistoryPlugin.js");
/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lexical/react/LexicalOnChangePlugin */ "./node_modules/@lexical/react/LexicalOnChangePlugin.js");
/* harmony import */ var _lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lexical/react/LexicalComposerContext */ "./node_modules/@lexical/react/LexicalComposerContext.js");
/* harmony import */ var _lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalComposerContext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lexical/react/LexicalErrorBoundary */ "./node_modules/@lexical/react/LexicalErrorBoundary.js");
/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .. */ "./assets/react/components/admin/ui/index.js");










const theme = {
  placeholder: 'editor-placeholder'
};
// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = (0,lexical__WEBPACK_IMPORTED_MODULE_0__.$getRoot)();
    const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_0__.$getSelection)();
  });
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}
function RichTextComponent() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_2__.LexicalComposer, {
    initialConfig: initialConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "content-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lexical_react_LexicalPlainTextPlugin__WEBPACK_IMPORTED_MODULE_3__.PlainTextPlugin, {
    contentEditable: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_4__.ContentEditable, {
      className: "editor-text"
    }),
    ErrorBoundary: (_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_8___default())
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lexical_react_LexicalOnChangePlugin__WEBPACK_IMPORTED_MODULE_6__.OnChangePlugin, {
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_5__.HistoryPlugin, null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichTextComponent);

/***/ }),

/***/ "./assets/react/components/admin/ui/RichText/index.js":
/*!************************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichText */ "./assets/react/components/admin/ui/RichText/RichText.jsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RichText__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
/* harmony export */   "DatePicker": () => (/* reexport safe */ _DatePicker__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "ModalEditor": () => (/* reexport safe */ _ModalEditor__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "NavLi": () => (/* reexport safe */ _NavLi__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NumberInput": () => (/* reexport safe */ _NumberInput__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PagesContainer": () => (/* reexport safe */ _PagesContainer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "RichText": () => (/* reexport safe */ _RichText___WEBPACK_IMPORTED_MODULE_14__["default"]),
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
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DatePicker */ "./assets/react/components/admin/ui/DatePicker.jsx");
/* harmony import */ var _RichText___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RichText/ */ "./assets/react/components/admin/ui/RichText/index.js");

















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
/******/ __webpack_require__.O(0, ["vendors-node_modules_lexical_react_LexicalComposer_js-node_modules_lexical_react_LexicalConte-cec244"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bENqQixTQUFTLEVBQUVBLFNBQVM7TUFDcEJjLEtBQUssRUFBRUE7SUFDWCxDQUFDLENBQUM7RUFDTjtFQUNBTyxVQUFVLEdBQUc7SUFDVCxJQUFJLENBQUM1VixPQUFPLENBQUN1UixJQUFJLENBQUNzRSxPQUFPLEVBQUU7SUFDM0IsSUFBSSxDQUFDTixjQUFjLENBQUMsZUFBZSxFQUFFO01BQ2pDaEIsU0FBUyxFQUFFLElBQUksQ0FBQ2lCLGNBQWM7TUFDOUJILEtBQUssRUFBRSxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRztJQUMvQyxDQUFDLENBQUM7RUFDTjtFQUNBRyxtQkFBbUIsQ0FBQ0ssWUFBWSxFQUFFO0lBQzlCLE1BQU05VixPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO0lBQzVCLElBQUksQ0FBQ0EsT0FBTyxDQUFDdVIsSUFBSSxFQUFFO01BQ2Z2UixPQUFPLENBQUN1UixJQUFJLEdBQUdtRCxVQUFVLENBQUMsSUFBSSxDQUFDMVUsT0FBTyxDQUFDO0lBQzNDO0lBQ0FBLE9BQU8sQ0FBQ3VSLElBQUksQ0FBQ2lDLE1BQU0sQ0FBQ3NDLFlBQVksQ0FBQztFQUNyQztFQUNBUCxjQUFjLENBQUMzUCxJQUFJLEVBQUU2RyxPQUFPLEVBQUU7SUFDMUIsSUFBSSxDQUFDek0sT0FBTyxDQUFDK1YsYUFBYSxDQUFDLElBQUlDLFdBQVcsQ0FBQ3BRLElBQUksRUFBRTtNQUFFcVEsTUFBTSxFQUFFeEosT0FBTztNQUFFeUosT0FBTyxFQUFFO0lBQUssQ0FBQyxDQUFDLENBQUM7RUFDekY7QUFDSjtBQUNBZCxTQUFTLENBQUNlLE1BQU0sR0FBRztFQUNmNUIsU0FBUyxFQUFFNkIsTUFBTTtFQUNqQmYsS0FBSyxFQUFFelM7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0FjdGlvbnNSb3cuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NTUkZJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Db250ZW50TmF2LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0RhdGVQaWNrZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTW9kYWxFZGl0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTmF2TGkuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTnVtYmVySW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUGFnZXNDb250YWluZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvUmljaFRleHQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Td2l0Y2hJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Ub2FzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRMYWJlbElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvaGVsbG9Xb3JsZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0NhbGVuZGFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2hlY2tlZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Nsb3NlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRGFuZ2VyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRGVsZXRlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRWRpdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0V4cGFuZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0luZm8uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9Mb2dvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvV2FybmluZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCIsXG5cdFwiLi9tYWluX2FkbWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIlxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke2V4dC5sZW5ndGggPiAwID8gXCIvXCIgOiBudWxsfSR7ZXh0fWBcclxufVxyXG5cclxuLy8gbmV0dG9pZSBsJ3VybCBmb3VybmlcclxuXHJcbmNvbnN0IGNsZWFuUGF0aCA9IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvJHxcXC8kLywgJycpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuLy8gY2hhbmdlIGxlIHRpdHJlIGRhbnMgbCdvbmdsZXRcclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBkb2N1bWVudC50aXRsZSA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyBjYXBpdGFsaXplKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyB0cm91dmUgdW5lIGV4cHJlc3Npb24gcsOpZ3VsacOocmVcclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG4vLyBub3JtYWxpemUgdW4gc3RyaW5nIHBvdXIgZmlsdHJlXHJcblxyXG5jb25zdCBzdHJOb3JtYWxpemUgPSAoc3RyKSA9PiB7XHJcbiAgY29uc3QgdGVzdCA9IChsLHJlZykgPT4gbmV3IFJlZ0V4cChyZWcpLnRlc3QobClcclxuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9bXmEtel0vZywgKHcpID0+IHtcclxuICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSB0ZXN0KHcgLC/Do3zDoHzDoXzDonzDpC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OofMOpfMOqfMOrL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6x8w618w658w68vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiaVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DtXzDsnzDs3zDtHzDti9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O5fMO6fMO7fMO8L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw718w78vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwieVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DsS9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJuXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8WTL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm9lXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OmL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImFlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OnL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImNcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw58vZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwic3NcIlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gd1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyB0cm91dmVyIHVuZSBwcm9wcyBib29sw6llbiAodnJhaSBvdSBmYXV4KSBkYW5zIHVuIG9iamV0IHJlY3Vyc2lmXHJcblxyXG5jb25zdCBnZXRQcm9wc0Jvb2xTdGF0dXMgPSAob2JqLCBwcm9wLCBib29sU3RhdGUpID0+IHtcclxuXHJcbiAgaWYgKG9ialtwcm9wXSkge1xyXG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gYm9vbFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBba2V5LHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIGlmIChnZXRQcm9wc0Jvb2xTdGF0dXModmFsdWUsIHByb3AsIGJvb2xTdGF0ZSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuLy8gY29tcGFyZSBkZXV4IG9iamV0cyBKUyAodG91dCB0eXBlcylcclxuXHJcbmNvbnN0IGFyZUVxdWFsID0gKG9iajEsb2JqMikgPT4ge1xyXG4gIGlmICh0eXBlb2Ygb2JqMSAhPT0gdHlwZW9mIG9iajIpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgaWYgKG9iajEubGVuZ3RoICE9PSBvYmoyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iajEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2ldLG9iajJbaV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpKSB7XHJcbiAgICBjb25zdCBlbnQxID0gT2JqZWN0LmVudHJpZXMob2JqMSlcclxuICAgIGNvbnN0IGVudDIgPSBPYmplY3QuZW50cmllcyhvYmoyKVxyXG4gICAgaWYgKGVudDEubGVuZ3RoICE9PSBlbnQyLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iajEpKSB7XHJcbiAgICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIGlzRGVmaW5lZChvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgaWYgKCFhcmVFcXVhbChvYmoxW2tleV0sb2JqMltrZXldKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIG9iajEgPT09IG9iajJcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgZMOpZmluaWVcclxuXHJcbmNvbnN0IGlzRGVmaW5lZCA9IChvYmopID0+IG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZFxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gSlNPTiB2YWxpZGVcclxuXHJcbmNvbnN0IGlzSlNPTiA9IChqc29uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIEpTT04ucGFyc2UoanNvbilcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBvYmpldCBKU1xyXG5cclxuY29uc3QgaXNPYmplY3QgPSAob2JqZWN0KSA9PiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmICFpc0FycmF5KG9iamVjdClcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIFRhYmxlYXV4IFxyXG5cclxuY29uc3QgaXNBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KVxyXG59XHJcblxyXG5jb25zdCBzb3J0QXNjID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPCBiLnNvcnQgPyAtMSA6IGEuc29ydCA+IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmNvbnN0IHNvcnREZXMgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA+IGIuc29ydCA/IC0xIDogYS5zb3J0IDwgYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuZXhwb3J0IHsgXHJcbiAgc2V0QmFzZVVybCwgXHJcbiAgY2FwaXRhbGl6ZSwgXHJcbiAgdXBkYXRlVGl0bGUsIFxyXG4gIGVuZE9mUGF0aCwgXHJcbiAgc3RyQ29udGFpbnMsIFxyXG4gIGNsZWFuUGF0aCwgXHJcbiAgaXNKU09OLCBcclxuICBpc0FycmF5LCBcclxuICBhcmVFcXVhbCwgXHJcbiAgc29ydEFzYywgXHJcbiAgc29ydERlcyxcclxuICBnZXRQcm9wc0Jvb2xTdGF0dXMsXHJcbiAgc3RyTm9ybWFsaXplLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPSdhZG1pbi1mb290ZXInPkZvb3RlcjwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdWknXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgeyBQYWdlcywgU2V0dGluZ3MsIEFydGljbGVzLCBMb2dpbiB9IGZyb20gJy4vcGFnZXMnXHJcblxyXG5jb25zdCBNZW51ID0gW1xyXG4gIHtuYW1lOiBcIlBhcmFtZXRyZXNcIiwgcGF0aDogXCIvXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wiLCBQYWdlOiBQYWdlc30sXHJcbiAge25hbWU6IFwiQXJ0aWNsZXNcIiwgcGF0aDogXCIvYXJ0aWNsZXNcIiwgUGFnZTogQXJ0aWNsZXN9LFxyXG5dXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LnVybClcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cmwgPT09IFwiXCIgPyBkaXNwYXRjaChzZXRVcmwoXCJcIikpIDogbnVsbFxyXG4gICAgbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyQvLCAnJykgPyBuYXYoY2xlYW5QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSkgOiB1bmRlZmluZWRcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibGF5b3V0XCI+XHJcbiAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9J21pbmktYWRtaW4vbG9naW4nIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIE1lbnUubWFwKCh7cGF0aCxQYWdlfSxpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUga2V5PXtpfSBwYXRoPXtgbWluaS1hZG1pbiR7cGF0aH1gfSBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBQYWdlcz17TWVudX0gLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8UGFnZSB1cmw9e3BhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDxUb2FzdC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi91aS9OYXZMaSdcclxuaW1wb3J0IExvZ291dCBmcm9tICcuLi8uLi9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCdcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2xlYXJEYXRhLCBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7UGFnZXN9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRFbmFibGUodHJ1ZSlcclxuICAgIH0sIDUwKVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICAgIGRpc3BhdGNoKGNsZWFyRGF0YSgpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSduYXZiYXInIGNsYXNzTmFtZT17IWVuYWJsZSA/ICdmYWRlT3V0TGVmdCcgOiAnJ30+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibmF2YmFyLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5NaW5pLUNNUzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHtuYW1lLHBhdGh9LGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPE5hdkxpIGtleT17aX0gdG89e2AvbWluaS1hZG1pbiR7cGF0aH1gLnJlcGxhY2UoL1xcLyQvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlVGl0bGUocGF0aCk7IGRpc3BhdGNoKHNldFVybChwYXRoKSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXR4dCc+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaT59KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bmF2IGlkPVwibmF2LW9wdHNcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdpY29uLW5hdic+XHJcbiAgICAgICAgICA8TmF2TGkgdG89XCIvbWluaS1hZG1pbi9sb2dvdXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PjxMb2dvdXQgQ2xzPVwic3ZnLWljb25cIiAvPjwvTmF2TGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYWdlc0NvbnRhaW5lciwgQ29udGVudE5hdiwgTW9kYWxFZGl0b3IgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyBDUlVEIENvbXBsZXQgcG91ciBsZXMgQXJ0aWNsZXNcclxuXHJcbmNvbnN0IEFydGljbGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0LCBwYXJhbXM6IHtwYWdlOiAnYXJ0aWNsZXMnfX0pXHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5hcnRpY2xlcylcclxuICBjb25zdCBwYWdlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnBhZ2VzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoe2VuYWJsZTogZmFsc2UsIGRhdGE6IG51bGwsIHRpdGxlOiAnJ30pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4LmdldCgnL3JlcXVlc3QnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnYXJ0aWNsZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnL21pbmktYWRtaW4vbG9nb3V0JylcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBhamF4LmdldCgnL3JlcXVlc3QnLCB7Li4uYXhpb3NTZXQsIHBhcmFtczoge3BhZ2U6ICdwYWdlcyd9fSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3BhZ2VzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh7Li4ubW9kYWwsIGVuYWJsZTogZmFsc2V9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlQXJ0aWNsZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoey4uLm1vZGFsLCBlbmFibGU6IHRydWUsIHRpdGxlOiAnTW9kaWZpZXInfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUFydGljbGUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICdzdHJpbmcnLCBjb2xTaXplOiAyfSxcclxuICAgIHt0YWc6ICdzb3J0JywgbmFtZTogJ29yZHJlJywgZHJhdzogJ251bWJlcicsIGNvbFNpemU6IFwiMS01XCJ9LFxyXG4gICAge3RhZzogJ3BhZ2UnLCBuYW1lOiAncGFnZScsIGRyYXc6ICdvYmplY3QudGl0bGUnLCBjb2xTaXplOiAyfSxcclxuICAgIHt0YWc6ICdwdWJsaXNoZWQnLCBuYW1lOiAndmlzaWJsZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX0sXHJcbiAgICB7dGFnOiAnaXNkeW5hbWljJywgbmFtZTogJ2R5bmFtaXF1ZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydBcnRpY2xlcyd9PlxyXG4gICAgICB7IGFydGljbGVzICYmIHBhZ2VzID8gPENvbnRlbnROYXYgXHJcbiAgICAgICAgZGF0YT17YXJ0aWNsZXN9IGhlYWRlcj17aGVhZGVyfSBcclxuICAgICAgICB1cGRhdGU9e3VwZGF0ZUFydGljbGV9IHJlbW92ZT17cmVtb3ZlQXJ0aWNsZX0gXHJcbiAgICAgICAgLz4gXHJcbiAgICAgICAgOiBcclxuICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgIC8vIGZlbsOqdHJlIGQnw6lkaXRpb24gZXQgY3LDqWF0aW9uIGRlcyBhcnRpY2xlc1xyXG4gICAgICAgIG1vZGFsLmVuYWJsZSA/IFxyXG4gICAgICAgIDxNb2RhbEVkaXRvciBkYXRhPXttb2RhbC5kYXRhfSB0aXRsZT17bW9kYWwudGl0bGV9IGNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgc2NoZW1hPXtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzZHluYW1pYzoge3R5cGU6IFwiYm9vbFwiLCBuYW1lOiAnRHluYW1pcXVlJ30sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGJlZ2luOiB7dHlwZTogJ2RhdGUnLCBuYW1lOiBcIkTDqWJ1dFwiLCBkcmF3OiBcInRpdGxlXCJ9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlbmQ6IHt0eXBlOiAnZGF0ZScsIG5hbWU6IFwiRmluXCIsIGRyYXc6IFwidGl0bGVcIn0sXHJcbiAgICAgICAgICAgICAgdGl0bGU6IHt0eXBlOiBcInN0cmluZ1wiLCBuYW1lOiBcIlRpdHJlXCJ9LFxyXG4gICAgICAgICAgICAgIHBhZ2VzOiB7dHlwZTogJ3NlbGVjdCcsIG5hbWU6IFwiUGFnZVwiLCBkcmF3OiBcInRpdGxlXCIsIGxpc3Q6IHBhZ2VzfSxcclxuICAgICAgICAgICAgICBzb3J0OiB7dHlwZTogXCJzb3J0aW5nXCIsIG5hbWU6ICdPcmRyZScsIGxpc3Q6IGFydGljbGVzfSxcclxuICAgICAgICAgICAgICBwdWJsaXNoZWQ6IHt0eXBlOiBcImJvb2xcIiwgbmFtZTogJ1Zpc2libGUnfSxcclxuICAgICAgICAgICAgICBjb250ZW50OiB7dHlwZTogXCJ0ZXh0XCIsIG5hbWU6ICdDb250ZW51J30sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gLz4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFR4dExhYmVsSW5wdXQgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9GdW5jdGlvbnMvU2VjdXJpdHknXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAvLyByb3V0ZXJcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgLy8gcmVkdXggLSBhamF4XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgWE1MU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4KVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLlhNTFNldC5heGlvc30pXHJcbiAgLy8gcmVkdXggLSBOb3RpZmljYXRpb25cclxuICBjb25zdCBsaWZldGltZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uLmxpZmUpXHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICBfdG9rZW46IGdldFRva2VuKCksXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIHRpbWVvdXRWYXJcclxuICBsZXQgYmx1clRpbWVvdXQgPSBudWxsXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBibHVyVGltZW91dCA9IGJsdXJUaW1lb3V0ICE9PSBudWxsID8gY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KSA6IHNldFRpbWVvdXQoKCkgPT4gZS5uYXRpdmVFdmVudC5zdWJtaXR0ZXIuYmx1cigpLCA1MDApXHJcbiAgICBhamF4LnBvc3QoJy9sb2dpbicsIHsgLi4uc3RhdGUgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gcmVzLmRhdGEudXJsID09PSBcIi9cIiA/IGAke1hNTFNldC5uYXZVUkx9YCA6IGAke1hNTFNldC5uYXZVUkx9LyR7cmVzLmRhdGEudXJsfWBcclxuICAgICAgICBkaXNwYXRjaChzZXRVcmwoXCJcIikpXHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLCBcclxuICAgICAgICAgIG1zZzogYEJpZW52ZW51ZSAke3N0YXRlLmVtYWlsfWAsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRDb25uZWN0ZWQodHJ1ZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5uYXYoY2xlYW5QYXRoKHVybCkpLDQwMClcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsIFxyXG4gICAgICAgICAgbXNnOiBcImNvbm5lY3Rpb24gaW5jb3JyZWN0ZVwiLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbmF2KGAke1hNTFNldC5uYXZVUkx9L2xvZ2luYClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBzdGF0ZVxyXG5cclxuICByZXR1cm4gPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwibG9naW5cIiBjbGFzc05hbWU9eydyb3VuZGVkLWxnIGJnLXdoaXRlIGNvbG9yLWRhcmsnKyhpc0Nvbm5lY3RlZCA/ICcgY29ubmVjdGVkJzpudWxsKX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+Q29ubmV4aW9uPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtY2xlYXItb3V0bGluZSc+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiTW90IGRlIHBhc3NlXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJtb3QgZGUgcGFzc2UuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBkaXZDbHM9J3B0LTEgcC00J1xyXG4gICAgICBidG5DbHM9J2J0biBwcmltYXJ5IHctZnVsbCdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcbi8vIENSVUQgQ29tcGxldCBwb3VyIGxlcyBQYWdlc1xyXG5cclxuY29uc3QgUGFnZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXQsIHBhcmFtczoge3BhZ2U6ICdwYWdlcyd9fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4LmdldCgnL3JlcXVlc3QnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAncGFnZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnL21pbmktYWRtaW4vbG9nb3V0JylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgdXBkYXRlUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlUGFnZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAge3RhZzogJ3RpdGxlJywgbmFtZTogJ3RpdHJlJywgZHJhdzogJ3N0cmluZycsIGNvbFNpemU6IDR9LFxyXG4gICAge3RhZzogJ3NvcnQnLCBuYW1lOiAnb3JkcmUnLCBkcmF3OiAnbnVtYmVyJywgY29sU2l6ZTogXCIxLTVcIn0sXHJcbiAgICB7dGFnOiAnc2V0dGluZ3MnLCBuYW1lOiAnbGFuZGluZycsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMn1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYWdlcyd9PlxyXG4gICAgICB7ZGF0YSA/IDxDb250ZW50TmF2IFxyXG4gICAgICAgIGRhdGE9e2RhdGF9IGhlYWRlcj17aGVhZGVyfSBcclxuICAgICAgICB1cGRhdGU9e3VwZGF0ZVBhZ2V9IHJlbW92ZT17cmVtb3ZlUGFnZX0gXHJcbiAgICAgICAgLz5cclxuICAgICAgICA6XHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXMiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFBhZ2VzQ29udGFpbmVyLCBTZWxlY3RvciwgVHh0TGFiZWxJbnB1dCB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyBhcmVFcXVhbCwgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gUlVEIGNvbXBsZXQgcG91ciBsZXMgb3B0aW9ucyBkZSBzaXRlXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsgLi4uYXhpb3NTZXQgfSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuc2V0dGluZ3MpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2NoYW5nZSwgc2V0Q2hhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZV0gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgICAgICBzZXRJbml0aWFsU3RhdGUoeyAuLi5yZXMuZGF0YSB9KVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gKHYpID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlICdBdXRob3InOlxyXG4gICAgICAgIHJldHVybiAnYXV0ZXVyJztcclxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOlxyXG4gICAgICAgIHJldHVybiAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjYXNlICdTaXRlTmFtZSc6XHJcbiAgICAgICAgcmV0dXJuICdub20gZHUgc2l0ZSc7XHJcbiAgICAgIGNhc2UgJ0xhbmRpbmcnOlxyXG4gICAgICAgIHJldHVybiAncGFnZSBkXFwnYWNjdWVpbCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHByb3ApID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBbcHJvcF06IGUudGFyZ2V0LnZhbHVlIH1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRMYW5kaW5nID0gKHYpID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0geyAuLi5kYXRhLCBMYW5kaW5nOiB2IH1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFyYW3DqHRyZXMnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgPyA8PlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdBdXRob3InKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9IGlkPVwiQXV0aG9yXCIgdmFsdWU9e2RhdGEuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0Rlc2NyaXB0aW9uJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9IGlkPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZGF0YS5EZXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ1NpdGVOYW1lJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKSl9IGlkPVwiU2l0ZU5hbWVcIiB2YWx1ZT17ZGF0YS5TaXRlTmFtZX0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RvciBjbHM9J3NlY29uZGFyeScgaWNvbkNscz0naWNvbicgYWN0aXZlPXtkYXRhLkxhbmRpbmd9IGxpc3Q9e2RhdGEuUGFnZXN9IGFjdGlvbj17c2V0TGFuZGluZ30+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+UGFnZTwvaDI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0b3I+XHJcbiAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYW5nZSAmJiA8QnV0dG9uIGJ0bkNscz17J2J0biBzZWNvbmRhcnkgZmFkZUluTGVmdCd9IGRpdkNscz17XCJwLTIgZmxleCBqdXN0aWZ5LWVuZFwifT5TYXV2ZWdhcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3MiLCJpbXBvcnQgUGFnZXMgZnJvbSBcIi4vUGFnZXNcIjtcclxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuL0FydGljbGVzXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuXHJcbmV4cG9ydCB7IFBhZ2VzLCBBcnRpY2xlcywgU2V0dGluZ3MsIExvZ2luIH0iLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBjbGVhblBhdGgsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHNldEJhc2VVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFqYXhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYWpheCcsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYmFzZVVybDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgbmF2VVJMOiBcIi9taW5pLWFkbWluXCIsXHJcbiAgICBheGlvczoge1xyXG4gICAgICBiYXNlVVJMOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IGFqYXhTbGljZSBmcm9tIFwiLi9hamF4U2xpY2VcIjtcclxuaW1wb3J0IG5vdGlmaWNhdGlvblNsaWNlIGZyb20gXCIuL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG5leHBvcnQgeyBhamF4U2xpY2UsIG5vdGlmaWNhdGlvblNsaWNlIH0iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJub3RpZmljYXRpb25cIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIG1zZzogXCJcIixcclxuICAgIHN0YXR1czogXCJvdXRcIixcclxuICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgdGltZW91dDogbnVsbCxcclxuICAgIGxpZmU6IDQwMDBcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBub3RpZnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGNvbnN0IHt0eXBlLG1zZyx0aW1lb3V0fSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgc3RhdHVzIDogXCJpblwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5S2VlcDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qge2V2ZW50LCBmdW5jfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGlmIChldmVudCA9PT0gXCJzdGF5XCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBmdW5jLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlDbG9zZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICBzdGF0dXM6ICdvdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBub3RpZnksIG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gPSBub3RpZmljYXRpb25TbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25TbGljZSwgYWpheFNsaWNlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYWpheDogYWpheFNsaWNlLFxyXG4gICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25TbGljZVxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGVsZXRlJ1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRWRpdCdcclxuXHJcbmNvbnN0IEFjdGlvbnNSb3cgPSAoeyBpZCwgdXBkYXRlLCByZW1vdmUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBmbGV4LW5vd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtMyc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24tYnV0dG9uIHNlY29uZGFyeScgb25DbGljaz17KGUpID0+IHVwZGF0ZShpZCl9PlxyXG4gICAgICAgIDxFZGl0IGNscz0nYWN0aW9uLWljb24gZWRpdCcvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gc2Vjb25kYXJ5JyBvbkNsaWNrPXsoZSkgPT4gcmVtb3ZlKGlkKX0+XHJcbiAgICAgICAgPERlbGV0ZSBjbHM9J2FjdGlvbi1pY29uIGRlbGV0ZScvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uc1JvdyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ1NSRklucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiB2YWx1ZT17Z2V0VG9rZW4oKX0gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENTUkZJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZWNrZWQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0NoZWNrZWQnXHJcblxyXG5jb25zdCBDaGVja2JveCA9ICh7IGNscywgY2hhbmdlLCBjaGVja2VkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImlucHV0LWNoZWNrYm94IFwiICsgY2xzfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgeyBjaGVja2VkID8gPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LXRydWUnPjxDaGVja2VkIC8+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J2lucHV0LWNoZWNrYm94LWZhbHNlJz48L2Rpdj4gfVxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3giLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBnZXRQcm9wc0Jvb2xTdGF0dXMsIGlzQXJyYXksIHN0ck5vcm1hbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSAnLi9OdW1iZXJJbnB1dCdcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXHJcbmltcG9ydCBTd2l0Y2hJbnB1dCBmcm9tICcuL1N3aXRjaElucHV0J1xyXG5pbXBvcnQgeyBBY3Rpb25zUm93LCBTZWxlY3RvciB9IGZyb20gJy4vJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbnROYXYgPSAoeyBoZWFkZXIsIGRhdGEsIHVwZGF0ZSwgcmVtb3ZlLCBjcmVhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2gsIHVwZGF0ZVNlYXJjaF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBhamF4RGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGluaXRpYXRpb24gZGVzIGZpbHRyZXNcclxuICAgIGNvbnN0IHNGaWVsZHMgPSB7fVxyXG4gICAgaGVhZGVyLm1hcCgoaCkgPT4gXHJcbiAgICAgIHNGaWVsZHNbaC50YWddID0gaC50YWcgIT09IFwicGFnZVwiID9cclxuICAgICAgeyB2YWx1ZTogaC5kcmF3ID09PSBcIm51bWJlclwiID8gMCA6IGguZHJhdy5tYXRjaCgvXmJvb2wvKSA/IGZhbHNlIDogXCJcIiwgYWN0aXZlOiBmYWxzZSB9IDpcclxuICAgICAgeyB2YWx1ZTogWy4uLmFqYXhEYXRhW2gudGFnK1wic1wiXV0ubWFwKChlbCxpKSA9PiAoey4uLmVsLCBmaWx0ZXJlZDogaSA9PSAwID8gdHJ1ZSA6IGZhbHNlfSkpLCBhY3RpdmU6IGZhbHNlIH1cclxuICAgICAgKVxyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc0ZpZWxkcyB9KTtcclxuICB9LCBbXSlcclxuXHJcbiAgLy8gZm9ybWF0IGxlcyBkb25uw6llIHBvdXIgYWZmaWNoYWdlXHJcbiAgY29uc3Qgc2V0VmlldyA9ICh2YWx1ZSwgc2V0ID0gJ3ZhbHVlJywgdGFnKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqZWN0XFwuLisvZykudGVzdChzZXQpOlxyXG4gICAgICAgIGxldCBuYW1lID0gc2V0LnNwbGl0KCcuJylbc2V0LnNwbGl0KCcuJykubGVuZ3RoIC0gMV1cclxuICAgICAgICByZXR1cm4gY2FwaXRhbGl6ZShhamF4RGF0YVtgJHt0YWd9c2BdW051bWJlcih2YWx1ZSkgLSAxXVtuYW1lXSlcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gPFN1Y2Nlc3MgY2xzPSdoLTYgdy02IG0tYXV0byBpY29uIHN1Y2Nlc3MnIC8+IDogPENsb3NlIGNscz0naC02IHctNiBtLWF1dG8gaWNvbiBmYWxzZScgLz5cclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ebnVtL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ec3RyL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IGNhcGl0YWxpemUodmFsdWUpIDogdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvLyB1cGRhdGUgZGVzIGZpbHRyZXMgZGUgcmVjaGVyY2hlc1xyXG4gIGNvbnN0IHNlYXJjaEhhbmRsZUNoYW5nZSA9IChlLCBmaWVsZCwgdmFsdWUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgY2FzZSAnc29ydCc6XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA8IDAgfHwgdmFsdWUgPT0gJycgPyAwIDogdmFsdWUgPiBkYXRhLmxlbmd0aCAtIDEgPyBkYXRhLmxlbmd0aCAtIDEgOiB2YWx1ZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc2VhcmNoLCBbZmllbGRdOiB7IC4uLnNlYXJjaFtmaWVsZF0sIHZhbHVlOiB2YWx1ZSB9IH0pXHJcbiAgfVxyXG5cclxuICAvLyB1cGRhdGUgZGVzIGZpbHRyZXMgZGUgcmVjaGVyY2hlcyAoIHNww6ljaWZpcXVlIMOgIHVuZSBsaXN0ZSBkJ8OpbMOpbWVudCBhdHRyaWJ1dCBcImZpbHRlcmVkXCIpXHJcbiAgY29uc3QgdXBkYXRlQXJyYXlGaWx0ZXIgPSAodmFsdWUsIHRhZykgPT4ge1xyXG4gICAgY29uc3QgYXJyYXkgPSBbLi4uc2VhcmNoW3RhZ10udmFsdWVdO1xyXG4gICAgdXBkYXRlU2VhcmNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgLi4uc2VhcmNoLFxyXG4gICAgICAgIFt0YWddOiB7XHJcbiAgICAgICAgICAuLi5zZWFyY2hbdGFnXSxcclxuICAgICAgICAgIHZhbHVlIDogYXJyYXkubWFwKGVsID0+ICh7Li4uZWwsIGZpbHRlcmVkIDogZWwuaWQgPT09IHZhbHVlID8gdHJ1ZSA6IGZhbHNlfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gIH1cclxuXHJcbiAgLy8gcmVuZHUgc2FucyBmaWx0cmVzXHJcbiAgY29uc3QgYmFzaWNSZW5kZXIgPSAoZGF0YSkgPT4gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdjb250ZW50LXJvdyc+XHJcbiAgICB7XHJcbiAgICAgIGhlYWRlci5tYXAoKHsgdGFnLCBkcmF3LCBjb2xTaXplIH0sIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0ke2NvbFNpemV9YH0+e3NldFZpZXcoZmllbGRbdGFnXSwgZHJhdywgdGFnKX08L2Rpdj4pXHJcbiAgICB9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBhY3Rpb24tZmllbGQgY29sc2l6ZS0yYH0+PEFjdGlvbnNSb3cgaWQ9e2t9IHVwZGF0ZT17dXBkYXRlfSByZW1vdmU9e3JlbW92ZX0gLz48L2Rpdj5cclxuICA8L2Rpdj5cclxuICApXHJcblxyXG4gIC8vIHJlbmR1IGF2ZWMgZmlsdHJlc1xyXG4gIGNvbnN0IGZpbHRlclJlbmRlciA9IChkYXRhKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoRmlsdGVyID0ge31cclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzZWFyY2gpKSB7XHJcbiAgICAgIGlmICh2LmFjdGl2ZSkge1xyXG4gICAgICAgIHNlYXJjaEZpbHRlcltrXSA9IHYudmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhLm1hcCgoZmllbGQsIGspID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2VhcmNoRmlsdGVyKSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHYpIHtcclxuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgIGlmICghc3RyTm9ybWFsaXplKGZpZWxkW2tdKS5tYXRjaChzdHJOb3JtYWxpemUodikpICYmIHYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSBmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxyXG4gICAgICAgICAgICBpZiAodiA9PT0gdHJ1ZSAmJiAhZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2ID09PSBmYWxzZSAmJiBmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcclxuICAgICAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcclxuICAgICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB2LmZpbmQoZWwgPT4gZWwuZmlsdGVyZWQpLmlkXHJcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW2tdICE9PSBmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J2NvbnRlbnQtcm93Jz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfTwvZGl2PilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGFjdGlvbi1maWVsZCBjb2xzaXplLTJgfT48QWN0aW9uc1JvdyBpZD17a30gdXBkYXRlPXt1cGRhdGVDb250ZW50fSAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBhY3RpdmUgdW4gZmlsdHJlIChzZWxvbiBjaWJsZSB1dGlsaXNhdGV1cilcclxuICBjb25zdCB0b2dnbGVGaWx0ZXIgPSAoZSwgY2hlY2tlZCkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHVwZGF0ZVNlYXJjaCh7IC4uLnNlYXJjaCwgW2NoZWNrZWRdOiB7IC4uLnNlYXJjaFtjaGVja2VkXSwgYWN0aXZlOiAhc2VhcmNoW2NoZWNrZWRdLmFjdGl2ZSB9IH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50LW5hdic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1oZWFkZXInPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlci5tYXAoKGgsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX1gfT57Y2FwaXRhbGl6ZShoLm5hbWUpfTwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yYH0+e2NhcGl0YWxpemUoJ2FjdGlvbnMnKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1zZWFyY2gnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlYXJjaCA/XHJcbiAgICAgICAgICAgIGhlYWRlci5tYXAoKGgsIGspID0+IHtcclxuICAgICAgICAgICAgICBsZXQgSW5wdXQ7XHJcbiAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgSW5wdXQgPSA8TnVtYmVySW5wdXQgY2xzPXtgc2Vjb25kYXJ5IGNvbHNpemUtMTBgfSBpbnBDbHM9XCJpbnB1dC1udW1iZXIgc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhlLCB2YWx1ZSkgPT4gc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCB2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e051bWJlcihzZWFyY2hbaC50YWddLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtoLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxTd2l0Y2hJbnB1dCAgY2xzPSdzZWNvbmRhcnknIHZhbHVlPXtzZWFyY2hbaC50YWddLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlPXsoZSkgPT4gc2VhcmNoSGFuZGxlQ2hhbmdlKGUsIGgudGFnLCAhc2VhcmNoW2gudGFnXS52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm9iai9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxTZWxlY3RvciBjbHM9J3NlY29uZGFyeScgXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17c2VhcmNoW2gudGFnXS52YWx1ZX0gYWN0aXZlPXtzZWFyY2hbaC50YWddLnZhbHVlLmZpbmQoZWwgPT4gZWwuZmlsdGVyZWQpLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249eyh2YWx1ZSkgPT4gdXBkYXRlQXJyYXlGaWx0ZXIodmFsdWUsIGgudGFnKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxpbnB1dCB0eXBlPSd0ZXh0JyBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0LXR4dCBzZWNvbmRhcnkgY29sc2l6ZS0xMCcgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsIGUudGFyZ2V0LnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2NhcGl0YWxpemUoaC5uYW1lKX0gdmFsdWU9e3NlYXJjaFtoLnRhZ10udmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHNlYXJjaC1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfSBmbGV4IGp1c3RpZnktaXRlbXMtc3RyZXRjaCBmbGV4LW5vd3JhcGB9PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNscz0nc2Vjb25kYXJ5JyBjaGVja2VkPXtzZWFyY2hbaC50YWddLmFjdGl2ZX0gY2hhbmdlPXsoZSkgPT4gdG9nZ2xlRmlsdGVyKGUsIGgudGFnKX0gLz5cclxuICAgICAgICAgICAgICAgIHtJbnB1dH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfSkgOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMmB9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWlubmVyICc+XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICFzZWFyY2ggfHwgc2VhcmNoICYmICFnZXRQcm9wc0Jvb2xTdGF0dXMoc2VhcmNoLCBcImFjdGl2ZVwiLCB0cnVlKSA/XHJcbiAgICAgICAgICAgIGRhdGEgJiYgaXNBcnJheShkYXRhKSA/IGJhc2ljUmVuZGVyKGRhdGEpIDogbnVsbFxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIGRhdGEgJiYgaXNBcnJheShkYXRhKSA/IGZpbHRlclJlbmRlcihkYXRhKSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE5hdiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DYWxlbmRhcidcclxuXHJcbmNvbnN0IERhdGVQaWNrZXIgPSAoeyBjaGFuZ2UsIHZhbHVlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWNhbGVuZGFyJyB0YWJJbmRleD17LTF9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZS10eHQnPnsodmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1mcicpKX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhbGVuZGFyJz5cclxuICAgICAgICA8Q2FsZW5kYXIgY2xzPXsnaWNvbid9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9EYXRlUGlja2VyJ1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnLi9SaWNoVGV4dCdcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4vU2VsZWN0b3InXHJcbmltcG9ydCBTd2l0Y2hJbnB1dCBmcm9tICcuL1N3aXRjaElucHV0J1xyXG5cclxuY29uc3QgTW9kYWxFZGl0b3IgPSAoeyBkYXRhLCBzY2hlbWEsIHRpdGxlLCBjbG9zZSB9KSA9PiB7XHJcbiAgY29uc3QgW21EYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbXB0eSA9IHt9XHJcbiAgICBPYmplY3QuZW50cmllcyhzY2hlbWEpLm1hcCgoW25hbWUsIHBhcl0saSkgPT4ge1xyXG4gICAgICBsZXQgdmFsO1xyXG4gICAgICBzd2l0Y2ggKHBhci50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICB2YWwgPSBcIlwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICAgIGNhc2UgXCJzb3J0aW5nXCI6XHJcbiAgICAgICAgICB2YWwgPSBwYXIubGlzdC5sZW5ndGggLSAxXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYm9vbFwiOlxyXG4gICAgICAgICAgdmFsID0gZmFsc2VcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICB2YWwgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgdmFsLnNldEhvdXJzKDAsMCwwLDApXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsID0gXCJcIlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZW1wdHlbbmFtZV0gPSB2YWxcclxuICAgIH0pXHJcbiAgICAhZGF0YSA/IHNldERhdGEoey4uLmVtcHR5fSkgOiBzZXREYXRhKHsuLi5kYXRhfSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuICFtRGF0YSA/IG51bGwgOiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21vZGFsLWVkaXRvcic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS1iYXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZS1iYXItdHh0Jz57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJhci1jbG9zZScgb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJ3LTYgaC02XCIgLz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC13aW5kb3cnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChba2V5LHZhbHVlXSxpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBJbnB1dDtcclxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgICAgIElucHV0ID0gPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkJz57dmFsdWUubmFtZX0gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0LXR4dCBzZWNvbmRhcnknIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21EYXRhW2tleV19IHBsYWNlaG9sZGVyPXt2YWx1ZS5uYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2Jvb2wnOlxyXG4gICAgICAgICAgICAgICAgSW5wdXQgPSA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaElucHV0IHZhbHVlPXttRGF0YVtrZXldfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdzb3J0aW5nJzpcclxuICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0zJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkJz57dmFsdWUubmFtZX0gOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdG9yIGNscz17J3NlY29uZGFyeSBwLTAnfSBpY29uQ2xzPXsnaWNvbid9IGxpc3Q9e3ZhbHVlLmxpc3R9IGFjdGl2ZT17bURhdGFba2V5XX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgICAgIElucHV0ID0gPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMnPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdpbnB1dC1sYWJlbCBwLTIgZm9udC1ib2xkJz57dmFsdWUubmFtZX0gOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciB2YWx1ZT17bURhdGFba2V5XX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleSA9IHtpfSBjbGFzc05hbWU9J21vZGFsLWZpZWxkJz57SW5wdXR9PC9kaXY+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyhzY2hlbWEpLm1hcCgoW2ssdl0saSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHYudHlwZSA9PT0gXCJ0ZXh0XCIgPyA8UmljaFRleHQgLz4gOiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxFZGl0b3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTmF2TGkgPSAoeyBjaGlsZHJlbiwgdG8sIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIHRvPXt0b30gb25DbGljaz17b25DbGlja30gZW5kPnsgY2hpbGRyZW4gfTwvTmF2TGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE51bWJlcklucHV0ID0gKHsgY2xzLCBpbnBDbHMsIGNoYW5nZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzICsgJyBpbnB1dC1udW1iZXItd3JhcCBmbGV4IGZsZXgtbm93cmFwIHJlbGF0aXZlJ30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctYnRuJyB0YXJnZXQ9XCJkb3duXCIgb25DbGljaz17KGUpID0+IGNoYW5nZShlLHZhbHVlLTEpfSA+LTwvc3Bhbj48aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2lucENscyArICcgY29sc2l6ZS0xMCd9IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlKGUsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3ZhbHVlfSAvPjxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctYnRuJyB0YXJnZXQ9XCJ1cFwiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSx2YWx1ZSsxKX0+Kzwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWdlc0NvbnRhaW5lciA9ICh7Y2hpbGRyZW4gLCB0aXRsZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIG1iLTgnPnt0aXRsZX08L2Rpdj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udGFpbmVyIiwiaW1wb3J0IHskZ2V0Um9vdCwgJGdldFNlbGVjdGlvbn0gZnJvbSAnbGV4aWNhbCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtMZXhpY2FsQ29tcG9zZXJ9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3Nlcic7XHJcbmltcG9ydCB7UGxhaW5UZXh0UGx1Z2lufSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsUGxhaW5UZXh0UGx1Z2luJztcclxuaW1wb3J0IHtDb250ZW50RWRpdGFibGV9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb250ZW50RWRpdGFibGUnO1xyXG5pbXBvcnQge0hpc3RvcnlQbHVnaW59IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxIaXN0b3J5UGx1Z2luJztcclxuaW1wb3J0IHtPbkNoYW5nZVBsdWdpbn0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbE9uQ2hhbmdlUGx1Z2luJztcclxuaW1wb3J0IHt1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0fSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0JztcclxuaW1wb3J0IExleGljYWxFcnJvckJvdW5kYXJ5IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxFcnJvckJvdW5kYXJ5JztcclxuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICcuLic7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIHBsYWNlaG9sZGVyOiAnZWRpdG9yLXBsYWNlaG9sZGVyJyxcclxufVxyXG4vLyBXaGVuIHRoZSBlZGl0b3IgY2hhbmdlcywgeW91IGNhbiBnZXQgbm90aWZpZWQgdmlhIHRoZVxyXG4vLyBMZXhpY2FsT25DaGFuZ2VQbHVnaW4hXHJcbmZ1bmN0aW9uIG9uQ2hhbmdlKGVkaXRvclN0YXRlKSB7XHJcbiAgZWRpdG9yU3RhdGUucmVhZCgoKSA9PiB7XHJcbiAgICAvLyBSZWFkIHRoZSBjb250ZW50cyBvZiB0aGUgRWRpdG9yU3RhdGUgaGVyZS5cclxuICAgIGNvbnN0IHJvb3QgPSAkZ2V0Um9vdCgpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpO1xyXG5cclxuICB9KTtcclxufVxyXG5cclxuXHJcbi8vIENhdGNoIGFueSBlcnJvcnMgdGhhdCBvY2N1ciBkdXJpbmcgTGV4aWNhbCB1cGRhdGVzIGFuZCBsb2cgdGhlbVxyXG4vLyBvciB0aHJvdyB0aGVtIGFzIG5lZWRlZC4gSWYgeW91IGRvbid0IHRocm93IHRoZW0sIExleGljYWwgd2lsbFxyXG4vLyB0cnkgdG8gcmVjb3ZlciBncmFjZWZ1bGx5IHdpdGhvdXQgbG9zaW5nIHVzZXIgZGF0YS5cclxuZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xyXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSaWNoVGV4dENvbXBvbmVudCgpIHtcclxuICBjb25zdCBpbml0aWFsQ29uZmlnID0ge1xyXG4gICAgbmFtZXNwYWNlOiAnTXlFZGl0b3InLCBcclxuICAgIHRoZW1lLFxyXG4gICAgb25FcnJvcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExleGljYWxDb21wb3NlciBpbml0aWFsQ29uZmlnPXtpbml0aWFsQ29uZmlnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtZWRpdG9yJz5cclxuICAgICAgICA8UGxhaW5UZXh0UGx1Z2luXHJcbiAgICAgICAgICBjb250ZW50RWRpdGFibGU9ezxDb250ZW50RWRpdGFibGUgY2xhc3NOYW1lPSdlZGl0b3ItdGV4dCcgLz59XHJcbiAgICAgICAgICBFcnJvckJvdW5kYXJ5PXtMZXhpY2FsRXJyb3JCb3VuZGFyeX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxPbkNoYW5nZVBsdWdpbiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgPEhpc3RvcnlQbHVnaW4gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xleGljYWxDb21wb3Nlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dENvbXBvbmVudDsiLCJpbXBvcnQgUmljaFRleHRDb21wb25lbnQgZnJvbSBcIi4vUmljaFRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpY2hUZXh0Q29tcG9uZW50IDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FeHBhbmQnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBjbHMsIGxpc3QsIGFjdGl2ZSwgaWNvbkNscywgY2hpbGRyZW4sIGFjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsYXN0RXZlbnQsIHNldExhc3RFdmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAvLyBtaXNlIGVuIHBsYWNlIGRlIGwnw6lsw6ltZW50IGFjdGlmIHBhciBkw6lmYXV0IChwcm9wIGFjdGl2ZSBvYmxpZ2F0b2lyZSlcclxuICBjb25zdCBsYW5kaW5nID0gbGlzdC5maW5kKGkgPT4gaS5pZCA9PT0gYWN0aXZlKVxyXG4gIGNvbnN0IGF2YWlibGUgPSBsaXN0LmZpbHRlcihpID0+IGkuaWQgIT09IGxhbmRpbmcuaWQpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0ICRlbCA9IGUudGFyZ2V0XHJcbiAgICB3aGlsZSAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0b3InKSA9PSBmYWxzZSkge1xyXG4gICAgICAkZWwgPSAkZWwucGFyZW50Tm9kZVxyXG4gICAgfVxyXG4gICAgaWYgKChlLnR5cGUgPT09ICdjbGljaycgJiYgbGFzdEV2ZW50ID09PSAnY2xpY2snKSB8fCBlLnR5cGUgIT09ICdjbGljaycpIHtcclxuICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICAgIGxhc3RFdmVudCA9PT0gJ2NsaWNrJyAmJiB0b2dnbGUgPT09IHRydWUgPyAkZWwuYmx1cigpIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHNldExhc3RFdmVudChlLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZSx2KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0b2dnbGVTZWxlY3QoZSk7XHJcbiAgICBhY3Rpb24odik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGNscyA/ICdzZWxlY3RvciAnICsgY2xzIDogJ3NlbGVjdG9yJykgKyAodG9nZ2xlID8gJyBvcGVuZWQnIDogJycpfSBvbkZvY3VzPXt0b2dnbGVTZWxlY3R9IG9uQmx1cj17dG9nZ2xlU2VsZWN0fSB0YWJJbmRleD17LTF9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdCBhY3RpdmUnIHZhbHVlPXtsYW5kaW5nLmlkfSBvbkNsaWNrPXt0b2dnbGUgPyB0b2dnbGVTZWxlY3QgOiBudWxsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZShsYW5kaW5nLnRpdGxlKX08L2Rpdj48RXhwYW5kIGNscz17aWNvbkNsc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRvZ2dsZSA/IDxkaXYgY2xhc3NOYW1lPSdvcHQtd3JhcHBlcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YWlibGUubWFwKCh7aWQsdGl0bGV9LGspID0+IFxyXG4gICAgICAgICAgICAgIC8vIGwnaWQgZGUgbCfDqWzDqW1lbnQgY2hvaXNpIGVzdCBkaXJlY3RlbWVudCBlbnZvecOpIGRhbnMgXCJhY3Rpb25cIiAoZnVuY3Rpb24gw6AgcGFzc2VyIGVuIHByb3ApXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nb3B0JyB2YWx1ZT17aWR9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlLGlkKX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUodGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwiLy8gdWkgYm9vbGVhbiByZXByZXNlbnRhdGlvblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3dpdGNoSW5wdXQgPSAoeyBjbHMgPSBcIlwiLCB2YWx1ZSwgY2hhbmdlIH0pID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydpbnB1dC1zd2l0Y2gnICsgKHZhbHVlID8gJyB0cnVlJzogJyBmYWxzZScpICsgYCAke2Nsc31gfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LXN3aXRjaC1idXR0b24nPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvSW5mbydcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1N1Y2Nlc3MnXHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9XYXJuaW5nJ1xyXG5pbXBvcnQgRGFuZ2VyIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9EYW5nZXInXHJcbmltcG9ydCB7IG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcblxyXG5jb25zdCBUb2FzdCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24pXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBtc2csIHR5cGUsIHN0YXR1cyB9ID0gZGF0YVxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgJ0luZm8nOiA8SW5mbyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnU3VjY2Vzcyc6IDxTdWNjZXNzIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdXYXJuaW5nJzogPFdhcm5pbmcgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ0Rhbmdlcic6IDxEYW5nZXIgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0b2FzdCAke3R5cGV9ICR7c3RhdHVzfWB9IFxyXG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnc3RheSd9KSl9IFxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnY2xvc2UnLCBmdW5jOiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCAxNDAwKX0pICl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZS1pY29uJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbnNbY2FwaXRhbGl6ZSh0eXBlKV1cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtYnRuJz48YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlfT48Q2xvc2UgY2xzPVwiaC01IHctNVwiIC8+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtY29udGVudCc+XHJcbiAgICAgICAgeyBtc2cgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9hc3QiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFR4dExhYmVsSW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0TGFiZWxJbnB1dCIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcbmltcG9ydCBDb250ZW50TmF2IGZyb20gJy4vQ29udGVudE5hdidcclxuaW1wb3J0IENTUkZJbnB1dCBmcm9tICcuL0NTUkZJbnB1dCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vTmF2TGknXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuL1BhZ2VzQ29udGFpbmVyJ1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9TZWxlY3RvcidcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnXHJcbmltcG9ydCBUeHRMYWJlbElucHV0IGZyb20gJy4vVHh0TGFiZWxJbnB1dCdcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJy4vTnVtYmVySW5wdXQnXHJcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xyXG5pbXBvcnQgU3dpdGNoSW5wdXQgZnJvbSAnLi9Td2l0Y2hJbnB1dCdcclxuaW1wb3J0IEFjdGlvbnNSb3cgZnJvbSAnLi9BY3Rpb25zUm93J1xyXG5pbXBvcnQgTW9kYWxFZGl0b3IgZnJvbSAnLi9Nb2RhbEVkaXRvcidcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9EYXRlUGlja2VyJ1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnLi9SaWNoVGV4dC8nXHJcblxyXG5leHBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250ZW50TmF2LFxyXG4gIENTUkZJbnB1dCxcclxuICBOYXZMaSxcclxuICBQYWdlc0NvbnRhaW5lcixcclxuICBTZWxlY3RvcixcclxuICBUb2FzdCxcclxuICBUeHRMYWJlbElucHV0LFxyXG4gIE51bWJlcklucHV0LFxyXG4gIENoZWNrYm94LFxyXG4gIFN3aXRjaElucHV0LFxyXG4gIEFjdGlvbnNSb3csXHJcbiAgTW9kYWxFZGl0b3IsXHJcbiAgRGF0ZVBpY2tlcixcclxuICBSaWNoVGV4dFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgSHcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gPGgxPkhlbGxvIFdvcmxkPC9oMT5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh3IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgSGVsbG8gZnJvbSAnLi4vY29tcG9uZW50cy9oZWxsb1dvcmxkJztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIlxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9hZG1pbi9yZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY29uc3QgTWFpbkFkbWluID0gKCkgPT5cclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BZG1pbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENhbGVuZGFyID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA2NTZxLTE3IDAtMjguNS0xMS41VDQ0MCA2MTZxMC0xNyAxMS41LTI4LjVUNDgwIDU3NnExNyAwIDI4LjUgMTEuNVQ1MjAgNjE2cTAgMTctMTEuNSAyOC41VDQ4MCA2NTZabS0xNjAgMHEtMTcgMC0yOC41LTExLjVUMjgwIDYxNnEwLTE3IDExLjUtMjguNVQzMjAgNTc2cTE3IDAgMjguNSAxMS41VDM2MCA2MTZxMCAxNy0xMS41IDI4LjVUMzIwIDY1NlptMzIwIDBxLTE3IDAtMjguNS0xMS41VDYwMCA2MTZxMC0xNyAxMS41LTI4LjVUNjQwIDU3NnExNyAwIDI4LjUgMTEuNVQ2ODAgNjE2cTAgMTctMTEuNSAyOC41VDY0MCA2NTZaTTQ4MCA4MTZxLTE3IDAtMjguNS0xMS41VDQ0MCA3NzZxMC0xNyAxMS41LTI4LjVUNDgwIDczNnExNyAwIDI4LjUgMTEuNVQ1MjAgNzc2cTAgMTctMTEuNSAyOC41VDQ4MCA4MTZabS0xNjAgMHEtMTcgMC0yOC41LTExLjVUMjgwIDc3NnEwLTE3IDExLjUtMjguNVQzMjAgNzM2cTE3IDAgMjguNSAxMS41VDM2MCA3NzZxMCAxNy0xMS41IDI4LjVUMzIwIDgxNlptMzIwIDBxLTE3IDAtMjguNS0xMS41VDYwMCA3NzZxMC0xNyAxMS41LTI4LjVUNjQwIDczNnExNyAwIDI4LjUgMTEuNVQ2ODAgNzc2cTAgMTctMTEuNSAyOC41VDY0MCA4MTZaTTE4MCA5NzZxLTI0IDAtNDItMTh0LTE4LTQyVjI5NnEwLTI0IDE4LTQydDQyLTE4aDY1di0yOHEwLTEzLjYgOS4yLTIyLjggOS4yLTkuMiAyMi44LTkuMiAxNC4wMjUgMCAyMy41MTMgOS4yUTMxMCAxOTQuNCAzMTAgMjA4djI4aDM0MHYtMjhxMC0xMy42IDkuMi0yMi44IDkuMi05LjIgMjIuOC05LjIgMTQuMDI1IDAgMjMuNTEzIDkuMlE3MTUgMTk0LjQgNzE1IDIwOHYyOGg2NXEyNCAwIDQyIDE4dDE4IDQydjYyMHEwIDI0LTE4IDQydC00MiAxOEgxODBabTAtNjBoNjAwVjQ4NkgxODB2NDMwWm0wLTQ5MGg2MDBWMjk2SDE4MHYxMzBabTAgMFYyOTZ2MTMwWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDaGVja2VkID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTguOSAzNS4xcS0uMyAwLS41NS0uMS0uMjUtLjEtLjUtLjM1TDguOCAyNS42cS0uNDUtLjQ1LS40NS0xLjEgMC0uNjUuNDUtMS4xLjQ1LS40NSAxLjA1LS40NS42IDAgMS4wNS40NWw4IDggMTguMTUtMTguMTVxLjQ1LS40NSAxLjA3NS0uNDV0MS4wNzUuNDVxLjQ1LjQ1LjQ1IDEuMDc1VDM5LjIgMTUuNEwxOS45NSAzNC42NXEtLjI1LjI1LS41LjM1LS4yNS4xLS41NS4xWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tlZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENsb3NlID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIiA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDYxOCAyNzAgODI4cS05IDktMjEgOXQtMjEtOXEtOS05LTktMjF0OS0yMWwyMTAtMjEwLTIxMC0yMTBxLTktOS05LTIxdDktMjFxOS05IDIxLTl0MjEgOWwyMTAgMjEwIDIxMC0yMTBxOS05IDIxLTl0MjEgOXE5IDkgOSAyMXQtOSAyMUw1MjIgNTc2bDIxMCAyMTBxOSA5IDkgMjF0LTkgMjFxLTkgOS0yMSA5dC0yMS05TDQ4MCA2MThaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvc2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEYW5nZXIgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTE3Ljc1IDQycS0uNiAwLTEuMTc1LS4yNS0uNTc1LS4yNS0uOTc1LS42NWwtOC43LTguN3EtLjQtLjQtLjY1LS45NzVUNiAzMC4yNXYtMTIuNXEwLS42LjI1LTEuMTc1LjI1LS41NzUuNjUtLjk3NWw4LjctOC43cS40LS40Ljk3NS0uNjVUMTcuNzUgNmgxMi41cS42IDAgMS4xNzUuMjUuNTc1LjI1Ljk3NS42NWw4LjcgOC43cS40LjQuNjUuOTc1VDQyIDE3Ljc1djEyLjVxMCAuNi0uMjUgMS4xNzUtLjI1LjU3NS0uNjUuOTc1bC04LjcgOC43cS0uNC40LS45NzUuNjVUMzAuMjUgNDJaTTI0IDMzLjk1cS43IDAgMS4yMjUtLjUyNS41MjUtLjUyNS41MjUtMS4yMjUgMC0uNy0uNTI1LTEuMjI1UTI0LjcgMzAuNDUgMjQgMzAuNDVxLS43IDAtMS4yMjUuNTI1LS41MjUuNTI1LS41MjUgMS4yMjUgMCAuNy41MjUgMS4yMjUuNTI1LjUyNSAxLjIyNS41MjVabTAtNy4ycS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE1LjFxMC0uNjUtLjQyNS0xLjA3NVEyNC42NSAxMy42IDI0IDEzLjZxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djEwLjE1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVpNMTcuNzUgMzloMTIuNUwzOSAzMC4yNXYtMTIuNUwzMC4yNSA5aC0xMi41TDkgMTcuNzV2MTIuNVpNMjQgMjRaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYW5nZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBEZWxldGUgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEzLjA1IDQycS0xLjIgMC0yLjEtLjktLjktLjktLjktMi4xVjEwLjVIOS41cS0uNjUgMC0xLjA3NS0uNDI1UTggOS42NSA4IDlxMC0uNjUuNDI1LTEuMDc1UTguODUgNy41IDkuNSA3LjVoNy45cTAtLjY1LjQyNS0xLjA3NVExOC4yNSA2IDE4LjkgNmgxMC4ycS42NSAwIDEuMDc1LjQyNS40MjUuNDI1LjQyNSAxLjA3NWg3LjlxLjY1IDAgMS4wNzUuNDI1UTQwIDguMzUgNDAgOXEwIC42NS0uNDI1IDEuMDc1LS40MjUuNDI1LTEuMDc1LjQyNWgtLjU1VjM5cTAgMS4yLS45IDIuMS0uOS45LTIuMS45Wm0wLTMxLjVWMzloMjEuOVYxMC41Wm01LjMgMjIuN3EwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjUuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNi4yNXEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1Wm04LjMgMHEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjUuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNi4yNXEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1Wm0tMTMuNi0yMi43VjM5IDEwLjVaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWxldGUiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFZGl0ID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk05IDM5aDIuMmwyMi4xNS0yMi4xNS0yLjItMi4yTDkgMzYuOFptMzAuNy0yNC4zLTYuNC02LjQgMi4xLTIuMXEuODUtLjg1IDIuMTI1LS44MjUgMS4yNzUuMDI1IDIuMTI1Ljg3NUw0MS44IDguNHEuODUuODUuODUgMi4xdC0uODUgMi4xWk03LjUgNDJxLS42NSAwLTEuMDc1LS40MjVRNiA0MS4xNSA2IDQwLjV2LTQuM3EwLS4zLjEtLjU1LjEtLjI1LjM1LS41TDMxLjIgMTAuNGw2LjQgNi40LTI0Ljc1IDI0Ljc1cS0uMjUuMjUtLjUuMzUtLjI1LjEtLjU1LjFabTI0Ljc1LTI2LjI1LTEuMS0xLjEgMi4yIDIuMlpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFeHBhbmQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA3MTEgMjQwIDQ3MWw0My00MyAxOTcgMTk4IDE5Ny0xOTcgNDMgNDMtMjQwIDIzOVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZm8gPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0yNC4xNSAzNHEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NXYtOS4wNXEwLS42LS40NS0xLjAyNVEyNC43NSAyMiAyNC4xNSAyMnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2OS4wNXEwIC42LjQ1IDEuMDI1LjQ1LjQyNSAxLjA1LjQyNVpNMjQgMTguM3EuNyAwIDEuMTc1LS40NS40NzUtLjQ1LjQ3NS0xLjE1dC0uNDc1LTEuMlEyNC43IDE1IDI0IDE1cS0uNyAwLTEuMTc1LjUtLjQ3NS41LS40NzUgMS4ydC40NzUgMS4xNXEuNDc1LjQ1IDEuMTc1LjQ1Wk0yNCA0NHEtNC4yNSAwLTcuOS0xLjUyNS0zLjY1LTEuNTI1LTYuMzUtNC4yMjUtMi43LTIuNy00LjIyNS02LjM1UTQgMjguMjUgNCAyNHEwLTQuMiAxLjUyNS03Ljg1UTcuMDUgMTIuNSA5Ljc1IDkuOHEyLjctMi43IDYuMzUtNC4yNVExOS43NSA0IDI0IDRxNC4yIDAgNy44NSAxLjU1UTM1LjUgNy4xIDM4LjIgOS44cTIuNyAyLjcgNC4yNSA2LjM1UTQ0IDE5LjggNDQgMjRxMCA0LjI1LTEuNTUgNy45LTEuNTUgMy42NS00LjI1IDYuMzUtMi43IDIuNy02LjM1IDQuMjI1UTI4LjIgNDQgMjQgNDRabTAtMjBabTAgMTdxNyAwIDEyLTV0NS0xMnEwLTctNS0xMlQyNCA3cS03IDAtMTIgNVQ3IDI0cTAgNyA1IDEydDEyIDVaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKHsgQ2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e0Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC43NSA0Mi41cS0xLjQ1IDAtMi41NS0xLjEtMS4xLTEuMS0xLjEtMi41NVY5LjE1cTAtMS40NSAxLjEtMi41NSAxLjEtMS4xIDIuNTUtMS4xaDE0Ljd2My42NUg4Ljc1djI5LjdoMTQuN3YzLjY1Wm0yNC41LTguNzUtMi43LTIuNjUgNS4zLTUuM2gtMTcuM3YtMy42NWgxNy4ybC01LjMtNS4zIDIuNy0yLjYgOS44IDkuOFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN1Y2Nlc3MgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIm0yMS4wNSAyOC41NS00LjktNC45cS0uNDUtLjQ1LTEuMS0uNDUtLjY1IDAtMS4xNS41LS41LjUtLjUgMS4xNSAwIC42NS41IDEuMWw2LjEgNi4xcS40NS40NSAxLjA1LjQ1LjYgMCAxLjA1LS40NWwxMi0xMnEuNDUtLjQ1LjQyNS0xLjEtLjAyNS0uNjUtLjQ3NS0xLjEtLjQ1LS41LTEuMTI1LS41dC0xLjE3NS41Wk0yNCA0NHEtNC4yNSAwLTcuOS0xLjUyNS0zLjY1LTEuNTI1LTYuMzUtNC4yMjUtMi43LTIuNy00LjIyNS02LjM1UTQgMjguMjUgNCAyNHEwLTQuMiAxLjUyNS03Ljg1UTcuMDUgMTIuNSA5Ljc1IDkuOHEyLjctMi43IDYuMzUtNC4yNVExOS43NSA0IDI0IDRxNC4yIDAgNy44NSAxLjU1UTM1LjUgNy4xIDM4LjIgOS44cTIuNyAyLjcgNC4yNSA2LjM1UTQ0IDE5LjggNDQgMjRxMCA0LjI1LTEuNTUgNy45LTEuNTUgMy42NS00LjI1IDYuMzUtMi43IDIuNy02LjM1IDQuMjI1UTI4LjIgNDQgMjQgNDRabTAtMjBabTAgMTdxNy4yNSAwIDEyLjEyNS00Ljg3NVQ0MSAyNHEwLTcuMjUtNC44NzUtMTIuMTI1VDI0IDdxLTcuMjUgMC0xMi4xMjUgNC44NzVUNyAyNHEwIDcuMjUgNC44NzUgMTIuMTI1VDI0IDQxWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VjY2VzcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFdhcm5pbmcgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQuNiA0MnEtLjQ1IDAtLjc3NS0uMnQtLjUyNS0uNTVxLS4yLS4zNS0uMjI1LS43MjUtLjAyNS0uMzc1LjIyNS0uNzc1bDE5LjQtMzMuNXEuMjUtLjQuNTc1LS41NzVRMjMuNiA1LjUgMjQgNS41cS40IDAgLjcyNS4xNzUuMzI1LjE3NS41NzUuNTc1bDE5LjQgMzMuNXEuMjUuNC4yMjUuNzc1LS4wMjUuMzc1LS4yMjUuNzI1dC0uNTI1LjU1cS0uMzI1LjItLjc3NS4yWm0yLjYtM2gzMy42TDI0IDEwWm0xNy0yLjg1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1IDAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1UTIyLjcgMzQgMjIuNyAzNC42NXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabTAtNS41NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NXYtOC4ycTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2OC4ycTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptLS4yLTYuMVpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXJuaW5nIiwiZnVuY3Rpb24gcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZWFjdENvbnRyb2xsZXJzID0ge307XG4gICAgY29uc3QgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzID0gKHIpID0+IHtcbiAgICAgICAgci5rZXlzKCkuZm9yRWFjaCgoa2V5KSA9PiAocmVhY3RDb250cm9sbGVyc1trZXldID0gcihrZXkpLmRlZmF1bHQpKTtcbiAgICB9O1xuICAgIGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyhjb250ZXh0KTtcbiAgICB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LmpzeGBdIHx8IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS50c3hgXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IGNvbnRyb2xsZXIgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG52YXIgY3JlYXRlUm9vdDtcblxudmFyIG0gPSByZXF1aXJlJCQwO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0OmNvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0Om1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdyZWFjdDp1bm1vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVuZGVyUmVhY3RFbGVtZW50KHJlYWN0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICAgICAgZWxlbWVudC5yb290ID0gY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgX2Rpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cbn1cbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgY29tcG9uZW50OiBTdHJpbmcsXG4gICAgcHJvcHM6IE9iamVjdCxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwicmVwbGFjZSIsImNhcGl0YWxpemUiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJlbmRPZlBhdGgiLCJsYXN0SW5kZXhPZiIsInVwZGF0ZVRpdGxlIiwibiIsImRvY3VtZW50IiwidGl0bGUiLCJzdHJDb250YWlucyIsInN0ciIsInNlYXJjaCIsInJlIiwiUmVnRXhwIiwic3RyTm9ybWFsaXplIiwidGVzdCIsImwiLCJyZWciLCJ3IiwiZ2V0UHJvcHNCb29sU3RhdHVzIiwib2JqIiwicHJvcCIsImJvb2xTdGF0ZSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImlzT2JqZWN0IiwiYXJlRXF1YWwiLCJvYmoxIiwib2JqMiIsImlzQXJyYXkiLCJpIiwiZW50MSIsImVudDIiLCJpc0RlZmluZWQiLCJ1bmRlZmluZWQiLCJpc0pTT04iLCJqc29uIiwiSlNPTiIsInBhcnNlIiwib2JqZWN0IiwiYXJyYXkiLCJBcnJheSIsInNvcnRBc2MiLCJhIiwiYiIsInNvcnQiLCJzb3J0RGVzIiwiUmVhY3QiLCJDb250ZW50IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJnZXRUb2tlbiIsInRva2VuIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJOYXZiYXIiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZU5hdmlnYXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlRvYXN0Iiwic2V0VXJsIiwiUGFnZXMiLCJTZXR0aW5ncyIsIkFydGljbGVzIiwiTG9naW4iLCJNZW51IiwibmFtZSIsIlBhZ2UiLCJMYXlvdXQiLCJ1cmwiLCJzdGF0ZSIsImFqYXgiLCJuYXYiLCJkaXNwYXRjaCIsInBhdGhuYW1lIiwibWF0Y2giLCJtYXAiLCJ1c2VTdGF0ZSIsIk5hdkxpIiwiTG9nb3V0IiwidXNlTG9jYXRpb24iLCJjbGVhckRhdGEiLCJlbmFibGUiLCJzZXRFbmFibGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTG9nb3V0IiwiUGFnZXNDb250YWluZXIiLCJDb250ZW50TmF2IiwiTW9kYWxFZGl0b3IiLCJwdXNoRGF0YSIsImF4aW9zIiwiYXhpb3NTZXQiLCJjcmVhdGUiLCJwYXJhbXMiLCJwYWdlIiwiYXJ0aWNsZXMiLCJkYXRhIiwicGFnZXMiLCJtb2RhbCIsInNldE1vZGFsIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwic3RhdHVzIiwicmVzcG9uc2UiLCJjbG9zZU1vZGFsIiwidXBkYXRlQXJ0aWNsZSIsImlkIiwicmVtb3ZlQXJ0aWNsZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXIiLCJ0YWciLCJkcmF3IiwiY29sU2l6ZSIsImlzZHluYW1pYyIsInR5cGUiLCJwdWJsaXNoYmVnaW4iLCJwdWJsaXNoZW5kIiwibGlzdCIsInB1Ymxpc2hlZCIsImNvbnRlbnQiLCJCdXR0b24iLCJUeHRMYWJlbElucHV0Iiwibm90aWZ5Iiwibm90aWZ5Q2xvc2UiLCJYTUxTZXQiLCJsaWZldGltZSIsIm5vdGlmaWNhdGlvbiIsImxpZmUiLCJzZXRTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJfdG9rZW4iLCJpc0Nvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImJsdXJUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJUaW1lb3V0IiwibmF0aXZlRXZlbnQiLCJzdWJtaXR0ZXIiLCJibHVyIiwicG9zdCIsIm5hdlVSTCIsIm1zZyIsInRpbWVvdXQiLCJ1cGRhdGVQYWdlIiwicmVtb3ZlUGFnZSIsIlNlbGVjdG9yIiwic2V0dGluZ3MiLCJjaGFuZ2UiLCJzZXRDaGFuZ2UiLCJpbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJjaGFuZ2VOYW1lIiwidiIsIm5EYXRhIiwic2V0TGFuZGluZyIsIkxhbmRpbmciLCJBdXRob3IiLCJEZXNjcmlwdGlvbiIsIlNpdGVOYW1lIiwic3RvcmUiLCJjcmVhdGVTbGljZSIsImFqYXhTbGljZSIsImJhc2VVcmwiLCJiYXNlVVJMIiwiaGVhZGVycyIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwibm90aWZpY2F0aW9uU2xpY2UiLCJub3RpZnlLZWVwIiwiZXZlbnQiLCJmdW5jIiwiY29uZmlndXJlU3RvcmUiLCJEZWxldGUiLCJFZGl0IiwiQWN0aW9uc1JvdyIsInVwZGF0ZSIsImJ0bkNscyIsImRpdkNscyIsIkNTUkZJbnB1dCIsIkNoZWNrZWQiLCJDaGVja2JveCIsImNscyIsImNoZWNrZWQiLCJTdWNjZXNzIiwiQ2xvc2UiLCJOdW1iZXJJbnB1dCIsIlN3aXRjaElucHV0IiwidXBkYXRlU2VhcmNoIiwiYWpheERhdGEiLCJzRmllbGRzIiwiaCIsImFjdGl2ZSIsImVsIiwiZmlsdGVyZWQiLCJzZXRWaWV3Iiwic2V0Iiwic3BsaXQiLCJOdW1iZXIiLCJzZWFyY2hIYW5kbGVDaGFuZ2UiLCJmaWVsZCIsInN0b3BQcm9wYWdhdGlvbiIsInVwZGF0ZUFycmF5RmlsdGVyIiwiYmFzaWNSZW5kZXIiLCJrIiwiZmlsdGVyUmVuZGVyIiwic2VhcmNoRmlsdGVyIiwiZmlsdGVyIiwiZmluZCIsInVwZGF0ZUNvbnRlbnQiLCJ0b2dnbGVGaWx0ZXIiLCJJbnB1dCIsIkNhbGVuZGFyIiwiRGF0ZVBpY2tlciIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIlJpY2hUZXh0Iiwic2NoZW1hIiwiY2xvc2UiLCJtRGF0YSIsInNldERhdGEiLCJlbXB0eSIsInBhciIsInZhbCIsIkRhdGUiLCJzZXRIb3VycyIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCJpbnBDbHMiLCIkZ2V0Um9vdCIsIiRnZXRTZWxlY3Rpb24iLCJMZXhpY2FsQ29tcG9zZXIiLCJQbGFpblRleHRQbHVnaW4iLCJDb250ZW50RWRpdGFibGUiLCJIaXN0b3J5UGx1Z2luIiwiT25DaGFuZ2VQbHVnaW4iLCJ1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IiwiTGV4aWNhbEVycm9yQm91bmRhcnkiLCJ0aGVtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlZGl0b3JTdGF0ZSIsInJlYWQiLCJyb290Iiwic2VsZWN0aW9uIiwib25FcnJvciIsImVycm9yIiwiUmljaFRleHRDb21wb25lbnQiLCJpbml0aWFsQ29uZmlnIiwibmFtZXNwYWNlIiwiRXhwYW5kIiwiaWNvbkNscyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImxhc3RFdmVudCIsInNldExhc3RFdmVudCIsImxhbmRpbmciLCJhdmFpYmxlIiwidG9nZ2xlU2VsZWN0IiwiJGVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiY2hhbmdlVmFsdWUiLCJJbmZvIiwiV2FybmluZyIsIkRhbmdlciIsImljb25zIiwibGFiZWwiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVGb2N1cyIsIkNvbXBvbmVudCIsIkh3IiwicmVuZGVyIiwiSGVsbG8iLCJNYWluIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlByb3ZpZGVyIiwiTWFpbkFkbWluIiwiQ2xzIiwicmVhY3RDb250cm9sbGVycyIsImltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyIsInIiLCJrZXlzIiwiZm9yRWFjaCIsImRlZmF1bHQiLCJyZXNvbHZlUmVhY3RDb21wb25lbnQiLCJjb21wb25lbnQiLCJFcnJvciIsInJlcXVpcmUkJDAiLCJjcmVhdGVSb290IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImh5ZHJhdGVSb290IiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJjIiwibyIsInVzaW5nQ2xpZW50RW50cnlQb2ludCIsImRlZmF1bHRfMSIsInByb3BzIiwicHJvcHNWYWx1ZSIsIl9kaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50VmFsdWUiLCJfcmVuZGVyUmVhY3RFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudE5hbWUiLCJkaXNjb25uZWN0IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJ2YWx1ZXMiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9