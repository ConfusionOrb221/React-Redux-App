import axios from 'axios';

export const FETCH_ANIME_START = 'FETCH_ANIME_START';
export const FETCH_ANIME_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_ANIME_FAIL = 'FETCH_POKEMON_FAIL';

export const getAnime = (name) => dispatch => {
    console.log(name);
    dispatch({type: FETCH_ANIME_START});
    axios.get(`https://api.jikan.moe/v3/user/${name}/animelist`)
        .then(res => dispatch({type: FETCH_ANIME_SUCCESS, payload: res.data.anime}))
        .catch(err => dispatch({type: FETCH_ANIME_FAIL, payload: err}))
};