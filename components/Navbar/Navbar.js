
import { View, StyleSheet,Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useState } from "react";
export default function Navbar({switcher,active}){
    const buttons=[
        {
            name:'sport',
            icon:'tennis',
            active:false,
        },
        {
            name:'pills',
            icon:'pill',
            active:false,
        },
        {
            name:'food',
            icon:'silverware-fork-knife',
            active:true,
            
        },
        {
            name:'sleep',
            icon:'power-sleep',
            active:false,},
    ]
    const [memoizedButtons,setMemoizedButtons]=useState(buttons,[])
    return(
    <View style={styles.wrap}>
        {
            memoizedButtons.map((el,idx)=><View key={idx} onStartShouldSetResponder={()=>{switcher(el.name);memoizedButtons.forEach((x,idx)=>x.active=false); memoizedButtons[idx].active=true}}  style={styles.button}><MaterialCommunityIcons name={el.icon} size={34} color={el.active?"#5c9ce6":"#ccc"} /></View>)
        }
    </View>
    )
}

const styles=StyleSheet.create({
    wrap:{
        marginTop:'auto',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        backgroundColor:'#fff',
        height:'8%'
    },
    button:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})