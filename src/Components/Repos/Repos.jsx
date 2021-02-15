import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import styles from './Repos.module.css';

const Repos = () => {
    const [reposInfo, setReposInfo] = React.useState();
    let { username } = useParams();
    const [repoUrl, setRepoUrl] = React.useState(`https://github.com/${username}`)

    const repos = reposInfo?.map((repo, index) =>
        <a className={styles.listItem} key={index} href={`${repoUrl}/${repo.name}`}  target="_blank" rel="noopener noreferrer">
            <p className={styles.repoTitle}>{repo.name}</p>
            <p className={styles.repoDesc}>{repo.description}</p>
            <p className={styles.repoLang}>{repo?.language}</p>
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
            <div className={styles.reposRow}>
                {repos}
            </div>
        </div>
    )
}

export default Repos;
