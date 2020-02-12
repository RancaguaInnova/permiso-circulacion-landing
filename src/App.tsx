import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Loading from 'components/Loading'

import './App.css'

const Home = lazy(() => import('pages/Home'))

const App: React.FC = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Suspense>
                <Footer />
            </div>
        </Router>
    )
}

export default App
