// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { makeStyles, Theme } from '@material-ui/core/styles';

// function Alert(props: AlertProps) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
    
//     },
//   },
// }));

// export default function CustomizedSnackbars() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        
//       </Snackbar>
//       <Alert className={classes.pos} severity="error">404</Alert>
//       <Alert severity="warning">Page Not Found!</Alert>

//     </div>
//   );
// }

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>404 Page Not Found!</h1>
      <LinearProgress color="secondary" />
    </div>
  );
}