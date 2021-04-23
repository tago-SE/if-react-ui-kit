import React from 'react';
import { CalendarHeader } from './calendarHeader';

import { datesAreOnSameDay, 
  createDatesGroupedByWeek,
  firstCalendarDate,
  lastCalendarDate,
  isWithinInterval,
  isWeekend,
  getWeekdays,
} from './helpers';

interface ICalendarProps {
  selected?: Date,
  minDate?: Date,
  maxDate?: Date,
  startDate?: Date,
  endDate?: Date,
  /** Reverse the start and end dates (only affects the styling) */
  reverse?: boolean,
  events?: {
    onDateSelection: (date: Date) => void,
  }
}

interface IDayProps {
  date: Date,
  today?: boolean,
  active?: boolean,
  start?: boolean,
  inRange?: boolean,
  weekend?: boolean,
  end?: boolean,
  notSelectable?: boolean,
  [x: string]: any,
}

function Day({ date, today, active, notSelectable, start, end, inRange, weekend, ...props } : IDayProps) {
  const getClasses = () => {
    return "if" + 
      (weekend ? " weekend" : "") +
      (today ? " today" : "") +
      ((active || inRange ) && !end && !start ? " is-active" : "") +
      (notSelectable ? " non-selectable-day" : "") +
      (start ? " is-selected-start" : "") +
      (end ? " is-selected-end" : "");
  }
  return (
    <td
      aria-label={date.toString()}
      className={getClasses()}
      data-month={date.getMonth() + 1}
      data-year={date.getFullYear()}
      role="gridcell"
      data-day={date.getDate()}
      {...props}
    />
  );
}

export function Calendar ({ 
  selected,
  startDate,
  minDate,
  maxDate,
  endDate,
  reverse = false,
  events,
} : ICalendarProps) {

  const _today = new Date();
  const _cursor = selected || _today;
    
  const [state, setState] = React.useState({
    selected: selected,
    datesByWeek: createDatesGroupedByWeek(firstCalendarDate(_cursor), lastCalendarDate(_cursor)),
    cursor: _cursor,
  });
  
  const onNextMonth = (nextDate: Date) => {
    setState({ ...state, 
      datesByWeek: createDatesGroupedByWeek(firstCalendarDate(nextDate), lastCalendarDate(nextDate)),
      cursor: nextDate,
    })
  };

  const onPrevMonth = (prevDate: Date) => {
    setState({ ...state, 
      datesByWeek: createDatesGroupedByWeek(firstCalendarDate(prevDate), lastCalendarDate(prevDate)),
      cursor: prevDate
    })
  };

  const handleDatePicked = (date: Date) => {
    if (state.selected === date) return;
    setState({...state, selected: date });
    if (events?.onDateSelection) events.onDateSelection(date);
  };

  return (
    <div aria-label="Calendar view date-picker" className="if datepicker" role="application" 
    style={{  position: "relative", top: "0px", left: "0px", marginLeft: "auto", marginRight: "auto", height: "100%", display: "block", border: "none", boxShadow: "none"}} 
    >
      <CalendarHeader 
        currentDate={state.cursor}
        minDate={minDate}
        maxDate={maxDate}
        onNext={onNextMonth} 
        onPrev={onPrevMonth} 
      />
      <table 
        className="if calendar" 
        role="grid"
      >
        <thead className="if" role="rowgroup">
          <tr className="if" role="row">
            {getWeekdays().map((weekday: string, index: number) => (
              <th 
                key={index} 
                className="if weekend" 
                role="columnheader" 
                aria-label={weekday}
                scope="col"
              >
                <span title={weekday}>{weekday.substr(0, 2)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="if" role="rowgroup">
            {state.datesByWeek.map((weekDates: any, rowIndex: number) => {
              return (
                <tr className="if" key={rowIndex} role="row">
                  {weekDates.map((date: Date, colIndex: number) => {
                    const notSelectable = !isWithinInterval(date, minDate, maxDate);
                    const style : React.CSSProperties = {
                      pointerEvents: notSelectable ? "none" : undefined,
                    }
                    return (
                      <Day 
                        role="gridcell"
                        key={colIndex + rowIndex*7}
                        data-row={rowIndex}
                        aria-colindex={colIndex}
                        aria-rowindex={rowIndex}
                        data-col={colIndex}
                        tabIndex={notSelectable ? -1 : 0}
                        date={date} 
                        style={style}
                        notSelectable={notSelectable}
                        active={datesAreOnSameDay(state.selected, date)}
                        start={datesAreOnSameDay(reverse ? endDate : startDate, date)}
                        end={datesAreOnSameDay(reverse ? startDate : endDate, date)}
                        inRange={isWithinInterval(date, startDate, endDate)}
                        today={datesAreOnSameDay(_today, date)}
                        weekend={isWeekend(date)}
                        onClick={() => {
                          if (notSelectable) return;
                          handleDatePicked(date);
                        }} 
                      />
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>


    );
}