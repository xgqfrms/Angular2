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
var AnimationsComponent = (function () {
    function AnimationsComponent() {
    }
    AnimationsComponent = __decorate([
        core_1.Component({
            selector: 'my-app-animation',
            templateUrl: '../../views/animation.html',
            styleUrls: ['../../public/css/animation.css'],
            animations: [
                core_1.trigger('focusPanel', [
                    core_1.state('inactive', style({
                        transform: "scale(2)"
                    })),
                    core_1.state('active', style({
                        transform: "scale(1)"
                    })),
                    core_1.transition('inactive => active', core_1.animate('all 100')),
                    core_1.transition('inactive => active', core_1.animate('all 100'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimationsComponent);
    return AnimationsComponent;
}());
exports.AnimationsComponent = AnimationsComponent;
/**
 * https://www.youtube.com/watch?v=-pFEzm_Jn-o
 *
 * https://github.com/angular/angular/blob/2.2.2/modules/%40angular/core/src/metadata/directives.ts#L694-L715
 * template & templateUrl
 * styles & styleUrls
 *
 * public (css, img)
 * express + __dirname + static path
 *
 * REST-API
 * http://reqres.in
 */
//# sourceMappingURL=animations.component.js.map