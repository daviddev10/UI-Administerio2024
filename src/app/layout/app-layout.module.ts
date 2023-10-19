import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BrowserModule } from '@angular/platform-browser';
import { IconsProviderModule } from '../icons-provider.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';
import { AppNavHeaderComponent } from './components/app-nav-header/app-nav-header.component';



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
    IconsProviderModule,
    BrowserAnimationsModule,


    // FormsModule,
    // HttpClientModule,
  ]
})
export class AppLayoutModule { }
