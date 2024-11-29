import { Box, Checkbox, Typography } from "@mui/material";
import InputField from "../components/InputField";
import PrimaryBtn from "../components/PrimaryBtn";
import Header from "../components/Header";

const details: Array<string> = ["name", "email", "phone number", "password"];
export default function SignUp() {
  return (
    <Box className="flex lg:justify-between justify-center min-h-[90vh] py-10 lg:p-0   gap-16">
      <Box className=" w-2/4  hidden lg:flex lg:justify-end">
        <img
          src="/img/signup.png"
          alt="signup-img"
          className="h-full w-5/6 object-cover"
        />
      </Box>
      <Box className="lg:w-2/4 w-full flex justify-center lg:items-start items-center  lg:pl-10 flex-col gap-6">
        <Header text="sign up" />
        {details.map((item) => (
          <InputField key={item}>{item}</InputField>
        ))}
        <Box className="w-3/4 lg:w-2/4  space-y-5 ">
          <Box className="flex gap-2">
            <Checkbox
              size="medium"
              sx={{
                "& .MuiCheckbox-root": {
                  bgcolor: "rgba(245, 249, 254, 1)",
                },
              }}
            />
            <Typography className="capitalize  !text-sm text-textBlack !font-medium">
              i agree to the{" "}
              <span className="text-textColorSecond"> terms of service</span>{" "}
              and <span className="text-textColorSecond"> privacy policy</span>
            </Typography>
          </Box>
          <PrimaryBtn>create account</PrimaryBtn>
          <Typography
            variant="body1"
            component="p"
            className="capitalize !text-center !text-base text-textBlack !font-medium"
          >
            do you have an account?{" "}
            <span className="text-textColorSecond">sign in</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
