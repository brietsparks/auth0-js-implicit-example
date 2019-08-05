import React from 'react';

import Nav from '../Nav';
import Layout from '../Layout';
import { authenticator } from '../auth';
import Typography from '@material-ui/core/Typography';

const Public = () => {
  authenticator.authenticate();

  return (
    <div>
      <Nav/>

      <Layout>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Public Page
        </Typography>

        <Typography variant="h5" align="center" color="textSecondary" component="p">
          This page is public. You don't have to be logged in to see this.
        </Typography>
      </Layout>
    </div>
  );
};

export default Public;
