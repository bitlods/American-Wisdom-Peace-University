import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Award, Star, Medal, X, Minus } from "lucide-react";
import emailjs from "emailjs-com";

export default function Awards() {
  const [showForm, setShowForm] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const awards = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "Honorary Doctorates",
      desc: "Recognizing individuals for exceptional service and cultural contributions.",
    },
    {
      icon: <Star className="w-12 h-12 text-indigo-500" />,
      title: "Cultural Excellence Awards",
      desc: "Honoring talents in arts, singing, dancing, and social activities.",
    },
    {
      icon: <Medal className="w-12 h-12 text-pink-500" />,
      title: "Global Recognition",
      desc: "Awards presented in collaboration with international organizations.",
    },
  ];

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Application submitted successfully!");
      setShowForm(false);
      setIsMinimized(false);
    })
    .catch((error) => {
      alert("Failed to send. Please try again later.");
      console.log(error.text);
    })
    .finally(() => {
      e.target.reset();
    });
};

  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-r from-indigo-50 via-white to-pink-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
          Awards & Recognitions
        </h2>

        {/* Awards grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{award.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.desc}</p>
            </div>
          ))}
        </div>

        {/* Floating form + buttons */}
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
          {/* Reopen button (minimized) */}
          {showForm && isMinimized && (
            <motion.button
              onClick={() => setIsMinimized(false)}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.7)] hover:shadow-[0_0_25px_rgba(255,215,0,0.9)] transition-all relative"
              animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              title="Reopen Application Form"
            >
              <span className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.422c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.422L12 14z"
                  />
                </svg>
                <span className="text-xs">Reopen</span>
              </span>
            </motion.button>
          )}

          {/* Full form */}
          {showForm && !isMinimized && (
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-xl w-80 md:w-96 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center bg-green-600 text-white p-3 rounded-t-xl">
                <h4 className="font-bold">Honorary Doctorate</h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="hover:text-gray-200"
                    title="Minimize"
                  >
                    <Minus size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setIsMinimized(false);
                    }}
                    className="hover:text-red-300"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Form content */}
              <form onSubmit={sendEmail} className="flex flex-col gap-2 p-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="border p-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="citizenship"
                  placeholder="Country of Citizenship"
                  className="border p-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="fathersName"
                  placeholder="Father's Name"
                  className="border p-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="dob"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  placeholder="Date of Birth"
                  className="border p-2 rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="border p-2 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border p-2 rounded-lg"
                  required
                />
                <textarea
                  name="activities"
                  placeholder="Social Work / Awards"
                  className="border p-2 rounded-lg"
                  rows={2}
                  required
                />
                <button
                  type="submit"
                  className="mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          )}

          {/* Open button when form is hidden */}
          {!showForm && (
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.7)] hover:shadow-[0_0_25px_rgba(255,215,0,0.9)] transition-all relative"
              animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              title="Apply for Honorary Doctorate"
            >
              <span className="flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.422c0 3.866-3.582 7-8 7s-8-3.134-8-7a12.083 12.083 0 01.84-4.422L12 14z"
                  />
                </svg>
                <span className="text-xs">Apply</span>
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
