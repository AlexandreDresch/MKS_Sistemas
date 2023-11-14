"use client";

import { Product } from "@/types/product";
import {
  BadgeContainer,
  Button,
  Container,
  InnerContainer,
  ImageContainer,
  DescriptionContainer,
  NameValueContainer,
} from "./styles";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/util/cart";

export default function ProductCard(product: Product) {
  const { name, photo, price, description } = product;
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  function handleAddToCart() {
    addProductToCart({ ...product, quantity: quantity });
  }

  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <Image
            src={photo}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </ImageContainer>

        <NameValueContainer>
          <h1>{name}</h1>

          <BadgeContainer>
            <span>R${price}</span>
          </BadgeContainer>
        </NameValueContainer>

        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
      </InnerContainer>
      <Button onClick={handleAddToCart}>
        <Image
          src="./shopping-bag.svg"
          alt="Sacola de compras"
          width={0}
          height={0}
          sizes="100vw"
        />
        <span>COMPRAR</span>
      </Button>
    </Container>
  );
}
