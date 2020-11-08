import React, { useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext';

function FeaturedPlayList() {
  const authContext = useContext(AuthContext);
  console.log('user context:',authContext.user);
  return (
    <div className="App-header">
        In FeaturedPlayList
    </div>
  );
}

export default FeaturedPlayList;