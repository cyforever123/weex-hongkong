/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/088c3638d305492d3990897677c42eed', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/088c3638d305492d3990897677c42eed',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "paddingLeft": 30,
	        "paddingRight": 30
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "height": 36
	              },
	              "events": {
	                "click": "popout"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "style": {
	                    "width": 36,
	                    "height": 36
	                  },
	                  "attr": {
	                    "src": function () {return this.go_back}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "input",
	              "classList": [
	                "title-background"
	              ],
	              "attr": {
	                "type": "text",
	                "autofocus": "true"
	              },
	              "events": {
	                "input": "oninput"
	              }
	            },
	            {
	              "type": "div",
	              "style": {
	                "height": 36
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-query"
	                  ],
	                  "events": {
	                    "click": "setnull"
	                  },
	                  "attr": {
	                    "value": "取消"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "title-img"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 30,
	                "height": 30
	              },
	              "attr": {
	                "src": function () {return this.query}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "title-query"
	              ],
	              "attr": {
	                "value": "搜索商品"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "backgroundColor": "#f5f5f5",
	        "paddingLeft": 30,
	        "paddingRight": 30,
	        "marginTop": 12,
	        "flex": 1
	      },
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title-other"
	              ],
	              "attr": {
	                "value": "歷史搜索"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.list},
	            "key": "i",
	            "value": "v"
	          },
	          "classList": [
	            "row"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "repeat": {
	                "expression": function () {return this.v},
	                "key": "k",
	                "value": "text"
	              },
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "fontFamily": "PingFangSC-Light",
	                        "fontSize": 28,
	                        "color": "#4a4a4a",
	                        "letterSpacing": -0.68,
	                        "textAlign": "center"
	                      },
	                      "attr": {
	                        "value": function () {return this.text}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "height": 60,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginTop": 12,
	    "justifyContent": "space-between"
	  },
	  "title-background": {
	    "width": 584,
	    "height": 60,
	    "borderRadius": 4,
	    "backgroundColor": "#ececec",
	    "marginRight": 10,
	    "marginLeft": 10
	  },
	  "title-img": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#ececec",
	    "borderRadius": 4,
	    "width": 200,
	    "height": 58,
	    "flexDirection": "row",
	    "position": "absolute",
	    "top": 13,
	    "left": 275
	  },
	  "title-query": {
	    "fontFamily": "PingFangSC-Light",
	    "fontSize": 28,
	    "color": "#333333",
	    "textAlign": "left"
	  },
	  "title-other": {
	    "fontFamily": "PingFangSC-Light",
	    "fontSize": 24,
	    "color": "#999999",
	    "textAlign": "left",
	    "marginBottom": 10,
	    "marginTop": 30
	  },
	  "item": {
	    "letterSpacing": -0.68,
	    "textAlign": "center",
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#FFFFFF",
	    "margin": 10
	  },
	  "row": {
	    "flexDirection": "row",
	    "height": 80
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var baseUrl = __webpack_require__(4);
	module.exports = {
	    data: function () {return {
	        query: baseUrl.apiurl.resurl + "query.png",
	        scan: baseUrl.apiurl.resurl + "scan.png",
	        go_back: baseUrl.apiurl.resurl + "pic_back.png",
	        list: [['手提電腦', '華碩手提電腦', '戴爾'], ['相機', '佳能', '索尼'], ['電水壺', '電視機', '手機']]
	    }},
	    methods: {
	        oninput: function oninput(event) {},
	        setnull: function setnull(event) {
	            event.value = '';
	        },
	        popout: function popout(event) {}
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by 16080695 on 2017/1/11.
	 */
	exports.apiurl = {
	    resurl: 'http://103.255.95.212/test/'
	}

/***/ }
/******/ ]);