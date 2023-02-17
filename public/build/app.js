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

/***/ "./assets/react/components/Functions/app.js":
/*!**************************************************!*\
  !*** ./assets/react/components/Functions/app.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endOfPath": () => (/* binding */ endOfPath),
/* harmony export */   "setBaseUrl": () => (/* binding */ setBaseUrl),
/* harmony export */   "strContains": () => (/* binding */ strContains),
/* harmony export */   "updateTitle": () => (/* binding */ updateTitle),
/* harmony export */   "uppercase": () => (/* binding */ uppercase)
/* harmony export */ });
// url de base pour faciliter la navigation

const setBaseUrl = (ext = "") => {
  return `${window.location.origin}/${ext}`;
};

// première lettre en majuscule

const uppercase = txt => {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
};

// obtenir l'url relative

const endOfPath = path => {
  return path.slice(path.lastIndexOf('\/'));
};
const updateTitle = n => {
  n = n.replace(/\//g, "");
  let title = document.querySelector('title');
  title.innerText = `Mini-CMS -> ${n.length > 0 ? uppercase(n) : "Settings"}`;
  return;
};
const strContains = (str, search) => {
  let re = new RegExp(search, "gi");
  return str.search(re) >= 0 ? true : false;
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Functions/app */ "./assets/react/components/Functions/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Settings */ "./assets/react/components/admin/pages/Settings.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/admin/Footer.jsx");









const AdminXML = axios__WEBPACK_IMPORTED_MODULE_7__["default"].create({
  baseURL: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.setBaseUrl)('mini-admin'),
  headers: {
    'XMLHttpRequest': true,
    'Content-Type': 'application/json'
  }
});
const Pages = [{
  name: "Parametres",
  path: "/",
  Page: _pages_Settings__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: "Pages",
  path: "/pages",
  Page: _pages_Settings__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: "Articles",
  path: "/articles",
  Page: _pages_Settings__WEBPACK_IMPORTED_MODULE_5__["default"]
}];
const Layout = () => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    swapPage((0,_Functions_app__WEBPACK_IMPORTED_MODULE_4__.endOfPath)(location.pathname));
    return location.pathname.match(/\/$/, '') ? nav(location.pathname.replace(/\/$/, '')) : undefined;
  }, []);
  const swapPage = path => {
    setState({
      url: path
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "mini-admin/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ajax: AdminXML
    })
  }), Pages.map(({
    path,
    Page
  }, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
      key: i,
      path: `mini-admin${path}`,
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        Pages: Pages,
        Ajax: AdminXML,
        swapPage: swapPage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Page, {
        data: state,
        ajax: AdminXML
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)))
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Functions/app */ "./assets/react/components/Functions/app.js");





const Navbar = ({
  Pages,
  swapPage
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.updateTitle)((0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.endOfPath)(location.pathname));
    setTimeout(() => {
      setEnable(true);
    }, 50);
  }, []);
  const handleLogout = () => {
    (0,_Functions_app__WEBPACK_IMPORTED_MODULE_3__.updateTitle)(n);
    console.log('logout');
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");





const Login = props => {
  const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const baseUrl = '/mini-admin';
  const ajax = props.ajax;
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
      console.log(res);
      nav(`${baseUrl}${res.data.url}`);
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
    btnCls: "btn-primary"
  }, "Me Connecter"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

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
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Functions/app */ "./assets/react/components/Functions/app.js");
/* harmony import */ var _ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/TxtInput */ "./assets/react/components/admin/ui/TxtInput.jsx");



const Settings = ({
  data,
  ajax
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get(data.url).then(res => {
      setState(res.data.data);
    });
  }, []);
  const objectToArray = d => {
    let format = [];
    for (const [key, value] of Object.entries(d)) {
      console.log(key, ": ", value);
      format.push({
        [key]: value
      });
    }
    return format;
  };
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title mb-8"
  }, "Param\xE8tres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-3 py-3 justify-between"
  }, state ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.uppercase)(changeName("Author")),
    id: "Author",
    value: state.Author,
    placeholder: changeName("Author"),
    inputCls: "input-txt w-full",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.uppercase)(changeName("Description")),
    id: "Description",
    value: state.Description,
    placeholder: changeName("Description"),
    inputCls: "input-txt w-full",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.uppercase)(changeName("SiteName")),
    id: "SiteName",
    value: state.SiteName,
    placeholder: changeName("SiteName"),
    inputCls: "input-txt w-full",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-xl text-red-500"
  }, " choix de page ")) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin/Layout */ "./assets/react/components/admin/Layout.jsx");



function MainAdmin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainAdmin);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-react_dist-d0f2d2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ0Y7QUFDYjtBQUVBLGlFQUFlQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hDO0FBRXpCLE1BQU0vRCxNQUFNLEdBQUcsQ0FBQztFQUFFZ0U7QUFBSSxDQUFDLEtBQUs7RUFDMUIsb0JBQ0U7SUFBSyxTQUFTLEVBQUVBLEdBQUk7SUFBQyxLQUFLLEVBQUMsNEJBQTRCO0lBQUMsT0FBTyxFQUFDO0VBQVcsZ0JBQ3pFO0lBQU0sQ0FBQyxFQUFDO0VBQXlMLEVBQUUsQ0FDL0w7QUFFVixDQUFDO0FBRUQsaUVBQWVoRSxNQUFNOzs7Ozs7Ozs7Ozs7QUNWckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWNtcy8gXFwuW2p0XXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL0Z1bmN0aW9ucy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9GdW5jdGlvbnMvU2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9MYXlvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9oZWxsb1dvcmxkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIixcblx0XCIuL21haW5fYWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbl9hZG1pbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiXHJcbi8vIHVybCBkZSBiYXNlIHBvdXIgZmFjaWxpdGVyIGxhIG5hdmlnYXRpb25cclxuXHJcbmNvbnN0IHNldEJhc2VVcmwgPSAoZXh0ID0gXCJcIikgPT4ge1xyXG4gIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS8ke2V4dH1gXHJcbn1cclxuXHJcbi8vIHByZW1pw6hyZSBsZXR0cmUgZW4gbWFqdXNjdWxlXHJcblxyXG5jb25zdCB1cHBlcmNhc2UgPSAodHh0KSA9PiB7XHJcbiAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zbGljZSgxKVxyXG59XHJcblxyXG4vLyBvYnRlbmlyIGwndXJsIHJlbGF0aXZlXHJcblxyXG5jb25zdCBlbmRPZlBhdGggPSAocGF0aCkgPT4ge1xyXG4gIHJldHVybiBwYXRoLnNsaWNlKHBhdGgubGFzdEluZGV4T2YoJ1xcLycpKVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVUaXRsZSA9IChuKSA9PiB7XHJcbiAgbiA9IG4ucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKVxyXG4gIHRpdGxlLmlubmVyVGV4dCA9IGBNaW5pLUNNUyAtPiAkeyhuLmxlbmd0aCA+IDAgPyB1cHBlcmNhc2UobikgOiBcIlNldHRpbmdzXCIpfWBcclxuICByZXR1cm47XHJcbn1cclxuXHJcbmNvbnN0IHN0ckNvbnRhaW5zID0gKHN0ciwgc2VhcmNoKSA9PiB7XHJcbiAgbGV0IHJlID0gbmV3IFJlZ0V4cChzZWFyY2gsIFwiZ2lcIilcclxuICByZXR1cm4gc3RyLnNlYXJjaChyZSkgPj0gMCA/IHRydWUgOiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgeyBzZXRCYXNlVXJsLCB1cHBlcmNhc2UsIHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGgsIHN0ckNvbnRhaW5zIH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY29udGVudFwiPlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9J2FkbWluLWZvb3Rlcic+Rm9vdGVyPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJcclxuY29uc3QgZ2V0VG9rZW4gPSAoKSA9PiB7XHJcbiAgbGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9X3Rva2VuXScpXHJcbiAgaWYgKCF0b2tlbikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgbGV0IGtleSA9IHRva2VuLmdldEF0dHJpYnV0ZSgndmFsdWUnKVxyXG4gIHRva2VuLnJlbW92ZSgpXHJcbiAgcmV0dXJuIGtleVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRUb2tlbiB9IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vcGFnZXMvTG9naW4nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBlbmRPZlBhdGgsIHNldEJhc2VVcmwsIHN0ckNvbnRhaW5zIH0gZnJvbSAnLi4vRnVuY3Rpb25zL2FwcCdcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlcywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9wYWdlcy9TZXR0aW5ncydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmNvbnN0IEFkbWluWE1MID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBzZXRCYXNlVXJsKCdtaW5pLWFkbWluJyksXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ1hNTEh0dHBSZXF1ZXN0JzogdHJ1ZSxcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBQYWdlcyA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiUGFnZXNcIiwgcGF0aDogXCIvcGFnZXNcIiwgUGFnZTogU2V0dGluZ3N9LFxyXG4gIHtuYW1lOiBcIkFydGljbGVzXCIsIHBhdGg6IFwiL2FydGljbGVzXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuXVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN3YXBQYWdlKGVuZE9mUGF0aChsb2NhdGlvbi5wYXRobmFtZSkpO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC9cXC8kLywgJycpID8gbmF2KGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJykpIDogdW5kZWZpbmVkXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHN3YXBQYWdlID0gKHBhdGgpID0+IHtcclxuICAgIHNldFN0YXRlKHt1cmw6IHBhdGh9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibGF5b3V0XCI+XHJcbiAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9J21pbmktYWRtaW4vbG9naW4nIGVsZW1lbnQ9ezxMb2dpbiBhamF4PXtBZG1pblhNTH0gLz59IC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgUGFnZXMubWFwKCh7cGF0aCxQYWdlfSxpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8Um91dGUga2V5PXtpfSBwYXRoPXtgbWluaS1hZG1pbiR7cGF0aH1gfSBlbGVtZW50PXtcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBQYWdlcz17UGFnZXN9IEFqYXg9e0FkbWluWE1MfSBzd2FwUGFnZT17c3dhcFBhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8UGFnZSBkYXRhPXtzdGF0ZX0gYWpheD17QWRtaW5YTUx9Lz5cclxuICAgICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1JvdXRlcz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZMaSBmcm9tICcuL3VpL05hdkxpJ1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uLy4uL2ljb24vaWNvbi11aS9Mb2dvdXQuanN4J1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGgsIHVwcGVyY2FzZSB9IGZyb20gJy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoe1BhZ2VzLCBzd2FwUGFnZX0pID0+IHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBbZW5hYmxlLCBzZXRFbmFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShlbmRPZlBhdGgobG9jYXRpb24ucGF0aG5hbWUpKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldEVuYWJsZSh0cnVlKVxyXG4gICAgfSwgNTApXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShuKVxyXG4gICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSduYXZiYXInIGNsYXNzTmFtZT17IWVuYWJsZSA/ICdmYWRlT3V0TGVmdCcgOiAnJ30+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibmF2YmFyLXRvcFwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXYtdGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5NaW5pLUNNUzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTInPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHtuYW1lLHBhdGh9LGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPE5hdkxpIGtleT17aX0gdG89e2AvbWluaS1hZG1pbiR7cGF0aH1gLnJlcGxhY2UoL1xcLyQvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlVGl0bGUocGF0aCk7IHN3YXBQYWdlKHBhdGgpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluay10eHQnPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGk+fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vdWkvQnV0dG9uJ1xyXG5pbXBvcnQgVHh0SW5wdXQgZnJvbSAnLi4vdWkvVHh0SW5wdXQnXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vRnVuY3Rpb25zL1NlY3VyaXR5J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IHVzZU5hdmlnYXRlKClcclxuICBjb25zdCBiYXNlVXJsID0gJy9taW5pLWFkbWluJ1xyXG4gIGNvbnN0IGFqYXggPSBwcm9wcy5hamF4XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogbnVsbCxcclxuICAgIHBhc3N3b3JkOiBudWxsLFxyXG4gICAgX3Rva2VuOiBnZXRUb2tlbigpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7IC4uLnN0YXRlIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBuYXYoYCR7YmFzZVVybH0ke3Jlcy5kYXRhLnVybH1gKVxyXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgIG5hdihgJHtiYXNlVXJsfS9sb2dpbmApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gc3RhdGVcclxuXHJcbiAgcmV0dXJuIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBpZD1cImxvZ2luXCIgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIGJnLXdoaXRlIGNvbG9yLWRhcmsnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tdGl0bGUnPkNvbm5leGlvbjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLWNsZWFyLW91dGxpbmUnPlxyXG4gICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD1cIkNvbXB0ZShFbWFpbClcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cImFkcmVzc2UgZW1haWwuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPFR4dElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPVwiTW90IGRlIHBhc3NlXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gcGxhY2Vob2xkZXI9XCJtb3QgZGUgcGFzc2UuLi5cIlxyXG4gICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBkaXZDbHM9J3B0LTEgcC00J1xyXG4gICAgICBidG5DbHM9J2J0bi1wcmltYXJ5J1xyXG4gICAgPk1lIENvbm5lY3RlcjwvQnV0dG9uPlxyXG4gIDwvZm9ybT5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVwcGVyY2FzZSB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCBUeHRJbnB1dCBmcm9tICcuLi91aS9UeHRJbnB1dCdcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKHsgZGF0YSwgYWpheCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobnVsbClcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheC5nZXQoZGF0YS51cmwpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUocmVzLmRhdGEuZGF0YSlcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgb2JqZWN0VG9BcnJheSA9IChkKSA9PiB7XHJcbiAgICBsZXQgZm9ybWF0ID0gW11cclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGQpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGtleSwgXCI6IFwiLCB2YWx1ZSk7XHJcbiAgICAgIGZvcm1hdC5wdXNoKHtba2V5XTogdmFsdWV9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodikgPT4ge1xyXG4gICAgc3dpdGNoICh2KSB7XHJcbiAgICAgIGNhc2UgJ0F1dGhvcic6XHJcbiAgICAgICAgcmV0dXJuICdhdXRldXInO1xyXG4gICAgICBjYXNlICdEZXNjcmlwdGlvbic6IFxyXG4gICAgICAgIHJldHVybiAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjYXNlICdTaXRlTmFtZSc6XHJcbiAgICAgICAgcmV0dXJuICdub20gZHUgc2l0ZSc7XHJcbiAgICAgIGNhc2UgJ0xhbmRpbmcnOlxyXG4gICAgICAgIHJldHVybiAncGFnZSBkXFwnYWNjdWVpbCc7XHJcbiAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+UGFyYW3DqHRyZXM8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHN0YXRlID8gPD5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9e3VwcGVyY2FzZShjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpKX0gaWQ9XCJBdXRob3JcIiB2YWx1ZT17c3RhdGUuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCcgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD17dXBwZXJjYXNlKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9IGlkPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17c3RhdGUuRGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwnIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9e3VwcGVyY2FzZShjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIikpfSBpZD1cIlNpdGVOYW1lXCIgdmFsdWU9e3N0YXRlLlNpdGVOYW1lfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsJyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwgdGV4dC1yZWQtNTAwJz4gY2hvaXggZGUgcGFnZSA8L2gxPlxyXG4gICAgICAgICAgPC8+IDogXHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgYnRuQ2xzLCBkaXZDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xzfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0bkNsc30+eyBjaGlsZHJlbiB9PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBOYXZMaSA9ICh7IGNoaWxkcmVuLCB0bywgb25DbGljayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsaT5cclxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPSduYXYtbGluaycgdG89e3RvfSBvbkNsaWNrPXtvbkNsaWNrfSBlbmQ+eyBjaGlsZHJlbiB9PC9OYXZMaW5rPlxyXG4gICAgPC9saT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRJbnB1dCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICByZXR1cm4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNYWluQWRtaW4oKSB7XHJcbiAgcmV0dXJuIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BZG1pbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJzZXRCYXNlVXJsIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJ1cHBlcmNhc2UiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZW5kT2ZQYXRoIiwicGF0aCIsImxhc3RJbmRleE9mIiwidXBkYXRlVGl0bGUiLCJuIiwicmVwbGFjZSIsInRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwibGVuZ3RoIiwic3RyQ29udGFpbnMiLCJzdHIiLCJzZWFyY2giLCJyZSIsIlJlZ0V4cCIsIlJlYWN0IiwiQ29udGVudCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsImhlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luIiwiTmF2YmFyIiwiYXhpb3MiLCJSb3V0ZSIsIlJvdXRlcyIsInVzZU5hdmlnYXRlIiwiU2V0dGluZ3MiLCJBZG1pblhNTCIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiUGFnZXMiLCJuYW1lIiwiUGFnZSIsIkxheW91dCIsInN0YXRlIiwic2V0U3RhdGUiLCJuYXYiLCJzd2FwUGFnZSIsInBhdGhuYW1lIiwibWF0Y2giLCJ1bmRlZmluZWQiLCJ1cmwiLCJtYXAiLCJpIiwiTmF2TGkiLCJMb2dvdXQiLCJ1c2VMb2NhdGlvbiIsImVuYWJsZSIsInNldEVuYWJsZSIsInNldFRpbWVvdXQiLCJoYW5kbGVMb2dvdXQiLCJjb25zb2xlIiwibG9nIiwiQnV0dG9uIiwiVHh0SW5wdXQiLCJwcm9wcyIsImJhc2VVcmwiLCJhamF4IiwiZW1haWwiLCJwYXNzd29yZCIsIl90b2tlbiIsImlzRXJyb3IiLCJzZXRJc0Vycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImdldCIsIm9iamVjdFRvQXJyYXkiLCJkIiwiZm9ybWF0IiwiT2JqZWN0IiwiZW50cmllcyIsInB1c2giLCJjaGFuZ2VOYW1lIiwidiIsIkF1dGhvciIsIkRlc2NyaXB0aW9uIiwiU2l0ZU5hbWUiLCJidG5DbHMiLCJkaXZDbHMiLCJOYXZMaW5rIiwidG8iLCJvbkNsaWNrIiwiaWQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImlucHV0Q2xzIiwibGFiZWxDbHMiLCJvbkNoYW5nZSIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlRm9jdXMiLCJDb21wb25lbnQiLCJIdyIsInJlbmRlciIsIkhlbGxvIiwiTWFpbiIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJNYWluQWRtaW4iLCJDbHMiXSwic291cmNlUm9vdCI6IiJ9