import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.style.css"
import { useMovieGenreQuery } from '../../pages/hooks/useMovieGenre';


const MovieCard = ({ movie }) => {

    const { data: genreData } = useMovieGenreQuery()

    const showGenre = (genreIdList) => {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id == id)
            return genreObj.name
        })//장르이 이름 리스트

        return genreNameList
    }

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
                    <h3>{movie.title}</h3>
                    {showGenre(movie.genre_ids).map((id) => (

                        <Badge className='badge' bg="danger">{id}</Badge>
                    ))}
                    <div>
                        <Badge bg="warning" text="dark"> Rating </Badge>
                        {movie.vote_average.toFixed(1)}</div>
                    <div>{movie.adult==true ? <Badge pill bg="danger">
                        19
                    </Badge> : <Badge pill bg="warning" text="dark">
                        All
                    </Badge>}</div>
                </div>
            </div>

        </div>
    )
}

export default MovieCard