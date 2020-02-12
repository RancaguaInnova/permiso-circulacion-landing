import React from 'react'
import './styles.css'

import Hours from './hours'
import Documents from './documents'

const Home: React.FC = () => {
    return (
        <div className='container Home'>
            <Hours />
            <Documents />
            <div className='row text-left'>
                <div className='col-md-6'>
                    <div className='button-box p-4'>
                        <button className='btn btn-danger btn-lg btn-block btn-renew'>
                            RENUEVA TU PERMISO <br />DE CIRCULACION AQUÍ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
