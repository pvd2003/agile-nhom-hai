import { StyleSheet, Text, View, Image, Button, Pressable, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NewsContext } from '../utilities/NewsContext';

const Detail = (props) => {

  //Hàm thêm số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);
  //Tăng số lượng
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  //Giảm số lượng
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { navigation, route } = props;
  const { id } = route?.params; //kiem tra 
  const { getDetail } = useContext(NewsContext);
  const [data, setData] = useState(null); //chi tiet 1 bai viet

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDetail(id);
      setData(response);
      console.log(response);
      // imglink = `http://172.16.65.84:9000/images/${data.image}`;

    };
    if (id) {
      fetchData();
    }
    return () => { }
  }, [id]);

  return (
    (data) ? <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{ uri: `http://192.168.1.13:3000/images/${data.image}` }} />
          <View style={styles.imgNavi}>
            <View style={styles.mot}></View>
            <View style={styles.hai}></View>
            <View style={styles.ba}></View>
          </View>

          <View style={styles.function}>
            <View style={styles.back}>
              <Pressable
                onPress={() => navigation.navigate('Home')}>
                <Image style={styles.icon} source={require('../../../../media/images/back.png')} />
              </Pressable>

            </View>

            <View style={styles.colorContainer}>
              <View style={styles.tron1}>
                <View style={styles.ngoai}></View>
                <View style={styles.trong}></View>
              </View>
              <View style={styles.tron2}>
                <View style={styles.ngoai2}></View>
                <View style={styles.trong2}></View>
              </View><View style={styles.tron3}>
                <View style={styles.ngoai3}></View>
                <View style={styles.trong3}></View>
              </View>
            </View>
          </View>
        </View>{/* header */}

        <View style={styles.body}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.priceAndQuantityContainer}>
            <Text style={styles.price}>{data.price}$</Text>

            <View style={styles.quantity}>
              <Pressable style={styles.afterCT} onPress={increaseQuantity}>
                <Image source={require('../../../../media/images/cong.png')} />
              </Pressable>
              <Text style={styles.quantityText}>{quantity.toString().padStart(2, '0')}</Text>
              <Pressable style={styles.afterCT} onPress={decreaseQuantity}>
                <Image source={require('../../../../media/images/tru.png')} />
              </Pressable>
            </View>
          </View>

          <View style={styles.rate}>
            <Image
              style={styles.star} source={require('../../../../media/images/sao.png')} />
            <Text style={styles.rateSo}> 4.5 </Text>
            <Text style={styles.review}> (50 reviews) </Text>
          </View>{/* rate */}

          <View style={styles.description}>
            <Text style={styles.descriptionText}>{data.description}</Text>
          </View>{/* description */}

        </View>{/* body */}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.buttonSave}>
          <Image style={styles.iconSave} source={require('../../../../media/images/luu.png')} />
        </Pressable>
        <Pressable style={styles.buttonAdd}>
          <Text style={styles.textAdd}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
    : <View><Text>Dang tai du lieu...</Text></View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  //Style header
  image: {
    width: 353,
    height: 455,
    borderBottomLeftRadius: 50,
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 455,
    alignItems: 'flex-end',
  },
  function: {
    width: '172%',
    marginTop: 53,
    position: 'absolute',
    alignItems: 'center',
  },
  back: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorContainer: {
    width: 64,
    height: 200,
    marginTop: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
  tron1: {
    marginLeft: 15,
    marginTop: 15,
  },
  tron2: {
    marginLeft: 15,
    marginTop: 65,
  },
  tron3: {
    marginLeft: 15,
    marginTop: 65,
  },
  trong3: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: '#E4CBAD',
    margin: 5,
    borderRadius: 20
  },
  ngoai3: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
  },

  trong2: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#B4916C',
    margin: 5,
  },
  ngoai2: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
  },
  trong: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#fff',
    margin: 5,
  },
  ngoai: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#909090',

  },
  imgNavi: {
    position: 'absolute',
    width: 100,
    height: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 418,
    marginLeft: 250
  },
  ba: {
    width: 15,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 4
  },
  hai: {
    width: 15,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  mot: {
    width: 30,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#000'
  },
  //Style Body
  body: {
    margin: 25,
  },
  title: {
    fontWeight: '490',
    fontSize: 24,
    lineHeight: 24,
    color: '#000'
  },
  priceAndQuantityContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  price: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 40,
    color: '#000',
    textAlign: 'left'
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row-reverse'
  },
  quantityText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24.55,
    color: '#000',
  },
  afterCT: {
    width: 30,
    height: 30,
    margin: 10,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rate: {
    flexDirection: 'row',
  },
  star: {
    width: 25,
    height: 25
  },
  rateSo: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24.55,
    marginLeft: 10,
    color: '#000',
  },
  review: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24.55,
    marginLeft: 20,
  },
  description: {
    marginTop: 10,
  },
  descriptionText: {
    textAlign: 'justify',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 19.1,
    color: '#606060'
  },
  //Style Footer
  footer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonSave: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  iconSave: {
    width: 16,
    height: 20
  },
  buttonAdd: {
    width: 280,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 15
  },
  textAdd: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 27.25,
    color: '#fff',
    textAlign: 'center',
  },






































})