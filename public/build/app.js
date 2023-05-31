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



const Content = () => {
  const articles = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.fetcher.articles);
  const parse = html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "content"
  }, articles && articles.map((a, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    key: k
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "article-title"
  }, a.Title), parse(a.Content))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

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
    const where = () => {
      const path = location.pathname;
      if (path === "/") {
        return links.find(l => l.id == landing);
      }
      return links.find(l => l.url.match(path.replace(/^\//)));
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
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Navbar": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./assets/react/components/guest/components/Content.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./assets/react/components/guest/components/Header.jsx");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./assets/react/components/guest/components/Navbar.jsx");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQUVuQjtBQUFRLENBQUMsR0FBR2hCLE9BQU8sQ0FBQzJELE9BQU87QUFFMUMsaUVBQWUzRCxPQUFPLENBQUM0RCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFDaEI7QUFHbEMsaUVBQWVDLGdFQUFjLENBQUM7RUFDNUJELE9BQU8sRUFBRTtJQUNQNUQsT0FBTyxFQUFFQSw0Q0FBT0E7RUFDbEI7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUN5QjtBQUNpQztBQUNaOztBQUU5Qzs7QUFFQSxNQUFNaUUsSUFBSSxHQUFHLG1CQUNYLDJEQUFDLDJEQUFNLHFCQUNMLDJEQUFDLCtEQUFLLE9BQUcsQ0FDRjtBQUVYLGlFQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgbWFpblxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3NsaWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgbWFpblxcXFwuKGolN0N0KXN4PyRcIjsiLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvbWFpblxcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGh0bWxSZWFjdFBhcnNlciBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIlxyXG5cclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mZXRjaGVyLmFydGljbGVzKVxyXG5cclxuICBjb25zdCBwYXJzZSA9IGh0bWxSZWFjdFBhcnNlclxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J2NvbnRlbnQnPlxyXG4gICAgICB7XHJcbiAgICAgICAgYXJ0aWNsZXNcclxuICAgICAgICAmJiBhcnRpY2xlcy5tYXAoKGEsaykgPT4gPGFydGljbGUga2V5PXtrfT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2FydGljbGUtdGl0bGUnPnthLlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICB7IHBhcnNlKGEuQ29udGVudCkgfVxyXG4gICAgICAgIDwvYXJ0aWNsZT4pXHJcbiAgICAgIH1cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICB7IGljb24gJiYgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9e2ljb24uZ2V0QXR0cmlidXRlKCdocmVmJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+IH1cclxuXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9mZXRjaGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGxpbmtzLCBsYW5kaW5nIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHhtbCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcIi9yZXF1ZXN0XCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBvYnRlbmlyIGxhIHBhZ2UgcGFyIHJhcHBvcnQgw6AgbCd1cmxcclxuICAgIGNvbnN0IHdoZXJlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgIGlmIChwYXRoID09PSBcIi9cIikge1xyXG4gICAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC5pZCA9PSBsYW5kaW5nKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlua3MuZmluZChsID0+IGwudXJsLm1hdGNoKHBhdGgucmVwbGFjZSgvXlxcLy8pKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSB3aGVyZSgpO1xyXG5cclxuICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgeG1sXHJcbiAgICAgICAgLmdldChgcGFnZWAsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBpZDogcGFnZS5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RGF0YSh7IGFydGljbGVzOiByZXMuZGF0YS5kYXRhLCBwYWdlIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGluayA9IGwgPT5cclxuICAgICFsXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGwubWFwKChsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtsLmlkfSBjbGFzc05hbWU9XCJwLTAgdGV4dC1jZW50ZXIgbmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz17IShsYW5kaW5nID09IGwuaWQpID8gbC51cmwgOiBcIlwifSBjbGFzc05hbWU9XCJuYXZMaW5rXCI+XHJcbiAgICAgICAgICAgICAge2wuVGl0bGV9XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwid3JhcHBlclwiPntyZW5kZXJMaW5rKGxpbmtzKX08L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgTmF2YmFyLFxyXG4gIENvbnRlbnRcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgSGVhZGVyLCBOYXZiYXIsIENvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbbGFuZGluZywgc2V0TGFuZGluZ10gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlhtbEh0dHBSZXF1ZXN0XCI6IHRydWVcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhbGlua0xvYWQgPyBhamF4LmdldCgnL3JlcXVlc3QvcGFnZS1saXN0JykudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMYW5kaW5nKHJlcy5kYXRhLmxhbmRpbmcpXHJcbiAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YS5kYXRhXSlcclxuICAgIH0pIDogbnVsbFxyXG4gIH0sIFtsaW5rTG9hZF0pXHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgeyBsaW5rTG9hZCAmJiA8TmF2YmFyIGxpbmtzPXtsaW5rTG9hZH0gbGFuZGluZz17bGFuZGluZ30vPiB9XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIHsgbGlua0xvYWQgJiYgPENvbnRlbnQgLz4gfVxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZmV0Y2hlcicsXHJcbiAgaW5pdGlhbFN0YXRlOiB7fSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0RGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBhcnRpY2xlcywgcGFnZSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhcnRpY2xlcyxcclxuICAgICAgICBwYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXREYXRhIH0gPSBmZXRjaGVyLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXIucmVkdWNlciIsImltcG9ydCBmZXRjaGVyIGZyb20gXCIuL2ZldGNoZXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZmV0Y2hlclxyXG59IiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vc2xpY2VzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgZmV0Y2hlcjogZmV0Y2hlclxyXG4gIH1cclxufSkiLCIvLyBpbXBvcnQgJy4uLy4uL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IEd1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXgnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiBcclxuICA8Um91dGVyPlxyXG4gICAgPEd1ZXN0IC8+XHJcbiAgPC9Sb3V0ZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sIm5hbWVzIjpbInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0IiwiUmVhY3QiLCJ1c2VTZWxlY3RvciIsImh0bWxSZWFjdFBhcnNlciIsIkNvbnRlbnQiLCJhcnRpY2xlcyIsInN0YXRlIiwiZmV0Y2hlciIsInBhcnNlIiwibWFwIiwiYSIsImsiLCJUaXRsZSIsIkhlYWRlciIsImNoaWxkcmVuIiwiaWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiTmF2TGluayIsInVzZUxvY2F0aW9uIiwic2V0RGF0YSIsImF4aW9zIiwiTmF2YmFyIiwibGlua3MiLCJsYW5kaW5nIiwiZGlzcGF0Y2giLCJsb2NhdGlvbiIsInhtbCIsImNyZWF0ZSIsImJhc2VVUkwiLCJ3aGVyZSIsInBhdGgiLCJwYXRobmFtZSIsImZpbmQiLCJsIiwiaWQiLCJ1cmwiLCJtYXRjaCIsInJlcGxhY2UiLCJwYWdlIiwidW5kZWZpbmVkIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJyZW5kZXJMaW5rIiwiaSIsInVzZVN0YXRlIiwiUHJvdmlkZXIiLCJzdG9yZSIsImluZGV4IiwibGlua0xvYWQiLCJzZXRMaW5rTG9hZCIsInNldExhbmRpbmciLCJhamF4IiwiaGVhZGVycyIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiR3Vlc3QiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==