import React from 'react';
import whiteStar from '../white-star.png';
import yellowStar from '../Yellow-star.png';
import {StarScore, StarHolder, Title} from '../styles/Style';

const watching_status = {
    1: 'Watching',
    2: 'Completed',
    3: 'On-Hold',
    4: 'Dropped',
    6: 'Plan to Watch'
};

const airing_status = {
    1: 'Airing',
    2: 'Finished',
    3: 'Complete',
    4: 'To be aired',
    5: 'Not yet aires',
    6: 'Tba'
};

const Anime = (props) => {

    const animeScore = props =>{
        if(props.anime.score === 0){
            return <>Score: N/A</>
        }
        else {
            let starReview = []
            for(let i=0; i < 5; i++){
                if(i + 1 <= Math.floor((props.anime.score/2))){
                    starReview.push(<StarScore src={yellowStar} />)
                } else { 
                    starReview.push(<StarScore src={whiteStar} />)
                }
            };
            return starReview;
        }
    };

    return (
        <>
            <div className="anime_card">
                <a href={props.anime.url}><img src={props.anime.image_url} /></a>
                <Title>{props.anime.title}</Title>
                <StarHolder>{animeScore(props)} </StarHolder>
                <p>Watching Status: {watching_status[props.anime.watching_status]} </p>
                <p>Airing Status: {airing_status[props.anime.watching_status]} </p>
                <p>Total Episodes: {props.anime.total_episodes}</p>
                <p>Watched Episodes: {props.anime.watched_episodes} </p>
            </div>
        </>
    );
};

export default Anime;