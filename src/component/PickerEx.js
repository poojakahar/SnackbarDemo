import React,{Component} from 'react';
import {View,Text,ActionSheetIOS,Alert,Picker,TouchableOpacity,Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

let { height , width } = Dimensions.get("window")

export default class PickerEx extends Component
{
    constructor(props) {
        super(props);
        this.state={
          month:'',
          year: '',
          visible: false,
        }
    }

    openCloseModal() {
      this.setState({visible: !this.state.visible})
    }

    renderDatePicker() {
      let month = [ "January" , "Fabruary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "November" , "December" ];
      let year = [];

      let currYear = moment().format("YYYY");
      for(let i=0;i<50;i++) {
        year.push(moment(currYear).add(i,"year").format("YYYY"));
      }

      let dispMonth = month.map((value,key)=> <Picker.Item label={value} value={key} />)
      let dispYear = year.map((value,key)=> <Picker.Item label={value} value={value} />)

      return(
        <View style={style.container}>
          <View style={style.modalButtonContainer}>
            <TouchableOpacity onPress={()=> this.openCloseModal()}>
              <Text style={[style.buttonText , {color: '#7c7c7c'}]}>Cancle</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.openCloseModal()}>
              <Text style={[style.buttonText ,{color: '#0ff'}]}>Confirm</Text>
            </TouchableOpacity>
          </View>
          <View style={style.horizontalLine}/>
          <View style={style.pickerContainer}>
            <Picker
              selectedValue={this.state.month}
              style={style.pickerStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({month: itemIndex})}
            >
              {dispMonth}
            </Picker>

            <Picker
              selectedValue={this.state.year}
              style={style.pickerStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({year: itemValue})}>
              {dispYear}
            </Picker>
          </View>
        </View>
      )
    }

    render() {
      return (
        <View style={style.container}>
          <TouchableOpacity onPress={()=> this.openCloseModal()}>
            <Text>Get Value</Text>
          </TouchableOpacity>

            <Modal
              isVisible={this.state.visible}
              style={style.modalMain}
              transparent={true}
              backdropColor={'#000'}
              backdropOpacity={0.3}
              onBackdropPress={()=>this.openCloseModal()}
            >
              {this.renderDatePicker()}
            </Modal>
        </View>
      )
    }
}

const style={
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalMain: {
    backgroundColor: 'transparent',
    top: height/667 * 210,
    width: '100%',
    margin: 0,
    padding: 0,
    height: 650,
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical:10,
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500'
  },
  horizontalLine: {
    height:1,
    backgroundColor:'#7c7c7c'
  },
  pickerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 0.37,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20
  },
  pickerStyle: {
    height: 60,
    width: '50%'
  }
}