import React from "react";
import styled from "styled-components";
import Container from "../../hoc/layout/elements/Container";
import Logo from "./logo/Logo";
import NavItems from "./navItems/NavItems";

const FixedWrapper = styled.div`
    position: fixed;
    background-color: var(--color-mainDark);
    padding: 0 2rem;
    top: 0;
    left:0;
    width: 100%;
    height: 8rem;

    @media ${props => props.theme.mediaQueries.small} {
        display: none;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2rem;
    height: 100%;
    align-content: center;
`;




const Navbar = () => {
    return (
        <FixedWrapper>
            <Container>
                <Wrapper>
                    <Logo />
                    <NavItems />
                </Wrapper>
            </Container>
        </FixedWrapper>
    );
};

export default Navbar;