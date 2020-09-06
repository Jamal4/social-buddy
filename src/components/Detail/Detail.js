import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  
});

// Detail is a onClick event of a Home component which shows more information about particular post
export default function Detail() {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}` 
        fetch(url)
        .then(res => res.json()
        .then(data => setUser(data)));
    },[]);

        const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;

  return (

        <Card className={classes.root} variant="outlined">
            <CardContent>     
                <Typography variant="h5" component="h2">
                    Title 
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                   {user.title}
                </Typography>
                <Typography variant="h5" component="h2">
                    Post 
                </Typography>
                <Typography variant="body2" component="p">
                    {user.body}
                <br />
                    {'"a benevolent smile"'}
                 </Typography>
            </CardContent>
          
            <CardActions >
                <Button size="small">See Comments Below</Button>
            </CardActions>

            <Comments />
        
        </Card>
    );
}

