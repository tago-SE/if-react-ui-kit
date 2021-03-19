import { Container, Block } from '../../../components/If-Design-System/Container';
import { Heading, IHeading, TitleHeading } from '../../../components/If-Design-System/Layout/Typography/Heading';


export const TypographySection = () => {
    const headers: Array<IHeading> = [
        {
            rank: 1,
            size: "largest",
            children: "Largest",
        },
        {
            rank: 2,
            size: "larger",
            children: "Larger",
        },
        {
            rank: 3,
            size: "large",
            children: "Large",
        },
        {
            rank: 4,
            size: "medium",
            children: "medium",
        },
        {
            rank: 5,
            size: "small",
            children: "small",
        },
        {
            rank: 6,
            size: "smallest",
            children: "smallest",
        },
    ]
    return (
        <Block>
            <Container>
                <Heading size="largest">Typography</Heading>
                <hr className="if" />
         
                    {headers.map(header => (<>
                        <Heading {...header} />
                        <Heading center {...header}/>
                        <TitleHeading {...header} />
                        <TitleHeading center {...header} />
                    </>))}
        
            </Container>
        </Block>
    );
}

export default TypographySection;