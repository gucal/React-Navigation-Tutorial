import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class LoginScreen extends Component {

    static navigationOptions = { 
        header: null
    }

    render() {
        return (
            <View>
                <Button title = "Go To Home Screen" 
                onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}

export default LoginScreen;
