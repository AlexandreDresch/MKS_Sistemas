import { Container } from "./styles";

export default function Error() {
  function handleReload() {
    window.location.reload();
  }
  return (
    <Container>
      <p>Ocorreu um erro ao carregar a lista de produtos.</p>

      <button onClick={handleReload}>Recarregar Página</button>
    </Container>
  );
}
