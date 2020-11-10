import React from 'react';
import renderer from 'react-test-renderer';

import SongCategories from '../components/pages/SongCategories';

describe('SongCategories Component',()=>{
    it('renders correctly', () => {
        const tree = renderer.create(<SongCategories />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});