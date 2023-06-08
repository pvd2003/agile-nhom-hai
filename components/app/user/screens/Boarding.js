import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React from 'react'

const Boarding = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.nen} source={require('../../../../media/images/nen.png')} />
            <Text style={styles.makeyour}>MAKE YOUR</Text>
            <Text style={styles.home}>HOME BEAUTIFUL</Text>
            <Text style={styles.text}>The best simple place where you discover most wonderful furnitures and make your home beautiful</Text>
            <Pressable
                style={styles.btnLogin}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnLoginLabel}>Get Started</Text>
            </Pressable>
        </View>
    )
}

export default Boarding

const styles = StyleSheet.create({
    btnLogin: {
        // display: 'flex',
        marginTop: 130,
        marginLeft: 108,
        marginRight: 108,
        backgroundColor: '#303030',
        borderRadius: 8,
        height: 54,
        width: 159,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLoginLabel: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: 0.12,
        color: 'white',
    },
    text: {
        marginTop: 15,
        marginLeft: 59,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 35,
        letterSpacing: 0.5,
        color: '#808080',
    },
    home: {
        marginTop: 15,
        marginLeft: 30,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 38,
        letterSpacing: 0.5,
        color: '#303030',
    },
    makeyour: {
        marginTop: 231,
        marginLeft: 30,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 30.47,
        letterSpacing: 0.5,
        color: '#606060',
    },
    nen: {
        width: '100%',
        position: 'absolute'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    }
})