import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { IPlaylistItem } from './play-list.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayListComponent implements OnInit {
  public playLists: Array<IPlaylistItem> = []
  public toCachePlayList: Array<IPlaylistItem>
  public showPlaylist = true
  public template: TemplateRef<any> = null
  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.initToCachePlayList()
    this.getCachePlayList()
  }

  initToCachePlayList() {
    this.toCachePlayList = [
      {
        name: 'myplaylist',
        songs: [],
      },
    ];
  }

  getCachePlayList() {
    if (window.localStorage && window.localStorage.getItem('playlists')) {
      this.playLists = JSON.parse(window.localStorage.getItem('playlists'))
    }
    this.toCachePlayList[0].name += `${this.playLists.length + 1}`
  }

  showRef(template: TemplateRef<any>) {
    this.template = template;
  }

  createNewPlayList(template: TemplateRef<any>) {
    this.initToCachePlayList()
    this.getCachePlayList()
    this.showRef(template)
  }

  saveAndClose(template: TemplateRef<any>) {
    if (this.playLists.length > 0) {
      let allChild = false
      this.playLists.forEach(item => {
        if (item.name === this.toCachePlayList[0].name) {
          item = this.toCachePlayList[0]
          allChild = true
        }
      })
      if (!allChild) {
        this.playLists.push(this.toCachePlayList[0])
      }
    } else {
      this.playLists.push(this.toCachePlayList[0])
    }
    if (window.localStorage) {
      window.localStorage.setItem('playlists', JSON.stringify(this.playLists))
    }
    this.showRef(template)
  }

  togglePlayList(toggleValue: boolean) {
    this.showPlaylist = toggleValue
    this.changeRef.markForCheck()
  }

  handleAddSong(event) {
    if (this.toCachePlayList) {
      const obj = this.toCachePlayList[0]
      obj['songs'].push(event)
    }
  }
  editSong(template: TemplateRef<any>, playlist: IPlaylistItem) {
    this.toCachePlayList = Array.of(playlist)
    this.showRef(template)
  }

  removeSongFromPlayList(index: number) {
    this.toCachePlayList[0].songs.splice(index, 1)
  }

  shuffleSongs() {
    const obj = this.toCachePlayList[0]
    obj['songs'].sort(() => {
      return Math.random() - 0.5
    })
  }
}
