import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useMovieGenreQuery } from '../../../hooks/useMovieGenre';
import './GenreSelect.style.css';

const GenreSelect = ({ moviesList, setMoviesList }) => {

    const [selectedGenres, setSelectedGenres] = useState([])

    const addSelectedGenre = (genreId) => {
        setSelectedGenres(prevGenres => {
            const newGenres = new Set(prevGenres);
            newGenres.add(genreId)
            return [...newGenres]
        })
    }

    const filterMoviesByGenre = () => {
        if (selectedGenres.length === 0) {
            return moviesList;
        }

        return moviesList.filter(movie =>
            selectedGenres.every(genreId => movie.genre_ids.includes(genreId))
        )
    }

    useEffect(()=>{
        setMoviesList(filterMoviesByGenre())
    },[selectedGenres, moviesList])

    const { data, isLoading, isError, error } = useMovieGenreQuery();


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error?.message}</div>;
    return (
        <div>
            <h4 className='mt-10'>Genre Select</h4>
            <div className='genre-select-box mb-10'>
            
                <div style={{ padding: '5px' }}>

                    {data?.map((genre, index) => {

                        return (
                            <Button
                                key={index}
                                style={{ margin: '5px' }}
                                 variant={selectedGenres.includes(genre.id) ? "danger" : "outline-danger"}
                                onClick={() => { addSelectedGenre(genre.id)}}
                            >
                                {genre?.name}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default GenreSelect;
