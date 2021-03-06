(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bts-bts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bts/bts.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bts/bts.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBtsBtsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"select\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>BTS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"assets/img/bts.jpg\"/>\n    <ion-card-content>\n      <ion-card-title>\n        BTS Group Holdings Public Company Limited\n      </ion-card-title>\n      <p>\n        formerly known as Tanayong Public Company Limited, is a public company in Thailand.\n        It is the majority share holder of \"Bangkok Mass Transit System PCL (BTSC)\", the operator of the BTS Skytrain and the Bangkok BRT.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-input placeholder=\"DD/M/YYYY\" [(ngModel)]=\"date\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"showStock(date)\" expand=\"block\">Show Stock Record</ion-button>\n  <div *ngIf='stock$ | async as s'>\n    <ion-card>\n      <h1>Date:{{s.data.Date}}</h1>\n      <br/>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AveragePrice:</b>{{s.data.Average}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMVolume:</b>{{s.data.AOMVolume}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMValue:</b>{{s.data.AomValue}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>MarketCap:</b>{{s.data.MarketCap}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/E:</b>{{s.data.PE}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/BV:</b>{{s.data.PBV}}</h3>\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/bts/bts-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/bts/bts-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: BTSPageRoutingModule */

    /***/
    function srcAppBtsBtsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BTSPageRoutingModule", function () {
        return BTSPageRoutingModule;
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


      var _bts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bts.page */
      "./src/app/bts/bts.page.ts");

      var routes = [{
        path: '',
        component: _bts_page__WEBPACK_IMPORTED_MODULE_3__["BTSPage"]
      }];

      var BTSPageRoutingModule = function BTSPageRoutingModule() {
        _classCallCheck(this, BTSPageRoutingModule);
      };

      BTSPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BTSPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/bts/bts.module.ts":
    /*!***********************************!*\
      !*** ./src/app/bts/bts.module.ts ***!
      \***********************************/

    /*! exports provided: BTSPageModule */

    /***/
    function srcAppBtsBtsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BTSPageModule", function () {
        return BTSPageModule;
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


      var _bts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bts-routing.module */
      "./src/app/bts/bts-routing.module.ts");
      /* harmony import */


      var _bts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bts.page */
      "./src/app/bts/bts.page.ts");

      var BTSPageModule = function BTSPageModule() {
        _classCallCheck(this, BTSPageModule);
      };

      BTSPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bts_routing_module__WEBPACK_IMPORTED_MODULE_5__["BTSPageRoutingModule"]],
        declarations: [_bts_page__WEBPACK_IMPORTED_MODULE_6__["BTSPage"]]
      })], BTSPageModule);
      /***/
    },

    /***/
    "./src/app/bts/bts.page.scss":
    /*!***********************************!*\
      !*** ./src/app/bts/bts.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppBtsBtsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J0cy9idHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/bts/bts.page.ts":
    /*!*********************************!*\
      !*** ./src/app/bts/bts.page.ts ***!
      \*********************************/

    /*! exports provided: BTSPage */

    /***/
    function srcAppBtsBtsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BTSPage", function () {
        return BTSPage;
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

      var BTSPage = /*#__PURE__*/function () {
        function BTSPage(dataProvider, navCtrl) {
          _classCallCheck(this, BTSPage);

          this.dataProvider = dataProvider;
          this.navCtrl = navCtrl;
          console.log('Start');
        }

        _createClass(BTSPage, [{
          key: "showStock",
          value: function showStock(date) {
            console.log(date);
            this.stock$ = this.dataProvider.getStock("bts", date);
          }
        }]);

        return BTSPage;
      }();

      BTSPage.ctorParameters = function () {
        return [{
          type: _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      BTSPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bts/bts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bts.page.scss */
        "./src/app/bts/bts.page.scss"))["default"]]
      })], BTSPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bts-bts-module-es5.js.map