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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFLLGVBQ2hELHNFQUFHLGtJQUVILENBQUksZUFDSjtJQUFJLFNBQVMsRUFBQztFQUFzQixFQUFFLGVBQ3RDLHNFQUFHLE9BQUUsRUFBQ3lDLElBQUksRUFBQyw4QkFBc0IsQ0FBSSxDQUNuQyxDQUNBLENBQ1IsZUFFVjtJQUFRLFNBQVMsRUFBQyxVQUFVO0lBQUMsT0FBTyxFQUFHRyxDQUFDLElBQUs1QyxTQUFTLENBQUMsQ0FBQ0QsTUFBTTtFQUFFLEdBQUMscUJBQWdCLENBQVMsQ0FDM0Y7QUFFWCxDQUFDO0FBRUQsaUVBQWVoQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRwQjtBQUN5QjtBQUNpQztBQUNaOztBQUU5Qzs7QUFFQSxNQUFNaUUsSUFBSSxHQUFHLG1CQUNYLDJEQUFDLDJEQUFNLHFCQUNMLDJEQUFDLCtEQUFLLE9BQUcsQ0FDRjtBQUVYLGlFQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvIHN5bmMgbWFpblxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC9jb21wb25lbnRzL0NvbnRlbnQuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9OYXZiYXIuanN4Iiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9taW5pLWNtcy8uL2Fzc2V0cy9yZWFjdC9jb21wb25lbnRzL2d1ZXN0L3JlZHV4L3NsaWNlcy9mZXRjaGVyLmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc2xpY2VzL2luZGV4LmpzIiwid2VicGFjazovL21pbmktY21zLy4vYXNzZXRzL3JlYWN0L2NvbXBvbmVudHMvZ3Vlc3QvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29tcG9uZW50cy9ndWVzdC91aS9MZWdhbC5qc3giLCJ3ZWJwYWNrOi8vbWluaS1jbXMvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL21haW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWFpbi5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgbWFpblxcXFwuKGolN0N0KXN4PyRcIjsiLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGltcG9ydCAnLi9zdHlsZXMvZ3Vlc3QvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnLi9ib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIHJlYWN0XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCc7XHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMnLCB0cnVlLCAvbWFpblxcLihqfHQpc3g/JC8pKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBodG1sUmVhY3RQYXJzZXIgZnJvbSBcImh0bWwtcmVhY3QtcGFyc2VyXCJcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5jb25zdCBDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFydGljbGVzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZmV0Y2hlci5hcnRpY2xlcylcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBwYXJzZSA9IGh0bWxSZWFjdFBhcnNlclxyXG4gIGNvbnN0IHBhdGggPSBsb2NhdGlvbi5wYXRobmFtZVxyXG4gIGNvbnN0IFtyZWYsIHNldFJlZl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtvdmVyZmxvdywgc2V0T3ZlcmZsb3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVmKSB7XHJcbiAgICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0IH0gPSByZWZcclxuICAgICAgc2V0T3ZlcmZsb3coc2Nyb2xsSGVpZ2h0ID4gcmVmLmNsaWVudEhlaWdodCA/IHRydWUgOiBmYWxzZSlcclxuICAgIH1cclxuICB9LCBbcmVmXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSdjb250ZW50JyBcclxuICAgICAgY2xhc3NOYW1lPXsoIWFydGljbGVzID8gJ2VtcHR5JzogJycpICsgKG92ZXJmbG93ID8gJyBzY3JvbGxhYmxlJyA6ICcnKX1cclxuICAgICAgcmVmPXtub2RlID0+IChub2RlID8gc2V0UmVmKG5vZGUpIDogbnVsbCl9ID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICB7XHJcbiAgICAgICAgYXJ0aWNsZXNcclxuICAgICAgICA/IGFydGljbGVzLm1hcCgoYSxrKSA9PiA8YXJ0aWNsZSBrZXk9e2t9IGNsYXNzTmFtZT0nYXJ0aWNsZSc+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdhcnRpY2xlLXRpdGxlJz57YS5UaXRsZX08L2gzPlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT0nc2VwYXJhdG9yJy8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJ0aWNsZS1jb250ZW50Jz5cclxuICAgICAgICAgICAgeyBwYXJzZShhLkNvbnRlbnQpIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT4pXHJcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb2RlJyA+NDA0PC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzYyc+bGEgcGFnZSA8c3BhbiBjbGFzc05hbWU9J3ZhcmlhYmxlJz5cIiB7cGF0aH0gXCI8L3NwYW4+IGVzdCBpbnRyb3V2YWJsZS4uLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExlZ2FsIGZyb20gXCIuLi91aS9MZWdhbFwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBpZD1cImZvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9aWNvbl0nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICB7IGljb24gJiYgPGRpdiBpZD1cImxvZ29cIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9e2ljb24uZ2V0QXR0cmlidXRlKCdocmVmJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+IH1cclxuXHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBzZXREYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9mZXRjaGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGxpbmtzLCBsYW5kaW5nIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeG1sID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiL3JlcXVlc3RcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9idGVuaXIgbGEgcGFnZSBwYXIgcmFwcG9ydCDDoCBsJ3VybFxyXG4gICAgY29uc3QgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgY29uc3Qgd2hlcmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChwYXRoID09PSBcIi9cIikge1xyXG4gICAgICAgIHJldHVybiBsaW5rcy5maW5kKGwgPT4gbC5pZCA9PSBsYW5kaW5nKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbGlua3MuZmluZChsID0+IGwudXJsID09PSBwYXRoLnJlcGxhY2UoL15cXC8vLCBcIlwiKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSB3aGVyZSgpO1xyXG5cclxuICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgeG1sXHJcbiAgICAgICAgLmdldChgcGFnZWAsIHtcclxuICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBpZDogcGFnZS5pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0RGF0YSh7IGFydGljbGVzOiByZXMuZGF0YS5kYXRhLCBwYWdlIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHNldERhdGEoeyBhcnRpY2xlczogbnVsbCB9KSk7XHJcbiAgICB9XHJcbiAgfSwgW2xvY2F0aW9uXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckxpbmsgPSBsID0+XHJcbiAgICAhbFxyXG4gICAgICA/IG51bGxcclxuICAgICAgOiBsLm1hcCgobCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bC5pZH0gY2xhc3NOYW1lPVwicC0wIHRleHQtY2VudGVyIG5hdi1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89eyEobGFuZGluZyA9PSBsLmlkKSA/IGwudXJsIDogXCJcIn0gY2xhc3NOYW1lPVwibmF2TGlua1wiPlxyXG4gICAgICAgICAgICAgIHtsLlRpdGxlfVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBpZD1cIm5hdmlnYXRpb25cIiBjbGFzc05hbWU9eyh0b2dnbGUgPyAndG9nZ2xlJyA6ICcnKX0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAge3JlbmRlckxpbmsobGlua3MpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8ZGl2IGlkPVwidG9nZ2xlLW1lbnVcIiBjbGFzc05hbWU9eyh0b2dnbGUgPyAndG9nZ2xlJyA6ICcnKX0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItdG9wXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItbWlkXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItZW5kXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgTmF2YmFyLFxyXG4gIENvbnRlbnQsXHJcbiAgRm9vdGVyXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEhlYWRlciwgTmF2YmFyLCBDb250ZW50LCBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBGYXcgfSBmcm9tIFwiLi4vbWFpbi91aS9GYXdcIjtcclxuaW1wb3J0IExlZ2FsIGZyb20gXCIuL3VpL0xlZ2FsXCI7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbbGlua0xvYWQsIHNldExpbmtMb2FkXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2xhbmRpbmcsIHNldExhbmRpbmddID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW3NvY2lhbHMsIHNldFNvY2lhbHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFhtbEh0dHBSZXF1ZXN0OiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIWxpbmtMb2FkXHJcbiAgICAgID8gYWpheC5nZXQoXCIvcmVxdWVzdC9wYWdlLWxpc3RcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgc2V0TGFuZGluZyhyZXMuZGF0YS5sYW5kaW5nKTtcclxuICAgICAgICAgIHNldExpbmtMb2FkKFsuLi5yZXMuZGF0YS5kYXRhXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBudWxsO1xyXG4gICAgIXNvY2lhbHNcclxuICAgICAgPyBhamF4LmdldChcIi9yZXF1ZXN0L3NvY2lhbHNcIikudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgc2V0U29jaWFscyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBudWxsO1xyXG4gIH0sIFtsaW5rTG9hZCwgc29jaWFsc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAge2xpbmtMb2FkICYmIDxOYXZiYXIgbGlua3M9e2xpbmtMb2FkfSBsYW5kaW5nPXtsYW5kaW5nfSAvPn1cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIHtsaW5rTG9hZCAmJiA8Q29udGVudCAvPn1cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICB7c29jaWFscyA/IChcclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWxzXCI+XHJcbiAgICAgICAgICAgIHtzb2NpYWxzLm1hcCgoaXRlbSwgaykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgaWNvbiwgdXJsLCBuYW1lIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIiBrZXk9e2t9PlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt1cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYXcgaWNvbj17aWNvbn0gY2xzPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW5hbWVcIj5taW5pLWNtcyZuYnNwOy0mbmJzcDs8L3NwYW4+PExlZ2FsLz5cclxuXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlLWxpbmtcIj5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXJja2FuaWNzL21pbmktY21zI3JlYWRtZVwiPlxyXG4gICAgICAgICAgICA8RmF3IGljb249XCJnaXRodWJcIiBjbHM9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb290ZXI+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZmV0Y2hlcicsXHJcbiAgaW5pdGlhbFN0YXRlOiB7fSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0RGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBhcnRpY2xlcywgcGFnZSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhcnRpY2xlcyxcclxuICAgICAgICBwYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXREYXRhIH0gPSBmZXRjaGVyLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoZXIucmVkdWNlciIsImltcG9ydCBmZXRjaGVyIGZyb20gXCIuL2ZldGNoZXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZmV0Y2hlclxyXG59IiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vc2xpY2VzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgZmV0Y2hlcjogZmV0Y2hlclxyXG4gIH1cclxufSkiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgTGVnYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgJiYgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtWzVyZW1dIGJvdHRvbS1bNHJlbV0gbGVmdC00IHJpZ2h0LTQgbWF4LXctWzc2OHB4XSBiZyBteC1hdXRvIHRleHQtbGcgb3ZlcmZsb3ctaGlkZGVuIG91dGxpbmUgb3V0bGluZS0xIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhcnRpY2xlIHNoYWRvdy0yeGwgd2hpdGVzcGFjZS13cmFwIHJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wgaC1mdWxsIGJnLXN0b25lLTgwMCBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYXJ0aWNsZS10aXRsZSB1cHBlcmNhc2UgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW50aW9ucyBMw6lnYWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvdXRsaW5lIG91dGxpbmUtMSBzaGFkb3cgcm91bmRlZC0yeGwgcHgtMiBmbG9hdC1yaWdodFwiIG9uQ2xpY2s9eyhlKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250ZW50IHRleHQtanVzdGlmeSBtYXgtdy1mdWxsIG92ZXJmbG93LWF1dG8gYnJlYWstd29yZHMgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENvbnRlbnUgZGVzIG1lbnRpb25zIGzDqWdhbGVzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgdW5kZXJsaW5lXCI+UHJvcHJpw6l0YWlyZSBkdSBzaXRlIDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob20gOiBBbGV4aXMgRnJpdHNjaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5BZHJlc3NlIDogMzYgcnVlIGRlIExhbmV1ZnZpbGxlIDU0OTEwICwgVkFMTEVST1k8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+RW1haWwgOiA8YSBocmVmPVwibWFpbHRvOmFsZXhpcy5mcml0c2NoNjhAZ21haWwuY29tXCI+YWxleGlzLmZyaXRzY2g2OEBnbWFpbC5jb208L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBhcmF0b3Igb3BhY2l0eS01MFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVuZGVybGluZVwiPkjDqWJlcmdldXIgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vbSA6IFNDQUxFV0FZPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkFkcmVzc2UgOiA4IHJ1ZSBkZSBsYSBWaWxsZSBs4oCZRXbDqnF1ZSwgNzUwMDggUGFyaXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBhcmF0b3Igb3BhY2l0eS01MFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVuZGVybGluZVwiPlByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlIDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5MZSBjb250ZW51IGRlIGNlIHNpdGUgZXN0IGxpYnJlIGRlIHLDqXV0aWxpc2F0aW9uLCBzYXVmIGluZGljYXRpb24gY29udHJhaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvdXMgw6p0ZXMgYXV0b3Jpc8OpIMOgIHV0aWxpc2VyLCBjb3BpZXIsIG1vZGlmaWVyIGV0IGRpc3RyaWJ1ZXIgbGUgY29udGVudSDDoCBkZXMgZmluc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbiBjb21tZXJjaWFsZXMsIMOgIGNvbmRpdGlvbiBkZSBtZW50aW9ubmVyIGxhIHNvdXJjZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNlcGFyYXRvciBvcGFjaXR5LTUwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgdW5kZXJsaW5lXCI+VXRpbGlzYXRpb24gZGVzIGRvbm7DqWVzIHBlcnNvbm5lbGxlcyA6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF1Y3VuZSBkb25uw6llIHBlcnNvbm5lbGxlIG4nZXN0IGNvbGxlY3TDqWUgbmkgdXRpbGlzw6llIHN1ciBjZSBzaXRlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzZXBhcmF0b3Igb3BhY2l0eS01MFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHVuZGVybGluZVwiPkNvb2tpZXMgOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DZSBzaXRlIHV0aWxpc2UgZGVzIGNvb2tpZXMgdW5pcXVlbWVudCBwb3VyIGRlcyBmb25jdGlvbm5hbGl0w6lzIHNww6ljaWZpcXVlcyBldCBuZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RlIHBhcyBkZSBkb25uw6llcyBwZXJzb25uZWxsZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwic2VwYXJhdG9yIG9wYWNpdHktNTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7CqSB7ZGF0ZX0gVG91cyBkcm9pdHMgcsOpc2VydsOpcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGVcIiBvbkNsaWNrPXsoZSkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfT5NZW50aW9ucyBsw6lnYWxlczwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWdhbDsiLCIvLyBpbXBvcnQgJy4uLy4uL3N0eWxlcy9ndWVzdC9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IEd1ZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvZ3Vlc3QvaW5kZXgnO1xyXG5cclxuLy8gSW5kZXggUm9vdCBDb21wb25lbnRcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiBcclxuICA8Um91dGVyPlxyXG4gICAgPEd1ZXN0IC8+XHJcbiAgPC9Sb3V0ZXI+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sIm5hbWVzIjpbInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiaHRtbFJlYWN0UGFyc2VyIiwidXNlTG9jYXRpb24iLCJDb250ZW50IiwiYXJ0aWNsZXMiLCJzdGF0ZSIsImZldGNoZXIiLCJsb2NhdGlvbiIsInBhcnNlIiwicGF0aCIsInBhdGhuYW1lIiwicmVmIiwic2V0UmVmIiwib3ZlcmZsb3ciLCJzZXRPdmVyZmxvdyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm5vZGUiLCJtYXAiLCJhIiwiayIsIlRpdGxlIiwiTGVnYWwiLCJGb290ZXIiLCJjaGlsZHJlbiIsIkhlYWRlciIsImljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJ1c2VEaXNwYXRjaCIsIk5hdkxpbmsiLCJzZXREYXRhIiwiYXhpb3MiLCJOYXZiYXIiLCJsaW5rcyIsImxhbmRpbmciLCJkaXNwYXRjaCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInhtbCIsImNyZWF0ZSIsImJhc2VVUkwiLCJ3aGVyZSIsImZpbmQiLCJsIiwiaWQiLCJ1cmwiLCJyZXBsYWNlIiwicGFnZSIsInVuZGVmaW5lZCIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwicmVuZGVyTGluayIsImkiLCJQcm92aWRlciIsInN0b3JlIiwiRmF3IiwiaW5kZXgiLCJsaW5rTG9hZCIsInNldExpbmtMb2FkIiwic2V0TGFuZGluZyIsInNvY2lhbHMiLCJzZXRTb2NpYWxzIiwiYWpheCIsImhlYWRlcnMiLCJYbWxIdHRwUmVxdWVzdCIsIml0ZW0iLCJuYW1lIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwiZGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImUiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiR3Vlc3QiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==