import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicLayoutComponent } from './music-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MusicLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }