import React, { useState } from "react";
import { auth } from "../auth"; // Imported the firebase.js file you created in your src folder
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import React Toastify components and functions
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for React Toastify

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("");
        setButtonLoader(false);
        toast.success("Login successful!", {
          autoClose: 2000,
          onClose: () => {
            navigate("/gallery");
          },
        });
      })
      .catch(() => {
        setPassword("");
        setButtonLoader(false);
        toast.error("Wrong email or password", {
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="login-container">
      <ToastContainer /> {/* Add the ToastContainer component */}
      <div className="w-2/5 mt-10 mx-auto py-8 rounded-lg border-2 border-slate-300 drop-shadow-2xl">
        <form className="form pl-4" onSubmit={handleSubmit}>
          <h1 className="text-5xl text-center font-black">
            Drag<span className="logo-span bg-white rounded-md">Drop</span>
          </h1>
          <br />
          <h3 className="text-center text-3xl mt-3 font-bold">Welcome!</h3>

          <br />
          <label className="text-lg font-bold">
            Email
            <input
              placeholder="Please enter an email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <label className="text-lg font-bold">
            Password
            <input
              placeholder="Enter a password"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <br />
          <div className="button-container">
            {buttonLoader ? (
              <div className="spinner"></div>
            ) : (
              <button
                type="submit"
                className="button rounded-lg hover:bg-white hover:font-bold hover:text-blue-600 w-1/2 mx-36 font-bold text-lg py-3 bg-blue-500"
              >
                Log In
              </button>
            )}
          </div>
          <br />
          <br />
          <br />
          <span className="form-span font-bold flex items-center">
            Don't have an account? &nbsp;
            <Link to="/signup" className="font-bold text-lg text-blue-700">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Form;
