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
var core_1 = require('@angular/core');
var user_service_1 = require('./shared/services/user.service');
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n\n      <div class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a routerLink=\"/\" class=\"navbar-brand\">My HTTP App</a>\n          </div>\n\n          <ul class=\"nav navbar-nav\"> \n            <li><a routerLink=\"/users\">Users</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map