import React, {Component} from "react";
import "react-dates/initialize"
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
class DataPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }
    alertStartDate=()=>{
        alert(this.state.startDate)
    }
    alertEndDate=()=>{
        alert(this.state.endDate)
    }
    render() {
        return (
            <div style={{
                width:"100%",
                display: "flex",
                alignItems:"center"

            }} className="Data-picker">
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({startDate, endDate}) => this.setState({startDate, endDate})}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({focusedInput})}
                />



            </div>
        );
    }
}


export default DataPicker;