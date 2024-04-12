import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchMovieDetail = (movie_id) => {
    return api.get(`/movie/${movie_id}`)//baseURL이 있기때문에 이것만 요청
}


export const useMovieDetailQuery = (movie_id) => {
    return useQuery({
        queryKey: ['movie-detail',movie_id.id],
        queryFn:() => fetchMovieDetail(movie_id.id),
        select:(result)=>result.data
    })
}


