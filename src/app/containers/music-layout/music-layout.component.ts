import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-layout',
  templateUrl: './music-layout.component.html',
  styleUrls: ['./music-layout.component.scss'],
})
export class MusicLayoutComponent implements OnInit {
  links = [
    { title: 'All Songs', fragment: 'allsongs' },
    { title: 'Playlists', fragment: 'playlist' },
  ]

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {}
}
