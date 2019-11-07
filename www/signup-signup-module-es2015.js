(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  \n</ion-header>\n<ion-content>\n<form class=\"form\" [formGroup]=\"myform\" (ngSubmit)=\"addData(myform.value)\">\n    <div >\n    <div class=\"layout\">\n      <ion-toolbar >\n      <ion-title class=\"title\">Signup</ion-title>\n    </ion-toolbar>\n        <ion-item>\n            \n            <ion-input  type=\"string\" placeholder=\"First name\" formControlName=\"fname\" required ></ion-input>\n          </ion-item>\n        <ion-item>\n            <ion-input type=\"string\" placeholder=\"last name\" formControlName=\"lname\"> </ion-input>\n          </ion-item>\n          <ion-item>\n            \n            <ion-input type=\"text\" placeholder=\"Email Id\" class=\"text\" required formControlName=\"email\" ></ion-input>\n          </ion-item>\n          <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.email\">\n                <div class=\"error-messages\" *ngIf=\"myform.get('email').hasError(error.type) && (myform.get('email').dirty || myform.get('email').touched) \">\n                  {{error.message}}\n                </div>\n              </ng-container>\n            </div>\n            \n          <ion-item>\n             <ion-input type=\"number\" placeholder=\"Mobile\" class=\"text\" required formControlName=\"mobile\"></ion-input>\n          </ion-item>\n\n          <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.mobile\">\n                <div class=\"error-messages\" *ngIf=\"myform.get('mobile').hasError(error.type) && (myform.get('mobile').dirty || myform.get('mobile').touched) \">\n                  {{error.message}}\n                </div>\n              </ng-container>\n            </div>\n\n          <ion-item>\n            <ion-input type=\"password\" placeholder=\"Enter Password\" required formControlName=\"password\"></ion-input>\n          </ion-item>\n\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.password\">\n              <div class=\"error-messages\" *ngIf=\"myform.get('password').hasError(error.type) && (myform.get('password').dirty || myform.get('password').touched) \">\n                {{error.message}}\n              </div>\n            </ng-container>\n          </div>\n\n          <ion-item>\n              <ion-input type=\"password\" placeholder=\"confirm Password\" required formControlName=\"confirmPassword\"></ion-input>\n            </ion-item>\n            <ion-button color=\"medium\" type=\"submit\" [disabled]=\"!myform.valid\">submit</ion-button><br>\n            <a href=\"/login\">Login</a>\n  </div>\n  \n\n</div>\n</form>\n</ion-content>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #1e3d57, rgba(91, 26, 110, 0.685), #140266);\n  background-size: cover;\n}\n\n.layout {\n  width: 399px;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 30px 20px;\n  box-sizing: border-box;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.title {\n  color: black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 30px;\n  font-style: bold;\n}\n\nion-item {\n  --ion-background-color:none;\n}\n\nion-input {\n  color: whitesmoke;\n}\n\n@media screen and (max-width: 400px) {\n  .layout {\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4);\n    padding: 30px 20px;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    text-align: center;\n  }\n\n  ion-item {\n    --ion-background-color:none;\n  }\n\n  .title {\n    color: black;\n    font-family: \"Times New Roman\", Times, serif;\n    font-size: 30px;\n    font-style: bold;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxwcm9qZWN0XFxvcmllbnQvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhFQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHQTtFQUNJLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0NBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQ0NOOztFREVFO0lBQ0ksMkJBQUE7RUNDTjs7RURDRTtJQUNJLFlBQUE7SUFDQSw0Q0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDMwLCA2MSwgODcpLHJnYmEoOTEsIDI2LCAxMTAsIDAuNjg1KSxyZ2IoMjAsIDIsIDEwMiksKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sYXlvdXR7XHJcbiAgICB3aWR0aDogMzk5cHg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpO1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4OyBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIGxlZnQ6IDUwJTsgXHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6bm9uZTtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQwMHB4KXtcclxuICAgIC5sYXlvdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDsgXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuIiwiLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxZTNkNTcsIHJnYmEoOTEsIDI2LCAxMTAsIDAuNjg1KSwgIzE0MDI2Nik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sYXlvdXQge1xuICB3aWR0aDogMzk5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmxheW91dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC1zdHlsZTogYm9sZDtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






let SignupPage = class SignupPage {
    constructor(navCtrl, fireauth, afd, fb) {
        this.navCtrl = navCtrl;
        this.fireauth = fireauth;
        this.afd = afd;
        this.fb = fb;
        this.error = '';
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email length must be more.' },
                { type: 'maxlength', message: 'Email length cannot be more.' },
                { type: 'pattern', message: 'Enter a valid Email ID.' },
            ],
            'mobile': [
                { type: 'maxlength', message: 'only 10 digit Mobile number is allowed.' },
                { type: 'required', message: 'mobile number is required.' }
            ],
            'password': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'minimum 8 charecters length must.' },
                { type: 'maxlength', message: 'length cannot be more 16 charecters.' },
                { type: 'pattern', message: 'Password Must have atleast one UpperCase, LowerCase, Number/SpecialChar .' }
            ]
        };
        this.myform = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")
            ])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)
            ])),
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    addData(value) {
        if (this.myform.value.password !== this.myform.value.confirmPassword) {
            console.log(this.myform.value.password);
            console.log(this.myform.value.confirmPassword);
            alert('confirm password must be same as password please re-enter');
        }
        else {
            let dat = Object.assign({}, value);
            this.afd.list('signup/').push(dat);
            this.signup();
        }
    }
    signup() {
        this.lname = "";
        this.fireauth.auth.createUserWithEmailAndPassword(this.myform.value.email, this.myform.value.password)
            .then(res => {
            if (res.user) {
                console.log(res.user);
            }
        })
            .catch(err => {
            console.log(`login failed ${err}`);
            this.error = err.message;
        });
        this.myform.reset();
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map