(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ptt-ptt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ptt/ptt.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ptt/ptt.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"select\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PTT</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"assets/img/ptt.png\"/>\n    <ion-card-content>\n      <ion-card-title>\n        PTT Public Company Limited\n      </ion-card-title>\n      <p>\n        is a Thai state-owned SET-listed oil and gas company. Formerly known as the Petroleum Authority of Thailand,\n         it owns extensive submarine gas pipelines in the Gulf of Thailand, a network of LPG terminals throughout the kingdom, and is involved in electricity generation,\n          petrochemical products, oil and gas exploration and production, and gasoline retailing businesses.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-input placeholder=\"DD/M/YYYY\" [(ngModel)]=\"date\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"showStock(date)\" expand=\"block\">Show Stock Record</ion-button>\n  <div *ngIf='stock$ | async as s'>\n    <ion-card>\n      <h1>Date:{{s.data.Date}}</h1>\n      <br/>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AveragePrice:</b>{{s.data.Average}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMVolume:</b>{{s.data.AOMVolume}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMValue:</b>{{s.data.AomValue}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>MarketCap:</b>{{s.data.MarketCap}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/E:</b>{{s.data.PE}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/BV:</b>{{s.data.PBV}}</h3>\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ptt/ptt-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ptt/ptt-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PTTPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTTPageRoutingModule", function() { return PTTPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ptt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ptt.page */ "./src/app/ptt/ptt.page.ts");




const routes = [
    {
        path: '',
        component: _ptt_page__WEBPACK_IMPORTED_MODULE_3__["PTTPage"]
    }
];
let PTTPageRoutingModule = class PTTPageRoutingModule {
};
PTTPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PTTPageRoutingModule);



/***/ }),

/***/ "./src/app/ptt/ptt.module.ts":
/*!***********************************!*\
  !*** ./src/app/ptt/ptt.module.ts ***!
  \***********************************/
/*! exports provided: PTTPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTTPageModule", function() { return PTTPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ptt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ptt-routing.module */ "./src/app/ptt/ptt-routing.module.ts");
/* harmony import */ var _ptt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ptt.page */ "./src/app/ptt/ptt.page.ts");







let PTTPageModule = class PTTPageModule {
};
PTTPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ptt_routing_module__WEBPACK_IMPORTED_MODULE_5__["PTTPageRoutingModule"]
        ],
        declarations: [_ptt_page__WEBPACK_IMPORTED_MODULE_6__["PTTPage"]]
    })
], PTTPageModule);



/***/ }),

/***/ "./src/app/ptt/ptt.page.scss":
/*!***********************************!*\
  !*** ./src/app/ptt/ptt.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0dC9wdHQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ptt/ptt.page.ts":
/*!*********************************!*\
  !*** ./src/app/ptt/ptt.page.ts ***!
  \*********************************/
/*! exports provided: PTTPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PTTPage", function() { return PTTPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/data-provider.service */ "./src/app/data-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PTTPage = class PTTPage {
    constructor(dataProvider, navCtrl) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        console.log('Start');
    }
    showStock(date) {
        console.log(date);
        this.stock$ = this.dataProvider.getStock("ptt", date);
    }
};
PTTPage.ctorParameters = () => [
    { type: _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
PTTPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ptt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ptt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ptt/ptt.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ptt.page.scss */ "./src/app/ptt/ptt.page.scss")).default]
    })
], PTTPage);



/***/ })

}]);
//# sourceMappingURL=ptt-ptt-module-es2015.js.map