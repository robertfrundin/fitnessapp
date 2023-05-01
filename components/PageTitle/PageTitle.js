import {StyleSheet,Text, View } from "react-native";

export default function PageTitle({title}){

    return (
        <View style={styles.container}><Text style={styles.text}>{title}</Text></View>
    )

}

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'#ccc',
        height:'7%',
        // paddingTop:'5%',
        
        justifyContent:'center'
    },
    text:{
        color:'#5c9ce6',
        fontSize:28,
        fontWeight:'500',
        paddingLeft:'12%'

    }

})