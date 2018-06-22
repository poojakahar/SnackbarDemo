import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Router,Stack,Scene} from 'react-native-router-flux';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

export default class routerFluxEx extends Component
{
    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={FirstPage} title="First Page"/>
                    <Scene key="register" component={SecondPage} title="Second Page"/>
                </Stack>
            </Router>
        )
    }
}