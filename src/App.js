import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Landing1 from './components/Landing1';
import Landing2 from './components/Landing2';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Landing1 />
      <Landing2 />
    </>
  );
}

export default App