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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/RevealOnScroll */ \"./app/assets/scripts/modules/RevealOnScroll.js\");\n\n\nvar mobileMenuInstance = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar revealOnScrollFeature = new _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelectorAll('.feature-item'), 0.25);\nvar revealOnScrollTestimonial = new _modules_RevealOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelectorAll('.testimonial'), 0.5);\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MobileMenu =\n/*#__PURE__*/\nfunction () {\n  function MobileMenu() {\n    _classCallCheck(this, MobileMenu);\n\n    this.siteHeader = document.querySelector('.site-header');\n    this.menuIcon = document.querySelector('.site-header__menu-icon');\n    this.menuContent = document.querySelector('.site-header__menu-content');\n    this.startListener();\n  }\n\n  _createClass(MobileMenu, [{\n    key: \"startListener\",\n    value: function startListener() {\n      this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));\n    }\n  }, {\n    key: \"toggleMenu\",\n    value: function toggleMenu() {\n      this.menuContent.classList.toggle('site-header__menu-content--menu-open');\n      this.siteHeader.classList.toggle('site-header--bg-revealed');\n      this.menuIcon.classList.toggle('site-header__menu-icon--close-glyph');\n    }\n  }]);\n\n  return MobileMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/RevealOnScroll.js":
/*!******************************************************!*\
  !*** ./app/assets/scripts/modules/RevealOnScroll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// import $ from 'jquery';\n// import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';\nvar RevealOnScroll =\n/*#__PURE__*/\nfunction () {\n  function RevealOnScroll(elements, offsetFromBottom) {\n    _classCallCheck(this, RevealOnScroll);\n\n    // this.featureItems = $('.feature-item');\n    this.elements = elements;\n    this.offsetFromBottom = offsetFromBottom;\n    this.hide();\n    this.reveal();\n  }\n\n  _createClass(RevealOnScroll, [{\n    key: \"hide\",\n    value: function hide() {\n      // this.featureItems.addClass('hide');\n      for (var i = 0; i < this.elements.length; i++) {\n        this.elements[i].classList.add('hide');\n      }\n    }\n  }, {\n    key: \"reveal\",\n    value: function reveal() {\n      var _this = this;\n\n      // this.featureItems.each(() => {\n      //     var currentItem = this;\n      //     new Waypoint({\n      //         element: currentItem,\n      //         handler: function() {\n      //             $(currentItem).addClass('hide-to-show');\n      //         }\n      //     });\n      // });\n      window.addEventListener('scroll', function () {\n        for (var i = 0; i < _this.elements.length; i++) {\n          var threshold = Math.floor(_this.offsetFromBottom * _this.elements[i].clientHeight);\n          var bottomDistance = _this.elements[i].getBoundingClientRect().bottom - innerHeight;\n\n          if (bottomDistance <= threshold) {\n            _this.elements[i].classList.add('hide--to-show');\n          }\n        }\n      });\n    }\n  }]);\n\n  return RevealOnScroll;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RevealOnScroll);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/RevealOnScroll.js?");

/***/ })

/******/ });