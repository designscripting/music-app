import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MusicLayoutComponent } from "./music-layout.component";
import { PlayListComponent } from './vbi-music/play-list/play-list.component';
import { AllSongsComponent } from './vbi-music/all-songs/all-songs.component';

const routes: Routes = [
  {
    path: '',
    component: MusicLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AllSongsComponent,
      },
      {
        path: "allsongs",
        component: AllSongsComponent,
      },
      {
        path: "playlist",
        component: PlayListComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRoutingModule {}
