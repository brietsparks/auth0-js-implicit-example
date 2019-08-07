import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

import { isUserLoggedIn, authenticator } from './auth';


const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
  },
}));


const Nav = () => {
  const classes = useStyles();

  const handleClickLogin = () => authenticator.promptLogin(window.location.pathname);
  const handleClickLogout = () => authenticator.logout();

  return (
    <div>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link to="/" className={classes.link}>
              Auth0.js Implicit Example
            </Link>
          </Typography>
          <nav>
            <Link to="/public" className={classes.link}>Public Page</Link>
            <Link to="/private" className={classes.link}>Private Page</Link>
          </nav>
          {isUserLoggedIn()
            ? <Button onClick={handleClickLogout}>Logout</Button>
            : <Button onClick={handleClickLogin}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
