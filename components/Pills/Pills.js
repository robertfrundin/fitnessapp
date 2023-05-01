import { View,Text, ScrollView, StyleSheet, TextInput } from "react-native";
import PageTitle from "../PageTitle/PageTitle";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import storage from '../../utils/storage';
import { useEffect, useState } from "react";
export default function Pills(){

    const getData=async ()=>storage.getItem('data').then((x)=>setList(JSON.parse(x).pills)).catch((err)=>alert(err))
    const [list,setList]=useState([
        {name:'Витамин D3', done:true},
        {name:'Витамин Е', done:false},
        {name:'Корвалол', done:true}
      ],list)

    const [inputValue,setInputValue]=useState('')
    
    return (
        <View style={{width:'100%',height:'93%'}}>
            <PageTitle title={'Лекарства и БАД'}></PageTitle>

            <View style={{marginVertical:'3%'}}>
                <Text style={{textAlign:"center", fontWeight:'600', fontSize:24, marginBottom:'3%'}}>О разделе</Text>
                <Text style={{marginLeft:'5%', fontSize:18}}>Здесь вы можете добавить список препаратов прием которых вы хотите отслеживать</Text>
            </View>
        <ScrollView style={{backgroundColor:'#fff',paddingHorizontal:'3%', height:200}}>
            {list.map((el,idx)=> <View key={idx} style={{padding:'5%',marginTop:'3%', backgroundColor:"#fff", borderBottomWidth:1, borderRadius:5, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:22}}>{el.name}</Text>
                <MaterialCommunityIcons onPress={()=>{
                    const newList=[...list]
                    newList[idx].done=!newList[idx].done
                    setList(newList)
                }} name='checkbox-outline' size={34} color={el.done?"#5c9ce6":'#ccc'} />
            </View>)}
            <View style={{padding:'5%',marginVertical:'3%', backgroundColor:"#fff", borderWidth:1, borderRadius:5, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <TextInput style={{fontSize:22, textTransform:'capitalize'}} defaultValue={inputValue} onChangeText={(x)=>setInputValue(x)} placeholder="Введите название"></TextInput>
                <MaterialCommunityIcons onPress={()=>{
                    
                    if(inputValue.length>1){
                        const newList=[...list]
                        newList.push({name:inputValue, done:false})
                        setList(newList)
                        setInputValue('')

                    }
                }}  name='plus' size={40} color="#5c9ce6" />
                <View>
               
                </View>
                
            </View>
        </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    dish:{fontSize:18}
})