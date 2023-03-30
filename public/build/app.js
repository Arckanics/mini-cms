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
/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RichText */ "./assets/react/components/admin/ui/RichText/index.jsx");
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
    return v.type === "text" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RichText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i
    }) : null;
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
    for (let [key, value] of Object.entries(prevState)) {
      prevState[key] = node.hasFormat(key);
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
  const updateBtnStates = () => {
    const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_1__.$getSelection)();
    let prop = (0,_lexical_selection__WEBPACK_IMPORTED_MODULE_3__.$getSelectionStyleValueForProperty)(selection, 'font-size');
    let val = format.find(f => f.value === prop) || format[2];
    setDDStates(val.name);
    val.name != '16' ? setActive(true) : setActive(false);
  };
  const handleSelect = value => {
    setToggle(false);
    editor.focus();
    editor.update(() => {
      const selection = (0,lexical__WEBPACK_IMPORTED_MODULE_1__.$getSelection)();
      if ((0,lexical__WEBPACK_IMPORTED_MODULE_1__.$isRangeSelection)(selection)) {
        (0,_lexical_selection__WEBPACK_IMPORTED_MODULE_3__.$patchStyleText)(selection, {
          'font-size': value
        });
      }
    });
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
    onFocus: () => setToggle(!toggle),
    onBlur: () => setToggle(false),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Item, {
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
    className: "dropdown-opt",
    value: value,
    onClick: e => select(value)
  }, name)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

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
/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lexical/react/LexicalContentEditable */ "./node_modules/@lexical/react/LexicalContentEditable.js");
/* harmony import */ var _lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lexical/react/LexicalHistoryPlugin */ "./node_modules/@lexical/react/LexicalHistoryPlugin.js");
/* harmony import */ var _lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lexical/react/LexicalErrorBoundary */ "./node_modules/@lexical/react/LexicalErrorBoundary.js");
/* harmony import */ var _lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Actions_FormatTextGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Actions/FormatTextGroup */ "./assets/react/components/admin/ui/RichText/Actions/FormatTextGroup.jsx");
/* harmony import */ var _Actions_SizeTextGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Actions/SizeTextGroup */ "./assets/react/components/admin/ui/RichText/Actions/SizeTextGroup.jsx");








const theme = {
  text: {
    bold: 'text-bold',
    italic: 'text-italic',
    strikethrough: 'text-through',
    underline: 'text-underline',
    underlineStrikethrough: 'text-underline-through'
  }
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}
function Editor() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalComposer__WEBPACK_IMPORTED_MODULE_1__.LexicalComposer, {
    initialConfig: initialConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toolbar-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_FormatTextGroup__WEBPACK_IMPORTED_MODULE_6__["default"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Actions_SizeTextGroup__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalRichTextPlugin__WEBPACK_IMPORTED_MODULE_2__.RichTextPlugin, {
    contentEditable: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalContentEditable__WEBPACK_IMPORTED_MODULE_3__.ContentEditable, {
      className: "editor-text"
    }),
    placeholder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "editor-placeholder"
    }, "Contenu..."),
    ErrorBoundary: (_lexical_react_LexicalErrorBoundary__WEBPACK_IMPORTED_MODULE_5___default())
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lexical_react_LexicalHistoryPlugin__WEBPACK_IMPORTED_MODULE_4__.HistoryPlugin, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

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
/* harmony import */ var _RichText___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RichText/ */ "./assets/react/components/admin/ui/RichText/index.jsx");

















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
/* harmony export */   "FormatSize": () => (/* reexport safe */ _FormatSize__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Italic": () => (/* reexport safe */ _Italic__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Strike": () => (/* reexport safe */ _Strike__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "SuperScript": () => (/* reexport safe */ _SuperScript__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Underline": () => (/* reexport safe */ _Underline__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bold */ "./assets/react/icon/text-editor/Bold.jsx");
/* harmony import */ var _FormatSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatSize */ "./assets/react/icon/text-editor/FormatSize.jsx");
/* harmony import */ var _Italic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Italic */ "./assets/react/icon/text-editor/Italic.jsx");
/* harmony import */ var _Strike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strike */ "./assets/react/icon/text-editor/Strike.jsx");
/* harmony import */ var _SuperScript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuperScript */ "./assets/react/icon/text-editor/SuperScript.jsx");
/* harmony import */ var _Underline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Underline */ "./assets/react/icon/text-editor/Underline.jsx");








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
/******/ __webpack_require__.O(0, ["vendors-node_modules_lexical_react_LexicalComposer_js-node_modules_lexical_react_LexicalConte-b552eb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHbkIsVUFBVSxDQUFDLElBQUksQ0FBQ3BYLE9BQU8sQ0FBQztJQUMzQztJQUNBQSxPQUFPLENBQUN1WSxJQUFJLENBQUNyQyxNQUFNLENBQUN1QyxZQUFZLENBQUM7RUFDckM7RUFDQVIsY0FBYyxDQUFDclMsSUFBSSxFQUFFNkcsT0FBTyxFQUFFO0lBQzFCLElBQUksQ0FBQ3pNLE9BQU8sQ0FBQzBZLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUMvUyxJQUFJLEVBQUU7TUFBRWdULE1BQU0sRUFBRW5NLE9BQU87TUFBRW9NLE9BQU8sRUFBRTtJQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ3pGO0FBQ0o7QUFDQWYsU0FBUyxDQUFDZ0IsTUFBTSxHQUFHO0VBQ2Y3QixTQUFTLEVBQUU4QixNQUFNO0VBQ2pCaEIsS0FBSyxFQUFFblY7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0FjdGlvbnNSb3cuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NTUkZJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Db250ZW50TmF2LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0RhdGVQaWNrZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTW9kYWxFZGl0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTmF2TGkuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTnVtYmVySW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUGFnZXNDb250YWluZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvQWN0aW9ucy9Gb3JtYXRUZXh0R3JvdXAuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUmljaFRleHQvQWN0aW9ucy9TaXplVGV4dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L0FjdGlvbnMvaXRlbXMvQnRuRm9ybWF0VGV4dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9SaWNoVGV4dC9BY3Rpb25zL2l0ZW1zL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1JpY2hUZXh0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1NlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1N3aXRjaElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1RvYXN0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1R4dExhYmVsSW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9oZWxsb1dvcmxkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2FsZW5kYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DaGVja2VkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvQ2xvc2UuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9EYW5nZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9EZWxldGUuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9FZGl0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRXhwYW5kLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvSW5mby5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9XYXJuaW5nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL0JvbGQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvRm9ybWF0U2l6ZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9JdGFsaWMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vdGV4dC1lZGl0b3IvU3RyaWtlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1N1cGVyU2NyaXB0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL3RleHQtZWRpdG9yL1VuZGVybGluZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi90ZXh0LWVkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL3ZlbmRvci9zeW1mb255L3V4LXJlYWN0L2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIixcblx0XCIuL21haW5fYWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiXHJcbi8vIHVybCBkZSBiYXNlIHBvdXIgZmFjaWxpdGVyIGxhIG5hdmlnYXRpb25cclxuXHJcbmNvbnN0IHNldEJhc2VVcmwgPSAoZXh0ID0gXCJcIikgPT4ge1xyXG4gIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZXh0Lmxlbmd0aCA+IDAgPyBcIi9cIiA6IG51bGx9JHtleHR9YFxyXG59XHJcblxyXG4vLyBuZXR0b2llIGwndXJsIGZvdXJuaVxyXG5cclxuY29uc3QgY2xlYW5QYXRoID0gcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC8kfFxcLyQvLCAnJykucmVwbGFjZSgvXFwvXFwvL2csICcvJylcclxuXHJcbi8vIHByZW1pw6hyZSBsZXR0cmUgZW4gbWFqdXNjdWxlXHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHR4dCkgPT4ge1xyXG4gIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG4vLyBvYnRlbmlyIGwndXJsIHJlbGF0aXZlXHJcblxyXG5jb25zdCBlbmRPZlBhdGggPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJ1xcLycpKVxyXG59XHJcblxyXG4vLyBjaGFuZ2UgbGUgdGl0cmUgZGFucyBsJ29uZ2xldFxyXG5cclxuY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gIG4gPSBuLnJlcGxhY2UoL1xcLy9nLCBcIlwiKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gYE1pbmktQ01TIC0+ICR7KG4ubGVuZ3RoID4gMCA/IGNhcGl0YWxpemUobikgOiBcIlNldHRpbmdzXCIpfWBcclxuICByZXR1cm47XHJcbn1cclxuXHJcbi8vIHRyb3V2ZSB1bmUgZXhwcmVzc2lvbiByw6lndWxpw6hyZVxyXG5cclxuY29uc3Qgc3RyQ29udGFpbnMgPSAoc3RyLCBzZWFyY2gpID0+IHtcclxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKVxyXG4gIHJldHVybiBzdHIuc2VhcmNoKHJlKSA+PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuXHJcbi8vIG5vcm1hbGl6ZSB1biBzdHJpbmcgcG91ciBmaWx0cmVcclxuXHJcbmNvbnN0IHN0ck5vcm1hbGl6ZSA9IChzdHIpID0+IHtcclxuICBjb25zdCB0ZXN0ID0gKGwscmVnKSA9PiBuZXcgUmVnRXhwKHJlZykudGVzdChsKVxyXG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKVxyXG4gICAgLnJlcGxhY2UoL1teYS16XS9nLCAodykgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIHRlc3QodyAsL8OjfMOgfMOhfMOifMOkL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcImFcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6h8w6l8w6p8w6svZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiZVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DrHzDrXzDrnzDry9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJpXCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8O1fMOyfMOzfMO0fMO2L2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm9cIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw7l8w7p8w7t8w7wvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwidVwiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/DvXzDvy9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJ5XCJcclxuICAgICAgICBjYXNlIHRlc3QodywgL8OxL2dpKTpcclxuICAgICAgICAgIHJldHVybiBcIm5cIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvxZMvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwib2VcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6YvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiYWVcIlxyXG4gICAgICAgIGNhc2UgdGVzdCh3LCAvw6cvZ2kpOlxyXG4gICAgICAgICAgcmV0dXJuIFwiY1wiXHJcbiAgICAgICAgY2FzZSB0ZXN0KHcsIC/Dny9naSk6XHJcbiAgICAgICAgICByZXR1cm4gXCJzc1wiXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB3XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIHRyb3V2ZXIgdW5lIHByb3BzIGJvb2zDqWVuICh2cmFpIG91IGZhdXgpIGRhbnMgdW4gb2JqZXQgcmVjdXJzaWZcclxuXHJcbmNvbnN0IGdldFByb3BzQm9vbFN0YXR1cyA9IChvYmosIHByb3AsIGJvb2xTdGF0ZSkgPT4ge1xyXG5cclxuICBpZiAob2JqW3Byb3BdKSB7XHJcbiAgICByZXR1cm4gb2JqW3Byb3BdID09PSBib29sU3RhdGU7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcclxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKGdldFByb3BzQm9vbFN0YXR1cyh2YWx1ZSwgcHJvcCwgYm9vbFN0YXRlKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG4vLyBjb21wYXJlIGRldXggb2JqZXRzIEpTICh0b3V0IHR5cGVzKVxyXG5cclxuY29uc3QgYXJlRXF1YWwgPSAob2JqMSxvYmoyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBvYmoxICE9PSB0eXBlb2Ygb2JqMikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICBpZiAob2JqMS5sZW5ndGggIT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWFyZUVxdWFsKG9iajFbaV0sb2JqMltpXSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikpIHtcclxuICAgIGNvbnN0IGVudDEgPSBPYmplY3QuZW50cmllcyhvYmoxKVxyXG4gICAgY29uc3QgZW50MiA9IE9iamVjdC5lbnRyaWVzKG9iajIpXHJcbiAgICBpZiAoZW50MS5sZW5ndGggIT09IGVudDIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqMSkpIHtcclxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgaXNEZWZpbmVkKG9iajJba2V5XSkpIHtcclxuICAgICAgICBpZiAoIWFyZUVxdWFsKG9iajFba2V5XSxvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gb2JqMSA9PT0gb2JqMlxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCBkw6lmaW5pZVxyXG5cclxuY29uc3QgaXNEZWZpbmVkID0gKG9iaikgPT4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBKU09OIHZhbGlkZVxyXG5cclxuY29uc3QgaXNKU09OID0gKGpzb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgSlNPTi5wYXJzZShqc29uKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIG9iamV0IEpTXHJcblxyXG5jb25zdCBpc09iamVjdCA9IChvYmplY3QpID0+IHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgIWlzQXJyYXkob2JqZWN0KVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gVGFibGVhdXggXHJcblxyXG5jb25zdCBpc0FycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpXHJcbn1cclxuXHJcbmNvbnN0IHNvcnRBc2MgPSAoYSxiKSA9PiB7XHJcbiAgcmV0dXJuIGEuc29ydCA8IGIuc29ydCA/IC0xIDogYS5zb3J0ID4gYi5zb3J0ID8gMSA6IDBcclxufVxyXG5cclxuY29uc3Qgc29ydERlcyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0ID4gYi5zb3J0ID8gLTEgOiBhLnNvcnQgPCBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5leHBvcnQgeyBcclxuICBzZXRCYXNlVXJsLCBcclxuICBjYXBpdGFsaXplLCBcclxuICB1cGRhdGVUaXRsZSwgXHJcbiAgZW5kT2ZQYXRoLCBcclxuICBzdHJDb250YWlucywgXHJcbiAgY2xlYW5QYXRoLCBcclxuICBpc0pTT04sIFxyXG4gIGlzQXJyYXksIFxyXG4gIGFyZUVxdWFsLCBcclxuICBzb3J0QXNjLCBcclxuICBzb3J0RGVzLFxyXG4gIGdldFByb3BzQm9vbFN0YXR1cyxcclxuICBzdHJOb3JtYWxpemUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY29udGVudFwiPlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9J2FkbWluLWZvb3Rlcic+Rm9vdGVyPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJcclxuY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XHJcbiAgbGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9X3Rva2VuXScpXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgbGV0IGtleSA9IHRva2VuLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gIHRva2VuLnJlbW92ZSgpXHJcbiAgcmV0dXJuIGtleVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRUb2tlbiB9IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi91aSdcclxuaW1wb3J0IHsgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCB7IFBhZ2VzLCBTZXR0aW5ncywgQXJ0aWNsZXMsIExvZ2luIH0gZnJvbSAnLi9wYWdlcydcclxuXHJcbmNvbnN0IE1lbnUgPSBbXHJcbiAge25hbWU6IFwiUGFyYW1ldHJlc1wiLCBwYXRoOiBcIi9cIiwgUGFnZTogU2V0dGluZ3N9LFxyXG4gIHtuYW1lOiBcIlBhZ2VzXCIsIHBhdGg6IFwiL3BhZ2VzXCIsIFBhZ2U6IFBhZ2VzfSxcclxuICB7bmFtZTogXCJBcnRpY2xlc1wiLCBwYXRoOiBcIi9hcnRpY2xlc1wiLCBQYWdlOiBBcnRpY2xlc30sXHJcbl1cclxuXHJcbmNvbnN0IExheW91dCA9ICgpID0+IHtcclxuICBjb25zdCB1cmwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgudXJsKVxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVybCA9PT0gXCJcIiA/IGRpc3BhdGNoKHNldFVybChcIlwiKSkgOiBudWxsXHJcbiAgICBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXFwvJC8sICcnKSA/IG5hdihjbGVhblBhdGgobG9jYXRpb24ucGF0aG5hbWUpKSA6IHVuZGVmaW5lZFxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJsYXlvdXRcIj5cclxuICAgICAgPFJvdXRlcz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nbWluaS1hZG1pbi9sb2dpbicgZWxlbWVudD17PExvZ2luLz59IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTWVudS5tYXAoKHtwYXRoLFBhZ2V9LGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZSBrZXk9e2l9IHBhdGg9e2BtaW5pLWFkbWluJHtwYXRofWB9IGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIFBhZ2VzPXtNZW51fSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxQYWdlIHVybD17cGF0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgICAgPFRvYXN0Lz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL3VpL05hdkxpJ1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uLy4uL2ljb24vaWNvbi11aS9Mb2dvdXQuanN4J1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjbGVhckRhdGEsIHNldFVybCB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHtQYWdlc30pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBbZW5hYmxlLCBzZXRFbmFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShlbmRPZlBhdGgobG9jYXRpb24ucGF0aG5hbWUpKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEVuYWJsZSh0cnVlKVxyXG4gICAgfSwgNTApXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShuKVxyXG4gICAgZGlzcGF0Y2goY2xlYXJEYXRhKCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J25hdmJhcicgY2xhc3NOYW1lPXshZW5hYmxlID8gJ2ZhZGVPdXRMZWZ0JyA6ICcnfT5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJuYXZiYXItdG9wXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdi10aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPk1pbmktQ01TPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFBhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAoe25hbWUscGF0aH0saSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8TmF2TGkga2V5PXtpfSB0bz17YC9taW5pLWFkbWluJHtwYXRofWAucmVwbGFjZSgvXFwvJC9nLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt1cGRhdGVUaXRsZShwYXRoKTsgZGlzcGF0Y2goc2V0VXJsKHBhdGgpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpPn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXYtb3B0c1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2Jz5cclxuICAgICAgICAgIDxOYXZMaSB0bz1cIi9taW5pLWFkbWluL2xvZ291dFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+PExvZ291dCBDbHM9XCJzdmctaWNvblwiIC8+PC9OYXZMaT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2LCBNb2RhbEVkaXRvciB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIENSVUQgQ29tcGxldCBwb3VyIGxlcyBBcnRpY2xlc1xyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXQsIHBhcmFtczoge3BhZ2U6ICdhcnRpY2xlcyd9fSlcclxuICBjb25zdCBhcnRpY2xlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLmFydGljbGVzKVxyXG4gIGNvbnN0IHBhZ2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7ZW5hYmxlOiBmYWxzZSwgZGF0YTogbnVsbCwgdGl0bGU6ICcnfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdhcnRpY2xlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcsIHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ3BhZ2VzJ319KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAncGFnZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcy5yZXNwb25zZS5zdGF0dXNcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMzAyKSB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnL21pbmktYWRtaW4vbG9nb3V0JylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKHsuLi5tb2RhbCwgZW5hYmxlOiBmYWxzZX0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVBcnRpY2xlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh7Li4ubW9kYWwsIGVuYWJsZTogdHJ1ZSwgdGl0bGU6ICdNb2RpZmllcid9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlQXJ0aWNsZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAge3RhZzogJ3RpdGxlJywgbmFtZTogJ3RpdHJlJywgZHJhdzogJ3N0cmluZycsIGNvbFNpemU6IDJ9LFxyXG4gICAge3RhZzogJ3NvcnQnLCBuYW1lOiAnb3JkcmUnLCBkcmF3OiAnbnVtYmVyJywgY29sU2l6ZTogXCIxLTVcIn0sXHJcbiAgICB7dGFnOiAncGFnZScsIG5hbWU6ICdwYWdlJywgZHJhdzogJ29iamVjdC50aXRsZScsIGNvbFNpemU6IDJ9LFxyXG4gICAge3RhZzogJ3B1Ymxpc2hlZCcsIG5hbWU6ICd2aXNpYmxlJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdpc2R5bmFtaWMnLCBuYW1lOiAnZHluYW1pcXVlJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J0FydGljbGVzJ30+XHJcbiAgICAgIHsgYXJ0aWNsZXMgJiYgcGFnZXMgPyA8Q29udGVudE5hdiBcclxuICAgICAgICBkYXRhPXthcnRpY2xlc30gaGVhZGVyPXtoZWFkZXJ9IFxyXG4gICAgICAgIHVwZGF0ZT17dXBkYXRlQXJ0aWNsZX0gcmVtb3ZlPXtyZW1vdmVBcnRpY2xlfSBcclxuICAgICAgICAvPiBcclxuICAgICAgICA6IFxyXG4gICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgLy8gZmVuw6p0cmUgZCfDqWRpdGlvbiBldCBjcsOpYXRpb24gZGVzIGFydGljbGVzXHJcbiAgICAgICAgbW9kYWwuZW5hYmxlID8gXHJcbiAgICAgICAgPE1vZGFsRWRpdG9yIGRhdGE9e21vZGFsLmRhdGF9IHRpdGxlPXttb2RhbC50aXRsZX0gY2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBzY2hlbWE9e1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNkeW5hbWljOiB7dHlwZTogXCJib29sXCIsIG5hbWU6ICdEeW5hbWlxdWUnfSxcclxuICAgICAgICAgICAgICBwdWJsaXNoYmVnaW46IHt0eXBlOiAnZGF0ZScsIG5hbWU6IFwiRMOpYnV0XCIsIGRyYXc6IFwidGl0bGVcIn0sXHJcbiAgICAgICAgICAgICAgcHVibGlzaGVuZDoge3R5cGU6ICdkYXRlJywgbmFtZTogXCJGaW5cIiwgZHJhdzogXCJ0aXRsZVwifSxcclxuICAgICAgICAgICAgICB0aXRsZToge3R5cGU6IFwic3RyaW5nXCIsIG5hbWU6IFwiVGl0cmVcIn0sXHJcbiAgICAgICAgICAgICAgcGFnZXM6IHt0eXBlOiAnc2VsZWN0JywgbmFtZTogXCJQYWdlXCIsIGRyYXc6IFwidGl0bGVcIiwgbGlzdDogcGFnZXN9LFxyXG4gICAgICAgICAgICAgIHNvcnQ6IHt0eXBlOiBcInNvcnRpbmdcIiwgbmFtZTogJ09yZHJlJywgbGlzdDogYXJ0aWNsZXN9LFxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlZDoge3R5cGU6IFwiYm9vbFwiLCBuYW1lOiAnVmlzaWJsZSd9LFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHt0eXBlOiBcInRleHRcIiwgbmFtZTogJ0NvbnRlbnUnfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSAvPiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgVHh0TGFiZWxJbnB1dCB9IGZyb20gJy4uL3VpJ1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0VXJsIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgeyBjbGVhblBhdGggfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBub3RpZnksIG5vdGlmeUNsb3NlIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRlclxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICAvLyByZWR1eCAtIGFqYXhcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBYTUxTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uWE1MU2V0LmF4aW9zfSlcclxuICAvLyByZWR1eCAtIE5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IGxpZmV0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24ubGlmZSlcclxuICAvLyBzdGF0ZVxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBbaXNDb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gdGltZW91dFZhclxyXG4gIGxldCBibHVyVGltZW91dCA9IG51bGxcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGJsdXJUaW1lb3V0ID0gYmx1clRpbWVvdXQgIT09IG51bGwgPyBjbGVhclRpbWVvdXQoYmx1clRpbWVvdXQpIDogc2V0VGltZW91dCgoKSA9PiBlLm5hdGl2ZUV2ZW50LnN1Ym1pdHRlci5ibHVyKCksIDUwMClcclxuICAgIGFqYXgucG9zdCgnL2xvZ2luJywgeyAuLi5zdGF0ZSB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGxldCB1cmwgPSByZXMuZGF0YS51cmwgPT09IFwiL1wiID8gYCR7WE1MU2V0Lm5hdlVSTH1gIDogYCR7WE1MU2V0Lm5hdlVSTH0vJHtyZXMuZGF0YS51cmx9YFxyXG4gICAgICAgIGRpc3BhdGNoKHNldFVybChcIlwiKSlcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJpbmZvXCIsIFxyXG4gICAgICAgICAgbXNnOiBgQmllbnZlbnVlICR7c3RhdGUuZW1haWx9YCxcclxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIGxpZmV0aW1lKVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHNldENvbm5lY3RlZCh0cnVlKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9Pm5hdihjbGVhblBhdGgodXJsKSksNDAwKVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIiwgXHJcbiAgICAgICAgICBtc2c6IFwiY29ubmVjdGlvbiBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBuYXYoYCR7WE1MU2V0Lm5hdlVSTH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT17J3JvdW5kZWQtbGcgYmctd2hpdGUgY29sb3ItZGFyaycrKGlzQ29ubmVjdGVkID8gJyBjb25uZWN0ZWQnOm51bGwpfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNvbXB0ZShFbWFpbClcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cImFkcmVzc2UgZW1haWwuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIm1vdCBkZSBwYXNzZS4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGRpdkNscz0ncHQtMSBwLTQnXHJcbiAgICAgIGJ0bkNscz0nYnRuIHByaW1hcnkgdy1mdWxsJ1xyXG4gICAgPk1lIENvbm5lY3RlcjwvQnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuLy8gQ1JVRCBDb21wbGV0IHBvdXIgbGVzIFBhZ2VzXHJcblxyXG5jb25zdCBQYWdlcyA9ICgpID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldCwgcGFyYW1zOiB7cGFnZTogJ3BhZ2VzJ319KVxyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KCcvcmVxdWVzdCcpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAzMDIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvbWluaS1hZG1pbi9sb2dvdXQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCB1cGRhdGVQYWdlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVQYWdlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7dGFnOiAndGl0bGUnLCBuYW1lOiAndGl0cmUnLCBkcmF3OiAnc3RyaW5nJywgY29sU2l6ZTogNH0sXHJcbiAgICB7dGFnOiAnc29ydCcsIG5hbWU6ICdvcmRyZScsIGRyYXc6ICdudW1iZXInLCBjb2xTaXplOiBcIjEtNVwifSxcclxuICAgIHt0YWc6ICdzZXR0aW5ncycsIG5hbWU6ICdsYW5kaW5nJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAyfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J1BhZ2VzJ30+XHJcbiAgICAgIHtkYXRhID8gPENvbnRlbnROYXYgXHJcbiAgICAgICAgZGF0YT17ZGF0YX0gaGVhZGVyPXtoZWFkZXJ9IFxyXG4gICAgICAgIHVwZGF0ZT17dXBkYXRlUGFnZX0gcmVtb3ZlPXtyZW1vdmVQYWdlfSBcclxuICAgICAgICAvPlxyXG4gICAgICAgIDpcclxuICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgUGFnZXNDb250YWluZXIsIFNlbGVjdG9yLCBUeHRMYWJlbElucHV0IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IGFyZUVxdWFsLCBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyBSVUQgY29tcGxldCBwb3VyIGxlcyBvcHRpb25zIGRlIHNpdGVcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoeyAuLi5heGlvc1NldCB9KVxyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5zZXR0aW5ncylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbY2hhbmdlLCBzZXRDaGFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2luaXRpYWxTdGF0ZSwgc2V0SW5pdGlhbFN0YXRlXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheC5nZXQoJy9yZXF1ZXN0JylcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZSh7IC4uLnJlcy5kYXRhIH0pXHJcbiAgICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzLnJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDMwMikge1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnL21pbmktYWRtaW4vbG9nb3V0JylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodikgPT4ge1xyXG4gICAgc3dpdGNoICh2KSB7XHJcbiAgICAgIGNhc2UgJ0F1dGhvcic6XHJcbiAgICAgICAgcmV0dXJuICdhdXRldXInO1xyXG4gICAgICBjYXNlICdEZXNjcmlwdGlvbic6XHJcbiAgICAgICAgcmV0dXJuICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNhc2UgJ1NpdGVOYW1lJzpcclxuICAgICAgICByZXR1cm4gJ25vbSBkdSBzaXRlJztcclxuICAgICAgY2FzZSAnTGFuZGluZyc6XHJcbiAgICAgICAgcmV0dXJuICdwYWdlIGRcXCdhY2N1ZWlsJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgcHJvcCkgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEsIFtwcm9wXTogZS50YXJnZXQudmFsdWUgfVxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiBuRGF0YSB9KSlcclxuICAgIGNvbnNvbGUubG9nKGFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldExhbmRpbmcgPSAodikgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEsIExhbmRpbmc6IHYgfVxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiBuRGF0YSB9KSlcclxuICAgIGNvbnNvbGUubG9nKGFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYXJhbcOodHJlcyd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMyBweS0zIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YSA/IDw+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0F1dGhvcicpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpKX0gaWQ9XCJBdXRob3JcIiB2YWx1ZT17ZGF0YS5BdXRob3J9IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnRGVzY3JpcHRpb24nKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpKX0gaWQ9XCJEZXNjcmlwdGlvblwiIHZhbHVlPXtkYXRhLkRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnU2l0ZU5hbWUnKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpKX0gaWQ9XCJTaXRlTmFtZVwiIHZhbHVlPXtkYXRhLlNpdGVOYW1lfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdG9yIGNscz0nc2Vjb25kYXJ5JyBpY29uQ2xzPSdpY29uJyBhY3RpdmU9e2RhdGEuTGFuZGluZ30gbGlzdD17ZGF0YS5QYWdlc30gYWN0aW9uPXtzZXRMYW5kaW5nfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdibG9jayBweS0yJz5QYWdlPC9oMj5cclxuICAgICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICAgIDwvPiA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2hhbmdlICYmIDxCdXR0b24gYnRuQ2xzPXsnYnRuIHNlY29uZGFyeSBmYWRlSW5MZWZ0J30gZGl2Q2xzPXtcInAtMiBmbGV4IGp1c3RpZnktZW5kXCJ9PlNhdXZlZ2FyZGVyPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncyIsImltcG9ydCBQYWdlcyBmcm9tIFwiLi9QYWdlc1wiO1xyXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4vQXJ0aWNsZXNcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuZXhwb3J0IHsgUGFnZXMsIEFydGljbGVzLCBTZXR0aW5ncywgTG9naW4gfSIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgc2V0QmFzZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5leHBvcnQgY29uc3QgYWpheFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhamF4JyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVybDogJycsXHJcbiAgICBiYXNlVXJsOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICBuYXZVUkw6IFwiL21pbmktYWRtaW5cIixcclxuICAgIGF4aW9zOiB7XHJcbiAgICAgIGJhc2VVUkw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHt9XHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXJsOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51cmwgPSBlbmRPZlBhdGgoY2xlYW5QYXRoKGAke2FjdGlvbi5wYXlsb2FkfWApKVxyXG4gICAgfSxcclxuICAgIHB1c2hEYXRhOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGRhdGEgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLmRhdGEgPSB7Li4uc3RhdGUuZGF0YSwgW25hbWVdOiBkYXRhfVxyXG4gICAgfSxcclxuICAgIGNsZWFyRGF0YTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRhdGEgPSB7fVxyXG4gICAgICBzdGF0ZS51cmwgPSBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0VXJsLCBwdXNoRGF0YSwgY2xlYXJEYXRhIH0gPSBhamF4U2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWpheFNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgYWpheFNsaWNlIGZyb20gXCIuL2FqYXhTbGljZVwiO1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uU2xpY2UgZnJvbSBcIi4vbm90aWZpY2F0aW9uU2xpY2VcIjtcclxuXHJcbmV4cG9ydCB7IGFqYXhTbGljZSwgbm90aWZpY2F0aW9uU2xpY2UgfSIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIm5vdGlmaWNhdGlvblwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgbXNnOiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIm91dFwiLFxyXG4gICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgbGlmZTogNDAwMFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIG5vdGlmeTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgY29uc3Qge3R5cGUsbXNnLHRpbWVvdXR9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbXNnOiBtc2csXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBzdGF0dXMgOiBcImluXCIsXHJcbiAgICAgICAgdGltZW91dDogdGltZW91dCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlLZWVwOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7ZXZlbnQsIGZ1bmN9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgaWYgKGV2ZW50ID09PSBcInN0YXlcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHRpbWVvdXQ6IGZ1bmMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeUNsb3NlOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIHN0YXR1czogJ291dCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UsIG5vdGlmeUtlZXAgfSA9IG5vdGlmaWNhdGlvblNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvblNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvblNsaWNlLCBhamF4U2xpY2UgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBhamF4OiBhamF4U2xpY2UsXHJcbiAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvblNsaWNlXHJcbiAgfSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9EZWxldGUnXHJcbmltcG9ydCBFZGl0IGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FZGl0J1xyXG5cclxuY29uc3QgQWN0aW9uc1JvdyA9ICh7IGlkLCB1cGRhdGUsIHJlbW92ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGZsZXgtbm93cmFwIGp1c3RpZnktY2VudGVyIGdhcC0zJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbi1idXR0b24gc2Vjb25kYXJ5JyBvbkNsaWNrPXsoZSkgPT4gdXBkYXRlKGlkKX0+XHJcbiAgICAgICAgPEVkaXQgY2xzPSdhY3Rpb24taWNvbiBlZGl0Jy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9uLWJ1dHRvbiBzZWNvbmRhcnknIG9uQ2xpY2s9eyhlKSA9PiByZW1vdmUoaWQpfT5cclxuICAgICAgICA8RGVsZXRlIGNscz0nYWN0aW9uLWljb24gZGVsZXRlJy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zUm93IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ0bkNscywgZGl2Q2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbHN9PnsgY2hpbGRyZW4gfTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDU1JGSW5wdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl90b2tlblwiIHZhbHVlPXtnZXRUb2tlbigpfSAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ1NSRklucHV0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2hlY2tlZCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2hlY2tlZCdcclxuXHJcbmNvbnN0IENoZWNrYm94ID0gKHsgY2xzLCBjaGFuZ2UsIGNoZWNrZWQsIGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiaW5wdXQtY2hlY2tib3ggXCIgKyBjbHN9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSl9PlxyXG4gICAgICB7IGNoZWNrZWQgPyA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY2hlY2tib3gtdHJ1ZSc+PENoZWNrZWQgLz48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY2hlY2tib3gtZmFsc2UnPjwvZGl2PiB9XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUsIGdldFByb3BzQm9vbFN0YXR1cywgaXNBcnJheSwgc3RyTm9ybWFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1N1Y2Nlc3MnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2UnXHJcbmltcG9ydCBOdW1iZXJJbnB1dCBmcm9tICcuL051bWJlcklucHV0J1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCdcclxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gJy4vU3dpdGNoSW5wdXQnXHJcbmltcG9ydCB7IEFjdGlvbnNSb3csIFNlbGVjdG9yIH0gZnJvbSAnLi8nXHJcblxyXG5cclxuY29uc3QgQ29udGVudE5hdiA9ICh7IGhlYWRlciwgZGF0YSwgdXBkYXRlLCByZW1vdmUsIGNyZWF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaCwgdXBkYXRlU2VhcmNoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGFqYXhEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEpXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaW5pdGlhdGlvbiBkZXMgZmlsdHJlc1xyXG4gICAgY29uc3Qgc0ZpZWxkcyA9IHt9XHJcbiAgICBoZWFkZXIubWFwKChoKSA9PiBcclxuICAgICAgc0ZpZWxkc1toLnRhZ10gPSBoLnRhZyAhPT0gXCJwYWdlXCIgP1xyXG4gICAgICB7IHZhbHVlOiBoLmRyYXcgPT09IFwibnVtYmVyXCIgPyAwIDogaC5kcmF3Lm1hdGNoKC9eYm9vbC8pID8gZmFsc2UgOiBcIlwiLCBhY3RpdmU6IGZhbHNlIH0gOlxyXG4gICAgICB7IHZhbHVlOiBbLi4uYWpheERhdGFbaC50YWcrXCJzXCJdXS5tYXAoKGVsLGkpID0+ICh7Li4uZWwsIGZpbHRlcmVkOiBpID09IDAgPyB0cnVlIDogZmFsc2V9KSksIGFjdGl2ZTogZmFsc2UgfVxyXG4gICAgICApXHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zRmllbGRzIH0pO1xyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBmb3JtYXQgbGVzIGRvbm7DqWUgcG91ciBhZmZpY2hhZ2VcclxuICBjb25zdCBzZXRWaWV3ID0gKHZhbHVlLCBzZXQgPSAndmFsdWUnLCB0YWcpID0+IHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmplY3RcXC4uKy9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzZXQuc3BsaXQoJy4nKVtzZXQuc3BsaXQoJy4nKS5sZW5ndGggLSAxXVxyXG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKGFqYXhEYXRhW2Ake3RhZ31zYF1bTnVtYmVyKHZhbHVlKSAtIDFdW25hbWVdKVxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyA8U3VjY2VzcyBjbHM9J2gtNiB3LTYgbS1hdXRvIGljb24gc3VjY2VzcycgLz4gOiA8Q2xvc2UgY2xzPSdoLTYgdy02IG0tYXV0byBpY29uIGZhbHNlJyAvPlxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZykudGVzdChzZXQpOlxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15zdHIvZykudGVzdChzZXQpOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gY2FwaXRhbGl6ZSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIHVwZGF0ZSBkZXMgZmlsdHJlcyBkZSByZWNoZXJjaGVzXHJcbiAgY29uc3Qgc2VhcmNoSGFuZGxlQ2hhbmdlID0gKGUsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlICdzb3J0JzpcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PSAnJyA/IDAgOiB2YWx1ZSA+IGRhdGEubGVuZ3RoIC0gMSA/IGRhdGEubGVuZ3RoIC0gMSA6IHZhbHVlXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTZWFyY2goeyAuLi5zZWFyY2gsIFtmaWVsZF06IHsgLi4uc2VhcmNoW2ZpZWxkXSwgdmFsdWU6IHZhbHVlIH0gfSlcclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZSBkZXMgZmlsdHJlcyBkZSByZWNoZXJjaGVzICggc3DDqWNpZmlxdWUgw6AgdW5lIGxpc3RlIGQnw6lsw6ltZW50IGF0dHJpYnV0IFwiZmlsdGVyZWRcIilcclxuICBjb25zdCB1cGRhdGVBcnJheUZpbHRlciA9ICh2YWx1ZSwgdGFnKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IFsuLi5zZWFyY2hbdGFnXS52YWx1ZV07XHJcbiAgICB1cGRhdGVTZWFyY2goXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5zZWFyY2gsXHJcbiAgICAgICAgW3RhZ106IHtcclxuICAgICAgICAgIC4uLnNlYXJjaFt0YWddLFxyXG4gICAgICAgICAgdmFsdWUgOiBhcnJheS5tYXAoZWwgPT4gKHsuLi5lbCwgZmlsdGVyZWQgOiBlbC5pZCA9PT0gdmFsdWUgPyB0cnVlIDogZmFsc2V9KSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgfVxyXG5cclxuICAvLyByZW5kdSBzYW5zIGZpbHRyZXNcclxuICBjb25zdCBiYXNpY1JlbmRlciA9IChkYXRhKSA9PiBkYXRhLm1hcCgoZmllbGQsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J2NvbnRlbnQtcm93Jz5cclxuICAgIHtcclxuICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLCBkcmF3LCB0YWcpfTwvZGl2PilcclxuICAgIH1cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGFjdGlvbi1maWVsZCBjb2xzaXplLTJgfT48QWN0aW9uc1JvdyBpZD17a30gdXBkYXRlPXt1cGRhdGV9IHJlbW92ZT17cmVtb3ZlfSAvPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIClcclxuXHJcbiAgLy8gcmVuZHUgYXZlYyBmaWx0cmVzXHJcbiAgY29uc3QgZmlsdGVyUmVuZGVyID0gKGRhdGEpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hGaWx0ZXIgPSB7fVxyXG5cclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNlYXJjaCkpIHtcclxuICAgICAgaWYgKHYuYWN0aXZlKSB7XHJcbiAgICAgICAgc2VhcmNoRmlsdGVyW2tdID0gdi52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGEubWFwKChmaWVsZCwgaykgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzZWFyY2hGaWx0ZXIpKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2Ygdikge1xyXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgICAgICAgaWYgKCFzdHJOb3JtYWxpemUoZmllbGRba10pLm1hdGNoKHN0ck5vcm1hbGl6ZSh2KSkgJiYgdi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgaWYgKHYgIT09IGZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XHJcbiAgICAgICAgICAgIGlmICh2ID09PSB0cnVlICYmICFmaWVsZFtrXSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHYgPT09IGZhbHNlICYmIGZpZWxkW2tdKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHYuZmluZChlbCA9PiBlbC5maWx0ZXJlZCkuaWRcclxuICAgICAgICAgICAgICBpZiAoZmllbGRba10gIT09IGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nY29udGVudC1yb3cnPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIubWFwKCh7IHRhZywgZHJhdywgY29sU2l6ZSB9LCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtJHtjb2xTaXplfWB9PntzZXRWaWV3KGZpZWxkW3RhZ10sIGRyYXcsIHRhZyl9PC9kaXY+KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3ctZmllbGQgYWN0aW9uLWZpZWxkIGNvbHNpemUtMmB9PjxBY3Rpb25zUm93IGlkPXtrfSB1cGRhdGU9e3VwZGF0ZUNvbnRlbnR9IC8+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIGFjdGl2ZSB1biBmaWx0cmUgKHNlbG9uIGNpYmxlIHV0aWxpc2F0ZXVyKVxyXG4gIGNvbnN0IHRvZ2dsZUZpbHRlciA9IChlLCBjaGVja2VkKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdXBkYXRlU2VhcmNoKHsgLi4uc2VhcmNoLCBbY2hlY2tlZF06IHsgLi4uc2VhcmNoW2NoZWNrZWRdLCBhY3RpdmU6ICFzZWFyY2hbY2hlY2tlZF0uYWN0aXZlIH0gfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2LWhlYWRlcic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyLm1hcCgoaCwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfWB9PntjYXBpdGFsaXplKGgubmFtZSl9PC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLTJgfT57Y2FwaXRhbGl6ZSgnYWN0aW9ucycpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2LXNlYXJjaCc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VhcmNoID9cclxuICAgICAgICAgICAgaGVhZGVyLm1hcCgoaCwgaykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBJbnB1dDtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm51bS9naSkudGVzdChoLmRyYXcpOlxyXG4gICAgICAgICAgICAgICAgICBJbnB1dCA9IDxOdW1iZXJJbnB1dCBjbHM9e2BzZWNvbmRhcnkgY29sc2l6ZS0xMGB9IGlucENscz1cImlucHV0LW51bWJlciBzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZT17KGUsIHZhbHVlKSA9PiBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsIHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17TnVtYmVyKHNlYXJjaFtoLnRhZ10udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2gubmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPFN3aXRjaElucHV0ICBjbHM9J3NlY29uZGFyeScgdmFsdWU9e3NlYXJjaFtoLnRhZ10udmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhlKSA9PiBzZWFyY2hIYW5kbGVDaGFuZ2UoZSwgaC50YWcsICFzZWFyY2hbaC50YWddLnZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqL2dpKS50ZXN0KGguZHJhdyk6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPFNlbGVjdG9yIGNscz0nc2Vjb25kYXJ5JyBcclxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtzZWFyY2hbaC50YWddLnZhbHVlfSBhY3RpdmU9e3NlYXJjaFtoLnRhZ10udmFsdWUuZmluZChlbCA9PiBlbC5maWx0ZXJlZCkuaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KHZhbHVlKSA9PiB1cGRhdGVBcnJheUZpbHRlcih2YWx1ZSwgaC50YWcpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPGlucHV0IHR5cGU9J3RleHQnIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtdHh0IHNlY29uZGFyeSBjb2xzaXplLTEwJyBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZywgZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Y2FwaXRhbGl6ZShoLm5hbWUpfSB2YWx1ZT17c2VhcmNoW2gudGFnXS52YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgc2VhcmNoLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9IGZsZXgganVzdGlmeS1pdGVtcy1zdHJldGNoIGZsZXgtbm93cmFwYH0+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xzPSdzZWNvbmRhcnknIGNoZWNrZWQ9e3NlYXJjaFtoLnRhZ10uYWN0aXZlfSBjaGFuZ2U9eyhlKSA9PiB0b2dnbGVGaWx0ZXIoZSwgaC50YWcpfSAvPlxyXG4gICAgICAgICAgICAgICAge0lucHV0fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9KSA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yYH0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtaW5uZXIgJz5cclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgIXNlYXJjaCB8fCBzZWFyY2ggJiYgIWdldFByb3BzQm9vbFN0YXR1cyhzZWFyY2gsIFwiYWN0aXZlXCIsIHRydWUpID9cclxuICAgICAgICAgICAgZGF0YSAmJiBpc0FycmF5KGRhdGEpID8gYmFzaWNSZW5kZXIoZGF0YSkgOiBudWxsXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgZGF0YSAmJiBpc0FycmF5KGRhdGEpID8gZmlsdGVyUmVuZGVyKGRhdGEpIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TmF2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0NhbGVuZGFyJ1xyXG5cclxuY29uc3QgRGF0ZVBpY2tlciA9ICh7IGNoYW5nZSwgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY2FsZW5kYXInIHRhYkluZGV4PXstMX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlLXR4dCc+eyh2YWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLWZyJykpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FsZW5kYXInPlxyXG4gICAgICAgIDxDYWxlbmRhciBjbHM9eydpY29uJ30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVQaWNrZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL0RhdGVQaWNrZXInXHJcbmltcG9ydCBSaWNoVGV4dCBmcm9tICcuL1JpY2hUZXh0J1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi9TZWxlY3RvcidcclxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gJy4vU3dpdGNoSW5wdXQnXHJcblxyXG5jb25zdCBNb2RhbEVkaXRvciA9ICh7IGRhdGEsIHNjaGVtYSwgdGl0bGUsIGNsb3NlIH0pID0+IHtcclxuICBjb25zdCBbbURhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGVtcHR5ID0ge31cclxuICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChbbmFtZSwgcGFyXSxpKSA9PiB7XHJcbiAgICAgIGxldCB2YWw7XHJcbiAgICAgIHN3aXRjaCAocGFyLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgY2FzZSBcInRleHRcIjpcclxuICAgICAgICAgIHZhbCA9IFwiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwic2VsZWN0XCI6XHJcbiAgICAgICAgY2FzZSBcInNvcnRpbmdcIjpcclxuICAgICAgICAgIHZhbCA9IHBhci5saXN0Lmxlbmd0aCAtIDFcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJib29sXCI6XHJcbiAgICAgICAgICB2YWwgPSBmYWxzZVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgIHZhbCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICB2YWwuc2V0SG91cnMoMCwwLDAsMClcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB2YWwgPSBcIlwiXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBlbXB0eVtuYW1lXSA9IHZhbFxyXG4gICAgfSlcclxuICAgICFkYXRhID8gc2V0RGF0YSh7Li4uZW1wdHl9KSA6IHNldERhdGEoey4uLmRhdGF9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gIW1EYXRhID8gbnVsbCA6IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbW9kYWwtZWRpdG9yJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJhcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLWJhci10eHQnPnt0aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtYmFyLWNsb3NlJyBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cInctNiBoLTZcIiAvPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLXdpbmRvdyc+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoc2NoZW1hKS5tYXAoKFtrZXksdmFsdWVdLGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IElucHV0O1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgICAgICAgSW5wdXQgPSA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXQtdHh0IHNlY29uZGFyeScgdHlwZT1cInRleHRcIiB2YWx1ZT17bURhdGFba2V5XX0gcGxhY2Vob2xkZXI9e3ZhbHVlLm5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAnYm9vbCc6XHJcbiAgICAgICAgICAgICAgICBJbnB1dCA9IDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0zJz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0naW5wdXQtbGFiZWwgcC0yIGZvbnQtYm9sZCc+e3ZhbHVlLm5hbWV9IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoSW5wdXQgdmFsdWU9e21EYXRhW2tleV19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ3NvcnRpbmcnOlxyXG4gICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgICAgICAgICAgIElucHV0ID0gPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3IgY2xzPXsnc2Vjb25kYXJ5IHAtMCd9IGljb25DbHM9eydpY29uJ30gbGlzdD17dmFsdWUubGlzdH0gYWN0aXZlPXttRGF0YVtrZXldfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgICAgICAgSW5wdXQgPSA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyc+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2lucHV0LWxhYmVsIHAtMiBmb250LWJvbGQnPnt2YWx1ZS5uYW1lfSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXttRGF0YVtrZXldfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5ID0ge2l9IGNsYXNzTmFtZT0nbW9kYWwtZmllbGQnPntJbnB1dH08L2Rpdj5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNjaGVtYSkubWFwKChbayx2XSxpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdi50eXBlID09PSBcInRleHRcIiA/IDxSaWNoVGV4dCBrZXk9e2l9IC8+IDogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsRWRpdG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IE5hdkxpID0gKHsgY2hpbGRyZW4sIHRvLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8TmF2TGluayBjbGFzc05hbWU9J25hdi1saW5rJyB0bz17dG99IG9uQ2xpY2s9e29uQ2xpY2t9IGVuZD57IGNoaWxkcmVuIH08L05hdkxpbms+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBOdW1iZXJJbnB1dCA9ICh7IGNscywgaW5wQ2xzLCBjaGFuZ2UsIHZhbHVlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NscyArICcgaW5wdXQtbnVtYmVyLXdyYXAgZmxleCBmbGV4LW5vd3JhcCByZWxhdGl2ZSd9PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9J2Fycm93LWJ0bicgdGFyZ2V0PVwiZG93blwiIG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2UoZSx2YWx1ZS0xKX0gPi08L3NwYW4+PGlucHV0IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPXtpbnBDbHMgKyAnIGNvbHNpemUtMTAnfSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZShlLCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt2YWx1ZX0gLz48c3BhbiBjbGFzc05hbWU9J2Fycm93LWJ0bicgdGFyZ2V0PVwidXBcIiBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlKGUsdmFsdWUrMSl9Pis8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlcklucHV0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGFnZXNDb250YWluZXIgPSAoe2NoaWxkcmVuICwgdGl0bGV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSBtYi04Jz57dGl0bGV9PC9kaXY+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRhaW5lciIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ICRnZXRTZWxlY3Rpb24sICRpc1JhbmdlU2VsZWN0aW9uLCBGT1JNQVRfVEVYVF9DT01NQU5EIH0gZnJvbSBcImxleGljYWxcIjtcclxuaW1wb3J0IHsgdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCB9IGZyb20gXCJAbGV4aWNhbC9yZWFjdC9MZXhpY2FsQ29tcG9zZXJDb250ZXh0XCI7XHJcbmltcG9ydCBCdG5Gb3JtYXRUZXh0IGZyb20gXCIuL2l0ZW1zL0J0bkZvcm1hdFRleHRcIjtcclxuaW1wb3J0IHtcclxuICBCb2xkLFxyXG4gIEl0YWxpYyxcclxuICBTdHJpa2UsXHJcbiAgU3VwZXJTY3JpcHQsXHJcbiAgVW5kZXJsaW5lLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yL1wiO1xyXG5cclxuY29uc3QgRm9ybWF0VGV4dEdyb3VwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlZGl0b3JdID0gdXNlTGV4aWNhbENvbXBvc2VyQ29udGV4dCgpO1xyXG4gIGNvbnN0IFtidG5TdGF0ZXMsIHNldEJ0blN0YXRlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBib2xkOiBmYWxzZSxcclxuICAgIGl0YWxpYzogZmFsc2UsXHJcbiAgICBzdXBlcnNjcmlwdDogZmFsc2UsXHJcbiAgICB1bmRlcmxpbmU6IGZhbHNlLFxyXG4gICAgc3RyaWtldGhyb3VnaDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgYm9sZDogQm9sZCxcclxuICAgIGl0YWxpYzogSXRhbGljLFxyXG4gICAgc3VwZXJzY3JpcHQ6IFN1cGVyU2NyaXB0LFxyXG4gICAgdW5kZXJsaW5lOiBVbmRlcmxpbmUsXHJcbiAgICBzdHJpa2V0aHJvdWdoOiBTdHJpa2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQnRuU3RhdGVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByZXZTdGF0ZSA9IHsgLi4uYnRuU3RhdGVzIH07XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICBsZXQgbm9kZSA9IHNlbGVjdGlvbjtcclxuICAgIGlmICgkaXNSYW5nZVNlbGVjdGlvbihzZWxlY3Rpb24pKSB7XHJcbiAgICAgIG5vZGUgPSBzZWxlY3Rpb24uZ2V0Tm9kZXMoKVswXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcmV2U3RhdGUpKSB7XHJcbiAgICAgIHByZXZTdGF0ZVtrZXldID0gbm9kZS5oYXNGb3JtYXQoa2V5KTtcclxuICAgIH1cclxuICAgIHNldEJ0blN0YXRlcyh7IC4uLnByZXZTdGF0ZSB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuIGVkaXRvci5yZWdpc3RlclVwZGF0ZUxpc3RlbmVyKCh7IGVkaXRvclN0YXRlLCB0YWdzIH0pID0+IHtcclxuICAgICAgZWRpdG9yU3RhdGUucmVhZCgoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQnRuU3RhdGVzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW2VkaXRvcl0pO1xyXG5cclxuICBjb25zdCBpdGVtc0Rpc3BhdGNoID0gKCkgPT4ge1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYnRuU3RhdGVzKSkge1xyXG4gICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgIDxCdG5Gb3JtYXRUZXh0XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBhY3RpdmU9e3ZhbHVlfVxyXG4gICAgICAgICAgY29tbWFuZD17KCkgPT4ge1xyXG4gICAgICAgICAgICBlZGl0b3IuZm9jdXMoKTtcclxuICAgICAgICAgICAgZWRpdG9yLmRpc3BhdGNoQ29tbWFuZChGT1JNQVRfVEVYVF9DT01NQU5ELCBrZXkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG5hbWU9e2tleX1cclxuICAgICAgICAgIGl0ZW09e2ljb25zW2tleV19XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1zO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1pdGVtLWdyb3VwXCI+e2l0ZW1zRGlzcGF0Y2goKS5tYXAoKGkpID0+IGkpfTwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1hdFRleHRHcm91cDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgJGdldFNlbGVjdGlvbiwgJGlzUmFuZ2VTZWxlY3Rpb24gfSBmcm9tIFwibGV4aWNhbFwiO1xyXG5pbXBvcnQgeyB1c2VMZXhpY2FsQ29tcG9zZXJDb250ZXh0IH0gZnJvbSBcIkBsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3NlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgJHBhdGNoU3R5bGVUZXh0LCAkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5IH0gZnJvbSBcIkBsZXhpY2FsL3NlbGVjdGlvblwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vaXRlbXMvRHJvcGRvd25cIjtcclxuaW1wb3J0IHsgRm9ybWF0U2l6ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pY29uL3RleHQtZWRpdG9yXCI7XHJcblxyXG5jb25zdCBTaXplVGV4dEdyb3VwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcm1hdCA9IFtcclxuICAgIHtuYW1lOiAxMiwgdmFsdWU6IFwiMC43NXJlbVwifSxcclxuICAgIHtuYW1lOiAxNCwgdmFsdWU6IFwiMC44NzVyZW1cIn0sXHJcbiAgICB7bmFtZTogMTYsIHZhbHVlOiBudWxsfSxcclxuICAgIHtuYW1lOiAxOCwgdmFsdWU6IFwiMS4xMjVyZW1cIn0sXHJcbiAgICB7bmFtZTogMjAsIHZhbHVlOiBcIjEuMjVyZW1cIn0sXHJcbiAgICB7bmFtZTogMjQsIHZhbHVlOiBcIjEuNXJlbVwifSxcclxuICAgIHtuYW1lOiAzMCwgdmFsdWU6IFwiMS44NzVyZW1cIn0sXHJcbiAgICB7bmFtZTogMzYsIHZhbHVlOiBcIjIuMjVyZW1cIn0sXHJcbiAgXTtcclxuICBjb25zdCBbZWRpdG9yXSA9IHVzZUxleGljYWxDb21wb3NlckNvbnRleHQoKTtcclxuICBjb25zdCBbZHJvcERvd25TdGF0ZSwgc2V0RERTdGF0ZXNdID0gdXNlU3RhdGUoMTYpO1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQnRuU3RhdGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gJGdldFNlbGVjdGlvbigpO1xyXG4gICAgbGV0IHByb3AgPSAkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5KHNlbGVjdGlvbiwgJ2ZvbnQtc2l6ZScpXHJcbiAgICBsZXQgdmFsID0gZm9ybWF0LmZpbmQoZiA9PiBmLnZhbHVlID09PSBwcm9wKSB8fCBmb3JtYXRbMl1cclxuICAgIHNldEREU3RhdGVzKHZhbC5uYW1lKTtcclxuICAgIHZhbC5uYW1lICE9ICcxNicgPyBzZXRBY3RpdmUodHJ1ZSkgOiBzZXRBY3RpdmUoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgZWRpdG9yLmZvY3VzKClcclxuICAgIGVkaXRvci51cGRhdGUoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSAkZ2V0U2VsZWN0aW9uKClcclxuICAgICAgaWYgKCRpc1JhbmdlU2VsZWN0aW9uKHNlbGVjdGlvbikpIHtcclxuICAgICAgICAkcGF0Y2hTdHlsZVRleHQoc2VsZWN0aW9uLCB7XHJcbiAgICAgICAgICAnZm9udC1zaXplJyA6IHZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gZWRpdG9yLnJlZ2lzdGVyVXBkYXRlTGlzdGVuZXIoKHsgZWRpdG9yU3RhdGUgfSkgPT4ge1xyXG4gICAgICBlZGl0b3JTdGF0ZS5yZWFkKCgpID0+IHtcclxuICAgICAgICB1cGRhdGVCdG5TdGF0ZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbZWRpdG9yXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3Rvb2xiYXItaXRlbS1zZWxlY3QnICsgKGFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKX1cclxuICAgICAgdGl0bGU9XCJmb250LXNpemVcIlxyXG4gICAgICBvbkZvY3VzPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XHJcbiAgICAgIG9uQmx1cj17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX1cclxuICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0LXRpdGxlXCI+e2Ryb3BEb3duU3RhdGV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1kaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgIDxGb3JtYXRTaXplIGNscz0naWNvbicvPlxyXG4gICAgICB7IHRvZ2dsZSAmJiA8RHJvcGRvd24gaXRlbT17Zm9ybWF0fSBzZWxlY3Q9e2hhbmRsZVNlbGVjdH0vPiB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaXplVGV4dEdyb3VwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY29uc3QgQnRuRm9ybWF0VGV4dCA9ICh7Y29tbWFuZCwgYWN0aXZlLCBpdGVtLCBuYW1lfSkgPT4ge1xyXG4gIGxldCBJdGVtID0gaXRlbVxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHRpdGxlPXtuYW1lfVxyXG4gICAgICBvbkNsaWNrPXtjb21tYW5kfVxyXG4gICAgICBjbGFzc05hbWU9eyd0b29sYmFyLWl0ZW0nICsgKGFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJdGVtIGNscz0naWNvbicgLz5cclxuICAgIDwvYnV0dG9uPilcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdG5Gb3JtYXRUZXh0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRHJvcGRvd24gPSAoe2l0ZW0gLCBzZWxlY3R9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWxlY3QtZHJvcGRvd24nPlxyXG4gICAgICB7XHJcbiAgICAgICAgaXRlbS5tYXAoKHt2YWx1ZSxuYW1lfSxpKSA9PiBcclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZHJvcGRvd24tb3B0JyBcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNlbGVjdCh2YWx1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IExleGljYWxDb21wb3NlciB9IGZyb20gJ0BsZXhpY2FsL3JlYWN0L0xleGljYWxDb21wb3Nlcic7XHJcbmltcG9ydCB7IFJpY2hUZXh0UGx1Z2luIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbFJpY2hUZXh0UGx1Z2luJztcclxuaW1wb3J0IHsgQ29udGVudEVkaXRhYmxlIH0gZnJvbSAnQGxleGljYWwvcmVhY3QvTGV4aWNhbENvbnRlbnRFZGl0YWJsZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlQbHVnaW4gfSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsSGlzdG9yeVBsdWdpbic7XHJcbmltcG9ydCBMZXhpY2FsRXJyb3JCb3VuZGFyeSBmcm9tICdAbGV4aWNhbC9yZWFjdC9MZXhpY2FsRXJyb3JCb3VuZGFyeSc7XHJcbmltcG9ydCBGb3JtYXRUZXh0R3JvdXAgZnJvbSAnLi9BY3Rpb25zL0Zvcm1hdFRleHRHcm91cCc7XHJcbmltcG9ydCBTaXplVGV4dEdyb3VwIGZyb20gJy4vQWN0aW9ucy9TaXplVGV4dEdyb3VwJztcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIHRleHQ6IHtcclxuICAgIGJvbGQ6ICd0ZXh0LWJvbGQnLFxyXG4gICAgaXRhbGljOiAndGV4dC1pdGFsaWMnLFxyXG4gICAgc3RyaWtldGhyb3VnaDogJ3RleHQtdGhyb3VnaCcsXHJcbiAgICB1bmRlcmxpbmU6ICd0ZXh0LXVuZGVybGluZScsXHJcbiAgICB1bmRlcmxpbmVTdHJpa2V0aHJvdWdoOiAndGV4dC11bmRlcmxpbmUtdGhyb3VnaCdcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBDYXRjaCBhbnkgZXJyb3JzIHRoYXQgb2NjdXIgZHVyaW5nIExleGljYWwgdXBkYXRlcyBhbmQgbG9nIHRoZW1cclxuLy8gb3IgdGhyb3cgdGhlbSBhcyBuZWVkZWQuIElmIHlvdSBkb24ndCB0aHJvdyB0aGVtLCBMZXhpY2FsIHdpbGxcclxuLy8gdHJ5IHRvIHJlY292ZXIgZ3JhY2VmdWxseSB3aXRob3V0IGxvc2luZyB1c2VyIGRhdGEuXHJcbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcclxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRWRpdG9yKCkge1xyXG4gIGNvbnN0IGluaXRpYWxDb25maWcgPSB7XHJcbiAgICBuYW1lc3BhY2U6ICdNeUVkaXRvcicsIFxyXG4gICAgdGhlbWUsXHJcbiAgICBvbkVycm9yLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGV4aWNhbENvbXBvc2VyIGluaXRpYWxDb25maWc9e2luaXRpYWxDb25maWd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1lZGl0b3InPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b29sYmFyLWVkaXRvcic+XHJcbiAgICAgICAgICA8Rm9ybWF0VGV4dEdyb3VwIC8+IDxTaXplVGV4dEdyb3VwIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtZWRpdG9yJz5cclxuICAgICAgICAgIDxSaWNoVGV4dFBsdWdpblxyXG4gICAgICAgICAgICBjb250ZW50RWRpdGFibGU9ezxDb250ZW50RWRpdGFibGUgY2xhc3NOYW1lPSdlZGl0b3ItdGV4dCcvPn1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9ezxkaXYgY2xhc3NOYW1lPSdlZGl0b3ItcGxhY2Vob2xkZXInPkNvbnRlbnUuLi48L2Rpdj59XHJcbiAgICAgICAgICAgIEVycm9yQm91bmRhcnk9e0xleGljYWxFcnJvckJvdW5kYXJ5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxIaXN0b3J5UGx1Z2luIC8+XHJcbiAgICA8L0xleGljYWxDb21wb3Nlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEV4cGFuZCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRXhwYW5kJ1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmNvbnN0IFNlbGVjdG9yID0gKHsgY2xzLCBsaXN0LCBhY3RpdmUsIGljb25DbHMsIGNoaWxkcmVuLCBhY3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbGFzdEV2ZW50LCBzZXRMYXN0RXZlbnRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgLy8gbWlzZSBlbiBwbGFjZSBkZSBsJ8OpbMOpbWVudCBhY3RpZiBwYXIgZMOpZmF1dCAocHJvcCBhY3RpdmUgb2JsaWdhdG9pcmUpXHJcbiAgY29uc3QgbGFuZGluZyA9IGxpc3QuZmluZChpID0+IGkuaWQgPT09IGFjdGl2ZSlcclxuICBjb25zdCBhdmFpYmxlID0gbGlzdC5maWx0ZXIoaSA9PiBpLmlkICE9PSBsYW5kaW5nLmlkKVxyXG5cclxuICBjb25zdCB0b2dnbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCAkZWwgPSBlLnRhcmdldFxyXG4gICAgd2hpbGUgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdG9yJykgPT0gZmFsc2UpIHtcclxuICAgICAgJGVsID0gJGVsLnBhcmVudE5vZGVcclxuICAgIH1cclxuICAgIGlmICgoZS50eXBlID09PSAnY2xpY2snICYmIGxhc3RFdmVudCA9PT0gJ2NsaWNrJykgfHwgZS50eXBlICE9PSAnY2xpY2snKSB7XHJcbiAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKVxyXG4gICAgICBsYXN0RXZlbnQgPT09ICdjbGljaycgJiYgdG9nZ2xlID09PSB0cnVlID8gJGVsLmJsdXIoKSA6IG51bGxcclxuICAgIH0gXHJcbiAgICBzZXRMYXN0RXZlbnQoZS50eXBlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVZhbHVlID0gKGUsdikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9nZ2xlU2VsZWN0KGUpO1xyXG4gICAgYWN0aW9uKHYpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhjbHMgPyAnc2VsZWN0b3IgJyArIGNscyA6ICdzZWxlY3RvcicpICsgKHRvZ2dsZSA/ICcgb3BlbmVkJyA6ICcnKX0gb25Gb2N1cz17dG9nZ2xlU2VsZWN0fSBvbkJsdXI9e3RvZ2dsZVNlbGVjdH0gdGFiSW5kZXg9ey0xfT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHQgYWN0aXZlJyB2YWx1ZT17bGFuZGluZy5pZH0gb25DbGljaz17dG9nZ2xlID8gdG9nZ2xlU2VsZWN0IDogbnVsbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUobGFuZGluZy50aXRsZSl9PC9kaXY+PEV4cGFuZCBjbHM9e2ljb25DbHN9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICB0b2dnbGUgPyA8ZGl2IGNsYXNzTmFtZT0nb3B0LXdyYXBwZXInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdmFpYmxlLm1hcCgoe2lkLHRpdGxlfSxrKSA9PiBcclxuICAgICAgICAgICAgICAvLyBsJ2lkIGRlIGwnw6lsw6ltZW50IGNob2lzaSBlc3QgZGlyZWN0ZW1lbnQgZW52b3nDqSBkYW5zIFwiYWN0aW9uXCIgKGZ1bmN0aW9uIMOgIHBhc3NlciBlbiBwcm9wKVxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J29wdCcgdmFsdWU9e2lkfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmFsdWUoZSxpZCl9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKHRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvciIsIi8vIHVpIGJvb2xlYW4gcmVwcmVzZW50YXRpb25cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFN3aXRjaElucHV0ID0gKHsgY2xzID0gXCJcIiwgdmFsdWUsIGNoYW5nZSB9KSA9PiB7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnaW5wdXQtc3dpdGNoJyArICh2YWx1ZSA/ICcgdHJ1ZSc6ICcgZmFsc2UnKSArIGAgJHtjbHN9YH0gb25DbGljaz17KGUpID0+IGNoYW5nZShlKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1zd2l0Y2gtYnV0dG9uJz48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoSW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0luZm8nXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvV2FybmluZydcclxuaW1wb3J0IERhbmdlciBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGFuZ2VyJ1xyXG5pbXBvcnQgeyBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbXNnLCB0eXBlLCBzdGF0dXMgfSA9IGRhdGFcclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgICdJbmZvJzogPEluZm8gY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1N1Y2Nlc3MnOiA8U3VjY2VzcyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnV2FybmluZyc6IDxXYXJuaW5nIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdEYW5nZXInOiA8RGFuZ2VyIGNscz1cImgtNSB3LTVcIiAvPixcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgJHt0eXBlfSAke3N0YXR1c31gfSBcclxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ3N0YXknfSkpfSBcclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ2Nsb3NlJywgZnVuYzogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMTQwMCl9KSApfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUtaWNvbic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25zW2NhcGl0YWxpemUodHlwZSldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWJ0bic+PGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cImgtNSB3LTVcIiAvPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWNvbnRlbnQnPlxyXG4gICAgICAgIHsgbXNnIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRMYWJlbElucHV0KHsgaWQsIHZhbHVlLCBsYWJlbCwgcGxhY2Vob2xkZXIsIHR5cGUsIGlucHV0Q2xzLCBkaXZDbHMgPSAnaW5wdXQtd3JhcCBwLTInLCBsYWJlbENscyA9ICdibG9jayBwLTInLCBvbkNoYW5nZSB9KSB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoIWlzQWN0aXZlKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsoZGl2Q2xzICsgKGlzQWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSl9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT17bGFiZWxDbHN9PntsYWJlbH08L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT17dHlwZX0gaWQ9e2lkfSBjbGFzc05hbWU9e2lucHV0Q2xzfSBuYW1lPXtpZH0gdmFsdWU9e3ZhbHVlID8gdmFsdWUgOiBcIlwifSBvbkZvY3VzPXtoYW5kbGVGb2N1c30gb25CbHVyPXtoYW5kbGVGb2N1c30gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFR4dExhYmVsSW5wdXQiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGVudE5hdiBmcm9tICcuL0NvbnRlbnROYXYnXHJcbmltcG9ydCBDU1JGSW5wdXQgZnJvbSAnLi9DU1JGSW5wdXQnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL05hdkxpJ1xyXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnLi9QYWdlc0NvbnRhaW5lcidcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4vU2VsZWN0b3InXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xyXG5pbXBvcnQgVHh0TGFiZWxJbnB1dCBmcm9tICcuL1R4dExhYmVsSW5wdXQnXHJcbmltcG9ydCBOdW1iZXJJbnB1dCBmcm9tICcuL051bWJlcklucHV0J1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCdcclxuaW1wb3J0IFN3aXRjaElucHV0IGZyb20gJy4vU3dpdGNoSW5wdXQnXHJcbmltcG9ydCBBY3Rpb25zUm93IGZyb20gJy4vQWN0aW9uc1JvdydcclxuaW1wb3J0IE1vZGFsRWRpdG9yIGZyb20gJy4vTW9kYWxFZGl0b3InXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vRGF0ZVBpY2tlcidcclxuaW1wb3J0IFJpY2hUZXh0IGZyb20gJy4vUmljaFRleHQvJ1xyXG5cclxuZXhwb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGVudE5hdixcclxuICBDU1JGSW5wdXQsXHJcbiAgTmF2TGksXHJcbiAgUGFnZXNDb250YWluZXIsXHJcbiAgU2VsZWN0b3IsXHJcbiAgVG9hc3QsXHJcbiAgVHh0TGFiZWxJbnB1dCxcclxuICBOdW1iZXJJbnB1dCxcclxuICBDaGVja2JveCxcclxuICBTd2l0Y2hJbnB1dCxcclxuICBBY3Rpb25zUm93LFxyXG4gIE1vZGFsRWRpdG9yLFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgUmljaFRleHRcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IDxkaXY+PEhlbGxvLz48L2Rpdj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4vTGF5b3V0XCJcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvbXBvbmVudHMvYWRtaW4vcmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNvbnN0IE1haW5BZG1pbiA9ICgpID0+XHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8Um91dGVyPlxyXG4gICAgICA8TGF5b3V0Lz5cclxuICAgIDwvUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDYWxlbmRhciA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjU2cS0xNyAwLTI4LjUtMTEuNVQ0NDAgNjE2cTAtMTcgMTEuNS0yOC41VDQ4MCA1NzZxMTcgMCAyOC41IDExLjVUNTIwIDYxNnEwIDE3LTExLjUgMjguNVQ0ODAgNjU2Wm0tMTYwIDBxLTE3IDAtMjguNS0xMS41VDI4MCA2MTZxMC0xNyAxMS41LTI4LjVUMzIwIDU3NnExNyAwIDI4LjUgMTEuNVQzNjAgNjE2cTAgMTctMTEuNSAyOC41VDMyMCA2NTZabTMyMCAwcS0xNyAwLTI4LjUtMTEuNVQ2MDAgNjE2cTAtMTcgMTEuNS0yOC41VDY0MCA1NzZxMTcgMCAyOC41IDExLjVUNjgwIDYxNnEwIDE3LTExLjUgMjguNVQ2NDAgNjU2Wk00ODAgODE2cS0xNyAwLTI4LjUtMTEuNVQ0NDAgNzc2cTAtMTcgMTEuNS0yOC41VDQ4MCA3MzZxMTcgMCAyOC41IDExLjVUNTIwIDc3NnEwIDE3LTExLjUgMjguNVQ0ODAgODE2Wm0tMTYwIDBxLTE3IDAtMjguNS0xMS41VDI4MCA3NzZxMC0xNyAxMS41LTI4LjVUMzIwIDczNnExNyAwIDI4LjUgMTEuNVQzNjAgNzc2cTAgMTctMTEuNSAyOC41VDMyMCA4MTZabTMyMCAwcS0xNyAwLTI4LjUtMTEuNVQ2MDAgNzc2cTAtMTcgMTEuNS0yOC41VDY0MCA3MzZxMTcgMCAyOC41IDExLjVUNjgwIDc3NnEwIDE3LTExLjUgMjguNVQ2NDAgODE2Wk0xODAgOTc2cS0yNCAwLTQyLTE4dC0xOC00MlYyOTZxMC0yNCAxOC00MnQ0Mi0xOGg2NXYtMjhxMC0xMy42IDkuMi0yMi44IDkuMi05LjIgMjIuOC05LjIgMTQuMDI1IDAgMjMuNTEzIDkuMlEzMTAgMTk0LjQgMzEwIDIwOHYyOGgzNDB2LTI4cTAtMTMuNiA5LjItMjIuOCA5LjItOS4yIDIyLjgtOS4yIDE0LjAyNSAwIDIzLjUxMyA5LjJRNzE1IDE5NC40IDcxNSAyMDh2MjhoNjVxMjQgMCA0MiAxOHQxOCA0MnY2MjBxMCAyNC0xOCA0MnQtNDIgMThIMTgwWm0wLTYwaDYwMFY0ODZIMTgwdjQzMFptMC00OTBoNjAwVjI5NkgxODB2MTMwWm0wIDBWMjk2djEzMFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2hlY2tlZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTE4LjkgMzUuMXEtLjMgMC0uNTUtLjEtLjI1LS4xLS41LS4zNUw4LjggMjUuNnEtLjQ1LS40NS0uNDUtMS4xIDAtLjY1LjQ1LTEuMS40NS0uNDUgMS4wNS0uNDUuNiAwIDEuMDUuNDVsOCA4IDE4LjE1LTE4LjE1cS40NS0uNDUgMS4wNzUtLjQ1dDEuMDc1LjQ1cS40NS40NS40NSAxLjA3NVQzOS4yIDE1LjRMMTkuOTUgMzQuNjVxLS4yNS4yNS0uNS4zNS0uMjUuMS0uNTUuMVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrZWQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDbG9zZSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA2MTggMjcwIDgyOHEtOSA5LTIxIDl0LTIxLTlxLTktOS05LTIxdDktMjFsMjEwLTIxMC0yMTAtMjEwcS05LTktOS0yMXQ5LTIxcTktOSAyMS05dDIxIDlsMjEwIDIxMCAyMTAtMjEwcTktOSAyMS05dDIxIDlxOSA5IDkgMjF0LTkgMjFMNTIyIDU3NmwyMTAgMjEwcTkgOSA5IDIxdC05IDIxcS05IDktMjEgOXQtMjEtOUw0ODAgNjE4WlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb3NlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGFuZ2VyID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xNy43NSA0MnEtLjYgMC0xLjE3NS0uMjUtLjU3NS0uMjUtLjk3NS0uNjVsLTguNy04LjdxLS40LS40LS42NS0uOTc1VDYgMzAuMjV2LTEyLjVxMC0uNi4yNS0xLjE3NS4yNS0uNTc1LjY1LS45NzVsOC43LTguN3EuNC0uNC45NzUtLjY1VDE3Ljc1IDZoMTIuNXEuNiAwIDEuMTc1LjI1LjU3NS4yNS45NzUuNjVsOC43IDguN3EuNC40LjY1Ljk3NVQ0MiAxNy43NXYxMi41cTAgLjYtLjI1IDEuMTc1LS4yNS41NzUtLjY1Ljk3NWwtOC43IDguN3EtLjQuNC0uOTc1LjY1VDMwLjI1IDQyWk0yNCAzMy45NXEuNyAwIDEuMjI1LS41MjUuNTI1LS41MjUuNTI1LTEuMjI1IDAtLjctLjUyNS0xLjIyNVEyNC43IDMwLjQ1IDI0IDMwLjQ1cS0uNyAwLTEuMjI1LjUyNS0uNTI1LjUyNS0uNTI1IDEuMjI1IDAgLjcuNTI1IDEuMjI1LjUyNS41MjUgMS4yMjUuNTI1Wm0wLTcuMnEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNS4xcTAtLjY1LS40MjUtMS4wNzVRMjQuNjUgMTMuNiAyNCAxMy42cS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXYxMC4xNXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVaTTE3Ljc1IDM5aDEyLjVMMzkgMzAuMjV2LTEyLjVMMzAuMjUgOWgtMTIuNUw5IDE3Ljc1djEyLjVaTTI0IDI0WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFuZ2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGVsZXRlID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPXtjbHN9IHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMy4wNSA0MnEtMS4yIDAtMi4xLS45LS45LS45LS45LTIuMVYxMC41SDkuNXEtLjY1IDAtMS4wNzUtLjQyNVE4IDkuNjUgOCA5cTAtLjY1LjQyNS0xLjA3NVE4Ljg1IDcuNSA5LjUgNy41aDcuOXEwLS42NS40MjUtMS4wNzVRMTguMjUgNiAxOC45IDZoMTAuMnEuNjUgMCAxLjA3NS40MjUuNDI1LjQyNS40MjUgMS4wNzVoNy45cS42NSAwIDEuMDc1LjQyNVE0MCA4LjM1IDQwIDlxMCAuNjUtLjQyNSAxLjA3NS0uNDI1LjQyNS0xLjA3NS40MjVoLS41NVYzOXEwIDEuMi0uOSAyLjEtLjkuOS0yLjEuOVptMC0zMS41VjM5aDIxLjlWMTAuNVptNS4zIDIyLjdxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1LjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTYuMjVxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NVptOC4zIDBxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1LjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTYuMjVxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NVptLTEzLjYtMjIuN1YzOSAxMC41WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRWRpdCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT17Y2xzfSB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOSAzOWgyLjJsMjIuMTUtMjIuMTUtMi4yLTIuMkw5IDM2LjhabTMwLjctMjQuMy02LjQtNi40IDIuMS0yLjFxLjg1LS44NSAyLjEyNS0uODI1IDEuMjc1LjAyNSAyLjEyNS44NzVMNDEuOCA4LjRxLjg1Ljg1Ljg1IDIuMXQtLjg1IDIuMVpNNy41IDQycS0uNjUgMC0xLjA3NS0uNDI1UTYgNDEuMTUgNiA0MC41di00LjNxMC0uMy4xLS41NS4xLS4yNS4zNS0uNUwzMS4yIDEwLjRsNi40IDYuNC0yNC43NSAyNC43NXEtLjI1LjI1LS41LjM1LS4yNS4xLS41NS4xWm0yNC43NS0yNi4yNS0xLjEtMS4xIDIuMiAyLjJaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRXhwYW5kID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNzExIDI0MCA0NzFsNDMtNDMgMTk3IDE5OCAxOTctMTk3IDQzIDQzLTI0MCAyMzlaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBhbmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmZvID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjQuMTUgMzRxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTkuMDVxMC0uNi0uNDUtMS4wMjVRMjQuNzUgMjIgMjQuMTUgMjJxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djkuMDVxMCAuNi40NSAxLjAyNS40NS40MjUgMS4wNS40MjVaTTI0IDE4LjNxLjcgMCAxLjE3NS0uNDUuNDc1LS40NS40NzUtMS4xNXQtLjQ3NS0xLjJRMjQuNyAxNSAyNCAxNXEtLjcgMC0xLjE3NS41LS40NzUuNS0uNDc1IDEuMnQuNDc1IDEuMTVxLjQ3NS40NSAxLjE3NS40NVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcgMCAxMi01dDUtMTJxMC03LTUtMTJUMjQgN3EtNyAwLTEyIDVUNyAyNHEwIDcgNSAxMnQxMiA1WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdWNjZXNzID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJtMjEuMDUgMjguNTUtNC45LTQuOXEtLjQ1LS40NS0xLjEtLjQ1LS42NSAwLTEuMTUuNS0uNS41LS41IDEuMTUgMCAuNjUuNSAxLjFsNi4xIDYuMXEuNDUuNDUgMS4wNS40NS42IDAgMS4wNS0uNDVsMTItMTJxLjQ1LS40NS40MjUtMS4xLS4wMjUtLjY1LS40NzUtMS4xLS40NS0uNS0xLjEyNS0uNXQtMS4xNzUuNVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcuMjUgMCAxMi4xMjUtNC44NzVUNDEgMjRxMC03LjI1LTQuODc1LTEyLjEyNVQyNCA3cS03LjI1IDAtMTIuMTI1IDQuODc1VDcgMjRxMCA3LjI1IDQuODc1IDEyLjEyNVQyNCA0MVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBXYXJuaW5nID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk00LjYgNDJxLS40NSAwLS43NzUtLjJ0LS41MjUtLjU1cS0uMi0uMzUtLjIyNS0uNzI1LS4wMjUtLjM3NS4yMjUtLjc3NWwxOS40LTMzLjVxLjI1LS40LjU3NS0uNTc1UTIzLjYgNS41IDI0IDUuNXEuNCAwIC43MjUuMTc1LjMyNS4xNzUuNTc1LjU3NWwxOS40IDMzLjVxLjI1LjQuMjI1Ljc3NS0uMDI1LjM3NS0uMjI1LjcyNXQtLjUyNS41NXEtLjMyNS4yLS43NzUuMlptMi42LTNoMzMuNkwyNCAxMFptMTctMi44NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NSAwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNVEyMi43IDM0IDIyLjcgMzQuNjVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0wLTUuNTVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTguMnEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djguMnEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabS0uMi02LjFaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FybmluZyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJvbGQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnICBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0zMzUgODU2cS0yNSAwLTQyLjUtMTcuNVQyNzUgNzk2VjM1NnEwLTI1IDE3LjUtNDIuNVQzMzUgMjk2aDE2OHE2NiAwIDExNC41IDQyVDY2NiA0NDRxMCAzOC0yMSA3MHQtNTYgNDl2NnE0MyAxNCA2OS41IDUwdDI2LjUgODFxMCA2OC01Mi41IDExMlQ1MTAgODU2SDMzNVptMjYtNzZoMTQ0cTM4IDAgNjYtMjV0MjgtNjNxMC0zNy0yOC02MnQtNjYtMjVIMzYxdjE3NVptMC0yNDdoMTM2cTM1IDAgNjAuNS0yM3QyNS41LTU4cTAtMzUtMjUuNS01OC41VDQ5NyAzNzBIMzYxdjE2M1pcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvbGQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb3JtYXRTaXplID0gKHtjbHN9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTYxOS41MzQgODc3LjA3NnEtMTQuMjY0IDAtMjMuNzgzLTkuODQ5LTkuNTE5LTkuODQ5LTkuNTE5LTIzLjkyVjM0Mi40NjFINDEyLjY5M3EtMTQuMDcxIDAtMjMuOTItOS45ODUtOS44NDktOS45ODUtOS44NDktMjQuMjUgMC0xNC4yNjQgOS44NDktMjMuNzgzIDkuODQ5LTkuNTE5IDIzLjkyLTkuNTE5aDQxNC42MTRxMTQuMDcxIDAgMjMuOTIgOS45ODUgOS44NDkgOS45ODUgOS44NDkgMjQuMjUgMCAxNC4yNjQtOS44NDkgMjMuNzgzLTkuODQ5IDkuNTE5LTIzLjkyIDkuNTE5SDY1My43Njh2NTAwLjg0NnEwIDE0LjA3MS05Ljk4NSAyMy45Mi05Ljk4NSA5Ljg0OS0yNC4yNDkgOS44NDlabS0zNjAgMHEtMTQuMjY0IDAtMjMuNzgzLTkuODQ5LTkuNTE5LTkuODQ5LTkuNTE5LTIzLjkyVjU0Mi40NjFoLTkzLjUzOXEtMTQuMDcxIDAtMjMuOTItOS45ODUtOS44NDktOS45ODUtOS44NDktMjQuMjUgMC0xNC4yNjQgOS44NDktMjMuNzgzIDkuODQ5LTkuNTE5IDIzLjkyLTkuNTE5aDI1NC42MTRxMTQuMDcxIDAgMjMuOTIgOS45ODUgOS44NDkgOS45ODUgOS44NDkgMjQuMjUgMCAxNC4yNjQtOS44NDkgMjMuNzgzLTkuODQ5IDkuNTE5LTIzLjkyIDkuNTE5aC05My41Mzl2MzAwLjg0NnEwIDE0LjA3MS05Ljk4NSAyMy45Mi05Ljk4NSA5Ljg0OS0yNC4yNDkgOS44NDlaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtYXRTaXplIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSXRhbGljID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjYyLjA3NyA4NDEuNjE0cS0xMS43NTQgMC0yMC4zLTguNDA0LTguNTQ2LTguNDAzLTguNTQ2LTIwLjYxNCAwLTExLjgyNyA4LjU0Ni0yMC4yNSA4LjU0Ni04LjQyMiAyMC4zLTguNDIyaDEwNC43N0w1MTAuNDYzIDM2M0gzODcuMjMxcS0xMS43NTMgMC0yMC4yOTktOC41OTctOC41NDYtOC41OTYtOC41NDYtMjAuNDIyIDAtMTIuMjExIDguNTQ2LTIwLjQ0MiA4LjU0Ni04LjIzIDIwLjI5OS04LjIzaDI5My44NDZxMTIuMTM4IDAgMjAuNDkyIDguNDA0IDguMzUzIDguNDA0IDguMzUzIDIwLjYxNSAwIDExLjgyNi04LjM1MyAyMC4yNDlRNjkzLjIxNSAzNjMgNjgxLjA3NyAzNjNINTczLjk5OUw0MzAuNzY4IDc4My45MjRoMTI1LjE1NHExMi4xMzkgMCAyMC40OTIgOC41OTYgOC4zNTQgOC41OTYgOC4zNTQgMjAuNDIyIDAgMTIuMjExLTguMzU0IDIwLjQ0Mi04LjM1MyA4LjIzLTIwLjQ5MiA4LjIzSDI2Mi4wNzdaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGFsaWMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdHJpa2UgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMTAgNjQ2cS0xMi43NSAwLTIxLjM3NS04LjY3NVE4MCA2MjguNjQ5IDgwIDYxNS44MjUgODAgNjAzIDg4LjYyNSA1OTQuNVQxMTAgNTg2aDc0MHExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ4NTAgNjQ2SDExMFptMzIwLTEyMFYzNTZIMjUwcS0yMC44MzMgMC0zNS40MTctMTQuNjE4UTIwMCAzMjYuNzY1IDIwMCAzMDUuODgyIDIwMCAyODUgMjE0LjU4MyAyNzAuNSAyMjkuMTY3IDI1NiAyNTAgMjU2aDQ2MHEyMC44MzMgMCAzNS40MTcgMTQuNjE4UTc2MCAyODUuMjM1IDc2MCAzMDYuMTE4IDc2MCAzMjcgNzQ1LjQxNyAzNDEuNSA3MzAuODMzIDM1NiA3MTAgMzU2SDUzMHYxNzBINDMwWm00OS44ODIgMzcwUTQ1OSA4OTYgNDQ0LjUgODgxLjQxNyA0MzAgODY2LjgzMyA0MzAgODQ2VjcwNmgxMDB2MTQwcTAgMjAuODMzLTE0LjYxOCAzNS40MTdRNTAwLjc2NSA4OTYgNDc5Ljg4MiA4OTZaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJpa2UiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdXBlclNjcmlwdCA9ICh7Y2xzfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTgwMCA0NTZxLTEzIDAtMjEuNS04LjVUNzcwIDQyNnYtNTVxMC0xNCA4LTIydDIyLThoOTB2LTU1SDc4NXEtNiAwLTEwLjUtNC41VDc3MCAyNzFxMC02IDQuNS0xMC41VDc4NSAyNTZoMTA1cTE0IDAgMjIgOHQ4IDIydjU1cTAgMTQtOCAyMnQtMjIgOGgtOTB2NTVoMTA1cTYgMCAxMC41IDQuNVQ5MjAgNDQxcTAgNi00LjUgMTAuNVQ5MDUgNDU2SDgwMFpNMzAwIDg5NnEtMjEgMC0zMS0xOC41dDEtMzYuNWwxNTAtMjM2LTEzNi0yMTNxLTExLTE4LTEtMzd0MzEtMTlxOSAwIDE3LjUgNC41VDM0NSAzNTNsMTI0IDE5NiAxMjQtMTk2cTUtOCAxMy41LTEyLjVUNjI0IDMzNnEyMiAwIDMxLjUgMTl0LTEuNSAzN0w1MTggNjA1bDE1MCAyMzZxMTEgMTggMSAzNi41VDYzOCA4OTZxLTkgMC0xNy41LTQuNVQ2MDcgODc5TDQ2OSA2NjIgMzMxIDg3OXEtNSA4LTEzLjUgMTIuNVQzMDAgODk2WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VwZXJTY3JpcHQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBVbmRlcmxpbmUgPSAoe2Nsc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk0yMzAgOTE2cS0xMi43NSAwLTIxLjM3NS04LjY3NS04LjYyNS04LjY3Ni04LjYyNS0yMS41IDAtMTIuODI1IDguNjI1LTIxLjMyNVQyMzAgODU2aDUwMHExMi43NSAwIDIxLjM3NSA4LjY3NSA4LjYyNSA4LjY3NiA4LjYyNSAyMS41IDAgMTIuODI1LTguNjI1IDIxLjMyNVQ3MzAgOTE2SDIzMFptMjUwLTE0MHEtMTAwIDAtMTU2LjUtNTguNVQyNjcgNTU5VjI1N3EwLTE2Ljg4MiAxMi41MjctMjguOTQxUTI5Mi4wNTUgMjE2IDMwOS4wMjcgMjE2IDMyNiAyMTYgMzM4IDIyOC4wNTlUMzUwIDI1N3YzMDJxMCA2MyAzNCAxMDF0OTYgMzhxNjIgMCA5Ni0zOHQzNC0xMDFWMjU3cTAtMTYuODgyIDEyLjUyNy0yOC45NDFRNjM1LjA1NSAyMTYgNjUyLjAyNyAyMTYgNjY5IDIxNiA2ODEgMjI4LjA1OVQ2OTMgMjU3djMwMnEwIDEwMC01Ni41IDE1OC41VDQ4MCA3NzZaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbmRlcmxpbmUiLCJpbXBvcnQgQm9sZCBmcm9tIFwiLi9Cb2xkXCI7XHJcbmltcG9ydCBGb3JtYXRTaXplIGZyb20gXCIuL0Zvcm1hdFNpemVcIjtcclxuaW1wb3J0IEl0YWxpYyBmcm9tIFwiLi9JdGFsaWNcIjtcclxuaW1wb3J0IFN0cmlrZSBmcm9tIFwiLi9TdHJpa2VcIjtcclxuaW1wb3J0IFN1cGVyU2NyaXB0IGZyb20gXCIuL1N1cGVyU2NyaXB0XCI7XHJcbmltcG9ydCBVbmRlcmxpbmUgZnJvbSBcIi4vVW5kZXJsaW5lXCI7XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICBCb2xkLFxyXG4gIEl0YWxpYyxcclxuICBTdHJpa2UsXHJcbiAgU3VwZXJTY3JpcHQsXHJcbiAgVW5kZXJsaW5lLFxyXG4gIEZvcm1hdFNpemVcclxufSIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBjb250cm9sbGVyIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdyZWFjdDpjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KCdyZWFjdDptb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yb290LnVubW91bnQoKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgncmVhY3Q6dW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIF9kaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwic2V0QmFzZVVybCIsImV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibGVuZ3RoIiwiY2xlYW5QYXRoIiwicGF0aCIsInJlcGxhY2UiLCJjYXBpdGFsaXplIiwidHh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiZW5kT2ZQYXRoIiwibGFzdEluZGV4T2YiLCJ1cGRhdGVUaXRsZSIsIm4iLCJkb2N1bWVudCIsInRpdGxlIiwic3RyQ29udGFpbnMiLCJzdHIiLCJzZWFyY2giLCJyZSIsIlJlZ0V4cCIsInN0ck5vcm1hbGl6ZSIsInRlc3QiLCJsIiwicmVnIiwidyIsImdldFByb3BzQm9vbFN0YXR1cyIsIm9iaiIsInByb3AiLCJib29sU3RhdGUiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJpc09iamVjdCIsImFyZUVxdWFsIiwib2JqMSIsIm9iajIiLCJpc0FycmF5IiwiaSIsImVudDEiLCJlbnQyIiwiaXNEZWZpbmVkIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJzb3J0QXNjIiwiYSIsImIiLCJzb3J0Iiwic29ydERlcyIsIlJlYWN0IiwiQ29udGVudCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJUb2FzdCIsInNldFVybCIsIlBhZ2VzIiwiU2V0dGluZ3MiLCJBcnRpY2xlcyIsIkxvZ2luIiwiTWVudSIsIm5hbWUiLCJQYWdlIiwiTGF5b3V0IiwidXJsIiwic3RhdGUiLCJhamF4IiwibmF2IiwiZGlzcGF0Y2giLCJwYXRobmFtZSIsIm1hdGNoIiwibWFwIiwidXNlU3RhdGUiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiY2xlYXJEYXRhIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsIlBhZ2VzQ29udGFpbmVyIiwiQ29udGVudE5hdiIsIk1vZGFsRWRpdG9yIiwicHVzaERhdGEiLCJheGlvcyIsImF4aW9zU2V0IiwiY3JlYXRlIiwicGFyYW1zIiwicGFnZSIsImFydGljbGVzIiwiZGF0YSIsInBhZ2VzIiwibW9kYWwiLCJzZXRNb2RhbCIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsInN0YXR1cyIsInJlc3BvbnNlIiwiY2xvc2VNb2RhbCIsInVwZGF0ZUFydGljbGUiLCJpZCIsInJlbW92ZUFydGljbGUiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwidGFnIiwiZHJhdyIsImNvbFNpemUiLCJpc2R5bmFtaWMiLCJ0eXBlIiwicHVibGlzaGJlZ2luIiwicHVibGlzaGVuZCIsImxpc3QiLCJwdWJsaXNoZWQiLCJjb250ZW50IiwiQnV0dG9uIiwiVHh0TGFiZWxJbnB1dCIsIm5vdGlmeSIsIm5vdGlmeUNsb3NlIiwiWE1MU2V0IiwibGlmZXRpbWUiLCJub3RpZmljYXRpb24iLCJsaWZlIiwic2V0U3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3Rva2VuIiwiaXNDb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJibHVyVGltZW91dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVGltZW91dCIsIm5hdGl2ZUV2ZW50Iiwic3VibWl0dGVyIiwiYmx1ciIsInBvc3QiLCJuYXZVUkwiLCJtc2ciLCJ0aW1lb3V0IiwidXBkYXRlUGFnZSIsInJlbW92ZVBhZ2UiLCJTZWxlY3RvciIsInNldHRpbmdzIiwiY2hhbmdlIiwic2V0Q2hhbmdlIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwiY2hhbmdlTmFtZSIsInYiLCJuRGF0YSIsInNldExhbmRpbmciLCJMYW5kaW5nIiwiQXV0aG9yIiwiRGVzY3JpcHRpb24iLCJTaXRlTmFtZSIsInN0b3JlIiwiY3JlYXRlU2xpY2UiLCJhamF4U2xpY2UiLCJiYXNlVXJsIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsIm5vdGlmaWNhdGlvblNsaWNlIiwibm90aWZ5S2VlcCIsImV2ZW50IiwiZnVuYyIsImNvbmZpZ3VyZVN0b3JlIiwiRGVsZXRlIiwiRWRpdCIsIkFjdGlvbnNSb3ciLCJ1cGRhdGUiLCJidG5DbHMiLCJkaXZDbHMiLCJDU1JGSW5wdXQiLCJDaGVja2VkIiwiQ2hlY2tib3giLCJjbHMiLCJjaGVja2VkIiwiU3VjY2VzcyIsIkNsb3NlIiwiTnVtYmVySW5wdXQiLCJTd2l0Y2hJbnB1dCIsInVwZGF0ZVNlYXJjaCIsImFqYXhEYXRhIiwic0ZpZWxkcyIsImgiLCJhY3RpdmUiLCJlbCIsImZpbHRlcmVkIiwic2V0VmlldyIsInNldCIsInNwbGl0IiwiTnVtYmVyIiwic2VhcmNoSGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1cGRhdGVBcnJheUZpbHRlciIsImJhc2ljUmVuZGVyIiwiayIsImZpbHRlclJlbmRlciIsInNlYXJjaEZpbHRlciIsImZpbHRlciIsImZpbmQiLCJ1cGRhdGVDb250ZW50IiwidG9nZ2xlRmlsdGVyIiwiSW5wdXQiLCJDYWxlbmRhciIsIkRhdGVQaWNrZXIiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJSaWNoVGV4dCIsInNjaGVtYSIsImNsb3NlIiwibURhdGEiLCJzZXREYXRhIiwiZW1wdHkiLCJwYXIiLCJ2YWwiLCJEYXRlIiwic2V0SG91cnMiLCJOYXZMaW5rIiwidG8iLCJvbkNsaWNrIiwiaW5wQ2xzIiwiJGdldFNlbGVjdGlvbiIsIiRpc1JhbmdlU2VsZWN0aW9uIiwiRk9STUFUX1RFWFRfQ09NTUFORCIsInVzZUxleGljYWxDb21wb3NlckNvbnRleHQiLCJCdG5Gb3JtYXRUZXh0IiwiQm9sZCIsIkl0YWxpYyIsIlN0cmlrZSIsIlN1cGVyU2NyaXB0IiwiVW5kZXJsaW5lIiwiRm9ybWF0VGV4dEdyb3VwIiwiZWRpdG9yIiwiYnRuU3RhdGVzIiwic2V0QnRuU3RhdGVzIiwiYm9sZCIsIml0YWxpYyIsInN1cGVyc2NyaXB0IiwidW5kZXJsaW5lIiwic3RyaWtldGhyb3VnaCIsImljb25zIiwidXBkYXRlQnRuU3RhdGVzIiwicHJldlN0YXRlIiwic2VsZWN0aW9uIiwibm9kZSIsImdldE5vZGVzIiwiaGFzRm9ybWF0IiwicmVnaXN0ZXJVcGRhdGVMaXN0ZW5lciIsImVkaXRvclN0YXRlIiwidGFncyIsInJlYWQiLCJpdGVtc0Rpc3BhdGNoIiwiaXRlbXMiLCJwdXNoIiwiZm9jdXMiLCJkaXNwYXRjaENvbW1hbmQiLCIkcGF0Y2hTdHlsZVRleHQiLCIkZ2V0U2VsZWN0aW9uU3R5bGVWYWx1ZUZvclByb3BlcnR5IiwiRHJvcGRvd24iLCJGb3JtYXRTaXplIiwiU2l6ZVRleHRHcm91cCIsImZvcm1hdCIsImRyb3BEb3duU3RhdGUiLCJzZXRERFN0YXRlcyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInNldEFjdGl2ZSIsImYiLCJoYW5kbGVTZWxlY3QiLCJjb21tYW5kIiwiaXRlbSIsIkl0ZW0iLCJzZWxlY3QiLCJMZXhpY2FsQ29tcG9zZXIiLCJSaWNoVGV4dFBsdWdpbiIsIkNvbnRlbnRFZGl0YWJsZSIsIkhpc3RvcnlQbHVnaW4iLCJMZXhpY2FsRXJyb3JCb3VuZGFyeSIsInRoZW1lIiwidGV4dCIsInVuZGVybGluZVN0cmlrZXRocm91Z2giLCJvbkVycm9yIiwiZXJyb3IiLCJFZGl0b3IiLCJpbml0aWFsQ29uZmlnIiwibmFtZXNwYWNlIiwiRXhwYW5kIiwiaWNvbkNscyIsImxhc3RFdmVudCIsInNldExhc3RFdmVudCIsImxhbmRpbmciLCJhdmFpYmxlIiwidG9nZ2xlU2VsZWN0IiwiJGVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiY2hhbmdlVmFsdWUiLCJJbmZvIiwiV2FybmluZyIsIkRhbmdlciIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwib25DaGFuZ2UiLCJpc0FjdGl2ZSIsImhhbmRsZUZvY3VzIiwiQ29tcG9uZW50IiwiSHciLCJyZW5kZXIiLCJIZWxsbyIsIk1haW4iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUHJvdmlkZXIiLCJNYWluQWRtaW4iLCJDbHMiLCJyZWFjdENvbnRyb2xsZXJzIiwiaW1wb3J0QWxsUmVhY3RDb21wb25lbnRzIiwiciIsImtleXMiLCJmb3JFYWNoIiwiZGVmYXVsdCIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHMiLCJwcm9wc1ZhbHVlIiwiX2Rpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJ2YWx1ZXMiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9