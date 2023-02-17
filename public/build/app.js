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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxPQUFFLENBQ0Y7QUFDYjtBQUVBLGlFQUFlQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hDO0FBRXpCLE1BQU1sRSxNQUFNLEdBQUcsQ0FBQztFQUFFbUU7QUFBSSxDQUFDLEtBQUs7RUFDMUIsb0JBQ0U7SUFBSyxTQUFTLEVBQUVBLEdBQUk7SUFBQyxLQUFLLEVBQUMsNEJBQTRCO0lBQUMsT0FBTyxFQUFDO0VBQVcsZ0JBQ3pFO0lBQU0sQ0FBQyxFQUFDO0VBQXlMLEVBQUUsQ0FDL0w7QUFFVixDQUFDO0FBRUQsaUVBQWVuRSxNQUFNOzs7Ozs7Ozs7Ozs7QUNWckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWNtcy8gXFwuW2p0XXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL0Z1bmN0aW9ucy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9GdW5jdGlvbnMvU2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9MYXlvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL1NldHRpbmdzLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9OYXZMaS5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi91aS9UeHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9oZWxsb1dvcmxkLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/M2U4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiLFxuXHRcIi4vbWFpbl9hZG1pbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJcclxuLy8gdXJsIGRlIGJhc2UgcG91ciBmYWNpbGl0ZXIgbGEgbmF2aWdhdGlvblxyXG5cclxuY29uc3Qgc2V0QmFzZVVybCA9IChleHQgPSBcIlwiKSA9PiB7XHJcbiAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LyR7ZXh0fWBcclxufVxyXG5cclxuLy8gcHJlbWnDqHJlIGxldHRyZSBlbiBtYWp1c2N1bGVcclxuXHJcbmNvbnN0IHVwcGVyY2FzZSA9ICh0eHQpID0+IHtcclxuICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnNsaWNlKDEpXHJcbn1cclxuXHJcbi8vIG9idGVuaXIgbCd1cmwgcmVsYXRpdmVcclxuXHJcbmNvbnN0IGVuZE9mUGF0aCA9IChwYXRoKSA9PiB7XHJcbiAgcmV0dXJuIHBhdGguc2xpY2UocGF0aC5sYXN0SW5kZXhPZignXFwvJykpXHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRpdGxlID0gKG4pID0+IHtcclxuICBuID0gbi5yZXBsYWNlKC9cXC8vZywgXCJcIilcclxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpXHJcbiAgdGl0bGUuaW5uZXJUZXh0ID0gYE1pbmktQ01TIC0+ICR7KG4ubGVuZ3RoID4gMCA/IHVwcGVyY2FzZShuKSA6IFwiU2V0dGluZ3NcIil9YFxyXG4gIHJldHVybjtcclxufVxyXG5cclxuY29uc3Qgc3RyQ29udGFpbnMgPSAoc3RyLCBzZWFyY2gpID0+IHtcclxuICBsZXQgcmUgPSBuZXcgUmVnRXhwKHNlYXJjaCwgXCJnaVwiKVxyXG4gIHJldHVybiBzdHIuc2VhcmNoKHJlKSA+PSAwID8gdHJ1ZSA6IGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldEJhc2VVcmwsIHVwcGVyY2FzZSwgdXBkYXRlVGl0bGUsIGVuZE9mUGF0aCwgc3RyQ29udGFpbnMgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD0nYWRtaW4tZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsIlxyXG5jb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1fdG9rZW5dJylcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuICBsZXQga2V5ID0gdG9rZW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpXHJcbiAgdG9rZW4ucmVtb3ZlKClcclxuICByZXR1cm4ga2V5XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFRva2VuIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9wYWdlcy9Mb2dpbidcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGVuZE9mUGF0aCwgc2V0QmFzZVVybCwgc3RyQ29udGFpbnMgfSBmcm9tICcuLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3BhZ2VzL1NldHRpbmdzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5cclxuY29uc3QgQWRtaW5YTUwgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHNldEJhc2VVcmwoJ21pbmktYWRtaW4nKSxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnWE1MSHR0cFJlcXVlc3QnOiB0cnVlLFxyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IFBhZ2VzID0gW1xyXG4gIHtuYW1lOiBcIlBhcmFtZXRyZXNcIiwgcGF0aDogXCIvXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbiAge25hbWU6IFwiQXJ0aWNsZXNcIiwgcGF0aDogXCIvYXJ0aWNsZXNcIiwgUGFnZTogU2V0dGluZ3N9LFxyXG5dXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dhcFBhZ2UoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSk7XHJcbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyQvLCAnJykgPyBuYXYobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKSkgOiB1bmRlZmluZWRcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc3dhcFBhZ2UgPSAocGF0aCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe3VybDogcGF0aH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJsYXlvdXRcIj5cclxuICAgICAgPFJvdXRlcz5cclxuICAgICAgICA8Um91dGUgcGF0aD0nbWluaS1hZG1pbi9sb2dpbicgZWxlbWVudD17PExvZ2luIGFqYXg9e0FkbWluWE1MfSAvPn0gLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBQYWdlcy5tYXAoKHtwYXRoLFBhZ2V9LGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZSBrZXk9e2l9IHBhdGg9e2BtaW5pLWFkbWluJHtwYXRofWB9IGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIFBhZ2VzPXtQYWdlc30gQWpheD17QWRtaW5YTUx9IHN3YXBQYWdlPXtzd2FwUGFnZX0vPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxQYWdlIGRhdGE9e3N0YXRlfSBhamF4PXtBZG1pblhNTH0vPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvUm91dGVzPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpL0xvZ291dC5qc3gnXHJcbmltcG9ydCB7IG1hdGNoUm91dGVzLCB1c2VMb2NhdGlvbiwgdXNlTmF2aWdhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IHVwZGF0ZVRpdGxlLCBlbmRPZlBhdGgsIHVwcGVyY2FzZSB9IGZyb20gJy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IHByb2R1Y2VXaXRoUGF0Y2hlcyB9IGZyb20gJ2ltbWVyJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHtQYWdlcywgc3dhcFBhZ2V9KSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRFbmFibGUodHJ1ZSlcclxuICAgIH0sIDUwKVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBzd2FwUGFnZShwYXRoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpPn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXYtb3B0c1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2Jz5cclxuICAgICAgICAgIDxOYXZMaSB0bz1cIi9taW5pLWFkbWluL2xvZ291dFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+PExvZ291dCBDbHM9XCJzdmctaWNvblwiIC8+PC9OYXZMaT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbidcclxuaW1wb3J0IFR4dElucHV0IGZyb20gJy4uL3VpL1R4dElucHV0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgY29uc3QgYmFzZVVybCA9ICcvbWluaS1hZG1pbidcclxuICBjb25zdCBhamF4ID0gcHJvcHMuYWpheFxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGFqYXgucG9zdCgnL2xvZ2luJywgeyAuLi5zdGF0ZSB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbmF2KGAke2Jhc2VVcmx9JHtyZXMuZGF0YS51cmx9YClcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBuYXYoYCR7YmFzZVVybH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBiZy13aGl0ZSBjb2xvci1kYXJrJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwibW90IGRlIHBhc3NlLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCdXR0b25cclxuICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgYnRuQ2xzPSdidG4tcHJpbWFyeSdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1cHBlcmNhc2UgfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgVHh0SW5wdXQgZnJvbSAnLi4vdWkvVHh0SW5wdXQnXHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICh7IGRhdGEsIGFqYXggfSkgPT4ge1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFqYXguZ2V0KGRhdGEudXJsKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IG9iamVjdFRvQXJyYXkgPSAoZCkgPT4ge1xyXG4gICAgbGV0IGZvcm1hdCA9IFtdXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhrZXksIFwiOiBcIiwgdmFsdWUpO1xyXG4gICAgICBmb3JtYXQucHVzaCh7W2tleV06IHZhbHVlfSlcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VOYW1lID0gKHYpID0+IHtcclxuICAgIHN3aXRjaCAodikge1xyXG4gICAgICBjYXNlICdBdXRob3InOlxyXG4gICAgICAgIHJldHVybiAnYXV0ZXVyJztcclxuICAgICAgY2FzZSAnRGVzY3JpcHRpb24nOiBcclxuICAgICAgICByZXR1cm4gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgY2FzZSAnU2l0ZU5hbWUnOlxyXG4gICAgICAgIHJldHVybiAnbm9tIGR1IHNpdGUnO1xyXG4gICAgICBjYXNlICdMYW5kaW5nJzpcclxuICAgICAgICByZXR1cm4gJ3BhZ2UgZFxcJ2FjY3VlaWwnO1xyXG4gICAgICBkZWZhdWx0OiBcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlIG1iLTgnPlBhcmFtw6h0cmVzPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0zIHB5LTMganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdGF0ZSA/IDw+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPXt1cHBlcmNhc2UoY2hhbmdlTmFtZShcIkF1dGhvclwiKSl9IGlkPVwiQXV0aG9yXCIgdmFsdWU9e3N0YXRlLkF1dGhvcn0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJBdXRob3JcIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwnIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9e3VwcGVyY2FzZShjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIikpfSBpZD1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e3N0YXRlLkRlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsJyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPXt1cHBlcmNhc2UoY2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpKX0gaWQ9XCJTaXRlTmFtZVwiIHZhbHVlPXtzdGF0ZS5TaXRlTmFtZX0gcGxhY2Vob2xkZXI9e2NoYW5nZU5hbWUoXCJTaXRlTmFtZVwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCcgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIHRleHQtcmVkLTUwMCc+IGNob2l4IGRlIHBhZ2UgPC9oMT5cclxuICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ0bkNscywgZGl2Q2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbHN9PnsgY2hpbGRyZW4gfTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTmF2TGkgPSAoeyBjaGlsZHJlbiwgdG8sIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIHRvPXt0b30gb25DbGljaz17b25DbGlja30gZW5kPnsgY2hpbGRyZW4gfTwvTmF2TGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0SW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0SW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWxsbyBmcm9tICcuLi9jb21wb25lbnRzL2hlbGxvV29ybGQnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgcmV0dXJuIDxkaXY+PEhlbGxvLz48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4vTGF5b3V0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbkFkbWluKCkge1xyXG4gIHJldHVybiA8Um91dGVyPlxyXG4gICAgICA8TGF5b3V0Lz5cclxuICAgIDwvUm91dGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQWRtaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBMb2dvdXQgPSAoeyBDbHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIGNsYXNzTmFtZT17Q2xzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD0nMCAwIDQ4IDQ4Jz5cclxuICAgICAgPHBhdGggZD1cIk04Ljc1IDQyLjVxLTEuNDUgMC0yLjU1LTEuMS0xLjEtMS4xLTEuMS0yLjU1VjkuMTVxMC0xLjQ1IDEuMS0yLjU1IDEuMS0xLjEgMi41NS0xLjFoMTQuN3YzLjY1SDguNzV2MjkuN2gxNC43djMuNjVabTI0LjUtOC43NS0yLjctMi42NSA1LjMtNS4zaC0xNy4zdi0zLjY1aDE3LjJsLTUuMy01LjMgMi43LTIuNiA5LjggOS44WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwic2V0QmFzZVVybCIsImV4dCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwidXBwZXJjYXNlIiwidHh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImVuZE9mUGF0aCIsInBhdGgiLCJsYXN0SW5kZXhPZiIsInVwZGF0ZVRpdGxlIiwibiIsInJlcGxhY2UiLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsImxlbmd0aCIsInN0ckNvbnRhaW5zIiwic3RyIiwic2VhcmNoIiwicmUiLCJSZWdFeHAiLCJSZWFjdCIsIkNvbnRlbnQiLCJjaGlsZHJlbiIsIkZvb3RlciIsImdldFRva2VuIiwidG9rZW4iLCJoZWFkIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpbiIsIk5hdmJhciIsImF4aW9zIiwiUm91dGUiLCJSb3V0ZXMiLCJ1c2VOYXZpZ2F0ZSIsIlNldHRpbmdzIiwiQWRtaW5YTUwiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIlBhZ2VzIiwibmFtZSIsIlBhZ2UiLCJMYXlvdXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2Iiwic3dhcFBhZ2UiLCJwYXRobmFtZSIsIm1hdGNoIiwidW5kZWZpbmVkIiwidXJsIiwibWFwIiwiaSIsIk5hdkxpIiwiTG9nb3V0IiwibWF0Y2hSb3V0ZXMiLCJ1c2VMb2NhdGlvbiIsInVzZU5hdmlnYXRpb24iLCJwcm9kdWNlV2l0aFBhdGNoZXMiLCJlbmFibGUiLCJzZXRFbmFibGUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTG9nb3V0IiwiY29uc29sZSIsImxvZyIsIkJ1dHRvbiIsIlR4dElucHV0IiwicHJvcHMiLCJiYXNlVXJsIiwiYWpheCIsImVtYWlsIiwicGFzc3dvcmQiLCJfdG9rZW4iLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJnZXQiLCJvYmplY3RUb0FycmF5IiwiZCIsImZvcm1hdCIsIk9iamVjdCIsImVudHJpZXMiLCJwdXNoIiwiY2hhbmdlTmFtZSIsInYiLCJBdXRob3IiLCJEZXNjcmlwdGlvbiIsIlNpdGVOYW1lIiwiYnRuQ2xzIiwiZGl2Q2xzIiwiTmF2TGluayIsInRvIiwib25DbGljayIsImlkIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwib25DaGFuZ2UiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUZvY3VzIiwiQ29tcG9uZW50IiwiSHciLCJyZW5kZXIiLCJIZWxsbyIsIk1haW4iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiTWFpbkFkbWluIiwiQ2xzIl0sInNvdXJjZVJvb3QiOiIifQ==