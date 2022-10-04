import { Box } from "@mui/material";
import { CountryInput } from "./components/CountryInput";
import { InfoCards } from "./components/InfoCards";
import { InfoGrap } from "./components/InfoGrap";

function App() {
  return (
    <Box sx={{ flexGrow: 1, padding: "10px", paddingBottom: '50px', background: '#e3e3e3' }}>
      <InfoCards></InfoCards>
      <CountryInput></CountryInput>
      <InfoGrap></InfoGrap>
    </Box>
  );
}

export default App;
