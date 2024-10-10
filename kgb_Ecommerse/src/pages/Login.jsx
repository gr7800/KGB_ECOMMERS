import React, { useState } from "react";
import { doSignInWithEmailIdAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // for schema validation
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/authSlice";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmailValid, setIsEmailValid] = useState("")

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setIsEmailValid("")
        let user = await doSignInWithEmailIdAndPassword(
          values.email,
          values.password
        );

        dispatch(signIn(user?._tokenResponse.idToken || ""))
      } catch (err) {
        switch (err.code) {
          case "auth/user-not-found":
            setErrors({
              email: "No user found with this email. Please sign up.",
            });
            break;
          case "auth/wrong-password":
            setErrors({ password: "Incorrect password. Please try again." });
            break;
          case "auth/invalid-email":
            setErrors({ email: "Invalid email address" });
            break;
          case "auth/user-disabled":
            setErrors({
              email: "This account has been disabled. Please contact support.",
            });
            break;
          case "auth/invalid-credential":
            setErrors({
              email: "Invalid credentials.",
              password: "Invalid credentials."
            });
            break;
          default:
            setErrors({ email: "An error occurred: " + err.message });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  async function handleForgotPassword() {
    if (validateEmail(formik.values.email)) {
      await sendPasswordResetEmail(auth, formik.values.email);
    }
    else{
      setIsEmailValid("Invalid email address")
    }
  }

  return (
    <div className="font-sans text-[#fa7fab] antialiased bg-[#fae9e6] min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div>
        <h2 className="font-bold text-[#ff006c] text-3xl">
          <span className="bg-[#ff006c] text-white px-2 rounded-md">KGB</span>{" "}
          Ecommerce
        </h2>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="py-8 text-center">
            <span className="text-2xl font-semibold text-[#ff006c]">
              Log In
            </span>
          </div>

          <div>
            <label
              className="block font-medium text-sm text-[#fa7fab]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] focus:ring-2 focus:ring-[#ff006c] transition duration-200"
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
            {
              isEmailValid && <div style={{ color: 'red' }}>{isEmailValid}</div>
            }
          </div>

          <div className="mt-4">
            <label
              className="block font-medium text-sm text-[#fa7fab]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525] focus:ring-2 focus:ring-[#ff006c] transition duration-200"
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>
          </div>

          <div className="w-[100%] m-auto flex justify-center mt-4">
            <button
              type="submit"
              className="p-4 text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#ff006c]"
            >
              SIGN IN
            </button>
          </div>
        </form>
        <div className="flex justify-between align-middle mt-2">

          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w mb-3">
            don't have an account?
            <span
              onClick={() => navigate("/register")}
              className="pl-2 cursor-pointer font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Signup
            </span>{" "}
          </p>
          {formik.values.email && <span
            onClick={() => handleForgotPassword()}
            className="pl-2 mt-2 cursor-pointer text-sm font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Forgot Password?
          </span>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
