import React from 'react'
import { UserProvider } from './components/app/user/utilities/UserContext'
import { NewsProvider } from './components/app/product/utilities/NewsContext'
import AppNavigation from './components/app/navigation/AppNavigation'

const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <AppNavigation />
      </NewsProvider>
    </UserProvider>

  )
}

export default App