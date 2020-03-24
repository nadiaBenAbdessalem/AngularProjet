import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListerProduitComponent} from './dashboard/lister-produit/lister-produit.component';
import {AjoutProduitComponent} from './dashboard/ajout-produit/ajout-produit.component';
import {ContainerComponent} from './dashboard/container/container.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {ParentComponent} from './parent/parent.component';
import {ChilddComponent} from './childd/childd.component';
import {PromiseTestComponent} from './promise-test/promise-test.component';
import {HelloComponent} from './hello/hello.component';
import {MapComponent} from './map/map.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgetpasswordComponent},
  {path: 'reset-password', component: ResetpasswordComponent},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: ContainerComponent},
      {path: 'listProduit', component: ListerProduitComponent},
      {path: 'ajoutProduit', component: AjoutProduitComponent}

    ]
  },

  {path: 'register', component: RegisterComponent},
  {path: 'childd', component: ChilddComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'map', component: MapComponent},
  {path: 'promise', component: PromiseTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
