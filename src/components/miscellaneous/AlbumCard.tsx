import React from "react";
import { IAlbumItem } from '../../custom-types/spotifyreponse';

interface IAlBumCard{
    album:IAlbumItem
}

function AlbumCard (props:IAlBumCard){
  return (
    <div className="card">
      <img className="card-image" src={props.album.images[1].url} alt="icon" height="128" width="128"/>
      <p>Album : <a className="card-link" href={props.album.external_urls.spotify}>{props.album.name}</a></p>
      <p>Album Type : {props.album.album_type}</p>
      <p>Total Tracks : {props.album.total_tracks}</p>
      <p>Artists : {props.album.artists.map((artist,i)=>
        (<a className="card-link" href={artist.external_urls.spotify} key={artist.name}>
          {artist.name+ " "}</a>
        ))}
      </p>
      <p>Released On : {props.album.release_date}</p>
    </div>
  );
}

export default AlbumCard;