import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';
import { TeaserList, Teaser } from '../../../components/If-Design-System/Card/Teaser';

export const TeaserSection = () => {
    return (
        <Block>
            <Container> 
                <Heading size="largest">Teasers</Heading>
                <Heading size="medium">Square images</Heading>
                <TeaserList>
                    {[1, 2, 3].map( _ => (<Teaser 
                      heading={{children: "Hemförsäkring"}}
                      image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                      text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                      roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                      link={{href: "/aasd", title:"Till hemförsäkring", target: ""}}
                    />))}
                </TeaserList>

                <Heading size="medium">Square images with link</Heading>
                <TeaserList>
                    {[1, 2, 3].map( _ => (<Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", title:"Till hemförsäkring", target: ""}}
                        linkImage
                    />))}
                </TeaserList>


                <Heading size="medium">With studio images</Heading>
                <TeaserList>
                    {[1, 2].map( _ => (<Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", title:"Till hemförsäkring", target: ""}}
                    />))}
                </TeaserList>

                <Heading size="medium">With text only</Heading>
                <TeaserList>
                    {[1, 2].map( _ => <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", title:"Till hemförsäkring", target: ""}}
                    />)}
                </TeaserList>

                <Heading size="medium">With a call to action button</Heading>
                <p>Not yet implemented</p>
                <br />

                <Heading size="medium">With large title</Heading>
                <TeaserList>
                    {[1].map( _ => <Teaser 
                         heading={{children: "Hemförsäkring", size: "small" }}
                         image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                         text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                         roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                         link={{href: "/aasd", title:"Till hemförsäkring", target: ""}}
                    />)}
                </TeaserList>
            </Container>
            
        </Block>
    );
}

export default TeaserSection;