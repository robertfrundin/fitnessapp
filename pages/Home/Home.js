import { useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import Food from "../../components/Food/Food"
import Sport from "../../components/Sport/Sport"
import Sleep from "../../components/Sleep/Sleep"
import Pills from "../../components/Pills/Pills"
import Analysis from "../../components/Analysis/Analysis"
import Navbar from "../../components/Navbar/Navbar"
export default function Home(){
    const [activeComponent,setActiveComponent]=useState('food')
    return (<View style={styles.wrap}>
       { activeComponent==='food'&&<Food></Food>}
       { activeComponent==='sport'&&<Sport></Sport>}
       { activeComponent==='sleep'&&<Sleep></Sleep>}
       { activeComponent==='pills'&&<Pills></Pills>}
       { activeComponent==='analysis'&&<Analysis></Analysis>}
        <Navbar active={activeComponent} switcher={setActiveComponent}></Navbar>
    </View>)
}


const styles=StyleSheet.create({
    wrap:{
        justifyContent:'space-between',
        backgroundColor:'#fff',
        flexGrow:1,
        width:'100%'
    }
})