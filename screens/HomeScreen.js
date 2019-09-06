import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Button title= "Go To Login Screen" 
                onPress ={ () => this.props.navigation.goBack()} 
                />
            </View>
        )
    }
}
export default HomeScreen;
