import {default as ReactDatePicker, ReactDatePickerProps, CalendarContainer } from 'react-datepicker';
// import './react-date-picker.scss';
import './my-date-picker.scss';
import Datetime from 'react-datetime';
import { InputWrapper } from '../inputWrapper';
import { Label } from '../index';
//
import { DatePicker } from '../DatePicker';
import "react-datetime/css/react-datetime.css";
import { HomePageDatePicker } from './HomePageDatePicker';
//
import { 
  DateRangePicker as ReactDatesRangePicker, 
  DateRangePickerWrapper,
  SingleDatePicker, DayPickerRangeController 
} from 'react-dates';

import { TimePicker } from '../TimePicker/timePicker';
// import 'react-dates/lib/css/_datepicker.css';
//
import { DateRangePicker as DemoDateRangePicker } from './dateRangePicker';
// This is the default style that you may use with the date-picker, in case you wish to revert back to default. 
import 'react-datepicker/dist/react-datepicker.css';
//
// import Demo from './demo';
import React from 'react';
import { CustomButton } from './Button/CustomButton';

import { Slider, SliderWrapper } from '../Slider';
import { Icon } from '../../Icon';

export function DateRangePicker() {



    const selectedMin = new Date();
    const [startDate, setStartDate] = React.useState(new Date("2021/04/09"));
    const [endDate, setEndDate] = React.useState(new Date("2021/04/15"));
    const minDate = new Date("2021/03/01");
    // const maxDate = new Date("2021/07/12");
    const maxDate = endDate;
    const [state, setState] = React.useState({
        timeToggle: false,
        startDate: startDate,
        endDate: endDate,
        focusedInput: undefined,
        open: false
    })
    const onChange = dates => {
        console.log("ON CHANGE:", dates);
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const ExampleCustomTimeInput = ({ date, value, onChange } : any) => (
        <input
          type="time"
          className="if input-field"
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{ 
            // border: "solid 1px pink", 
            width: "160px"}}
        />
    );

    const Input = ({onChange, placeholder, value, isSecure, id, onClick} : any) => (
        <input
            className="example-custom-input"
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            id={id}
            onClick={onClick}
            style={{ backgroundColor: "red" }}
        />
    );

    // const ExampleCustomInput = React.forwardRef(
    //     ({ value, onClick }, ref) => (
    //         <button className="example-custom-input" onClick={onClick} ref={ref}>
    //         {value}
    //         </button>
    //     ),
    // );

    const MyContainer = ({ className, children }) => {
      // return <div>{children}</div>;
        return (
          <div 
            className="myContainer"
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
                <button className="if primary button small">Date</button>
                <button className="if secondary button small">Time</button>
            </div>
            
            <CalendarContainer className={className}>
              {/* <div style={{ background: "#f0f0f0" }}>
                What is your favorite day?
              </div> */}
              {children}
              {/* <div style={{ position: "relative" }}>{children}</div> */}
            </CalendarContainer>
          </div>
        );
      };


    return (
        <>

        {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onCalendarOpen={() => {
              console.log("datepicker:open")
            }}
            onCalendarClose={() => {
              console.log("datepicker:closed")
            }}
          />
          <input type="time" className="if input clock" 
            onClick={() => console.log("CLOCK:OPEN")}
          />
          <Icon className="if icon ui arrow-right blue" 
              style={{ 
                width: "16px", 
                height: "16px",
                marginLeft: "6px",
              }} 
            />
          {/* <input type="date" className="if input" 
            onChange={() => console.log("date:changed")}
            onClick={() => setState({...state,  open: true })}
            onSelect={(e) => { e.preventDefault(); console.log("date:select")}}
            onBlur={() => setState({...state,  open: false })}
          />
          <input type="time" className="if input clock" /> */}
          {/* <CustomButton
            variant="primary" 
            style={{ 
              backgroundColor: "blue", 
              borderColor: "blue",
              color: "white",
              width: "48px", height: "48px", 
              fontSize: "14px",
              marginRight: "0px",
              }}
              onClick={() => {
                setState((prevState) => ({...prevState,  open: prevState.open ? false : true }))
              }}  
            >
            <Icon size="small" identifier="ui date" color="white" style={{ marginRight: "0px" }} 
            />
            
          </CustomButton>
        </div> */} 


        <DemoDateRangePicker startOpen={true} />

        <p>---</p>
        {/* <HomePageDatePicker /> */}
        {/* <ReactDatesRangePicker
          startDate={state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ ...state, startDate: startDate, endDate: endDate })} // PropTypes.func.isRequired,
          focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ ...state, focusedInput: focusedInput })} // PropTypes.func.isRequired,
        /> */}
        {/* <Demo /> */}

      <p>Time Picker</p>

      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
    

    
    <div style={{ display: "flex", flexDirection: "row" }}>
      <CustomButton
        variant="primary" 
        style={{ 
          backgroundColor: "red", 
          borderColor: "red",
          color: "white",
          width: "120px", height: "48px", 
          fontSize: "14px",
          marginRight: "0px",
          }}
        >
        <Icon size="small" identifier="ui date" color="white" style={{ marginRight: "10px" }} />
        Date
      </CustomButton>
      <CustomButton 
        variant="primary" 
        style={{
          width: "120px", height: "48px", 
          marginRight: "0px", 
          color: "blue",
          backgroundColor: "white", 
          borderColor: "white",
          fontSize: "14px",
        }}
      
        >
        <Icon size="small" identifier="ui clock" color="blue" style={{ marginRight: "10px" }} />
        Time
      </CustomButton>
    </div>
    <ReactDatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      customTimeInput={<ExampleCustomTimeInput />}  
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
    </>
    );
}