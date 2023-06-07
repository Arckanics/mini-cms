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
    className: overflow ? 'scrollable' : null,
    ref: node => node ? setRef(node) : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "wrapper"
  }, articles && articles.map((a, k) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    key: k,
    className: "article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "article-title"
  }, a.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "article-content"
  }, parse(a.Content))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBtYWluXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXguanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zbGljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBtYWluXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gaW1wb3J0ICcuL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9tYWluXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGh0bWxSZWFjdFBhcnNlciBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIlxyXG5cclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mZXRjaGVyLmFydGljbGVzKVxyXG4gIGNvbnN0IHBhcnNlID0gaHRtbFJlYWN0UGFyc2VyXHJcbiAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW292ZXJmbG93LCBzZXRPdmVyZmxvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWYpIHtcclxuICAgICAgY29uc3QgeyBzY3JvbGxIZWlnaHQgfSA9IHJlZlxyXG4gICAgICBzZXRPdmVyZmxvdyhzY3JvbGxIZWlnaHQgPiByZWYuY2xpZW50SGVpZ2h0ID8gdHJ1ZSA6IGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtyZWZdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J2NvbnRlbnQnIFxyXG4gICAgICBjbGFzc05hbWU9e292ZXJmbG93ID8gJ3Njcm9sbGFibGUnIDogbnVsbH1cclxuICAgICAgcmVmPXtub2RlID0+IChub2RlID8gc2V0UmVmKG5vZGUpIDogbnVsbCl9ID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgYXJ0aWNsZXNcclxuICAgICAgICAmJiBhcnRpY2xlcy5tYXAoKGEsaykgPT4gPGFydGljbGUga2V5PXtrfSBjbGFzc05hbWU9J2FydGljbGUnPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYXJ0aWNsZS10aXRsZSc+e2EuVGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9J3NlcGFyYXRvcicvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FydGljbGUtY29udGVudCc+XHJcbiAgICAgICAgICAgIHsgcGFyc2UoYS5Db250ZW50KSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+KVxyXG4gICAgICB9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICB7IGljb24gJiYgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9e2ljb24uZ2V0QXR0cmlidXRlKCdocmVmJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+IH1cclxuXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL2ZldGNoZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgbGlua3MsIGxhbmRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgeG1sID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiL3JlcXVlc3RcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9idGVuaXIgbGEgcGFnZSBwYXIgcmFwcG9ydCDDoCBsJ3VybFxyXG4gICAgY29uc3Qgd2hlcmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgaWYgKHBhdGggPT09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmtzLmZpbmQobCA9PiBsLmlkID09IGxhbmRpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC51cmwgPT09IHBhdGgucmVwbGFjZSgvXlxcLy8sICcnKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSB3aGVyZSgpO1xyXG5cclxuICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgeG1sXHJcbiAgICAgICAgLmdldChgcGFnZWAsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBpZDogcGFnZS5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RGF0YSh7IGFydGljbGVzOiByZXMuZGF0YS5kYXRhLCBwYWdlIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGluayA9IGwgPT5cclxuICAgICFsXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGwubWFwKChsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtsLmlkfSBjbGFzc05hbWU9XCJwLTAgdGV4dC1jZW50ZXIgbmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz17IShsYW5kaW5nID09IGwuaWQpID8gbC51cmwgOiBcIlwifSBjbGFzc05hbWU9XCJuYXZMaW5rXCI+XHJcbiAgICAgICAgICAgICAge2wuVGl0bGV9XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwid3JhcHBlclwiPntyZW5kZXJMaW5rKGxpbmtzKX08L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgTmF2YmFyLFxyXG4gIENvbnRlbnRcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgSGVhZGVyLCBOYXZiYXIsIENvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcclxuICBjb25zdCBbbGFuZGluZywgc2V0TGFuZGluZ10gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlhtbEh0dHBSZXF1ZXN0XCI6IHRydWVcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAhbGlua0xvYWQgPyBhamF4LmdldCgnL3JlcXVlc3QvcGFnZS1saXN0JykudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMYW5kaW5nKHJlcy5kYXRhLmxhbmRpbmcpXHJcbiAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YS5kYXRhXSlcclxuICAgIH0pIDogbnVsbFxyXG4gIH0sIFtsaW5rTG9hZF0pXHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgeyBsaW5rTG9hZCAmJiA8TmF2YmFyIGxpbmtzPXtsaW5rTG9hZH0gbGFuZGluZz17bGFuZGluZ30vPiB9XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIHsgbGlua0xvYWQgJiYgPENvbnRlbnQgLz4gfVxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZmV0Y2hlcicsXHJcbiAgaW5pdGlhbFN0YXRlOiB7fSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0RGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBhcnRpY2xlcywgcGFnZSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhcnRpY2xlcyxcclxuICAgICAgICBwYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXREYXRhIH0gPSBmZXRjaGVyLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXIucmVkdWNlciIsImltcG9ydCBmZXRjaGVyIGZyb20gXCIuL2ZldGNoZXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZmV0Y2hlclxyXG59IiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vc2xpY2VzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgZmV0Y2hlcjogZmV0Y2hlclxyXG4gIH1cclxufSkiLCIvLyBpbXBvcnQgJy4uLy4uL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IEd1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXgnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiBcclxuICA8Um91dGVyPlxyXG4gICAgPEd1ZXN0IC8+XHJcbiAgPC9Sb3V0ZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sIm5hbWVzIjpbInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiaHRtbFJlYWN0UGFyc2VyIiwiQ29udGVudCIsImFydGljbGVzIiwic3RhdGUiLCJmZXRjaGVyIiwicGFyc2UiLCJyZWYiLCJzZXRSZWYiLCJvdmVyZmxvdyIsInNldE92ZXJmbG93Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwibm9kZSIsIm1hcCIsImEiLCJrIiwiVGl0bGUiLCJIZWFkZXIiLCJjaGlsZHJlbiIsImljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJ1c2VEaXNwYXRjaCIsIk5hdkxpbmsiLCJ1c2VMb2NhdGlvbiIsInNldERhdGEiLCJheGlvcyIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsImRpc3BhdGNoIiwibG9jYXRpb24iLCJ4bWwiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2hlcmUiLCJwYXRoIiwicGF0aG5hbWUiLCJmaW5kIiwibCIsImlkIiwidXJsIiwicmVwbGFjZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlbmRlckxpbmsiLCJpIiwiUHJvdmlkZXIiLCJzdG9yZSIsImluZGV4IiwibGlua0xvYWQiLCJzZXRMaW5rTG9hZCIsInNldExhbmRpbmciLCJhamF4IiwiaGVhZGVycyIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiR3Vlc3QiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==