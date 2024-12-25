import { MapPin, User, Phone, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
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
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/hero_bg.png')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/50 to-teal-950"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-6xl md:text-7xl text-emerald-200 font-light tracking-tight mb-4 leading-tight">
            Welcome to Embassy Lounge
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-emerald-200/90 font-light">
            Where Entertainment Meets Elegance
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-200 text-teal-950 px-8 py-4 rounded-lg hover:bg-emerald-300 transition-colors shadow-lg"
          >
            Book a Space
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-16">
            Explore Embassy Lounge Uganda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="w-8" />,
                title: "Who We Are",
                description:
                  "Embassy Lounge Uganda is a leading hospitality brand renowned for its perfect blend of entertainment, comfort, and warm hospitality.",
              },
              {
                icon: <MapPin className="w-8" />,
                title: "Our Locations",
                description:
                  "Our vibrant bars and cozy guest houses in Mbale, Iganga, Busia, and Jinja offer an ideal retreat for both leisure travelers and business guests.",
              },
              {
                icon: <Phone className="w-8" />,
                title: "Why Choose Us",
                description:
                  "At Embassy Lounge Uganda, we pride ourselves on delivering exceptional service and unforgettable experiences that exceed expectations.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-xl h-full">
                  <div className="text-teal-950 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-medium text-teal-950 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-6">
            Discover Our Branches
          </h2>
          <p className="text-center text-white text-xl mb-20">
            Unwind, Dine, and Stay—Just a Click Away! ⭐✨
          </p>

          <div className="space-y-24">
            {[
              {
                name: "Embassy Lounge Mbale",
                description:
                  "Embassy Lounge Mbale is the flagship outlet of Embassy Lounge Uganda, located in the heart of Mbale City.",
                image: "/src/assets/1-home.png",
              },
              {
                name: "Camp David Royals Lounge Iganga",
                description:
                  "Camp David Royals Lounge Iganga was the 2018 Eastern Region inventory of the year, adding extra value to hospitality.",
                image: "/src/assets/2-home.png",
              },
              {
                name: "Embassy Lounge Busia",
                description:
                  "Embassy Lounge Busia is a popular entertainment destination in Busia Town, offering a unique blend of hospitality.",
                image: "/src/assets/3-home.png",
              },
              {
                name: "Embassy Lounge Jinja",
                description:
                  "Embassy Lounge Jinja is a vibrant entertainment spot located in the heart of Jinja, offering an unforgettable experience.",
                image: "/src/assets/4-home.png",
              },
            ].map((branch, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-medium text-emerald-200 tracking-tight mb-6">
                      {branch.name}
                    </h3>
                    <p className="text-white text-lg mb-8">
                      {branch.description}
                    </p>
                    <button className="flex items-center gap-3 bg-emerald-200 text-teal-950 px-6 py-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 w-fit group">
                      EXPLORE MORE
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-teal-900 to-teal-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-20">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;