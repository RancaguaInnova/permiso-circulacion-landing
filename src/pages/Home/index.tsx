import React from 'react'
import './styles.css'
import { isMobile } from 'mobile-device-detect'
import RenewButton from 'components/RenewButton'

import Hours from './hours'
import Documents from './documents'

const Home: React.FC = () => {
    return (
        <div className='container Home'>
            <Hours />
            <Documents />
            <RenewButton />
            {isMobile && <img className='img-fluid' alt='' src='/assets/images/pay_info.png' />}
        </div>
    )
}

export default Home
