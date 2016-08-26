/**
 * Created by Ramor11 on 8/26/2016.
 */
import {Http} from "@angular/http";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
import {LazyComponent} from "./lazy.component";
/**
 * This file defines the states for the `bar` module.
 * The states are exported as an array.
 * The parent module imports this array and concats them into the master state list.
 */

/** The 'bar' submodule's states. */
export let LAZY_STATES: Ng2StateDeclaration[] = [
  {
    name: 'lazy',
    url: '/lazy',
    component: LazyComponent,
  }

];


