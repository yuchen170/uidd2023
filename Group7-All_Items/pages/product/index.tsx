import type { FC } from "react";
import Image from "next/image";
import { Data } from "@/data";
import ProductInfo from "@/components/ProductInfo";
import { Section } from "@/components/atoms/Section/style";
import { H1 } from "@/components/atoms/h1/style";
import rent_button from "@/public/about/轉出素材-13.2.png";
import product_image from "@/public/about/轉出素材-12.png";
const product_image2 = require('@/public/about/轉出素材-12.png').default;
import { useSpring, animated } from "@react-spring/web";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
    WrapperImage,
    Wrapper,
    WrapperText

} from "./style";

import { useRouter } from 'next/router'

export default function Items(props) {
    const { query } = useRouter();
  
    return (
        <p>{query.name}</p>
    );
  }
const n = 1;

function DisplayInfo({n, name}) {
    const item = Data.find((item) => item.id === n);
    return (
        <ProductInfo item={item} name = {name}/> 
    );
}


export function Page() {
    const router = useRouter()
   

    return (
        <div style={{ display: "inline-flex", marginTop:"2vw", marginLeft:"3.5vw", marginBottom:"1vw"}}>
            <h1 onClick={() => router.back()} style={{color: "black", fontSize: "18px",}}>
                二手車&nbsp; 
            </h1>
            <IoIosArrowForward style={{fontSize: "20px",}}/>
            <DisplayInfo n={n} name = {true}/>
        </div>

  )
}

export const ProductPage: FC = () => {
    
    
    

    



const item = Data.find(item => item.id === n);
const defaultImage = { src: '/logo.png' };
const images = item && item.img
  ? item.img.map(image => ({ src: image }))
  : [defaultImage];


    return (
        <>
            <Section id="section-main">
                <Page />

               
                    <Wrapper >
                        <WrapperImage>
                            <div style={{width: "47vw", marginLeft:"3vw", marginRight:"0vw", textAlign:"center"}}>
                                
                                <Carousel 
                                showArrows={false}
                                showIndicators={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                swipeable={true}
                                thumbWidth={110}
                                
                                renderThumbs = {() => (
                                    images.map((image, index) => (
                                        
                                            <Image 
                                            
                                            key={index}
                                            src={image.src}
                                            alt="piece"
                                            width="340px" 
                                            height="200px"
                                        />

                                        
                                        )))}>
                                {images.map((image, index) => (
                                <div key={index} style={{width:"40vw",height:"20vw"}}>
                                <Image src= {image.src} alt="carousel-slide"  layout="fill" objectFit="contain" style={{position:"relative",}} />
                                </div>
                                ))}

                                </Carousel>

                            </div>
                           
                        </WrapperImage>
                        <WrapperText>
                        <h1 style={{position: "relative", bottom: "35px", width: "50vw", display:"flex", justifyContent: "center", fontSize: "1.4vw", fontWeight: "400" }}>
                        The Audi R8 Coupé<br></br>
                        V10 performance quattro<br></br>
                        為賽道而生<br></br>
                        The Audi R8 Coupé V10 performance 不僅擁有獨特性格，<br></br>
                        更有不負 R8 盛名的絕佳駕馭表現和震撼人心的設計與品質。<br></br><br></br>

                        引擎動力提升至 620 hp 馬力，搭配 quattro 全時四輪傳動系統，<br></br>
                        0-100km/h 僅 3.1 秒，讓每一次駕馭都能熱血沸騰、盡其在我。<br></br>
                        </h1>
                        <div style={{ position:"relative", width:"24vw", left:"-8vw"}}>
                        <Link href="/">
                        <Image src={rent_button} />
                        </Link>
                        </div>
                        </WrapperText>
                    </Wrapper>
                 
            </Section>
            
            

            <div
                    style={{
                        backgroundColor: "#265590",
                        width: "100%",
                        height: "150px",
                        position: "relative",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "0px",
                    }}
                >
                    
                        <DisplayInfo n= {n} name = {false}/>   
                    
                </div>

        </>
    );
};