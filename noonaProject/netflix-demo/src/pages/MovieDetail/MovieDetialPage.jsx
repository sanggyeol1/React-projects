import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useMovieDetailQuery } from '../hooks/useMovieDetail'
import { useParams } from 'react-router-dom';
import './MovieDetailPage.style.css'
import MovieReview from '../Homepage/components/MovieReview/MovieReview';
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import RelatedMovie from '../Homepage/components/RelatedMovie/RelatedMovie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MovieTrailer from '../Homepage/components/MovieTrailer/MovieTrailer';

const MovieDetialPage = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviewOrRelated, setreviewOrRelated] = useState('review')

  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id })

  console.log(data)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }


  return (
    <><div style={{
      backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${data.backdrop_path}` + ")"
    }}
      className='detail-banner'
    >
    </div>
      <Container>
        <Row>

          <Col lg={4}>

            <div
              style={{
                backgroundImage: "url(" +
                  'https://image.tmdb.org/t/p/original' +
                  `${data?.poster_path}` + ")"
              }}
              className='movie-detail-image'
            ></div>

          </Col>
          <Col lg={6}>
            <h3>{data?.title}</h3>
            <div>
              {

                data?.genres.map((genre) => (
                  <Badge bg="danger">{genre.name}</Badge>
                ))
              }
            </div>
            <div>인기도 : <Badge bg="warning" text="dark">{data?.popularity}</Badge></div>
            <div>별점 : <Badge bg="warning" text="dark">{data?.vote_average}</Badge></div>
            <div>투표 수 : <Badge bg="warning" text="dark">{data?.vote_count}</Badge></div>
            <hr />
            <div>줄거리 : {data?.overview}</div>
            <hr />
            <div>성인물여부 : <Badge pill bg="warning" text="dark">{data?.adult == true ? "19" : "All"}</Badge></div>
            <div>개봉일 : {data?.release_date}</div>
            <div>예산 : ${data?.budget.toLocaleString('en-US')}</div>


          </Col>

        </Row>

        <div>
          <Button className='mt-25' variant="primary" onClick={handleShow}>
            예고편 보기
          </Button>

          <MovieTrailer show={show} handleClose={handleClose} id={id} />

        </div>

        <Button className='mt-25' variant={reviewOrRelated == 'review' ? "danger" : "outline-danger"}
          onClick={() => { setreviewOrRelated('review') }}>
          Review
        </Button>{' '}
        <Button className='mt-25' variant={reviewOrRelated == 'related' ? "danger" : "outline-danger"}
          onClick={() => { setreviewOrRelated('related') }}>
          Related Movie
        </Button>{' '}
        {
          reviewOrRelated == 'review'
            ? <MovieReview id={id} />
            : <RelatedMovie id={id} />
        }

      </Container>
    </>
  )
}

export default MovieDetialPage