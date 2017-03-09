webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivateAccountComponent = (function () {
    function ActivateAccountComponent() {
    }
    ActivateAccountComponent.prototype.ngOnInit = function () {
    };
    ActivateAccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-activate-account',
            template: __webpack_require__(675),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], ActivateAccountComponent);
    return ActivateAccountComponent;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/activate-account.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommunicationService = (function () {
    function CommunicationService(http) {
        this.http = http;
    }
    CommunicationService.prototype.register = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/register', 'username=' + username, options).map(function (r) {
            console.log(r);
            return r._body.substring(39);
        }).catch(this.handleError.bind(this));
    };
    CommunicationService.prototype.handleError = function (error) {
        var errorCode;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorCode = body.errorCode;
        }
        else {
            errorCode = 0;
        }
        console.error(errorCode);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorCode);
    };
    CommunicationService.prototype.checkIfUserActivatedApp = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get("/user-active?username=" + username, options).map(function (r) { return r.json(); });
    };
    CommunicationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], CommunicationService);
    return CommunicationService;
    var _a;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/communication.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__(678),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/index.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(679),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/login.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordChangeComponent = (function () {
    function PasswordChangeComponent() {
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
    };
    PasswordChangeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-password-change',
            template: __webpack_require__(680),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/password-change.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communication_service_communication_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterAppComponent = (function () {
    function RegisterAppComponent(communicationService) {
        this.communicationService = communicationService;
        this.loading = true;
        this.userLoggedIn = false;
        this.userActivatedAccount = false;
        this.svgContent = "";
        this.showAccountActivatedDialog = false;
    }
    RegisterAppComponent.prototype.ngOnInit = function () {
    };
    RegisterAppComponent.prototype.logUserIn = function () {
        var _this = this;
        localStorage.setItem('currentUser', this.username);
        this.loading = true;
        this.communicationService.register(this.username).subscribe(function (result) {
            document.getElementById("registerQrCode").innerHTML = result;
            _this.loading = false;
            _this.userLoggedIn = true;
            _this.userAccountActivatedCheck();
        });
        //  this.userAccountActivatedCheck();
        //  setTimeout(() => this.loading = false, 2000);
        //  setTimeout(() => this.userActivatedAccount = true, 5000);
    };
    RegisterAppComponent.prototype.userAccountActivatedCheck = function () {
        var _this = this;
        setInterval(function () {
            _this.communicationService.checkIfUserActivatedApp(localStorage.getItem('currentUser')).subscribe(function (userAccountActivated) { return _this.showAccountActivatedDialog = userAccountActivated.status; });
        }, 5000);
    };
    RegisterAppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-register-app',
            template: __webpack_require__(681),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__communication_service_communication_service__["a" /* CommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__communication_service_communication_service__["a" /* CommunicationService */]) === 'function' && _a) || Object])
    ], RegisterAppComponent);
    return RegisterAppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/register-app.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/main.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_app_register_app_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__password_change_password_change_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activate_account_activate_account_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */] },
    { path: 'register-app', component: __WEBPACK_IMPORTED_MODULE_3__register_app_register_app_component__["a" /* RegisterAppComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'password-change', component: __WEBPACK_IMPORTED_MODULE_5__password_change_password_change_component__["a" /* PasswordChangeComponent */] },
    { path: 'activate-account', component: __WEBPACK_IMPORTED_MODULE_6__activate_account_activate_account_component__["a" /* ActivateAccountComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__index_index_component__["a" /* IndexComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/app-routing-module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(676),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_extensions__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_index_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_app_register_app_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_change_password_change_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__activate_account_activate_account_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__communication_service_communication_service__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_app_register_app_component__["a" /* RegisterAppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__password_change_password_change_component__["a" /* PasswordChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__activate_account_activate_account_component__["a" /* ActivateAccountComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__communication_service_communication_service__["a" /* CommunicationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(677),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/header.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);









//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/rxjs-extensions.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Dev/automated-login-app/automated-login-app/src/environment.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "#mainContent {\r\n    height: 93vh;\r\n    background-color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "img {\r\n    height: 8vh;\r\n}\r\n\r\nnav {\r\n    background-image: url('/static/assets/header_background.png')\r\n}\r\n\r\ndiv {\r\n    height: 8vh;\r\n    margin-top: -0.4rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "#indexContainer>div {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 45%;\r\n}\r\n\r\n#indexContainer>div ul {\r\n    list-style-type: none;\r\n}\r\n\r\n#indexContainer>div ul>li {\r\n    margin-bottom: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n#indexContainer>div a {\r\n    outline: none;\r\n    text-decoration: none;\r\n    color: #005eb8;\r\n    padding: 1em;\r\n    font-size: 1.5rem;\r\n    border: 2px solid #005eb8;\r\n}\r\n\r\n#indexContainer>div a:hover {\r\n    color: #ffffff;\r\n    background-color: #005eb8;\r\n}\r\n\r\n#loginButton {\r\n    padding: 1em 3em !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "#registerAppContainer>form {\r\n    font-size: 1.3em;\r\n}\r\n\r\n#registerAppContainer>form>div {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n#registerAppContainer a {\r\n    border: 1px solid;\r\n    padding: 0.5rem 1rem;\r\n    margin-left: 9%;\r\n    color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "    #registerAppContainer {\r\n        text-align: center;\r\n    }\r\n    \r\n    #registerAppContainer a {\r\n        border: 1px solid #005eb8;\r\n        padding: 0.5rem 1rem;\r\n        margin-left: 9%;\r\n        color: #005eb8;\r\n    }\r\n    \r\n    #registerQrCode {\r\n        margin-top: 16%;\r\n    }\r\n    \r\n    #registerAppContainer a:hover {\r\n        cursor: pointer;\r\n        background-color: #005eb8;\r\n        color: #ffffff;\r\n    }\r\n    \r\n    #registerAppContainer form {\r\n        padding-top: 16%;\r\n        font-size: 1.3em;\r\n    }\r\n    \r\n    #registerAppContainer form>div {\r\n        margin-bottom: 1em;\r\n    }\r\n    \r\n    #registerAppContainer img {\r\n        padding-top: 10%;\r\n        width: 25%;\r\n    }\r\n    \r\n    #accountActivated {\r\n        padding-top: 16%;\r\n    }\r\n    \r\n    #accountActivated>h3 {\r\n        font-size: 2rem;\r\n        color: #1df72d;\r\n        display: inline-block;\r\n        padding: 2rem;\r\n        border: 2px solid #1df72d;\r\n        background-color: #fff;\r\n    }\r\n    \r\n    .sk-folding-cube {\r\n        padding-top: 13%;\r\n        padding-left: 20%;\r\n        margin: 20px auto;\r\n        width: 40px;\r\n        height: 40px;\r\n        position: relative;\r\n        -webkit-transform: rotateZ(45deg);\r\n        transform: rotateZ(45deg);\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube {\r\n        float: left;\r\n        width: 50%;\r\n        height: 50%;\r\n        position: relative;\r\n        -webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube:before {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        background-color: #333;\r\n        -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\r\n        animation: sk-foldCubeAngle 2.4s infinite linear both;\r\n        -webkit-transform-origin: 100% 100%;\r\n        transform-origin: 100% 100%;\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube2 {\r\n        -webkit-transform: scale(1.1) rotateZ(90deg);\r\n        transform: scale(1.1) rotateZ(90deg);\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube3 {\r\n        -webkit-transform: scale(1.1) rotateZ(180deg);\r\n        transform: scale(1.1) rotateZ(180deg);\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube4 {\r\n        -webkit-transform: scale(1.1) rotateZ(270deg);\r\n        transform: scale(1.1) rotateZ(270deg);\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube2:before {\r\n        -webkit-animation-delay: 0.3s;\r\n        animation-delay: 0.3s;\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube3:before {\r\n        -webkit-animation-delay: 0.6s;\r\n        animation-delay: 0.6s;\r\n    }\r\n    \r\n    .sk-folding-cube .sk-cube4:before {\r\n        -webkit-animation-delay: 0.9s;\r\n        animation-delay: 0.9s;\r\n    }\r\n    \r\n    @-webkit-keyframes sk-foldCubeAngle {\r\n        0%,\r\n        10% {\r\n            -webkit-transform: perspective(140px) rotateX(-180deg);\r\n            transform: perspective(140px) rotateX(-180deg);\r\n            opacity: 0;\r\n        }\r\n        25%,\r\n        75% {\r\n            -webkit-transform: perspective(140px) rotateX(0deg);\r\n            transform: perspective(140px) rotateX(0deg);\r\n            opacity: 1;\r\n        }\r\n        90%,\r\n        100% {\r\n            -webkit-transform: perspective(140px) rotateY(180deg);\r\n            transform: perspective(140px) rotateY(180deg);\r\n            opacity: 0;\r\n        }\r\n    }\r\n    \r\n    @keyframes sk-foldCubeAngle {\r\n        0%,\r\n        10% {\r\n            -webkit-transform: perspective(140px) rotateX(-180deg);\r\n            transform: perspective(140px) rotateX(-180deg);\r\n            opacity: 0;\r\n        }\r\n        25%,\r\n        75% {\r\n            -webkit-transform: perspective(140px) rotateX(0deg);\r\n            transform: perspective(140px) rotateX(0deg);\r\n            opacity: 1;\r\n        }\r\n        90%,\r\n        100% {\r\n            -webkit-transform: perspective(140px) rotateY(180deg);\r\n            transform: perspective(140px) rotateY(180deg);\r\n            opacity: 0;\r\n        }\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<p>\n  activate-account works!\n</p>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div id=\"mainContent\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n    <div>\n        <img src=\"/static/assets/logo-cropped.png\" />\n    </div>\n</nav>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div id=\"indexContainer\">\n    <div>\n        <ul>\n            <li><a routerLink=\"/register-app\">Register App</a></li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username: </label>\r\n            <input id=\"username\" name=\"username\" type=\"text\" [(ngModel)]=\"username\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password: </label>\r\n            <input id=\"password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\" />\r\n        </div>\r\n        <a (click)=\"logUserIn()\">Login</a>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<p>\n  password-change works!\n</p>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div id=\"registerAppContainer\">\r\n    <div *ngIf=\"!userLoggedIn\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username: </label>\r\n                <input id=\"username\" name=\"username\" type=\"text\" [(ngModel)]=\"username\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password: </label>\r\n                <input id=\"password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\" />\r\n            </div>\r\n            <a (click)=\"logUserIn()\">Login</a>\r\n        </form>\r\n    </div>\r\n    <div *ngIf=\"loading && userLoggedIn\">\r\n        <div class=\"sk-folding-cube\">\r\n            <div class=\"sk-cube1 sk-cube\"></div>\r\n            <div class=\"sk-cube2 sk-cube\"></div>\r\n            <div class=\"sk-cube4 sk-cube\"></div>\r\n            <div class=\"sk-cube3 sk-cube\"></div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!showAccountActivatedDialog\" id=\"registerQrCode\">\r\n\r\n    </div>\r\n    <div id=\"accountActivated\" *ngIf=\"showAccountActivatedDialog\">\r\n        <h3>Account Activated!</h3>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ })

},[717]);
//# sourceMappingURL=main.bundle.js.map