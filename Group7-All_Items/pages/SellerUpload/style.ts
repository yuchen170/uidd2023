import styled from "styled-components";
import { animated } from "@react-spring/web";
//import Image from "next/image";
import down from "@/public/down.png";


export const FormContainer = styled.div`
    font-size: 25px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 15vw;
    padding-right: 265px;
    //background-color: #FFFF46;  
    margin-top: 100px;
    margin-bottom: 100px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   // align-items: center;
   // background-color: #ED9785;
    width: 50%;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const Label = styled.label`
    color: #28408A;
    margin-bottom: 5px;
    display: block;
`
export const FileInputField = styled.div`
    width: 746px;
    height: 349px;
    //background-color: #3CBC8D;
    border: 1.5px solid #28408A;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus {
        border: 3px solid #555;
    }
`;

export const ChooseFileText = styled.p`
    text-decoration: underline;
    text-underline-offset: 11px;
    color: #28408A;
    &:hover{
        cursor: pointer;
    }
`


// <<<-------Input Fields-------->>>
export const TextInput = styled.input`
    font-size: 18px;
    width: 441px;
    height: 48px;
    //background-color: #3CBC8D;
    box-sizing: border-box;
    border: none;
    border-bottom: 1.5px solid #28408A;
    margin-bottom: 20px;
    &:focus {
        border: none;
        border-bottom: 3px solid #555;
      }
`

export const PriceInput = styled.input`
    font-size: 18px;
    width: 203px;
    height: 48px;
    //background-color: #3CBC8D;
    box-sizing: border-box;
    border: none;
    border-bottom: 1.5px solid #28408A;
    margin-bottom: 20px;
    &:focus {
        border: none;
        border-bottom: 3px solid #555;
      }
      //Remove Arrow for type=number
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
`

export const Select = styled.select`
    font-size: 18px;
    width: 441px;
    height: 48px;
    box-sizing: border-box;
    border: 1.5px solid #28408A;
    border-radius: 15px;
    margin-bottom: 20px;
    text-indent: 10px;
    //restyle arrow
    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    background-image: url("down.png");
    background-position: calc(100% - 20px);
    background-size: 15px 15px;
    background-repeat: no-repeat;
    
`


export const SubmitButton = styled.button`
    font-size: 20px;
    width: 140px;
    height: 58px;
    color: white;
    background-color: #28408A;
    border: none;
    border-radius: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 324px;
    z-index: 3;
`