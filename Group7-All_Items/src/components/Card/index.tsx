import React, { useState } from "react";
import Image from "next/image";
import { Link, useParams } from "react-router-dom";
import { BottomWrap, CardContainer, ImageContainer, InformationWrap, ItemTitle, Line, Owner, Text, TextWrap, TopContainer, TopWrap } from "./style";
const Card = ({ item }) => {


    return (
        <>
        <a href = '/1' style={{ textDecoration: "none" }}>
            <CardContainer>
                <TopContainer>
                    <TopWrap>
                        <TextWrap>
                            <ItemTitle>{item.name}</ItemTitle>
                            <Owner>{item.owner}</Owner>
                        </TextWrap>
                        <ImageContainer>
                            <Image src={item.img[0]} alt="" layout="fill" objectFit="cover" style={{ borderRadius: "10%" }} />
                        </ImageContainer>
                    </TopWrap>
                </TopContainer>
                <BottomWrap>
                    <Text>了解更多</Text>
                    <Line></Line>
                    <InformationWrap>
                        <Text style={{ alignSelf: "flex-end" }}>{item.city}</Text>
                        <Text style={{ alignSelf: "flex-end" }}>租借價格 ${item.price} /月</Text>
                    </InformationWrap>
                </BottomWrap>
            </CardContainer>
            </a>
        </>
    )
}

export default Card