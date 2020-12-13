import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import { SongsListService } from './songs-list.service'
import { FormControl } from '@angular/forms'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongsListComponent implements OnInit {
  @Input() showAddSongs: string
  @Output() addPlayListSong: EventEmitter<any> = new EventEmitter()

  public songs: Array<any> = []
  public filterInput = new FormControl()
  public filterText: string
  public throttle = 300
  public scrollDistance = 1
  public scrollUpDistance = 2

  public array = []
  public sum = 100
  public direction = ''

  constructor(
    private songService: SongsListService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // implement local cache
    if (window.localStorage && window.localStorage.getItem('allSongs')) {
      setTimeout(() => {
        this.songs = JSON.parse(window.localStorage.getItem('allSongs'))
      }, 500)
    } else {
      this.songService.getSongsData().subscribe(data => {
        this.songs = data
        window.localStorage.setItem('allSongs', JSON.stringify(this.songs))
      })
    }
    setTimeout(() => {
      this.appendItems(0, this.sum)
      this.ref.markForCheck()
    }, 600)

    this.filterInput.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe(term => {
        this.filterText = term
      })
  }

  addSongs(song: any) {
    this.addPlayListSong.emit(song)
  }

  trackBySongID(index: number, song: any): string {
    return song.id
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method](this.songs[i])
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push')
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift')
  }

  onScrollDown(ev) {
    // add 20 items to scroll
    const start = this.sum
    this.sum += 20
    this.appendItems(start, this.sum)

    this.direction = 'down'
  }

  onUp(ev) {
    const start = this.sum
    this.sum += 20
    this.prependItems(start, this.sum)

    this.direction = 'up'
  }
}
