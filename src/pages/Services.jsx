import Head from "../components/Head"
import Foot from "../components/Foot"
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import gst from "../assets/gst.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { GoChevronDown } from "react-icons/go"
import { motion } from "framer-motion";

function Services() {

  const clients = [
    {
      img: "https://imgs.search.brave.com/K42_7ClbYZtR_NOVBBtzCcGTyxDPBRxgGiPvH67zN-0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8zLzNjL1Nt/YXJ0Q2l0eV9Lb2No/aV9Mb2dvLkpQRy8y/NTBweC1TbWFydENp/dHlfS29jaGlfTG9n/by5KUEc",
      name: "Cochin Smart City Infrastructures Ltd"
    },
    {
      img: "https://imgs.search.brave.com/2pFu17WfMAOIgYqmuDSQYkTQR2KOYI_gxXDwtv8IFQM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkwL0x1/bHVfTG9nby5wbmcv/MjUwcHgtTHVsdV9M/b2dvLnBuZw",
      name: "Lulu Group of Companies"
    },
    { img: "https://speedwings.org/images/logo.png", name: "SpeedWings Aviation Academy" },
    { img: "https://thewetzlar.com/wp-content/uploads/2018/06/resort-logo.png", name: "Wetzlar Resorts & Hotels Pvt Ltd" },
    { img: "https://empressinfotech.com/images/logo_big.png", name: "Empress Cybernetic Systems Pvt Ltd" },
    { img: "https://admod.com/wp-content/uploads/2022/07/ad-png-1.png", name: "Admod Technologies" },

    // Added from your image
    { img: "https://centertec.in/images/ind2_03.jpg", name: "Center Tec" },
    { img: "https://imgs.search.brave.com/sikmdx9T0-AKWmTgtz60Vmt64356gDdhJDOKdM1bCTo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucHJvc3Blby5p/by9kaXJlY3Rvcnkt/aW1hZ2UvY29tcGFu/eV9sb2dvLzkzN2Vm/YTMwLTQzNTYtNDNj/Yy04MzJlLTU5OWFj/NzI0ZThjNS5qcGc", name: "TechWyse" },
    { img: "https://cochinbakery.com/assets/img/logo-light.png", name: "Cochin Bakery" },
    { img: "https://imgs.search.brave.com/jq49JYmG5i5ff4wIbTvyLVlRgOamH1XnG2WIhPXRjCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9uTnFxaTZnZWZv/aGwxSXQyVFFaX2JK/bklDbUN4OVlldktO/a0VEUmdIaEFoMUts/OEdRQUEtV3pObkZ6/WkZnY0hNUFN1azB5/SnNHYmhjaC1DbjBu/djg9dzI0MC1oNDgw/LXJ3", name: "RCJPS" },
    { img: "https://poonolilexpress.com/cdn/shop/files/poonolil-logo__png.png?v=1694512874&width=200", name: "Poonolil" },
    { img: "https://imgs.search.brave.com/OJTILQrMY5yO5sXEWidqswAWaLcZCyO43xc0WTBjTms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vMjgw/eDI4MF9SUy9hYi85/YS83ZS9hYjlhN2U4/Yzk4ZGZiMzYzNWNm/MWYyMTMxZjM5OGUz/Mi5qcGc", name: "Label'M" }
  ]

  const services = [
    {
      title: "Statutory & Compliance",
      desc: "GST, ESI, PF and labour law compliance handled efficiently.",
      points: ["GST Filing", "PF & ESI", "Labour Laws"],
      link: "/services/compliance"
    },
    {
      title: "Accounting & Finance",
      desc: "Accurate financial management and reporting solutions.",
      points: ["Bookkeeping", "Financial Reports", "Cash Flow"],
      link: "/services/accounting"
    },
    {
      title: "Audit & Assurance",
      desc: "Ensure transparency and compliance through structured audits.",
      points: ["Internal Audit", "Risk Review", "Compliance Check"],
      link: "/services/audit"
    },
    {
      title: "Business Consultancy",
      desc: "Strategic advisory to grow and optimize your business.",
      points: ["Strategy", "Process Improvement", "Advisory"],
      link: "/services/consulting"
    },
    {
      title: "Registration & Licensing",
      desc: "Hassle-free business setup and legal registrations.",
      points: ["Company Setup", "Licenses", "Registrations"],
      link: "/services/registration"
    },
    {
      title: "Support Services",
      desc: "Operational and documentation support for daily business.",
      points: ["Admin Support", "Document Storage", "Tracking"],
      link: "/services/support"
    }
  ]

  const items = [
    {
      title: "What makes our services stand out?",
      content:
        "Accurate, efficient, and reliable service delivery with expert professionals.",
    },
    {
      title: "Security & Confidentiality",
      content:
        "Strict data protection and secure systems for complete confidentiality.",
    },
    {
      title: "Trusted by Businesses",
      content:
        "350+ clients trust us for consistent, high-quality solutions.",
    },
  ];

  const pills = [
    { title: "Project Report Preparation", angle: 315 }, // top-right
    { title: "Industrial Land Transfer", angle: 45 }, // bottom-right
    { title: "Industrial Subsidy & Margin Money", angle: 225 }, // top-left
    { title: "Business Consultancy", angle: 135 } // bottom-left
  ];

  const [active, setActive] = useState(null);

  return (
    <>
      <Head />

      {/* HERO */}
      <section className="bg-slate-50 pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A]">
          Our Services
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
          End-to-end business solutions designed to simplify operations,
          ensure compliance, and support long-term growth.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-24">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={gst}
              alt="GST"
              className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />

            {/* glow effect */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-8">
              Reliable Solutions Built for Your Business
            </h2>

            <div className="space-y-5">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden border transition ${active === i
                    ? "border-blue-500 shadow-md"
                    : "border-slate-200 shadow-sm hover:shadow-md"
                    }`}
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className={`w-full flex justify-between items-center px-5 py-4 transition ${active === i
                      ? "bg-blue-50"
                      : "bg-white hover:bg-slate-50"
                      }`}
                  >
                    <span className="text-[#0B1F3A] font-medium text-left">
                      {item.title}
                    </span>

                    <span
                      className={`text-blue-600 text-lg transform transition-transform duration-300 ${active === i ? "rotate-180" : ""
                        }`}
                    >
                      <GoChevronDown />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${active === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 py-4 text-slate-600 bg-white border-t">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* REPLACE ONLY THIS SECTION */}
      <section className="py-24 bg-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
              What We Do
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-3">
              Strategic Consulting & Compliance
            </h2>

            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              Smart business outsourcing solutions built for modern companies.
            </p>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-[760px] h-[620px]">

              {/* rotating orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 45,
                  ease: "linear"
                }}
                className="absolute left-1/2 top-1/2 w-[360px] h-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300"
              />

              {/* glow ring */}
              <div className="absolute left-1/2 top-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200 blur-sm opacity-60" />

              {/* center sun */}
              <div className="absolute left-1/2 top-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-rose-500 shadow-[0_0_60px_rgba(249,115,22,0.45)] flex items-center justify-center text-center px-6 z-20">
                <div>
                  <p className="text-xs uppercase tracking-widest text-orange-100">
                    Core
                  </p>

                  <h3 className="text-white font-bold text-xl mt-2 leading-tight">
                    Statutory Compliance
                  </h3>
                </div>
              </div>

              {/* pills */}
              {pills.map((item, i) => {
                const radius = 265;
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    transition={{ delay: i * 0.12 }}
                    className="absolute left-1/2 top-1/2 z-30 group"
                    style={{
                      marginLeft: `${x}px`,
                      marginTop: `${y}px`,
                    }}
                  >

                    {/* connector */}
                    <div className="absolute top-1/2 right-full w-[110px] h-[2px] bg-orange-300 -translate-y-1/2" />

                    {/* pill */}
                    <div className="relative -translate-x-1/2 -translate-y-1/2 min-w-[210px] px-6 py-4 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 text-white text-center font-semibold shadow-xl border border-orange-300 hover:shadow-2xl transition-all duration-300 cursor-pointer">

                      {item.title}

                      {/* popup */}
                      <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-56 bg-white text-slate-700 text-sm rounded-xl p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                        {item.desc}
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden grid gap-4 mt-10">
            {pills.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 shadow-md border border-orange-100"
              >
                <h4 className="font-bold text-orange-600">{item.title}</h4>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-full-xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
              Services We Provide
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-2xl border border-slate-200 
                hover:shadow-xl hover:-translate-y-2 transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#0B1F3A] mb-3 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 mb-4">{service.desc}</p>

                  <ul className="text-sm text-slate-500 space-y-1 mb-6">
                    {service.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-full-xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Our Clients</h2>
          <p className="text-blue-500 mt-2 italic">
            Trusted by 350+ businesses
          </p>
        </div>

        <div className="max-w-full-xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl text-center">
              <img src={client.img} className="h-16 mx-auto object-contain grayscale hover:grayscale-0" />
              <p className="mt-4 text-sm text-slate-500">{client.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-full-xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                quote: "TicksNLines LLP simplified our compliance process.",
                name: "Operations Manager",
                company: "Cochin Smart City"
              },
              {
                quote: "Helped us make better financial decisions.",
                name: "Finance Head",
                company: "Lulu Group"
              },
              {
                quote: "Reliable and professional partner.",
                name: "Director",
                company: "Empress Systems"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border shadow-sm">
                <p className="text-slate-600 mb-6">“{t.quote}”</p>
                <p className="font-semibold text-[#0B1F3A]">{t.name}</p>
                <p className="text-sm text-slate-500">{t.company}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">

        {/* subtle background glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-screen-xl mx-auto px-6">

          <div className="bg-[#0B1F3A] rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center shadow-2xl relative z-10">

            {/* LEFT: TEXT */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Simplify Your Business?
              </h2>

              <p className="text-blue-100 mb-6">
                Let our experts handle compliance, accounting, and legal processes
                while you focus on growing your business.
              </p>

              <div className="flex flex-wrap gap-4 mt-6 text-sm text-blue-200 justify-center md:justify-start">
                <span>✔ Expert Guidance</span>
                <span>✔ Fast Processing</span>
                <span>✔ 350+ Clients</span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition mt-8"
              >
                Get Expert Consultation
                <span className="bg-white text-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                  →
                </span>
              </Link>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                alt="Business consulting"
                className="w-full h-[320px] object-cover rounded-2xl shadow-xl"
              />

              {/* overlay effect */}
              <div className="absolute inset-0 bg-blue-900/10 rounded-2xl"></div>
            </div>

          </div>

        </div>
      </section>

      <Foot />
    </>
  )
}

export default Services