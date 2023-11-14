import { CartContext, CartProduct } from "@/util/cart";
import Image from "next/image";
import { useContext } from "react";
import {
  Button,
  ButtonsContainer,
  Container,
  DeleteButton,
  DetailsContainer,
  ImageContainer,
  PriceContainer,
  ProductName,
  Separator,
} from "./styles";

interface CartItemProps {
  product: CartProduct;
}

export default function CartItem({ product }: CartItemProps) {
  const {
    decreaseProductFromCart,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  return (
    <Container>
      <ImageContainer>
        <Image
          src={product.photo}
          width={0}
          height={0}
          sizes="100vw"
          alt={product.name}
        />
      </ImageContainer>

      <DetailsContainer>
        <ProductName>{product.name}</ProductName>

        <PriceContainer>
          <ButtonsContainer>
            <p>Qtd:</p>
            <div>
              <Button onClick={() => decreaseProductFromCart(product)}>
                <span>-</span>
              </Button>

              <Separator />

              <span className="text-xs">{product.quantity}</span>

              <Separator />

              <Button onClick={() => increaseProductQuantity(product)}>
                <span>+</span>
              </Button>
            </div>
          </ButtonsContainer>

          <div>
            <p>R${+product.price * product.quantity}</p>
          </div>
        </PriceContainer>
      </DetailsContainer>

      <DeleteButton onClick={() => removeProductFromCart(product)}>
        <span>X</span>
      </DeleteButton>
    </Container>
  );
}
