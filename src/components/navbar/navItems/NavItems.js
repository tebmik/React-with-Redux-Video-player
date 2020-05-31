import React from "react";
import Item from "./Item";

import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const Ul = styled.ul`
    display: flex;
    flex-direction: ${props => (props.mobile ? "column" : "row")};
    align-items: center;
    height: 100%;
`;

const NavItems = ({ mobile, clicked }) => {
    return (
        <>
            <Nav mobile={mobile}>
                <Ul mobile={mobile}>
                    <Item clicked={clicked} mobile={mobile} title="Home" />
                    <Item clicked={clicked} mobile={mobile} title="Trending" />
                    <Item clicked={clicked} mobile={mobile} title="Library" />
                    <Item clicked={clicked} mobile={mobile} title="History" />
                </Ul>
            </Nav>
        </>
    );
};

export default NavItems;