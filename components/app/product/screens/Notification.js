import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={homeStyle.container}>
        <ScrollView>
      <Image 
        source={require('../../../../media/images/find.png')}
        style={homeStyle.lookIcon}
        resizeMode='cover'/>

        <Text style={homeStyle.notifiText}>Notification</Text>

        <View style={homeStyle.head}>
            <Image 
            source={require('../../../../media/images/pic1.png')}
            style={homeStyle.pic1}
            resizeMode='cover'/>

            <Text style={homeStyle.pic1Text}>Your order #123456789 has been confirmed</Text>

            <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.
            </Text>

            <Text style={homeStyle.new}>New</Text>
        </View>

        <Image 
        source={require('../../../../media/images/pic2.png')}
        style={homeStyle.pic2}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been confirmed</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.
        </Text>
        

        <View style={homeStyle.discover}>
            <Text style={homeStyle.discoverText}>Discover hot sale furnitures this week.</Text>

            <Text style={homeStyle.discoverCon}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec.
             Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </Text>
             <Text style={homeStyle.hot}>Hot!</Text>
        </View>

        <Image 
        source={require('../../../../media/images/pic3.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been shipped successfully</Text>

        <Text style={homeStyle.pic1Con}>Please help us to confirm and rate your order to get 10% discount code for next order.</Text> 

        <Image 
        source={require('../../../../media/images/pic1.png')}
        style={homeStyle.ngang}
        resizeMode='cover'/>

        <Image 
        source={require('../../../../media/images/pic3.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been confirmed</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec. </Text> 
        <Image 
        source={require('../../../../media/images/duongke.png')}
        style={homeStyle.ngang}
        resizeMode='cover'/>

        <Image
source={require('../../../../media/images/pic4.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been canceled</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text> 

        <Image 
        source={require('../../../../media/images/duongke.png')}
        style={homeStyle.ngang}
        resizeMode='cover'/>

        <Image 
        source={require('../../../../media/images/pic4.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been canceled</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text> 
        <Image 
        source={require('../../../../media/images/duongke.png')}
        style={homeStyle.ngang}
        resizeMode='cover'/>

        <Image 
        source={require('../../../../media/images/pic4.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been canceled</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text> 
        <Image 
        source={require('../../../../media/images/duongke.png')}
        style={homeStyle.ngang}
        resizeMode='cover'/>

        <Image 
        source={require('../../../../media/images/pic4.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been canceled</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text> 
        <Image 
        source={require('../../../../media/images/duongke.png')}
        style={homeStyle.ngang}
        resizeMode='cover'/>

        <Image 
        source={require('../../../../media/images/pic4.png')}
        style={homeStyle.pic3}
        resizeMode='cover'/>

        <Text style={homeStyle.pic1Text}>Your order #123456789 has been canceled</Text>

        <Text style={homeStyle.pic1Con}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.</Text> 

        
        </ScrollView>


        {/* <View style={homeStyle.menu}>
            <Image 
            source={require('../../../../media/images/home.png')}
            style={homeStyle.home}
            resizeMode='cover'/>
             <Image 
            source={require('../../../../media/images/marker.png')}
style={homeStyle.marker}
            resizeMode='cover'/>
             <Image 
            source={require('../../../../media/images/bell.png')}
            style={homeStyle.bell}
            resizeMode='cover'/>
             <Image 
            source={require('../../../../media/images/person.png')}
            style={homeStyle.person}
            resizeMode='cover'/>
        </View> */}
    </View>

    
  )
}

export default Notification

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    lookIcon: {
        marginTop: 10,
        marginLeft: 10,
    },
    notifiText:{
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 20,
        marginTop: -15,
        color: '#303030'
    },
    head:{
        marginTop: 20,
        backgroundColor: '#E0E0E0',
    },
    pic1:{
        borderRadius: 5,
        height: 70,
        width: 70,
        marginTop: 10,
        marginLeft: 20,
    },
    pic1Text:{
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 17,
        color: '#242424',
        marginTop: -70,
        marginLeft: 100,
    },
    pic1Con:{
        fontSize: 10,
        marginLeft: 100,
        marginTop: 5,
    },
    new:{
        color: '#27AE60',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'right',
        marginRight: 5,
    },
    pic2:{
        width: 70,
        height: 70,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 20,
    },
    discover:{
        marginTop: 20,
        backgroundColor: '#E0E0E0',
    },
    discoverText: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19,
        color: '#303030',
        marginLeft: 20,
        marginTop: 10,
    },
    discoverCon: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        marginLeft: 20,
        marginTop: 5,
        marginRight: 20,
    },
    hot:{
        color: '#EB5757',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'right',
        marginRight: 5,
        marginTop: -9,
    },
    pic3: {
        width: 70,
        height: 70,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 20,
    },
    ngang:{
        height: 1,
        width: 355,
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        marginBottom: -3, 
    },
    menu: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: 75,
        alignItems: 'center'
    },


})