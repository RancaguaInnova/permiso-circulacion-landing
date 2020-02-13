import React from 'react'
import './styles.css'

import RenewButton from 'components/RenewButton'

import Hours from './hours'
import Documents from './documents'

const Home: React.FC = () => {
    return (
        <div className='container Home'>
            <Hours />
            <Documents />
            <RenewButton />
        </div>
    )
}

export default Home
