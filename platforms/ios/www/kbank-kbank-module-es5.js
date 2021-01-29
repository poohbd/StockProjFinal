(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kbank-kbank-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/kbank/kbank.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kbank/kbank.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppKbankKbankPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"select\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>KBANK</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"assets/img/kbank.png\"/>\n    <ion-card-content>\n      <ion-card-title>\n        Kasikornbank\n      </ion-card-title>\n      <p>\n        often stylised as KBank and formerly known as the Thai Farmers Bank is a banking group in Thailand.\n         KBank was established on 8 June 1945 by Choti Lamsam, with registered capital of five million baht. \n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-input placeholder=\"DD/M/YYYY\" [(ngModel)]=\"date\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"showStock(date)\" expand=\"block\">Show Stock Record</ion-button>\n  <div *ngIf='stock$ | async as s'>\n    <ion-card>\n      <h1>Date:{{s.data.Date}}</h1>\n      <br/>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AveragePrice:</b>{{s.data.Average}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMVolume:</b>{{s.data.AOMVolume}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMValue:</b>{{s.data.AomValue}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>MarketCap:</b>{{s.data.MarketCap}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/E:</b>{{s.data.PE}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/BV:</b>{{s.data.PBV}}</h3>\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/kbank/kbank-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/kbank/kbank-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: KBANKPageRoutingModule */

    /***/
    function srcAppKbankKbankRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KBANKPageRoutingModule", function () {
        return KBANKPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _kbank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./kbank.page */
      "./src/app/kbank/kbank.page.ts");

      var routes = [{
        path: '',
        component: _kbank_page__WEBPACK_IMPORTED_MODULE_3__["KBANKPage"]
      }];

      var KBANKPageRoutingModule = function KBANKPageRoutingModule() {
        _classCallCheck(this, KBANKPageRoutingModule);
      };

      KBANKPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KBANKPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/kbank/kbank.module.ts":
    /*!***************************************!*\
      !*** ./src/app/kbank/kbank.module.ts ***!
      \***************************************/

    /*! exports provided: KBANKPageModule */

    /***/
    function srcAppKbankKbankModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KBANKPageModule", function () {
        return KBANKPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _kbank_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kbank-routing.module */
      "./src/app/kbank/kbank-routing.module.ts");
      /* harmony import */


      var _kbank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./kbank.page */
      "./src/app/kbank/kbank.page.ts");

      var KBANKPageModule = function KBANKPageModule() {
        _classCallCheck(this, KBANKPageModule);
      };

      KBANKPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kbank_routing_module__WEBPACK_IMPORTED_MODULE_5__["KBANKPageRoutingModule"]],
        declarations: [_kbank_page__WEBPACK_IMPORTED_MODULE_6__["KBANKPage"]]
      })], KBANKPageModule);
      /***/
    },

    /***/
    "./src/app/kbank/kbank.page.scss":
    /*!***************************************!*\
      !*** ./src/app/kbank/kbank.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppKbankKbankPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tiYW5rL2tiYW5rLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/kbank/kbank.page.ts":
    /*!*************************************!*\
      !*** ./src/app/kbank/kbank.page.ts ***!
      \*************************************/

    /*! exports provided: KBANKPage */

    /***/
    function srcAppKbankKbankPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KBANKPage", function () {
        return KBANKPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./src/app/data-provider.service */
      "./src/app/data-provider.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var KBANKPage = /*#__PURE__*/function () {
        function KBANKPage(dataProvider, navCtrl) {
          _classCallCheck(this, KBANKPage);

          this.dataProvider = dataProvider;
          this.navCtrl = navCtrl;
          console.log('Start');
        }

        _createClass(KBANKPage, [{
          key: "showStock",
          value: function showStock(date) {
            console.log(date);
            this.stock$ = this.dataProvider.getStock("kbank", date);
          }
        }]);

        return KBANKPage;
      }();

      KBANKPage.ctorParameters = function () {
        return [{
          type: _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      KBANKPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kbank',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./kbank.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/kbank/kbank.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./kbank.page.scss */
        "./src/app/kbank/kbank.page.scss"))["default"]]
      })], KBANKPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=kbank-kbank-module-es5.js.map