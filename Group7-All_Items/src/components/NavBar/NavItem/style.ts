import styled from "styled-components";

export const A = styled.a.attrs(() => ({ className: "nav-link" }))`
    margin-right: 1vw;
    bottom: 0;
    position: relative;
    display: inline-block;
    right: auto;
    color:#283EA3;
    font-size: 22px;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #283EA3;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;
