import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';

import { MembershipRoutingModule } from './membership-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MainMemberFormComponent } from './controllers/main-member-form.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MainMemberFormComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    MembershipRoutingModule,
  ]
})
export class MembershipModule { }
