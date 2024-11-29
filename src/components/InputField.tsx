import { Box, TextField } from "@mui/material";

interface Properties {
  children: string;
}

function InputField(prop: Properties) {
  const { children } = prop;
  return (
    <Box className="lg:w-2/4 w-3/4 !rounded-5xl !capitalize ">
      <Box></Box>
      <TextField
        label={`${children}`}
        variant="outlined"
        className="w-full"
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "rgba(245, 249, 254, 1)",
            borderRadius: 4,
            border: "hidden",
          },
          "& .MuiInputLabel-root": {
            color: "rgba(124, 139, 160, 1)",
            fontSize: 17,
            outline: "none",
          },
          "& fieldset": {
            border: "none",
          },
        }}
      />
    </Box>
  );
}

export default InputField;
