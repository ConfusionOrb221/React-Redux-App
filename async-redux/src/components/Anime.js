import React from 'react';

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
    return (
        <>
            <div className="anime_card">
                <img src={props.anime.image_url} />
                <h1>{props.anime.title}</h1>
                <p>Watching Status: {watching_status[props.anime.watching_status]} </p>
                <p>Airing Status: {airing_status[props.anime.watching_status]} </p>
                <p>Score: {props.anime.score === 0 ? <> Not Scored </> : <> {props.anime.score}/10 </>} </p>
                <p>Total Episodes: {props.anime.total_episodes}</p>
                <p>Watched Episodes: {props.anime.watched_episodes} </p>
            </div>
        </>
    );
};

export default Anime;