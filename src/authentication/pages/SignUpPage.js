import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from './auth/useToken';

export const SignUpPage = () => {
    const [, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const history = useHistory();

  const onSignUpClicked = async () => {
    try {
      const response = await axios.post("/api/signup", {
        email: emailValue,
        password: passwordValue,
      });

      const { token, message } = response.data;

      if (message && message.length) {
        setErrorMessage(message);
      }

      setToken(token);
      history.push("/please-verify");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

    return (
      <div className="content-container">
        <h1>Sign Up</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder="someone@email.com"
        />
        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          placeholder="password"
        />
        <input
          value={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          type="password"
          placeholder="password"
        />
        <hr />
        <button
          disabled={
            !emailValue ||
            !passwordValue ||
            passwordValue !== confirmPasswordValue
          }
          onClick={onSignUpClicked}
        >
          Sign Up
        </button>
        <button onClick={() => history.push("/login")}>Log in</button>
      </div>
    );
}