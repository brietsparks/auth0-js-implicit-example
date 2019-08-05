import auth0 from 'auth0-js';
import Authenticator from 'auth0-js-implicit';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const client = new auth0.WebAuth({ domain, clientID, audience });

const logoutReturnLocation = window.location.origin + '/logged-out';

export const authenticator = new Authenticator(client, logoutReturnLocation);

export const isUserLoggedIn = () => !!authenticator.getAuthStorage().retrieveAccessToken();
