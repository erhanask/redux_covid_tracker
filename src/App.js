import { Box } from "@mui/material";
import { CountryInput } from "./components/CountryInput";
import { InfoCards } from "./components/InfoCards";
import { InfoGrap } from "./components/InfoGrap";

function App() {
  return (
    <Box sx={{ flexGrow: 1, padding: "10px", paddingBottom: '50px', background: 'linear-gradient(90deg, rgba(66,165,245,1) 15%, rgba(76,175,80,1) 40%, rgba(239,83,80,1) 67%, rgba(255,152,0,1) 90%)' }}>
      <InfoCards></InfoCards>
      <CountryInput></CountryInput>
      <InfoGrap></InfoGrap>
    </Box>
  );
}

export default App;
