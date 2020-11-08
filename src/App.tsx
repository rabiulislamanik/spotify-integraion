import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/auth/Login';
import NewReleases from './components/pages/NewReleases';
import SongCategories from './components/pages/SongCategories';
import FeaturedPlaylist from './components/pages/FeaturedPlaylist';
import NotFound from './components/pages/NotFound';
import Navbar from './components/headers/Navbar';
import AuthRedirect from './components/auth/AuthRedirect';
import {AuthProvider} from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/authRedirect" component={AuthRedirect} />
              <ProtectedRoute path="/newreleases" component={NewReleases} />
              <ProtectedRoute path="/featured" component={FeaturedPlaylist} />
              <ProtectedRoute path="/categories" component={SongCategories} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;