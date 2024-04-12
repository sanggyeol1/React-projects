import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchMovieReview = (movie_id) => {
    console.log(movie_id)
    return api.get(`/movie/${movie_id}/reviews`)//baseURL이 있기때문에 이것만 요청
}


export const useMovieReviewQuery = (movie_id) => {
    return useQuery({
        queryKey: ['movie-review',movie_id.id],
        queryFn:() => fetchMovieReview(movie_id.id),
        select:(result)=>result.data.results
    })
}


