import React from 'react'
import { usePokemonDetailQuery } from '../../hooks/usePokemonDetail'

const PokemonImage = ({id}) => {
    const { isLoading, data, isError, error, refetch } = usePokemonDetailQuery()
    console.log(data)

  return (
    <div>
        <img src={data.sprites.front_default
}/>
    </div>
  )
}

export default PokemonImage