import React from 'react'
import './styles.css'

const RenewButton: React.FC = () => {
    return (
        <div className='row text-left'>
            <div className='col-md-6'>
                <div className='button-box p-4'>
                    <a
                        href='http://pago.smc.cl/pagopcvv2/muni/RANCAGUA.aspx'
                        className='btn btn-danger btn-lg btn-block btn-renew'
                    >
                        RENUEVA TU PERMISO <br />DE CIRCULACIÓN AQUÍ
                    </a>
                    <a href='http://pago.smc.cl/pagopcvv2/muni/RANCAGUA.aspx'>
                        <img src='/assets/images/mouse_hand.png' alt='' className='btn-image' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RenewButton
