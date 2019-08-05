import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(8, 0, 6)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main}>
      {children}
    </Container>
  );
};

export default Layout;
