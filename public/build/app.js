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
/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RichText */ "./assets/react/components/admin/ui/RichText.jsx");
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

/***/ "./assets/react/components/admin/ui/RichText.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/components/admin/ui/RichText.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__);



const RichText = ({
  data,
  change
}) => {
  const [editorState, setEditorState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => draft_js__WEBPACK_IMPORTED_MODULE_1__.EditorState.createEmpty());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {});
  const editor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const focusEditor = () => editor.current.focus();
  const updateContent = e => {
    setEditorState(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-editor w-full",
    onClick: focusEditor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "editor-title"
  }, "Contenu :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__.Editor, {
    ref: editor,
    editorState: editorState,
    onEditorStateChange: updateContent,
    wrapperClassName: "wrapper-class",
    editorClassName: "editor-class",
    toolbarClassName: "toolbar-class",
    toolbar: {
      options: ['inline', 'fontSize', 'fontFamily', 'textAlign', 'list', 'link', 'image', 'history'],
      textAlign: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ['left', 'center', 'right', 'justify']
      }
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichText);

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
/* harmony export */   "RichText": () => (/* reexport safe */ _RichText__WEBPACK_IMPORTED_MODULE_14__["default"]),
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
/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RichText */ "./assets/react/components/admin/ui/RichText.jsx");

















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
/******/ __webpack_require__.O(0, ["vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_symfony_stimulus--46938f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxTQUFTLEVBQUUwRSxNQUFNO0VBQ2pCaEIsS0FBSyxFQUFFdlM7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0FjdGlvbnNSb3cuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NTUkZJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Db250ZW50TmF2LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0RhdGVQaWNrZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTW9kYWxFZGl0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTmF2TGkuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTnVtYmVySW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUGFnZXNDb250YWluZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvU2VsZWN0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvU3dpdGNoSW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvVG9hc3QuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvVHh0TGFiZWxJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2hlbGxvV29ybGQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DYWxlbmRhci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0NoZWNrZWQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DbG9zZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Rhbmdlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0RlbGV0ZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0VkaXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9FeHBhbmQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9JbmZvLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvU3VjY2Vzcy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1dhcm5pbmcuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiLFxuXHRcIi4vbWFpbl9hZG1pbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJcclxuLy8gdXJsIGRlIGJhc2UgcG91ciBmYWNpbGl0ZXIgbGEgbmF2aWdhdGlvblxyXG5cclxuY29uc3Qgc2V0QmFzZVVybCA9IChleHQgPSBcIlwiKSA9PiB7XHJcbiAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtleHQubGVuZ3RoID4gMCA/IFwiL1wiIDogbnVsbH0ke2V4dH1gXHJcbn1cclxuXHJcbi8vIG5ldHRvaWUgbCd1cmwgZm91cm5pXHJcblxyXG5jb25zdCBjbGVhblBhdGggPSBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcLyR8XFwvJC8sICcnKS5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxyXG5cclxuLy8gcHJlbWnDqHJlIGxldHRyZSBlbiBtYWp1c2N1bGVcclxuXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAodHh0KSA9PiB7XHJcbiAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbn1cclxuXHJcbi8vIG9idGVuaXIgbCd1cmwgcmVsYXRpdmVcclxuXHJcbmNvbnN0IGVuZE9mUGF0aCA9IChwYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguc2xpY2UocGF0aC5sYXN0SW5kZXhPZignXFwvJykpXHJcbn1cclxuXHJcbi8vIGNoYW5nZSBsZSB0aXRyZSBkYW5zIGwnb25nbGV0XHJcblxyXG5jb25zdCB1cGRhdGVUaXRsZSA9IChuKSA9PiB7XHJcbiAgbiA9IG4ucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgZG9jdW1lbnQudGl0bGUgPSBgTWluaS1DTVMgLT4gJHsobi5sZW5ndGggPiAwID8gY2FwaXRhbGl6ZShuKSA6IFwiU2V0dGluZ3NcIil9YFxyXG4gIHJldHVybjtcclxufVxyXG5cclxuLy8gdHJvdXZlIHVuZSBleHByZXNzaW9uIHLDqWd1bGnDqHJlXHJcblxyXG5jb25zdCBzdHJDb250YWlucyA9IChzdHIsIHNlYXJjaCkgPT4ge1xyXG4gIGxldCByZSA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpXHJcbiAgcmV0dXJuIHN0ci5zZWFyY2gocmUpID49IDAgPyB0cnVlIDogZmFsc2VcclxufVxyXG5cclxuLy8gbm9ybWFsaXplIHVuIHN0cmluZyBwb3VyIGZpbHRyZVxyXG5cclxuY29uc3Qgc3RyTm9ybWFsaXplID0gKHN0cikgPT4ge1xyXG4gIGNvbnN0IHRlc3QgPSAobCxyZWcpID0+IG5ldyBSZWdFeHAocmVnKS50ZXN0KGwpXHJcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpXHJcbiAgICAucmVwbGFjZSgvW15hLXpdL2csICh3KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgdGVzdCh3ICwvw6N8w6B8w6F8w6J8w6QvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiYVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DqHzDqXzDqnzDqy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJlXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OsfMOtfMOufMOvL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7V8w7J8w7N8w7R8w7YvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwib1wiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DuXzDunzDu3zDvC9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJ1XCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O9fMO/L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInlcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7EvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiblwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Fky9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJvZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpi9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJhZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dpy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJjXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OfL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcInNzXCJcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHdcclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gdHJvdXZlciB1bmUgcHJvcHMgYm9vbMOpZW4gKHZyYWkgb3UgZmF1eCkgZGFucyB1biBvYmpldCByZWN1cnNpZlxyXG5cclxuY29uc3QgZ2V0UHJvcHNCb29sU3RhdHVzID0gKG9iaiwgcHJvcCwgYm9vbFN0YXRlKSA9PiB7XHJcblxyXG4gIGlmIChvYmpbcHJvcF0pIHtcclxuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IGJvb2xTdGF0ZTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW2tleSx2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBpZiAoZ2V0UHJvcHNCb29sU3RhdHVzKHZhbHVlLCBwcm9wLCBib29sU3RhdGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbi8vIGNvbXBhcmUgZGV1eCBvYmpldHMgSlMgKHRvdXQgdHlwZXMpXHJcblxyXG5jb25zdCBhcmVFcXVhbCA9IChvYmoxLG9iajIpID0+IHtcclxuICBpZiAodHlwZW9mIG9iajEgIT09IHR5cGVvZiBvYmoyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJlRXF1YWwob2JqMVtpXSxvYmoyW2ldKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSkge1xyXG4gICAgY29uc3QgZW50MSA9IE9iamVjdC5lbnRyaWVzKG9iajEpXHJcbiAgICBjb25zdCBlbnQyID0gT2JqZWN0LmVudHJpZXMob2JqMilcclxuICAgIGlmIChlbnQxLmxlbmd0aCAhPT0gZW50Mi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmoxKSkge1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQob2JqMltrZXldKSkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwob2JqMVtrZXldLG9iajJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBvYmoxID09PSBvYmoyXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IGTDqWZpbmllXHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSAob2JqKSA9PiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWRcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gb2JqZXQgSlNcclxuXHJcbmNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4gdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiAhaXNBcnJheShvYmplY3QpXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBUYWJsZWF1eCBcclxuXHJcbmNvbnN0IGlzQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSlcclxufVxyXG5cclxuY29uc3Qgc29ydEFzYyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0IDwgYi5zb3J0ID8gLTEgOiBhLnNvcnQgPiBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5jb25zdCBzb3J0RGVzID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPiBiLnNvcnQgPyAtMSA6IGEuc29ydCA8IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmV4cG9ydCB7IFxyXG4gIHNldEJhc2VVcmwsIFxyXG4gIGNhcGl0YWxpemUsIFxyXG4gIHVwZGF0ZVRpdGxlLCBcclxuICBlbmRPZlBhdGgsIFxyXG4gIHN0ckNvbnRhaW5zLCBcclxuICBjbGVhblBhdGgsIFxyXG4gIGlzSlNPTiwgXHJcbiAgaXNBcnJheSwgXHJcbiAgYXJlRXF1YWwsIFxyXG4gIHNvcnRBc2MsIFxyXG4gIHNvcnREZXMsXHJcbiAgZ2V0UHJvcHNCb29sU3RhdHVzLFxyXG4gIHN0ck5vcm1hbGl6ZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3VpJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgUGFnZXMsIFNldHRpbmdzLCBBcnRpY2xlcywgTG9naW4gfSBmcm9tICcuL3BhZ2VzJ1xyXG5cclxuY29uc3QgTWVudSA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiUGFnZXNcIiwgcGF0aDogXCIvcGFnZXNcIiwgUGFnZTogUGFnZXN9LFxyXG4gIHtuYW1lOiBcIkFydGljbGVzXCIsIHBhdGg6IFwiL2FydGljbGVzXCIsIFBhZ2U6IEFydGljbGVzfSxcclxuXVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC51cmwpXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXJsID09PSBcIlwiID8gZGlzcGF0Y2goc2V0VXJsKFwiXCIpKSA6IG51bGxcclxuICAgIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogdW5kZWZpbmVkXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBNZW51Lm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e01lbnV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2UgdXJsPXtwYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8VG9hc3QvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpL0xvZ291dC5qc3gnXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNsZWFyRGF0YSwgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe1BhZ2VzfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RW5hYmxlKHRydWUpXHJcbiAgICB9LCA1MClcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKG4pXHJcbiAgICBkaXNwYXRjaChjbGVhckRhdGEoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBkaXNwYXRjaChzZXRVcmwocGF0aCkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay10eHQnPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGk+fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYsIE1vZGFsRWRpdG9yIH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIEFydGljbGVzXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ2FydGljbGVzJ319KVxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHtlbmFibGU6IGZhbHNlLCBkYXRhOiBudWxsLCB0aXRsZTogJyd9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheC5nZXQoJy9yZXF1ZXN0JylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ2FydGljbGVzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYWpheC5nZXQoJy9yZXF1ZXN0Jywgey4uLmF4aW9zU2V0LCBwYXJhbXM6IHtwYWdlOiAncGFnZXMnfX0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoey4uLm1vZGFsLCBlbmFibGU6IGZhbHNlfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZUFydGljbGUgPSAoaWQpID0+IHtcclxuICAgIHNldE1vZGFsKHsuLi5tb2RhbCwgZW5hYmxlOiB0cnVlLCB0aXRsZTogJ01vZGlmaWVyJ30pXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVBcnRpY2xlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7dGFnOiAndGl0bGUnLCBuYW1lOiAndGl0cmUnLCBkcmF3OiAnc3RyaW5nJywgY29sU2l6ZTogMn0sXHJcbiAgICB7dGFnOiAnc29ydCcsIG5hbWU6ICdvcmRyZScsIGRyYXc6ICdudW1iZXInLCBjb2xTaXplOiBcIjEtNVwifSxcclxuICAgIHt0YWc6ICdwYWdlJywgbmFtZTogJ3BhZ2UnLCBkcmF3OiAnb2JqZWN0LnRpdGxlJywgY29sU2l6ZTogMn0sXHJcbiAgICB7dGFnOiAncHVibGlzaGVkJywgbmFtZTogJ3Zpc2libGUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9LFxyXG4gICAge3RhZzogJ2lzZHluYW1pYycsIG5hbWU6ICdkeW5hbWlxdWUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnQXJ0aWNsZXMnfT5cclxuICAgICAgeyBhcnRpY2xlcyAmJiBwYWdlcyA/IDxDb250ZW50TmF2IFxyXG4gICAgICAgIGRhdGE9e2FydGljbGVzfSBoZWFkZXI9e2hlYWRlcn0gXHJcbiAgICAgICAgdXBkYXRlPXt1cGRhdGVBcnRpY2xlfSByZW1vdmU9e3JlbW92ZUFydGljbGV9IFxyXG4gICAgICAgIC8+IFxyXG4gICAgICAgIDogXHJcbiAgICAgICAgbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICAvLyBmZW7DqnRyZSBkJ8OpZGl0aW9uIGV0IGNyw6lhdGlvbiBkZXMgYXJ0aWNsZXNcclxuICAgICAgICBtb2RhbC5lbmFibGUgPyBcclxuICAgICAgICA8TW9kYWxFZGl0b3IgZGF0YT17bW9kYWwuZGF0YX0gdGl0bGU9e21vZGFsLnRpdGxlfSBjbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIHNjaGVtYT17XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpc2R5bmFtaWM6IHt0eXBlOiBcImJvb2xcIiwgbmFtZTogJ0R5bmFtaXF1ZSd9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hiZWdpbjoge3R5cGU6ICdkYXRlJywgbmFtZTogXCJEw6lidXRcIiwgZHJhdzogXCJ0aXRsZVwifSxcclxuICAgICAgICAgICAgICBwdWJsaXNoZW5kOiB7dHlwZTogJ2RhdGUnLCBuYW1lOiBcIkZpblwiLCBkcmF3OiBcInRpdGxlXCJ9LFxyXG4gICAgICAgICAgICAgIHRpdGxlOiB7dHlwZTogXCJzdHJpbmdcIiwgbmFtZTogXCJUaXRyZVwifSxcclxuICAgICAgICAgICAgICBwYWdlczoge3R5cGU6ICdzZWxlY3QnLCBuYW1lOiBcIlBhZ2VcIiwgZHJhdzogXCJ0aXRsZVwiLCBsaXN0OiBwYWdlc30sXHJcbiAgICAgICAgICAgICAgc29ydDoge3R5cGU6IFwic29ydGluZ1wiLCBuYW1lOiAnT3JkcmUnLCBsaXN0OiBhcnRpY2xlc30sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkOiB7dHlwZTogXCJib29sXCIsIG5hbWU6ICdWaXNpYmxlJ30sXHJcbiAgICAgICAgICAgICAgY29udGVudDoge3R5cGU6IFwidGV4dFwiLCBuYW1lOiAnQ29udGVudSd9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IC8+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXMiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBUeHRMYWJlbElucHV0IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vRnVuY3Rpb25zL1NlY3VyaXR5J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgLy8gcm91dGVyXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIC8vIHJlZHV4IC0gYWpheFxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFhNTFNldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheClcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5YTUxTZXQuYXhpb3N9KVxyXG4gIC8vIHJlZHV4IC0gTm90aWZpY2F0aW9uXHJcbiAgY29uc3QgbGlmZXRpbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmaWNhdGlvbi5saWZlKVxyXG4gIC8vIHN0YXRlXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogbnVsbCxcclxuICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgX3Rva2VuOiBnZXRUb2tlbigpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyB0aW1lb3V0VmFyXHJcbiAgbGV0IGJsdXJUaW1lb3V0ID0gbnVsbFxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgYmx1clRpbWVvdXQgPSBibHVyVGltZW91dCAhPT0gbnVsbCA/IGNsZWFyVGltZW91dChibHVyVGltZW91dCkgOiBzZXRUaW1lb3V0KCgpID0+IGUubmF0aXZlRXZlbnQuc3VibWl0dGVyLmJsdXIoKSwgNTAwKVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7IC4uLnN0YXRlIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcy5kYXRhLnVybCA9PT0gXCIvXCIgPyBgJHtYTUxTZXQubmF2VVJMfWAgOiBgJHtYTUxTZXQubmF2VVJMfS8ke3Jlcy5kYXRhLnVybH1gXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXJsKFwiXCIpKVxyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcImluZm9cIiwgXHJcbiAgICAgICAgICBtc2c6IGBCaWVudmVudWUgJHtzdGF0ZS5lbWFpbH1gLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgc2V0Q29ubmVjdGVkKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+bmF2KGNsZWFuUGF0aCh1cmwpKSw0MDApXHJcbiAgICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLCBcclxuICAgICAgICAgIG1zZzogXCJjb25uZWN0aW9uIGluY29ycmVjdGVcIixcclxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIGxpZmV0aW1lKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIG5hdihgJHtYTUxTZXQubmF2VVJMfS9sb2dpbmApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gc3RhdGVcclxuXHJcbiAgcmV0dXJuIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBpZD1cImxvZ2luXCIgY2xhc3NOYW1lPXsncm91bmRlZC1sZyBiZy13aGl0ZSBjb2xvci1kYXJrJysoaXNDb25uZWN0ZWQgPyAnIGNvbm5lY3RlZCc6bnVsbCl9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tdGl0bGUnPkNvbm5leGlvbjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLWNsZWFyLW91dGxpbmUnPlxyXG4gICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ29tcHRlKEVtYWlsKVwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiYWRyZXNzZSBlbWFpbC4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwibW90IGRlIHBhc3NlLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCdXR0b25cclxuICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgYnRuQ2xzPSdidG4gcHJpbWFyeSB3LWZ1bGwnXHJcbiAgICA+TWUgQ29ubmVjdGVyPC9CdXR0b24+XHJcbiAgPC9mb3JtPlxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQYWdlc0NvbnRhaW5lciwgQ29udGVudE5hdiB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcblxyXG4vLyBDUlVEIENvbXBsZXQgcG91ciBsZXMgUGFnZXNcclxuXHJcbmNvbnN0IFBhZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0LCBwYXJhbXM6IHtwYWdlOiAncGFnZXMnfX0pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnBhZ2VzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheC5nZXQoJy9yZXF1ZXN0JylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3BhZ2VzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzXHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy9taW5pLWFkbWluL2xvZ291dCcpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHVwZGF0ZVBhZ2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICdzdHJpbmcnLCBjb2xTaXplOiA0fSxcclxuICAgIHt0YWc6ICdzb3J0JywgbmFtZTogJ29yZHJlJywgZHJhdzogJ251bWJlcicsIGNvbFNpemU6IFwiMS01XCJ9LFxyXG4gICAge3RhZzogJ3NldHRpbmdzJywgbmFtZTogJ2xhbmRpbmcnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDJ9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFnZXMnfT5cclxuICAgICAge2RhdGEgPyA8Q29udGVudE5hdiBcclxuICAgICAgICBkYXRhPXtkYXRhfSBoZWFkZXI9e2hlYWRlcn0gXHJcbiAgICAgICAgdXBkYXRlPXt1cGRhdGVQYWdlfSByZW1vdmU9e3JlbW92ZVBhZ2V9IFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uLCBQYWdlc0NvbnRhaW5lciwgU2VsZWN0b3IsIFR4dExhYmVsSW5wdXQgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgYXJlRXF1YWwsIGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIFJVRCBjb21wbGV0IHBvdXIgbGVzIG9wdGlvbnMgZGUgc2l0ZVxyXG5cclxuY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7IC4uLmF4aW9zU2V0IH0pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnNldHRpbmdzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFtjaGFuZ2UsIHNldENoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gdXNlU3RhdGUoe30pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhamF4LmdldCgnL3JlcXVlc3QnKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHsgLi4ucmVzLmRhdGEgfSlcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSByZXMucmVzcG9uc2Uuc3RhdHVzXHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY2hhbmdlTmFtZSA9ICh2KSA9PiB7XHJcbiAgICBzd2l0Y2ggKHYpIHtcclxuICAgICAgY2FzZSAnQXV0aG9yJzpcclxuICAgICAgICByZXR1cm4gJ2F1dGV1cic7XHJcbiAgICAgIGNhc2UgJ0Rlc2NyaXB0aW9uJzpcclxuICAgICAgICByZXR1cm4gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgY2FzZSAnU2l0ZU5hbWUnOlxyXG4gICAgICAgIHJldHVybiAnbm9tIGR1IHNpdGUnO1xyXG4gICAgICBjYXNlICdMYW5kaW5nJzpcclxuICAgICAgICByZXR1cm4gJ3BhZ2UgZFxcJ2FjY3VlaWwnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBwcm9wKSA9PiB7XHJcbiAgICBjb25zdCBuRGF0YSA9IHsgLi4uZGF0YSwgW3Byb3BdOiBlLnRhcmdldC52YWx1ZSB9XHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IG5EYXRhIH0pKVxyXG4gICAgY29uc29sZS5sb2coYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkpO1xyXG4gICAgIWFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpID8gc2V0Q2hhbmdlKHRydWUpIDogc2V0Q2hhbmdlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0TGFuZGluZyA9ICh2KSA9PiB7XHJcbiAgICBjb25zdCBuRGF0YSA9IHsgLi4uZGF0YSwgTGFuZGluZzogdiB9XHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IG5EYXRhIH0pKVxyXG4gICAgY29uc29sZS5sb2coYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkpO1xyXG4gICAgIWFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpID8gc2V0Q2hhbmdlKHRydWUpIDogc2V0Q2hhbmdlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J1BhcmFtw6h0cmVzJ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0zIHB5LTMganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhID8gPD5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnQXV0aG9yJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJBdXRob3JcIikpfSBpZD1cIkF1dGhvclwiIHZhbHVlPXtkYXRhLkF1dGhvcn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJBdXRob3JcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdEZXNjcmlwdGlvbicpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIikpfSBpZD1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e2RhdGEuRGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0TGFiZWxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdTaXRlTmFtZScpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIikpfSBpZD1cIlNpdGVOYW1lXCIgdmFsdWU9e2RhdGEuU2l0ZU5hbWV9IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0b3IgY2xzPSdzZWNvbmRhcnknIGljb25DbHM9J2ljb24nIGFjdGl2ZT17ZGF0YS5MYW5kaW5nfSBsaXN0PXtkYXRhLlBhZ2VzfSBhY3Rpb249e3NldExhbmRpbmd9PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPlBhZ2U8L2gyPlxyXG4gICAgICAgICAgICA8L1NlbGVjdG9yPlxyXG4gICAgICAgICAgPC8+IDpcclxuICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBjaGFuZ2UgJiYgPEJ1dHRvbiBidG5DbHM9eydidG4gc2Vjb25kYXJ5IGZhZGVJbkxlZnQnfSBkaXZDbHM9e1wicC0yIGZsZXgganVzdGlmeS1lbmRcIn0+U2F1dmVnYXJkZXI8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIiwiaW1wb3J0IFBhZ2VzIGZyb20gXCIuL1BhZ2VzXCI7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi9BcnRpY2xlc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcblxyXG5leHBvcnQgeyBQYWdlcywgQXJ0aWNsZXMsIFNldHRpbmdzLCBMb2dpbiB9IiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBzZXRCYXNlVXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmV4cG9ydCBjb25zdCBhamF4U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2FqYXgnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdXJsOiAnJyxcclxuICAgIGJhc2VVcmw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgIG5hdlVSTDogXCIvbWluaS1hZG1pblwiLFxyXG4gICAgYXhpb3M6IHtcclxuICAgICAgYmFzZVVSTDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge31cclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVcmw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVybCA9IGVuZE9mUGF0aChjbGVhblBhdGgoYCR7YWN0aW9uLnBheWxvYWR9YCkpXHJcbiAgICB9LFxyXG4gICAgcHVzaERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgc3RhdGUuZGF0YSA9IHsuLi5zdGF0ZS5kYXRhLCBbbmFtZV06IGRhdGF9XHJcbiAgICB9LFxyXG4gICAgY2xlYXJEYXRhOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuZGF0YSA9IHt9XHJcbiAgICAgIHN0YXRlLnVybCA9IFwiXCJcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRVcmwsIHB1c2hEYXRhLCBjbGVhckRhdGEgfSA9IGFqYXhTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhamF4U2xpY2UucmVkdWNlciIsImltcG9ydCBhamF4U2xpY2UgZnJvbSBcIi4vYWpheFNsaWNlXCI7XHJcbmltcG9ydCBub3RpZmljYXRpb25TbGljZSBmcm9tIFwiLi9ub3RpZmljYXRpb25TbGljZVwiO1xyXG5cclxuZXhwb3J0IHsgYWpheFNsaWNlLCBub3RpZmljYXRpb25TbGljZSB9IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwibm90aWZpY2F0aW9uXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBtc2c6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwib3V0XCIsXHJcbiAgICB0eXBlOiBcImluZm9cIixcclxuICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICBsaWZlOiA0MDAwXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbm90aWZ5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBjb25zdCB7dHlwZSxtc2csdGltZW91dH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtc2c6IG1zZyxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHN0YXR1cyA6IFwiaW5cIixcclxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeUtlZXA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtldmVudCwgZnVuY30gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBpZiAoZXZlbnQgPT09IFwic3RheVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGltZW91dDogZnVuYyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5Q2xvc2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiAnb3V0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9ID0gbm90aWZpY2F0aW9uU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uU2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uU2xpY2UsIGFqYXhTbGljZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGFqYXg6IGFqYXhTbGljZSxcclxuICAgIG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uU2xpY2VcclxuICB9LFxyXG59KVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0RlbGV0ZSdcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0VkaXQnXHJcblxyXG5jb25zdCBBY3Rpb25zUm93ID0gKHsgaWQsIHVwZGF0ZSwgcmVtb3ZlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZmxleC1ub3dyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTMnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbiBzZWNvbmRhcnknIG9uQ2xpY2s9eyhlKSA9PiB1cGRhdGUoaWQpfT5cclxuICAgICAgICA8RWRpdCBjbHM9J2FjdGlvbi1pY29uIGVkaXQnLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb24tYnV0dG9uIHNlY29uZGFyeScgb25DbGljaz17KGUpID0+IHJlbW92ZShpZCl9PlxyXG4gICAgICAgIDxEZWxldGUgY2xzPSdhY3Rpb24taWNvbiBkZWxldGUnLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbnNSb3ciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgYnRuQ2xzLCBkaXZDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xzfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0bkNsc30+eyBjaGlsZHJlbiB9PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENTUkZJbnB1dCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgdmFsdWU9e2dldFRva2VuKCl9IC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDU1JGSW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDaGVja2VkIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DaGVja2VkJ1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSAoeyBjbHMsIGNoYW5nZSwgY2hlY2tlZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJpbnB1dC1jaGVja2JveCBcIiArIGNsc30gb25DbGljaz17KGUpID0+IGNoYW5nZShlKX0+XHJcbiAgICAgIHsgY2hlY2tlZCA/IDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1jaGVja2JveC10cnVlJz48Q2hlY2tlZCAvPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1jaGVja2JveC1mYWxzZSc+PC9kaXY+IH1cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgZ2V0UHJvcHNCb29sU3RhdHVzLCBpc0FycmF5LCBzdHJOb3JtYWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvU3VjY2VzcydcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJy4vTnVtYmVySW5wdXQnXHJcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xyXG5pbXBvcnQgU3dpdGNoSW5wdXQgZnJvbSAnLi9Td2l0Y2hJbnB1dCdcclxuaW1wb3J0IHsgQWN0aW9uc1JvdywgU2VsZWN0b3IgfSBmcm9tICcuLydcclxuXHJcblxyXG5jb25zdCBDb250ZW50TmF2ID0gKHsgaGVhZGVyLCBkYXRhLCB1cGRhdGUsIHJlbW92ZSwgY3JlYXRlIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoLCB1cGRhdGVTZWFyY2hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgYWpheERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpbml0aWF0aW9uIGRlcyBmaWx0cmVzXHJcbiAgICBjb25zdCBzRmllbGRzID0ge31cclxuICAgIGhlYWRlci5tYXAoKGgpID0+IFxyXG4gICAgICBzRmllbGRzW2gudGFnXSA9IGgudGFnICE9PSBcInBhZ2VcIiA/XHJcbiAgICAgIHsgdmFsdWU6IGguZHJhdyA9PT0gXCJudW1iZXJcIiA/IDAgOiBoLmRyYXcubWF0Y2goL15ib29sLykgPyBmYWxzZSA6IFwiXCIsIGFjdGl2ZTogZmFsc2UgfSA6XHJcbiAgICAgIHsgdmFsdWU6IFsuLi5hamF4RGF0YVtoLnRhZytcInNcIl1dLm1hcCgoZWwsaSkgPT4gKHsuLi5lbCwgZmlsdGVyZWQ6IGkgPT0gMCA/IHRydWUgOiBmYWxzZX0pKSwgYWN0aXZlOiBmYWxzZSB9XHJcbiAgICAgIClcclxuICAgIHVwZGF0ZVNlYXJjaCh7IC4uLnNGaWVsZHMgfSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIGZvcm1hdCBsZXMgZG9ubsOpZSBwb3VyIGFmZmljaGFnZVxyXG4gIGNvbnN0IHNldFZpZXcgPSAodmFsdWUsIHNldCA9ICd2YWx1ZScsIHRhZykgPT4ge1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm9iamVjdFxcLi4rL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICBsZXQgbmFtZSA9IHNldC5zcGxpdCgnLicpW3NldC5zcGxpdCgnLicpLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgcmV0dXJuIGNhcGl0YWxpemUoYWpheERhdGFbYCR7dGFnfXNgXVtOdW1iZXIodmFsdWUpIC0gMV1bbmFtZV0pXHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXmJvb2wvZykudGVzdChzZXQpOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IDxTdWNjZXNzIGNscz0naC02IHctNiBtLWF1dG8gaWNvbiBzdWNjZXNzJyAvPiA6IDxDbG9zZSBjbHM9J2gtNiB3LTYgbS1hdXRvIGljb24gZmFsc2UnIC8+XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm51bS9nKS50ZXN0KHNldCk6XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXnN0ci9nKS50ZXN0KHNldCk6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBjYXBpdGFsaXplKHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gdXBkYXRlIGRlcyBmaWx0cmVzIGRlIHJlY2hlcmNoZXNcclxuICBjb25zdCBzZWFyY2hIYW5kbGVDaGFuZ2UgPSAoZSwgZmllbGQsIHZhbHVlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XHJcbiAgICAgIGNhc2UgJ3NvcnQnOlxyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPCAwIHx8IHZhbHVlID09ICcnID8gMCA6IHZhbHVlID4gZGF0YS5sZW5ndGggLSAxID8gZGF0YS5sZW5ndGggLSAxIDogdmFsdWVcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHVwZGF0ZVNlYXJjaCh7IC4uLnNlYXJjaCwgW2ZpZWxkXTogeyAuLi5zZWFyY2hbZmllbGRdLCB2YWx1ZTogdmFsdWUgfSB9KVxyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIGRlcyBmaWx0cmVzIGRlIHJlY2hlcmNoZXMgKCBzcMOpY2lmaXF1ZSDDoCB1bmUgbGlzdGUgZCfDqWzDqW1lbnQgYXR0cmlidXQgXCJmaWx0ZXJlZFwiKVxyXG4gIGNvbnN0IHVwZGF0ZUFycmF5RmlsdGVyID0gKHZhbHVlLCB0YWcpID0+IHtcclxuICAgIGNvbnN0IGFycmF5ID0gWy4uLnNlYXJjaFt0YWddLnZhbHVlXTtcclxuICAgIHVwZGF0ZVNlYXJjaChcclxuICAgICAge1xyXG4gICAgICAgIC4uLnNlYXJjaCxcclxuICAgICAgICBbdGFnXToge1xyXG4gICAgICAgICAgLi4uc2VhcmNoW3RhZ10sXHJcbiAgICAgICAgICB2YWx1ZSA6IGFycmF5Lm1hcChlbCA9PiAoey4uLmVsLCBmaWx0ZXJlZCA6IGVsLmlkID09PSB2YWx1ZSA/IHRydWUgOiBmYWxzZX0pKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICB9XHJcblxyXG4gIC8vIHJlbmR1IHNhbnMgZmlsdHJlc1xyXG4gIGNvbnN0IGJhc2ljUmVuZGVyID0gKGRhdGEpID0+IGRhdGEubWFwKChmaWVsZCwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nY29udGVudC1yb3cnPlxyXG4gICAge1xyXG4gICAgICBoZWFkZXIubWFwKCh7IHRhZywgZHJhdywgY29sU2l6ZSB9LCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtJHtjb2xTaXplfWB9PntzZXRWaWV3KGZpZWxkW3RhZ10sIGRyYXcsIHRhZyl9PC9kaXY+KVxyXG4gICAgfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Byb3ctZmllbGQgYWN0aW9uLWZpZWxkIGNvbHNpemUtMmB9PjxBY3Rpb25zUm93IGlkPXtrfSB1cGRhdGU9e3VwZGF0ZX0gcmVtb3ZlPXtyZW1vdmV9IC8+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG5cclxuICAvLyByZW5kdSBhdmVjIGZpbHRyZXNcclxuICBjb25zdCBmaWx0ZXJSZW5kZXIgPSAoZGF0YSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEZpbHRlciA9IHt9XHJcblxyXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoc2VhcmNoKSkge1xyXG4gICAgICBpZiAodi5hY3RpdmUpIHtcclxuICAgICAgICBzZWFyY2hGaWx0ZXJba10gPSB2LnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNlYXJjaEZpbHRlcikpIHtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2KSB7XHJcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICBpZiAoIXN0ck5vcm1hbGl6ZShmaWVsZFtrXSkubWF0Y2goc3RyTm9ybWFsaXplKHYpKSAmJiB2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICBpZiAodiAhPT0gZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgaWYgKHYgPT09IHRydWUgJiYgIWZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodiA9PT0gZmFsc2UgJiYgZmllbGRba10pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHYpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gdi5maW5kKGVsID0+IGVsLmZpbHRlcmVkKS5pZFxyXG4gICAgICAgICAgICAgIGlmIChmaWVsZFtrXSAhPT0gZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdjb250ZW50LXJvdyc+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlci5tYXAoKHsgdGFnLCBkcmF3LCBjb2xTaXplIH0sIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0ke2NvbFNpemV9YH0+e3NldFZpZXcoZmllbGRbdGFnXSwgZHJhdywgdGFnKX08L2Rpdj4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBhY3Rpb24tZmllbGQgY29sc2l6ZS0yYH0+PEFjdGlvbnNSb3cgaWQ9e2t9IHVwZGF0ZT17dXBkYXRlQ29udGVudH0gLz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gYWN0aXZlIHVuIGZpbHRyZSAoc2Vsb24gY2libGUgdXRpbGlzYXRldXIpXHJcbiAgY29uc3QgdG9nZ2xlRmlsdGVyID0gKGUsIGNoZWNrZWQpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zZWFyY2gsIFtjaGVja2VkXTogeyAuLi5zZWFyY2hbY2hlY2tlZF0sIGFjdGl2ZTogIXNlYXJjaFtjaGVja2VkXS5hY3RpdmUgfSB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudC1uYXYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1uYXYtaGVhZGVyJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXIubWFwKChoLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9YH0+e2NhcGl0YWxpemUoaC5uYW1lKX08L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMmB9PntjYXBpdGFsaXplKCdhY3Rpb25zJyl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1uYXYtc2VhcmNoJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzZWFyY2ggP1xyXG4gICAgICAgICAgICBoZWFkZXIubWFwKChoLCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IElucHV0O1xyXG4gICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9ebnVtL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPE51bWJlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xzPXtgc2Vjb25kYXJ5IGNvbHNpemUtMTBgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucENscz1cImlucHV0LW51bWJlciBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZT17KGUsIHZhbHVlKSA9PiBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsIHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17TnVtYmVyKHNlYXJjaFtoLnRhZ10udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2gubmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPFN3aXRjaElucHV0ICBjbHM9J3NlY29uZGFyeScgdmFsdWU9e3NlYXJjaFtoLnRhZ10udmFsdWV9IGNoYW5nZT17KGUpID0+IHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgIXNlYXJjaFtoLnRhZ10udmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm9iai9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxTZWxlY3RvciBjbHM9J3NlY29uZGFyeScgbGlzdD17c2VhcmNoW2gudGFnXS52YWx1ZX0gYWN0aXZlPXtzZWFyY2hbaC50YWddLnZhbHVlLmZpbmQoZWwgPT4gZWwuZmlsdGVyZWQpLmlkfSBhY3Rpb249eyh2YWx1ZSkgPT4gdXBkYXRlQXJyYXlGaWx0ZXIodmFsdWUsIGgudGFnKX0vPlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0naW5wdXQtdHh0IHNlY29uZGFyeSBjb2xzaXplLTEwJyBvbkNoYW5nZT17KGUpID0+IHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj17Y2FwaXRhbGl6ZShoLm5hbWUpfSB2YWx1ZT17c2VhcmNoW2gudGFnXS52YWx1ZX0gLz5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgc2VhcmNoLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9IGZsZXgganVzdGlmeS1pdGVtcy1zdHJldGNoIGZsZXgtbm93cmFwYH0+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xzPSdzZWNvbmRhcnknIGNoZWNrZWQ9e3NlYXJjaFtoLnRhZ10uYWN0aXZlfSBjaGFuZ2U9eyhlKSA9PiB0b2dnbGVGaWx0ZXIoZSwgaC50YWcpfSAvPlxyXG4gICAgICAgICAgICAgICAge0lucHV0fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9KSA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yYH0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtaW5uZXIgJz5cclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgIXNlYXJjaCB8fCBzZWFyY2ggJiYgIWdldFByb3BzQm9vbFN0YXR1cyhzZWFyY2gsIFwiYWN0aXZlXCIsIHRydWUpID9cclxuICAgICAgICAgICAgZGF0YSAmJiBpc0FycmF5KGRhdGEpID8gYmFzaWNSZW5kZXIoZGF0YSkgOiBudWxsXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgZGF0YSAmJiBpc0FycmF5KGRhdGEpID8gZmlsdGVyUmVuZGVyKGRhdGEpIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TmF2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0NhbGVuZGFyJ1xyXG5cclxuY29uc3QgRGF0ZVBpY2tlciA9ICh7IGNoYW5nZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY2FsZW5kYXInIHRhYkluZGV4PXstMX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlLXR4dCc+eyh2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLWZyJykpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kYXInPlxyXG4gICAgICAgIDxDYWxlbmRhciBjbHM9eydpY29uJ30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL0RhdGVQaWNrZXInXHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICcuL1JpY2hUZXh0J1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9TZWxlY3RvcidcclxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gJy4vU3dpdGNoSW5wdXQnXHJcblxyXG5jb25zdCBNb2RhbEVkaXRvciA9ICh7IGRhdGEsIHNjaGVtYSwgdGl0bGUsIGNsb3NlIH0pID0+IHtcclxuICBjb25zdCBbbURhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVtcHR5ID0ge31cclxuICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChbbmFtZSwgcGFyXSxpKSA9PiB7XHJcbiAgICAgIGxldCB2YWw7XHJcbiAgICAgIHN3aXRjaCAocGFyLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIHZhbCA9IFwiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgICAgY2FzZSBcInNvcnRpbmdcIjpcclxuICAgICAgICAgIHZhbCA9IHBhci5saXN0Lmxlbmd0aCAtIDFcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJib29sXCI6XHJcbiAgICAgICAgICB2YWwgPSBmYWxzZVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgIHZhbCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICB2YWwuc2V0SG91cnMoMCwwLDAsMClcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB2YWwgPSBcIlwiXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBlbXB0eVtuYW1lXSA9IHZhbFxyXG4gICAgfSlcclxuICAgICFkYXRhID8gc2V0RGF0YSh7Li4uZW1wdHl9KSA6IHNldERhdGEoey4uLmRhdGF9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gIW1EYXRhID8gbnVsbCA6IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbW9kYWwtZWRpdG9yJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJhcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJhci10eHQnPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtYmFyLWNsb3NlJyBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cInctNiBoLTZcIiAvPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLXdpbmRvdyc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2NoZW1hKS5tYXAoKFtrZXksdmFsdWVdLGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IElucHV0O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICAgICAgSW5wdXQgPSA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXQtdHh0IHNlY29uZGFyeScgdHlwZT1cInRleHRcIiB2YWx1ZT17bURhdGFba2V5XX0gcGxhY2Vob2xkZXI9e3ZhbHVlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAnYm9vbCc6XHJcbiAgICAgICAgICAgICAgICBJbnB1dCA9IDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0zJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0naW5wdXQtbGFiZWwgcC0yIGZvbnQtYm9sZCc+e3ZhbHVlLm5hbWV9IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoSW5wdXQgdmFsdWU9e21EYXRhW2tleV19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ3NvcnRpbmcnOlxyXG4gICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3IgY2xzPXsnc2Vjb25kYXJ5IHAtMCd9IGljb25DbHM9eydpY29uJ30gbGlzdD17dmFsdWUubGlzdH0gYWN0aXZlPXttRGF0YVtrZXldfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgICAgICAgSW5wdXQgPSA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXttRGF0YVtrZXldfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5ID0ge2l9IGNsYXNzTmFtZT0nbW9kYWwtZmllbGQnPntJbnB1dH08L2Rpdj5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChbayx2XSxpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi50eXBlID09PSBcInRleHRcIiA/IDxSaWNoVGV4dCAvPiA6IG51bGxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEVkaXRvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSAoeyBjbHMsIGlucENscywgY2hhbmdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgKyAnIGlucHV0LW51bWJlci13cmFwIGZsZXggZmxleC1ub3dyYXAgcmVsYXRpdmUnfT5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cImRvd25cIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUsdmFsdWUtMSl9ID4tPC9zcGFuPjxpbnB1dCB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT17aW5wQ2xzICsgJyBjb2xzaXplLTEwJ30gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2UoZSwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dmFsdWV9IC8+PHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cInVwXCIgb25DbGljaz17KGUpID0+IGNoYW5nZShlLHZhbHVlKzEpfT4rPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFBhZ2VzQ29udGFpbmVyID0gKHtjaGlsZHJlbiAsIHRpdGxlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+e3RpdGxlfTwvZGl2PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250YWluZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29udGVudFN0YXRlLCBFZGl0b3JTdGF0ZSwgaGFuZGxlS2V5Q29tbWFuZH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiO1xyXG5cclxuY29uc3QgUmljaFRleHQgPSAoeyBkYXRhLCBjaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiBFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICB9KVxyXG5cclxuICBjb25zdCBlZGl0b3IgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZm9jdXNFZGl0b3IgPSAoKSA9PiBlZGl0b3IuY3VycmVudC5mb2N1cygpO1xyXG5cclxuICBjb25zdCB1cGRhdGVDb250ZW50ID0gKGUpID0+IHtcclxuICAgIFxyXG4gICAgc2V0RWRpdG9yU3RhdGUoZSlcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVkaXRvciB3LWZ1bGxcIlxyXG4gICAgICBvbkNsaWNrPXtmb2N1c0VkaXRvcn1cclxuICAgID5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImVkaXRvci10aXRsZVwiPkNvbnRlbnUgOjwvaDE+XHJcbiAgICAgIDxFZGl0b3JcclxuICAgICAgICByZWY9e2VkaXRvcn1cclxuICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XHJcbiAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17dXBkYXRlQ29udGVudH1cclxuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwid3JhcHBlci1jbGFzc1wiXHJcbiAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZWRpdG9yLWNsYXNzXCJcclxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lPVwidG9vbGJhci1jbGFzc1wiXHJcbiAgICAgICAgdG9vbGJhcj17e1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAnaW5saW5lJyxcclxuICAgICAgICAgICAgJ2ZvbnRTaXplJyxcclxuICAgICAgICAgICAgJ2ZvbnRGYW1pbHknLFxyXG4gICAgICAgICAgICAndGV4dEFsaWduJyxcclxuICAgICAgICAgICAgJ2xpc3QnLFxyXG4gICAgICAgICAgICAnbGluaycsXHJcbiAgICAgICAgICAgICdpbWFnZScsXHJcbiAgICAgICAgICAgICdoaXN0b3J5J1xyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHRleHRBbGlnbjoge1xyXG4gICAgICAgICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknXSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHBhbmQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0V4cGFuZCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGNscywgbGlzdCwgYWN0aXZlLCBpY29uQ2xzLCBjaGlsZHJlbiwgYWN0aW9uIH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhc3RFdmVudCwgc2V0TGFzdEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIC8vIG1pc2UgZW4gcGxhY2UgZGUgbCfDqWzDqW1lbnQgYWN0aWYgcGFyIGTDqWZhdXQgKHByb3AgYWN0aXZlIG9ibGlnYXRvaXJlKVxyXG4gIGNvbnN0IGxhbmRpbmcgPSBsaXN0LmZpbmQoaSA9PiBpLmlkID09PSBhY3RpdmUpXHJcbiAgY29uc3QgYXZhaWJsZSA9IGxpc3QuZmlsdGVyKGkgPT4gaS5pZCAhPT0gbGFuZGluZy5pZClcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgJGVsID0gZS50YXJnZXRcclxuICAgIHdoaWxlICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RvcicpID09IGZhbHNlKSB7XHJcbiAgICAgICRlbCA9ICRlbC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICBpZiAoKGUudHlwZSA9PT0gJ2NsaWNrJyAmJiBsYXN0RXZlbnQgPT09ICdjbGljaycpIHx8IGUudHlwZSAhPT0gJ2NsaWNrJykge1xyXG4gICAgICBzZXRUb2dnbGUoIXRvZ2dsZSlcclxuICAgICAgbGFzdEV2ZW50ID09PSAnY2xpY2snICYmIHRvZ2dsZSA9PT0gdHJ1ZSA/ICRlbC5ibHVyKCkgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgc2V0TGFzdEV2ZW50KGUudHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlLHYpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRvZ2dsZVNlbGVjdChlKTtcclxuICAgIGFjdGlvbih2KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsoY2xzID8gJ3NlbGVjdG9yICcgKyBjbHMgOiAnc2VsZWN0b3InKSArICh0b2dnbGUgPyAnIG9wZW5lZCcgOiAnJyl9IG9uRm9jdXM9e3RvZ2dsZVNlbGVjdH0gb25CbHVyPXt0b2dnbGVTZWxlY3R9IHRhYkluZGV4PXstMX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0IGFjdGl2ZScgdmFsdWU9e2xhbmRpbmcuaWR9IG9uQ2xpY2s9e3RvZ2dsZSA/IHRvZ2dsZVNlbGVjdCA6IG51bGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKGxhbmRpbmcudGl0bGUpfTwvZGl2PjxFeHBhbmQgY2xzPXtpY29uQ2xzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgdG9nZ2xlID8gPGRpdiBjbGFzc05hbWU9J29wdC13cmFwcGVyJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXZhaWJsZS5tYXAoKHtpZCx0aXRsZX0saykgPT4gXHJcbiAgICAgICAgICAgICAgLy8gbCdpZCBkZSBsJ8OpbMOpbWVudCBjaG9pc2kgZXN0IGRpcmVjdGVtZW50IGVudm95w6kgZGFucyBcImFjdGlvblwiIChmdW5jdGlvbiDDoCBwYXNzZXIgZW4gcHJvcClcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdvcHQnIHZhbHVlPXtpZH0gb25DbGljaz17KGUpID0+IGNoYW5nZVZhbHVlKGUsaWQpfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZSh0aXRsZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3IiLCIvLyB1aSBib29sZWFuIHJlcHJlc2VudGF0aW9uXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTd2l0Y2hJbnB1dCA9ICh7IGNscyA9IFwiXCIsIHZhbHVlLCBjaGFuZ2UgfSkgPT4ge1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2lucHV0LXN3aXRjaCcgKyAodmFsdWUgPyAnIHRydWUnOiAnIGZhbHNlJykgKyBgICR7Y2xzfWB9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtc3dpdGNoLWJ1dHRvbic+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaElucHV0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2UnXHJcbmltcG9ydCBJbmZvIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9JbmZvJ1xyXG5pbXBvcnQgU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvU3VjY2VzcydcclxuaW1wb3J0IFdhcm5pbmcgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1dhcm5pbmcnXHJcbmltcG9ydCBEYW5nZXIgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0RhbmdlcidcclxuaW1wb3J0IHsgbm90aWZ5Q2xvc2UsIG5vdGlmeUtlZXAgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZSdcclxuXHJcbmNvbnN0IFRvYXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm5vdGlmaWNhdGlvbilcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IG1zZywgdHlwZSwgc3RhdHVzIH0gPSBkYXRhXHJcbiAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAnSW5mbyc6IDxJbmZvIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdTdWNjZXNzJzogPFN1Y2Nlc3MgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1dhcm5pbmcnOiA8V2FybmluZyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnRGFuZ2VyJzogPERhbmdlciBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZSA9ICgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRvYXN0ICR7dHlwZX0gJHtzdGF0dXN9YH0gb25Nb3VzZUVudGVyPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ3N0YXknfSkpfSBvbk1vdXNlTGVhdmU9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnY2xvc2UnLCBmdW5jOiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCAxNDAwKX0pICl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZS1pY29uJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbnNbY2FwaXRhbGl6ZSh0eXBlKV1cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtYnRuJz48YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlfT48Q2xvc2UgY2xzPVwiaC01IHctNVwiIC8+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtY29udGVudCc+XHJcbiAgICAgICAgeyBtc2cgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9hc3QiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFR4dExhYmVsSW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0TGFiZWxJbnB1dCIsImltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcbmltcG9ydCBDb250ZW50TmF2IGZyb20gJy4vQ29udGVudE5hdidcclxuaW1wb3J0IENTUkZJbnB1dCBmcm9tICcuL0NTUkZJbnB1dCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vTmF2TGknXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuL1BhZ2VzQ29udGFpbmVyJ1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9TZWxlY3RvcidcclxuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnXHJcbmltcG9ydCBUeHRMYWJlbElucHV0IGZyb20gJy4vVHh0TGFiZWxJbnB1dCdcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJy4vTnVtYmVySW5wdXQnXHJcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xyXG5pbXBvcnQgU3dpdGNoSW5wdXQgZnJvbSAnLi9Td2l0Y2hJbnB1dCdcclxuaW1wb3J0IEFjdGlvbnNSb3cgZnJvbSAnLi9BY3Rpb25zUm93J1xyXG5pbXBvcnQgTW9kYWxFZGl0b3IgZnJvbSAnLi9Nb2RhbEVkaXRvcidcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9EYXRlUGlja2VyJ1xyXG5pbXBvcnQgUmljaFRleHQgZnJvbSAnLi9SaWNoVGV4dCdcclxuXHJcbmV4cG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIENvbnRlbnROYXYsXHJcbiAgQ1NSRklucHV0LFxyXG4gIE5hdkxpLFxyXG4gIFBhZ2VzQ29udGFpbmVyLFxyXG4gIFNlbGVjdG9yLFxyXG4gIFRvYXN0LFxyXG4gIFR4dExhYmVsSW5wdXQsXHJcbiAgTnVtYmVySW5wdXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgU3dpdGNoSW5wdXQsXHJcbiAgQWN0aW9uc1JvdyxcclxuICBNb2RhbEVkaXRvcixcclxuICBEYXRlUGlja2VyLFxyXG4gIFJpY2hUZXh0XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWxsbyBmcm9tICcuLi9jb21wb25lbnRzL2hlbGxvV29ybGQnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiA8ZGl2PjxIZWxsby8+PC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL0xheW91dFwiXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluL3JlZHV4J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5jb25zdCBNYWluQWRtaW4gPSAoKSA9PlxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPExheW91dC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkbWluIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2FsZW5kYXIgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDY1NnEtMTcgMC0yOC41LTExLjVUNDQwIDYxNnEwLTE3IDExLjUtMjguNVQ0ODAgNTc2cTE3IDAgMjguNSAxMS41VDUyMCA2MTZxMCAxNy0xMS41IDI4LjVUNDgwIDY1NlptLTE2MCAwcS0xNyAwLTI4LjUtMTEuNVQyODAgNjE2cTAtMTcgMTEuNS0yOC41VDMyMCA1NzZxMTcgMCAyOC41IDExLjVUMzYwIDYxNnEwIDE3LTExLjUgMjguNVQzMjAgNjU2Wm0zMjAgMHEtMTcgMC0yOC41LTExLjVUNjAwIDYxNnEwLTE3IDExLjUtMjguNVQ2NDAgNTc2cTE3IDAgMjguNSAxMS41VDY4MCA2MTZxMCAxNy0xMS41IDI4LjVUNjQwIDY1NlpNNDgwIDgxNnEtMTcgMC0yOC41LTExLjVUNDQwIDc3NnEwLTE3IDExLjUtMjguNVQ0ODAgNzM2cTE3IDAgMjguNSAxMS41VDUyMCA3NzZxMCAxNy0xMS41IDI4LjVUNDgwIDgxNlptLTE2MCAwcS0xNyAwLTI4LjUtMTEuNVQyODAgNzc2cTAtMTcgMTEuNS0yOC41VDMyMCA3MzZxMTcgMCAyOC41IDExLjVUMzYwIDc3NnEwIDE3LTExLjUgMjguNVQzMjAgODE2Wm0zMjAgMHEtMTcgMC0yOC41LTExLjVUNjAwIDc3NnEwLTE3IDExLjUtMjguNVQ2NDAgNzM2cTE3IDAgMjguNSAxMS41VDY4MCA3NzZxMCAxNy0xMS41IDI4LjVUNjQwIDgxNlpNMTgwIDk3NnEtMjQgMC00Mi0xOHQtMTgtNDJWMjk2cTAtMjQgMTgtNDJ0NDItMThoNjV2LTI4cTAtMTMuNiA5LjItMjIuOCA5LjItOS4yIDIyLjgtOS4yIDE0LjAyNSAwIDIzLjUxMyA5LjJRMzEwIDE5NC40IDMxMCAyMDh2MjhoMzQwdi0yOHEwLTEzLjYgOS4yLTIyLjggOS4yLTkuMiAyMi44LTkuMiAxNC4wMjUgMCAyMy41MTMgOS4yUTcxNSAxOTQuNCA3MTUgMjA4djI4aDY1cTI0IDAgNDIgMTh0MTggNDJ2NjIwcTAgMjQtMTggNDJ0LTQyIDE4SDE4MFptMC02MGg2MDBWNDg2SDE4MHY0MzBabTAtNDkwaDYwMFYyOTZIMTgwdjEzMFptMCAwVjI5NnYxMzBaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENoZWNrZWQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xOC45IDM1LjFxLS4zIDAtLjU1LS4xLS4yNS0uMS0uNS0uMzVMOC44IDI1LjZxLS40NS0uNDUtLjQ1LTEuMSAwLS42NS40NS0xLjEuNDUtLjQ1IDEuMDUtLjQ1LjYgMCAxLjA1LjQ1bDggOCAxOC4xNS0xOC4xNXEuNDUtLjQ1IDEuMDc1LS40NXQxLjA3NS40NXEuNDUuNDUuNDUgMS4wNzVUMzkuMiAxNS40TDE5Ljk1IDM0LjY1cS0uMjUuMjUtLjUuMzUtLjI1LjEtLjU1LjFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2VkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2xvc2UgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjE4IDI3MCA4MjhxLTkgOS0yMSA5dC0yMS05cS05LTktOS0yMXQ5LTIxbDIxMC0yMTAtMjEwLTIxMHEtOS05LTktMjF0OS0yMXE5LTkgMjEtOXQyMSA5bDIxMCAyMTAgMjEwLTIxMHE5LTkgMjEtOXQyMSA5cTkgOSA5IDIxdC05IDIxTDUyMiA1NzZsMjEwIDIxMHE5IDkgOSAyMXQtOSAyMXEtOSA5LTIxIDl0LTIxLTlMNDgwIDYxOFpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERhbmdlciA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTcuNzUgNDJxLS42IDAtMS4xNzUtLjI1LS41NzUtLjI1LS45NzUtLjY1bC04LjctOC43cS0uNC0uNC0uNjUtLjk3NVQ2IDMwLjI1di0xMi41cTAtLjYuMjUtMS4xNzUuMjUtLjU3NS42NS0uOTc1bDguNy04LjdxLjQtLjQuOTc1LS42NVQxNy43NSA2aDEyLjVxLjYgMCAxLjE3NS4yNS41NzUuMjUuOTc1LjY1bDguNyA4LjdxLjQuNC42NS45NzVUNDIgMTcuNzV2MTIuNXEwIC42LS4yNSAxLjE3NS0uMjUuNTc1LS42NS45NzVsLTguNyA4LjdxLS40LjQtLjk3NS42NVQzMC4yNSA0MlpNMjQgMzMuOTVxLjcgMCAxLjIyNS0uNTI1LjUyNS0uNTI1LjUyNS0xLjIyNSAwLS43LS41MjUtMS4yMjVRMjQuNyAzMC40NSAyNCAzMC40NXEtLjcgMC0xLjIyNS41MjUtLjUyNS41MjUtLjUyNSAxLjIyNSAwIC43LjUyNSAxLjIyNS41MjUuNTI1IDEuMjI1LjUyNVptMC03LjJxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTUuMXEwLS42NS0uNDI1LTEuMDc1UTI0LjY1IDEzLjYgMjQgMTMuNnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2MTAuMTVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wk0xNy43NSAzOWgxMi41TDM5IDMwLjI1di0xMi41TDMwLjI1IDloLTEyLjVMOSAxNy43NXYxMi41Wk0yNCAyNFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhbmdlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERlbGV0ZSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTMuMDUgNDJxLTEuMiAwLTIuMS0uOS0uOS0uOS0uOS0yLjFWMTAuNUg5LjVxLS42NSAwLTEuMDc1LS40MjVROCA5LjY1IDggOXEwLS42NS40MjUtMS4wNzVROC44NSA3LjUgOS41IDcuNWg3LjlxMC0uNjUuNDI1LTEuMDc1UTE4LjI1IDYgMTguOSA2aDEwLjJxLjY1IDAgMS4wNzUuNDI1LjQyNS40MjUuNDI1IDEuMDc1aDcuOXEuNjUgMCAxLjA3NS40MjVRNDAgOC4zNSA0MCA5cTAgLjY1LS40MjUgMS4wNzUtLjQyNS40MjUtMS4wNzUuNDI1aC0uNTVWMzlxMCAxLjItLjkgMi4xLS45LjktMi4xLjlabTAtMzEuNVYzOWgyMS45VjEwLjVabTUuMyAyMi43cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE2LjI1cTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzVabTguMyAwcTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1VjE2LjI1cTAtLjY1LS40MjUtMS4wNzUtLjQyNS0uNDI1LTEuMDc1LS40MjUtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzVabS0xMy42LTIyLjdWMzkgMTAuNVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEVkaXQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9e2Nsc30gdmlld0JveD1cIjAgMCA0OCA0OFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTkgMzloMi4ybDIyLjE1LTIyLjE1LTIuMi0yLjJMOSAzNi44Wm0zMC43LTI0LjMtNi40LTYuNCAyLjEtMi4xcS44NS0uODUgMi4xMjUtLjgyNSAxLjI3NS4wMjUgMi4xMjUuODc1TDQxLjggOC40cS44NS44NS44NSAyLjF0LS44NSAyLjFaTTcuNSA0MnEtLjY1IDAtMS4wNzUtLjQyNVE2IDQxLjE1IDYgNDAuNXYtNC4zcTAtLjMuMS0uNTUuMS0uMjUuMzUtLjVMMzEuMiAxMC40bDYuNCA2LjQtMjQuNzUgMjQuNzVxLS4yNS4yNS0uNS4zNS0uMjUuMS0uNTUuMVptMjQuNzUtMjYuMjUtMS4xLTEuMSAyLjIgMi4yWlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEV4cGFuZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDcxMSAyNDAgNDcxbDQzLTQzIDE5NyAxOTggMTk3LTE5NyA0MyA0My0yNDAgMjM5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW5mbyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTI0LjE1IDM0cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di05LjA1cTAtLjYtLjQ1LTEuMDI1UTI0Ljc1IDIyIDI0LjE1IDIycS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY5LjA1cTAgLjYuNDUgMS4wMjUuNDUuNDI1IDEuMDUuNDI1Wk0yNCAxOC4zcS43IDAgMS4xNzUtLjQ1LjQ3NS0uNDUuNDc1LTEuMTV0LS40NzUtMS4yUTI0LjcgMTUgMjQgMTVxLS43IDAtMS4xNzUuNS0uNDc1LjUtLjQ3NSAxLjJ0LjQ3NSAxLjE1cS40NzUuNDUgMS4xNzUuNDVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3IDAgMTItNXQ1LTEycTAtNy01LTEyVDI0IDdxLTcgMC0xMiA1VDcgMjRxMCA3IDUgMTJ0MTIgNVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBMb2dvdXQgPSAoeyBDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Q2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk04Ljc1IDQyLjVxLTEuNDUgMC0yLjU1LTEuMS0xLjEtMS4xLTEuMS0yLjU1VjkuMTVxMC0xLjQ1IDEuMS0yLjU1IDEuMS0xLjEgMi41NS0xLjFoMTQuN3YzLjY1SDguNzV2MjkuN2gxNC43djMuNjVabTI0LjUtOC43NS0yLjctMi42NSA1LjMtNS4zaC0xNy4zdi0zLjY1aDE3LjJsLTUuMy01LjMgMi43LTIuNiA5LjggOS44WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3VjY2VzcyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwibTIxLjA1IDI4LjU1LTQuOS00LjlxLS40NS0uNDUtMS4xLS40NS0uNjUgMC0xLjE1LjUtLjUuNS0uNSAxLjE1IDAgLjY1LjUgMS4xbDYuMSA2LjFxLjQ1LjQ1IDEuMDUuNDUuNiAwIDEuMDUtLjQ1bDEyLTEycS40NS0uNDUuNDI1LTEuMS0uMDI1LS42NS0uNDc1LTEuMS0uNDUtLjUtMS4xMjUtLjV0LTEuMTc1LjVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3LjI1IDAgMTIuMTI1LTQuODc1VDQxIDI0cTAtNy4yNS00Ljg3NS0xMi4xMjVUMjQgN3EtNy4yNSAwLTEyLjEyNSA0Ljg3NVQ3IDI0cTAgNy4yNSA0Ljg3NSAxMi4xMjVUMjQgNDFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgV2FybmluZyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNC42IDQycS0uNDUgMC0uNzc1LS4ydC0uNTI1LS41NXEtLjItLjM1LS4yMjUtLjcyNS0uMDI1LS4zNzUuMjI1LS43NzVsMTkuNC0zMy41cS4yNS0uNC41NzUtLjU3NVEyMy42IDUuNSAyNCA1LjVxLjQgMCAuNzI1LjE3NS4zMjUuMTc1LjU3NS41NzVsMTkuNCAzMy41cS4yNS40LjIyNS43NzUtLjAyNS4zNzUtLjIyNS43MjV0LS41MjUuNTVxLS4zMjUuMi0uNzc1LjJabTIuNi0zaDMzLjZMMjQgMTBabTE3LTIuODVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzUgMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjVRMjIuNyAzNCAyMi43IDM0LjY1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptMC01LjU1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di04LjJxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY4LjJxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0tLjItNi4xWlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhcm5pbmciLCJmdW5jdGlvbiByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlYWN0Q29udHJvbGxlcnMgPSB7fTtcbiAgICBjb25zdCBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMgPSAocikgPT4ge1xuICAgICAgICByLmtleXMoKS5mb3JFYWNoKChrZXkpID0+IChyZWFjdENvbnRyb2xsZXJzW2tleV0gPSByKGtleSkuZGVmYXVsdCkpO1xuICAgIH07XG4gICAgaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzKGNvbnRleHQpO1xuICAgIHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0uanN4YF0gfHwgcmVhY3RDb250cm9sbGVyc1tgLi8ke25hbWV9LnRzeGBdO1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QgY29udHJvbGxlciBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbnZhciBjcmVhdGVSb290O1xuXG52YXIgbSA9IHJlcXVpcmUkJDA7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBjcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBjcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6Y29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6bW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3JlYWN0OnVubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjcmVhdGVSb290KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5yb290LnJlbmRlcihyZWFjdEVsZW1lbnQpO1xuICAgIH1cbiAgICBfZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInNldEJhc2VVcmwiLCJleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImxlbmd0aCIsImNsZWFuUGF0aCIsInBhdGgiLCJyZXBsYWNlIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic3RyIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJzdHJOb3JtYWxpemUiLCJ0ZXN0IiwibCIsInJlZyIsInciLCJnZXRQcm9wc0Jvb2xTdGF0dXMiLCJvYmoiLCJwcm9wIiwiYm9vbFN0YXRlIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiaXNPYmplY3QiLCJhcmVFcXVhbCIsIm9iajEiLCJvYmoyIiwiaXNBcnJheSIsImkiLCJlbnQxIiwiZW50MiIsImlzRGVmaW5lZCIsInVuZGVmaW5lZCIsImlzSlNPTiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJvYmplY3QiLCJhcnJheSIsIkFycmF5Iiwic29ydEFzYyIsImEiLCJiIiwic29ydCIsInNvcnREZXMiLCJSZWFjdCIsIkNvbnRlbnQiLCJjaGlsZHJlbiIsIkZvb3RlciIsImdldFRva2VuIiwidG9rZW4iLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiVG9hc3QiLCJzZXRVcmwiLCJQYWdlcyIsIlNldHRpbmdzIiwiQXJ0aWNsZXMiLCJMb2dpbiIsIk1lbnUiLCJuYW1lIiwiUGFnZSIsIkxheW91dCIsInVybCIsInN0YXRlIiwiYWpheCIsIm5hdiIsImRpc3BhdGNoIiwicGF0aG5hbWUiLCJtYXRjaCIsIm1hcCIsInVzZVN0YXRlIiwiTmF2TGkiLCJMb2dvdXQiLCJ1c2VMb2NhdGlvbiIsImNsZWFyRGF0YSIsImVuYWJsZSIsInNldEVuYWJsZSIsInNldFRpbWVvdXQiLCJoYW5kbGVMb2dvdXQiLCJQYWdlc0NvbnRhaW5lciIsIkNvbnRlbnROYXYiLCJNb2RhbEVkaXRvciIsInB1c2hEYXRhIiwiYXhpb3MiLCJheGlvc1NldCIsImNyZWF0ZSIsInBhcmFtcyIsInBhZ2UiLCJhcnRpY2xlcyIsImRhdGEiLCJwYWdlcyIsIm1vZGFsIiwic2V0TW9kYWwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJzdGF0dXMiLCJyZXNwb25zZSIsImNsb3NlTW9kYWwiLCJ1cGRhdGVBcnRpY2xlIiwiaWQiLCJyZW1vdmVBcnRpY2xlIiwiY29uc29sZSIsImxvZyIsImhlYWRlciIsInRhZyIsImRyYXciLCJjb2xTaXplIiwiaXNkeW5hbWljIiwidHlwZSIsInB1Ymxpc2hiZWdpbiIsInB1Ymxpc2hlbmQiLCJsaXN0IiwicHVibGlzaGVkIiwiY29udGVudCIsIkJ1dHRvbiIsIlR4dExhYmVsSW5wdXQiLCJub3RpZnkiLCJub3RpZnlDbG9zZSIsIlhNTFNldCIsImxpZmV0aW1lIiwibm90aWZpY2F0aW9uIiwibGlmZSIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIl90b2tlbiIsImlzQ29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwiYmx1clRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjbGVhclRpbWVvdXQiLCJuYXRpdmVFdmVudCIsInN1Ym1pdHRlciIsImJsdXIiLCJwb3N0IiwibmF2VVJMIiwibXNnIiwidGltZW91dCIsInVwZGF0ZVBhZ2UiLCJyZW1vdmVQYWdlIiwiU2VsZWN0b3IiLCJzZXR0aW5ncyIsImNoYW5nZSIsInNldENoYW5nZSIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImNoYW5nZU5hbWUiLCJ2IiwibkRhdGEiLCJzZXRMYW5kaW5nIiwiTGFuZGluZyIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJzdG9yZSIsImNyZWF0ZVNsaWNlIiwiYWpheFNsaWNlIiwiYmFzZVVybCIsImJhc2VVUkwiLCJoZWFkZXJzIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJub3RpZmljYXRpb25TbGljZSIsIm5vdGlmeUtlZXAiLCJldmVudCIsImZ1bmMiLCJjb25maWd1cmVTdG9yZSIsIkRlbGV0ZSIsIkVkaXQiLCJBY3Rpb25zUm93IiwidXBkYXRlIiwiYnRuQ2xzIiwiZGl2Q2xzIiwiQ1NSRklucHV0IiwiQ2hlY2tlZCIsIkNoZWNrYm94IiwiY2xzIiwiY2hlY2tlZCIsIlN1Y2Nlc3MiLCJDbG9zZSIsIk51bWJlcklucHV0IiwiU3dpdGNoSW5wdXQiLCJ1cGRhdGVTZWFyY2giLCJhamF4RGF0YSIsInNGaWVsZHMiLCJoIiwiYWN0aXZlIiwiZWwiLCJmaWx0ZXJlZCIsInNldFZpZXciLCJzZXQiLCJzcGxpdCIsIk51bWJlciIsInNlYXJjaEhhbmRsZUNoYW5nZSIsImZpZWxkIiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlQXJyYXlGaWx0ZXIiLCJiYXNpY1JlbmRlciIsImsiLCJmaWx0ZXJSZW5kZXIiLCJzZWFyY2hGaWx0ZXIiLCJmaWx0ZXIiLCJmaW5kIiwidXBkYXRlQ29udGVudCIsInRvZ2dsZUZpbHRlciIsIklucHV0IiwiQ2FsZW5kYXIiLCJEYXRlUGlja2VyIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiUmljaFRleHQiLCJzY2hlbWEiLCJjbG9zZSIsIm1EYXRhIiwic2V0RGF0YSIsImVtcHR5IiwicGFyIiwidmFsIiwiRGF0ZSIsInNldEhvdXJzIiwiTmF2TGluayIsInRvIiwib25DbGljayIsImlucENscyIsInVzZVJlZiIsIkNvbnRlbnRTdGF0ZSIsIkVkaXRvclN0YXRlIiwiaGFuZGxlS2V5Q29tbWFuZCIsIkVkaXRvciIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJjcmVhdGVFbXB0eSIsImVkaXRvciIsImZvY3VzRWRpdG9yIiwiY3VycmVudCIsImZvY3VzIiwib3B0aW9ucyIsInRleHRBbGlnbiIsImluRHJvcGRvd24iLCJjbGFzc05hbWUiLCJjb21wb25lbnQiLCJkcm9wZG93bkNsYXNzTmFtZSIsIkV4cGFuZCIsImljb25DbHMiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJsYXN0RXZlbnQiLCJzZXRMYXN0RXZlbnQiLCJsYW5kaW5nIiwiYXZhaWJsZSIsInRvZ2dsZVNlbGVjdCIsIiRlbCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNoYW5nZVZhbHVlIiwiSW5mbyIsIldhcm5pbmciLCJEYW5nZXIiLCJpY29ucyIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwib25DaGFuZ2UiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUZvY3VzIiwiQ29tcG9uZW50IiwiSHciLCJyZW5kZXIiLCJIZWxsbyIsIk1haW4iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUHJvdmlkZXIiLCJNYWluQWRtaW4iLCJDbHMiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwiciIsImtleXMiLCJmb3JFYWNoIiwiZGVmYXVsdCIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHMiLCJwcm9wc1ZhbHVlIiwiX2Rpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJ2YWx1ZXMiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9