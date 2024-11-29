import { Box, TextField } from "@mui/material";
import { ReactNode } from "react";

interface Properties {
  children: string;
  icon?: ReactNode | string;
}

function InputField(prop: Properties) {
  const { children } = prop;
  return (
    <Box className="lg:w-2/4 w-3/4 !rounded-5xl !capitalize relative ">
      <Box className="inline-block absolute z-10 right-7 top-4">
        {prop.icon}
      </Box>
      <TextField
        label={`${children}`}
        variant="outlined"
        className="w-full"
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "rgba(245, 249, 254, 1)",
            borderRadius: 4,
          },
          "& .MuiInputLabel-root": {
            color: "rgba(124, 139, 160, 1)",
            fontSize: 17,
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
