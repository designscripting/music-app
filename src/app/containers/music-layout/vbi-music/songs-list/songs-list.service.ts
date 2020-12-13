import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { mergeMap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SongsListService {
  constructor(private http: HttpClient) {}
  getSongsData(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/albums").pipe(
      mergeMap((albums: Array<any>) =>
        this.http.get("https://jsonplaceholder.typicode.com/photos").pipe(
          map((songs: Array<any>) => {
            return songs
              .map((song) => {
                const album = albums.find(
                  (albumItem) => albumItem.id === song.albumId
                );
                return {
                  albumTitle: album.title,
                  albumUserId: album.userId,
                  ...song,
                };
              })
          })
        )
      )
    );
  }
}
