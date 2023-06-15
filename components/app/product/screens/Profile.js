import { StyleSheet, Text, View, Image, ScrollView, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = (props) => {
  const{navigation}=props
  const Myorder =()=>{
  navigation.navigate("myorders")
  }
  const Shipping =()=>{
    navigation.navigate("shipping")
    }
    const Payment =()=>{
      navigation.navigate("payment")
      }
      const Myreview =()=>{
        navigation.navigate("myreview")
        }
        const Setting =()=>{
          navigation.navigate("setting")
        }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../media/images/find.png')}
        />
        <Text style={styles.title}>Profile</Text>
        <Image
          source={require('../../../../media/images/logout.png')}
        />
      </View>{/* header */}
      <ScrollView>
      <View style={styles.nav}>
        <Image
          style={styles.titleImage}
          source={require('../../../../media/images/avatar.png')}
        />
        <View style={styles.titleText}>
          <Text style={styles.name}>Bruno Pham</Text>
          <Text style={styles.email}>bruno203@gmail.com</Text>
        </View>
      </View>{/*nav */}
      <View style={styles.body}>
        <TouchableOpacity style={styles.section} onPress={Myorder}>
          <View style={styles.sectionContext}>
            <Text style={styles.function}>My orders</Text>
            <Text style={styles.context}>Already have 10 orders</Text>
          </View>
          <Image
            source={require('../../../../media/images/next.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={Shipping} style={styles.section}>
          <View style={styles.sectionContext}>
            <Text style={styles.function}>Shipping Addresses</Text>
            <Text style={styles.context}>03 Addresses</Text>
          </View>
          <Image
            source={require('../../../../media/images/next.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={Payment} style={styles.section}>
          <View style={styles.sectionContext}>
            <Text style={styles.function}>Payment Method</Text>
            <Text style={styles.context}>You have 2 cards</Text>
          </View>
          <Image
            source={require('../../../../media/images/next.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={Myreview} style={styles.section}>
          <View style={styles.sectionContext}>
            <Text style={styles.function}>My reviews</Text>
            <Text style={styles.context}>Reviews for 5 items</Text>
          </View>
          <Image
            source={require('../../../../media/images/next.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={Setting} style={styles.section}>
          <View style={styles.sectionContext}>
            <Text style={styles.function}>Setting</Text>
            <Text style={styles.context}>Notification, Password, FAQ, Contact</Text>
          </View>
          <Image
            source={require('../../../../media/images/next.png')}
          />
        </TouchableOpacity>
      </View>{/*body */}
      </ScrollView>

    </View>// container
  )
}

export default Profile

const styles = StyleSheet.create({
  //Style container
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 24,
  },
  //Style header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
  title: {
    color: '#303030',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Merriweather',
    textAlign: 'center',
  },
  //Style nav
  nav: {
    marginTop: 18,
    flexDirection: 'row',
  },
  titleImage: {
    height: 80,
    width: 80,
  },
  titleText: {
    margin: 20,
  },
  name: {
    color: '#303030',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Nunito Sans',
  },
  email: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Merriweather',
  },
  //Style body
  body: {
    marginTop: 15,
  },
  section: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  sectionContext: {

  },
  function: {
    color: '#242424',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Nunito Sans',
  },
  context: {
    color: '#808080',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito Sans',
  },
})