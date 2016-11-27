import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { AnimationsComponent } from './animation/animations.component';

export const routes: Routes = [
    /*{
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },*/
    {
        path: 'index',
        component: AnimationsComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent
            },
            {
                path: ':id',
                component: UserSingleComponent
            }/*,
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

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);