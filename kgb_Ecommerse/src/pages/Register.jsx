import React from "react";
import { doCreateUserWithEmailIdAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/slices/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        dispatch(signUp({ userCredentials, values }));
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setErrors({
            email: "This email is already registered. Please try logging in.",
          });
        } else {
          toast('Something went wrong. Please try again later.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light", 
            });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#fae9e6] flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#ff006c]">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Or{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition duration-150"
          >
            login to your account
          </span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md overflow-hidden rounded-md shadow-pink-900 sm:px-10">
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#fa7fab]"
              >
                Name
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff006c] transition duration-150 ease-in-out sm:text-sm"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div className="mt-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-[#fa7fab]"
              >
                Username
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.username}
                id="username"
                name="username"
                placeholder="exampleuser"
                type="text"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff006c] transition duration-150 ease-in-out sm:text-sm"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#fa7fab]"
              >
                Email address
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                name="email"
                placeholder="user@example.com"
                type="email"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff006c] transition duration-150 ease-in-out sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#fa7fab]"
              >
                Password
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff006c] transition duration-150 ease-in-out sm:text-sm"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="mt-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#fa7fab]"
              >
                Confirm Password
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff006c] transition duration-150 ease-in-out sm:text-sm"
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <span
                  onClick={() => navigate("/login")}
                  className="pl-2 cursor-pointer font-medium text-rose-500 hover:text-rose-600 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Sign In
                </span>
              </p>
              <button
                type="submit"
                className="w-full mt-4 text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm py-2.5 bg-[#ff006c] transition duration-200"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
