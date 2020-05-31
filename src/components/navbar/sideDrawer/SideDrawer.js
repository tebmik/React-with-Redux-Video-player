import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";
import Navitems from "../navItems/NavItems";
import Hamburger from "./hamburger/Hamburger";

const FixedWrapper = styled.div`
    position: fixed;
    background-color: var(--color-mainDark);
    padding: 0 2rem;
    top: 0;
    left:0;
    width: 100%;
    height: 8rem;
    display: none;
    z-index: 10;

    @media ${props => props.theme.mediaQueries.small} {
        display: block;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    height: 100%;
    align-content: center;
`;



const SideDrawer = () => {

    const [ isOpened, setIsOpened ] = useState(false);

    return (
        <>
            <FixedWrapper>
                <Wrapper>
                    <Logo />
                    <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
                </Wrapper>
            </FixedWrapper>
        </>
    );
};

export default SideDrawer;