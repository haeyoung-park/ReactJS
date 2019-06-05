import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LineEllipsis from 'react-lines-ellipsis';

    function Movie ({title, poster, genres, synopsis}){
        return (
            <div className = "Movie">
                <div className = "Movie_Column">
                    <MoviePoster poster = {poster} alt={title}/>
                </div>
                <div className = "Movie_Column">
                    <h1>{title}</h1>
                    <div className = "Movie_Genres">
                        {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}                        
                    </div>
                    <p className = "Movie_Synopsis">
                        <LineEllipsis
                            text = {synopsis}
                            maxLine = '3'
                            ellipsis = '...'
                            trimRight
                            baseOn = 'letters'
                        />
                    </p>
                </div>
            </div>
        );
    }

    function MoviePoster({poster, alt}){
            return(
                <img className = "Movie_Poster" src={poster} alt={alt} title = {alt}/>
            )
    }

    function MovieGenre({genre}){
        return(
            <span className = "Movie_Genre">{genre}</span>
        )
    }

    Movie.propsTypes = {
        title    : PropTypes.string.isRequired,
        poster   : PropTypes.string.isRequired,
        genres   : PropTypes.string.isRequired,
        synopsis : PropTypes.string.isRequired
    }
    
    MoviePoster.propsTypes = {
        poster : PropTypes.string.isRequired, 
        alt    : PropTypes.string.isRequired
    }

    MovieGenre.propsTypes = {
        genre : PropTypes.string.isRequired
    }


export default Movie;
