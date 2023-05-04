import { FC, useState } from "react";
import Image from "next/image";

import { Section } from "@/components/atoms/Section/style";
import { H1 } from "@/components/atoms/h1/style";
import Uploader from "./imageUploader/uploader";
import {
    Column, FormContainer, InputWrapper, Label,
    Select, TextInput, FileInputField, SubmitButton, PriceInput,
    ChooseFileText,
} from "./style";
import { StyleRegistry } from "styled-jsx";

const SellerUpload: FC = () => {

    function priceHandler(e){
        const [inpurPrice, setInputPrice] = useState();
        
    }

    function uploadHandler(e){
        const file = e.currentTarget.files[0];

        const fileReader = new FileReader();
        fileReader.onload =() =>{
            console.log("IMAGE LOADED: ", fileReader.result);
        }
        fileReader.onabort=() =>{
            alert("Reading Aborted!")
        }

        fileReader.onerror= () =>{
            alert("Reading Error!")
        }

        fileReader.readAsDataURL(file);
    }

    return (
        <>
        
            <form className="form">
            <FormContainer>
            <Column> {/*  this is the left <- column */}
            
            <InputWrapper>
            <Label>商品名稱</Label>
            <TextInput id="input" type="text" maxLength={60} name="itemName"></TextInput>
            </InputWrapper>
            

            <InputWrapper>
            <Label>商品分類</Label>
            <Select name="itemType">
                <option selected disabled></option>
                <option value="3c">電子產品</option>
                <option value="viehicle">汽機車</option>
                <option value="instrument">樂器/樂器周邊</option>
                <option value="electronic">家電</option>
                <option value="furniture">家具</option>
                <option value="luxury">時尚精品</option>
            </Select>
            </InputWrapper>
            
            <InputWrapper>
            <Label>所在縣市、區(鄉,鎮)</Label>
            <TextInput type="text" placeholder="例: 台北市中正區/台東縣池上鄉" name="city"></TextInput>
            </InputWrapper>

            <div >
            <InputWrapper style={{display:"inline-block"}}>
            <Label>自認價值</Label>
            <PriceInput type="number" placeholder="例: NT$ 10,000" name="price" min={1} data-type="currency" ></PriceInput>
            </InputWrapper>

            <InputWrapper style={{display:"inline-block"}}>
            <Label>租借價格</Label>
            <PriceInput type="number" placeholder="例: NT$ 10,000" name="price" min={1} data-type="currency" ></PriceInput>
            </InputWrapper>

            </div>



            <InputWrapper>
            <Label>租借月份</Label>
            <TextInput type="number" name="price" min={1}></TextInput>
            </InputWrapper>

            

            </Column>


            <Column style={{marginLeft:"155px"}}> {/*  this is the right -> column */}

            <InputWrapper>
            <Label>商品簡述</Label>
            <TextInput type="text" placeholder="物品的簡單描述與使用狀況" maxLength={60} name="discription"></TextInput>
            </InputWrapper>

            {/* <div style={{display: "flex" , alignItems:"center", flexDirection:"column", justifyContent:"flex-start"}}> */}

            <InputWrapper style={{display: "flex"}}>
            <Label style={{marginBottom:"27px"}}>商品照片</Label>

            <FileInputField>
            <p >將圖片拖曳到這裡,&nbsp;&nbsp;&nbsp;或&nbsp;</p>
            <ChooseFileText>選擇檔案</ChooseFileText>
            {/* <FileInput type="file" accept=".jpg, .png" multiple name="photos" onLoad={uploadHandler} onDrag={uploadHandler} onDrop={uploadHandler}></FileInput> */}
            <Uploader></Uploader>
            </FileInputField>
            
            
            </InputWrapper>

            <SubmitButton type="submit">立即上架</SubmitButton>

            {/* </div> */}

            </Column>
            </FormContainer>
          </form>
        
          
        </>
    );
};

export default SellerUpload