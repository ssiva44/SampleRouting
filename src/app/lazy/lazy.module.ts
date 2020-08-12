import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app/app.component';
const routes:Routes=[
  {
    path:'',component:AppComponent
  }
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule
,RouterModule.forChild(routes)  ]
})
export class LazyModule { }
