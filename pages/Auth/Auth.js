import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import MyButton from '../../components/MyButton/MyButton';
export default function Auth(){
    return(
    <View style={styles.container}>
        <Text style={styles.header}>Авторизация</Text>
        <TextInput style={styles.input} placeholder='email'></TextInput>
        <TextInput style={styles.input} placeholder='пароль'></TextInput>
        <MyButton color={'blue'} size={'m'} text={'Войти'}></MyButton>
        <MyButton color={'blue'} size={'m'} text={'Регистрация'}></MyButton>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderColor:'#ccc',
    //   borderWidth:1,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      width:'80%',
      marginTop:120
     
    },
    input:{
        paddingLeft:5,
        marginBottom:12,
        borderColor:'lightblue',
        borderBottomWidth:1,
        borderRadius:4,
        height:35
    },
    header:{
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
        fontWeight:'500'
    },
    
  });