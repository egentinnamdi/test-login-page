import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Container
      component="div"
      disableGutters
      maxWidth="xl"
      className=" min-!h-screen lg:h-screen py-2 flex flex-col justify-center"
    >
      <SignUp />
    </Container>
  );
}
