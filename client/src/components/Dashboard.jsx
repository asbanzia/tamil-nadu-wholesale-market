import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

function Dashboard() {

  const auth = getAuth(app);

  const logoutUser = async () => {

    try {

      await signOut(auth);

      alert("Logout Successful");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="bg-white p-10 rounded-xl shadow-lg mt-10 text-center">

      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Supplier Dashboard
      </h1>

      <p className="text-gray-600 text-lg mb-6">
        Welcome to Tamil Nadu Wholesale Market
      </p>

      <button
        onClick={logoutUser}
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </div>

  );

}

export default Dashboard;