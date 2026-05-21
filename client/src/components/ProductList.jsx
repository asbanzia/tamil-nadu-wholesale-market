import { useEffect, useState } from "react";

import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore";

import app from "../firebase";

function ProductList() {

  const db = getFirestore(app);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {

    try {

      const querySnapshot = await getDocs(
        collection(db, "products")
      );

      const productArray = [];

      querySnapshot.forEach((doc) => {

        productArray.push({
          id: doc.id,
          ...doc.data()
        });

      });

      setProducts(productArray);

    } catch (error) {

      alert(error.message);

    }

  };

  useEffect(() => {

    fetchProducts();

  }, []);

  return (

    <div className="px-8 py-10">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Marketplace Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

            <h3 className="text-2xl font-bold mb-2">
              {product.productName}
            </h3>

            <p className="text-gray-600 mb-2">
              Price: ₹{product.price}
            </p>

            <p className="text-gray-600 mb-4">
              Category: {product.category}
            </p>

            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Contact Supplier
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default ProductList;