import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = ({ menuList, setSideBar, sideBar }) => {
    return (
        <div className={sideBar == false ? "side-bar" : "side-bar side-bar-active"}>
            <div className='side-bar-x'>
                <FontAwesomeIcon className='side-bar-x-button' onClick={() => { setSideBar(false) }} icon={faX} />
            </div>
            <div className='side-bar-content'>
                {
                    menuList.map((a, i) => (
                        <div>{a}</div>
                    )
                    )
                }
            </div>

        </div>
    )
}

export default SideBar