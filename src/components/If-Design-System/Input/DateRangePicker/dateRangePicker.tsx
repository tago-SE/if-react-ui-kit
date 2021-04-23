import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { Calendar } from './Calendar/calendar';
import { TimePicker, ITime } from '../TimePicker/timePicker';
import React from 'react';
import { CustomButton } from './Button/CustomButton';
import { Icon } from '../../Icon';
import './date-range-picker.scss';
import useOutsideClick from '../../../../Hooks/useOutsideClick';

const primaryColor = "#0054f0";
const secondaryColor = "#faf9f7";

enum ShownContent {
    DatePicker,
    TimePicker,
}

interface IDateOrTimePickerToggleProps {
    value: ShownContent,
    onClick: (nextContent: ShownContent) => void,
}


function DateOrTimePickerToggle({
    value,
    onClick,
} : IDateOrTimePickerToggleProps) {
    const primaryStyle = {
        width: "120px", height: "36px", 
        backgroundColor: primaryColor,
        borderColor: primaryColor,
        color: secondaryColor,
        margin: "0.2rem",
        fontSize: "14px",
    };
    const secondaryStyle = {
        width: "120px", height: "36px", 
        backgroundColor: secondaryColor,
        borderColor: undefined,
        color: primaryColor,
        margin: "0.2rem",
        fontSize: "14px",
    };

    const datePickerButtonStyle = value === ShownContent.DatePicker ? primaryStyle : secondaryStyle;
    const datePickerIconColor = value === ShownContent.DatePicker ? "white" : "blue";
    const timePickerButtonStyle = value === ShownContent.TimePicker ? primaryStyle : secondaryStyle;
    const timePickerIconColor = value === ShownContent.TimePicker ? "white" : "blue";
    return (
        <div className="dateRangeToggleButtons">
            <CustomButton 
                variant="primary"
                onClick={() => onClick(ShownContent.DatePicker)}  
                style={datePickerButtonStyle}
            >
                <Icon size="small" identifier="ui date" color={datePickerIconColor} style={{ marginRight: "10px" }} />
                Date
            </CustomButton>
            <CustomButton 
                variant="primary"
                onClick={() => onClick(ShownContent.TimePicker)}   
                style={timePickerButtonStyle}
            >
                <Icon size="small" identifier="ui clock" color={timePickerIconColor} style={{ marginRight: "10px" }} />
                Time
            </CustomButton>
        </div>
    );
}

interface IDateRangePickerProps {
    startOpen?: boolean,

}

interface IDateInputFieldProps { 
    startDate: Date,
    onChange: (date: Date) => void,
}

// export class DateInputField extends React.Component<IDateInputFieldProps> {

//     state = {
//         ref: null,
//     }

//     constructor(props) {
//         super(props);
//     }
    
//     componentDidMount() {
//         // this.oldRef.current = this.ref.current

//         // setTimeout(() => {
//         //     console.log('new ref value:', this.ref.current.value);
//         // }, 10000);

//     }

//     // componentDidUpdate(oldProps) {
//     //     const refChanged = this.oldRef.current !== this.ref.current
    
//     //     if (refChanged) {
//     //       console.log('new ref value:', this.ref.current)
    
//     //       this.oldRef.current = this.ref.current
//     //     }
//     // }

//     onRefChange = (node: any) => {
//         console.log("ref changed!", node.target);
      
//     }
      
//     render() {
//         return (
//             <div className="customDateInput">
//                 <input 
//                     // placeholder="YYYY-MM-DD"
//                     ref={(node) => this.onRefChange(node)}
//                     type="datetime-local"    
//                     max="9999-12-31"
//                     onChange={(e) => {
//                         console.log("CHANGE", e);
//                     }}
//                     onBlur={(e) => {
//                         const isValidDate = (d: Date) => { return d instanceof Date && !isNaN(d.getTime());}
//                         e.preventDefault();
//                         const d = this.state?.ref.current.value;
//                         if (d) {
//                             const newDate = new Date(d);
//                             if (isValidDate(newDate)) {
//                                 this.props.onChange(newDate);
//                             }
//                         }
//                     }}
//                 />
//             </div>
//         );
//     }
// }

const isValidDate = (d: Date) => { 
    return d instanceof Date && !isNaN(d.getTime());
}

export function DateInputField({ startDate, onChange } : { startDate: Date, onChange: (date: Date | null) => void }) {

    const ref = React.useRef(null);
    

    // React.useEffect(() => {
    //     if (startDate) {
    //         ref.current.value = format(startDate, "yyyy-MM-dd'T'HH:mm");
    //     } 
    // }, [startDate]);

    React.useLayoutEffect(() => {
        console.log("REF", ref);
    }, [ref?.current?.value]);
    return (<>
        {/* <div className="customDateInput">
            <input 
                placeholder="YYYY-MM-DD"
                ref={ref}
                type="datetime-local"    
                min="2021-01-22"
                max="2021-04-22" 
                onInput={(e) => {
                    console.log("INPUT",)
                }}
                onChange={(e) => {
                    if (!e.target.value) {
                        console.log("NO INPUT");
                        return;
                    }
                    const date = new Date(e.target.value);
                    if (!date) {
                        console.log("NULL DATE", date);
                        return; 
                    }
                    if (!isValidDate(date)) {
                        console.log("INVALID DATE", date);
                        ref.current.value = "";
                        return;   
                    }
                    if (date.getFullYear() < 2021) {
                        console.log("CLEARED BAD DATE");
                        ref.current.value = "";
                        return;
                    }
                    console.log("VALID DATE", date);
                }}
                onBlur={(e) => {
                    // const isValidDate = (d: Date) => { return d instanceof Date && !isNaN(d.getTime());}
                    // e.preventDefault();
                    // const d = ref.current.value;
                    // if (d) {
                    //     const newDate = new Date(d);
                    //     if (isValidDate(newDate)) {
                    //         onChange(newDate);
                    //     }
                    // }
                }}
            />
        </div> */}
        <div className="customDateInput">
            <input 
                placeholder="YYYY-MM-DD"
                ref={ref}
                type="date"    
                min="2021-01-22"
                max="2021-04-22"    
                onChange={(e) => {
                    // if (!e.target.value) {
                    //     console.log("NO INPUT");
                    //     return;
                    // }
                    // const date = new Date(e.target.value);
                    // if (!date) {
                    //     console.log("NULL DATE", date);
                    //     return; 
                    // }
                    // if (!isValidDate(date)) {
                    //     console.log("INVALID DATE", date);
                    //     ref.current.value = "";
                    //     return;   
                    // }
                    // if (date.getFullYear() < 2021) {
                    //     console.log("CLEARED BAD DATE");
                    //     ref.current.value = "";
                    //     return;
                    // }
                    // console.log("VALID DATE", date);  
                }}
                onBlur={(e) => {
                    if (!e.target.value) {
                        console.log("NO INPUT");
                        return;
                    }
                    const date = new Date(e.target.value);
                    if (!date) {
                        console.log("NULL DATE", date);
                        return; 
                    }
                    if (!isValidDate(date)) {
                        console.log("INVALID DATE", date);
                        ref.current.value = "";
                        return;   
                    }
                    if (date.getFullYear() < 2021) {
                        console.log("CLEARED BAD DATE");
                        ref.current.value = "";
                        return;
                    }
                    console.log("VALID DATE", date);
                }}
            />
        </div>
        <div className="customDateInput">
            <input 
                placeholder="YYYY-MM-DD"
                ref={ref}
                type="time"    
                max="9999-12-31"
                onInput={(e) => {
                    console.log("INPUT", e)
                }}
                onChange={(e) => {
                    console.log("CHANGE", e.target.value);
                }}
                onBlur={(e) => {
                    // const isValidDate = (d: Date) => { return d instanceof Date && !isNaN(d.getTime());}
                    // e.preventDefault();
                    // const d = ref.current.value;
                    // if (d) {
                    //     const newDate = new Date(d);
                    //     if (isValidDate(newDate)) {
                    //         onChange(newDate);
                    //     }
                    // }
                }}
            />
        </div>
        </>
    );
} 

export function DateRangePicker({ 
    startOpen = false,
} : IDateRangePickerProps) {

    const ref = React.useRef(null);
    const [myDate, setDate] = React.useState(new Date());
    const [state, setState] = React.useState({
        currentContent: ShownContent.TimePicker,
        open: startOpen,
        selectedStart: new Date(2021, 5, 6),
        selectedEnd: new Date(2021, 5, 21),
        
    });

    const showDatePicker = state.currentContent === ShownContent.DatePicker;
    const showTimePicker = state.currentContent === ShownContent.TimePicker;

    useOutsideClick(ref, () => {
        if (!state.open) return;
        setState(state => ({ ...state, open: false }))
    });

    const handleDateOrTimeToggle = (nextContent: ShownContent) => {
        setState({ ...state, currentContent: nextContent });
    };

    const handleStartTimeChange = (time: ITime) => {
        const newDate = new Date(state.selectedStart);
        newDate.setHours(time.hours);
        newDate.setMinutes(time.minutes);
        setState(state => ({ ...state, selectedStart: newDate }));
    };

    const handleEndTimeChange = (time: ITime) => {
        const newDate = new Date(state.selectedStart);
        newDate.setHours(time.hours);
        newDate.setMinutes(time.minutes);
        setState(state => ({ ...state, selectedEnd: newDate }));
    }

    const handleStartDateSelection = (date: Date) => {
        const prevDate = state.selectedStart;
        date.setHours(prevDate.getHours());
        date.setMinutes(prevDate.getMinutes());
        setState((state, ) => ({ ...state, selectedStart: date }));
    }

    const handleEndDateSelection = (date: Date) => {
        const prevDate = state.selectedEnd;
        date.setHours(prevDate.getHours());
        date.setMinutes(prevDate.getMinutes());
        setState(state => ({ ...state, selectedEnd: date }));
    };

    const formatDate = (date: Date) => {
        return format(date, "dd/MM/yyyy hh:mm a")
    }

    // const StartDate = () => {
    //     // const formatedDate = format(myDate, "yyyy-MM-dd").toString();
    //     // console.log("XX", formatedDate);
    //     return (
    //         // <DateInputField
    //         //     onChange={(date) => {
    //         //         setState({ selectedStart: date})
    //         //     }}
    //         //     startDate={state.selectedStart}
    //         // />
    //         // <input type="date" id="start" name="trip-start"
    //         //     // value="2018-22-07"
    //         //     value={formatedDate}
    //         //     // value={format(myDate, "MM-dd-yyyy").toString()}
    //         //     // min="2018-01-01" max="2021-30-12"
    //         //     onBlur={(e) => {
    //         //         e.preventDefault();
    //         //         const newDate = e.target.valueAsDate;
    //         //         if (!newDate) {
    //         //             console.log("NULL");
    //         //         } else {
    //         //             console.log("The Date", newDate);
    //         //             setDate(e.target.valueAsDate);
    //         //         }
    //         //     }}
    //         //     onChange={(e) => {
    //         //         // e.preventDefault();
    //         //         // const newDate = e.target.valueAsDate;
    //         //         // if (!newDate) {
    //         //         //     console.log("NULL");
    //         //         // } else {
    //         //         //     console.log("The Date", newDate);
    //         //         //     setDate(e.target.valueAsDate);
    //         //         // }
    //         //        // console.log("Changed", e.target.value);
    //         //         //setDate(e.target.valueAsDate);

    //         //         // console.log("e", e.target.value);
    //         //         // const date = e.target.valueAsDate;
    //         //         // const m = date.getMonth();
    //         //         // const d = date.getDay();
    //         //         // const y = date.getFullYear();
    //         //         // console.log("Changed", d, m, y);
    //         //     }}
    //         //     ></input>
    //         // <input 
    //         // type="date" 
    //         // name="meeting-time" 
    //         // value="2020-01-01Z19:30"
    //         // // min="2020-01-01Z00:00" 
    //         // // max="2021-05-01Z00:00"
    //         // className="date__dateRangePicker" 
    //         // // value={formatDate(state.selectedStart)} />
    //         // />
    //     );
    // };
    // const EndDate = () => {
    //     return (
    //         <DateInputField onChange={undefined} startDate={new Date()} />
    //         // <span className="date__dateRangePicker" style={{ marginRight: "42px"}}>
    //         //     {formatDate(state.selectedEnd)}
    //         // </span>
    //     );
    // }

    

    return (<>
        <div 
            className="header__dateRangePicker"
        >
            <CustomButton
                variant="tertiary" 
                style={{ 
                    color: "white",
                    width: "32px", height: "32px", 
                    fontSize: "14px",
                    marginRight: "10px",
                    marginBottom: "0px"
                }}
                onClick={() => {
                    setState({ ...state, open: state.open ? false : true });
                }}
            >
                <Icon size="small" identifier="ui date" color="blue" style={{ marginRight: "0px" }} /> 
            </CustomButton>
            {/* <div className="customDateInput">
            <input 
                ref={ref}
                type="datetime-local"    
                onChange={(e) => {
                    e.preventDefault();
                    
                }}
                defaultValue={state.selectedStart ? format(state.selectedStart, "")}
            />
        </div> */}
             <DateInputField
                onChange={(date) => {
                    console.log("DATE", date);
                    setState({...state, selectedStart: date });
                }}
                startDate={state.selectedStart}
            /> 
            <Icon
                identifier="ui arrow-right" 
                color="blue"
                size="small" 
                style={{ marginLeft: "2px", marginRight: "2px" }}
            />
           
        </div>
        <p>
            {state.selectedStart?.toString()}
        </p>
        {state.open ? (<div className="dateTimeRangePickerContainer" ref={ref}>
            <div className="dateTimeRangePickerItem">
                <div className="dateTimeRangePickerContent">
                    <DateOrTimePickerToggle value={state.currentContent} onClick={handleDateOrTimeToggle} />
                    {showDatePicker && <Calendar 
                        selected={state.selectedStart} 
                        minDate={new Date(2021, 4, 1)}
                        startDate={state.selectedStart}
                        endDate={state.selectedEnd}
                        maxDate={state.selectedEnd}
                        events={{
                            onDateSelection: handleStartDateSelection,
                        }}
                    />}
                    {showTimePicker && <TimePicker id="date-time__start"  
                        hours={state.selectedStart.getHours()}
                        minutes={state.selectedStart.getMinutes()}
                        onTimeChange={handleStartTimeChange} 
                    />}
                </div>
            </div>
            <div className="dateTimeRangePickerItem">
                <div className="dateTimeRangePickerContent">
                    <DateOrTimePickerToggle value={state.currentContent} onClick={handleDateOrTimeToggle} />
                    {showDatePicker && <Calendar 
                        selected={state.selectedEnd} 
                        minDate={state.selectedStart}
                        startDate={state.selectedStart}
                        endDate={state.selectedEnd}
                        maxDate={new Date(2021, 9, 1)}
                        reverse
                        events={{
                            onDateSelection: handleEndDateSelection, 
                        }}
                        
                    />} 
                    {showTimePicker && <TimePicker id="date-time__start"  
                        hours={state.selectedEnd.getHours()}
                        minutes={state.selectedEnd.getMinutes()}
                        onTimeChange={handleEndTimeChange} 
                    />}
                </div>
            </div> 
        </div>) : null }
    </>);
}