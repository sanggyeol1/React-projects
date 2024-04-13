import './BackdropCard.style.css'
import { Badge } from 'react-bootstrap'
import React from 'react'
import { useMovieGenreQuery } from '../../pages/hooks/useMovieGenre'

const BackdropCard = ({ movie }) => {

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
        <div>
            <div className='related-movie'
                style={{
                    backgroundImage: "url(" +
                        'https://media.themoviedb.org/t/p/original/' +
                        `${movie.backdrop_path}` + ")"
                }}>
                <div className='overlay-related'>
                    <div className='overlay-related-content'>
                        <h4>{movie.title}</h4>
                        {showGenre(movieGenre()).map((id) => (

                            <Badge className='badge' bg="danger">{id}</Badge>
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
        </div>
    )
}

export default BackdropCard