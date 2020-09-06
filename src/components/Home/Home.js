import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts'

// Home is a default page where all post shows
const Home = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    
    return (
        <div>
            {
            users.map(user => <Posts key={user.id} post = {user} /> ) 
            }
        </div>
    );
};

export default Home;