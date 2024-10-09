import React, { useState } from "react";
import { doSignInWithEmailIdAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // for schema validation

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let user = await doSignInWithEmailIdAndPassword(email, password);
      localStorage.setItem("token", user?._tokenResponse.idToken);
      navigate("/");
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          console.log("No user found with this email. Please sign up first.");
          break;
        case "auth/wrong-password":
          console.log("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          console.log(
            "The email address is invalid. Please enter a valid email."
          );
          break;
        case "auth/user-disabled":
          console.log(
            "This account has been disabled. Please contact support."
          );
          break;
        default:
          console.log("An error occurred: ", err.message);
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        let user = await doSignInWithEmailIdAndPassword(
          values.email,
          values.password
        );
        localStorage.setItem("token", user?._tokenResponse.idToken);
        navigate("/");
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
              password:"Invalid credentials."
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

          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="p-4 text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#ff006c]"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
