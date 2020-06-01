import React from "react";
import styled from "styled-components";

const Li = styled.li`
    postion: relative;
    flex: 1 1 0rem;
    transition: transform 500ms;
    cursor: pointer;

    &:focus, &:hover {
        transform: scale(1.2);
        z-index: 1;
    }
    
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`

const MediaItem = ({ item }) => {


    console.log(item)
    return (
        <>
            <Li>
                <Img src={item.snippet.thumbnails.medium.url} />
            </Li>
        </>
    );
};

export default MediaItem