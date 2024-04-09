import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"

const fetchUpcomingMovies = () => {
    return api.get(`/movie/upcoming`)//baseURL이 있기때문에 이것만 요청
}


export const useUpcomingMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data
    })
}