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
    };

    const loadingPage = (props) =>{
        return props.isFetching ? <h2> loading...</h2> : displayAnime(props.anime)
    };

    return (
        <div className="card_container">
            {loadingPage(props)}
        </div>
    );

};

const mapStateToProps = state => ({
    anime: state.anime,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, {getAnime})(AnimeList);