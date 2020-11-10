import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../components/auth/Login';


test('renders Login page properly', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login to Spotify/i);
  const appNameHeader = screen.getByText(/Spotify Integration/i);
  const appLogo = screen.getByAltText('Logo');
  expect(linkElement).toBeInTheDocument();
  expect(appNameHeader).toBeInTheDocument();
  expect(appLogo).toBeInTheDocument();
});