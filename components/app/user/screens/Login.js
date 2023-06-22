import {
    StyleSheet, Text,
    View, TextInput,
    Pressable, Image,
    ToastAndroid
} from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../utilities/UserContext';

const Login = (props) => {
    const { navigation } = props;
    const { login } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email, password) => {
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
        const result = await login(email, password);
        if (!result) {
            ToastAndroid.show('Đăng nhập không thành công', ToastAndroid.LONG);
            setEmail('');
            setPassword('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../media/images/duongke.png')} />
                <Image style={styles.anhhead} source={require('../../../../media/images/anhHead.png')} />
                <Image source={require('../../../../media/images/duongke.png')} />
            </View>
            <View style={styles.title}>
                <Text style={styles.fontHello}>Hello !</Text>
                <Text style={styles.fontAgain}>WELCOME BACK</Text>
            </View>



            <View style={styles.khung}>
                <View style={styles.inputContainer}>
                    <Text style={styles.fontUP}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Username' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.fontUP}>Password</Text>
                    <View style={styles.inputPass}>
                        <TextInput
                            style={styles.textInput}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder='Password' />
                        <Image style={styles.ic_eye} source={require('../../../../media/images/eye.png')} />
                    </View>
                </View>



                <View style={styles.row}>

                    <Text style={styles.fontFtp}>Forgot Password</Text>
                </View>

                <Pressable
                    onPress={() => handleLogin(email, password)} 
                    style={styles.btnLogin}>
                    <Text style={styles.btnLoginLabel}>Log in</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Register')}
                    style={styles.row}>
                    <Text style={styles.fontSU}>SIGN UP</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    anhhead: {
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        marginTop: 30,
    },
    fontHello: {
        color: '#999999',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 30,
    },
    fontAgain: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        color: 'black',
    },

    khung: {
        marginTop: 25,
        backgroundColor: '#FFFFFF',
    },

    inputContainer: {
        marginTop: 30,
        marginLeft: 30,
    },

    fontUP: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        letterSpacing: 0.12,
        color: ' #909090'
    },

    textInput: {
        borderBottomWidth: 1,
        borderColor: '#999999',

    },

    inputPass: {
        position: 'relative',
    },
    ic_eye: {
        position: 'absolute',
        right: 10,
        top: 14,
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

    fontStar: {
        color: 'red',
        lineHeight: 21,
        letterSpacing: 0.12,
    },

    fontStar: {
        color: 'red',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    btnLogin: {
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
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    fontSU: {
        marginTop: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: 0.12,
        color: '#303030',

    }
})