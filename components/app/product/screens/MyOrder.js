import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'

const MyOrder = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Pressable
                onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.icon} source={require('../../../../media/images/back.png')} />
              </Pressable>
               
                <Text style={styles.title}>My order</Text>
                <Image

                />
            </View>{/* header */}
            
                <View style={styles.nav}>
                    <View style={styles.functionItem}>
                        <Text style={styles.functionChoose}>Delivered</Text>
                        <Image
                            source={require('../../../../media/images/rectangle.png')}
                        />
                    </View>
                    <View style={styles.functionItem}>
                        <Text style={styles.function}>Processing</Text>
                        <Image

                        />
                    </View>
                    <View style={styles.functionItem}>
                        <Text style={styles.function}>Canceled</Text>
                        <Image

                        />
                    </View>
                </View>{/*nav */}
                <ScrollView>
                <View style={styles.body}>
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.id}>Order No238562312</Text>
                            <Text style={styles.time}>20/03/2020</Text>
                        </View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <View style={styles.quantityContainer}>
                                <Text style={styles.quantity}>Quantity: </Text>
                                <Text style={styles.quantityNumber}>03</Text>
                            </View>
                            <View style={styles.totalContainer}>
                                <Text style={styles.total}>Total Amount: </Text>
                                <Text style={styles.totalNumber}>$150</Text>
                            </View>
                        </View>
                        <View style={styles.sectionFooter}>
                            <Pressable style={styles.detailBtn}>
                                <Text style={styles.detailText}>Detail</Text>
                            </Pressable>
                            <Text style={styles.status}>Delivered</Text>
                        </View>
                    </View>{/**section */}

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.id}>Order No238562312</Text>
                            <Text style={styles.time}>20/03/2020</Text>
</View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <View style={styles.quantityContainer}>
                                <Text style={styles.quantity}>Quantity: </Text>
                                <Text style={styles.quantityNumber}>03</Text>
                            </View>
                            <View style={styles.totalContainer}>
                                <Text style={styles.total}>Total Amount: </Text>
                                <Text style={styles.totalNumber}>$150</Text>
                            </View>
                        </View>
                        <View style={styles.sectionFooter}>
                            <Pressable style={styles.detailBtn}>
                                <Text style={styles.detailText}>Detail</Text>
                            </Pressable>
                            <Text style={styles.status}>Delivered</Text>
                        </View>
                    </View>{/**section */}

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.id}>Order No238562312</Text>
                            <Text style={styles.time}>20/03/2020</Text>
                        </View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <View style={styles.quantityContainer}>
                                <Text style={styles.quantity}>Quantity: </Text>
                                <Text style={styles.quantityNumber}>03</Text>
                            </View>
                            <View style={styles.totalContainer}>
                                <Text style={styles.total}>Total Amount: </Text>
                                <Text style={styles.totalNumber}>$150</Text>
                            </View>
                        </View>
                        <View style={styles.sectionFooter}>
                            <Pressable style={styles.detailBtn}>
                                <Text style={styles.detailText}>Detail</Text>
                            </Pressable>
                            <Text style={styles.status}>Delivered</Text>
                        </View>
                    </View>{/**section */}
                </View>{/*body */}
            </ScrollView>

        </View>// container
    )
}

export default MyOrder

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
        justifyContent: 'space-between',
    },
    functionItem: {
        alignItems: 'center',
    },
    functionChoose: {
        color: '#242424',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
        marginBottom: 10,
    },
    function: {
        color: '#999999',
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
        marginBottom: 10,
    },
    //Style body
    body: {
        
    },
    section:{
        marginTop: 25,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    sectionHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    id:{
        color: '#242424',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Nunito Sans',
    },
    time: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
    },
    rectangle:{
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    sectionBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    quantityContainer:{
        flexDirection: 'row',
    },
    quantity:{
        color: '#808080',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
    },
    quantityNumber:{
        color: '#242424',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    totalContainer:{
        flexDirection: 'row',
    },
    total:{
        color: '#808080',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
    },
    totalNumber:{
        color: '#242424',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    sectionFooter:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailBtn: {
        paddingHorizontal: 28,
        backgroundColor: '#242424',
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
        justifyContent: 'center',
    },
    detailText:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    status: {
        padding: 15,
        color: '#27AE60',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Nunito Sans',
    },

})