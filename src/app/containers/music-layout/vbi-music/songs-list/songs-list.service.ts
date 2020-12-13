import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { mergeMap, map } from 'rxjs/operators'
import { SongsListConstant } from './songs-list.constants'
import { IAlbum, ISong, ISongItem } from './songs-list.model'

@Injectable({
  providedIn: 'root',
})
export class SongsListService {
  constructor(private http: HttpClient) {}
  getSongsData(): Observable<ISongItem[]> {
    return this.http.get(SongsListConstant.GET_SONGS_URL).pipe(
      mergeMap((albums: Array<any>) =>
        this.http.get(SongsListConstant.GET_ALBUMS_URL).pipe(
          map((songs: Array<ISong>) => {
            return songs.map((song: ISong) => {
              const album = albums.find(
                (albumItem: IAlbum) => albumItem.id === song.albumId,
              )
              return {
                albumTitle: album.title,
                albumUserId: album.userId,
                ...song,
              }
            })
          }),
        ),
      ),
    )
  }
}
