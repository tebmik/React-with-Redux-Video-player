import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { fetchMedia } from "../../../../actions";

const Wrapper = styled.div`
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
`

const Iframe = styled.iframe`
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: -6rem;
    width: 100%;
`

const VideoPlayer = () => {

    const [ term, setTerm ] = useState("");

    useEffect(() => {
        setTerm("stuff")
    }, [])

    

    return (
        <Wrapper>
            <Iframe 
                src="https://www.youtube.com/embed/gmOsmstAebg?controls=0&rel=0&autoplay=1&mute=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, rel" 
                allowfullscreen
                >
            </Iframe>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    data: state.media
})

export default connect(mapStateToProps, { fetchMedia })(VideoPlayer);