import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  TemplateRef,
} from "@angular/core";

@Component({
  selector: "app-play-list",
  templateUrl: "./play-list.component.html",
  styleUrls: ["./play-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayListComponent implements OnInit {
  // public playLists: Array<any> = [
  //   {
  //     name: "myplaylist1",
  //     songs: [
  //       {
  //         albumId: 100,
  //         id: 4997,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //       {
  //         albumId: 100,
  //         id: 4998,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //       {
  //         albumId: 100,
  //         id: 4999,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //     ],
  //   },
  //   {
  //     name: "myplaylist2",
  //     songs: [
  //       {
  //         albumId: 100,
  //         id: 4997,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //       {
  //         albumId: 100,
  //         id: 4998,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //       {
  //         albumId: 100,
  //         id: 4999,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //     ],
  //   },
  //   {
  //     name: "myplaylist3",
  //     songs: [
  //       {
  //         albumId: 100,
  //         id: 4997,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //       {
  //         albumId: 100,
  //         id: 4998,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //       {
  //         albumId: 100,
  //         id: 4999,
  //         title: "sunt amet autem exercitationem fuga consequatur",
  //         url: "https://via.placeholder.com/600/13454b",
  //         thumbnailUrl: "https://via.placeholder.com/150/13454b",
  //       },
  //     ],
  //   },
  // ];
  public playLists: Array<any> = [];
  public toCachePlayList: Array<any>;
  public showPlaylist = true;
  public template: TemplateRef<any> = null;
  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.toCachePlayList = [
      {
        name: "myplaylist",
        songs: [],
      },
    ];
    this.getCachePlayList();
  }

  getCachePlayList() {
    if (window.localStorage && window.localStorage.getItem("playlists")) {
      this.playLists = JSON.parse(window.localStorage.getItem("playlists"));
      this.toCachePlayList[0].name += `${this.playLists.length + 1}`;
    }
  }

  showRef(template: TemplateRef<any>) {
    this.template = template;
  }

  createNewPlayList(template: TemplateRef<any>) {
    this.getCachePlayList();
    this.showRef(template);
  }

  saveAndClose(template: TemplateRef<any>) {
    if (this.playLists.length > 0) {
      this.playLists.forEach((item) => {
        if (item.name === this.toCachePlayList[0].name) {
          item = this.toCachePlayList[0];
        }
      });
    } else {
      this.playLists.push(this.toCachePlayList[0]);
    }
    if (window.localStorage) {
      window.localStorage.setItem("playlists", JSON.stringify(this.playLists));
    }
    this.showRef(template);
  }

  togglePlayList(toggleValue: boolean) {
    this.showPlaylist = toggleValue;
    this.changeRef.markForCheck();
  }

  handleAddSong(event) {
    if (this.toCachePlayList) {
      const obj = this.toCachePlayList[0];
      obj["songs"].push(event);
    }
  }
  editSong(template: TemplateRef<any>, playlist: any) {
    this.toCachePlayList = Array.of(playlist);
    this.showRef(template);
  }

  removeSongFromPlayList(index: number){
    this.toCachePlayList[0].songs.splice(index,1);
  }

  shuffleSongs(){
    const obj = this.toCachePlayList[0];
      obj["songs"].sort( () => {
        return (Math.random() - 0.5);
      });
  }
}
