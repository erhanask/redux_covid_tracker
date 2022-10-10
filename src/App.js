import { Container } from "@mui/material";
import { CountryHeader } from "./components/CountryHeader";
import { CountryInput } from "./components/CountryInput";
import { InfoCards } from "./components/InfoCards";
import { InfoGrap } from "./components/InfoGrap";

function App() {
  return (
    <Container sx={{ flexGrow: 1, padding: "10px", paddingBottom: '50px', background: '#e3e3e3' }}>
      <CountryHeader></CountryHeader>
      <InfoCards></InfoCards>
      <CountryInput></CountryInput>
      <InfoGrap></InfoGrap>
    </Container>
  );
}

export default App;
