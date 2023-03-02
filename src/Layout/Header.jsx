import React from 'react';
import { json, Link } from 'react-router-dom';
import {useOidcUser} from '@axa-fr/react-oidc'

 const Header  = () => {
  const { oidcUser, oidcUserLoadingState } = useOidcUser();
  return(<header>
    App
    <nav style={{display:"flex",justifyContent:"space-between"}}>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
{JSON.stringify(oidcUserLoadingState )}
    </nav>
  </header>);
};
export default Header