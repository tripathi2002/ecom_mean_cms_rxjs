import { Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LandingComponent,
    }
];
