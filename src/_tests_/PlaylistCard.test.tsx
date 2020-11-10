import React from 'react';
import renderer from 'react-test-renderer';

import PlaylistCard from '../components/miscellaneous/PlaylistCard';
import { IPlaylistItem } from '../custom-types/spotifyreponse';

it('renders correctly when an Playlist is passed as prop', () => {
  const fakePlaylist:IPlaylistItem = {
    description:'Title',
    external_urls:{ spotify: 'Url_to_spotify'},
    name:'Dummy Playlist',
    owner:{display_name:'Dummy Owner',external_urls:{ spotify: 'Another url to spotify'}},
    images:[{url:'url_to_image'}]
  }; 
  const tree = renderer.create(<PlaylistCard playlist={fakePlaylist}/>).toJSON();
  expect(tree).toMatchSnapshot();
});