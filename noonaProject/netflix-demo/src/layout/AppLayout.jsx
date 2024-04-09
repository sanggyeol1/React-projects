import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AppLayout = () => {

    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()

    const searchByKeyword = (event) => {
        event.preventDefault()//폼 제출시 새로고침 막음
        //url을 바꿔주기
        navigate(`/movies?q=${keyword}`)
        setKeyword("")
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-black">
                <Container fluid className='bg-black'>
                    <Navbar.Brand href="">
                        <img width={120} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjdfMTk5%2FMDAxNzAxMDY3MDQxNzgy.sOB9wfLjeOj1Ap4DmnvSZq0heha8wTkuQBb6GThE914g.ed-w_z0DqgcBF9aj-QPEBUG1kUEd5fu-G5wE7rUXvJ4g.PNG.qoxkf202%2F%25B3%25DD%25C7%25C3%25B8%25AF%25BD%25BA.png&type=l340_165" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 cl-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/'>Home</Link>
                            <Link to='/movies?q='>Movies</Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <input
                                type="search"
                                placeholder="Search"
                                className="me-2 form-input-box"
                                value={keyword}
                                onChange={(e) => { setKeyword(e.target.value) }}
                            />
                            <Button type='submit' variant="outline-danger">search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* 자손 라우터 */}
            <Outlet />
        </div>
    )
}

export default AppLayout