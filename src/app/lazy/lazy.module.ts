// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';
import {CommonModule}   from '@angular/common';

/**
 * Created by ramor11 on 8/10/2016.
 */
import {NgModule}  from '@angular/core';


import {UIROUTER_PROVIDERS, UIView} from "ui-router-ng2";


import {LazyComponent} from "./lazy.component";
import {LazyDetailComponent} from "./lazy-detail.coponent";
import {LAZY_STATES} from "./lazy.states";


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    LAZY_STATES
  ],
  declarations: [
    LazyComponent,
    LazyDetailComponent
  ],
  providers: [
    ...UIROUTER_PROVIDERS
  ],

  bootstrap: [UIView]

})

export class LazyModule {
}
