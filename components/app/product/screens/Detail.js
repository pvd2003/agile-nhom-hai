import { StyleSheet, Text, View, Image,Button, Pressable , ScrollView } from 'react-native'
import React from 'react'
 // Hoang My ne ahii
const Detail = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.img1} source={require('../../../../media/images/hinh.png')} />
        <View style={styles.imgNavi}>
          <View style={styles.mot}></View>
          <View style={styles.hai}></View>
          <View style={styles.ba}></View>
        </View>
        <View style={styles.back}>
          <Image style={styles.icon} source={require('../../../../media/images/back.png')} />
        </View>

        <View style={styles.color}>
          <View style={styles.tron1}>
            <View style={styles.ngoai}></View>
            <View style={styles.trong}></View>
          </View>
          <View style={styles.tron2}>
            <View style={styles.ngoai2}></View>
            <View style={styles.trong2}></View>
          </View><View style={styles.tron3}>
            <View style={styles.ngoai3}></View>
            <View style={styles.trong3}></View>
          </View>
        </View>
      </View>
      <Text style={styles.title}>Minimal Stand</Text>
      <View style={styles.quantity0}>
        <Text style={styles.price}>$50</Text>
        <View style={styles.quantity}>
          <View style={styles.afterCT}>
            <Image source={require('../../../../media/images/cong.png')} />
          </View>
          <Text style={styles.price1}>01</Text>
          <View style={styles.afterCT}>
            <Image source={require('../../../../media/images/tru.png')} />
          </View>
        </View>
      </View>

      <View style={styles.rate}>
        <Image style={styles.sao} source={require('../../../../media/images/sao.png')}/>
        <Text style={styles.rateSo}> 4.5 </Text>
        <Text style={styles.rateLuot}> (50 reviews) </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.description1}>Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. </Text>
      </View>
      <View style={styles.footer}>
        
          <Pressable style={styles.buttonSave}>
            <Image style={styles.iconSave} source={require('../../../../media/images/luu.png')}/>
          </Pressable>
          <Pressable style={styles.buttonAdd}><Text style={styles.textAdd}>Add to cart</Text></Pressable>
      </View>
      <View style={styles.last}></View>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  last:{
    width:'100%',
    height:20,
    backgroundColor:'#fff'
  },

  textAdd:{
    fontWeight:'600',
    fontSize:20,
    lineHeight:27.25,
    color:'#fff',
    textAlign:'center',
    
  },
  buttonAdd:{
   
    width:250,
    height:60,
    backgroundColor:'#000',
    borderRadius:8,
    justifyContent:'center',
    marginLeft:15
  },

  iconSave:{
    width:16,
    height:20
  },

  buttonSave:{
    width:60,
    height:60,
    borderWidth:1,
    backgroundColor:'#f0f0f0',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8
  },

  footer:{
    marginTop:20,
    marginLeft:35,
    flexDirection:'row'
  },
  description1:{
    textAlign:'justify',
    fontWeight:'300',
    fontSize:14,
    lineHeight:19.1,
    color:'#606060'
  },
  description:{
    width:325,
    height:95,
    marginLeft:35,
    marginTop:11,
   
  },
  rateLuot:{
    fontWeight:'700',
    fontSize:18,
    lineHeight:24.55,
    marginLeft:20,
  },

  rateSo:{
    fontWeight:'700',
    fontSize:18,
    lineHeight:24.55,
    marginLeft:10,
    color:'#000',
  },
  sao:{
    width:25,
    height:25
  },
  rate:{
    flexDirection:'row',
    marginLeft:35,
    marginTop:12,
  },

  price1: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24.55,
    color: '#000',
  },
  quantity0: {
    flexDirection: 'row',
    
  },

  afterCT: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center'
  },

  quantity: {
    width: 114,
    height: 30,
    marginLeft: 150,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },


  price: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 40,
    color: '#000',
    marginLeft: 40,
    marginTop: 10
  },


  title: {
   
    marginLeft: 38,
    marginTop: 25,
    fontWeight: '490',
    fontSize: 24,
    lineHeight: 24,
    color: '#000'
  },

  imgNavi: {
    position: 'absolute',
    width: 100,
    height: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 418,
    marginLeft: 250
  },

  ba: {
    width: 15,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 4
  },

  hai: {
    width: 15,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#fff'
  },

  mot: {
    width: 30,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#000'
  },

  trong3: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: '#E4CBAD',
    margin: 5,
    borderRadius: 20
  },

  ngoai3: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
  },

  trong2: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#B4916C',
    margin: 5,
  },

  ngoai2: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
  },

  trong: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#fff',
    margin: 5,
  },

  ngoai: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#909090',

  },

  tron1: {
    marginLeft: 15,
    marginTop: 15,

  },
  tron2: {
    marginLeft: 15,
    marginTop: 65,
  },
  tron3: {
    marginLeft: 15,
    marginTop: 65,
  },

  color: {
    position: 'absolute',
    width: 64,
    height: 200,
    backgroundColor: '#fff',
    marginTop: 149,
    marginLeft: 40,
    borderRadius: 50,

  },

  icon: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 5,
    position: 'absolute'
  },

  back: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    marginTop: 53,
    marginLeft: 50,
    borderRadius: 6
  },

  img1: {
    marginLeft: 70,
    paddingRight: 16,
    borderBottomLeftRadius: 50,
  },

  header: {
    position: 'relative',
    width: '100%',
    height: 455,

  },
  container: {
    flex: 1,
  },

})