import { Container, DescriptionContainer, ImageContainer, NameValueContainer } from "./styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
  return (
    <Container>
      <SkeletonTheme baseColor="#F5F5F5" highlightColor="#e2e2e2">
        <ImageContainer>
          <Skeleton width={200} height={160} />
        </ImageContainer>

        <NameValueContainer>
          <Skeleton width={130} height={20} />
          <Skeleton width={40} height={20} />
        </NameValueContainer>

        <DescriptionContainer>
          <Skeleton count={3} height={10} />
        </DescriptionContainer>
      </SkeletonTheme>
    </Container>
  );
}
