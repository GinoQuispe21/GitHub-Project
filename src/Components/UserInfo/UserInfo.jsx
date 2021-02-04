import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";

const UserInfo = (info) => {

    //avatar_url
    const [avatarUrl, setAvatarUrl] = React.useState('https://avatars.githubusercontent.com/');
    // const [username, setUsername] = React.useState();
    let { username } = useParams();

    
    // useEffect(() => {
    //     setUsername(info?.info?.login);
    // },);

    return (
        <div>
            <img src={avatarUrl+username} alt={username}></img>
            <h1>{username}</h1>
        </div>
    )
}

export default UserInfo;