import Head from "../components/Head";
import Foot from "../components/Foot";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      <Head />

      <section className="bg-slate-100 pt-28 pb-24 overflow-hidden">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 mb-16"
        >
          <p className="uppercase tracking-[5px] text-blue-600 text-sm font-semibold">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#0B1F3A] mt-4">
            Get in Touch
          </h1>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto text-lg">
            Whether you need consultation, compliance support, or business
            advice, our team is here to help.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* LEFT SIDE */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* MAP */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl shadow-xl p-4 overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15712.850978044953!2d76.310781!3d10.081647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e6725350343%3A0xa4fd0bcc1bc58323!2sTicks%20n%20Lines!5e0!3m2!1sen!2sus!4v1775402387157!5m2!1sen!2sus"
                className="w-full h-[280px] rounded-2xl"
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <p className="text-sm text-slate-500 mb-2">Email</p>

                <p className="text-[#0B1F3A] font-semibold">
                  esipf@ticksnlines.com
                </p>

                <p className="text-[#0B1F3A] font-semibold mt-1">
                  salestax@ticksnlines.com
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <p className="text-sm text-slate-500 mb-2">Working Hours</p>

                <p className="text-[#0B1F3A] font-semibold">
                  Mon – Sat: 8:00 AM – 5:00 PM
                </p>
              </motion.div>
            </div>

            {/* CONTACT NUMBERS */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <p className="text-sm text-slate-500 mb-3">Contact Numbers</p>

              <div className="grid grid-cols-2 gap-3 text-[#0B1F3A] font-medium text-sm">
                <p>0484 2543885</p>
                <p>09562707090</p>
                <p>09562707091</p>
                <p>09562707092</p>
                <p>09562707093</p>
                <p>09562707094</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-2">
              Send us a message
            </h2>

            <p className="text-slate-500 mb-8">
              Fill the form below and our team will get back to you shortly.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      <Foot />
    </>
  );
}

export default Contact;
