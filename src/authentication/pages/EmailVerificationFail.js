import { useHistory } from "react-router-dom";

export const EmailVerificationFail = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Oh ...</h1>
      <p>Something wrong with email verification code!</p>
      <button onClick={() => history.push("/")}>Home</button>
    </div>
  );
};
