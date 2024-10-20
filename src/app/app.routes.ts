import { Routes } from '@angular/router';
import { LayoutComponent } from '../Feature/layout/layout.component';

export const routes: Routes = [
    {
                path:'',
                pathMatch:'full',
                redirectTo:'home'
            },{
            path:'home',
            loadComponent: () => import('../Feature/home/home.component').then(mod => mod.HomeComponent)
        },{
            path:'dasboard',
            loadComponent:() =>  import('../Feature/dashboard/dashboard.component').then(mod => mod.DashboardComponent)
        }

   
];
