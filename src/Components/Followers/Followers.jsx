import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import styles from './followers.module.css';

const Followers = () => {

    const [Followers, setFollowers] = React.useState();
    const [avatarUrl] = React.useState('https://avatars.githubusercontent.com/');
    let { username } = useParams();

    useEffect(() => {
        axios.get(`${URL}users/${username}/followers`)
        .then(res => {
            setFollowers(res.data);
        });
    },[username]);

    const followers = Followers?.map((fll, index) => 
        <li key={index}>
            <p>{fll.login}</p>
            <img className={styles.profileImg} src={avatarUrl+fll.login} alt={fll.login}></img>
        </li>
    );

    return (
        <div className={styles.container}>
            <h2>Followers of {username}</h2>
            <ul>{followers}</ul>
        </div>
    )
}

export default Followers
