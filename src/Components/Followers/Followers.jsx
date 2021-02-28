import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
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
        <li className = {styles.si1} key={index}>
            <p>{fll.login}</p>
            <Link to={`/users/${fll.login}`} target="_blank" rel="noopener noreferrer">
                <img className={styles.profileImg} src={avatarUrl+fll.login} alt={fll.login}>
                </img>
            </Link>
        </li>
    );

    return (
        <div className={styles.container}>
            <h2 className = {styles.title}>Followers of {username}</h2>
            <ul className = {styles.si}>{followers}</ul>
        </div>
    )
}

export default Followers
