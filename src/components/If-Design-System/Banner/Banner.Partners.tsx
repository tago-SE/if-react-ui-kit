import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  overflow-x: auto;
`;

const LogoImage = styled.img<{src: string}>`
  height: 60px;
  width: 120px;
  src: ${props => props.src};
  &:hover {
        transform: scale(1.2);
    }
`;

const ListItem = styled.li`
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
`;

  
export const PartnerLogoItem: React.FC<{src: string}>= ({
    src,
}) => {
    return (
        <ListItem>
            <LogoImage alt="Casper logo" src={src}/>
        </ListItem>
    );
};

export const PartnerLogoList: React.FC<{[x: string]: any}>= (props) => {
    return (<List>
        {props.children}
    </List>);
};

