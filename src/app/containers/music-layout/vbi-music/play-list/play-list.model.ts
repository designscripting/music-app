import { ISongItem } from '../songs-list/songs-list.model';

export interface IPlaylistItem {
  name: string;
  songs: Array<ISongItem>;
}
