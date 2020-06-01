webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/global/header.tsx":
/*!******************************************!*\
  !*** ./src/components/global/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/dadams/Desktop/Code/automotive-case-study/src/components/global/header.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import React, { useState } from 'react';\n\n\n\nfunction Header() {\n  var _this = this;\n\n  // const [isExpanded, toggleExpansion] = useState(false);\n  var userFirstName = 'John';\n  var sInput = '';\n\n  var handleSearchClick = function handleSearchClick() {\n    window.location.href = \"https://www.amazon.com/s?k=\".concat(sInput);\n  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any\n\n\n  var handleChange = function handleChange(e) {\n    var value = e.target.value;\n    sInput = value;\n  };\n\n  return __jsx(\"header\", {\n    className: \"bg-gray-900\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, \"Use Case\"), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/favicon.ico\",\n    type: \"image/x-icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    type: \"image/x-icon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"This is the description for the project\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"These are keywords for the project\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Author will show up here\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }), __jsx(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, \"\\n\\t\\t\\t\\t\\t@font-face {\\n\\t\\t\\t\\t\\t\\tfont-family: 'amazon_emberbold';\\n\\t\\t\\t\\t\\t\\tsrc: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2') format('woff2'),\\n\\t\\t\\t\\t\\t\\t\\turl('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff') format('woff');\\n\\t\\t\\t\\t\\t\\tfont-weight: normal;\\n\\t\\t\\t\\t\\t\\tfont-style: normal;\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t@font-face {\\n\\t\\t\\t\\t\\t\\tfont-family: 'amazon_emberregular';\\n\\t\\t\\t\\t\\t\\tsrc: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2') format('woff2'),\\n\\t\\t\\t\\t\\t\\t\\turl('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff') format('woff');\\n\\t\\t\\t\\t\\t\\tfont-weight: normal;\\n\\t\\t\\t\\t\\t\\tfont-style: normal;\\n\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\")), __jsx(\"header\", {\n    className: \"relative top-0 z-50 flex flex-no-wrap items-center md:justify-between bg-coolblack\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"\".concat(\"\", \"/\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"text-white text-xl mr-0 md:mr-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 6\n    }\n  }, __jsx(\"img\", {\n    src: \"images/logo.png\",\n    width: \"175\",\n    className: \"pd-0 min-w-1/2\",\n    alt: \"Amazon Logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }))), __jsx(\"img\", {\n    src: \"images/search_left.png\",\n    width: \"75\",\n    alt: \"Amazon Logo\",\n    className: \"flex-none flex-shrink-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"search\",\n    className: \"hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }\n  }, \"Search\"), __jsx(\"input\", {\n    id: \"search\",\n    onChange: handleChange,\n    className: \"flex-grow border-none focus-none pd-0 m-0 text-l search-input min-w-0\",\n    alt: \"Search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }), __jsx(\"button\", {\n    onClick: handleSearchClick,\n    onKeyDown: handleSearchClick,\n    className: \"flex-none flex-shrink-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"images/search_right.png\",\n    width: \"74\",\n    alt: \"Amazon Logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 6\n    }\n  })), __jsx(\"img\", {\n    className: \"justify-right items-left flex-no-wrap lg:flex hidden lg:visible\",\n    src: \"images/nav_right.png\",\n    alt: \"Amazon navigation\",\n    width: \"350\",\n    height: \"60\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  })), __jsx(\"nav\", {\n    className: \"relative top-0 z-50 flex flex-no-wrap items-center justify-left bg-bluebeacon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 4\n    }\n  }, __jsx(\"img\", {\n    src: \"images/subhead_left.png\",\n    width: \"220\",\n    className: \"mr-2\",\n    alt: \"Amazon navigation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }), __jsx(\"ul\", {\n    className: \"h-4 block text-xs whitespace-no-wrap overflow-hidden overflow-y\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, [{\n    title: 'Fresh',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Whole Foods',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Prime Video',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: \"\".concat(userFirstName, \"'s Amazon.com\"),\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Sell',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Help',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Browsing History',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Find a Gift',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Buy Again',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Best Sellers',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Today\\'s Deals',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'New Releases',\n    route: \"\".concat(\"\", \"/\")\n  }, {\n    title: 'Gift Cards',\n    route: \"\".concat(\"\", \"/\")\n  }].map(function (navigationItem) {\n    return __jsx(\"li\", {\n      className: \"mr-6 justify-around float-left\",\n      key: navigationItem.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 7\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: navigationItem.route,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 8\n      }\n    }, __jsx(\"a\", {\n      className: \"block text-subgray whitespace-no-wrap\",\n      href: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }\n    }, navigationItem.title)));\n  }), __jsx(\"li\", {\n    className: \"mr-6 justify-around float-left clearfix\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: \"/gp/help/customer/accessibility\",\n    \"aria-label\": \"Click to call our Disability Customer Support line, or reach us directly at 1-888-283-1678\",\n    className: \"nav-hidden-aria hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, \"Disability Customer Support\"))), __jsx(\"div\", {\n    className: \"flex-grow\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 5\n    }\n  }), __jsx(\"img\", {\n    src: \"images/subhead_right.png\",\n    width: \"227\",\n    height: \"38\",\n    alt: \"Amazon promo navigation\",\n    className: \"hidden sm:flex md:flex lg:flex flex-col md:justify-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 5\n    }\n  })));\n}\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvaGVhZGVyLnRzeD9iY2Q5Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXJGaXJzdE5hbWUiLCJzSW5wdXQiLCJoYW5kbGVTZWFyY2hDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByb2Nlc3MiLCJ0aXRsZSIsInJvdXRlIiwibWFwIiwibmF2aWdhdGlvbkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFHQSxTQUFTQSxNQUFULEdBQStCO0FBQUE7O0FBQzlCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQXRCO0FBRUEsTUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFZO0FBQ3JDQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLHdDQUFxREosTUFBckQ7QUFDQSxHQUZELENBTjhCLENBVTlCOzs7QUFDQSxNQUFNSyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQWtCO0FBQUEsUUFDOUJDLEtBRDhCLEdBQ3BCRCxDQUFDLENBQUNFLE1BRGtCLENBQzlCRCxLQUQ4QjtBQUV0Q1AsVUFBTSxHQUFHTyxLQUFUO0FBQ0EsR0FIRDs7QUFLQSxTQUNDO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEVBRUM7QUFBTSxPQUFHLEVBQUMsZUFBVjtBQUEwQixRQUFJLEVBQUMsY0FBL0I7QUFBOEMsUUFBSSxFQUFDLGNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFG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QUcsRUFBRUEsY0FBYyxDQUFDSCxLQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUcsY0FBYyxDQUFDRixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUM7QUFBRyxlQUFTLEVBQUMsdUNBQWI7QUFBcUQsVUFBSSxFQUFDLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOERFLGNBQWMsQ0FBQ0gsS0FBN0UsQ0FGRCxDQURELENBREs7QUFBQSxHQWRMLENBREYsRUF1QkM7QUFBSSxhQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLGlDQUFSO0FBQTBDLGtCQUFXLDRGQUFyRDtBQUFrSixhQUFTLEVBQUMsd0JBQTVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREQsQ0F2QkQsQ0FGRCxFQTZCQztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkQsRUE4QkM7QUFBSyxPQUFHLEVBQUMsMEJBQVQ7QUFBb0MsU0FBSyxFQUFDLEtBQTFDO0FBQWdELFVBQU0sRUFBQyxJQUF2RDtBQUE0RCxPQUFHLEVBQUMseUJBQWhFO0FBQTBGLGFBQVMsRUFBQywwREFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRCxDQXZFRCxDQUREO0FBMEdBOztLQTFIUVosTTtBQTRITUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvaGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5cbmZ1bmN0aW9uIEhlYWRlcigpOiBKU1guRWxlbWVudCB7XG5cdC8vIGNvbnN0IFtpc0V4cGFuZGVkLCB0b2dnbGVFeHBhbnNpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCB1c2VyRmlyc3ROYW1lID0gJ0pvaG4nO1xuXG5cdGxldCBzSW5wdXQgPSAnJztcblxuXHRjb25zdCBoYW5kbGVTZWFyY2hDbGljayA9ICgpOiB2b2lkID0+IHtcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwczovL3d3dy5hbWF6b24uY29tL3M/az0ke3NJbnB1dH1gO1xuXHR9O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpOiB2b2lkID0+IHtcblx0XHRjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcblx0XHRzSW5wdXQgPSB2YWx1ZTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctZ3JheS05MDBcIj5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5Vc2UgQ2FzZTwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGlzIHRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIHByb2plY3RcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiVGhlc2UgYXJlIGtleXdvcmRzIGZvciB0aGUgcHJvamVjdFwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiQXV0aG9yIHdpbGwgc2hvdyB1cCBoZXJlXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuXHRcdFx0XHQ8c3R5bGU+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRAZm9udC1mYWNlIHtcblx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnYW1hem9uX2VtYmVyYm9sZCc7XG5cdFx0XHRcdFx0XHRzcmM6IHVybCgnaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0cvMDEvQVVJQ2xpZW50cy9BbWF6b25VSUZvbnQtYW1hem9uZW1iZXJfYmQtNDZiOTFiZGE2ODE2MWMxNGU1NTRhNzc5NjQzZWY0OTU3NDMxOTg3Yi5fVjJfLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuXHRcdFx0XHRcdFx0XHR1cmwoJ2h0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9HLzAxL0FVSUNsaWVudHMvQW1hem9uVUlGb250LWFtYXpvbmVtYmVyX2JkLTQ2YjkxYmRhNjgxNjFjMTRlNTU0YTc3OTY0M2VmNDk1NzQzMTk4N2IuX1YyXy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEBmb250LWZhY2Uge1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdhbWF6b25fZW1iZXJyZWd1bGFyJztcblx0XHRcdFx0XHRcdHNyYzogdXJsKCdodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvRy8wMS9BVUlDbGllbnRzL0FtYXpvblVJRm9udC1hbWF6b25lbWJlcl9yZy1jYzdlYmFhMDVhMmNkM2IwMmMwOTI5YWMwNDc1YTQ0YWIzMGI3ZWZhLl9WMl8ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG5cdFx0XHRcdFx0XHRcdHVybCgnaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0cvMDEvQVVJQ2xpZW50cy9BbWF6b25VSUZvbnQtYW1hem9uZW1iZXJfcmctY2M3ZWJhYTA1YTJjZDNiMDJjMDkyOWFjMDQ3NWE0NGFiMzBiN2VmYS5fVjJfLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAgei01MCBmbGV4IGZsZXgtbm8td3JhcCBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIGJnLWNvb2xibGFja1wiPlxuXG5cdFx0XHRcdDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gfT5cblx0XHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL31cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgbXItMCBtZDptci0xMFwiPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiB3aWR0aD1cIjE3NVwiIGNsYXNzTmFtZT1cInBkLTAgbWluLXctMS8yXCIgYWx0PVwiQW1hem9uIExvZ29cIiAvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9MaW5rPlxuXG5cdFx0XHRcdDxpbWcgc3JjPVwiaW1hZ2VzL3NlYXJjaF9sZWZ0LnBuZ1wiIHdpZHRoPVwiNzVcIiBhbHQ9XCJBbWF6b24gTG9nb1wiIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBmbGV4LXNocmluay0wXCIgLz5cblxuXHRcdFx0XHR7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2wgKi99XG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+U2VhcmNoPC9sYWJlbD5cblx0XHRcdFx0PGlucHV0IGlkPVwic2VhcmNoXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPVwiZmxleC1ncm93IGJvcmRlci1ub25lIGZvY3VzLW5vbmUgcGQtMCBtLTAgdGV4dC1sIHNlYXJjaC1pbnB1dCBtaW4tdy0wXCIgYWx0PVwiU2VhcmNoXCIgLz5cblxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU2VhcmNoQ2xpY2t9XG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kbGVTZWFyY2hDbGlja31cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4LW5vbmUgZmxleC1zaHJpbmstMFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvc2VhcmNoX3JpZ2h0LnBuZ1wiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjc0XCJcblx0XHRcdFx0XHRcdGFsdD1cIkFtYXpvbiBMb2dvXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwianVzdGlmeS1yaWdodCBpdGVtcy1sZWZ0IGZsZXgtbm8td3JhcCBsZzpmbGV4IGhpZGRlbiBsZzp2aXNpYmxlXCJcblx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbmF2X3JpZ2h0LnBuZ1wiXG5cdFx0XHRcdFx0YWx0PVwiQW1hem9uIG5hdmlnYXRpb25cIlxuXHRcdFx0XHRcdHdpZHRoPVwiMzUwXCJcblx0XHRcdFx0XHRoZWlnaHQ9XCI2MFwiXG5cdFx0XHRcdC8+XG5cblx0XHRcdDwvaGVhZGVyPlxuXG5cblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdG9wLTAgei01MCBmbGV4IGZsZXgtbm8td3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1sZWZ0IGJnLWJsdWViZWFjb25cIj5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvc3ViaGVhZF9sZWZ0LnBuZ1wiIHdpZHRoPVwiMjIwXCIgY2xhc3NOYW1lPVwibXItMlwiIGFsdD1cIkFtYXpvbiBuYXZpZ2F0aW9uXCIgLz5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImgtNCBibG9jayB0ZXh0LXhzIHdoaXRlc3BhY2Utbm8td3JhcCBvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3cteVwiPlxuXHRcdFx0XHRcdHtbXG5cdFx0XHRcdFx0XHR7IHRpdGxlOiAnRnJlc2gnLCByb3V0ZTogYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2AgfSxcblx0XHRcdFx0XHRcdHsgdGl0bGU6ICdXaG9sZSBGb29kcycsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ1ByaW1lIFZpZGVvJywgcm91dGU6IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gIH0sXG5cdFx0XHRcdFx0XHR7IHRpdGxlOiBgJHt1c2VyRmlyc3ROYW1lfSdzIEFtYXpvbi5jb21gLCByb3V0ZTogYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2AgfSxcblx0XHRcdFx0XHRcdHsgdGl0bGU6ICdTZWxsJywgcm91dGU6IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9gIH0sXG5cdFx0XHRcdFx0XHR7IHRpdGxlOiAnSGVscCcsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ0Jyb3dzaW5nIEhpc3RvcnknLCByb3V0ZTogYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2AgfSxcblx0XHRcdFx0XHRcdHsgdGl0bGU6ICdGaW5kIGEgR2lmdCcsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ0J1eSBBZ2FpbicsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ0Jlc3QgU2VsbGVycycsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ1RvZGF5XFwncyBEZWFscycsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ05ldyBSZWxlYXNlcycsIHJvdXRlOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYCB9LFxuXHRcdFx0XHRcdFx0eyB0aXRsZTogJ0dpZnQgQ2FyZHMnLCByb3V0ZTogYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2AgfSxcblx0XHRcdFx0XHRdLm1hcCgobmF2aWdhdGlvbkl0ZW0pID0+IChcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci02IGp1c3RpZnktYXJvdW5kIGZsb2F0LWxlZnRcIiBrZXk9e25hdmlnYXRpb25JdGVtLnRpdGxlfT5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17bmF2aWdhdGlvbkl0ZW0ucm91dGV9PlxuXHRcdFx0XHRcdFx0XHRcdHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovfVxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc3ViZ3JheSB3aGl0ZXNwYWNlLW5vLXdyYXBcIiBocmVmPVwiXCI+e25hdmlnYXRpb25JdGVtLnRpdGxlfTwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibXItNiBqdXN0aWZ5LWFyb3VuZCBmbG9hdC1sZWZ0IGNsZWFyZml4XCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiL2dwL2hlbHAvY3VzdG9tZXIvYWNjZXNzaWJpbGl0eVwiIGFyaWEtbGFiZWw9XCJDbGljayB0byBjYWxsIG91ciBEaXNhYmlsaXR5IEN1c3RvbWVyIFN1cHBvcnQgbGluZSwgb3IgcmVhY2ggdXMgZGlyZWN0bHkgYXQgMS04ODgtMjgzLTE2NzhcIiBjbGFzc05hbWU9XCJuYXYtaGlkZGVuLWFyaWEgaGlkZGVuXCI+RGlzYWJpbGl0eSBDdXN0b21lciBTdXBwb3J0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCIgLz5cblx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvc3ViaGVhZF9yaWdodC5wbmdcIiB3aWR0aD1cIjIyN1wiIGhlaWdodD1cIjM4XCIgYWx0PVwiQW1hem9uIHByb21vIG5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBtZDpmbGV4IGxnOmZsZXggZmxleC1jb2wgbWQ6anVzdGlmeS1yaWdodFwiIC8+XG5cdFx0XHQ8L25hdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/global/header.tsx\n");

/***/ })

})