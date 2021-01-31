import React, {useEffect} from 'react'

const UserInfo = (info) => {

    //avatar_url
    const [avatarUrl, setAvatarUrl] = React.useState('https://avatars.githubusercontent.com/');
    const [username, setUsername] = React.useState();
    
    useEffect(() => {
        setUsername(info?.info?.login);
    },);

    return (
        <div>
            <img src={avatarUrl+username} alt={username}></img>
        </div>
    )
}

export default UserInfo;