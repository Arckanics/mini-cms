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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ0g7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVLLE1BQU07RUFBRWY7QUFBUSxDQUFDLEdBQUd4QixPQUFPLENBQUM4RCxPQUFPO0FBRTFDLGlFQUFlOUQsT0FBTyxDQUFDK0QsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtCO0FBQ2hCO0FBR2xDLGlFQUFlQyxnRUFBYyxDQUFDO0VBQzVCRCxPQUFPLEVBQUU7SUFDUC9ELE9BQU8sRUFBRUEsNENBQU9BO0VBQ2xCO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkY7QUFDeUI7QUFDaUM7QUFDWjs7QUFFOUM7O0FBRUEsTUFBTW9FLElBQUksR0FBRyxtQkFDWCwyREFBQywyREFBTSxxQkFDTCwyREFBQywrREFBSyxPQUFHLENBQ0Y7QUFFWCxpRUFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzLyBzeW5jIG1haW5cXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zbGljZXMvZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3NsaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9tYWluLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21haW4uanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIG1haW5cXFxcLihqJTdDdClzeD8kXCI7IiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG4vLyBpbXBvcnQgJy4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyByZWFjdFxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtcmVhY3QnO1xyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL21haW5cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgaHRtbFJlYWN0UGFyc2VyIGZyb20gXCJodG1sLXJlYWN0LXBhcnNlclwiXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5cclxuY29uc3QgQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBhcnRpY2xlcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmZldGNoZXIuYXJ0aWNsZXMpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgcGFyc2UgPSBodG1sUmVhY3RQYXJzZXJcclxuICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWVcclxuICBjb25zdCBbcmVmLCBzZXRSZWZdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbb3ZlcmZsb3csIHNldE92ZXJmbG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZikge1xyXG4gICAgICBjb25zdCB7IHNjcm9sbEhlaWdodCB9ID0gcmVmXHJcbiAgICAgIHNldE92ZXJmbG93KHNjcm9sbEhlaWdodCA+IHJlZi5jbGllbnRIZWlnaHQgPyB0cnVlIDogZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3JlZl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD0nY29udGVudCcgXHJcbiAgICAgIGNsYXNzTmFtZT17KCFhcnRpY2xlcyA/ICdlbXB0eSc6ICcnKSArIChvdmVyZmxvdyA/ICcgc2Nyb2xsYWJsZScgOiAnJyl9XHJcbiAgICAgIHJlZj17bm9kZSA9PiAobm9kZSA/IHNldFJlZihub2RlKSA6IG51bGwpfSA+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAge1xyXG4gICAgICAgIGFydGljbGVzXHJcbiAgICAgICAgPyBhcnRpY2xlcy5tYXAoKGEsaykgPT4gPGFydGljbGUga2V5PXtrfSBjbGFzc05hbWU9J2FydGljbGUnPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYXJ0aWNsZS10aXRsZSc+e2EuVGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9J3NlcGFyYXRvcicvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FydGljbGUtY29udGVudCc+XHJcbiAgICAgICAgICAgIHsgcGFyc2UoYS5Db250ZW50KSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+KVxyXG4gICAgICAgIDogPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29kZScgPjQwNDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2MnPmxhIHBhZ2UgPHNwYW4gY2xhc3NOYW1lPSd2YXJpYWJsZSc+XCIge3BhdGh9IFwiPC9zcGFuPiBlc3QgaW50cm91dmFibGUuLi48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1pY29uXScpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgaWNvbiAmJiA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz17aWNvbi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKX0gLz5cclxuICAgICAgICA8L2Rpdj4gfVxyXG5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc2V0RGF0YSB9IGZyb20gXCIuLi9yZWR1eC9zbGljZXMvZmV0Y2hlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBsaW5rcywgbGFuZGluZyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB4bWwgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCIvcmVxdWVzdFwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gb2J0ZW5pciBsYSBwYWdlIHBhciByYXBwb3J0IMOgIGwndXJsXHJcbiAgICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBjb25zdCB3aGVyZSA9ICgpID0+IHtcclxuICAgICAgXHJcbiAgICAgIGlmIChwYXRoID09PSBcIi9cIikge1xyXG4gICAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC5pZCA9PSBsYW5kaW5nKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlua3MuZmluZChsID0+IGwudXJsID09PSBwYXRoLnJlcGxhY2UoL15cXC8vLCAnJykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwYWdlID0gd2hlcmUoKTtcclxuXHJcbiAgICBpZiAocGFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHhtbFxyXG4gICAgICAgIC5nZXQoYHBhZ2VgLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgaWQ6IHBhZ2UuaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldERhdGEoeyBhcnRpY2xlczogcmVzLmRhdGEuZGF0YSwgcGFnZSB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChzZXREYXRhKHsgYXJ0aWNsZXM6IG51bGwgfSkpXHJcbiAgICB9XHJcbiAgfSwgW2xvY2F0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckxpbmsgPSBsID0+XHJcbiAgICAhbFxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBsLm1hcCgobCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bC5pZH0gY2xhc3NOYW1lPVwicC0wIHRleHQtY2VudGVyIG5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89eyEobGFuZGluZyA9PSBsLmlkKSA/IGwudXJsIDogXCJcIn0gY2xhc3NOYW1lPVwibmF2TGlua1wiPlxyXG4gICAgICAgICAgICAgIHtsLlRpdGxlfVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIndyYXBwZXJcIj57cmVuZGVyTGluayhsaW5rcyl9PC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBDb250ZW50IGZyb20gXCIuL0NvbnRlbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIE5hdmJhcixcclxuICBDb250ZW50XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEhlYWRlciwgTmF2YmFyLCBDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vcmVkdXgvc3RvcmVcIlxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xpbmtMb2FkLCBzZXRMaW5rTG9hZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXHJcbiAgY29uc3QgW2xhbmRpbmcsIHNldExhbmRpbmddID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBhamF4ID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJYbWxIdHRwUmVxdWVzdFwiOiB0cnVlXHJcbiAgICB9XHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWxpbmtMb2FkID8gYWpheC5nZXQoJy9yZXF1ZXN0L3BhZ2UtbGlzdCcpLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TGFuZGluZyhyZXMuZGF0YS5sYW5kaW5nKVxyXG4gICAgICBzZXRMaW5rTG9hZChbLi4ucmVzLmRhdGEuZGF0YV0pXHJcbiAgICB9KSA6IG51bGxcclxuICB9LCBbbGlua0xvYWRdKVxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIHsgbGlua0xvYWQgJiYgPE5hdmJhciBsaW5rcz17bGlua0xvYWR9IGxhbmRpbmc9e2xhbmRpbmd9Lz4gfVxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgICB7IGxpbmtMb2FkICYmIDxDb250ZW50IC8+IH1cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2ZldGNoZXInLFxyXG4gIGluaXRpYWxTdGF0ZToge30sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXJ0aWNsZXMsIHBhZ2UgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXJ0aWNsZXMsXHJcbiAgICAgICAgcGFnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0RGF0YSB9ID0gZmV0Y2hlci5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyLnJlZHVjZXIiLCJpbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi9mZXRjaGVyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIGZldGNoZXJcclxufSIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3NsaWNlc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGZldGNoZXI6IGZldGNoZXJcclxuICB9XHJcbn0pIiwiLy8gaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBHdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL2d1ZXN0L2luZGV4JztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gXHJcbiAgPFJvdXRlcj5cclxuICAgIDxHdWVzdCAvPlxyXG4gIDwvUm91dGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsImh0bWxSZWFjdFBhcnNlciIsInVzZUxvY2F0aW9uIiwiQ29udGVudCIsImFydGljbGVzIiwic3RhdGUiLCJmZXRjaGVyIiwibG9jYXRpb24iLCJwYXJzZSIsInBhdGgiLCJwYXRobmFtZSIsInJlZiIsInNldFJlZiIsIm92ZXJmbG93Iiwic2V0T3ZlcmZsb3ciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJub2RlIiwibWFwIiwiYSIsImsiLCJUaXRsZSIsIkhlYWRlciIsImNoaWxkcmVuIiwiaWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInVzZURpc3BhdGNoIiwiTmF2TGluayIsInNldERhdGEiLCJheGlvcyIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsImRpc3BhdGNoIiwieG1sIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndoZXJlIiwiZmluZCIsImwiLCJpZCIsInVybCIsInJlcGxhY2UiLCJwYWdlIiwidW5kZWZpbmVkIiwiZ2V0IiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJyZW5kZXJMaW5rIiwiaSIsIlByb3ZpZGVyIiwic3RvcmUiLCJpbmRleCIsImxpbmtMb2FkIiwic2V0TGlua0xvYWQiLCJzZXRMYW5kaW5nIiwiYWpheCIsImhlYWRlcnMiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkd1ZXN0IiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=