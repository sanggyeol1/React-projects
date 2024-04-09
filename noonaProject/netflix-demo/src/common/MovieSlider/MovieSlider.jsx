import React from 'react'
import './MovieSlider.style.css'
import Carousel from "react-multi-carousel";
import MovieCard from '../MovieCard/MovieCard';
import Container from 'react-bootstrap/Container'

const MovieSlider = ({ title, movies, responsive }) => {

   
    return (
        <div>

            <h3>{title}</h3>

            <Carousel
                infinite={true}
                responsive={responsive}
                itemClass='movie-slider p-1'
                containerClass='carousel-container'
            >
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </Carousel>


        </div>
    )
}

export default MovieSlider