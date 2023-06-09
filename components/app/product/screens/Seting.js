import { View, Text,StyleSheet,Image,TouchableOpacity,Switch} from 'react-native'
import React from 'react'
import { useState } from 'react'

const Seting = () => {
    const [switchvalue, setswitchvalue] = useState(true)
    const [switchnew, setswitchnew] = useState(false)
    const [switchstatus, setswitchstatus] = useState(false)
    const tonggoswitch = ()=> {
        setswitchvalue (previousStae => !previousStae)
    }
    const tonggoswitchnew =()=>{
        setswitchnew(previousStaenew => !previousStaenew)
    }
    const stastus =()=>{
        setswitchstatus(previousStaestatus => !previousStaestatus)
    }
  return (
    <View style ={setingsheet.container} >
      <View style={setingsheet.first}>
        <TouchableOpacity>
       <Image style = {setingsheet.imback} source={require("../../../../media/images/back.png")}/>
       </TouchableOpacity>
       <Text style = {setingsheet.txtrating}>Setting</Text>
      </View>
      <View style = {setingsheet.secon}>
       <Text style = {setingsheet.txtper}>Personal Information</Text>
       <Image style={setingsheet.impen} source={require('../../../../media/images/pen.png')}></Image>
      </View>
      <View style ={setingsheet.three}>
       <Text style={setingsheet.name0}>Name</Text>
       <Text style={setingsheet.name1}>Bruno Pham</Text>
      </View>
      <View style ={setingsheet.three}>
       <Text style={setingsheet.name0}>Email</Text>
       <Text style={setingsheet.name1}>bruno203@gmail.com</Text>
      </View>
      <View style = {setingsheet.secon}>
       <Text style = {[setingsheet.secon,{marginTop:0}]}>Password</Text>
       <Image style={setingsheet.impen} source={require('../../../../media/images/pen.png')}></Image>
      </View>
      <View style ={setingsheet.three}>
       <Text style={setingsheet.name0}>Name</Text>
       <Text style={setingsheet.name1}>***************</Text>
      </View>
      <Text style={setingsheet.notifi}>Notifications</Text>
      <View style={setingsheet.sale}>
       <Text style={setingsheet.txtsale}>Sale</Text>
         <View style={setingsheet.imswichon}>
            <Switch
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            trackColor={{false: "#E6E6E6",true:"#27AE60"}}
            thumbColor={switchvalue? "#FFFFFF":"#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={tonggoswitch}
            value={switchvalue}
            />
         </View>
      
      
      </View>
      <View style={setingsheet.sale}>
       <Text style={setingsheet.txtsale}>New arrivals</Text>
        <View style={setingsheet.imswichon}>
        <Switch
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            trackColor={{false: "#E6E6E6",true:"#27AE60"}}
            thumbColor={switchvalue? "#FFFFFF":"#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={tonggoswitchnew}
            value={switchnew}
            />
        </View>
      </View>
      <View style={setingsheet.sale}>
       <Text style={setingsheet.txtsale}>Delivery status changes</Text>
        <View style={setingsheet.imswichon}>
        <Switch
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            trackColor={{false: "#E6E6E6",true:"#27AE60"}}
            thumbColor={switchvalue? "#FFFFFF":"#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={stastus}
            value={switchstatus}
            />
        </View>
      </View>
       <Text style={setingsheet.help}>Help Center</Text>
       <View style={setingsheet.faq}>
        <Text style={setingsheet.txtfaq}>FAQ</Text>
        <TouchableOpacity>
        <Image style={setingsheet.imnext} source={require("../../../../media/images/nextt.png")}/>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default Seting
const setingsheet = StyleSheet.create({
    imnext:{
    marginRight: 20,
    marginTop: 11
    },
    txtfaq:{
    color:"#242424",
    marginLeft:20,
    marginTop: 11
    },
    faq:{
        marginLeft: 20,
        marginTop: 10,
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: 335,
     height: 50,
     borderRadius:4,
     backgroundColor: "#FFFFFF"
    },
    help:{
        marginLeft: 20,
        marginTop: 30,
     fontSize: 16,
     lineHeight:22,
     color: "#909191"
    },
    imswichon:{
        marginRight:15,
        marginTop: 11
    },
    txtsale:{
        marginLeft: 16,
        marginTop: 12,
     fontSize: 16,
     lineHeight:20,
     color: "#242424"
    },
    sale:{
     flexDirection: 'row',
     justifyContent:'space-between',
     width: 334,
     height: 54,
     borderRadius: 4,
     backgroundColor: "#FFFFFF",
     marginLeft: 20,
     marginTop: 11
    },
    notifi:{
        marginLeft: 20,
        marginTop: 35,
     fontSize: 16,
     lineHeight:22,
     color: "#909191"
    },
    name1:{
        marginTop: 5,
        fontSize:14,
        lineHeight: 19,
        color:"#242424",
        marginLeft: 16
    },
    name0:{
        marginTop: 12,

    fontSize:12,
    lineHeight: 16,
    color:"#808080",
    marginLeft: 16
    },
    three:{
       
    marginLeft: 20,
    marginTop: 15,
     width:335,
     height:64,
     borderRadius: 4,
     backgroundColor: "#FFFFFF"

    },
    impen:{
    marginRight: 40
    },
    txtper:{
     fontSize: 16,
     lineHeight: 22,
     color: "#909191"
    },
    secon:{
        marginLeft: 20,
        marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    first:{
        marginLeft: 23,
        marginTop: 15,
     flexDirection:'row',
    },
    txtrating:{
        color:"#303030",
         marginLeft: 100,
         lineHeight: 20,
         fontSize: 20,
         fontWeight : '500'
        },
    imback:{

        color: "#242424"
        },
    container:{
        flex: 1
    }
})