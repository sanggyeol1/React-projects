import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useSearchDataQuery } from '../../hooks/useSearchData'
import CampingCard from '../../component/CampingCard/CampingCard'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const CampPage = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useSearchParams()
  const navigate = useNavigate()
  const keyword = query.get("q");

  

  const { data, isLoading, isError, error } = useSearchDataQuery({ keyword, page });
  console.log(data)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }



  

    return (
    <div>
현재페이지: {page}
      <button onClick={() => { setPage(page - 1) }}>이전</button><button onClick={() => { setPage(page + 1) }}>다음</button> 
      <Grid container spacing={2}>
        {
          data?.map((data, index) => (
            <Grid lg={4} key={index}>
            <CampingCard data={data} />
            </Grid>
          ))
          
        }
        
      </Grid>

        
    </div>
    )
}

    export default CampPage