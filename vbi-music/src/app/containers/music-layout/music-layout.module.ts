import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicLayoutComponent } from './music-layout.component';
import { MusicRoutingModule } from './music-routing.module';
@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [MusicLayoutComponent]
})
export class MusicLayoutModule { }
