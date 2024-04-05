import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query"

const ReactQueryPage = () => {

    const fetchPost = () => {
        return axios.get("http://localhost:5000/posts")
    }

    const { isLoading, data, isError, error } = useQuery({//isLoading, data, isError, error를 받을 수 있음
        queryKey: ['posts'],
        queryFn: fetchPost, //fetch함수
        retry: 1, //fetch실패 시 재시도 횟수 지정
        select : (data)=>{//원하는 데이터값만 선별적으로 뽑아올 수 있다.
            return data.data
        },
        gcTime:5000 // 가비지컬렉션 타임 : 캐시 비우는 시간 5초
    })
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
            {
                data.map((a, i) => (
                    <div>{a.title}</div>
                ))
            }
        </div>
    )
}

export default ReactQueryPage