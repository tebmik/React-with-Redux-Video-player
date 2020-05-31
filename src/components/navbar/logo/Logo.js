import React from "react";
import { Video } from "@styled-icons/foundation/Video";
// import {material, octicons} from 'styled-icons'
import styled from "styled-components";

const StyledLogo = styled(Video)`
    color: var(--color-white);
    height: 5rem;
    padding-left: 2rem;
    cursor: pointer;
`

const Logo = () => {
    return (
        <>
            <StyledLogo />
        </>
    );
};

export default Logo;