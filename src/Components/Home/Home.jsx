import React from 'react';
import axios from 'axios';
import URL from '../../baseURL';
import styles from './home.module.css';
import UserInfo from '../UserInfo/UserInfo.jsx';

const Home = () => {

    const [infoH, setInfo] = React.useState();
    const [username, setUsername] = React.useState();

    const GetUserInfo = () => {
        axios.get(`${URL}users/${username}`)
        .then(res => {
            setInfo(res.data);
        });
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
                        <UserInfo info={infoH} />
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