import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { fetchMedia } from "../../../actions";

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--color-mainLight);
`

const FeaturedContent = ({ mobile, media, fetchMedia }) => {

    useEffect(() => {
        fetchMedia();
    }, []);

    console.log(media)

    return (
        <>
            <Wrapper mobile={mobile} >Featured Content</Wrapper>
        </>
    );
};

const mapStateToProps = state => ({
    media: state.media
}); 

export default connect(mapStateToProps, { fetchMedia })(FeaturedContent);