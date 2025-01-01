import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      const response = await fetch('https://formspree.io/f/xbllazga', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: ["+256 776 123456", "+256 753 789012"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: ["info@embassylounge.com", "bookings@embassylounge.com"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      details: ["Plot 123, Republic Street", "Mbale City, Uganda"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Opening Hours",
      details: ["Monday - Sunday", "10:00 AM - Late Night"]
    }
  ];

  const animations = {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 }
    },
    staggerContainer: {
      initial: {},
      whileInView: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/80 to-teal-950" />
          <img
            src="/src/contact-bg.png"
            alt="Contact Background"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        
        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          {...animations.fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl text-emerald-200 font-light tracking-tight mb-8">
            Get in Touch
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Have questions about our services or want to make a reservation? 
            We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            {...animations.fadeInUp}
          >
            Contact Information
          </motion.h2>
          
          <motion.div
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={animations.fadeInUp}
                className="bg-emerald-200/10 backdrop-blur-sm p-8 rounded-xl border border-emerald-200/20"
              >
                <div className="text-emerald-200 mb-6">{info.icon}</div>
                <h3 className="text-2xl font-light text-emerald-200 mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-white/70 text-lg">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-teal-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl text-center text-emerald-200 font-light tracking-tight mb-20"
            {...animations.fadeInUp}
          >
            Send Us a Message
          </motion.h2>

          <motion.div
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            {/* Map */}
            <motion.div
              variants={animations.fadeInUp}
              className="w-full h-[600px] rounded-xl overflow-hidden bg-emerald-200/10 backdrop-blur-sm border border-emerald-200/20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.43931268444!2d34.13456640759774!3d1.0757837908800447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177da13bc5fa8f31%3A0x32d63180c5c33721!2sMbale%2C%20Uganda!5e0!3m2!1sen!2sus!4v1703864906348!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Embassy Lounge Location"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              variants={animations.fadeInUp}
              className="bg-emerald-200/10 backdrop-blur-sm p-12 rounded-xl border border-emerald-200/20"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-emerald-200 text-lg mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-emerald-200/5 border border-emerald-200/20 rounded-lg focus:outline-none focus:border-emerald-200/50 text-white placeholder:text-white/30 text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-emerald-200 text-lg mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-emerald-200/5 border border-emerald-200/20 rounded-lg focus:outline-none focus:border-emerald-200/50 text-white placeholder:text-white/30 text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-emerald-200 text-lg mb-3"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-emerald-200/5 border border-emerald-200/20 rounded-lg focus:outline-none focus:border-emerald-200/50 text-white placeholder:text-white/30 text-lg"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-emerald-200 text-lg mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-6 py-4 bg-emerald-200/5 border border-emerald-200/20 rounded-lg focus:outline-none focus:border-emerald-200/50 text-white placeholder:text-white/30 text-lg resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {formStatus.isSubmitted && (
                  <div className="bg-emerald-200/10 text-emerald-200 p-4 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {formStatus.error && (
                  <div className="bg-red-400/10 text-red-400 p-4 rounded-lg">
                    {formStatus.error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-emerald-200 text-teal-950 rounded-full text-lg font-medium hover:bg-emerald-300 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;