import { TextField } from "@mui/material";

interface Properties {
  children: string;
}

function InputField(prop: Properties) {
  const { children } = prop;
  return (
    <TextField
      label={`${children}`}
      variant="outlined"
      className="w-2/4 !rounded-5xl !capitalize !bg-secondary "
    />
  );
}

export default InputField;
