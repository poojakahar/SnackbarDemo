import React,{Component} from 'react';
import {View,Text,ActionSheetIOS,Alert,Picker,TouchableOpacity} from 'react-native';

class PickerEx extends Component
{
    constructor(props) {
        super(props);
        this.state={
            language:''
        }
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label=".NET" value="net" />
                    <Picker.Item label="React Native" value="rn" />
                    <Picker.Item label="PHP" value="php" />
                    <Picker.Item label="C" value="c" />
                    <Picker.Item label="C++" value="cpp" />
                    <Picker.Item label="Objective C" value="oc" />
                </Picker>

                <TouchableOpacity onPress={()=> alert(this.state.language)}>
                    <Text>Get Value</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PickerEx;