import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({ setAuthenticate }) => {

    const [id, setId] = useState('')
    const [password, setPassword] = useState([])
    const dispatch = useDispatch()

    const loginUser = (event) =>{
        event.preventDefault();
        dispatch(authenticateAction.login(id, password))
        navigate('/')
    }
    const navigate = useNavigate()

    return (

        <Container>
            <Form onSubmit={(event)=>{loginUser(event)}}>
                <div className='center'>

                    <div className='login-box'>

                        <div className='login-box-content'>
                            <h3>로그인</h3>
                            <div className='mt-15'>
                                <div>아이디 입력</div>
                                <input type="text" placeholder='id' onChange={(e)=>{setId(e.target.value)}}/>
                            </div>
                            <div className='mt-15'>
                                <div>비밀번호 입력</div>
                                <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
                            </div>
                            <div className='button-end mt-15'>
                                <div>
                                    <Button type="submit" variant="danger" >로그인</Button>
                                </div>
                            </div>
                            <div className='button-end mt-15'>
                                <div>
                                    아이디가 없다면? : <Button variant="danger">회원가입</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Container>

    )
}

export default Login