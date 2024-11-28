import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Container disableGutters maxWidth="xl" className=" h-screen py-2">
      <SignUp />
    </Container>
  );
}
