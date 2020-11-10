import React from 'react';
import renderer from 'react-test-renderer';

import FeaturedPlaylist from '../components/pages/FeaturedPlaylist';

describe('FeaturedPlaylist Component',()=>{
    it('renders correctly', () => {
        const tree = renderer.create(<FeaturedPlaylist />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});