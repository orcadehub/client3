import React from "react";
import { motion } from "framer-motion";

// Partners with individual height and width
const partners = [
  { src: "/p1.JPG", url: "https://example1.com", height: "300px", width: "600px" },
  { src: "/orcade.png", url: "https://www.orcadehub.com", height: "500px", width: "600px" },
  { src: "/p2.JPG", url: "https://example2.com", height: "300px", width: "600px" },
  { src: "/p3.JPG", url: "https://example2.com", height: "200px", width: "400px" },
  
];

// Duplicate logos for infinite scroll
const duplicated = [...partners, ...partners];

const Partners = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-[#0A1A4C] text-3xl font-bold">Trusted By</h3>
      </div>

      <motion.div
        className="flex gap-16 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
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
              style={{ height: partner.height, width: partner.width }}
            >
              <img
                src={partner.src}
                alt={`partner-${index}`}
                className="object-contain transition duration-300"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
