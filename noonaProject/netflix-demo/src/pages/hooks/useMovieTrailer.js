import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchMovieTrailer = (movie_id) => {
    return api.get(`/movie/${movie_id}/videos`)//baseURL이 있기때문에 이것만 요청
}


export const useMovieTrailerQuery = (movie_id) => {
    return useQuery({
        queryKey: ['movie-trailer',movie_id.id],
        queryFn:() => fetchMovieTrailer(movie_id.id),
        select:(result)=>result.data.results
    })
}


