import React, { useContext } from 'react';
import {AuthContext} from '../../contexts/AuthContext';

function NewReleases() {
  const authContext = useContext(AuthContext);
  console.log('user context:',authContext.user);
  return (
    <div className="App-header">
        In NewReleases
    </div>
  );
}

export default NewReleases;
