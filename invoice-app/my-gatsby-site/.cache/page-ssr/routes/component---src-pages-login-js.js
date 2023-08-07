"use strict";
exports.id = "component---src-pages-login-js";
exports.ids = ["component---src-pages-login-js"];
exports.modules = {

/***/ "./src/components/form-ele/buttonEle.js":
/*!**********************************************!*\
  !*** ./src/components/form-ele/buttonEle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonEle)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/LockClosedIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function ButtonEle({
  onClick,
  label
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => onClick(),
    type: "button",
    className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    "aria-hidden": "true"
  })), label));
}

/***/ }),

/***/ "./src/components/form-ele/checkBoxEle.js":
/*!************************************************!*\
  !*** ./src/components/form-ele/checkBoxEle.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckBoxEle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function CheckBoxEle({
  id,
  name,
  label
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: id,
    name: name,
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: id,
    className: "ml-2 block text-sm text-gray-900"
  }, label));
}

/***/ }),

/***/ "./src/components/form-ele/link.js":
/*!*****************************************!*\
  !*** ./src/components/form-ele/link.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Link({
  href,
  label
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: href,
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, label));
}

/***/ }),

/***/ "./src/components/form-ele/textBox.js":
/*!********************************************!*\
  !*** ./src/components/form-ele/textBox.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TextBox({
  htmlFor,
  type,
  placeholder,
  label,
  onBlur
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: htmlFor,
    className: "sr-only"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: htmlFor,
    name: htmlFor,
    type: type,
    autoComplete: "current-password",
    required: true,
    className: "relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
    placeholder: placeholder // value={value}
    ,
    onBlur: e => {
      onBlur(e.target.value);
    }
  }));
}

/***/ }),

/***/ "./src/pages/login.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/login.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_form_ele_textBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form-ele/textBox */ "./src/components/form-ele/textBox.js");
/* harmony import */ var _components_form_ele_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form-ele/link */ "./src/components/form-ele/link.js");
/* harmony import */ var _components_form_ele_buttonEle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form-ele/buttonEle */ "./src/components/form-ele/buttonEle.js");
/* harmony import */ var _components_form_ele_checkBoxEle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form-ele/checkBoxEle */ "./src/components/form-ele/checkBoxEle.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");







function Login() {
  var uEmail = "";
  var uPassword = "";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("into the login!!!");
  }, []);

  const handleCheck = () => {
    console.log("into the handle check");
  };

  const handleClick = () => {
    console.log("into handle click", uEmail, uPassword);
    (0,_reach_router__WEBPACK_IMPORTED_MODULE_5__.navigate)("/dashboard/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full max-w-md space-y-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "mx-auto h-12 w-auto",
    src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
    alt: "Your Company"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
  }, "Sign in to your account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "mt-8 space-y-6",
    action: "#",
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "remember",
    defaultValue: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "-space-y-px rounded-md shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_form_ele_textBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "email",
    htmlFor: "email",
    placeholder: "Email Address",
    label: "Email",
    onBlur: value => {
      uEmail = value;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_form_ele_textBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "password",
    htmlFor: "password",
    placeholder: "Password",
    label: "Password",
    onBlur: value => {
      uPassword = value;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_form_ele_checkBoxEle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Remember",
    onChange: data => handleCheck()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_form_ele_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "#",
    label: "Forgot Your Password?"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_form_ele_buttonEle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => {
      handleClick();
    },
    label: "Sign In"
  })))));
}

/***/ }),

/***/ "./node_modules/@heroicons/react/20/solid/esm/LockClosedIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/20/solid/esm/LockClosedIcon.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function LockClosedIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LockClosedIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-login-js.js.map