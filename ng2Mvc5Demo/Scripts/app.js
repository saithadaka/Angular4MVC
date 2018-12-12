"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppComponent = /** @class */ (function () {
    function AppComponent(injector, httpClient) {
        var _this = this;
        this.injector = injector;
        this.httpClient = httpClient;
        this.apibaseUrl = "http://localhost:58349";
        this.httpClient.get("http://localhost:58349/Home/getLoggedInUser").subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.loggedInUser = JSON.stringify(data);
        }, function (err) { console.log(JSON.stringify(err)); });
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AppComponent.prototype, "loggedInUser", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../app/app.component.html'
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector, http_1.HttpClient])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
