import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import { Col, Row, Container } from 'react-bootstrap'

const MainPage = () => {

  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = 'http://localhost:5000/products'
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {
            productList.map((a, i) => (
              <Col xs={12} md={6} lg={3}>
                <ProductCard item={a}/>
              </Col>

            ))
          }
        </Row>
      </Container>

    </div>
  )
}

export default MainPage