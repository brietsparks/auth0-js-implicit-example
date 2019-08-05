import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { authenticator } from '../auth';
import { Typography } from '@material-ui/core';

const style = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
};

const LoginCallback = () => {
  const [redirectTo, setRedirectTo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    authenticator.handleLoginSuccess()
      .then((result) => {
        setRedirectTo(result.redirectTo);
      })
      .catch(err => setError(err.message));
  }, []);

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  return error ? (
    <div style={style}>
      <Typography>An error occurred attempting to log in</Typography>
    </div>
  ) : null;
};

export default LoginCallback;
