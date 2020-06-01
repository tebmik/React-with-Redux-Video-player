import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { fetchMedia } from "../../../../actions";

import ListItem from "./listItem/ListItem";


const ListWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top:57%;
    height: 100vh;
    background-color: pink;
    width: 100vw;
    overflow: hidden;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    transtion: all .2s ease-in-out;
    height:100%;
    height: 16rem;
    justify-content: space-around;
    transform: translateY(-10rem);
`

const VideoList = ({ data, fetchMedia }) => {

    useEffect(() => {
        fetchMedia();
        // console.log(data)
    }, [fetchMedia]);
    console.log(data)

    if(!data.items) {
        return <p>Loading...</p>
    }

    return (
        <>
            <ListWrapper>
                {
                    <Ul>
                        {data.items.map(item => (
                            <ListItem key={item.id.videoId} item={item} />
                        ))}
                    </Ul>
                }
            </ListWrapper>
        </>
    );
};

const mapStateToProps = state => ({
    data: state.media
}); 

export default connect(mapStateToProps, { fetchMedia })(VideoList);