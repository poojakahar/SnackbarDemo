import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";

const Navigation=StackNavigator({
    FirstPage: {screen: FirstPage},
    SecondPage: {screen: SecondPage}
})

export default Navigation;