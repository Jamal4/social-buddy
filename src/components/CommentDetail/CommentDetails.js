import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Images from './Images/Images';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

// CommentDetails is a child of Comments components
export default function CommentDetails(props) {
    const {name, email,body,id} = props.comment;
            
    const [img, setImg] = useState([]);

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/photos/${id}` 
        fetch(url).then(res => res.json().then(data => setImg(data)))
    },[]);

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <List className={classes.root}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"> 
                    <Images img = {img}></Images>)
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={email}
                secondary={
                    <React.Fragment>
                        <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                        >
                        @{name}_
                        </Typography>
                        {body}
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
    </List>
 
  );
};
