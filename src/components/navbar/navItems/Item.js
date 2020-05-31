import React from "react";
import styled from "styled-components";

const A = styled.a`
    color: var(--color-white);
    font-size:2.8rem;
    display: grid;
    justify-self: right;
    cursor: pointer;
`


const Item = ({title}) => {
    return (
        <A href="#">{title}</A>
    );
}

export default Item;