import React from 'react';

const {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_AUTHORIZE_URL,
  REACT_APP_REDIRECT_URL
} = process.env;

const clientId = REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyAuthUrl = REACT_APP_SPOTIFY_AUTHORIZE_URL;
const appRedirectUrl = REACT_APP_REDIRECT_URL;
const scopes = [
  "user-read-private"
];

function Login() {
  return (
    <header className="App-header">
        <p>
        Please Login to explore the website.
        </p>
        <a
        className="App-link"
        href={`${spotifyAuthUrl}?client_id=${clientId}&redirect_uri=${appRedirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
        Login to Spotify
        </a>
    </header>
  );
}

export default Login;