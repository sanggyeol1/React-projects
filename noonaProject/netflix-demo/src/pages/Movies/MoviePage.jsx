import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './MoviePage.style.css'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';


//경로2가지
//1. navbar에서 클릭해서 온 경우 => popularMovie보여줌
//2. keyword입력해서 온 경우  => keyword관련 영화 보여줌
const MoviePage = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useSearchParams()
  const keyword = query.get("q");

  useEffect(()=>{

  },[keyword])

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page })

  

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }
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
            <h3>{keyword ? `'${keyword}' 에 대한 검색 결과 : ${data?.total_results}건` : "Popular Movies"}</h3>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} md={6} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className='break-line'></div>
{
  keyword? <ReactPaginate
  nextLabel="next >"
  onPageChange={handlePageClick}
  pageRangeDisplayed={3}
  marginPagesDisplayed={2}
  pageCount={data.total_pages}//전체페이지
  previousLabel="< previous"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  previousClassName="page-item"
  previousLinkClassName="page-link"
  nextClassName="page-item"
  nextLinkClassName="page-link"
  breakLabel="..."
  breakClassName="page-item"
  breakLinkClassName="page-link"
  containerClassName="pagination"
  activeClassName="active"
  renderOnZeroPageCount={null}
  forcePage={page - 1}//미리선택
/> : null
}
<div className='break-line'></div>
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage