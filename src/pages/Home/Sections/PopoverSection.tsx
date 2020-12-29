import React from 'react';

import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { Popover, Tooltip } from '../../../components/If-Design-System/Popover';
import { Button } from '../../../components/If-Design-System/Button/Button';
import { Heading } from '../../../components/If-Design-System/Heading';

export const PopoverSection = () => {
    const [currentOpen, setCurrentOpen] = React.useState("");

    const toggleOpen = (name: string) => {
        if (currentOpen === name) setCurrentOpen("");
        else setCurrentOpen(name);
    }

    const isOpen = (name: string) => currentOpen === name;

    return (<>
    <div className="if block">
        <GridContainer>
            <GridRow>
                <Heading size="small">Popovers</Heading>
            </GridRow>
            <GridRow>
                <GridItem xs={3}>
                    <Button styleType="tertiary" onClick={() => toggleOpen("left")}>Left</Button>
                    <Popover 
                        isOpen={isOpen("left")}  
                        position="left"
                        title="Left" 
                        text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        onClose={() => toggleOpen("left")}
                        style={{position: "absolute", left: "-250px", top: "-60px", right: "auto", bottom: "auto",  transform: "none"}}
                    >
                    </Popover>
                </GridItem>
                <GridItem  xs={3}>
                    <Button styleType="tertiary" onClick={() => toggleOpen("top")}>Top</Button>
                    <Popover 
                        isOpen={isOpen("top")}  
                        position="top"
                        title="Right" 
                        onClose={() => toggleOpen("top")}
                        style={{position: "absolute", left: "-55px", top: "-90px", right: "auto", bottom: "auto",  transform: "none"}}
                    />
                </GridItem>
                <GridItem  xs={3}>
                    <Button styleType="tertiary" onClick={() => toggleOpen("bottom")}>Bottom</Button>
                    <Popover 
                        isOpen={isOpen("bottom")}  
                        position="bottom"
                        title="Bottom" 
                        onClose={() => toggleOpen("bottom")}
                        style={{position: "absolute", left: "-40px", top: "auto", right: "auto", bottom: "-70px",  transform: "none"}}
                    />
                </GridItem>
                <GridItem  xs={3}>
                    <Button styleType="tertiary" onClick={() => toggleOpen("right")}>Right</Button>
                    <Popover 
                        isOpen={isOpen("right")}  
                        position="right"
                        title="Right" 
                        text="hi there"
                        onClose={() => toggleOpen("right")}
                        style={{position: "absolute", left: "150px", top: "-10px", right: "auto", bottom: "auto",  transform: "none"}}
                    />
                </GridItem>
            </GridRow>

            <GridRow>
                <Heading size="small">Tooltips</Heading>
            </GridRow>
            <GridRow>
                <GridItem xs={3}>
                    <Tooltip 
                        text="This is a button. This is a very long tooltip. Disgusting. Ughh. Please." 
                        position="left" 
                        underlineTarget
                    >
                        <Button styleType="tertiary" onClick={() => alert("left")}>Left</Button>
                    </Tooltip>
                </GridItem>
                <GridItem  xs={3}>
                    <Tooltip text="This is a button." position="top">
                        <Button styleType="tertiary" onClick={() => alert("top")}>Top</Button>
                    </Tooltip>
                </GridItem>
                <GridItem  xs={3}>
                    <Tooltip text="This is a button." position="bottom">
                        <Button styleType="tertiary" onClick={() => alert("bottom")}>Bottom</Button>
                    </Tooltip>
                </GridItem>
                <GridItem  xs={3}>
                    <Tooltip text="This." position="right">
                        <Button styleType="tertiary" onClick={() => alert("right")}>Right</Button>
                    </Tooltip>
                </GridItem>
            </GridRow>
        </GridContainer>
    </div>

    </>);
}

export default PopoverSection;