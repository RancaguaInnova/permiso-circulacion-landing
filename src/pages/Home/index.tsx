import React from 'react'
import './styles.css'
import { isMobile } from 'mobile-device-detect'
import RenewButton from 'components/RenewButton'

import Hours from './hours'
import Documents from './documents'

const Home: React.FC = () => {
    return (
        <div className='container Home'>
            <div className="alert alert-warning" role="alert">
            <h5>Atención : Debido a la contingencia del país, el trámite sólo se realizará vía pago online.</h5>
</div>

           
           <Documents />
            <RenewButton />
            {isMobile && <img className='img-fluid' alt='' src='/assets/images/pay_info.png' />}
        </div>
    )
}

export default Home
