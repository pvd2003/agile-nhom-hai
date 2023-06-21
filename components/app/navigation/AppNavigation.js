import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import UserNavigation from '../user/navigation/UserNavigation'
import ProductNavigation from '../product/navigation/ProductNavigation'
import { UserContext } from '../user/utilities/UserContext'

const AppNavigation = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <NavigationContainer>
      {!isLoggedIn ? <UserNavigation /> 
        : <ProductNavigation />
      }
    </NavigationContainer>
  )
}

export default AppNavigation    