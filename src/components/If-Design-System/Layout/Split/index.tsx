import React from 'react';
import { Container } from '../Container';
import { SplitContent, ISplitContent } from './SplitContent';
import { Image, IImage } from '../Image';

export interface ISplit {
    content: ISplitContent,
    featured: IImage // or video in future
    small?: boolean,
    reverse?: boolean,
    color?: '' | 'dark' | 'darker' | 'darkest',
    [x: string]: any
};

/**
 *  The Split Component is used to divide up content heavy pages. It consists of a content section and a featued section typically an image or a video. 
 */
export const Split : React.FC<ISplit> = ({
    content,
    featured,
    small = false, 
    reverse = false,
    color = "",
    ...props
}) => {
    return (
        <div data-speccer="" className={`if split${small ? " small" : ""}${color ? " " + color : ""}${reverse ? " reverse" : ""}`} {...props}>
            <Container>
                <SplitContent {...content} />
                <Image {...featured} />
            </Container>
        </div>
    );
}

export { SplitContent };
export type { ISplitContent };
export default Split;