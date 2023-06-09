import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar, HStack, IconButton, VStack } from '@react-native-material/core';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Favorites = () => {
  return (
    <SafeAreaView>
      <AppBar
        elevation={0}
        centerTitle={true}
        color='white'
        leading={
          () => {
            return (
              <IconButton
                icon={
                  () => (
                    <Ionicons
                      size={24}
                      name='search-outline'></Ionicons>
                  )
                }
              >

              </IconButton>

            )
          }
        }
        trailing={
          () => (
            <IconButton
              icon={
                () => (
                  <Ionicons
                    size={24}
                    name='cart-outline'></Ionicons>
                )
              }
            >

            </IconButton>

          )
        }
        title="Favorite">

      </AppBar>
      <FavoriteItems />
    </SafeAreaView>
  )
}


const FavoriteItems = () => {
  return (
    <HStack style={{ justifyContent: 'space-between' }}>
      <Image source={require("../../../../media/images/image1.png")}></Image>
      <VStack>
        <Text>Coffee</Text>
        <Text>$50.00</Text>
      </VStack>
      <VStack style={{ justifyContent: 'space-between' }}>
        <IconButton
          icon={
            () => (
              <Ionicons size={24} name='close-circle-outline'></Ionicons>
            )
          }>

        </IconButton>

        <IconButton
          icon={
            () => (
              <Ionicons size={24} name='bag-handle-outline'></Ionicons>
            )
          }>

        </IconButton>
      </VStack>
    </HStack>
  )
}
export default Favorites

const styles = StyleSheet.create({
  titleMedium: {

  }
})