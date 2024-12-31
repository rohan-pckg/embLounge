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
    image: "/src/assets/1-home.png",
    path: "/branch/mbale"
  },
  {
    name: "Camp David Royals Lounge Iganga",
    description: "Camp David Royals Lounge Iganga was the 2018 Eastern Region inventory of the year, adding extra value to hospitality.",
    image: "/src/assets/2-home.png",
    path: "/branch/iganga"
  },
  {
    name: "Embassy Lounge Busia",
    description: "Embassy Lounge Busia is a popular entertainment destination in Busia Town, offering a unique blend of hospitality.",
    image: "/src/assets/3-home.png",
    path: "/branch/busia"
  },
  {
    name: "Embassy Lounge Jinja",
    description: "Embassy Lounge Jinja is a vibrant entertainment spot located in the heart of Jinja, offering an unforgettable experience.",
    image: "/src/assets/4-home.png",
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
          <h1 className="text-7xl md:text-8xl text-emerald-200 font-light tracking-tight mb-8">
            Welcome to Embassy Lounge
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-12">
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
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Explore Embassy Lounge
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <User className="w-8 h-8" />,
                title: "Who We Are",
                description:
                  "Embassy Lounge Uganda is a leading hospitality brand renowned for its perfect blend of entertainment, comfort, and warm hospitality.",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Our Locations",
                description:
                  "Our vibrant bars and cozy guest houses in Mbale, Iganga, Busia, and Jinja offer an ideal retreat for both leisure travelers and business guests.",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Why Choose Us",
                description:
                  "At Embassy Lounge Uganda, we pride ourselves on delivering exceptional service and unforgettable experiences that exceed expectations.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20"
              >
                <div className="text-emerald-200 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-light text-emerald-200 mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Discover Our Branches
          </motion.h2>
          <motion.p
            className="text-center text-white/70 text-xl mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Unwind, Dine, and Stay—Just a Click Away! ⭐✨
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="space-y-16"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-emerald-200/10 backdrop-blur-sm border border-emerald-200/20"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 to-transparent"></div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-light text-emerald-200 mb-6">
                      {branch.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                      {branch.description}
                    </p>
                    <a href={branch.path}>
                      <motion.button
                        className="flex items-center gap-3 bg-emerald-200 text-teal-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-300 transition-colors w-fit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        EXPLORE MORE
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            What Our Guests Say
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-200" />
                  ))}
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="text-emerald-200 font-medium">{testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;