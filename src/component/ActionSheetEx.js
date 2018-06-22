import React,{Component} from 'react';
import {View,Text,ActionSheetIOS,Alert} from 'react-native';

class ActionSheetEx extends Component
{
    onClick() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: ['Cancel', 'Remove'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if (buttonIndex === 1) {
                    alert("Remove Action")
                }
                else if(buttonIndex === 0) {
                    alert("Cancel Action")
                }
            });
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text onPress={()=>this.onClick()}>
                    Show Action Sheet
                </Text>
            </View>
        )
    }
}

export default ActionSheetEx;

/*
ActionSheetIOS.showActionSheetWithOptions({
        options: ['Cancel', 'Remove'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
    },
    (buttonIndex) => {
        if (buttonIndex === 1) { /!* destructive action *!/ }
    });*/