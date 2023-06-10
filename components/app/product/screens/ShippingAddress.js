import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'

const ShippingAddress = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../../media/images/back.png')}
                />
                <Text style={styles.title}>Shipping address</Text>
                <Image

                />
            </View>{/* header */}
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text
                            style={styles.label}>Use as the shipping address</Text>
                    </View>{/*checkboxContainer */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.name}>Bruno Fernandes</Text>
                            <Image
                                source={require('../../../../media/images/edit.png')}
                            />
                        </View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <Text style={styles.context}>
                                25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
                            </Text>
                        </View>
                    </View>{/**section */}

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text
                            style={styles.label}>Use as the shipping address</Text>
                    </View>{/*checkboxContainer */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.name}>Bruno Fernandes</Text>
                            <Image
                                source={require('../../../../media/images/edit.png')}
                            />
                        </View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <Text style={styles.context}>
                                25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
</Text>
                        </View>
                    </View>{/**section */}

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text
                            style={styles.label}>Use as the shipping address</Text>
                    </View>{/*checkboxContainer */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.name}>Bruno Fernandes</Text>
                            <Image
                                source={require('../../../../media/images/edit.png')}
                            />
                        </View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <Text style={styles.context}>
                                25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
                            </Text>
                        </View>
                    </View>{/**section */}

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text
                            style={styles.label}>Use as the shipping address</Text>
                    </View>{/*checkboxContainer */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.name}>Bruno Fernandes</Text>
                            <Image
                                source={require('../../../../media/images/edit.png')}
                            />
                        </View>
                        <View style={styles.rectangle}></View>
                        <View style={styles.sectionBody}>
                            <Text style={styles.context}>
                                25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
                            </Text>
                        </View>
                    </View>{/**section */}

                    
                </View>{/*body */}
                </ScrollView>
                    <View style={styles.AddBtn}>
                        <Image
                            source={require('../../../../media/images/cong.png')}
                        />
                    </View>

            

        </View>// container
    )
}

export default ShippingAddress

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
    //Style body
    body: {

    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 25,
    },
    checkbox: {
        tintColor: 'black',
    },
    label: {
        color: '#303030',
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
        textAlign: 'center',
    },
    section: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    name: {
        color: '#242424',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    rectangle: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    sectionBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    context: {
        paddingHorizontal: 20,
        color: '#808080',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
    },
    AddBtn: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 20,

    }
})