import {
    Component,
    trigger,
    state,
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












