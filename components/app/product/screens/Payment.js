import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

const Payment = () => {

    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../media/images/back.png')} />
                <Text style={styles.title}>Payment method</Text>
                <View></View>
            </View>
            <View style={styles.items} >
                <View style={styles.item}>
                    <Image style={styles.itemImg} source={require('../../../../media/images/Payment_card.png')} />
                    <View style={styles.subItem}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            tintColors={true ? '#000' : '#f33'}
                            style={styles.checkbox}
                        />
                        <Text style={styles.itemText}>Use as default payment method</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemImgOpacity}>
                    <Image style={styles.itemImg} source={require('../../../../media/images/Payment_card.png')} />
                    </View>
                    <View style={styles.subItem}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={styles.itemText}>Use as default payment method</Text>
                    </View>
                </View>

                <View style={styles.itemAdd}>
                    <Image 
                        source={require('../../../../media/images/cong.png')}
                        
                    />
                </View>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({

    itemImg2:{
        backgroundColor:'#000',
        
        left:'10%',
        top:'25%'
    },

    itemAdd:{
        width:52,
        height:52,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        marginLeft:'70%',
        top:'5%'
        
    },
    itemImgOpacity:{
        opacity:0.5
    },

    itemText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 19.1,
        color: '#000'
    },
    subItem: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        marginLeft: 21,
        marginTop:5
    },

    title: {
        fontFamily: 'Merriweather',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20.11,
        color: '#303030',
    },
    items:{
        alignItems:'center'
    },
    header: {
        width: '100%',
        marginTop: 44,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        display: 'flex',
        backgroundColor:'#F5F5F5',

    },
})