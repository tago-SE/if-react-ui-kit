import React from 'react';
import { SelectionControlGroup, Toggle, Radio, Checkbox } from './index';

export type OptionTypes = typeof Toggle | typeof Radio | typeof Checkbox;

export interface IOption {
    id: string,
    name: string,
    label: string,
    checked?: boolean,
    invalid?: boolean,
    type?: OptionTypes,
    [x: string]: any,
}

type OptionsSelectorProps = {
    optonType: OptionTypes,
    options: Array<IOption>,
    alignment: 'horizontal' | 'vertical',
    onOptionChange: (option: IOption) => void,
}

// NOT SURE IF THIS IS USED... Probably remove if its not gonna be more generalized
export const OptionsSelector = ({
    optonType,
    options,
    alignment,
    onOptionChange
}: OptionsSelectorProps) => {    
    return (
        <fieldset className="if">
            <legend className="if">Environment</legend>
            <SelectionControlGroup alignment={alignment}>
                {options.map((o, index)=> {
                    const OptionElement = o.type || optonType;
                    return <OptionElement
                        key={index}
                        id={o.id}
                        name={o.name}
                        label={o.label}
                        checked={o.checked}
                        invalid={o.invalid}
                        onChange={() => { onOptionChange(o)}}
                        {...o.props}
                    />
                })}
            </SelectionControlGroup>
        </fieldset>
    );
}