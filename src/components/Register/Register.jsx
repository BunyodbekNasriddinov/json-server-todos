import axios from "axios";
import { useContext, useRef } from "react";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";

export const Register = () => {
  const firsNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);
  const nagigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        first_name: firsNameRef.current.value,
        last_name: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => {
        if (data.status === 201) {
          setToken(data.data.accessToken);
          setUser(data.data.user);
          nagigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-50 my-5 mx-auto shadow p-5">
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <input
          className="form-control mb-3"
          ref={firsNameRef}
          placeholder="Firs name"
          type="text"
        />
        <input
          className="form-control mb-3"
          ref={lastNameRef}
          placeholder="Last name"
          type="text"
        />
        <input
          className="form-control mb-3"
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
