import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ProductNavigation from '../product/navigation/ProductNavigation'

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <ProductNavigation/>
    </NavigationContainer>
  )
}

export default AppNavigation