import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

function Signup() {

  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {
    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Supplier Account Created");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Supplier Signup
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
        onClick={signupUser}
        className="bg-blue-700 text-white w-full py-3 rounded-lg hover:bg-blue-800"
      >
        Create Account
      </button>

    </div>
  );
}

export default Signup;