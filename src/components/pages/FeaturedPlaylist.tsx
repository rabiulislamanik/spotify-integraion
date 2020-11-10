import React, { useContext, useEffect, useState } from 'react';
import { featuredPlaylistUrl } from '../../consts/spotifyUrls';
import {AuthContext} from '../../contexts/AuthContext';
import { IPlaylistItem, IFeaturedPlaylistsResponse } from '../../custom-types/spotifyreponse';
import PlaylistCard from '../miscellaneous/PlaylistCard';
import CardContainer from '../miscellaneous/CardContainer';
import axios from 'axios'; 

function FeaturedPlayList() {
  const authContext = useContext(AuthContext);
  console.log('user context:',authContext.user);
  const initialPlaylists:IPlaylistItem[] = [];
  const [playlists, setPlaylists]: [IPlaylistItem[], (playlists: IPlaylistItem[]) => void] = useState(initialPlaylists);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [nextUrl, setNextUrl]: [string|null, (total: string|null) => void] = useState<string|null>(null);
  const [playlistMessage, setPlaylistMessage]: [string, (message: string) => void] = useState("");

  useEffect(() => {
    fetchFeaturedPlaylists(featuredPlaylistUrl);
  }, []);

  const handleLoadMore = () =>{
    if(!nextUrl)return;
    setLoading(true);
    fetchFeaturedPlaylists(nextUrl);
  }

  const fetchFeaturedPlaylists = (url:string)=>{
    axios.get<IFeaturedPlaylistsResponse>(url,
      {
        headers: {
          'Authorization': `Bearer ${authContext.user?.access_token}`
        }
      }
      )
      .then(response => {
        if(response){
          console.log(response);
          console.log(response.data.playlists);
          setPlaylists([...playlists,...response.data.playlists.items]);
          setPlaylistMessage(response.data.message);
          setLoading(false);
          setNextUrl(response.data.playlists.next);
        } 
      })
      .catch(error => {
        console.log('error',error);
        const errorMessage =
        error.response.status === 401
          ? "Not Authorized"
          : "An unexpected error has occurred";
        setError(errorMessage);
        setLoading(false);
      });
  }
   
  return (
    <div>
      {!loading && playlists.length!==0 && (<h1>{playlistMessage}</h1>)}
      <CardContainer>
      {playlists.map((playlist,i) => (
        <PlaylistCard playlist={playlist} key={playlist.name+i}/>
      ))}
      </CardContainer>

      {loading && playlists.length===0 &&(<h1>Loading...</h1>)}
      {!loading && error && (<p className="App-header">{error}</p>)}
      {nextUrl && (<button className="load-more" onClick={handleLoadMore}>Load More</button>)}
      {loading && playlists.length>0 && (<p className="App-header">{error}</p>)}
    </div>
  );
}

export default FeaturedPlayList;