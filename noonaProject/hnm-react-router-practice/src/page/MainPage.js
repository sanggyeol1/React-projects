import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate()

  const [productList, setProductList] = useState([])

  const getProducts = async () => {
    let url = 'https://my-json-server.typicode.com/sanggyeol1/React.js/products'
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const showDetail = (id) => {
    navigate('detail/' + id)
  }

  return (
    <div>
      <Container>
        <Row>
          {
            productList.map((a, i) => (
              <Col xs={12} md={6} lg={3} onClick={() => { showDetail(a.id) }}>
                <ProductCard item={a} />
              </Col>

            ))
          }
        </Row>
      </Container>

    </div>
  )
}

export default MainPage