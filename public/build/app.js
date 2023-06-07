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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./assets/react/components/guest/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./assets/react/components/guest/redux/store.js");





const index = () => {
  const [linkLoad, setLinkLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [landing, setLanding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_4__["default"].create({
    headers: {
      "XmlHttpRequest": true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !linkLoad ? ajax.get('/request/page-list').then(res => {
      setLanding(res.data.landing);
      setLinkLoad([...res.data.data]);
    }) : null;
  }, [linkLoad]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Header, null, linkLoad && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
    links: linkLoad,
    landing: landing
  })), linkLoad && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Content, null));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js-node_modules_symfony_stimulus--23ceaf","vendors-node_modules_html-react-parser_index_mjs","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-fdee38"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0VBQ2hCQyxRQUFRLEVBQUU7SUFDUm5DLE9BQU8sRUFBRSxDQUFDMUIsS0FBSyxFQUFFOEQsTUFBTSxLQUFLO01BQzFCLE1BQU07UUFBRS9ELFFBQVE7UUFBRTBDO01BQUssQ0FBQyxHQUFHcUIsTUFBTSxDQUFDQyxPQUFPO01BQ3pDLE9BQU87UUFDTCxHQUFHL0QsS0FBSztRQUNSRCxRQUFRO1FBQ1IwQztNQUNGLENBQUM7SUFDSDtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUssTUFBTTtFQUFFZjtBQUFRLENBQUMsR0FBR3pCLE9BQU8sQ0FBQytELE9BQU87QUFFMUMsaUVBQWUvRCxPQUFPLENBQUNnRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFDaEI7QUFHbEMsaUVBQWVDLGdFQUFjLENBQUM7RUFDNUJELE9BQU8sRUFBRTtJQUNQaEUsT0FBTyxFQUFFQSw0Q0FBT0E7RUFDbEI7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUN5QjtBQUNpQztBQUNaOztBQUU5Qzs7QUFFQSxNQUFNcUUsSUFBSSxHQUFHLG1CQUNYLDJEQUFDLDJEQUFNLHFCQUNMLDJEQUFDLCtEQUFLLE9BQUcsQ0FDRjtBQUVYLGlFQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgbWFpblxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3NsaWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgbWFpblxcXFwuKGolN0N0KXN4PyRcIjsiLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvbWFpblxcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBodG1sUmVhY3RQYXJzZXIgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCJcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmV0Y2hlci5hcnRpY2xlcylcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBwYXJzZSA9IGh0bWxSZWFjdFBhcnNlclxyXG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZVxyXG4gIGNvbnN0IFtyZWYsIHNldFJlZl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtvdmVyZmxvdywgc2V0T3ZlcmZsb3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVmKSB7XHJcbiAgICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0IH0gPSByZWZcclxuICAgICAgc2V0T3ZlcmZsb3coc2Nyb2xsSGVpZ2h0ID4gcmVmLmNsaWVudEhlaWdodCA/IHRydWUgOiBmYWxzZSlcclxuICAgIH1cclxuICB9LCBbcmVmXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSdjb250ZW50JyBcclxuICAgICAgY2xhc3NOYW1lPXsoIWFydGljbGVzID8gJ2VtcHR5JzogJycpICsgKG92ZXJmbG93ID8gJyBzY3JvbGxhYmxlJyA6ICcnKX1cclxuICAgICAgcmVmPXtub2RlID0+IChub2RlID8gc2V0UmVmKG5vZGUpIDogbnVsbCl9ID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgYXJ0aWNsZXNcclxuICAgICAgICA/IGFydGljbGVzLm1hcCgoYSxrKSA9PiA8YXJ0aWNsZSBrZXk9e2t9IGNsYXNzTmFtZT0nYXJ0aWNsZSc+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdhcnRpY2xlLXRpdGxlJz57YS5UaXRsZX08L2gzPlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT0nc2VwYXJhdG9yJy8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJ0aWNsZS1jb250ZW50Jz5cclxuICAgICAgICAgICAgeyBwYXJzZShhLkNvbnRlbnQpIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT4pXHJcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb2RlJyA+NDA0PC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzYyc+bGEgcGFnZSA8c3BhbiBjbGFzc05hbWU9J3ZhcmlhYmxlJz5cIiB7cGF0aH0gXCI8L3NwYW4+IGVzdCBpbnRyb3V2YWJsZS4uLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICB7IGljb24gJiYgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9e2ljb24uZ2V0QXR0cmlidXRlKCdocmVmJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+IH1cclxuXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL2ZldGNoZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgbGlua3MsIGxhbmRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgeG1sID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiL3JlcXVlc3RcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9idGVuaXIgbGEgcGFnZSBwYXIgcmFwcG9ydCDDoCBsJ3VybFxyXG4gICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgY29uc3Qgd2hlcmUgPSAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBpZiAocGF0aCA9PT0gXCIvXCIpIHtcclxuICAgICAgICByZXR1cm4gbGlua3MuZmluZChsID0+IGwuaWQgPT0gbGFuZGluZyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpbmtzLmZpbmQobCA9PiBsLnVybCA9PT0gcGF0aC5yZXBsYWNlKC9eXFwvLywgJycpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IHdoZXJlKCk7XHJcblxyXG4gICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB4bWxcclxuICAgICAgICAuZ2V0KGBwYWdlYCwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXREYXRhKHsgYXJ0aWNsZXM6IHJlcy5kYXRhLmRhdGEsIHBhZ2UgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goc2V0RGF0YSh7IGFydGljbGVzOiBudWxsIH0pKVxyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbl0pO1xyXG5cclxuICBjb25zdCByZW5kZXJMaW5rID0gbCA9PlxyXG4gICAgIWxcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogbC5tYXAoKGwsIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2wuaWR9IGNsYXNzTmFtZT1cInAtMCB0ZXh0LWNlbnRlciBuYXYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXshKGxhbmRpbmcgPT0gbC5pZCkgPyBsLnVybCA6IFwiXCJ9IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5cclxuICAgICAgICAgICAgICB7bC5UaXRsZX1cclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+e3JlbmRlckxpbmsobGlua3MpfTwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgQ29udGVudCBmcm9tIFwiLi9Db250ZW50XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIEhlYWRlcixcclxuICBOYXZiYXIsXHJcbiAgQ29udGVudCxcclxuICBGb290ZXJcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgSGVhZGVyLCBOYXZiYXIsIENvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbbGFuZGluZywgc2V0TGFuZGluZ10gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlhtbEh0dHBSZXF1ZXN0XCI6IHRydWVcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhbGlua0xvYWQgPyBhamF4LmdldCgnL3JlcXVlc3QvcGFnZS1saXN0JykudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMYW5kaW5nKHJlcy5kYXRhLmxhbmRpbmcpXHJcbiAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YS5kYXRhXSlcclxuICAgIH0pIDogbnVsbFxyXG4gIH0sIFtsaW5rTG9hZF0pXHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgeyBsaW5rTG9hZCAmJiA8TmF2YmFyIGxpbmtzPXtsaW5rTG9hZH0gbGFuZGluZz17bGFuZGluZ30vPiB9XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIHsgbGlua0xvYWQgJiYgPENvbnRlbnQgLz4gfVxyXG4gICAgICBcclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2ZldGNoZXInLFxyXG4gIGluaXRpYWxTdGF0ZToge30sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXJ0aWNsZXMsIHBhZ2UgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXJ0aWNsZXMsXHJcbiAgICAgICAgcGFnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0RGF0YSB9ID0gZmV0Y2hlci5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyLnJlZHVjZXIiLCJpbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi9mZXRjaGVyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIGZldGNoZXJcclxufSIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3NsaWNlc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGZldGNoZXI6IGZldGNoZXJcclxuICB9XHJcbn0pIiwiLy8gaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBHdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL2d1ZXN0L2luZGV4JztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gXHJcbiAgPFJvdXRlcj5cclxuICAgIDxHdWVzdCAvPlxyXG4gIDwvUm91dGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsImh0bWxSZWFjdFBhcnNlciIsInVzZUxvY2F0aW9uIiwiQ29udGVudCIsImFydGljbGVzIiwic3RhdGUiLCJmZXRjaGVyIiwibG9jYXRpb24iLCJwYXJzZSIsInBhdGgiLCJwYXRobmFtZSIsInJlZiIsInNldFJlZiIsIm92ZXJmbG93Iiwic2V0T3ZlcmZsb3ciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJub2RlIiwibWFwIiwiYSIsImsiLCJUaXRsZSIsIkZvb3RlciIsImNoaWxkcmVuIiwiSGVhZGVyIiwiaWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInVzZURpc3BhdGNoIiwiTmF2TGluayIsInNldERhdGEiLCJheGlvcyIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsImRpc3BhdGNoIiwieG1sIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndoZXJlIiwiZmluZCIsImwiLCJpZCIsInVybCIsInJlcGxhY2UiLCJwYWdlIiwidW5kZWZpbmVkIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJyZW5kZXJMaW5rIiwiaSIsIlByb3ZpZGVyIiwic3RvcmUiLCJpbmRleCIsImxpbmtMb2FkIiwic2V0TGlua0xvYWQiLCJzZXRMYW5kaW5nIiwiYWpheCIsImhlYWRlcnMiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkd1ZXN0IiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=