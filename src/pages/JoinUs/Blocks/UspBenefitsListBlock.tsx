import { UspItem, UspList } from '../../../components/If-Design-System/Usps';
import { Block, Container} from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';

const BenefitsListBlock = () => {

    const benefits = [
      { 
        title: "On the job training",
        description: "We’re always investing in our people.",
        imageSrc: "/images/usps/star.svg",
      },
      { 
        title: "Support for parents",
        description: "Don't choose between family and work.",
        imageSrc: "/images/usps/parent.svg",
      },
      { 
        title: "Lunch catering",
        description: "Enjoy lunch at the office with your collegues.",
        imageSrc: "/images/usps/animal.svg",
      },
      { 
        title: "Health & Wellness subsidy",
        description: "A key part of success at work.",
        imageSrc: "/images/usps/health.svg",
      },
      { 
        title: "Generous bonus compensation",
        description: "We reward our successes.",
        imageSrc: "/images/usps/coins.svg",
      },
      { 
        title: "Insuance subsidies",
        description: "Purchase our products at a reduced price.",
        imageSrc: "/images/usps/document.svg",
      },
    ]
  
    return (
      <Block>
        <Container>
          <Heading rank={2} size="medium">Benefits</Heading>
          <UspList alignLeft style={{marginBottom: "2rem"}}>
              {benefits.map(benefit => <UspItem 
                title={benefit.title}
                text={benefit.description}
                style={{backgroundImage: `url(${benefit.imageSrc})`, paddingBottom: "0px"}}
              />)}
          </UspList>
          <br />
          <p><i>
            *Some benefits vary due to local regulation and policies across the If organization.
          </i></p>
          <br />
        </Container>
      </Block>
    );
}

export default BenefitsListBlock;