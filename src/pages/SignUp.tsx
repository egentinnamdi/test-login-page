import { Box } from "@mui/material";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";

const details: Array<string> = ["name", "email", "phone number", "password"];
export default function SignUp() {
  return (
    <Box className="lg:flex justify-between h-full gap-10">
      <Box className=" w-2/4  ">
        <img
          src="/img/bg-img.png"
          alt="bg-img"
          className="h-full w-full object-cover"
        />
      </Box>
      <Box className="w-2/4 flex justify-center items-center flex-col gap-10">
        {details.map((item) => (
          <InputField key={item}>{item}</InputField>
        ))}
        <PrimaryBtn>create account</PrimaryBtn>
      </Box>
    </Box>
  );
}
