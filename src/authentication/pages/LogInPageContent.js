import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "./auth/useToken";
import { useQueryParams } from "../util/useQueryParams";
import axios from "axios";
import GoogleButton from "react-google-button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ariaLabel = { "aria-label": "description" };

const LogInPageContent = () => {
  const [, setToken] = useToken();
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [googleOAuthUrl, setGoogleOAuthUrl] = useState("");
  const { token: oAuthToken } = useQueryParams();

  const navigate = useNavigate();

  const onEmailValueChange = (event) => {
    const value = event.target.value;

    setEmailValue(value);

    if (!value || value.indexOf("@") < 1) {
      setHasEmailError(true);
    } else {
      setHasEmailError(false);
    }
  };

  const onPasswordValueChange = (event) => {
    const value = event.target.value;

    setPasswordValue(value);

    if (value.length < 3) {
      setHasPasswordError(true);
    } else {
      setHasPasswordError(false);
    }
  };

  const onLogInClicked = () => {};
  const onForgotPasswordInClicked = () => {};

  //   useEffect(() => {
  //     if (oAuthToken) {
  //       setToken(oAuthToken);
  //       navigate.push("/");
  //     }
  //   }, [oAuthToken, setToken, navigate]);

  //   useEffect(() => {
  //     const loadOAuthUrl = async () => {
  //       try {
  //         const response = await axios.get("/auth/google/url");
  //         const { url } = response.data;
  //         setGoogleOAuthUrl(url);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     loadOAuthUrl();
  //   }, []);

  //   const onLogInClicked = async () => {
  //     try {
  //       const response = await axios.post("/api/login", {
  //         email: emailValue,
  //         password: passwordValue,
  //       });

  //       const { token, message } = response.data;

  //       setToken(token);

  //       if (message && message.length) {
  //         setErrorMessage(message);
  //       }

  //       navigate.push("/");
  //     } catch (e) {
  //       setErrorMessage(e.message);
  //     }
  //   };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        // className="login-content-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="login-field-wrap">
          <Input
            value={emailValue}
            onChange={onEmailValueChange}
            placeholder="someEmai@email.com"
            inputProps={ariaLabel}
            error={hasEmailError}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
        <div className="login-field-wrap">
          <Input
            value={passwordValue}
            onChange={onPasswordValueChange}
            placeholder="somePassword"
            inputProps={ariaLabel}
            error={hasPasswordError}
          />
        </div>
        <div className="login-field-wrap">
          <Stack spacing={2} direction="column">
            <Button
              variant="outlined"
              disabled={
                hasEmailError ||
                hasPasswordError ||
                !emailValue ||
                !passwordValue
              }
              onClick={onLogInClicked}
              className="login-button"
            >
              Log In
            </Button>
            <Button
              variant="outlined"
              onClick={onForgotPasswordInClicked}
              className="login-button"
            >
              Forgot password
            </Button>
          </Stack>
        </div>
        <div className="google-button-container">
          <GoogleButton
            type="light"
            // disabled={!googleOAuthUrl}
            disabled
            onClick={() => {
              window.location.href = googleOAuthUrl;
            }}
          >
            Log in with Google
          </GoogleButton>
        </div>
      </Box>
    </>
  );
};

export default LogInPageContent;
