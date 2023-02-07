import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email required!!!"),
    password: Yup.string()
      .required("Password required!!!")
      .min(3, "Password must be long 3 characters")
      .max(12, "Password must be last 12 characters"),
  });

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:8080/login", values)
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
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
          />
          <span className="d-block text-danger fw-bold mb-1">
            {<ErrorMessage name="email" />}
          </span>
          <Field
            className="form-control mt-3"
            placeholder="Password"
            type="password"
            name="password"
          />
          <span className="d-block text-danger fw-bold mb-1">
            {<ErrorMessage name="password" />}
          </span>
          <button className="btn btn-primary mt-3" type="submit">
            SEND
          </button>
        </Form>
      </Formik>
    </div>
  );
};
