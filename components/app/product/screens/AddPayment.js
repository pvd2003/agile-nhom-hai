import { View, Text,Image,StyleSheet,Pressable,TouchableOpacity } from 'react-native'
import React from 'react'

const AddPayment = () => {
  return (
    <View style = {paymentsheet.container}>
       
      <View style={paymentsheet.first}>
        <TouchableOpacity>
       <Image style = {paymentsheet.imback} source={require("../../../../media/images/back.png")}/>
       </TouchableOpacity>
       <Text style = {paymentsheet.txtrating}>Add payment method</Text>
      </View>
      <View style = {paymentsheet.secon}>
        <View style ={paymentsheet.secon1}>
        <Image style={paymentsheet.imvisa} source={require("../../../../media/images/catthe.png")}/>
        <Text style = {paymentsheet.txtvisa}>VISA</Text>
        </View>
        <Text style={paymentsheet.xxx}>* * * *  * * * *  * * * *  XXXX</Text>
        <View style ={paymentsheet.secon2}>
         <View style={paymentsheet.secon21}>
          <Text style={paymentsheet.txtcart}>Card Holder Name</Text>
          <Text style={paymentsheet.txtxxx}>XXXXXX</Text>
         </View>
         <View style ={paymentsheet.secon22}>
          <Text style={paymentsheet.txtexpi}>Expiry Date</Text>
          <Text style={paymentsheet.txtexpi1}>XX/XX</Text>
         </View>
        </View>

      </View>
      <View style ={paymentsheet.three}>
       <Text style={paymentsheet.name0}>CardHolder Name</Text>
       <Text style={paymentsheet.name1}>Ex: Bruno Pham</Text>
      </View>
      <View style ={[paymentsheet.three,{backgroundColor:"#FFFFFF"}]}>
       <Text style={paymentsheet.name0}>Card Number</Text>
       <Text style={paymentsheet.name1}>**** **** **** 3456</Text>
      </View>
      <View style ={paymentsheet.nono}>
      <View style ={[paymentsheet.three,{backgroundColor:"#F5F5F5",width:157, height: 66}]}>
       <Text style={paymentsheet.name0}>CVV </Text>
       <Text style={paymentsheet.name1}>Ex: 123</Text>
      </View>
      <View style ={[paymentsheet.three,{backgroundColor:"#FFFFFF",width:157, height: 66}]}>
       <Text style={paymentsheet.name0}>Expiration Date</Text>
       <Text style={[paymentsheet.name1,{color:"#242424"}]}>03/22</Text>
      </View>
      </View>
      <Pressable style={paymentsheet.btnadd}>
       <TouchableOpacity>
      <Text style ={paymentsheet.txtadd}>ADD NEW CARD</Text>
      </TouchableOpacity>
      </Pressable>
       
      </View>
      
    
  )
}

export default AddPayment
const paymentsheet = StyleSheet.create({
    txtadd:{
        marginTop: 5,
        fontSize:20,
        lineHeight: 50,
        color:"#FFFFFF",
        marginLeft: 87,
        alignItems: 'center'
    },
    btnadd:{
    width:335,
    height: 60,
    backgroundColor: "#242424",
    borderRadius: 8,
    marginLeft: 30,
    marginTop: 125
    },
    nono:{
       
     flexDirection: 'row',
     marginTop: 20
    },
    name1:{
        marginTop: 5,
        fontSize:16,
        lineHeight: 22,
        color:"#B3B3B3",
        marginLeft: 16
    },
    name0:{
     marginTop: 12,
     fontFamily:'nunito Sans',
    fontSize:12,
    lineHeight: 16,
    color:"#808080",
    marginLeft: 16
    },
    three:{
       
    marginLeft: 30,
    marginTop: 15,
     width:335,
     height:66,
     borderRadius: 4,
     backgroundColor: "#F5F5F5"

    },
    txtexpi1:{
        fontSize:14,
        lineHeight:19,
        color:"#FFFFFF"
    },
    txtexpi:{
        fontSize:12,
        lineHeight:16,
        color:"#FFFFFF"
    },
    txtxxx:{
        fontSize:14,
        lineHeight:19,
        color:"#FFFFFF"
    },
    txtcart:{
    fontSize:12,
    lineHeight:16,
    color:"#FFFFFF"
    },
    secon21:{
        marginLeft: 25
       },
    secon22:{
     marginLeft: 95
    },
    secon2:{
        marginTop: 25,
     flexDirection: 'row'
    },
    xxx:{
        marginLeft: 25,
        marginTop:20,
        color:'#FFFFFF',
        fontSize:20,
        lineHeight:27
      
    },
    imvisa:{
    marginLeft:25,
    marginTop: 20,
    
    },
    txtvisa:{
        fontWeight:"700",
        marginLeft: 15,
        marginTop: 20,
     width: 50,
     height: 16,
     color:"#FFFFFF"
    },
    secon:{
        marginLeft: 30,
        marginTop: 34,
         width: 333,
         height: 180,
         borderRadius: 10,
         backgroundColor:"#242424"
    },
    secon1:{
        flexDirection:'row',
        
    },
   
    txtrating:{
        color:"#303030",
         marginLeft: 86,
         lineHeight: 20,
         fontSize: 20,
         fontWeight : '500'
        },
        imback:{
    
        color: "#242424"
        },
    
        first:{
            marginLeft: 17,
            marginTop: 20,
         flexDirection:'row',
       
         
         
        },

    container:{
        flex:1
    }
})