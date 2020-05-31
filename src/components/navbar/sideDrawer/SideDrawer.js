import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";
import NavItems from "../navItems/NavItems";
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

const Menu = styled.div`
    position: fixed;
    width: 70%;
    left:0;
    top:0;
    display: flex;
    padding-left: 2rem;
    align-items: center;
    margin-top: 8rem;
    height: 100vh;
    background-color: var(--color-main);
    transform: translateX(${props => (props.opened ? "0%" : "-100%")});
    transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
    display: none;

    @media ${props => props.theme.mediaQueries.small} {
        display: flex;
    }
`



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
            <Menu opened={isOpened}>
                <NavItems mobile clicked={() => setIsOpened(false)} />
            </Menu>
        </>
    );
};

export default SideDrawer;