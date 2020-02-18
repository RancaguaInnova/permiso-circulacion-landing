import React, { useState } from 'react'
import moment from 'moment-timezone'
import './styles.css'
const tz = 'America/Santiago'
const { usePageVisibility } = require('react-page-visibility')

const calcTime = () => {
    const now = moment().tz(tz)
    const morning = moment().set({ hours: 6, minutes: 0 }).tz(tz)
    const evening = moment().set({ hours: 20, minutes: 0 }).tz(tz)
    return now.diff(morning, 'minutes') > 0 && now.diff(evening, 'minutes') < 0 ? '-day' : '-night'
}

type Props = {
    mobile: boolean
}
const AnimatedHeader: React.FC<Props> = ({ mobile }) => {
    const [ time, setTime ] = useState(calcTime())
    const isVisible = usePageVisibility()
    if (isVisible && time !== calcTime()) {
        setTime(calcTime())
    }

    return (
        <div className={`animated-header-container${time} animated-header`}>
            <a href='https://pago.smc.cl/pagoPCVv2/Login.aspx?ReturnUrl=%2fpagopcvv2%2fSistema%2fPrincipal.aspx'>
                <img className='main-btn' src='/assets/images/main_button.png' alt='' />
                <img className='car' src='/assets/images/car_day.png' alt='' />
                <img className='img-city-small' src={`/assets/images/city${time}_small.png`} alt='' />
            </a>
        </div>
    )
}

export default AnimatedHeader
