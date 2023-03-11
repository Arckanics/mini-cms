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
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isJSON": () => (/* binding */ isJSON),
/* harmony export */   "setBaseUrl": () => (/* binding */ setBaseUrl),
/* harmony export */   "strContains": () => (/* binding */ strContains),
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
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Login */ "./assets/react/components/admin/pages/Login.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./assets/react/components/admin/Navbar.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./assets/react/components/admin/Content.jsx");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Settings */ "./assets/react/components/admin/pages/Settings.jsx");
/* harmony import */ var _pages_Pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Pages */ "./assets/react/components/admin/pages/Pages.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/admin/Footer.jsx");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _pages_Articles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Articles */ "./assets/react/components/admin/pages/Articles.jsx");
/* harmony import */ var _ui_Toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/Toast */ "./assets/react/components/admin/ui/Toast.jsx");













const Menu = [{
  name: "Parametres",
  path: "/",
  Page: _pages_Settings__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: "Pages",
  path: "/pages",
  Page: _pages_Pages__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  name: "Articles",
  path: "/articles",
  Page: _pages_Articles__WEBPACK_IMPORTED_MODULE_10__["default"]
}];
const Layout = () => {
  const url = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.ajax.url);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    url === "" ? swapPage((0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.cleanPath)(location.pathname)) : null;
    location.pathname.match(/\/$/, '') ? nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.cleanPath)(location.pathname)) : undefined;
  }, []);
  const swapPage = path => {
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_9__.setUrl)(path));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "mini-admin/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), Menu.map(({
    path,
    Page
  }, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      key: i,
      path: `mini-admin${path}`,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        Pages: Menu,
        swapPage: swapPage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Page, {
        url: path
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)))
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Toast__WEBPACK_IMPORTED_MODULE_11__["default"], null));
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
  Pages,
  swapPage
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
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.clearData)());
    (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.updateTitle)(n);
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
        swapPage(path);
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
/* harmony import */ var _ui_PagesContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/PagesContainer */ "./assets/react/components/admin/ui/PagesContainer.jsx");
/* harmony import */ var _ui_ContentNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ContentNav */ "./assets/react/components/admin/ui/ContentNav.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");






const Articles = ({
  url
}) => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_5__["default"].create({
    ...axiosSet
  });
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.data.articles);
  const pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !articles ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
        name: 'articles',
        data: res.data
      }));
    }) : ajax.get('/refresh');
    !pages ? ajax.get('/pages').then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
        name: 'pages',
        data: res.data
      }));
    }) : null;
  }, []);
  const header = [{
    tag: 'title',
    name: 'titre',
    draw: 'value',
    colSize: 8
  }, {
    tag: 'page',
    name: 'page',
    draw: 'object.title',
    colSize: 1
  }, {
    tag: 'published',
    name: 'Visible',
    draw: 'bool',
    colSize: 1
  }, {
    tag: 'is_dynamic',
    name: 'Dynamique',
    draw: 'bool',
    colSize: 1
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_PagesContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: 'Articles'
  }, articles && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_ContentNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Button */ "./assets/react/components/admin/ui/Button.jsx");
/* harmony import */ var _ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/TxtInput */ "./assets/react/components/admin/ui/TxtInput.jsx");
/* harmony import */ var _Functions_Security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Functions/Security */ "./assets/react/components/admin/Functions/Security.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var _redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");










const Login = () => {
  // router
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  // redux - ajax
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const XMLSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.ajax);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_9__["default"].create({
    ...XMLSet.axios
  });
  // redux - Notification
  const lifetime = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.notification.life);
  // state
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: null,
    password: null,
    _token: (0,_Functions_Security__WEBPACK_IMPORTED_MODULE_3__.getToken)()
  });
  const handleChange = e => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    ajax.post('/login', {
      ...state
    }).then(res => {
      let url = res.data.url === "/" ? `${XMLSet.navURL}` : `${XMLSet.navURL}/${res.data.url}`;
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.setUrl)(""));
      dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_7__.notify)({
        type: "info",
        msg: `Bienvenue ${state.email}`,
        timeout: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_7__.notifyClose)()), lifetime)
      }));
      nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_6__.cleanPath)(url));
    }).catch(res => {
      dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_7__.notify)({
        type: "warning",
        msg: "connection incorrecte",
        timeout: setTimeout(() => dispatch((0,_redux_reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_7__.notifyClose)()), lifetime)
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
    className: "rounded-lg bg-white color-dark",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-title"
  }, "Connexion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-clear-outline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    label: "Compte(Email)",
    id: "email",
    value: email,
    placeholder: "adresse email...",
    inputCls: "input-txt",
    labelCls: "label",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "password",
    label: "Mot de passe",
    id: "password",
    value: password,
    placeholder: "mot de passe...",
    inputCls: "input-txt",
    labelCls: "label",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ui_ContentNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ContentNav */ "./assets/react/components/admin/ui/ContentNav.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _ui_PagesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/PagesContainer */ "./assets/react/components/admin/ui/PagesContainer.jsx");






const Pages = ({
  url
}) => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_5__["default"].create({
    ...axiosSet
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !data ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'pages',
        data: res.data
      }));
    }) : ajax.get('/refresh');
  }, []);
  const header = [{
    tag: 'title',
    name: 'titre',
    draw: 'value',
    colSize: 6
  }, {
    tag: 'settings',
    name: 'landing',
    draw: 'bool',
    colSize: 1
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_PagesContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: 'Pages'
  }, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_ContentNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _ui_Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Selector */ "./assets/react/components/admin/ui/Selector.jsx");
/* harmony import */ var _ui_TxtInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/TxtInput */ "./assets/react/components/admin/ui/TxtInput.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/Button */ "./assets/react/components/admin/ui/Button.jsx");
/* harmony import */ var _ui_PagesContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/PagesContainer */ "./assets/react/components/admin/ui/PagesContainer.jsx");









const Settings = ({
  url
}) => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_8__["default"].create({
    ...axiosSet
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.settings);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const [change, setChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [initialState, setInitialState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !data ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'settings',
        data: res.data
      }));
      setInitialState({
        ...res.data
      });
    }) : () => {
      ajax.get('/refresh');
      setInitialState({
        ...data
      });
    };
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
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
      name: 'settings',
      data: nData
    }));
    console.log((0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.areEqual)(initialState, nData));
    !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.areEqual)(initialState, nData) ? setChange(true) : setChange(false);
  };
  const setLanding = v => {
    const nData = {
      ...data,
      Landing: v
    };
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
      name: 'settings',
      data: nData
    }));
    console.log((0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.areEqual)(initialState, nData));
    !(0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.areEqual)(initialState, nData) ? setChange(true) : setChange(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_PagesContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: 'Paramètres'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-3 py-3 justify-between"
  }, data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    onChange: e => handleChange(e, 'Author'),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.capitalize)(changeName("Author")),
    id: "Author",
    value: data.Author,
    placeholder: changeName("Author"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    onChange: e => handleChange(e, 'Description'),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.capitalize)(changeName("Description")),
    id: "Description",
    value: data.Description,
    placeholder: changeName("Description"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    onChange: e => handleChange(e, 'SiteName'),
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.capitalize)(changeName("SiteName")),
    id: "SiteName",
    value: data.SiteName,
    placeholder: changeName("SiteName"),
    inputCls: "input-txt w-full secondary",
    divCls: "input-wrap p-2 secondary",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cls: "secondary",
    iconCls: "icon",
    active: data.Landing,
    list: data.Pages,
    action: setLanding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "block py-2"
  }, "Page"))) : null, change && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    btnCls: 'btn secondary fadeInLeft',
    divCls: "p-2 flex justify-end"
  }, "Sauvegarder")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

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
        'XMLHttpRequest': true
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/notificationSlice */ "./assets/react/components/admin/redux/reducers/notificationSlice.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    ajax: _reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
    notification: _reducers_notificationSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
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





const ContentNav = ({
  header,
  data
}) => {
  const setView = (value, set = 'value', tag) => {
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split('.')[set.split('.').length - 1];
        return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.data[`${tag}s`])[Number(value) - 1][name];
      case new RegExp(/^bool/g).test(set):
        return value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Success__WEBPACK_IMPORTED_MODULE_3__["default"], {
          cls: "h-5 w-5 m-auto icon success"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_4__["default"], {
          cls: "h-5 w-5 m-auto icon false"
        });
      default:
        return value;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "content-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-nav-header"
  }, header.map((h, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: `header-field colsize-${h.colSize}`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(h.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-1`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)('actions'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-inner flex flex-col overflow-auto overflow-x-hidden"
  }, data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.isArray)(data) ? data.map((field, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    className: `row-field colsize-1`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)('actions')))) : null));
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

/***/ "./assets/react/components/admin/ui/TxtInput.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/components/admin/ui/TxtInput.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TxtInput({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TxtInput);

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

function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helloWorld__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
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
/* harmony import */ var _components_admin_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin/redux/store */ "./assets/react/components/admin/redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





function MainAdmin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _components_admin_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainAdmin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Vk07QUFFekIsTUFBTXJILE1BQU0sR0FBRyxDQUFDO0VBQUU0STtBQUFJLENBQUMsS0FBSztFQUMxQixvQkFDRTtJQUFLLFNBQVMsRUFBRUEsR0FBSTtJQUFDLEtBQUssRUFBQyw0QkFBNEI7SUFBQyxPQUFPLEVBQUM7RUFBVyxnQkFDekU7SUFBTSxDQUFDLEVBQUM7RUFBeUwsRUFBRSxDQUMvTDtBQUVWLENBQUM7QUFFRCxpRUFBZTVJLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkk7QUFFekIsTUFBTWtGLE9BQU8sR0FBRyxDQUFDO0VBQUVjO0FBQUksQ0FBQyxLQUFLO0VBQzNCLG9CQUNFO0lBQU0sU0FBUyxFQUFHQSxHQUFLO0lBQUMsS0FBSyxFQUFDLDRCQUE0QjtJQUFDLE9BQU8sRUFBQztFQUFXLGdCQUM1RTtJQUFNLENBQUMsRUFBQztFQUErakIsRUFBRSxDQUNya0I7QUFFVixDQUFDO0FBRUQsaUVBQWVkLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkc7QUFFekIsTUFBTW9DLE9BQU8sR0FBRyxDQUFDO0VBQUV0QjtBQUFJLENBQUMsS0FBSztFQUMzQixvQkFDRTtJQUFLLFNBQVMsRUFBRUEsR0FBSTtJQUFDLEtBQUssRUFBQyw0QkFBNEI7SUFBQyxPQUFPLEVBQUM7RUFBVyxnQkFDekU7SUFBTSxDQUFDLEVBQUM7RUFBc2lCLEVBQUcsQ0FDN2lCO0FBRVYsQ0FBQztBQUVELGlFQUFlc0IsT0FBTzs7Ozs7Ozs7Ozs7O0FDVnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Db250ZW50TmF2LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL05hdkxpLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1BhZ2VzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1NlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1RvYXN0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1R4dElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2hlbGxvV29ybGQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DbG9zZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Rhbmdlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0V4cGFuZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0luZm8uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9Mb2dvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9TdWNjZXNzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvV2FybmluZy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCIsXG5cdFwiLi9tYWluX2FkbWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIlxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke2V4dC5sZW5ndGggPiAwID8gXCIvXCIgOiBudWxsfSR7ZXh0fWBcclxufVxyXG5cclxuLy8gbmV0dG9pZSBsJ3VybCBmb3VybmlcclxuXHJcbmNvbnN0IGNsZWFuUGF0aCA9IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvJHxcXC8kLywgJycpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuLy8gY2hhbmdlIGxlIHRpdHJlIGRhbnMgbCdvbmdsZXRcclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBkb2N1bWVudC50aXRsZSA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyBjYXBpdGFsaXplKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyB0cm91dmUgdW5lIGV4cHJlc3Npb24gcsOpZ3VsacOocmVcclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG4vLyBjb21wYXJlIGRldXggb2JqZXRzIEpTICh0b3V0IHR5cGVzKVxyXG5cclxuY29uc3QgYXJlRXF1YWwgPSAob2JqMSxvYmoyKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBvYmoxICE9PSB0eXBlb2Ygb2JqMikge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICBpZiAob2JqMS5sZW5ndGggIT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoIWFyZUVxdWFsKG9iajFbaV0sb2JqMltpXSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikpIHtcclxuICAgIGNvbnN0IGVudDEgPSBPYmplY3QuZW50cmllcyhvYmoxKVxyXG4gICAgY29uc3QgZW50MiA9IE9iamVjdC5lbnRyaWVzKG9iajIpXHJcbiAgICBpZiAoZW50MS5sZW5ndGggIT09IGVudDIubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqMSkpIHtcclxuICAgICAgaWYgKGlzRGVmaW5lZCh2YWx1ZSkgJiYgaXNEZWZpbmVkKG9iajJba2V5XSkpIHtcclxuICAgICAgICBpZiAoIWFyZUVxdWFsKG9iajFba2V5XSxvYmoyW2tleV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICByZXR1cm4gb2JqMSA9PT0gb2JqMlxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCBkw6lmaW5pZVxyXG5cclxuY29uc3QgaXNEZWZpbmVkID0gKG9iaikgPT4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBKU09OIHZhbGlkZVxyXG5cclxuY29uc3QgaXNKU09OID0gKGpzb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgSlNPTi5wYXJzZShqc29uKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIG9iamV0IEpTXHJcblxyXG5jb25zdCBpc09iamVjdCA9IChvYmplY3QpID0+IHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgIWlzQXJyYXkob2JqZWN0KVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gVGFibGVhdXggXHJcblxyXG5jb25zdCBpc0FycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEJhc2VVcmwsIGNhcGl0YWxpemUsIHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGgsIHN0ckNvbnRhaW5zLCBjbGVhblBhdGgsIGlzSlNPTiwgaXNBcnJheSwgYXJlRXF1YWwgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL3BhZ2VzL0xvZ2luJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3BhZ2VzL1NldHRpbmdzJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAnLi9wYWdlcy9QYWdlcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IHsgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tICcuL3BhZ2VzL0FydGljbGVzJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi91aS9Ub2FzdCdcclxuXHJcblxyXG5jb25zdCBNZW51ID0gW1xyXG4gIHtuYW1lOiBcIlBhcmFtZXRyZXNcIiwgcGF0aDogXCIvXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wiLCBQYWdlOiBQYWdlc30sXHJcbiAge25hbWU6IFwiQXJ0aWNsZXNcIiwgcGF0aDogXCIvYXJ0aWNsZXNcIiwgUGFnZTogQXJ0aWNsZXN9LFxyXG5dXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LnVybClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cmwgPT09IFwiXCIgPyBzd2FwUGFnZShjbGVhblBhdGgobG9jYXRpb24ucGF0aG5hbWUpKSA6IG51bGxcclxuICAgIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogdW5kZWZpbmVkXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN3YXBQYWdlID0gKHBhdGgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFVybChwYXRoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBNZW51Lm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e01lbnV9IHN3YXBQYWdlPXtzd2FwUGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxQYWdlIHVybD17cGF0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgICAgPFRvYXN0Lz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL3VpL05hdkxpJ1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uLy4uL2ljb24vaWNvbi11aS9Mb2dvdXQuanN4J1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjbGVhckRhdGEgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7UGFnZXMsIHN3YXBQYWdlfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RW5hYmxlKHRydWUpXHJcbiAgICB9LCA1MClcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGNsZWFyRGF0YSgpKVxyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBzd2FwUGFnZShwYXRoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpPn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXYtb3B0c1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2Jz5cclxuICAgICAgICAgIDxOYXZMaSB0bz1cIi9taW5pLWFkbWluL2xvZ291dFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+PExvZ291dCBDbHM9XCJzdmctaWNvblwiIC8+PC9OYXZMaT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuLi91aS9QYWdlc0NvbnRhaW5lcidcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi4vdWkvQ29udGVudE5hdidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXR9KVxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFhcnRpY2xlcyA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ2FydGljbGVzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcblxyXG4gICAgIXBhZ2VzID8gYWpheC5nZXQoJy9wYWdlcycpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkgOiBudWxsXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICd2YWx1ZScsIGNvbFNpemU6IDh9LFxyXG4gICAge3RhZzogJ3BhZ2UnLCBuYW1lOiAncGFnZScsIGRyYXc6ICdvYmplY3QudGl0bGUnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdwdWJsaXNoZWQnLCBuYW1lOiAnVmlzaWJsZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX0sXHJcbiAgICB7dGFnOiAnaXNfZHluYW1pYycsIG5hbWU6ICdEeW5hbWlxdWUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J0FydGljbGVzJ30+XHJcbiAgICAgIHsgYXJ0aWNsZXMgJiYgPENvbnRlbnROYXYgZGF0YT17YXJ0aWNsZXN9IGhlYWRlcj17aGVhZGVyfSBhY3Rpb249e251bGx9IC8+IH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbidcclxuaW1wb3J0IFR4dElucHV0IGZyb20gJy4uL3VpL1R4dElucHV0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9ub3RpZmljYXRpb25TbGljZSdcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIC8vIHJvdXRlclxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICAvLyByZWR1eCAtIGFqYXhcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBYTUxTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uWE1MU2V0LmF4aW9zfSlcclxuICAvLyByZWR1eCAtIE5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IGxpZmV0aW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24ubGlmZSlcclxuICAvLyBzdGF0ZVxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7IC4uLnN0YXRlIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcy5kYXRhLnVybCA9PT0gXCIvXCIgPyBgJHtYTUxTZXQubmF2VVJMfWAgOiBgJHtYTUxTZXQubmF2VVJMfS8ke3Jlcy5kYXRhLnVybH1gXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXJsKFwiXCIpKVxyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcImluZm9cIiwgXHJcbiAgICAgICAgICBtc2c6IGBCaWVudmVudWUgJHtzdGF0ZS5lbWFpbH1gLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbmF2KGNsZWFuUGF0aCh1cmwpKVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIiwgXHJcbiAgICAgICAgICBtc2c6IFwiY29ubmVjdGlvbiBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBuYXYoYCR7WE1MU2V0Lm5hdlVSTH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBiZy13aGl0ZSBjb2xvci1kYXJrJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwibW90IGRlIHBhc3NlLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCdXR0b25cclxuICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgYnRuQ2xzPSdidG4gcHJpbWFyeSB3LWZ1bGwnXHJcbiAgICA+TWUgQ29ubmVjdGVyPC9CdXR0b24+XHJcbiAgPC9mb3JtPlxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi4vdWkvQ29udGVudE5hdidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4uL3VpL1BhZ2VzQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgUGFnZXMgPSAoeyB1cmwgfSkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3BhZ2VzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICd2YWx1ZScsIGNvbFNpemU6IDZ9LFxyXG4gICAge3RhZzogJ3NldHRpbmdzJywgbmFtZTogJ2xhbmRpbmcnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFnZXMnfT5cclxuICAgICAgeyBkYXRhICYmIDxDb250ZW50TmF2IGRhdGE9e2RhdGF9IGhlYWRlcj17aGVhZGVyfSBhY3Rpb249e251bGx9IC8+IH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFyZUVxdWFsLCBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vdWkvU2VsZWN0b3InXHJcbmltcG9ydCBUeHRJbnB1dCBmcm9tICcuLi91aS9UeHRJbnB1dCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbidcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4uL3VpL1BhZ2VzQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgU2V0dGluZ3MgPSAoeyB1cmwgfSkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuc2V0dGluZ3MpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgWyBjaGFuZ2UsIHNldENoYW5nZSBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgWyBpbml0aWFsU3RhdGUsIHNldEluaXRpYWxTdGF0ZSBdID0gdXNlU3RhdGUoe30pXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFkYXRhID8gYWpheC5nZXQodXJsKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHsuLi5yZXMuZGF0YX0pXHJcbiAgICAgIH0pIDogKCkgPT4ge1xyXG4gICAgICAgIGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHsuLi5kYXRhfSlcclxuICAgICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gKHYpID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlICdBdXRob3InOlxyXG4gICAgICAgIHJldHVybiAnYXV0ZXVyJztcclxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOiBcclxuICAgICAgICByZXR1cm4gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgY2FzZSAnU2l0ZU5hbWUnOlxyXG4gICAgICAgIHJldHVybiAnbm9tIGR1IHNpdGUnO1xyXG4gICAgICBjYXNlICdMYW5kaW5nJzpcclxuICAgICAgICByZXR1cm4gJ3BhZ2UgZFxcJ2FjY3VlaWwnO1xyXG4gICAgICBkZWZhdWx0OiBcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgcHJvcCkgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7Li4uZGF0YSwgW3Byb3BdOiBlLnRhcmdldC52YWx1ZX1cclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogbkRhdGEgfSkpXHJcbiAgICBjb25zb2xlLmxvZyhhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSk7XHJcbiAgICAhYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBzZXRDaGFuZ2UoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRMYW5kaW5nID0gKHYpID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0gey4uLmRhdGEsIExhbmRpbmc6IHZ9XHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IG5EYXRhIH0pKVxyXG4gICAgY29uc29sZS5sb2coYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkpO1xyXG4gICAgIWFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpID8gc2V0Q2hhbmdlKHRydWUpIDogc2V0Q2hhbmdlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J1BhcmFtw6h0cmVzJ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0zIHB5LTMganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhID8gPD5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0F1dGhvcicpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpKX0gaWQ9XCJBdXRob3JcIiB2YWx1ZT17ZGF0YS5BdXRob3J9IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0Rlc2NyaXB0aW9uJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9IGlkPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZGF0YS5EZXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdTaXRlTmFtZScpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIikpfSBpZD1cIlNpdGVOYW1lXCIgdmFsdWU9e2RhdGEuU2l0ZU5hbWV9IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2VsZWN0b3IgY2xzPSdzZWNvbmRhcnknIGljb25DbHM9J2ljb24nIGFjdGl2ZT17ZGF0YS5MYW5kaW5nfSBsaXN0PXtkYXRhLlBhZ2VzfSBhY3Rpb249e3NldExhbmRpbmd9PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Jsb2NrIHB5LTInPlBhZ2U8L2gyPlxyXG4gICAgICAgICAgICA8L1NlbGVjdG9yPlxyXG4gICAgICAgICAgPC8+IDogXHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNoYW5nZSAmJiA8QnV0dG9uIGJ0bkNscz17J2J0biBzZWNvbmRhcnkgZmFkZUluTGVmdCd9IGRpdkNscz17XCJwLTIgZmxleCBqdXN0aWZ5LWVuZFwifT5TYXV2ZWdhcmRlcjwvQnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3MiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgc2V0QmFzZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5leHBvcnQgY29uc3QgYWpheFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhamF4JyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVybDogJycsXHJcbiAgICBiYXNlVXJsOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICBuYXZVUkw6IFwiL21pbmktYWRtaW5cIixcclxuICAgIGF4aW9zOiB7XHJcbiAgICAgIGJhc2VVUkw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYTUxIdHRwUmVxdWVzdCc6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwibm90aWZpY2F0aW9uXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBtc2c6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwib3V0XCIsXHJcbiAgICB0eXBlOiBcImluZm9cIixcclxuICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICBsaWZlOiA0MDAwXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbm90aWZ5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBjb25zdCB7dHlwZSxtc2csdGltZW91dH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtc2c6IG1zZyxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHN0YXR1cyA6IFwiaW5cIixcclxuICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeUtlZXA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtldmVudCwgZnVuY30gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBpZiAoZXZlbnQgPT09IFwic3RheVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGltZW91dDogZnVuYyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5Q2xvc2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiAnb3V0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9ID0gbm90aWZpY2F0aW9uU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uU2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGFqYXhTbGljZSBmcm9tICcuL3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IG5vdGlmaWNhdGlvblNsaWNlIGZyb20gXCIuL3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYWpheDogYWpheFNsaWNlLFxyXG4gICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25TbGljZVxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBpc0FycmF5IH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1N1Y2Nlc3MnXHJcbmltcG9ydCBDbG9zZSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvQ2xvc2UnXHJcblxyXG5cclxuY29uc3QgQ29udGVudE5hdiA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHNldFZpZXcgPSAodmFsdWUsIHNldCA9ICd2YWx1ZScsIHRhZykgPT4ge1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eb2JqZWN0XFwuLisvZykudGVzdChzZXQpOlxyXG4gICAgICAgIGxldCBuYW1lID0gc2V0LnNwbGl0KCcuJylbc2V0LnNwbGl0KCcuJykubGVuZ3RoLTFdXHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhW2Ake3RhZ31zYF0pW051bWJlcih2YWx1ZSktMV1bbmFtZV1cclxuICAgICAgY2FzZSBuZXcgUmVnRXhwKC9eYm9vbC9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gPFN1Y2Nlc3MgY2xzPSdoLTUgdy01IG0tYXV0byBpY29uIHN1Y2Nlc3MnIC8+IDogPENsb3NlIGNscz0naC01IHctNSBtLWF1dG8gaWNvbiBmYWxzZScgLz5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtbmF2LWhlYWRlcic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyLm1hcCgoaCwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfWB9PntjYXBpdGFsaXplKGgubmFtZSl9PC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1maWVsZCBjb2xzaXplLTFgfT57Y2FwaXRhbGl6ZSgnYWN0aW9ucycpfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtaW5uZXIgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXgtaGlkZGVuJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhICYmIGlzQXJyYXkoZGF0YSkgPyBkYXRhLm1hcCgoZmllbGQsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J2NvbnRlbnQtcm93Jz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhlYWRlci5tYXAoKHsgdGFnLCBkcmF3LCBjb2xTaXplIH0sIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0ke2NvbFNpemV9YH0+e3NldFZpZXcoZmllbGRbdGFnXSxkcmF3LHRhZyl9PC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtMWB9PntjYXBpdGFsaXplKCdhY3Rpb25zJyl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TmF2IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IE5hdkxpID0gKHsgY2hpbGRyZW4sIHRvLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8TmF2TGluayBjbGFzc05hbWU9J25hdi1saW5rJyB0bz17dG99IG9uQ2xpY2s9e29uQ2xpY2t9IGVuZD57IGNoaWxkcmVuIH08L05hdkxpbms+XHJcbiAgICA8L2xpPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWdlc0NvbnRhaW5lciA9ICh7Y2hpbGRyZW4gLCB0aXRsZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIG1iLTgnPnt0aXRsZX08L2Rpdj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udGFpbmVyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHBhbmQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0V4cGFuZCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGNscywgbGlzdCwgYWN0aXZlLCBpY29uQ2xzLCBjaGlsZHJlbiwgYWN0aW9uIH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhc3RFdmVudCwgc2V0TGFzdEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGxhbmRpbmcgPSBsaXN0LmZpbmQoaSA9PiBpLmlkID09PSBhY3RpdmUpXHJcbiAgY29uc3QgYXZhaWJsZSA9IGxpc3QuZmlsdGVyKGkgPT4gaS5pZCAhPT0gYWN0aXZlKVxyXG5cclxuICBjb25zdCB0b2dnbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCAkZWwgPSBlLnRhcmdldFxyXG4gICAgd2hpbGUgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdG9yJykgPT0gZmFsc2UpIHtcclxuICAgICAgJGVsID0gJGVsLnBhcmVudE5vZGVcclxuICAgIH1cclxuICAgIGlmICgoZS50eXBlID09PSAnY2xpY2snICYmIGxhc3RFdmVudCA9PT0gJ2NsaWNrJykgfHwgZS50eXBlICE9PSAnY2xpY2snKSB7XHJcbiAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKVxyXG4gICAgICBsYXN0RXZlbnQgPT09ICdjbGljaycgJiYgdG9nZ2xlID09PSB0cnVlID8gJGVsLmJsdXIoKSA6IG51bGxcclxuICAgIH0gXHJcbiAgICBzZXRMYXN0RXZlbnQoZS50eXBlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVZhbHVlID0gKGUsdikgPT4ge1xyXG4gICAgdG9nZ2xlU2VsZWN0KGUpO1xyXG4gICAgYWN0aW9uKHYpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NscyA/ICdzZWxlY3RvciAnICsgY2xzIDogJ3NlbGVjdG9yJ30gb25Gb2N1cz17dG9nZ2xlU2VsZWN0fSBvbkJsdXI9e3RvZ2dsZVNlbGVjdH0gdGFiSW5kZXg9ey0xfT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHQgYWN0aXZlJyB2YWx1ZT17bGFuZGluZy5pZH0gb25DbGljaz17dG9nZ2xlID8gdG9nZ2xlU2VsZWN0IDogbnVsbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUobGFuZGluZy50aXRsZSl9PC9kaXY+PEV4cGFuZCBjbHM9e2ljb25DbHN9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICB0b2dnbGUgPyA8ZGl2IGNsYXNzTmFtZT0nb3B0LXdyYXBwZXInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdmFpYmxlLm1hcCgoe2lkLHRpdGxlfSxrKSA9PiBcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdvcHQnIHZhbHVlPXtpZH0gb25DbGljaz17KGUpID0+IGNoYW5nZVZhbHVlKGUsaWQpfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZSh0aXRsZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0luZm8nXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvV2FybmluZydcclxuaW1wb3J0IERhbmdlciBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGFuZ2VyJ1xyXG5pbXBvcnQgeyBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbXNnLCB0eXBlLCBzdGF0dXMgfSA9IGRhdGFcclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgICdJbmZvJzogPEluZm8gY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1N1Y2Nlc3MnOiA8U3VjY2VzcyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnV2FybmluZyc6IDxXYXJuaW5nIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdEYW5nZXInOiA8RGFuZ2VyIGNscz1cImgtNSB3LTVcIiAvPixcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgJHt0eXBlfSAke3N0YXR1c31gfSBvbk1vdXNlRW50ZXI9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnc3RheSd9KSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdjbG9zZScsIGZ1bmM6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDE0MDApfSkgKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlLWljb24nPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uc1tjYXBpdGFsaXplKHR5cGUpXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1idG4nPjxidXR0b24gb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJoLTUgdy01XCIgLz48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1jb250ZW50Jz5cclxuICAgICAgICB7IG1zZyB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0SW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0SW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWxsbyBmcm9tICcuLi9jb21wb25lbnRzL2hlbGxvV29ybGQnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgcmV0dXJuIDxkaXY+PEhlbGxvLz48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIlxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuZnVuY3Rpb24gTWFpbkFkbWluKCkge1xyXG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkbWluIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2xvc2UgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjE4IDI3MCA4MjhxLTkgOS0yMSA5dC0yMS05cS05LTktOS0yMXQ5LTIxbDIxMC0yMTAtMjEwLTIxMHEtOS05LTktMjF0OS0yMXE5LTkgMjEtOXQyMSA5bDIxMCAyMTAgMjEwLTIxMHE5LTkgMjEtOXQyMSA5cTkgOSA5IDIxdC05IDIxTDUyMiA1NzZsMjEwIDIxMHE5IDkgOSAyMXQtOSAyMXEtOSA5LTIxIDl0LTIxLTlMNDgwIDYxOFpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERhbmdlciA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTcuNzUgNDJxLS42IDAtMS4xNzUtLjI1LS41NzUtLjI1LS45NzUtLjY1bC04LjctOC43cS0uNC0uNC0uNjUtLjk3NVQ2IDMwLjI1di0xMi41cTAtLjYuMjUtMS4xNzUuMjUtLjU3NS42NS0uOTc1bDguNy04LjdxLjQtLjQuOTc1LS42NVQxNy43NSA2aDEyLjVxLjYgMCAxLjE3NS4yNS41NzUuMjUuOTc1LjY1bDguNyA4LjdxLjQuNC42NS45NzVUNDIgMTcuNzV2MTIuNXEwIC42LS4yNSAxLjE3NS0uMjUuNTc1LS42NS45NzVsLTguNyA4LjdxLS40LjQtLjk3NS42NVQzMC4yNSA0MlpNMjQgMzMuOTVxLjcgMCAxLjIyNS0uNTI1LjUyNS0uNTI1LjUyNS0xLjIyNSAwLS43LS41MjUtMS4yMjVRMjQuNyAzMC40NSAyNCAzMC40NXEtLjcgMC0xLjIyNS41MjUtLjUyNS41MjUtLjUyNSAxLjIyNSAwIC43LjUyNSAxLjIyNS41MjUuNTI1IDEuMjI1LjUyNVptMC03LjJxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzVWMTUuMXEwLS42NS0uNDI1LTEuMDc1UTI0LjY1IDEzLjYgMjQgMTMuNnEtLjY1IDAtMS4wNzUuNDI1LS40MjUuNDI1LS40MjUgMS4wNzV2MTAuMTVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wk0xNy43NSAzOWgxMi41TDM5IDMwLjI1di0xMi41TDMwLjI1IDloLTEyLjVMOSAxNy43NXYxMi41Wk0yNCAyNFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhbmdlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEV4cGFuZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDcxMSAyNDAgNDcxbDQzLTQzIDE5NyAxOTggMTk3LTE5NyA0MyA0My0yNDAgMjM5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSW5mbyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTI0LjE1IDM0cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di05LjA1cTAtLjYtLjQ1LTEuMDI1UTI0Ljc1IDIyIDI0LjE1IDIycS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY5LjA1cTAgLjYuNDUgMS4wMjUuNDUuNDI1IDEuMDUuNDI1Wk0yNCAxOC4zcS43IDAgMS4xNzUtLjQ1LjQ3NS0uNDUuNDc1LTEuMTV0LS40NzUtMS4yUTI0LjcgMTUgMjQgMTVxLS43IDAtMS4xNzUuNS0uNDc1LjUtLjQ3NSAxLjJ0LjQ3NSAxLjE1cS40NzUuNDUgMS4xNzUuNDVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3IDAgMTItNXQ1LTEycTAtNy01LTEyVDI0IDdxLTcgMC0xMiA1VDcgMjRxMCA3IDUgMTJ0MTIgNVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBMb2dvdXQgPSAoeyBDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Q2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk04Ljc1IDQyLjVxLTEuNDUgMC0yLjU1LTEuMS0xLjEtMS4xLTEuMS0yLjU1VjkuMTVxMC0xLjQ1IDEuMS0yLjU1IDEuMS0xLjEgMi41NS0xLjFoMTQuN3YzLjY1SDguNzV2MjkuN2gxNC43djMuNjVabTI0LjUtOC43NS0yLjctMi42NSA1LjMtNS4zaC0xNy4zdi0zLjY1aDE3LjJsLTUuMy01LjMgMi43LTIuNiA5LjggOS44WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgU3VjY2VzcyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgIGNsYXNzTmFtZT17IGNscyB9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwibTIxLjA1IDI4LjU1LTQuOS00LjlxLS40NS0uNDUtMS4xLS40NS0uNjUgMC0xLjE1LjUtLjUuNS0uNSAxLjE1IDAgLjY1LjUgMS4xbDYuMSA2LjFxLjQ1LjQ1IDEuMDUuNDUuNiAwIDEuMDUtLjQ1bDEyLTEycS40NS0uNDUuNDI1LTEuMS0uMDI1LS42NS0uNDc1LTEuMS0uNDUtLjUtMS4xMjUtLjV0LTEuMTc1LjVaTTI0IDQ0cS00LjI1IDAtNy45LTEuNTI1LTMuNjUtMS41MjUtNi4zNS00LjIyNS0yLjctMi43LTQuMjI1LTYuMzVRNCAyOC4yNSA0IDI0cTAtNC4yIDEuNTI1LTcuODVRNy4wNSAxMi41IDkuNzUgOS44cTIuNy0yLjcgNi4zNS00LjI1UTE5Ljc1IDQgMjQgNHE0LjIgMCA3Ljg1IDEuNTVRMzUuNSA3LjEgMzguMiA5LjhxMi43IDIuNyA0LjI1IDYuMzVRNDQgMTkuOCA0NCAyNHEwIDQuMjUtMS41NSA3LjktMS41NSAzLjY1LTQuMjUgNi4zNS0yLjcgMi43LTYuMzUgNC4yMjVRMjguMiA0NCAyNCA0NFptMC0yMFptMCAxN3E3LjI1IDAgMTIuMTI1LTQuODc1VDQxIDI0cTAtNy4yNS00Ljg3NS0xMi4xMjVUMjQgN3EtNy4yNSAwLTEyLjEyNSA0Ljg3NVQ3IDI0cTAgNy4yNSA0Ljg3NSAxMi4xMjVUMjQgNDFaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWNjZXNzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgV2FybmluZyA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNC42IDQycS0uNDUgMC0uNzc1LS4ydC0uNTI1LS41NXEtLjItLjM1LS4yMjUtLjcyNS0uMDI1LS4zNzUuMjI1LS43NzVsMTkuNC0zMy41cS4yNS0uNC41NzUtLjU3NVEyMy42IDUuNSAyNCA1LjVxLjQgMCAuNzI1LjE3NS4zMjUuMTc1LjU3NS41NzVsMTkuNCAzMy41cS4yNS40LjIyNS43NzUtLjAyNS4zNzUtLjIyNS43MjV0LS41MjUuNTVxLS4zMjUuMi0uNzc1LjJabTIuNi0zaDMzLjZMMjQgMTBabTE3LTIuODVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzUgMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjVRMjIuNyAzNCAyMi43IDM0LjY1cTAgLjY1LjQyNSAxLjA3NS40MjUuNDI1IDEuMDc1LjQyNVptMC01LjU1cS42NSAwIDEuMDc1LS40MjUuNDI1LS40MjUuNDI1LTEuMDc1di04LjJxMC0uNjUtLjQyNS0xLjA3NS0uNDI1LS40MjUtMS4wNzUtLjQyNS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXY4LjJxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0tLjItNi4xWlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdhcm5pbmciLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwicmVwbGFjZSIsImNhcGl0YWxpemUiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJlbmRPZlBhdGgiLCJsYXN0SW5kZXhPZiIsInVwZGF0ZVRpdGxlIiwibiIsImRvY3VtZW50IiwidGl0bGUiLCJzdHJDb250YWlucyIsInN0ciIsInNlYXJjaCIsInJlIiwiUmVnRXhwIiwiYXJlRXF1YWwiLCJvYmoxIiwib2JqMiIsImlzQXJyYXkiLCJpIiwiaXNPYmplY3QiLCJlbnQxIiwiT2JqZWN0IiwiZW50cmllcyIsImVudDIiLCJrZXkiLCJ2YWx1ZSIsImlzRGVmaW5lZCIsIm9iaiIsInVuZGVmaW5lZCIsImlzSlNPTiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJvYmplY3QiLCJhcnJheSIsIkFycmF5IiwiUmVhY3QiLCJDb250ZW50IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJnZXRUb2tlbiIsInRva2VuIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJMb2dpbiIsIk5hdmJhciIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiU2V0dGluZ3MiLCJQYWdlcyIsInNldFVybCIsIkFydGljbGVzIiwiVG9hc3QiLCJNZW51IiwibmFtZSIsIlBhZ2UiLCJMYXlvdXQiLCJ1cmwiLCJzdGF0ZSIsImFqYXgiLCJkaXNwYXRjaCIsIm5hdiIsInN3YXBQYWdlIiwicGF0aG5hbWUiLCJtYXRjaCIsIm1hcCIsInVzZVN0YXRlIiwiTmF2TGkiLCJMb2dvdXQiLCJ1c2VMb2NhdGlvbiIsImNsZWFyRGF0YSIsImVuYWJsZSIsInNldEVuYWJsZSIsInNldFRpbWVvdXQiLCJoYW5kbGVMb2dvdXQiLCJQYWdlc0NvbnRhaW5lciIsIkNvbnRlbnROYXYiLCJwdXNoRGF0YSIsImF4aW9zIiwiYXhpb3NTZXQiLCJjcmVhdGUiLCJhcnRpY2xlcyIsImRhdGEiLCJwYWdlcyIsImdldCIsInRoZW4iLCJyZXMiLCJoZWFkZXIiLCJ0YWciLCJkcmF3IiwiY29sU2l6ZSIsIkJ1dHRvbiIsIlR4dElucHV0Iiwibm90aWZ5Iiwibm90aWZ5Q2xvc2UiLCJYTUxTZXQiLCJsaWZldGltZSIsIm5vdGlmaWNhdGlvbiIsImxpZmUiLCJzZXRTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJfdG9rZW4iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwibmF2VVJMIiwidHlwZSIsIm1zZyIsInRpbWVvdXQiLCJjYXRjaCIsIlNlbGVjdG9yIiwic2V0dGluZ3MiLCJjaGFuZ2UiLCJzZXRDaGFuZ2UiLCJpbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJjaGFuZ2VOYW1lIiwidiIsInByb3AiLCJuRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRMYW5kaW5nIiwiTGFuZGluZyIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJjcmVhdGVTbGljZSIsImFqYXhTbGljZSIsImJhc2VVcmwiLCJiYXNlVVJMIiwiaGVhZGVycyIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwibm90aWZpY2F0aW9uU2xpY2UiLCJzdGF0dXMiLCJjbGVhclRpbWVvdXQiLCJub3RpZnlLZWVwIiwiZXZlbnQiLCJmdW5jIiwiY29uZmlndXJlU3RvcmUiLCJidG5DbHMiLCJkaXZDbHMiLCJTdWNjZXNzIiwiQ2xvc2UiLCJzZXRWaWV3Iiwic2V0IiwidGVzdCIsInNwbGl0IiwiTnVtYmVyIiwiaCIsImsiLCJmaWVsZCIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCJFeHBhbmQiLCJjbHMiLCJsaXN0IiwiYWN0aXZlIiwiaWNvbkNscyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImxhc3RFdmVudCIsInNldExhc3RFdmVudCIsImxhbmRpbmciLCJmaW5kIiwiaWQiLCJhdmFpYmxlIiwiZmlsdGVyIiwidG9nZ2xlU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJGVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiYmx1ciIsImNoYW5nZVZhbHVlIiwiSW5mbyIsIldhcm5pbmciLCJEYW5nZXIiLCJpY29ucyIsImNsb3NlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlucHV0Q2xzIiwibGFiZWxDbHMiLCJvbkNoYW5nZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlRm9jdXMiLCJDb21wb25lbnQiLCJIdyIsInJlbmRlciIsIkhlbGxvIiwiTWFpbiIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTWFpbkFkbWluIiwiQ2xzIl0sInNvdXJjZVJvb3QiOiIifQ==