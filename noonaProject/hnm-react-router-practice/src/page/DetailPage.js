import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const DetailPage = () => {

  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState()

  const params = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sanggyeol1/React.js/products/${params.id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='product-detail-new'>{product?.new == true ? "신제품" : null}</div>
          <div className='product-detail-title'>{product?.title}</div>
          <div className='product-detail-price'>\{product?.price}</div>
          <div className='product-detail-choice'>{product?.choice == true ? "Conscious choice" : null}</div>

          <Dropdown data-bs-theme="dark" className='mt-15'>
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
              {
                selectedSize == null ? "사이즈 선택" : selectedSize
              }
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                product?.size.map((a, i) => (
                  <Dropdown.Item key={i} onClick={() => { setSelectedSize(a) }}>{a}</Dropdown.Item>
                ))
              }


            </Dropdown.Menu>
          </Dropdown>

          <div className="d-grid gap-2 mt-15">
            <Button variant="outline-danger" size="lg">
              Block level button
            </Button>
          </div>
        </Col>

      </Row>


    </Container>
  )
}

export default DetailPage