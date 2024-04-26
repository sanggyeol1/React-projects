import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemonDetailQuery } from '../../hooks/usePokemonDetail'
import DetailText from '../../component/DetailText/DetailText'
import DetailImage from '../../component/DetailImage/DetailImage'

const Detailpage = () => {
    const {id} = useParams()
    const { isLoading, data, isError, error } = usePokemonDetailQuery(id)

    console.log(data)

  return (
    <div>
        <DetailText data={data}/>
        <DetailImage id={id}/>
    </div>
  )
}

export default Detailpage