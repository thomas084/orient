(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  \n</ion-header>\n\n\n<ion-content>\n    <div class=\"layout\">\n      <ion-toolbar>\n      <ion-title class=\"title\">Signup</ion-title>\n    </ion-toolbar>\n        <ion-item>\n            <ion-label>Name :</ion-label>\n            <ion-input  type=\"string\" placeholder=\"First name\" class=\"text\" required ></ion-input>\n            <ion-input type=\"string\" placeholder=\"middle name\"> </ion-input>\n            <ion-input type=\"string\" placeholder=\"last name\"> </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Email :</ion-label>\n            <ion-input type=\"email\" placeholder=\"Email Id\" class=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Mobile Number :</ion-label>\n            <ion-input type=\"number\" placeholder=\"Mobile\" class=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>College name :</ion-label>\n            <ion-input type=\"string\" placeholder=\"select\" class=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Course Name</ion-label>\n            <ion-input type=\"string\" placeholder=\"select\" class=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>college Register number</ion-label>\n            <ion-input type=\"string\" placeholder=\"reg no\" class=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Year of passing</ion-label>\n            <ion-input type=\"date\" placeholder=\"year of passing \" class=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Linkedin profile page</ion-label>\n            <ion-input type=\"any\" class=\"text\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>FB Profile page</ion-label>\n            <ion-input type=\"any\" class=\"text\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Profile Photo </ion-label>\n            <ion-input type=\"file\" class=\"text\" ></ion-input>\n          </ion-item>\n\n  </div>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  width: 400px;\n  background: #fcecec;\n  padding: 30px 20px;\n  box-sizing: border-box;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.title {\n  color: black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 30px;\n  font-style: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxwcm9qZWN0XFxvcmllbnQvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxheW91dHtcclxuICAgIHdpZHRoOiA0MDBweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmNlY2VjOyBcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDsgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBsZWZ0OiA1MCU7IFxyXG4gICAgdG9wOiA1MCU7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbn0iLCIubGF5b3V0IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmNlY2VjO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXN0eWxlOiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPage = /** @class */ (function () {
    function SignupPage() {
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es5.js.map