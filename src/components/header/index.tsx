"use client";

import Image from "next/image";
import { Button, Container, StyledLink, Title } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "@/util/cart";
import Sidebar from "../sidebar";

export default function Header() {
  const { products } = useContext(CartContext);
  const cartQuantityItems = products.length;

  const [openSidebar, setOpenSidebar] = useState(false);

  function handleSidebarClick() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <Container>
      <StyledLink href={"/"}>
        <Title>
          MKS <span>Sistemas</span>
        </Title>
      </StyledLink>
      <Button onClick={handleSidebarClick}>
        <Image
          src="./cart.svg"
          alt="cart icon"
          width={0}
          height={0}
          sizes="100vw"
        />
        <span>{cartQuantityItems}</span>
      </Button>

      {openSidebar && <Sidebar isOpen={openSidebar} setOpen={setOpenSidebar} />}
    </Container>
  );
}
