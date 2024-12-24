import { useEffect } from "react";
import { MapPin, User, Phone, ArrowRight, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const testimonials = [
  {
    text: "Best lounge experience! The ambiance is perfect and staff are super friendly.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "I spend all my event times at Embassy Lounge! The best venue in the city.",
    author: "James K.",
    rating: 5,
  },
  {
    text: "Embassy Lounge really is worth every penny. A must-visit!",
    author: "David L.",
    rating: 5,
  },
  {
    text: "Simply amazing service and atmosphere.",
    author: "Michelle R.",
    rating: 5,
  },
];

const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-section").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/1-home.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-cursive mb-4 leading-tight">
            Welcome to Embassy Lounge
          </h1>
          <p className="text-2xl mb-8 text-emerald-200">
            Where Entertainment Meets Elegance
          </p>
          <button className="bg-emerald-200 text-teal-950 px-8 py-4 rounded-lg hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book a Space
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center text-emerald-200 font-cursive mb-16 fade-in-section">
            Explore Embassy Lounge Uganda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="w-8" />,
                title: "Who We Are",
                description:
                  "Embassy Lounge Uganda is a leading hospitality brand renowned for its perfect blend of entertainment, comfort, and warm hospitality. Since our establishment in 2016, we've become a trusted name across Eastern Uganda.",
              },
              {
                icon: <MapPin className="w-8" />,
                title: "Our Locations",
                description:
                  "Our vibrant bars and cozy guest houses in Mbale, Iganga, Busia, and Jinja offer an ideal retreat for both leisure travelers and business guests, catering to every need with charm and convenience.",
              },
              {
                icon: <Phone className="w-8" />,
                title: "Why Choose Us",
                description:
                  "At Embassy Lounge Uganda, we pride ourselves on delivering exceptional service and unforgettable experiences. Our commitment to quality has built a loyal community that values excellence in hospitality.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-section"
              >
                <div className="text-teal-950 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-teal-950">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center text-emerald-200 font-cursive mb-6 fade-in-section">
            Discover Our Branches
          </h2>
          <p className="text-center text-white text-xl mb-16 fade-in-section">
            Unwind, Dine, and Stay—Just a Click Away! ⭐✨
          </p>

          <div className="space-y-16">
            {[
              {
                name: "Embassy Lounge Mbale",
                description:
                  "Embassy Lounge Mbale is the flagship outlet of Embassy Lounge Uganda, located in the heart of Mbale City. This vibrant lounge offers an unforgettable experience, featuring a wide range of drinks, delicious meals, and exciting entertainment options.",
                image: "/src/assets/1-home.png",
              },
              {
                name: "Camp David Royals Lounge Iganga",
                description:
                  "Camp David Royals Lounge Iganga was the 2018 Eastern Region inventory of the year adding extra value to the hospitality and entertainment industry in the heart of Busoga's Iganga District and it's neighbors.",
                image: "/src/assets/2-home.png",
              },
              {
                name: "Embassy Lounge Busia",
                description:
                  "Embassy Lounge Busia is a popular entertainment destination in Busia Town, offering a unique blend of hospitality, entertainment, and comfort. Our lounge features a wide range of drinks, delicious meals, and exciting events.",
                image: "/src/assets/3-home.png",
              },
              {
                name: "Embassy Lounge Jinja",
                description:
                  "Embassy Lounge Jinja is a vibrant entertainment spot located in the heart of Jinja, offering an unforgettable experience with its unique blend of hospitality, entertainment, and comfort.",
                image: "/src/assets/3-home.png",
              },
            ].map((branch, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-2xl overflow-hidden shadow-2xl fade-in-section"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 opacity-40"></div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-3xl text-emerald-200 font-cursive mb-6">
                      {branch.name}
                    </h3>
                    <p className="text-white text-lg mb-8">
                      {branch.description}
                    </p>
                    <button className="flex items-center gap-3 bg-emerald-200 text-teal-950 px-6 py-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105 w-fit">
                      EXPLORE MORE <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-teal-900 to-teal-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center text-emerald-200 font-cursive mb-16 fade-in-section">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-section"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">{testimonial.text}</p>
                <p className="text-teal-950 font-bold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .animate-fade-up {
          animation: fadeUp 1s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          visibility: hidden;
        }

        .fade-in-section.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
