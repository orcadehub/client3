import React from "react";
import { motion } from "framer-motion";

// Partners with individual height and width
const partners = [
  { src: "/p1.JPG", url: "https://example1.com" },
  { src: "/orcade.png", url: "https://www.orcadehub.com" },
  { src: "/p2.JPG", url: "https://example2.com" },
  { src: "/p3.JPG", url: "https://example3.com" },
];

// Duplicate logos for seamless scroll
const duplicated = [...partners, ...partners];

const Partners = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-[#0A1A4C] text-3xl font-bold">Trusted By</h3>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-16 animate-scroll-track"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicated.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <div
                className="flex items-center justify-center bg-white"
                style={{ height: "200px", width: "300px" }}
              >
                <img
                  src={partner.src}
                  alt={`partner-${index}`}
                  className="object-contain max-h-[80%] max-w-[80%]"
                />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
