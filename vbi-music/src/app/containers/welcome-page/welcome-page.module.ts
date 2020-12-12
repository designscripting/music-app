import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomePageComponent]
})
export class WelcomePageModule { }
