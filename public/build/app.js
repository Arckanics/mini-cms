(self["webpackChunkmini_cms"] = self["webpackChunkmini_cms"] || []).push([["app"],{

/***/ "./assets/react/controllers sync recursive main\\.(j%7Ct)sx?$":
/*!**********************************************************!*\
  !*** ./assets/react/controllers/ sync main\.(j%7Ct)sx?$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./main.jsx": "./assets/react/controllers/main.jsx"
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
webpackContext.id = "./assets/react/controllers sync recursive main\\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/guest/app.scss';

// start the Stimulus application


// react


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive main\\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/react/components/guest/components/Content.jsx":
/*!**************************************************************!*\
  !*** ./assets/react/components/guest/components/Content.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");




const Content = () => {
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.fetcher.articles);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const parse = html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"];
  const path = location.pathname;
  const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ref) {
      const {
        scrollHeight
      } = ref;
      setOverflow(scrollHeight > ref.clientHeight ? true : false);
    }
  }, [ref]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "content",
    className: (!articles ? 'empty' : '') + (overflow ? ' scrollable' : ''),
    ref: node => node ? setRef(node) : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "wrapper"
  }, articles ? articles.map((a, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    key: k,
    className: "article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "article-title"
  }, a.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "article-content"
  }, parse(a.Content)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "code"
  }, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "desc"
  }, "la page ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "variable"
  }, "\" ", path, " \""), " est introuvable..."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./assets/react/components/guest/components/Footer.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/guest/components/Footer.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-container"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/react/components/guest/components/Header.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/guest/components/Header.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Header = ({
  children
}) => {
  const icon = document.querySelector('link[rel=icon]');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    id: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-container"
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "logo-img",
    src: icon.getAttribute('href')
  })), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./assets/react/components/guest/components/Navbar.jsx":
/*!*************************************************************!*\
  !*** ./assets/react/components/guest/components/Navbar.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _redux_slices_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/slices/fetcher */ "./assets/react/components/guest/redux/slices/fetcher.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");





const Navbar = ({
  links,
  landing
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const xml = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
    baseURL: "/request"
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // obtenir la page par rapport à l'url
    const path = location.pathname;
    const where = () => {
      if (path === "/") {
        return links.find(l => l.id == landing);
      }
      return links.find(l => l.url === path.replace(/^\//, ''));
    };
    const page = where();
    if (page !== undefined) {
      xml.get(`page`, {
        params: {
          id: page.id
        }
      }).then(res => {
        dispatch((0,_redux_slices_fetcher__WEBPACK_IMPORTED_MODULE_2__.setData)({
          articles: res.data.data,
          page
        }));
      });
    } else {
      dispatch((0,_redux_slices_fetcher__WEBPACK_IMPORTED_MODULE_2__.setData)({
        articles: null
      }));
    }
  }, [location]);
  const renderLink = l => !l ? null : l.map((l, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: l.id,
    className: "p-0 text-center nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: !(landing == l.id) ? l.url : "",
    className: "navLink"
  }, l.Title)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "wrapper"
  }, renderLink(links)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./assets/react/components/guest/components/index.js":
/*!***********************************************************!*\
  !*** ./assets/react/components/guest/components/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Content": () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Navbar": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./assets/react/components/guest/components/Content.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./assets/react/components/guest/components/Footer.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./assets/react/components/guest/components/Header.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./assets/react/components/guest/components/Navbar.jsx");






/***/ }),

/***/ "./assets/react/components/guest/index.jsx":
/*!*************************************************!*\
  !*** ./assets/react/components/guest/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./assets/react/components/guest/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./assets/react/components/guest/redux/store.js");
/* harmony import */ var _ui_Faw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Faw */ "./assets/react/components/guest/ui/Faw.jsx");






const index = () => {
  const [linkLoad, setLinkLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [landing, setLanding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [socials, setSocials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_5__["default"].create({
    headers: {
      XmlHttpRequest: true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !linkLoad ? ajax.get("/request/page-list").then(res => {
      setLanding(res.data.landing);
      setLinkLoad([...res.data.data]);
    }) : null;
    !socials ? ajax.get("/request/socials").then(res => {
      setSocials(res.data);
    }) : null;
  }, [linkLoad, socials]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Header, null, linkLoad && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
    links: linkLoad,
    landing: landing
  })), linkLoad && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Content, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Footer, null, socials ? socials.map((item, k) => {
    const {
      icon,
      url,
      name
    } = item;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "social-link",
      key: k
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      target: "_blank",
      href: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Faw__WEBPACK_IMPORTED_MODULE_4__.Faw, {
      icon: icon,
      cls: "icon"
    })));
  }) : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./assets/react/components/guest/redux/slices/fetcher.js":
/*!***************************************************************!*\
  !*** ./assets/react/components/guest/redux/slices/fetcher.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setData": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const fetcher = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'fetcher',
  initialState: {},
  reducers: {
    setData: (state, action) => {
      const {
        articles,
        page
      } = action.payload;
      return {
        ...state,
        articles,
        page
      };
    }
  }
});
const {
  setData
} = fetcher.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher.reducer);

/***/ }),

/***/ "./assets/react/components/guest/redux/slices/index.js":
/*!*************************************************************!*\
  !*** ./assets/react/components/guest/redux/slices/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetcher": () => (/* reexport safe */ _fetcher__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetcher */ "./assets/react/components/guest/redux/slices/fetcher.js");



/***/ }),

/***/ "./assets/react/components/guest/redux/store.js":
/*!******************************************************!*\
  !*** ./assets/react/components/guest/redux/store.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices */ "./assets/react/components/guest/redux/slices/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    fetcher: _slices__WEBPACK_IMPORTED_MODULE_0__.fetcher
  }
}));

/***/ }),

/***/ "./assets/react/components/guest/ui/Faw.jsx":
/*!**************************************************!*\
  !*** ./assets/react/components/guest/ui/Faw.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Faw": () => (/* binding */ Faw)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




const Faw = ({
  icon,
  cls
}) => {
  const iconNames = {
    facebook: "fa-square-facebook",
    youtube: "fa-square-youtube",
    twitter: "fa-square-twitter",
    instagram: "fa-square-instagram",
    telegram: "fa-telegram",
    github: "fa-square-github",
    microsoft: "fa-microsoft",
    apple: "fa-apple",
    linux: "fa-linux",
    twitch: "fa-twitch",
    steam: "fa-square-steam",
    discord: "fa-discord"
  };
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFacebookSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faYoutubeSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTwitterSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInstagramSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTelegram, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGithubSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMicrosoft, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faApple, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLinux, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faTwitch, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSteamSquare, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faDiscord);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: "fa-brands " + iconNames[icon],
    className: cls
  });
};

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_guest_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/guest/index */ "./assets/react/components/guest/index.jsx");
// import '../../styles/guest/app.scss';




// Index Root Component

const Main = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_guest_index__WEBPACK_IMPORTED_MODULE_1__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_reduxjs_toolkit_d-0ca055","vendors-node_modules_html-react-parser_index_mjs","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-fdee38"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJEQUFDLCtEQUFLLE9BQUcsQ0FDRjtBQUVYLGlFQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgbWFpblxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3NsaWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC91aS9GYXcuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIG1haW5cXFxcLihqJTdDdClzeD8kXCI7IiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG4vLyBpbXBvcnQgJy4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL21haW5cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgaHRtbFJlYWN0UGFyc2VyIGZyb20gXCJodG1sLXJlYWN0LXBhcnNlclwiXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBhcnRpY2xlcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmZldGNoZXIuYXJ0aWNsZXMpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgcGFyc2UgPSBodG1sUmVhY3RQYXJzZXJcclxuICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWVcclxuICBjb25zdCBbcmVmLCBzZXRSZWZdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbb3ZlcmZsb3csIHNldE92ZXJmbG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZikge1xyXG4gICAgICBjb25zdCB7IHNjcm9sbEhlaWdodCB9ID0gcmVmXHJcbiAgICAgIHNldE92ZXJmbG93KHNjcm9sbEhlaWdodCA+IHJlZi5jbGllbnRIZWlnaHQgPyB0cnVlIDogZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3JlZl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nY29udGVudCcgXHJcbiAgICAgIGNsYXNzTmFtZT17KCFhcnRpY2xlcyA/ICdlbXB0eSc6ICcnKSArIChvdmVyZmxvdyA/ICcgc2Nyb2xsYWJsZScgOiAnJyl9XHJcbiAgICAgIHJlZj17bm9kZSA9PiAobm9kZSA/IHNldFJlZihub2RlKSA6IG51bGwpfSA+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAge1xyXG4gICAgICAgIGFydGljbGVzXHJcbiAgICAgICAgPyBhcnRpY2xlcy5tYXAoKGEsaykgPT4gPGFydGljbGUga2V5PXtrfSBjbGFzc05hbWU9J2FydGljbGUnPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYXJ0aWNsZS10aXRsZSc+e2EuVGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9J3NlcGFyYXRvcicvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FydGljbGUtY29udGVudCc+XHJcbiAgICAgICAgICAgIHsgcGFyc2UoYS5Db250ZW50KSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+KVxyXG4gICAgICAgIDogPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29kZScgPjQwNDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2MnPmxhIHBhZ2UgPHNwYW4gY2xhc3NOYW1lPSd2YXJpYWJsZSc+XCIge3BhdGh9IFwiPC9zcGFuPiBlc3QgaW50cm91dmFibGUuLi48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPWljb25dJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgeyBpY29uICYmIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPXtpY29uLmdldEF0dHJpYnV0ZSgnaHJlZicpfSAvPlxyXG4gICAgICAgIDwvZGl2PiB9XHJcblxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9mZXRjaGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGxpbmtzLCBsYW5kaW5nIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHhtbCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcIi9yZXF1ZXN0XCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBvYnRlbmlyIGxhIHBhZ2UgcGFyIHJhcHBvcnQgw6AgbCd1cmxcclxuICAgIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHdoZXJlID0gKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYgKHBhdGggPT09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmtzLmZpbmQobCA9PiBsLmlkID09IGxhbmRpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC51cmwgPT09IHBhdGgucmVwbGFjZSgvXlxcLy8sICcnKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSB3aGVyZSgpO1xyXG5cclxuICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgeG1sXHJcbiAgICAgICAgLmdldChgcGFnZWAsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBpZDogcGFnZS5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RGF0YSh7IGFydGljbGVzOiByZXMuZGF0YS5kYXRhLCBwYWdlIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldERhdGEoeyBhcnRpY2xlczogbnVsbCB9KSlcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGluayA9IGwgPT5cclxuICAgICFsXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGwubWFwKChsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtsLmlkfSBjbGFzc05hbWU9XCJwLTAgdGV4dC1jZW50ZXIgbmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz17IShsYW5kaW5nID09IGwuaWQpID8gbC51cmwgOiBcIlwifSBjbGFzc05hbWU9XCJuYXZMaW5rXCI+XHJcbiAgICAgICAgICAgICAge2wuVGl0bGV9XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwid3JhcHBlclwiPntyZW5kZXJMaW5rKGxpbmtzKX08L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgTmF2YmFyLFxyXG4gIENvbnRlbnQsXHJcbiAgRm9vdGVyXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEhlYWRlciwgTmF2YmFyLCBDb250ZW50LCBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBGYXcgfSBmcm9tIFwiLi91aS9GYXdcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rTG9hZCwgc2V0TGlua0xvYWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbbGFuZGluZywgc2V0TGFuZGluZ10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc29jaWFscywgc2V0U29jaWFsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgWG1sSHR0cFJlcXVlc3Q6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhbGlua0xvYWRcclxuICAgICAgPyBhamF4LmdldChcIi9yZXF1ZXN0L3BhZ2UtbGlzdFwiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBzZXRMYW5kaW5nKHJlcy5kYXRhLmxhbmRpbmcpO1xyXG4gICAgICAgICAgc2V0TGlua0xvYWQoWy4uLnJlcy5kYXRhLmRhdGFdKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IG51bGw7XHJcbiAgICAhc29jaWFsc1xyXG4gICAgICA/IGFqYXguZ2V0KFwiL3JlcXVlc3Qvc29jaWFsc1wiKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBzZXRTb2NpYWxzKHJlcy5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IG51bGw7XHJcbiAgfSwgW2xpbmtMb2FkLCBzb2NpYWxzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICB7bGlua0xvYWQgJiYgPE5hdmJhciBsaW5rcz17bGlua0xvYWR9IGxhbmRpbmc9e2xhbmRpbmd9IC8+fVxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAge2xpbmtMb2FkICYmIDxDb250ZW50IC8+fVxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIHtzb2NpYWxzXHJcbiAgICAgICAgICA/IHNvY2lhbHMubWFwKChpdGVtLCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBpY29uLCB1cmwsIG5hbWUgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiIGtleT17a30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3VybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhdyBpY29uPXtpY29ufSBjbHM9XCJpY29uXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2ZldGNoZXInLFxyXG4gIGluaXRpYWxTdGF0ZToge30sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXJ0aWNsZXMsIHBhZ2UgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXJ0aWNsZXMsXHJcbiAgICAgICAgcGFnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0RGF0YSB9ID0gZmV0Y2hlci5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyLnJlZHVjZXIiLCJpbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi9mZXRjaGVyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIGZldGNoZXJcclxufSIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3NsaWNlc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGZldGNoZXI6IGZldGNoZXJcclxuICB9XHJcbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhRmFjZWJvb2tTcXVhcmUsXHJcbiAgZmFZb3V0dWJlU3F1YXJlLFxyXG4gIGZhVHdpdHRlclNxdWFyZSxcclxuICBmYUluc3RhZ3JhbVNxdWFyZSxcclxuICBmYVRlbGVncmFtLFxyXG4gIGZhR2l0aHViU3F1YXJlLFxyXG4gIGZhTWljcm9zb2Z0LFxyXG4gIGZhQXBwbGUsXHJcbiAgZmFMaW51eCxcclxuICBmYVR3aXRjaCxcclxuICBmYVN0ZWFtU3F1YXJlLFxyXG4gIGZhRGlzY29yZCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmF3ID0gKHtpY29uLCBjbHN9KSA9PiB7XHJcbiAgY29uc3QgaWNvbk5hbWVzID0ge1xyXG4gICAgZmFjZWJvb2s6IFwiZmEtc3F1YXJlLWZhY2Vib29rXCIsXHJcbiAgICB5b3V0dWJlOiBcImZhLXNxdWFyZS15b3V0dWJlXCIsXHJcbiAgICB0d2l0dGVyOiBcImZhLXNxdWFyZS10d2l0dGVyXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiZmEtc3F1YXJlLWluc3RhZ3JhbVwiLFxyXG4gICAgdGVsZWdyYW06IFwiZmEtdGVsZWdyYW1cIixcclxuICAgIGdpdGh1YjogXCJmYS1zcXVhcmUtZ2l0aHViXCIsXHJcbiAgICBtaWNyb3NvZnQ6IFwiZmEtbWljcm9zb2Z0XCIsXHJcbiAgICBhcHBsZTogXCJmYS1hcHBsZVwiLFxyXG4gICAgbGludXg6IFwiZmEtbGludXhcIixcclxuICAgIHR3aXRjaDogXCJmYS10d2l0Y2hcIixcclxuICAgIHN0ZWFtOiBcImZhLXNxdWFyZS1zdGVhbVwiLFxyXG4gICAgZGlzY29yZDogXCJmYS1kaXNjb3JkXCIsXHJcbiAgfTtcclxuXHJcbiAgbGlicmFyeS5hZGQoXHJcbiAgICBmYUZhY2Vib29rU3F1YXJlLFxyXG4gICAgZmFZb3V0dWJlU3F1YXJlLFxyXG4gICAgZmFUd2l0dGVyU3F1YXJlLFxyXG4gICAgZmFJbnN0YWdyYW1TcXVhcmUsXHJcbiAgICBmYVRlbGVncmFtLFxyXG4gICAgZmFHaXRodWJTcXVhcmUsXHJcbiAgICBmYU1pY3Jvc29mdCxcclxuICAgIGZhQXBwbGUsXHJcbiAgICBmYUxpbnV4LFxyXG4gICAgZmFUd2l0Y2gsXHJcbiAgICBmYVN0ZWFtU3F1YXJlLFxyXG4gICAgZmFEaXNjb3JkLFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17XCJmYS1icmFuZHMgXCIraWNvbk5hbWVzW2ljb25dfSBjbGFzc05hbWU9e2Nsc30gLz5cclxuICApXHJcbn1cclxuIiwiLy8gaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBHdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL2d1ZXN0L2luZGV4JztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gXHJcbiAgPFJvdXRlcj5cclxuICAgIDxHdWVzdCAvPlxyXG4gIDwvUm91dGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsImh0bWxSZWFjdFBhcnNlciIsInVzZUxvY2F0aW9uIiwiQ29udGVudCIsImFydGljbGVzIiwic3RhdGUiLCJmZXRjaGVyIiwibG9jYXRpb24iLCJwYXJzZSIsInBhdGgiLCJwYXRobmFtZSIsInJlZiIsInNldFJlZiIsIm92ZXJmbG93Iiwic2V0T3ZlcmZsb3ciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJub2RlIiwibWFwIiwiYSIsImsiLCJUaXRsZSIsIkZvb3RlciIsImNoaWxkcmVuIiwiSGVhZGVyIiwiaWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInVzZURpc3BhdGNoIiwiTmF2TGluayIsInNldERhdGEiLCJheGlvcyIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsImRpc3BhdGNoIiwieG1sIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndoZXJlIiwiZmluZCIsImwiLCJpZCIsInVybCIsInJlcGxhY2UiLCJwYWdlIiwidW5kZWZpbmVkIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJyZW5kZXJMaW5rIiwiaSIsIlByb3ZpZGVyIiwic3RvcmUiLCJGYXciLCJpbmRleCIsImxpbmtMb2FkIiwic2V0TGlua0xvYWQiLCJzZXRMYW5kaW5nIiwic29jaWFscyIsInNldFNvY2lhbHMiLCJhamF4IiwiaGVhZGVycyIsIlhtbEh0dHBSZXF1ZXN0IiwiaXRlbSIsIm5hbWUiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJsaWJyYXJ5IiwiZmFGYWNlYm9va1NxdWFyZSIsImZhWW91dHViZVNxdWFyZSIsImZhVHdpdHRlclNxdWFyZSIsImZhSW5zdGFncmFtU3F1YXJlIiwiZmFUZWxlZ3JhbSIsImZhR2l0aHViU3F1YXJlIiwiZmFNaWNyb3NvZnQiLCJmYUFwcGxlIiwiZmFMaW51eCIsImZhVHdpdGNoIiwiZmFTdGVhbVNxdWFyZSIsImZhRGlzY29yZCIsIkZvbnRBd2Vzb21lSWNvbiIsImNscyIsImljb25OYW1lcyIsImZhY2Vib29rIiwieW91dHViZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJ0ZWxlZ3JhbSIsImdpdGh1YiIsIm1pY3Jvc29mdCIsImFwcGxlIiwibGludXgiLCJ0d2l0Y2giLCJzdGVhbSIsImRpc2NvcmQiLCJhZGQiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiR3Vlc3QiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==