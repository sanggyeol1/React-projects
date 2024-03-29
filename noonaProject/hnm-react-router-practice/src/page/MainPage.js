import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate()

  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    let searchQuery = query.get('q')||"";
    console.log(searchQuery)
    let url = `https://my-json-server.typicode.com/sanggyeol1/React.js/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(() => {
    getProducts()
  }, [query])

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