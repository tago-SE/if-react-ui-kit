import React from 'react';

import { GridItem, GridRow, GridContainer } from '../../../components/If-Design-System/Grid'
import { Popover } from '../../../components/If-Design-System/Popover';
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
            <Heading size="small">Popovers</Heading>
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
                    />
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
                        onClose={() => toggleOpen("right")}
                        style={{position: "absolute", left: "150px", top: "-10px", right: "auto", bottom: "auto",  transform: "none"}}
                    />
                </GridItem>
            </GridRow>
        </GridContainer>
    </div>
    

    {/* <GridContainer>
        <GridRow>
            
        </GridRow>
        <GridRow>
            <GridItem xs={3}>
                <Button loading={true} styleType="tertiary">Tertiary</Button>
            </GridItem>
            <GridItem xs={5}>
                <Popover title="Left" position="right" isOpen={true}/>
            </GridItem>
           
        </GridRow>

    </GridContainer> */}
    </>);
}

export default PopoverSection;