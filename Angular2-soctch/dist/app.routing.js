"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./users/users.component');
var user_list_component_1 = require('./users/user-list/user-list.component');
var user_single_component_1 = require('./users/user-single/user-single.component');
var animations_component_1 = require('./animation/animations.component');
exports.routes = [
    /*{
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },*/
    {
        path: 'index',
        component: animations_component_1.AnimationsComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        children: [
            {
                path: '',
                component: user_list_component_1.UserListComponent
            },
            {
                path: ':id',
                component: user_single_component_1.UserSingleComponent
            } /*,
            {
                path: 'create',
                component: UserCreateComponent
            },
            {
                path: ':id/edit',
                component: UserEditComponent
            }*/
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map