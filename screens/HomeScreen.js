import React, { Component } from 'react'
import { Text, View,StyleSheet, Button } from 'react-native'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title= "Go To Login Screen" 
                onPress ={ () => this.props.navigation.goBack()} 
                />
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
export default HomeScreen;
