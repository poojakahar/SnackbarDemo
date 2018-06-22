import React,{Component} from 'react';
import {View,Text,ActionSheetIOS,Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'

class DatePickerEx extends Component
{
    constructor(props){
        super(props)
        this.state = {date:"2016-05-15 01:00 AM"}
    }

    render() {
        return (
            <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="datetime"
                placeholder="select date"
                format="YYYY-MM-DD hh:mm a"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                    debugger
                    this.setState({date: date})
                }}
            />
        )
    }
}

export default DatePickerEx;
