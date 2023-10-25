import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/components/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'members', data: { breadcrumb: "Lista de miembros" }, loadChildren: () => import('./pages/modules/membership/membership.module').then(m => m.MembershipModule) },
    ]
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
