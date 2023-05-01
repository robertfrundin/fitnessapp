import { Text,View, StyleSheet } from "react-native"
export default function MyButton({text, size, color}){
    let width
    let height
    if(size==='m'){
        width=200
        height=35
    }
    else{
        width=100
    }
    
     return (
    <View style={[styles.wrap, styles[color],{width:'100%', height:50} ]}>
        <Text style={styles.text}>{text}</Text>
    </View>) 
    
    
    }

const styles=StyleSheet.create({
    wrap:{
        justifyContent:'center',
        borderRadius:5,
        marginBottom:10,
    },
    text:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        fontWeight:'500',
    }
    ,
    blue:{
        backgroundColor: '#65B2FF',

    }
})
