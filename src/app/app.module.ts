// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';
/**
 * Created by ramor11 on 8/10/2016.
 */
import {NgModule, NgModuleFactoryLoader}  from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AsyncNgModuleLoader} from './utils/async-ng-module-loader';


import {trace, UIROUTER_PROVIDERS, UIView, UIRouterConfig, Category, UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {MyUIRouterConfig} from "./router.config";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';




// Enables tracing (check the console) of:
// - TRANSITION transition start, redirect, success, error, ignored
// - VIEWCONFIG ui-view component creation/destruction and viewconfig de/activation
trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    UIROUTER_DIRECTIVES
  ],
  providers: [
    ...UIROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: UIRouterConfig, useClass: MyUIRouterConfig},
    {provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader}

  ],

  bootstrap: [UIView]

})
export class AppModule {
}
