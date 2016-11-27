import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
} from '@angular/core';


@Component({
    selector: 'my-app-animation',
    templateUrl: '../../views/animation.html',
    styleUrls:['../../public/css/animation.css'],
    animations:[
        trigger('focusPanel', [
            state('inactive', style({
                transform: "scale(1)",
                background: "rgba(0,255,0,0.7)"
            })),
            state('active', style({
                transform: "scale(1.5)",
                top: "100px",
                background: "rgba(255,0,255,0.7)"
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ]),
        trigger('movePanel', [
            transition('void => *', [
                animate(600, keyframes([
                    style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
                    style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
                    style({opacity: 1, transform: 'translateY(0)', offset: 1}),
                ]))
            ])
        ])
    ]
})

export class AnimationsComponent {
    state: string = "inactive";
    toggleMove = () => {
        this.state = (this.state === "inactive" ? "active" : "inactive");
    }
}

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












