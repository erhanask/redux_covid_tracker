import { Container } from "@mui/system";
import { useSelector } from "react-redux";

export const CountryHeader = () => {
    const country = useSelector(state => state.info.country);

  return (
    <Container>
      <h1>Covid Stats Of {country}</h1>
    </Container>
  );
};
