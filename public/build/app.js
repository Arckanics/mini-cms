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

// verifie si la variable est un JSON valide

const isJSON = json => {
  try {
    JSON.parse(json);
  } catch {
    return false;
  }
  return true;
};

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");









const Login = () => {
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  const baseUrl = '/mini-admin';
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.ajax.axios);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const ajax = axios__WEBPACK_IMPORTED_MODULE_8__["default"].create({
    ...axiosSet
  });
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: null,
    password: null,
    _token: (0,_Functions_Security__WEBPACK_IMPORTED_MODULE_3__.getToken)()
  });
  const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
      let url = res.data.url === "/" ? `${baseUrl}` : `${baseUrl}/${res.data.url}`;
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.setUrl)(""));
      nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_6__.cleanPath)(url));
    }).catch(res => {
      nav(`${baseUrl}/login`);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !data ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'settings',
        data: res.data
      }));
    }) : ajax.get('/refresh');
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
    !change ? setChange(true) : null;
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
      name: 'settings',
      data: {
        ...data,
        [prop]: e.target.value
      }
    }));
  };
  const setLanding = v => {
    !change ? setChange(true) : null;
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
      name: 'settings',
      data: {
        ...data,
        Landing: v
      }
    }));
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

/***/ "./assets/react/components/admin/redux/reducers/NotificationSlice.js":
/*!***************************************************************************!*\
  !*** ./assets/react/components/admin/redux/reducers/NotificationSlice.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "notificationSlice": () => (/* binding */ notificationSlice),
/* harmony export */   "notify": () => (/* binding */ notify),
/* harmony export */   "notifyClose": () => (/* binding */ notifyClose)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const notificationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "notification",
  initialState: {
    msg: "",
    status: "out",
    type: "danger",
    timeout: null
  },
  reducers: {
    notify: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null;
      state = {
        ...state,
        msg: action.payload.msg,
        status: "in"
      };
      state.timeout = setTimeout(() => {
        state = {
          ...state,
          status: 'out'
        };
      }, 2500);
    },
    notifyClose: state => {
      state.timeout ? clearTimeout(state.timeout) : null;
      state = {
        ...state,
        status: 'out'
      };
    }
  }
});
const {
  notify,
  notifyClose
} = notificationSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notificationSlice.reducer);

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
/* harmony import */ var _reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/NotificationSlice */ "./assets/react/components/admin/redux/reducers/NotificationSlice.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    ajax: _reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
    notification: _reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
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
        return value ? 'true' : 'false';
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
/* harmony import */ var _icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icon/icon-ui/Close */ "./assets/react/icon/icon-ui/Close.jsx");



const Toast = () => {
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.notification);
  const {
    msg,
    type
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'toast ' + type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toast-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Close__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cls: "h-6 w-6"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toast-content"
  }, msg, " test TXT"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvTm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Db250ZW50TmF2LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL05hdkxpLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1BhZ2VzQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1NlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1RvYXN0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1R4dElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2hlbGxvV29ybGQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9DbG9zZS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0V4cGFuZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCIsXG5cdFwiLi9tYWluX2FkbWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIlxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke2V4dC5sZW5ndGggPiAwID8gXCIvXCIgOiBudWxsfSR7ZXh0fWBcclxufVxyXG5cclxuLy8gbmV0dG9pZSBsJ3VybCBmb3VybmlcclxuXHJcbmNvbnN0IGNsZWFuUGF0aCA9IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvJHxcXC8kLywgJycpLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgY2FwaXRhbGl6ZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKClcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuLy8gY2hhbmdlIGxlIHRpdHJlIGRhbnMgbCdvbmdsZXRcclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBkb2N1bWVudC50aXRsZSA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyBjYXBpdGFsaXplKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG4vLyB0cm91dmUgdW5lIGV4cHJlc3Npb24gcsOpZ3VsacOocmVcclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBKU09OIHZhbGlkZVxyXG5cclxuY29uc3QgaXNKU09OID0gKGpzb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgSlNPTi5wYXJzZShqc29uKVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIFRhYmxlYXV4IFxyXG5cclxuY29uc3QgaXNBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KVxyXG59XHJcblxyXG5leHBvcnQgeyBzZXRCYXNlVXJsLCBjYXBpdGFsaXplLCB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoLCBzdHJDb250YWlucywgY2xlYW5QYXRoLCBpc0pTT04sIGlzQXJyYXkgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL3BhZ2VzL0xvZ2luJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3BhZ2VzL1NldHRpbmdzJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAnLi9wYWdlcy9QYWdlcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IHsgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tICcuL3BhZ2VzL0FydGljbGVzJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi91aS9Ub2FzdCdcclxuXHJcblxyXG5jb25zdCBNZW51ID0gW1xyXG4gIHtuYW1lOiBcIlBhcmFtZXRyZXNcIiwgcGF0aDogXCIvXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wiLCBQYWdlOiBQYWdlc30sXHJcbiAge25hbWU6IFwiQXJ0aWNsZXNcIiwgcGF0aDogXCIvYXJ0aWNsZXNcIiwgUGFnZTogQXJ0aWNsZXN9LFxyXG5dXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LnVybClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cmwgPT09IFwiXCIgPyBzd2FwUGFnZShjbGVhblBhdGgobG9jYXRpb24ucGF0aG5hbWUpKSA6IG51bGxcclxuICAgIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogdW5kZWZpbmVkXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN3YXBQYWdlID0gKHBhdGgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFVybChwYXRoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBNZW51Lm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e01lbnV9IHN3YXBQYWdlPXtzd2FwUGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxQYWdlIHVybD17cGF0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgICAgPFRvYXN0Lz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL3VpL05hdkxpJ1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uLy4uL2ljb24vaWNvbi11aS9Mb2dvdXQuanN4J1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjbGVhckRhdGEgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7UGFnZXMsIHN3YXBQYWdlfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RW5hYmxlKHRydWUpXHJcbiAgICB9LCA1MClcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGNsZWFyRGF0YSgpKVxyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBzd2FwUGFnZShwYXRoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpPn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXYtb3B0c1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2Jz5cclxuICAgICAgICAgIDxOYXZMaSB0bz1cIi9taW5pLWFkbWluL2xvZ291dFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+PExvZ291dCBDbHM9XCJzdmctaWNvblwiIC8+PC9OYXZMaT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuLi91aS9QYWdlc0NvbnRhaW5lcidcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi4vdWkvQ29udGVudE5hdidcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXR9KVxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFhcnRpY2xlcyA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ2FydGljbGVzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcblxyXG4gICAgIXBhZ2VzID8gYWpheC5nZXQoJy9wYWdlcycpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkgOiBudWxsXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICd2YWx1ZScsIGNvbFNpemU6IDh9LFxyXG4gICAge3RhZzogJ3BhZ2UnLCBuYW1lOiAncGFnZScsIGRyYXc6ICdvYmplY3QudGl0bGUnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdwdWJsaXNoZWQnLCBuYW1lOiAnVmlzaWJsZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX0sXHJcbiAgICB7dGFnOiAnaXNfZHluYW1pYycsIG5hbWU6ICdEeW5hbWlxdWUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J0FydGljbGVzJ30+XHJcbiAgICAgIHsgYXJ0aWNsZXMgJiYgPENvbnRlbnROYXYgZGF0YT17YXJ0aWNsZXN9IGhlYWRlcj17aGVhZGVyfSBhY3Rpb249e251bGx9IC8+IH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbidcclxuaW1wb3J0IFR4dElucHV0IGZyb20gJy4uL3VpL1R4dElucHV0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgY29uc3QgYmFzZVVybCA9ICcvbWluaS1hZG1pbidcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldH0pXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogbnVsbCxcclxuICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgX3Rva2VuOiBnZXRUb2tlbigpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7IC4uLnN0YXRlIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcy5kYXRhLnVybCA9PT0gXCIvXCIgPyBgJHtiYXNlVXJsfWAgOiBgJHtiYXNlVXJsfS8ke3Jlcy5kYXRhLnVybH1gXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXJsKFwiXCIpKVxyXG4gICAgICAgIG5hdihjbGVhblBhdGgodXJsKSlcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBuYXYoYCR7YmFzZVVybH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBiZy13aGl0ZSBjb2xvci1kYXJrJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwibW90IGRlIHBhc3NlLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCdXR0b25cclxuICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgYnRuQ2xzPSdidG4gcHJpbWFyeSB3LWZ1bGwnXHJcbiAgICA+TWUgQ29ubmVjdGVyPC9CdXR0b24+XHJcbiAgPC9mb3JtPlxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi4vdWkvQ29udGVudE5hdidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4uL3VpL1BhZ2VzQ29udGFpbmVyJ1xyXG5cclxuY29uc3QgUGFnZXMgPSAoeyB1cmwgfSkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3BhZ2VzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICd2YWx1ZScsIGNvbFNpemU6IDZ9LFxyXG4gICAge3RhZzogJ3NldHRpbmdzJywgbmFtZTogJ2xhbmRpbmcnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFnZXMnfT5cclxuICAgICAgeyBkYXRhICYmIDxDb250ZW50TmF2IGRhdGE9e2RhdGF9IGhlYWRlcj17aGVhZGVyfSBhY3Rpb249e251bGx9IC8+IH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuLi91aS9TZWxlY3RvcidcclxuaW1wb3J0IFR4dElucHV0IGZyb20gJy4uL3VpL1R4dElucHV0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvQnV0dG9uJ1xyXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnLi4vdWkvUGFnZXNDb250YWluZXInXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXR9KVxyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5zZXR0aW5ncylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbIGNoYW5nZSwgc2V0Q2hhbmdlIF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWRhdGEgPyBhamF4LmdldCh1cmwpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgICAgfSkgOiBhamF4LmdldCgnL3JlZnJlc2gnKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gKHYpID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlICdBdXRob3InOlxyXG4gICAgICAgIHJldHVybiAnYXV0ZXVyJztcclxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOiBcclxuICAgICAgICByZXR1cm4gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgY2FzZSAnU2l0ZU5hbWUnOlxyXG4gICAgICAgIHJldHVybiAnbm9tIGR1IHNpdGUnO1xyXG4gICAgICBjYXNlICdMYW5kaW5nJzpcclxuICAgICAgICByZXR1cm4gJ3BhZ2UgZFxcJ2FjY3VlaWwnO1xyXG4gICAgICBkZWZhdWx0OiBcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgcHJvcCkgPT4ge1xyXG4gICAgIWNoYW5nZSA/IHNldENoYW5nZSh0cnVlKSA6IG51bGxcclxuICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3NldHRpbmdzJywgZGF0YTogey4uLmRhdGEsIFtwcm9wXTogZS50YXJnZXQudmFsdWV9IH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0TGFuZGluZyA9ICh2KSA9PiB7XHJcbiAgICAhY2hhbmdlID8gc2V0Q2hhbmdlKHRydWUpIDogbnVsbFxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiB7Li4uZGF0YSwgTGFuZGluZzogdn0gfSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFyYW3DqHRyZXMnfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgPyA8PlxyXG4gICAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnQXV0aG9yJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJBdXRob3JcIikpfSBpZD1cIkF1dGhvclwiIHZhbHVlPXtkYXRhLkF1dGhvcn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJBdXRob3JcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnRGVzY3JpcHRpb24nKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpKX0gaWQ9XCJEZXNjcmlwdGlvblwiIHZhbHVlPXtkYXRhLkRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ1NpdGVOYW1lJyl9IGxhYmVsPXtjYXBpdGFsaXplKGNoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKSl9IGlkPVwiU2l0ZU5hbWVcIiB2YWx1ZT17ZGF0YS5TaXRlTmFtZX0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RvciBjbHM9J3NlY29uZGFyeScgaWNvbkNscz0naWNvbicgYWN0aXZlPXtkYXRhLkxhbmRpbmd9IGxpc3Q9e2RhdGEuUGFnZXN9IGFjdGlvbj17c2V0TGFuZGluZ30+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYmxvY2sgcHktMic+UGFnZTwvaDI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0b3I+XHJcbiAgICAgICAgICA8Lz4gOiBcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2hhbmdlICYmIDxCdXR0b24gYnRuQ2xzPXsnYnRuIHNlY29uZGFyeSBmYWRlSW5MZWZ0J30gZGl2Q2xzPXtcInAtMiBmbGV4IGp1c3RpZnktZW5kXCJ9PlNhdXZlZ2FyZGVyPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncyIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcIm5vdGlmaWNhdGlvblwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgbXNnOiBcIlwiLFxyXG4gICAgc3RhdHVzOiBcIm91dFwiLFxyXG4gICAgdHlwZTogXCJkYW5nZXJcIixcclxuICAgIHRpbWVvdXQ6IG51bGxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBub3RpZnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcblxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtc2c6IGFjdGlvbi5wYXlsb2FkLm1zZyxcclxuICAgICAgICBzdGF0dXMgOiBcImluXCIsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzdGF0ZSA9IHsuLi5zdGF0ZSwgc3RhdHVzOiAnb3V0J31cclxuICAgICAgfSwgMjUwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGlmeUNsb3NlOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudGltZW91dCA/IGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0KSA6IG51bGxcclxuICAgICAgc3RhdGUgPSB7Li4uc3RhdGUsIHN0YXR1czogJ291dCd9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9ID0gbm90aWZpY2F0aW9uU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWZpY2F0aW9uU2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoLCBlbmRPZlBhdGggfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBzZXRCYXNlVXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFqYXhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYWpheCcsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB1cmw6ICcnLFxyXG4gICAgYmFzZVVybDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgYXhpb3M6IHtcclxuICAgICAgYmFzZVVSTDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ1hNTEh0dHBSZXF1ZXN0JzogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHt9XHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXJsOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51cmwgPSBlbmRPZlBhdGgoY2xlYW5QYXRoKGAke2FjdGlvbi5wYXlsb2FkfWApKVxyXG4gICAgfSxcclxuICAgIHB1c2hEYXRhOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGRhdGEgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLmRhdGEgPSB7Li4uc3RhdGUuZGF0YSwgW25hbWVdOiBkYXRhfVxyXG4gICAgfSxcclxuICAgIGNsZWFyRGF0YTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRhdGEgPSB7fVxyXG4gICAgICBzdGF0ZS51cmwgPSBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0VXJsLCBwdXNoRGF0YSwgY2xlYXJEYXRhIH0gPSBhamF4U2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWpheFNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBhamF4U2xpY2UgZnJvbSAnLi9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBub3RpZmljYXRpb25TbGljZSBmcm9tIFwiLi9yZWR1Y2Vycy9Ob3RpZmljYXRpb25TbGljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGFqYXg6IGFqYXhTbGljZSxcclxuICAgIG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uU2xpY2VcclxuICB9LFxyXG59KVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgYnRuQ2xzLCBkaXZDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xzfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0bkNsc30+eyBjaGlsZHJlbiB9PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgaXNBcnJheSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBDb250ZW50TmF2ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc3Qgc2V0VmlldyA9ICh2YWx1ZSwgc2V0ID0gJ3ZhbHVlJywgdGFnKSA9PiB7XHJcbiAgICBcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmplY3RcXC4uKy9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzZXQuc3BsaXQoJy4nKVtzZXQuc3BsaXQoJy4nKS5sZW5ndGgtMV1cclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGFbYCR7dGFnfXNgXSlbTnVtYmVyKHZhbHVlKS0xXVtuYW1lXVxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50LW5hdic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1oZWFkZXInPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlci5tYXAoKGgsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX1gfT57Y2FwaXRhbGl6ZShoLm5hbWUpfTwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0xYH0+e2NhcGl0YWxpemUoJ2FjdGlvbnMnKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWlubmVyIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy14LWhpZGRlbic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YSAmJiBpc0FycmF5KGRhdGEpID8gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdjb250ZW50LXJvdyc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoZWFkZXIubWFwKCh7IHRhZywgZHJhdywgY29sU2l6ZSB9LCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtJHtjb2xTaXplfWB9PntzZXRWaWV3KGZpZWxkW3RhZ10sZHJhdyx0YWcpfTwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLTFgfT57Y2FwaXRhbGl6ZSgnYWN0aW9ucycpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE5hdiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGFnZXNDb250YWluZXIgPSAoe2NoaWxkcmVuICwgdGl0bGV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSBtYi04Jz57dGl0bGV9PC9kaXY+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRhaW5lciIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FeHBhbmQnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBjbHMsIGxpc3QsIGFjdGl2ZSwgaWNvbkNscywgY2hpbGRyZW4sIGFjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsYXN0RXZlbnQsIHNldExhc3RFdmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBsYW5kaW5nID0gbGlzdC5maW5kKGkgPT4gaS5pZCA9PT0gYWN0aXZlKVxyXG4gIGNvbnN0IGF2YWlibGUgPSBsaXN0LmZpbHRlcihpID0+IGkuaWQgIT09IGFjdGl2ZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgJGVsID0gZS50YXJnZXRcclxuICAgIHdoaWxlICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RvcicpID09IGZhbHNlKSB7XHJcbiAgICAgICRlbCA9ICRlbC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICBpZiAoKGUudHlwZSA9PT0gJ2NsaWNrJyAmJiBsYXN0RXZlbnQgPT09ICdjbGljaycpIHx8IGUudHlwZSAhPT0gJ2NsaWNrJykge1xyXG4gICAgICBzZXRUb2dnbGUoIXRvZ2dsZSlcclxuICAgICAgbGFzdEV2ZW50ID09PSAnY2xpY2snICYmIHRvZ2dsZSA9PT0gdHJ1ZSA/ICRlbC5ibHVyKCkgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgc2V0TGFzdEV2ZW50KGUudHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlLHYpID0+IHtcclxuICAgIHRvZ2dsZVNlbGVjdChlKTtcclxuICAgIGFjdGlvbih2KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgPyAnc2VsZWN0b3IgJyArIGNscyA6ICdzZWxlY3Rvcid9IG9uRm9jdXM9e3RvZ2dsZVNlbGVjdH0gb25CbHVyPXt0b2dnbGVTZWxlY3R9IHRhYkluZGV4PXstMX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0IGFjdGl2ZScgdmFsdWU9e2xhbmRpbmcuaWR9IG9uQ2xpY2s9e3RvZ2dsZSA/IHRvZ2dsZVNlbGVjdCA6IG51bGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKGxhbmRpbmcudGl0bGUpfTwvZGl2PjxFeHBhbmQgY2xzPXtpY29uQ2xzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgdG9nZ2xlID8gPGRpdiBjbGFzc05hbWU9J29wdC13cmFwcGVyJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXZhaWJsZS5tYXAoKHtpZCx0aXRsZX0saykgPT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nb3B0JyB2YWx1ZT17aWR9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlLGlkKX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUodGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uKVxyXG4gIGNvbnN0IHsgbXNnLCB0eXBlIH0gPSBkYXRhXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsndG9hc3QgJyt0eXBlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWJ0bic+PGJ1dHRvbj48Q2xvc2UgY2xzPVwiaC02IHctNlwiIC8+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1jb250ZW50Jz5cclxuICAgICAgICB7IG1zZyB9IHRlc3QgVFhUXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0SW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0SW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWxsbyBmcm9tICcuLi9jb21wb25lbnRzL2hlbGxvV29ybGQnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgcmV0dXJuIDxkaXY+PEhlbGxvLz48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIlxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuZnVuY3Rpb24gTWFpbkFkbWluKCkge1xyXG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgPC9Qcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkFkbWluIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ2xvc2UgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiID5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNjE4IDI3MCA4MjhxLTkgOS0yMSA5dC0yMS05cS05LTktOS0yMXQ5LTIxbDIxMC0yMTAtMjEwLTIxMHEtOS05LTktMjF0OS0yMXE5LTkgMjEtOXQyMSA5bDIxMCAyMTAgMjEwLTIxMHE5LTkgMjEtOXQyMSA5cTkgOSA5IDIxdC05IDIxTDUyMiA1NzZsMjEwIDIxMHE5IDkgOSAyMXQtOSAyMXEtOSA5LTIxIDl0LTIxLTlMNDgwIDYxOFpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9zZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEV4cGFuZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDcxMSAyNDAgNDcxbDQzLTQzIDE5NyAxOTggMTk3LTE5NyA0MyA0My0yNDAgMjM5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKHsgQ2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e0Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC43NSA0Mi41cS0xLjQ1IDAtMi41NS0xLjEtMS4xLTEuMS0xLjEtMi41NVY5LjE1cTAtMS40NSAxLjEtMi41NSAxLjEtMS4xIDIuNTUtMS4xaDE0Ljd2My42NUg4Ljc1djI5LjdoMTQuN3YzLjY1Wm0yNC41LTguNzUtMi43LTIuNjUgNS4zLTUuM2gtMTcuM3YtMy42NWgxNy4ybC01LjMtNS4zIDIuNy0yLjYgOS44IDkuOFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInNldEJhc2VVcmwiLCJleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImxlbmd0aCIsImNsZWFuUGF0aCIsInBhdGgiLCJyZXBsYWNlIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic3RyIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJpc0pTT04iLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiaXNBcnJheSIsImFycmF5IiwiQXJyYXkiLCJSZWFjdCIsIkNvbnRlbnQiLCJjaGlsZHJlbiIsIkZvb3RlciIsImdldFRva2VuIiwidG9rZW4iLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsInVzZUVmZmVjdCIsIkxvZ2luIiwiTmF2YmFyIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJTZXR0aW5ncyIsIlBhZ2VzIiwic2V0VXJsIiwiQXJ0aWNsZXMiLCJUb2FzdCIsIk1lbnUiLCJuYW1lIiwiUGFnZSIsIkxheW91dCIsInVybCIsInN0YXRlIiwiYWpheCIsImRpc3BhdGNoIiwibmF2Iiwic3dhcFBhZ2UiLCJwYXRobmFtZSIsIm1hdGNoIiwidW5kZWZpbmVkIiwibWFwIiwiaSIsInVzZVN0YXRlIiwiTmF2TGkiLCJMb2dvdXQiLCJ1c2VMb2NhdGlvbiIsImNsZWFyRGF0YSIsImVuYWJsZSIsInNldEVuYWJsZSIsInNldFRpbWVvdXQiLCJoYW5kbGVMb2dvdXQiLCJQYWdlc0NvbnRhaW5lciIsIkNvbnRlbnROYXYiLCJwdXNoRGF0YSIsImF4aW9zIiwiYXhpb3NTZXQiLCJjcmVhdGUiLCJhcnRpY2xlcyIsImRhdGEiLCJwYWdlcyIsImdldCIsInRoZW4iLCJyZXMiLCJoZWFkZXIiLCJ0YWciLCJkcmF3IiwiY29sU2l6ZSIsIkJ1dHRvbiIsIlR4dElucHV0IiwiYmFzZVVybCIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIl90b2tlbiIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiY2F0Y2giLCJTZWxlY3RvciIsInNldHRpbmdzIiwiY2hhbmdlIiwic2V0Q2hhbmdlIiwiY2hhbmdlTmFtZSIsInYiLCJwcm9wIiwic2V0TGFuZGluZyIsIkxhbmRpbmciLCJBdXRob3IiLCJEZXNjcmlwdGlvbiIsIlNpdGVOYW1lIiwiY3JlYXRlU2xpY2UiLCJub3RpZmljYXRpb25TbGljZSIsImluaXRpYWxTdGF0ZSIsIm1zZyIsInN0YXR1cyIsInR5cGUiLCJ0aW1lb3V0IiwicmVkdWNlcnMiLCJub3RpZnkiLCJhY3Rpb24iLCJjbGVhclRpbWVvdXQiLCJwYXlsb2FkIiwibm90aWZ5Q2xvc2UiLCJhY3Rpb25zIiwicmVkdWNlciIsImFqYXhTbGljZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiY29uZmlndXJlU3RvcmUiLCJub3RpZmljYXRpb24iLCJidG5DbHMiLCJkaXZDbHMiLCJzZXRWaWV3Iiwic2V0IiwidGVzdCIsInNwbGl0IiwiTnVtYmVyIiwiaCIsImsiLCJmaWVsZCIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCJFeHBhbmQiLCJjbHMiLCJsaXN0IiwiYWN0aXZlIiwiaWNvbkNscyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImxhc3RFdmVudCIsInNldExhc3RFdmVudCIsImxhbmRpbmciLCJmaW5kIiwiaWQiLCJhdmFpYmxlIiwiZmlsdGVyIiwidG9nZ2xlU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJGVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiYmx1ciIsImNoYW5nZVZhbHVlIiwiQ2xvc2UiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDbHMiLCJsYWJlbENscyIsIm9uQ2hhbmdlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVGb2N1cyIsIkNvbXBvbmVudCIsIkh3IiwicmVuZGVyIiwiSGVsbG8iLCJNYWluIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsInN0b3JlIiwiUHJvdmlkZXIiLCJNYWluQWRtaW4iLCJDbHMiXSwic291cmNlUm9vdCI6IiJ9