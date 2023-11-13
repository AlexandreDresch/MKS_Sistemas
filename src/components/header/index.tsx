"use client";

import Image from "next/image";
import { Button, Container, StyledLink, Title } from "./styles";

export default function Header() {
  return (
    <Container>
      <StyledLink href={"/"}>
        <Title>
          MKS <span>Sistemas</span>
        </Title>
      </StyledLink>

      <Button>
        <Image
          src="./cart.svg"
          alt="cart icon"
          width={0}
          height={0}
          sizes="100vw"
        />
        <span>0</span>
      </Button>
    </Container>
  );
}
