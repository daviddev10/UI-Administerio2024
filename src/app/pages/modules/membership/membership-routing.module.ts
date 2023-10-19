import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MainMemberFormComponent } from './controllers/main-member-form.component';

const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'nuevo', component: MainMemberFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
