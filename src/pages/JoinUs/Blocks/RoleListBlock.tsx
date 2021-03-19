import React from 'react';

import { Block, Container} from '../../../components/If-Design-System/Container';
import { Heading } from '../../../components/If-Design-System/Layout/Typography/Heading';
import { StudioCrosslinkContainer, StudioCrosslink } from '../../../components/If-Design-System/Crosslinks';

const RoleListBlock = () => {

    const roles = [
      { 
        name: "Full stack developer",
        path: "/join-us/role",
      },
      { 
        name: ".NET developer",
        path: "/join-us/role",
      },
      { 
        name: "BI/DW developer",
        path: "/join-us/role",
      },
      { 
        name: "Leader roles",
        path: "/join-us/role",
      },
      { 
        name: "Solution architect",
        path: "/join-us/role",
      },
      { 
        name: "Tester",
        path: "/join-us/role",
      },
      { 
        name: "Technical architect",
        path: "/join-us/role",
      },
    ]
  
    return (
        <Block>
            <Container>
                <Heading rank={2} size="medium" trailingClassName="center" style={{ bottomMargin: "4rem"}}>Roles that we usually look for</Heading>
                <StudioCrosslinkContainer>
                  {roles.map(role => <>
                  <StudioCrosslink 
                    href={role.path} 
                    title={role.name} 
                    description="Asiakaspalvelu ja yhteystiedot" 
                  />
                    </>)}
                </StudioCrosslinkContainer>
                <span className="dissection outline right"/>
                <div className="if banner claims" data-anatomy="outline top">
                    <a className="if standalone" href="https://if.wd3.myworkdayjobs.com/Careers/3/refreshFacet/318c8bb6f553100021d223d9780d30be" 
                      style={{margin: "0 auto",width: "100%", display: "inline-block", textAlign: "center"}}>
                      See all available roles
                    </a>
                    <a className="if standalone" href="https://www.linkedin.com/company/if-p&amp;c-insurance"
                      style={{margin: "0 auto",width: "100%", display: "inline-block", textAlign: "center"}}>
                      Follow us on LinkedIn
                    </a>
                  
                </div>
        </Container>
      </Block>
    );
}

export default RoleListBlock;