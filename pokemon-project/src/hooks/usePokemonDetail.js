import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const fetchPokemonDetail = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
}

export const usePokemonDetailQuery = (id) => { 
    
    return useQuery({
        queryKey: ['pokemon-detail',id], 
        queryFn: () => fetchPokemonDetail(id),
        select: (data) => {
            return data.data; 
        },
    });
}

