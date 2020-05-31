import React from "react";
import styled from "styled-components";

const Li = styled.li`
    display: flex;
    height: 100%;
`

const A = styled.a`
    display: flex;
    text-transform: uppercase;
    align-items: center;
    border-bottom: ${props =>
    props.mobile ? "1px solid transparent" : "2px solid transparent"};
    font-size: 1.2rem;
    padding: 1rem;
    margin: ${props => (props.mobile ? "2rem 0" : "0 1rem")};
    font-weight: 400;
    color: var(--color-white);
    transition: all 0.2s;
    &:hover {
    border-bottom: ${props =>
        props.mobile
        ? "1px solid var(--color-white)"
        : "3px solid var(--color-white)"};
    }
    &.active {
    border-bottom: ${props =>
        props.mobile
        ? "1px solid var(--color-white)"
        : "3px solid var(--color-white)"};
    }
`


const Item = ({title, mobile, clicked}) => {
    return (
        <Li>
            <A mobile={mobile} onClick={clicked} href="#">{title}</A>
        </Li>
    );
}

export default Item;