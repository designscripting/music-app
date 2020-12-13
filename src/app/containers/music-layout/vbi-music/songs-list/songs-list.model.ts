export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface ISong {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface ISongItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumTitle: string;
  albumUserId: number;
}
