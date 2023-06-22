import {
    StyleSheet, Text,
    View, TextInput,
    Pressable, Image,
    ToastAndroid
} from 'react-native'

import React, { useState, useContext } from 'react'
import { UserContext } from '../utilities/UserContext';

const Register = (props) => {
    const { navigation } = props;
    const { register } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegister = async (email, password) => {
        console.log(email);
        if (email.length < 1) {
            ToastAndroid.show('Email không được để trống!', ToastAndroid.LONG);
            return;
        }
        function validateEmail(email) {
            var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex.test(email);
        }
        if (!validateEmail(email)) {
            ToastAndroid.show('Email sai định dạng !', ToastAndroid.LONG);
            return;
        }
        if (password.length < 1) {
            ToastAndroid.show('Mật khẩu không được để trống !', ToastAndroid.LONG);
            return;
        }
        if (password.length < 5) {
            ToastAndroid.show('Mật khẩu phải dài hơn 5 ký tự !', ToastAndroid.LONG);
            return;
        }
        const result = await register(email, password);
        if (result == true) {
            ToastAndroid.show('Register Successful', ToastAndroid.LONG);
            navigation.navigate('Login');
        }
        else {
            ToastAndroid.show('Register Failed', ToastAndroid.LONG);
        }
        console.log('>>>>>>>>>>>> Register result: ', result)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../media/images/duongke.png')} />
                <Image style={styles.anhhead} source={require('../../../../media/images/anhHead.png')} />
                <Image source={require('../../../../media/images/duongke.png')} />
            </View>
            <Text style={styles.fontAgain}>WELCOME </Text>


            <View style={styles.khung}>
                <Text style={styles.fontUP}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail} />

                <Text style={styles.fontUP}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword} />
                    <Image style={styles.ic_eye} source={require('../../../../media/images/eye.png')} />
                </View>
                <Pressable
                    style={styles.btnLogin}
                    onPress={() => onRegister(email,password)}> 
                    <Text style={styles.btnLoginLabel}>SIGN UP</Text>
                </Pressable>
                <View style={styles.center}>
                    <View style={styles.rowF}>
                        <Text style={styles.fontdhaa}>Already have account? </Text>
                        <Text
                            onPress={() => navigation.navigate('Login')}
                            style={styles.fontSU}>SIGN UP</Text>
                    </View>
                </View>
            </View>

            <View style={styles.center}>
        <Text style={styles.fontocw}>or continue with</Text>
    </View>

    <View style={styles.center}>
        <View style={styles.rowF}>
            <Text style={styles.fontdhaa}>don't have an account ? </Text>
            <Text style={styles.fontSU}>Sign Up</Text>
        </View>
    </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    khung: {
        backgroundColor: '#FFFFFF',
    },
    anhhead: {
        marginLeft: 20,
        marginRight: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    container: {
        flex: 1,
        padding: 24,
    },
    fontHello: {
        marginTop: 34.5,
        color: '#999999',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 30,
        lineHeight: 72,
        letterSpacing: 0.12,
    },
    fontAgain: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 72,
        letterSpacing: 0.12,
        color: 'black',
    },
    fontWelcome: {
        width: 222,
        marginTop: 4,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    marginUP: {
        marginTop: 48,
    },
    fontUP: {

        marginLeft: 30,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 0.12,
        color: ' #909090'
    },
    fontStar: {
        color: 'red',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    textInput: {
        marginLeft: 30,
        paddingLeft: 10,
        marginTop: 2,
        marginBottom: 20,
        height: 48,
        borderBottomWidth: 1,
        borderColor: '#999999',

    },
    fontStar: {
        color: 'red',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    btnLogin: {
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        marginTop: 30,
        backgroundColor: '#303030',
        borderRadius: 8,
        height: 50,
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
    inputContainer: {
        position: 'relative',
    },
    ic_eye: {
        position: 'absolute',
        right: 10,
        top: 14,
    },
    fontRm: {
        marginStart: 9.54,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    fontFtp: {
        marginTop: 30,
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: 0.12,
        color: '#303030',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontocw: {
        marginTop: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    rowFG: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnFG: {
        marginTop: 16,
        width: '46%',
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#EEF1F4',
        borderRadius: 6,
        flexDirection: 'row',
    },
    fontFG: {
        marginLeft: 10,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#667080',
    },
    rowF: {
        flexDirection: 'row',
    },
    fontdhaa: {
        marginTop: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19.1,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    fontSU: {
        marginTop: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 19.1,
        letterSpacing: 0.12,
        color: '#303030',

    }
})