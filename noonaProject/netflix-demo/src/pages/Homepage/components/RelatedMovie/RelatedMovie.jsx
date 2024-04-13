import React from 'react'
import { useRelatedMovieQuery } from '../../../hooks/useRelatedMovie';
import './RelatedMovie.style.css';
import Alert from 'react-bootstrap/Alert';
import { Row, Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import BackdropCard from '../../../../common/BackdropCard/BackdropCard';

const RelatedMovie = ({ id }) => {


  const { data, isLoading, isError, error } = useRelatedMovieQuery({ id });
  console.log(data)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }




  return (
    <div>

      <Row>

        {
          data.map((movie, i) => (
            <Col xs={12} md={6} lg={4}>
              <BackdropCard movie={movie}/>



            </Col>
          ))}

      </Row>

    </div>
  )
}

export default RelatedMovie