import { Heading, TitleHeading } from "../../components/If-Design-System/Heading";
import { Block, Container} from '../../components/If-Design-System/Container';
import { Content } from "../../components/If-Design-System/Content";
// import { Heading } from '../../components/If-Design-System/Heading';

export const PartnerBlock = () => {
    return (
      <Block>
        <Heading size="larger" marginBottom="0px">Who is using our products?</Heading>
        <hr className="if" />
        <section className="if split small">
          <Container>
            <Content>
              <TitleHeading size="small" rank={3}>
                Volvia
              </TitleHeading>
            {/* <Heading size="medium" rank={3}>Volvia</Heading> */}
              <p className="if text body">
                “Customer expectations are not simply that you’re able to sell across channels but also that the whole experience is intuitive and fluid.”
              </p>  
              <small className="if author"><b>John Doe ・</b> Product Owner</small><br /><br />
              <a href="/blog" className="if standalone">Read case study</a>
            </Content>
            <img src="https://www.volvia.se/globalassets/volvia/small/volvo-oppen-bagagelucka-vid-hus.jpg" alt="Vit Volvo med öppen bagagelucka " 
              style={{width: "50%"}}
            />
          </Container>
        </section>
      </Block>
    );
}