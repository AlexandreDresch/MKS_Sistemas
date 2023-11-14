import { CartContext } from "@/util/cart";
import { Dispatch, SetStateAction, useContext } from "react";
import {
  Container,
  InnerContainer,
  HeaderContainer,
  ContentContainer,
  FooterContainer,
} from "./styles";
import CartItem from "../cartItem";

interface SideBarProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setOpen }: SideBarProps) {
  const { products, total } = useContext(CartContext);
  function handleCloseSidebar() {
    setOpen(false);
  }
  return (
    <Container sidebar={isOpen}>
      <InnerContainer>
        <HeaderContainer>
          <div>
            <span>Carrinho</span>
            <span>de compras</span>
          </div>

          <button onClick={handleCloseSidebar}>X</button>
        </HeaderContainer>

        <ContentContainer>
          {products.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            products.map((product) => (
              <CartItem product={product} key={product.id}/>
            ))
          )}
        </ContentContainer>
      </InnerContainer>
      <FooterContainer>
        <div>
          <p>Total:</p>
          <p>R${total}</p>
        </div>

        <button>
          <span>Finalizar Compra</span>
        </button>
      </FooterContainer>
    </Container>
  );
}
