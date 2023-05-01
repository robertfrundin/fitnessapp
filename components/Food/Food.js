import { View,Text, ScrollView, StyleSheet, TextInput, Button} from "react-native";
import NumericInput from 'react-native-numeric-input'
import PageTitle from "../PageTitle/PageTitle";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
export default function Food(){
    const [inputValue,setInputValue]=useState('')
    const [inputChildren,setInputChildren]=useState([{}])
    const [list,setList]=useState([
        {title:'Завтрак', items:[{dish:'Хлеб', cal:80}, {dish:'Сыр', cal:240}]},
        
      ],list)
    return (
        <View style={{width:'100%',height:'93%'}}>
            <PageTitle title={'Питание'}></PageTitle>
            <View style={{marginVertical:'3%'}}>
                <Text style={{textAlign:"center", fontWeight:'600', fontSize:24, marginBottom:'3%'}}>О разделе</Text>
                <Text style={{marginHorizontal:'5%', fontSize:18}}>Здесь вы можете отслеживать приемы пищи и общий калораж за день.</Text>
            </View>
        <ScrollView style={{backgroundColor:'#fff',paddingHorizontal:'3%'}}>


            {
                list.map((x,idx)=> <View key={idx} style={{padding:'5%',marginTop:'5%', borderRadius:1, shadowColor: '#171717',
                shadowOffset: {width: -1, height: 4},
                shadowOpacity: 1,
                shadowRadius: 12,
                elevation: 2,
                shadowColor: '#171717',
                }}>
                <View style={{flex:1, flexDirection:'row', justifyContent:"space-between", borderBottomColor:'#ccc', borderBottomWidth:1, padding:'3%'}}>
                <Text style={{fontSize:22}}>{x.title}</Text>
                <MaterialCommunityIcons name='magnify-expand' size={34} color="#000" />
                </View>
                <View style={{fontSize:24, padding:'2%'}}>
                    {
                        x.items.map((y)=><Text style={styles.dish}>{y.dish} <Text style={{color:'red'}}>{y.cal} ккал.</Text> </Text>)
                    }
                </View>
                
            </View>)
            }
           
           
           <View style={{padding:'5%',marginVertical:'3%', shadowColor: '#171717',
                borderRadius:1,
                shadowOffset: {width: -1, height: 4},
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 2,
                shadowColor: '#171717', }}>
            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TextInput style={{fontSize:22, textTransform:'capitalize'}} defaultValue={inputValue} onChangeText={(x)=>setInputValue(x)} placeholder="Введите название"></TextInput>
                <MaterialCommunityIcons onPress={()=>{
                    
                    if(inputValue.length>1){
                        const newList=[...list]
                        newList.push({title:inputValue,items:inputChildren })
                        setInputValue('')
                        setInputChildren([])
                        setList(newList)

                    }
                }}  name='plus' size={40} color="#5c9ce6" />
            </View>
                
                <View style={{paddingVertical:'1%', paddingHorizontal:'10%'}}>
                
                {inputChildren.map((x,idx)=><View><TextInput defaultValue={x} onChangeText={(changedValue)=>{
                   
                    const copy = [...inputChildren]
                    copy[idx].dish=changedValue
                    setInputChildren(copy)
                       
                }} style={{textTransform:'capitalize'}} key={idx} placeholder="Блюдо"></TextInput>
                
                <NumericInput type="up-down" onChange={(v)=>alert(v)}></NumericInput>

                </View>)}

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
    dish:{fontSize:18}
})