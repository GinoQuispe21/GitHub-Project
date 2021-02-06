import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import Ga from '../../Assets/ga.png'

const Languages = () => {

    const [Repos, setInfo] = React.useState();
    let { username } = useParams();

    useEffect(() => {
        axios.get(`${URL}users/${username}/repos`)
        .then(res => {
            setInfo(res.data);
        });
    },[username]);

    return (
        <div>
            <div>
                <p>{JSON.stringify(Repos)}</p>
            </div>
            <img src={Ga}></img>
        </div>
    )
}

export default Languages;
