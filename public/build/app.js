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
/* harmony export */   "sortAsc": () => (/* binding */ sortAsc),
/* harmony export */   "sortDes": () => (/* binding */ sortDes),
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





const Articles = ({
  url
}) => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
    ...axiosSet
  });
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.articles);
  const pages = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !articles ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'articles',
        data: res.data
      }));
    }) : ajax.get('/refresh');
    !pages ? ajax.get('/pages').then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_3__.pushData)({
        name: 'pages',
        data: res.data
      }));
    }) : null;
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
    colSize: 1
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.PagesContainer, {
    title: 'Articles'
  }, articles && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui__WEBPACK_IMPORTED_MODULE_1__.ContentNav, {
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





const Pages = ({
  url
}) => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
    ...axiosSet
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.ajax.data.pages);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
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
    draw: 'string',
    colSize: 5
  }, {
    tag: 'sort',
    name: 'ordre',
    draw: 'number',
    colSize: 1
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






const Settings = ({
  url
}) => {
  const axiosSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.axios);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_5__["default"].create({
    ...axiosSet
  });
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.ajax.data.settings);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const [change, setChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [initialState, setInitialState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !data ? ajax.get(url).then(res => {
      dispatch((0,_redux_reducers_ajaxSlice__WEBPACK_IMPORTED_MODULE_4__.pushData)({
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






const ContentNav = ({
  header,
  data
}) => {
  const [search, updateSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const sFields = {};
    header.map(h => sFields[h.tag] = "");
    updateSearch({
      ...sFields
    });
  }, []);
  const setView = (value, set = 'value', tag) => {
    switch (true) {
      case new RegExp(/^object\..+/g).test(set):
        let name = set.split('.')[set.split('.').length - 1];
        return (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.ajax.data[`${tag}s`])[Number(value) - 1][name]);
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
  const searchHandleChange = (e, field) => {
    console.log(e, field);
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
    switch (true) {
      case new RegExp(/^num/gi).test(h.draw):
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: `search-field colsize-${h.colSize} `
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NumberInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: k,
          cls: `secondary`,
          inpCls: "input-number secondary",
          change: e => searchHandleChange(e, h.tag),
          value: search[h.tag],
          name: h.name
        }));
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: k,
          className: `search-field colsize-${h.colSize}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
          type: "text",
          className: "input-txt secondary w-full",
          onChange: e => searchHandleChange(e, h.tag),
          placeholder: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.capitalize)(h.name),
          value: search[h.tag]
        }));
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `header-field colsize-2`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    className: `row-field colsize-2`
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
    className: cls + ' input-number-wrap flex justify-items-stretch flex-nowrap relative'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "arrow-btn",
    target: "down"
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: inpCls + ' colsize-10',
    onChange: change,
    value: value + 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "arrow-btn",
    target: "up"
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
/* harmony export */   "ContentNav": () => (/* reexport safe */ _ContentNav__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "NavLi": () => (/* reexport safe */ _NavLi__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "NumberInput": () => (/* reexport safe */ _NumberInput__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "PagesContainer": () => (/* reexport safe */ _PagesContainer__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Selector": () => (/* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_5__["default"]),
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
/* harmony import */ var _components_admin_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin/redux */ "./assets/react/components/admin/redux/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





function MainAdmin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _components_admin_redux__WEBPACK_IMPORTED_MODULE_2__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDekU7SUFBTSxDQUFDLEVBQUM7RUFBc2lCLEVBQUcsQ0FDN2lCO0FBRVYsQ0FBQztBQUVELGlFQUFldUIsT0FBTzs7Ozs7Ozs7Ozs7O0FDVnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvQXJ0aWNsZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvUGFnZXMuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcmVkdXgvcmVkdWNlcnMvbm90aWZpY2F0aW9uU2xpY2UuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9DU1JGSW5wdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQ29udGVudE5hdi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OdW1iZXJJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9QYWdlc0NvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9TZWxlY3Rvci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9Ub2FzdC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRMYWJlbElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvaGVsbG9Xb3JsZC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0Nsb3NlLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRGFuZ2VyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvRXhwYW5kLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvSW5mby5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL0xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvaWNvbi9pY29uLXVpL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9XYXJuaW5nLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIixcblx0XCIuL21haW5fYWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiXHJcbi8vIHVybCBkZSBiYXNlIHBvdXIgZmFjaWxpdGVyIGxhIG5hdmlnYXRpb25cclxuXHJcbmNvbnN0IHNldEJhc2VVcmwgPSAoZXh0ID0gXCJcIikgPT4ge1xyXG4gIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7ZXh0Lmxlbmd0aCA+IDAgPyBcIi9cIiA6IG51bGx9JHtleHR9YFxyXG59XHJcblxyXG4vLyBuZXR0b2llIGwndXJsIGZvdXJuaVxyXG5cclxuY29uc3QgY2xlYW5QYXRoID0gcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC8kfFxcLyQvLCAnJykucmVwbGFjZSgvXFwvXFwvL2csICcvJylcclxuXHJcbi8vIHByZW1pw6hyZSBsZXR0cmUgZW4gbWFqdXNjdWxlXHJcblxyXG5jb25zdCBjYXBpdGFsaXplID0gKHR4dCkgPT4ge1xyXG4gIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxyXG59XHJcblxyXG4vLyBvYnRlbmlyIGwndXJsIHJlbGF0aXZlXHJcblxyXG5jb25zdCBlbmRPZlBhdGggPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJ1xcLycpKVxyXG59XHJcblxyXG4vLyBjaGFuZ2UgbGUgdGl0cmUgZGFucyBsJ29uZ2xldFxyXG5cclxuY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gIG4gPSBuLnJlcGxhY2UoL1xcLy9nLCBcIlwiKVxyXG4gIGRvY3VtZW50LnRpdGxlID0gYE1pbmktQ01TIC0+ICR7KG4ubGVuZ3RoID4gMCA/IGNhcGl0YWxpemUobikgOiBcIlNldHRpbmdzXCIpfWBcclxuICByZXR1cm47XHJcbn1cclxuXHJcbi8vIHRyb3V2ZSB1bmUgZXhwcmVzc2lvbiByw6lndWxpw6hyZVxyXG5cclxuY29uc3Qgc3RyQ29udGFpbnMgPSAoc3RyLCBzZWFyY2gpID0+IHtcclxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKVxyXG4gIHJldHVybiBzdHIuc2VhcmNoKHJlKSA+PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuXHJcbi8vIGNvbXBhcmUgZGV1eCBvYmpldHMgSlMgKHRvdXQgdHlwZXMpXHJcblxyXG5jb25zdCBhcmVFcXVhbCA9IChvYmoxLG9iajIpID0+IHtcclxuICBpZiAodHlwZW9mIG9iajEgIT09IHR5cGVvZiBvYmoyKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgIGlmIChvYmoxLmxlbmd0aCAhPT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghYXJlRXF1YWwob2JqMVtpXSxvYmoyW2ldKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSkge1xyXG4gICAgY29uc3QgZW50MSA9IE9iamVjdC5lbnRyaWVzKG9iajEpXHJcbiAgICBjb25zdCBlbnQyID0gT2JqZWN0LmVudHJpZXMob2JqMilcclxuICAgIGlmIChlbnQxLmxlbmd0aCAhPT0gZW50Mi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmoxKSkge1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHZhbHVlKSAmJiBpc0RlZmluZWQob2JqMltrZXldKSkge1xyXG4gICAgICAgIGlmICghYXJlRXF1YWwob2JqMVtrZXldLG9iajJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiBvYmoxID09PSBvYmoyXHJcbn1cclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IGTDqWZpbmllXHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSAob2JqKSA9PiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWRcclxuXHJcbi8vIHZlcmlmaWUgc2kgbGEgdmFyaWFibGUgZXN0IHVuIEpTT04gdmFsaWRlXHJcblxyXG5jb25zdCBpc0pTT04gPSAoanNvbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBKU09OLnBhcnNlKGpzb24pXHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy8gdmVyaWZpZSBzaSBsYSB2YXJpYWJsZSBlc3QgdW4gb2JqZXQgSlNcclxuXHJcbmNvbnN0IGlzT2JqZWN0ID0gKG9iamVjdCkgPT4gdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiAhaXNBcnJheShvYmplY3QpXHJcblxyXG4vLyB2ZXJpZmllIHNpIGxhIHZhcmlhYmxlIGVzdCB1biBUYWJsZWF1eCBcclxuXHJcbmNvbnN0IGlzQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSlcclxufVxyXG5cclxuY29uc3Qgc29ydEFzYyA9IChhLGIpID0+IHtcclxuICByZXR1cm4gYS5zb3J0IDwgYi5zb3J0ID8gLTEgOiBhLnNvcnQgPiBiLnNvcnQgPyAxIDogMFxyXG59XHJcblxyXG5jb25zdCBzb3J0RGVzID0gKGEsYikgPT4ge1xyXG4gIHJldHVybiBhLnNvcnQgPiBiLnNvcnQgPyAtMSA6IGEuc29ydCA8IGIuc29ydCA/IDEgOiAwXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEJhc2VVcmwsIGNhcGl0YWxpemUsIHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGgsIHN0ckNvbnRhaW5zLCBjbGVhblBhdGgsIGlzSlNPTiwgaXNBcnJheSwgYXJlRXF1YWwsIHNvcnRBc2MsIHNvcnREZXMgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3VpJ1xyXG5pbXBvcnQgeyBzZXRVcmwgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgUGFnZXMsIFNldHRpbmdzLCBBcnRpY2xlcywgTG9naW4gfSBmcm9tICcuL3BhZ2VzJ1xyXG5cclxuY29uc3QgTWVudSA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiUGFnZXNcIiwgcGF0aDogXCIvcGFnZXNcIiwgUGFnZTogUGFnZXN9LFxyXG4gIHtuYW1lOiBcIkFydGljbGVzXCIsIHBhdGg6IFwiL2FydGljbGVzXCIsIFBhZ2U6IEFydGljbGVzfSxcclxuXVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC51cmwpXHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXJsID09PSBcIlwiID8gZGlzcGF0Y2goc2V0VXJsKFwiXCIpKSA6IG51bGxcclxuICAgIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGNsZWFuUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpIDogdW5kZWZpbmVkXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBNZW51Lm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e01lbnV9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2UgdXJsPXtwYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8VG9hc3QvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpL0xvZ291dC5qc3gnXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNsZWFyRGF0YSwgc2V0VXJsIH0gZnJvbSAnLi9yZWR1eC9yZWR1Y2Vycy9hamF4U2xpY2UnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe1BhZ2VzfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IFtlbmFibGUsIHNldEVuYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0RW5hYmxlKHRydWUpXHJcbiAgICB9LCA1MClcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIHVwZGF0ZVRpdGxlKG4pXHJcbiAgICBkaXNwYXRjaChjbGVhckRhdGEoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBkaXNwYXRjaChzZXRVcmwocGF0aCkpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay10eHQnPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGk+fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUGFnZXNDb250YWluZXIsIENvbnRlbnROYXYgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBBcnRpY2xlcyA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7Li4uYXhpb3NTZXR9KVxyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEuYXJ0aWNsZXMpXHJcbiAgY29uc3QgcGFnZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguZGF0YS5wYWdlcylcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFhcnRpY2xlcyA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ2FydGljbGVzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcblxyXG4gICAgIXBhZ2VzID8gYWpheC5nZXQoJy9wYWdlcycpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdwYWdlcycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgfSkgOiBudWxsXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICdzdHJpbmcnLCBjb2xTaXplOiA0fSxcclxuICAgIHt0YWc6ICdzb3J0JywgbmFtZTogJ29yZHJlJywgZHJhdzogJ251bWJlcicsIGNvbFNpemU6IDF9LFxyXG4gICAge3RhZzogJ3BhZ2UnLCBuYW1lOiAncGFnZScsIGRyYXc6ICdvYmplY3QudGl0bGUnLCBjb2xTaXplOiAxfSxcclxuICAgIHt0YWc6ICdwdWJsaXNoZWQnLCBuYW1lOiAnVmlzaWJsZScsIGRyYXc6ICdib29sJywgY29sU2l6ZTogMX0sXHJcbiAgICB7dGFnOiAnaXNfZHluYW1pYycsIG5hbWU6ICdEeW5hbWlxdWUnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDF9XHJcbiAgXVxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlc0NvbnRhaW5lciB0aXRsZT17J0FydGljbGVzJ30+XHJcbiAgICAgIHsgYXJ0aWNsZXMgJiYgPENvbnRlbnROYXYgZGF0YT17YXJ0aWNsZXN9IGhlYWRlcj17aGVhZGVyfSBhY3Rpb249e251bGx9IC8+IH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFR4dExhYmVsSW5wdXQgfSBmcm9tICcuLi91aSdcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9GdW5jdGlvbnMvU2VjdXJpdHknXHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFVybCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IHsgY2xlYW5QYXRoIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgbm90aWZ5LCBub3RpZnlDbG9zZSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAvLyByb3V0ZXJcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgLy8gcmVkdXggLSBhamF4XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgWE1MU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4KVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLlhNTFNldC5heGlvc30pXHJcbiAgLy8gcmVkdXggLSBOb3RpZmljYXRpb25cclxuICBjb25zdCBsaWZldGltZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uLmxpZmUpXHJcbiAgLy8gc3RhdGVcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgcGFzc3dvcmQ6IG51bGwsXHJcbiAgICBfdG9rZW46IGdldFRva2VuKCksXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIHRpbWVvdXRWYXJcclxuICBsZXQgYmx1clRpbWVvdXQgPSBudWxsXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBibHVyVGltZW91dCA9IGJsdXJUaW1lb3V0ICE9PSBudWxsID8gY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KSA6IHNldFRpbWVvdXQoKCkgPT4gZS5uYXRpdmVFdmVudC5zdWJtaXR0ZXIuYmx1cigpLCA1MDApXHJcbiAgICBhamF4LnBvc3QoJy9sb2dpbicsIHsgLi4uc3RhdGUgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBsZXQgdXJsID0gcmVzLmRhdGEudXJsID09PSBcIi9cIiA/IGAke1hNTFNldC5uYXZVUkx9YCA6IGAke1hNTFNldC5uYXZVUkx9LyR7cmVzLmRhdGEudXJsfWBcclxuICAgICAgICBkaXNwYXRjaChzZXRVcmwoXCJcIikpXHJcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5KHtcclxuICAgICAgICAgIHR5cGU6IFwiaW5mb1wiLCBcclxuICAgICAgICAgIG1zZzogYEJpZW52ZW51ZSAke3N0YXRlLmVtYWlsfWAsXHJcbiAgICAgICAgICB0aW1lb3V0OiBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKG5vdGlmeUNsb3NlKCkpLCBsaWZldGltZSlcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRDb25uZWN0ZWQodHJ1ZSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5uYXYoY2xlYW5QYXRoKHVybCkpLDQwMClcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBkaXNwYXRjaChub3RpZnkoe1xyXG4gICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsIFxyXG4gICAgICAgICAgbXNnOiBcImNvbm5lY3Rpb24gaW5jb3JyZWN0ZVwiLFxyXG4gICAgICAgICAgdGltZW91dDogc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChub3RpZnlDbG9zZSgpKSwgbGlmZXRpbWUpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbmF2KGAke1hNTFNldC5uYXZVUkx9L2xvZ2luYClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBzdGF0ZVxyXG5cclxuICByZXR1cm4gPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwibG9naW5cIiBjbGFzc05hbWU9eydyb3VuZGVkLWxnIGJnLXdoaXRlIGNvbG9yLWRhcmsnKyhpc0Nvbm5lY3RlZCA/ICcgY29ubmVjdGVkJzpudWxsKX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+Q29ubmV4aW9uPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtY2xlYXItb3V0bGluZSc+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiTW90IGRlIHBhc3NlXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJtb3QgZGUgcGFzc2UuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBkaXZDbHM9J3B0LTEgcC00J1xyXG4gICAgICBidG5DbHM9J2J0biBwcmltYXJ5IHctZnVsbCdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBhZ2VzQ29udGFpbmVyLCBDb250ZW50TmF2IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBwdXNoRGF0YSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2FqYXhTbGljZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgUGFnZXMgPSAoeyB1cmwgfSkgPT4ge1xyXG4gIGNvbnN0IGF4aW9zU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmF4aW9zKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoey4uLmF4aW9zU2V0fSlcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hamF4LmRhdGEucGFnZXMpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHB1c2hEYXRhKHsgbmFtZTogJ3BhZ2VzJywgZGF0YTogcmVzLmRhdGEgfSkpXHJcbiAgICB9KSA6IGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWRlciA9IFtcclxuICAgIHt0YWc6ICd0aXRsZScsIG5hbWU6ICd0aXRyZScsIGRyYXc6ICdzdHJpbmcnLCBjb2xTaXplOiA1fSxcclxuICAgIHt0YWc6ICdzb3J0JywgbmFtZTogJ29yZHJlJywgZHJhdzogJ251bWJlcicsIGNvbFNpemU6IDF9LFxyXG4gICAge3RhZzogJ3NldHRpbmdzJywgbmFtZTogJ2xhbmRpbmcnLCBkcmF3OiAnYm9vbCcsIGNvbFNpemU6IDJ9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VzQ29udGFpbmVyIHRpdGxlPXsnUGFnZXMnfT5cclxuICAgICAgeyBkYXRhICYmIDxDb250ZW50TmF2IGRhdGE9e2RhdGF9IGhlYWRlcj17aGVhZGVyfSBhY3Rpb249e251bGx9IC8+IH1cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlcyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiwgUGFnZXNDb250YWluZXIsIFNlbGVjdG9yLCBUeHRMYWJlbElucHV0IH0gZnJvbSAnLi4vdWknXHJcbmltcG9ydCB7IGFyZUVxdWFsLCBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHB1c2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYWpheFNsaWNlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgYXhpb3NTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFqYXguYXhpb3MpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7IC4uLmF4aW9zU2V0IH0pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhLnNldHRpbmdzKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IFtjaGFuZ2UsIHNldENoYW5nZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaW5pdGlhbFN0YXRlLCBzZXRJbml0aWFsU3RhdGVdID0gdXNlU3RhdGUoe30pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhZGF0YSA/IGFqYXguZ2V0KHVybClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwdXNoRGF0YSh7IG5hbWU6ICdzZXR0aW5ncycsIGRhdGE6IHJlcy5kYXRhIH0pKVxyXG4gICAgICAgIHNldEluaXRpYWxTdGF0ZSh7IC4uLnJlcy5kYXRhIH0pXHJcbiAgICAgIH0pIDogKCkgPT4ge1xyXG4gICAgICAgIGFqYXguZ2V0KCcvcmVmcmVzaCcpXHJcbiAgICAgICAgc2V0SW5pdGlhbFN0YXRlKHsgLi4uZGF0YSB9KVxyXG4gICAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodikgPT4ge1xyXG4gICAgc3dpdGNoICh2KSB7XHJcbiAgICAgIGNhc2UgJ0F1dGhvcic6XHJcbiAgICAgICAgcmV0dXJuICdhdXRldXInO1xyXG4gICAgICBjYXNlICdEZXNjcmlwdGlvbic6XHJcbiAgICAgICAgcmV0dXJuICdkZXNjcmlwdGlvbic7XHJcbiAgICAgIGNhc2UgJ1NpdGVOYW1lJzpcclxuICAgICAgICByZXR1cm4gJ25vbSBkdSBzaXRlJztcclxuICAgICAgY2FzZSAnTGFuZGluZyc6XHJcbiAgICAgICAgcmV0dXJuICdwYWdlIGRcXCdhY2N1ZWlsJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgcHJvcCkgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEsIFtwcm9wXTogZS50YXJnZXQudmFsdWUgfVxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiBuRGF0YSB9KSlcclxuICAgIGNvbnNvbGUubG9nKGFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldExhbmRpbmcgPSAodikgPT4ge1xyXG4gICAgY29uc3QgbkRhdGEgPSB7IC4uLmRhdGEsIExhbmRpbmc6IHYgfVxyXG4gICAgZGlzcGF0Y2gocHVzaERhdGEoeyBuYW1lOiAnc2V0dGluZ3MnLCBkYXRhOiBuRGF0YSB9KSlcclxuICAgIGNvbnNvbGUubG9nKGFyZUVxdWFsKGluaXRpYWxTdGF0ZSwgbkRhdGEpKTtcclxuICAgICFhcmVFcXVhbChpbml0aWFsU3RhdGUsIG5EYXRhKSA/IHNldENoYW5nZSh0cnVlKSA6IHNldENoYW5nZShmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZXNDb250YWluZXIgdGl0bGU9eydQYXJhbcOodHJlcyd9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMyBweS0zIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YSA/IDw+XHJcbiAgICAgICAgICAgIDxUeHRMYWJlbElucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgJ0F1dGhvcicpfSBsYWJlbD17Y2FwaXRhbGl6ZShjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpKX0gaWQ9XCJBdXRob3JcIiB2YWx1ZT17ZGF0YS5BdXRob3J9IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnRGVzY3JpcHRpb24nKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpKX0gaWQ9XCJEZXNjcmlwdGlvblwiIHZhbHVlPXtkYXRhLkRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dExhYmVsSW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAnU2l0ZU5hbWUnKX0gbGFiZWw9e2NhcGl0YWxpemUoY2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpKX0gaWQ9XCJTaXRlTmFtZVwiIHZhbHVlPXtkYXRhLlNpdGVOYW1lfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsIHNlY29uZGFyeScgZGl2Q2xzPSdpbnB1dC13cmFwIHAtMiBzZWNvbmRhcnknIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNlbGVjdG9yIGNscz0nc2Vjb25kYXJ5JyBpY29uQ2xzPSdpY29uJyBhY3RpdmU9e2RhdGEuTGFuZGluZ30gbGlzdD17ZGF0YS5QYWdlc30gYWN0aW9uPXtzZXRMYW5kaW5nfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdibG9jayBweS0yJz5QYWdlPC9oMj5cclxuICAgICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICAgIDwvPiA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2hhbmdlICYmIDxCdXR0b24gYnRuQ2xzPXsnYnRuIHNlY29uZGFyeSBmYWRlSW5MZWZ0J30gZGl2Q2xzPXtcInAtMiBmbGV4IGp1c3RpZnktZW5kXCJ9PlNhdXZlZ2FyZGVyPC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFnZXNDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncyIsImltcG9ydCBQYWdlcyBmcm9tIFwiLi9QYWdlc1wiO1xyXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4vQXJ0aWNsZXNcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5cclxuZXhwb3J0IHsgUGFnZXMsIEFydGljbGVzLCBTZXR0aW5ncywgTG9naW4gfSIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IGNsZWFuUGF0aCwgZW5kT2ZQYXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgc2V0QmFzZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5leHBvcnQgY29uc3QgYWpheFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdhamF4JyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVybDogJycsXHJcbiAgICBiYXNlVXJsOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgICBuYXZVUkw6IFwiL21pbmktYWRtaW5cIixcclxuICAgIGF4aW9zOiB7XHJcbiAgICAgIGJhc2VVUkw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYTUxIdHRwUmVxdWVzdCc6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFVybDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXJsID0gZW5kT2ZQYXRoKGNsZWFuUGF0aChgJHthY3Rpb24ucGF5bG9hZH1gKSlcclxuICAgIH0sXHJcbiAgICBwdXNoRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5kYXRhID0gey4uLnN0YXRlLmRhdGEsIFtuYW1lXTogZGF0YX1cclxuICAgIH0sXHJcbiAgICBjbGVhckRhdGE6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXRhID0ge31cclxuICAgICAgc3RhdGUudXJsID0gXCJcIlxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldFVybCwgcHVzaERhdGEsIGNsZWFyRGF0YSB9ID0gYWpheFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFqYXhTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IGFqYXhTbGljZSBmcm9tIFwiLi9hamF4U2xpY2VcIjtcclxuaW1wb3J0IG5vdGlmaWNhdGlvblNsaWNlIGZyb20gXCIuL25vdGlmaWNhdGlvblNsaWNlXCI7XHJcblxyXG5leHBvcnQgeyBhamF4U2xpY2UsIG5vdGlmaWNhdGlvblNsaWNlIH0iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJub3RpZmljYXRpb25cIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIG1zZzogXCJcIixcclxuICAgIHN0YXR1czogXCJvdXRcIixcclxuICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgdGltZW91dDogbnVsbCxcclxuICAgIGxpZmU6IDQwMDBcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBub3RpZnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGNvbnN0IHt0eXBlLG1zZyx0aW1lb3V0fSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1zZzogbXNnLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgc3RhdHVzIDogXCJpblwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbm90aWZ5S2VlcDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3Qge2V2ZW50LCBmdW5jfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIGlmIChldmVudCA9PT0gXCJzdGF5XCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBudWxsLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB0aW1lb3V0OiBmdW5jLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBub3RpZnlDbG9zZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnRpbWVvdXQgPyBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dCkgOiBudWxsXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGltZW91dDogbnVsbCxcclxuICAgICAgICBzdGF0dXM6ICdvdXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBub3RpZnksIG5vdGlmeUNsb3NlLCBub3RpZnlLZWVwIH0gPSBub3RpZmljYXRpb25TbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpZmljYXRpb25TbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb25TbGljZSwgYWpheFNsaWNlIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYWpheDogYWpheFNsaWNlLFxyXG4gICAgbm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25TbGljZVxyXG4gIH0sXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ1NSRklucHV0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiB2YWx1ZT17Z2V0VG9rZW4oKX0gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENTUkZJbnB1dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNhcGl0YWxpemUsIGlzQXJyYXkgfSBmcm9tICcuLi8uLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgU3VjY2VzcyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvU3VjY2VzcydcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IE51bWJlcklucHV0IGZyb20gJy4vTnVtYmVySW5wdXQnXHJcblxyXG5cclxuY29uc3QgQ29udGVudE5hdiA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgWyBzZWFyY2gsIHVwZGF0ZVNlYXJjaCBdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzRmllbGRzID0ge31cclxuICAgIGhlYWRlci5tYXAoKGgpID0+IHNGaWVsZHNbaC50YWddID0gXCJcIilcclxuICAgIHVwZGF0ZVNlYXJjaCh7Li4uc0ZpZWxkc30pO1xyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzZXRWaWV3ID0gKHZhbHVlLCBzZXQgPSAndmFsdWUnLCB0YWcpID0+IHtcclxuICAgIFxyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm9iamVjdFxcLi4rL2cpLnRlc3Qoc2V0KTpcclxuICAgICAgICBsZXQgbmFtZSA9IHNldC5zcGxpdCgnLicpW3NldC5zcGxpdCgnLicpLmxlbmd0aC0xXVxyXG4gICAgICAgIHJldHVybiBjYXBpdGFsaXplKHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWpheC5kYXRhW2Ake3RhZ31zYF0pW051bWJlcih2YWx1ZSktMV1bbmFtZV0pXHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXmJvb2wvZykudGVzdChzZXQpOlxyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IDxTdWNjZXNzIGNscz0naC02IHctNiBtLWF1dG8gaWNvbiBzdWNjZXNzJyAvPiA6IDxDbG9zZSBjbHM9J2gtNiB3LTYgbS1hdXRvIGljb24gZmFsc2UnIC8+XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXm51bS9nKS50ZXN0KHNldCk6XHJcbiAgICAgIGNhc2UgbmV3IFJlZ0V4cCgvXnN0ci9nKS50ZXN0KHNldCk6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBjYXBpdGFsaXplKHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2hIYW5kbGVDaGFuZ2UgPSAoIGUsIGZpZWxkICkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSxmaWVsZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50LW5hdic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1oZWFkZXInPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlci5tYXAoKGgsIGspID0+IDxkaXYga2V5PXtrfSBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0ke2guY29sU2l6ZX1gfT57Y2FwaXRhbGl6ZShoLm5hbWUpfTwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZWFkZXItZmllbGQgY29sc2l6ZS0yYH0+e2NhcGl0YWxpemUoJ2FjdGlvbnMnKX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LW5hdi1zZWFyY2gnPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlYXJjaCA/IFxyXG4gICAgICAgICAgICBoZWFkZXIubWFwKChoLCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIG5ldyBSZWdFeHAoL15udW0vZ2kpLnRlc3QoaC5kcmF3KTpcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgc2VhcmNoLWZpZWxkIGNvbHNpemUtJHtoLmNvbFNpemV9IGB9PjxOdW1iZXJJbnB1dCBrZXk9e2t9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xzPXtgc2Vjb25kYXJ5YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wQ2xzPVwiaW5wdXQtbnVtYmVyIHNlY29uZGFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZT17KGUpID0+IHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZyl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hbaC50YWddfSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtoLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT17YHNlYXJjaC1maWVsZCBjb2xzaXplLSR7aC5jb2xTaXplfWB9PjxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2lucHV0LXR4dCBzZWNvbmRhcnkgdy1mdWxsJyBvbkNoYW5nZT17KGUpID0+IHNlYXJjaEhhbmRsZUNoYW5nZShlLCBoLnRhZyl9IHBsYWNlaG9sZGVyPXtjYXBpdGFsaXplKGgubmFtZSl9IHZhbHVlPXtzZWFyY2hbaC50YWddfSAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLWZpZWxkIGNvbHNpemUtMmB9PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWlubmVyIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy14LWhpZGRlbic+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YSAmJiBpc0FycmF5KGRhdGEpID8gZGF0YS5tYXAoKGZpZWxkLCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdjb250ZW50LXJvdyc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoZWFkZXIubWFwKCh7IHRhZywgZHJhdywgY29sU2l6ZSB9LCBrKSA9PiA8ZGl2IGtleT17a30gY2xhc3NOYW1lPXtgcm93LWZpZWxkIGNvbHNpemUtJHtjb2xTaXplfWB9PntzZXRWaWV3KGZpZWxkW3RhZ10sZHJhdyx0YWcpfTwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJvdy1maWVsZCBjb2xzaXplLTJgfT57Y2FwaXRhbGl6ZSgnYWN0aW9ucycpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE5hdiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTnVtYmVySW5wdXQgPSAoeyBjbHMsIGlucENscywgY2hhbmdlLCB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgKyAnIGlucHV0LW51bWJlci13cmFwIGZsZXgganVzdGlmeS1pdGVtcy1zdHJldGNoIGZsZXgtbm93cmFwIHJlbGF0aXZlJ30+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctYnRuJyB0YXJnZXQ9XCJkb3duXCI+LTwvc3Bhbj48aW5wdXQgdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9e2lucENscyArICcgY29sc2l6ZS0xMCd9IG9uQ2hhbmdlPXtjaGFuZ2V9IHZhbHVlPXt2YWx1ZSArIDF9IC8+PHNwYW4gY2xhc3NOYW1lPSdhcnJvdy1idG4nIHRhcmdldD1cInVwXCI+Kzwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWdlc0NvbnRhaW5lciA9ICh7Y2hpbGRyZW4gLCB0aXRsZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIG1iLTgnPnt0aXRsZX08L2Rpdj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzQ29udGFpbmVyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFeHBhbmQgZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0V4cGFuZCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGNscywgbGlzdCwgYWN0aXZlLCBpY29uQ2xzLCBjaGlsZHJlbiwgYWN0aW9uIH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhc3RFdmVudCwgc2V0TGFzdEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGxhbmRpbmcgPSBsaXN0LmZpbmQoaSA9PiBpLmlkID09PSBhY3RpdmUpXHJcbiAgY29uc3QgYXZhaWJsZSA9IGxpc3QuZmlsdGVyKGkgPT4gaS5pZCAhPT0gYWN0aXZlKVxyXG5cclxuICBjb25zdCB0b2dnbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCAkZWwgPSBlLnRhcmdldFxyXG4gICAgd2hpbGUgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdG9yJykgPT0gZmFsc2UpIHtcclxuICAgICAgJGVsID0gJGVsLnBhcmVudE5vZGVcclxuICAgIH1cclxuICAgIGlmICgoZS50eXBlID09PSAnY2xpY2snICYmIGxhc3RFdmVudCA9PT0gJ2NsaWNrJykgfHwgZS50eXBlICE9PSAnY2xpY2snKSB7XHJcbiAgICAgIHNldFRvZ2dsZSghdG9nZ2xlKVxyXG4gICAgICBsYXN0RXZlbnQgPT09ICdjbGljaycgJiYgdG9nZ2xlID09PSB0cnVlID8gJGVsLmJsdXIoKSA6IG51bGxcclxuICAgIH0gXHJcbiAgICBzZXRMYXN0RXZlbnQoZS50eXBlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVZhbHVlID0gKGUsdikgPT4ge1xyXG4gICAgdG9nZ2xlU2VsZWN0KGUpO1xyXG4gICAgYWN0aW9uKHYpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NscyA/ICdzZWxlY3RvciAnICsgY2xzIDogJ3NlbGVjdG9yJ30gb25Gb2N1cz17dG9nZ2xlU2VsZWN0fSBvbkJsdXI9e3RvZ2dsZVNlbGVjdH0gdGFiSW5kZXg9ey0xfT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHQgYWN0aXZlJyB2YWx1ZT17bGFuZGluZy5pZH0gb25DbGljaz17dG9nZ2xlID8gdG9nZ2xlU2VsZWN0IDogbnVsbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e2NhcGl0YWxpemUobGFuZGluZy50aXRsZSl9PC9kaXY+PEV4cGFuZCBjbHM9e2ljb25DbHN9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICB0b2dnbGUgPyA8ZGl2IGNsYXNzTmFtZT0nb3B0LXdyYXBwZXInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdmFpYmxlLm1hcCgoe2lkLHRpdGxlfSxrKSA9PiBcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPSdvcHQnIHZhbHVlPXtpZH0gb25DbGljaz17KGUpID0+IGNoYW5nZVZhbHVlKGUsaWQpfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHh0Jz57Y2FwaXRhbGl6ZSh0aXRsZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IENsb3NlIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9DbG9zZSdcclxuaW1wb3J0IEluZm8gZnJvbSAnLi4vLi4vLi4vaWNvbi9pY29uLXVpL0luZm8nXHJcbmltcG9ydCBTdWNjZXNzIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9TdWNjZXNzJ1xyXG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvV2FybmluZydcclxuaW1wb3J0IERhbmdlciBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24tdWkvRGFuZ2VyJ1xyXG5pbXBvcnQgeyBub3RpZnlDbG9zZSwgbm90aWZ5S2VlcCB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL25vdGlmaWNhdGlvblNsaWNlJ1xyXG5cclxuY29uc3QgVG9hc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWZpY2F0aW9uKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbXNnLCB0eXBlLCBzdGF0dXMgfSA9IGRhdGFcclxuICBjb25zdCBpY29ucyA9IHtcclxuICAgICdJbmZvJzogPEluZm8gY2xzPVwiaC01IHctNVwiIC8+LFxyXG4gICAgJ1N1Y2Nlc3MnOiA8U3VjY2VzcyBjbHM9XCJoLTUgdy01XCIgLz4sXHJcbiAgICAnV2FybmluZyc6IDxXYXJuaW5nIGNscz1cImgtNSB3LTVcIiAvPixcclxuICAgICdEYW5nZXInOiA8RGFuZ2VyIGNscz1cImgtNSB3LTVcIiAvPixcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QgJHt0eXBlfSAke3N0YXR1c31gfSBvbk1vdXNlRW50ZXI9eygpID0+IGRpc3BhdGNoKG5vdGlmeUtlZXAoe2V2ZW50OiAnc3RheSd9KSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gZGlzcGF0Y2gobm90aWZ5S2VlcCh7ZXZlbnQ6ICdjbG9zZScsIGZ1bmM6IHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2gobm90aWZ5Q2xvc2UoKSksIDE0MDApfSkgKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC10aXRsZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvYXN0LXRpdGxlLWljb24nPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uc1tjYXBpdGFsaXplKHR5cGUpXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1idG4nPjxidXR0b24gb25DbGljaz17Y2xvc2V9PjxDbG9zZSBjbHM9XCJoLTUgdy01XCIgLz48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1jb250ZW50Jz5cclxuICAgICAgICB7IG1zZyB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0TGFiZWxJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRMYWJlbElucHV0IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcclxuaW1wb3J0IENvbnRlbnROYXYgZnJvbSAnLi9Db250ZW50TmF2J1xyXG5pbXBvcnQgQ1NSRklucHV0IGZyb20gJy4vQ1NSRklucHV0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi9OYXZMaSdcclxuaW1wb3J0IFBhZ2VzQ29udGFpbmVyIGZyb20gJy4vUGFnZXNDb250YWluZXInXHJcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuL1NlbGVjdG9yJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCdcclxuaW1wb3J0IFR4dExhYmVsSW5wdXQgZnJvbSAnLi9UeHRMYWJlbElucHV0J1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSAnLi9OdW1iZXJJbnB1dCdcclxuXHJcbmV4cG9ydCB7IEJ1dHRvbiwgQ29udGVudE5hdiwgQ1NSRklucHV0LCBOYXZMaSwgUGFnZXNDb250YWluZXIsIFNlbGVjdG9yLCBUb2FzdCwgVHh0TGFiZWxJbnB1dCwgTnVtYmVySW5wdXQgfSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICByZXR1cm4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL0xheW91dFwiXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluL3JlZHV4J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5mdW5jdGlvbiBNYWluQWRtaW4oKSB7XHJcbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPExheW91dC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDbG9zZSA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCIgPlxyXG4gICAgICA8cGF0aCBkPVwiTTQ4MCA2MTggMjcwIDgyOHEtOSA5LTIxIDl0LTIxLTlxLTktOS05LTIxdDktMjFsMjEwLTIxMC0yMTAtMjEwcS05LTktOS0yMXQ5LTIxcTktOSAyMS05dDIxIDlsMjEwIDIxMCAyMTAtMjEwcTktOSAyMS05dDIxIDlxOSA5IDkgMjF0LTkgMjFMNTIyIDU3NmwyMTAgMjEwcTkgOSA5IDIxdC05IDIxcS05IDktMjEgOXQtMjEtOUw0ODAgNjE4WlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb3NlIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRGFuZ2VyID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9eyBjbHMgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk0xNy43NSA0MnEtLjYgMC0xLjE3NS0uMjUtLjU3NS0uMjUtLjk3NS0uNjVsLTguNy04LjdxLS40LS40LS42NS0uOTc1VDYgMzAuMjV2LTEyLjVxMC0uNi4yNS0xLjE3NS4yNS0uNTc1LjY1LS45NzVsOC43LTguN3EuNC0uNC45NzUtLjY1VDE3Ljc1IDZoMTIuNXEuNiAwIDEuMTc1LjI1LjU3NS4yNS45NzUuNjVsOC43IDguN3EuNC40LjY1Ljk3NVQ0MiAxNy43NXYxMi41cTAgLjYtLjI1IDEuMTc1LS4yNS41NzUtLjY1Ljk3NWwtOC43IDguN3EtLjQuNC0uOTc1LjY1VDMwLjI1IDQyWk0yNCAzMy45NXEuNyAwIDEuMjI1LS41MjUuNTI1LS41MjUuNTI1LTEuMjI1IDAtLjctLjUyNS0xLjIyNVEyNC43IDMwLjQ1IDI0IDMwLjQ1cS0uNyAwLTEuMjI1LjUyNS0uNTI1LjUyNS0uNTI1IDEuMjI1IDAgLjcuNTI1IDEuMjI1LjUyNS41MjUgMS4yMjUuNTI1Wm0wLTcuMnEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NVYxNS4xcTAtLjY1LS40MjUtMS4wNzVRMjQuNjUgMTMuNiAyNCAxMy42cS0uNjUgMC0xLjA3NS40MjUtLjQyNS40MjUtLjQyNSAxLjA3NXYxMC4xNXEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVaTTE3Ljc1IDM5aDEyLjVMMzkgMzAuMjV2LTEyLjVMMzAuMjUgOWgtMTIuNUw5IDE3Ljc1djEyLjVaTTI0IDI0WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFuZ2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRXhwYW5kID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDk2IDk2MCA5NjBcIj5cclxuICAgICAgPHBhdGggZD1cIk00ODAgNzExIDI0MCA0NzFsNDMtNDMgMTk3IDE5OCAxOTctMTk3IDQzIDQzLTI0MCAyMzlaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBhbmQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBJbmZvID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjQuMTUgMzRxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTkuMDVxMC0uNi0uNDUtMS4wMjVRMjQuNzUgMjIgMjQuMTUgMjJxLS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djkuMDVxMCAuNi40NSAxLjAyNS40NS40MjUgMS4wNS40MjVaTTI0IDE4LjNxLjcgMCAxLjE3NS0uNDUuNDc1LS40NS40NzUtMS4xNXQtLjQ3NS0xLjJRMjQuNyAxNSAyNCAxNXEtLjcgMC0xLjE3NS41LS40NzUuNS0uNDc1IDEuMnQuNDc1IDEuMTVxLjQ3NS40NSAxLjE3NS40NVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcgMCAxMi01dDUtMTJxMC03LTUtMTJUMjQgN3EtNyAwLTEyIDVUNyAyNHEwIDcgNSAxMnQxMiA1WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBTdWNjZXNzID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyAgY2xhc3NOYW1lPXsgY2xzIH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJtMjEuMDUgMjguNTUtNC45LTQuOXEtLjQ1LS40NS0xLjEtLjQ1LS42NSAwLTEuMTUuNS0uNS41LS41IDEuMTUgMCAuNjUuNSAxLjFsNi4xIDYuMXEuNDUuNDUgMS4wNS40NS42IDAgMS4wNS0uNDVsMTItMTJxLjQ1LS40NS40MjUtMS4xLS4wMjUtLjY1LS40NzUtMS4xLS40NS0uNS0xLjEyNS0uNXQtMS4xNzUuNVpNMjQgNDRxLTQuMjUgMC03LjktMS41MjUtMy42NS0xLjUyNS02LjM1LTQuMjI1LTIuNy0yLjctNC4yMjUtNi4zNVE0IDI4LjI1IDQgMjRxMC00LjIgMS41MjUtNy44NVE3LjA1IDEyLjUgOS43NSA5LjhxMi43LTIuNyA2LjM1LTQuMjVRMTkuNzUgNCAyNCA0cTQuMiAwIDcuODUgMS41NVEzNS41IDcuMSAzOC4yIDkuOHEyLjcgMi43IDQuMjUgNi4zNVE0NCAxOS44IDQ0IDI0cTAgNC4yNS0xLjU1IDcuOS0xLjU1IDMuNjUtNC4yNSA2LjM1LTIuNyAyLjctNi4zNSA0LjIyNVEyOC4yIDQ0IDI0IDQ0Wm0wLTIwWm0wIDE3cTcuMjUgMCAxMi4xMjUtNC44NzVUNDEgMjRxMC03LjI1LTQuODc1LTEyLjEyNVQyNCA3cS03LjI1IDAtMTIuMTI1IDQuODc1VDcgMjRxMCA3LjI1IDQuODc1IDEyLjEyNVQyNCA0MVpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBXYXJuaW5nID0gKHsgY2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggNDhcIj5cclxuICAgICAgPHBhdGggZD1cIk00LjYgNDJxLS40NSAwLS43NzUtLjJ0LS41MjUtLjU1cS0uMi0uMzUtLjIyNS0uNzI1LS4wMjUtLjM3NS4yMjUtLjc3NWwxOS40LTMzLjVxLjI1LS40LjU3NS0uNTc1UTIzLjYgNS41IDI0IDUuNXEuNCAwIC43MjUuMTc1LjMyNS4xNzUuNTc1LjU3NWwxOS40IDMzLjVxLjI1LjQuMjI1Ljc3NS0uMDI1LjM3NS0uMjI1LjcyNXQtLjUyNS41NXEtLjMyNS4yLS43NzUuMlptMi42LTNoMzMuNkwyNCAxMFptMTctMi44NXEuNjUgMCAxLjA3NS0uNDI1LjQyNS0uNDI1LjQyNS0xLjA3NSAwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNVEyMi43IDM0IDIyLjcgMzQuNjVxMCAuNjUuNDI1IDEuMDc1LjQyNS40MjUgMS4wNzUuNDI1Wm0wLTUuNTVxLjY1IDAgMS4wNzUtLjQyNS40MjUtLjQyNS40MjUtMS4wNzV2LTguMnEwLS42NS0uNDI1LTEuMDc1LS40MjUtLjQyNS0xLjA3NS0uNDI1LS42NSAwLTEuMDc1LjQyNS0uNDI1LjQyNS0uNDI1IDEuMDc1djguMnEwIC42NS40MjUgMS4wNzUuNDI1LjQyNSAxLjA3NS40MjVabS0uMi02LjFaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FybmluZyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInNldEJhc2VVcmwiLCJleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImxlbmd0aCIsImNsZWFuUGF0aCIsInBhdGgiLCJyZXBsYWNlIiwiY2FwaXRhbGl6ZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImVuZE9mUGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0ckNvbnRhaW5zIiwic3RyIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJhcmVFcXVhbCIsIm9iajEiLCJvYmoyIiwiaXNBcnJheSIsImkiLCJpc09iamVjdCIsImVudDEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZW50MiIsImtleSIsInZhbHVlIiwiaXNEZWZpbmVkIiwib2JqIiwidW5kZWZpbmVkIiwiaXNKU09OIiwianNvbiIsIkpTT04iLCJwYXJzZSIsIm9iamVjdCIsImFycmF5IiwiQXJyYXkiLCJzb3J0QXNjIiwiYSIsImIiLCJzb3J0Iiwic29ydERlcyIsIlJlYWN0IiwiQ29udGVudCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJUb2FzdCIsInNldFVybCIsIlBhZ2VzIiwiU2V0dGluZ3MiLCJBcnRpY2xlcyIsIkxvZ2luIiwiTWVudSIsIm5hbWUiLCJQYWdlIiwiTGF5b3V0IiwidXJsIiwic3RhdGUiLCJhamF4IiwibmF2IiwiZGlzcGF0Y2giLCJwYXRobmFtZSIsIm1hdGNoIiwibWFwIiwidXNlU3RhdGUiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiY2xlYXJEYXRhIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsIlBhZ2VzQ29udGFpbmVyIiwiQ29udGVudE5hdiIsInB1c2hEYXRhIiwiYXhpb3MiLCJheGlvc1NldCIsImNyZWF0ZSIsImFydGljbGVzIiwiZGF0YSIsInBhZ2VzIiwiZ2V0IiwidGhlbiIsInJlcyIsImhlYWRlciIsInRhZyIsImRyYXciLCJjb2xTaXplIiwiQnV0dG9uIiwiVHh0TGFiZWxJbnB1dCIsIm5vdGlmeSIsIm5vdGlmeUNsb3NlIiwiWE1MU2V0IiwibGlmZXRpbWUiLCJub3RpZmljYXRpb24iLCJsaWZlIiwic2V0U3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3Rva2VuIiwiaXNDb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJibHVyVGltZW91dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyVGltZW91dCIsIm5hdGl2ZUV2ZW50Iiwic3VibWl0dGVyIiwiYmx1ciIsInBvc3QiLCJuYXZVUkwiLCJ0eXBlIiwibXNnIiwidGltZW91dCIsImNhdGNoIiwiU2VsZWN0b3IiLCJzZXR0aW5ncyIsImNoYW5nZSIsInNldENoYW5nZSIsImluaXRpYWxTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsImNoYW5nZU5hbWUiLCJ2IiwicHJvcCIsIm5EYXRhIiwiY29uc29sZSIsImxvZyIsInNldExhbmRpbmciLCJMYW5kaW5nIiwiQXV0aG9yIiwiRGVzY3JpcHRpb24iLCJTaXRlTmFtZSIsInN0b3JlIiwiY3JlYXRlU2xpY2UiLCJhamF4U2xpY2UiLCJiYXNlVXJsIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsIm5vdGlmaWNhdGlvblNsaWNlIiwic3RhdHVzIiwibm90aWZ5S2VlcCIsImV2ZW50IiwiZnVuYyIsImNvbmZpZ3VyZVN0b3JlIiwiYnRuQ2xzIiwiZGl2Q2xzIiwiQ1NSRklucHV0IiwiU3VjY2VzcyIsIkNsb3NlIiwiTnVtYmVySW5wdXQiLCJ1cGRhdGVTZWFyY2giLCJzRmllbGRzIiwiaCIsInNldFZpZXciLCJzZXQiLCJ0ZXN0Iiwic3BsaXQiLCJOdW1iZXIiLCJzZWFyY2hIYW5kbGVDaGFuZ2UiLCJmaWVsZCIsImsiLCJOYXZMaW5rIiwidG8iLCJvbkNsaWNrIiwiY2xzIiwiaW5wQ2xzIiwiRXhwYW5kIiwibGlzdCIsImFjdGl2ZSIsImljb25DbHMiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJsYXN0RXZlbnQiLCJzZXRMYXN0RXZlbnQiLCJsYW5kaW5nIiwiZmluZCIsImlkIiwiYXZhaWJsZSIsImZpbHRlciIsInRvZ2dsZVNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsIiRlbCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNoYW5nZVZhbHVlIiwiSW5mbyIsIldhcm5pbmciLCJEYW5nZXIiLCJpY29ucyIsImNsb3NlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlucHV0Q2xzIiwibGFiZWxDbHMiLCJvbkNoYW5nZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlRm9jdXMiLCJDb21wb25lbnQiLCJIdyIsInJlbmRlciIsIkhlbGxvIiwiTWFpbiIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJQcm92aWRlciIsIk1haW5BZG1pbiIsIkNscyJdLCJzb3VyY2VSb290IjoiIn0=