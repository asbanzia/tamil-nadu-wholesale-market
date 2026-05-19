import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

import app from "../firebase";

function Login() {

  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

    } catch (error) {

      alert(error.message);

    }

  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto mt-10">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Supplier Login
      </h2>

      <input
        type="email"
        placeholder="Enter Email"
        className="w-full p-3 border rounded-lg mb-4"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="w-full p-3 border rounded-lg mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={loginUser}
        className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700"
      >
        Login
      </button>

    </div>
  );
}

export default Login;