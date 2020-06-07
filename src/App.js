import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { Logo } from './components/Logo/index'

export const App = () => (
  <>
    <Logo />
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
