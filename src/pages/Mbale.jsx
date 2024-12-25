import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const themeNights = [
  {
    day: "Monday",
    title: "Upscale Mix",
    description:
      "Premium signature drinks and vibrant beats are back daily, weekends till 2am EAT",
    images: ["/src/assets/theme1-1.png", "/src/assets/theme1-2.png"],
  },
  {
    day: "Tuesday",
    title: "Throwback Tuesday",
    description:
      "Revive to the classics you love with DJ JoJo delivering sparkling the hits",
    images: ["/src/assets/theme2-1.png", "/src/assets/theme2-2.png"],
  },
  {
    day: "Wednesday",
    title: "Ladies Mix Wednesday",
    description:
      "A night out for the ladies—girls' glam, and great music by DJ Urban Mason!",
    images: ["/src/assets/theme3-1.png", "/src/assets/theme3-2.png"],
  },
  {
    day: "Thursday",
    title: "Live Band Thursday",
    description:
      "Feel the rhythm of live music with Thursday Band delivering an electrifying performance",
    images: ["/src/assets/theme4-1.png", "/src/assets/theme4-2.png"],
  },
];

const amenities = [
  "A wide selection of drinks",
  "Delicious crafted meals",
  "Exciting entertainment options throughout the week",
];

const Mbale = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div
          className="absolute inset-0 opacity-20"
          variants={fadeIn}
          initial="initial"
          animate="whileInView"
        >
          <img
            src="/src/assets/branch-hero.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="whileInView"
          >
            <h1 className="text-6xl md:text-7xl text-emerald-200 font-light tracking-tight mb-8">
              Camp David Royals Lounge Iganga
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Meet the visionary behind Embassy Lounge Mbale - the driving force
              ensuring every guest enjoys an exceptional experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manager Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Meet the Manager
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-xl shadow-xl"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="/src/assets/pfp.png"
                  alt="Branch Manager"
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-medium text-teal-950 mb-4">Alex</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-teal-950">
                  <Phone className="w-5 h-5" />
                  <span>+256 702 527277</span>
                </div>
                <div className="flex items-center gap-3 text-teal-950">
                  <Mail className="w-5 h-5" />
                  <span>cdr@embassylounge.com</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-medium text-teal-950 mb-6">
                Amenities
              </h3>
              <ul className="space-y-4">
                {amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-teal-950 rounded-full"></div>
                    {amenity}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theme Nights Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Exciting Theme Nights
          </motion.h2>
          <div className="space-y-16">
            {themeNights.map((night, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-medium text-teal-950 mb-4">
                  {night.day} {night.title}
                </h3>
                <p className="text-gray-700 mb-6">{night.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {night.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${night.title} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Find Us in the Heart of Mbale
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="/src/assets/location.png"
                alt="Location"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-medium text-teal-950 mb-6">
                Embassy Lounge Mbale
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-950" />
                  <span>Plot 29-31, Republic Street, Mbale, Uganda</span>
                </div>
                <p>
                  Your go-to spot for great vibes and unforgettable moments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mbale;
