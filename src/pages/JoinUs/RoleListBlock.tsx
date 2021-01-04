import React from 'react';

import { Block, Container} from '../../components/If-Design-System/Container';
import { Heading } from '../../components/If-Design-System/Heading';



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
                <Heading rank={2} size="large" trailingClassName="center" style={{ bottomMargin: "4rem"}}>Roles that we usually look for</Heading>
                <ul className="if crosslinks studio three" data-anatomy="outline right">
                    {roles.map(role => <>
                    <li className="if">
                    <a className="if crosslink studio" href={role.path}>
                        {/*<img className="if image" src="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG"/>*/}
                        <p className="if text lead">
                        <span className="if">
                            {role.name}
                            <span className="if inline-nowrap">
                            <span className="if arrow"></span>
                            </span>
                        </span>
                        </p>
                        <p className="if text meta">Asiakaspalvelu ja yhteystiedot</p>
                    </a>
                    </li>
                    </>)}
                </ul>
                <span className="dissection outline right"/>
                <div className="if banner claims" data-anatomy="outline top">
                    <a className="if standalone" href="https://if.wd3.myworkdayjobs.com/Careers/3/refreshFacet/318c8bb6f553100021d223d9780d30be" style={{margin: "0 auto",width: "100%", display: "inline-block", textAlign: "center"}}>
                    See all available roles
                    </a>
                </div>
        </Container>
      </Block>
    );
}

export default RoleListBlock;