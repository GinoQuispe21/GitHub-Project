import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';

const UserInfo = (info) => {

    const [infoH, setInfo] = React.useState();
    //avatar_url
    const [avatarUrl, setAvatarUrl] = React.useState('https://avatars.githubusercontent.com/');
    // const [username, setUsername] = React.useState();
    let { username } = useParams();

    
    useEffect(() => {
        axios.get(`${URL}users/${username}`)
        .then(res => {
            setInfo(res.data);
        });
        console.log("aaaaaa");
    },[]);

    return (
        <div>
            <img src={avatarUrl+username} alt={username}></img>
            <h1><a href={infoH?.html_url} target="_BLANK" rel="noreferrer">{username}</a></h1>
            <h3> Followers: {infoH?.followers}</h3>
            <h3> Following: {infoH?.following}</h3>
        </div>
    )
}

export default UserInfo;