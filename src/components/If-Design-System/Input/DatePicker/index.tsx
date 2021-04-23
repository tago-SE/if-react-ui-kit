import {default as ReactDatePicker, ReactDatePickerProps } from 'react-datepicker';
// import './react-date-picker.scss';
//
// This is the default style that you may use with the date-picker, in case you wish to revert back to default. 
// import 'react-datepicker/dist/react-datepicker.css';
//

/**
 * Wrapper for react-datepicker.
 * 
 * See documentation for implementation: https://reactdatepicker.com/
 */
export function DatePicker ({ ...props }: ReactDatePickerProps) {
    return (

        <ReactDatePicker 
            className="if input-field date"
            {...props}
        />
       
    )
}

