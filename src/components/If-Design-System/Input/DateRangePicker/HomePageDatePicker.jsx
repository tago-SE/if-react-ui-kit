import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


var SelectedStartDate = moment('2017-05-05');
var SelectedEndDate = moment('2017-05-09');


export class HomePageDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: SelectedStartDate,
            endDate:SelectedEndDate
        };
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {

        this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    render() {
        const { focusedInput, startDate, endDate } = this.state;
        return (
            <div>
                <DateRangePicker
                    {...this.props}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={focusedInput}
                    // Here is the change:
                    date={startDate}
                    startDate={startDate}
                    endDate={endDate}                                     
                    startDateId="datepicker_start"
                    endDateId="datepicker_end"                    
                    startDatePlaceholderText="Check In"
                    endDatePlaceholderText="Check Out"
                />
            </div>
        );
    }
}