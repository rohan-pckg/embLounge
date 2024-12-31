import { useState } from "react";
import { Calendar, ChevronRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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

  const categories = ["All", "Events", "Updates", "Promotions", "Community"];

  const newsArticles = [
    {
      id: 1,
      title: "New Year's Eve Spectacular at Embassy Lounge",
      category: "Events",
      date: "December 25, 2024",
      author: "Admin",
      readTime: "5 min read",
      image: "/news1.png",
      excerpt:
        "Join us for an unforgettable New Year's Eve celebration featuring live music, special performances, and a midnight countdown spectacle.",
      featured: true,
    },
    {
      id: 2,
      title: "Embassy Lounge Wins Best Venue Award 2024",
      category: "Updates",
      date: "December 20, 2024",
      author: "Marketing Team",
      readTime: "3 min read",
      image: "/news2.png",
      excerpt:
        "We're proud to announce that Embassy Lounge has been recognized as the Best Entertainment Venue in Eastern Uganda.",
      featured: true,
    },
    {
      id: 3,
      title: "Introducing Our New Weekend Brunch Menu",
      category: "Updates",
      date: "December 15, 2024",
      author: "Chef James",
      readTime: "4 min read",
      image: "/news3.png",
      excerpt:
        "Discover our new weekend brunch menu featuring both local and international cuisines, crafted by our expert culinary team.",
    },
    {
      id: 4,
      title: "Community Cleanup Initiative Success",
      category: "Community",
      date: "December 10, 2024",
      author: "Events Team",
      readTime: "6 min read",
      image: "/news4.png",
      excerpt:
        "Embassy Lounge team members and local volunteers came together for our monthly community cleanup initiative.",
    },
    {
      id: 5,
      title: "Holiday Season Special Offers",
      category: "Promotions",
      date: "December 5, 2024",
      author: "Marketing Team",
      readTime: "3 min read",
      image: "/news5.png",
      excerpt:
        "Celebrate the holiday season with our special packages and promotional offers available throughout December.",
    },
  ];

  const filteredArticles = activeCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/80 to-teal-950"></div>
          <img
            src="/src/news-bg.png"
            alt="News Background"
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
            Latest News
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Stay updated with the latest happenings, events, and announcements from Embassy Lounge
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;