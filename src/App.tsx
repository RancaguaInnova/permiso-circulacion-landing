import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { isMobile, isTablet } from 'mobile-device-detect'

import Header from 'components/Header'
import AnimatedHeader from 'components/AnimatedHeader'
import Footer from 'components/Footer'
import Loading from 'components/Loading'

import './App.css'

const Home = lazy(() => import('pages/Home'))

const App: React.FC = () => {
    console.log('isTablet', isTablet)
    return (
        <div className='App'>
            <Suspense fallback={<Loading />}>
                {!isTablet && isMobile ? <AnimatedHeader mobile={isMobile} /> : <Header />}

                <Switch>
                    <Route path='/' default>
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </Suspense>
        </div>
    )
}

export default App
