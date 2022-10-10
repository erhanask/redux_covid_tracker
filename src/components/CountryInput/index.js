import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeCountry } from "../../redux/InfoSlice";
import { countries } from "../helpers/countries";

export const CountryInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeCountry(event.target.value))
  }

  return (
    <Box sx={{textAlign:'center'}}>
    <FormControl sx={{margin:"15px auto"}}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Choose Country
      </InputLabel>
      <NativeSelect
        inputProps={{
          name: "country",
          id: "uncontrolled-native",
        }}
        onChange={handleChange}
      >
        {countries.map((country)=> {
            return <option key={country.name} value={country.iso3}>{country.name}</option>
        })}
      </NativeSelect>
    </FormControl>
    </Box>
  );
};
