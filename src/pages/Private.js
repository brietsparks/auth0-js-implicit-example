import React from 'react';
import Typography from '@material-ui/core/Typography';

import Nav from '../Nav';
import Layout from '../Layout';
import { authenticator, isUserLoggedIn } from '../auth';

const Private = () => {
  authenticator.authenticate('/private').then(result => {
    console.log(`Authenticated:`, result);
  });

  if (!isUserLoggedIn()) {
    return null;
  }

  return (
    <div>
      <Nav/>

      <Layout>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Private Page
        </Typography>

        <Typography variant="h5" align="center" color="textSecondary" component="p">
          This page is top secret! You are logged in if you are seeing this!
        </Typography>

        <Typography align="center" color="textSecondary" component="p">
          Access tokens have an life of 30 seconds and will silently reauthenticate 5 seconds before expiring.
          Check the console to see this.
        </Typography>
      </Layout>
    </div>
  );
};

export default Private;
