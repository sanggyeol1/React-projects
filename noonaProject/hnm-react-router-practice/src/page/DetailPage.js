import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { productAction } from "../redux/actions/productAction";
import { fetchProductDetail } from '../redux/reducers/productSlice';

const DetailPage = () => {
  const [selectedSize, setSelectedSize] = useState()
  
  const product = useSelector((state) => state.product.productDetail)
  const dispatch = useDispatch()
  const params = useParams();

  const getProductDetail = async () => {
    dispatch(fetchProductDetail(params.id))//미들웨어함수호출
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
              구매하기
            </Button>
          </div>
        </Col>

      </Row>


    </Container>
  )
}

export default DetailPage