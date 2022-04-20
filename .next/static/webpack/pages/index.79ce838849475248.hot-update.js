"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/dashboard/map.js":
/*!*****************************************!*\
  !*** ./src/components/dashboard/map.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Map\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _MapChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapChart */ \"./src/components/dashboard/MapChart.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n// const React, { useState } = require('react');\n// const ReactDOM = require('react-dom');\n// const WorldMap = require('react-world-map');\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined, _this1 = undefined;\nvar countries = [\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        name: 'Australia',\n        sales: '1,431',\n        updatedAt: \"Today\",\n        per: '40%'\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        name: 'Russia',\n        sales: '25,000',\n        updatedAt: \"Yesterday\",\n        per: '20%'\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        name: 'United States',\n        sales: '15,000',\n        per: '15%'\n    },\n    {\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(),\n        name: 'China',\n        sales: '5000',\n        updatedAt: \"Today\",\n        per: '10%'\n    }, \n];\nvar Map = function(props) {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n            lineNumber: 60,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                title: \"Verification by Country\",\n                __source: {\n                    fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                },\n                __self: _this1\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                __source: {\n                    fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                },\n                __self: _this1\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                __source: {\n                    fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                },\n                __self: _this1,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {\n                    __source: {\n                        fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                            align: \"center\",\n                            __source: {\n                                fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                                __source: {\n                                    fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {\n                                    __source: {\n                                        fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: countries.map(function(country) {\n                                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                                            hover: true,\n                                            __source: {\n                                                fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 25\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    __source: {\n                                                        fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 27\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        style: {\n                                                            alignContent: \"right\",\n                                                            size: 100\n                                                        },\n                                                        __source: {\n                                                            fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 27\n                                                        },\n                                                        __self: _this,\n                                                        children: country.name\n                                                    })\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    __source: {\n                                                        fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 25\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        style: {\n                                                            alignContent: \"right\",\n                                                            size: 20\n                                                        },\n                                                        __source: {\n                                                            fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 25\n                                                        },\n                                                        __self: _this,\n                                                        children: country.sales\n                                                    })\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                                    __source: {\n                                                        fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 25\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                                        style: {\n                                                            alignContent: \"right\",\n                                                            size: 20\n                                                        },\n                                                        __source: {\n                                                            fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 25\n                                                        },\n                                                        __self: _this,\n                                                        children: country.per\n                                                    })\n                                                })\n                                            ]\n                                        }, country.id);\n                                    })\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                            __source: {\n                                fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MapChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1\n                                })\n                            })\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                __source: {\n                    fileName: \"/Users/khushpatel/Desktop/frontend-knoct/src/components/dashboard/map.js\",\n                    lineNumber: 105,\n                    columnNumber: 7\n                },\n                __self: _this1\n            })\n        ]\n    }));\n};\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvbWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ3ZCO0FBQ2pDLEVBQWdEO0FBQ2hELEVBQXlDO0FBQ3pDLEVBQStDO0FBQ2Q7QUFtQlg7QUFDcUM7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxHQUFLLENBQUN3QixTQUFTLEdBQUcsQ0FBQztJQUNmLENBQUM7UUFDQ0MsRUFBRSxFQUFFdEIsd0NBQUk7UUFDUnVCLElBQUksRUFBRSxDQUFXO1FBQ2pCQyxLQUFLLEVBQUUsQ0FBTztRQUNkQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsR0FBRyxFQUFFLENBQUs7SUFDWixDQUFDO0lBQ0QsQ0FBQztRQUNDSixFQUFFLEVBQUV0Qix3Q0FBSTtRQUNSdUIsSUFBSSxFQUFFLENBQVE7UUFDZEMsS0FBSyxFQUFDLENBQVE7UUFDZEMsU0FBUyxFQUFFLENBQVc7UUFDdEJDLEdBQUcsRUFBRSxDQUFLO0lBQ1osQ0FBQztJQUNELENBQUM7UUFDQ0osRUFBRSxFQUFFdEIsd0NBQUk7UUFDUnVCLElBQUksRUFBRSxDQUFlO1FBQ3JCQyxLQUFLLEVBQUMsQ0FBUTtRQUNkRSxHQUFHLEVBQUUsQ0FBSztJQUNaLENBQUM7SUFDRCxDQUFDO1FBQ0NKLEVBQUUsRUFBRXRCLHdDQUFJO1FBQ1J1QixJQUFJLEVBQUUsQ0FBTztRQUNiQyxLQUFLLEVBQUMsQ0FBTTtRQUNaQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsR0FBRyxFQUFFLENBQUs7SUFDWixDQUFDO0FBQ0gsQ0FBQztBQUVNLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLFFBQVEsQ0FBUEMsS0FBSztrQkFDdkIsTUFBTSx5REFBTHhCLCtDQUFJO09BQUt3QixLQUFLOzs7Ozs7OztpRkFDWnZCLHFEQUFVO2dCQUNUd0IsS0FBSyxFQUFDLENBQXlCOzs7Ozs7OztpRkFFaEN2QixrREFBTzs7Ozs7Ozs7aUZBQ0xNLGdEQUFLOzs7Ozs7O2dHQUNEQyxvREFBUzs7Ozs7Ozs7NkZBRVRDLG9EQUFTOzRCQUFDZ0IsS0FBSyxFQUFDLENBQVE7Ozs7Ozs7MkdBQ3BCbEIsZ0RBQUs7Ozs7Ozs7K0dBQ0xDLG9EQUFTOzs7Ozs7OzhDQUNMUSxTQUFTLENBQUNVLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxPQUFPO3NEQUNsQixNQUFNLHlEQUFMaEIsbURBQVE7NENBQ1RpQixLQUFLOzs7Ozs7OztxSEFHRm5CLG9EQUFTOzs7Ozs7O21JQUNUb0IsQ0FBRzt3REFBQ0MsS0FBSyxFQUFJLENBQUNDOzREQUFBQSxZQUFZLEVBQUMsQ0FBTzs0REFBQ0MsSUFBSSxFQUFDLEdBQUc7d0RBQUEsQ0FBQzs7Ozs7OztrRUFDMUNMLE9BQU8sQ0FBQ1QsSUFBSTs7O3FIQUdoQlQsb0RBQVM7Ozs7Ozs7bUlBQ1RvQixDQUFHO3dEQUFDQyxLQUFLLEVBQUksQ0FBQ0M7NERBQUFBLFlBQVksRUFBQyxDQUFPOzREQUFFQyxJQUFJLEVBQUMsRUFBRTt3REFBQSxDQUFDOzs7Ozs7O2tFQUN4Q0wsT0FBTyxDQUFDUixLQUFLOzs7cUhBR2pCVixvREFBUzs7Ozs7OzttSUFDVG9CLENBQUc7d0RBQUNDLEtBQUssRUFBSSxDQUFDQzs0REFBQUEsWUFBWSxFQUFDLENBQU87NERBQUNDLElBQUksRUFBQyxFQUFFO3dEQUFBLENBQUM7Ozs7Ozs7a0VBQ3ZDTCxPQUFPLENBQUNOLEdBQUc7Ozs7MkNBZFhNLE9BQU8sQ0FBQ1YsRUFBRTs7Ozs7NkZBd0IxQlIsb0RBQVM7Ozs7Ozs7MkdBQ1RvQixDQUFHOzs7Ozs7OytHQUNDakMsaURBQVE7Ozs7Ozs7Ozs7Ozs7aUZBS2xCSyxrREFBTzs7Ozs7Ozs7Ozs7S0E5Q0NxQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9tYXAuanM/MWVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93LCBzdWJIb3VycyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbi8vIGNvbnN0IFJlYWN0LCB7IHVzZVN0YXRlIH0gPSByZXF1aXJlKCdyZWFjdCcpO1xuLy8gY29uc3QgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbi8vIGNvbnN0IFdvcmxkTWFwID0gcmVxdWlyZSgncmVhY3Qtd29ybGQtbWFwJyk7XG5pbXBvcnQgTWFwQ2hhcnQgZnJvbSBcIi4vTWFwQ2hhcnRcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBEaXZpZGVyLFxuICBJY29uQnV0dG9uLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1BdmF0YXIsXG4gIExpc3RJdGVtVGV4dCxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBUYWJsZVNvcnRMYWJlbCxcbiAgR3JpZFxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93UmlnaHQnO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcblxuY29uc3QgY291bnRyaWVzID0gW1xuICAgIHtcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgICBuYW1lOiAnQXVzdHJhbGlhJyxcbiAgICAgIHNhbGVzOiAnMSw0MzEnLFxuICAgICAgdXBkYXRlZEF0OiBcIlRvZGF5XCIsXG4gICAgICBwZXI6ICc0MCUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIG5hbWU6ICdSdXNzaWEnLFxuICAgICAgc2FsZXM6JzI1LDAwMCcsXG4gICAgICB1cGRhdGVkQXQ6IFwiWWVzdGVyZGF5XCIsXG4gICAgICBwZXI6ICcyMCUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIG5hbWU6ICdVbml0ZWQgU3RhdGVzJyxcbiAgICAgIHNhbGVzOicxNSwwMDAnLFxuICAgICAgcGVyOiAnMTUlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiB1dWlkKCksXG4gICAgICBuYW1lOiAnQ2hpbmEnLFxuICAgICAgc2FsZXM6JzUwMDAnLFxuICAgICAgdXBkYXRlZEF0OiBcIlRvZGF5XCIsXG4gICAgICBwZXI6ICcxMCUnLFxuICAgIH0sXG4gIF07XG5cbiAgZXhwb3J0IGNvbnN0IE1hcCA9IChwcm9wcykgPT4gKFxuICAgIDxDYXJkIHsuLi5wcm9wc30+XG4gICAgICA8Q2FyZEhlYWRlclxuICAgICAgICB0aXRsZT1cIlZlcmlmaWNhdGlvbiBieSBDb3VudHJ5XCJcbiAgICAgIC8+XG4gICAgICA8RGl2aWRlciAvPiBcbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlQm9keT5cblxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7Y291bnRyaWVzLm1hcChjb3VudHJ5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y291bnRyeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e2FsaWduQ29udGVudDpcInJpZ2h0XCIsc2l6ZToxMDB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3thbGlnbkNvbnRlbnQ6XCJyaWdodFwiLCBzaXplOjIwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnkuc2FsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3thbGlnbkNvbnRlbnQ6XCJyaWdodFwiLHNpemU6MjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeS5wZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE1hcENoYXJ0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIFxuICAgIDwvQ2FyZD5cbiAgKTtcbiAgIl0sIm5hbWVzIjpbImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJzdWJIb3VycyIsInY0IiwidXVpZCIsIk1hcENoYXJ0IiwiQm94IiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJEaXZpZGVyIiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQXZhdGFyIiwiTGlzdEl0ZW1UZXh0IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlU29ydExhYmVsIiwiR3JpZCIsIkFycm93UmlnaHRJY29uIiwiTW9yZVZlcnRJY29uIiwiY291bnRyaWVzIiwiaWQiLCJuYW1lIiwic2FsZXMiLCJ1cGRhdGVkQXQiLCJwZXIiLCJNYXAiLCJwcm9wcyIsInRpdGxlIiwiYWxpZ24iLCJtYXAiLCJjb3VudHJ5IiwiaG92ZXIiLCJkaXYiLCJzdHlsZSIsImFsaWduQ29udGVudCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/dashboard/map.js\n");

/***/ })

});