import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import URL from '../../baseURL';
import Ga from '../../Assets/ga.png'

const Languages = () => {

    const [Repos, setInfo] = React.useState();
    const [langs, setLangs] = React.useState();
    let { username } = useParams();

    useEffect(() => {
        axios.get(`${URL}users/${username}/repos`)
        .then(res => {
            setInfo(res.data);
            return res;
        }).then(res => {
            let dic = {};
            res.data.forEach(repo => {
                axios.get(repo.languages_url).then(res =>{
                    for(var key in res.data){
                        if (res.data.hasOwnProperty(key)) {
                            if(dic[key]){
                                dic[key] += res.data[key];
                            }
                            else {
                                dic[key] = res.data[key];
                            }
                        }
                    }
                });
            });
            console.log(dic);
            for (var key in dic){
                console.log( key, dic[key] );
              }
            
            setLangs(dic);
        });
    },[username]);

    return (
        <div>
            <div>
            </div>
            <img src={Ga}></img>
        </div>
    )
}

export default Languages;
