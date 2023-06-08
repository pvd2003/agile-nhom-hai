import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput ,Pressable } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Sài Gòn', value: '1' },
    { label: 'Hà Nội', value: '2' },
    { label: 'Paris', value: '4' },
    { label: 'Bangcok', value: '3' },
    { label: 'Bali', value: '5' },
];
const data2 = [
    { label: 'Việt Nam', value: '6' },
    { label: 'Thái Lan', value: '7' },
    { label: 'Pháp', value: '8' },
    { label: 'Ấn Độ', value: '9' },
    { label: 'Hàn', value: '10' },
];
const data3 = [
    { label: 'Quang Trung', value: '11' },
    { label: 'Lê Lợi', value: '12' },
    { label: 'Pasteur', value: '14' },
    { label: 'Hai Bà Trưng', value: '13' },
    { label: 'Điện Biên Phủ', value: '15' },
];

const AddShopAddress = _props => {
    const [dropdown, setDropdown] = useState(null);
    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../media/images/back.png')} />
                <Text style={styles.title}>Add shipping address</Text>  
            </View>
            <View style={styles.info}>
                <Text style={styles.textName}>Full Name</Text>
                <TextInput
                    style={styles.fullName}
                    placeholder='EX: Bruno Pham'
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.textName}>Address</Text>
                <TextInput
                    style={styles.fullName}
                    placeholder='Ex: 25 Robert Latouche Street'
                />
            </View>

            <View style={styles.info}>
                <Text style={styles.textName}>Zipcode (Postal Code)</Text>
                <TextInput
                    style={styles.fullName}
                    placeholder='Pham Cong Thanh'
                />
            </View>

            <View style={styles.city}>
                <Text style={styles.textName}>Country</Text>

                <Dropdown
                    style={styles.dropdown}
                    data={data2}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Country"
                    value={dropdown}
                    onChange={item => {
                        setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => renderItem(item)}

                />
            </View>

            <View style={styles.city}>
                <Text style={styles.textName}>City</Text>

                <Dropdown
                    style={styles.dropdown}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="New York"
                    value={dropdown}
                    onChange={item => {
                        setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => renderItem(item)}

                />
            </View>

            <View style={styles.city}>
                <Text style={styles.textName}>District</Text>

                <Dropdown
                    style={styles.dropdown}
                    data={data3}
                    labelField="label"
                    valueField="value"
                    placeholder="Select District"
                    color='#000'
                    value={dropdown}
                    onChange={item => {
                        setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderItem={item => renderItem(item)}

                />
            </View>


                    <View style={styles.button}>
                        <Pressable style={styles.btn}>
                            <Text style={styles.textBtn}>SAVE ADDRESS</Text>
                        </Pressable>
                    </View>
        </View>
    );
};

export default AddShopAddress;

const styles = StyleSheet.create({

    textBtn:{
        color:'#fff',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 28,
        textAlign:'center',
        
       
    },

    btn:{
        backgroundColor:'#000',
        height:60,
        borderRadius:8,
        
        justifyContent:'center',
        alignItems:'center'
        
    },

    button:{
        display:'flex',
        width:'90%',
        marginTop: 36,
        marginLeft: 20,
    },

    textName: {
        position: 'absolute',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 26,
        marginTop: 4,
        marginLeft: 20,
    },



    fullName: {
        marginTop: 16,
        marginLeft: 16,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 22,
        color: '#B3B3B3'
    },


    info: {
        position: 'relative',
        backgroundColor: '#F5F5F5',
        width: '90%',
        height: 66,
        marginLeft: 20,
        borderRadius: 8,
        marginTop: 28
    },


    textItem: {
        flex: 1,
        fontSize: 16,
    },

    item: {
        color:'#000',
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dropdown: {
        
        marginHorizontal: 20,
        marginTop: 24,

    },
    city: {
        marginTop: 20,
        width: '90%',
        height: 66,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        marginLeft: 20
    },


    title: {
        fontFamily: 'Merriweather',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20.11,
        color: '#303030',
    },
    header: {
        width: '84%',
        marginTop: 44,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },

    //Header
    container: {
        flex: 1,

    },
});