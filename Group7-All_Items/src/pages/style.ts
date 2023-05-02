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

export const TeamContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 6vw;
    padding-right: 6vw;
`;

interface WrapperProps {
    src: string;
}

export const TeamImageWrapper = styled.div`
    margin-left: 0.3vw;
    margin-right: 0.3vw;
    position: relative;
`;

export const ImageWrapper = styled(animated.div)`
    position: relative;
    z-index: 1;
`;

export const ImageGroup = styled.div`
    display: flex;
    position: relative;
    top: 10px;
    align-items: center;
    justify-content: center;
    overflow: visible;
    margin-top: 10vh;
    width: 78vw;
    left: 45%;
    transform: translateX(-50%);
`;

interface ImageProps {
    src: string;
    bg: string;
}

export const Image = styled.image<ImageProps>`
    display: block;
    width: 10.28vw;
    height: 20vw;
    position: relative;
    background-image: url(${(props) => props.src});
    background-size: cover;
    transition: linear 150ms;

    &:hover {
        width: 17.473vw;

        background: url(${(props) => props.bg});
        background-size: contain;
        background-repeat: no-repeat;
    }
`;

export const ImageGroupBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1;
`;

interface ImageBgProps {
    uri: string;
}

export const ImageBg = styled.div<ImageBgProps>`
    display: block;
    width: 10.28vw;
    height: 20vw;
    position: relative;
    background-image: url(${(props) => props.uri});
    background-size: cover;
    transition: linear 150ms;
`;

export const AnimatedImageWrapper = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutWrapper = styled.div`
    position: relative;
    width: 80vw;
    margin-top: 10px;
`;

