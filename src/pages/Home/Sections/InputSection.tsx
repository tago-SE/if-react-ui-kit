import React from 'react';
import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading, H1, H2, H3 } from '../../../components/If-Design-System/Layout/Typography/Heading';

import { 
    Dropdown,
    DatePicker,
    DateRangePicker
} from '../../../components/If-Design-System/Input';
import { Label } from '../../../components/If-Design-System/Input/label';

import { Expandable } from '../../../components/If-Design-System/Expandable';

import { UserApplicationFilterModal } from '../../../components/If-Design-System/Modal/applicationFilterModal';
import { setApplications, useReportsContext } from '../../../components/If-Design-System/Modal/context';

export const InputSection = () => {

    const { state, dispatch } = useReportsContext();

    const dropdownProps = {
        placeholder: "Placeholder",
        name: "timeseries_range_dd", 
        id: "timeseries_range_dd",
        label: "Label", 
        options: [
            {
                value: 0,
                label: "disabled",
                disabled: true,
            },
            {
                value: 1,
                label: "enabled",
                disabled: false,
            },
            {
                value: 2,
                label: "hidden",
                hidden: true,
            },
            {
                value: 3,
                label: "not hidden",
                hidden: false,
            }
        ],
    };

    const dataSizes = ["smallest", "smaller", "small", "medium", "large", "larger", "largest", "fluid"];

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    
    React.useEffect(() => {
      console.log("SETTING APPS...");

      setTimeout(() => {
        // dispatch(setApplications([
        //   {
        //     name: "Car Insurance Norway",
        //     id: "123123",
        //     checked: false,
        //   },
        //   {
        //     name: "Example APIs",
        //     id: "4",
        //     checked: false,
        //   },
        //   {
        //     name: "Another API",
        //     id: "5",
        //     checked: false,
        //   },
        // ]));
      }, 5000);
      
    }, []);

    // React.useLayoutEffect(() => {
    //   console.log("State", state);
    // }, [state])

  

     const [startDate, setStartDate] = React.useState(new Date());

     const [modalState, setModalState] = React.useState({
      show: false,  
      
     });

    

    return (
        <Block>
            <Container> 
            <H2 variant="largest">Input</H2>
    
              {/* <UserApplicationFilterModal 
                options={state.appFilterOptions}
                show={true} 
                onComplete={(selected) => {
                  console.log("selected", selected);
                }}
                onClose={() => alert("clsoed")}
              /> */}
    
           
            <DateRangePicker />

            <Expandable 
                id={0}
                variant="light"
                title="Summary for selected time period"
                titleProps={{
                  style: {
                    padding: "2rem",
                    '--right': "5rem",
                      // marginTop: "0px", marginBottom: "0px", marginLeft: "0px", marginRight: "0px",
                      // paddingRight: "0px", paddingLeft: "0px"
                 
                  }
                }}
                defaultOpen={true}
                content={
                  <p>Hello world</p>
                }
              />    

            <H3 variant="largest">Date Picker</H3>
            <DatePicker 
              selected={startDate} 
              onChange={(date: Date) => {
                console.log("Changed to: ", date);
                setStartDate(date)
              }} 
            />
                
            {dataSizes.map((size, index) => {
              return <DatePicker 
                selected={startDate}
                onChange={(date: Date) => {

                  setStartDate(date)
                }} 
                key={index} 
                id={makeid(12)} 
                data-size={size}/>
            })}

              
            

            <H3 variant="largest">Dropdown</H3>
{/* 
            <Dropdown {...dropdownProps} 
                id={xId}
                selectedValue={state.selected}  // <-- not really necessary
                onChange={(value, event) => {
                    console.log("selected:::", value, event);
                    setState({...state, selected: value }); // <-- also not necessary
                }}
            /> */}

            <Dropdown {...dropdownProps} id={makeid(12)} label="Unselected" />

            <Dropdown {...dropdownProps} id={makeid(12)} label="No Placeholder" placeholder={undefined} />

            <Dropdown {...dropdownProps} id={makeid(12)} label="No Placeholder, required" required placeholder={undefined} />

            <Dropdown {...dropdownProps} id={makeid(12)} label="No Placeholder, invalid" invalid placeholder={undefined} />

            <Dropdown {...dropdownProps} id={makeid(12)} label="No Placeholder, disabled" disabled placeholder={undefined} />

            <Dropdown {...dropdownProps} id={makeid(12)} label="No Placeholder, closed" closed placeholder={undefined} />

            {dataSizes.map((size, index) => {
                return <Dropdown {...dropdownProps} key={index} id={makeid(12)} label={`No Placeholder ${size}`} dataSize={size} placeholder={size} />
            })}
        
            </Container>
        </Block>
    );
}

export default InputSection;