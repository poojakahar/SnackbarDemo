import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
//import SnackBar from 'react-native-snackbar-dialog'

export default class SnackBarDemo extends Component
{
    show() {
        //SnackBar.show('Making the world happier', { isStatic: true })
        alert("Hello")
    }

    render() {
        return(
            <View style={{top:100}}>
                <TouchableOpacity onPress={()=>this.show()}>
                    <Text> Open Snackbar </Text>
                </TouchableOpacity>
            </View>
        )
    }
}