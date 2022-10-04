import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { IndexComponent } from './pages/index/index.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'index', component: IndexComponent },
    ]
  },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
