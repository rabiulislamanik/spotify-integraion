import React, { useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext';

function SongCategories() {
  const authContext = useContext(AuthContext);
  console.log('user context:',authContext.user);
  return (
    <div className="App-header">
        In SongCategories
    </div>
  );
}

export default SongCategories;
