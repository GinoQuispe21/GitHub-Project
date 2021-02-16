import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import styles from './following.module.css';

const Following = () => {

    const [Following, setFollowing] = React.useState();
    const [avatarUrl] = React.useState('https://avatars.githubusercontent.com/');
    let { username } = useParams();

    useEffect(() => {
        axios.get(`${URL}users/${username}/following`)
        .then(res => {
            setFollowing(res.data);
        });
    },[username]);

    const followings = Following?.map((fll) => 
        <li>
            <p>{fll.login}</p>
            <img className={styles.profileImg} src={avatarUrl+fll.login} alt={fll.login}></img>
        </li>
    );

    return (
        <div className={styles.container}>
            <h2>Following {username}</h2>
            <ul>{followings}</ul>
        </div>
    )
}

export default Following;
