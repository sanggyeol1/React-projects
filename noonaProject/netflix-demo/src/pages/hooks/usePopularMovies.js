import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`)//baseURL이 있기때문에 이것만 요청
}


export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result)=>result.data
    })
}