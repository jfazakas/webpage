import { useHistory } from "react-router-dom";

export const PasswordResetFail = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Oh ...</h1>
      <p>Something wrong with the password reset!</p>
      <button onClick={() => history.push("/login")}>Log In</button>
    </div>
  );
};
