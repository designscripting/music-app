import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MusicRoutingModule } from "./music-routing.module";
import { MusicLayoutComponent } from "./music-layout.component";
import { SongsListComponent } from "./vbi-music/songs-list/songs-list.component";
import { PlayListComponent } from "./vbi-music/play-list/play-list.component";
import { SongsListService } from "./vbi-music/songs-list/songs-list.service";
import { AllSongsComponent } from "./vbi-music/all-songs/all-songs.component";
import { FilterPipe } from "@shared/FilterPipe.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [SongsListService],
  declarations: [
    MusicLayoutComponent,
    SongsListComponent,
    PlayListComponent,
    AllSongsComponent,
    FilterPipe,
  ],
})
export class MusicLayoutModule {}
