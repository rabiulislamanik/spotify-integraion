import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext';
import {useHistory } from 'react-router-dom';

function Navbar() {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    authContext.setUser({});
    localStorage.removeItem("UserAuth");
    history.push('/');
  }
  //check if the user in logged in
  if(authContext.user?.access_token){
    return (
        <nav className="navbar">
          <h1 className="logo">Spotify Integration</h1>
          <ul className="main-nav">
              <li> <Link to="/newreleases">New Releases</Link></li>
              <li><Link to="/featured">Featured Playlist</Link></li>
              <li> <Link to="/categories">Browse Genres</Link></li>
              <li><Link onClick={handleLogout} to="/">Logout</Link></li>
          </ul>
        </nav> 
      )
  }
  //else we wouldnt render the navabar
  return <div></div>;
}

export default Navbar;