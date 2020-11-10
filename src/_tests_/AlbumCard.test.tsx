import React from 'react';
import renderer from 'react-test-renderer';

import AlbumCard from '../components/miscellaneous/AlbumCard';
import { IAlbumItem } from '../custom-types/spotifyreponse';

it('renders correctly when an album is passed as prop', () => {
  const fakeAlbum:IAlbumItem = {
      album_type:'single',
      artists:[{external_urls:{spotify:'artist_fake_url'},name:"Fake Artist"}],
      external_urls:{ spotify: 'spotify_url'},
      name:'Album',
      release_date:'2020-11-11',
      total_tracks:1,
      images:[{url:'image_url1'},{url:'image_url2'},{url:'image_url3'}]   
     
  }; 
  const tree = renderer.create(<AlbumCard album={fakeAlbum}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

