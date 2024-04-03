import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/reducers/productSlice'

const MainPage = () => {

  const navigate = useNavigate()
  const productList = useSelector((state) => state.product.productList)//reducer가 나뉨

  const [query, setQuery] = useSearchParams()
  const dispatch = useDispatch()


  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log(searchQuery)
    dispatch(fetchProducts(searchQuery))//미들웨어함수호출
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
            productList?.map((a, i) => (
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