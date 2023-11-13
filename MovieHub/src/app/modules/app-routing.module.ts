import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../ui/home-page/home-page.component';
import { AuthApprovedComponent } from '../components/auth-approved/auth-approved.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'approved', component: AuthApprovedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
