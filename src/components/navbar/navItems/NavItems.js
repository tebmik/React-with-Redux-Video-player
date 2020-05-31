import React from "react";
import Item from "./Item";

import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Ul = styled.ul`
    display: flex;
    flex-direction: ${props => (props.mobile ? "column" : "row")};
    align-items: center;
    height: 100%;
    
`

const NavItems = ({ mobile, clicked }) => {
    return (
        <>
            <Nav mobile={mobile}>
                <Ul mobile={mobile}>
                    <Item clicked={clicked} mobile={mobile} title="item 1" />
                    <Item clicked={clicked} mobile={mobile} title="item 2" />
                    <Item clicked={clicked} mobile={mobile} title="item 3" />
                </Ul>
            </Nav>
        </>
    );
};

export default NavItems;