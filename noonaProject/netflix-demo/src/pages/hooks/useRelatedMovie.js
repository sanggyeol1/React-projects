import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchRelatedMovie = (movie_id) => {
    
    return api.get(`/movie/${movie_id}/recommendations`)//baseURL이 있기때문에 이것만 요청
}


export const useRelatedMovieQuery = (movie_id) => {
    return useQuery({
        queryKey: ['movie-related', movie_id.id],
        queryFn: () => fetchRelatedMovie(movie_id.id),
        select:(result)=>result.data.results
    })
}

