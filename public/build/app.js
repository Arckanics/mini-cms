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
  const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const overflower = ref => {
    const {
      scrollHeight
    } = ref;
    const {
      height
    } = ref.getBoundingClientRect();
    setOverflow(scrollHeight > height);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "content",
    className: overflow && 'scrollable',
    ref: node => node ? overflower(node) : null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLCtDQUFNO0lBQUMsS0FBSyxFQUFFQSxRQUFTO0lBQUMsT0FBTyxFQUFFMUI7RUFBUSxFQUFFLENBQ25ELEVBQ0wwQixRQUFRLGlCQUFJLDJEQUFDLGdEQUFPLE9BQUcsQ0FDbEI7QUFFZixDQUFDO0FBRUQsaUVBQWVELEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakMyQjtBQUUvQyxNQUFNckQsT0FBTyxHQUFHMkQsNkRBQVcsQ0FBQztFQUMxQkMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsWUFBWSxFQUFFLENBQUMsQ0FBQztFQUNoQkMsUUFBUSxFQUFFO0lBQ1J0QyxPQUFPLEVBQUUsQ0FBQ3pCLEtBQUssRUFBRWdFLE1BQU0sS0FBSztNQUMxQixNQUFNO1FBQUVqRSxRQUFRO1FBQUU0QztNQUFLLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ0MsT0FBTztNQUN6QyxPQUFPO1FBQ0wsR0FBR2pFLEtBQUs7UUFDUkQsUUFBUTtRQUNSNEM7TUFDRixDQUFDO0lBQ0g7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVLLE1BQU07RUFBRWxCO0FBQVEsQ0FBQyxHQUFHeEIsT0FBTyxDQUFDaUUsT0FBTztBQUUxQyxpRUFBZWpFLE9BQU8sQ0FBQ2tFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrQjtBQUNoQjtBQUdsQyxpRUFBZUMsZ0VBQWMsQ0FBQztFQUM1QkQsT0FBTyxFQUFFO0lBQ1BsRSxPQUFPLEVBQUVBLDRDQUFPQTtFQUNsQjtBQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JGO0FBQ3lCO0FBQ2lDO0FBQ1o7O0FBRTlDOztBQUVBLE1BQU11RSxJQUFJLEdBQUcsbUJBQ1gsMkRBQUMsMkRBQU0scUJBQ0wsMkRBQUMsK0RBQUssT0FBRyxDQUNGO0FBRVgsaUVBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBtYWluXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXguanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zbGljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBtYWluXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gaW1wb3J0ICcuL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9tYWluXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBodG1sUmVhY3RQYXJzZXIgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCJcclxuXHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmV0Y2hlci5hcnRpY2xlcylcclxuICBjb25zdCBwYXJzZSA9IGh0bWxSZWFjdFBhcnNlclxyXG4gIGNvbnN0IFtvdmVyZmxvdywgc2V0T3ZlcmZsb3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IG92ZXJmbG93ZXIgPSByZWYgPT4ge1xyXG4gICAgY29uc3QgeyBzY3JvbGxIZWlnaHQgfSA9IHJlZlxyXG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgc2V0T3ZlcmZsb3coKHNjcm9sbEhlaWdodCA+IGhlaWdodCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J2NvbnRlbnQnIFxyXG4gICAgICBjbGFzc05hbWU9e292ZXJmbG93ICYmICdzY3JvbGxhYmxlJ31cclxuICAgICAgcmVmPXtub2RlID0+IChub2RlID8gb3ZlcmZsb3dlcihub2RlKSA6IG51bGwpfSA+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAge1xyXG4gICAgICAgIGFydGljbGVzXHJcbiAgICAgICAgJiYgYXJ0aWNsZXMubWFwKChhLGspID0+IDxhcnRpY2xlIGtleT17a30gY2xhc3NOYW1lPSdhcnRpY2xlJz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2FydGljbGUtdGl0bGUnPnthLlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdzZXBhcmF0b3InLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcnRpY2xlLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICB7IHBhcnNlKGEuQ29udGVudCkgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPilcclxuICAgICAgfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPWljb25dJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgeyBpY29uICYmIDxkaXYgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPXtpY29uLmdldEF0dHJpYnV0ZSgnaHJlZicpfSAvPlxyXG4gICAgICAgIDwvZGl2PiB9XHJcblxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgc2V0RGF0YSB9IGZyb20gXCIuLi9yZWR1eC9zbGljZXMvZmV0Y2hlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBsaW5rcywgbGFuZGluZyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB4bWwgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCIvcmVxdWVzdFwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gb2J0ZW5pciBsYSBwYWdlIHBhciByYXBwb3J0IMOgIGwndXJsXHJcbiAgICBjb25zdCB3aGVyZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICBpZiAocGF0aCA9PT0gXCIvXCIpIHtcclxuICAgICAgICByZXR1cm4gbGlua3MuZmluZChsID0+IGwuaWQgPT0gbGFuZGluZyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpbmtzLmZpbmQobCA9PiBsLnVybCA9PT0gcGF0aC5yZXBsYWNlKC9eXFwvLywgJycpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IHdoZXJlKCk7XHJcblxyXG4gICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB4bWxcclxuICAgICAgICAuZ2V0KGBwYWdlYCwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXREYXRhKHsgYXJ0aWNsZXM6IHJlcy5kYXRhLmRhdGEsIHBhZ2UgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbl0pO1xyXG5cclxuICBjb25zdCByZW5kZXJMaW5rID0gbCA9PlxyXG4gICAgIWxcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogbC5tYXAoKGwsIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2wuaWR9IGNsYXNzTmFtZT1cInAtMCB0ZXh0LWNlbnRlciBuYXYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXshKGxhbmRpbmcgPT0gbC5pZCkgPyBsLnVybCA6IFwiXCJ9IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5cclxuICAgICAgICAgICAgICB7bC5UaXRsZX1cclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgaWQ9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+e3JlbmRlckxpbmsobGlua3MpfTwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgQ29udGVudCBmcm9tIFwiLi9Db250ZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIEhlYWRlcixcclxuICBOYXZiYXIsXHJcbiAgQ29udGVudFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBIZWFkZXIsIE5hdmJhciwgQ29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cydcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCJcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsaW5rTG9hZCwgc2V0TGlua0xvYWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gIGNvbnN0IFtsYW5kaW5nLCBzZXRMYW5kaW5nXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiWG1sSHR0cFJlcXVlc3RcIjogdHJ1ZVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFsaW5rTG9hZCA/IGFqYXguZ2V0KCcvcmVxdWVzdC9wYWdlLWxpc3QnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExhbmRpbmcocmVzLmRhdGEubGFuZGluZylcclxuICAgICAgc2V0TGlua0xvYWQoWy4uLnJlcy5kYXRhLmRhdGFdKVxyXG4gICAgfSkgOiBudWxsXHJcbiAgfSwgW2xpbmtMb2FkXSlcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICB7IGxpbmtMb2FkICYmIDxOYXZiYXIgbGlua3M9e2xpbmtMb2FkfSBsYW5kaW5nPXtsYW5kaW5nfS8+IH1cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgeyBsaW5rTG9hZCAmJiA8Q29udGVudCAvPiB9XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdmZXRjaGVyJyxcclxuICBpbml0aWFsU3RhdGU6IHt9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXREYXRhOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB7IGFydGljbGVzLCBwYWdlIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFydGljbGVzLFxyXG4gICAgICAgIHBhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldERhdGEgfSA9IGZldGNoZXIuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlci5yZWR1Y2VyIiwiaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4vZmV0Y2hlclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBmZXRjaGVyXHJcbn0iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi9zbGljZXNcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBmZXRjaGVyOiBmZXRjaGVyXHJcbiAgfVxyXG59KSIsIi8vIGltcG9ydCAnLi4vLi4vc3R5bGVzL2d1ZXN0L2FwcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgR3Vlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9ndWVzdC9pbmRleCc7XHJcblxyXG4vLyBJbmRleCBSb290IENvbXBvbmVudFxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8R3Vlc3QgLz5cclxuICA8L1JvdXRlcj5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iXSwibmFtZXMiOlsicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJodG1sUmVhY3RQYXJzZXIiLCJDb250ZW50IiwiYXJ0aWNsZXMiLCJzdGF0ZSIsImZldGNoZXIiLCJwYXJzZSIsIm92ZXJmbG93Iiwic2V0T3ZlcmZsb3ciLCJvdmVyZmxvd2VyIiwicmVmIiwic2Nyb2xsSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwibm9kZSIsIm1hcCIsImEiLCJrIiwiVGl0bGUiLCJIZWFkZXIiLCJjaGlsZHJlbiIsImljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsIk5hdkxpbmsiLCJ1c2VMb2NhdGlvbiIsInNldERhdGEiLCJheGlvcyIsIk5hdmJhciIsImxpbmtzIiwibGFuZGluZyIsImRpc3BhdGNoIiwibG9jYXRpb24iLCJ4bWwiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2hlcmUiLCJwYXRoIiwicGF0aG5hbWUiLCJmaW5kIiwibCIsImlkIiwidXJsIiwicmVwbGFjZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlbmRlckxpbmsiLCJpIiwiUHJvdmlkZXIiLCJzdG9yZSIsImluZGV4IiwibGlua0xvYWQiLCJzZXRMaW5rTG9hZCIsInNldExhbmRpbmciLCJhamF4IiwiaGVhZGVycyIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiR3Vlc3QiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==