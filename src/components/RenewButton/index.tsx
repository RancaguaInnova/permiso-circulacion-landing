import React from 'react'
import './styles.css'

const RenewButton: React.FC = () => {
    return (
        <div className='row text-left'>
            <div className='col-md-6'>
                <div className='button-box p-4'>
                    <button className='btn btn-danger btn-lg btn-block btn-renew'>
                        RENUEVA TU PERMISO <br />DE CIRCULACION AQUÍ
                    </button>
                    <a href='https://pago.smc.cl/pagoPCVv2/Login.aspx?ReturnUrl=%2fpagopcvv2%2fSistema%2fPrincipal.aspx'>
                        <img src='/assets/images/mouse_hand.png' className='btn-image' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RenewButton
