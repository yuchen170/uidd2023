import styled from "styled-components";
import { animated } from "@react-spring/web";

export const Title = styled.div`
    font-size: 30px;
    margin-top: 0px;
    position: relative;
    margin-left: 30px;
    text-align: left;
    text-decoration: underline;
    text-underline-offset: 14px;
    text-decoration-color: #283EA3; 
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 30px;
    gap:20px;
    flex-wrap: wrap
`