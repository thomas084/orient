(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  \n    \n  \n</ion-header>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<ion-content>\n  <div class=\"layout\">\n    \n    <h2><ion-title class=\"title\">{{title}}</ion-title></h2>\n  \n  <br><br>\n    \n    <ion-input type =\"sting\" placeholder=\"username\" [(ngModel)]=\"username\" class=\"text\" required></ion-input>\n  \n    <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" class=\"text\" required></ion-input>\n  \n<br><br>\n    <ion-button class=\"btn\">Login</ion-button><br>\n    <br>\n  <a class=\"href\" href=\"\">forgot password </a><br>\n  <a  class=\"href\" href=\"/signup\"> signup</a><br>\n  <br>\n  <ion-button (click)=\"loginWithFB()\">Facebook\n  <ion-icon name=\"logo-facebook\" size=\"large\" ></ion-icon>\n  </ion-button><br>\n  <ion-button>Google\n     <ion-icon ios=\"logo-google\" md=\"logo-google\" size=\"large\" ></ion-icon>\n</ion-button>\n\n  </div>\n\n</ion-content>\n\n\n \n  <ion-card *ngIf=\"userData\">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <img [src]=\"userData.picture\" />\n    <ion-card-content>\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n  </ion-card>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  width: 320px;\n  background: #fcecec;\n  padding: 30px 20px;\n  box-sizing: border-box;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.title {\n  font-size: 40px;\n  color: #5959f7;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: bold;\n}\n\n.text {\n  width: 100%;\n  background: none;\n  border: 1px solid #131111;\n  border-radius: 3px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  font-size: 20px;\n  color: #131010;\n}\n\n.btn {\n  width: 90%;\n}\n\n.href {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHByb2plY3RcXG9yaWVudC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQyxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RWOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREdBO0VBRUksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubGF5b3V0e1xyXG4gICAgXHJcbiAgICB3aWR0aDogMzIwcHg7IFxyXG4gICAgYmFja2dyb3VuZDogI2ZjZWNlYzsgXHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7IFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgbGVmdDogNTAlOyBcclxuICAgIHRvcDogNTAlOyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHJnYig4OSwgODksIDI0Nyk7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn1cclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxNywgMTcpOyBcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDE1cHg7IFxyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgXHJcbiAgICAgICAgICBjb2xvcjogcmdiKDE5LCAxNiwgMTYpO1xyXG4gICAgfVxyXG4uYnRue1xyXG4gICAgd2lkdGg6OTAlO1xyXG5cclxufVxyXG4uaHJlZlxyXG57XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuIiwiLmxheW91dCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgYmFja2dyb3VuZDogI2ZjZWNlYztcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjNTk1OWY3O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG4udGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTMxMTExO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMTMxMDEwO1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmhyZWYge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");



let LoginPage = class LoginPage {
    constructor(facebook) {
        this.facebook = facebook;
        this.title = "Login";
    }
    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map