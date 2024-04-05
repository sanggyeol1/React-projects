import axios from 'axios'
import { useQuery } from "@tanstack/react-query"

const fetchPost = (postId) => {
    // const id = queryData.queryKey[1];
    return axios.get(`http://localhost:5000/posts/${postId}`)
}

export const usePostQuery = (postId) =>{
    return useQuery({
        queryKey: ['posts',postId],
        queryFn: () =>fetchPost(postId), 
        retry: 1, 
        select : (data)=>{
            return data.data
        },
        
    })
}

