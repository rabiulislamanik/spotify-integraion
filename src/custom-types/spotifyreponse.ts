export interface ISpotifyCommonResponse {
    next:string|null,
    total:number
}

export interface IAlbums extends ISpotifyCommonResponse{
    items:IAlbumItem[]
}
  
export interface INewReleaseAlbumResponse{
    albums:IAlbums
}

export interface IAlbumItem {
    album_type:string,
    artists:{external_urls:{spotify:string},name:string}[],
    external_urls:{ spotify: string},
    name:string,
    release_date:string,
    total_tracks:number,
    images:{url:string}[]
}

export interface IPlaylists extends ISpotifyCommonResponse{
    items:IPlaylistItem[]
}

export interface IFeaturedPlaylistsResponse{
    message:string,
    playlists:IPlaylists
}


export interface IPlaylistItem {
    description:string,
    external_urls:{ spotify: string},
    name:string,
    owner:{display_name:string,external_urls:{ spotify: string}},
    images:{url:string}[]
}


export interface ICategories extends ISpotifyCommonResponse{
    items:ICategoryItem[]
}

export interface ICategoriesResponse{
    message:string,
    categories:ICategories
}

export interface ICategoryItem {
    icons:{url:string}[],
    name:string,
    id:string
}
