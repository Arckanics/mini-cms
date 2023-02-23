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
        data: {
          url: path
        },
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
/* harmony import */ var _ui_Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Selector */ "./assets/react/components/admin/ui/Selector.jsx");
/* harmony import */ var _ui_TxtInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/TxtInput */ "./assets/react/components/admin/ui/TxtInput.jsx");




const Settings = ({
  data,
  ajax
}) => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ajax.get(data.url).then(res => {
      console.log(data.url);
      setState(res.data.data);
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
  const setLanding = v => {
    setState({
      ...state,
      Landing: v
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title mb-8"
  }, "Param\xE8tres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-3 py-3 justify-between"
  }, state ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.uppercase)(changeName("Author")),
    id: "Author",
    value: state.Author,
    placeholder: changeName("Author"),
    inputCls: "input-txt w-full",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.uppercase)(changeName("Description")),
    id: "Description",
    value: state.Description,
    placeholder: changeName("Description"),
    inputCls: "input-txt w-full",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_TxtInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "text",
    label: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_1__.uppercase)(changeName("SiteName")),
    id: "SiteName",
    value: state.SiteName,
    placeholder: changeName("SiteName"),
    inputCls: "input-txt w-full",
    labelCls: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Selector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cls: "",
    iconCls: "icon",
    active: state.Landing,
    list: state.Pages,
    action: setLanding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "block py-2"
  }, "Page"))) : null));
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
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Functions/app */ "./assets/react/components/Functions/app.js");



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
    className: cls + ' selector',
    onFocus: toggleSelect,
    onBlur: toggleSelect,
    tabIndex: -1
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "opt active",
    value: landing.id,
    onClick: toggle ? toggleSelect : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "txt"
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.uppercase)(landing.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon_ui_Expand__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }, (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.uppercase)(title))))) : null);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin/Layout */ "./assets/react/components/admin/Layout.jsx");



function MainAdmin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-react_dist-d0f2d2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUNGO0FBQ2I7QUFFQSxpRUFBZUEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQztBQUV6QixNQUFNeEMsTUFBTSxHQUFHLENBQUM7RUFBRUM7QUFBSSxDQUFDLEtBQUs7RUFDMUIsb0JBQ0U7SUFBSyxTQUFTLEVBQUVBLEdBQUk7SUFBQyxLQUFLLEVBQUMsNEJBQTRCO0lBQUMsT0FBTyxFQUFDO0VBQWMsZ0JBQzVFO0lBQU0sQ0FBQyxFQUFDO0VBQXVELEVBQUUsQ0FDN0Q7QUFFVixDQUFDO0FBRUQsaUVBQWVELE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkk7QUFFekIsTUFBTTNDLE1BQU0sR0FBRyxDQUFDO0VBQUVvRjtBQUFJLENBQUMsS0FBSztFQUMxQixvQkFDRTtJQUFLLFNBQVMsRUFBRUEsR0FBSTtJQUFDLEtBQUssRUFBQyw0QkFBNEI7SUFBQyxPQUFPLEVBQUM7RUFBVyxnQkFDekU7SUFBTSxDQUFDLEVBQUM7RUFBeUwsRUFBRSxDQUMvTDtBQUVWLENBQUM7QUFFRCxpRUFBZXBGLE1BQU07Ozs7Ozs7Ozs7OztBQ1ZyQiIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmktY21zLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvRnVuY3Rpb25zL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0Z1bmN0aW9ucy9TZWN1cml0eS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vcGFnZXMvU2V0dGluZ3MuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL05hdkxpLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1NlbGVjdG9yLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1R4dElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2hlbGxvV29ybGQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9FeHBhbmQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9Mb2dvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCIsXG5cdFwiLi9tYWluX2FkbWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIlxyXG4vLyB1cmwgZGUgYmFzZSBwb3VyIGZhY2lsaXRlciBsYSBuYXZpZ2F0aW9uXHJcblxyXG5jb25zdCBzZXRCYXNlVXJsID0gKGV4dCA9IFwiXCIpID0+IHtcclxuICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vJHtleHR9YFxyXG59XHJcblxyXG4vLyBwcmVtacOocmUgbGV0dHJlIGVuIG1hanVzY3VsZVxyXG5cclxuY29uc3QgdXBwZXJjYXNlID0gKHR4dCkgPT4ge1xyXG4gIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc2xpY2UoMSlcclxufVxyXG5cclxuLy8gb2J0ZW5pciBsJ3VybCByZWxhdGl2ZVxyXG5cclxuY29uc3QgZW5kT2ZQYXRoID0gKHBhdGgpID0+IHtcclxuICByZXR1cm4gcGF0aC5zbGljZShwYXRoLmxhc3RJbmRleE9mKCdcXC8nKSlcclxufVxyXG5cclxuY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gIG4gPSBuLnJlcGxhY2UoL1xcLy9nLCBcIlwiKVxyXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJylcclxuICB0aXRsZS5pbm5lclRleHQgPSBgTWluaS1DTVMgLT4gJHsobi5sZW5ndGggPiAwID8gdXBwZXJjYXNlKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG5jb25zdCBzdHJDb250YWlucyA9IChzdHIsIHNlYXJjaCkgPT4ge1xyXG4gIGxldCByZSA9IG5ldyBSZWdFeHAoc2VhcmNoLCBcImdpXCIpXHJcbiAgcmV0dXJuIHN0ci5zZWFyY2gocmUpID49IDAgPyB0cnVlIDogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IHsgc2V0QmFzZVVybCwgdXBwZXJjYXNlLCB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoLCBzdHJDb250YWlucyB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPSdhZG1pbi1mb290ZXInPkZvb3RlcjwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL3BhZ2VzL0xvZ2luJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZW5kT2ZQYXRoLCBzZXRCYXNlVXJsLCBzdHJDb250YWlucyB9IGZyb20gJy4uL0Z1bmN0aW9ucy9hcHAnXHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMsIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vcGFnZXMvU2V0dGluZ3MnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5jb25zdCBBZG1pblhNTCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogc2V0QmFzZVVybCgnbWluaS1hZG1pbicpLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdYTUxIdHRwUmVxdWVzdCc6IHRydWUsXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgUGFnZXMgPSBbXHJcbiAge25hbWU6IFwiUGFyYW1ldHJlc1wiLCBwYXRoOiBcIi9cIiwgUGFnZTogU2V0dGluZ3N9LFxyXG4gIHtuYW1lOiBcIlBhZ2VzXCIsIHBhdGg6IFwiL3BhZ2VzXCIsIFBhZ2U6IFNldHRpbmdzfSxcclxuICB7bmFtZTogXCJBcnRpY2xlc1wiLCBwYXRoOiBcIi9hcnRpY2xlc1wiLCBQYWdlOiBTZXR0aW5nc30sXHJcbl1cclxuXHJcbmNvbnN0IExheW91dCA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2FwUGFnZShlbmRPZlBhdGgobG9jYXRpb24ucGF0aG5hbWUpKTtcclxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvXFwvJC8sICcnKSA/IG5hdihsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpKSA6IHVuZGVmaW5lZFxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzd2FwUGFnZSA9IChwYXRoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7dXJsOiBwYXRofSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICA8Um91dGVzPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPSdtaW5pLWFkbWluL2xvZ2luJyBlbGVtZW50PXs8TG9naW4gYWpheD17QWRtaW5YTUx9IC8+fSAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFBhZ2VzLm1hcCgoe3BhdGgsUGFnZX0saSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlIGtleT17aX0gcGF0aD17YG1pbmktYWRtaW4ke3BhdGh9YH0gZWxlbWVudD17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgUGFnZXM9e1BhZ2VzfSBBamF4PXtBZG1pblhNTH0gc3dhcFBhZ2U9e3N3YXBQYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2UgZGF0YT17e3VybDogcGF0aH19IGFqYXg9e0FkbWluWE1MfS8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9IC8+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Sb3V0ZXM+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2TGkgZnJvbSAnLi91aS9OYXZMaSdcclxuaW1wb3J0IExvZ291dCBmcm9tICcuLi8uLi9pY29uL2ljb24tdWkvTG9nb3V0LmpzeCdcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyB1cGRhdGVUaXRsZSwgZW5kT2ZQYXRoLCB1cHBlcmNhc2UgfSBmcm9tICcuLi9GdW5jdGlvbnMvYXBwJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHtQYWdlcywgc3dhcFBhZ2V9KSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgW2VuYWJsZSwgc2V0RW5hYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUoZW5kT2ZQYXRoKGxvY2F0aW9uLnBhdGhuYW1lKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRFbmFibGUodHJ1ZSlcclxuICAgIH0sIDUwKVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9eyFlbmFibGUgPyAnZmFkZU91dExlZnQnIDogJyd9PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhci10b3BcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2LXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDE+TWluaS1DTVM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgUGFnZXMubWFwKFxyXG4gICAgICAgICAgICAgICh7bmFtZSxwYXRofSxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3VwZGF0ZVRpdGxlKHBhdGgpOyBzd2FwUGFnZShwYXRoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpPn0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxuYXYgaWQ9XCJuYXYtb3B0c1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2ljb24tbmF2Jz5cclxuICAgICAgICAgIDxOYXZMaSB0bz1cIi9taW5pLWFkbWluL2xvZ291dFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+PExvZ291dCBDbHM9XCJzdmctaWNvblwiIC8+PC9OYXZMaT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbidcclxuaW1wb3J0IFR4dElucHV0IGZyb20gJy4uL3VpL1R4dElucHV0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBuYXYgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgY29uc3QgYmFzZVVybCA9ICcvbWluaS1hZG1pbidcclxuICBjb25zdCBhamF4ID0gcHJvcHMuYWpheFxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIF90b2tlbjogZ2V0VG9rZW4oKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGFqYXgucG9zdCgnL2xvZ2luJywgeyAuLi5zdGF0ZSB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbmF2KGAke2Jhc2VVcmx9JHtyZXMuZGF0YS51cmx9YClcclxuICAgICAgfSkuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICBuYXYoYCR7YmFzZVVybH0vbG9naW5gKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHN0YXRlXHJcblxyXG4gIHJldHVybiA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgaWQ9XCJsb2dpblwiIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBiZy13aGl0ZSBjb2xvci1kYXJrJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXRpdGxlJz5Db25uZXhpb248L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCJDb21wdGUoRW1haWwpXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJhZHJlc3NlIGVtYWlsLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUeHRJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwibW90IGRlIHBhc3NlLi4uXCJcclxuICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0JyBsYWJlbENscz0nbGFiZWwnIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxCdXR0b25cclxuICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgYnRuQ2xzPSdidG4tcHJpbWFyeSdcclxuICAgID5NZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICA8L2Zvcm0+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1cHBlcmNhc2UgfSBmcm9tICcuLi8uLi9GdW5jdGlvbnMvYXBwJ1xyXG5pbXBvcnQgU2VsZWN0b3IgZnJvbSAnLi4vdWkvU2VsZWN0b3InXHJcbmltcG9ydCBUeHRJbnB1dCBmcm9tICcuLi91aS9UeHRJbnB1dCdcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKHsgZGF0YSwgYWpheCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobnVsbClcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWpheC5nZXQoZGF0YS51cmwpXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS51cmwpO1xyXG4gICAgICAgIHNldFN0YXRlKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGNoYW5nZU5hbWUgPSAodikgPT4ge1xyXG4gICAgc3dpdGNoICh2KSB7XHJcbiAgICAgIGNhc2UgJ0F1dGhvcic6XHJcbiAgICAgICAgcmV0dXJuICdhdXRldXInO1xyXG4gICAgICBjYXNlICdEZXNjcmlwdGlvbic6IFxyXG4gICAgICAgIHJldHVybiAnZGVzY3JpcHRpb24nO1xyXG4gICAgICBjYXNlICdTaXRlTmFtZSc6XHJcbiAgICAgICAgcmV0dXJuICdub20gZHUgc2l0ZSc7XHJcbiAgICAgIGNhc2UgJ0xhbmRpbmcnOlxyXG4gICAgICAgIHJldHVybiAncGFnZSBkXFwnYWNjdWVpbCc7XHJcbiAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNldExhbmRpbmcgPSAodikgPT4ge1xyXG4gICAgc2V0U3RhdGUoey4uLnN0YXRlLCBMYW5kaW5nOiB2fSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUgbWItOCc+UGFyYW3DqHRyZXM8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTMgcHktMyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHN0YXRlID8gPD5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9e3VwcGVyY2FzZShjaGFuZ2VOYW1lKFwiQXV0aG9yXCIpKX0gaWQ9XCJBdXRob3JcIiB2YWx1ZT17c3RhdGUuQXV0aG9yfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIkF1dGhvclwiKX1cclxuICAgICAgICAgICAgICBpbnB1dENscz0naW5wdXQtdHh0IHctZnVsbCcgbGFiZWxDbHM9J2xhYmVsJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInRleHRcIiBsYWJlbD17dXBwZXJjYXNlKGNoYW5nZU5hbWUoXCJEZXNjcmlwdGlvblwiKSl9IGlkPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17c3RhdGUuRGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPXtjaGFuZ2VOYW1lKFwiRGVzY3JpcHRpb25cIil9XHJcbiAgICAgICAgICAgICAgaW5wdXRDbHM9J2lucHV0LXR4dCB3LWZ1bGwnIGxhYmVsQ2xzPSdsYWJlbCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFR4dElucHV0IHR5cGU9XCJ0ZXh0XCIgbGFiZWw9e3VwcGVyY2FzZShjaGFuZ2VOYW1lKFwiU2l0ZU5hbWVcIikpfSBpZD1cIlNpdGVOYW1lXCIgdmFsdWU9e3N0YXRlLlNpdGVOYW1lfSBwbGFjZWhvbGRlcj17Y2hhbmdlTmFtZShcIlNpdGVOYW1lXCIpfVxyXG4gICAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQgdy1mdWxsJyBsYWJlbENscz0nbGFiZWwnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RvciBjbHM9JycgaWNvbkNscz0naWNvbicgYWN0aXZlPXtzdGF0ZS5MYW5kaW5nfSBsaXN0PXtzdGF0ZS5QYWdlc30gYWN0aW9uPXtzZXRMYW5kaW5nfT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdibG9jayBweS0yJz5QYWdlPC9oMj5cclxuICAgICAgICAgICAgPC9TZWxlY3Rvcj5cclxuICAgICAgICAgIDwvPiA6IFxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ0bkNscywgZGl2Q2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsc30+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtidG5DbHN9PnsgY2hpbGRyZW4gfTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY29uc3QgTmF2TGkgPSAoeyBjaGlsZHJlbiwgdG8sIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGk+XHJcbiAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWxpbmsnIHRvPXt0b30gb25DbGljaz17b25DbGlja30gZW5kPnsgY2hpbGRyZW4gfTwvTmF2TGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXhwYW5kIGZyb20gJy4uLy4uLy4uL2ljb24vaWNvbi11aS9FeHBhbmQnXHJcbmltcG9ydCB7IHVwcGVyY2FzZSB9IGZyb20gJy4uLy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBTZWxlY3RvciA9ICh7IGNscywgbGlzdCwgYWN0aXZlLCBpY29uQ2xzLCBjaGlsZHJlbiwgYWN0aW9uIH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2xhc3RFdmVudCwgc2V0TGFzdEV2ZW50XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGxhbmRpbmcgPSBsaXN0LmZpbmQoaSA9PiBpLmlkID09PSBhY3RpdmUpO1xyXG4gIGNvbnN0IGF2YWlibGUgPSBsaXN0LmZpbHRlcihpID0+IGkuaWQgIT09IGFjdGl2ZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2VsZWN0ID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgJGVsID0gZS50YXJnZXRcclxuICAgIHdoaWxlICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RvcicpID09IGZhbHNlKSB7XHJcbiAgICAgICRlbCA9ICRlbC5wYXJlbnROb2RlXHJcbiAgICB9XHJcbiAgICBpZiAoKGUudHlwZSA9PT0gJ2NsaWNrJyAmJiBsYXN0RXZlbnQgPT09ICdjbGljaycpIHx8IGUudHlwZSAhPT0gJ2NsaWNrJykge1xyXG4gICAgICBzZXRUb2dnbGUoIXRvZ2dsZSlcclxuICAgICAgbGFzdEV2ZW50ID09PSAnY2xpY2snICYmIHRvZ2dsZSA9PT0gdHJ1ZSA/ICRlbC5ibHVyKCkgOiBudWxsXHJcbiAgICB9IFxyXG4gICAgc2V0TGFzdEV2ZW50KGUudHlwZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VWYWx1ZSA9IChlLHYpID0+IHtcclxuICAgIHRvZ2dsZVNlbGVjdChlKTtcclxuICAgIGFjdGlvbih2KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMgKyAnIHNlbGVjdG9yJ30gb25Gb2N1cz17dG9nZ2xlU2VsZWN0fSBvbkJsdXI9e3RvZ2dsZVNlbGVjdH0gdGFiSW5kZXg9ey0xfT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvcHQgYWN0aXZlJyB2YWx1ZT17bGFuZGluZy5pZH0gb25DbGljaz17dG9nZ2xlID8gdG9nZ2xlU2VsZWN0IDogbnVsbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3R4dCc+e3VwcGVyY2FzZShsYW5kaW5nLnRpdGxlKX08L2Rpdj48RXhwYW5kIGNscz17aWNvbkNsc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHRvZ2dsZSA/IDxkaXYgY2xhc3NOYW1lPSdvcHQtd3JhcHBlcic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YWlibGUubWFwKCh7aWQsdGl0bGV9LGspID0+IFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9J29wdCcgdmFsdWU9e2lkfSBvbkNsaWNrPXsoZSkgPT4gY2hhbmdlVmFsdWUoZSxpZCl9ID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0eHQnPnt1cHBlcmNhc2UodGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBUeHRJbnB1dCh7IGlkLCB2YWx1ZSwgbGFiZWwsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbnB1dENscywgZGl2Q2xzID0gJ2lucHV0LXdyYXAgcC0yJywgbGFiZWxDbHMgPSAnYmxvY2sgcC0yJywgb25DaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFpc0FjdGl2ZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17KGRpdkNscyArIChpc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikpfT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e2xhYmVsQ2xzfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IGlkPXtpZH0gY2xhc3NOYW1lPXtpbnB1dENsc30gbmFtZT17aWR9IHZhbHVlPXt2YWx1ZSA/IHZhbHVlIDogXCJcIn0gb25Gb2N1cz17aGFuZGxlRm9jdXN9IG9uQmx1cj17aGFuZGxlRm9jdXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeHRJbnB1dCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEh3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IEhlbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVsbG9Xb3JsZCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICByZXR1cm4gPGRpdj48SGVsbG8vPjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi9MYXlvdXRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNYWluQWRtaW4oKSB7XHJcbiAgcmV0dXJuIDxSb3V0ZXI+XHJcbiAgICAgIDxMYXlvdXQvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BZG1pbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEV4cGFuZCA9ICh7IGNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtjbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCA5NiA5NjAgOTYwXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNNDgwIDcxMSAyNDAgNDcxbDQzLTQzIDE5NyAxOTggMTk3LTE5NyA0MyA0My0yNDAgMjM5WlwiLz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9nb3V0ID0gKHsgQ2xzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e0Nsc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9JzAgMCA0OCA0OCc+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOC43NSA0Mi41cS0xLjQ1IDAtMi41NS0xLjEtMS4xLTEuMS0xLjEtMi41NVY5LjE1cTAtMS40NSAxLjEtMi41NSAxLjEtMS4xIDIuNTUtMS4xaDE0Ljd2My42NUg4Ljc1djI5LjdoMTQuN3YzLjY1Wm0yNC41LTguNzUtMi43LTIuNjUgNS4zLTUuM2gtMTcuM3YtMy42NWgxNy4ybC01LjMtNS4zIDIuNy0yLjYgOS44IDkuOFpcIi8+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInNldEJhc2VVcmwiLCJleHQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInVwcGVyY2FzZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJlbmRPZlBhdGgiLCJwYXRoIiwibGFzdEluZGV4T2YiLCJ1cGRhdGVUaXRsZSIsIm4iLCJyZXBsYWNlIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJzdHJDb250YWlucyIsInN0ciIsInNlYXJjaCIsInJlIiwiUmVnRXhwIiwiUmVhY3QiLCJDb250ZW50IiwiY2hpbGRyZW4iLCJGb290ZXIiLCJnZXRUb2tlbiIsInRva2VuIiwiaGVhZCIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJOYXZiYXIiLCJheGlvcyIsIlJvdXRlIiwiUm91dGVzIiwidXNlTmF2aWdhdGUiLCJTZXR0aW5ncyIsIkFkbWluWE1MIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJQYWdlcyIsIm5hbWUiLCJQYWdlIiwiTGF5b3V0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5hdiIsInN3YXBQYWdlIiwicGF0aG5hbWUiLCJtYXRjaCIsInVuZGVmaW5lZCIsInVybCIsIm1hcCIsImkiLCJOYXZMaSIsIkxvZ291dCIsInVzZUxvY2F0aW9uIiwiZW5hYmxlIiwic2V0RW5hYmxlIiwic2V0VGltZW91dCIsImhhbmRsZUxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJCdXR0b24iLCJUeHRJbnB1dCIsInByb3BzIiwiYmFzZVVybCIsImFqYXgiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3Rva2VuIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiU2VsZWN0b3IiLCJnZXQiLCJjaGFuZ2VOYW1lIiwidiIsInNldExhbmRpbmciLCJMYW5kaW5nIiwiQXV0aG9yIiwiRGVzY3JpcHRpb24iLCJTaXRlTmFtZSIsImJ0bkNscyIsImRpdkNscyIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCJFeHBhbmQiLCJjbHMiLCJsaXN0IiwiYWN0aXZlIiwiaWNvbkNscyIsImFjdGlvbiIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImxhc3RFdmVudCIsInNldExhc3RFdmVudCIsImxhbmRpbmciLCJmaW5kIiwiaWQiLCJhdmFpYmxlIiwiZmlsdGVyIiwidG9nZ2xlU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJGVsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwidHlwZSIsImJsdXIiLCJjaGFuZ2VWYWx1ZSIsImsiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaW5wdXRDbHMiLCJsYWJlbENscyIsIm9uQ2hhbmdlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVGb2N1cyIsIkNvbXBvbmVudCIsIkh3IiwicmVuZGVyIiwiSGVsbG8iLCJNYWluIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIk1haW5BZG1pbiIsIkNscyJdLCJzb3VyY2VSb290IjoiIn0=