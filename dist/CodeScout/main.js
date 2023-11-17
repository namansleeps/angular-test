(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar\">\n  <h1 class=\"toolbar__title\" routerLink=\"/home\">CodeScout</h1>\n</div>\n\n<div class=\"page-content\">\n  <router-outlet>\n      <app-scroll-to-top></app-scroll-to-top>\n  </router-outlet>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hire-form/hire-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hire-form/hire-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hire-form-view\">\n  <form class=\"hire-form center-xs\" [formGroup]=\"hireForm\" (ngSubmit)=\"submitForm()\">\n    <h2 class=\"hire-form__title\">Hire <b>{{profileName | titlecase}}</b> now!</h2>\n\n    <div class=\"row hire-form__input\">\n      <label class=\"col-xs-12 col-lg-4 start-xs\">Company:</label>\n      <input class=\"col-xs-12 col-lg-8\" type=\"text\" formControlName=\"hireCompany\">\n    </div>\n\n    <div class=\"row hire-form__input\">\n      <label class=\"col-xs-12 col-lg-4 start-xs\">E-Mail:</label>\n      <input class=\"col-xs-12 col-lg-8\" type=\"email\" formControlName=\"hireCompanyEmail\">\n    </div>\n\n    <div class=\"row hire-form__input\">\n      <label class=\"col-xs-12 col-lg-4 start-xs\">Start Date:</label>\n      <input class=\"col-xs-12 col-lg-8\" type=\"date\" formControlName=\"hireStart\">\n    </div>\n\n    <div class=\"row hire-form__input\">\n      <label class=\"col-xs-12 col-lg-4 start-xs\">End Date:</label>\n      <input class=\"col-xs-12 col-lg-8\" type=\"date\" formControlName=\"hireEnd\">\n    </div>\n\n    <div class=\"row hire-form__input\">\n      <label class=\"col-xs-4 start-xs\">Message:</label>\n      <textarea class=\"col-xs-12 col-lg-8\" maxlength=\"120\" formControlName=\"hireMessage\"></textarea>\n    </div>\n\n    <div class=\"row center-xs hire-form__submit\">\n      <button type=\"submit\" class=\"col-xs-12 col-lg-8 button button--primary button--wide\">Send</button>\n    </div>\n  </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-view/profile-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-view/profile-view.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"profile-view\">\n    <div *ngIf=\"profiles.length > 0\" infiniteScroll [data]=\"profiles\" [limit]=\"300\" (canGetNewData)=\"getNewProfiles(20)\" class=\"row center-xs\">\n        <div *ngFor='let profile of profiles' class=\"col-xs-12 col-lg-3 col-md-4 col-xs-6\">\n          <app-profile [profile]=profile></app-profile>\n        </div>\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-view/profile/profile.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-view/profile/profile.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row profile center-xs\">\n  <div class=\"col-xs-12 profile__main\">\n    <img class=\"profile__image\" src=\"{{profile.picture.medium}}\">\n    <p class=\"profile__name\"><b>{{profile.name.first | titlecase }} {{profile.name.last | titlecase }}</b></p>\n  </div>\n\n  <div class=\"col-xs-12 profile__contact\">\n    <div class=\"row center-xs margin-bottom-10\">\n      <i class=\"icon ion-md-mail\"></i>{{profile.email}}\n    </div>\n    <div class=\"row center-xs\">\n      <i class=\"icon ion-md-call\"></i>{{profile.phone}}\n    </div>\n  </div>\n\n  <button class=\"col-xs-6 button button--primary profile__cta\" \n          [routerLink]=\"['/hire']\" \n          [queryParams]=\"{firstName: profile.name.first, lastName: profile.name.last}\">Hire\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-to-top/scroll-to-top.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-to-top/scroll-to-top.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button\n  [ngClass]=\"{ 'show-scroll': showScroll }\"\n  (click)=\"scrollToTop()\"\n  class=\"scroll-to-top\">\n  <i class=\"icon ion-md-arrow-up\"></i>\n</button>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-view/profile-view.component */ "./src/app/profile-view/profile-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hire_form_hire_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hire-form/hire-form.component */ "./src/app/hire-form/hire-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_0__["ProfileViewComponent"] },
    { path: 'hire', component: _hire_form_hire_form_component__WEBPACK_IMPORTED_MODULE_3__["HireFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  height: 50px;\n  margin-bottom: 20px;\n}\n.toolbar__title {\n  text-align: center;\n  font-size: 32px;\n  cursor: pointer;\n  outline: none;\n}\n.page-content {\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1hbm1hbmRoYW5pL0Rlc2t0b3AvYW5ndWxhci1leGFtcGxlLWNvZGUtc2NvdXQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NSO0FER0E7RUFDSSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cblxuLnBhZ2UtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn0iLCIudG9vbGJhciB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50b29sYmFyX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _directives_infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/infinite-scroll.directive */ "./src/app/directives/infinite-scroll.directive.ts");
/* harmony import */ var _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-view/profile-view.component */ "./src/app/profile-view/profile-view.component.ts");
/* harmony import */ var _hire_form_hire_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hire-form/hire-form.component */ "./src/app/hire-form/hire-form.component.ts");
/* harmony import */ var _profile_view_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-view/profile/profile.component */ "./src/app/profile-view/profile/profile.component.ts");
/* harmony import */ var _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scroll-to-top/scroll-to-top.component */ "./src/app/scroll-to-top/scroll-to-top.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _directives_infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollDirective"],
                _profile_view_profile_view_component__WEBPACK_IMPORTED_MODULE_8__["ProfileViewComponent"],
                _profile_view_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _hire_form_hire_form_component__WEBPACK_IMPORTED_MODULE_9__["HireFormComponent"],
                _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_11__["ScrollToTopComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            ],
            providers: [_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/infinite-scroll.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/infinite-scroll.directive.ts ***!
  \*********************************************************/
/*! exports provided: InfiniteScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InfiniteScrollDirective = /** @class */ (function () {
    function InfiniteScrollDirective() {
        this.canGetNewData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InfiniteScrollDirective.prototype.onScroll = function () {
        var scrollPosition = window.pageYOffset;
        var currentItemsAmount = this.data.length;
        if (window.innerHeight + scrollPosition >= document.body.offsetHeight && currentItemsAmount < this.limit) {
            this.canGetNewData.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InfiniteScrollDirective.prototype, "canGetNewData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InfiniteScrollDirective.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InfiniteScrollDirective.prototype, "limit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InfiniteScrollDirective.prototype, "onScroll", null);
    InfiniteScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[infiniteScroll]'
        })
    ], InfiniteScrollDirective);
    return InfiniteScrollDirective;
}());



/***/ }),

/***/ "./src/app/hire-form/hire-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/hire-form/hire-form.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input:focus, textarea:focus {\n  border: 2px solid #000;\n  outline: none;\n}\n\ninput, textarea {\n  border: 2px solid rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  background: #fff;\n  font-size: 16px;\n  transition: border 0.25s ease-out;\n}\n\ninput {\n  height: 30px;\n}\n\ntextarea {\n  resize: none;\n  height: 100px;\n}\n\ninput[type=date] {\n  text-transform: uppercase;\n}\n\ninput[type=date]::-webkit-clear-button {\n  display: none;\n}\n\ninput[type=date]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  color: #2c3e50;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.hire-form-view {\n  height: 91vh;\n  padding: 5rem 1rem;\n}\n\n.hire-form {\n  max-width: 600px;\n  max-height: 600px;\n  margin: 0 auto;\n  padding: 1rem 2rem;\n  border-radius: 15px;\n  background-color: white;\n  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);\n}\n\n.hire-form__title {\n  margin-bottom: 40px;\n  font-weight: 500;\n}\n\n.hire-form__input {\n  margin-bottom: 20px;\n}\n\n.hire-form__submit {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1hbm1hbmRoYW5pL0Rlc2t0b3AvYW5ndWxhci1leGFtcGxlLWNvZGUtc2NvdXQvc3JjL2FwcC9oaXJlLWZvcm0vaGlyZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oaXJlLWZvcm0vaGlyZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUNERjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvaGlyZS1mb3JtL2hpcmUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlciAuMjVzIGVhc2Utb3V0O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMzBweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oaXJlLWZvcm0tdmlldyB7XG4gIGhlaWdodDogOTF2aDtcbiAgcGFkZGluZzogNXJlbSAxcmVtO1xufVxuXG4uaGlyZS1mb3JtIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMzYsIDM3LCAzOCwgMC4wOCk7XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gICZfX2lucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJl9fc3VibWl0IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbn1cbiIsImlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1vdXQ7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oaXJlLWZvcm0tdmlldyB7XG4gIGhlaWdodDogOTF2aDtcbiAgcGFkZGluZzogNXJlbSAxcmVtO1xufVxuXG4uaGlyZS1mb3JtIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMzYsIDM3LCAzOCwgMC4wOCk7XG59XG4uaGlyZS1mb3JtX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaGlyZS1mb3JtX19pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaGlyZS1mb3JtX19zdWJtaXQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/hire-form/hire-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hire-form/hire-form.component.ts ***!
  \**************************************************/
/*! exports provided: HireFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireFormComponent", function() { return HireFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HireFormComponent = /** @class */ (function () {
    function HireFormComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    HireFormComponent.prototype.ngOnInit = function () {
        this.hireForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            hireCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hireCompanyEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            hireStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hireEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hireMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.getParamsFromUrl();
    };
    HireFormComponent.prototype.getParamsFromUrl = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params) {
                _this.profileName = params.firstName + ' ' + params.lastName;
            }
        });
    };
    HireFormComponent.prototype.submitForm = function () {
        if (this.hireForm.valid) {
            console.log('sending request...');
            console.log('formData:', this.hireForm.value);
            return this.hireForm.value;
        }
    };
    HireFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HireFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hire-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hire-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hire-form/hire-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./hire-form.component.scss */ "./src/app/hire-form/hire-form.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HireFormComponent);
    return HireFormComponent;
}());



/***/ }),

/***/ "./src/app/profile-view/profile-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile-view/profile-view.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-view {\n  max-width: 1800px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1hbm1hbmRoYW5pL0Rlc2t0b3AvYW5ndWxhci1leGFtcGxlLWNvZGUtc2NvdXQvc3JjL2FwcC9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtdmlldyB7XG4gICAgbWF4LXdpZHRoOiAxODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59IiwiLnByb2ZpbGUtdmlldyB7XG4gIG1heC13aWR0aDogMTgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile-view/profile-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-view/profile-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProfileViewComponent = /** @class */ (function () {
    function ProfileViewComponent(profileService) {
        this.profileService = profileService;
        this.profiles = [];
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        this.getNewProfiles(60);
    };
    ProfileViewComponent.prototype.getNewProfiles = function (amount) {
        var _this = this;
        console.log('getting data...', amount);
        this.profileService.getProfiles(amount).subscribe(function (data) {
            if (data) {
                data.results.forEach(function (element) {
                    _this.profiles.push(element);
                });
            }
        });
    };
    ProfileViewComponent.ctorParameters = function () { return [
        { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"] }
    ]; };
    ProfileViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-view/profile-view.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile-view.component.scss */ "./src/app/profile-view/profile-view.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());



/***/ }),

/***/ "./src/app/profile-view/profile/profile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/profile-view/profile/profile.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile {\n  padding: 15px;\n  margin: 2rem;\n  width: 90%;\n  height: 90%;\n  text-align: center;\n  border-radius: 15px;\n  background-color: white;\n  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);\n  transition: transform 0.2s ease-out;\n}\n.profile:hover {\n  transform: scale(1.05);\n}\n.profile__image {\n  border-radius: 50%;\n}\n.profile__name {\n  font-size: 22px;\n  color: #000000;\n}\n.profile__main {\n  margin-top: 10px;\n  border-bottom: 1px solid #e6e6e6;\n}\n.profile__contact {\n  font-size: 16px;\n  margin-top: 15px;\n  color: gray;\n}\n.profile__cta {\n  position: relative;\n  top: 30px;\n}\n.icon {\n  margin-right: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1hbm1hbmRoYW5pL0Rlc2t0b3AvYW5ndWxhci1leGFtcGxlLWNvZGUtc2NvdXQvc3JjL2FwcC9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUNBQUE7QUNDRjtBRENFO0VBQ0Usc0JBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNESjtBRElFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0ZKO0FES0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0pKO0FEUUE7RUFDRSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAycmVtO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTVweCByZ2JhKDM2LDM3LDM4LDAuMDgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICAmX19pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgJl9fbWFpbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgfVxuXG4gICZfX2NvbnRhY3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG5cbiAgJl9fY3RhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzMHB4O1xuICB9XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWFyZ2luLWJvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iLCIucHJvZmlsZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMnJlbTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgzNiwgMzcsIDM4LCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG59XG4ucHJvZmlsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4ucHJvZmlsZV9faW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZmlsZV9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucHJvZmlsZV9fbWFpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuLnByb2ZpbGVfX2NvbnRhY3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLnByb2ZpbGVfX2N0YSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMHB4O1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/profile-view/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/profile-view/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profile", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-view/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile-view/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/scroll-to-top/scroll-to-top.component.scss":
/*!************************************************************!*\
  !*** ./src/app/scroll-to-top/scroll-to-top.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  background-color: #000000;\n  color: white;\n  padding: 10px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 100%;\n  font-size: 1.5rem;\n  width: 50px;\n  height: 50px;\n  z-index: 99;\n}\n\n.scroll-to-top {\n  position: fixed;\n  bottom: 3rem;\n  right: 1.5rem;\n  opacity: 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.show-scroll {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1hbm1hbmRoYW5pL0Rlc2t0b3AvYW5ndWxhci1leGFtcGxlLWNvZGUtc2NvdXQvc3JjL2FwcC9zY3JvbGwtdG8tdG9wL3Njcm9sbC10by10b3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Njcm9sbC10by10b3Avc2Nyb2xsLXRvLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdFQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2Nyb2xsLXRvLXRvcC9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAxLjVyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy1zY3JvbGwge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5zY3JvbGwtdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDNyZW07XG4gIHJpZ2h0OiAxLjVyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2hvdy1zY3JvbGwge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/scroll-to-top/scroll-to-top.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/scroll-to-top/scroll-to-top.component.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopComponent", function() { return ScrollToTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ScrollToTopComponent = /** @class */ (function () {
    function ScrollToTopComponent() {
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
    }
    ScrollToTopComponent.prototype.onWindowScroll = function () {
        if ((window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll &&
            (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    };
    ScrollToTopComponent.prototype.scrollToTop = function () {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToTopComponent.prototype, "onWindowScroll", null);
    ScrollToTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scroll-to-top',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scroll-to-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-to-top/scroll-to-top.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./scroll-to-top.component.scss */ "./src/app/scroll-to-top/scroll-to-top.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollToTopComponent);
    return ScrollToTopComponent;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.API_URL = 'https://randomuser.me/api/';
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get(this.API_URL + '?nat=de');
    };
    ProfileService.prototype.getProfiles = function (amount) {
        return this.http.get(this.API_URL + '?results=' + amount);
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/namanmandhani/Desktop/angular-example-code-scout/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map