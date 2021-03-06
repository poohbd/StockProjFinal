(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graph-graph-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGraphGraphPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Price Analysis</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    <ion-card-title>ADVANC\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphadvanc\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>AOT\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphaot\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>BEM\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphbem\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>BTS\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphbts\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>CPN\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphcpn\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>KBANK\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphkbank\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>PTT\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphptt\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>PTTEP\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphpttep\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>SCB\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphscb\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n  <ion-card-content>\n    <ion-card-title>SCC\n    </ion-card-title>\n    <img src=\"http://1becd1beed38.ngrok.io/graphscc\" alt=\"ADVANC Price\"/>\n  </ion-card-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/graph-provider.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/graph-provider.service.ts ***!
      \*******************************************/

    /*! exports provided: GraphProvider */

    /***/
    function srcAppGraphProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphProvider", function () {
        return GraphProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GraphProvider = function GraphProvider() {
        _classCallCheck(this, GraphProvider);

        this.graphURL = "http://24acbc7fc4ca.ngrok.io/graph";
      };

      GraphProvider.ctorParameters = function () {
        return [];
      };

      GraphProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GraphProvider);
      /***/
    },

    /***/
    "./src/app/graph/graph-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/graph/graph-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: GraphPageRoutingModule */

    /***/
    function srcAppGraphGraphRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphPageRoutingModule", function () {
        return GraphPageRoutingModule;
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


      var _graph_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./graph.page */
      "./src/app/graph/graph.page.ts");

      var routes = [{
        path: '',
        component: _graph_page__WEBPACK_IMPORTED_MODULE_3__["GraphPage"]
      }];

      var GraphPageRoutingModule = function GraphPageRoutingModule() {
        _classCallCheck(this, GraphPageRoutingModule);
      };

      GraphPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GraphPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/graph/graph.module.ts":
    /*!***************************************!*\
      !*** ./src/app/graph/graph.module.ts ***!
      \***************************************/

    /*! exports provided: GraphPageModule */

    /***/
    function srcAppGraphGraphModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphPageModule", function () {
        return GraphPageModule;
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


      var _graph_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./graph-routing.module */
      "./src/app/graph/graph-routing.module.ts");
      /* harmony import */


      var _graph_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./graph.page */
      "./src/app/graph/graph.page.ts");

      var GraphPageModule = function GraphPageModule() {
        _classCallCheck(this, GraphPageModule);
      };

      GraphPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _graph_routing_module__WEBPACK_IMPORTED_MODULE_5__["GraphPageRoutingModule"]],
        declarations: [_graph_page__WEBPACK_IMPORTED_MODULE_6__["GraphPage"]]
      })], GraphPageModule);
      /***/
    },

    /***/
    "./src/app/graph/graph.page.scss":
    /*!***************************************!*\
      !*** ./src/app/graph/graph.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppGraphGraphPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/graph/graph.page.ts":
    /*!*************************************!*\
      !*** ./src/app/graph/graph.page.ts ***!
      \*************************************/

    /*! exports provided: GraphPage */

    /***/
    function srcAppGraphGraphPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphPage", function () {
        return GraphPage;
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


      var _Users_poohbd_Desktop_StockProj_src_app_graph_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./src/app/graph-provider.service */
      "./src/app/graph-provider.service.ts");

      var GraphPage = /*#__PURE__*/function () {
        function GraphPage(graphProvider) {
          _classCallCheck(this, GraphPage);

          this.graphProvider = graphProvider;
        }

        _createClass(GraphPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GraphPage;
      }();

      GraphPage.ctorParameters = function () {
        return [{
          type: _Users_poohbd_Desktop_StockProj_src_app_graph_provider_service__WEBPACK_IMPORTED_MODULE_2__["GraphProvider"]
        }];
      };

      GraphPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graph',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./graph.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/graph/graph.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./graph.page.scss */
        "./src/app/graph/graph.page.scss"))["default"]]
      })], GraphPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=graph-graph-module-es5.js.map