import React from 'react';
import axios from 'axios';
import URL from '../../baseURL';    

const Home = () => {

    const [username, setUsername] = React.useState();
    const [info, setInfo] = React.useState();

    const GetUserInfo = () =>{
        axios.get(`${URL}users/${username}/followers`)
        .then(res => {
            setInfo(res.data);
            console.log(info);
        })
    }

    const onchange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div>
            <input value={username} onChange={onchange}></input>
            <h2>{username}</h2>
            <h2>{info?.login}</h2>
            <button onClick={GetUserInfo}>soy un bonito boton</button>
            <div>
                <p>{JSON.stringify(info)}</p>
            </div>
        </div>
    )
}
export default Home;