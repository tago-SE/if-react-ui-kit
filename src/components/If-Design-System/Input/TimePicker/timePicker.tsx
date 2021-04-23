import React from 'react';
import { CustomButton } from '../DateRangePicker/Button/CustomButton';
import { SliderWrapper, Slider, SlideLabel, SlideContainer, ISliderProps } from '../Slider';
import './time-picker.scss';

export interface ITime {
    hours: number, 
    minutes: number,
}

interface ITimePickerProps {
    id?: string | number,
    hourStep?: number,
    minStep?: number,
    hours: number, 
    minutes: number,
    onTimeChange?: (time: ITime) => void,
    [x: string]: any,
}

/**
 * Allows the user to pick a time of day based on 12-hours clock format, with sliders for selecting hours and minutes. 
 * @param id
 * @param hourStep slider steps per tick, defaults to 1.
 * @param minStep slider steps per tick, defaults to 1. 
 * @param onTimeChange callback for when the time selection changes
 */
export function TimePicker({
    id,
    hourStep = 1,
    minStep = 1,
    hours = 0,
    minutes = 0,
    onTimeChange = undefined,
    ...props
  } : ITimePickerProps) {

    const [state, setState] = React.useState({ 
        hours: hours,
        minutes: minutes,
    });

    const isAm = state.hours === 24 || state.hours / 12 < 1;
    const elapsedMinutes = (state.hours*60 + state.minutes) % 1440;

    const setTime = (hours: number, minutes: number) => {
        setState(state => ({ ...state, hours: hours, minutes: minutes }));
        if (onTimeChange) onTimeChange({ hours: hours, minutes: minutes });
    }

    const onHourChange = (hours: number) => {
        setTime(hours, state.minutes);
    };

    const onMinuteChange = (minutes: number) => {
        setTime(state.hours, minutes);
    };

    const timeOfDay = () => {
        return isAm ? "am" : "pm";
    };

    const onToggleTimeOfDay = () => {
        if (isAm) {
            setTime(state.hours + 12, state.minutes);
        } else {
            setTime(state.hours - 12, state.minutes);
        }
    };
    
    const onHoursButtonClick = () => {
        setTime((state.hours + hourStep) % 24, state.minutes);
    };

    const onMinutesButtonClick = () => {
        setTime(
            state.minutes === 59 ? (state.hours + hourStep) % 24 : state.hours,
            ((state.minutes + minStep) % 60)
        );
    };

    const hoursText = () => {
        const hh = Math.floor(elapsedMinutes/60) % 12;
        if (hh === 0) return "12".padStart(2, "0");
        return (hh).toString().padStart(2, "0");
    };

    const minutesText = () => {
        return (state.minutes).toString().padStart(2, "0");
    };

    return (<>
        <div className="timePickerContainer" {...props}>
            <div className="timePickerButtons">
                <CustomButton 
                    variant="primary" 
                    onClick={onHoursButtonClick}  
                    style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#0054f0",
                        color: "#faf9f7",
                        margin: "0.2rem",
                    }}>
                        {hoursText()}
                </CustomButton>
                <span style={{ color: "#0054f0" }}><strong>:</strong></span>
                <CustomButton 
                    variant="primary"
                    onClick={onMinutesButtonClick}  
                    style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#0054f0",
                        color: "#faf9f7",
                        margin: "0.2rem",
                    }}>
                        {minutesText()}
                </CustomButton>
                <CustomButton 
                    variant="secondary"
                    onClick={onToggleTimeOfDay} 
                    style={{
                        width: "46px",
                        height: "46px",
                        backgroundColor: "#faf9f7",
                        color: "#0054f0",
                        margin: "0.2rem",
                    }}
                >
                       {timeOfDay()}
                </CustomButton>
            </div>
            <div className="timePickerSliders">
                <SlideContainer>
                  <SlideLabel text="hours" style={{ color: "#0054f0", textAlign: "left", justifyContent: "left" } } />
                    <Slider  
                        onValueChange={onHourChange}
                        step={1}
                        min={0}
                        max={23}
                        value={state.hours}
                    />
                </SlideContainer>
                <SlideContainer>
                  <SlideLabel text="minutes" style={{ color: "#0054f0", textAlign: "left", justifyContent: "left" } } />
                    <Slider  
                        step={1}
                        min={0}
                        max={59}
                        value={state.minutes}
                        onValueChange={onMinuteChange}
                    />
                </SlideContainer>
            </div>
        </div> 
    </>);
};