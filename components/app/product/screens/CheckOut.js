import { StyleSheet, View, Image, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'

const CheckOut = () => {
  return (
    <View style={homeStyles.container}>
        <ScrollView>
      <View style={homeStyles.productDetail}>
        <Image 
        source={require('../../../../media/images/back.png')}
        style={homeStyles.back}
        resizeMode = 'cover'/>

        <Text style={homeStyles.textDetail}>Check Out</Text>

        <Text style={homeStyles.textEti}>Shipping Address</Text>

        <Image
        source={require('../../../../media/images/edit.png')}
        style={homeStyles.write}
        resizeMode='cover'/>
      <View style={homeStyles.bruno}>

        <Text style={homeStyles.name}>Bruno Fernandes</Text>
        
        <Image
        source={require('../../../../media/images/duongke.png')}
        style={homeStyles.ngang}
        resizeMode='cover'/>

        <Text style={homeStyles.text25}>25 rue Robert Latouche, Nice, 06200, Côte D’azur, France</Text>
      </View>

      <Text style={homeStyles.payment}>Payment</Text>

      <Image
      source={require('../../../../media/images/edit.png')}
      style={homeStyles.writePayment}
      resizeMode='cover'/>
      
      <View style={homeStyles.credit}>
        <Image 
        source={require('../../../../media/images/master.png')}
        style={homeStyles.master}
        resizeMode='cover'/>

        <Text style={homeStyles.textCredit}>**** **** **** 3947</Text>
      </View>

      <Text style={homeStyles.delivery}>Delivery Method</Text>

      <Image
      source={require('../../../../media/images/edit.png')}
      style={homeStyles.deliWrite}
      resizeMode='cover'/>

      <View style={homeStyles.fast}>
        <Image 
        source={require('../../../../media/images/dhl.png')}
        style={homeStyles.dhl}
        resizeMode='cover'/>

        <Text style={homeStyles.textfast}>Fast (2-3days)</Text>

      </View>

      <View style={homeStyles.addCart}>
        
          <Text style={homeStyles.orderText}>Order:</Text>
          <Text style={homeStyles.deliveryText}>Delivery:</Text>
          <Text style={homeStyles.totalText}>Total:</Text>

          <Text style={homeStyles.orderNum}>$ 95.00</Text>
          <Text style={homeStyles.deliveryNum}>$ 5.00</Text>
          <Text style={homeStyles.totalNum}>$ 100.00</Text>
      </View>

      </View>
      

      <Pressable style={homeStyles.button}>
        <Text style={homeStyles.btnAdd}>SUBMIT ORDER</Text>
      </Pressable>
      </ScrollView>

    </View>
  )
}

export default CheckOut

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#EEEEEE',
  },
  bruno:{
    marginTop: 20,
    height: 127,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  write: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 320,
  
  },
  textDetail: {
    marginTop: -20,
    marginLeft: 145,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 30,
    color: '#303030',
    
  },
ngang: {
    marginTop: 10,
  },
  name:
  {
    fontSize: 18,
    lineHeight: 25,
    color: '#303030',
    marginLeft: 20,
    marginTop: 15,
    fontWeight: '700'
    
  },
  text25:{
    fontSize: 14,
    marginLeft: 15,
    marginTop: 15,

  },
  payment:{
    fontSize: 18,
    color: '#909090',
    marginTop: 35,
    fontWeight: '600'
  },
  writePayment: {
    marginTop: -20,
    marginLeft: 320,
  },
  credit:{
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 70,
  },
  master: {
    marginTop: 25,
    marginLeft: 25,  
  },
  textCredit: {
    fontSize: 14,
    color: '#242424',
    lineHeight: 24,
    marginTop: -25,
    marginLeft: 100,
    fontWeight: '600',

  },
  delivery: {
    fontSize: 16,
    color: '#909191',
    marginTop: 32,
    lineHeight: 22,
    fontWeight: '600'
  },
  deliWrite: {
    marginTop: -20,
    marginLeft: 320,
  },
  fast: {
    marginTop: 10,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,

  },
  dhl: {
    marginTop: 17,
    marginLeft: 20,
  },
  textfast:{
    marginTop: -20,
    marginLeft: 125,
    lineHeight: 20,
    fontWeight: '700',
    fontSize: 14,
    color: '#303030',
  },
  addCart:{
    height: 135,
    backgroundColor: '#FFFFFF',
    marginTop: 40,
    borderRadius: 5,
  },
  orderText:{
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24
  },
  deliveryText:{
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24
  },
  totalText:{
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24
  },
  orderNum:{
    marginTop: -115,
    marginRight: 20,
    textAlign: 'right',
    marginBottom: 15,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: '#242424',
  },
  deliveryNum:{
    marginRight: 20,
    marginBottom: 15,
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: '#242424',
  },
  totalNum:{
    marginRight: 20,
    marginBottom: 15,
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: '#242424',
  },
  textEti: {
    
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#909090',

  },
  button: {
    marginTop: 25,
    backgroundColor: '#242424',
    height: 70,
    borderRadius: 8,
  },
  btnAdd: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 17,
  },

  
})