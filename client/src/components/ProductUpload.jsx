import { useState } from "react";

import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

import app from "../firebase";

function ProductUpload() {

  const db = getFirestore(app);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const uploadProduct = async () => {

    try {

      await addDoc(collection(db, "products"), {

        productName,
        price,
        category

      });

      alert("Product Uploaded");

      setProductName("");
      setPrice("");
      setCategory("");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="bg-white p-8 rounded-xl shadow-lg mt-10">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Upload Product
      </h2>

      <input
        type="text"
        placeholder="Product Name"
        className="w-full p-3 border rounded-lg mb-4"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Price"
        className="w-full p-3 border rounded-lg mb-4"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        className="w-full p-3 border rounded-lg mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button
        onClick={uploadProduct}
        className="bg-blue-700 text-white w-full py-3 rounded-lg hover:bg-blue-800"
      >
        Upload Product
      </button>

    </div>

  );

}

export default ProductUpload;