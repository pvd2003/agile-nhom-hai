import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'

const Congrats = () => {
  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.success}>Success!</Text>

      <Image 
      source={require('../../../../media/images/sofa.png')}
      style={homeStyle.sofa}
      resizeMode='cover'/>

      <Image
      source={require('../../../../media/images/greentick.png')}
      style={homeStyle.tick}
      resizeMode='cover'/>

      <Text style={homeStyle.text}>Your order will be delivered soon.
Thank you for choosing our app!</Text>

      <Pressable style={homeStyle.button}>
        <Text style={homeStyle.btnAdd}>Track your orders</Text>
      </Pressable>

      <Pressable style={homeStyle.buttonBack}>
        <Text style={homeStyle.btnBack}>BACK TO HOME</Text>
      </Pressable>
    </View>
  )
}

export default Congrats

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  success:{
    textAlign: 'center',
    marginTop: 120,
    fontSize: 36,
    lineHeight: 35,
    fontWeight: '700',
    color: '#303030',
  },
  sofa:{
    marginTop: 50,
    marginLeft: 90,
  },
  tick:{
    marginLeft: 175,
    marginTop: 10,
  },
  text:{
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 35,
    marginTop: 30,

  },
  button:{
    width: 300,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#242424',
    marginLeft: 45,
    marginTop: 50,
  },
  btnAdd:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15,
  },
  buttonBack:{
    width: 300,
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 45,
    marginTop: 40,
  },
  btnBack:{
    color: '#303030',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15,
  },
})