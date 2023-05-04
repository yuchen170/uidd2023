import React from "react";

import { FilePreviewContainer, PerviewImage, PerviewBolck, ClosePreviewButton  } from "./style";
import { FileInput } from "./style";
import { useEffect, useState } from "react";
import _ from "lodash"
import { url } from "inspector";



export default function Uploader (){

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(()=>{
        if(images.length<1 ) return;
        else if(images.length<7){
        const newImageUrls = []
        images.forEach(image=> newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
        console.log({imageURLs})
        }else{
            alert("最多上傳6張照片！");
        }

    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files])
        console.log({images});
    }

    function onClickDelete(file){
        
        // this.setState((prev) =>{
        //     let loadedFiles= prev.loadedFiles;
        //     let newLoadFiles= _.filter(loadedFiles, (ldFile)=>{
        //         return ldFile!=file;
        //     })
        //     return {loadedFiles : newLoadFiles}
        // })
        console.log("Delete image");
        console.log({images});
        
    }
;
    return(      
        <>
        <FileInput type="file" multiple accept="image/*" onChange={onImageChange}></FileInput>
        <FilePreviewContainer>{imageURLs.map((imageSrc, idx) => 
             <PerviewBolck>     
                <ClosePreviewButton type="button" onClick={()=>onClickDelete(imageSrc)} > 
                    <img src="cross.png" style={{width: "30px"}}></img>
                </ClosePreviewButton>          
                <PerviewImage src={imageSrc} key={idx}></PerviewImage> 


             </PerviewBolck> )}
        </FilePreviewContainer>
        
        </>   
    );

}