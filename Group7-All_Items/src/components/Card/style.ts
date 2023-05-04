import styled from "styled-components";


export const CardContainer = styled.div`
border-radius: 2%;
margin-top:20px;
margin-bottom:20px;
background-color: #EFF1F5;
width: 300px;
height: 320px;
box-shadow: 1px 1px 4px 1px gray;
`
export const TopContainer = styled.div`
position: relative;
top:0;
margin-top:-20px;
border-top-left-radius: 2%;
border-top-right-radius: 2%;
background-color: #283EA3;
height:250px;
`

export const ImageContainer = styled.div`
position: relative;
margin-top:10px;
width: 200px;
height: 200px;
overflow: hidden;
`

export const TopWrap = styled.div`
position: relative;
    top:20px;
    display: flex;
    justify-content: space-around;
    margin:20px;
    align-items: flex-end;
`
export const ItemTitle = styled.h1`

    position: relative;
    bottom: 0;
    font-size: 24px;
    text-align: left;
    color: white; 
    padding-bottom: 8px;
`;

export const Owner = styled.h1`

    position: relative;
    bottom: 0;
    font-size: 14px;
    text-align: left;
    color: white; 
    padding-bottom: 8px;
`;

export const TextWrap = styled.div`

    position: relative;
    top: 15px;
    display: flex;
    flex-direction: column;
`;

export const InformationWrap = styled.div`

    position: relative;
    display: flex;
    flex-direction: column;
    text-align: right;
`;

export const BottomWrap = styled.div`
    position: relative;
    top: 15px;
    display: flex;
    justify-content: space-between;
    margin:10px;
    align-items: flex-end;
`

export const Text = styled.h1`
    position: relative;
    bottom: 0;
    font-size: 12px;
    text-align: left;
    color: black; 
`;

export const Line = styled.div`
    height: 1px;
    background: black;
    width: 100px;
    margin:9px;
`;

