import SkeletonCard from "../skeletonCard";
import { Container, GridContainer } from "./styles";

export default function Loading() {
  return (
    <Container>
      <GridContainer>
        {Array.from({ length: 8 }, (_, index) => index + 1).map((i) => (
          <SkeletonCard key={i}/>
        ))}
      </GridContainer>
    </Container>
  );
}
