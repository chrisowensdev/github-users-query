import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UserProfile = props => {
    const [ repos, setRepos ] = useState([])

    const { username } = useParams();
    console.log("Params", username);

    useEffect(() => {
        (async function() {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await response.json();
            setRepos(repos);
        })();
    }, [setRepos, username]);


    return (
        <>
        <ul>
        {repos.map(repo => {
        return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>);      
    })}
        </ul>
        <Link to="/">Return to the search</Link>
        </>
    )
}


export default UserProfile;