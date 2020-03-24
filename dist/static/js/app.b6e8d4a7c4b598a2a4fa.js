webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(52),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_main__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_main__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    Main: __WEBPACK_IMPORTED_MODULE_0__views_main___default.a
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'evaluate',
  props: {
    ScoreDB: {
      type: Object,
      default: {}
    },
    showScore: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    scoreFuc(index, scoreFlag, scoreArr) {
      this.$emit('on-star', [index, scoreFlag, scoreArr]);
    }, confirmScore(score) {
      this.$emit('confirm-star', score);
    }
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	props: {
		showToast: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {};
	},
	methods: {
		toggle() {}
	}
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_evaluate_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_evaluate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_evaluate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_toast__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_toast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api_js__ = __webpack_require__(38);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import emojiSlider from '.././components/emojiSlide.vue'
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    evaluate: __WEBPACK_IMPORTED_MODULE_0__components_evaluate_vue___default.a,
    Toast: __WEBPACK_IMPORTED_MODULE_1__components_toast___default.a
    // emojiSlider
  },
  data() {
    return {
      i: 0,
      comment: {},
      showEmoji: true, //是否显示表情
      showToast: false, //显示提示框
      toastText: '',
      showMoreOpratin: false, //是否显示更多操作
      toShowMaskInfo: false, //点击头部是否显示相信信息
      bellStatus: true, //头部区域铃声图标
      myaudio: '../../static/audio/msg.mp3', //铃音
      videoVal: false, //点击视频文字时候
      showNarrowPopVal: false, //点击切换成小窗口
      testContents: ["今天天气不错", '这个问题还没遇到过', '你说什么，我听不明白', '今天周五了', '请稍后--', '当前客服忙', '您还有什么咨询的吗', '正在查询', 'gone with the wind'],
      content: '',
      //聊天记录
      records: [{
        type: 1,
        time: new Date().toLocaleTimeString(),
        content: '您好！欢迎来到小薇客服，请问有什么能帮到您？如有疑问请在线咨询或者拨打400-926-2012咨询！感谢您的支持! '
      }, {
        type: 2,
        time: new Date().toLocaleTimeString(),
        content: '谢谢您的帮助'
      }],
      showScore: false, //显示评分
      ScoreDB: {
        scoreDatas: [{
          scoreTitle: '服务指数',
          scoreFlag: 0,
          scoreArr: [1, 2, 3, 4, 5]
        }, {
          scoreTitle: '接通速度',
          scoreFlag: 1,
          scoreArr: [1, 2, 3, 4, 5]
        }, {
          scoreTitle: '办事效率',
          scoreFlag: 2,
          scoreArr: [1, 2, 3, 4, 5]
        }],
        maxVal: [0, 0, 0]
      },
      imgFile: {},
      EXPS: []
    };
  },
  created() {
    this._loadEmojiData();
  },
  methods: {
    showInfo() {
      this.toShowMaskInfo = true;
    },
    //点击控制表情切换（显示和隐藏）
    emojiFuc() {
      this.showEmoji = !this.showEmoji;
    },
    videoFuc() {
      this.videoVal = true;
      this.showNarrowPopVal = false;
    },
    //提示音
    hint(staus) {
      if (staus != undefined) {
        this.bellStatus = !this.bellStatus;
      }
      this.bellStatus ? this.$refs.hintAudio.play() : this.$refs.hintAudio.pause();
    },
    showNarrowPopFuc() {
      this.showNarrowPopVal = true;
      this.videoVal = false;
    }, showBigPopFuc() {
      this.showNarrowPopVal = false;
      this.videoVal = true;
    }, showEvaluateFuc() {
      this.showScore = !this.showScore;
    },
    sendMsg() {
      var content = this.content.trim();
      this.records.push({
        time: new Date().toLocaleTimeString(),
        content: content,
        type: 2
      });
      this.content = "";
      setTimeout(() => {
        this.i++;
        console.log(1);
        this.hint();
        this.records.push({
          time: new Date().toLocaleTimeString(),
          content: this.testContents[this.i],
          type: 1
        });
        this.scrollToBottom();
      }, 800);
    },
    getEmotionData(pageNow, pageSize) {
      return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow);
    },
    replaceFace(con) {
      if (!con) {
        return;
      }
      if (con.toString().indexOf('/:') > -1) {
        var exps = this.EXPS;
        for (var i = 0; i < exps.length; i++) {
          con = con.replace(exps[i].reg, '<img src="' + exps[i].file + '"  alt="" />');
        }
      }
      return con;
    },
    //点击星星进行星星评分
    selectStar(msg) {
      let index = msg[0];
      let scoreFlag = msg[1];
      let scoreArr = msg[2];
      var Target = [1, 2, 3, 4, 5];
      for (var i = 0; i < index; i++) {
        Target[i] = i;
      }
      //方便确定星星选中的个数，将不亮的星星数组设置为-1
      for (var j = index; j < Target.length; j++) {
        Target[j] = -1;
      }

      //评分结果数
      var tempArr = [];
      tempArr = this.ScoreDB.maxVal.slice(0);
      tempArr[scoreFlag] = index;
      this.ScoreDB.maxVal = tempArr.concat();
      this.ScoreDB.scoreDatas[scoreFlag].scoreArr = Target;
    },
    //点击确定关闭星星评价
    confrmStar(msg) {
      this.showToast = true;
      this.toastText = '您的评分依次是 ' + msg;
      this.showScore = false;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },

    //滚动到底
    scrollToBottom() {
      setTimeout(() => {
        //滚动条长度
        var currentDistance = this.$refs.xwBody.scrollHeight - this.$refs.xwBody.clientHeight;
        //当前滚动条距离顶部的距离
        var currentScroll_y = this.$refs.xwBody.scrollTop;
        if (currentDistance > 0 && currentDistance > currentScroll_y) {
          currentScroll_y = Math.ceil((currentDistance - currentScroll_y) / 10) + currentScroll_y;
          currentScroll_y = currentScroll_y > currentDistance ? currentDistance : currentScroll_y;
          //微信和qq浏览器不支持 scrollTo？
          //this.$refs.xwBody.scrollTo(0,currentScroll_y);
          this.$refs.xwBody.scrollTop = currentScroll_y;
          this.scrollToBottom();
        }
      }, 13);
    },
    onFocusText() {
      this.scrollToBottom();
    },
    _loadEmojiData() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__api_api_js__["a" /* getEmojiData */])().then(res => {
        var json = eval('(' + res + ')');
        this.EXPS = json.EXPS.slice(0);
      });
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEmojiData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

//获取emoji头像(本地json只能放在static文件夹里) 
function getEmojiData() {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
    method: 'get',
    url: '/static/emojiDB.json'
  }).then(function (res) {
    return Promise.resolve(res.data);
  });
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_style_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui_lib_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_axios__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_4_axios___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_mint_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(54),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9d95aff6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(55),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ac6d7f2a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(53),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('Main')], 1)
},staticRenderFns: []}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "xw-header"
  }, [_c('div', {
    staticClass: "xw-ring-wrap"
  }, [_c('a', {
    class: [_vm.bellStatus ? '' : 'xw-ring-icon-toggle', 'xw-ring-icon'],
    on: {
      "touchstart": function($event) {
        _vm.hint('checkStaus')
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "xw-header-content",
    on: {
      "touchstart": _vm.showInfo
    }
  }, [(!_vm.toShowMaskInfo) ? _c('div', {
    class: [_vm.toShowMaskInfo ? '' : 'bounceInRight', 'animated']
  }, [_c('img', {
    staticClass: "xw-header-avatar",
    attrs: {
      "src": "static/images/logo.jpg"
    }
  }), _vm._v(" "), _vm._m(0)]) : _vm._e()]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.toShowMaskInfo),
      expression: "toShowMaskInfo"
    }],
    class: [_vm.toShowMaskInfo ? 'bounceInDown' : '', 'xw-show-info-box', 'animated']
  }, [_vm._m(1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    ref: "xwBody",
    staticClass: "xw-content",
    on: {
      "touchstart": function($event) {
        _vm.toShowMaskInfo = false
      }
    }
  }, [_c('div', {
    staticClass: "xw-chat-wrap"
  }, [_c('ul', _vm._l((_vm.records), function(messageList) {
    return _c('li', [(messageList.type == 1) ? _c('div', [_c('div', {
      staticClass: "xw-chat-time"
    }, [_vm._v(_vm._s(messageList.time))]), _vm._v(" "), _c('div', {
      staticClass: "xw-chat-servicer"
    }, [_vm._m(3, true), _vm._v(" "), _c('div', {
      staticClass: "xw-chat-msg"
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.replaceFace(messageList.content))
      }
    })])])]) : _c('div', [_c('div', {
      staticClass: "xw-chat-time"
    }, [_vm._v(_vm._s(messageList.time))]), _vm._v(" "), _c('div', {
      staticClass: "xw-chat-customer"
    }, [_vm._m(4, true), _vm._v(" "), _c('div', {
      staticClass: "xw-chat-msg",
      staticStyle: {
        "display": "inline-block"
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.replaceFace(messageList.content))
      }
    })])])])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "xw-footer-wrap",
    on: {
      "touchstart": function($event) {
        _vm.toShowMaskInfo = false
      }
    }
  }, [_c('div', {
    staticClass: "xw-footer-content"
  }, [_c('div', {
    staticClass: "xw-vmodel-wrap"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "xw-content-textarea",
    attrs: {
      "placeholder": "请输入您的问题"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "focus": _vm.onFocusText,
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.sendMsg($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "xw-chat-tool"
  }, [_c('div', {
    staticClass: "xw-chat-tool-item"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.content.trim().length) ? _c('a', {
    staticClass: "xw-send-btn-text",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.sendMsg
    }
  }, [_vm._v("发送")]) : _vm._e()])], 1), _vm._v(" "), _c('div', {
    staticClass: "xw-chat-tool-item"
  }, [_c('a', {
    class: [_vm.showEmoji ? 'xw-face' : 'xw-face-close', 'xw-chat-tool-btn'],
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.emojiFuc
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "xw-chat-tool-item"
  }, [_c('a', {
    class: [_vm.showMoreOpratin ? 'xw-hide-operation-close' : 'xw-hide-operation', 'xw-chat-tool-btn'],
    on: {
      "click": function($event) {
        _vm.showMoreOpratin = !_vm.showMoreOpratin
      }
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.showMoreOpratin) ? _c('div', {
    staticClass: "xw-window-text"
  }, [_c('label', {
    attrs: {
      "for": "uploadImg"
    }
  }, [_c('span', [_c('input', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "name": "image",
      "accept": "image/*",
      "multiple": "",
      "id": "uploadImg"
    }
  }), _vm._v("图片\n                  ")])]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.videoFuc
    }
  }, [_vm._v("视频")]), _vm._v(" "), _c('span', {
    on: {
      "touchstart": _vm.showEvaluateFuc
    }
  }, [_vm._v("评价")]), _vm._v(" "), _c('span', [_vm._v("结束")])]) : _vm._e()])], 1)])]), _vm._v(" "), _c('transition', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "name": "slide-fade"
    }
  }, [(_vm.showEmoji) ? _c('div', {
    staticClass: "xw-window-text xw-face-emoji-ul"
  }, [_c('div', {
    staticClass: "xw-chat-ul-box"
  }, [_c('mt-swipe', {
    attrs: {
      "auto": 0
    }
  }, _vm._l((Math.ceil(_vm.EXPS.length / 15)), function(n) {
    return _c('mt-swipe-item', {
      key: n
    }, _vm._l((_vm.getEmotionData(n, 15)), function(item, index) {
      return _c('li', {
        staticClass: "xw-faceEmoji"
      }, [_c('img', {
        attrs: {
          "src": item.file,
          "data": item.code
        },
        on: {
          "click": function($event) {
            _vm.content += item.code
          }
        }
      })])
    }))
  }))], 1)]) : _vm._e()])], 1), _vm._v(" "), _c('audio', {
    ref: "hintAudio",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "preload": "metadata",
      "controls": "controls",
      "autoplay": "autoplay"
    }
  }, [_c('source', {
    attrs: {
      "src": _vm.myaudio,
      "type": "audio/mpeg"
    }
  })]), _vm._v(" "), (_vm.showNarrowPopVal) ? _c('div', {
    staticClass: "xw-samll-pop-wrap animated bounceInUp"
  }, [_c('span', {
    staticClass: "xw-big-pop",
    on: {
      "click": _vm.showBigPopFuc
    }
  }, [_vm._v("显示大窗")])]) : _vm._e(), _vm._v(" "), (_vm.videoVal) ? _c('div', {
    staticClass: "xw-pop-server animated bounceInRight"
  }, [_c('h5', [_vm._v("客服")]), _vm._v(" "), _c('span', {
    staticClass: "xw-narrow-pop",
    on: {
      "click": _vm.showNarrowPopFuc
    }
  }, [_vm._v("显示小窗")])]) : _vm._e(), _vm._v(" "), (_vm.videoVal) ? _c('div', {
    staticClass: "xw-pop-customer animated bounceInLeft"
  }, [_vm._v("\n\t      顾客\n\t      "), _vm._m(5)]) : _vm._e(), _vm._v(" "), _c('evaluate', {
    attrs: {
      "ScoreDB": _vm.ScoreDB,
      "showScore": _vm.showScore
    },
    on: {
      "on-star": _vm.selectStar,
      "confirm-star": _vm.confrmStar
    }
  }), _vm._v(" "), _c('Toast', {
    attrs: {
      "showToast": _vm.showToast
    }
  }, [_vm._v(_vm._s(_vm.toastText))])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xw-header-title-wrap"
  }, [_c('div', {
    staticClass: "xw-header-title"
  }, [_vm._v("小薇客服")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xw-logo"
  }, [_c('img', {
    attrs: {
      "src": "static/images/logo.jpg"
    }
  }), _vm._v(" "), _c('h4', [_vm._v("小薇客服")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xw-header-info"
  }, [_c('p', {
    staticClass: "animated bounceInLeft"
  }, [_vm._v("\n\t                小薇客服产品，集成了电话呼叫中心、IM在线客服、移动在线客服、微信、微博、移动APP SDK、邮件等全客服渠道，用工单系统承载售后服务，配合帮助中心、智能机器人等自助服务。\n\t              ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xw-servicer-avantar-wrap"
  }, [_c('img', {
    staticClass: "xw-servicer-avantar",
    attrs: {
      "src": "/static/images/logo.jpg"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "xw-customer-avantar-wrap"
  }, [_c('img', {
    staticClass: "xw-customer-avantar",
    attrs: {
      "src": "/static/images/female.jpg"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('a', {
    staticClass: "xw-hang-up",
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    staticClass: "xw-hang-up-icon",
    attrs: {
      "src": "/static/images/hang-up.png"
    }
  })])])
}]}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showScore) ? _c('div', {
    staticClass: "xw-evaluate-wrap  animated bounceInLeft"
  }, [_c('div', {
    staticClass: "xw-evaluate-content"
  }, [_c('ul', {
    staticClass: "xw-score-list"
  }, _vm._l((_vm.ScoreDB.scoreDatas), function(items) {
    return _c('li', [_c('span', [_vm._v(_vm._s(items.scoreTitle))]), _vm._v(" "), _c('nav', _vm._l((items.scoreArr), function(item, index) {
      return _c('a', {
        class: [item == index ? 'xw-score-active' : 'xw-score-notActiv'],
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function($event) {
            _vm.scoreFuc(index + 1, items.scoreFlag, items.scoreArr)
          }
        }
      })
    })), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden"
      },
      domProps: {
        "value": Math.max.apply(null, items.scoreArr) + 1
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "xw-evaluate-submit",
    attrs: {
      "value": _vm.ScoreDB.maxVal
    },
    on: {
      "click": function($event) {
        _vm.confirmScore(_vm.ScoreDB.maxVal)
      }
    }
  }, [_vm._v("确 定")])])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.showToast) ? _c('div', {
    staticClass: "xw-toast-wrap",
    on: {
      "click": _vm.toggle
    }
  }, [_c('div', {
    staticClass: "xw-toast-content"
  }, [_c('div', {
    staticClass: "xw-toast-text"
  }, [_vm._t("default")], 2)])]) : _vm._e()])
},staticRenderFns: []}

/***/ })
],[39]);
//# sourceMappingURL=app.b6e8d4a7c4b598a2a4fa.js.map