import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const fetchPokemonList = () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"`);
}

export const usePokemonListQuery = () => { 
    return useQuery({
        queryKey: ['pokemon-list'], 
        queryFn: () => fetchPokemonList(),
        retry: 1,
        select: (data) => {
            return data.data; 
        },
    });
}