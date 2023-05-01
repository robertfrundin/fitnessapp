import { View,Text, ScrollView, StyleSheet } from "react-native";
import PageTitle from "../PageTitle/PageTitle";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useState } from "react";

export default function Sleep(){

    const [sleepMode, setSleepMode]=useState(true)
    const [sleepTime, setSleepTime]=useState('8.5 часов')
    return (
        <View style={{width:'100%',height:'93%'}}>
            <PageTitle title={'Cон'}></PageTitle>
            <View style={{marginVertical:'3%'}}>
                <Text style={{textAlign:"center", fontWeight:'600', fontSize:24, marginBottom:'3%'}}>О разделе</Text>
                <Text style={{marginLeft:'5%', fontSize:18}}>Здесь вы можете отслеживать продолжительность и качество сна</Text>
            </View>
            <View style={{padding:'5%'}}>
                <Text style={{fontSize:24, textAlign:'center'}}>Прошлой ночью вы спали <Text style={{color:'#5c9ce6', fontSize:36, fontWeight:'600', textAlign:'center',}}>{sleepTime}</Text></Text>
                <View>
                    <Text style={{fontSize:48, textAlign:'center', marginTop:'6%'}}>
                    {(new Date).getHours()+':'+(new Date).getMinutes()}
                    </Text>
                    {
                        sleepMode?<Text onPress={()=>setSleepMode(!sleepMode)}  style={{textAlign:'center', fontSize:24, backgroundColor:'#5c9ce6', color:"#fff", marginTop:'3%', borderRadius:5}}>Лечь спать</Text>: <Text onPress={()=>{setSleepMode(!sleepMode)
                        setSleepTime('Менее одной минуты')
                        }}  style={{textAlign:'center', fontSize:24, backgroundColor:'#5c9ce6', color:"#fff", marginTop:'3%', borderRadius:5}}>Записать пробуждение</Text>
                    }
               


                    
                </View>
            </View>
          
        </View>

    )
}