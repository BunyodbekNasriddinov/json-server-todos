import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:8080/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 200) {
          setToken(data.data.accessToken);
          setUser(data.data.user);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-50 my-5 mx-auto shadow p-5">
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <input
          className="form-control mb-3"
          defaultValue="arch@gmail.com"
          ref={emailRef}
          placeholder="Email"
          type="email"
        />
        <input
          className="form-control mb-3"
          ref={passwordRef}
          placeholder="Password"
          type="password"
        />
        <button className="btn btn-primary" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};
