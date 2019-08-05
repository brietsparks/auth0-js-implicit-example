import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  message: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  }
}));


const LoggedOut = () => {
  const [msUntilRedirect, setMsUntilRedirect] = useState(2000);
  setTimeout(() => setMsUntilRedirect(msUntilRedirect - 1000), 1000);
  const classes = useStyles();

  return msUntilRedirect === 0
    ? <Redirect to="/"/>
    : (
      <div className={classes.message}>
        Logging out
        <br/>
        <CircularDeterminate/>
      </div>
    )
  ;
};

export default LoggedOut;

function CircularDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgress
      size={80}
      className={classes.progress}
      variant="determinate"
      value={progress}
    />
  );
}
