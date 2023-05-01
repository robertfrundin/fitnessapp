import { View,Text, ScrollView, StyleSheet, TextInput } from "react-native";
import NumericInput from 'react-native-numeric-input'
import PageTitle from "../PageTitle/PageTitle";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useState } from "react";
export default function Sport(){
    const [inputValue,setInputValue]=useState('')
    const [inputChildren,setInputChildren]=useState([{title:'', reps:0}])
    const [list,setList]=useState([{name:'Тренировка дома', actions:[{title:'Отжимания', reps:12},{title:'Штанга', reps:10}]}])
    return (
        <View style={{width:'100%',height:'93%'}}>
            <PageTitle title={'Тренировки'}></PageTitle>
            <View style={{marginVertical:'3%'}}>
                <Text style={{textAlign:"center", fontWeight:'600', fontSize:24, marginBottom:'3%'}}>О разделе</Text>
                <Text style={{marginHorizontal:'5%', fontSize:18}}>Здесь вы можете отслеживать тренировки и другую физическую активность</Text>
            </View>
        <ScrollView style={{backgroundColor:'#ccc',paddingHorizontal:'3%', height:200}}>
            {
                list.map((x,idx)=>(
                    <View key={idx} style={{padding:'5%',marginTop:'5%', backgroundColor:"#fff", borderWidth:1, borderRadius:5}}>
                    <View style={{flex:1, flexDirection:'row', justifyContent:"space-between", borderBottomColor:'#ccc', borderBottomWidth:1, padding:'3%'}}>
                    <Text style={{fontSize:22}}>{x.name}</Text>
                    <MaterialCommunityIcons name='magnify-expand' size={34} color="#000" />
                    </View>
                    <View style={{fontSize:24, padding:'2%'}}>
                        {
                            x.actions.map((action,childIdx)=><Text key={childIdx} style={styles.dish}>{action.title} <Text style={{color:'#5c9ce6'}}>{action.reps}x</Text></Text>)
                        }
                        
                        
                    </View>
                </View>
                ))
            }
           
            <View style={{padding:'5%',marginVertical:'3%', backgroundColor:"#fff", borderWidth:1, borderRadius:5, }}>
            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TextInput style={{fontSize:22, textTransform:'capitalize'}} defaultValue={inputValue} onChangeText={(x)=>setInputValue(x)} placeholder="Введите название"></TextInput>
                <MaterialCommunityIcons onPress={()=>{
                    
                    if(inputValue.length>1){
                        const newList=[...list]
                        newList.push({name:inputValue,actions:inputChildren })
                        setInputValue('')
                        setInputChildren([])
                        setList(newList)

                    }
                }}  name='plus' size={40} color="#5c9ce6" />
            </View>
                
                <View style={{paddingVertical:'1%', paddingHorizontal:'10%'}}>
                
                {inputChildren.map((x,idx)=>
                <View key={idx} style={{flexDirection:'row', justifyContent:'space-between'}}><TextInput  defaultValue={x.title} onChangeText={(changedValue)=>{
                    const copy = [...inputChildren]
                    copy[idx].title=changedValue
                    setInputChildren(copy)      
                }} style={{textTransform:'capitalize', fontSize:20}} key={idx} placeholder="Упражнение"></TextInput><NumericInput type='up-down' onChange={value => {
                    const copy = [...inputChildren]
                    copy[idx].reps=value
                    setInputChildren(copy)   
                }} /></View> )}

                <Text style={{fontSize:32}} onPress={()=>{
                    setInputChildren([...inputChildren, ''])   
                }}>+</Text>

                </View>
               

                <View>
               
                </View>
                
            </View>
        </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    dish:{
        fontSize:18
    }
})