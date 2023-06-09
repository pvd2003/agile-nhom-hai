import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar, Button, Divider, HStack, IconButton, Spacer, VStack } from '@react-native-material/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const dataTitleAndPrice = [
  { title: 'Coffee Table', price: '$50.00' },
  { title: 'Coffee Chair', price: '$20.00' },
  { title: 'Minimal Stand', price: '$40.00' },
  { title: 'Minimal Desk', price: '$60.00' },
  { title: 'Minimal Lamp', price: '$2.00' },
  { title: 'Minimal Lamp', price: '$80.00' },
  { title: 'Minimal Lamp', price: '$100.00' },
  { title: 'Minimal Lamp', price: '$10.00' },

];

const Favorites = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: 'white' }}
    >
      <View>

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
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            style={{
              paddingHorizontal: 20,
            }}
            data={dataTitleAndPrice}
            renderItem={
              ({index}) => (
                <FavoriteItems data={dataTitleAndPrice[index]} />
              )
            }
          >

          </FlatList>



        </ScrollView>
        <TouchableOpacity style={{
          backgroundColor: '#242424',
          borderRadius: 12,
          paddingVertical: 12,
          zIndex: 1,
          bottom: 80,
          start: "5%",
          position: 'absolute',
          width: '90%'
        }}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18
          }}>Add all to my cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}


const FavoriteItems = ({data}) => {
  return (
    <VStack>
      <HStack pv={12} style={{ justifyContent: 'space-between' }}>
        <HStack>
          <Image style={{
            width: 100,
            height: 100,
            borderRadius: 12
          }} source={require("../../../../media/images/image1.png")}></Image>
          <VStack ml={20}>
            <Text style={styles.titleMedium}>{data.title}</Text>
            <View style={{ height: 12 }}></View>
            <Text style={styles.contentLarge}>{data.price}</Text>
          </VStack>
        </HStack>
        <VStack style={{ justifyContent: 'space-between' }}>
          <IconButton
            icon={
              () => (
                <Ionicons size={24} name='close-circle-outline'></Ionicons>
              )
            }>

          </IconButton>

          <IconButton
            style={{ backgroundColor: '#E0E0E0' }}
            pressEffectColor='red'
            icon={
              () => (
                <MaterialIcons size={24} name='shopping-bag'></MaterialIcons>
              )
            }>

          </IconButton>
        </VStack>
      </HStack>
      <Divider />
    </VStack>
  )
}
export default Favorites

const styles = StyleSheet.create({
  titleMedium: {
    fontSize: 16
  },
  contentLarge: {
    fontWeight: 'bold',
    fontSize: 18
  }
})