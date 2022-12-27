/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/hello.controller.ts":
/*!*********************************************!*\
  !*** ./src/controllers/hello.controller.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloController": () => (/* binding */ HelloController)
/* harmony export */ });
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! routing-controllers */ "routing-controllers");
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(routing_controllers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webaverse_services_hello_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webaverse/services/hello.service */ "./src/services/hello.service.ts");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let HelloController = class HelloController {
    constructor(helloService) {
        this.helloService = helloService;
    }
    async getRequest(query, response) {
        return response.send(await this.helloService.hello());
    }
    async postReqeust(query, response) {
        return response.send(await this.helloService.hello());
    }
};
__decorate([
    (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.Get)(''),
    __param(0, (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.QueryParams)()),
    __param(1, (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "getRequest", null);
__decorate([
    (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.Post)(''),
    __param(0, (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.QueryParams)()),
    __param(1, (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "postReqeust", null);
HelloController = __decorate([
    (0,routing_controllers__WEBPACK_IMPORTED_MODULE_0__.JsonController)('/hello'),
    (0,typedi__WEBPACK_IMPORTED_MODULE_2__.Service)(),
    __metadata("design:paramtypes", [_webaverse_services_hello_service__WEBPACK_IMPORTED_MODULE_1__.HelloService])
], HelloController);



/***/ }),

/***/ "./src/services/hello.service.ts":
/*!***************************************!*\
  !*** ./src/services/hello.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloService": () => (/* binding */ HelloService)
/* harmony export */ });
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const cache = {};
let HelloService = class HelloService {
    constructor() {
    }
    async hello(param1) {
        return { hello: "world" };
    }
};
HelloService = __decorate([
    (0,typedi__WEBPACK_IMPORTED_MODULE_0__.Service)(),
    __metadata("design:paramtypes", [])
], HelloService);



/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "routing-controllers":
/*!**************************************!*\
  !*** external "routing-controllers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("routing-controllers");

/***/ }),

/***/ "typedi":
/*!*************************!*\
  !*** external "typedi" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("typedi");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! routing-controllers */ "routing-controllers");
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(routing_controllers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _webaverse_controllers_hello_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webaverse/controllers/hello.controller */ "./src/controllers/hello.controller.ts");





const Search = {
    start: () => {
        (0,routing_controllers__WEBPACK_IMPORTED_MODULE_2__.useContainer)(typedi__WEBPACK_IMPORTED_MODULE_3__.Container);
        const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
        app.use(function (req, res, next) {
            req.setTimeout(0); // no timeout for all requests, your server will be DoS'd
            next();
        });
        app.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({ extended: true }));
        // Configure controllers
        (0,routing_controllers__WEBPACK_IMPORTED_MODULE_2__.useExpressServer)(app, {
            routePrefix: '/api',
            controllers: [
                _webaverse_controllers_hello_controller__WEBPACK_IMPORTED_MODULE_4__.HelloController
            ],
        });
        app.get('*', (req, res, next) => {
            if (req.path.startsWith('/api')) {
                next();
            }
            else {
                res.end();
            }
        });
        const server = app.listen(process.env.PORT || 3000, () => {
            // eslint-disable-next-line no-console
            console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT || 3000}`);
        });
        server.setTimeout(0);
    },
};
Search.start();

})();

/******/ })()
;
//# sourceMappingURL=webaverse-backend.js.map