import React from 'react'
import { useUpcomingMoviesQuery } from '../../../hooks/useUpcomingMovies'
import "react-multi-carousel/lib/styles.css";
import Alert from 'react-bootstrap/Alert';
import './UpcomingMovieSlide.style.css'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {

    const { data, isLoading, isError, error } = useUpcomingMoviesQuery() 

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div className='slide-box'>
           <MovieSlider title={'Upcoming Movies'} movies={data.results} responsive={responsive}/>
        </div>
    )
}

export default UpcomingMovieSlide