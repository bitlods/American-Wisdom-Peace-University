import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Marquee from "react-fast-marquee";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/gallery/images.json") 
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-700 mb-12"
        >
          Our Gallery
        </motion.h2>

        {/* 🔥 Marquee */}
        <div className="mb-12">
          <Marquee pauseOnHover gradient={false} speed={60}>
            {images.slice(0, 12).map((img, index) => (
              <div
                key={index}
                className="mx-4 cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img
                  src={`/gallery/${img}`}
                  alt={`Marquee ${index}`}
                  loading="lazy"
                  className="h-40 w-64 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
              loading="lazy"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                src={`/gallery/${img}`}
                alt={`Gallery ${index}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={`/gallery/${images[photoIndex]}`}
            nextSrc={`/gallery/${images[(photoIndex + 1) % images.length]}`}
            prevSrc={`/gallery/${images[(photoIndex + images.length - 1) % images.length]}`}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </section>
  );
}
