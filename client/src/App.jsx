function App() {
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

    </div>
  )
}

export default App