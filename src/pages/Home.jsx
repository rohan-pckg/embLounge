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

const branches = [
  {
    name: "Embassy Lounge Mbale",
    description: "Embassy Lounge Mbale is the flagship outlet of Embassy Lounge Uganda, located in the heart of Mbale City.",
    image: "/m3.jpeg",
    path: "/branch/mbale"
  },
  {
    name: "Camp David Royals Lounge Iganga",
    description: "Camp David Royals Lounge Iganga was the 2018 Eastern Region inventory of the year, adding extra value to hospitality.",
    image: "/i3.jpeg",
    path: "/branch/iganga"
  },
  {
    name: "Embassy Lounge Busia",
    description: "Embassy Lounge Busia is a popular entertainment destination in Busia Town, offering a unique blend of hospitality.",
    image: "/b2.jpeg",
    path: "/branch/busia"
  },
  {
    name: "Embassy Lounge Jinja",
    description: "Embassy Lounge Jinja is a vibrant entertainment spot located in the heart of Jinja, offering an unforgettable experience.",
    image: "/j4.jpeg",
    path: "/branch/jinja"
  }
];

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/80 to-teal-950"></div>
          <img
            src="/src/hero_bg.png"
            alt="Background"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
        >
          <h1 className="text-4xl md:text-6xl text-emerald-200 font-light tracking-tight mb-8">
            Welcome to Embassy Lounge
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Where Entertainment Meets Elegance
          </p>

          <a href="/contact">
            <motion.button
              className="px-8 py-3 bg-emerald-200 text-teal-950 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Space
            </motion.button>
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Explore Embassy Lounge
          </motion.h2>
          {/* Rest of the features section remains unchanged */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* ... Feature cards ... */}
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Discover Our Branches
          </motion.h2>
          <motion.p
            className="text-center text-white/70 text-lg md:text-xl mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Unwind, Dine, and Stay—Just a Click Away! ⭐✨
          </motion.p>
          {/* Rest of the branches section remains unchanged */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            What Our Guests Say
          </motion.h2>
          {/* Rest of the testimonials section remains unchanged */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;