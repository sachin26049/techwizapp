webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/addfood/addfood.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addfood/addfood.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Add Food</h1>      \r\n  \r\n</div>\r\n<div class=\"container\">\r\n<button class=\"btn btn-info\" (click)=\"goBack()\"><i class=\"fas fa-arrow-left\"></i>Back</button>\r\n</div>\r\n<form (ngSubmit)=\"onSignupSubmit()\">\r\n\r\n<div class=\"form-group\">\r\n\t\r\n\t<label for=\"pre1\" style=\" font-size:20px;margin-top:5%;align:center\">Select Food Type</label>\r\n\t<select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"type\">\r\n\t\t<ng-container *ngFor=\"let x of Type;let i=index\" >\r\n\t\t\t\t<option value=\"{{Type[i].type}}\">{{Type[i].type}}</option>\r\n\t\t</ng-container>\r\n    \r\n\t</select>\r\n\t\r\n\t\r\n\t<label style=\"margin-top:5%;text-align:center\">Enter Food Name</label>\r\n    <input type=\"text\" name=\"name\" class=\"form-control\" style=\"margin-top:5%;align:center\" [(ngModel)]=\"food\">\r\n  \r\n  \t\r\n\t <label style=\"margin-top:5%;text-align:center\">Enter Price</label>\r\n    <input type=\"text\" name=\"name\" class=\"form-control\" style=\"margin-top:5%;align:center\" [(ngModel)]=\"price\">\r\n\t\r\n\t\r\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" style=\"margin-top:5%;align:center\">\r\n\t</div>\r\n\t</form>\r\n\t"

/***/ }),

/***/ "../../../../../src/app/addfood/addfood.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_adminmenu_service__ = __webpack_require__("../../../../../src/app/services/adminmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddfoodComponent = (function () {
    function AddfoodComponent(validateService, flashMessage, authService, router, adminmenuService, MS) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.adminmenuService = adminmenuService;
        this.MS = MS;
    }
    AddfoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Sss");
        this.MS.getMenuH().subscribe(function (data) {
            if (data['success']) {
                _this.Menu = data['menu'];
                console.log(_this.Menu);
            }
        });
        this.MS.getType().subscribe(function (data) {
            if (data['success']) {
                _this.Type = data['type'];
                console.log(_this.Type);
            }
        });
    };
    AddfoodComponent.prototype.onSignupSubmit = function () {
        var _this = this;
        console.log('1');
        var food = {
            price: this.price,
            name: this.food,
            type: this.type,
        };
        console.log(food);
        //inserting food
        this.adminmenuService.addFood(food).subscribe(function (data) {
            if (data['success']) {
                _this.flashMessage.show('Food Inserted Successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/addfood']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/addfood']);
            }
        });
    };
    AddfoodComponent.prototype.goBack = function () {
        this.router.navigate(['/managemenu']);
    };
    AddfoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addfood',
            template: __webpack_require__("../../../../../src/app/addfood/addfood.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addfood/addfood.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_adminmenu_service__["a" /* AdminmenuService */],
            __WEBPACK_IMPORTED_MODULE_6__services_menus_service__["a" /* MenusService */]])
    ], AddfoodComponent);
    return AddfoodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/addtype/addtype.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addtype/addtype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Add Type</h1>      \r\n  \r\n</div>\r\n<form (ngSubmit)=\"onSignupSubmit()\">\r\n<div class=\"form-group\">\r\n\t <label style=\"margin-top:5%;align:center\">Enter Type</label>\r\n    <input type=\"text\" name=\"name\" class=\"form-control\" style=\"margin-top:5%;align:center\" [(ngModel)]=\"type\">\r\n\t\r\n\t\r\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n\t</div>\r\n\t</form>\r\n\t<br>\r\n\t{{type}}\r\n\t"

/***/ }),

/***/ "../../../../../src/app/addtype/addtype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddtypeComponent = (function () {
    function AddtypeComponent() {
    }
    AddtypeComponent.prototype.ngOnInit = function () {
    };
    AddtypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addtype',
            template: __webpack_require__("../../../../../src/app/addtype/addtype.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addtype/addtype.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddtypeComponent);
    return AddtypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\r\n    \r\n    margin-bottom: 15px;\r\n        line-height: 2.5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Welcome Admin</h1>      \r\n  \r\n</div>\r\n  <div class=\"btn-group-vertical\" style=\"width:80%;margin-left:10%;margin-right:10%;margin-top:20px\">\r\n\t  <a class=\"btn btn-warning\" [routerLink]=\"['/managemenu']\">Manage Menu</a>\r\n\t  <a class=\"btn btn-warning\" [routerLink]=\"['/viewfeedback']\">View Feedback</a>\r\n\t  <a class=\"btn btn-warning\" [routerLink]=\"['/managemenu']\">View Orders</a>\r\n\t  <a class=\"btn btn-warning\" [routerLink]=\"['/managemenu']\">XYZ</a>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngc_float_button__ = __webpack_require__("../../../../ngc-float-button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__managemenu_managemenu_component__ = __webpack_require__("../../../../../src/app/managemenu/managemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__viewfeedback_viewfeedback_component__ = __webpack_require__("../../../../../src/app/viewfeedback/viewfeedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__addfood_addfood_component__ = __webpack_require__("../../../../../src/app/addfood/addfood.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modifyfood_modifyfood_component__ = __webpack_require__("../../../../../src/app/modifyfood/modifyfood.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__deletefood_deletefood_component__ = __webpack_require__("../../../../../src/app/deletefood/deletefood.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__deletetype_deletetype_component__ = __webpack_require__("../../../../../src/app/deletetype/deletetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__addtype_addtype_component__ = __webpack_require__("../../../../../src/app/addtype/addtype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modifytype_modifytype_component__ = __webpack_require__("../../../../../src/app/modifytype/modifytype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_adminmenu_service__ = __webpack_require__("../../../../../src/app/services/adminmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_orders_service__ = __webpack_require__("../../../../../src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__orderstatus_orderstatus_component__ = __webpack_require__("../../../../../src/app/orderstatus/orderstatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_order_socket_service__ = __webpack_require__("../../../../../src/app/services/order-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__chef_chef_component__ = __webpack_require__("../../../../../src/app/chef/chef.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__chef_chef_socket_service__ = __webpack_require__("../../../../../src/app/chef/chef-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__chef_chefs_service__ = __webpack_require__("../../../../../src/app/chef/chefs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__payment_payment_component__ = __webpack_require__("../../../../../src/app/payment/payment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var config = { url: 'http://localhost:3000', options: {} };




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__["a" /* MenuComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_22__orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'managemenu', component: __WEBPACK_IMPORTED_MODULE_24__managemenu_managemenu_component__["a" /* ManagemenuComponent */] },
    { path: 'addfood', component: __WEBPACK_IMPORTED_MODULE_26__addfood_addfood_component__["a" /* AddfoodComponent */] },
    { path: 'modifyfood', component: __WEBPACK_IMPORTED_MODULE_27__modifyfood_modifyfood_component__["a" /* ModifyfoodComponent */] },
    { path: 'deletefood', component: __WEBPACK_IMPORTED_MODULE_28__deletefood_deletefood_component__["a" /* DeletefoodComponent */] },
    { path: 'deletetype', component: __WEBPACK_IMPORTED_MODULE_29__deletetype_deletetype_component__["a" /* DeletetypeComponent */] },
    { path: 'addtype', component: __WEBPACK_IMPORTED_MODULE_30__addtype_addtype_component__["a" /* AddtypeComponent */] },
    { path: 'modifytype', component: __WEBPACK_IMPORTED_MODULE_31__modifytype_modifytype_component__["a" /* ModifytypeComponent */] },
    { path: 'viewfeedback', component: __WEBPACK_IMPORTED_MODULE_25__viewfeedback_viewfeedback_component__["a" /* ViewfeedbackComponent */] },
    { path: 'chef', component: __WEBPACK_IMPORTED_MODULE_36__chef_chef_component__["a" /* ChefComponent */] },
    { path: 'OrderStatus', component: __WEBPACK_IMPORTED_MODULE_34__orderstatus_orderstatus_component__["a" /* OrderstatusComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_39__payment_payment_component__["a" /* PaymentComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_22__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__managemenu_managemenu_component__["a" /* ManagemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__viewfeedback_viewfeedback_component__["a" /* ViewfeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_26__addfood_addfood_component__["a" /* AddfoodComponent */],
                __WEBPACK_IMPORTED_MODULE_27__modifyfood_modifyfood_component__["a" /* ModifyfoodComponent */],
                __WEBPACK_IMPORTED_MODULE_28__deletefood_deletefood_component__["a" /* DeletefoodComponent */],
                __WEBPACK_IMPORTED_MODULE_29__deletetype_deletetype_component__["a" /* DeletetypeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__addtype_addtype_component__["a" /* AddtypeComponent */],
                __WEBPACK_IMPORTED_MODULE_31__modifytype_modifytype_component__["a" /* ModifytypeComponent */],
                __WEBPACK_IMPORTED_MODULE_34__orderstatus_orderstatus_component__["a" /* OrderstatusComponent */],
                __WEBPACK_IMPORTED_MODULE_36__chef_chef_component__["a" /* ChefComponent */],
                __WEBPACK_IMPORTED_MODULE_39__payment_payment_component__["a" /* PaymentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngc_float_button__["a" /* NgcFloatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng_socket_io__["SocketIoModule"].forRoot(config)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_38__chef_chefs_service__["a" /* ChefsService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_37__chef_chef_socket_service__["a" /* ChefSocketService */], __WEBPACK_IMPORTED_MODULE_20__services_menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_33__services_orders_service__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_35__services_order_socket_service__["a" /* OrderSocketService */], __WEBPACK_IMPORTED_MODULE_32__services_adminmenu_service__["a" /* AdminmenuService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chef/chef-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChefSocketService = (function () {
    function ChefSocketService(socket) {
        this.socket = socket;
        /*this.socket.on('orders',function(msg){
    
        });*/
    }
    ChefSocketService.prototype.sendHI = function () {
        console.log("hi");
        this.socket.emit("chef", "hi");
    };
    ChefSocketService.prototype.getOrders = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socket.on('order', function (order) {
                console.log("new");
                observer.next(order);
            });
        });
    };
    ChefSocketService.prototype.sendOrderStatus = function (status) {
        this.socket.emit("orderStatus", status);
    };
    ChefSocketService.prototype.sendDeliverdStatus = function (email, id) {
        var x = {
            email: email,
            orderId: id,
            time: new Date()
        };
        this.socket.emit("orderDeliverd", x);
    };
    ChefSocketService.prototype.close = function () {
        this.socket.disconnect();
    };
    ChefSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], ChefSocketService);
    return ChefSocketService;
}());



/***/ }),

/***/ "../../../../../src/app/chef/chef.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chef/chef.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n  <h3>Table No.</h3>\n  </div>\n  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-md-8 col-lg-8 col-xs-8\">  \n        <h3>Orders</h3>\n      </div>\n      <div class=\"col-sm-4 col-md-4 col-lg-4 col-xs-4\">\n        <h3>Estimated Time</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngFor=\"let x of orderList;let i=index\" >\n  <div class=\"container\" *ngIf=\"flag[i]<2\">\n  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n  <h4>{{x.userEmail}}</h4>\n  </div>\n  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\n    <div class=\"row\" *ngFor=\"let y of x.orders;let j=index\">\n        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-6\">\n          <h4>{{y.foodname}} :</h4>\n        </div>\n        <div class=\"col-sm-3 col-md-3 col-lg-3 col-xs-3\">\n          <h4>{{y.Count}}</h4>\n        </div>\n        <div class=\"col-sm-3 col-md-3 col-lg-3 col-xs-3\" id=\"i\" *ngIf=\"flag[i]==0\">\n\n          <input type=\"number\" [(ngModel)]=\"orderStatus[i][j]\">\n        </div>\n        \n    </div>\n    <div class=\"row\"  *ngIf=\"flag[i]==0;else other\"><button class=\"btn btn-info\" (click)=\"sendStatus(i)\">SendStatus</button></div>\n    <ng-template #other><button class=\"btn btn-info\" (click)=\"OrderDeliverd(i)\">OrderDeliverd</button></ng-template>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chef/chef.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chefs_service__ = __webpack_require__("../../../../../src/app/chef/chefs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chef_socket_service__ = __webpack_require__("../../../../../src/app/chef/chef-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChefComponent = (function () {
    function ChefComponent(CS, CSO) {
        var _this = this;
        this.CS = CS;
        this.CSO = CSO;
        this.now = new Date();
        setInterval(function () {
            _this.now = new Date();
        }, 60);
    }
    ChefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderList = new Array();
        this.orderStatus = new Array();
        this.flag = new Array();
        this.CS.init();
        //this.orderList.push("hehe");
        /*this.CS.newOrder();
        this.OrderList=this.CS.getList();*/
        this.CSO
            .getOrders()
            .subscribe(function (order) {
            console.log(order);
            _this.orderList.push(order);
            _this.flag.push(0);
            _this.orderStatus[_this.orderStatus.length] = new Array();
        });
    };
    ChefComponent.prototype.sendStatus = function (i) {
        var orders = new Array();
        console.log(this.now);
        for (var j = 0; j < this.orderList[i].orders.length; j++) {
            var t = new Date();
            t.setMinutes(t.getMinutes() + this.orderStatus[i][j]);
            console.log(t);
            var x = {
                "foodName": this.orderList[i].orders[j].foodname,
                "Time": t
            };
            orders.push(x);
            console.log(orders);
            console.log(this.orderStatus[i][j]);
        }
        var order = {
            "userEmail": this.orderList[i].userEmail,
            "orderId": this.orderList[i].orderId,
            "orders": orders
        };
        this.CSO.sendOrderStatus(order);
        this.flag[i] = 1;
    };
    ChefComponent.prototype.OrderDeliverd = function (i) {
        this.flag[i] = 2;
        this.CSO.sendDeliverdStatus(this.orderList[i].userEmail, this.orderList[i].orderId);
    };
    ChefComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chef',
            template: __webpack_require__("../../../../../src/app/chef/chef.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chef/chef.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chefs_service__["a" /* ChefsService */], __WEBPACK_IMPORTED_MODULE_2__chef_socket_service__["a" /* ChefSocketService */]])
    ], ChefComponent);
    return ChefComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chef/chefs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chef_socket_service__ = __webpack_require__("../../../../../src/app/chef/chef-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChefsService = (function () {
    function ChefsService(CSO) {
        this.CSO = CSO;
    }
    ChefsService.prototype.init = function () {
        this.CSO.sendHI();
    };
    ChefsService.prototype.newOrder = function () {
        var _this = this;
        this.CSO
            .getOrders()
            .subscribe(function (order) {
            _this.orderList.push(order);
        });
    };
    ChefsService.prototype.getList = function () {
        return this.orderList;
    };
    ChefsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chef_socket_service__["a" /* ChefSocketService */]])
    ], ChefsService);
    return ChefsService;
}());



/***/ }),

/***/ "../../../../../src/app/deletefood/deletefood.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deletefood/deletefood.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Delete Food</h1>      \r\n  \r\n</div>\r\n<form (ngSubmit)=\"onSignupSubmit()\">\r\n  <div class=\"form-group\">\r\n\t\r\n\t<label for=\"pre1\" style=\" font-size:20px;margin-top:5%;align:center\">Select Food Type</label>\r\n\t<select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"type\">\r\n      <ng-container *ngFor=\"let y of Type;let j=index\" >\r\n          <option value=\"{{Type[j].type}}\">{{Type[j].type}}</option>\r\n      </ng-container>\r\n\t</select>\r\n\t\r\n<!--\t<div *ngIf=\"Menu&&type\"> -->\r\n      \r\n  <select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"food\">\r\n      \r\n    <ng-container *ngFor=\"let x of Menu ;let i=index\" >\r\n     \r\n          <option value=\"{{Menu[i].name}}\">{{Menu[i].name}}</option>\r\n     \r\n        </ng-container>\r\n\t</select>\r\n\r\n  \r\n\t\r\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" style=\"margin-top:5%;text-align:center\">\r\n\t\r\n  <br>\r\n  </div>\r\n</form>\r\n</div>\r\n{{type}}\r\n\r\n{{type}}\r\n\t{{food}}\r\n\t\r\n\t\r\n\t"

/***/ }),

/***/ "../../../../../src/app/deletefood/deletefood.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletefoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_adminmenu_service__ = __webpack_require__("../../../../../src/app/services/adminmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeletefoodComponent = (function () {
    function DeletefoodComponent(validateService, flashMessage, authService, router, adminmenuService, MS) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.adminmenuService = adminmenuService;
        this.MS = MS;
    }
    DeletefoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MS.getMenuH().subscribe(function (data) {
            if (data['success']) {
                _this.Menu = data['menu'];
                //console.log(this.Menu);
            }
        });
        this.MS.getType().subscribe(function (data) {
            if (data['success']) {
                _this.Type = data['type'];
                // console.log(this.Type);
            }
        });
    };
    DeletefoodComponent.prototype.onSignupSubmit = function () {
        var _this = this;
        console.log('1');
        var food = {
            name: this.food
        };
        console.log(food);
        //inserting food
        this.adminmenuService.deleteFood(food).subscribe(function (data) {
            if (data['success']) {
                _this.flashMessage.show('Food Deleted Successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/deletefood']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/deletefood']);
            }
        });
    };
    DeletefoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deletefood',
            template: __webpack_require__("../../../../../src/app/deletefood/deletefood.component.html"),
            styles: [__webpack_require__("../../../../../src/app/deletefood/deletefood.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_adminmenu_service__["a" /* AdminmenuService */],
            __WEBPACK_IMPORTED_MODULE_6__services_menus_service__["a" /* MenusService */]])
    ], DeletefoodComponent);
    return DeletefoodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/deletetype/deletetype.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/deletetype/deletetype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Delete Type</h1>      \r\n  \r\n</div>\r\n<form (ngSubmit)=\"onSignupSubmit()\">\r\n<div class=\"form-group\">\r\n\t\r\n\t<label for=\"pre1\" style=\" font-size:20px;margin-top:5%;align:center\">Select Food Type</label>\r\n\t<select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"type\">\r\n    <option value=\"c\">chinese</option>\r\n    <option value=\"p\">punjabi</option>\r\n    <option value=\"s\">south indian</option>\r\n    <option value=\"m\">maharashtrian</option>\r\n\t</select>\r\n\t\r\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n\t</div>\r\n\t</form>\r\n\t<br>\r\n\t{{type}}\r\n\t\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/deletetype/deletetype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletetypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeletetypeComponent = (function () {
    function DeletetypeComponent() {
    }
    DeletetypeComponent.prototype.ngOnInit = function () {
    };
    DeletetypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deletetype',
            template: __webpack_require__("../../../../../src/app/deletetype/deletetype.component.html"),
            styles: [__webpack_require__("../../../../../src/app/deletetype/deletetype.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeletetypeComponent);
    return DeletetypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div style=\"padding-left:10%;padding-top:10%;padding-right:10%;padding-bottom:10%;background:#222;\">\n    <h1 style=\"color:white;font-size:50px;font-style: italic;text-align:center;\">Welcome to techwiz!</h1>\n\t\n  </div> "

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>UserName</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
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
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.authService.storeUserData(data['token'], data['user']);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['menu']);
            }
            else {
                _this.flashMessage.show(data['msg'], {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/managemenu/managemenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\r\n    \r\n    margin-bottom: 15px;\r\n        line-height: 2.5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/managemenu/managemenu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Manage Food</h1>      \r\n  \r\n</div>\r\n  <div class=\"btn-group-vertical\" style=\"width:80%;margin-left:10%;margin-right:10%;margin-top:20px\">\r\n<a class=\"btn btn-warning\" [routerLink]=\"['/addfood']\">Add Food</a>\r\n<a class=\"btn btn-warning\" [routerLink]=\"['/modifyfood']\">Modify Food</a>\r\n<a class=\"btn btn-warning\" [routerLink]=\"['/deletefood']\">Delete Food</a>\r\n<a class=\"btn btn-warning\" [routerLink]=\"['/addtype']\">Add Type</a>\r\n<a class=\"btn btn-warning\" [routerLink]=\"['/modifytype']\">Modify Type</a>\r\n<a class=\"btn btn-warning\" [routerLink]=\"['/deletetype']\">Delete Type</a>\r\n\r\n\t  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/managemenu/managemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagemenuComponent = (function () {
    function ManagemenuComponent() {
    }
    ManagemenuComponent.prototype.ngOnInit = function () {
    };
    ManagemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managemenu',
            template: __webpack_require__("../../../../../src/app/managemenu/managemenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/managemenu/managemenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagemenuComponent);
    return ManagemenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ngc-float-button  {\r\n\r\n    top: 80%;\r\n    left: 90%;\r\n    position: absolute;\r\n}\r\n\r\n.mat-icon {\r\n  width: 40px;\r\n}\r\n\r\n.fab-toggle\r\n{\r\n  width: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type&&Menu\">\r\n  <ngc-float-button icon=\"add_shopping_cart\" (click)=\"goToOrders()\" >\r\n    </ngc-float-button>\r\n<mat-tab-group class=\"demo-tab-group\" >\r\n    <mat-tab *ngFor=\"let x of type;let k=index\" label={{x.type}} >\r\n          <mat-accordion>\r\n            <ng-container *ngFor=\"let y of Menu;let i=index\" >\r\n                <div *ngIf = \"y.type==x.type\">\r\n                  <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title style=\"width:80%\">\r\n                        {{y.name}}\r\n                      </mat-panel-title>\r\n                      <mat-panel-description>\r\n                        <i class=\"fa fa-inr\" aria-hidden=\"true\" style=\"margin-top:2px\"></i>{{y.price}}\r\n                      </mat-panel-description>\r\n                    </mat-expansion-panel-header>\r\n                    <ng-template matExpansionPanelContent >\r\n                      \r\n                        <h3>Description :</h3><p><span style=\"font-size:20px\">{{y.description}}</span></p>\r\n                        <button (click)=\"decrCount(i)\" style=\"font-size:20px;\r\n                        border-color:white;background:#00D800;color:white\">-</button>\r\n                        <input readonly [(ngModel)]=\"Count[i]\" style=\"width:30px;border:none;font-size:20px;\r\n                        background:white;margin:0px;\"class=\"form-group-sm\">\r\n                        <button (click)=\"incrCount(i)\" style=\"font-size:20px;\r\n                        border-color:white;background:#00D800;color:white\">+</button>\r\n                      \r\n                  </ng-template>\r\n                  </mat-expansion-panel>\r\n                </div>\r\n              </ng-container>\r\n            </mat-accordion>\r\n        </mat-tab>\r\n</mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(MS, router) {
        this.MS = MS;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('1');
        if (this.MS.Count == undefined) {
            //console.log("2");
            this.MS.getMenuH().subscribe(function (data) {
                if (data['success']) {
                    //console.log("3");
                    _this.Menu = data['menu'];
                    _this.Count = [new Number(_this.Menu.length)];
                    for (var i = 0; i < _this.Menu.length; i++) {
                        _this.Count[i] = 0;
                    }
                    //console.log("4"+this.Menu);
                    _this.MS.setOrders(_this.Menu, _this.Count);
                }
            });
            this.MS.getType().subscribe(function (data) {
                if (data['success']) {
                    //console.log("hhh");
                    _this.type = data['type'];
                    //console.log(data['menu']);
                    //console.log(this.type);
                }
            });
        }
        else {
            this.Menu = this.MS.getMenu();
            //  console.log(this.Menu);
            this.Count = this.MS.getCount();
            this.MS.getType().subscribe(function (data) {
                if (data['success']) {
                    //console.log("hhh");
                    _this.type = data['type'];
                    //console.log(data['menu']);
                    //console.log(this.type);
                }
            });
        }
    };
    //functions
    MenuComponent.prototype.incrCount = function (index) {
        this.Count[index] = (Number)(this.Count[index]) + 1;
        //console.log(index + ":" + this.Count[index]);
    };
    MenuComponent.prototype.decrCount = function (index) {
        if (this.Count[index] != 0) {
            this.Count[index] = (Number)(this.Count[index]) - 1;
            // console.log(index + ":" + this.Count[index]);
        }
    };
    MenuComponent.prototype.goToOrders = function () {
        this.MS.setOrders(this.Menu, this.Count);
        this.router.navigate(['/orders']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modifyfood/modifyfood.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modifyfood/modifyfood.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Modify Food</h1>      \r\n  \r\n</div>\r\n<form (ngSubmit)=\"onSubmit()\">\r\n\r\n<div class=\"form-group\">\r\n\t\t<label for=\"pre1\" style=\" font-size:20px;margin-top:5%;align:center\">Select Food Type</label>\r\n\t\t<select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"type\">\r\n\t\t  <ng-container *ngFor=\"let y of Type;let j=index\" >\r\n\t\t\t  <option value=\"{{Type[j].type}}\">{{Type[j].type}}</option>\r\n\t\t  </ng-container>\r\n\t\t</select>\r\n\t\t\r\n\t<!--\t<div *ngIf=\"Menu&&type\"> -->\r\n\t\t  \r\n\t  <select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"food\">\r\n\t\t  \r\n\t\t<ng-container *ngFor=\"let x of Menu ;let i=index\" >\r\n\t\t \r\n\t\t\t  <option value=\"{{Menu[i].name}}\">{{Menu[i].name}}</option>\r\n\t\t \r\n\t\t\t</ng-container>\r\n\t\t</select>\r\n\t\r\n\t  \r\n\t\t\r\n\t>\r\n\t\t\r\n\t\r\n\t <label style=\"margin-top:5%;align:center\">Enter New Price</label>\r\n    <input type=\"text\" name=\"name\" class=\"form-control\" style=\"margin-top:5%;align:center\" [(ngModel)]=\"price\">\r\n\t</div>\r\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" style=\"margin-top:5%\">\r\n\t</form>\r\n\t<br>\r\n\t{{type}}\r\n\t{{food}}\r\n\t{{price}}"

/***/ }),

/***/ "../../../../../src/app/modifyfood/modifyfood.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyfoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_adminmenu_service__ = __webpack_require__("../../../../../src/app/services/adminmenu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModifyfoodComponent = (function () {
    function ModifyfoodComponent(router, adminmenuService, MS, flashMessage) {
        this.router = router;
        this.adminmenuService = adminmenuService;
        this.MS = MS;
        this.flashMessage = flashMessage;
    }
    ModifyfoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MS.getMenuH().subscribe(function (data) {
            if (data['success']) {
                _this.Menu = data['menu'];
                //console.log(this.Menu);
            }
        });
        this.MS.getType().subscribe(function (data) {
            if (data['success']) {
                _this.Type = data['type'];
                // console.log(this.Type);
            }
        });
    };
    ModifyfoodComponent.prototype.onSubmit = function () {
        var _this = this;
        var food = {
            name: this.food,
            type: this.type,
            price: this.price,
        };
        console.log(food);
        //inserting food
        this.adminmenuService.updateFood(food).subscribe(function (data) {
            if (data['success']) {
                _this.flashMessage.show('Food Updated Successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/modifyfood']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/modifyfood']);
            }
        });
    };
    ModifyfoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modifyfood',
            template: __webpack_require__("../../../../../src/app/modifyfood/modifyfood.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modifyfood/modifyfood.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_adminmenu_service__["a" /* AdminmenuService */],
            __WEBPACK_IMPORTED_MODULE_4__services_menus_service__["a" /* MenusService */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]])
    ], ModifyfoodComponent);
    return ModifyfoodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modifytype/modifytype.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modifytype/modifytype.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"margin-top:10%;align:center\">\r\n  <h1 style=\"text-align:center\">Modify Type</h1>      \r\n  \r\n</div>\r\n<form (ngSubmit)=\"onSignupSubmit()\">\r\n<div class=\"form-group\">\r\n\t\r\n\t<label for=\"pre1\" style=\" font-size:20px;margin-top:5%;align:center\">Select Food Type</label>\r\n\t<select class=\"form-control\" style= \"margin-top:5%;align:center\" name=\"pre1\" [(ngModel)]=\"type\">\r\n    <option value=\"c\">chinese</option>\r\n    <option value=\"p\">punjabi</option>\r\n    <option value=\"s\">south indian</option>\r\n    <option value=\"m\">maharashtrian</option>\r\n\t</select>\r\n\t\r\n\t\r\n  \r\n\t <label style=\"margin-top:5%;align:center\">Enter New Name</label>\r\n    <input type=\"text\" name=\"name\" class=\"form-control\" style=\"margin-top:5%;align:center\" [(ngModel)]=\"new\">\r\n\t\r\n\t\r\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n\t</div>\r\n\t</form>\r\n\t\r\n\t{{type}}\r\n\t{{new}}"

/***/ }),

/***/ "../../../../../src/app/modifytype/modifytype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifytypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModifytypeComponent = (function () {
    function ModifytypeComponent() {
    }
    ModifytypeComponent.prototype.ngOnInit = function () {
    };
    ModifytypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modifytype',
            template: __webpack_require__("../../../../../src/app/modifytype/modifytype.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modifytype/modifytype.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModifytypeComponent);
    return ModifytypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">TechwizApp</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/signup']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/menu']\">menu</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/orders']\">orders</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/OrderStatus']\">PlacedOrderStatus</a></li>\n          \t<li *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ngc-float-button  {\r\n    top: 80%;\r\n    left: 90%;\r\n    position: absolute;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Count\">\n  <ngc-float-button icon=\"menu\" (click)=\"goToMenu()\" [direction]=\"right\">\n    </ngc-float-button>\n\n  <div class=\"jumbotron\" >\n  <ng-container *ngFor=\"let y of Menu;let i=index\" >\n      \n          <div class=\"container-fluid\" *ngIf = \"Count[i]>0\">\n            <div class=\"row\">\n              <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\">\n               <h3> {{y.name}}  </h3>\n              </div>\n              <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\"> \n                <h3><i class=\"fa fa-inr\" aria-hidden=\"true\" style=\"margin-top:2px\">  \n                </i>{{y.price}}\n                </h3>\n              </div>\n            </div>\n            <div class=\"row\" style=\"margin-top:5px\">\n              <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n                <button (click)=\"decrCount(i)\" class=\"btn btn-default\n                 btn-circle\" style=\"font-size:15px;\n                border-color:white;background:#00D800;color:white\">-</button>\n                <input readonly [(ngModel)]=\"Count[i]\" class=\"form-group-sm\" \n                style=\"width:30px;border:none;font-size:15px;\n                background:white;margin:0px;\">\n                <button (click)=\"incrCount(i)\" class=\"btn btn-default\n                btn-circle\" style=\"font-size:15px;\n               border-color:white;background:#00D800;color:white\">+</button>\n              </div>\n              <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <p><span style=\"font-size:15px\">X</span>\n                  <input readonly [(ngModel)]=\"Menu[i].price\" class=\"form-group-sm\" \n                  style=\"width:45px;border:none;font-size:25px;\n                  background:transparent;margin:0px;\">\n                  <span style=\"font-size:25px;font-style:bold\">=</span></p>\n                  \n              </div>\n              <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n                  <h4><i class=\"fa fa-inr\" aria-hidden=\"true\" style=\"margin-top:2px\">  \n                    </i>{{y.price*Count[i]}}\n                    </h4>\n              </div>\n            </div>\n          </div>\n    </ng-container>\n    <div class=\"row\">\n      <h3 style=\"text-align:center\">\n        <p style=\"font-size:30px;font-style:bold\">Total Amount: {{total()}}</p>\n      </h3>\n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <button class=\"btn btn-lg\" style=\"background-color:#00D800;\n      color:white\" (click)=\"placeOrder()\">Place Order</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_orders_service__ = __webpack_require__("../../../../../src/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersComponent = (function () {
    function OrdersComponent(MS, router, AS, OS) {
        var _this = this;
        this.MS = MS;
        this.router = router;
        this.AS = AS;
        this.OS = OS;
        this.now = new Date();
        setInterval(function () {
            _this.now = new Date();
        }, 60);
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.Menu = this.MS.getMenu();
        this.Count = this.MS.getCount();
        //console.log("ininit");
    };
    OrdersComponent.prototype.goToMenu = function () {
        this.MS.setOrders(this.Menu, this.Count);
        this.router.navigate(['/menu']);
    };
    OrdersComponent.prototype.incrCount = function (index) {
        this.Count[index] = (Number)(this.Count[index]) + 1;
        console.log(index + ":" + this.Count[index]);
    };
    OrdersComponent.prototype.decrCount = function (index) {
        if (this.Count[index] != 0) {
            this.Count[index] = (Number)(this.Count[index]) - 1;
            console.log(index + ":" + this.Count[index]);
        }
    };
    OrdersComponent.prototype.total = function () {
        this.sum = 0;
        for (var i = 0; i < this.Count.length; i++) {
            if (this.Count[i] != 0) {
                var x = +this.Count[i];
                var y = this.Menu[i];
                var z = +y.price;
                //console.log(x*z);  
                if (z) {
                    this.sum = this.sum + x * z;
                    //console.log(this.sum); 
                }
            }
        }
        //console.log(this.sum);
        return this.sum;
    };
    OrdersComponent.prototype.placeOrder = function () {
        var user = JSON.parse(this.AS.getUser());
        //console.log(user);
        var orderArray = [];
        var c = [new Number(this.Count.length)];
        for (var i = 0; i < this.Count.length; i++) {
            c[i] = this.Count[i];
        }
        //console.log("p"+c);
        for (var i = 0; i < this.Count.length; i++) {
            if (this.Count[i] != 0) {
                var o = {
                    foodname: this.Menu[i].name,
                    Count: this.Count[i],
                };
                orderArray.push(o);
                this.Count[i] = 0;
            }
        }
        //console.log(orderArray);
        var order = {
            userEmail: user.email,
            timeStamp: this.now,
            orderId: ++this.OS.orderId,
            orders: orderArray
        };
        //console.log(order);
        //console.log("p"+c);
        this.OS.StoreOrder(order, c);
        this.MS.setOrders(this.Menu, this.Count);
        this.router.navigate(['/OrderStatus']);
    };
    OrdersComponent.prototype.getOrder = function () {
        var orders = this.OS.getCompleteOrder();
        console.log("2" + orders);
        //let count:[any]=this.OS.get;
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_orders_service__["a" /* OrdersService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orderstatus/orderstatus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orderstatus/orderstatus.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Count\">\n<div *ngIf=\"Menu\">\n  <div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n      <h3>FoodName</h3>\n      </div>\n      <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <h3>Count</h3>\n      </div>\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n        <h3>Status</h3>\n      </div>\n      <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n          <h3>Estimated Time of delivery:</h3>\n      </div>  \n  </div>  \n  </div>\n  <ng-container *ngFor=\"let x of orders;let i=index\" >\n      <div class=\"jumbotron\" style=\"padding-left:5px;padding-right:5px\">\n        \n          <div class=\"container-fluid\" *ngFor=\"let y of x.orders;let j=index\">\n              <div class=\"row\">\n                  <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                  <h3>{{y.foodname}}</h3>\n                  </div>\n                  <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n                  <h3>{{y.Count}}</h3>\n                  </div>\n                  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\" *ngIf=\"!deliverd[i]||deliverd[i]==0;else other\">\n                    <h3>order Placed at {{x.timeStamp | date:'HH:mm'}}</h3>\n                  </div>\n                  <ng-template #other>\n                      <h3 style=\"color:#00D800\">order Deliverd</h3>\n                  </ng-template>\n                  <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\" *ngIf=\"orderStatus[i]&&deliverd[i]==0\">\n                      <h3>at {{orderStatus[i].orders[j].Time|date:'HH:mm'}}</h3>\n                  </div>  \n              </div>\n            \n            \n          </div>\n          </div>\n    </ng-container>\n  <button class=\"btn btn-lg\" (click)=\"checkOut()\">CheckOut</button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/orderstatus/orderstatus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderstatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_orders_service__ = __webpack_require__("../../../../../src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_socket_service__ = __webpack_require__("../../../../../src/app/services/order-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderstatusComponent = (function () {
    //public now: Date = new Date();
    function OrderstatusComponent(MS, router, AS, OS, OSS) {
        this.MS = MS;
        this.router = router;
        this.AS = AS;
        this.OS = OS;
        this.OSS = OSS;
    }
    OrderstatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.now);
        this.MS.getMenuH().subscribe(function (data) {
            if (data['success']) {
                _this.Menu = data['menu'];
                //console.log(this.Menu);
                _this.Count = _this.OS.getTotalCount();
                // console.log(this.Count);
                // console.log(this.Menu);
            }
        });
        this.orders = this.OS.getCompleteOrder();
        this.orderStatus = new Array(this.orders.length);
        this.deliverd = new Array(this.orders.length);
        this.orderStatus = this.OS.getStat();
        this.deliverd = this.OS.getDeliveryStat();
        console.log(this.orderStatus);
        //console.log(this.orders);
        this.OSS.getStatus().subscribe(function (order) {
            //console.log(order);
            // console.log("status");
            _this.orderStatus[order.orderId - 1] = order;
            _this.deliverd[order.orderId - 1] = 0;
            console.log(_this.orderStatus);
        });
        this.OSS.orderDelivered().subscribe(function (order) {
            //console.log(order);
            // console.log("status");
            //this.orderStatus.push(order);
            _this.deliverd[order.orderId - 1] = 1;
            console.log(_this.deliverd);
        });
    };
    OrderstatusComponent.prototype.checkOut = function () {
        var user = JSON.parse(this.AS.getUser());
        //console.log(user);
        var orderArray = [];
        //let c=[new Number(this.Count.length)];
        /*for(let i=0;i<this.Count.length;i++)
        {
        c[i]=this.Count[i];
        }*/
        //console.log("p"+c);
        for (var i = 0; i < this.Count.length; i++) {
            if (this.Count[i] != 0) {
                var o = {
                    foodname: this.Menu[i].name,
                    Count: this.Count[i],
                };
                orderArray.push(o);
                //this.Count[i]=0;
            }
        }
        //console.log(orderArray);
        var order = {
            userEmail: user.email,
            orders: orderArray
        };
        //console.log(order);
        //console.log("p"+c);
        this.OS.finalOrder(order).subscribe(function (data) {
            console.log(data);
        });
        //this.AS.logout();
        //this.router.navigate(['/login']);
        this.router.navigate(['/payment']);
    };
    OrderstatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orderstatus',
            template: __webpack_require__("../../../../../src/app/orderstatus/orderstatus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orderstatus/orderstatus.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menus_service__["a" /* MenusService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_orders_service__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_5__services_order_socket_service__["a" /* OrderSocketService */]])
    ], OrderstatusComponent);
    return OrderstatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"count\">\r\n  <div class=\"jumbotron\" >\r\n    <ng-container *ngFor=\"let y of menu;let i=index\" >\r\n        \r\n            <div class=\"container-fluid\" *ngIf = \"count[i]>0\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-9\">\r\n                 <h3> {{y.name}}  </h3>\r\n                </div>\r\n                <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\"> \r\n                  <h3><i class=\"fa fa-inr\" aria-hidden=\"true\" style=\"margin-top:2px\">  \r\n                  </i>{{y.price*count[i]}}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              \r\n                \r\n            </div>\r\n      </ng-container>\r\n      <div class=\"row\">\r\n        <h3 style=\"text-align:center\">\r\n          <p style=\"font-size:30px;font-style:bold\">Total Amount: {{total()}}</p>\r\n        </h3>\r\n      </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Card Number:</label>\r\n        <input type=\"text\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Expiry Date:</label>\r\n        <input type=\"month\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Name on the Card:</label>\r\n        <input type=\"text\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>CVV:</label>\r\n        <input type=\"password\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Amount:</label>\r\n        <input type=\"text\" class=\"form-control\" value=\"{{sum}}\" readonly>\r\n      </div>\r\n      <div>\r\n      <button class=\"btn btn-lg\" style=\"background-color:#00D800;\r\n      color:white\" (click)=\"pay()\">Pay</button>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__("../../../../../src/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_menus_service__ = __webpack_require__("../../../../../src/app/services/menus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentComponent = (function () {
    function PaymentComponent(router, AS, OS, MS) {
        this.router = router;
        this.AS = AS;
        this.OS = OS;
        this.MS = MS;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.count = this.OS.getTotalCount();
        this.menu = this.MS.getMenu();
    };
    PaymentComponent.prototype.total = function () {
        this.sum = 0;
        for (var i = 0; i < this.count.length; i++) {
            if (this.count[i] != 0) {
                var x = +this.count[i];
                var y = this.menu[i];
                var z = +y.price;
                //console.log(x*z);  
                if (z) {
                    this.sum = this.sum + x * z;
                    //console.log(this.sum); 
                }
            }
        }
        //console.log(this.sum);
        return this.sum;
    };
    PaymentComponent.prototype.pay = function () {
        this.AS.logout();
        this.router.navigate(['/login']);
        //this.router.navigate(['/payment']);
    };
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__("../../../../../src/app/payment/payment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_orders_service__["a" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_2__services_menus_service__["a" /* MenusService */]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/adminmenu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminmenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminmenuService = (function () {
    function AdminmenuService(http) {
        this.http = http;
    }
    AdminmenuService.prototype.addFood = function (food) {
        return this.http.post('http://localhost:3000/menu/add', food, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json'),
        });
    };
    AdminmenuService.prototype.updateFood = function (food) {
        return this.http.put('http://localhost:3000/menu/update', food, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json'),
        });
    };
    AdminmenuService.prototype.deleteFood = function (food) {
        return this.http.post('http://localhost:3000/menu/delete', food, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json'),
        });
    };
    AdminmenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdminmenuService);
    return AdminmenuService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post('http://localhost:3000/users/register', user, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json'),
        });
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post('http://localhost:3000/users/authenticate', user, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json'),
        });
    };
    AuthService.prototype.loggedIn = function () {
        // console.log('loggedIn');
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getUser = function () {
        //console.log("1"+this.user);
        //console.log(localStorage.getItem('user'));
        return localStorage.getItem('user');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/menus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenusService = (function () {
    function MenusService(http) {
        this.http = http;
    }
    MenusService.prototype.getMenuH = function () {
        return this.http.get('http://localhost:3000/menu/LoadMenu');
    };
    MenusService.prototype.getType = function () {
        return this.http.get('http://localhost:3000/menu/LoadType');
    };
    MenusService.prototype.setOrders = function (m, c) {
        this.Menu = m;
        this.Count = c;
    };
    MenusService.prototype.getMenu = function () {
        return this.Menu;
    };
    MenusService.prototype.getCount = function () {
        return this.Count;
    };
    MenusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MenusService);
    return MenusService;
}());



/***/ }),

/***/ "../../../../../src/app/services/order-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderSocketService = (function () {
    function OrderSocketService(socket) {
        this.socket = socket;
    }
    OrderSocketService.prototype.placeOrder = function (msg) {
        console.log("emit");
        this.socket.emit("placeOrder", msg);
    };
    OrderSocketService.prototype.init = function (username) {
        this.socket.emit("user", username);
    };
    OrderSocketService.prototype.getStatus = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socket.on('orderStatus', function (order) {
                console.log("new");
                observer.next(order);
            });
        });
    };
    OrderSocketService.prototype.orderDelivered = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socket.on('orderDeliverd', function (order) {
                console.log("newd");
                observer.next(order);
            });
        });
    };
    OrderSocketService.prototype.close = function () {
        this.socket.disconnect();
    };
    OrderSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], OrderSocketService);
    return OrderSocketService;
}());



/***/ }),

/***/ "../../../../../src/app/services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_socket_service__ = __webpack_require__("../../../../../src/app/services/order-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersService = (function () {
    function OrdersService(http, OSS) {
        var _this = this;
        this.http = http;
        this.OSS = OSS;
        this.orders = new Array();
        this.orderId = 0;
        this.orderStatus
            = new Array();
        this.deliverd = new Array();
        this.OSS.getStatus().subscribe(function (order) {
            _this.orderStatus[order.orderId - 1] = order;
            _this.deliverd[order.orderId - 1] = 0;
            console.log(_this.orderStatus);
        });
        this.OSS.orderDelivered().subscribe(function (order) {
            //console.log(order);
            //console.log("status");
            //this.orderStatus.push(order);
            _this.deliverd[order.orderId - 1] = 1;
        });
    }
    OrdersService.prototype.getDeliveryStat = function () {
        return this.deliverd;
    };
    OrdersService.prototype.StoreOrder = function (order, c) {
        //localStorage.setItem('order', JSON.stringify(order));
        this.orders.push(order);
        //console.log(c);
        this.TCount = c;
        //console.log("q"+this.TCount);
        if (this.Count == undefined) {
            //console.log("xx");
            this.Count = c;
        }
        else {
            for (var i = 0; i < this.Count.length; i++) {
                this.Count[i] += c[i];
            }
        }
        this.OSS.init(order.userEmail);
        this.OSS.placeOrder(order);
    };
    OrdersService.prototype.getCompleteOrder = function () {
        return this.orders;
    };
    OrdersService.prototype.getStat = function () {
        return this.orderStatus;
    };
    OrdersService.prototype.getCurrentCount = function () {
        //console.log("1"+this.TCount);
        return this.TCount;
    };
    OrdersService.prototype.getTotalCount = function () {
        return this.Count;
    };
    OrdersService.prototype.reset = function () {
        this.Count = undefined;
    };
    OrdersService.prototype.finalOrder = function (order) {
        return this.http.post('http://localhost:3000/orders/add', order);
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_order_socket_service__["a" /* OrderSocketService */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
            '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
            '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
            '[a-zA-Z]{2,}))$'].join(''));
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (ngSubmit)=\"onSignupSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>UserName</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignupSubmit = function () {
        var _this = this;
        console.log('1');
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        console.log(user);
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        console.log('trying');
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/viewfeedback/viewfeedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewfeedback/viewfeedback.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  viewfeedback works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/viewfeedback/viewfeedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewfeedbackComponent = (function () {
    function ViewfeedbackComponent() {
    }
    ViewfeedbackComponent.prototype.ngOnInit = function () {
    };
    ViewfeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewfeedback',
            template: __webpack_require__("../../../../../src/app/viewfeedback/viewfeedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewfeedback/viewfeedback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewfeedbackComponent);
    return ViewfeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map