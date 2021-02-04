import React from 'react';
//import axios from 'axios';
//import URL from '../../baseURL';
import styles from './home.module.css';
import si from '../../Assets/si.png';
import {useHistory} from "react-router-dom";

const Home = () => {

    const [username, setUsername] = React.useState();

    let history = useHistory();

    const GetUserInfo = () => {
        history.push(`/users/${username}`)
        
        
        /*axios.get(`${URL}users/${username}`)
        .then(res => {
            setInfo(res.data);
        });*/
    }

    const onchange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Search Username</h1>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={si} alt="404 gg u suck" />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.userInput} value={username} onChange={onchange}></input>
                    <button className={styles.button} onClick={GetUserInfo}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Home;