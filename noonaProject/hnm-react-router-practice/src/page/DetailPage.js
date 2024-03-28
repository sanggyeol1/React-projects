import React from 'react'
import { useParams } from 'react-router-dom'
import { Dropdown, Container, Button } from 'react-bootstrap';

const DetailPage = ({ productList }) => {
  const params = useParams();
  console.log(productList)
  return (
    <div>
      <Container>
        <div className='detail-page-box'>
          <img src={productList[params.id]?.img} />
          <div className='detail-page-explain'>
            <h3>{productList[params.id]?.title}</h3>
            <p>{'\\' + productList[params.id]?.price}</p>
            <div>{productList[params.id]?.choice == true ? "Conscious choice" : ""}</div>
            <Dropdown data-bs-theme="dark">
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">small</Dropdown.Item>
                <Dropdown.Item href="#/action-3">medium</Dropdown.Item>
                <Dropdown.Item href="#/action-3">large</Dropdown.Item>
                <Dropdown.Item href="#/action-4">X-large</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div>
            <Button variant="danger add-button">추가</Button>{' '}</div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default DetailPage