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
                transform: "scale(2)"
            })),
            state('active', style({
                 transform: "scale(1)"
            })),
            transition('inactive => active', animate('all 100')),
            transition('inactive => active', animate('all 100'))
        ])
    ]
})

export class AnimationsComponent {}

/**
 * https://www.youtube.com/watch?v=-pFEzm_Jn-o
 *
 * https://angular.io/docs/ts/latest/api/core/index/state-function.html
 * https://angular.io/docs/ts/latest/api/core/index/style-function.html
 * https://angular.io/docs/ts/latest/api/core/index/trigger-function.html
 * https://angular.io/docs/ts/latest/api/core/index/transition-function.html
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
 */












