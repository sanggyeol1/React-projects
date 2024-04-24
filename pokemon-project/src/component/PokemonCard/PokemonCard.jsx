import React from 'react'
import { usePokemonDetailQuery } from '../../hooks/usePokemonDetail'
import { usePokemonListQuery } from '../../hooks/usePokemonList'
import PokemonImage from '../PokemonImage/PokemonImage'

const PokemonCard = () => {
    const { isLoading, data, isError, error, refetch } = usePokemonListQuery()

    console.log("data?", data, isLoading)
    console.log("Error?", isError, error)

    return (
        <div>
            {
                data?.results.map((pokemon) => (
                    <div>
                        <div>{pokemon.name}</div>
                        <PokemonImage/>
                    </div>
                ))
            }

        </div>
    )
}

export default PokemonCard