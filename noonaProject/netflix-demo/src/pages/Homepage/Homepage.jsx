import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'
import Container from 'react-bootstrap/Container'

//1. 배너 => popular 영화를 들고 와서 첫번째 아이템을 보여주자
//2. 

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Container>
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </Container>
    </div>
  )
}

export default Homepage