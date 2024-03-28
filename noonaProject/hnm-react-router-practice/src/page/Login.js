import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuthenticate }) => {

    const loginUser = (event) =>{
        event.preventDefault();
        setAuthenticate(true)
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
                                <input type="text" placeholder='id' />
                            </div>
                            <div className='mt-15'>
                                <div>비밀번호 입력</div>
                                <input type="password" placeholder='password' />
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