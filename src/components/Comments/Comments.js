import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useParams } from 'react-router';
import CommentDetails from '../CommentDetail/CommentDetails';

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

// Comments is a rendered in Details component
export default function Comments(props) {
    const {id} = useParams();
    const [comment, setComment] = useState([]);
    
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}/comments` 
        fetch(url)
        .then(res => res.json()
        .then(data => setComment(data)))
    },[]);

        const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;

    return ( 
        <Card className={classes.root} variant="outlined">
            {
            comment.map(item => <CommentDetails
                                key = {item.id} 
                                comment  = {item}
                                ></CommentDetails>)
            }    
        </Card>
  );
};
