import React from 'react';
import styles from './home.module.css';
import si from '../../Assets/logo.png';
import {useHistory} from "react-router-dom";

const Home = () => {

    const [username, setUsername] = React.useState('');

    let history = useHistory();

    const GetUserInfo = () => {
        history.push(`/users/${username}`);
    }

    const onchange = (event) => {
        setUsername(event.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            history.push(`/users/${username}`);
        }
      }

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Search Username</h1>
                    </div>
                    <div className={styles.imageContainer}>
                        <img className = {styles.imageLogo}src={si} alt="404 gg u suck" />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.userInput} value={username} onChange={onchange} onKeyPress={handleKeyPress}></input>
                    <button className={styles.button} onClick={GetUserInfo}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Home;