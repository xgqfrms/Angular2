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
        var _this = this;
        this.state = "inactive";
        this.toggleMove = function () {
            _this.state = (_this.state === "inactive" ? "active" : "inactive");
        };
    }
    AnimationsComponent = __decorate([
        core_1.Component({
            selector: 'my-app-animation',
            templateUrl: '../../views/animation.html',
            styleUrls: ['../../public/css/animation.css'],
            animations: [
                core_1.trigger('focusPanel', [
                    core_1.state('inactive', core_1.style({
                        transform: "scale(1)",
                        background: "rgba(0,255,0,0.7)"
                    })),
                    core_1.state('active', core_1.style({
                        transform: "scale(1.5)",
                        top: "100px",
                        background: "rgba(255,0,255,0.7)"
                    })),
                    core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
                ]),
                core_1.trigger('movePanel', [
                    core_1.transition('void => *', [
                        core_1.animate(600, core_1.keyframes([
                            core_1.style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                            core_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ])
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
 * https://coursetro.com/posts/code/25/Understanding-Angular-2-Animations-Tutorial
 *
 * EXPERIMENTAL (试验性)
 * https://angular.io/docs/ts/latest/api/core/index/state-function.html
 * https://angular.io/docs/ts/latest/api/core/index/style-function.html
 * https://angular.io/docs/ts/latest/api/core/index/trigger-function.html
 * https://angular.io/docs/ts/latest/api/core/index/transition-function.html
 * https://angular.io/docs/ts/latest/api/core/index/keyframes-function.html
 * https://angular.io/docs/ts/latest/api/core/index/animate-function.html
 * https://angular.io/docs/ts/latest/api/core/index/sequence-function.html
 * https://angular.io/docs/ts/latest/api/core/index/group-function.html
 *
 * Metadata Properties:
 * styleUrls, templateUrl, animations, providers, selector ...
 *
 * https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
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
 *
 * https://coursetro.com/posts/code/18/Angular-2-Templates-&-Integrating-Foundation-&-Bootstrap
 *
 * http://www.w3schools.com/css/css3_animations.asp
 * http://www.w3schools.com/cssref/css3_pr_animation.asp
 * http://www.w3schools.com/cssref/css3_pr_transition.asp
 * http://www.w3schools.com/cssref/css3_pr_transition-property.asp
 */
//# sourceMappingURL=animations.component.js.map