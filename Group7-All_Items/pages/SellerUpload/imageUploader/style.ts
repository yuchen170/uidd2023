import styled from "styled-components";

export const FilePreviewContainer = styled.div`
    position: absolute;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 726px;
    height: 330px;
    z-index: 1;
   
`

export const PerviewBolck = styled.div`
    display: inline-block;
    align-items: start;
    margin: 15px;
    width: fit-content;
    height: 298px; 
    //border: 1px solid gray;
    border-radius: 15px;
    overflow: hidden;
    z-index: 1;
`

export const PerviewImage = styled.img`
    z-index: 2;
    height: 298px; 
    //object-fit: cover;
    &:hover+button{
        opacity: 1;
    }
`

export const ClosePreviewButton = styled.button`
    position: absolute;
    background-color: transparent;
    z-index:3;
    opacity: 0.6;
    border: none;
    &:hover{
        opacity: 1;
    }
`

export const FileInput = styled.input`
    position: absolute;
    width: 400px;
    height: 60px;
    //background-color: yellow;
    //opacity: 0.5;
    color: transparent;
    &:focus {
        border: none;
      }
    &::file-selector-button {
        background-color: transparent;
        font-weight: normal;
        color: transparent;
        padding: 0.5em;
        border: none;
        
    }
    &:hover{
        cursor: pointer;
    }
    //margin-top: 45px;
    z-index: 2;
    
`