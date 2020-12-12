import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from "@angular/core";
import { SongsListService } from "./songs-list.service";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-songs-list",
  templateUrl: "./songs-list.component.html",
  styleUrls: ["./songs-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsListComponent implements OnInit {
  public songs: Array<any> = [];
  public filterInput = new FormControl();
  public filterText: string;
  constructor(
    private songService: SongsListService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // implement local cache

    if (window.localStorage && window.localStorage.getItem("allSongs")) {
      setTimeout(() => {
        this.songs = JSON.parse(window.localStorage.getItem("allSongs"));
        this.ref.markForCheck();
      }, 500);
    } else {
      this.songService.getSongsData().subscribe((data) => {
        this.songs = data;
        window.localStorage.setItem("allSongs", JSON.stringify(this.songs));
      });
    }
    this.ref.markForCheck();

    // this.songs = window.localStorage && window.localStorage.getItem('allSongs') || this.songService.getSongsData().subscribe((data) => {
    //   this.songs = data;
    //   this.ref.markForCheck();
    // });
    this.filterInput.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((term) => {
        this.filterText = term;
      });
  }
  trackBySongID(index: number, song: any): string {
    return song.id;
  }
}
