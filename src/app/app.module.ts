import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ContainerComponent } from './dashboard/container/container.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { AjoutProduitComponent } from './dashboard/ajout-produit/ajout-produit.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListerProduitComponent} from './dashboard/lister-produit/lister-produit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import {TokeninterceptService} from './services/tokenintercept.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChilddComponent } from './childd/childd.component';
import { PromiseTestComponent } from './promise-test/promise-test.component';
import {HelloComponent} from './hello/hello.component';
import { MapComponent } from './map/map.component';
import { ColorComponent } from './color/color.component';
import { CustomerdirecDirective } from './directives/customerdirec.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { ObservableComponent } from './observable/observable.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    SidebarComponent,
    AjoutProduitComponent,
    ListerProduitComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    ChildComponent,
    ParentComponent,
    ChilddComponent,
    PromiseTestComponent,
    HelloComponent,
    MapComponent,
    ColorComponent,
    CustomerdirecDirective,
    RainbowDirective,
    ObservableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: TokeninterceptService, multi: true }

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
