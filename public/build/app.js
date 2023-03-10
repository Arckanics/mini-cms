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
/* harmony import */ var _redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/NotificationSlice */ "./assets/react/components/admin/redux/reducers/NotificationSlice.js");










const Login = () => {
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  const baseUrl = '/mini-admin';
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.ajax.axios);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const ajax = axios__WEBPACK_IMPORTED_MODULE_9__["default"].create({
    ...axiosSet
  });
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
      let url = res.data.url === "/" ? `${baseUrl}` : `${baseUrl}/${res.data.url}`;
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_5__.setUrl)(""));
      dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_7__.notify)({
        type: "info",
        msg: `Bienvenue ${state.email}`,
        timeout: setTimeout(() => dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_7__.notifyClose)()), 2500)
      }));
      nav((0,_Functions_app__WEBPACK_IMPORTED_MODULE_6__.cleanPath)(url));
    }).catch(res => {
      dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_7__.notify)({
        type: "warning",
        msg: "connection incorrecte",
        timeout: setTimeout(() => dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_7__.notifyClose)()), 2500)
      }));
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
    timeout: null
  },
  reducers: {
    notify: (state, action) => {
      state.timeout ? clearTimeout(state.timeout) : null;
      const {
        type,
        msg,
        timeout
      } = action.payload;
      state = {
        msg: msg,
        type: type,
        status: "in",
        timeout: timeout
      };
      return state;
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
      state = {
        ...state,
        timeout: null,
        status: 'out'
      };
      return state;
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
/* harmony import */ var _redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/reducers/NotificationSlice */ "./assets/react/components/admin/redux/reducers/NotificationSlice.js");









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
  const close = () => dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyClose)());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `toast ${type} ${status}`,
    onMouseEnter: () => dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyKeep)({
      event: 'stay'
    })),
    onMouseLeave: () => dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyKeep)({
      event: 'close',
      func: setTimeout(() => dispatch((0,_redux_reducers_NotificationSlice__WEBPACK_IMPORTED_MODULE_8__.notifyClose)()), 1400)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLGdCQUN6RTtJQUFNLENBQUMsRUFBQztFQUF5TCxFQUFFLENBQy9MO0FBRVYsQ0FBQztBQUVELGlFQUFleEksTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWSTtBQUV6QixNQUFNOEUsT0FBTyxHQUFHLENBQUM7RUFBRWM7QUFBSSxDQUFDLEtBQUs7RUFDM0Isb0JBQ0U7SUFBTSxTQUFTLEVBQUdBLEdBQUs7SUFBQyxLQUFLLEVBQUMsNEJBQTRCO0lBQUMsT0FBTyxFQUFDO0VBQVcsZ0JBQzVFO0lBQU0sQ0FBQyxFQUFDO0VBQStqQixFQUFFLENBQ3JrQjtBQUVWLENBQUM7QUFFRCxpRUFBZWQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRztBQUV6QixNQUFNb0MsT0FBTyxHQUFHLENBQUM7RUFBRXRCO0FBQUksQ0FBQyxLQUFLO0VBQzNCLG9CQUNFO0lBQUssU0FBUyxFQUFFQSxHQUFJO0lBQUMsS0FBSyxFQUFDLDRCQUE0QjtJQUFDLE9BQU8sRUFBQztFQUFXLGdCQUN6RTtJQUFNLENBQUMsRUFBQztFQUFzaUIsRUFBRyxDQUM3aUI7QUFFVixDQUFDO0FBRUQsaUVBQWVzQixPQUFPOzs7Ozs7Ozs7Ozs7QUNWdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWNtcy8gXFwuW2p0XXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9GdW5jdGlvbnMvYXBwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9Gb290ZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRnVuY3Rpb25zL1NlY3VyaXR5LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9wYWdlcy9BcnRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9wYWdlcy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9wYWdlcy9QYWdlcy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9wYWdlcy9TZXR0aW5ncy5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9yZWR1Y2Vycy9Ob3RpZmljYXRpb25TbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0NvbnRlbnROYXYuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvTmF2TGkuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvUGFnZXNDb250YWluZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvU2VsZWN0b3IuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvVG9hc3QuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvVHh0SW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvaGVsbG9Xb3JsZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Nsb3NlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRGFuZ2VyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRXhwYW5kLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvSW5mby5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9XYXJuaW5nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIixcblx0XCIuL21haW5fYWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiXHJcbi8vIHVybCBkZSBiYXNlIHBvdXIgZmFjaWxpdGVyIGxhIG5hdmlnYXRpb25cclxuXHJcbmNvbnN0IHNldEJhc2VVcmwgPSAoZXh0ID0gXCJcIikgPT4ge1xyXG4gIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZXh0Lmxlbmd0aCA+IDAgPyBcIi9cIiA6IG51bGx9JHtleHR9YFxyXG59XHJcblxyXG4vLyBuZXR0b2llIGwndXJsIGZvdXJuaVxyXG5cclxuY29uc3QgY2xlYW5QYXRoID0gcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC8kfFxcLyQvLCAnJykucmVwbGFjZSgvXFwvXFwvL2csICcvJylcclxuXHJcbi8vIHByZW1pw6hyZSBsZXR0cmUgZW4gbWFqdXNjdWxlXHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHR4dCkgPT4ge1xyXG4gIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG4vLyBvYnRlbmlyIGwndXJsIHJlbGF0aXZlXHJcblxyXG5jb25zdCBlbmRPZlBhdGggPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJ1xcLycpKVxyXG59XHJcblxyXG4vLyBjaGFuZ2UgbGUgdGl0cmUgZGFucyBsJ29uZ2xldFxyXG5cclxuY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gIG4gPSBuLnJlcGxhY2UoL1xcLy9nLCBcIlwiKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gYE1pbmktQ01TIC0+ICR7KG4ubGVuZ3RoID4gMCA/IGNhcGl0YWxpemUobikgOiBcIlNldHRpbmdzXCIpfWBcclxuICByZXR1cm47XHJcbn1cclxuXHJcbi8vIHRyb3V2ZSB1bmUgZXhwcmVzc2lvbiByw6lndWxpw6hyZVxyXG5cclxuY29uc3Qgc3RyQ29udGFpbnMgPSAoc3RyLCBzZWFyY2gpID0+IHtcclxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKVxyXG4gIHJldHVybiBzdHIuc2VhcmNoKHJlKSA+PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuXHJcbi8vIGNvbXBhcmUgZGV1eCBvYmpldHMgSlMgKHRvdXQgdHlwZXMpXHJcblxyXG5jb25zdCBhcmVFcXVhbCA9IChvYmoxLG9iajIpID0+IHtcclxuICBpZiAodHlwZW9mIG9iajEgIT09IHR5cGVvZiBvYmoyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJlRXF1YWwob2JqMVtpXSxvYmoyW2ldKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSkge1xyXG4gICAgY29uc3QgZW50MSA9IE9iamVjdC5lbnRyaWVzKG9iajEpXHJcbiAgICBjb25zdCBlbnQyID0gT2JqZWN0LmVudHJpZXMob2JqMilcclxuICAgIGlmIChlbnQxLmxlbmd0aCAhPT0gZW50Mi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmoxKSkge1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQob2JqMltrZXldKSkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwob2JqMVtrZXldLG9iajJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBvYmoxID09PSBvYmoyXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IGTDqWZpbmllXHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSAob2JqKSA9PiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWRcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gb2JqZXQgSlNcclxuXHJcbmNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4gdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiAhaXNBcnJheShvYmplY3QpXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBUYWJsZWF1eCBcclxuXHJcbmNvbnN0IGlzQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSlcclxufVxyXG5cclxuZXhwb3J0IHsgc2V0QmFzZVVybCwgY2FwaXRhbGl6ZSwgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCwgc3RyQ29udGFpbnMsIGNsZWFuUGF0aCwgaXNKU09OLCBpc0FycmF5LCBhcmVFcXVhbCB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPSdhZG1pbi1mb290ZXInPkZvb3RlcjwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vcGFnZXMvTG9naW4nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vcGFnZXMvU2V0dGluZ3MnXHJcbmltcG9ydCBQYWdlcyBmcm9tICcuL3BhZ2VzL1BhZ2VzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IEFydGljbGVzIGZyb20gJy4vcGFnZXMvQXJ0aWNsZXMnXHJcbmltcG9ydCBUb2FzdCBmcm9tICcuL3VpL1RvYXN0J1xyXG5cclxuXHJcbmNvbnN0IE1lbnUgPSBbXHJcbiAge25hbWU6IFwiUGFyYW1ldHJlc1wiLCBwYXRoOiBcIi9cIiwgUGFnZTogU2V0dGluZ3N9LFxyXG4gIHtuYW1lOiBcIlBhZ2VzXCIsIHBhdGg6IFwiL3BhZ2VzXCIsIFBhZ2U6IFBhZ2VzfSxcclxuICB7bmFtZTogXCJBcnRpY2xlc1wiLCBwYXRoOiBcIi9hcnRpY2xlc1wiLCBQYWdlOiBBcnRpY2xlc30sXHJcbl1cclxuXHJcbmNvbnN0IExheW91dCA9ICgpID0+IHtcclxuICBjb25zdCB1cmwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXgudXJsKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVybCA9PT0gXCJcIiA/IHN3YXBQYWdlKGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogbnVsbFxyXG4gICAgbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyQvLCAnJykgPyBuYXYoY2xlYW5QYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSkgOiB1bmRlZmluZWRcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc3dhcFBhZ2UgPSAocGF0aCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0VXJsKHBhdGgpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibGF5b3V0XCI+XHJcbiAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9J21pbmktYWRtaW4vbG9naW4nIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIE1lbnUubWFwKCh7cGF0aCxQYWdlfSxpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUga2V5PXtpfSBwYXRoPXtgbWluaS1hZG1pbiR7cGF0aH1gfSBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBQYWdlcz17TWVudX0gc3dhcFBhZ2U9e3N3YXBQYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2UgdXJsPXtwYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8VG9hc3QvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpL0xvZ291dC5qc3gnXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNsZWFyRGF0YSB9IGZyb20gJy4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHtQYWdlcywgc3dhcFBhZ2V9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRFbmFibGUodHJ1ZSlcclxuICAgIH0sIDUwKVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2xlYXJEYXRhKCkpXHJcbiAgICB1cGRhdGVUaXRsZShuKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSduYXZiYXInIGNsYXNzTmFtZT17IWVuYWJsZSA/ICdmYWRlT3V0TGVmdCcgOiAnJ30+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibmF2YmFyLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5NaW5pLUNNUzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHtuYW1lLHBhdGh9LGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPE5hdkxpIGtleT17aX0gdG89e2AvbWluaS1hZG1pbiR7cGF0aH1gLnJlcGxhY2UoL1xcLyQvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlVGl0bGUocGF0aCk7IHN3YXBQYWdlKHBhdGgpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay10eHQnPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGk+fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4uL3VpL1BhZ2VzQ29udGFpbmVyJ1xyXG5pbXBvcnQgQ29udGVudE5hdiBmcm9tICcuLi91aS9Db250ZW50TmF2J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IEFydGljbGVzID0gKHsgdXJsIH0pID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldH0pXHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5hcnRpY2xlcylcclxuICBjb25zdCBwYWdlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnBhZ2VzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWFydGljbGVzID8gYWpheC5nZXQodXJsKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnYXJ0aWNsZXMnLCBkYXRhOiByZXMuZGF0YSB9KSlcclxuICAgIH0pIDogYWpheC5nZXQoJy9yZWZyZXNoJylcclxuXHJcbiAgICAhcGFnZXMgPyBhamF4LmdldCgnL3BhZ2VzJylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3BhZ2VzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IG51bGxcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGVhZGVyID0gW1xyXG4gICAge3RhZzogJ3RpdGxlJywgbmFtZTogJ3RpdHJlJywgZHJhdzogJ3ZhbHVlJywgY29sU2l6ZTogOH0sXHJcbiAgICB7dGFnOiAncGFnZScsIG5hbWU6ICdwYWdlJywgZHJhdzogJ29iamVjdC50aXRsZScsIGNvbFNpemU6IDF9LFxyXG4gICAge3RhZzogJ3B1Ymxpc2hlZCcsIG5hbWU6ICdWaXNpYmxlJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdpc19keW5hbWljJywgbmFtZTogJ0R5bmFtaXF1ZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX1cclxuICBdXHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnQXJ0aWNsZXMnfT5cclxuICAgICAgeyBhcnRpY2xlcyAmJiA8Q29udGVudE5hdiBkYXRhPXthcnRpY2xlc30gaGVhZGVyPXtoZWFkZXJ9IGFjdGlvbj17bnVsbH0gLz4gfVxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvQnV0dG9uJ1xyXG5pbXBvcnQgVHh0SW5wdXQgZnJvbSAnLi4vdWkvVHh0SW5wdXQnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vRnVuY3Rpb25zL1NlY3VyaXR5J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL05vdGlmaWNhdGlvblNsaWNlJ1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIGNvbnN0IGJhc2VVcmwgPSAnL21pbmktYWRtaW4nXHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXR9KVxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7IC4uLnN0YXRlIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgbGV0IHVybCA9IHJlcy5kYXRhLnVybCA9PT0gXCIvXCIgPyBgJHtiYXNlVXJsfWAgOiBgJHtiYXNlVXJsfS8ke3Jlcy5kYXRhLnVybH1gXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0VXJsKFwiXCIpKVxyXG4gICAgICAgIGRpc3BhdGNoKG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcImluZm9cIiwgXHJcbiAgICAgICAgICBtc2c6IGBCaWVudmVudWUgJHtzdGF0ZS5lbWFpbH1gLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMjUwMClcclxuICAgICAgICB9KSlcclxuICAgICAgICBuYXYoY2xlYW5QYXRoKHVybCkpXHJcbiAgICAgIH0pLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLCBcclxuICAgICAgICAgIG1zZzogXCJjb25uZWN0aW9uIGluY29ycmVjdGVcIixcclxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDI1MDApXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbmF2KGAke2Jhc2VVcmx9L2xvZ2luYClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBzdGF0ZVxyXG5cclxuICByZXR1cm4gPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwibG9naW5cIiBjbGFzc05hbWU9J3JvdW5kZWQtbGcgYmctd2hpdGUgY29sb3ItZGFyaycgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+Q29ubmV4aW9uPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtY2xlYXItb3V0bGluZSc+XHJcbiAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ29tcHRlKEVtYWlsKVwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiYWRyZXNzZSBlbWFpbC4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VHh0SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIm1vdCBkZSBwYXNzZS4uLlwiXHJcbiAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCcgbGFiZWxDbHM9J2xhYmVsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGRpdkNscz0ncHQtMSBwLTQnXHJcbiAgICAgIGJ0bkNscz0nYnRuIHByaW1hcnkgdy1mdWxsJ1xyXG4gICAgPk1lIENvbm5lY3RlcjwvQnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBDb250ZW50TmF2IGZyb20gJy4uL3VpL0NvbnRlbnROYXYnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgcHVzaERhdGEgfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuLi91aS9QYWdlc0NvbnRhaW5lcidcclxuXHJcbmNvbnN0IFBhZ2VzID0gKHsgdXJsIH0pID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldH0pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnBhZ2VzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWRhdGEgPyBhamF4LmdldCh1cmwpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkgOiBhamF4LmdldCgnL3JlZnJlc2gnKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBbXHJcbiAgICB7dGFnOiAndGl0bGUnLCBuYW1lOiAndGl0cmUnLCBkcmF3OiAndmFsdWUnLCBjb2xTaXplOiA2fSxcclxuICAgIHt0YWc6ICdzZXR0aW5ncycsIG5hbWU6ICdsYW5kaW5nJywgZHJhdzogJ2Jvb2wnLCBjb2xTaXplOiAxfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J1BhZ2VzJ30+XHJcbiAgICAgIHsgZGF0YSAmJiA8Q29udGVudE5hdiBkYXRhPXtkYXRhfSBoZWFkZXI9e2hlYWRlcn0gYWN0aW9uPXtudWxsfSAvPiB9XHJcbiAgICA8L1BhZ2VzQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXMiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhcmVFcXVhbCwgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IFNlbGVjdG9yIGZyb20gJy4uL3VpL1NlbGVjdG9yJ1xyXG5pbXBvcnQgVHh0SW5wdXQgZnJvbSAnLi4vdWkvVHh0SW5wdXQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91aS9CdXR0b24nXHJcbmltcG9ydCBQYWdlc0NvbnRhaW5lciBmcm9tICcuLi91aS9QYWdlc0NvbnRhaW5lcidcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKHsgdXJsIH0pID0+IHtcclxuICBjb25zdCBheGlvc1NldCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5heGlvcylcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHsuLi5heGlvc1NldH0pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnNldHRpbmdzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFsgY2hhbmdlLCBzZXRDaGFuZ2UgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFsgaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGUgXSA9IHVzZVN0YXRlKHt9KVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZSh7Li4ucmVzLmRhdGF9KVxyXG4gICAgICB9KSA6ICgpID0+IHtcclxuICAgICAgICBhamF4LmdldCgnL3JlZnJlc2gnKVxyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZSh7Li4uZGF0YX0pXHJcbiAgICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgY2hhbmdlTmFtZSA9ICh2KSA9PiB7XHJcbiAgICBzd2l0Y2ggKHYpIHtcclxuICAgICAgY2FzZSAnQXV0aG9yJzpcclxuICAgICAgICByZXR1cm4gJ2F1dGV1cic7XHJcbiAgICAgIGNhc2UgJ0Rlc2NyaXB0aW9uJzogXHJcbiAgICAgICAgcmV0dXJuICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNhc2UgJ1NpdGVOYW1lJzpcclxuICAgICAgICByZXR1cm4gJ25vbSBkdSBzaXRlJztcclxuICAgICAgY2FzZSAnTGFuZGluZyc6XHJcbiAgICAgICAgcmV0dXJuICdwYWdlIGRcXCdhY2N1ZWlsJztcclxuICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHByb3ApID0+IHtcclxuICAgIGNvbnN0IG5EYXRhID0gey4uLmRhdGEsIFtwcm9wXTogZS50YXJnZXQudmFsdWV9XHJcbiAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IG5EYXRhIH0pKVxyXG4gICAgY29uc29sZS5sb2coYXJlRXF1YWwoaW5pdGlhbFN0YXRlLCBuRGF0YSkpO1xyXG4gICAgIWFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpID8gc2V0Q2hhbmdlKHRydWUpIDogc2V0Q2hhbmdlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0TGFuZGluZyA9ICh2KSA9PiB7XHJcbiAgICBjb25zdCBuRGF0YSA9IHsuLi5kYXRhLCBMYW5kaW5nOiB2fVxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiBuRGF0YSB9KSlcclxuICAgIGNvbnNvbGUubG9nKGFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYXJhbcOodHJlcyd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMyBweS0zIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YSA/IDw+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdBdXRob3InKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9IGlkPVwiQXV0aG9yXCIgdmFsdWU9e2RhdGEuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCBzZWNvbmRhcnknIGRpdkNscz0naW5wdXQtd3JhcCBwLTIgc2Vjb25kYXJ5JyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsICdEZXNjcmlwdGlvbicpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIikpfSBpZD1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e2RhdGEuRGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwgc2Vjb25kYXJ5JyBkaXZDbHM9J2lucHV0LXdyYXAgcC0yIHNlY29uZGFyeScgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnU2l0ZU5hbWUnKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpKX0gaWQ9XCJTaXRlTmFtZVwiIHZhbHVlPXtkYXRhLlNpdGVOYW1lfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdG9yIGNscz0nc2Vjb25kYXJ5JyBpY29uQ2xzPSdpY29uJyBhY3RpdmU9e2RhdGEuTGFuZGluZ30gbGlzdD17ZGF0YS5QYWdlc30gYWN0aW9uPXtzZXRMYW5kaW5nfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdibG9jayBweS0yJz5QYWdlPC9oMj5cclxuICAgICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBjaGFuZ2UgJiYgPEJ1dHRvbiBidG5DbHM9eydidG4gc2Vjb25kYXJ5IGZhZGVJbkxlZnQnfSBkaXZDbHM9e1wicC0yIGZsZXgganVzdGlmeS1lbmRcIn0+U2F1dmVnYXJkZXI8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYWdlc0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwibm90aWZpY2F0aW9uXCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBtc2c6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwib3V0XCIsXHJcbiAgICB0eXBlOiBcImluZm9cIixcclxuICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbm90aWZ5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS50aW1lb3V0ID8gY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXQpIDogbnVsbFxyXG4gICAgICBjb25zdCB7dHlwZSxtc2csdGltZW91dH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbXNnOiBtc2csXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBzdGF0dXMgOiBcImluXCIsXHJcbiAgICAgICAgdGltZW91dDogdGltZW91dCxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5S2VlcDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qge2V2ZW50LCBmdW5jfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGlmIChldmVudCA9PT0gXCJzdGF5XCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBmdW5jLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlDbG9zZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgc3RhdHVzOiAnb3V0J1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IG5vdGlmeSwgbm90aWZ5Q2xvc2UsIG5vdGlmeUtlZXAgfSA9IG5vdGlmaWNhdGlvblNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvblNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgc2V0QmFzZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBhamF4U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2FqYXgnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdXJsOiAnJyxcclxuICAgIGJhc2VVcmw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgIGF4aW9zOiB7XHJcbiAgICAgIGJhc2VVUkw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYTUxIdHRwUmVxdWVzdCc6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYWpheFNsaWNlIGZyb20gJy4vcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgbm90aWZpY2F0aW9uU2xpY2UgZnJvbSBcIi4vcmVkdWNlcnMvTm90aWZpY2F0aW9uU2xpY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBhamF4OiBhamF4U2xpY2UsXHJcbiAgICBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvblNsaWNlXHJcbiAgfSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ0bkNscywgZGl2Q2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbHN9PnsgY2hpbGRyZW4gfTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUsIGlzQXJyYXkgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvU3VjY2VzcydcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuXHJcblxyXG5jb25zdCBDb250ZW50TmF2ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcclxuXHJcbiAgY29uc3Qgc2V0VmlldyA9ICh2YWx1ZSwgc2V0ID0gJ3ZhbHVlJywgdGFnKSA9PiB7XHJcbiAgICBcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15vYmplY3RcXC4uKy9nKS50ZXN0KHNldCk6XHJcbiAgICAgICAgbGV0IG5hbWUgPSBzZXQuc3BsaXQoJy4nKVtzZXQuc3BsaXQoJy4nKS5sZW5ndGgtMV1cclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGFbYCR7dGFnfXNgXSlbTnVtYmVyKHZhbHVlKS0xXVtuYW1lXVxyXG4gICAgICBjYXNlIG5ldyBSZWdFeHAoL15ib29sL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICByZXR1cm4gdmFsdWUgPyA8U3VjY2VzcyBjbHM9J2gtNSB3LTUgbS1hdXRvIGljb24gc3VjY2VzcycgLz4gOiA8Q2xvc2UgY2xzPSdoLTUgdy01IG0tYXV0byBpY29uIGZhbHNlJyAvPlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudC1uYXYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1uYXYtaGVhZGVyJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXIubWFwKChoLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9YH0+e2NhcGl0YWxpemUoaC5uYW1lKX08L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMWB9PntjYXBpdGFsaXplKCdhY3Rpb25zJyl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1pbm5lciBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteC1oaWRkZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgJiYgaXNBcnJheShkYXRhKSA/IGRhdGEubWFwKChmaWVsZCwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT0nY29udGVudC1yb3cnPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoeyB0YWcsIGRyYXcsIGNvbFNpemUgfSwgaykgPT4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLSR7Y29sU2l6ZX1gfT57c2V0VmlldyhmaWVsZFt0YWddLGRyYXcsdGFnKX08L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3ctZmllbGQgY29sc2l6ZS0xYH0+e2NhcGl0YWxpemUoJ2FjdGlvbnMnKX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PikgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnROYXYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTmF2TGkgPSAoeyBjaGlsZHJlbiwgdG8sIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIHRvPXt0b30gb25DbGljaz17b25DbGlja30gZW5kPnsgY2hpbGRyZW4gfTwvTmF2TGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFBhZ2VzQ29udGFpbmVyID0gKHtjaGlsZHJlbiAsIHRpdGxlfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+e3RpdGxlfTwvZGl2PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZXNDb250YWluZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEV4cGFuZCBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRXhwYW5kJ1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuXHJcbmNvbnN0IFNlbGVjdG9yID0gKHsgY2xzLCBsaXN0LCBhY3RpdmUsIGljb25DbHMsIGNoaWxkcmVuLCBhY3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbGFzdEV2ZW50LCBzZXRMYXN0RXZlbnRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgbGFuZGluZyA9IGxpc3QuZmluZChpID0+IGkuaWQgPT09IGFjdGl2ZSlcclxuICBjb25zdCBhdmFpYmxlID0gbGlzdC5maWx0ZXIoaSA9PiBpLmlkICE9PSBhY3RpdmUpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0ICRlbCA9IGUudGFyZ2V0XHJcbiAgICB3aGlsZSAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0b3InKSA9PSBmYWxzZSkge1xyXG4gICAgICAkZWwgPSAkZWwucGFyZW50Tm9kZVxyXG4gICAgfVxyXG4gICAgaWYgKChlLnR5cGUgPT09ICdjbGljaycgJiYgbGFzdEV2ZW50ID09PSAnY2xpY2snKSB8fCBlLnR5cGUgIT09ICdjbGljaycpIHtcclxuICAgICAgc2V0VG9nZ2xlKCF0b2dnbGUpXHJcbiAgICAgIGxhc3RFdmVudCA9PT0gJ2NsaWNrJyAmJiB0b2dnbGUgPT09IHRydWUgPyAkZWwuYmx1cigpIDogbnVsbFxyXG4gICAgfSBcclxuICAgIHNldExhc3RFdmVudChlLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVmFsdWUgPSAoZSx2KSA9PiB7XHJcbiAgICB0b2dnbGVTZWxlY3QoZSk7XHJcbiAgICBhY3Rpb24odik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzID8gJ3NlbGVjdG9yICcgKyBjbHMgOiAnc2VsZWN0b3InfSBvbkZvY3VzPXt0b2dnbGVTZWxlY3R9IG9uQmx1cj17dG9nZ2xlU2VsZWN0fSB0YWJJbmRleD17LTF9PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdCBhY3RpdmUnIHZhbHVlPXtsYW5kaW5nLmlkfSBvbkNsaWNrPXt0b2dnbGUgPyB0b2dnbGVTZWxlY3QgOiBudWxsfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZShsYW5kaW5nLnRpdGxlKX08L2Rpdj48RXhwYW5kIGNscz17aWNvbkNsc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRvZ2dsZSA/IDxkaXYgY2xhc3NOYW1lPSdvcHQtd3JhcHBlcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YWlibGUubWFwKCh7aWQsdGl0bGV9LGspID0+IFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J29wdCcgdmFsdWU9e2lkfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmFsdWUoZSxpZCl9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPntjYXBpdGFsaXplKHRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0Nsb3NlJ1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvSW5mbydcclxuaW1wb3J0IFN1Y2Nlc3MgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL1N1Y2Nlc3MnXHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9XYXJuaW5nJ1xyXG5pbXBvcnQgRGFuZ2VyIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9EYW5nZXInXHJcbmltcG9ydCB7IG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvTm90aWZpY2F0aW9uU2xpY2UnXHJcblxyXG5jb25zdCBUb2FzdCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb24pXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBtc2csIHR5cGUsIHN0YXR1cyB9ID0gZGF0YVxyXG4gIGNvbnN0IGljb25zID0ge1xyXG4gICAgJ0luZm8nOiA8SW5mbyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnU3VjY2Vzcyc6IDxTdWNjZXNzIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdXYXJuaW5nJzogPFdhcm5pbmcgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ0Rhbmdlcic6IDxEYW5nZXIgY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2B0b2FzdCAke3R5cGV9ICR7c3RhdHVzfWB9IG9uTW91c2VFbnRlcj17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdzdGF5J30pKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBkaXNwYXRjaChub3RpZnlLZWVwKHtldmVudDogJ2Nsb3NlJywgZnVuYzogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgMTQwMCl9KSApfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9hc3QtdGl0bGUtaWNvbic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25zW2NhcGl0YWxpemUodHlwZSldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWJ0bic+PGJ1dHRvbiBvbkNsaWNrPXtjbG9zZX0+PENsb3NlIGNscz1cImgtNSB3LTVcIiAvPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LWNvbnRlbnQnPlxyXG4gICAgICAgIHsgbXNnIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRJbnB1dCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICByZXR1cm4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL0xheW91dFwiXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluL3JlZHV4L3N0b3JlJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5mdW5jdGlvbiBNYWluQWRtaW4oKSB7XHJcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPExheW91dC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDbG9zZSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA2MTggMjcwIDgyOHEtOSA5LTIxIDl0LTIxLTlxLTktOS05LTIxdDktMjFsMjEwLTIxMC0yMTAtMjEwcS05LTktOS0yMXQ5LTIxcTktOSAyMS05dDIxIDlsMjEwIDIxMCAyMTAtMjEwcTktOSAyMS05dDIxIDlxOSA5IDkgMjF0LTkgMjFMNTIyIDU3NmwyMTAgMjEwcTkgOSA5IDIxdC05IDIxcS05IDktMjEgOXQtMjEtOUw0ODAgNjE4WlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb3NlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGFuZ2VyID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xNy43NSA0MnEtLjYgMC0xLjE3NS0uMjUtLjU3NS0uMjUtLjk3NS0uNjVsLTguNy04LjdxLS40LS40LS42NS0uOTc1VDYgMzAuMjV2LTEyLjVxMC0uNi4yNS0xLjE3NS4yNS0uNTc1LjY1LS45NzVsOC43LTguN3EuNC0uNC45NzUtLjY1VDE3Ljc1IDZoMTIuNXEuNiAwIDEuMTc1LjI1LjU3NS4yNS45NzUuNjVsOC43IDguN3EuNC40LjY1Ljk3NVQ0MiAxNy43NXYxMi41cTAgLjYtLjI1IDEuMTc1LS4yNS41NzUtLjY1Ljk3NWwtOC43IDguN3EtLjQuNC0uOTc1LjY1VDMwLjI1IDQyWk0yNCAzMy45NXEuNyAwIDEuMjI1LS41MjUuNTI1LS41MjUuNTI1LTEuMjI1IDAtLjctLjUyNS0xLjIyNVEyNC43IDMwLjQ1IDI0IDMwLjQ1cS0uNyAwLTEuMjI1LjUyNS0uNTI1LjUyNS0uNTI1IDEuMjI1IDAgLjcuNTI1IDEuMjI1LjUyNS41MjUgMS4yMjUuNTI1Wm0wLTcuMnEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNS4xcTAtLjY1LS40MjUtMS4wNzVRMjQuNjUgMTMuNiAyNCAxMy42cS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXYxMC4xNXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVaTTE3Ljc1IDM5aDEyLjVMMzkgMzAuMjV2LTEyLjVMMzAuMjUgOWgtMTIuNUw5IDE3Ljc1djEyLjVaTTI0IDI0WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFuZ2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRXhwYW5kID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNzExIDI0MCA0NzFsNDMtNDMgMTk3IDE5OCAxOTctMTk3IDQzIDQzLTI0MCAyMzlaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBhbmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmZvID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjQuMTUgMzRxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTkuMDVxMC0uNi0uNDUtMS4wMjVRMjQuNzUgMjIgMjQuMTUgMjJxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djkuMDVxMCAuNi40NSAxLjAyNS40NS40MjUgMS4wNS40MjVaTTI0IDE4LjNxLjcgMCAxLjE3NS0uNDUuNDc1LS40NS40NzUtMS4xNXQtLjQ3NS0xLjJRMjQuNyAxNSAyNCAxNXEtLjcgMC0xLjE3NS41LS40NzUuNS0uNDc1IDEuMnQuNDc1IDEuMTVxLjQ3NS40NSAxLjE3NS40NVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcgMCAxMi01dDUtMTJxMC03LTUtMTJUMjQgN3EtNyAwLTEyIDVUNyAyNHEwIDcgNSAxMnQxMiA1WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdWNjZXNzID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJtMjEuMDUgMjguNTUtNC45LTQuOXEtLjQ1LS40NS0xLjEtLjQ1LS42NSAwLTEuMTUuNS0uNS41LS41IDEuMTUgMCAuNjUuNSAxLjFsNi4xIDYuMXEuNDUuNDUgMS4wNS40NS42IDAgMS4wNS0uNDVsMTItMTJxLjQ1LS40NS40MjUtMS4xLS4wMjUtLjY1LS40NzUtMS4xLS40NS0uNS0xLjEyNS0uNXQtMS4xNzUuNVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcuMjUgMCAxMi4xMjUtNC44NzVUNDEgMjRxMC03LjI1LTQuODc1LTEyLjEyNVQyNCA3cS03LjI1IDAtMTIuMTI1IDQuODc1VDcgMjRxMCA3LjI1IDQuODc1IDEyLjEyNVQyNCA0MVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBXYXJuaW5nID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk00LjYgNDJxLS40NSAwLS43NzUtLjJ0LS41MjUtLjU1cS0uMi0uMzUtLjIyNS0uNzI1LS4wMjUtLjM3NS4yMjUtLjc3NWwxOS40LTMzLjVxLjI1LS40LjU3NS0uNTc1UTIzLjYgNS41IDI0IDUuNXEuNCAwIC43MjUuMTc1LjMyNS4xNzUuNTc1LjU3NWwxOS40IDMzLjVxLjI1LjQuMjI1Ljc3NS0uMDI1LjM3NS0uMjI1LjcyNXQtLjUyNS41NXEtLjMyNS4yLS43NzUuMlptMi42LTNoMzMuNkwyNCAxMFptMTctMi44NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NSAwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNVEyMi43IDM0IDIyLjcgMzQuNjVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0wLTUuNTVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTguMnEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djguMnEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabS0uMi02LjFaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FybmluZyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInNldEJhc2VVcmwiLCJleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImxlbmd0aCIsImNsZWFuUGF0aCIsInBhdGgiLCJyZXBsYWNlIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic3RyIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJhcmVFcXVhbCIsIm9iajEiLCJvYmoyIiwiaXNBcnJheSIsImkiLCJpc09iamVjdCIsImVudDEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZW50MiIsImtleSIsInZhbHVlIiwiaXNEZWZpbmVkIiwib2JqIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJSZWFjdCIsIkNvbnRlbnQiLCJjaGlsZHJlbiIsIkZvb3RlciIsImdldFRva2VuIiwidG9rZW4iLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsInVzZUVmZmVjdCIsIkxvZ2luIiwiTmF2YmFyIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJTZXR0aW5ncyIsIlBhZ2VzIiwic2V0VXJsIiwiQXJ0aWNsZXMiLCJUb2FzdCIsIk1lbnUiLCJuYW1lIiwiUGFnZSIsIkxheW91dCIsInVybCIsInN0YXRlIiwiYWpheCIsImRpc3BhdGNoIiwibmF2Iiwic3dhcFBhZ2UiLCJwYXRobmFtZSIsIm1hdGNoIiwibWFwIiwidXNlU3RhdGUiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiY2xlYXJEYXRhIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsIlBhZ2VzQ29udGFpbmVyIiwiQ29udGVudE5hdiIsInB1c2hEYXRhIiwiYXhpb3MiLCJheGlvc1NldCIsImNyZWF0ZSIsImFydGljbGVzIiwiZGF0YSIsInBhZ2VzIiwiZ2V0IiwidGhlbiIsInJlcyIsImhlYWRlciIsInRhZyIsImRyYXciLCJjb2xTaXplIiwiQnV0dG9uIiwiVHh0SW5wdXQiLCJub3RpZnkiLCJub3RpZnlDbG9zZSIsImJhc2VVcmwiLCJzZXRTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJfdG9rZW4iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidHlwZSIsIm1zZyIsInRpbWVvdXQiLCJjYXRjaCIsIlNlbGVjdG9yIiwic2V0dGluZ3MiLCJjaGFuZ2UiLCJzZXRDaGFuZ2UiLCJpbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJjaGFuZ2VOYW1lIiwidiIsInByb3AiLCJuRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRMYW5kaW5nIiwiTGFuZGluZyIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJjcmVhdGVTbGljZSIsIm5vdGlmaWNhdGlvblNsaWNlIiwic3RhdHVzIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJjbGVhclRpbWVvdXQiLCJwYXlsb2FkIiwibm90aWZ5S2VlcCIsImV2ZW50IiwiZnVuYyIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiYWpheFNsaWNlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJjb25maWd1cmVTdG9yZSIsIm5vdGlmaWNhdGlvbiIsImJ0bkNscyIsImRpdkNscyIsIlN1Y2Nlc3MiLCJDbG9zZSIsInNldFZpZXciLCJzZXQiLCJ0ZXN0Iiwic3BsaXQiLCJOdW1iZXIiLCJoIiwiayIsImZpZWxkIiwiTmF2TGluayIsInRvIiwib25DbGljayIsIkV4cGFuZCIsImNscyIsImxpc3QiLCJhY3RpdmUiLCJpY29uQ2xzIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwibGFzdEV2ZW50Iiwic2V0TGFzdEV2ZW50IiwibGFuZGluZyIsImZpbmQiLCJpZCIsImF2YWlibGUiLCJmaWx0ZXIiLCJ0b2dnbGVTZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCIkZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJibHVyIiwiY2hhbmdlVmFsdWUiLCJJbmZvIiwiV2FybmluZyIsIkRhbmdlciIsImljb25zIiwiY2xvc2UiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDbHMiLCJsYWJlbENscyIsIm9uQ2hhbmdlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVGb2N1cyIsIkNvbXBvbmVudCIsIkh3IiwicmVuZGVyIiwiSGVsbG8iLCJNYWluIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsInN0b3JlIiwiUHJvdmlkZXIiLCJNYWluQWRtaW4iLCJDbHMiXSwic291cmNlUm9vdCI6IiJ9