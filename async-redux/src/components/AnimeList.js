import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Anime from './Anime';
import { getAnime } from '../actions/Action';

const AnimeList = (props) => {

    useEffect(()=>{
        props.getAnime();
    }, []);

    const displayAnime = (anime) =>{
        return anime.map(obj => (
            <Anime anime={obj} />
        ));
    }

    return (
        <div className="card_container">
            {props.isFetching ? <h2> Loading... </h2> : displayAnime(props.anime)}
        </div>
    );

};

const mapStateToProps = state => ({
    anime: state.anime,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, {getAnime})(AnimeList);