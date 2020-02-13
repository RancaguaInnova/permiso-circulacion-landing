import React from 'react'
import './styles.css'

type Props = {
    params: any
}
const AnimatedHeader: React.FC<Props> = ({ params }) => {
    const time = params && params.night && params.night === 'true' ? '-night' : '-day'
    console.log('time', time)
    return (
        <div className={`animated-header-container${time}`}>
            <a href='https://pago.smc.cl/pagoPCVv2/Login.aspx?ReturnUrl=%2fpagopcvv2%2fSistema%2fPrincipal.aspx'>
                <img className='main-btn' src='/assets/images/main_button.png' />
                <img className='car' src='/assets/images/car_day.png' />
                <img className='img-city-small' src={`/assets/images/city${time}_small.png`} />
            </a>
        </div>
    )
}

export default AnimatedHeader
