import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
    let [keyword, setKeyword] =useState("")
    let dispatch = useDispatch();
    let contact = useSelector((state)=>state)
    const searchByName = (e) => {
        e.preventDefault();
        dispatch({type:"SEARCH_BY_USERNAME",payload:{keyword}})
    } 


  return (
    <Form onSubmit={searchByName}>
        <Row >
            <Col lg={10}>
                <Form.Group controlId="validationCustom01">
                    <Form.Control
                        type="text"
                        placeholder="name"
                        onChange={(e)=>{setKeyword(e.target.value)}}
                    />
                </Form.Group>
            </Col>
            <Col lg={2}>
                <Button type="submit">Search</Button>
            </Col>
        </Row>

    </Form>
  )
}

export default SearchBox