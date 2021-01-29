(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content color='primary'>\n  <div class=\"ion-padding\" *ngIf=\"isLoggedIn === true\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Welcome, {{users.name}}</ion-card-subtitle>\n        <ion-card-title>{{users.email}}</ion-card-title>\n      </ion-card-header>\n      <img src=\"{{users.picture.data.url}}\" width=\"100\" alt=\"{{users.name}}\" />\n      <ion-card-content>\n        <p>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"logout()\">\n            Logout\n            <ion-icon name=\"log-out\"></ion-icon>\n          </ion-button>\n        </p>\n        <p>\n          <ion-button class=\"nav-button\" expand=\"full\" [routerLink]=\"['/tab/select']\" (click)=\"pushInfo(users.id,users.name,users.email)\">\n            Start!\n          </ion-button>\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngIf=\"isLoggedIn === false\">\n    <ion-row>\n      <ion-col>\n        <br><br>\n        <h1 class=\"description\">Stocker</h1>\n        <h2 style=\"text-align: center;\">\n          <img width=\"120\" height=\"120\" src=\"assets/img/growth.png\"/>\n        </h2>\n        <p class=\"description\">This app helps you view the record of stock.</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"log-in-button\" expand=\"block\" (click)=\"fbLogin()\">\n          <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n          Sign in with Facebook\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.home-content {\n  background-color: #3880ff;\n  height: 100%;\n}\n\n.logo {\n  color: white;\n  font-size: 64px;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n}\n\n.description {\n  color: white;\n  font-size: 22px;\n  text-align: center;\n}\n\n.log-in-button {\n  margin-top: 40px;\n  font-weight: bold;\n  --background: white;\n  --color: #3880ff;\n}\n\n.nav-button {\n  --background: #48C9B0 ;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ob21lLWNvbnRlbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2ctaW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6ICMzODgwZmY7XG59XG4ubmF2LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzQ4QzlCMCAgO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _Users_poohbd_Desktop_StockProj_src_app_user_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./src/app/user-provider.service */
      "./src/app/user-provider.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(fb, router, userProvider) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.fb = fb;
          this.router = router;
          this.userProvider = userProvider;
          this.sampledata = false;
          this.isLoggedIn = false;
          this.users = {
            id: '',
            name: '',
            email: '',
            picture: {
              data: {
                url: ''
              }
            }
          };
          fb.getLoginStatus().then(function (res) {
            console.log(res.status);

            if (res.status === 'connect') {
              _this.isLoggedIn = true;
            } else {
              _this.isLoggedIn = false;
            }
          })["catch"](function (e) {
            return console.log(e);
          });
        }

        _createClass(HomePage, [{
          key: "fbLogin",
          value: function fbLogin() {
            var _this2 = this;

            this.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
              if (res.status === 'connected') {
                _this2.isLoggedIn = true;

                _this2.getUserDetail(res.authResponse.userID);
              } else {
                _this2.isLoggedIn = false;
              }
            })["catch"](function (e) {
              return console.log('Error logging into Facebook', e);
            });
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail(userid) {
            var _this3 = this;

            this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile']).then(function (res) {
              console.log(res);
              _this3.users = res;
            })["catch"](function (e) {
              console.log(e);
            });
            return this.users;
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this4 = this;

            this.fb.logout().then(function (res) {
              return _this4.isLoggedIn = false;
            })["catch"](function (e) {
              return console.log('Error logout from Facebook', e);
            });
          }
        }, {
          key: "pushInfo",
          value: function pushInfo(id, name, email) {
            console.log(id, name, email);
            this.userProvider.pushData(id, name, email);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _Users_poohbd_Desktop_StockProj_src_app_user_provider_service__WEBPACK_IMPORTED_MODULE_4__["UserProvider"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/user-provider.service.ts":
    /*!******************************************!*\
      !*** ./src/app/user-provider.service.ts ***!
      \******************************************/

    /*! exports provided: UserProvider */

    /***/
    function srcAppUserProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProvider", function () {
        return UserProvider;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var UserProvider = /*#__PURE__*/function () {
        function UserProvider(http) {
          _classCallCheck(this, UserProvider);

          this.http = http;
          this.dbURL = "http://1becd1beed38.ngrok.io";
        }

        _createClass(UserProvider, [{
          key: "pushData",
          value: function pushData(id, name, email) {
            var request = this.http.post(this.dbURL + "/insert", {
              "id": id,
              "name": name,
              "e-mail": email
            });
            request.subscribe(function (data) {
              console.log(data);
            });
          }
        }]);

        return UserProvider;
      }();

      UserProvider.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UserProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserProvider);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map