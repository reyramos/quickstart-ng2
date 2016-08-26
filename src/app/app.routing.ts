import {Routes, RouterModule} from '@angular/router';


import {load} from './utils/async-ng-module-loader';

const lazyRoutes: Routes = [
  {
    path: '',
    redirectTo: 'lazy',
    pathMatch: 'full'
  },
  {
    path: 'lazy',
    loadChildren: load(() => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./lazy/lazy.module').LazyModule);
      })
    }))
  }
];


const appRoutes: Routes = [
  ...lazyRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
