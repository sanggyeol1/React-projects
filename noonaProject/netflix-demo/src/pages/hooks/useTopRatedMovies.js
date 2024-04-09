import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchTopRatedMovies = () => {
    return api.get(`/movie/top_rated`)//baseURL이 있기때문에 이것만 요청
}


export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-ted'],
        queryFn: fetchTopRatedMovies,
        select: (result) => result.data
    })
}