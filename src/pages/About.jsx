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
    image: "/src/assets/1-home.png",
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
            Our Story
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Embassy Lounge Uganda: Where Every Milestone is a Step Towards
            Exceptional Hospitality
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Our Journey
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="space-y-16"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-emerald-200/10 backdrop-blur-sm border border-emerald-200/20"
              >
                <div className="grid md:grid-cols-2 items-center">
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 to-transparent"></div>
                  </div>
                  <div className="p-12">
                    <div className="inline-block bg-emerald-200 text-teal-950 px-4 py-1 rounded-full text-sm font-medium mb-6">
                      {item.year}
                    </div>
                    <h3 className="text-3xl font-light text-emerald-200 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Core Values
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20"
              >
                <value.icon className="w-12 h-12 text-emerald-200 mb-6" />
                <h3 className="text-2xl font-light text-emerald-200 mb-4">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Our Purpose
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20"
            >
              <h3 className="text-3xl font-light text-emerald-200 mb-6">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To provide an exceptional hospitality experience created for
                guests expectations through outstanding service and innovation,
                fostering a culture of excellence while building lasting
                relationships.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20"
            >
              <h3 className="text-3xl font-light text-emerald-200 mb-6">
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed">
                To be the leading hospitality destination in East Africa, known
                for creating memorable experiences and setting new standards in
                service excellence and innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
