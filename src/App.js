import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { Context } from './Context'

import { Logo } from './components/Logo/index'
import { NavBar } from './components/NavBar'

import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
