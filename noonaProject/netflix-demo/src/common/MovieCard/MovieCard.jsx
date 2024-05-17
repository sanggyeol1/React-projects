import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.style.css"
import { useMovieGenreQuery } from '../../pages/hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const MovieCard = ({ movie, index }) => {

    const navigate = useNavigate()
    const [query, setQuery] = useSearchParams()
    const keyword = query.get("q");
   
    
    const movieGenre = () => {
        if (!movie.genre_ids) return []
        return movie.genre_ids
    }
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
        <div
            key={index}
            onClick={() => { keyword == null ? navigate(`/movies/${movie.id}`):navigate(`${movie.id}`) }}
            style={{
                backgroundImage: "url(" +
                    'https://image.tmdb.org/t/p/original' +
                    `${movie.poster_path}` + ")"
            }}
            className='movie-card'
        >
            <div className='overlay'>
                <div className='card-content'>
                    <h3>{movie.title}</h3>
                    {showGenre(movieGenre()).map((id, index) => (

                        <Badge key={index} className='badge' bg="danger">{id}</Badge>
                    ))}
                    <div>
                        <Badge bg="warning" text="dark"> Rating </Badge>
                        {movie.vote_average?.toFixed(1)}</div>
                    <div>{movie.adult == true ? <Badge pill bg="danger">
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