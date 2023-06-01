import { StyleSheet, Text, View, Image, Pressable, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';

import React, { useEffect, useState } from "react";

//data
const data = [
    { id: '1', name: 'Black Simple Lamp', price: '$ 12.00', image: require('../../../../media/images/image1.png'), },
    { id: '2', name: 'Minimal Stand', price: '$ 25.00', image: require('../../../../media/images/image2.png'), },
    { id: '3', name: 'Coffee Chair', price: '$ 20.00', image: require('../../../../media/images/image3.png'), },
    { id: '4', name: 'Simple Desk', price: '$ 50.00', image: require('../../../../media/images/image4.png'), },
    { id: '5', name: 'Simple Desk', price: '$ 50.00', image: require('../../../../media/images/image4.png'), },
    { id: '6', name: 'Simple Desk', price: '$ 50.00', image: require('../../../../media/images/image4.png'), },
    { id: '7', name: 'Simple Desk', price: '$ 50.00', image: require('../../../../media/images/image4.png'), },
];

const Home = ({ navigation }) => {

    const [isHidden, setIsHidden] = useState(false);
    const [isIcon, setIsIcon] = useState('../../../../media/images/find.png');

    function Show() {
        if (isHidden) {
            setIsIcon(require('../../../../media/images/image4.png'))
            return false;
        } else {
            setIsIcon(require('../../../../media/images/image4.png'))
            return true;
        }
    }


    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Pressable
                onPress={() => navigation.navigate('Detail', { item })}>
                <Image
                    source={item.image}
                    style={styles.image} />
                <View style={styles.context}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity onPress={() => setIsHidden(Show)} >
                    {isHidden && <Image source={require('../../../../media/images/Shape.png')} />}
                    {!isHidden && <Image source={require('../../../../media/images/find.png')} />}
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.title0}>Make home</Text>
                    <Text style={styles.title1}>BEAUTIFUL</Text>
                </View>
                <Image
                    source={require('../../../../media/images/cart.png')}
                />
            </View>

            {isHidden && <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    //onChangeText={(text) => setKeyword(text)}
                    placeholder="Search . . ."
                />
                <TouchableOpacity style={styles.icon} onPress={() => onHandleSearch(keyword)}>
                    <Image source={require('../../../../media/images/find.png')} />
                </TouchableOpacity>
            </View>}

            <View style={styles.nav}>
                <Pressable>
                    <View style={styles.functionChoose}>
                        <Image
                            source={require('../../../../media/images/popular.png')}
                        />
                    </View>
                    <Text style={styles.functionTextChoose}>Popular</Text>
                </Pressable>
                <Pressable>
                    <View style={styles.function}>
                        <Image
                            source={require('../../../../media/images/chair.png')}
                        />
                    </View>
                    <Text style={styles.functionText}>Chair</Text>
                </Pressable>
                <Pressable>
                    <View style={styles.function}>
                        <Image
                            source={require('../../../../media/images/table.png')}
                        />
                    </View>
                    <Text style={styles.functionText}>Table</Text>
                </Pressable>
                <Pressable>
                    <View style={styles.function}>
                        <Image
                            source={require('../../../../media/images/armchair.png')}
                        />
                    </View>
                    <Text style={styles.functionText}>Armchair</Text>
                </Pressable>
                <Pressable>
                    <View style={styles.function}>
                        <Image
                            source={require('../../../../media/images/bed.png')}
                        />
                    </View>
                    <Text style={styles.functionText}>Bed</Text>
                </Pressable>
            </View>

            <View style={styles.body}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    //style header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
    },
    title0: {
        color: '#909090',
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Gelasio',
    },
    title1: {
        color: '#242424',
        fontSize: 24,
        fontWeight: '400',
        fontFamily: 'Gelasio',
    },
    //Style nav
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 36,
    },
    functionChoose: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#303030',
        justifyContent: 'center',
    },
    function: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
    },
    functionTextChoose: {
        color: '#242424',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Nunito Sans',
        marginTop: 5,
        textAlign: 'center',

    },
    functionText: {
        color: '#999999',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
        marginTop: 5,
        textAlign: 'center',
    },
    //Style Body
    body: {
        alignItems: 'center',
        marginTop: 36,
        flex: 1
    },

    //Style Flatlist
    item: {
        margin: 8,
        padding: 5
    },
    image: {
        height: 200,
        width: 157,
        borderRadius: 10,
    },
    context: {
        justifyContent: 'flex-start'
    },
    name: {
        color: '#606060',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
    },
    price: {
        color: '#303030',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 5,
        marginRight: 5,
    },
    input: {
        height: 40,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        borderColor: '#303030',
        borderWidth: 1,
        marginTop: 20,
    },
    icon: {
        marginTop: 30,
        marginStart: 320,
        position: 'absolute',
    },
})
