import React from 'react'
import { usePokemonImageQuery } from '../../hooks/usePokemonImage'

const DetailImage = ({id}) => {

    const { isLoading, data, isError, error } = usePokemonImageQuery(id)
    console.log(data)
  return (
    <div>
        <img width={300} src={data?.sprites.front_default}></img>
    </div>
  )
}

export default DetailImage