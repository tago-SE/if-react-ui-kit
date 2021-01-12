import { UspItem, UspList } from '../../components/If-Design-System/Usps';
import { Block, Container} from '../../components/If-Design-System/Container';
import { Heading } from '../../components/If-Design-System/Heading';

export const KeyBenefitsBlockMock = () => {

    const benefits = [
      { 
        title: "Device- & software-free",
        description: "now that mileage is sent via API directly from the car's mileometer, Mercedes-Benz drivers no longer have to fit the Miles Tracker from By Miles into their OBD-II socket.",
        imageSrc: "/images/usps/star.svg",
      },
      { 
        title: "Reduced operational costs",
        description: "By Miles saves on hardware and shipping costs, and as the OBD-II device is no longer needed – they save on support costs too.",
        imageSrc: "/images/usps/parent.svg",
      },
      { 
        title: "Increased comfort",
        description: "without the need to install additional hardware, the onboarding process for policyholders has been shortened and simplified considerably. Just sign up and start benefiting from fairer rates.",
        imageSrc: "/images/usps/animal.svg",
      }
    ]
  
    return (
      <Block style={{paddingBottom: "0px"}}>
        <Container style={{ paddingBottom: "5px"}}>
          <Heading rank={2} size="medium">How did SBAB Benefit from our "Car Insurance API" product?</Heading>
          <p className="if">
            For Mercedes-Benz drivers, the implementation of our API makes this fairer kind of car insurance more appealing and quicker to set up, which is good for the customer, and for the business.
          </p>
          <UspList alignLeft style={{marginBottom: "2rem"}}>
              {benefits.map(benefit => <UspItem 
                title={benefit.title}
                text={benefit.description}
                style={{backgroundImage: `url(${benefit.imageSrc})`, paddingBottom: "0px"}}
              />)}
          </UspList>
          <br />
        </Container>
      </Block>
    );
}

export default KeyBenefitsBlockMock;