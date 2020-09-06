import React  from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
  }),
);
// Images is a child of CommentDetails component
export default function Images(props) {
    const {url} = props.img;

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar> 
                    <Avatar alt="Remy Sharp" src={url} className={classes.large}/>
                </ListItemAvatar>         
            </ListItem>  
        </List>
    );
}
