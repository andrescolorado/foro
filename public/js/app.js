/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(52);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(12);

window.Vue = __webpack_require__(35);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('login', __webpack_require__(38));
Vue.component('register', __webpack_require__(41));
Vue.component('loader', __webpack_require__(44));

var app = new Vue({
  el: '#app'
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(13);
window.Popper = __webpack_require__(15).default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// try {
//     window.$ = window.jQuery = require('jquery');

//     require('bootstrap');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(16);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\lodash\\lodash.js'");

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\popper.js\\dist\\esm\\popper.js'");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\axios\\index.js'");

/***/ }),
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
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(39)
/* template */
var __vue_template__ = __webpack_require__(40)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\auth\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5383a42c", Component.options)
  } else {
    hotAPI.reload("data-v-5383a42c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 39 */
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
    mounted: function mounted() {
        console.log('Component mounted.');
    },
    data: function data() {
        return {
            isLoading: false,
            isError: false,

            user: {
                username: '',
                password: ''
            },
            errors: {
                username: {
                    state: false,
                    message: ''
                },
                password: {
                    state: false,
                    message: ''
                }
            }
        };
    },

    methods: {
        login: function login() {
            var _this = this;

            this.isLoading = true;

            axios.post('/login', {
                username: this.user.username,
                password: this.user.password
            }).then(function (data) {
                _this.isLoading = false;
                console.log(data);
            }).catch(function (err) {
                _this.isLoading = false;
                console.log(err);
            });
        }
    },
    computed: {
        styles: function styles() {
            return {
                'border': '3px solid rgba(243, 243, 243, .4)',
                'border-top': '3px solid #fff',
                width: 20 + 'px',
                height: 20 + 'px'
            };
        }
    }
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "container mx-auto h-full flex justify-center items-center pt-12"
    },
    [
      _c("div", { staticClass: "w-1/3" }, [
        _c("h1", { staticClass: "font-hairline mb-6 text-center" }, [
          _vm._v("Foro UNAP")
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { action: "" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.login($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "border-teal p-8 border-t-4 bg-white mb-6 rounded-lg shadow"
              },
              [
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Usuario")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.username,
                        expression: "user.username"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "text", placeholder: "pepito@ejemplo.com" },
                    domProps: { value: _vm.user.username },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "username", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Contraseña")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password,
                        expression: "user.password"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "password", placeholder: "*********" },
                    domProps: { value: _vm.user.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "password", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "bg-teal-dark hover:bg-teal text-white py-2 px-4 rounded"
                      },
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.isLoading,
                                expression: "!isLoading"
                              }
                            ]
                          },
                          [
                            _vm._v(
                              "\n                            Iniciar sesión\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("loader", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isLoading,
                              expression: "isLoading"
                            }
                          ],
                          style: [_vm.styles]
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("p", { staticClass: "text-grey-dark text-sm" }, [
        _vm._v("No tienes cuenta? "),
        _c(
          "a",
          {
            staticClass: "no-underline text-blue font-bold",
            attrs: { href: "/register" }
          },
          [_vm._v("Crea una cuenta")]
        ),
        _vm._v(".")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5383a42c", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(42)
/* template */
var __vue_template__ = __webpack_require__(43)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\auth\\Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-628ef530", Component.options)
  } else {
    hotAPI.reload("data-v-628ef530", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    },
    data: function data() {
        return {
            isLoading: false,
            isError: false,
            user: {
                name: '',
                last_name: '',
                typeuser: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors: {
                name: {
                    state: false, message: ''
                },
                last_name: {
                    state: false, message: ''
                },
                username: {
                    state: false, message: ''
                },
                typeuser: {
                    state: false, message: ''
                },
                email: {
                    state: false, message: ''
                },
                password: {
                    state: false, message: ''
                },
                password_confirmation: {
                    state: false, message: ''
                }
            }
        };
    },

    methods: {
        clearData: function clearData() {
            this.errors.name.state = false;
            this.errors.name.message = '';

            this.errors.last_name.state = false;
            this.errors.last_name.message = '';

            this.errors.username.state = false;
            this.errors.username.message = '';

            this.errors.typeuser.state = false;
            this.errors.typeuser.message = '';

            this.errors.email.state = false;
            this.errors.email.message = '';

            this.errors.password.state = false;
            this.errors.password.message = '';

            this.errors.password_confirmation.state = false;
            this.errors.password_confirmation.message = '';
        },
        registerUser: function registerUser() {
            var _this = this;

            this.clearData();
            this.isLoading = true;

            axios.post('/register', {
                name: this.user.name,
                last_name: this.user.last_name,
                typeuser: this.user.typeuser,
                username: this.user.username,
                email: this.user.email,
                password: this.user.password,
                password_confirmation: this.user.password_confirmation
            }).then(function (data) {
                _this.isLoading = false;
            }).catch(function (err) {
                _this.isLoading = false;

                var errors = err.response;

                if (errors.statusText == 'Unprocessable Entity' || errors.status == 422) {
                    if (errors.data) {
                        if (errors.data.errors.name) {
                            _this.errors.name.state = true;
                            _this.errors.name.message = _.isArray(errors.data.errors.name) ? errors.data.errors.name[0] : errors.data.name;
                        }
                        if (errors.data.errors.last_name) {
                            _this.errors.last_name.state = true;
                            _this.errors.last_name.message = _.isArray(errors.data.errors.last_name) ? errors.data.errors.last_name[0] : errors.data.last_name;
                        }
                        if (errors.data.errors.username) {
                            _this.errors.username.state = true;
                            _this.errors.username.message = _.isArray(errors.data.errors.username) ? errors.data.errors.username[0] : errors.data.username;
                        }
                        if (errors.data.errors.typeuser) {
                            _this.errors.typeuser.state = true;
                            _this.errors.typeuser.message = _.isArray(errors.data.errors.typeuser) ? errors.data.errors.typeuser[0] : errors.data.typeuser;
                        }
                        if (errors.data.errors.email) {
                            _this.errors.email.state = true;
                            _this.errors.email.message = _.isArray(errors.data.errors.email) ? errors.data.errors.email[0] : errors.data.email;
                        }
                        if (errors.data.errors.password) {
                            _this.errors.password.state = true;
                            _this.errors.password.message = _.isArray(errors.data.errors.password) ? errors.data.errors.password[0] : errors.data.password;
                        }
                        if (errors.data.errors.password_confirmation) {
                            _this.errors.password_confirmation.state = true;
                            _this.errors.password_confirmation.message = _.isArray(errors.data.errors.password_confirmation) ? errors.data.errors.password_confirmation[0] : errors.data.password_confirmation;
                        }
                    }
                }
            });
        }
    },
    computed: {
        styles: function styles() {
            return {
                'border': '3px solid rgba(243, 243, 243, .4)',
                'border-top': '3px solid #fff',
                width: 20 + 'px',
                height: 20 + 'px'
            };
        }
    }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "container mx-auto h-full flex justify-center items-center pt-12"
    },
    [
      _c("div", { staticClass: "w-1/3 mb-6" }, [
        _c("h1", { staticClass: "font-hairline mb-6 text-center" }, [
          _vm._v("Foro UNAP")
        ]),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { action: "" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.registerUser($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "border-teal p-8 border-t-4 bg-white mb-6 rounded-lg shadow"
              },
              [
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Nombres")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.name,
                        expression: "user.name"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "text", placeholder: "Pepito" },
                    domProps: { value: _vm.user.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.name.state,
                          expression: "errors.name.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.name.message))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Apellidos")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name,
                        expression: "user.last_name"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "text", placeholder: "Perez" },
                    domProps: { value: _vm.user.last_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.last_name.state,
                          expression: "errors.last_name.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.last_name.message))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Usuario")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.username,
                        expression: "user.username"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "text", placeholder: "pepito123" },
                    domProps: { value: _vm.user.username },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "username", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.username.state,
                          expression: "errors.username.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.username.message))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Tipo de usuario")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.typeuser,
                          expression: "user.typeuser"
                        }
                      ],
                      staticClass:
                        "block w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.user,
                            "typeuser",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "student" } }, [
                        _vm._v("Estudiante")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "teacher" } }, [
                        _vm._v("Docente")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.typeuser.state,
                          expression: "errors.typeuser.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.typeuser.message))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Correo electronico")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "text", placeholder: "pepito@ejemplo.com" },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.email.state,
                          expression: "errors.email.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.email.message))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Contraseña")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password,
                        expression: "user.password"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "password", placeholder: "*********" },
                    domProps: { value: _vm.user.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "password", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.password.state,
                          expression: "errors.password.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.password.message))]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4" }, [
                  _c(
                    "label",
                    { staticClass: "font-bold text-grey-darker block mb-2" },
                    [_vm._v("Confirmar contraseña")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password_confirmation,
                        expression: "user.password_confirmation"
                      }
                    ],
                    staticClass:
                      "block appearance-none w-full bg-white border \t\t\t\t\tstate: false,\n\t                    message:''border-grey-light hover:border-grey px-2 py-2 rounded shadow",
                    attrs: { type: "password", placeholder: "*********" },
                    domProps: { value: _vm.user.password_confirmation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.user,
                          "password_confirmation",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.password_confirmation.state,
                          expression: "errors.password_confirmation.state"
                        }
                      ],
                      staticClass: "text-red text-xs italic"
                    },
                    [_vm._v(_vm._s(_vm.errors.password_confirmation.message))]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center justify-between" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "bg-teal-dark hover:bg-teal text-white py-2 px-4 rounded"
                      },
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.isLoading,
                                expression: "!isLoading"
                              }
                            ]
                          },
                          [
                            _vm._v(
                              "\n\t                        \tRegistrarse\n\t                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("loader", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isLoading,
                              expression: "isLoading"
                            }
                          ],
                          style: [_vm.styles]
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("p", { staticClass: "text-grey-dark text-sm" }, [
        _vm._v("Ya tengo una cuenta? "),
        _c(
          "a",
          {
            staticClass: "no-underline text-blue font-bold",
            attrs: { href: "/login" }
          },
          [_vm._v("Registrarse")]
        ),
        _vm._v(".")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-628ef530", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(50)
/* template */
var __vue_template__ = __webpack_require__(51)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\shared\\loader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1558d0a3", Component.options)
  } else {
    hotAPI.reload("data-v-1558d0a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(48)("a1c1ce80", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1558d0a3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1558d0a3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n.loader {\n  border-radius: 50%;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),
/* 47 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\vue-style-loader\\lib\\addStylesClient.js'");

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

throw new Error("Module build failed: TypeError: Cannot read property 'split' of null\n    at splitPath (C:\\xampp\\htdocs\\foroUNAP\\node_modules\\prettier\\third-party.js:5376:25)\n    at Object.exports.sync [as findParentDir] (C:\\xampp\\htdocs\\foroUNAP\\node_modules\\prettier\\third-party.js:5403:20)\n    at loadPlugins (C:\\xampp\\htdocs\\foroUNAP\\node_modules\\prettier\\index.js:26838:36)\n    at C:\\xampp\\htdocs\\foroUNAP\\node_modules\\prettier\\index.js:31220:16\n    at Object.format (C:\\xampp\\htdocs\\foroUNAP\\node_modules\\prettier\\index.js:31241:12)\n    at Object.module.exports (C:\\xampp\\htdocs\\foroUNAP\\node_modules\\vue-loader\\lib\\template-compiler\\index.js:80:23)");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\foroUNAP\\node_modules\\css-loader\\lib\\css-base.js'\n    at runLoaders (C:\\xampp\\htdocs\\foroUNAP\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\xampp\\htdocs\\foroUNAP\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\xampp\\htdocs\\foroUNAP\\node_modules\\loader-runner\\lib\\LoaderRunner.js:200:19\n    at C:\\xampp\\htdocs\\foroUNAP\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);