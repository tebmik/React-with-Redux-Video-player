import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--color-mainLight);
`

const FeaturedContent = ({mobile}) => {
    return (
        <>
            <Wrapper mobile={mobile} >Featured Content</Wrapper>
        </>
    );
};

export default FeaturedContent;