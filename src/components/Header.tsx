import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
}

export default function Header(prop: Props) {
  return (
    <Box className="lg:w-2/4 flex flex-col items-center space-y-3">
      <Box className="bg-secondary rounded-3xl p-4">
        <img src="/img/clap.png" alt="clap" />
      </Box>
      <Typography
        variant="h2"
        component="h1"
        className="text-primary capitalize !font-medium"
      >
        {prop.text}
      </Typography>
    </Box>
  );
}
