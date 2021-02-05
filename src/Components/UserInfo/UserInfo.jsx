import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import styles from './userInfo.module.css';

const UserInfo = () => {

    const [infoH, setInfo] = React.useState();
    const [avatarUrl] = React.useState('https://avatars.githubusercontent.com/');
    let { username } = useParams();

    
    useEffect(() => {
        axios.get(`${URL}users/${username}`)
        .then(res => {
            setInfo(res.data);
        });
    },[username]);

    return (
        <div className={styles.container}>
            <div className={styles.titleRow}>
                <a className={styles.title} href={infoH?.html_url} target="_BLANK" rel="noreferrer">{username}</a>
            </div>
            <div className={styles.infoRow}>
                <div className={styles.infoCol}>
                    <div className={styles.infoContainer}>
                        <h3 className={styles.name}>{infoH?.name}</h3>
                        <p className={styles.bio}>{infoH?.bio}</p>
                        <p> Followers: {infoH?.followers}</p>
                        <p> Following: {infoH?.following}</p>
                        <button className={styles.langButton}>Languages</button>
                    </div>
                </div>
                <div className={styles.imgCol}>
                    <img className={styles.profileImg} src={avatarUrl+username} alt={username}></img>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;