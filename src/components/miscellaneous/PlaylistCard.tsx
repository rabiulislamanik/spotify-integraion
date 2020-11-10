import React from "react";
import { IPlaylistItem } from '../../custom-types/spotifyreponse';

interface IPlaylistCard{
    playlist:IPlaylistItem
}

function PlaylistCard (props:IPlaylistCard){
  return (
    <div className="card">
      <img className="card-image" src={props.playlist.images[0].url} alt="icon" height="128" width="128"/>
      <p><a className="card-link" href={props.playlist.external_urls.spotify}>{props.playlist.name}</a></p>
      <p>{props.playlist.description}</p>
      <p>Playlist by : <a className="card-link" href={props.playlist.owner.external_urls.spotify}>
          {props.playlist.owner.display_name}
      </a></p>
    </div>
  );
}

export default PlaylistCard;