import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from './SideBar'
const NavBar = ({ authenticate, setAuthenticate }) => {
  
  let [sideBar, setSideBar] = useState(false)
  const menuList = ['여성', 'Divided', '남성', '신상아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }
  const goToMain = () => {
    navigate('/')
  }
  const logOut = () => {
    setAuthenticate(false)
    navigate('/')
  }
  const search = (event) => {

    if (event.key === "Enter") {
      //입력한 검색어 읽어옴
      let searchValue = event.target.value

      //url바꿔줌
      navigate(`/?q=${searchValue}`)
    }
  }

  return (
    <>
    <SideBar sideBar={sideBar} setSideBar={setSideBar} menuList={menuList}/> 
      <div className='nav-bar'>
        <Row>
          <Col className='d-md-none'>
            <div className='side-button' >
              <div onClick={() => { setSideBar(true) }}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </Col>
          <Col>
            <div className='login-button' >
              <div onClick={() => { authenticate == true ? logOut() : goToLogin() }}><FontAwesomeIcon icon={faUser} /> {authenticate == true ? "로그아웃" : '로그인'}</div>
            </div>
          </Col>

        </Row>

        <div className='main-logo'>
          <img onClick={() => { goToMain() }} width={150} src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTFfMTIz%2FMDAxNzEwMTM5ODc3NDE0.mKBWzIjVq8jzxjkRiEVkgo_hWCCktgM6Xvz5VtQ9fW0g.jc6JhtJjilhIBN2XR71FODeOOZ0ogtkB3me6fW5YGBUg.PNG%2Fimage.png&type=l340_165' />
        </div>

        {/* 3번째줄 */}
        <div className='menu-area'>
          <Container>
            <Row>
              <Col xl={3}>

              </Col>

              <Col xl={6} className="d-none d-md-block">
                <div className='menu-list center'>
                  {
                    menuList.map((a, i) => (
                      <div>{a}</div>
                    )
                    )
                  }
                </div>
              </Col>

              <Col xl={3}>
                <div className="search-box">
                  <FontAwesomeIcon icon={faSearch} />
                  <input type='text' onKeyPress={(event) => search(event)} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </>
  )
}

export default NavBar
