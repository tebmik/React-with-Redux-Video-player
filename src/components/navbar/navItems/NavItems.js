import React from "react";
import Item from "./Item";

import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding-right: 2rem;
`

const NavItems = () => {
    return (
        <>
            <Wrapper>
                <Item title="item 1" />
                <Item title="item 2" />
                <Item title="item 3" />
            </Wrapper>
        </>
    );
};

export default NavItems;