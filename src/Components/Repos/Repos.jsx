import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import styles from './Repos.module.css';
import './languages.css';

const Repos = () => {
    const [reposInfo, setReposInfo] = React.useState();
    let { username } = useParams();
    const [repoUrl] = React.useState(`https://github.com/${username}`)

    const repos = reposInfo?.map(({name, description, language}, index) =>
        <a className={`${styles.listItem} ${language}`} key={index} href={`${repoUrl}/${name}`}  target="_blank" rel="noopener noreferrer">
            <p className={styles.repoTitle}>{name}</p>
            <p className={styles.repoDesc}>{description}</p>
            <p className={`${styles.repoLang}`}>{language}</p>
        </a>
        );

    useEffect(() => {
        axios.get(`${URL}users/${username}/repos`)
        .then(res => {
            setReposInfo(res.data);
        });
    },[username]);

    return (
        <div className={styles.reposContainer}>
            <div className={styles.titleRow}>
                <h1 className={styles.title}>Repos</h1>
            </div>
            {repos === undefined && <div className={styles.loading}></div>}
            <div className={styles.reposGrid}>
                {repos}
            </div>
        </div>
    )
}

export default Repos;