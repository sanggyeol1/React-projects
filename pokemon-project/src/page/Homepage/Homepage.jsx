import React from 'react'
import PokemonCard from '../../component/PokemonCard/PokemonCard'
import { usePokemonListQuery } from '../../hooks/usePokemonList'
import { usePokemonDetailQuery } from '../../hooks/usePokemonCard'
import { Row, Col, Container } from 'react-bootstrap'

const Homepage = () => {
  const { isLoading, data, isError, error } = usePokemonListQuery()
  console.log("data?", data)

  return (
    <div>
      <h3>포켓몬 도감</h3>
      <Container>
        <Row>
          {
            data?.results.map((pokemon, index) => (
              
                <Col xs={12} md={6} lg={4}>
                  <PokemonCard pokemon={pokemon} index={index} />
                </Col>
             
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Homepage