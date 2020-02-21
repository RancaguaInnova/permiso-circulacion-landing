import React from 'react'
import './styles.css'

const Footer: React.FC = () => {
    return (
        <div className='Footer'>
            <img className='img-footer' alt='' src='/assets/images/footer.png' />
            <p className='text-right'>
                Desarrollado por <a href='mailto:contacto@smartrancagua.cl'>Corporación de Desarrollo e Innovación</a>
            </p>
        </div>
    )
}

export default Footer
