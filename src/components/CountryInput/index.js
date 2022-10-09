import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { countries } from "../helpers/countries";

export const CountryInput = () => {
  return (
    <Box sx={{textAlign:'center'}}>
    <FormControl sx={{margin:"15px auto"}}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Choose Country
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "country",
          id: "uncontrolled-native",
        }}
      >
        {countries.map((country)=> {
            return <option key={country.code} value={country.name.replace(' ','_')}>{country.name}</option>
        })}
      </NativeSelect>
    </FormControl>
    </Box>
  );
};
