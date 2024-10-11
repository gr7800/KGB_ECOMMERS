import { doc, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup"; // for schema validation
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { userData } from "../redux/slices/authSlice";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingScreen from "../component/LoadingScreen";


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .min(6, "Please write a proper subject")
    .required("Subject is required"),
  message: Yup.string()
    .min(20, "Message is too short")
    .required("Message is required"),
});

const ContactUs = () => { 
  const [loading,setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const decodedToken = jwtDecode(token);
        await setDoc(doc(db, "feedback", Date.now().toString()), {
          uid: decodedToken.user_id,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        });

        toast("Feedback submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.code) {
          let errorMessage = ""
          switch (err.code) {
            case "permission-denied":
                errorMessage= "An error occurred while submitting your feedback. Please try again."
            
              break;
            case "unavailable":
              errorMessage= "An error occurred while submitting your feedback. Please try again."
             
              break;
            default:
              errorMessage= "An error occurred while submitting your feedback. Please try again."
  
          }
          if (errorMessage) {
            toast(errorMessage, {
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
        } else {
          toast("An error occurred while submitting your feedback. Please try again.", {
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
      }
    },
  });

  useEffect(() => {
    dispatch(userData(token));
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-light-pink-1 font-[sans-serif] lg:h-screen">
      <ToastContainer />
      <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
        <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Have a specific inquiry? Our experienced team is ready to engage
            with you.
          </p>

          <form
            onSubmit={contactForm.handleSubmit}
            className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={contactForm.handleChange}
                value={contactForm.values.name}
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              {contactForm.errors.name && contactForm.touched.name && (
                <p className="text-red-600 text-sm">
                  {contactForm.errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={contactForm.handleChange}
                value={contactForm.values.email}
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              {contactForm.errors.email && contactForm.touched.email && (
                <p className="text-red-600 text-sm">
                  {contactForm.errors.email}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={contactForm.handleChange}
                value={contactForm.values.subject}
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              {contactForm.errors.subject && contactForm.touched.subject && (
                <p className="text-red-600 text-sm">
                  {contactForm.errors.subject}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                onChange={contactForm.handleChange}
                value={contactForm.values.message}
                rows="6"
                className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
              ></textarea>
              {contactForm.errors.message && contactForm.touched.message && (
                <p className="text-red-600 text-sm">
                  {contactForm.errors.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-500 dark:focus:ring-rose-500 bg-[#ff006c]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="z-10 relative lg:col-span-2">
          <img
            src="https://readymadeui.com/images/analtsis.webp"
            alt="Contact Us"
            className="w-3/4 object-contain block mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
