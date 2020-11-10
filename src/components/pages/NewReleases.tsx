import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import axios from 'axios'; 
import { IAlbumItem, INewReleaseAlbumResponse } from '../../custom-types/spotifyreponse';
import {newReleaseUrl} from '../../consts/spotifyUrls';
import CardContainer from '../miscellaneous/CardContainer';
import AlbumCard from '../miscellaneous/AlbumCard';


function NewReleases() {
  const authContext = useContext(AuthContext);
  console.log('user context:',authContext.user);
  const initialAlbum:IAlbumItem[] = [];
  const [albums, setAlbums]: [IAlbumItem[], (albums: IAlbumItem[]) => void] = useState(initialAlbum);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  const [nextUrl, setNextUrl]: [string|null, (total: string|null) => void] = useState<string|null>(null);
  

  useEffect(() => {
    fetchNewReleases(newReleaseUrl);
  }, []);

  const handleLoadMore = () =>{
    if(!nextUrl)return;
    setLoading(true);
    fetchNewReleases(nextUrl);
  }

  const fetchNewReleases = (url:string)=>{
    axios.get<INewReleaseAlbumResponse>(url,
      {
        headers: {
          'Authorization': `Bearer ${authContext.user?.access_token}`
        }
      }
      )
      .then(response => {
        if(response){
          console.log(response);
          console.log(response.data.albums);
          setAlbums([...albums,...response.data.albums.items]);
          setLoading(false);
          setNextUrl(response.data.albums.next);
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
      {!loading && albums.length!==0 && (<h1>New Released Albums</h1>)}
      <CardContainer>
      {albums.map((album,i) => (
        <AlbumCard album={album} key={album.name+i}/>
      ))}
      </CardContainer>

      {loading && albums.length===0 &&(<h1>Loading...</h1>)}
      {!loading && error && (<p className="App-header">{error}</p>)}
      {nextUrl && (<button className="load-more" onClick={handleLoadMore}>Load More</button>)}
      {loading && albums.length>0 && (<p className="App-header">{error}</p>)}
    </div>
  );
}

export default NewReleases;