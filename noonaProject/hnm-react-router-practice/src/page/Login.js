import React from 'react'
import { Container, Button } from 'react-bootstrap'

const Login = () => {
    return (

        <Container>
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
                                <Button variant="outline-dark">로그인</Button>
                            </div>
                        </div>
                        <div className='button-end mt-15'>
                            <div>
                                아이디가 없다면? : <Button variant="outline-dark">회원가입</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Login