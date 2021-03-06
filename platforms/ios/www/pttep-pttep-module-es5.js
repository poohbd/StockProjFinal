(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pttep-pttep-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pttep/pttep.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pttep/pttep.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPttepPttepPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"select\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PTTEP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"assets/img/pttep.jpg\"/>\n    <ion-card-content>\n      <ion-card-title>\n        PTT Exploration and Production\n      </ion-card-title>\n      <p>\n        is a national petroleum exploration and production company based in Thailand. It is a subsidiary of the state-owned PTT Public Company Limited. The company was founded on 20 June 1985.\n         PTTEP's core business is exploration and production of petroleum in Thailand and foreign countries. As of June 30, 2018, PTTEP Group had 40 petroleum exploration and production projects in 11 countries;\n          16 projects in Thailand, 15 projects in Southeast Asia, 5 projects in Americas, 3 projects in Africa and 1 project in Australia.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-input placeholder=\"DD/M/YYYY\" [(ngModel)]=\"date\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"showStock(date)\" expand=\"block\">Show Stock Record</ion-button>\n  <div *ngIf='stock$ | async as s'>\n    <ion-card>\n      <h1>Date:{{s.data.Date}}</h1>\n      <br/>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AveragePrice:</b>{{s.data.Average}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMVolume:</b>{{s.data.AOMVolume}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMValue:</b>{{s.data.AomValue}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>MarketCap:</b>{{s.data.MarketCap}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/E:</b>{{s.data.PE}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/BV:</b>{{s.data.PBV}}</h3>\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pttep/pttep-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pttep/pttep-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: PTTEPPageRoutingModule */

    /***/
    function srcAppPttepPttepRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PTTEPPageRoutingModule", function () {
        return PTTEPPageRoutingModule;
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


      var _pttep_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pttep.page */
      "./src/app/pttep/pttep.page.ts");

      var routes = [{
        path: '',
        component: _pttep_page__WEBPACK_IMPORTED_MODULE_3__["PTTEPPage"]
      }];

      var PTTEPPageRoutingModule = function PTTEPPageRoutingModule() {
        _classCallCheck(this, PTTEPPageRoutingModule);
      };

      PTTEPPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PTTEPPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pttep/pttep.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pttep/pttep.module.ts ***!
      \***************************************/

    /*! exports provided: PTTEPPageModule */

    /***/
    function srcAppPttepPttepModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PTTEPPageModule", function () {
        return PTTEPPageModule;
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


      var _pttep_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pttep-routing.module */
      "./src/app/pttep/pttep-routing.module.ts");
      /* harmony import */


      var _pttep_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pttep.page */
      "./src/app/pttep/pttep.page.ts");

      var PTTEPPageModule = function PTTEPPageModule() {
        _classCallCheck(this, PTTEPPageModule);
      };

      PTTEPPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pttep_routing_module__WEBPACK_IMPORTED_MODULE_5__["PTTEPPageRoutingModule"]],
        declarations: [_pttep_page__WEBPACK_IMPORTED_MODULE_6__["PTTEPPage"]]
      })], PTTEPPageModule);
      /***/
    },

    /***/
    "./src/app/pttep/pttep.page.scss":
    /*!***************************************!*\
      !*** ./src/app/pttep/pttep.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppPttepPttepPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B0dGVwL3B0dGVwLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pttep/pttep.page.ts":
    /*!*************************************!*\
      !*** ./src/app/pttep/pttep.page.ts ***!
      \*************************************/

    /*! exports provided: PTTEPPage */

    /***/
    function srcAppPttepPttepPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PTTEPPage", function () {
        return PTTEPPage;
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

      var PTTEPPage = /*#__PURE__*/function () {
        function PTTEPPage(dataProvider, navCtrl) {
          _classCallCheck(this, PTTEPPage);

          this.dataProvider = dataProvider;
          this.navCtrl = navCtrl;
          console.log('Start');
        }

        _createClass(PTTEPPage, [{
          key: "showStock",
          value: function showStock(date) {
            console.log(date);
            this.stock$ = this.dataProvider.getStock("pttep", date);
          }
        }]);

        return PTTEPPage;
      }();

      PTTEPPage.ctorParameters = function () {
        return [{
          type: _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      PTTEPPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pttep',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pttep.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pttep/pttep.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pttep.page.scss */
        "./src/app/pttep/pttep.page.scss"))["default"]]
      })], PTTEPPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pttep-pttep-module-es5.js.map