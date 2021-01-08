import { UspItem, UspList } from '../../../components/If-Design-System/Usps';
import { Block, Container} from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Heading';

const GrowthListBlock = () => {

    const benefits = [
      { 
        title: "Regular feedback",
        description: "/join-us/role",
        imageSrc: "/images/send-message.svg",
      },
      { 
        title: "UX Community conferences",
        description: "Don't choose between family and work",
        imageSrc: "/images/send-message.svg",
      },
      { 
        title: "ShareIT@If regular",
        description: "Lunch compensation (?)",
        imageSrc: "/images/send-message.svg",
      },
      { 
        title: "Reduced insurance prices",
        description: "/join-us/role",
        imageSrc: "/images/send-message.svg",
      },
      { 
        title: "Generous bonus compensation",
        description: "/join-us/role",
        imageSrc: "/images/send-message.svg",
      },
      { 
        title: "Generous bonus compensation",
        description: "/join-us/role",
        imageSrc: "/images/send-message.svg",
      },

    ]
  
    return (
      <Block>
      {/* <img src="/images/send-message.svg" alt=""></img> */}
      <Container>
        <Heading rank={2} size="medium">Growth is central</Heading>
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

export default GrowthListBlock;