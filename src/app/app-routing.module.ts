import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
const routes: Routes = [{
  path:'test1',component:Test1Component
},{
  path:'test2',component:Test2Component
},{
  path:'test3',component:Test3Component
},{
  path:'test3',component:Test3Component
},
{
     path: '', redirectTo: 'test1', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
