import React from 'react';
import renderer from 'react-test-renderer';

import CategoryCard from '../components/miscellaneous/CategoryCard';
import { ICategoryItem } from '../custom-types/spotifyreponse';

it('renders correctly when an Category is passed as prop', () => {
  const fakeCategory:ICategoryItem = {
    icons:[{url:'icon_url'}],
    name:'Dummy Category',
    id:'dummy_category'
  }; 
  const tree = renderer.create(<CategoryCard category={fakeCategory}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
