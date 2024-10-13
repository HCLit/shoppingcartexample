import React from "react";

function App() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 25,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jeans",
      price: 40,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sneakers",
      price: 60,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Hat",
      price: 15,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Shopping Store</h1>
        <p className="mt-2">Find your favorite products below!</p>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-gray-600">${product.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Shopping Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
