(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scb-scb-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/scb/scb.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scb/scb.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppScbScbPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"select\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>SCB</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"assets/img/scb.jpg\"/>\n    <ion-card-content>\n      <ion-card-title>\n        Siam Commercial Bank\n      </ion-card-title>\n      <p>\n        is a Thai bank that was founded on 30 January 1907. King Vajiralongkorn is the largest single shareholder, owning 23.35 percent of SCB shares.\n        SCB was founded as the \"Book Club\" on 4 October 1904 by Prince Jayanta Mongkol, a brother of King Chulalongkorn (Rama V), who was convinced that the time was ripe for Siam to have its own banking system to help foster the country's economic development,\n         rather than rely on foreign banks operating branches in the country. The name \"Book Club\" was chosen in an effort to keep the project sub rosa as it was something of an experiment. After the success of the \"Book Club\", King Chulalongkorn granted royal approval for it to officially operate as a commercial bank under the name \"The Siam Commercial Bank\" on 30 January 1907.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-input placeholder=\"DD/M/YYYY\" [(ngModel)]=\"date\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"showStock(date)\" expand=\"block\">Show Stock Record</ion-button>\n  <div *ngIf='stock$ | async as s'>\n    <ion-card>\n      <h1>Date:{{s.data.Date}}</h1>\n      <br/>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AveragePrice:</b>{{s.data.Average}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMVolume:</b>{{s.data.AOMVolume}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>AOMValue:</b>{{s.data.AomValue}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>MarketCap:</b>{{s.data.MarketCap}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/E:</b>{{s.data.PE}}</h3>\n      <h3>&nbsp;&nbsp;&nbsp;&nbsp;<b>P/BV:</b>{{s.data.PBV}}</h3>\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/scb/scb-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/scb/scb-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: SCBPageRoutingModule */

    /***/
    function srcAppScbScbRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCBPageRoutingModule", function () {
        return SCBPageRoutingModule;
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


      var _scb_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./scb.page */
      "./src/app/scb/scb.page.ts");

      var routes = [{
        path: '',
        component: _scb_page__WEBPACK_IMPORTED_MODULE_3__["SCBPage"]
      }];

      var SCBPageRoutingModule = function SCBPageRoutingModule() {
        _classCallCheck(this, SCBPageRoutingModule);
      };

      SCBPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SCBPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/scb/scb.module.ts":
    /*!***********************************!*\
      !*** ./src/app/scb/scb.module.ts ***!
      \***********************************/

    /*! exports provided: SCBPageModule */

    /***/
    function srcAppScbScbModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCBPageModule", function () {
        return SCBPageModule;
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


      var _scb_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scb-routing.module */
      "./src/app/scb/scb-routing.module.ts");
      /* harmony import */


      var _scb_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./scb.page */
      "./src/app/scb/scb.page.ts");

      var SCBPageModule = function SCBPageModule() {
        _classCallCheck(this, SCBPageModule);
      };

      SCBPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scb_routing_module__WEBPACK_IMPORTED_MODULE_5__["SCBPageRoutingModule"]],
        declarations: [_scb_page__WEBPACK_IMPORTED_MODULE_6__["SCBPage"]]
      })], SCBPageModule);
      /***/
    },

    /***/
    "./src/app/scb/scb.page.scss":
    /*!***********************************!*\
      !*** ./src/app/scb/scb.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppScbScbPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYi9zY2IucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/scb/scb.page.ts":
    /*!*********************************!*\
      !*** ./src/app/scb/scb.page.ts ***!
      \*********************************/

    /*! exports provided: SCBPage */

    /***/
    function srcAppScbScbPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SCBPage", function () {
        return SCBPage;
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

      var SCBPage = /*#__PURE__*/function () {
        function SCBPage(dataProvider, navCtrl) {
          _classCallCheck(this, SCBPage);

          this.dataProvider = dataProvider;
          this.navCtrl = navCtrl;
          console.log('Start');
        }

        _createClass(SCBPage, [{
          key: "showStock",
          value: function showStock(date) {
            console.log(date);
            this.stock$ = this.dataProvider.getStock("scb", date);
          }
        }]);

        return SCBPage;
      }();

      SCBPage.ctorParameters = function () {
        return [{
          type: _Users_poohbd_Desktop_StockProj_src_app_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["DataProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      SCBPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scb',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./scb.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/scb/scb.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./scb.page.scss */
        "./src/app/scb/scb.page.scss"))["default"]]
      })], SCBPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=scb-scb-module-es5.js.map