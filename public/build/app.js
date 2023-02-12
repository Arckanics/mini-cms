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
/* harmony export */   "getBaseURL": () => (/* binding */ getBaseURL)
/* harmony export */ });
const getBaseURL = (ext = "") => {
  return `${window.location.origin}/${ext}`;
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _Functions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Functions/app */ "./assets/react/components/Functions/app.js");




const AdminXML = axios__WEBPACK_IMPORTED_MODULE_3__["default"].create({
  baseURL: (0,_Functions_app__WEBPACK_IMPORTED_MODULE_2__.getBaseURL)('mini-admin'),
  headers: {
    'XMLHttpRequest': true,
    'Content-Type': 'application/json'
  }
});
const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "layout"
  }, !window.location.pathname.match(/login|login\//) ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ajax: AdminXML
  }));
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



const Pages = [{
  name: "Parametres",
  path: "/"
}, {
  name: "Pages",
  path: "/pages"
}, {
  name: "Articles",
  path: "/articles"
}];
const Navbar = () => {
  const handleLogout = () => {
    updateTitle(n);
    console.log('logout');
  };
  const uppercase = txt => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  };
  const updateTitle = n => {
    n = n.replace(/\//g, "");
    let title = document.querySelector('title');
    title.innerText = `Mini-CMS -> ${n.length > 0 ? uppercase(n) : "Settings"}`;
  };
  const setNav = n => {
    updateTitle(n);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "navbar-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "nav-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Mini-CMS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, Pages.map(({
    name,
    path
  }, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_NavLi__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: i,
    to: `/mini-admin${path}`.replace(/\/$/g, ''),
    onClick: () => setNav(path)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "link-txt"
  }, name)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
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





class Login extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.ajax = props.ajax;
    this.state = {
      email: null,
      password: null,
      _token: (0,_Functions_Security__WEBPACK_IMPORTED_MODULE_3__.getToken)()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      ajax
    } = this;
    this.state;
    ajax.post('/login', {
      ...this.state
    }).then(res => {
      const nav = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
      nav('/mini-admin' + res.url);
    });
  }
  render() {
    const {
      email,
      password
    } = this.state;
    const {
      handleChange,
      handleSubmit
    } = this;
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
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./assets/react/components/admin/store.js":
/*!************************************************!*\
  !*** ./assets/react/components/admin/store.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {}
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
    onClick: onClick
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
/* harmony import */ var _components_admin_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin/Navbar */ "./assets/react/components/admin/Navbar.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_admin_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin/Layout */ "./assets/react/components/admin/Layout.jsx");
/* harmony import */ var _components_admin_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin/Content */ "./assets/react/components/admin/Content.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_admin_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin/store */ "./assets/react/components/admin/store.js");







function MainAdmin() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: _components_admin_store__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_admin_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Test")))));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_symfony_stimulus--bc7798"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QjtBQUVBLGlFQUFlQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZNO0FBQ3VCO0FBQ1c7QUFDWDtBQUNFO0FBRVg7QUFDTTtBQUU3QyxTQUFTSyxTQUFTLEdBQUc7RUFDbkIsb0JBQU8sMkRBQUMsaURBQVE7SUFBQyxLQUFLLEVBQUVELCtEQUFLQTtFQUFDLGdCQUMxQiwyREFBQywyREFBTSxxQkFDUCwyREFBQyxnRUFBTSxxQkFDTCwyREFBQyxnRUFBTSxPQUFFLGVBQ1QsMkRBQUMsaUVBQU8scUJBQ04sdUVBQUksTUFBSSxDQUFLLENBRUwsQ0FDSCxDQUNGLENBQ0E7QUFDYjtBQUVBLGlFQUFlQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQztBQUV6QixNQUFNeEUsTUFBTSxHQUFHLENBQUM7RUFBRXlFO0FBQUksQ0FBQyxLQUFLO0VBQzFCLG9CQUNFO0lBQUssU0FBUyxFQUFFQSxHQUFJO0lBQUMsS0FBSyxFQUFDLDRCQUE0QjtJQUFDLE9BQU8sRUFBQztFQUFXLGdCQUN6RTtJQUFNLENBQUMsRUFBQztFQUF5TCxFQUFFLENBQy9MO0FBRVYsQ0FBQztBQUVELGlFQUFlekUsTUFBTTs7Ozs7Ozs7Ozs7O0FDVnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9GdW5jdGlvbnMvYXBwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9GdW5jdGlvbnMvU2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9hZG1pbi9MYXlvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3N0b3JlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvYWRtaW4vdWkvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL05hdkxpLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2FkbWluL3VpL1R4dElucHV0LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2hlbGxvV29ybGQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW5fYWRtaW4uanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2ljb24vaWNvbi11aS9Mb2dvdXQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiLFxuXHRcIi4vbWFpbl9hZG1pbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluX2FkbWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtcmVhY3QtLXJlYWN0JzogaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gJ0BzeW1mb255L3V4LXJlYWN0L2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG5cclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJcclxuY29uc3QgZ2V0QmFzZVVSTCA9IChleHQgPSBcIlwiKSA9PiB7XHJcbiAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59LyR7ZXh0fWBcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0QmFzZVVSTCB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiXHJcbmNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gIGxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPV90b2tlbl0nKVxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGxldCBrZXkgPSB0b2tlbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJylcclxuICB0b2tlbi5yZW1vdmUoKVxyXG4gIHJldHVybiBrZXlcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VG9rZW4gfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vcGFnZXMvTG9naW4nXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZ2V0QmFzZVVSTCB9IGZyb20gJy4uL0Z1bmN0aW9ucy9hcHAnXHJcblxyXG5jb25zdCBBZG1pblhNTCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogZ2V0QmFzZVVSTCgnbWluaS1hZG1pbicpLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgICdYTUxIdHRwUmVxdWVzdCc6IHRydWUsXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxheW91dFwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvbG9naW58bG9naW5cXC8vKSA/IGNoaWxkcmVuIDogPExvZ2luIGFqYXg9e0FkbWluWE1MfS8+XHJcbiAgICAgIH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdkxpIGZyb20gJy4vdWkvTmF2TGknXHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vLi4vaWNvbi9pY29uLXVpL0xvZ291dC5qc3gnXHJcblxyXG5jb25zdCBQYWdlcyA9IFtcclxuICB7bmFtZTogXCJQYXJhbWV0cmVzXCIsIHBhdGg6IFwiL1wifSxcclxuICB7bmFtZTogXCJQYWdlc1wiLCBwYXRoOiBcIi9wYWdlc1wifSxcclxuICB7bmFtZTogXCJBcnRpY2xlc1wiLCBwYXRoOiBcIi9hcnRpY2xlc1wifSxcclxuXVxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVUaXRsZShuKVxyXG4gICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBwZXJjYXNlID0gKHR4dCkgPT4ge1xyXG4gICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zbGljZSgxKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlVGl0bGUgPSAobikgPT4ge1xyXG4gICAgbiA9IG4ucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgTWluaS1DTVMgLT4gJHsobi5sZW5ndGggPiAwID8gdXBwZXJjYXNlKG4pIDogXCJTZXR0aW5nc1wiKX1gXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXROYXYgPSAobikgPT4ge1xyXG4gICAgdXBkYXRlVGl0bGUobilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nbmF2YmFyJz5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJuYXZiYXItdG9wXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdi10aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPk1pbmktQ01TPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBQYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKHtuYW1lLHBhdGh9LGkpID0+IFxyXG4gICAgICAgICAgICAgIDxOYXZMaSBrZXk9e2l9IHRvPXtgL21pbmktYWRtaW4ke3BhdGh9YC5yZXBsYWNlKC9cXC8kL2csICcnKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdihwYXRoKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmstdHh0Jz57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L05hdkxpPilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG5hdiBpZD1cIm5hdi1vcHRzXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naWNvbi1uYXYnPlxyXG4gICAgICAgICAgPE5hdkxpIHRvPVwiL21pbmktYWRtaW4vbG9nb3V0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT48TG9nb3V0IENscz1cInN2Zy1pY29uXCIgLz48L05hdkxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3VpL0J1dHRvbidcclxuaW1wb3J0IFR4dElucHV0IGZyb20gJy4uL3VpL1R4dElucHV0J1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL0Z1bmN0aW9ucy9TZWN1cml0eSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuYWpheCA9IHByb3BzLmFqYXhcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgX3Rva2VuOiBnZXRUb2tlbigpLFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qge2FqYXh9ID0gdGhpc1xyXG4gICAgdGhpcy5zdGF0ZVxyXG4gICAgYWpheC5wb3N0KCcvbG9naW4nLCB7Li4udGhpcy5zdGF0ZX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gdXNlTmF2aWdhdGUoKVxyXG4gICAgICAgIG5hdignL21pbmktYWRtaW4nK3Jlcy51cmwpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCB7aGFuZGxlQ2hhbmdlLCBoYW5kbGVTdWJtaXR9ID0gdGhpc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwibG9naW5cIiBjbGFzc05hbWU9J3JvdW5kZWQtbGcgYmctd2hpdGUgY29sb3ItZGFyaycgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tdGl0bGUnPkNvbm5leGlvbjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1jbGVhci1vdXRsaW5lJz5cclxuICAgICAgICAgIDxUeHRJbnB1dCB0eXBlPVwidGV4dFwiIGxhYmVsPVwiQ29tcHRlKEVtYWlsKVwiIGlkPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiYWRyZXNzZSBlbWFpbC4uLlwiXHJcbiAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VHh0SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIm1vdCBkZSBwYXNzZS4uLlwiXHJcbiAgICAgICAgICAgIGlucHV0Q2xzPSdpbnB1dC10eHQnIGxhYmVsQ2xzPSdsYWJlbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZGl2Q2xzPSdwdC0xIHAtNCdcclxuICAgICAgICAgIGJ0bkNscz0nYnRuLXByaW1hcnknXHJcbiAgICAgICAgPk1lIENvbm5lY3RlcjwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7fVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBidG5DbHMsIGRpdkNscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbHN9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YnRuQ2xzfT57IGNoaWxkcmVuIH08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmNvbnN0IE5hdkxpID0gKHsgY2hpbGRyZW4sIHRvLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8TmF2TGluayBjbGFzc05hbWU9J25hdi1saW5rJyB0bz17dG99IG9uQ2xpY2s9e29uQ2xpY2t9PnsgY2hpbGRyZW4gfTwvTmF2TGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gVHh0SW5wdXQoeyBpZCwgdmFsdWUsIGxhYmVsLCBwbGFjZWhvbGRlciwgdHlwZSwgaW5wdXRDbHMsIGRpdkNscyA9ICdpbnB1dC13cmFwIHAtMicsIGxhYmVsQ2xzID0gJ2Jsb2NrIHAtMicsIG9uQ2hhbmdlIH0pIHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyhkaXZDbHMgKyAoaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpKX0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPXtsYWJlbENsc30+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSBpZD17aWR9IGNsYXNzTmFtZT17aW5wdXRDbHN9IG5hbWU9e2lkfSB2YWx1ZT17dmFsdWUgPyB2YWx1ZSA6IFwiXCJ9IG9uRm9jdXM9e2hhbmRsZUZvY3VzfSBvbkJsdXI9e2hhbmRsZUZvY3VzfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHh0SW5wdXQiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBIdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiA8aDE+SGVsbG8gV29ybGQ8L2gxPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBIZWxsbyBmcm9tICcuLi9jb21wb25lbnRzL2hlbGxvV29ybGQnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgcmV0dXJuIDxkaXY+PEhlbGxvLz48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL05hdmJhclwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4vTGF5b3V0XCI7XHJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluL0NvbnRlbnRcIjtcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluL3N0b3JlJ1xyXG5cclxuZnVuY3Rpb24gTWFpbkFkbWluKCkge1xyXG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFJvdXRlcj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgIDxoMT5UZXN0PC9oMT5cclxuXHJcbiAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUm91dGVyPlxyXG4gIDwvUHJvdmlkZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5BZG1pbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvZ291dCA9ICh7IENscyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgY2xhc3NOYW1lPXtDbHN9IHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PScwIDAgNDggNDgnPlxyXG4gICAgICA8cGF0aCBkPVwiTTguNzUgNDIuNXEtMS40NSAwLTIuNTUtMS4xLTEuMS0xLjEtMS4xLTIuNTVWOS4xNXEwLTEuNDUgMS4xLTIuNTUgMS4xLTEuMSAyLjU1LTEuMWgxNC43djMuNjVIOC43NXYyOS43aDE0Ljd2My42NVptMjQuNS04Ljc1LTIuNy0yLjY1IDUuMy01LjNoLTE3LjN2LTMuNjVoMTcuMmwtNS4zLTUuMyAyLjctMi42IDkuOCA5LjhaXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJnZXRCYXNlVVJMIiwiZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJSZWFjdCIsIkNvbnRlbnQiLCJjaGlsZHJlbiIsImdldFRva2VuIiwidG9rZW4iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiTG9naW4iLCJheGlvcyIsIkFkbWluWE1MIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJMYXlvdXQiLCJwYXRobmFtZSIsIm1hdGNoIiwiTmF2TGkiLCJMb2dvdXQiLCJQYWdlcyIsIm5hbWUiLCJwYXRoIiwiTmF2YmFyIiwiaGFuZGxlTG9nb3V0IiwidXBkYXRlVGl0bGUiLCJuIiwiY29uc29sZSIsImxvZyIsInVwcGVyY2FzZSIsInR4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBsYWNlIiwidGl0bGUiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJzZXROYXYiLCJtYXAiLCJpIiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVHh0SW5wdXQiLCJ1c2VOYXZpZ2F0ZSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJhamF4Iiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiX3Rva2VuIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlcyIsIm5hdiIsInVybCIsInJlbmRlciIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsImJ0bkNscyIsImRpdkNscyIsIk5hdkxpbmsiLCJ0byIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsImlkIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJpbnB1dENscyIsImxhYmVsQ2xzIiwib25DaGFuZ2UiLCJpc0FjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUZvY3VzIiwiSHciLCJIZWxsbyIsIk1haW4iLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUHJvdmlkZXIiLCJzdG9yZSIsIk1haW5BZG1pbiIsIkNscyJdLCJzb3VyY2VSb290IjoiIn0=