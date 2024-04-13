import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../hooks/useSearchMovie'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import './MoviePage.style.css'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import GenreSelect from '../Homepage/components/GenreSelect/GenreSelect';

//경로2가지
//1. navbar에서 클릭해서 온 경우 => popularMovie보여줌
//2. keyword입력해서 온 경우  => keyword관련 영화 보여줌
const MoviePage = () => {
  const [filter, setFilter] = useState('정렬')
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [query, setQuery] = useSearchParams()
  const keyword = query.get("q");

  useState(() => {
    setFilter('정렬')
  },[])

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page })
  useEffect(() => {
    setMoviesList(data?.results || []);
  }, [data]);



  const [moviesList, setMoviesList] = useState(data?.results)

  const sortByPopularity = () => {
    const sortedMovies = [...moviesList].sort((a, b) => b.popularity - a.popularity);
    setMoviesList(sortedMovies);
};

const sortByVoteAverage = () => {
    const sortedMovies = [...moviesList].sort((a, b) => b.vote_average - a.vote_average);
    setMoviesList(sortedMovies);
};

const sortByOldReleasedDate = () => {
    const sortedMovies = [...moviesList].sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    setMoviesList(sortedMovies);
};

const sortByNewReleasedDate = () => {
    const sortedMovies = [...moviesList].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    setMoviesList(sortedMovies);
};



  console.log(moviesList);


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
    return <Alert variant="danger">{error?.message}</Alert>
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <DropdownButton variant="secondary" id="dropdown-item-button" title={filter}>
            <Dropdown.Item as="button" onClick={() => { setFilter('인기순'); sortByPopularity() }}>인기순</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => { setFilter('별점높은순'); sortByVoteAverage() }}>별점높은순</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => { setFilter('오래된순'); sortByOldReleasedDate() }}>오래된순</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => { setFilter('최신순'); sortByNewReleasedDate() }}>최신순</Dropdown.Item>
          </DropdownButton>

          <GenreSelect moviesList={moviesList} setMoviesList={setMoviesList}/>

        </Col>
        <Col lg={8} xs={12}>
          <Row>
            <h3 className='mt-20 mb-20'>{keyword ? `'${keyword}' 에 대한 검색 결과 : ${data?.total_results}건` : "Popular Movies"}</h3>
            {moviesList?.map((movie, index) => (
              <Col key={index} lg={4} xs={6} >
                <div onClick={() => { navigate(`${movie.id}`) }} className='mb-20'>
                  <MovieCard movie={movie} index={index} />
                </div>
              </Col>
            ))}
          </Row>
          <div className='break-line'></div>
          
        </Col>
      </Row>
      <div className='paginate-box'>
          {
            keyword ? <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              pageCount={data.total_pages}//전체페이지
              previousLabel="<"
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
          </div>
          <div className='break-line'></div>
    </Container>
  )
}

export default MoviePage