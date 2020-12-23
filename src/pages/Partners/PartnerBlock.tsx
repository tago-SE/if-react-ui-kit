import { Heading } from "../../components/If-Design-System/Heading";
import { Block, Container} from '../../components/If-Design-System/Container';
import { IFContent } from "../../components/If-Design-System/Content";
// import { Heading } from '../../components/If-Design-System/Heading';

export const PartnerBlock = () => {
    return (
      <Block>
        <Heading size="larger">Partners</Heading>
        <hr className="if" />
        <section className="if split small">
          <Container>
            <IFContent>
            <h3 className="if title heading small">Volvia</h3>
            {/* <Heading size="medium" rank={3}>Volvia</Heading> */}
              <p className="if text body">
                “Customer expectations are not simply that you’re able to sell across channels but also that the whole experience is intuitive and fluid.”
              </p>  
              <small className="if author"><b>John Doe ・</b> Product Owner</small><br /><br />
              <a href="/asdasd" className="if standalone">Read case study</a>
            </IFContent>
            <img src="https://www.volvia.se/globalassets/volvia/small/volvo-oppen-bagagelucka-vid-hus.jpg" alt="Vit Volvo med öppen bagagelucka " 
              style={{width: "50%"}}
            />
          </Container>
        </section>
      </Block>
    );
}