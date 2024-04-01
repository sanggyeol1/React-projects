import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

const ContactForm = () => {

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const dispatch = useDispatch()

    const addContact = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } })
    }

    return (
        <div>
            <Form onSubmit={(e) => { addContact(e) }}>
                <Form.Group className='mt-10' controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </Form.Group>

                <Form.Group className='mt-10' controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="전화번호를 입력해주세요"
                        onChange={(e) => { setPhoneNumber(e.target.value) }}
                    />
                </Form.Group>
                <Button className='mt-20' type="submit" variant="outline-dark">추가하기</Button>
            </Form>
        </div>
    )
}

export default ContactForm