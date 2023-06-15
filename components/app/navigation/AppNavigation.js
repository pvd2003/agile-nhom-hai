import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import UserNavigation from '../user/navigation/UserNavigation'
import ProductNavigation from '../product/navigation/ProductNavigation'

const AppNavigation = () => {
  return (
    <NavigationContainer>
     
       <ProductNavigation /> 
    </NavigationContainer>
  )
}

export default AppNavigation    