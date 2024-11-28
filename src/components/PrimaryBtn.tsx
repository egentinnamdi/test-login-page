import { Button } from "@mui/material";

interface Properties {
  children: string;
}
function PrimaryBtn(prop: Properties) {
  const { children } = prop;
  return (
    <Button
      variant="contained"
      className="!bg-primary w-2/4 !p-4 !text-lg !capitalize !rounded-2xl"
    >
      {children}
    </Button>
  );
}

export default PrimaryBtn;
