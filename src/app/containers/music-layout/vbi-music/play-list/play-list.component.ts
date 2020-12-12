import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-play-list",
  templateUrl: "./play-list.component.html",
  styleUrls: ["./play-list.component.scss"],
})
export class PlayListComponent implements OnInit {
  public playLists: Array<any> = [
    {
      name: "myplaylist1",
      songs: [
        {
          albumId: 100,
          id: 4997,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
        {
          albumId: 100,
          id: 4998,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
        {
          albumId: 100,
          id: 4999,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
      ],
    },
    {
      name: "myplaylist2",
      songs: [
        {
          albumId: 100,
          id: 4997,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
        {
          albumId: 100,
          id: 4998,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
        {
          albumId: 100,
          id: 4999,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
      ],
    },
    {
      name: "myplaylist3",
      songs: [
        {
          albumId: 100,
          id: 4997,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
        {
          albumId: 100,
          id: 4998,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
        {
          albumId: 100,
          id: 4999,
          title: "sunt amet autem exercitationem fuga consequatur",
          url: "https://via.placeholder.com/600/13454b",
          thumbnailUrl: "https://via.placeholder.com/150/13454b",
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
