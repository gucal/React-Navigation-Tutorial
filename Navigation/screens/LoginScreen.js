import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Button  style = {styles.button} title = "Go To Home Screen" 
                onPress={() => this.props.navigation.navigate('Home')}/>
                    
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'

    }
})


export default LoginScreen;
