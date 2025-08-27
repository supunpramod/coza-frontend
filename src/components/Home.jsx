import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// --- Slides ---
import slide05 from "../assets/slide-05.jpg";
import slide06 from "../assets/slide-06.jpg";
import slide07 from "../assets/slide-07.jpg";

// --- Banners ---
import banner04 from "../assets/banner-04.jpg";
import banner05 from "../assets/banner-05.jpg";
import banner07 from "../assets/banner-07.jpg";
import banner08 from "../assets/banner-08.jpg";
import banner09 from "../assets/banner-09.jpg";

// --- Products ---
import product01 from "../assets/product-01.jpg";
import product02 from "../assets/product-02.jpg";
import product03 from "../assets/product-03.jpg";
import product04 from "../assets/product-04.jpg";
import product05 from "../assets/product-05.jpg";
import product06 from "../assets/product-06.jpg";
import product07 from "../assets/product-07.jpg";
import product08 from "../assets/product-08.jpg";
import product09 from "../assets/product-09.jpg";
import product10 from "../assets/product-10.jpg";
import product11 from "../assets/product-11.jpg";
import product12 from "../assets/product-12.jpg";
import product13 from "../assets/product-13.jpg";
import product14 from "../assets/product-14.jpg";
import product15 from "../assets/product-15.jpg";
import product16 from "../assets/product-16.jpg";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("*");
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cart Items
  const cartItems = [
    { id: 1, name: "White Shirt Pleat", price: 19.0, image: product01 },
    { id: 2, name: "Converse All Star", price: 39.0, image: product09 },
    { id: 3, name: "Nixon Porter Leather", price: 17.0, image: product15 },
  ];

  // Slides
  const slides = [
    {
      image: slide05,
      title: "Women Collection 2018",
      subtitle: "New arrivals",
      buttonText: "Shop Now",
    },
    {
      image: slide06,
      title: "Men New-Season",
      subtitle: "Jackets & Coats",
      buttonText: "Shop Now",
    },
    {
      image: slide07,
      title: "Men Collection 2018",
      subtitle: "NEW SEASON",
      buttonText: "Shop Now",
    },
  ];

  // Auto Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Banners
  const banners = [
    { image: banner04, title: "Women", subtitle: "New Trend", link: "/women" },
    { image: banner05, title: "Men", subtitle: "New Trend", link: "/men" },
    {
      image: banner07,
      title: "Watches",
      subtitle: "Spring 2018",
      link: "/watches",
    },
    { image: banner08, title: "Bags", subtitle: "Spring 2018", link: "/bags" },
    {
      image: banner09,
      title: "Accessories",
      subtitle: "Spring 2018",
      link: "/accessories",
    },
  ];

  // Products
  const products = [
    { id: 1, name: "Esprit Ruffle Shirt", price: 16.64, image: product01, category: "women", isNew: true },
    { id: 2, name: "Herschel supply", price: 35.31, image: product02, category: "women" },
    { id: 3, name: "Only Check Trouser", price: 25.50, image: product03, category: "men" },
    { id: 4, name: "Classic Trench Coat", price: 75.00, image: product04, category: "women" },
    { id: 5, name: "Front Pocket Jumper", price: 34.75, image: product05, category: "women" },
    { id: 6, name: "Vintage Inspired Classic", price: 93.20, image: product06, category: "watches" },
    { id: 7, name: "Shirt in Stretch Cotton", price: 52.66, image: product07, category: "women" },
    { id: 8, name: "Pieces Metallic Printed", price: 18.96, image: product08, category: "women" },
    { id: 9, name: "Converse All Star Hi Plimsolls", price: 75.00, image: product09, category: "shoes" },
    { id: 10, name: "Femme T-Shirt In Stripe", price: 25.85, image: product10, category: "women" },
    { id: 11, name: "Herschel supply", price: 63.16, image: product11, category: "men" },
    { id: 12, name: "Herschel supply", price: 63.15, image: product12, category: "men" },
    { id: 13, name: "T-Shirt with Sleeve", price: 18.49, image: product13, category: "women" },
    { id: 14, name: "Pretty Little Thing", price: 54.79, image: product14, category: "women" },
    { id: 15, name: "Mini Silver Mesh Watch", price: 86.85, image: product15, category: "watches" },
    { id: 16, name: "Square Neck Back", price: 29.64, image: product16, category: "women" },
  ];

  const filteredProducts =
    activeFilter === "*"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative min-h-screen">
      {/* Hero Slider */}
      <section className="relative">
        <div className="relative h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <span className="text-xl md:text-2xl">{slide.title}</span>
                  </div>
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                      {slide.subtitle}
                    </h2>
                  </div>
                  <div>
                    <a
                      href="/shop"
                      className="inline-block bg-white text-black px-8 py-3 hover:bg-red-500 transition rounded-md"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
              }
              className="bg-white text-black rounded-md p-2 shadow hover:bg-red-500 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="bg-white text-black rounded-md p-2 shadow hover:bg-red-500 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Banners */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-8 text-white">
                <div>
                  <span className="text-xl md:text-2xl font-medium">{banner.title}</span>
                  <span className="block text-sm">{banner.subtitle}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={banner.link} className="text-sm font-medium border-b border-white pb-1 hover:text-red-500">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-3xl font-medium">Product Overview</h3>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative group">
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs font-medium">New</span>
                    )}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <a href={`/product/${product.id}`} className="font-medium hover:text-gray-600">{product.name}</a>
                      <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <i className="zmdi zmdi-favorite-outline"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
