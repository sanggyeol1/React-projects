import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const fetchPokemonDetail = ({ id }) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/1/`);
}

export const usePokemonDetailQuery = (id) => { 
    return useQuery({
        queryKey: ['pokemon', id], 
        queryFn: () => fetchPokemonDetail({ id }),
        retry: 1,
        select: (data) => {
            return data.data; 
        },
    });
}