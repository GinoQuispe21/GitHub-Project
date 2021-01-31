import React from 'react';
import axios from 'axios';
import UserInfo from '../UserInfo/UserInfo.jsx';
import URL from '../../baseURL';    

const Home = () => {

    const [infoH, setInfo] = React.useState();
    const [username, setUsername] = React.useState();


    const GetUserInfo = () =>{
        axios.get(`${URL}users/${username}`)
        .then(res => {
            setInfo(res.data);
        })
    }

    const onchange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div>
            <input value={username} onChange={onchange}></input>
            <button onClick={GetUserInfo}>Busca tu pelada</button>
            <UserInfo info={infoH} />
        </div>
    )
}
export default Home;