import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
const NavBar = ({ authenticate, setAuthenticate }) => {

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
  return (
    <>
    
    <div className='nav-bar'>

      <div className='login-button' onClick={() => { authenticate == true ? logOut() : goToLogin() }}>
        <FontAwesomeIcon icon={faUser} /><div className='login-button-login'>{authenticate == true ? "로그아웃" : '로그인'}</div>
      </div>
      <div className='main-logo'>
        <img onClick={() => { goToMain() }} width={150} src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTFfMTIz%2FMDAxNzEwMTM5ODc3NDE0.mKBWzIjVq8jzxjkRiEVkgo_hWCCktgM6Xvz5VtQ9fW0g.jc6JhtJjilhIBN2XR71FODeOOZ0ogtkB3me6fW5YGBUg.PNG%2Fimage.png&type=l340_165' />
      </div>
      <div className='menu-area'>
        <div className="search-box visibility-hidden">
          <FontAwesomeIcon icon={faSearch} />
          <input type='text'></input>
        </div>
        <div className='menu-list'>
          {
            menuList.map((a, i) => (
              <div>{a}</div>
            )
            )
          }
        </div>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' value={'드레스'} />
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar
