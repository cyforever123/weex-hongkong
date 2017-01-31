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

	__weex_define__('@weex-component/32c504b8c3aba8177e68595fba6a5afe', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/32c504b8c3aba8177e68595fba6a5afe',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "children": [
	    {
	      "type": "header",
	      "classList": [
	        "header"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row",
	            "alignItems": "center",
	            "marginTop": 12
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "title-background"
	              ],
	              "events": {
	                "click": "queryShops"
	              },
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
	            },
	            {
	              "type": "div",
	              "style": {
	                "height": 36,
	                "marginLeft": 30
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "style": {
	                    "width": 36,
	                    "height": 36
	                  },
	                  "attr": {
	                    "src": function () {return this.scan}
	                  },
	                  "events": {
	                    "click": "scanClick"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "children": [
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "slider",
	              "classList": [
	                "slider"
	              ],
	              "attr": {
	                "interval": "3000",
	                "autoPlay": "true"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "slider-pages"
	                  ],
	                  "repeat": {
	                    "expression": function () {return this.sliderContent},
	                    "value": "item"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "img"
	                      ],
	                      "attr": {
	                        "src": function () {return this.item.pictureUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "indicator",
	                  "classList": [
	                    "indicator"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.iconList},
	      "attr": {
	        "index": function () {return this.$index}
	      },
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.data},
	          "style": {
	            "flex": 1,
	            "alignItems": "center",
	            "justifyContent": "center",
	            "marginTop": 37
	          },
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 100,
	                "height": 100
	              },
	              "attr": {
	                "src": function () {return this.icon}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "icon-name"
	              ],
	              "attr": {
	                "value": function () {return this.name}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "height": 26,
	            "backgroundColor": "#ececec",
	            "marginTop": 37
	          }
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 80
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "wrapper"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "countdown"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 730,
	                        "height": 80
	                      },
	                      "attr": {
	                        "src": function () {return this.countDownBackgroundUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "time"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 40,
	                        "height": 30
	                      },
	                      "attr": {
	                        "src": function () {return this.timeUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "hour"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "time_text"
	                      ],
	                      "attr": {
	                        "value": function () {return this.hour_time}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "hour-colon"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 4,
	                        "height": 18
	                      },
	                      "attr": {
	                        "src": function () {return this.timeIconUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "minute_background"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 40,
	                        "height": 30
	                      },
	                      "attr": {
	                        "src": function () {return this.timeUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "minute"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "time_text"
	                      ],
	                      "attr": {
	                        "value": function () {return this.minute_time}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "minuter-colon"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 4,
	                        "height": 18
	                      },
	                      "attr": {
	                        "src": function () {return this.timeIconUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "second_background"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 40,
	                        "height": 30
	                      },
	                      "attr": {
	                        "src": function () {return this.timeUrl}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "second"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "time_text"
	                      ],
	                      "attr": {
	                        "value": function () {return this.second_time}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "arrow"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "style": {
	                        "width": 27,
	                        "height": 30
	                      },
	                      "attr": {
	                        "src": function () {return this.arrowUrl}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "scroller",
	          "attr": {
	            "scrollDirection": "horizontal"
	          },
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "div",
	              "repeat": function () {return this.sliderhorizontal},
	              "style": {
	                "justifyContent": "center",
	                "marginTop": 20,
	                "marginLeft": 30
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "slider-horizontal"
	                  ],
	                  "attr": {
	                    "src": function () {return this.pictureUrl}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginTop": 10,
	                    "fontSize": 24,
	                    "fontFamily": "PingFangSC-Light",
	                    "color": "#000000"
	                  },
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginTop": 7,
	                    "fontSize": 28,
	                    "fontFamily": "PingFangSC-Semibold",
	                    "color": "#ff8000"
	                  },
	                  "attr": {
	                    "value": function () {return this.price}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginTop": 10,
	                    "fontSize": 20,
	                    "fontFamily": "PingFangSC-Light",
	                    "color": "#999999",
	                    "textDecoration": "line-through"
	                  },
	                  "attr": {
	                    "value": function () {return this.oldPrice}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "height": 20,
	            "backgroundColor": "#ececec",
	            "marginTop": 26
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "height": 80,
	            "backgroundColor": "#ffffff",
	            "justifyContent": "center",
	            "alignItems": "center"
	          },
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 750,
	                "height": 80
	              },
	              "attr": {
	                "src": function () {return this.list_title}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "backgroundColor": "#d8d8d8",
	                "height": 1
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.shops},
	      "attr": {
	        "index": function () {return this.$index}
	      },
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.data},
	          "style": {
	            "justifyContent": "center",
	            "flex": 1,
	            "borderBottomWidth": 1,
	            "borderBottomColor": "#d8d8d8"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "style": {
	                    "marginBottom": 32,
	                    "flex": 1
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "style": {
	                        "alignItems": "center",
	                        "justifyContent": "center",
	                        "marginTop": 25
	                      },
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "shop-icon"
	                          ],
	                          "attr": {
	                            "src": function () {return this.icon}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "marginTop": 37,
	                        "marginLeft": 20,
	                        "fontSize": 24,
	                        "fontFamily": "PingFangSC-Light",
	                        "color": "#000000",
	                        "letterSpacing": 0,
	                        "height": 64
	                      },
	                      "attr": {
	                        "value": function () {return this.name}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "marginTop": 4,
	                        "marginLeft": 20,
	                        "fontSize": 32,
	                        "fontFamily": "PingFangSC-Semibold",
	                        "color": "#ff8000"
	                      },
	                      "attr": {
	                        "value": function () {return this.price}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "backgroundColor": "#d8d8d8",
	                        "width": 1,
	                        "height": 490
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
	    "alignItems": "center"
	  },
	  "title-background": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#ececec",
	    "borderRadius": 4,
	    "width": 614,
	    "height": 60,
	    "flexDirection": "row"
	  },
	  "title-query": {
	    "fontSize": 28,
	    "fontFamily": "PingFangSC-Light",
	    "color": "#333333",
	    "textAlign": "left"
	  },
	  "img": {
	    "width": 750,
	    "height": 528
	  },
	  "slider": {
	    "flexDirection": "row",
	    "marginTop": 30,
	    "width": 750,
	    "height": 528
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 528
	  },
	  "indicator": {
	    "width": 750,
	    "height": 528,
	    "position": "absolute",
	    "top": 236,
	    "left": 1,
	    "itemColor": "white",
	    "itemSelectedColor": "#ffa400",
	    "itemSize": 20
	  },
	  "icon-name": {
	    "fontFamily": "PingFangSC-Light",
	    "fontSize": 24,
	    "color": "#333333",
	    "textAlign": "center",
	    "marginTop": 23
	  },
	  "slider-horizontal": {
	    "backgroundColor": "#ececec",
	    "borderRadius": 4,
	    "width": 240,
	    "height": 240
	  },
	  "shop-icon": {
	    "width": 286,
	    "height": 286
	  },
	  "countdown": {
	    "alignItems": "center"
	  },
	  "time": {
	    "position": "absolute",
	    "top": 28,
	    "left": 368
	  },
	  "hour": {
	    "position": "absolute",
	    "top": 28,
	    "left": 375,
	    "justifyContent": "center"
	  },
	  "time_text": {
	    "fontFamily": "PingFangSC-Medium",
	    "fontSize": 22,
	    "color": "#ffffff",
	    "textAlign": "left"
	  },
	  "hour-colon": {
	    "position": "absolute",
	    "top": 34,
	    "left": 414,
	    "justifyContent": "center"
	  },
	  "minute_background": {
	    "position": "absolute",
	    "top": 28,
	    "left": 426,
	    "justifyContent": "center"
	  },
	  "minute": {
	    "position": "absolute",
	    "top": 28,
	    "left": 433,
	    "justifyContent": "center"
	  },
	  "minuter-colon": {
	    "position": "absolute",
	    "top": 34,
	    "left": 474,
	    "justifyContent": "center"
	  },
	  "second_background": {
	    "position": "absolute",
	    "top": 28,
	    "left": 486,
	    "justifyContent": "center"
	  },
	  "second": {
	    "position": "absolute",
	    "top": 28,
	    "left": 493,
	    "justifyContent": "center"
	  },
	  "arrow": {
	    "position": "absolute",
	    "top": 28,
	    "left": 526,
	    "justifyContent": "center"
	  },
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var baseUrl = __webpack_require__(4);
	var navigator = __weex_require__('@weex-module/navigator');
	var nextUrl = baseUrl.apiurl.resurl + 'query.js';
	var weexZxing = __weex_require__('@weex-module/weex_zxing');
	module.exports = {
	    data: function () {return {
	        query: baseUrl.apiurl.resurl + "query.png",
	        scan: baseUrl.apiurl.resurl + "scan.png",
	        list_title: baseUrl.apiurl.resurl + "list_title.png",
	        countDownBackgroundUrl: baseUrl.apiurl.resurl + "time_background.png",
	        timeUrl: baseUrl.apiurl.resurl + "time.png",
	        timeIconUrl: baseUrl.apiurl.resurl + "time_icon.png",
	        arrowUrl: baseUrl.apiurl.resurl + "arrow.png",
	        time: 0,
	        hour_time: 30,
	        minute_time: 40,
	        second_time: 60,
	        sliderContent: [{ itemId: '520421163634', title: 'item1', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png' }, { itemId: '522076777462', title: 'item2', pictureUrl: baseUrl.apiurl.resurl + 'silder2.png' }, { itemId: '522076777462', title: 'iten3', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png' }, { itemId: '522076777462', title: 'iten3', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png' }, { itemId: '522076777462', title: 'iten3', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png' }],
	        iconList: [{
	            data: [{ name: "電視優惠", icon: baseUrl.apiurl.resurl + 'icon1.png' }, {
	                name: "冷氣優惠",
	                icon: baseUrl.apiurl.resurl + 'icon2.png'
	            }, { name: "相機優惠", icon: baseUrl.apiurl.resurl + 'icon3.png' }, {
	                name: "手機優惠",
	                icon: baseUrl.apiurl.resurl + 'icon4.png'
	            }]
	        }, {
	            data: [{ name: "Microsoft專區", icon: baseUrl.apiurl.resurl + 'icon5.png' }, {
	                name: "Apple專區",
	                icon: baseUrl.apiurl.resurl + 'icon6.png'
	            }, { name: "促銷頻道", icon: baseUrl.apiurl.resurl + 'icon7.png' }, {
	                name: "促銷頻道",
	                icon: baseUrl.apiurl.resurl + 'icon8.png'
	            }]
	        }],
	        sliderhorizontal: [{
	            name: '華碩 (ASUS) UX1',
	            price: 'HK$2,999',
	            oldPrice: 'HK$1,999',
	            pictureUrl: baseUrl.apiurl.resurl + 'computer.png'
	        }, {
	            name: '華碩 (ASUS) UX2',
	            price: 'HK$2,999',
	            oldPrice: 'HK$1,999',
	            pictureUrl: baseUrl.apiurl.resurl + 'pad.png'
	        }, {
	            name: '華碩 (ASUS) UX3',
	            price: 'HK$2,999',
	            oldPrice: 'HK$1,999',
	            pictureUrl: baseUrl.apiurl.resurl + 'print.png'
	        }, {
	            name: '華碩 (ASUS) UX4',
	            price: 'HK$2,999',
	            oldPrice: 'HK$1,999',
	            pictureUrl: baseUrl.apiurl.resurl + 'computer.png'
	        }, {
	            name: '華碩 (ASUS) UX5',
	            price: 'HK$2,999',
	            oldPrice: 'HK$1,999',
	            pictureUrl: baseUrl.apiurl.resurl + 'pad.png'
	        }],
	        shops: [{
	            data: [{
	                name: "Apple iPhone 7 128GB",
	                icon: baseUrl.apiurl.resurl + 'nikon.png',
	                price: "HK$3,998.00"
	            }, {
	                name: "三星 Galaxy J3 Pro（J3110）2+16G 皓月銀",
	                icon: baseUrl.apiurl.resurl + 'computer.png',
	                price: "HK$19,999.00"
	            }]
	        }, {
	            data: [{
	                name: "Apple iPhone 7 128GB 玫瑰金色",
	                icon: baseUrl.apiurl.resurl + 'headset.png',
	                price: "HK$3,998.00"
	            }, { name: "Apple iPhone 7 128GB", icon: baseUrl.apiurl.resurl + 'pad.png', price: "HK$3,998.00" }]
	        }]
	    }},
	    methods: {
	        queryShops: function queryShops(e) {
	            this.$call('modal', 'toast', {
	                'message': 'row ' + e.target.attr.rownumber + ' clicked',
	                'duration': 2.0
	            });
	            var params = { 'url': nextUrl, 'animated': 'true' };
	            navigator.push(params, function (e) {
	                console.log('i am the callback.');
	            });
	        },
	        scanClick: function scanClick(e) {
	            weexZxing.assistant();
	        }
	    },
	    ready: function ready() {
	        setInterval(function () {
	            this.second_time--;
	            this._app.updateActions();
	        }.bind(this), 1000);
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
	    resurl: 'ftp://10.25.55.72/'
	}

/***/ }
/******/ ]);