import { useQuery } from "@tanstack/react-query"
import axios from 'axios';


const fetchPokemonImage = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export const usePokemonImageQuery = (id) => { 
    
    return useQuery({
        queryKey: ['pokemon-image',id], 
        queryFn: () => fetchPokemonImage(id),
        select: (data) => {
            return data.data; 
        },
    });
}