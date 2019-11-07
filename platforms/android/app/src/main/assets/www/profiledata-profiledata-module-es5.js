(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profiledata-profiledata-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profiledata/profiledata.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profiledata/profiledata.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Let's Customize Your Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"main\">\n\n  <div class=\"roll\" *ngIf=\"roll\">\n\n      <br>\n      <ion-text >\n        &nbsp;<h1>\n          Whata are the roles  you play ?\n          </h1>\n        </ion-text>\n      <ion-list>\n        <ion-radio-group [(ngModel)]=\"radioval\">\n          <ion-list-header>\n            <h2>ROll</h2>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>Student</ion-label>\n            <ion-radio slot=\"end\" value=\"Student\" checked></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Professor/Teacher</ion-label>\n            <ion-radio slot=\"end\" value=\"Professor/Teacher\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Mentor</ion-label>\n            <ion-radio slot=\"end\" value=\"Mentor\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>Working professional</ion-label>\n              <ion-radio slot=\"end\" value=\"Working professional\"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Entrepuner</ion-label>\n                <ion-radio slot=\"end\" value=\"Entrepuner\"></ion-radio>\n              </ion-item>\n        </ion-radio-group >\n      </ion-list>\n      \n      <ion-button (click)=\"radio()\" class=\"next\" color=\"medium\">next </ion-button>\n      <ion-button (click)=\"workplace()\" class=\"skip\" color=\"medium\">Skip</ion-button>\n\n  </div>\n\n\n  <div class=\"work\" *ngIf=\"work\">\n    &nbsp;<h1>Your workplace</h1>\n<ion-list>\n      <ion-item>\n        <ion-label>School/College :</ion-label>\n        <ion-select placeholder=\"Select One\">\n            <ion-select-option value=\"school\">School</ion-select-option>\n            <ion-select-option value=\"college\">Collgee</ion-select-option>\n          </ion-select>\n        </ion-item>\n      <ion-item>\n      <ion-label>Course of study</ion-label>\n      <ion-select placeholder=\"Select One\">\n          \n        </ion-select>\n      </ion-item>\n     \n      <ion-item>\n        <ion-label>Year of (expected) passout :</ion-label>\n        <ion-datetime  placeholder=\"passout year\" displayFormat=\"YYYY\" min=\"1981\" max=\"2020\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>City</ion-label>\n          <ion-select placeholder=\"Select One\">\n              <ion-select-option value=\"school\">Bangalore</ion-select-option>\n              <ion-select-option value=\"college\">Tamil Nadu</ion-select-option>\n            </ion-select>\n        </ion-item>\n  </ion-list>\n\n     <ion-button  class=\"next\" color=\"medium\">next </ion-button>\n      <ion-button (click)=\"mobilepage()\" class=\"skip\" color=\"medium\">Skip</ion-button>\n  </div>\n\n<div class=\"mobile\" *ngIf=\"mobile\">\n  &nbsp;<h2>Do you wish to be informed about things related to you on mobile</h2>\n\n     &nbsp; <ion-button (click)=\"popopen()\" >yes</ion-button>\n      <ion-button>No </ion-button>\n      <div class=\"pop\" *ngIf=\"pop\">\n<ion-list>\n  <ion-item>\n    <ion-input type=\"date\" placeholder=\"Enter your Mobile Number\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-button>Generate OTP</ion-button>\n  </ion-item>\n  <ion-item>\n      <ion-input type=\"number\" placeholder=\"Enter OTP\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-button>Verify OTP</ion-button>\n  </ion-item>\n</ion-list>\n\n      </div>\n      <ion-button  class=\"next\" color=\"medium\">next </ion-button>\n      <ion-button (click)=\"otheropen()\" class=\"skip\" color=\"medium\">Skip</ion-button>\n</div>\n\n<div class=\"other\" *ngIf=\"other\">\n  &nbsp;<h2>Other optional details</h2><br>\n    <ion-list>\n        <ion-item>\n          <ion-label>Date Of Birth : </ion-label><br>\n          <ion-input type=\"date\" placeholder=\"DOB\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type=\"string\" placeholder=\"Facebook profile link\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type=\"string\" placeholder=\"LinkedIn profile link\"></ion-input>\n        </ion-item>\n     </ion-list>\n      <ion-button  class=\"next\" color=\"medium\">Complete Setup </ion-button>\n      <ion-button (click)=\"otheropen()\" class=\"skip\" color=\"medium\">Skip</ion-button>\n</div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profiledata/profiledata.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profiledata/profiledata.module.ts ***!
  \***************************************************/
/*! exports provided: ProfiledataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiledataPageModule", function() { return ProfiledataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profiledata_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profiledata.page */ "./src/app/profiledata/profiledata.page.ts");







var routes = [
    {
        path: '',
        component: _profiledata_page__WEBPACK_IMPORTED_MODULE_6__["ProfiledataPage"]
    }
];
var ProfiledataPageModule = /** @class */ (function () {
    function ProfiledataPageModule() {
    }
    ProfiledataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profiledata_page__WEBPACK_IMPORTED_MODULE_6__["ProfiledataPage"]]
        })
    ], ProfiledataPageModule);
    return ProfiledataPageModule;
}());



/***/ }),

/***/ "./src/app/profiledata/profiledata.page.scss":
/*!***************************************************!*\
  !*** ./src/app/profiledata/profiledata.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 100%;\n  height: 100%;\n  align-content: center;\n}\n\n.roll {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #6c6d6e, rgba(235, 232, 236, 0.685));\n  position: fixed;\n}\n\n.work {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #6c6d6e, rgba(235, 232, 236, 0.685));\n  position: fixed;\n}\n\n.mobile {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #6c6d6e, rgba(235, 232, 236, 0.685));\n  position: fixed;\n  align-content: center;\n}\n\n.other {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(45deg, #6c6d6e, rgba(235, 232, 236, 0.685));\n  position: fixed;\n}\n\nion-item {\n  --ion-background-color:none;\n}\n\nion-list {\n  --ion-background-color:none;\n}\n\n.next {\n  bottom: 30px;\n  left: 5%;\n  position: fixed;\n}\n\n.skip {\n  bottom: 30px;\n  right: 5%;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZWRhdGEvQzpcXHByb2plY3RcXG9yaWVudC9zcmNcXGFwcFxccHJvZmlsZWRhdGFcXHByb2ZpbGVkYXRhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZWRhdGEvcHJvZmlsZWRhdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1RUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUVBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVFQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QUREQTtFQUNJLDJCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNLSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZWRhdGEvcHJvZmlsZWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucm9sbHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2IoMTA4LCAxMDksIDExMCkscmdiYSgyMzUsIDIzMiwgMjM2LCAwLjY4NSkpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIFxyXG59XHJcblxyXG4ud29ya3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2IoMTA4LCAxMDksIDExMCkscmdiYSgyMzUsIDIzMiwgMjM2LCAwLjY4NSkpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5tb2JpbGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDEwOCwgMTA5LCAxMTApLHJnYmEoMjM1LCAyMzIsIDIzNiwgMC42ODUpKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ub3RoZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiKDEwOCwgMTA5LCAxMTApLHJnYmEoMjM1LCAyMzIsIDIzNiwgMC42ODUpKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG59XHJcbi5uZXh0e1xyXG4gICAgYm90dG9tOjMwcHg7XHJcbiAgICBsZWZ0OjUlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5cclxuLnNraXB7XHJcbiAgICBib3R0b206MzBweDtcclxuICAgIHJpZ2h0OjUlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59IiwiLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb2xsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNmM2ZDZlLCByZ2JhKDIzNSwgMjMyLCAyMzYsIDAuNjg1KSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLndvcmsge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2YzZkNmUsIHJnYmEoMjM1LCAyMzIsIDIzNiwgMC42ODUpKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubW9iaWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNmM2ZDZlLCByZ2JhKDIzNSwgMjMyLCAyMzYsIDAuNjg1KSk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ub3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2YzZkNmUsIHJnYmEoMjM1LCAyMzIsIDIzNiwgMC42ODUpKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6bm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XG59XG5cbi5uZXh0IHtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiA1JTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uc2tpcCB7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDUlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/profiledata/profiledata.page.ts":
/*!*************************************************!*\
  !*** ./src/app/profiledata/profiledata.page.ts ***!
  \*************************************************/
/*! exports provided: ProfiledataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiledataPage", function() { return ProfiledataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfiledataPage = /** @class */ (function () {
    function ProfiledataPage() {
        this.mobile = false;
        this.work = false;
        this.roll = true;
        this.pop = false;
        this.other = false;
    }
    ProfiledataPage.prototype.workplace = function () {
        this.work = true;
        this.roll = false;
    };
    ProfiledataPage.prototype.mobilepage = function () {
        this.work = false;
        this.mobile = true;
    };
    ProfiledataPage.prototype.popopen = function () {
        this.pop = true;
    };
    ProfiledataPage.prototype.otheropen = function () {
        this.other = true;
        this.mobile = false;
    };
    ProfiledataPage.prototype.radio = function () {
        console.log(this.radioval);
    };
    ProfiledataPage.prototype.ngOnInit = function () {
    };
    ProfiledataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiledata',
            template: __webpack_require__(/*! raw-loader!./profiledata.page.html */ "./node_modules/raw-loader/index.js!./src/app/profiledata/profiledata.page.html"),
            styles: [__webpack_require__(/*! ./profiledata.page.scss */ "./src/app/profiledata/profiledata.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfiledataPage);
    return ProfiledataPage;
}());



/***/ })

}]);
//# sourceMappingURL=profiledata-profiledata-module-es5.js.map