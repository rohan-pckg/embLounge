import { motion } from "framer-motion";
import { Star, MapPin, Globe, Clock, Users, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const timeline = [
  {
    year: "2016",
    title: "Embassy Lounge Mbale",
    description:
      "Embassy Lounge Uganda's journey began with the launch of its flagship outlet. Embassy Lounge Mbale in 2016. This pioneering establishment set the stage for the growth and vision that would come to define our brand.",
    image: "/src/assets/1-home.png", // Replace with actual image path
  },
  {
    year: "2018",
    title: "Camp David Royale",
    description:
      "In 2018, we celebrated with the opening of Camp David lounge. Being made a huge impact in the region. This marked a significant step in further solidifying our presence and setting a new benchmark for hospitality in Uganda.",
    image: "/src/assets/2-home.png",
  },
  {
    year: "2020",
    title: "Embassy Lounge Busia",
    description:
      "The success of our previous ventures paved the way for Embassy Lounge Busia in 2020. This strategic expansion allowed us to bring our unique hospitality experience to the heart of Western Kenya, enriching the community with premium service and comfort.",
    image: "/src/assets/3-home.png",
  },
  {
    year: "2022",
    title: "Embassy Lounge Jinja",
    description:
      "In 2022, we proudly opened Embassy Lounge Jinja, located in East Africa's adventure capital. This addition clearly reflects a greater determination to push limits and innovate, offering a unique blend of comfort and excitement to our valued guests.",
    image: "/src/assets/4-home.png",
  },
];

const coreValues = [
  {
    icon: Star,
    title: "Hospitality Excellence",
    description:
      "Delivering exceptional service to ensure every guest feels valued and respected.",
  },
  {
    icon: Globe,
    title: "Innovative Entertainment",
    description:
      "Providing unique, exciting, and engaging experiences that exceed expectations.",
  },
  {
    icon: Clock,
    title: "Quality and Consistency",
    description:
      "Setting the highest standards, ensuring every visit provides activities for a consistent experience.",
  },
  {
    icon: Users,
    title: "Customer Centricity",
    description:
      "Understanding and anticipating guest needs to best serve the heartland of our business.",
  },
  {
    icon: MapPin,
    title: "Teamwork and Accountability",
    description:
      "Building collaborative bonds between management, events, staff and the community.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    description:
      "Building strong relationships and supporting local groups that drive social, business, and environmental development.",
  },
];

const About = () => {
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
            src="/api/placeholder/1920/1080"
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
              Our Story
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              Embassy Lounge Uganda: Where Every Milestone is a Step Towards
              Exceptional Hospitality and Unforgettable Experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-emerald-200/30"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 flex flex-col items-start">
                  <div className="bg-emerald-200 text-teal-950 px-6 py-2 rounded-full mb-4 font-medium tracking-wide shadow-lg">
                    {item.year}
                  </div>
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-xl w-full shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-medium text-teal-950 mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-emerald-200 rounded-full transform -translate-x-2 mt-3 shadow-lg"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-900/50 to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-teal-950 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium text-teal-950 mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <img
            src="/api/placeholder/1920/1080"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            className="text-4xl md:text-5xl text-center text-emerald-200 font-light tracking-tight mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Our Purpose, Our Promise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-medium text-teal-950 mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide an exceptional hospitality experience created for
                guests expectations through outstanding service and innovation,
                fostering a culture of excellence while building lasting
                relationships.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-medium text-teal-950 mb-4 tracking-tight">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading hospitality destination in East Africa, known
                for creating memorable experiences and setting new standards in
                service excellence and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-teal-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl text-emerald-200 font-light tracking-tight mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Experience Luxury, Comfort, and Warmth
          </motion.h2>
          <motion.button
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="bg-emerald-200 text-teal-950 px-8 py-4 rounded-lg font-medium tracking-wide shadow-lg hover:bg-emerald-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            EXPLORE ALL LOCATIONS
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
