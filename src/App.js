import './App.css';
import RouteList from './Routes';
import { BrowserRouter as Router } from "react-router-dom";

// const configuration = {
//   client_id: 'interactive.public.short',
//   redirect_uri: window.location.origin + '/authentication/callback',
//   silent_redirect_uri: window.location.origin + '/authentications/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
//   scope: 'openid profile email api offline_access',
//   authority: 'https://demo.duendesoftware.com',
//   service_worker_relative_url:'/OidcServiceWorker.js',
//   service_worker_only:true,
// };

const configuration = {
  SignInScheme :"Cookies",
  authority:"https://sts-lle.atsol.com",
  RequireHttpsMetadata :false,
  client_id :"fstnr.tps",
  ClientSecret:"secret",
  ResponseType: "code id_token",
  GetClaimsFromUserInfoEndpoint: true,
  SaveTokens:true,
  redirect_uri: window.location.origin + '/authentication/callback',
  silent_redirect_uri: window.location.origin + '/authentication/silent-callback',
  scope: 'openid',
  service_worker_relative_url:'/OidcServiceWorker.js',
  service_worker_only:true
};
function App() {
  return (
 <div className='App'>
 
  <Router>
  < RouteList/>
  </Router>
 </div>
  );
}

export default App;
