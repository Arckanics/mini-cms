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
    className: "container flex justify-between mx-auto p-2"
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "wrapper"
  }, renderLink(links))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUFDLENBQUM7QUFFSyxNQUFNO0VBQUVuQjtBQUFRLENBQUMsR0FBR2hCLE9BQU8sQ0FBQzJELE9BQU87QUFFMUMsaUVBQWUzRCxPQUFPLENBQUM0RCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFDaEI7QUFHbEMsaUVBQWVDLGdFQUFjLENBQUM7RUFDNUJELE9BQU8sRUFBRTtJQUNQNUQsT0FBTyxFQUFFQSw0Q0FBT0E7RUFDbEI7QUFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRjtBQUN5QjtBQUNpQztBQUNaOztBQUU5Qzs7QUFFQSxNQUFNaUUsSUFBSSxHQUFHLG1CQUNYLDJEQUFDLDJEQUFNLHFCQUNMLDJEQUFDLCtEQUFLLE9BQUcsQ0FDRjtBQUVYLGlFQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgbWFpblxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3NsaWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgbWFpblxcXFwuKGolN0N0KXN4PyRcIjsiLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvbWFpblxcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGh0bWxSZWFjdFBhcnNlciBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIlxyXG5cclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mZXRjaGVyLmFydGljbGVzKVxyXG5cclxuICBjb25zdCBwYXJzZSA9IGh0bWxSZWFjdFBhcnNlclxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J2NvbnRlbnQnPlxyXG4gICAgICB7XHJcbiAgICAgICAgYXJ0aWNsZXNcclxuICAgICAgICAmJiBhcnRpY2xlcy5tYXAoKGEsaykgPT4gPGFydGljbGUga2V5PXtrfT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2FydGljbGUtdGl0bGUnPnthLlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICB7IHBhcnNlKGEuQ29udGVudCkgfVxyXG4gICAgICAgIDwvYXJ0aWNsZT4pXHJcbiAgICAgIH1cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHAtMlwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgaWNvbiAmJiA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz17aWNvbi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKX0gLz5cclxuICAgICAgICA8L2Rpdj4gfVxyXG5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL2ZldGNoZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgbGlua3MsIGxhbmRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgeG1sID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiL3JlcXVlc3RcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9idGVuaXIgbGEgcGFnZSBwYXIgcmFwcG9ydCDDoCBsJ3VybFxyXG4gICAgY29uc3Qgd2hlcmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgaWYgKHBhdGggPT09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmtzLmZpbmQobCA9PiBsLmlkID09IGxhbmRpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC51cmwubWF0Y2gocGF0aC5yZXBsYWNlKC9eXFwvLykpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IHdoZXJlKCk7XHJcblxyXG4gICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB4bWxcclxuICAgICAgICAuZ2V0KGBwYWdlYCwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXREYXRhKHsgYXJ0aWNsZXM6IHJlcy5kYXRhLmRhdGEsIHBhZ2UgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbl0pO1xyXG5cclxuICBjb25zdCByZW5kZXJMaW5rID0gbCA9PlxyXG4gICAgIWxcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogbC5tYXAoKGwsIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2wuaWR9IGNsYXNzTmFtZT1cInAtMCB0ZXh0LWNlbnRlciBuYXYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXshKGxhbmRpbmcgPT0gbC5pZCkgPyBsLnVybCA6IFwiXCJ9IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5cclxuICAgICAgICAgICAgICB7bC5UaXRsZX1cclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+PC9kaXY+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndyYXBwZXJcIj57cmVuZGVyTGluayhsaW5rcyl9PC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgQ29udGVudCBmcm9tIFwiLi9Db250ZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIEhlYWRlcixcclxuICBOYXZiYXIsXHJcbiAgQ29udGVudFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBIZWFkZXIsIE5hdmJhciwgQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cydcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCJcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rTG9hZCwgc2V0TGlua0xvYWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gIGNvbnN0IFtsYW5kaW5nLCBzZXRMYW5kaW5nXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiWG1sSHR0cFJlcXVlc3RcIjogdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFsaW5rTG9hZCA/IGFqYXguZ2V0KCcvcmVxdWVzdC9wYWdlLWxpc3QnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExhbmRpbmcocmVzLmRhdGEubGFuZGluZylcclxuICAgICAgc2V0TGlua0xvYWQoWy4uLnJlcy5kYXRhLmRhdGFdKVxyXG4gICAgfSkgOiBudWxsXHJcbiAgfSwgW2xpbmtMb2FkXSlcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICB7IGxpbmtMb2FkICYmIDxOYXZiYXIgbGlua3M9e2xpbmtMb2FkfSBsYW5kaW5nPXtsYW5kaW5nfS8+IH1cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgeyBsaW5rTG9hZCAmJiA8Q29udGVudCAvPiB9XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdmZXRjaGVyJyxcclxuICBpbml0aWFsU3RhdGU6IHt9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXREYXRhOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGFydGljbGVzLCBwYWdlIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFydGljbGVzLFxyXG4gICAgICAgIHBhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldERhdGEgfSA9IGZldGNoZXIuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlci5yZWR1Y2VyIiwiaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4vZmV0Y2hlclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBmZXRjaGVyXHJcbn0iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi9zbGljZXNcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBmZXRjaGVyOiBmZXRjaGVyXHJcbiAgfVxyXG59KSIsIi8vIGltcG9ydCAnLi4vLi4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgR3Vlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ndWVzdC9pbmRleCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8R3Vlc3QgLz5cclxuICA8L1JvdXRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iXSwibmFtZXMiOlsicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJSZWFjdCIsInVzZVNlbGVjdG9yIiwiaHRtbFJlYWN0UGFyc2VyIiwiQ29udGVudCIsImFydGljbGVzIiwic3RhdGUiLCJmZXRjaGVyIiwicGFyc2UiLCJtYXAiLCJhIiwiayIsIlRpdGxlIiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJpY29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJOYXZMaW5rIiwidXNlTG9jYXRpb24iLCJzZXREYXRhIiwiYXhpb3MiLCJOYXZiYXIiLCJsaW5rcyIsImxhbmRpbmciLCJkaXNwYXRjaCIsImxvY2F0aW9uIiwieG1sIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndoZXJlIiwicGF0aCIsInBhdGhuYW1lIiwiZmluZCIsImwiLCJpZCIsInVybCIsIm1hdGNoIiwicmVwbGFjZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlbmRlckxpbmsiLCJpIiwidXNlU3RhdGUiLCJQcm92aWRlciIsInN0b3JlIiwiaW5kZXgiLCJsaW5rTG9hZCIsInNldExpbmtMb2FkIiwic2V0TGFuZGluZyIsImFqYXgiLCJoZWFkZXJzIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJHdWVzdCIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9