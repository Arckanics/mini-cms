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
/* harmony import */ var _ui_Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Legal */ "./assets/react/components/guest/ui/Legal.jsx");


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
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
      return links.find(l => l.url === path.replace(/^\//, ""));
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
    className: "p-0 text-center nav-container",
    onClick: () => setToggle(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
    to: !(landing == l.id) ? l.url : "",
    className: "navLink"
  }, l.Title)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "navigation",
    className: toggle ? 'toggle' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "wrapper"
  }, renderLink(links))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "toggle-menu",
    className: toggle ? 'toggle' : '',
    onClick: () => setToggle(!toggle)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toggle-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar-top"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar-mid"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar-end"
  }))));
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./assets/react/components/guest/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./assets/react/components/guest/redux/store.js");
/* harmony import */ var _main_ui_Faw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/ui/Faw */ "./assets/react/components/main/ui/Faw.jsx");
/* harmony import */ var _ui_Legal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/Legal */ "./assets/react/components/guest/ui/Legal.jsx");







const index = () => {
  const [linkLoad, setLinkLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const [landing, setLanding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [socials, setSocials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ajax = axios__WEBPACK_IMPORTED_MODULE_6__["default"].create({
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
  })), linkLoad && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Content, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.Footer, null, socials ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "socials"
  }, socials.map((item, k) => {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_main_ui_Faw__WEBPACK_IMPORTED_MODULE_4__.Faw, {
      icon: icon,
      cls: "icon"
    })));
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "align-middle text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "page-name"
  }, "mini-cms\xA0-\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_Legal__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "source-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://github.com/Arckanics/mini-cms#readme"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_main_ui_Faw__WEBPACK_IMPORTED_MODULE_4__.Faw, {
    icon: "github",
    cls: "icon"
  })))));
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

/***/ "./assets/react/components/guest/ui/Legal.jsx":
/*!****************************************************!*\
  !*** ./assets/react/components/guest/ui/Legal.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Legal = () => {
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const date = new Date().getFullYear();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, toggle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed top-[5rem] bottom-[4rem] left-4 right-4 max-w-[768px] bg mx-auto text-lg overflow-hidden outline outline-1 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "article shadow-2xl whitespace-wrap rounded-2xl flex flex-col h-full bg-stone-800 border-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "article-title uppercase text-left"
  }, "Mentions L\xE9gales", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "outline outline-1 shadow rounded-2xl px-2 float-right",
    onClick: e => setToggle(false)
  }, "X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "article-content text-justify max-w-full overflow-auto break-words text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl underline"
  }, "Propri\xE9taire du site :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Nom : Alexis Fritsch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Adresse : 36 rue de Laneufville 54910 , VALLEROY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Email : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:alexis.fritsch68@gmail.com"
  }, "alexis.fritsch68@gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator opacity-50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl underline"
  }, "H\xE9bergeur :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Nom : SCALEWAY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Adresse : 8 rue de la Ville l\u2019Ev\xEAque, 75008 Paris"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator opacity-50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl underline"
  }, "Propri\xE9t\xE9 intellectuelle :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Le contenu de ce site est libre de r\xE9utilisation, sauf indication contraire. Vous \xEAtes autoris\xE9 \xE0 utiliser, copier, modifier et distribuer le contenu \xE0 des fins non commerciales, \xE0 condition de mentionner la source."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator opacity-50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl underline"
  }, "Utilisation des donn\xE9es personnelles :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aucune donn\xE9e personnelle n'est collect\xE9e ni utilis\xE9e sur ce site."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator opacity-50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl underline"
  }, "Cookies :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Ce site utilise des cookies uniquement pour des fonctionnalit\xE9s sp\xE9cifiques et ne collecte pas de donn\xE9es personnelles."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "separator opacity-50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", date, " Tous droits r\xE9serv\xE9s.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "absolute",
    onClick: e => setToggle(!toggle)
  }, "Mentions l\xE9gales"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Legal);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_reduxjs_toolkit_d-0ca055","vendors-node_modules_html-react-parser_index_mjs","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-assets_bo-2d9401"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUssZUFDaEQsc0VBQUcsa0lBRUgsQ0FBSSxlQUNKO0lBQUksU0FBUyxFQUFDO0VBQXNCLEVBQUUsZUFDdEMsc0VBQUcsT0FBRSxFQUFDeUMsSUFBSSxFQUFDLDhCQUFzQixDQUFJLENBQ25DLENBQ0EsQ0FDUixlQUVWO0lBQVEsU0FBUyxFQUFDLFVBQVU7SUFBQyxPQUFPLEVBQUdHLENBQUMsSUFBSzVDLFNBQVMsQ0FBQyxDQUFDRCxNQUFNO0VBQUUsR0FBQyxxQkFBZ0IsQ0FBUyxDQUMzRjtBQUVYLENBQUM7QUFFRCxpRUFBZWhCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHBCO0FBQ3lCO0FBQ2lDO0FBQ1o7O0FBRTlDOztBQUVBLE1BQU1pRSxJQUFJLEdBQUcsbUJBQ1gsMkRBQUMsMkRBQU0scUJBQ0wsMkRBQUMsK0RBQUssT0FBRyxDQUNGO0FBRVgsaUVBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBtYWluXFwuKGolN0N0KXN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2NvbXBvbmVudHMvQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXguanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zbGljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3VpL0xlZ2FsLmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vbWFpbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYWluLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBtYWluXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gaW1wb3J0ICcuL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gcmVhY3RcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycycsIHRydWUsIC9tYWluXFwuKGp8dClzeD8kLykpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGh0bWxSZWFjdFBhcnNlciBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIlxyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuXHJcbmNvbnN0IENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5mZXRjaGVyLmFydGljbGVzKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IHBhcnNlID0gaHRtbFJlYWN0UGFyc2VyXHJcbiAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgY29uc3QgW3JlZiwgc2V0UmVmXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW292ZXJmbG93LCBzZXRPdmVyZmxvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWYpIHtcclxuICAgICAgY29uc3QgeyBzY3JvbGxIZWlnaHQgfSA9IHJlZlxyXG4gICAgICBzZXRPdmVyZmxvdyhzY3JvbGxIZWlnaHQgPiByZWYuY2xpZW50SGVpZ2h0ID8gdHJ1ZSA6IGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtyZWZdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9J2NvbnRlbnQnIFxyXG4gICAgICBjbGFzc05hbWU9eyghYXJ0aWNsZXMgPyAnZW1wdHknOiAnJykgKyAob3ZlcmZsb3cgPyAnIHNjcm9sbGFibGUnIDogJycpfVxyXG4gICAgICByZWY9e25vZGUgPT4gKG5vZGUgPyBzZXRSZWYobm9kZSkgOiBudWxsKX0gPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBhcnRpY2xlc1xyXG4gICAgICAgID8gYXJ0aWNsZXMubWFwKChhLGspID0+IDxhcnRpY2xlIGtleT17a30gY2xhc3NOYW1lPSdhcnRpY2xlJz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2FydGljbGUtdGl0bGUnPnthLlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdzZXBhcmF0b3InLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcnRpY2xlLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICB7IHBhcnNlKGEuQ29udGVudCkgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPilcclxuICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlJz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvZGUnID40MDQ8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjJz5sYSBwYWdlIDxzcGFuIGNsYXNzTmFtZT0ndmFyaWFibGUnPlwiIHtwYXRofSBcIjwvc3Bhbj4gZXN0IGludHJvdXZhYmxlLi4uPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4uL3VpL0xlZ2FsXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1pY29uXScpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsgaWNvbiAmJiA8ZGl2IGlkPVwibG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz17aWNvbi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKX0gLz5cclxuICAgICAgICA8L2Rpdj4gfVxyXG5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IHNldERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL2ZldGNoZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgbGlua3MsIGxhbmRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB4bWwgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCIvcmVxdWVzdFwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gb2J0ZW5pciBsYSBwYWdlIHBhciByYXBwb3J0IMOgIGwndXJsXHJcbiAgICBjb25zdCBwYXRoID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBjb25zdCB3aGVyZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHBhdGggPT09IFwiL1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpbmtzLmZpbmQobCA9PiBsLmlkID09IGxhbmRpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC51cmwgPT09IHBhdGgucmVwbGFjZSgvXlxcLy8sIFwiXCIpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IHdoZXJlKCk7XHJcblxyXG4gICAgaWYgKHBhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB4bWxcclxuICAgICAgICAuZ2V0KGBwYWdlYCwge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXREYXRhKHsgYXJ0aWNsZXM6IHJlcy5kYXRhLmRhdGEsIHBhZ2UgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goc2V0RGF0YSh7IGFydGljbGVzOiBudWxsIH0pKTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGluayA9IGwgPT5cclxuICAgICFsXHJcbiAgICAgID8gbnVsbFxyXG4gICAgICA6IGwubWFwKChsLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtsLmlkfSBjbGFzc05hbWU9XCJwLTAgdGV4dC1jZW50ZXIgbmF2LWNvbnRhaW5lclwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz17IShsYW5kaW5nID09IGwuaWQpID8gbC51cmwgOiBcIlwifSBjbGFzc05hbWU9XCJuYXZMaW5rXCI+XHJcbiAgICAgICAgICAgICAge2wuVGl0bGV9XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGlkPVwibmF2aWdhdGlvblwiIGNsYXNzTmFtZT17KHRvZ2dsZSA/ICd0b2dnbGUnIDogJycpfT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwid3JhcHBlclwiPntyZW5kZXJMaW5rKGxpbmtzKX08L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBpZD1cInRvZ2dsZS1tZW51XCIgY2xhc3NOYW1lPXsodG9nZ2xlID8gJ3RvZ2dsZScgOiAnJyl9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXRvcFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLW1pZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWVuZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBDb250ZW50IGZyb20gXCIuL0NvbnRlbnRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIE5hdmJhcixcclxuICBDb250ZW50LFxyXG4gIEZvb3RlclxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXIsIE5hdmJhciwgQ29udGVudCwgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgRmF3IH0gZnJvbSBcIi4uL21haW4vdWkvRmF3XCI7XHJcbmltcG9ydCBMZWdhbCBmcm9tIFwiLi91aS9MZWdhbFwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xpbmtMb2FkLCBzZXRMaW5rTG9hZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtsYW5kaW5nLCBzZXRMYW5kaW5nXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzb2NpYWxzLCBzZXRTb2NpYWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBYbWxIdHRwUmVxdWVzdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICFsaW5rTG9hZFxyXG4gICAgICA/IGFqYXguZ2V0KFwiL3JlcXVlc3QvcGFnZS1saXN0XCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHNldExhbmRpbmcocmVzLmRhdGEubGFuZGluZyk7XHJcbiAgICAgICAgICBzZXRMaW5rTG9hZChbLi4ucmVzLmRhdGEuZGF0YV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogbnVsbDtcclxuICAgICFzb2NpYWxzXHJcbiAgICAgID8gYWpheC5nZXQoXCIvcmVxdWVzdC9zb2NpYWxzXCIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHNldFNvY2lhbHMocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogbnVsbDtcclxuICB9LCBbbGlua0xvYWQsIHNvY2lhbHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIHtsaW5rTG9hZCAmJiA8TmF2YmFyIGxpbmtzPXtsaW5rTG9hZH0gbGFuZGluZz17bGFuZGluZ30gLz59XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICB7bGlua0xvYWQgJiYgPENvbnRlbnQgLz59XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAge3NvY2lhbHMgPyAoXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsc1wiPlxyXG4gICAgICAgICAgICB7c29jaWFscy5tYXAoKGl0ZW0sIGspID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IGljb24sIHVybCwgbmFtZSB9ID0gaXRlbTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCIga2V5PXtrfT5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dXJsfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmF3IGljb249e2ljb259IGNscz1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1uYW1lXCI+bWluaS1jbXMmbmJzcDstJm5ic3A7PC9zcGFuPjxMZWdhbC8+XHJcblxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZS1saW5rXCI+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2thbmljcy9taW5pLWNtcyNyZWFkbWVcIj5cclxuICAgICAgICAgICAgPEZhdyBpY29uPVwiZ2l0aHViXCIgY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2ZldGNoZXInLFxyXG4gIGluaXRpYWxTdGF0ZToge30sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldERhdGE6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgYXJ0aWNsZXMsIHBhZ2UgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXJ0aWNsZXMsXHJcbiAgICAgICAgcGFnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0RGF0YSB9ID0gZmV0Y2hlci5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyLnJlZHVjZXIiLCJpbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi9mZXRjaGVyXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIGZldGNoZXJcclxufSIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3NsaWNlc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGZldGNoZXI6IGZldGNoZXJcclxuICB9XHJcbn0pIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IExlZ2FsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICAgICYmIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLVs1cmVtXSBib3R0b20tWzRyZW1dIGxlZnQtNCByaWdodC00IG1heC13LVs3NjhweF0gYmcgbXgtYXV0byB0ZXh0LWxnIG92ZXJmbG93LWhpZGRlbiBvdXRsaW5lIG91dGxpbmUtMSByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZSBzaGFkb3ctMnhsIHdoaXRlc3BhY2Utd3JhcCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGgtZnVsbCBiZy1zdG9uZS04MDAgYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFydGljbGUtdGl0bGUgdXBwZXJjYXNlIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVudGlvbnMgTMOpZ2FsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3V0bGluZSBvdXRsaW5lLTEgc2hhZG93IHJvdW5kZWQtMnhsIHB4LTIgZmxvYXQtcmlnaHRcIiBvbkNsaWNrPXsoZSkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCB0ZXh0LWp1c3RpZnkgbWF4LXctZnVsbCBvdmVyZmxvdy1hdXRvIGJyZWFrLXdvcmRzIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDb250ZW51IGRlcyBtZW50aW9ucyBsw6lnYWxlcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVuZGVybGluZVwiPlByb3ByacOpdGFpcmUgZHUgc2l0ZSA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm9tIDogQWxleGlzIEZyaXRzY2g8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+QWRyZXNzZSA6IDM2IHJ1ZSBkZSBMYW5ldWZ2aWxsZSA1NDkxMCAsIFZBTExFUk9ZPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkVtYWlsIDogPGEgaHJlZj1cIm1haWx0bzphbGV4aXMuZnJpdHNjaDY4QGdtYWlsLmNvbVwiPmFsZXhpcy5mcml0c2NoNjhAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwYXJhdG9yIG9wYWNpdHktNTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCB1bmRlcmxpbmVcIj5Iw6liZXJnZXVyIDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob20gOiBTQ0FMRVdBWTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BZHJlc3NlIDogOCBydWUgZGUgbGEgVmlsbGUgbOKAmUV2w6pxdWUsIDc1MDA4IFBhcmlzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwYXJhdG9yIG9wYWNpdHktNTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCB1bmRlcmxpbmVcIj5Qcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZSA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TGUgY29udGVudSBkZSBjZSBzaXRlIGVzdCBsaWJyZSBkZSByw6l1dGlsaXNhdGlvbiwgc2F1ZiBpbmRpY2F0aW9uIGNvbnRyYWlyZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3VzIMOqdGVzIGF1dG9yaXPDqSDDoCB1dGlsaXNlciwgY29waWVyLCBtb2RpZmllciBldCBkaXN0cmlidWVyIGxlIGNvbnRlbnUgw6AgZGVzIGZpbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub24gY29tbWVyY2lhbGVzLCDDoCBjb25kaXRpb24gZGUgbWVudGlvbm5lciBsYSBzb3VyY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBhcmF0b3Igb3BhY2l0eS01MFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVuZGVybGluZVwiPlV0aWxpc2F0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXMgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdWN1bmUgZG9ubsOpZSBwZXJzb25uZWxsZSBuJ2VzdCBjb2xsZWN0w6llIG5pIHV0aWxpc8OpZSBzdXIgY2Ugc2l0ZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwYXJhdG9yIG9wYWNpdHktNTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCB1bmRlcmxpbmVcIj5Db29raWVzIDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2Ugc2l0ZSB1dGlsaXNlIGRlcyBjb29raWVzIHVuaXF1ZW1lbnQgcG91ciBkZXMgZm9uY3Rpb25uYWxpdMOpcyBzcMOpY2lmaXF1ZXMgZXQgbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0ZSBwYXMgZGUgZG9ubsOpZXMgcGVyc29ubmVsbGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGFyYXRvciBvcGFjaXR5LTUwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+wqkge2RhdGV9IFRvdXMgZHJvaXRzIHLDqXNlcnbDqXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlXCIgb25DbGljaz17KGUpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX0+TWVudGlvbnMgbMOpZ2FsZXM8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVnYWw7IiwiLy8gaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBHdWVzdCBmcm9tICcuLi9jb21wb25lbnRzL2d1ZXN0L2luZGV4JztcclxuXHJcbi8vIEluZGV4IFJvb3QgQ29tcG9uZW50XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gXHJcbiAgPFJvdXRlcj5cclxuICAgIDxHdWVzdCAvPlxyXG4gIDwvUm91dGVyPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbiJdLCJuYW1lcyI6WyJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsImh0bWxSZWFjdFBhcnNlciIsInVzZUxvY2F0aW9uIiwiQ29udGVudCIsImFydGljbGVzIiwic3RhdGUiLCJmZXRjaGVyIiwibG9jYXRpb24iLCJwYXJzZSIsInBhdGgiLCJwYXRobmFtZSIsInJlZiIsInNldFJlZiIsIm92ZXJmbG93Iiwic2V0T3ZlcmZsb3ciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJub2RlIiwibWFwIiwiYSIsImsiLCJUaXRsZSIsIkxlZ2FsIiwiRm9vdGVyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpY29uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwidXNlRGlzcGF0Y2giLCJOYXZMaW5rIiwic2V0RGF0YSIsImF4aW9zIiwiTmF2YmFyIiwibGlua3MiLCJsYW5kaW5nIiwiZGlzcGF0Y2giLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ4bWwiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2hlcmUiLCJmaW5kIiwibCIsImlkIiwidXJsIiwicmVwbGFjZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlbmRlckxpbmsiLCJpIiwiUHJvdmlkZXIiLCJzdG9yZSIsIkZhdyIsImluZGV4IiwibGlua0xvYWQiLCJzZXRMaW5rTG9hZCIsInNldExhbmRpbmciLCJzb2NpYWxzIiwic2V0U29jaWFscyIsImFqYXgiLCJoZWFkZXJzIiwiWG1sSHR0cFJlcXVlc3QiLCJpdGVtIiwibmFtZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsImRhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIkd1ZXN0IiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=