import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";

export const CountryInput = () => {
  return (
    <Box sx={{textAlign:'center'}}>
    <FormControl sx={{margin:"5px auto"}}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Country
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </FormControl>
    </Box>
  );
};
