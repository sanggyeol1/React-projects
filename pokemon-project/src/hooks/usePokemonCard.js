import { useQuery } from "@tanstack/react-query"
import axios from 'axios';

const fetchPokemonCard = (url) => {
    return axios.get(`${url}`);
}

export const usePokemonCardQuery = (url) => { 
    
    return useQuery({
        queryKey: ['pokemon-card',url], 
        queryFn: () => fetchPokemonCard(url),
        select: (data) => {
            return data.data; 
        },
    });
}


