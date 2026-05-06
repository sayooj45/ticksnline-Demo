import Foot from "../components/Foot";
import Head from "../components/Head";
import heroVid from "../assets/heroVid.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Landingpage() {
  const clients = [
    {
      img: "https://imgs.search.brave.com/MH6iXcMaBSOr8QHJAadcjjxdesYnogQFTA4BMycCN0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWhi/cHIwOXB3ejBzay5j/bG91ZGZyb250Lm5l/dC9sb2dvX3VybC9j/b2NoaW4tc21hcnQt/bWlzc2lvbi1saW1p/dGVkLTg1NmZiYTlj",
      name: "SmartCity Kochi",
    },
    {
      img: "https://empressinfotech.com/images/logo_big.png",
      name: "Empress InfoTech",
    },
    {
      img: "https://speedwings.org/images/logo.png",
      name: "SpeedWings Aviation Academy",
    },
    {
      img: "https://admod.com/wp-content/uploads/2022/07/ad-png-1.png",
      name: "Admod Technologies",
    },
    {
      img: "https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png",
      name: "Wetzlar Resorts",
    },
    {
      img: "https://imgs.search.brave.com/2pFu17WfMAOIgYqmuDSQYkTQR2KOYI_gxXDwtv8IFQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkwL0x1/bHVfTG9nby5wbmcv/MjUwcHgtTHVsdV9M/b2dvLnBuZw",
      name: "Lulu Group",
    },
  ];

  const facilities = [
    "Trained Consultants",
    "Best Office Infrastructure",
    "Secured Record Room",
    "Conference Facility",
  ];

  const orbitItems = [
    { title: "ESI / PF", angle: 315 },
    { title: "GST", angle: 45 },
    { title: "Payroll", angle: 135 },
    { title: "Labour Law", angle: 225 },
  ];

  const services = [
    "Accounting & Bookkeeping",
    "GST & Tax Filing",
    "Payroll Processing",
    "Audit & Assurance",
    "Business Registration",
    "Tax Planning",
  ];

  const security = [
    "Strict Client Confidentiality",
    "Secured Record Rooms",
    "Protected Financial Data",
    "Trusted & Ethical Practices",
  ];

  return (
    <>
      <Head />

      <div className="overflow-x-hidden bg-slate-50">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden">
          <video
            src={heroVid}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0B1F3A]/80" />

          <div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[5px] text-blue-300 text-sm font-semibold"
              >
                Ticks N Lines LLP
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white text-4xl md:text-7xl font-bold mt-4 leading-tight"
              >
                Your Personalised <br />
                Accounting Professionals
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
              >
                Professional Accounting & HR Practices, Yet Personalized to Suit
                Your Business.
              </motion.p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  Get Consultation
                </Link>

                <Link
                  to="/about"
                  className="px-7 py-3 border border-white/40 text-white rounded-full hover:bg-white hover:text-[#0B1F3A]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              ["25+", "Years of Excellence"],
              ["500+", "Satisfied Clients"],
              ["100%", "Commitment & Trust"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-xl text-center"
              >
                <h3 className="text-4xl font-bold text-[#0B1F3A]">{item[0]}</h3>
                <p className="text-slate-500 mt-2">{item[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-4">
                Trusted Compliance Experts Since 20+ Years
              </h2>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                With changing statutory and HR regulations, businesses need
                reliable professionals to stay compliant and efficient.
              </p>

              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Our certified accountants, tax practitioners, and labour
                specialists ensure timely filings, proper records, and peace of
                mind.
              </p>
            </div>

            <div className="bg-[#0B1F3A] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>

              <div className="grid grid-cols-2 gap-4 text-blue-100">
                <p>Manufacturing</p>
                <p>Trading</p>
                <p>Distribution</p>
                <p>Retail Outlets</p>
                <p>Showrooms</p>
                <p>C & F Agencies</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY & PRIVACY */}
        <section className="py-24 bg-[#0B1F3A] px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-blue-300 text-sm font-semibold">
              Security & Privacy
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Your Data Is Safe With Us
            </h2>

            <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
              We understand the importance of confidentiality in finance and HR.
              Every client document, record, and business detail is handled with
              the highest level of privacy and security.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-14">
              {security.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              State of Art Facilities at Your Service
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {facilities.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-md font-semibold text-slate-700"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">Our Services</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-8 shadow-md font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Our Prestigious Clientele
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="h-16 mx-auto object-contain grayscale hover:grayscale-0 transition"
                  />
                  <p className="mt-4 text-sm text-slate-600">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto bg-[#0B1F3A] rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experienced, To Ensure Your Ascend!
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
              Let our experts handle accounting, taxation, HR, and compliance
              while you focus on growth.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <Foot />
    </>
  );
}

export default Landingpage;
