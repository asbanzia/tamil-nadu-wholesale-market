import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {

  const categories = [
    "Grocery",
    "Hotel Supplies",
    "Mobile Accessories",
    "Electronics",
    "Textiles",
    "Industrial"
  ]

  const products = [
    {
      name: "Rice Bags",
      supplier: "ABC Traders",
      city: "Chennai"
    },
    {
      name: "Mobile Chargers",
      supplier: "Smart Electronics",
      city: "Coimbatore"
    },
    {
      name: "Hotel Chicken Supply",
      supplier: "Fresh Foods",
      city: "Vellore"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center shadow-lg">

        <h1 className="text-2xl font-bold">
          Tamil Nadu Wholesale Market
        </h1>

        <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Supplier Login
        </button>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">

        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Tamil Nadu's Digital Wholesale Marketplace
        </h2>

        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          Connect buyers, wholesalers, distributors and suppliers across Tamil Nadu.
        </p>

        <div className="py-10">
          <Signup />
        </div>

        <div className="py-10">
          <Login />
        </div>

        <div className="px-8">
          <Dashboard />
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl shadow-lg">

          <input
            type="text"
            placeholder="Search products, suppliers, categories..."
            className="w-full p-4 rounded-l-lg border outline-none"
          />

          <button className="bg-blue-700 text-white px-8 rounded-r-lg hover:bg-blue-800">
            Search
          </button>

        </div>

      </section>

      {/* Categories Section */}
      <section className="px-8 py-10">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl cursor-pointer"
            >
              <h3 className="font-semibold text-lg">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* Product Cards */}
      <section className="px-8 py-10">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

              <h3 className="text-2xl font-bold mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 mb-1">
                Supplier: {product.supplier}
              </p>

              <p className="text-gray-600 mb-4">
                City: {product.city}
              </p>

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Contact Supplier
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">

        <h2 className="text-xl font-bold mb-2">
          Tamil Nadu Wholesale Market
        </h2>

        <p>
          Connecting suppliers and buyers digitally across Tamil Nadu.
        </p>

      </footer>

    </div>
  )
}

export default App

