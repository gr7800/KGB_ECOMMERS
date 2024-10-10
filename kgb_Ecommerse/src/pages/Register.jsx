import React, { useEffect, useState } from "react";
import { doCreateUserWithEmailIdAndPassword } from "../firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/slices/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const userCredentials = await doCreateUserWithEmailIdAndPassword(
          values.email,
          values.password
        );

        dispatch(signUp({userCredentials,values}));
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setErrors({
            email: "This email is already registered. Please try logging in.",
          });
        } else {
          alert("Something went wrong. Please try again later.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-light-pink-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-[#ff006c]">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or{" "}
          <span className="font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition ease-in-out duration-150">
            login to your account
          </span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={formik.handleSubmit} action="#">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-5  text-[#fa7fab]"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: "red" }}>{formik.errors.name}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                for="username"
                className="block text-sm font-medium leading-5 text-[#fa7fab]"
              >
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  id="text"
                  name="username"
                  placeholder="exampleuser"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div style={{ color: "red" }}>{formik.errors.username}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                for="email"
                className="block text-sm font-medium leading-5 text-[#fa7fab]"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                for="password"
                className="block text-sm font-medium leading-5 text-[#fa7fab]"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <label
                for="password_confirmation"
                className="block text-sm font-medium leading-5 text-[#fa7fab]"
              >
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w mb-3">
                Already have an account?
                <span
                  onClick={() => navigate("/login")}
                  className="pl-2 cursor-pointer font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  SignIn
                </span>{" "}
              </p>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-500 dark:focus:ring-rose-500 bg-[#ff006c]"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
