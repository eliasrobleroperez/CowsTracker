function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/analisis/analisis.component.ts":
  /*!************************************************!*\
    !*** ./src/app/analisis/analisis.component.ts ***!
    \************************************************/

  /*! exports provided: AnalisisComponent */

  /***/
  function srcAppAnalisisAnalisisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalisisComponent", function () {
      return AnalisisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1, a2) {
      return ["/mapa", a1, a2];
    };

    function AnalisisComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ver en mapa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ubicacion_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ubicacion_r10.numero);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, ubicacion_r10.fecha, "medium"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ubicacion_r10.latitud);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ubicacion_r10.longitud);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ubicacion_r10.latitud, ubicacion_r10.longitud));
      }
    }

    var AnalisisComponent =
    /*#__PURE__*/
    function () {
      function AnalisisComponent(crudService) {
        _classCallCheck(this, AnalisisComponent);

        this.crudService = crudService;
        this.numero = 1;
      }

      _createClass(AnalisisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.obtenerUbicacion();
        }
      }, {
        key: "obtenerUbicacion",
        value: function obtenerUbicacion() {
          var _this = this;

          this.crudService.get_Ubicaciones().subscribe(function (data) {
            _this.Ubicaciones = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                numero: _this.numero++,
                latitud: e.payload.doc.data()['latitud'],
                longitud: e.payload.doc.data()['longitud'],
                fecha: e.payload.doc.data()['fecha']
              };
            });
          });
        }
      }]);

      return AnalisisComponent;
    }();

    AnalisisComponent.ɵfac = function AnalisisComponent_Factory(t) {
      return new (t || AnalisisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]));
    };

    AnalisisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalisisComponent,
      selectors: [["app-analisis"]],
      decls: 29,
      vars: 1,
      consts: [[1, "container", "col-md-10"], [1, "text-left"], [1, "text-center"], [1, "row"], [1, "table-responsive"], [1, "table", "table-striped", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "routerLink"]],
      template: function AnalisisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Historial de ubicaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A continuaci\xF3n se muestra el historial de ubicaciones en que el ganado se ha alejado del margen permitido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Fecha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Latitud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Longitud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Visualizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AnalisisComponent_tr_28_Template, 13, 11, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Ubicaciones);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpc2lzL2FuYWxpc2lzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalisisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analisis',
          templateUrl: './analisis.component.html',
          styleUrls: ['./analisis.component.css']
        }]
      }], function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component */
    "./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts");
    /* harmony import */


    var _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./colocar-marcadores/colocar-marcadores.component */
    "./src/app/colocar-marcadores/colocar-marcadores.component.ts");
    /* harmony import */


    var _analisis_analisis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./analisis/analisis.component */
    "./src/app/analisis/analisis.component.ts");
    /* harmony import */


    var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mapa/mapa.component */
    "./src/app/mapa/mapa.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/visualizar',
      pathMatch: 'full'
    }, {
      path: 'visualizar',
      component: _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_2__["VisualizarUbicacionMapaComponent"]
    }, {
      path: 'insertar',
      component: _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_3__["ColocarMarcadoresComponent"]
    }, {
      path: 'datosAlmacenados',
      component: _analisis_analisis_component__WEBPACK_IMPORTED_MODULE_4__["AnalisisComponent"]
    }, {
      path: 'mapa/:latitud/:longitud',
      component: _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["MapaComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(crudService) {
      _classCallCheck(this, AppComponent);

      this.crudService = crudService;
      this.title = 'rastreadorW';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 18,
      vars: 0,
      consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "navbar-brand", "mb-0", "h1"], [1, "form-inline"], ["href", "/visualizar", 1, "nav-link"], [1, "sr-only"], ["href", "/insertar", 1, "nav-link"], ["href", "/datosAlmacenados", 1, "nav-link"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ChemTracker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Ver ubicaci\xF3n actual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Agregar marcador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Datos Almacenados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["a[_ngcontent-%COMP%]{\r\n    color: rgb(241, 237, 237);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgMjM3LCAyMzcpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @asymmetrik/ngx-leaflet */
    "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! pubnub-angular2 */
    "./node_modules/pubnub-angular2/lib/pubnub-angular4.js");
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component */
    "./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./colocar-marcadores/colocar-marcadores.component */
    "./src/app/colocar-marcadores/colocar-marcadores.component.ts");
    /* harmony import */


    var _analisis_analisis_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./analisis/analisis.component */
    "./src/app/analisis/analisis.component.ts");
    /* harmony import */


    var _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./mapa/mapa.component */
    "./src/app/mapa/mapa.component.ts"); //service
    //Leaflet
    //Pubnub


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_service_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"], pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__["PubNubAngular"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_11__["VisualizarUbicacionMapaComponent"], _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_13__["ColocarMarcadoresComponent"], _analisis_analisis_component__WEBPACK_IMPORTED_MODULE_14__["AnalisisComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_15__["MapaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_11__["VisualizarUbicacionMapaComponent"], _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_13__["ColocarMarcadoresComponent"], _analisis_analisis_component__WEBPACK_IMPORTED_MODULE_14__["AnalisisComponent"], _mapa_mapa_component__WEBPACK_IMPORTED_MODULE_15__["MapaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]],
          providers: [_service_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"], pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__["PubNubAngular"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/colocar-marcadores/colocar-marcadores.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/colocar-marcadores/colocar-marcadores.component.ts ***!
    \********************************************************************/

  /*! exports provided: ColocarMarcadoresComponent */

  /***/
  function srcAppColocarMarcadoresColocarMarcadoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColocarMarcadoresComponent", function () {
      return ColocarMarcadoresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ColocarMarcadoresComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Presione dos veces en el mapa para insertar un marcador e ingrese la distancia m\xE1xima (en m\xE9tros) del radio que permitir\xE1 alejarse el ganado. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColocarMarcadoresComponent_div_9_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.distancia = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColocarMarcadoresComponent_div_9_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.crearMarcador();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Aceptar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.distancia);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.distancia || !ctx_r0.isMarcadorColocadoMapa);
      }
    }

    function ColocarMarcadoresComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Presione el bot\xF3n para eliminar el marcador actual e insertar uno nuevo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColocarMarcadoresComponent_ng_template_10_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.eliminarMarcador();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Distancia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColocarMarcadoresComponent_ng_template_10_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.distancia = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.distancia);
      }
    }

    var ColocarMarcadoresComponent =
    /*#__PURE__*/
    function () {
      function ColocarMarcadoresComponent(crudService, router) {
        _classCallCheck(this, ColocarMarcadoresComponent);

        this.crudService = crudService;
        this.router = router;
        this.marcador = null;
        this.isMarcadorGuardadoBD = false;
        this.permitirColocarMarcador = true;
        this.isMarcadorColocadoMapa = false;
        this.urlAPIMapa = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
        this.iconoMarcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
          iconSize: [60, 60],
          iconAnchor: [30, 60],
          iconUrl: 'assets/marcador.png'
        });
      }

      _createClass(ColocarMarcadoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.inicializarMapa();
          this.agregarQuitarMarcadorClick();
          this.obtenerMarcador();
        }
      }, {
        key: "inicializarMapa",
        value: function inicializarMapa() {
          this.mapa = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('mapa').setView([16.752769803087457, -93.11428070068361], 13);
          leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"](this.urlAPIMapa, {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(this.mapa);
          this.mapa.doubleClickZoom.disable();
        }
      }, {
        key: "obtenerMarcador",
        value: function obtenerMarcador() {
          var _this2 = this;

          this.crudService.get_Marcador().subscribe(function (data) {
            _this2.Marcador = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                latitud: e.payload.doc.data()['latitud'],
                longitud: e.payload.doc.data()['longitud'],
                distancia: e.payload.doc.data()['distancia']
              };
            });

            if (_this2.Marcador.length == 1) {
              _this2.marcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([_this2.Marcador[0].latitud, _this2.Marcador[0].longitud], {
                icon: _this2.iconoMarcador
              }).bindPopup('Aquí').openPopup();

              _this2.mapa.addLayer(_this2.marcador);

              _this2.distancia = _this2.Marcador[0].distancia;
              _this2.idMarcador = _this2.Marcador[0].id;
              _this2.isMarcadorGuardadoBD = true;
              _this2.permitirColocarMarcador = false;
            }
          });
        }
      }, {
        key: "crearMarcador",
        value: function crearMarcador() {
          var _this3 = this;

          var Marcador = {};
          Marcador['latitud'] = this.latitud;
          Marcador['longitud'] = this.longitud;
          Marcador['distancia'] = this.distancia;
          this.crudService.crearNuevaMarcador(Marcador).then(function (res) {
            _this3.latitud = undefined;
            _this3.longitud = undefined;
            console.log(res);
          })["catch"](function (error) {
            console.log(error);
          });
          this.router.navigate(['/visualizar']);
          console.log('Marcador creado');
        }
      }, {
        key: "eliminarMarcador",
        value: function eliminarMarcador() {
          this.mapa.removeLayer(this.marcador);
          this.permitirColocarMarcador = true;
          this.crudService.eliminarMarcador(this.idMarcador);
          this.isMarcadorColocadoMapa = false;
          this.isMarcadorGuardadoBD = false;
          this.distancia = undefined;
          console.log('Marcador eliminado');
        }
      }, {
        key: "agregarQuitarMarcadorClick",
        value: function agregarQuitarMarcadorClick() {
          var _this4 = this;

          this.mapa.on('dblclick', function (e) {
            var latitudLongitud = _this4.mapa.mouseEventToLatLng(e.originalEvent);

            if (_this4.isMarcadorColocadoMapa) {
              _this4.mapa.removeLayer(_this4.marcador);

              _this4.isMarcadorColocadoMapa = false;
            } else if (!_this4.isMarcadorColocadoMapa && _this4.permitirColocarMarcador) {
              _this4.latitud = latitudLongitud.lat;
              _this4.longitud = latitudLongitud.lng;
              _this4.marcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([latitudLongitud.lat, latitudLongitud.lng], {
                icon: _this4.iconoMarcador
              }).addTo(_this4.mapa);
              _this4.isMarcadorColocadoMapa = true;
            }
          });
        }
      }]);

      return ColocarMarcadoresComponent;
    }();

    ColocarMarcadoresComponent.ɵfac = function ColocarMarcadoresComponent_Factory(t) {
      return new (t || ColocarMarcadoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ColocarMarcadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColocarMarcadoresComponent,
      selectors: [["app-colocar-marcadores"]],
      decls: 12,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row"], ["id", "mapa", 2, "width", "100%", "height", "375px"], [1, "col-12"], ["id", "ingresoDatos", "class", "container", 4, "ngIf", "ngIfElse"], ["MostrarEliminar", ""], ["id", "ingresoDatos", 1, "container"], [1, "form-group"], ["type", "number", "placeholder", "Distancia m\xE1xima permitida", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "container"], [1, "btn", "btn-danger", 3, "click"], ["type", "number", "placeholder", "Distancia m\xE1xima permitida", 1, "form-control", "border", "border-primary", 3, "ngModel", "ngModelChange"]],
      template: function ColocarMarcadoresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inserci\xF3n Marcador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColocarMarcadoresComponent_div_9_Template, 9, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColocarMarcadoresComponent_ng_template_10_Template, 13, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMarcadorGuardadoBD)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["#mapa[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb2Nhci1tYXJjYWRvcmVzL2NvbG9jYXItbWFyY2Fkb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29sb2Nhci1tYXJjYWRvcmVzL2NvbG9jYXItbWFyY2Fkb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAjbWFwYSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColocarMarcadoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-colocar-marcadores',
          templateUrl: './colocar-marcadores.component.html',
          styleUrls: ['./colocar-marcadores.component.css']
        }]
      }], function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mapa/mapa.component.ts":
  /*!****************************************!*\
    !*** ./src/app/mapa/mapa.component.ts ***!
    \****************************************/

  /*! exports provided: MapaComponent */

  /***/
  function srcAppMapaMapaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapaComponent", function () {
      return MapaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MapaComponent =
    /*#__PURE__*/
    function () {
      function MapaComponent(rutaActiva) {
        _classCallCheck(this, MapaComponent);

        this.rutaActiva = rutaActiva;
        this.urlAPIMapa = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
        this.iconoMarcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
          iconSize: [60, 60],
          iconAnchor: [30, 60],
          iconUrl: 'assets/marcador.png'
        });
      }

      _createClass(MapaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.inicializarMapa();
          this.marcador = {
            latitud: this.rutaActiva.snapshot.params.latitud,
            longitud: this.rutaActiva.snapshot.params.longitud
          };
          this.rutaActiva.params.subscribe(function (params) {
            var mark = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([params.latitud, params.longitud], {
              icon: _this5.iconoMarcador
            }).addTo(_this5.mapa);
          });
        }
      }, {
        key: "inicializarMapa",
        value: function inicializarMapa() {
          this.mapa = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('mapa').setView([16.752769803087457, -93.11428070068361], 13);
          leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"](this.urlAPIMapa, {
            maxZoom: 20,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(this.mapa);
        }
      }]);

      return MapaComponent;
    }();

    MapaComponent.ɵfac = function MapaComponent_Factory(t) {
      return new (t || MapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    MapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapaComponent,
      selectors: [["app-mapa"]],
      decls: 3,
      vars: 0,
      consts: [[1, "map-container"], [1, "map-frame"], ["id", "mapa"]],
      template: function MapaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".map-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0px;\r\n  }\r\n  \r\n  .map-frame[_ngcontent-%COMP%] {\r\n    border: 10px solid black;\r\n    height: 100%;\r\n  }\r\n  \r\n  #mapa[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  @media (max-width: 575.98px) { \r\n    .map-container[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      top: 130px;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      margin: 0px;\r\n    }\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwYS9tYXBhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsT0FBTztNQUNQLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztJQUNiO0dBQ0QiLCJmaWxlIjoic3JjL2FwcC9tYXBhL21hcGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICAubWFwLWZyYW1lIHtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI21hcGEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gICAgLm1hcC1jb250YWluZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTMwcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICB9XHJcbiAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mapa',
          templateUrl: './mapa.component.html',
          styleUrls: ['./mapa.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/crud.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/crud.service.ts ***!
    \*****************************************/

  /*! exports provided: CrudService */

  /***/
  function srcAppServiceCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudService", function () {
      return CrudService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var CrudService =
    /*#__PURE__*/
    function () {
      function CrudService(fireservice) {
        _classCallCheck(this, CrudService);

        this.fireservice = fireservice;
      }

      _createClass(CrudService, [{
        key: "crearNuevaMarcador",
        value: function crearNuevaMarcador(Marcador) {
          return this.fireservice.collection('MarcadorDistancia').add(Marcador);
        }
      }, {
        key: "get_Marcador",
        value: function get_Marcador() {
          return this.fireservice.collection('MarcadorDistancia').snapshotChanges();
        }
      }, {
        key: "eliminarMarcador",
        value: function eliminarMarcador(idMarcador) {
          this.fireservice.doc('MarcadorDistancia/' + idMarcador)["delete"]();
        }
      }, {
        key: "crearUbicacionFueraLimite",
        value: function crearUbicacionFueraLimite(ubicacion) {
          return this.fireservice.collection('ubicacion').add(ubicacion);
        }
      }, {
        key: "get_Ubicaciones",
        value: function get_Ubicaciones() {
          return this.fireservice.collection('ubicacion').snapshotChanges();
        }
      }]);

      return CrudService;
    }();

    CrudService.ɵfac = function CrudService_Factory(t) {
      return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CrudService,
      factory: CrudService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: VisualizarUbicacionMapaComponent */

  /***/
  function srcAppVisualizarUbicacionMapaVisualizarUbicacionMapaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizarUbicacionMapaComponent", function () {
      return VisualizarUbicacionMapaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! pubnub-angular2 */
    "./node_modules/pubnub-angular2/lib/pubnub-angular4.js");
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/crud.service */
    "./src/app/service/crud.service.ts");

    var VisualizarUbicacionMapaComponent =
    /*#__PURE__*/
    function () {
      function VisualizarUbicacionMapaComponent(pubnub, crudService) {
        _classCallCheck(this, VisualizarUbicacionMapaComponent);

        this.crudService = crudService;
        this.marcador = null;
        this.pnChannel = "raspi-tracker";
        this.fecha = Date.now();
        this.fueraRango = false;
        this.marcadorExistente = false;
        this.urlAPIMapa = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

        this.cambiarPosicionMarcador = function () {
          var _this6 = this;

          this.pubnub.addListener({
            message: function message(payload) {
              if (payload.message.lat) {
                var lat = payload.message.lat;
                var lng = payload.message.lng;

                if (_this6.marcador) {
                  _this6.mapa.removeLayer(_this6.marcador);
                }

                console.log(payload);
                _this6.marcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([lat, lng], {
                  icon: _this6.iconoMarcador
                }).bindPopup('Aquí').openPopup().addTo(_this6.mapa);

                if (_this6.marcadorExistente) {
                  if (_this6.medirDistancia(lat, lng, _this6.rango.getLatLng().lat, _this6.rango.getLatLng().lng) <= _this6.rango.getRadius()) {
                    _this6.rango.setStyle({
                      color: 'green'
                    });

                    _this6.fueraRango = false;
                  } else {
                    _this6.latitudFuera = lat;
                    _this6.longitudFuera = lng;

                    _this6.rango.setStyle({
                      color: 'red'
                    });

                    if (!_this6.fueraRango) {
                      _this6.crearUbicacionGanadoAlejado();

                      _this6.fueraRango = true;
                    }
                  }

                  ;
                }
              }
            }
          });
        };

        this.iconoMarcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
          iconSize: [60, 60],
          iconAnchor: [30, 60],
          iconUrl: 'assets/vaca.png'
        });
        this.pubnub = pubnub;
        this.pubnub.init({
          publishKey: 'pub-c-6e70a79c-7af6-4177-bfb5-b7eaf484a510',
          subscribeKey: 'sub-c-b1ea6414-c791-11ea-b3f2-c27cb65b13f4'
        });
      }

      _createClass(VisualizarUbicacionMapaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.inicializarMapa();
          this.cambiarPosicionMarcador();
          this.pubnub.subscribe({
            channels: [this.pnChannel]
          });
          this.obtenerMarcador();
        }
      }, {
        key: "inicializarMapa",
        value: function inicializarMapa() {
          this.mapa = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('mapa').setView([16.752769803087457, -93.11428070068361], 13);
          leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"](this.urlAPIMapa, {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(this.mapa);
        }
      }, {
        key: "obtenerMarcador",
        value: function obtenerMarcador() {
          var _this7 = this;

          this.crudService.get_Marcador().subscribe(function (data) {
            _this7.MarcadorCentral = data.map(function (e) {
              return {
                id: e.payload.doc.id,
                latitud: e.payload.doc.data()['latitud'],
                longitud: e.payload.doc.data()['longitud'],
                distancia: e.payload.doc.data()['distancia']
              };
            });

            if (_this7.MarcadorCentral.length == 1) {
              _this7.marcadorExistente = true;
              var circle = leaflet__WEBPACK_IMPORTED_MODULE_1__["circle"]([_this7.MarcadorCentral[0].latitud, _this7.MarcadorCentral[0].longitud], _this7.MarcadorCentral[0].distancia / 40, {
                color: 'orange'
              }).addTo(_this7.mapa);
              _this7.rango = leaflet__WEBPACK_IMPORTED_MODULE_1__["circle"]([_this7.MarcadorCentral[0].latitud, _this7.MarcadorCentral[0].longitud], _this7.MarcadorCentral[0].distancia).addTo(_this7.mapa);
            }
          });
        }
      }, {
        key: "crearUbicacionGanadoAlejado",
        value: function crearUbicacionGanadoAlejado() {
          var Ubicacion = {};
          Ubicacion['latitud'] = this.latitudFuera;
          Ubicacion['longitud'] = this.longitudFuera;
          Ubicacion['fecha'] = this.fecha;
          this.crudService.crearUbicacionFueraLimite(Ubicacion).then(function (res) {})["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "medirDistancia",
        value: function medirDistancia(lat, lng, latCircle, lngCircle) {
          var distance = this.mapa.distance([lat, lng], [latCircle, lngCircle]);
          return distance;
        }
      }]);

      return VisualizarUbicacionMapaComponent;
    }();

    VisualizarUbicacionMapaComponent.ɵfac = function VisualizarUbicacionMapaComponent_Factory(t) {
      return new (t || VisualizarUbicacionMapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]));
    };

    VisualizarUbicacionMapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisualizarUbicacionMapaComponent,
      selectors: [["app-visualizar-ubicacion-mapa"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]])],
      decls: 3,
      vars: 0,
      consts: [[1, "map-container"], [1, "map-frame"], ["id", "mapa"]],
      template: function VisualizarUbicacionMapaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".map-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 56px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0px;\r\n  }\r\n  \r\n  .map-frame[_ngcontent-%COMP%] {\r\n    border: 10px solid black;\r\n    height: 100%;\r\n  }\r\n  \r\n  #mapa[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n  \r\n  @media (max-width: 575.98px) { \r\n    .map-container[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      top: 130px;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      margin: 0px;\r\n    }\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXphci11YmljYWNpb24tbWFwYS92aXN1YWxpemFyLXViaWNhY2lvbi1tYXBhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsT0FBTztNQUNQLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztJQUNiO0dBQ0QiLCJmaWxlIjoic3JjL2FwcC92aXN1YWxpemFyLXViaWNhY2lvbi1tYXBhL3Zpc3VhbGl6YXItdWJpY2FjaW9uLW1hcGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICAubWFwLWZyYW1lIHtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI21hcGEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXHJcbiAgICAubWFwLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMzBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgIH1cclxuICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizarUbicacionMapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-visualizar-ubicacion-mapa',
          templateUrl: './visualizar-ubicacion-mapa.component.html',
          styleUrls: ['./visualizar-ubicacion-mapa.component.css'],
          providers: [pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]]
        }]
      }], function () {
        return [{
          type: pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]
        }, {
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAlDYtum9Txc2zqZaP9GEaF1UFrbHDNrUk",
        authDomain: "rastreador-ef6fe.firebaseapp.com",
        databaseURL: "https://rastreador-ef6fe.firebaseio.com",
        projectId: "rastreador-ef6fe",
        storageBucket: "rastreador-ef6fe.appspot.com",
        messagingSenderId: "455383615386",
        appId: "1:455383615386:web:71b09d614a8e72ba5d1c23",
        measurementId: "G-BXHWWZM1VC"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\elias\Downloads\angularRastreador\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map