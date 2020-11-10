import React from 'react';
import { render, screen } from '@testing-library/react';
import NewReleases from '../components/pages/NewReleases';
import { AuthContext } from '../contexts/AuthContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { BrowserRouter as Router} from "react-router-dom";

test('renders a child if authContext has user', () => {
  render(
    <AuthContext.Provider value={{user:{access_token:'access_token'}}}>
      <Router>
        <ProtectedRoute component={NewReleases}/>
      </Router>
    </AuthContext.Provider>
  );

  const newReleasesDiv= screen.queryByTestId(/new-releases/i);
  expect(newReleasesDiv).toBeInTheDocument();
});

test('does not render child if authContext has no user', () => {
  render(
    <AuthContext.Provider value={{}}>
      <Router>
        <ProtectedRoute component={NewReleases}/>
      </Router>
    </AuthContext.Provider>
  );
  //using queryBy here cause getBy throws error if gets null
  const newReleasesDiv= screen.queryByTestId(/new-releases/i);
  expect(newReleasesDiv).toBeNull();
});