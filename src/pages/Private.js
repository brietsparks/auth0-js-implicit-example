import React from 'react';
import Typography from '@material-ui/core/Typography';

import Nav from '../Nav';
import Layout from '../Layout';
import { authenticator, isUserLoggedIn } from '../auth';

const Private = () => {
  authenticator.authenticate('/private');

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
      </Layout>
    </div>
  );
};

export default Private;
