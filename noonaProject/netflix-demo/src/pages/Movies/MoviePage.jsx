import React from 'react'
import { useSearchMovieQuery } from '../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './MoviePage.style.css'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard';

//경로2가지
//1. navbar에서 클릭해서 온 경우 => popularMovie보여줌
//2. keyword입력해서 온 경우  => keyword관련 영화 보여줌
const MoviePage = () => {
  const [query, setQuery] = useSearchParams()
  const keyword = query.get("q");
  console.log(keyword)

  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword})

  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>)
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }

  console.log(data)
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>필터</Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} md={6} xs={12}>
              <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage