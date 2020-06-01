import React, { useEffect } from "react";
import styled from "styled-components";

import VideoPlayer from "./videoPlayer/VideoPlayer";
import VideoList from "./videoList/VideoList";

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--color-mainLight);
`

const FeaturedContent = ({ mobile }) => {

    return (
        <>
            <Wrapper mobile={mobile}>
                <VideoPlayer />
            </Wrapper>
            <VideoList />
        </>
    );
};



export default FeaturedContent;