"use client";

import Image from "next/image";
import { Container, GridContainer } from "./styles";
import ProductCard from "@/components/productCard";
import { Product } from "@/types/product";

export default function Home() {
  return (
    <Container>
      <GridContainer>
        {Array.from({ length: 8 }, (_, index) => index + 1).map((i) => (
          <ProductCard
            key={i}
            id={8}
            name="Headset Cloud Stinger"
            brand="HyperX"
            description="O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade."
            photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
            price="600.00"
            createdAt="2023-10-30T16:25:01.093Z"
            updatedAt="2023-10-30T16:25:01.093Z"
          />
        ))}
      </GridContainer>
    </Container>
  );
}
