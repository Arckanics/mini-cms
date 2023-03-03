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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Settings */ "./assets/react/components/admin/pages/Settings.jsx");
/* harmony import */ var _pages_Pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Pages */ "./assets/react/components/admin/pages/Pages.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/admin/Footer.jsx");
/* harmony import */ var _redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");
/* harmony import */ var _pages_Articles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Articles */ "./assets/react/components/admin/pages/Articles.jsx");












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
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    url === "" ? swapPage((0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.cleanPath)(location.pathname)) : null;
    location.pathname.match(/\/$/, '') ? nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.cleanPath)(location.pathname)) : undefined;
  }, []);
  const swapPage = path => {
    dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_9__.setUrl)(path));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "mini-admin/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), Menu.map(({
    path,
    Page
  }, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
      key: i,
      path: `mini-admin${path}`,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        Pages: Menu,
        swapPage: swapPage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Page, {
        url: path
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)))
    });
  })));
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
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.data.articles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !data ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
        name: 'articles',
        data: res.data
      }));
    }) : ajax.get('/refresh');
  }, []);
  const header = [{
    tag: 'title',
    name: 'titre',
    draw: 'value',
    colSize: 8
  }, {
    tag: 'page_id',
    name: 'page',
    draw: 'value',
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
  }, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_ContentNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/ajaxSlice */ "./assets/react/components/admin/redux/reducers/ajaxSlice.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    ajax: _reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_0__["default"]
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
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Functions/app */ "./assets/react/Functions/app.js");


const ContentNav = ({
  header,
  data
}) => {
  const setView = (value, set = 'value') => {
    switch (set) {
      case 'bool':
      case 'boolean':
        return value ? 'true' : 'false';
      case 'value':
      case 'number':
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
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.capitalize)(h.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-1`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.capitalize)('actions'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-inner flex flex-col overflow-auto overflow-x-hidden"
  }, data && (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.isArray)(data) ? data.map((field, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: "content-row"
  }, header.map(({
    tag,
    draw,
    colSize
  }, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: k,
    className: `row-field colsize-${colSize}`
  }, setView(field[tag], draw))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `row-field colsize-1`
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.capitalize)('actions')))) : null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sT0FBRSxDQUNGLENBQ0E7QUFDYjtBQUVBLGlFQUFlRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RDO0FBRXpCLE1BQU14QyxNQUFNLEdBQUcsQ0FBQztFQUFFQztBQUFJLENBQUMsS0FBSztFQUMxQixvQkFDRTtJQUFLLFNBQVMsRUFBRUEsR0FBSTtJQUFDLEtBQUssRUFBQyw0QkFBNEI7SUFBQyxPQUFPLEVBQUM7RUFBYyxnQkFDNUU7SUFBTSxDQUFDLEVBQUM7RUFBdUQsRUFBRSxDQUM3RDtBQUVWLENBQUM7QUFFRCxpRUFBZUQsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWSTtBQUV6QixNQUFNekUsTUFBTSxHQUFHLENBQUM7RUFBRWtIO0FBQUksQ0FBQyxLQUFLO0VBQzFCLG9CQUNFO0lBQUssU0FBUyxFQUFFQSxHQUFJO0lBQUMsS0FBSyxFQUFDLDRCQUE0QjtJQUFDLE9BQU8sRUFBQztFQUFXLGdCQUN6RTtJQUFNLENBQUMsRUFBQztFQUF5TCxFQUFFLENBQy9MO0FBRVYsQ0FBQztBQUVELGlFQUFlbEgsTUFBTTs7Ozs7Ozs7Ozs7O0FDVnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9CdXR0b24uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ29udGVudE5hdi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9QYWdlc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9oZWxsb1dvcmxkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRXhwYW5kLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIixcblx0XCIuL21haW5fYWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiXHJcbi8vIHVybCBkZSBiYXNlIHBvdXIgZmFjaWxpdGVyIGxhIG5hdmlnYXRpb25cclxuXHJcbmNvbnN0IHNldEJhc2VVcmwgPSAoZXh0ID0gXCJcIikgPT4ge1xyXG4gIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZXh0Lmxlbmd0aCA+IDAgPyBcIi9cIiA6IG51bGx9JHtleHR9YFxyXG59XHJcblxyXG4vLyBuZXR0b2llIGwndXJsIGZvdXJuaVxyXG5cclxuY29uc3QgY2xlYW5QYXRoID0gcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC8kfFxcLyQvLCAnJykucmVwbGFjZSgvXFwvXFwvL2csICcvJylcclxuXHJcbi8vIHByZW1pw6hyZSBsZXR0cmUgZW4gbWFqdXNjdWxlXHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHR4dCkgPT4ge1xyXG4gIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG4vLyBvYnRlbmlyIGwndXJsIHJlbGF0aXZlXHJcblxyXG5jb25zdCBlbmRPZlBhdGggPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJ1xcLycpKVxyXG59XHJcblxyXG4vLyBjaGFuZ2UgbGUgdGl0cmUgZGFucyBsJ29uZ2xldFxyXG5cclxuY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gIG4gPSBuLnJlcGxhY2UoL1xcLy9nLCBcIlwiKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gYE1pbmktQ01TIC0+ICR7KG4ubGVuZ3RoID4gMCA/IGNhcGl0YWxpemUobikgOiBcIlNldHRpbmdzXCIpfWBcclxuICByZXR1cm47XHJcbn1cclxuXHJcbi8vIHRyb3V2ZSB1bmUgZXhwcmVzc2lvbiByw6lndWxpw6hyZVxyXG5cclxuY29uc3Qgc3RyQ29udGFpbnMgPSAoc3RyLCBzZWFyY2gpID0+IHtcclxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKVxyXG4gIHJldHVybiBzdHIuc2VhcmNoKHJlKSA+PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gVGFibGVhdXggXHJcblxyXG5jb25zdCBpc0FycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEJhc2VVcmwsIGNhcGl0YWxpemUsIHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGgsIHN0ckNvbnRhaW5zLCBjbGVhblBhdGgsIGlzSlNPTiwgaXNBcnJheSB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPSdhZG1pbi1mb290ZXInPkZvb3RlcjwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vcGFnZXMvTG9naW4nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vcGFnZXMvU2V0dGluZ3MnXHJcbmltcG9ydCBQYWdlcyBmcm9tICcuL3BhZ2VzL1BhZ2VzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IEFydGljbGVzIGZyb20gJy4vcGFnZXMvQXJ0aWNsZXMnXHJcblxyXG5cclxuY29uc3QgTWVudSA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiUGFnZXNcIiwgcGF0aDogXCIvcGFnZXNcIiwgUGFnZTogUGFnZXN9LFxyXG4gIHtuYW1lOiBcIkFydGljbGVzXCIsIHBhdGg6IFwiL2FydGljbGVzXCIsIFBhZ2U6IEFydGljbGVzfSxcclxuXVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC51cmwpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXJsID09PSBcIlwiID8gc3dhcFBhZ2UoY2xlYW5QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSkgOiBudWxsXHJcbiAgICBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXFwvJC8sICcnKSA/IG5hdihjbGVhblBhdGgobG9jYXRpb24ucGF0aG5hbWUpKSA6IHVuZGVmaW5lZFxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzd2FwUGFnZSA9IChwYXRoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRVcmwocGF0aCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJsYXlvdXRcIj5cclxuICAgICAgPFJvdXRlcz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nbWluaS1hZG1pbi9sb2dpbicgZWxlbWVudD17PExvZ2luLz59IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgTWVudS5tYXAoKHtwYXRoLFBhZ2V9LGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZSBrZXk9e2l9IHBhdGg9e2BtaW5pLWFkbWluJHtwYXRofWB9IGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIFBhZ2VzPXtNZW51fSBzd2FwUGFnZT17c3dhcFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8UGFnZSB1cmw9e3BhdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Sb3V0ZXM+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi91aS9OYXZMaSdcclxuaW1wb3J0IExvZ291dCBmcm9tICcuLi8uLi9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCdcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgY2xlYXJEYXRhIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe1BhZ2VzLCBzd2FwUGFnZX0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBbZW5hYmxlLCBzZXRFbmFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShlbmRPZlBhdGgobG9jYXRpb24ucGF0aG5hbWUpKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEVuYWJsZSh0cnVlKVxyXG4gICAgfSwgNTApXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjbGVhckRhdGEoKSlcclxuICAgIHVwZGF0ZVRpdGxlKG4pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J25hdmJhcicgY2xhc3NOYW1lPXshZW5hYmxlID8gJ2ZhZGVPdXRMZWZ0JyA6ICcnfT5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJuYXZiYXItdG9wXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdi10aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPk1pbmktQ01TPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFBhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAoe25hbWUscGF0aH0saSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8TmF2TGkga2V5PXtpfSB0bz17YC9taW5pLWFkbWluJHtwYXRofWAucmVwbGFjZSgvXFwvJC9nLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt1cGRhdGVUaXRsZShwYXRoKTsgc3dhcFBhZ2UocGF0aCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rLXR4dCc+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaT59KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bmF2IGlkPVwibmF2LW9wdHNcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdpY29uLW5hdic+XHJcbiAgICAgICAgICA8TmF2TGkgdG89XCIvbWluaS1hZG1pbi9sb2dvdXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PjxMb2dvdXQgQ2xzPVwic3ZnLWljb25cIiAvPjwvTmF2TGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnLi4vdWkvUGFnZXNDb250YWluZXInXHJcbmltcG9ydCBDb250ZW50TmF2IGZyb20gJy4uL3VpL0NvbnRlbnROYXYnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoeyB1cmwgfSkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ2FydGljbGVzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICd2YWx1ZScsIGNvbFNpemU6IDh9LFxyXG4gICAge3RhZzogJ3BhZ2VfaWQnLCBuYW1lOiAncGFnZScsIGRyYXc6ICd2YWx1ZScsIGNvbFNpemU6IDF9LFxyXG4gICAge3RhZzogJ3B1Ymxpc2hlZCcsIG5hbWU6ICdWaXNpYmxlJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdpc19keW5hbWljJywgbmFtZTogJ0R5bmFtaXF1ZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydBcnRpY2xlcyd9PlxyXG4gICAgICB7IGRhdGEgJiYgPENvbnRlbnROYXYgZGF0YT17ZGF0YX0gaGVhZGVyPXtoZWFkZXJ9IGFjdGlvbj17bnVsbH0gLz4gfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvQnV0dG9uJ1xyXG5pbXBvcnQgVHh0SW5wdXQgZnJvbSAnLi4vdWkvVHh0SW5wdXQnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vRnVuY3Rpb25zL1NlY3VyaXR5J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICBjb25zdCBiYXNlVXJsID0gJy9taW5pLWFkbWluJ1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0fSlcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICBfdG9rZW46IGdldFRva2VuKCksXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBhamF4LnBvc3QoJy9sb2dpbicsIHsgLi4uc3RhdGUgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gcmVzLmRhdGEudXJsID09PSBcIi9cIiA/IGAke2Jhc2VVcmx9YCA6IGAke2Jhc2VVcmx9LyR7cmVzLmRhdGEudXJsfWBcclxuICAgICAgICBkaXNwYXRjaChzZXRVcmwoXCJcIikpXHJcbiAgICAgICAgbmF2KGNsZWFuUGF0aCh1cmwpKVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIG5hdihgJHtiYXNlVXJsfS9sb2dpbmApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gc3RhdGVcclxuXHJcbiAgcmV0dXJuIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBpZD1cImxvZ2luXCIgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIGJnLXdoaXRlIGNvbG9yLWRhcmsnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tdGl0bGUnPkNvbm5leGlvbjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLWNsZWFyLW91dGxpbmUnPlxyXG4gICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNvbXB0ZShFbWFpbClcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cImFkcmVzc2UgZW1haWwuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPFR4dElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiTW90IGRlIHBhc3NlXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJtb3QgZGUgcGFzc2UuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBkaXZDbHM9J3B0LTEgcC00J1xyXG4gICAgICBidG5DbHM9J2J0biBwcmltYXJ5IHctZnVsbCdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQ29udGVudE5hdiBmcm9tICcuLi91aS9Db250ZW50TmF2J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgUGFnZXNDb250YWluZXIgZnJvbSAnLi4vdWkvUGFnZXNDb250YWluZXInXHJcblxyXG5jb25zdCBQYWdlcyA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXR9KVxyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFkYXRhID8gYWpheC5nZXQodXJsKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAncGFnZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pIDogYWpheC5nZXQoJy9yZWZyZXNoJylcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAge3RhZzogJ3RpdGxlJywgbmFtZTogJ3RpdHJlJywgZHJhdzogJ3ZhbHVlJywgY29sU2l6ZTogNn0sXHJcbiAgICB7dGFnOiAnc2V0dGluZ3MnLCBuYW1lOiAnbGFuZGluZycsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX1cclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYWdlcyd9PlxyXG4gICAgICB7IGRhdGEgJiYgPENvbnRlbnROYXYgZGF0YT17ZGF0YX0gaGVhZGVyPXtoZWFkZXJ9IGFjdGlvbj17bnVsbH0gLz4gfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4uL3VpL1NlbGVjdG9yJ1xyXG5pbXBvcnQgVHh0SW5wdXQgZnJvbSAnLi4vdWkvVHh0SW5wdXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91aS9CdXR0b24nXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuLi91aS9QYWdlc0NvbnRhaW5lcidcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKHsgdXJsIH0pID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldH0pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnNldHRpbmdzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFsgY2hhbmdlLCBzZXRDaGFuZ2UgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodikgPT4ge1xyXG4gICAgc3dpdGNoICh2KSB7XHJcbiAgICAgIGNhc2UgJ0F1dGhvcic6XHJcbiAgICAgICAgcmV0dXJuICdhdXRldXInO1xyXG4gICAgICBjYXNlICdEZXNjcmlwdGlvbic6IFxyXG4gICAgICAgIHJldHVybiAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjYXNlICdTaXRlTmFtZSc6XHJcbiAgICAgICAgcmV0dXJuICdub20gZHUgc2l0ZSc7XHJcbiAgICAgIGNhc2UgJ0xhbmRpbmcnOlxyXG4gICAgICAgIHJldHVybiAncGFnZSBkXFwnYWNjdWVpbCc7XHJcbiAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBwcm9wKSA9PiB7XHJcbiAgICAhY2hhbmdlID8gc2V0Q2hhbmdlKHRydWUpIDogbnVsbFxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiB7Li4uZGF0YSwgW3Byb3BdOiBlLnRhcmdldC52YWx1ZX0gfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRMYW5kaW5nID0gKHYpID0+IHtcclxuICAgICFjaGFuZ2UgPyBzZXRDaGFuZ2UodHJ1ZSkgOiBudWxsXHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IHsuLi5kYXRhLCBMYW5kaW5nOiB2fSB9KSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYXJhbcOodHJlcyd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMyBweS0zIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YSA/IDw+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdBdXRob3InKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9IGlkPVwiQXV0aG9yXCIgdmFsdWU9e2RhdGEuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdEZXNjcmlwdGlvbicpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIikpfSBpZD1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e2RhdGEuRGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnU2l0ZU5hbWUnKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpKX0gaWQ9XCJTaXRlTmFtZVwiIHZhbHVlPXtkYXRhLlNpdGVOYW1lfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdG9yIGNscz0nc2Vjb25kYXJ5JyBpY29uQ2xzPSdpY29uJyBhY3RpdmU9e2RhdGEuTGFuZGluZ30gbGlzdD17ZGF0YS5QYWdlc30gYWN0aW9uPXtzZXRMYW5kaW5nfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdibG9jayBweS0yJz5QYWdlPC9oMj5cclxuICAgICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBjaGFuZ2UgJiYgPEJ1dHRvbiBidG5DbHM9eydidG4gc2Vjb25kYXJ5IGZhZGVJbkxlZnQnfSBkaXZDbHM9e1wicC0yIGZsZXgganVzdGlmeS1lbmRcIn0+U2F1dmVnYXJkZXI8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBjbGVhblBhdGgsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHNldEJhc2VVcmwgfSBmcm9tICcuLi8uLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgYWpheFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhamF4JyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVybDogJycsXHJcbiAgICBiYXNlVXJsOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICBheGlvczoge1xyXG4gICAgICBiYXNlVVJMOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWE1MSHR0cFJlcXVlc3QnOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge31cclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRVcmw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVybCA9IGVuZE9mUGF0aChjbGVhblBhdGgoYCR7YWN0aW9uLnBheWxvYWR9YCkpXHJcbiAgICB9LFxyXG4gICAgcHVzaERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgc3RhdGUuZGF0YSA9IHsuLi5zdGF0ZS5kYXRhLCBbbmFtZV06IGRhdGF9XHJcbiAgICB9LFxyXG4gICAgY2xlYXJEYXRhOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuZGF0YSA9IHt9XHJcbiAgICAgIHN0YXRlLnVybCA9IFwiXCJcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRVcmwsIHB1c2hEYXRhLCBjbGVhckRhdGEgfSA9IGFqYXhTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhamF4U2xpY2UucmVkdWNlciIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGFqYXhTbGljZSBmcm9tICcuL3JlZHVjZXJzL2FqYXhTbGljZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBhamF4OiBhamF4U2xpY2UsXHJcbiAgfSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ0bkNscywgZGl2Q2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbHN9PnsgY2hpbGRyZW4gfTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUsIGlzQXJyYXkgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgQ29udGVudE5hdiA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHNldFZpZXcgPSAodmFsdWUsIHNldCA9ICd2YWx1ZScpID0+IHtcclxuICAgIHN3aXRjaCAoc2V0KSB7XHJcbiAgICAgIGNhc2UgJ2Jvb2wnOlxyXG4gICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnO1xyXG4gICAgICBjYXNlICd2YWx1ZSc6XHJcbiAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudC1uYXYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1uYXYtaGVhZGVyJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXIubWFwKChoLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9YH0+e2NhcGl0YWxpemUoaC5uYW1lKX08L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMWB9PntjYXBpdGFsaXplKCdhY3Rpb25zJyl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1pbm5lciBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteC1oaWRkZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgJiYgaXNBcnJheShkYXRhKSA/IGRhdGEubWFwKChmaWVsZCwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nY29udGVudC1yb3cnPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLGRyYXcpfTwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLTFgfT57Y2FwaXRhbGl6ZSgnYWN0aW9ucycpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE5hdiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUGFnZXNDb250YWluZXIgPSAoe2NoaWxkcmVuICwgdGl0bGV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSBtYi04Jz57dGl0bGV9PC9kaXY+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc0NvbnRhaW5lciIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FeHBhbmQnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgU2VsZWN0b3IgPSAoeyBjbHMsIGxpc3QsIGFjdGl2ZSwgaWNvbkNscywgY2hpbGRyZW4sIGFjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsYXN0RXZlbnQsIHNldExhc3RFdmVudF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBsYW5kaW5nID0gbGlzdC5maW5kKGkgPT4gaS5pZCA9PT0gYWN0aXZlKVxyXG4gIGNvbnN0IGF2YWlibGUgPSBsaXN0LmZpbHRlcihpID0+IGkuaWQgIT09IGFjdGl2ZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgJGVsID0gZS50YXJnZXRcclxuICAgIHdoaWxlICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RvcicpID09IGZhbHNlKSB7XHJcbiAgICAgICRlbCA9ICRlbC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICBpZiAoKGUudHlwZSA9PT0gJ2NsaWNrJyAmJiBsYXN0RXZlbnQgPT09ICdjbGljaycpIHx8IGUudHlwZSAhPT0gJ2NsaWNrJykge1xyXG4gICAgICBzZXRUb2dnbGUoIXRvZ2dsZSlcclxuICAgICAgbGFzdEV2ZW50ID09PSAnY2xpY2snICYmIHRvZ2dsZSA9PT0gdHJ1ZSA/ICRlbC5ibHVyKCkgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgc2V0TGFzdEV2ZW50KGUudHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlLHYpID0+IHtcclxuICAgIHRvZ2dsZVNlbGVjdChlKTtcclxuICAgIGFjdGlvbih2KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgPyAnc2VsZWN0b3IgJyArIGNscyA6ICdzZWxlY3Rvcid9IG9uRm9jdXM9e3RvZ2dsZVNlbGVjdH0gb25CbHVyPXt0b2dnbGVTZWxlY3R9IHRhYkluZGV4PXstMX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3B0IGFjdGl2ZScgdmFsdWU9e2xhbmRpbmcuaWR9IG9uQ2xpY2s9e3RvZ2dsZSA/IHRvZ2dsZVNlbGVjdCA6IG51bGx9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKGxhbmRpbmcudGl0bGUpfTwvZGl2PjxFeHBhbmQgY2xzPXtpY29uQ2xzfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgdG9nZ2xlID8gPGRpdiBjbGFzc05hbWU9J29wdC13cmFwcGVyJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYXZhaWJsZS5tYXAoKHtpZCx0aXRsZX0saykgPT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nb3B0JyB2YWx1ZT17aWR9IG9uQ2xpY2s9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlLGlkKX0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUodGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRJbnB1dCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICByZXR1cm4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL0xheW91dFwiXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluL3JlZHV4L3N0b3JlJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5mdW5jdGlvbiBNYWluQWRtaW4oKSB7XHJcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPExheW91dC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBFeHBhbmQgPSAoeyBjbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Y2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA3MTEgMjQwIDQ3MWw0My00MyAxOTcgMTk4IDE5Ny0xOTcgNDMgNDMtMjQwIDIzOVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJsZW5ndGgiLCJjbGVhblBhdGgiLCJwYXRoIiwicmVwbGFjZSIsImNhcGl0YWxpemUiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJlbmRPZlBhdGgiLCJsYXN0SW5kZXhPZiIsInVwZGF0ZVRpdGxlIiwibiIsImRvY3VtZW50IiwidGl0bGUiLCJzdHJDb250YWlucyIsInN0ciIsInNlYXJjaCIsInJlIiwiUmVnRXhwIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsImlzQXJyYXkiLCJhcnJheSIsIkFycmF5IiwiUmVhY3QiLCJDb250ZW50IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJnZXRUb2tlbiIsInRva2VuIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJMb2dpbiIsIk5hdmJhciIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiU2V0dGluZ3MiLCJQYWdlcyIsInNldFVybCIsIkFydGljbGVzIiwiTWVudSIsIm5hbWUiLCJQYWdlIiwiTGF5b3V0IiwidXJsIiwic3RhdGUiLCJhamF4IiwiZGlzcGF0Y2giLCJuYXYiLCJzd2FwUGFnZSIsInBhdGhuYW1lIiwibWF0Y2giLCJ1bmRlZmluZWQiLCJtYXAiLCJpIiwidXNlU3RhdGUiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiY2xlYXJEYXRhIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsIlBhZ2VzQ29udGFpbmVyIiwiQ29udGVudE5hdiIsInB1c2hEYXRhIiwiYXhpb3MiLCJheGlvc1NldCIsImNyZWF0ZSIsImRhdGEiLCJhcnRpY2xlcyIsImdldCIsInRoZW4iLCJyZXMiLCJoZWFkZXIiLCJ0YWciLCJkcmF3IiwiY29sU2l6ZSIsIkJ1dHRvbiIsIlR4dElucHV0IiwiYmFzZVVybCIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIl90b2tlbiIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiY2F0Y2giLCJwYWdlcyIsIlNlbGVjdG9yIiwic2V0dGluZ3MiLCJjaGFuZ2UiLCJzZXRDaGFuZ2UiLCJjaGFuZ2VOYW1lIiwidiIsInByb3AiLCJzZXRMYW5kaW5nIiwiTGFuZGluZyIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJjcmVhdGVTbGljZSIsImFqYXhTbGljZSIsImluaXRpYWxTdGF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsImJ0bkNscyIsImRpdkNscyIsInNldFZpZXciLCJzZXQiLCJoIiwiayIsImZpZWxkIiwiTmF2TGluayIsInRvIiwib25DbGljayIsIkV4cGFuZCIsImNscyIsImxpc3QiLCJhY3RpdmUiLCJpY29uQ2xzIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibGFzdEV2ZW50Iiwic2V0TGFzdEV2ZW50IiwibGFuZGluZyIsImZpbmQiLCJpZCIsImF2YWlibGUiLCJmaWx0ZXIiLCJ0b2dnbGVTZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCIkZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJ0eXBlIiwiYmx1ciIsImNoYW5nZVZhbHVlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlucHV0Q2xzIiwibGFiZWxDbHMiLCJvbkNoYW5nZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlRm9jdXMiLCJDb21wb25lbnQiLCJIdyIsInJlbmRlciIsIkhlbGxvIiwiTWFpbiIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTWFpbkFkbWluIiwiQ2xzIl0sInNvdXJjZVJvb3QiOiIifQ==