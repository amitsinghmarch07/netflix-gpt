import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidationEmailPassword } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let validatationInfo = checkValidationEmailPassword(
      email.current.value,
      password.current.value
    );
    if (validatationInfo) {
      setErrorMessage(validatationInfo);
    } else {
      isSignInForm ? handleSignIn() : handleSignUp();
    }
  };

  const handleSignIn = () => {
    console.log("signin");
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignUp = () => {
    console.log("sign up");
    const authentication = getAuth();
    createUserWithEmailAndPassword(
      authentication,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} + ${errorMessage}`);
        // ..
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg
"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="bg-red-500 p-2 my-4 w-full"
          onClick={handleButtonClick}
        >
          Login
        </button>
        <p className="py-4" onClick={toggleSingInForm}>
          {isSignInForm
            ? "Are you new to netflix? Sign Up Now"
            : "Already a user? LoggIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
