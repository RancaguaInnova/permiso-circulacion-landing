import React from 'react'
import './styles.css'

const Hours: React.FC = () => {
    return (
        <section className='Hours text-left'>
            <div className='red-title'>
                <h2>HORARIOS Y PUNTOS DE ATENCIÓN</h2>
            </div>
            <div className='row-fluid'>
                <div className='col-md-6 col-xs-12 location-box'>
                    <h3>EDIFICIO TOMAS GUAGLÉN</h3>
                    <p className='text-danger'>dias</p>
                    <p>horas</p>
                </div>
                <div className='col-md-6 col-xs-12 location-box'>
                    <h3>EDIFICIO TOMAS GUAGLÉN</h3>
                    <p className='text-danger'>dias</p>
                    <p>horas</p>
                </div>
            </div>
        </section>
    )
}

export default Hours
