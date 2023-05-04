import React from "react";
import Image from "next/image";

import { Text, Name1, Name2 } from "./style";
const ProductInfo = ({ item, name = false }) => {
    if (name) {
      return <Name1>{item.name}</Name1>;
    } else {
      return (
        <div style={{ position: "relative", display: "inline-flex" }}>
          <Name2>{item.name}</Name2>
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