import React,{Component} from 'react';
import {View,Text} from 'react-native';
//import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";

//let tracker = new GoogleAnalyticsTracker("UA-118970011-1");

class FirstPage extends Component
{
    componentWillMount() {
        //tracker.trackScreenView("First Page");
    }

    render(){
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate("SecondPage")}>
                    First Page
                </Text>
            </View>
        )
    }
}

export default FirstPage;