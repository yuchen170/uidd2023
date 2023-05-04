import React from "react";
import Image from "next/image";

import { Text, Name } from "./style";
const ProductInfo = ({ item, name = false }) => {
    if (name) {
      return <Name>{item.name}</Name>;
    } else {
      return (
        <div style={{ position: "relative", display: "inline-flex" }}>
          <Name>{item.name}</Name>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>所在城市:&nbsp;{item.city}</Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>希望開價:&nbsp;${item.price}</Text>
          <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
          <Text>商品簡述</Text>
        </div>
      );
    }
  };
  

export default ProductInfo

//<ImageContainer>
//<Image src={item.img} layout="fill"/>
//</ImageContainer>