import React from 'react'
import { useTopRatedMoviesQuery } from '../../../hooks/useTopRatedMovies'
import "react-multi-carousel/lib/styles.css";
import Alert from 'react-bootstrap/Alert';
import './TopRatedMovieSlide.style.css'
import { responsive } from '../../../../constants/responsive';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopRatedMovieSlide = () => {


    const { data, isLoading, isError, error } = useTopRatedMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div className='slide-box'>
            <MovieSlider title={'Top Rated Movies'} movies={data.results} responsive={responsive}/>
        </div>
    )
}

export default TopRatedMovieSlide