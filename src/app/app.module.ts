import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BaseContainerComponent } from '@app/containers/base-container/base-container.component';
import { WelcomePageModule } from '@app/containers/welcome-page/welcome-page.module';
import { MusicLayoutModule } from '@app/containers/music-layout/music-layout.module';

@NgModule({
  declarations: [AppComponent, BaseContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomePageModule,
    MusicLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
