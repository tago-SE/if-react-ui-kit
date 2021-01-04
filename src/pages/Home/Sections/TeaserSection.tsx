import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';
import { TeaserList, Teaser } from '../../../components/If-Design-System/Card/Teaser';

//  <Image type="default" responsivelyLazy src={image.src} />

export const TeaserSection = () => {
    return (
        <Block>
            <Container> 
                <Heading size="largest">Teasers</Heading>
                <Heading size="medium">With square images</Heading>
                <TeaserList>
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                </TeaserList>

                <Heading size="medium">With linked square images</Heading>
                <TeaserList>
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                        linkImage
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                        linkImage
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                        linkImage
                    />
                </TeaserList>


                <Heading size="medium">With studio images</Heading>
                <TeaserList>
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                </TeaserList>

                <Heading size="medium">With text only (need fix) </Heading>
                <TeaserList>
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                    <Teaser 
                        heading={{children: "Hemförsäkring"}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
                </TeaserList>

                <Heading size="medium">Target: With text only</Heading>
                <ul className="if teasers">
                    <li className="if teaser">
                        <span className="if heading smallest">Hemförsäkring</span>
                        <p className="if">
                        When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.
                        </p>
                        <a href="/aasd" className="if standalone">Till hemsförsäkringar</a>
                    </li>
                    <li className="if teaser">
                        <span className="if heading smallest">Hemförsäkring</span>
                        <p className="if">
                        When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.
                        </p>
                        <a href="/aasd" className="if standalone">Till hemsförsäkringar</a>
                    </li>

                    <li className="if teaser">
                        <span className="if heading smallest">Hemförsäkring</span>
                        <p className="if">
                        When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.
                        </p>
                        <a href="/aasd" className="if standalone">Till hemsförsäkringar</a>
                    </li>
                    </ul>

                <Heading size="medium">With a call to action button</Heading>

                <Heading size="medium">With large title</Heading>
                <TeaserList>
                    <Teaser 
                        heading={{children: "Hemförsäkring", size: "largest", rank: 3}}
                        image={{src: "https://v.imgi.no/6bmln7xatt-MOODBOARD/2042", type: "studio", alt: ""}}
                        text="When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The
                        roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel."
                        link={{href: "/aasd", name:"Till hemförsäkring", target: ""}}
                    />
    
                </TeaserList>
                    
            </Container>
        </Block>
    );
}

export default TeaserSection;