import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Music,
  GlassesIcon,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
  staggerContainer: {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

const themeNights = [
  {
    day: "Monday",
    title: "Corporate Monday",
    description:
      "Premium signature drinks and vibrant beats are back daily, weekends till 2am EAT",
    images: ["/i1.jpeg", "/theme1-2.png"],
    icon: GlassesIcon,
  },
  {
    day: "Tuesday",
    title: "Live Band",
    description: "Dj Alex Code x MC Bob Swama",
    images: ["/i2.jpeg", "/theme2-2.png"],
    icon: Music,
  },
  {
    day: "Wednesday",
    title: "Bucket Night",
    description: "House DJs & MCs",
    images: ["/i8.jpeg", "/theme3-2.png"],
    icon: Star,
  },
  {
    day: "Thursday",
    title: "Celebrity Night",
    description: "Dj Wicky Wicky",
    images: ["/i6.jpeg", "/theme4-2.png"],
    icon: Music,
  },
  {
    day: "Friday",
    title: "Dripp off FURAHDAY",
    description: "Shen MC",
    images: ["/i5.jpeg", "/theme4-2.png"],
    icon: Music,
  },
  {
    day: "Saturday",
    title: "Variety Night ",
    description: "DJ Gero",
    images: ["/i7.jpeg", "/theme4-2.png"],
    icon: Music,
  },
  {
    day: "Sunday",
    title: "Chill Sunday ",
    description: "DJ Alex Code",
    images: ["/i3.jpeg", "/theme4-2.png"],
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

const eventPosters = [
  "/iganga_poster.jpg", // Make sure to update with your actual image paths
];

const Iganga = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventPosters.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventPosters.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + eventPosters.length) % eventPosters.length,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Header Banner for Latest Event */}
      {/* <div className="bg-emerald-200/10 backdrop-blur-sm border-b border-emerald-200/20">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <p className="text-center text-emerald-200 font-medium">
            Next Event: Kim Black MC - Hype Experience SN3 | Saturday, 08 FEB
          </p>
        </div>
      </div>*/}

      {/* Updated Hero Section with Consistent Margins */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/80 to-teal-950"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <motion.div
                className="text-left"
                variants={animations.fadeInUp}
                initial="initial"
                whileInView="whileInView"
              >
                <h1 className="text-4xl md:text-6xl text-emerald-200 font-light tracking-tight mb-8">
                  Camp David Royals Lounge Iganga
                </h1>
                <p className="text-white text-xl md:text-2xl max-w-2xl leading-relaxed font-light mb-8">
                  Camp David Royals Lounge Iganga was the 2018 Eastern Region
                  inventory of the year adding extra value to the hospitality
                  and entertainment industry in the heart of Busoga's Iganga
                  District and it's neighbors.
                </p>
                <a href="/contact">
                  <motion.button
                    className="px-8 py-3 bg-emerald-200 text-teal-950 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reserve Your Table
                  </motion.button>
                </a>
              </motion.div>

              {/* Right Column - Event Poster Showcase */}
              <motion.div
                className="relative w-full"
                variants={animations.fadeInUp}
                initial="initial"
                whileInView="whileInView"
              >
                <div className="relative aspect-[4/5] w-full">
                  {eventPosters.map((poster, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{
                        opacity: currentSlide === index ? 1 : 0,
                        x: currentSlide === index ? 0 : 100,
                        scale: currentSlide === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={poster}
                        alt={`Event Poster ${index + 1}`}
                        className="w-full h-full object-contain rounded-lg shadow-2xl"
                      />
                    </motion.div>
                  ))}

                  {/* Navigation Arrows */}
                  <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors transform hover:scale-105"
                      aria-label="Previous poster"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors transform hover:scale-105"
                      aria-label="Next poster"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Slide Indicators */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {eventPosters.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-emerald-200 w-4"
                            : "bg-emerald-200/50"
                        }`}
                        aria-label={`Go to poster ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


 <section className="py-32 px-4 bg-gradient-to-b from-teal-950/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={animations.fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Your Host
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={animations.fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/i0.jpeg"
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
                      <span> campdavid@embassyloungeug.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={animations.staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={animations.fadeInUp}
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
            variants={animations.fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Signature Events
          </motion.h2>
          <motion.div
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {themeNights.map((night, index) => (
              <motion.div
                key={index}
                variants={animations.fadeInUp}
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
            variants={animations.fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Visit Us
          </motion.h2>
          <motion.div
            variants={animations.fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            {/* Map */}
            <motion.div
              variants={animations.fadeInUp}
              className="w-full h-[600px] rounded-xl overflow-hidden bg-emerald-200/10 backdrop-blur-sm border border-emerald-200/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.241279412105!2d33.4796944!3d0.615189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177ef34171b326f3%3A0x2e2864a92e3b17fd!2sCAMP%20DAVID!5e1!3m2!1sen!2sin!4v1735663909668!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Embassy Lounge Location"
              />
            </motion.div>
            <div className="space-y-8">
              <div className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20">
                <h3 className="text-3xl font-light text-emerald-200 mb-6">
                  Camp David Royals Lounge Iganga
                </h3>
                <div className="space-y-4 text-white/70">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-200" />
                    <span>
                      Iganga Main Street Opp. Mwana Highway Hotel, Iganga Ug.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-emerald-200" />
                    <span>Open daily from 4 PM - Late</span>
                  </div>
                </div>
              </div>
              {/*  <motion.button
                className="w-full py-4 bg-emerald-200 text-teal-950 rounded-xl text-lg font-medium hover:bg-emerald-300 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Directions
              </motion.button>*/}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Iganga;
