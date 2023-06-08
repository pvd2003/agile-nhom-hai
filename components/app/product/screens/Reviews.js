import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const data = [
    { id: '1', name: 'Coffee Table', price: '$ 50.00', date: '08/06/2023', des: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price', rate: require('../../../../media/images/5sao.png'), image: require('../../../../media/images/imgRV.png'), },
    { id: '2', name: 'Coffee Table', price: '$ 50.00', date: '08/06/2023', des: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price', rate: require('../../../../media/images/5sao.png'), image: require('../../../../media/images/imgRV.png'), },
    { id: '3', name: 'Coffee Table', price: '$ 50.00', date: '08/06/2023', des: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price', rate: require('../../../../media/images/5sao.png'), image: require('../../../../media/images/imgRV.png'), },
    { id: '4', name: 'Coffee Table', price: '$ 50.00', date: '08/06/2023', des: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price', rate: require('../../../../media/images/5sao.png'), image: require('../../../../media/images/imgRV.png'), },
    { id: '5', name: 'Coffee Table', price: '$ 50.00', date: '08/06/2023', des: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price', rate: require('../../../../media/images/5sao.png'), image: require('../../../../media/images/imgRV.png'), },
    { id: '6', name: 'Coffee Table', price: '$ 50.00', date: '08/06/2023', des: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price', rate: require('../../../../media/images/5sao.png'), image: require('../../../../media/images/imgRV.png'), },

];

const Reviews = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.heading} >
                <Image
                    source={item.image}
                    style={styles.image} />
                <View style={styles.context}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </View>
            <View style={styles.rating}>
                <Image
                    source={item.rate}
                    style={styles.rate} />

                <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.des}>{item.des}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../media/images/back.png')} />
                <Text style={styles.title}>Payment method</Text>
                <Image source={require('../../../../media/images/find.png')} />
            </View>
            <View style={styles.body}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={1}
                />

            </View>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({

    // FlatList

    des:{
        marginHorizontal:16,
        marginTop:16,
        fontSize: 14,
        lineHeight: 19.1,
        width:'90%',
        fontWeight: '400',
        textAlign:'justify',
        color:'#242424'
    },

    date:{
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16.37,
        color:'#808080'
    },

    rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:16,
        marginTop:16
    },


    price: {
        fontWeight: '800',
        fontSize: 16,
        lineHeight: 21.82,
        color: '#242424'
    },

    name: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21.82,
        color: '#606060'
    },
    context: {
        marginLeft: 20
    },

    image: {
        borderRadius: 6
    },
   

    heading: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 16,
        marginTop: 16
    },

    item: {
        width: '90%',
        height: 242,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal:20,
        marginTop:16
    },

    // FlatList
    title: {
        fontFamily: 'Merriweather',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20.11,
        color: '#303030',
    },
    header: {
        width: '90%',
        marginTop: 44,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal:20
    },
    container: {
        display: 'flex',
        backgroundColor: '#F5F5F5',

    },
})