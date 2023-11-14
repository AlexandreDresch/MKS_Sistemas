"use client";

import { useQuery } from "@tanstack/react-query";

import { Container, GridContainer } from "./styles";

import ProductCard from "@/components/productCard";
import Error from "@/components/error";
import Loading from "@/components/loading";

import { Product } from "@/types/product";

import { getProductsData } from "@/lib/getProductsData";

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsData,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container>
      <GridContainer>
        {data.products.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            description={product.description}
            photo={product.photo}
            price={product.price}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          />
        ))}
      </GridContainer>
    </Container>
  );
}
