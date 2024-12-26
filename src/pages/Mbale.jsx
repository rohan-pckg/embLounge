import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Music,
  GlassesIcon,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const themeNights = [
  {
    day: "Monday",
    title: "Upscale Mix",
    description:
      "Premium signature drinks and vibrant beats are back daily, weekends till 2am EAT",
    images: ["/src/assets/theme1-1.png", "/src/assets/theme1-2.png"],
    icon: GlassesIcon,
  },
  {
    day: "Tuesday",
    title: "Throwback Tuesday",
    description:
      "Revive to the classics you love with DJ JoJo delivering sparkling the hits",
    images: ["/src/assets/theme2-1.png", "/src/assets/theme2-2.png"],
    icon: Music,
  },
  {
    day: "Wednesday",
    title: "Ladies Mix Wednesday",
    description:
      "A night out for the ladies—girls' glam, and great music by DJ Urban Mason!",
    images: ["/src/assets/theme3-1.png", "/src/assets/theme3-2.png"],
    icon: Star,
  },
  {
    day: "Thursday",
    title: "Live Band Thursday",
    description:
      "Feel the rhythm of live music with Thursday Band delivering an electrifying performance",
    images: ["/src/assets/theme4-1.png", "/src/assets/theme4-2.png"],
    icon: Music,
  },
  {
    day: "Friday",
    title: "Live Band Thursday",
    description:
      "Feel the rhythm of live music with Thursday Band delivering an electrifying performance",
    images: ["/src/assets/theme4-1.png", "/src/assets/theme4-2.png"],
    icon: Music,
  },
  {
    day: "Saturday",
    title: "Live Band Thursday",
    description:
      "Feel the rhythm of live music with Thursday Band delivering an electrifying performance",
    images: ["/src/assets/theme4-1.png", "/src/assets/theme4-2.png"],
    icon: Music,
  },
];

const amenities = [
  {
    title: "Premium Drinks Selection",
    description: "Extensive collection of spirits, wines, and craft cocktails",
    icon: GlassesIcon,
  },
  {
    title: "Gourmet Kitchen",
    description: "Delicious crafted meals prepared by expert chefs",
    icon: Star,
  },
  {
    title: "Weekly Entertainment",
    description: "Exciting entertainment options throughout the week",
    icon: Music,
  },
];

const Mbale = () => {
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
            src="/src/assets/branch-hero.png"
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
            Camp David Royals
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Experience luxury and elegance in the heart of Iganga
          </p>
          <motion.button
            className="mt-8 px-8 py-3 bg-emerald-200 text-teal-950 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Now
          </motion.button>
        </motion.div>
      </section>

      {/* Manager Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-teal-950/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Your Host
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/src/assets/pfp.png"
                  alt="Branch Manager"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-medium text-emerald-200 mb-4">
                    Alex
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white/90">
                      <Phone className="w-5 h-5" />
                      <span>+256 702 527277</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Mail className="w-5 h-5" />
                      <span>cdr@embassylounge.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-emerald-200/10 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/20"
                >
                  <div className="flex items-start gap-4">
                    <amenity.icon className="w-6 h-6 text-emerald-200" />
                    <div>
                      <h4 className="text-lg font-medium text-emerald-200 mb-2">
                        {amenity.title}
                      </h4>
                      <p className="text-white/70">{amenity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Theme Nights Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Signature Events
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {themeNights.map((night, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={night.images[0]}
                    alt={night.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <night.icon className="w-8 h-8 text-emerald-200 mb-4" />
                    <h3 className="text-2xl font-medium text-emerald-200 mb-2">
                      {night.day} - {night.title}
                    </h3>
                    <p className="text-white/70">{night.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Visit Us
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/src/assets/location.png"
                alt="Location"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent"></div>
            </div>
            <div className="space-y-8">
              <div className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20">
                <h3 className="text-3xl font-light text-emerald-200 mb-6">
                  Embassy Lounge Mbale
                </h3>
                <div className="space-y-4 text-white/70">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-200" />
                    <span>Plot 29-31, Republic Street, Mbale, Uganda</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-200" />
                    <span>Open daily from 4 PM - Late</span>
                  </div>
                </div>
              </div>
              <motion.button
                className="w-full py-4 bg-emerald-200 text-teal-950 rounded-xl text-lg font-medium hover:bg-emerald-300 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Directions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mbale;
