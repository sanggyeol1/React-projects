import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"
import { usePostQuery } from '../hooks/usePosts'

const ReactQueryPage = () => {

    const {data, isLoading, isError, error, refetch} = usePostQuery(3)//커스텀


    console.log("data?", data, isLoading)
    console.log("Error?", isError, error)


    if (isLoading) {
        return <div>Loading</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }


    return (
        <div className='react-query-page'>
            {/* {
                data?.map((a, i) => (
                    <div>{a.title}</div>
                ))
            } */}
            {
                data.title
            }
            <button onClick={()=>{
                refetch()
            }}>post list 다시 들고오기</button>
        </div>
    )
}

export default ReactQueryPage