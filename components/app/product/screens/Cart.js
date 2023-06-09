import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, HStack, IconButton, VStack, Divider, Spacer, Surface, } from '@react-native-material/core';
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

const Cart = () => {

     return (
          <SafeAreaView>
               <View style={{
                    backgroundColor: 'white',
                    height: "100%"
               }}>
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
                                                            name='chevron-back-outline'></Ionicons>
                                                  )
                                             }
                                        >

                                        </IconButton>

                                   )
                              }
                         }
                         title="My cart">

                    </AppBar>
                    <ScrollView>

                         <FlatList
                              style={{ paddingHorizontal: 20 }}
                              data={dataTitleAndPrice}
                              renderItem={({ index }) => {
                                   return (
                                        <CartItem data={dataTitleAndPrice[index]} />

                                   )
                              }}>

                         </FlatList>
                    </ScrollView>
                    <VStack style={{
                         backgroundColor: 'white',
                         width: "100%",
                    }}>
                         <Surface elevation={3} style={{
                              flexDirection: 'row',
                              marginHorizontal: 20,
                              marginVertical: 8, borderRadius: 12, paddingStart: 20,
                              backgroundColor: 'white',
                              marginTop: 16
                         }}>
                              <TextInput
                                   style={{flex: 1, height: 54, fontSize: 16 }}
                                   placeholder='Enter your promo code'></TextInput>
                              <View style={{ width: 54, backgroundColor: 'black', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>

                                   <Ionicons name='search' color={'white'}></Ionicons>
                              </View>
                         </Surface>
                         <HStack style={{ justifyContent: 'space-between' , paddingHorizontal: 20, marginVertical: 16}}>
                              <Text style={{fontSize:20, opacity: 0.6, color: 'black', fontWeight: '500'}}>TOTAL</Text>
                              <Text style={{fontSize:20, color: 'black', fontWeight: '800'}}>$0.64</Text>
                         </HStack>
                         <TouchableOpacity style={{
                              paddingVertical: 16,
                              backgroundColor: 'black',
                              borderRadius: 8,
                              marginBottom: 10,
                              marginTop: 8,
                              marginHorizontal: 20
                         }}>
                              <Text style={{color: 'white', fontSize :20, textAlign: 'center'}}>Check out</Text>
                         </TouchableOpacity>
                    </VStack>
               </View>
          </SafeAreaView >
     )
}


const CartItem = ({ data }) => {
     const [amount, setAmount] = useState(0)
     const incrementAmount = () => {
          setAmount(amount + 1)
     }
     const decrementAmount = () => {
          if(amount < 1){
               //remove item here
          }else{
               setAmount(amount - 1)
          }
     }
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
                              <Text style={styles.contentLarge}>{data.price}</Text>
                              <Spacer />

                              <HStack style={{
                                   justifyContent: 'space-between',
                                   alignItems: 'center'
                              }}>
                                   <TouchableOpacity
                                        onPress={decrementAmount}
                                        style={{
                                             backgroundColor: '#E0E0E0',
                                             paddingHorizontal: 8,
                                             paddingVertical: 4,
                                             borderRadius: 12,
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                        }}
                                   >

                                        <Ionicons size={24} name='remove-outline'></Ionicons>
                                   </TouchableOpacity>
                                   <Text style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        marginStart: 5
                                   }}>{amount}</Text>
                                   <TouchableOpacity
                                        onPress={incrementAmount}
                                        style={{
                                             backgroundColor: '#E0E0E0',
                                             paddingHorizontal: 8,
                                             paddingVertical: 4,
                                             borderRadius: 12,
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                             marginStart: 5
                                        }}
                                   >

                                        <Ionicons size={24} name='add-outline'></Ionicons>
                                   </TouchableOpacity>
                              </HStack>
                         </VStack>
                    </HStack>
                    <VStack>
                         <IconButton
                              icon={
                                   () => (
                                        <Ionicons size={24} name='close-circle-outline'></Ionicons>
                                   )
                              }>

                         </IconButton>

                    </VStack>
               </HStack>
               <Divider />
          </VStack >
     )
}
export default Cart


const styles = StyleSheet.create({
     titleMedium: {
          fontSize: 16,
          opacity: 0.6,
     },
     contentLarge: {
          fontWeight: 'bold',
          fontSize: 18,
          color: 'black'
     }
})