import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    { path: '*', redirectTo: '', pathMatch: 'full' },
    { path: 'null', redirectTo: '', pathMatch: 'full' },
    { path: '', component: MainPageComponent, data: {lang: 'pt_BR'} },
    { path: 'en', component: MainPageComponent, data: {lang: 'en_US'} },
];
