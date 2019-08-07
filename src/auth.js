import auth0 from 'auth0-js';
import Authenticator from 'auth0-js-implicit';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const redirectUri = window.location.origin + '/login-callback';
const logoutReturnLocation = window.location.origin + '/logged-out';

const client = new auth0.WebAuth({
  domain,
  clientID,
  audience,
  redirectUri,
});

// In the Auth0 API, the "Token Expiration For Browser Flows (Seconds)" is set to 30
// here, reauthenticationLeeway, so 5 seconds before expiration, it will silently reauthenticate
export const authenticator = new Authenticator(client, logoutReturnLocation, {
  reauthenticationLeeway: 5,
  onReauthenticationSuccess,
  onReauthenticationFailure: error => console.log('Reauthentication failure: ', error)
});

export const isUserLoggedIn = () => !!authenticator.getAuthStorage().retrieveAccessToken();

function onReauthenticationSuccess(result) {
  console.log('Silently reauthenticated: ', result);
}
