import { Button } from "@mui/material";

interface Properties {
  children: string;
}
function PrimaryBtn(prop: Properties) {
  const { children } = prop;
  return (
    <Button
      variant="contained"
      className="!bg-primary w-full !p-4 !text-lg !capitalize !rounded-2xl !shadow-lg hover:!shadow-2xl transition-all !duration-200"
    >
      {children}
    </Button>
  );
}

export default PrimaryBtn;
