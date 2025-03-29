import React from "react";

const HeroSection = () => {
  const products = [
    {
      id: 1,
      name: "GUCCI WOMENS RUBBER WEB STRIPED SANDALS",
      price: 139.99,
      originalPrice: 450.0,
      image:
        "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/627820-J8700-6559__90006__2_900x.jpg?v=1737143947", // Replace with actual image URL
    },
    {
      id: 2,
      name: "GUCCI MENS PURSUIT POOL SLIDES",
      price: 125.99,
      originalPrice: 400.0,
      image:
        "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/308234-GIB10-9079__10209__2_900x.jpg?v=1731966252",
    },
    {
      id: 3,
      name: "GUCCI WOMENS CHEVRON LOGO THONG SANDALS",
      price: 123.99,
      originalPrice: 390.0,
      image:
        "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/655463-J8710-5609__60010__2_900x.jpg?v=1735397222",
    },
    {
      id: 1,
      name: "GUCCI WOMENS RUBBER WEB STRIPED SANDALS",
      price: 139.99,
      originalPrice: 450.0,
      image:
        "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/627820-J8700-6559__90006__2_900x.jpg?v=1737143947",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-20 mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">
        RECOMMENDED PRODUCTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                EXTRA 15% OFF IN CART
              </span>
            </div>
            <h3 className="mt-3 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">
              <span className="line-through text-sm">
                ${product.originalPrice}
              </span>{" "}
              <span className="text-red-600 font-semibold">
                ${product.price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
