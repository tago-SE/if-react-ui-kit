import React from 'react';
import { TextBody } from '../TextLayout';
import { Heading, IHeading } from '../Typography/Heading'

export interface ISplitContent {
    heading?: IHeading,
    body?: any,
    footer?: any,
}

export const SplitContent : React.FC<ISplitContent> = ({
    body = undefined,
    heading = undefined,
    footer = undefined,
    ...props
}) => {
    return (
        <div className="if content" {...props}>
            {heading ? (<Heading {...heading} />) : null}
            <TextBody>{body}</TextBody>
            {footer}
        </div>
    );
}

export default SplitContent;