import React from 'react'
import './styles.css'

const Header: React.FC = () => {
    return (
        <div className='header-container header'>
            <a href='https://pago.smc.cl/pagoPCVv2/Login.aspx?ReturnUrl=%2fpagopcvv2%2fSistema%2fPrincipal.aspx'>
                <img className='main-btn' alt='' src='/assets/images/main_button.png' />
                <img className='img-header' alt='' src='/assets/images/header.png' />
            </a>
        </div>
    )
}

export default Header
