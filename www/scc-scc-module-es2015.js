(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scc-scc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scc/scc.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scc/scc.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"select\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>SCC</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"assets/img/scc.jpg\"/>\n    <ion-card-content>\n      <ion-card-title>\n        Siam Cement Group\n      </ion-card-title>\n      <p>\n        The Siam Cement Group Public Company Limited is the largest and oldest cement and building material company in Thailand and Southeast Asia. In 2016,\n         SCG was also ranked as the second largest company in Thailand and the 604th largest public company in the world by Forbes.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-input placeholder=\"DD/M/YYYY\" [(ngModel)]=\"date\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"showStock(date)\" expand=\"block\">Show Stock Record</ion-button>\n  <div *ngIf='stock$ | async as s'>\n    <ion-card>\n      <h1>Date:{{s.data.Date}}</h1>\n      <br/>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AveragePrice:</b>{{s.data.Average}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMVolume:</b>{{s.data.AOMVolume}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMValue:</b>{{s.data.AomValue}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>MarketCap:</b>{{s.data.MarketCap}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/E:</b>{{s.data.PE}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/BV:</b>{{s.data.PBV}}</h3>\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/scc/scc-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/scc/scc-routing.module.ts ***!
  \*******************************************/
/*! exports provided: SCCPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCCPageRoutingModule", function() { return SCCPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scc.page */ "./src/app/scc/scc.page.ts");




const routes = [
    {
        path: '',
        component: _scc_page__WEBPACK_IMPORTED_MODULE_3__["SCCPage"]
    }
];
let SCCPageRoutingModule = class SCCPageRoutingModule {
};
SCCPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SCCPageRoutingModule);



/***/ }),

/***/ "./src/app/scc/scc.module.ts":
/*!***********************************!*\
  !*** ./src/app/scc/scc.module.ts ***!
  \***********************************/
/*! exports provided: SCCPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCCPageModule", function() { return SCCPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _scc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scc-routing.module */ "./src/app/scc/scc-routing.module.ts");
/* harmony import */ var _scc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scc.page */ "./src/app/scc/scc.page.ts");







let SCCPageModule = class SCCPageModule {
};
SCCPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scc_routing_module__WEBPACK_IMPORTED_MODULE_5__["SCCPageRoutingModule"]
        ],
        declarations: [_scc_page__WEBPACK_IMPORTED_MODULE_6__["SCCPage"]]
    })
], SCCPageModule);



/***/ }),

/***/ "./src/app/scc/scc.page.scss":
/*!***********************************!*\
  !*** ./src/app/scc/scc.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYy9zY2MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/scc/scc.page.ts":
/*!*********************************!*\
  !*** ./src/app/scc/scc.page.ts ***!
  \*********************************/
/*! exports provided: SCCPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCCPage", function() { return SCCPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/data-provider.service */ "./src/app/data-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let SCCPage = class SCCPage {
    constructor(dataProvider, navCtrl) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        console.log('Start');
    }
    showStock(date) {
        console.log(date);
        this.stock$ = this.dataProvider.getStock("scc", date);
    }
};
SCCPage.ctorParameters = () => [
    { type: _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
SCCPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scc/scc.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./scc.page.scss */ "./src/app/scc/scc.page.scss")).default]
    })
], SCCPage);



/***/ })

}]);
//# sourceMappingURL=scc-scc-module-es2015.js.map