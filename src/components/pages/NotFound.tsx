import React, { useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext';

function SongCategories() {
  const authContext = useContext(AuthContext);
  console.log('user context:',authContext.user);
  return (
    <div className="App-header">
        <p>Page Not Found.</p>
        <a className="App-link" href="/newreleases">Go to home page</a>
    </div>
  );
}

export default SongCategories;
