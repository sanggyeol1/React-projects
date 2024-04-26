import React from 'react'
import { usePokemonCardQuery } from '../../hooks/usePokemonCard'
import './PokemonCard.style.css'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({pokemon, index}) => {
    const url = pokemon.url
    const navigate = useNavigate()
    const { isLoading, data, isError, error} = usePokemonCardQuery(url)

    console.log("data?", data)

    return (

        <div className='pokemon-card' onClick={()=>{navigate(`/detail/${data.id}`)}} key={index}>
            <div>{pokemon.name}</div>
            <img src={data?.sprites.front_default}/>
        </div>

    )
}

export default PokemonCard