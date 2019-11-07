(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n</ion-header>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<ion-content >\n    <div class=\"form\">\n  <div class=\"layout\" >\n      \n    \n    <h2><ion-title class=\"title\">{{title}}</ion-title></h2>\n  \n  <br><br>\n    <ion-list class=\"list\">\n      <ion-item>\n    <ion-input type =\"sting\" placeholder=\"username\" [(ngModel)]=\"username\" class=\"text\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" class=\"text\" required></ion-input>\n  </ion-item>\n  </ion-list>\n  <br>\n  <ion-text class=\"href\" (click)=\"popup()\">Forgot Password ?. </ion-text>\n \n  &nbsp;\n \n  &nbsp;\n  <a class=\"href\" href=\"/signup\"> Signup</a><br>\n  <br>\n<br><br>\n\n<div class=\"footer\">\n    <ion-button class=\"btn\" color=\"dark\" (click)=\"login()\" >Login</ion-button><br>\n    <p>OR</p>\n    \n  \n  <ion-icon name=\"logo-facebook\" size=\"large\" background=\"none\" (click)=\"loginWithFB()\" ></ion-icon> &nbsp;\n  \n  \n  &nbsp; <ion-icon ios=\"logo-google\" md=\"logo-google\" size=\"large\" (click)=\"google()\" ></ion-icon>\n\n\n</div>\n\n<div class=\"forgot\" *ngIf=\"pop\">\n  <ion-text>Enter your email below and we'll send your instructions to recover your password</ion-text>\n  <br>\n  <br>\n  <ion-input type=\"email\" placeholder=\"enter your email\" [(ngModel)]=\"email\" style=\"border:1px solid rgb(248, 241, 241);\"></ion-input>\n  <br>\n  <ion-text class=\"error\" text-center>{{error}}</ion-text>\n<br>\n<br>\n  <ion-button size=\"small\" (click)=\"recover()\">submit</ion-button> &nbsp;\n  <ion-button size=\"small\" (click)=\"popupcl()\">cancel</ion-button>\n</div>\n\n  </div>\n\n\n\n\n \n  <ion-card *ngIf=\"userData\">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <img [src]=\"userData.picture\" />\n    <ion-card-content>\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n  </ion-card>\n \n\n\n</div>\n\n</ion-content>"

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

module.exports = ".form {\n  width: 100%;\n  height: 100%;\n  background-image: url('wall.png');\n  background-size: cover;\n}\n\n.layout {\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n  width: 320px;\n  /*background:white;\n  padding: 30px 20px; \n  box-sizing: border-box; */\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-family: sans-serif;\n  text-align: center;\n  color: white;\n}\n\n.forgot {\n  width: 90%;\n  left: 5%;\n  border: 1px solid #f8f1f1;\n  padding: 30px 20px;\n  box-sizing: border-box;\n  position: fixed;\n  top: 10%;\n  background: linear-gradient(45deg, #313233, black, #4e466d);\n  background-size: cover;\n}\n\n.list {\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.title {\n  font-size: 40px;\n  color: white;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: bold;\n}\n\n.text {\n  width: 100%;\n  border-color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n  /*border: 1px solid rgb(19, 17, 17); \n  border-radius: 3px;\n   padding: 6px 15px; \n   box-sizing: border-box; \n   margin-bottom: 20px; */\n  font-size: 20px;\n  color: white;\n}\n\n.btn {\n  width: 90%;\n  bottom: 30px;\n}\n\n.href {\n  font-size: 20px;\n  color: white;\n}\n\nion-item {\n  --ion-background-color:none;\n}\n\n@media screen and (max-width: 400px) {\n  .form {\n    width: 100%;\n    height: 100%;\n    background-image: url('wall.png');\n    background-size: cover;\n  }\n\n  .forgot {\n    width: 90%;\n    left: 5%;\n    top: 10%;\n    box-sizing: border-box;\n    border: 1px solid black;\n    font-family: sans-serif;\n    text-align: center;\n    background: linear-gradient(45deg, #313233, rgba(133, 131, 134, 0.685), #4e466d);\n    background-size: cover;\n  }\n\n  .layout {\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4);\n    box-sizing: border-box;\n    font-family: sans-serif;\n    text-align: center;\n  }\n\n  .title {\n    font-size: 40px;\n    color: white;\n    font-family: \"Times New Roman\", Times, serif;\n    font-style: bold;\n  }\n\n  .text {\n    width: 100%;\n    background: none;\n    /* border: 1px solid rgb(19, 17, 17); \n     border-radius: 3px;\n      padding: 6px 15px; \n      box-sizing: border-box; \n      margin-bottom: 20px; */\n    font-size: 20px;\n    color: white;\n  }\n\n  .btn {\n    width: 90%;\n    bottom: 10px;\n  }\n\n  .list {\n    background: rgba(0, 0, 0, 0);\n  }\n\n  .href {\n    font-size: 20px;\n    color: white;\n  }\n\n  ion-item {\n    --ion-background-color:none;\n  }\n\n  .footer {\n    width: 100%;\n    position: fixed;\n    bottom: 5%;\n    align-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHByb2plY3RcXG9yaWVudC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FDREo7O0FES0k7RUFDSSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0osWUFBQTtFQUNBOzsyQkFBQTtFQUdBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7QUNKSjs7QURPQTtFQUNJLDhCQUFBO0VBQ0gsa0NBQUE7QUNKRDs7QURPQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9JO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0gsa0NBQUE7RUFDSTs7Ozt5QkFBQTtFQUtDLGVBQUE7RUFDQSxZQUFBO0FDSlY7O0FETUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBRUksZUFBQTtFQUNBLFlBQUE7QUNKSjs7QURNQTtFQUNRLDJCQUFBO0FDSFI7O0FETUE7RUFFSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUNBQUE7SUFDQSxzQkFBQTtFQ0pOOztFRE9FO0lBQ0ksVUFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBSUEsc0JBQUE7SUFDQSx1QkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnRkFBQTtJQUNBLHNCQUFBO0VDUE47O0VEVUU7SUFFSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0NBQUE7SUFFQSxzQkFBQTtJQUdBLHVCQUFBO0lBQ0Esa0JBQUE7RUNYTjs7RURhRTtJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsNENBQUE7SUFDQSxnQkFBQTtFQ1ZOOztFRGNNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0E7Ozs7NEJBQUE7SUFLRSxlQUFBO0lBQ0EsWUFBQTtFQ1haOztFRGFFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUNWTjs7RURhRTtJQUNJLDRCQUFBO0VDVk47O0VEWUU7SUFFSSxlQUFBO0lBQ0EsWUFBQTtFQ1ZOOztFRFlFO0lBQ0ksMkJBQUE7RUNUTjs7RURXRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VDUk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEM6XFxwcm9qZWN0XFxvcmllbnRcXHNyY1xcYXNzZXRzXFxpbWFnZXNcXHdhbGwucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxuICAgLy8gYmFja2dyb3VuZDogI2ZjZWNlYztcclxufVxyXG4gICAgLmxheW91dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpO1xyXG4gICAgd2lkdGg6IDMyMHB4OyBcclxuICAgIC8qYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDsgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIGxlZnQ6IDUwJTsgXHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgXHJcbn1cclxuLmZvcmdvdHtcclxuICAgIHdpZHRoOiA5MCU7IFxyXG4gICAgbGVmdCA6IDUlO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjQ4LCAyNDEsIDI0MSk7XHJcbiAgICAvL2JhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7IFxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgdG9wOjEwJTtcclxuICAgIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDQ5LCA1MCwgNTEpLHJnYigwLCAwLCAwKSxyZ2IoNzgsIDcwLCAxMDkpLCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubGlzdHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG5cdFxyXG59XHJcbi50aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcblxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE3LCAxNyk7IFxyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTVweDsgXHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4uYnRue1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgYm90dG9tOjMwcHg7XHJcblxyXG59XHJcbi5ocmVmXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQwMHB4KXtcclxuXHJcbiAgICAuZm9ybXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQzpcXHByb2plY3RcXG9yaWVudFxcc3JjXFxhc3NldHNcXGltYWdlc1xcd2FsbC5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmNlY2VjO1xyXG4gICAgfVxyXG4gICAgLmZvcmdvdHtcclxuICAgICAgICB3aWR0aDogOTAlOyBcclxuICAgICAgICBsZWZ0IDogNSU7XHJcbiAgICAgICAgdG9wOjEwJTtcclxuICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IFxyXG4gICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTtcclxuICAgICAgICAvL3BhZGRpbmc6IDMwcHggMjBweDsgXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2IoNDksIDUwLCA1MSkscmdiYSgxMzMsIDEzMSwgMTM0LCAwLjY4NSkscmdiKDc4LCA3MCwgMTA5KSwpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBcclxufVxyXG4gICAgLmxheW91dHtcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7XHJcbiAgICAgICAgLy9wYWRkaW5nOiAzMHB4IDIwcHg7IFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxNywgMTcpOyBcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTVweDsgXHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgLmhyZWZcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6bm9uZTtcclxuICAgIH1cclxuICAgIC5mb290ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogNSU7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChDOlxccHJvamVjdFxcb3JpZW50XFxzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YWxsLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5sYXlvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMzIwcHg7XG4gIC8qYmFja2dyb3VuZDp3aGl0ZTtcbiAgcGFkZGluZzogMzBweCAyMHB4OyBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9yZ290IHtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGYxZjE7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzEzMjMzLCBibGFjaywgIzRlNDY2ZCk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5saXN0IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zdHlsZTogYm9sZDtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTcsIDE3KTsgXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgIHBhZGRpbmc6IDZweCAxNXB4OyBcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxuICAgbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICB3aWR0aDogOTAlO1xuICBib3R0b206IDMwcHg7XG59XG5cbi5ocmVmIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChDOlxccHJvamVjdFxcb3JpZW50XFxzcmNcXGFzc2V0c1xcaW1hZ2VzXFx3YWxsLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5mb3Jnb3Qge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAxMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzEzMjMzLCByZ2JhKDEzMywgMTMxLCAxMzQsIDAuNjg1KSwgIzRlNDY2ZCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5sYXlvdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXN0eWxlOiBib2xkO1xuICB9XG5cbiAgLnRleHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxNywgMTcpOyBcbiAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgcGFkZGluZzogNnB4IDE1cHg7IFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYnRuIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG5cbiAgLmhyZWYge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNSU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let LoginPage = class LoginPage {
    constructor(facebook, fireauth, router, toastController) {
        this.facebook = facebook;
        this.fireauth = fireauth;
        this.router = router;
        this.toastController = toastController;
        this.title = "ORIENTING";
        this.error = '';
        this.pop = false;
    }
    google() {
        alert("Hello! I am an alert box!!");
    }
    loginWithFB() {
        this.facebook.login(['email', 'public_profile']).then((response) => {
            this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        });
    }
    login() {
        this.fireauth.auth.signInWithEmailAndPassword(this.username, this.password)
            .then(res => {
            if (res.user) {
                console.log(res.user);
                this.router.navigate(['/profiledata']);
            }
        })
            .catch(err => {
            console.log(`login failed ${err}`);
            this.error = err.message;
            alert(' user name or password is invalid please try again ');
        });
        this.username = "";
        this.password = "";
    }
    popup() {
        this.pop = true;
    }
    popupcl() {
        this.pop = false;
    }
    recover() {
        console.log(this.email);
        this.fireauth.auth.sendPasswordResetEmail(this.email)
            .then(data => {
            console.log(data);
            this.presentToast('Password reset email sent', false, 'bottom', 1000);
            this.router.navigateByUrl('/login');
        })
            .catch(err => {
            console.log(` failed ${err}`);
            this.error = err.message;
        });
    }
    presentToast(message, show_button, position, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                showCloseButton: show_button,
                position: position,
                duration: duration
            });
            toast.present();
        });
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map