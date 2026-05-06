import Head from "../components/Head";
import Foot from "../components/Foot";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <>
      <Head />

      <section className="bg-slate-100 pt-28 pb-24">

        {/* HERO */}
        <div className="text-center px-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Whether you need consultation, compliance support, or business advice,
            our team is here to help.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="max-w-full-xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* MAP */}
            <div className="bg-white rounded-2xl shadow-md p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15712.850978044953!2d76.310781!3d10.081647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080e6725350343%3A0xa4fd0bcc1bc58323!2sTicks%20n%20Lines!5e0!3m2!1sen!2sus!4v1775402387157!5m2!1sen!2sus"
                className="w-full h-[260px] rounded-xl"
                loading="lazy"
              ></iframe>
            </div>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-[#0B1F3A] font-medium">
                  esipf@ticksnlines.com
                </p>
                <p className="text-[#0B1F3A] font-medium">
                  salestax@ticksnlines.com
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-sm text-slate-500">Working Hours</p>
                <p className="text-[#0B1F3A] font-medium">
                  Mon – Sat: 8:00 AM – 5:00 PM
                </p>
              </div>

            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
              <p className="text-sm text-slate-500 mb-2">Contact Numbers</p>
              <div className="grid grid-cols-2 gap-2 text-[#0B1F3A] text-sm">
                <p>0484 2543885</p>
                <p>09562707090</p>
                <p>09562707091</p>
                <p>09562707092</p>
                <p>09562707093</p>
                <p>09562707094</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">

            <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Foot />
    </>
  );
}

export default Contact;