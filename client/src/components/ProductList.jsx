import { useEffect, useState } from "react";

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import app from "../firebase";

function ProductList() {

  const db = getFirestore(app);

  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [editName, setEditName] = useState("");

  const [editPrice, setEditPrice] = useState("");

  const [editCategory, setEditCategory] = useState("");

  const fetchProducts = async () => {

    try {

      const querySnapshot = await getDocs(
        collection(db, "products")
      );

      const productArray = [];

      querySnapshot.forEach((docItem) => {

        productArray.push({
          id: docItem.id,
          ...docItem.data()
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

  const deleteProduct = async (id) => {

    try {

      await deleteDoc(doc(db, "products", id));

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      alert(error.message);

    }

  };

  const editProduct = (product) => {

    setEditingId(product.id);

    setEditName(product.productName);

    setEditPrice(product.price);

    setEditCategory(product.category);

  };

  const updateProduct = async () => {

    try {

      const productRef = doc(db, "products", editingId);

      await updateDoc(productRef, {

        productName: editName,
        price: editPrice,
        category: editCategory

      });

      alert("Product Updated");

      setEditingId(null);

      fetchProducts();

    } catch (error) {

      alert(error.message);

    }

  };

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

            <div className="flex gap-3 flex-wrap mb-4">

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Contact Supplier
              </button>

              <button
                onClick={() => editProduct(product)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>

            </div>

            {
              editingId === product.id && (

                <div className="mt-6">

                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Product Name"
                    className="w-full p-3 border rounded-lg mb-3"
                  />

                  <input
                    type="text"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    placeholder="Price"
                    className="w-full p-3 border rounded-lg mb-3"
                  />

                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    placeholder="Category"
                    className="w-full p-3 border rounded-lg mb-3"
                  />

                  <button
                    onClick={updateProduct}
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                  >
                    Update Product
                  </button>

                </div>

              )
            }

          </div>

        ))}

      </div>

    </div>

  );

}

export default ProductList;