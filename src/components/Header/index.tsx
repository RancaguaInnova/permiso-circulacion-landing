import React from 'react'
import './styles.css'

const Header: React.FC = () => {
    return (
        <div className='header-container'>
            <a href='https://pago.smc.cl/pagoPCVv2/Login.aspx?ReturnUrl=%2fpagopcvv2%2fSistema%2fPrincipal.aspx'>
                <img className='img-header' src='/assets/images/header.png' />
            </a>
        </div>
    )
}

export default Header
