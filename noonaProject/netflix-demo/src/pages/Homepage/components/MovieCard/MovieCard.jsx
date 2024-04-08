import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.style.css"

const MovieCard = ({ movie }) => {
    return (
        <div style={{
            backgroundImage: "url(" +
                'https://media.themoviedb.org/t/p/w220_and_h330_face' +
                `${movie.poster_path}` + ")"
        }}
            className='movie-card'
        >
            <div className='overlay'>
                <div className='card-content'>
                    <h1>{movie.title}</h1>
                    {movie.genre_ids.map((id) => (

                        <Badge bg="danger">{id}</Badge>
                    ))}
                    <div>{movie.vote_average}</div>
                    <div>{movie.popularity}</div>
                    <div>{movie.adult ? "adult" : "under 18"}</div>
                </div>
            </div>

        </div>
    )
}

export default MovieCard