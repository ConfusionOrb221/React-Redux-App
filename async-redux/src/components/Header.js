import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAnime } from '../actions/Action';

const Header = (props) => {
    const [input, setInput] = useState(null);

    const handleChange = ref =>{
        setInput(ref.target.value);
        console.log(ref.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(input);
        props.getAnime(input);
    }

    return (
        <div className='header'>
            {console.log(props)}
            <h1>{input} Anime List</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <input
                    type="text"
                    value={input}
                    onChange={ref => handleChange(ref)}
                />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    anime: state.anime,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, {getAnime})(Header);