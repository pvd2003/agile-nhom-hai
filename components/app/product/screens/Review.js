import { View, Text, StyleSheet, Image, FlatList,TouchableOpacity} from 'react-native';
import { useState } from 'react';
import React from 'react';

const Review = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      name: 'Bruno Fernandes',
      date: '20/3/2020',
      avatar: require('../../../../media/images/image8.png'),
      sao: require('../../../../media/images/anhsao.png'),
      title:
        'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    },
    {
      id: 2,
      name: 'Tracy Mosby',
      date: '20/3/2020',
      avatar: require('../../../../media/images/image7.png'),
      sao: require('../../../../media/images/anhsao.png'),
      title:
        'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price',
    },
  ]);

  const renderitem = ({ item }) => {
    return (
      <View style={reviewsheet.render}>
        <TouchableOpacity>
        <Image style={reviewsheet.avatar} source={item.avatar} />
        </TouchableOpacity>
        <View style={reviewsheet.khung}>
          <TouchableOpacity>
          <View style={reviewsheet.tendate}>
            <Text style={reviewsheet.name}>{item.name}</Text>
            <Text style={reviewsheet.date}>{item.date}</Text>
          </View>
          <Image style={reviewsheet.sao} source={item.sao} />
          <Text style ={reviewsheet.title}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={reviewsheet.container}>
      <View style={reviewsheet.first}>
        <TouchableOpacity>
        <Image style={reviewsheet.imback} source={require("../../../../media/images/back.png")} />
        </TouchableOpacity>
        <Text style={reviewsheet.txtrating}>Rating & Review</Text>
      </View>
      <View style={reviewsheet.secon}>
        <TouchableOpacity>
        <Image style={reviewsheet.anhtd} source={require("../../../../media/images/image2.png")} />
        </TouchableOpacity>
        <View style={reviewsheet.secon1}>
          <Text style={reviewsheet.txtMinmal}>Minimal Stand</Text>
          <View style={reviewsheet.secon2}>
            <Image style={reviewsheet.imSao} source={require("../../../../media/images/sao.png")} />
            <Text style={reviewsheet.txtSo}>4.5</Text>
          </View>
          <Text style={reviewsheet.txtSReview}>
            10 reviews
          </Text>
        </View>
      </View>
      <FlatList
        style={reviewsheet.flat}
        data={data}
        renderItem={renderitem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Review;

const reviewsheet = StyleSheet.create({
  date:{
  marginLeft: 124
  },
  name:{
   fontSize:14,
   lineHeight: 19,
   color:"#242424"
  },
  title:{
   marginLeft: 17
  },
  sao:{
    marginLeft: 16
  },
  avatar: {
    
    marginTop: 15,
  marginLeft:150,
  width: 40,
  height: 40
  },
  khung: {
   
    marginLeft: 20,
    marginTop: 0,
    width: 335,
    height: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  render: {
    marginTop: 10,
  },
  flat: {
    marginTop: 10,
  },
  tendate: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 18
  },
  
  txtSReview: {
    marginTop: 13,
    fontSize: 18,
    lineHeight: 25,
    color: '#303030',
  },
  txtSo: {
    marginLeft: 10,
    fontSize: 24,
    lineHeight: 33,
    color: '#303030',
  },
  imSao: {
  
  },
  txtMinmal: {
    fontSize: 14,
    lineHeight: 19,
    color: '#242424',
  },
  secon2: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  secon1: {
    marginLeft: 130,
    marginTop: -100,
  },
  secon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  anhtd: {
    width: 100,
    height: 100,
  },
  secon: {
    marginTop: 31,
    marginLeft: 23,
  },
  txtrating: {
    color: '#303030',
    marginLeft: 100,
    lineHeight: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  imback: {
    color: '#242424',
  },

  first: {
    marginLeft: 23,
    marginTop: 20,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },
});
