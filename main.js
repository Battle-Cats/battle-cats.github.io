(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container root\">\n    <h1 class=\"h1\">{{title}}</h1>\n    <div class=\"row flex-xl\">\n        <div class=\"col-12 col-xl-12\">\n            <ngb-tabset>\n                <ngb-tab title=\"Track\">\n                    <ng-template ngbTabContent>\n                        <app-track></app-track>\n                    </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Cat Sets\">\n                    <ng-template ngbTabContent>\n                        <app-cat-sets></app-cat-sets>\n                    </ng-template>\n                </ngb-tab>\n            </ngb-tabset>\n        </div>\n    </div>\n</div>\n<!-- <app-cat-sets></app-cat-sets>\n<app-cats></app-cats> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Battle Cats Seed Tracker';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cats_cats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cats/cats.component */ "./src/app/components/cats/cats.component.ts");
/* harmony import */ var _components_cat_sets_cat_sets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cat-sets/cat-sets.component */ "./src/app/components/cat-sets/cat-sets.component.ts");
/* harmony import */ var _components_track_track_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/track/track.component */ "./src/app/components/track/track.component.ts");
/* harmony import */ var _components_seed_seed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/seed/seed.component */ "./src/app/components/seed/seed.component.ts");
/* harmony import */ var _components_single_track_single_track_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/single-track/single-track.component */ "./src/app/components/single-track/single-track.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_cats_cats_component__WEBPACK_IMPORTED_MODULE_6__["CatsComponent"],
                _components_cat_sets_cat_sets_component__WEBPACK_IMPORTED_MODULE_7__["CatSetsComponent"],
                _components_track_track_component__WEBPACK_IMPORTED_MODULE_8__["TrackComponent"],
                _components_seed_seed_component__WEBPACK_IMPORTED_MODULE_9__["SeedComponent"],
                _components_single_track_single_track_component__WEBPACK_IMPORTED_MODULE_10__["SingleTrackComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cat-sets/cat-sets.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/cat-sets/cat-sets.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cat-sets/cat-sets.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/cat-sets/cat-sets.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group col-xs-2\">\n    <label>Select Gacha</label>\n    <select [(ngModel)]=\"selectedSet\"\n            class=\"form-control\">\n      <option *ngFor=\"let gacha of catSets\" \n              [ngValue]=\"gacha\">\n              {{gacha.name}}\n      </option>\n    </select>\n</div>\n<div *ngIf=\"selectedSet\">\n  <div class=\"row\">\n    <label class=\"col-lg-4\">Uber Rare: {{selectedSet.uberRarePercent}}%</label>\n    <label class=\"col-lg-4\">Super Rare: {{selectedSet.superAndUberRarePercent - selectedSet.uberRarePercent}}%</label>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      Uber Rares\n      <div *ngFor=\"let cat of selectedSet.uberRareCats; let i = index\">\n        {{i}}: {{cat.name}}\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      Super Rares\n      <div *ngFor=\"let cat of selectedSet.superRareCats; let i = index\">\n        {{i}}: {{cat.name}}\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      Rares\n      <div *ngFor=\"let cat of selectedSet.rareCats; let i = index\">\n        {{i}}: {{cat.name}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/cat-sets/cat-sets.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cat-sets/cat-sets.component.ts ***!
  \***********************************************************/
/*! exports provided: CatSetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatSetsComponent", function() { return CatSetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cat_set_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cat-set.service */ "./src/app/services/cat-set.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatSetsComponent = /** @class */ (function () {
    function CatSetsComponent(catSetService) {
        var _this = this;
        this.catSetService = catSetService;
        this.catSetService.getSets().subscribe(function (s) { _this.catSets = s; console.log(s); });
    }
    CatSetsComponent.prototype.ngOnInit = function () {
    };
    CatSetsComponent.prototype.onSelect = function (set) {
        this.selectedSet = set;
    };
    CatSetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cat-sets',
            template: __webpack_require__(/*! ./cat-sets.component.html */ "./src/app/components/cat-sets/cat-sets.component.html"),
            styles: [__webpack_require__(/*! ./cat-sets.component.css */ "./src/app/components/cat-sets/cat-sets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cat_set_service__WEBPACK_IMPORTED_MODULE_1__["CatSetService"]])
    ], CatSetsComponent);
    return CatSetsComponent;
}());



/***/ }),

/***/ "./src/app/components/cats/cats.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cats/cats.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .cats {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .cats li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .cats li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .cats li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .cats .text {\r\n    position: relative;\r\n    /* top: -3px; */\r\n  }\r\n  .cats .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }"

/***/ }),

/***/ "./src/app/components/cats/cats.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cats/cats.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Cats</h2>\n<ul>\n  <li *ngFor=\"let cat of cats\"\n      (click)=\"onSelect(cat)\">\n    \n    <h3>{{cat.name}}</h3>\n    <div *ngIf=\"selectedCat && selectedCat === cat\">\n        <span>ID: {{selectedCat.id}}, Rarity: {{selectedCat.rarityString}}</span>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/cats/cats.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cats/cats.component.ts ***!
  \***************************************************/
/*! exports provided: CatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsComponent", function() { return CatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cat.service */ "./src/app/services/cat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatsComponent = /** @class */ (function () {
    function CatsComponent(catService) {
        this.catService = catService;
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.getCats();
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this.catService.getCats().subscribe(function (cats) { return _this.cats = cats; });
    };
    CatsComponent.prototype.onSelect = function (cat) {
        this.selectedCat = cat;
    };
    CatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cats',
            template: __webpack_require__(/*! ./cats.component.html */ "./src/app/components/cats/cats.component.html"),
            styles: [__webpack_require__(/*! ./cats.component.css */ "./src/app/components/cats/cats.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cat_service__WEBPACK_IMPORTED_MODULE_1__["CatService"]])
    ], CatsComponent);
    return CatsComponent;
}());



/***/ }),

/***/ "./src/app/components/seed/seed.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/seed/seed.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/seed/seed.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/seed/seed.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateSeed()\" #seedForm=\"ngForm\">\n  <div>\n    <label for=\"seed\">Seed</label>\n    <input type=\"number\" class=\"form-control\" id=\"seed\" name=\"seed\"\n      [(ngModel)]=\"seed\">\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/seed/seed.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/seed/seed.component.ts ***!
  \***************************************************/
/*! exports provided: SeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedComponent", function() { return SeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/track.service */ "./src/app/services/track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeedComponent = /** @class */ (function () {
    function SeedComponent(trackService) {
        this.trackService = trackService;
        this.seed = 0;
    }
    SeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackService.seed.subscribe(function (seed) { return _this.seed = seed; });
    };
    SeedComponent.prototype.updateSeed = function () {
        if (this.seed === null)
            return;
        console.log("Updated seed to " + this.seed);
        this.trackService.updateSeed(this.seed);
        if (this.trackService.trackManager.trackA.rolls.length === 0) {
            this.trackService.addRows(100);
        }
        console.log(this.trackService.trackManager);
    };
    SeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seed',
            template: __webpack_require__(/*! ./seed.component.html */ "./src/app/components/seed/seed.component.html"),
            styles: [__webpack_require__(/*! ./seed.component.css */ "./src/app/components/seed/seed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_track_service__WEBPACK_IMPORTED_MODULE_1__["TrackService"]])
    ], SeedComponent);
    return SeedComponent;
}());



/***/ }),

/***/ "./src/app/components/single-track/single-track.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/single-track/single-track.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".superRare {\r\n    background-color: #bee5eb;\r\n}\r\n\r\n.possibleUber {\r\n    background-color: #ffeeba;\r\n}\r\n\r\n.uberRare {\r\n    background-color: #c3e6cb;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/single-track/single-track.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/single-track/single-track.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"track\">\n    <h2>Track {{track.id}}</h2>\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <th>Roll</th>\n        <th>Score</th>\n        <th>Rarity</th>\n        <th>Cat</th>\n        <th>Guaranteed Uber</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let roll of track.rolls; let i = index\">\n          <th scope=\"row\">{{roll.id}}</th>\n          <td [ngClass]=\"scoreClass(roll)\">\n            {{roll.score}}\n          </td>\n          <td [ngClass]=\"rarityClass(roll.rolledCats[selectedGacha.name].cat.rarity)\">\n            {{roll.rolledCats[selectedGacha.name].cat.rarityString}}\n          </td>\n          <td>{{roll.rolledCats[selectedGacha.name].cat.name}}</td>\n          <td>\n            <div *ngIf=\"i+garUberOffset < track.rolls.length\">\n              {{track.rolls[i+garUberOffset].rolledCats[selectedGacha.name].guaranteedUber.name}}\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/single-track/single-track.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/single-track/single-track.component.ts ***!
  \*******************************************************************/
/*! exports provided: SingleTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTrackComponent", function() { return SingleTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "./src/app/enums.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleTrackComponent = /** @class */ (function () {
    function SingleTrackComponent() {
        this.rarityClasses = {};
        this.rarityClasses[_enums__WEBPACK_IMPORTED_MODULE_1__["Rarity"].NonGacha] = "nonGacha";
        this.rarityClasses[_enums__WEBPACK_IMPORTED_MODULE_1__["Rarity"].Rare] = "rare";
        this.rarityClasses[_enums__WEBPACK_IMPORTED_MODULE_1__["Rarity"].SuperRare] = "superRare";
        this.rarityClasses[_enums__WEBPACK_IMPORTED_MODULE_1__["Rarity"].UberRare] = "uberRare";
    }
    SingleTrackComponent.prototype.ngOnInit = function () {
    };
    SingleTrackComponent.prototype.scoreClass = function (roll) {
        if (roll.allUbers)
            return "uberRare";
        if (roll.hasUbers)
            return "possibleUber";
        return "";
    };
    SingleTrackComponent.prototype.rarityClass = function (rarity) {
        return this.rarityClasses[rarity];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleTrackComponent.prototype, "track", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SingleTrackComponent.prototype, "garUberOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleTrackComponent.prototype, "selectedGacha", void 0);
    SingleTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-track',
            template: __webpack_require__(/*! ./single-track.component.html */ "./src/app/components/single-track/single-track.component.html"),
            styles: [__webpack_require__(/*! ./single-track.component.css */ "./src/app/components/single-track/single-track.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleTrackComponent);
    return SingleTrackComponent;
}());



/***/ }),

/***/ "./src/app/components/track/track.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/track/track.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tracks {\r\n    display: flex;\r\n}\r\n\r\n.track {\r\n    flex: 50%;\r\n    white-space: nowrap;\r\n}\r\n\r\n.superRare {\r\n    color: rgb(137, 231, 137);\r\n}\r\n\r\n.uberRare {\r\n    color: white;\r\n    background-color: darkgreen;\r\n}"

/***/ }),

/***/ "./src/app/components/track/track.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/track/track.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"trackService.trackManager\">\n  <div class=\"form-group row\">\n    <app-seed class=\"col-lg-4\"></app-seed>\n    <div class=\"col-lg-4\">\n      <label>Gacha Set</label>\n      <select [(ngModel)]=\"selectedGacha\"\n              (ngModelChange)=\"onSelectedGachaChanged($event)\"\n              class=\"form-control\">\n        <option *ngFor=\"let gacha of trackService.trackManager.gachas\" \n                [ngValue]=\"gacha\">\n                {{gacha.name}}\n        </option>\n      </select>\n    </div>\n    <div class=\"col-lg-4\">\n      <label>Guaranteed Draw Count</label>\n      <select [(ngModel)]=\"garUberOffset\"\n              class=\"form-control\">\n        <option *ngFor=\"let drawCount of garUberDrawOptions\"\n                [ngValue]=\"drawCount\">\n          {{drawCount}}+1\n        </option>\n      </select>\n    </div>\n  </div>\n  <div class=\"form-group row\"></div>\n\n  <div class=\"tracks\" *ngIf=\"selectedGacha\">\n      <app-single-track class=\"track\" \n      [track]=\"trackService.trackManager.trackA\" \n      [garUberOffset]=\"garUberOffset\"\n      [selectedGacha]=\"selectedGacha\">\n    </app-single-track>\n    <app-single-track class=\"track\" \n      [track]=\"trackService.trackManager.trackB\" \n      [garUberOffset]=\"garUberOffset\"\n      [selectedGacha]=\"selectedGacha\">\n    </app-single-track>\n  </div>\n\n  <div>\n      <button class=\"btn btn-primary\" (click)=\"addRows(100)\">Add 100 Rows</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/track/track.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/track/track.component.ts ***!
  \*****************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/track.service */ "./src/app/services/track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackComponent = /** @class */ (function () {
    function TrackComponent(trackService) {
        var _this = this;
        this.trackService = trackService;
        this.selectedGacha = null;
        this.garUberOffset = 10;
        this.garUberDrawOptions = [10, 7];
        this.selectedGachaKey = "battlecats.selectedGacha";
        this.trackService.isReady.subscribe(function (ready) {
            if (_this.selectedGacha === null && ready)
                _this.selectedGacha = _this.fetchSelectedGacha();
        });
    }
    TrackComponent.prototype.ngOnInit = function () {
    };
    TrackComponent.prototype.addRows = function (count) {
        if (count === void 0) { count = 100; }
        console.log("Adding rows");
        this.trackService.addRows(count);
        console.log(this.trackService.trackManager);
    };
    TrackComponent.prototype.onSelectedGachaChanged = function (selectedGacha) {
        this.saveSelectedGacha(selectedGacha);
    };
    TrackComponent.prototype.fetchSelectedGacha = function () {
        var gachaName = localStorage.getItem(this.selectedGachaKey);
        var gachaIndex = this.trackService.trackManager.gachas.findIndex(function (s) { return s.name == gachaName; });
        if (gachaIndex < 0)
            gachaIndex = 0;
        return this.trackService.trackManager.gachas[gachaIndex];
    };
    TrackComponent.prototype.saveSelectedGacha = function (set) {
        localStorage.setItem(this.selectedGachaKey, set.name);
    };
    TrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./track.component.html */ "./src/app/components/track/track.component.html"),
            styles: [__webpack_require__(/*! ./track.component.css */ "./src/app/components/track/track.component.css")]
        }),
        __metadata("design:paramtypes", [_services_track_service__WEBPACK_IMPORTED_MODULE_1__["TrackService"]])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/app/enums.ts":
/*!**************************!*\
  !*** ./src/app/enums.ts ***!
  \**************************/
/*! exports provided: Rarity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rarity", function() { return Rarity; });
var Rarity;
(function (Rarity) {
    Rarity[Rarity["NonGacha"] = -1] = "NonGacha";
    Rarity[Rarity["Rare"] = 0] = "Rare";
    Rarity[Rarity["SuperRare"] = 1] = "SuperRare";
    Rarity[Rarity["UberRare"] = 2] = "UberRare";
})(Rarity || (Rarity = {}));


/***/ }),

/***/ "./src/app/models/Cat.ts":
/*!*******************************!*\
  !*** ./src/app/models/Cat.ts ***!
  \*******************************/
/*! exports provided: Cat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return Cat; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/app/enums.ts");

var rarityStrings = {};
rarityStrings[_enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].NonGacha] = "Non-Gacha";
rarityStrings[_enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].Rare] = "Rare";
rarityStrings[_enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].SuperRare] = "Super Rare";
rarityStrings[_enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].UberRare] = "Uber Rare";
var Cat = /** @class */ (function () {
    function Cat(id, name, rarity) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.name = name;
        this.rarity = rarity;
        this.rarityString = rarityStrings[this.rarity];
    }
    return Cat;
}());



/***/ }),

/***/ "./src/app/models/GachaRoll.ts":
/*!*************************************!*\
  !*** ./src/app/models/GachaRoll.ts ***!
  \*************************************/
/*! exports provided: GachaRoll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachaRoll", function() { return GachaRoll; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/app/enums.ts");

var GachaRoll = /** @class */ (function () {
    function GachaRoll(gachaSets, id, scoreSeed, slotSeed, guaranteedUberSeed) {
        this.rolledCats = [];
        this.hasUbers = false;
        this.allUbers = false;
        this.id = id;
        this.scoreSeed = scoreSeed;
        this.slotSeed = slotSeed;
        this.guaranteedUberSeed = guaranteedUberSeed;
        this.score = Math.abs(scoreSeed) % 10000;
        this.hasUbers = false;
        this.allUbers = true;
        for (var i = 0; i < gachaSets.length; i++) {
            var gacha = gachaSets[i];
            var catSelection = this.getCatSelection(gacha);
            this.rolledCats[gacha.name] = catSelection;
            if (catSelection.cat.rarity === _enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].UberRare) {
                this.hasUbers = true;
            }
            else {
                this.allUbers = false;
            }
        }
    }
    GachaRoll.prototype.getCatSelection = function (gacha) {
        var cats;
        if (this.score > gacha.uberRareThreshold) {
            cats = gacha.uberRareCats;
        }
        else if (this.score > gacha.superAndUberRareThreshold) {
            cats = gacha.superRareCats;
        }
        else {
            cats = gacha.rareCats;
        }
        var catSlot = Math.abs(this.slotSeed) % cats.length;
        var cat = cats[catSlot];
        var garUberSlot = Math.abs(this.guaranteedUberSeed) % gacha.uberRareCats.length;
        var garUberCat = gacha.uberRareCats[garUberSlot];
        var catSelection = {
            cat: cat,
            guaranteedUber: garUberCat,
            slot: catSlot,
            guaranteedUberSlot: garUberSlot,
            gacha: gacha
        };
        return catSelection;
    };
    return GachaRoll;
}());



/***/ }),

/***/ "./src/app/models/GachaSet.ts":
/*!************************************!*\
  !*** ./src/app/models/GachaSet.ts ***!
  \************************************/
/*! exports provided: GachaJsonData, GachaSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachaJsonData", function() { return GachaJsonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachaSet", function() { return GachaSet; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/app/enums.ts");

var GachaJsonData = /** @class */ (function () {
    function GachaJsonData() {
    }
    return GachaJsonData;
}());

var GachaSet = /** @class */ (function () {
    function GachaSet(jsonData, cats) {
        this.rares = [];
        this.supers = [];
        this.ubers = [];
        this.name = jsonData.name;
        this.uberRarePercent = jsonData.uberRarePercent;
        this.superAndUberRarePercent = jsonData.superAndUberRarePercent;
        this.uberRareThreshold = (100 - this.uberRarePercent) * 100;
        this.superAndUberRareThreshold = (100 - this.superAndUberRarePercent) * 100;
        this.rareCats = this.rares;
        this.superRareCats = this.supers;
        this.uberRareCats = this.ubers;
        var _loop_1 = function (i) {
            var id = jsonData.catIds[i];
            var cat = cats.find(function (c) { return c.id === id; });
            if (cat === null) {
                console.log("Unable to find cat id " + id + " in gacha set " + this_1.name);
            }
            else if (cat.rarity == _enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].Rare) {
                this_1.rares.push(cat);
            }
            else if (cat.rarity == _enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].SuperRare) {
                this_1.supers.push(cat);
            }
            else if (cat.rarity == _enums__WEBPACK_IMPORTED_MODULE_0__["Rarity"].UberRare) {
                this_1.ubers.push(cat);
            }
            else {
                console.log("unknown cat rarity " + cat.rarity + " in gacha set " + this_1.name);
            }
        };
        var this_1 = this;
        for (var i = 0; i < jsonData.catIds.length; i++) {
            _loop_1(i);
        }
    }
    return GachaSet;
}());



/***/ }),

/***/ "./src/app/models/SeedGenerator.ts":
/*!*****************************************!*\
  !*** ./src/app/models/SeedGenerator.ts ***!
  \*****************************************/
/*! exports provided: SeedGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeedGenerator", function() { return SeedGenerator; });
var SeedGenerator = /** @class */ (function () {
    function SeedGenerator(rootSeed) {
        this.rootSeed = rootSeed;
        this.currentSeed = rootSeed;
    }
    SeedGenerator.prototype.generate = function (count) {
        if (count === void 0) { count = 1; }
        var seeds;
        seeds = [];
        for (var i = 0; i < count; i++) {
            this.currentSeed = this.getNext(this.currentSeed);
            seeds.push(this.currentSeed);
        }
        return seeds;
    };
    SeedGenerator.prototype.reset = function (seed) {
        if (seed) {
            this.rootSeed = seed;
        }
        this.currentSeed = this.rootSeed;
    };
    SeedGenerator.prototype.getNext = function (seed) {
        seed ^= seed << 13;
        seed ^= seed >> 17;
        seed ^= seed << 15;
        return seed;
    };
    return SeedGenerator;
}());



/***/ }),

/***/ "./src/app/models/Track.ts":
/*!*********************************!*\
  !*** ./src/app/models/Track.ts ***!
  \*********************************/
/*! exports provided: Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony import */ var _GachaRoll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GachaRoll */ "./src/app/models/GachaRoll.ts");

var Track = /** @class */ (function () {
    function Track(id, gachas) {
        this.id = id;
        this.gachas = gachas;
        this.rolls = [];
    }
    Track.prototype.roll = function (scoreSeed, slotSeed, guaranteedUberSeed) {
        var id = "" + this.id + (this.rolls.length + 1);
        this.rolls.push(new _GachaRoll__WEBPACK_IMPORTED_MODULE_0__["GachaRoll"](this.gachas, id, scoreSeed, slotSeed, guaranteedUberSeed));
    };
    Track.prototype.clear = function () {
        this.rolls = [];
    };
    return Track;
}());



/***/ }),

/***/ "./src/app/models/TrackManager.ts":
/*!****************************************!*\
  !*** ./src/app/models/TrackManager.ts ***!
  \****************************************/
/*! exports provided: TrackManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackManager", function() { return TrackManager; });
/* harmony import */ var _Track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Track */ "./src/app/models/Track.ts");

var TrackManager = /** @class */ (function () {
    function TrackManager(seedGenerator, gachas) {
        this.seedGenerator = seedGenerator;
        this.gachas = gachas;
        this.trackA = new _Track__WEBPACK_IMPORTED_MODULE_0__["Track"]("A", gachas);
        this.trackB = new _Track__WEBPACK_IMPORTED_MODULE_0__["Track"]("B", gachas);
    }
    TrackManager.prototype.updateSeed = function (seed) {
        var currentRollCount = this.trackA.rolls.length;
        this.seedGenerator.reset(seed);
        this.trackA.clear();
        this.trackB.clear();
        this.addRolls(currentRollCount);
    };
    TrackManager.prototype.addRolls = function (count) {
        var initSeed = this.seedGenerator.currentSeed;
        var seeds = this.seedGenerator.generate(count * 2);
        seeds.unshift(initSeed);
        for (var i = 0; i < seeds.length - 2; i += 2) {
            this.trackA.roll(seeds[i], seeds[i + 1], seeds[i]);
            this.trackB.roll(seeds[i + 1], seeds[i + 2], seeds[i + 1]);
        }
    };
    return TrackManager;
}());



/***/ }),

/***/ "./src/app/services/cat-set.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/cat-set.service.ts ***!
  \*********************************************/
/*! exports provided: CatSetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatSetService", function() { return CatSetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat.service */ "./src/app/services/cat.service.ts");
/* harmony import */ var _models_GachaSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/GachaSet */ "./src/app/models/GachaSet.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatSetService = /** @class */ (function () {
    function CatSetService(http, catService) {
        this.http = http;
        this.catService = catService;
        this.dbString = "assets/cat_sets.json";
    }
    CatSetService.prototype.getSets = function () {
        var _this = this;
        console.log("Getting sets..");
        return this.catService.getCats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (cats) { return _this.getSetData(cats); }));
    };
    CatSetService.prototype.getSetData = function (cats) {
        return this.http.get(this.dbString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sets) {
            var newSets = [];
            sets.forEach(function (s) { return newSets.push(new _models_GachaSet__WEBPACK_IMPORTED_MODULE_4__["GachaSet"](s, cats)); });
            return newSets;
        }));
    };
    CatSetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _cat_service__WEBPACK_IMPORTED_MODULE_3__["CatService"]])
    ], CatSetService);
    return CatSetService;
}());



/***/ }),

/***/ "./src/app/services/cat.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/cat.service.ts ***!
  \*****************************************/
/*! exports provided: CatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatService", function() { return CatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Cat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Cat */ "./src/app/models/Cat.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatService = /** @class */ (function () {
    function CatService(http) {
        this.http = http;
        this.dbString = "assets/cats.json";
    }
    CatService.prototype.getCats = function () {
        return this.http.get(this.dbString)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (cats) {
            var newCats = [];
            cats.forEach(function (c) { return newCats.push(new _models_Cat__WEBPACK_IMPORTED_MODULE_3__["Cat"](c.id, c.name, c.rarity)); });
            return newCats;
        }));
    };
    CatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatService);
    return CatService;
}());



/***/ }),

/***/ "./src/app/services/track.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/track.service.ts ***!
  \*******************************************/
/*! exports provided: TrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackService", function() { return TrackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_SeedGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/SeedGenerator */ "./src/app/models/SeedGenerator.ts");
/* harmony import */ var _models_TrackManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TrackManager */ "./src/app/models/TrackManager.ts");
/* harmony import */ var _cat_set_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cat-set.service */ "./src/app/services/cat-set.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackService = /** @class */ (function () {
    function TrackService(catSetService) {
        var _this = this;
        this.catSetService = catSetService;
        this.seedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this.readySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.seedKey = "battlecats.seed";
        this.seed = this.seedSubject.asObservable();
        this.isReady = this.readySubject.asObservable();
        var seed = this.fetchSeed();
        this.seedGenerator = new _models_SeedGenerator__WEBPACK_IMPORTED_MODULE_1__["SeedGenerator"](seed);
        this.seedSubject.next(seed);
        catSetService.getSets().subscribe(function (sets) {
            _this.trackManager = new _models_TrackManager__WEBPACK_IMPORTED_MODULE_2__["TrackManager"](_this.seedGenerator, sets);
            _this.addRows();
            _this.readySubject.next(true);
        });
    }
    TrackService.prototype.addRows = function (count) {
        if (count === void 0) { count = 100; }
        if (this.trackManager === null)
            return;
        this.trackManager.addRolls(count);
    };
    TrackService.prototype.updateSeed = function (seed) {
        if (this.trackManager === null)
            return;
        localStorage.setItem(this.seedKey, String(seed));
        this.trackManager.updateSeed(seed);
        this.seedSubject.next(seed);
    };
    TrackService.prototype.fetchSeed = function () {
        return +localStorage.getItem(this.seedKey);
    };
    TrackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_cat_set_service__WEBPACK_IMPORTED_MODULE_3__["CatSetService"]])
    ], TrackService);
    return TrackService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\thomas\bc-worksheet-ng\bc-worksheet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map