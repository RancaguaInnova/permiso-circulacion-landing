import React from 'react'
import './styles.css'

const Header: React.FC = () => {
    return (
        <div className='header-container header'>
            <a href='http://pago.smc.cl/pagopcvv2/muni/RANCAGUA.aspx'>
                <img className='main-btn' alt='' src='/assets/images/main_button.png' />
                <img className='img-header' alt='' src='/assets/images/header.png' />
            </a>
        </div>
    )
}

export default Header
