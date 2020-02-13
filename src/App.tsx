import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'
import { isMobile } from 'mobile-device-detect'

import queryString from 'query-string'

import Header from 'components/Header'
import AnimatedHeader from 'components/AnimatedHeader'
import Footer from 'components/Footer'
import Loading from 'components/Loading'

import './App.css'

const Home = lazy(() => import('pages/Home'))

const App: React.FC = () => {
    const qry = useQuery()
    console.log('qry', qry)
    return (
        <div className='App'>
            <Suspense fallback={<Loading />}>
                {isMobile ? <AnimatedHeader params={qry} /> : <Header />}

                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </Suspense>
        </div>
    )
}

const useQuery = () => {
    return queryString.parse(useLocation().search)
}

export default App
