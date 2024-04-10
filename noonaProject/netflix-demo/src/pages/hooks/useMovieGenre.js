import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api"


const fetchMovieGenre = () =>{
    return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () =>{
    return useQuery({
        queryKey : ['movie-genre'],
        queryFn: fetchMovieGenre,
        select:(result)=>result.data.genres,
        staleTime : 5*60*1000, //잘 변하지 않으므로 홈페이지 들어올때마다 호출할필요가 없다., 개발자도구 네트워크에서 확인 가능
    })
}