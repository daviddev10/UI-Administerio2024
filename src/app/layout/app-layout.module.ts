import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserModule } from '@angular/platform-browser';
import { IconsProviderModule } from '../icons-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppNavHeaderComponent } from './components/app-nav-header/app-nav-header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppSidebarComponent,
    AppNavHeaderComponent
  ],
  imports: [
    RouterModule,
    NzMenuModule,
    CommonModule,
    BrowserModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    IconsProviderModule,
    BrowserAnimationsModule,
  ]
})
export class AppLayoutModule { }
